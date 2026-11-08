/* Figures for section 4.5 Eigenfunctions of Operators are Orthogonal. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.5'] = function (root, F) {
const { tex, C, PAL, alpha, register, begin, line, text, topline, axes, plot, shade, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const SUB = '₀₁₂₃₄₅₆₇₈₉', sub = (k) => String(k).split('').map((c) => SUB[+c]).join('');

/* =====================================================================
   EXAMPLE 4.5.1's plot: parity about the center of the box. Still: no time
   in it. Two choices m and n, 1 to 4, opening on the book's (2, 3). Top,
   psi_m and psi_n in their referent colours with the mirror line x = L/2
   dashed; bottom, their product with the area above the axis filled dark
   and below light. The readout states each function's parity about L/2,
   psi_n(L - x) = (-1)^(n+1) psi_n(x), and splits the integral into its two
   halves: for opposite parities the halves are equal and opposite; for
   the same parity (1, 3) or (2, 4) each half is zero by itself.
   x in L; psi in L^(-1/2), -1.6 to 1.6; the product in 1/L, -2 to 2.
===================================================================== */
(function () {
  const d = sim('sim-parity', 720);
  const opts = [1, 2, 3, 4].map((k) => ({ value: String(k), label: String(k) }));
  const M = F.choice(d.controls, { label: 'm', options: opts, value: '2', aria: 'the first wavefunction', key: 'm' });
  const Nn = F.choice(d.controls, { label: 'n', options: opts, value: '3', aria: 'the second wavefunction', key: 'n' });
  let hits = []; F.hover(d.stage, () => hits);
  const psi = (n) => (x) => (x < 0 || x > 1 ? 0 : Math.SQRT2 * Math.sin(n * Math.PI * x));
  const XR = [-0.06, 1.06];
  const integ = (f, a, b) => { const K = 4000; let s = 0; for (let i = 0; i < K; i++) s += f(a + (b - a) * (i + 0.5) / K); return s * (b - a) / K; };
  const par = (n) => (n % 2 ? 'even' : 'odd');
  function frame(ctx, ax, box) {
    const cl = C('length');
    for (const [q, s] of [[0, '0'], [0.5, 'L/2'], [1, 'L']]) text(ctx, s, ax.X(q), box.b + 26, cl, { size: 17, align: 'center' });
    line(ctx, ax.X(0.5), box.t, ax.X(0.5), box.b, alpha(PAL.ink, 0.4), 2, [10, 10]);
    line(ctx, ax.X(0), ax.Y(0), ax.X(1), ax.Y(0), alpha(PAL.ink, 0.35), 2);
  }
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const m = +M.value, n = +Nn.value, cm = F.ref(`psi-${m}`), cn = F.ref(`psi-${n}`), cw = C('wavefunction'), cl = C('length');
    const top = { l: 150, r: 1250, t: 120, b: 360 };
    const ax = axes(ctx, top, XR, [-1.6, 1.6], { nx: 0, ny: 4, xl: '', yl: 'ψ (L^{-1/2})', yc: cw });
    frame(ctx, ax, top);
    plot(ctx, ax, psi(n), cn, { w: 5, x: [0, 1] });
    if (m !== n) plot(ctx, ax, psi(m), cm, { w: 5, x: [0, 1] });
    const crest = (k) => 0.5 / k;
    text(ctx, `ψ${sub(m)}`, ax.X(crest(m)), ax.Y(psi(m)(crest(m))) - 22, cm, { size: 24, weight: 600, align: 'center' });
    if (m !== n) text(ctx, `ψ${sub(n)}`, ax.X(crest(n)) + (Math.abs(crest(n) - crest(m)) < 0.1 ? 44 : 0), ax.Y(psi(n)(crest(n))) - 22, cn, { size: 24, weight: 600, align: 'center' });
    hits.push({ x: ax.X(crest(m)), y: ax.Y(psi(m)(crest(m))), r: 16, name: `ψ${sub(m)}, ${par(m)} about L/2` });
    hits.push({ x: ax.X(crest(n)), y: ax.Y(psi(n)(crest(n))), r: 16, name: `ψ${sub(n)}, ${par(n)} about L/2` });
    hits.push({ x: ax.X(0.5), y: top.t + 20, r: 16, name: 'the center of the box, x = L/2' });
    const bot = { l: 150, r: 1250, t: 440, b: 660 };
    const bx = axes(ctx, bot, XR, [-2, 2], { nx: 0, ny: 4, xl: 'position x', yl: `ψ${sub(m)}ψ${sub(n)} (1/L)`, xc: cl, yc: PAL.ink });
    frame(ctx, bx, bot);
    const prod = (x) => psi(m)(x) * psi(n)(x);
    shade(ctx, bx, (x) => Math.max(0, prod(x)), 0, 0, 1, PAL.ink, { alpha: 0.4 });
    shade(ctx, bx, (x) => Math.min(0, prod(x)), 0, 0, 1, PAL.ink, { alpha: 0.14 });
    plot(ctx, bx, prod, PAL.ink, { w: 4, x: [0, 1] });
    F.legend(ctx, bx, [{ s: 'area above the axis', kind: 'swatch', color: alpha(PAL.ink, 0.4) }, { s: 'area below the axis', kind: 'swatch', color: alpha(PAL.ink, 0.14) }], { corner: 'above' });
    const zl = +integ(prod, 0, 0.5).toFixed(3) + 0, zr = +integ(prod, 0.5, 1).toFixed(3) + 0;
    hits.push({ x: bx.X(0.25), y: bx.Y(0), r: 20, name: `the left half of the product, integral ${fmt(zl, 3)}` });
    hits.push({ x: bx.X(0.75), y: bx.Y(0), r: 20, name: `the right half of the product, integral ${fmt(zr, 3)}` });
    const sg = (k) => (k % 2 ? '' : '-');
    topline(ctx, m === n
      ? `$\\kpsi_{${m}}\\kpsi_{${n}} = |\\kpsi_{${n}}|^2$ is never negative, and its area is 1.`
      : (m + n) % 2
        ? `$\\kpsi_{${m}}$ is ${par(m)} about $\\kL/2$ and $\\kpsi_{${n}}$ is ${par(n)}, so their product is odd and its two halves cancel.`
        : `$\\kpsi_{${m}}$ and $\\kpsi_{${n}}$ are both ${par(m)} about $\\kL/2$: the halves of the product match, and the areas cancel inside each half.`);
    tex(d.readout,
      `\\kpsi_{${m}}(\\kL-\\kx) = ${sg(m)}\\kpsi_{${m}}(\\kx) \\\\ \\kpsi_{${n}}(\\kL-\\kx) = ${sg(n)}\\kpsi_{${n}}(\\kx) \\\\ \\int_{0}^{\\kL}\\kpsi_{${m}}\\kpsi_{${n}}\\,d\\kx = \\int_{0}^{\\kL/2}\\kpsi_{${m}}\\kpsi_{${n}}\\,d\\kx + \\int_{\\kL/2}^{\\kL}\\kpsi_{${m}}\\kpsi_{${n}}\\,d\\kx = (${fmt(zl, 3)}) + (${fmt(zr, 3)}) = ${fmt(zl + zr, 3)}`,
      false, { values: false });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
