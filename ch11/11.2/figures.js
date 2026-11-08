/* Figures for section 11.2 Gaussian Basis Sets. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.2'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, topline, axes, plot, shade, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- shared: hydrogen's 1s Slater orbital, zeta = 1.24, in atomic units ---------- */
const ZETA = 1.24;
/* radial quadrature on 0 to 20 a0, enough for every function here */
const RS = [], NQ = 4000, DR = 20 / NQ;
for (let i = 0; i <= NQ; i++) RS.push(i * DR);
const wq = (i) => (i === 0 || i === NQ ? 1 : i % 2 ? 4 : 2) * DR / 3;
const integ = (f) => RS.reduce((s, r, i) => s + wq(i) * f(r), 0);
const sig = (v, n) => { if (v === 0) return '0'; const p = Math.max(0, n - 1 - Math.floor(Math.log10(Math.abs(v)))); return fmt(v, p); };

/* ---------- Figure 11.2.1 + 11.2.2 + 11.2.3: STO-NG against its Slater orbital ----------
   x: r 0 to 4 a0 (Figure 11.2.3's axes); y: phi(r) 0 to 0.8 a0^-3/2 (the STO peaks at 0.779 at r = 0).
   Below, the miss phi_STO - phi_STO-NG on -0.1 to 0.45 (STO-1G misses by 0.41 at the nucleus).
   Coefficients d and exponents alpha (for zeta = 1) are Hehre, Stewart and Pople (1969); the exponents
   scale as zeta^2. Each d multiplies a normalized primitive (2 alpha / pi)^(3/4) e^(-alpha r^2).
   Still: a fit has no time in it; the choice of N is the variation. */
