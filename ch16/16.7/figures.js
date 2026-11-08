/* Figures for section 16.7 Van der Waals Constants in Terms of Molecular Parameters. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['16.7'] = function (root, F) {
const { el, tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, shade, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
/* a readout line and, where the figure shows one more fact, a small second line set through the same macros */
function readout(host, main, small) { tex(host, main); if (small) { const s = el('small', null, small); host.appendChild(s); F.renderMath(s); } }

/* ---------- Sim: B₂ from the hard sphere with an r⁻⁶ attraction, (16.7.1) ----------
   σ = 3.40 Å, argon's from 16.6; C₆ = 4εσ⁶ with argon's ε = 0.997 kJ/mol is 1.02 × 10⁻⁷⁷ J m⁶.
   y = C₆/(k_B T σ⁶). Per mole, B₂ = −2πN₀ ∫ [e^{−u/k_BT} − 1] r² dr; the core gives b = (2/3)πN₀σ³ = 49.6 cm³/mol,
   the tail −3b ∫₀¹ (e^{y s⁶} − 1) s⁻⁴ ds = −3b Σ yⁿ/(n!(6n − 3)), whose first term −by is the series (16.7.2).
   Top: the integrand [e^{−u/k_BT} − 1] r² against r, 0 to 10 Å, y −15 to 45 Å² (the tail's peak at σ passes 45
   only below 300 K, the slider's floor at argon's C₆). Bottom: B₂ against T, 300 to 2000 K, −150 to 60 cm³/mol;
   the full integral solid, the series dashed, b dotted. Still: no time in it. */
(function () {
  const d = sim('sim-b2-potential', 900);
  const T = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: 300, max: 2000, step: 10, value: 600, unit: 'K', dec: 0, aria: 'the temperature of the gas' });
  const C6 = ctl(d.controls, { label: 'C_6', cls: '', min: 0, max: 2, step: 0.01, value: 1.02, unit: '× 10⁻⁷⁷ J m⁶', dec: 2, detents: [1.02], snap: true, aria: 'the strength of the r⁻⁶ attraction' });
  const SIG = 3.40, KB = 1.380649e-23, N0 = 6.02214e23;
  const b = (2 / 3) * Math.PI * N0 * Math.pow(SIG * 1e-8, 3);           /* cm³/mol */
  const yOf = (t) => C6.v * 1e-77 / (KB * t * Math.pow(SIG * 1e-10, 6));
  const tailSum = (y) => { let s = 0, term = 1; for (let n = 1; n < 60; n++) { term *= y / n; s += term / (6 * n - 3); } return s; };
  const exact = (t) => b * (1 - 3 * tailSum(yOf(t)));
  const series = (t) => b * (1 - yOf(t));
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const t = T.v, y = yOf(t), cm = C('molar-volume'), cl = C('length');
    /* the integrand */
    const top = { l: 170, r: 1300, t: 110, b: 380 };
    const ax1 = axes(ctx, top, [0, 10], [-15, 45], { nx: 5, ny: 4, xl: 'separation r (Å)', yl: '[e^{−u/kT} − 1] r² (Å²)', xc: cl, yc: PAL.ink });
    const g = (r) => (r <= SIG ? -r * r : (Math.exp(y * Math.pow(SIG / r, 6)) - 1) * r * r);
    line(ctx, top.l, ax1.Y(0), top.r, ax1.Y(0), alpha(PAL.ink, 0.4), 2);
    shade(ctx, ax1, g, 0, 0, SIG, cm, { alpha: 0.35 });
    shade(ctx, ax1, g, 0, SIG, 10, cm, { alpha: 0.18 });
    plot(ctx, ax1, [{ f: g, x: [0, SIG], ends: '-]' }, { f: g, x: [SIG, 10], ends: '(-' }], cm, { w: 4 });
    text(ctx, 'hard core: gives b', ax1.X(0.2), ax1.Y(-11), cm, { size: 20, base: 'middle' });
    if (y > 0.02) text(ctx, 'attractive tail: gives −a/RT', ax1.X(SIG) + 30, ax1.Y(Math.min(40, g(SIG * 1.02) + 8)), cm, { size: 20 });
    text(ctx, 'σ', ax1.X(SIG), top.b + 24, cl, { size: 22, align: 'center' });
    hits.push({ x: ax1.X(SIG / 2), y: ax1.Y(-6), r: 40, name: `the hard core, r < σ = ${fmt(SIG, 2)} Å: the integrand is −r²` });
    /* B₂ against T */
    const bot = { l: 170, r: 1300, t: 490, b: 820 };
    const ax2 = axes(ctx, bot, [0, 2000], [-150, 60], { nx: 4, ny: 7, xl: 'temperature T (K)', yl: 'B₂ (cm³/mol)', xc: C('temperature'), yc: cm });
    line(ctx, bot.l, ax2.Y(0), bot.r, ax2.Y(0), alpha(PAL.ink, 0.4), 2);
    plot(ctx, ax2, () => b, alpha(PAL.ink, 0.55), { w: 3, dash: [3, 7], x: [300, 2000] });
    plot(ctx, ax2, series, cm, { w: 3, dash: [10, 10], x: [300, 2000] });
    plot(ctx, ax2, exact, cm, { w: 5, x: [300, 2000] });
    const be = exact(t), bs = +b.toFixed(1) * (1 - +y.toFixed(2));
    line(ctx, ax2.X(t), bot.b, ax2.X(t), Math.max(bot.t, Math.min(ax2.Y(be), ax2.Y(bs))), alpha(C('temperature'), 0.8), 3, [4, 8]);
    const pe = F.pinned(ctx, bot, ax2.X, ax2.Y, t, be, cm), ps = F.pinned(ctx, bot, ax2.X, ax2.Y, t, bs, cm);
    dot(ctx, ps.x, ps.y, cm, false, 9);
    hits.push({ x: pe.x, y: pe.y, r: 14, name: `the full integral at ${fmt(t, 0)} K: B₂ = ${fmt(be, 1)} cm³/mol` });
    hits.push({ x: ps.x, y: ps.y, r: 14, name: `the series (16.7.2) at ${fmt(t, 0)} K: B₂ = ${fmt(bs, 1)} cm³/mol` });
    F.legend(ctx, ax2, [{ s: 'full integral', color: cm, w: 5 }, { s: 'series (16.7.2)', color: cm, w: 3, dash: [10, 10] }, { s: 'b, hard spheres alone', color: alpha(PAL.ink, 0.55), w: 3, dash: [3, 7] }], { corner: 'br' });
    topline(ctx, `At $\\kT = ${fmt(t, 0)}$ K, $C_6/k_B\\kT\\ksigmahs^6 = ${fmt(y, 2)}$: the series gives $\\kBtwo = ${fmt(bs, 1)}$ cm³/mol and the full integral ${fmt(be, 1)} cm³/mol.`);
    const bb = +b.toFixed(1), yy = +y.toFixed(2);
    readout(d.readout,
      `\\kBtwo(\\kT) = \\dfrac{2}{3}\\pi N_0\\ksigmahs^3\\left[1 - \\dfrac{C_6}{k_B\\kT\\ksigmahs^6}\\right] \\\\ \\kBtwo = (${fmt(bb, 1)}\\ \\text{cm}^3\\text{/mol})(1 - ${fmt(yy, 2)}) = ${fmt(bb * (1 - yy), 1)}\\ \\text{cm}^3\\text{/mol}`,
      `The full integral gives $\\kBtwo = ${fmt(be, 1)}$ cm³/mol.`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
