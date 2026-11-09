/* Figures for section 26.5 Reaction Quotient and Equilibrium Constant Ratio Determines Reaction Direction. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['26.5'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
/* a number as m × 10^k in TeX, or plain where it is short */
function sci(x, d) {
  if (x >= 0.01 && x < 1000) return fmt(x, x < 1 ? 3 : x < 10 ? 2 : x < 100 ? 1 : 0);
  const k = Math.floor(Math.log10(x)), m = x / Math.pow(10, k);
  return `${m.toFixed(d)}\\times10^{${k}}`;
}
/* the same as plain text with Unicode superscripts, for a slider value and hover names */
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
function sciText(x) {
  if (x >= 0.01 && x < 1000) return fmt(x, x < 1 ? 3 : x < 10 ? 2 : x < 100 ? 1 : 0);
  const k = Math.floor(Math.log10(x)), m = x / Math.pow(10, k);
  return `${m.toFixed(1)} × 10${String(k).split('').map((c) => SUP[c]).join('')}`;
}

/* ---------- Sim: Q walks to K ----------
   N2 + 3H2 <=> 2NH3 at 298.15 K and a total pressure of 1 bar, from 1 mol N2 and 3 mol H2 (xi = 0) to
   2 mol NH3 (xi = 1). The book's Delta_rG° = -32.9 kJ/mol (Section 26.6) gives K = 5.81 x 10^5, reached at
   xi_eq = 0.968 mol. Top: G(xi) = sum n_i (mu_i° + RT ln x_i) with mu°(N2) = mu°(H2) = 0, mu°(NH3) = -16.45 kJ/mol,
   y fixed -35 to 0 kJ (G runs from -5.6 kJ at xi = 0 to -33.2 kJ at the minimum). Bottom: Delta_rG = RT ln(Q/K)
   against log10 Q, a straight line through zero at log K, x fixed -4 to 12 and y -50 to 30 kJ/mol from the slider's
   ends (log Q0 -3 to 11). Moving: the reaction runs; log Q eases from log Q0 to log K over 5 s and xi follows it.
   The point: the sign of ln(Q/K) is the direction, and the reaction stops exactly when Q reaches K, from either side.
   The valley beyond xi_eq is 0.3 kJ deep, too shallow to see on the top graph; the bottom line shows the reverse run. */
