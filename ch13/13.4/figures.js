/* Figures for section 13.4 Unequal Spacings in Pure Rotational Spectra. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['13.4'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, arrow, text, topline, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* HCl, the section's own numbers: B̃ = 10.4 cm^-1, D̃ = 0.0004 cm^-1 */
const BT = 10.4, DT = 0.0004;

/* =====================================================================
   FIGURE 13.4.2: rigid and non-rigid levels and their spectra. Still: the
   levels have no time in them. Top: F(J) for J = 0 to 10 on one scale,
   0 to 1200 cm^-1; the rigid rotor's B̃J(J + 1) dashed and the non-rigid
   B̃J(J + 1) - D̃J²(J + 1)² solid, with the ΔJ = +1 absorptions as arrows
   (symbolic) between the solid levels, stepped across as the book draws
   them. Bottom: the lines, 0 to 240 cm^-1, rigid dashed and non-rigid solid.
   The true D̃ of HCl would move the J = 10 level by 4.8 cm^-1, under a
   pixel, so the drawing multiplies D̃ by a factor on a slider (root 28.4)
   and the readout writes the true numbers. A second slider picks the line
   J -> J + 1 the readout writes.
===================================================================== */
(function () {
  const d = sim('sim-nonrigid', 700);
  const X = ctl(d.controls, { label: '\\kDt\\ \\text{drawn} \\times', cls: '', min: 1, max: 25, step: 1, value: 20, unit: '', dec: 0, aria: 'how many times the centrifugal distortion constant is exaggerated in the drawing' });
  const JS = ctl(d.controls, { label: 'J', cls: '', min: 0, max: 9, step: 1, value: 9, unit: '', dec: 0, aria: 'the lower level of the line J to J + 1' });
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const x = X.v, J = JS.v, dd = DT * x, cw = C('wavenumber');
    const Fr = (j) => BT * j * (j + 1), Fn = (j, D = dd) => BT * j * (j + 1) - D * j * j * (j + 1) * (j + 1);
    const lv = { l: 170, r: 1250, t: 110, b: 470 }, Y = (f) => lv.b - f / 1200 * (lv.b - lv.t);
    text(ctx, 'F(J) (cm⁻¹)', lv.l - 10, lv.t - 30, cw, { size: 20, weight: 600, align: 'right' });
    for (let j = 0; j <= 10; j++) {
      const on = j === J || j === J + 1;
      line(ctx, lv.l, Y(Fr(j)), lv.r, Y(Fr(j)), alpha(cw, on ? 0.75 : 0.45), 2, [10, 10]);
      line(ctx, lv.l, Y(Fn(j)), lv.r, Y(Fn(j)), on ? cw : alpha(cw, 0.8), on ? 4 : 3);
      if (j === 0 || j >= 4 || on) text(ctx, `J = ${j}`, lv.r + 12, Y(Fn(j)), on ? PAL.ink : PAL.muted, { size: 17, weight: on ? 600 : 400 });
      hits.push({ x: lv.l + 40, y: Y(Fn(j)), r: 8, name: `J = ${j}: ${fmt(Fn(j, DT), 2)} cm⁻¹ (rigid ${fmt(Fr(j), 1)})` });
    }
    [0, 400, 800, 1200].forEach((f) => text(ctx, String(f), lv.l - 12, Y(f), cw, { size: 17, align: 'right' }));
    for (let j = 0; j <= 9; j++) {
      const ax = lv.l + 90 + j * 98;
      arrow(ctx, ax, Y(Fn(j)), ax, Y(Fn(j + 1)), j === J ? PAL.ink : alpha(PAL.ink, 0.35), j === J ? 4 : 2.5);
    }
    /* the spectra */
    const sp = { l: 170, r: 1250, t: 545, b: 625 };
    const sx = F.axes(ctx, sp, [0, 240], [0, 1], { nx: 6, ny: 0, xl: 'wavenumber ν̃ (cm⁻¹)', xc: cw, fx: (v) => fmt(v, 0) });
    for (let j = 0; j <= 9; j++) {
      const r = 2 * BT * (j + 1), n = r - 4 * dd * Math.pow(j + 1, 3), on = j === J;
      line(ctx, sx.X(r), sp.b, sx.X(r), sp.t, alpha(PAL.ink, 0.5), 2, [4, 8]);
      line(ctx, sx.X(n), sp.b, sx.X(n), sp.t + 6, on ? PAL.ink : cw, on ? 5 : 4);
      hits.push({ x: sx.X(n), y: (sp.t + sp.b) / 2, r: 8, name: `the line ${j} → ${j + 1}: ${fmt(2 * BT * (j + 1) - 4 * DT * Math.pow(j + 1, 3), 2)} cm⁻¹ (rigid ${fmt(r, 1)})` });
    }
    F.legend(ctx, { l: sp.l, t: 482, r: sp.r, b: 530 }, [{ s: 'rigid rotor', color: alpha(cw, 0.75), w: 2, dash: [10, 10] }, { s: 'non-rigid rotor', color: cw, w: 4 }], { corner: 'top', panel: false, row: true });
    const up = J + 1, sag = DT * up * up * (up + 1) * (up + 1), short = 4 * DT * Math.pow(up, 3);
    topline(ctx, `The level $J = ${up}$ sits ${fmt(sag, 2)} cm⁻¹ below the rigid rotor's, and the line ${J} → ${up} falls ${fmt(short, 2)} cm⁻¹ short of $2\\kBt(J+1)$.`);
    const f1 = BT * up * (up + 1), f2 = DT * up * up * (up + 1) * (up + 1);
    tex(d.readout, `\\kFrot(J) = \\kBt J(J+1) - \\kDt J^2(J+1)^2 \\\\ \\kFrot(${up}) = (${fmt(BT, 1)})(${up * (up + 1)}) - (${DT})(${up * up * (up + 1) * (up + 1)}) = ${fmt(f1 - f2, 2)}\\ \\text{cm}^{-1} \\\\ \\knut = 2\\kBt(J+1) - 4\\kDt(J+1)^3 = ${fmt(2 * BT * up, 1)} - ${fmt(short, 2)} = ${fmt(2 * BT * up - short, 2)}\\ \\text{cm}^{-1} \\\\ \\small \\text{the drawing multiplies } \\kDt \\text{ by } ${x}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