(function () {
  const d = sim('sim-sto-ng', 700);
  const HSP = {
    1: { a: [0.270950], d: [1.0] },
    2: { a: [0.851819, 0.151623], d: [0.430129, 0.678914] },
    3: { a: [2.227660, 0.405771, 0.109818], d: [0.154329, 0.535328, 0.444635] },
    6: { a: [23.10303, 4.235915, 1.185056, 0.4070539, 0.1580884, 0.06510954], d: [0.009163596, 0.04936149, 0.1685383, 0.3705627, 0.4164915, 0.1303340] },
  };
  const sto = (r) => Math.sqrt(ZETA ** 3 / Math.PI) * Math.exp(-ZETA * r);
  const SETS = {};
  Object.entries(HSP).forEach(([n, s]) => {
    const a = s.a.map((x) => x * ZETA * ZETA), c = s.d.map((x, i) => x * Math.pow(2 * a[i] / Math.PI, 0.75));
    const prim = a.map((ai, i) => (r) => c[i] * Math.exp(-ai * r * r));
    const f = (r) => prim.reduce((t, p) => t + p(r), 0);
    const nn = integ((r) => 4 * Math.PI * r * r * f(r) ** 2), ov = integ((r) => 4 * Math.PI * r * r * f(r) * sto(r)) / Math.sqrt(nn);
    SETS[n] = { a, d: s.d, prim, f, ov, f0: f(0) };
  });
  const K = F.choice(d.controls, { label: '\\text{basis}', key: 'basis', options: Object.keys(SETS).map((n) => ({ value: n, label: `STO-${n}G` })), value: '3', aria: 'the number of Gaussians N' });
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    hits = [];
    const s = SETS[K.value], cw = C('wavefunction'), cl = C('length');
    topline(ctx, `STO-${K.value}G reaches $\\kpsiSTONG(0) = ${fmt(s.f0, 3)}$ at the nucleus, where the Slater orbital's cusp stands at ${fmt(sto(0), 3)}.`);
    const box = { l: 150, r: W - 70, t: 120, b: 470 };
    const ax = axes(ctx, box, [0, 4], [0, 0.8], { nx: 4, ny: 4, fy: (v) => fmt(v, 1), xl: '', yl: 'φ(r) (a₀^{−3/2})', yc: cw });
    const sbox = { l: 150, r: W - 70, t: 535, b: 640 };
    const sx = axes(ctx, sbox, [0, 4], [-0.1, 0.45], { nx: 4, ny: 0, xl: 'distance r (a₀)', yl: 'STO − fit', xc: cl, yc: cw });
    line(ctx, sx.X(0), sx.Y(0), sx.X(4), sx.Y(0), alpha(PAL.ink, 0.35), 2);
    /* the primitives of the chosen set, dashed beneath the sum */
    Object.keys(SETS).forEach((n) => K.only(ctx, n, () => SETS[n].prim.forEach((p) => plot(ctx, ax, p, alpha(cw, 0.6), { w: 2, dash: [10, 10] }))));
    plot(ctx, ax, sto, PAL.ink, { w: 3 });
    K.curve(ctx, (n) => SETS[n].f, 0, 4, ax.X, ax.Y, cw, 5, 240);
    /* the miss, filled to zero */
    const miss = (n) => (r) => sto(r) - SETS[n].f(r);
    shade(ctx, sx, (r) => K.mix((n) => miss(n)(r)), 0, 0, 4, cw, { alpha: 0.18 });
    K.curve(ctx, miss, 0, 4, sx.X, sx.Y, cw, 3, 240);
    dot(ctx, ax.X(0), ax.Y(sto(0)), PAL.ink, true, 9);
    dot(ctx, ax.X(0), ax.Y(s.f0), cw, true, 9);
    F.legend(ctx, ax, [
      { s: 'Slater 1s, ζ = 1.24', color: PAL.ink, w: 3, f: sto },
      { s: `STO-${K.value}G`, color: cw, w: 5, f: s.f },
      { s: 'primitives d·g(r)', color: alpha(cw, 0.6), w: 2, dash: [10, 10] },
    ], { corner: 'tr' });
    hits.push({ x: ax.X(0), y: ax.Y(sto(0)), r: 16, name: `the cusp of the Slater orbital, ${fmt(sto(0), 3)} a₀^−3/2 at r = 0` });
    hits.push({ x: ax.X(0), y: ax.Y(s.f0), r: 16, name: `STO-${K.value}G at r = 0: ${fmt(s.f0, 3)} a₀^−3/2, flat` });
    s.prim.forEach((p, i) => { const rh = Math.min(3.8, 0.6 / Math.sqrt(s.a[i])); hits.push({ x: ax.X(rh), y: ax.Y(p(rh)), r: 12, name: `primitive ${i + 1}: d = ${sig(s.d[i], 4)}, α = ${sig(s.a[i], 4)} a₀⁻²` }); });
    const terms = s.d.map((di, i) => `${sig(di, 3)}\\ket{\\phi^{\\text{GTO}}(${sig(s.a[i], 3)})}`);
    /* two terms a row: six terms in one line overflow the readout */
    const rows = []; for (let i = 0; i < terms.length; i += 2) rows.push(terms.slice(i, i + 2).join(' + '));
    const sum = rows.length > 1 ? `\\begin{aligned} \\ket{\\kpsiSTONG} &= ${rows.join(' \\\\ &\\quad + ')} \\end{aligned}` : `\\ket{\\kpsiSTONG} = ${rows[0]}`;
    tex(d.readout, `${sum} \\\\ \\langle \\kphiSTO | \\kpsiSTONG \\rangle = ${fmt(s.ov, s.ov > 0.9999 ? 6 : 5)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- Sim: fit it yourself (Example 11.2.2) ----------
   The radial Slater function S1 = 2 zeta^(3/2) e^(-zeta r) (2.76 at r = 0), and three Gaussians with the
   example's exponents 0.1688, 0.6239, 3.425 (STO-3G's, scaled to zeta = 1.24). Sliders: the coefficients C_j,
   opening on the example's 0.4, 0.7, 1.3. Their dashed circles are the least-squares coefficients over all space
   (weight r^2), found once by solving the 3 by 3 normal equations. x: r 0 to 4 a0; y: 0 to 3.
   Below, the miss S1 - S_G on -0.6 to 0.6. Still: answers its sliders. */
(function () {
  const d = sim('sim-fit', 680);
  const AL = [0.1688, 0.6239, 3.425];
  const S1 = (r) => 2 * ZETA ** 1.5 * Math.exp(-ZETA * r);
  const g = (j) => (r) => Math.exp(-AL[j] * r * r);
  /* the normal equations of the least-squares fit, solved by Cramer's rule */
  const Mx = [0, 1, 2].map((i) => [0, 1, 2].map((j) => integ((r) => r * r * g(i)(r) * g(j)(r))));
  const bv = [0, 1, 2].map((i) => integ((r) => r * r * g(i)(r) * S1(r)));
  const det3 = (m) => m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) - m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) + m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]);
  const D0 = det3(Mx), BEST = [0, 1, 2].map((k) => det3(Mx.map((row, i) => row.map((v, j) => (j === k ? bv[i] : v)))) / D0);
  const nS = integ((r) => r * r * S1(r) ** 2);
  const sl = [0.4, 0.7, 1.3].map((v0, j) => ctl(d.controls, { label: `C_${j + 1}`, cls: '', key: `C${j + 1}`, min: 0, max: 2, step: 0.01, value: v0, unit: '', dec: 2,
    specials: [{ at: BEST[j], label: 'the best fit' }], aria: `the coefficient C${j + 1} of the Gaussian with exponent ${AL[j]}` }));
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    hits = [];
    const Cs = sl.map((s) => s.v), cw = C('wavefunction'), cl = C('length');
    const SG = (r) => Cs.reduce((t, c, j) => t + c * g(j)(r), 0);
    const nG = integ((r) => r * r * SG(r) ** 2), ov = nG > 0 ? integ((r) => r * r * SG(r) * S1(r)) / Math.sqrt(nG * nS) : 0;
    topline(ctx, `At the nucleus the sum reaches $\\kSG(0) = ${fmt(SG(0), 2)}$, against $\\kSone(0) = ${fmt(S1(0), 2)}$ for the Slater orbital.`);
    const box = { l: 150, r: W - 70, t: 120, b: 450 };
    const ax = axes(ctx, box, [0, 4], [0, 3], { nx: 4, ny: 3, xl: '', yl: 'radial function (a₀^{−3/2})', yc: cw });
    const sbox = { l: 150, r: W - 70, t: 515, b: 620 };
    const sx = axes(ctx, sbox, [0, 4], [-0.6, 0.6], { nx: 4, ny: 0, xl: 'distance r (a₀)', yl: 'S₁ − S_G', xc: cl, yc: cw });
    line(ctx, sx.X(0), sx.Y(0), sx.X(4), sx.Y(0), alpha(PAL.ink, 0.35), 2);
    Cs.forEach((c, j) => plot(ctx, ax, (r) => c * g(j)(r), alpha(cw, 0.6), { w: 2, dash: [10, 10] }));
    plot(ctx, ax, S1, PAL.ink, { w: 3 });
    plot(ctx, ax, SG, cw, { w: 5 });
    const miss = (r) => Math.max(-0.6, Math.min(0.6, S1(r) - SG(r)));
    shade(ctx, sx, miss, 0, 0, 4, cw, { alpha: 0.18 });
    plot(ctx, sx, miss, cw, { w: 3 });
    dot(ctx, ax.X(0), ax.Y(S1(0)), PAL.ink, true, 9);
    dot(ctx, ax.X(0), ax.Y(Math.min(3, SG(0))), cw, true, 9);
    F.legend(ctx, ax, [
      { s: 'S₁, ζ₁ = 1.24', color: PAL.ink, w: 3, f: S1 },
      { s: 'S_G, the sum', color: cw, w: 5, f: SG },
      { s: 'the three Gaussians', color: alpha(cw, 0.6), w: 2, dash: [10, 10] },
    ], { corner: 'tr' });
    Cs.forEach((c, j) => { const rh = Math.min(3.8, 0.6 / Math.sqrt(AL[j])); hits.push({ x: ax.X(rh), y: ax.Y(c * g(j)(rh)), r: 12, name: `Gaussian ${j + 1}: C = ${fmt(c, 2)}, α = ${AL[j]}` }); });
    hits.push({ x: ax.X(0), y: ax.Y(S1(0)), r: 16, name: `the cusp of S₁, ${fmt(S1(0), 2)} at r = 0` });
    const terms = Cs.map((c, j) => `${fmt(c, 2)}\\,e^{-${AL[j]}\\kr^2}`).join(' + ');
    tex(d.readout, `\\kSG(\\kr) = ${terms} \\\\ \\dfrac{\\langle \\kSone | \\kSG \\rangle}{\\sqrt{\\langle \\kSone | \\kSone \\rangle \\langle \\kSG | \\kSG \\rangle}} = ${fmt(ov, 4)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