(function () {
  const d = sim('sim-q-toward-k', 720);
  const RUN = 5, R = 8.314, T = 298.15, DG0 = -32.9e3, RT = R * T, K = Math.exp(-DG0 / RT), LK = Math.log10(K);
  const cy = F.cycle(() => RUN, 1.2);
  const Q0 = ctl(d.controls, { label: 'Q_0', cls: '', key: 'q0', min: -3, max: 11, step: 0.05, value: 0, unit: '', dec: 2,
    fmt: (lg) => sciText(Math.pow(10, lg)), detents: [0], specials: [{ at: LK, label: 'Q₀ = K: already at equilibrium' }], onInput: () => cy.reset() });
  const amounts = (x) => { const a = 1 - x, b = 3 * (1 - x), c = 2 * x; return [a, b, c, a + b + c]; };
  const logQ = (x) => { const [a, b, c, n] = amounts(x); return 2 * Math.log10(c / n) - Math.log10(a / n) - 3 * Math.log10(b / n); };
  const G = (x) => { const [a, b, c, n] = amounts(x); let s = 0; [[a, 0], [b, 0], [c, DG0 / 2]].forEach(([m, mu]) => { if (m > 0) s += m * (mu + RT * Math.log(m / n)); }); return s / 1000; };
  /* the extent at which log Q has a given value (log Q rises with xi) */
  const xiOf = (lq) => { let lo = 1e-9, hi = 1 - 1e-9; for (let i = 0; i < 60; i++) { const m = (lo + hi) / 2; if (logQ(m) < lq) lo = m; else hi = m; } return (lo + hi) / 2; };
  const XEQ = xiOf(LK);
  const smooth = (k) => k * k * (3 - 2 * k);
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    const k = Math.min(cy.now(), RUN) / RUN, l0 = Q0.v, lq = LK + (l0 - LK) * (1 - smooth(k));
    const x0 = xiOf(l0), x = xiOf(lq), q = Math.pow(10, lq), dgr = RT * Math.LN10 * (lq - LK) / 1000;
    const done = Math.abs(lq - LK) < 0.01;
    topline(ctx, done ? `$Q$ has reached $K = ${sci(K, 2)}$: $\\kDeltarG = 0$ and the reaction stops.`
      : `$Q = ${sci(q, 2)}$ is ${lq < LK ? 'below' : 'above'} $K$, so $\\kDeltarG ${lq < LK ? '<' : '>'} 0$ and the reaction runs ${lq < LK ? 'forward' : 'in reverse'}.`);
    /* top: G against xi */
    const top = { l: 150, r: W - 70, t: 110, b: 350 };
    const a1 = axes(ctx, top, [0, 1], [-35, 0], { nx: 5, ny: 7, xl: 'extent of reaction ξ (mol)', yl: 'G (kJ)', xc: C('amount'), yc: C('energy') });
    plot(ctx, a1, G, C('energy'), { w: 5 });
    line(ctx, a1.X(XEQ), a1.Y(G(XEQ)), a1.X(XEQ), top.b, alpha(C('amount'), 0.85), 3, [4, 8]);
    text(ctx, `ξ_eq = ${fmt(XEQ, 3)}`, a1.X(XEQ) - 10, a1.Y(G(XEQ)) - 26, C('amount'), { size: 20, weight: 600, align: 'right', bg: PAL.panel });
    dot(ctx, a1.X(x0), a1.Y(G(x0)), C('energy'), false, 10);
    dot(ctx, a1.X(x), a1.Y(G(x)), C('energy'), true, 11);
    /* bottom: Delta_rG against log10 Q */
    const bot = { l: 150, r: W - 70, t: 440, b: 650 };
    const a2 = axes(ctx, bot, [-4, 12], [-50, 30], { nx: 8, ny: 8, xl: 'log₁₀ Q', yl: 'Δ_rG (kJ/mol)', yc: C('energy') });
    line(ctx, a2.X(-4), a2.Y(0), a2.X(12), a2.Y(0), alpha(PAL.ink, 0.4), 2);
    line(ctx, a2.X(LK), bot.t, a2.X(LK), bot.b, alpha(PAL.ink, 0.4), 3, [10, 10]);
    text(ctx, 'Q = K', a2.X(LK) + 10, bot.t + 22, PAL.ink, { size: 20 });
    plot(ctx, a2, (u) => RT * Math.LN10 * (u - LK) / 1000, C('energy'), { w: 4 });
    text(ctx, 'forward', a2.X(1), a2.Y(-38), PAL.muted, { size: 20, align: 'center' });
    text(ctx, 'reverse', a2.X(10), a2.Y(8), PAL.muted, { size: 20, align: 'center' });
    dot(ctx, a2.X(l0), a2.Y(RT * Math.LN10 * (l0 - LK) / 1000), C('energy'), false, 10);
    dot(ctx, a2.X(lq), a2.Y(dgr), C('energy'), true, 11);
    hits.length = 0;
    hits.push({ x: a1.X(x), y: a1.Y(G(x)), r: 16, name: `the mixture now: ξ = ${fmt(x, 3)} mol, G = ${fmt(G(x), 2)} kJ` });
    hits.push({ x: a1.X(x0), y: a1.Y(G(x0)), r: 14, name: `the start: ξ = ${fmt(x0, 3)} mol` });
    hits.push({ x: a1.X(XEQ), y: a1.Y(G(XEQ)), r: 14, name: `the minimum of G, where Q = K` });
    hits.push({ x: a2.X(lq), y: a2.Y(dgr), r: 16, name: `Q = ${sciText(q)}, Δ_rG = ${fmt(dgr, 1)} kJ/mol` });
    tex(d.readout, `\\kDeltarG = \\kR\\kT \\ln \\left(\\dfrac{Q}{K}\\right) = (8.314)(298.15)\\ln\\left(\\dfrac{${sci(q, 2)}}{${sci(K, 2)}}\\right)\\ \\text{J/mol} = ${done ? '0' : fmt(dgr, 1)}\\ \\text{kJ/mol}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
