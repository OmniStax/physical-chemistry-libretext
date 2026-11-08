/* Figures for section 9.3 The Overlap Integral. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.3'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, shade, fmt } = F;
const A0_PM = 52.918;

/* ---------- Figure 9.3.1 + 9.3.2: two 1s orbitals, their product and the overlap ----------
   Atomic units. 1s = e^(−r)/√π, the protons at ±R/2 on the axis. Top: 1s_A, 1s_B along the axis and their product
   shaded (x −6 to 6 a₀; y 0 to 0.6, the 1s orbital's peak is 0.564). Bottom: S(R) of (9.3.9) over R = 0 to 6 a₀ with
   the probe. The slider is R; the book's case of Example 9.3.1, R = 2 a₀, is the default. Still: nothing has a time
   in it. The product along one line is not the integral; the caption says so. */
(function () {
  const d = F.sim(root, 'sim-overlap', 700);
  const R = ctl(d.controls, { label: '\\kR', cls: 'length', min: 0, max: 6, step: 0.02, value: 2, fmt: (v) => `${fmt(v, 2)} a₀ = ${fmt(v * A0_PM, 0)} pm`, detents: [1, 2, 4], snap: true, aria: 'the distance between the protons, in Bohr radii' });
  const N = 1 / Math.sqrt(Math.PI);
  const S = (r) => Math.exp(-r) * (1 + r + r * r / 3);
  const hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const r = R.v, cw = C('wavefunction'), cl = C('length');
    const fa = (x) => N * Math.exp(-Math.abs(x + r / 2)), fb = (x) => N * Math.exp(-Math.abs(x - r / 2));
    const top = { l: 150, r: 1320, t: 110, b: 330 };
    const ax = axes(ctx, top, [-6, 6], [0, 0.6], { nx: 6, ny: 3, xl: 'position along the axis (a₀)', yl: '1s (a₀^{-3/2})', xc: cl, yc: cw, fx: (v) => fmt(v, 0) });
    shade(ctx, ax, (x) => fa(x) * fb(x) / N, 0, -6, 6, cw, { alpha: 0.35 });
    plot(ctx, ax, fa, cw, { w: 4 });
    plot(ctx, ax, fb, cw, { w: 4, dash: [10, 10] });
    const XA = ax.X(-r / 2), XB = ax.X(r / 2);
    dot(ctx, XA, top.b, F.el('p+'), true, 9); dot(ctx, XB, top.b, F.el('p+'), true, 9);
    F.legend(ctx, ax, [{ s: '1s_A', color: cw, w: 4 }, { s: '1s_B', color: cw, w: 4, dash: [10, 10] }, { s: 'their product (× √π)', kind: 'swatch', color: alpha(cw, 0.35) }], { corner: 'tr' });
    hits.length = 0;
    hits.push({ x: XA, y: top.b, r: 14, name: 'proton A' }, { x: XB, y: top.b, r: 14, name: 'proton B' });
    hits.push({ x: ax.X(0), y: ax.Y(fa(0) * fb(0) / N), r: 16, name: `the product at the midpoint, ${fmt(fa(0) * fb(0), 3)}` });
    /* S(R) */
    const bot = { l: 150, r: 1320, t: 420, b: 630 };
    const bx = axes(ctx, bot, [0, 6], [0, 1], { nx: 6, ny: 4, xl: 'internuclear distance R (a₀)', yl: 'overlap S', xc: cl, yc: PAL.ink, fx: (v) => fmt(v, 0) });
    plot(ctx, bx, S, PAL.ink, { w: 5 });
    line(ctx, bx.X(r), bot.t, bx.X(r), bot.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
    dot(ctx, bx.X(r), bx.Y(S(r)), PAL.ink, true, 10);
    hits.push({ x: bx.X(r), y: bx.Y(S(r)), r: 16, name: `S = ${fmt(S(r), 3)} at R = ${fmt(r, 2)} a₀` });
    const s = S(r), cp = 1 / Math.sqrt(2 * (1 + s)), cm = s < 0.9999 ? 1 / Math.sqrt(2 * (1 - s)) : Infinity;
    topline(ctx, r < 0.01 ? 'At $\\kR = 0$ the two orbitals coincide and $S = 1$.'
      : `At $\\kR = ${fmt(r, 2)}\\,a_0$ (${fmt(r * A0_PM, 0)} pm) the orbitals overlap with $S = ${fmt(s, 3)}$.`);
    tex(d.readout, `S(\\kR) = e^{-\\kR/a_0}\\left(1 + \\dfrac{\\kR}{a_0} + \\dfrac{\\kR^2}{3a_0^2}\\right) = ${fmt(s, 3)} \\\\ C_+ = \\dfrac{1}{\\sqrt{2(1 + S)}} = ${fmt(cp, 3)} \\\\ C_- = \\dfrac{1}{\\sqrt{2(1 - S)}} = ${Number.isFinite(cm) ? fmt(cm, 3) : '\\infty'}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
