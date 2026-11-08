/* Figures for section 11.3 Extended Basis Sets (Double Zeta and Split-Valence). Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.3'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, shade, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- Figure 11.3.1 + 11.3.2: one 1s orbital from one, two or three Slater functions ----------
   Still: nothing in it has a time; the reader picks the basis and sets the weights.
   Normalized 1s STOs phi(zeta) = (zeta^3/pi)^(1/2) e^(-zeta r), r in a0. Their overlap and the matrix
   element of r between two of them are closed forms:
     S_ij = 8 (zeta_i zeta_j)^(3/2) / (zeta_i + zeta_j)^3,   <r>_ij = 24 (zeta_i zeta_j)^(3/2) / (zeta_i + zeta_j)^4,
   so a single STO has <r> = 3 / (2 zeta). Exponents: single zeta 1.24 (Table 11.3.1, hydrogen); double
   0.80 and 1.60; triple 0.60, 1.20 and 2.00, chosen to bracket 1.24 (they are not a published basis).
   Graph: the radial density 4 pi r^2 psi^2 on r 0 to 6 a0, 0 to 1.2 per a0 (zeta = 2.0 alone peaks at
   4 zeta e^-2 = 1.08). Each function alone is a thin dashed curve; the weighted, normalized sum is bold.
   Beside it a disc of radius <r> (56 px per a0, 2.5 a0 the largest reachable) over a dashed ring for the
   single zeta = 1.24 function, in place of the book's circles. Opens on double zeta, equal weights. */
