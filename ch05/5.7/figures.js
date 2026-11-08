/* Figures for section 5.7 Hermite Polynomials are either Even or Odd Functions. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.7'] = function (root, F) {
const { tex, PAL, alpha, register, begin, line, text, topline, axes, plot, shade, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const SUB = '₀₁₂₃₄₅₆₇₈₉', sub = (k) => String(k).split('').map((c) => SUB[+c]).join('');

/* the physicists' Hermite polynomials from the recurrence (5.7.1), H_{n+1} = 2x H_n - 2n H_{n-1},
   as coefficient lists (index = power) and as functions */
const COEF = [[1], [0, 2]];
for (let n = 1; n < 7; n++) {
  const a = COEF[n], b = COEF[n - 1], c = new Array(n + 2).fill(0);
  a.forEach((v, i) => { c[i + 1] += 2 * v; });
  b.forEach((v, i) => { c[i] -= 2 * n * v; });
  COEF.push(c);
}
const H = (n) => (x) => COEF[n].reduce((s, v, i) => s + v * x ** i, 0);
/* H_n written out, highest power first; sign flips the odd powers, as H_n(-x) does */
function poly(n, flip) {
  const c = COEF[n]; let s = '';
  for (let i = c.length - 1; i >= 0; i--) {
    let v = c[i]; if (!v) continue;
    if (flip && i % 2) v = -v;
    const mag = Math.abs(v), p = i === 0 ? '' : i === 1 ? 'x' : `x^{${i}}`;
    const body = (mag === 1 && i > 0 ? '' : String(mag)) + p;
    s += s ? (v < 0 ? ' - ' : ' + ') + body : (v < 0 ? '-' : '') + body;
  }
  return s;
}

