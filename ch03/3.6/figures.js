/* Figures for section 3.6 Wavefunctions Must Be Normalized. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.6'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, shade, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* a probability for a sentence: three decimals, or two significant figures in powers of ten when tiny */
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const fp = (p) => {
  if (p >= 0.001) return fmt(p, p >= 0.1 ? 3 : 4);
  if (p < 1e-12) return '0';
  const e = Math.floor(Math.log10(p)), m = p / Math.pow(10, e);
  return `${fmt(m, 1)} × 10${String(e).split('').map((c) => SUP[c]).join('')}`;
};
const ftex = (p) => {
  if (p >= 0.001) return fmt(p, p >= 0.1 ? 3 : 4);
  if (p < 1e-12) return '0';
  const e = Math.floor(Math.log10(p)), m = p / Math.pow(10, e);
  return `${fmt(m, 1)}\\times10^{${e}}`;
};

/* ---------- Figure 3.6.1 + 3.6.2 + 3.6.3: probability as an area ----------
   x: position in units of the box length L, 0 to 1; y: probability density in 1/L, 0 to 4
   (the book's curve, normalized, peaks at about 3.2; the box states at 2).
   The densities: the book's arbitrary |psi|^2 (Figure 3.6.1), redrawn as the square of a
   sum of four bumps that crosses zero once (the book's point B), normalized on 0..L; and the
   box states |psi_n|^2 = (2/L) sin^2(n pi x / L) for n = 1, 2, 3 (Figures 3.6.2 and 3.6.3).
   Two sliders: the interval's center x0 and width. The exact area is shaded; the dashed rectangle
   is |psi(x0)|^2 times the width, the estimate of Example 3.6.1. Specials: width L/100 (the
   example), L/3 (the middle third) and L/2 (a half); center L/4 and L/2. Opens on the book's
   curve with a thin strip on its rising flank, as Figure 3.6.1 draws it. Still: no time. */
