/* Figures for section 23.2 Gibbs Energies and Phase Diagrams. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['23.2'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- Figure 13.5 (with the book's unnumbered G(T) sketch): the lowest line is the stable phase ----------
   The molar Gibbs energy of solid, liquid and gaseous benzene against T, read off Figure 13.5 at 1 bar:
   solid and liquid cross at 279 K and -18.2 kJ/mol, with slopes -0.118 and -0.175 kJ/(mol K); liquid and
   gas cross at 354 K, the gas slope -0.300 kJ/(mol K). Each phase is a straight line of slope -S (the book's
   sketch). The pressure moves the lines: the gas by RT ln(P / 1 bar), the solid and liquid by V(P - 1 bar),
   with the molar volumes 77.3 and 87.4 cm3/mol at the melting point (78.11 g/mol over the densities 1.01
   and 0.894 g/cm3; the liquid's 0.894 is its 0.8765 g/cm3 at 20 C carried down to 5.5 C, the solid's about
   1.0 g/cm3 is a handbook value, approximate). The pressure term is a small shift beside the gas's.
   x: T 240 to 440 K; y: G-bar -50 to 0 kJ/mol, fixed. Still: the pressure slider answers at once. */
(function () {
  const d = sim('sim-gibbs-temperature', 600);
  const R = 8.314e-3, TM0 = 279, GM0 = -18.2, TB0 = 354;
  const SS = 0.118, SL = 0.175, SG = 0.300, VS = 77.3, VL = 87.4;
  const GB0 = GM0 - SL * (TB0 - TM0);
  const mu = {
    s: (T, P) => GM0 - SS * (T - TM0) + VS * (P - 1) * 1e-4,
    l: (T, P) => GM0 - SL * (T - TM0) + VL * (P - 1) * 1e-4,
    g: (T, P) => GB0 - SG * (T - TB0) + R * T * Math.log(P),
  };
  const bisect = (f, a, b) => { let fa = f(a); for (let i = 0; i < 60; i++) { const m = (a + b) / 2, fm = f(m); if (fa * fm <= 0) b = m; else { a = m; fa = fm; } } return (a + b) / 2; };
  const cross = (p, q, P) => bisect((T) => mu[p](T, P) - mu[q](T, P), 100, 800);
  /* the triple point: the pressure where boiling and melting meet */
  const LPT = bisect((lp) => cross('l', 'g', 10 ** lp) - cross('s', 'l', 10 ** lp), -4, 1);
  const fmtP = (P) => P >= 1 ? `${fmt(P, P < 10 ? 2 : 1)} bar` : `${fmt(P * 750.062, P * 750.062 < 10 ? 2 : 0)} Torr`;
  const LP = ctl(d.controls, { label: '\\kP', cls: 'pressure', min: -2, max: 1, step: 0.01, value: 0, unit: '',
    fmt: (lg) => fmtP(10 ** lg), specials: [{ at: 0, label: '1 bar' }, { at: LPT, label: 'triple point' }] });
  const hits = [];
  F.hover(d.stage, () => hits);
  const NAME = { s: 'solid', l: 'liquid', g: 'gas' };
  const COL = () => ({ s: F.cat(0), l: F.cat(1), g: F.cat(2) });
  function draw() {
    const { ctx, W } = begin(d.c);
    const P = 10 ** LP.v, col = COL();
    const below = LP.v < LPT - 1e-9;
    const tm = cross('s', 'l', P), tb = cross('l', 'g', P), ts = cross('s', 'g', P);
    const P_ = fmtP(P);
    topline(ctx, below ? `At ${P_} solid benzene turns straight to gas at ${fmt(ts, 0)} K.`
      : `At ${P_} benzene melts at ${fmt(tm, 1)} K and boils at ${fmt(tb, 0)} K.`);
    const box = { l: 140, r: W - 70, t: 110, b: 520 };
    const ax = axes(ctx, box, [240, 440], [-50, 0], { nx: 5, ny: 5, xl: 'temperature T (K)', yl: 'molar Gibbs energy Ḡ (kJ/mol)', xc: C('temperature'), yc: C('energy') });
    /* where each phase is the lowest */
    const steps = below ? [['s', 240, ts], ['g', ts, 440]] : [['s', 240, tm], ['l', tm, tb], ['g', tb, 440]];
    /* every line thin and dashed, the stable stretch of each heavy */
    ['s', 'l', 'g'].forEach((k) => plot(ctx, ax, (T) => mu[k](T, P), alpha(col[k], 0.55), { w: 2.5, dash: [10, 10] }));
    steps.forEach(([k, a, b]) => plot(ctx, ax, (T) => mu[k](T, P), col[k], { w: 6, x: [a, b] }));
    /* the transitions */
    const marks = below ? [[ts, 'sublimation point']] : [[tm, 'melting point'], [tb, 'boiling point']];
    marks.forEach(([T, name]) => {
      const k = name === 'melting point' ? 'l' : 'g', y = mu[k](T, P);
      line(ctx, ax.X(T), ax.Y(y), ax.X(T), box.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
      dot(ctx, ax.X(T), ax.Y(y), PAL.ink, true, 8);
    });
    hits.length = 0;
    marks.forEach(([T, name]) => { const y = mu[name === 'melting point' ? 'l' : 'g'](T, P); hits.push({ x: ax.X(T), y: ax.Y(y), r: 14, name: `${name}, ${fmt(T, 1)} K` }); });
    /* names on the stable stretches */
    const lab = (k, T, dy) => { const y = mu[k](T, P); text(ctx, NAME[k], ax.X(T), ax.Y(y) + dy, col[k], { size: 22, weight: 600, align: 'center' }); hits.push({ x: ax.X(T), y: ax.Y(y), r: 18, name: `${NAME[k]}, slope ${fmt(-1000 * { s: SS, l: SL, g: SG }[k], 0)} J/(mol K)` }); };
    lab('s', 255, -26);
    if (!below) lab('l', Math.min(tb - 12, (tm + tb) / 2), 30);
    lab('g', Math.min(430, (below ? ts : tb) + 40), 30);
    const k2 = below ? 's' : 'l', Tx = below ? ts : tb, Gx = mu[k2](Tx, P);
    const sup = below ? '\\text{(solid)}' : '\\text{(liquid)}';
    tex(d.readout, `\\kSent = -\\dfrac{\\partial \\kG}{\\partial \\kT} \\\\ \\kSliquid = ${fmt(SL * 1000, 0)}\\ \\text{J/(mol K)} > \\kSsolid = ${fmt(SS * 1000, 0)}\\ \\text{J/(mol K)} \\\\ \\kGbar^{${sup}}(${fmt(Tx, 1)}\\ \\text{K}) = \\kGbar^{\\text{(gas)}}(${fmt(Tx, 1)}\\ \\text{K}) = ${fmt(Gx, 1)}\\ \\text{kJ/mol}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
