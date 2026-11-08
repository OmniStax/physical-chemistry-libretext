/* Figures for section 8.7 Hartree-Fock Calculations Give Good Agreement with Experimental Data. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.7'] = function (root, F) {
const { tex, C, PAL, alpha, register, begin, line, dot, text, topline, axes, plot, shade, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- Figure 8.7.2: the exchange hole ----------
   The density of the other electrons around one electron at r = 0, as a fraction of their average density.
   Hartree: no structure, 1 everywhere. Hartree-Fock: electrons of the opposite spin are unaffected (1), those of
   the same spin follow the uniform electron gas's pair function (J. C. Slater, Phys. Rev. 81, 385 (1951)),
   n(r)/n_sigma = 1 - 9 [(sin x - x cos x)/x^3]^2 with x = k_F r. The density missing from the hole,
   n_sigma Int [1 - g] 4 pi r^2 dr with n_sigma = k_F^3 / 6 pi^2, is one electron; it is integrated here.
   x runs 0 to 8 (the hole has closed by x = 5), y 0 to 1.2. Still: two choices, the curve bends between them. */
(function () {
  const d = sim('sim-exchange-hole', 560);
  const M = F.choice(d.controls, { label: '\\text{method}', key: 'method', value: 'hf', aria: 'the approximation', options: [
    { value: 'h', label: 'Hartree' }, { value: 'hf', label: 'Hartree–Fock' }] });
  const SP = F.choice(d.controls, { label: '\\text{other electrons}', key: 'spin', value: 'same', aria: 'the spin of the other electrons', options: [
    { value: 'same', label: 'same spin' }, { value: 'opp', label: 'opposite spin' }] });
  const hits = [];
  F.hover(d.stage, () => hits);
  const j = (x) => (x < 1e-3 ? 1 / 3 - x * x / 30 : (Math.sin(x) - x * Math.cos(x)) / (x * x * x));
  const hole = (x) => 9 * j(x) * j(x);
  /* the charge in the full hole, (1/6 pi^2) Int 9 j^2 4 pi x^2 dx, by Simpson's rule to x = 400 */
  const CHARGE = (() => { const n = 40000, b = 400, h = b / n; let s = 0; for (let i = 0; i <= n; i++) { const x = i * h, w = i === 0 || i === n ? 1 : i % 2 ? 4 : 2; s += w * hole(x) * 4 * Math.PI * x * x; } return s * h / 3 / (6 * Math.PI * Math.PI); })();
  function draw() {
    const { ctx, W } = begin(d.c);
    const depth = M.mix((v) => (v === 'hf' ? 1 : 0)) * SP.mix((v) => (v === 'same' ? 1 : 0));
    const g = (x) => 1 - depth * hole(x);
    const hf = M.value === 'hf', same = SP.value === 'same', on = hf && same;
    topline(ctx, on ? 'Hartree–Fock: near the electron, others of its spin are missing, one electron in all.'
      : hf ? 'Hartree–Fock: electrons of the opposite spin are not kept away.'
      : 'Hartree: the other electrons are independent of this one, so their density is flat.');
    const box = { l: 150, r: W - 80, t: 110, b: 450 };
    const ax = axes(ctx, box, [0, 8], [0, 1.2], { nx: 8, ny: 4, xl: 'distance from the electron, k_F r', yl: 'density of the others, n(r)/n_σ', xc: C('length'), yc: C('probability-density') });
    line(ctx, ax.X(0), ax.Y(1), ax.X(8), ax.Y(1), alpha(PAL.ink, 0.4), 2, [10, 10]);
    text(ctx, 'average density', ax.X(8) - 8, ax.Y(1) - 14, PAL.muted, { size: 17, align: 'right' });
    if (depth > 0.01) shade(ctx, ax, () => 1, g, 0, 8, C('probability-density'), { alpha: 0.25 });
    plot(ctx, ax, g, C('probability-density'), { w: 5 });
    dot(ctx, ax.X(0), ax.Y(0), F.el('e-'), true, 12);
    text(ctx, 'the electron', ax.X(0.12), ax.Y(0.2), PAL.ink, { size: 20 });
    const q = depth * CHARGE;
    if (depth > 0.3) text(ctx, 'exchange hole', ax.X(0.3), ax.Y(0.78), C('probability-density'), { size: 20, weight: 600 });
    hits.length = 0;
    hits.push({ x: ax.X(0), y: ax.Y(0), r: 16, name: 'an electron at r = 0' });
    hits.push({ x: ax.X(1.2), y: ax.Y(g(1.2)), r: 20, name: `n(r)/n_σ = ${fmt(g(1.2), 2)} at k_F r = 1.2` });
    if (depth > 0.3) hits.push({ x: ax.X(1.4), y: ax.Y(0.8), r: 30, name: 'the exchange hole: density missing near the electron' });
    tex(d.readout, on
      ? `\\knr = n_\\sigma\\left[1 - 9\\left(\\dfrac{\\sin x - x\\cos x}{x^3}\\right)^2\\right] \\\\ x = k_F r \\\\\\int_0^\\infty [n_\\sigma - \\knr]\\,4\\pi r^2\\,dr = ${fmt(q, 2)}\\ \\text{electron}`
      : `\\knr = n_\\sigma \\\\ \\int_0^\\infty [n_\\sigma - \\knr]\\,4\\pi r^2\\,dr = ${fmt(q, 2)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
