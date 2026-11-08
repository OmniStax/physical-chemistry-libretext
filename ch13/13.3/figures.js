/* Figures for section 13.3 Unequal Spacings in Vibration-Rotation Spectra. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['13.3'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* HCl: the band origin (Table 13.5.1) and B̃0 = 10.4 cm^-1 (13.4); kT/hc at 298 K for the line heights.
   alpha = B̃0 - B̃1 = 0.31 cm^-1 is the literature value (Huber and Herzberg), not printed in the book. */
const NU0 = 2885.9, B0 = 10.4, KT = 0.69504 * 298;

/* =====================================================================
   FIGURE 13.3.1: the band with B̃1 < B̃0. Still: a spectrum has no time
   in it. Top: wavenumber 2400 to 3200 cm^-1, fixed; the lines from the
   section's two results, R(0) to R(14) and P(1) to P(15), heights from the
   populations of the lower level at 298 K; hollow marks where each line
   would stand with B̃1 = B̃0 (the previous section's even band). Bottom:
   the gap between neighbouring lines against J, R filled and P hollow,
   -10 to 50 cm^-1, with the even band's 2B̃0 dashed. Sliders: alpha =
   B̃0 - B̃1 (0 to 1 cm^-1, detent HCl's 0.31) and the J whose two lines the
   readout writes. Opens on HCl, J = 4.
===================================================================== */
(function () {
  const d = sim('sim-branches', 700);
  const A = ctl(d.controls, { label: '\\kBt_0 - \\kBt_1', cls: 'energy', min: 0, max: 1, step: 0.01, value: 0.31, unit: 'cm⁻¹', dec: 2, detents: [{ v: 0.31, label: 'HCl' }], snap: true, aria: 'how much smaller the rotational constant is in v = 1' });
  const JS = ctl(d.controls, { label: 'J', cls: '', min: 1, max: 13, step: 1, value: 4, unit: '', dec: 0, aria: 'the J of the two lines in the readout' });
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const b1 = B0 - A.v, J = JS.v, cw = C('wavenumber');
    const R = (j, bb = b1) => NU0 + 2 * bb + (3 * bb - B0) * j + (bb - B0) * j * j;
    const P = (j, bb = b1) => NU0 - (bb + B0) * j + (bb - B0) * j * j;
    const pop = (j) => (2 * j + 1) * Math.exp(-B0 * j * (j + 1) / KT);
    let pm = 0; for (let j = 0; j < 30; j++) pm = Math.max(pm, pop(j));
    /* the spectrum */
    const sp = { l: 140, r: 1300, t: 130, b: 340 };
    const ax = F.axes(ctx, sp, [2400, 3200], [0, 1], { nx: 8, ny: 0, xl: 'wavenumber ν̃ (cm⁻¹)', yl: 'intensity', xc: cw, fx: (v) => fmt(v, 0) });
    const stick = (nu, j, on, name) => {
      if (nu < 2400 || nu > 3200) return;
      const x = ax.X(nu), y = ax.Y(0.94 * pop(j) / pm);
      line(ctx, x, sp.b, x, y, on ? PAL.ink : cw, on ? 6 : 4);
      hits.push({ x, y: (y + sp.b) / 2, r: 9, name });
    };
    for (let j = 0; j <= 14; j++) {
      const g = R(j, B0); if (g <= 3200) dot(ctx, ax.X(g), ax.Y(0.94 * pop(j) / pm), alpha(PAL.ink, 0.5), false, 6);
      stick(R(j), j, j === J, `R(${j}) at ${fmt(R(j), 1)} cm⁻¹`);
    }
    for (let j = 1; j <= 15; j++) {
      const g = P(j, B0); if (g >= 2400) dot(ctx, ax.X(g), ax.Y(0.94 * pop(j) / pm), alpha(PAL.ink, 0.5), false, 6);
      stick(P(j), j, j === J, `P(${j}) at ${fmt(P(j), 1)} cm⁻¹`);
    }
    text(ctx, `R(${J})`, ax.X(R(J)), ax.Y(0.94 * pop(J) / pm) - 18, PAL.ink, { size: 17, weight: 600, align: 'center' });
    text(ctx, `P(${J})`, ax.X(P(J)), ax.Y(0.94 * pop(J) / pm) - 18, PAL.ink, { size: 17, weight: 600, align: 'center' });
    text(ctx, 'R branch', ax.X(3080), sp.t + 10, cw, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'P branch', ax.X(2560), sp.t + 10, cw, { size: 20, weight: 600, align: 'center' });
    /* the gaps between neighbours */
    const sR = (j) => (3 * b1 - B0) + (b1 - B0) * (2 * j + 1);       /* R(j + 1) - R(j) */
    const sP = (j) => (b1 + B0) - (b1 - B0) * (2 * j + 1);           /* P(j) - P(j + 1) */
    const gb = { l: 140, r: 1300, t: 450, b: 630 };
    const gx = F.axes(ctx, gb, [0, 14], [-10, 50], { nx: 7, ny: 6, xl: 'J', yl: 'gap to the next line (cm⁻¹)', yc: cw, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    line(ctx, gb.l, gx.Y(0), gb.r, gx.Y(0), alpha(PAL.ink, 0.3), 2);
    line(ctx, gb.l, gx.Y(2 * B0), gb.r, gx.Y(2 * B0), alpha(PAL.ink, 0.45), 2, [10, 10]);
    for (let j = 0; j <= 13; j++) {
      dot(ctx, gx.X(j), gx.Y(sR(j)), cw, true, j === J ? 10 : 7);
      hits.push({ x: gx.X(j), y: gx.Y(sR(j)), r: 10, name: `R(${j}) to R(${j + 1}): ${fmt(sR(j), 1)} cm⁻¹` });
      if (j >= 1) { dot(ctx, gx.X(j), gx.Y(sP(j)), cw, false, j === J ? 10 : 7); hits.push({ x: gx.X(j), y: gx.Y(sP(j)), r: 10, name: `P(${j}) to P(${j + 1}): ${fmt(sP(j), 1)} cm⁻¹` }); }
    }
    F.legend(ctx, gx, [{ s: 'R lines', kind: 'dot', color: cw, draw: (c, x, y) => dot(c, x + 22, y, cw, true, 7) }, { s: 'P lines', kind: 'dot', color: cw }, { s: 'even band, 2B̃₀', color: alpha(PAL.ink, 0.45), w: 2, dash: [10, 10] }], { corner: 'tl' });
    topline(ctx, A.v < 0.005
      ? `With $\\kBt_1 = \\kBt_0$ every line stands $2\\kBt_0 = ${fmt(2 * B0, 1)}$ cm⁻¹ from its neighbour.`
      : `With $\\kBt_1 = ${fmt(b1, 2)}$ cm⁻¹, the R lines close from ${fmt(sR(0), 1)} to ${fmt(sR(J), 1)} cm⁻¹ apart by $J = ${J}$, while the P lines open from ${fmt(sP(1), 1)} to ${fmt(sP(J), 1)} cm⁻¹.`);
    const s = (x) => (x < 0 ? `(${fmt(x, 2)})` : fmt(x, 2));
    tex(d.readout, `\\knutR = \\knut + 2\\kBt_1 + (3\\kBt_1 - \\kBt_0)J + (\\kBt_1 - \\kBt_0)J^2 \\\\ \\knutR = ${fmt(NU0, 1)} + 2(${fmt(b1, 2)}) + ${s(3 * b1 - B0)}(${J}) + ${s(b1 - B0)}(${J})^2 = ${fmt(R(J), 1)}\\ \\text{cm}^{-1} \\\\ \\knutP = \\knut - (\\kBt_1 + \\kBt_0)J + (\\kBt_1 - \\kBt_0)J^2 \\\\ \\knutP = ${fmt(NU0, 1)} - (${fmt(b1 + B0, 2)})(${J}) + ${s(b1 - B0)}(${J})^2 = ${fmt(P(J), 1)}\\ \\text{cm}^{-1}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