(function () {
  const d = sim('sim-probability-area', 620);
  const D = F.select(d.controls, { label: '\\text{density}', options: [{ value: 'any', label: 'Figure 3.6.1' }, { value: '1', label: 'n = 1' }, { value: '2', label: 'n = 2' }, { value: '3', label: 'n = 3' }], value: 'any', aria: 'the probability density' });
  const X0 = ctl(d.controls, { label: 'x_0', cls: 'length', key: 'center', min: 0, max: 1, step: 0.005, value: 0.32, unit: 'L', dec: 3, aria: 'the center of the interval',
    specials: [{ at: 0.25, label: 'center of the left half' }, { at: 0.5, label: 'center of the box' }] });
  const DX = ctl(d.controls, { label: '\\Delta \\kx', cls: 'length', key: 'width', min: 0.005, max: 1, step: 0.005, value: 0.04, unit: 'L', dec: 3, aria: 'the width of the interval',
    specials: [{ at: 0.01, label: 'L/100, Example 3.6.1' }, { at: 1 / 3, label: 'a third of the box' }, { at: 0.5, label: 'half the box' }] });
  /* the book's curve: psi a sum of bumps, the density its square, normalized numerically */
  const g = (x, c, w) => Math.exp(-((x - c) * (x - c)) / (2 * w * w));
  const raw = (x) => { const p = 0.62 * g(x, 0.15, 0.07) + 1.0 * g(x, 0.43, 0.1) + 0.5 * g(x, 0.62, 0.04) - 0.6 * g(x, 0.82, 0.07); return p * p; };
  const simpson = (f, a, b, n) => { n = n || 400; const h = (b - a) / n; let s = f(a) + f(b); for (let i = 1; i < n; i++) s += f(a + i * h) * (i % 2 ? 4 : 2); return s * h / 3; };
  const NB = simpson(raw, 0, 1, 2000);
  const book = (x) => raw(x) / NB;
  const box = (n) => (x) => 2 * Math.pow(Math.sin(n * Math.PI * x), 2);
  const exactBox = (n, a, b) => (b - a) - (Math.sin(2 * n * Math.PI * b) - Math.sin(2 * n * Math.PI * a)) / (2 * n * Math.PI);
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const which = D.value, rho = which === 'any' ? book : box(+which);
    const x0 = X0.v, w = DX.v, a = Math.max(0, x0 - w / 2), b = Math.min(1, x0 + w / 2);
    const P = which === 'any' ? simpson(rho, a, b, 400) : exactBox(+which, a, b);
    const h0 = rho(x0), est = h0 * (b - a);
    const cp = C('probability-density'), cl = C('length');
    const frac = (v) => (v === 0 ? '0' : v === 1 ? 'L' : v === 0.5 ? 'L/2' : v === 0.25 ? 'L/4' : '3L/4');
    const bx = { l: 150, r: 1300, t: 150, b: 530 };
    const ax = axes(ctx, bx, [0, 1], [0, 4], { nx: 4, ny: 4, fx: frac, xl: 'position x', yl: 'probability density |ψ|² (1/L)', xc: cl, yc: cp });
    shade(ctx, ax, rho, 0, a, b, cp, { alpha: 0.4 });
    plot(ctx, ax, rho, cp, { w: 5 });
    /* the rectangle estimate: height at the center times the width */
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.75); ctx.lineWidth = 2.5; ctx.setLineDash([8, 6]);
    ctx.strokeRect(ax.X(a), ax.Y(Math.min(4, h0)), ax.X(b) - ax.X(a), ax.Y(0) - ax.Y(Math.min(4, h0))); ctx.restore();
    /* the interval's ends on the axis */
    line(ctx, ax.X(a), bx.b, ax.X(a), bx.b + 14, cl, 3); line(ctx, ax.X(b), bx.b, ax.X(b), bx.b + 14, cl, 3);
    dot(ctx, ax.X(x0), ax.Y(Math.min(4, h0)), cp, true, 8);
    /* the probability, written above the interval */
    const top = Math.max(h0, rho(a), rho(b));
    const ly = Math.max(bx.t + 24, ax.Y(Math.min(4, Math.max(top, 0.6))) - 26);
    const lx = Math.min(bx.r - 90, Math.max(bx.l + 90, ax.X(x0)));
    text(ctx, `P = ${fp(P)}`, lx, ly, cp, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    hits.length = 0;
    hits.push({ x: ax.X(x0), y: (ax.Y(Math.min(4, h0)) + bx.b) / 2, r: Math.max(16, (ax.X(b) - ax.X(a)) / 2), name: `the shaded area: the probability ${fp(P)} of finding the particle between ${fmt(a, 3)}L and ${fmt(b, 3)}L` });
    hits.push({ x: ax.X(x0), y: ax.Y(Math.min(4, h0)), r: 14, name: `the density at the center, |ψ(x₀)|² = ${fmt(h0, 3)}/L; the dashed rectangle is this height times the width` });
    if (which === 'any') hits.push({ x: ax.X(0.45), y: ax.Y(book(0.45)), r: 18, name: 'an arbitrary probability density, as Figure 3.6.1 draws it' });
    topline(ctx, `The particle is found between $${fmt(a, 3)}\\kL$ and $${fmt(b, 3)}\\kL$ with probability ${fp(P)}; the rectangle estimate gives ${fp(est)}.`);
    const nm = which === 'any' ? '' : `_{${which}}`;
    tex(d.readout, `P_{1D} = \\int_{${fmt(a, 3)}\\kL}^{${fmt(b, 3)}\\kL} |\\kpsi${nm}(\\kx)|^2\\,d\\kx = ${ftex(P)} \\\\ |\\kpsi${nm}(x_0)|^2\\,\\Delta\\kx = \\left(\\dfrac{${fmt(h0, 3)}}{\\kL}\\right)(${fmt(b - a, 3)}\\kL) = ${ftex(est)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
