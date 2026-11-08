/* Figures for section 7.3 Trial Functions Can Be Linear Combinations of Functions That Also Contain Variational Parameters. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.3'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- Sim: an orbital from three exponentials (Equation 7.3.1) ----------
   Still: the function has no time in it; the reader varies the weights and the distance.
   Exercise 7.3.1's case on load: three equal weights with zeta = 1.0, 2.0, 5.0.
   Top: each term c_j e^(-zeta_j r) faint in its own instance colour and their sum, phi_1s, bold;
   r from 0 to 4 a0, phi from 0 to 4 (equal weights of 1 give 3 at the nucleus; the weights reach 2,
   so a larger sum is clipped at the frame, honestly).
   Bottom: the local decay rate -d ln(phi)/d(r/a0) = sum c_j zeta_j e^(-zeta_j r) / sum c_j e^(-zeta_j r),
   0 to 6 per a0. At r = 0 it is the weighted mean of the zetas; far out it falls to the smallest zeta
   that has weight. The three zetas are faint levels labelled at the right edge. */
(function () {
  const d = sim('sim-three-exponentials', 780);
  const Z = [1.0, 2.0, 5.0];
  const cs = [1, 2, 3].map((j) => ctl(d.controls, { label: `c_${j}`, cls: '', key: `c${j}`, min: 0, max: 2, step: 0.05, value: 1, unit: '', dec: 2, detents: [0, 1], snap: true }));
  const R = ctl(d.controls, { label: '\\kr', cls: 'length', min: 0, max: 4, step: 0.05, value: 1, unit: 'a₀', dec: 2 });
  const hits = [];
  F.hover(d.stage, () => hits);
  const term = (j, r) => cs[j].v * Math.exp(-Z[j] * r);
  const phi = (r) => term(0, r) + term(1, r) + term(2, r);
  const rate = (r) => { const p = phi(r); return p > 1e-12 ? (Z[0] * term(0, r) + Z[1] * term(1, r) + Z[2] * term(2, r)) / p : NaN; };
  function draw() {
    const { ctx } = begin(d.c);
    const r = R.v, cw = C('wavefunction'), cl = C('length');
    const any = cs.some((c) => c.v > 0);
    const k = rate(r);
    topline(ctx, any
      ? `At $\\kr = ${fmt(r, 2)}\\,a_0$ the sum decays like a single exponential with $\\zeta = ${fmt(k, 2)}$.`
      : 'With every weight at zero there is no function to draw.');
    /* top: the three terms and their sum */
    const top = { l: 170, r: 1340, t: 110, b: 400 };
    const ax = axes(ctx, top, [0, 4], [0, 4], { nx: 4, ny: 4, xl: '', yl: 'φ₁ₛ(r)', yc: cw });
    for (let j = 0; j < 3; j++) if (cs[j].v > 0) plot(ctx, ax, (x) => term(j, x), alpha(F.cat(j), 0.85), { w: 3, dash: [10, 10] });
    if (any) plot(ctx, ax, phi, cw, { w: 5 });
    F.legend(ctx, ax, [
      { s: 'e^{−r}', color: alpha(F.cat(0), 0.85), w: 3, dash: [10, 10] },
      { s: 'e^{−2r}', color: alpha(F.cat(1), 0.85), w: 3, dash: [10, 10] },
      { s: 'e^{−5r}', color: alpha(F.cat(2), 0.85), w: 3, dash: [10, 10] },
      { s: 'sum φ₁ₛ', color: cw, w: 5 },
    ], { corner: 'tr' });
    /* bottom: the local decay rate */
    const bot = { l: 170, r: 1340, t: 490, b: 720 };
    const bx = axes(ctx, bot, [0, 4], [0, 6], { nx: 4, ny: 3, xl: 'distance from the nucleus r (a₀)', yl: 'decay rate (1/a₀)', xc: cl });
    for (let j = 0; j < 3; j++) {
      line(ctx, bot.l, bx.Y(Z[j]), bot.r, bx.Y(Z[j]), alpha(PAL.ink, 0.25), 2, [4, 8]);
      text(ctx, `ζ = ${fmt(Z[j], 1)}`, bot.r - 6, bx.Y(Z[j]) - 12, alpha(PAL.ink, 0.7), { size: 17, align: 'right' });
    }
    if (any) plot(ctx, bx, rate, PAL.ink, { w: 4 });
    /* the marker at r, through both graphs */
    line(ctx, ax.X(r), top.t, ax.X(r), top.b, alpha(cl, 0.7), 2, [4, 8]);
    line(ctx, bx.X(r), bot.t, bx.X(r), bot.b, alpha(cl, 0.7), 2, [4, 8]);
    hits.length = 0;
    if (any) {
      const p = phi(r);
      if (p <= 4) dot(ctx, ax.X(r), ax.Y(p), cw, true, 9);
      dot(ctx, bx.X(r), bx.Y(k), PAL.ink, true, 9);
      hits.push({ x: ax.X(r), y: ax.Y(Math.min(4, p)), r: 16, name: `φ₁ₛ = ${fmt(p, 3)} at r = ${fmt(r, 2)} a₀` });
      hits.push({ x: bx.X(r), y: bx.Y(k), r: 16, name: `decay rate ${fmt(k, 2)} per a₀ at r = ${fmt(r, 2)} a₀` });
    }
    for (let j = 0; j < 3; j++) if (cs[j].v > 0) {
      const x = [0.9, 0.45, 0.15][j];
      hits.push({ x: ax.X(x), y: ax.Y(Math.min(4, term(j, x))), r: 14, name: `the term ${fmt(cs[j].v, 2)} e^(−${fmt(Z[j], 1)} r/a₀)` });
    }
    const c = cs.map((s) => fmt(s.v, 2));
    const t = (j) => `${c[j]}\\,e^{-${fmt(Z[j], 1)}\\kr/\\kao}`;
    tex(d.readout, any
      ? `\\kvarphions(\\kr) = \\sum_j c_j e^{-\\zeta_j \\kr/\\kao} \\\\ \\kvarphions(\\kr) = ${t(0)} + ${t(1)} + ${t(2)} \\\\ -\\dfrac{d\\ln\\kvarphions}{d(\\kr/\\kao)} = \\dfrac{\\sum_j c_j\\zeta_j e^{-\\zeta_j \\kr/\\kao}}{\\sum_j c_j e^{-\\zeta_j \\kr/\\kao}} = ${fmt(k, 2)} \\text{ at } \\kr = ${fmt(r, 2)}\\,\\kao`
      : `\\kvarphions(\\kr) = \\sum_j c_j e^{-\\zeta_j \\kr/\\kao} = 0`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
