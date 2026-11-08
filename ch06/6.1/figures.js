/* Figures for section 6.1 The Schrodinger Equation for the Hydrogen Atom Can Be Solved Exactly. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.1'] = function (root, F) {
const { tex, C, PAL, alpha, register, begin, line, arrow, dot, text, topline, axes, plot, shade, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- constants: masses in kg, the Bohr radius in pm, energies in eV ---------- */
const ME = 9.1093837e-31, MP = 1.67262192e-27, A0 = 52.917721, EH = 27.211386, RY = EH / 2;

/* =====================================================================
   FIGURE 6.1.1: the proton and electron (a) and the reduced particle (b).
   A faithful copy (archetype 7), still, no controls: two panels side by
   side. (a) the proton and the electron a Bohr radius apart, the center of
   mass marked on the proton, where it really is (0.0288 pm off it, four
   millionths of the drawn distance; the readout gives the true numbers).
   (b) the one particle of reduced mass mu at the same distance r from the
   center of mass. Flat: the book's 3D axes are a perspective for a relation
   along one line. Particles in the convention colours (F.el); r in the
   length hue; mu's name in the mass hue.
===================================================================== */
(function () {
  const d = sim('sim-reduced', 460);
  let hits = []; F.hover(d.stage, () => hits);
  const mu = ME * MP / (ME + MP), rp = ME / (ME + MP) * A0, re = MP / (ME + MP) * A0;
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const cl = C('length'), cm = C('mass'), y = 250;
    /* panel (a) */
    const pa = 150, ea = 600;
    text(ctx, '(a)', 70, 90, PAL.muted, { size: 22 });
    arrow(ctx, pa + 34, y, ea - 18, y, cl, 4);
    text(ctx, 'r', (pa + ea) / 2, y - 26, cl, { size: 24, weight: 600, align: 'center' });
    dot(ctx, pa, y, F.el('p+'), true, 30);
    text(ctx, 'p⁺', pa, y + 62, PAL.ink, { size: 22, align: 'center' });
    dot(ctx, ea, y, F.el('e-'), true, 11);
    text(ctx, 'e⁻', ea, y + 44, PAL.ink, { size: 22, align: 'center' });
    line(ctx, pa, y - 52, pa, y - 38, PAL.ink, 3);
    text(ctx, 'center of mass', pa, y - 70, PAL.muted, { size: 17, align: 'center' });
    hits.push({ x: pa, y, r: 32, name: 'the proton, 1836 times the mass of the electron; the center of mass lies 0.0288 pm from its center' });
    hits.push({ x: ea, y, r: 16, name: 'the electron' });
    /* panel (b) */
    const cb = 800, mb = 1250;
    text(ctx, '(b)', 720, 90, PAL.muted, { size: 22 });
    line(ctx, cb - 40, y, cb + 40, y, alpha(PAL.ink, 0.4), 2);
    line(ctx, cb, y - 40, cb, y + 40, alpha(PAL.ink, 0.4), 2);
    arrow(ctx, cb + 8, y, mb - 18, y, cl, 4);
    text(ctx, 'r', (cb + mb) / 2, y - 26, cl, { size: 24, weight: 600, align: 'center' });
    dot(ctx, cb, y, PAL.ink, true, 6);
    text(ctx, 'center of mass', cb, y - 70, PAL.muted, { size: 17, align: 'center' });
    dot(ctx, mb, y, alpha(cm, 0.85), true, 12);
    text(ctx, 'μ', mb, y + 46, cm, { size: 24, weight: 600, align: 'center' });
    hits.push({ x: cb, y, r: 14, name: 'the center of mass, the origin of the reduced particle' });
    hits.push({ x: mb, y, r: 18, name: 'the reduced particle, of mass μ = 0.99946 mₑ' });
    topline(ctx, 'The reduced particle sits at the electron\'s distance $\\kr$ from the center of mass.');
    tex(d.readout, `\\kmu = \\dfrac{\\kme m_p}{\\kme + m_p} = ${fmt(mu / ME, 5)}\\,\\kme = ${fmt(mu * 1e31, 3)} \\times 10^{-31}\\ \\text{kg} \\\\ r_p = \\dfrac{\\kme}{\\kme + m_p}\\,\\kr = ${fmt(rp, 4)}\\ \\text{pm} \\\\ r_e = \\dfrac{m_p}{\\kme + m_p}\\,\\kr = ${fmt(re, 2)}\\ \\text{pm} \\text{ at } \\kr = \\kao = ${fmt(A0, 2)}\\ \\text{pm}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the effective radial potential, the bracket of (6.1.13) less E:
   V_eff(r) = -e^2/4 pi eps0 r + l(l + 1) hbar^2 / 2 mu r^2, with mu = m_e
   as the chapter assumes, so in eV with r in a0:
   V_eff = -27.21/rho + 13.61 l(l + 1)/rho^2. Still: a stationary state has
   no time in it. Choices l (0 to 3) and n (l + 1 to 4). The energy
   E_n = -13.6 eV/n^2 is drawn across; where it lies below V_eff (inside the
   inner turning point, outside the outer) is shaded as out of reach.
   Turning points: rho^2 - 2 n^2 rho + n^2 l(l + 1) = 0, so
   rho = n^2 -/+ n sqrt(n^2 - l(l + 1)). Axes fixed: r 0 to 30 a0 (n = 4,
   l = 0 reaches 32; it runs off the frame as an unbounded tail does),
   energy -15 to +5 eV (E_1 = -13.6 stays in frame). The Coulomb term alone
   is drawn thin and dashed as the part beside the whole.
===================================================================== */
(function () {
  const d = sim('sim-veff', 600);
  const Lc = F.choice(d.controls, { label: 'l', key: 'l', options: [0, 1, 2, 3].map((k) => ({ value: String(k), label: String(k) })), value: '1', aria: 'the angular momentum quantum number l', onInput: () => fixN() });
  const nOpts = (l) => [1, 2, 3, 4].filter((n) => n > l).map((n) => ({ value: String(n), label: String(n) }));
  const Nc = F.choice(d.controls, { label: 'n', key: 'n', options: nOpts(1), value: '2', aria: 'the principal quantum number n' });
  function fixN() { const l = +Lc.value; Nc.options(nOpts(l), String(Math.max(+Nc.value, l + 1))); }
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    hits = [];
    const l = +Lc.value, n = Math.max(+Nc.value, l + 1), L = l * (l + 1), E = -RY / (n * n);
    const ce = C('energy'), cl = C('length');
    const veff = (r) => -EH / r + RY * L / (r * r), coul = (r) => -EH / r;
    const disc = Math.sqrt(n * n - L), rin = n * n - n * disc, rout = n * n + n * disc;
    const box = { l: 140, r: W - 70, t: 120, b: 530 };
    const ax = axes(ctx, box, [0, 30], [-15, 5], { nx: 6, ny: 4, xl: 'distance r (a₀)', yl: 'energy (eV)', xc: cl, yc: ce });
    line(ctx, box.l, ax.Y(0), box.r, ax.Y(0), alpha(PAL.ink, 0.3), 2);
    /* where the electron cannot be at this energy */
    if (rin > 0.05) shade(ctx, ax, () => 5, () => -15, 0.001, rin, PAL.muted, { alpha: 0.14 });
    if (rout < 30) shade(ctx, ax, () => 5, () => -15, rout, 30, PAL.muted, { alpha: 0.14 });
    if (L > 0) plot(ctx, ax, coul, alpha(PAL.ink, 0.45), { w: 2, dash: [10, 10] });
    plot(ctx, ax, veff, ce, { w: 5 });
    /* the level: solid where it is reachable, faint where it is not */
    line(ctx, ax.X(0), ax.Y(E), ax.X(Math.min(30, rout)), ax.Y(E), alpha(ce, 0.3), 3, [10, 10]);
    line(ctx, ax.X(rin), ax.Y(E), ax.X(Math.min(30, rout)), ax.Y(E), ce, 4);
    text(ctx, `E${'₁₂₃₄'[n - 1]}`, box.r - 8, ax.Y(E) - 16, ce, { size: 22, weight: 600, align: 'right' });
    if (rin > 0.05) {
      line(ctx, ax.X(rin), ax.Y(E), ax.X(rin), box.b, alpha(cl, 0.8), 3, [4, 8]);
      dot(ctx, ax.X(rin), ax.Y(E), ce, true, 8);
      hits.push({ x: ax.X(rin), y: ax.Y(E), r: 16, name: `the inner turning point, r = ${fmt(rin, 2)} a₀` });
    }
    if (rout < 30) {
      line(ctx, ax.X(rout), ax.Y(E), ax.X(rout), box.b, alpha(cl, 0.8), 3, [4, 8]);
      dot(ctx, ax.X(rout), ax.Y(E), ce, true, 8);
      hits.push({ x: ax.X(rout), y: ax.Y(E), r: 16, name: `the outer turning point, r = ${fmt(rout, 2)} a₀` });
    }
    F.legend(ctx, ax, [
      { s: 'Coulomb term plus angular term', color: ce, w: 5, f: veff },
      ...(L > 0 ? [{ s: 'Coulomb term alone', color: alpha(PAL.ink, 0.45), w: 2, dash: [10, 10], f: coul }] : []),
      { s: 'out of reach at this energy', kind: 'swatch', color: alpha(PAL.muted, 0.3) },
    ], { corner: 'br' });
    topline(ctx, L > 0
      ? `With $l = ${l}$ the electron at $\\kE_{${n}}$ stays between $${fmt(rin, 2)}\\,\\kao$ and $${fmt(rout, 2)}\\,\\kao$ from the nucleus.`
      : `With $l = 0$ nothing holds the electron away from the nucleus.`);
    const ang = L > 0 ? `+ \\dfrac{${L}(13.6\\ \\text{eV})\\kao^2}{\\kr^2}` : '';
    tex(d.readout, `\\kV(\\kr) + \\dfrac{l(l + 1)\\hbar^2}{2\\kmu\\kr^2} = -\\dfrac{(27.2\\ \\text{eV})\\kao}{\\kr} ${ang} \\\\ \\kE_{${n}} = -\\dfrac{13.6\\ \\text{eV}}{${n * n}} = ${fmt(E, 2)}\\ \\text{eV} \\\\ \\kV(\\kr) + \\dfrac{l(l + 1)\\hbar^2}{2\\kmu\\kr^2} = \\kE_{${n}} \\text{ at } \\kr = ${L > 0 ? `${fmt(rin, 2)}\\,\\kao, ` : ''}${fmt(rout, 2)}\\,\\kao`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
