/* Figures for section 21.5 Practical Absolute Entropies Can Be Determined Calorimetrically. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['21.5'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, text, topline, axes, plot, shade, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- Figure 21.5.1: the entropy of CO2 from 0 K ----------
   The book's curve, read off its image and fitted: the solid's C_P/T is a Debye curve (1.65 × 3R, Θ = 167.5 K)
   plus 4.0 × 10⁻⁴ T, which reproduces the book's S(T) to 0.2 J/(mol K) and reaches 69.4 at 194.7 K; the gas has
   C_P^g = 34.67 J/(mol K), from the book's rise of 199.8 to 214.7 J/(mol K) between 194.7 and 300 K. The jump
   between the two curves at T_sub is Δ_sub H/T_sub. Top: C_P/T with the area under it shaded up to T. Bottom:
   S(T) traced to T, and a column stacking the three pieces. The point is the column: at 300 K the jump is most
   of the entropy, the solid's area a third of it and the gas a sliver. */
(function () {
  const d = sim('sim-calorimetric-entropy', 700);
  const R = 8.314, TSUB = 194.7, A = 1.65, THETA = 167.5, B = 4.0e-4, CPG = 34.67, SGAS0 = 199.76;
  const T = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: 0, max: 300, step: 0.1, value: 300, unit: 'K', dec: 1,
    detents: [{ v: TSUB, label: 'sublimation' }], snap: true });
  const debye = (u) => {
    const xd = Math.min(1 / u, 80), n = 200, h = xd / n;
    const f = (x) => x < 1e-8 ? 0 : x * x * x * x * Math.exp(-x) / Math.pow(1 - Math.exp(-x), 2);
    let s = f(0) + f(xd);
    for (let i = 1; i < n; i++) s += (i % 2 ? 4 : 2) * f(i * h);
    return 3 * u * u * u * s * h / 3;
  };
  const cpSolid = (t) => t <= 0 ? 0 : A * 3 * R * debye(t / THETA) / t + B * t;   /* C_P/T of the solid, J/(mol K²) */
  const cpGas = (t) => CPG / t;
  /* S of the solid, tabulated by the trapezium rule every 0.1 K */
  const DT = 0.1, N = Math.round(TSUB / DT) + 1, Ss = [0];
  let prev = 0;
  for (let i = 1; i < N; i++) { const t = Math.min(i * DT, TSUB), c = cpSolid(t); Ss.push(Ss[i - 1] + (prev + c) / 2 * (t - (i - 1) * DT)); prev = c; }
  const sSolid = (t) => { const g = Math.min(t, TSUB) / DT, i = Math.min(N - 2, Math.floor(g)); return Ss[i] + (Ss[i + 1] - Ss[i]) * (g - i); };
  const S0 = sSolid(TSUB), JUMP = SGAS0 - S0, DH = JUMP * TSUB / 1000;
  const sGas = (t) => CPG * Math.log(t / TSUB);
  const S = (t) => t < TSUB ? sSolid(t) : S0 + JUMP + sGas(t);
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    const t = T.v, past = t >= TSUB;
    const a = +fmt(sSolid(t), 1), j = past ? +fmt(JUMP, 1) : 0, g = past ? +fmt(sGas(t), 1) : 0, tot = a + j + g;
    topline(ctx, past
      ? `At $\\kT = ${fmt(t, 1)}$ K, $\\kSent = ${fmt(tot, 1)}$ J/(mol K), and ${fmt(100 * j / tot, 0)}% of it is the jump at sublimation.`
      : `At $\\kT = ${fmt(t, 1)}$ K, $\\kSent = ${fmt(a, 1)}$ J/(mol K), all of it the area under $\\kCP/\\kT$ of the solid.`);
    /* top: C_P/T and the area under it */
    const top = { l: 170, r: 1080, t: 120, b: 320 };
    const ax = axes(ctx, top, [0, 300], [0, 0.6], { nx: 6, ny: 3, xl: 'temperature T (K)', yl: 'C_P/T (J/(mol K²))', xc: C('temperature'), yc: C('heat-capacity') });
    shade(ctx, ax, cpSolid, 0, 0.01, Math.min(t, TSUB), C('heat-capacity'), { alpha: 0.35 });
    if (past && t > TSUB + 0.05) shade(ctx, ax, cpGas, 0, TSUB, t, C('heat-capacity'), { alpha: 0.15 });
    plot(ctx, ax, [{ f: cpSolid, x: [0.01, TSUB] }, { f: cpGas, x: [TSUB, 300] }], C('heat-capacity'), { w: 4 });
    text(ctx, 'solid', ax.X(70), ax.Y(0.56), C('heat-capacity'), { size: 20, weight: 600, align: 'center' });
    text(ctx, 'gas', ax.X(250), ax.Y(0.24), C('heat-capacity'), { size: 20, weight: 600, align: 'center' });
    /* bottom: S(T) */
    const bot = { l: 170, r: 1080, t: 420, b: 630 };
    const bx = axes(ctx, bot, [0, 300], [0, 250], { nx: 6, ny: 5, xl: 'temperature T (K)', yl: 'entropy S (J/(mol K))', xc: C('temperature'), yc: PAL.ink });
    plot(ctx, bx, [{ f: sSolid, x: [0, TSUB] }, { f: (x) => S0 + JUMP + sGas(x), x: [TSUB, 300] }], alpha(PAL.ink, 0.2), { w: 3 });
    plot(ctx, bx, [{ f: sSolid, x: [0, Math.min(t, TSUB)] }].concat(past ? [{ f: (x) => S0 + JUMP + sGas(x), x: [TSUB, Math.max(t, TSUB + 0.01)] }] : []), PAL.ink, { w: 5 });
    line(ctx, bx.X(TSUB), bx.Y(S0), bx.X(TSUB), bx.Y(S0 + JUMP), past ? C('energy') : alpha(C('energy'), 0.25), past ? 5 : 3);
    /* the sublimation temperature through both graphs */
    line(ctx, ax.X(TSUB), top.t, ax.X(TSUB), bot.b, alpha(C('temperature'), 0.5), 2, [4, 8]);
    text(ctx, 'sublimation, 194.7 K', ax.X(TSUB) + 10, top.t - 2, C('temperature'), { size: 17 });
    line(ctx, ax.X(t), top.t, ax.X(t), bot.b, alpha(C('temperature'), 0.85), 3);
    /* the column: the three pieces of S(T) stacked */
    const cx = 1150, cw = 60, seg = (lo, hi, col) => { const y0 = bx.Y(lo), y1 = bx.Y(hi); ctx.save(); ctx.fillStyle = col; ctx.fillRect(cx, y1, cw, y0 - y1); ctx.restore(); return [y0, y1]; };
    hits.length = 0;
    const [s0, s1] = seg(0, a, alpha(C('heat-capacity'), 0.6));
    if (a > 8) text(ctx, `solid ${fmt(a, 1)}`, cx + cw + 12, (s0 + s1) / 2, C('heat-capacity'), { size: 18, weight: 600 });
    hits.push({ x: cx + cw / 2, y: (s0 + s1) / 2, r: 24, name: `the area under C_P/T of the solid: ${fmt(a, 1)} J/(mol K)` });
    if (past) {
      const [j0, j1] = seg(a, a + j, alpha(C('energy'), 0.55));
      text(ctx, `jump ${fmt(j, 1)}`, cx + cw + 12, (j0 + j1) / 2, C('energy'), { size: 18, weight: 600 });
      hits.push({ x: cx + cw / 2, y: (j0 + j1) / 2, r: 30, name: `the jump at sublimation, ΔH_sub/T_sub = ${fmt(DH, 2)} kJ/mol ÷ 194.7 K = ${fmt(j, 1)} J/(mol K)` });
      if (g > 0.05) {
        const [g0, g1] = seg(a + j, tot, alpha(C('heat-capacity'), 0.3));
        text(ctx, `gas ${fmt(g, 1)}`, cx + cw + 12, g1 - 14, C('heat-capacity'), { size: 18, weight: 600 });
        hits.push({ x: cx + cw / 2, y: (g0 + g1) / 2, r: 16, name: `the area under C_P/T of the gas: ${fmt(g, 1)} J/(mol K)` });
      }
    }
    hits.push({ x: bx.X(TSUB), y: bx.Y(S0 + JUMP / 2), r: 16, name: `the sublimation jump at 194.7 K, from ${fmt(S0, 1)} to ${fmt(S0 + JUMP, 1)} J/(mol K)` });
    tex(d.readout, past
      ? `\\kSent(\\kT)=\\int_{0}^{\\kTsub}\\frac{\\kCP}{\\kT}d\\kT+\\frac{\\Delta H_{sub}}{\\kTsub}+\\int_{\\kTsub}^{\\kT}\\frac{\\kCPg}{\\kT}d\\kT \\\\ \\kSent(${fmt(t, 1)}\\ \\text{K}) = ${fmt(a, 1)} + \\frac{${fmt(DH * 1000, 0).replace(/(\\d\\d)(\\d\\d\\d)$/, '$1\\\\,$2')}\\ \\text{J/mol}}{194.7\\ \\text{K}} + ${fmt(g, 1)} = ${fmt(tot, 1)}\\ \\text{J/(mol K)}`
      : `\\kSent(\\kT)=\\int_{0}^{\\kT}\\frac{\\kCP}{\\kT}d\\kT \\\\ \\kSent(${fmt(t, 1)}\\ \\text{K}) = ${fmt(a, 1)}\\ \\text{J/(mol K)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
