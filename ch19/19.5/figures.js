/* Figures for section 19.5 An Adiabatic Process is a Process in which No Energy as Heat is Transferred. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['19.5'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, fmt } = F;

/* ---------- Sim: the isotherm A against the adiabat B and the isochore C (the book's paths image) ----------
   1.00 mol of ideal gas from V1 = 10.0 L at T1 = 300 K (P1 = 249.4 kPa) to V2 = r V1 at T1, all reversible.
   A: the isotherm, w_A = -nRT1 ln r, q_A = -w_A. B: the adiabat, T2 = T1 r^(1 - gamma), P3 = P1 r^(-gamma),
   q_B = 0, w_B = C_v (T2 - T1). C: the isochore at V2, w_C = 0, q_C = C_v (T1 - T2). Monatomic C_v = 3/2 R
   (gamma = 5/3), diatomic 5/2 R (7/5). The book prints no numbers; these are round ones. Left, the PV plane,
   V 0 to 50 L, P 0 to 300 kPa (r spans 1.2 to 4). Right, a bar for each leg's heat and work on one fixed scale,
   +-4000 J (|w_A| peaks at 3458 J at r = 4). Still: the paths are states, nothing runs in time. */
(function () {
  const d = F.sim(root, 'sim-isotherm-adiabat', 560);
  const R = 8.314, n = 1, T1 = 300, V1 = 10, P1 = n * R * T1 / V1;   /* kPa, with V in L */
  const GAS = F.choice(d.controls, { label: '\\text{gas}', options: [{ value: 'mono', label: 'monatomic' }, { value: 'di', label: 'diatomic' }], value: 'mono', aria: 'the kind of ideal gas', key: 'gas' });
  const RV = ctl(d.controls, { label: '\\kVb/\\kVa', cls: '', key: 'ratio', min: 1.2, max: 4, step: 0.05, value: 2, unit: '', dec: 2, detents: [2, 3, 4], snap: true, aria: 'how many times the volume grows' });
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const r = RV.v, mono = GAS.value === 'mono', cvm = (mono ? 1.5 : 2.5) * R, g = mono ? 5 / 3 : 7 / 5;
    const V2 = r * V1, T2 = T1 * Math.pow(r, 1 - g), P2 = P1 / r, P3 = P1 * Math.pow(r, -g);
    const wA = Math.round(-n * R * T1 * Math.log(r)), qA = -wA;
    const wB = Math.round(n * cvm * (T2 - T1)), qC = -wB;
    const cp = C('pressure'), cv = C('volume'), cq = C('heat'), cw = C('work');
    topline(ctx, `Along the adiabat B the gas cools to $\\kTtwo = ${fmt(T2, 1)}$ K and does ${fmt(-wB, 0)} J of work; along the isotherm A it does ${fmt(-wA, 0)} J.`);
    /* the PV plane */
    const box = { l: 140, r: 800, t: 110, b: 490 };
    const ax = axes(ctx, box, [0, 50], [0, 300], { nx: 5, ny: 6, xl: 'volume V (L)', yl: 'pressure P (kPa)', xc: cv, yc: cp });
    plot(ctx, ax, (v) => n * R * T1 / v, alpha(cp, 0.3), { w: 2, x: [8, 50] });
    plot(ctx, ax, (v) => n * R * T1 / v, cp, { w: 5, x: [V1, V2] });
    plot(ctx, ax, (v) => P1 * Math.pow(V1 / v, g), cp, { w: 5, x: [V1, V2], dash: [10, 10] });
    line(ctx, ax.X(V2), ax.Y(P3), ax.X(V2), ax.Y(P2), cp, 5, [4, 8]);
    dot(ctx, ax.X(V1), ax.Y(P1), cp, false, 10);
    dot(ctx, ax.X(V2), ax.Y(P2), cp, true, 10);
    dot(ctx, ax.X(V2), ax.Y(P3), cp, false, 8);
    const vm = Math.sqrt(V1 * V2);
    text(ctx, 'A', ax.X(vm) + 12, ax.Y(n * R * T1 / vm) - 12, PAL.ink, { size: 24, weight: 600 });
    text(ctx, 'B', ax.X(vm) - 26, ax.Y(P1 * Math.pow(V1 / vm, g)) + 30, PAL.ink, { size: 24, weight: 600 });
    text(ctx, 'C', ax.X(V2) + 14, ax.Y((P2 + P3) / 2) + 8, PAL.ink, { size: 24, weight: 600 });
    text(ctx, 'P_1', ax.X(V1) + 14, ax.Y(P1) - 6, cp, { size: 20 });
    hits.length = 0;
    hits.push({ x: ax.X(V1), y: ax.Y(P1), r: 14, name: `the start: ${fmt(P1, 1)} kPa, 10.0 L, 300 K` });
    hits.push({ x: ax.X(V2), y: ax.Y(P2), r: 14, name: `the end: ${fmt(P2, 1)} kPa, ${fmt(V2, 1)} L, 300 K` });
    hits.push({ x: ax.X(V2), y: ax.Y(P3), r: 12, name: `the end of the adiabat: ${fmt(P3, 1)} kPa, ${fmt(T2, 1)} K` });
    hits.push({ x: ax.X(vm), y: ax.Y(n * R * T1 / vm), r: 16, name: 'A, the reversible isotherm at 300 K' });
    hits.push({ x: ax.X(vm), y: ax.Y(P1 * Math.pow(V1 / vm, g)), r: 16, name: 'B, the reversible adiabat, no heat' });
    hits.push({ x: ax.X(V2), y: ax.Y((P2 + P3) / 2), r: 16, name: 'C, the isochoric warming at the final volume' });
    /* the bars, one scale for all: 4000 J per 190 units */
    const y0 = 300, k = 190 / 4000, bw = 56;
    const bars = [
      { x: 930, v: qA, c: cq, s: 'q_A', name: 'heat taken in along A' },
      { x: 1010, v: wA, c: cw, s: 'w_A', name: 'work done on the gas along A' },
      { x: 1160, v: wB, c: cw, s: 'w_B', name: 'work done on the gas along B' },
      { x: 1240, v: qC, c: cq, s: 'q_C', name: 'heat taken in along C' },
    ];
    line(ctx, 880, y0, 1300, y0, alpha(PAL.ink, 0.5), 2);
    text(ctx, '0', 870, y0 + 6, PAL.muted, { size: 17, align: 'right' });
    bars.forEach((b) => {
      const h = b.v * k, top = Math.min(y0, y0 - h);
      ctx.save(); ctx.fillStyle = alpha(b.c, 0.8); ctx.fillRect(b.x - bw / 2, top, bw, Math.abs(h)); ctx.restore();
      text(ctx, `${b.v > 0 ? '+' : ''}${fmt(b.v, 0)} J`, b.x, b.v > 0 ? y0 - h - 12 : y0 - h + 26, b.c, { size: 17, weight: 600, align: 'center' });
      text(ctx, b.s, b.x, b.v > 0 ? y0 + 30 : y0 - 16, b.c, { size: 22, weight: 600, align: 'center' });
      hits.push({ x: b.x, y: y0 - h / 2, r: 30, name: `${b.name}: ${b.v > 0 ? '+' : ''}${fmt(b.v, 0)} J` });
    });
    text(ctx, 'A', 970, 528, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'B + C', 1200, 528, PAL.ink, { size: 22, weight: 600, align: 'center' });
    const sg = (x) => (x < 0 ? `(${fmt(x, 0)}\\ \\text{J})` : `${fmt(x, 0)}\\ \\text{J}`);
    tex(d.readout, `\\kDeltaU_{B+C} = \\kw_B + \\kq_C = ${sg(wB)} + ${sg(qC)} = 0 \\\\ \\kDeltaU_A = \\kw_A + \\kq_A = ${sg(wA)} + ${sg(qA)} = 0`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
