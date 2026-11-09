/* Figures for section 24.5 Most Solutions are Not Ideal. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['24.5'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- Figure 24.5.1 + 24.6.1: Henry's line and Raoult's line ----------
   The partial pressure of component 1 above a non-ideal mixture, modelled as P1 = x1 P*1 exp(a x2^2) with
   x2 = 1 - x1 (the regular-solution form the chapter uses for every diagram; a = 0 is Raoult). P*1 = 1.00 bar
   is illustrative: the book's figures print no numbers. The curve's slope at x1 = 0 is P*1 e^a, so Henry's
   line P1 = K_H x1 has K_H = P*1 e^a and meets x1 = 1 at K_H, away from P*1. Opens at a = 1.2, the shape of
   the book's 24.5.1 with Henry above and Raoult below (24.6.1). The point: the curve leaves x1 = 0 along
   Henry's line and arrives at x1 = 1 along Raoult's. */
(function () {
  const PSTAR = 1.0;
  const d = sim('sim-henry-raoult', 600);
  const A = ctl(d.controls, { label: 'deviation', cls: '', min: -1.5, max: 1.5, step: 0.05, value: 1.2, dec: 2, detents: [0], snap: true });
  const X = ctl(d.controls, { label: '\\kxone', cls: '', min: 0, max: 1, step: 0.01, value: 0.1, dec: 2 });
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    const a = A.v, x = X.v, kh = PSTAR * Math.exp(a);
    const P = (t) => t * PSTAR * Math.exp(a * (1 - t) * (1 - t));
    const ratio = kh / PSTAR;
    topline(ctx, Math.abs(a) < 0.025
      ? `With no deviation the curve is Raoult's line itself, and $\\kKH = \\kPstarone = ${fmt(PSTAR, 2)}$ bar.`
      : `$\\kKH = ${fmt(kh, 2)}$ bar, ${fmt(ratio, 2)} times $\\kPstarone$: the curve leaves $\\kxone = 0$ along Henry's line and reaches $\\kxone = 1$ along Raoult's.`);
    const box = { l: 140, r: W - 200, t: 120, b: 500 };
    const ax = axes(ctx, box, [0, 1], [0, 5], { nx: 5, ny: 5, xl: 'mole fraction of component 1, x₁', yl: 'partial pressure P₁ (bar)', yc: C('pressure') });
    /* the two limiting laws, thin; the measured curve heavy */
    plot(ctx, ax, (t) => PSTAR * t, alpha(PAL.ink, 0.55), { w: 3 });
    plot(ctx, ax, (t) => kh * t, alpha(PAL.ink, 0.55), { w: 3, dash: [10, 10] });
    plot(ctx, ax, P, C('pressure'), { w: 5 });
    /* where each line meets the pure compound, x1 = 1 */
    dot(ctx, ax.X(1), ax.Y(PSTAR), PAL.ink, false, 10);
    dot(ctx, ax.X(1), ax.Y(kh), PAL.ink, false, 10);
    const close = Math.abs(ax.Y(kh) - ax.Y(PSTAR)) < 34, up = kh >= PSTAR;
    F.label(ctx, `P*₁ = ${fmt(PSTAR, 2)} bar`, ax.X(1), ax.Y(PSTAR), { side: 'right', size: 20, color: C('pressure'), gap: 18 });
    if (!close) F.label(ctx, `K_H = ${fmt(kh, 2)} bar`, ax.X(1), ax.Y(kh), { side: 'right', size: 20, color: C('pressure'), gap: 18 });
    /* the two line names, near x1 = 0.55 where the lines are well apart, else left out (hover names carry them) */
    if (!close) {
      const xr = 0.55, yR = PSTAR * xr, yH = kh * xr;
      text(ctx, "Raoult's law", ax.X(xr) + (up ? 14 : -14), ax.Y(yR) + (up ? 26 : -22), PAL.muted, { size: 20, weight: 600, align: up ? 'left' : 'right' });
      if (yH < 4.7) text(ctx, "Henry's law", ax.X(xr) - 14, ax.Y(yH) - 22, PAL.muted, { size: 20, weight: 600, align: 'right' });
      else text(ctx, "Henry's law", ax.X(4.6 / kh) - 14, ax.Y(4.6), PAL.muted, { size: 20, weight: 600, align: 'right' });
    }
    /* the reader's composition */
    const p = P(x);
    line(ctx, ax.X(x), ax.Y(p), ax.X(x), box.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
    dot(ctx, ax.X(x), ax.Y(p), C('pressure'), true, 9);
    hits.length = 0;
    hits.push({ x: ax.X(x), y: ax.Y(p), r: 16, name: `the solution at x₁ = ${fmt(x, 2)}: P₁ = ${fmt(p, 3)} bar` });
    hits.push({ x: ax.X(0.3), y: ax.Y(PSTAR * 0.3), r: 14, name: "Raoult's law, P₁ = P*₁x₁" });
    if (kh * 0.3 < 5) hits.push({ x: ax.X(0.3), y: ax.Y(kh * 0.3), r: 14, name: "Henry's law, P₁ = K_H x₁" });
    hits.push({ x: ax.X(1), y: ax.Y(kh), r: 14, name: `Henry's line meets the pure compound at K_H = ${fmt(kh, 2)} bar` });
    hits.push({ x: ax.X(1), y: ax.Y(PSTAR), r: 14, name: `the pure compound's vapor pressure, P*₁ = ${fmt(PSTAR, 2)} bar` });
    tex(d.readout, `\\kPone = ${fmt(p, 3)}\\ \\text{bar} \\\\ \\kPstarone\\kxone = (${fmt(PSTAR, 2)}\\ \\text{bar})(${fmt(x, 2)}) = ${fmt(PSTAR * x, 3)}\\ \\text{bar} \\\\ \\kKH\\kxone = (${fmt(kh, 2)}\\ \\text{bar})(${fmt(x, 2)}) = ${fmt(kh * x, 3)}\\ \\text{bar}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