/* =====================================================================
   FIGURE 5.7.1: H_n(x) and its mirror image H_n(-x). Still: a polynomial
   has no time in it. Choice n, 0 to 7, opening on the book's last panel's
   neighbour n = 3 so the flip shows at once. x from -2 to 2; the y range
   is fixed per n from |H_n| on that window (the book scales each panel
   too), so every degree fills the frame. H_n(x) solid, H_n(-x) dashed in
   a second colour: for even n the dashes lie on the solid curve.
===================================================================== */
(function () {
  const d = sim('sim-parity', 520);
  const N = F.choice(d.controls, { label: 'n', options: [0, 1, 2, 3, 4, 5, 6, 7].map((k) => ({ value: String(k), label: String(k) })), value: '3', aria: 'the degree of the Hermite polynomial', key: 'n' });
  let hits = []; F.hover(d.stage, () => hits);
  const XR = [-2, 2];
  const top = (n) => { let m = 1; for (let i = 0; i <= 200; i++) m = Math.max(m, Math.abs(H(n)(-2 + 4 * i / 200))); const nn = F.nice(0, m, 4); return nn.hi; };
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const n = +N.value, f = H(n), Y = top(n), cA = F.cat(0), cB = F.cat(1);
    const box = { l: 170, r: 1250, t: 110, b: 430 };
    const ax = axes(ctx, box, XR, [-Y, Y], { nx: 4, ny: 4, xl: 'x', yl: `H${sub(n)}` });
    line(ctx, ax.X(0), box.t, ax.X(0), box.b, alpha(PAL.ink, 0.4), 2, [10, 10]);
    plot(ctx, ax, f, cA, { w: 6 });
    plot(ctx, ax, (x) => f(-x), cB, { w: 5, dash: [14, 12] });
    F.legend(ctx, ax, [{ s: `H${sub(n)}(x)`, color: cA, w: 6 }, { s: `H${sub(n)}(−x)`, color: cB, w: 5, dash: [14, 12] }], { corner: 'above' });
    hits.push({ x: ax.X(0), y: box.t + 16, r: 16, name: 'the y axis, the mirror line' });
    topline(ctx, n % 2
      ? `$H_{${n}}$ is odd: its mirror image is the curve turned upside down.`
      : `$H_{${n}}$ is even: its mirror image is the curve itself.`);
    tex(d.readout, `H_{${n}}(-x) = (-1)^{${n}} H_{${n}}(x) = ${n % 2 ? '-' : '+'}H_{${n}}(x) \\\\ H_{${n}}(x) = ${poly(n, false)} \\\\ H_{${n}}(-x) = ${poly(n, true)}`, false, { values: false });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 5.7.2 (the book cites it and prints none): two functions from the
   book's examples, x^2, cos x (even), x^3, sin x (odd), x^3 + 1 (neither),
   and their product, with its integral over [-a, a] split at the origin.
   Still: no time. Choices f and g, opening on x^3 and cos x (an odd
   product); slider a, 0.5 to 2, default 1.5. Top: f and g, y fixed per
   pair from their largest value on [-2, 2]; bottom: f g with its area
   above the axis dark and below light. The readout adds the two halves.
===================================================================== */
(function () {
  const d = sim('sim-parity-integral', 720);
  const FN = {
    x2: { f: (x) => x * x, s: 'x^2', w: 'x²', p: 'even' },
    cos: { f: Math.cos, s: '\\cos x', w: 'cos x', p: 'even' },
    x3: { f: (x) => x ** 3, s: 'x^3', w: 'x³', p: 'odd' },
    sin: { f: Math.sin, s: '\\sin x', w: 'sin x', p: 'odd' },
    x31: { f: (x) => x ** 3 + 1, s: '(x^3 + 1)', w: 'x³ + 1', p: 'neither' },
  };
  const opts = Object.entries(FN).map(([value, o]) => ({ value, label: `$${o.s.replace(/[()]/g, '')}$` }));
  const A = F.select(d.controls, { label: 'f', options: opts, value: 'x3', aria: 'the first function', key: 'f' });
  const B = F.select(d.controls, { label: 'g', options: opts, value: 'cos', aria: 'the second function', key: 'g' });
  const a = F.ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 0.5, max: 2, step: 0.05, value: 1.5, unit: '', dec: 2, aria: 'the half width of the interval' });
  let hits = []; F.hover(d.stage, () => hits);
  const XR = [-2, 2];
  const integ = (f, lo, hi) => { const K = 2000; let s = 0; for (let i = 0; i < K; i++) s += f(lo + (hi - lo) * (i + 0.5) / K); return s * (hi - lo) / K; };
  const big = (f) => { let m = 0; for (let i = 0; i <= 200; i++) m = Math.max(m, Math.abs(f(-2 + 4 * i / 200))); return F.nice(0, m, 4).hi; };
  const prodPar = (p, q) => (p === 'neither' || q === 'neither' ? 'neither' : p === q ? 'even' : 'odd');
  const z = (v) => (Math.abs(v) < 5e-4 ? 0 : v);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const P = FN[A.value], Q = FN[B.value], av = a.v, cA = F.cat(0), cB = F.cat(1);
    const fg = (x) => P.f(x) * Q.f(x), par = prodPar(P.p, Q.p);
    const t1 = { l: 170, r: 1250, t: 110, b: 300 };
    const Y1 = Math.max(big(P.f), big(Q.f));
    const ax1 = axes(ctx, t1, XR, [-Y1, Y1], { nx: 0, ny: 2, xl: '', yl: '' });
    line(ctx, ax1.X(0), t1.t, ax1.X(0), t1.b, alpha(PAL.ink, 0.4), 2, [10, 10]);
    plot(ctx, ax1, P.f, cA, { w: 5 });
    if (A.value !== B.value) plot(ctx, ax1, Q.f, cB, { w: 5 });
    F.legend(ctx, ax1, [{ s: `f = ${P.w} (${P.p})`, color: cA, w: 5 }, ...(A.value !== B.value ? [{ s: `g = ${Q.w} (${Q.p})`, color: cB, w: 5 }] : [])], { corner: 'above' });
    const t2 = { l: 170, r: 1250, t: 400, b: 640 };
    const Y2 = big(fg);
    const ax2 = axes(ctx, t2, XR, [-Y2, Y2], { nx: 4, ny: 2, xl: 'x', yl: `f g (${par})` });
    line(ctx, ax2.X(0), t2.t, ax2.X(0), t2.b, alpha(PAL.ink, 0.4), 2, [10, 10]);
    shade(ctx, ax2, (x) => Math.max(0, fg(x)), 0, -av, av, PAL.ink, { alpha: 0.4 });
    shade(ctx, ax2, (x) => Math.min(0, fg(x)), 0, -av, av, PAL.ink, { alpha: 0.14 });
    plot(ctx, ax2, fg, PAL.ink, { w: 4 });
    [-av, av].forEach((q) => line(ctx, ax2.X(q), t2.t, ax2.X(q), t2.b, alpha(PAL.ink, 0.5), 2, [4, 8]));
    text(ctx, '−a', ax2.X(-av), t2.t - 12, PAL.ink, { size: 17, align: 'center', bg: PAL.panel });
    text(ctx, 'a', ax2.X(av), t2.t - 12, PAL.ink, { size: 17, align: 'center', bg: PAL.panel });
    const L = z(integ(fg, -av, 0)), R = z(integ(fg, 0, av)), T = z(L + R);
    hits.push({ x: ax2.X(-av / 2), y: ax2.Y(0), r: 22, name: `the area left of the origin, ${fmt(L, 3)}` });
    hits.push({ x: ax2.X(av / 2), y: ax2.Y(0), r: 22, name: `the area right of the origin, ${fmt(R, 3)}` });
    topline(ctx, par === 'odd'
      ? 'The product is odd, so its two halves cancel.'
      : par === 'even' ? 'The product is even, so its two halves are equal.' : 'The product has no symmetry, and its halves are unrelated.');
    const fgs = `${P.s}${A.value === B.value ? '' : ' \\cdot ' + Q.s}`;
    const integrand = A.value === B.value ? `${P.s}^2` : fgs;
    tex(d.readout, `\\int_{-${fmt(av, 2)}}^{${fmt(av, 2)}} ${integrand}\\,dx = \\int_{-${fmt(av, 2)}}^{0} ${integrand}\\,dx + \\int_{0}^{${fmt(av, 2)}} ${integrand}\\,dx \\\\ = (${fmt(L, 3)}) + (${fmt(R, 3)}) = ${fmt(T, 3)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
