/* Figures for section 26.4 Gibbs Energy of a Reaction vs. Extent of Reaction is a Minimum at Equilibrium. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['26.4'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- Figure 26.4.1 + 26.4.2: G against xi for A <=> B ----------
   Ideal gases at a total pressure of 1 bar, one mole in all: xi mol of B and 1 - xi of A.
   G(xi) = (1 - xi) mu_A° + xi mu_B° + RT[(1 - xi) ln(1 - xi) + xi ln xi], with mu_A° = 0 and mu_B° = Delta_rG°.
   The straight line is the first two terms (unmixed), the mixing term is Equation 26.4.1, their sum the curve.
   y fixed -10 to 6 kJ from the slider extremes (Delta_rG° = -5 kJ/mol at 1000 K bottoms at -8.6 kJ).
   The point: at Delta_rG° = 0 the minimum sits at half and half; Delta_rG° slides it toward the lower side
   but never to an end, because the mixing term's slope is infinite there. Still: it answers its sliders. */
(function () {
  const d = sim('sim-gibbs-extent', 600);
  const R = 8.314e-3;   /* kJ/(mol K) */
  const DG = ctl(d.controls, { label: '\\kDeltarGstd', cls: 'energy', key: 'dg', min: -5, max: 5, step: 0.1, value: 0, unit: 'kJ/mol', dec: 1,
    specials: [{ at: 0, label: 'Δ_rG° = 0: the minimum at half and half' }] });
  const T = ctl(d.controls, { label: '\\kT', cls: 'temperature', key: 't', min: 200, max: 1000, step: 1, value: 298, unit: 'K', dec: 0, detents: [298] });
  const X = ctl(d.controls, { label: '\\kxiext', cls: 'amount', key: 'xi', min: 0.02, max: 0.98, step: 0.01, value: 0.2, unit: 'mol', dec: 2 });
  const xlnx = (x) => (x <= 0 ? 0 : x * Math.log(x));
  const mix = (x, t) => R * t * (xlnx(1 - x) + xlnx(x));
  const G = (x) => x * DG.v + mix(x, T.v);
  const P = F.drag(d, { x: X, y: G });
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    const t = T.v, dg = DG.v, RT = R * t, K = Math.exp(-dg / RT), xeq = K / (1 + K), x = X.v;
    const slope = dg + RT * Math.log(x / (1 - x));
    const way = Math.abs(slope) < 0.005 ? 'the point is at equilibrium' : slope < 0 ? 'the reaction runs forward, toward B' : 'the reaction runs in reverse, toward A';
    topline(ctx, `At $\\kxiext = ${fmt(x, 2)}$ mol the slope is $\\kDeltarG = ${fmt(slope, 2)}$ kJ/mol: ${way}.`);
    const box = { l: 140, r: W - 70, t: 120, b: 500 };
    const ax = axes(ctx, box, [0, 1], [-10, 6], { nx: 5, ny: 8, xl: 'extent of reaction ξ (mol of B)', yl: 'Gibbs energy G (kJ)', xc: C('amount'), yc: C('energy') });
    line(ctx, ax.X(0), ax.Y(0), ax.X(1), ax.Y(0), alpha(PAL.ink, 0.25), 2);
    /* unmixed line, mixing term, and their sum */
    plot(ctx, ax, (u) => u * dg, PAL.muted, { w: 3, dash: [10, 10] });
    plot(ctx, ax, (u) => mix(u, t), alpha(PAL.ink, 0.45), { w: 2 });
    plot(ctx, ax, G, C('energy'), { w: 5 });
    /* the tangent at the dragged point */
    F.tangent(ctx, ax, G, x, alpha(C('energy'), 0.7), { df: () => slope, w: 3 });
    /* the minimum */
    line(ctx, ax.X(xeq), ax.Y(G(xeq)), ax.X(xeq), box.b, alpha(C('amount'), 0.85), 3, [4, 8]);
    dot(ctx, ax.X(xeq), ax.Y(G(xeq)), C('amount'), true, 10);
    text(ctx, `ξ_eq = ${fmt(xeq, 2)}`, ax.X(xeq), box.b - 14, C('amount'), { size: 20, weight: 600, align: xeq > 0.8 ? 'right' : xeq < 0.2 ? 'left' : 'center', bg: true });
    const p = P.draw(ctx, ax, C('energy'));
    if (p) dot(ctx, p.x, p.y, C('energy'), true, 9);
    F.legend(ctx, ax, [
      { s: 'G, including mixing', color: C('energy'), w: 5 },
      { s: 'without mixing', color: PAL.muted, w: 3, dash: [10, 10] },
      { s: 'mixing term ΔG_mix', color: alpha(PAL.ink, 0.45), w: 2 },
    ], { corner: 'above', size: 18 });
    hits.length = 0;
    hits.push({ x: ax.X(xeq), y: ax.Y(G(xeq)), r: 14, name: `the minimum, ξ_eq = ${fmt(xeq, 3)} mol: Δ_rG = 0` });
    if (p) hits.push({ x: p.x, y: p.y, r: 18, name: `ξ = ${fmt(x, 2)} mol, slope Δ_rG = ${fmt(slope, 2)} kJ/mol` });
    tex(d.readout, `\\kDeltarG = \\kDeltarGstd + \\kR\\kT\\ln\\dfrac{\\kPB}{\\kPA} = ${fmt(dg, 1)} + (${fmt(RT, 3)})\\ln\\dfrac{${fmt(x, 2)}}{${fmt(1 - x, 2)}} = ${fmt(slope, 2)}\\ \\text{kJ/mol} \\\\ K = e^{-\\kDeltarGstd/\\kR\\kT} = ${fmt(K, 3)} \\\\ \\kxieq = \\dfrac{K}{1+K} = ${fmt(xeq, 3)}\\ \\text{mol}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