(function () {
  const d = sim('sim-multiple-zeta', 600);
  const SETS = { sz: [1.24], dz: [0.8, 1.6], tz: [0.6, 1.2, 2.0] };
  const NAME = { sz: 'single zeta', dz: 'double zeta', tz: 'triple zeta' };
  const K = F.choice(d.controls, { label: '\\text{basis}', options: [{ value: 'sz', label: 'single zeta' }, { value: 'dz', label: 'double zeta' }, { value: 'tz', label: 'triple zeta' }],
    value: 'dz', aria: 'how many orbital functions stand for the 1s orbital', key: 'basis', onInput: () => shown() });
  const cs = [1, 2, 3].map((j) => ctl(d.controls, { label: `c_${j}`, cls: '', key: `c${j}`, min: 0, max: 1, step: 0.01, value: 0.5, unit: '', dec: 2, detents: [0, 0.5, 1], snap: true }));
  function shown() { const n = SETS[K.value].length; cs.forEach((c, i) => c.show(n > 1 && i < n)); }
  shown();
  const hits = [];
  F.hover(d.stage, () => hits);
  const Sij = (a, b) => 8 * Math.pow(a * b, 1.5) / Math.pow(a + b, 3);
  const Rij = (a, b) => 24 * Math.pow(a * b, 1.5) / Math.pow(a + b, 4);
  const pure = (z) => (r) => 4 * z * z * z * r * r * Math.exp(-2 * z * r);
  const R0 = 1.5 / 1.24;
  function draw() {
    const { ctx } = begin(d.c);
    const z = SETS[K.value], n = z.length, w = n === 1 ? [1] : cs.slice(0, n).map((c) => c.v);
    let nn = 0, mr = 0;
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) { nn += w[i] * w[j] * Sij(z[i], z[j]); mr += w[i] * w[j] * Rij(z[i], z[j]); }
    const ok = nn > 1e-9, N = ok ? 1 / Math.sqrt(nn) : 0; mr = ok ? mr / nn : 0;
    const P = (r) => { let s = 0; for (let i = 0; i < n; i++) s += w[i] * Math.pow(z[i], 1.5) * Math.exp(-z[i] * r); return 4 * r * r * N * N * s * s; };
    const lo = 1.5 / Math.max(...z), hi = 1.5 / Math.min(...z);
    const cp = C('probability-density'), cl = C('length');
    topline(ctx, !ok ? 'With every weight at zero there is no orbital to draw.'
      : n === 1 ? `One function with $\\zeta = 1.24$ fixes the orbital's mean radius at $\\langle\\kr\\rangle = ${fmt(mr, 2)}\\,\\kao$.`
      : `The weights set the mean radius to $\\langle\\kr\\rangle = ${fmt(mr, 2)}\\,\\kao$, anywhere from ${fmt(lo, 2)} to ${fmt(hi, 2)} a₀ with these ${n} functions.`);
    const box = { l: 150, r: 960, t: 110, b: 490 };
    const ax = axes(ctx, box, [0, 6], [0, 1.2], { nx: 6, ny: 4, xl: 'distance from the nucleus r (a₀)', yl: 'radial density 4πr²ψ² (1/a₀)', xc: cl, yc: cp });
    hits.length = 0;
    const entries = [];
    if (n > 1) z.forEach((zi, i) => {
      const col = alpha(F.cat(i), 0.85);
      plot(ctx, ax, pure(zi), col, { w: 3, dash: [10, 10] });
      entries.push({ s: `ζ = ${fmt(zi, 2)} alone`, color: col, w: 3, dash: [10, 10] });
      hits.push({ x: ax.X(1 / zi), y: ax.Y(Math.min(1.2, 4 * zi * Math.exp(-2))), r: 16, name: `the function with ζ = ${fmt(zi, 2)} alone: ⟨r⟩ = ${fmt(1.5 / zi, 2)} a₀` });
    });
    if (ok) {
      shade(ctx, ax, P, 0, 0, 6, cp, { alpha: 0.12 });
      plot(ctx, ax, P, cp, { w: 5 });
      entries.push({ s: n === 1 ? 'ψ, ζ = 1.24' : 'ψ, weighted sum', color: cp, w: 5 });
      const pm = P(mr);
      line(ctx, ax.X(mr), box.b, ax.X(mr), ax.Y(pm), alpha(cl, 0.9), 3, [4, 8]);
      dot(ctx, ax.X(mr), box.b, cl, true, 9);
      text(ctx, '⟨r⟩', ax.X(mr) + 12, ax.Y(pm) - 18, cl, { size: 22, weight: 600 });
      hits.push({ x: ax.X(mr), y: box.b, r: 16, name: `the mean radius ⟨r⟩ = ${fmt(mr, 2)} a₀` });
    }
    F.legend(ctx, ax, entries, { corner: 'tr' });
    /* the orbital's size as a disc, over the single-zeta size */
    const cx = 1180, cy = 300, k = 56;
    if (ok) {
      ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, mr * k, 0, 2 * Math.PI); ctx.fillStyle = alpha(cp, 0.25); ctx.fill(); ctx.strokeStyle = cp; ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
    }
    if (n > 1) {
      ctx.save(); ctx.beginPath(); ctx.setLineDash([4, 8]); ctx.arc(cx, cy, R0 * k, 0, 2 * Math.PI); ctx.strokeStyle = alpha(PAL.ink, 0.55); ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
      text(ctx, 'dashed: single ζ = 1.24', cx, cy - Math.max(R0, mr) * k - 24, alpha(PAL.ink, 0.7), { size: 17, align: 'center' });
      hits.push({ x: cx + R0 * k, y: cy, r: 12, name: `one function with ζ = 1.24: ⟨r⟩ = ${fmt(R0, 2)} a₀` });
    }
    dot(ctx, cx, cy, PAL.ink, true, 5);
    if (ok) {
      text(ctx, `⟨r⟩ = ${fmt(mr, 2)} a₀`, cx, cy + 172, cl, { size: 22, weight: 600, align: 'center' });
      hits.push({ x: cx, y: cy, r: Math.max(20, mr * k), name: `a disc of radius ⟨r⟩ = ${fmt(mr, 2)} a₀, the size of the ${NAME[K.value]} orbital` });
    }
    const kets = z.map((zi, i) => `${fmt(w[i], 2)}\\ket{\\kphiSTO(${fmt(zi, 2)})}`).join(' + ');
    tex(d.readout, !ok ? `\\ket{\\kpsi} = \\sum_i c_i\\ket{\\kphiSTO(\\zeta_i)} = 0`
      : n === 1 ? `\\ket{\\kpsi} = \\sum_i c_i\\ket{\\kphiSTO(\\zeta_i)} \\\\ \\ket{\\kpsi} = \\ket{\\kphiSTO(1.24)} \\\\ \\langle\\kr\\rangle = ${fmt(mr, 2)}\\,\\kao`
      : `\\ket{\\kpsi} = \\mathcal{N}\\sum_i c_i\\ket{\\kphiSTO(\\zeta_i)} \\\\ \\ket{\\kpsi} = ${fmt(N, 2)}\\bigl(${kets}\\bigr) \\\\ \\langle\\kr\\rangle = ${fmt(mr, 2)}\\,\\kao`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
