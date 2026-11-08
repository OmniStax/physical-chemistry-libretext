/* Figures for section 8.10 Hund's Rules Determine the Term Symbols of the Ground Electronic States. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.10'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, text, topline, axes, fmt } = F;

/* =====================================================================
   SIM: carbon's levels, from configuration to J.
   Still: the two sliders scale an interaction's strength, nothing runs in
   time. Measured levels of neutral carbon, 1s2 2s2 2p2, in cm^-1 above
   3P0 (NIST Atomic Spectra Database): 3P0 0, 3P1 16.40, 3P2 43.40,
   1D2 10192.63, 1S0 21648.01. Each term sits at the configuration's
   average (weighted by its 15 microstates) plus k_rep times its measured
   offset from that average; each 3P level sits at the 3P centre (weighted
   by 2J + 1) plus k_so times its measured offset. The main frame is fixed
   at 0 to 24000 cm^-1 (1S0 at full strength is the top); the 3P levels,
   43 cm^-1 apart, vanish at that scale, so the inset on the right shows
   them on their own frame, -35 to +20 cm^-1 about the 3P centre, fixed.
   The point: Hund's order at every strength, 3P lowest, then 1D, then 1S,
   and 3P0 lowest of the 3P levels for a p shell less than half full.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-carbon-levels', 560);
  const pct = (v) => `${Math.round(v * 100)}%`;
  const KE = ctl(d.controls, { label: '\\text{repulsion}', cls: '', key: 'rep', min: 0, max: 1, step: 0.01, value: 1, fmt: pct, aria: 'the strength of the electron repulsion, as a fraction of its real size' });
  const KS = ctl(d.controls, { label: '\\text{spin–orbit}', cls: '', key: 'so', min: 0, max: 1, step: 0.01, value: 1, fmt: pct, aria: 'the strength of the spin-orbit coupling, as a fraction of its real size' });
  const P = [{ J: 0, E: 0 }, { J: 1, E: 16.40 }, { J: 2, E: 43.40 }];
  const Pc = P.reduce((s, p) => s + (2 * p.J + 1) * p.E, 0) / 9;           /* 29.58 */
  const TERMS = [{ s: '^3P', g: 9, E: Pc }, { s: '^1D', g: 5, E: 10192.63, lv: '^1D_2' }, { s: '^1S', g: 1, E: 21648.01, lv: '^1S_0' }];
  const AVG = TERMS.reduce((s, t) => s + t.g * t.E, 0) / 15;               /* 4858.5 */
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const ke = KE.v, ks = KS.v;
    const Et = TERMS.map((t) => AVG + ke * (t.E - AVG));
    const EJ = P.map((p) => Et[0] + ks * (p.E - Pc));
    const dD = Et[1] - EJ[0], dP = EJ[2] - EJ[0];
    topline(ctx, `The lowest level is $^3P_0$; $^1D_2$ lies ${fmt(dD, 0)} cm⁻¹ above it and $^3P_2$ ${fmt(dP, 1)} cm⁻¹.`);
    const box = { l: 150, r: 780, t: 120, b: 500 };
    const cw = C('wavenumber');
    const ax = axes(ctx, box, [0, 1], [0, 24000], { nx: 0, ny: 6, yl: 'energy above ³P₀ at full strength (cm⁻¹)', yc: cw, fy: (v) => fmt(v, 0) });
    const col = [{ x0: 190, x1: 300, h: 'configuration' }, { x0: 400, x1: 510, h: 'terms' }, { x0: 610, x1: 720, h: 'levels' }];
    col.forEach((c) => text(ctx, c.h, (c.x0 + c.x1) / 2, box.b + 34, PAL.muted, { size: 18, align: 'center' }));
    const Y = (e) => ax.Y(e);
    const lvl = (c, e, w = 4) => line(ctx, c.x0, Y(e), c.x1, Y(e), PAL.ink, w);
    const link = (a, ea, b, eb) => line(ctx, a.x1, Y(ea), b.x0, Y(eb), alpha(PAL.ink, 0.35), 2, [4, 8]);
    hits.length = 0;
    lvl(col[0], AVG);
    text(ctx, '2p²', col[0].x0 - 12, Y(AVG), PAL.ink, { size: 22, align: 'right', base: 'middle' });
    hits.push({ x: (col[0].x0 + col[0].x1) / 2, y: Y(AVG), r: 16, name: `the configuration 1s² 2s² 2p², ${fmt(AVG, 0)} cm⁻¹ with no repulsion between the 2p electrons` });
    TERMS.forEach((t, i) => {
      link(col[0], AVG, col[1], Et[i]); lvl(col[1], Et[i]);
      link(col[1], Et[i], col[2], i ? Et[i] : EJ[0]);
      hits.push({ x: (col[1].x0 + col[1].x1) / 2, y: Y(Et[i]), r: 16, name: `the term ${t.s.replace('^3', '³').replace('^1', '¹')}, ${t.g} microstates, ${fmt(Et[i], 0)} cm⁻¹` });
    });
    /* the terms' names, stepped apart where repulsion is turned low and they crowd */
    const ty = Et.map((e) => Y(e));
    for (let i = 1; i < 3; i++) if (ty[i - 1] - ty[i] < 26) ty[i] = ty[i - 1] - 26;
    TERMS.forEach((t, i) => text(ctx, t.s, col[1].x1 + 10, ty[i], PAL.ink, { size: 22, base: 'middle' }));
    /* the levels: 1D2 and 1S0 single; 3P's three are one line at this scale */
    lvl(col[2], EJ[0], 5);
    [1, 2].forEach((i) => { lvl(col[2], Et[i]); hits.push({ x: (col[2].x0 + col[2].x1) / 2, y: Y(Et[i]), r: 16, name: `the level ${TERMS[i].lv.replace('^1', '¹').replace('_2', '₂').replace('_0', '₀')}, ${fmt(Et[i] - EJ[0], 0)} cm⁻¹ above ³P₀` }); });
    const ly = [Y(EJ[0]), ...[1, 2].map((i) => Y(Et[i]))];
    for (let i = 1; i < 3; i++) if (ly[i - 1] - ly[i] < 26) ly[i] = ly[i - 1] - 26;
    text(ctx, '^3P_{2,1,0}', col[2].x1 + 10, ly[0], PAL.ink, { size: 22, base: 'middle' });
    text(ctx, '^1D_2', col[2].x1 + 10, ly[1], PAL.ink, { size: 22, base: 'middle' });
    text(ctx, '^1S_0', col[2].x1 + 10, ly[2], PAL.ink, { size: 22, base: 'middle' });
    /* the inset: 3P's three levels on their own frame about the 3P centre */
    const ib = { l: 1000, r: 1300, t: 170, b: 470 };
    const ia = axes(ctx, ib, [0, 1], [-35, 20], { nx: 0, ny: 11, yl: 'from the ³P centre (cm⁻¹)', yc: cw, fy: (v) => fmt(v, 0) });
    line(ctx, col[2].x1 + 100, Y(EJ[0]), ib.l, ib.t, alpha(PAL.ink, 0.25), 2, [4, 8]);
    line(ctx, col[2].x1 + 100, Y(EJ[0]), ib.l, ib.b, alpha(PAL.ink, 0.25), 2, [4, 8]);
    const iy = P.map((p) => ia.Y(ks * (p.E - Pc)));
    const lab = iy.slice();
    for (let i = 1; i < 3; i++) if (lab[i - 1] - lab[i] < 24) lab[i] = lab[i - 1] - 24;
    P.forEach((p, i) => {
      line(ctx, ib.l + 50, iy[i], ib.r - 90, iy[i], PAL.ink, 4);
      text(ctx, `^3P_${p.J}`, ib.r - 80, lab[i], PAL.ink, { size: 22, base: 'middle' });
      hits.push({ x: (ib.l + ib.r - 40) / 2, y: iy[i], r: 14, name: `the level ³P${'₀₁₂'[p.J]}, ${2 * p.J + 1} states, ${fmt(EJ[i] - EJ[0], 1)} cm⁻¹ above ³P₀` });
    });
    tex(d.readout, `\\knut(^1D_2) - \\knut(^3P_0) = ${fmt(dD, 1)}\\ \\text{cm}^{-1} \\\\ \\knut(^3P_2) - \\knut(^3P_0) = ${fmt(dP, 1)}\\ \\text{cm}^{-1}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
