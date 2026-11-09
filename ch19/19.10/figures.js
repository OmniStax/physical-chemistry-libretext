/* Figures for section 19.10 Relative Enthalpies Can Be Determined from Heat Capacity Data and Heats of Transition. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['19.10'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, topline, axes, plot, shade, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- the numbers ----------
   Water's C_p, 75.29 J mol⁻¹ K⁻¹, is the book's (Table 19.13.1). Ice's C_p (38 J mol⁻¹ K⁻¹) and the heat of
   fusion (6.01 kJ/mol) are handbook values the book does not print (CRC Handbook), flagged in LOG.md. */
const CP_ICE = 38, CP_WATER = 75.29, DFUS = 6010, TM = 273, T0 = 253;
const H = (t) => t <= TM ? CP_ICE * (t - T0) : CP_ICE * (TM - T0) + DFUS + CP_WATER * (t - TM);   /* J/mol, from 253 K */

/* ---------- Figure 19.10.1 + the DSC image: the jump in H is a spike in C_p ----------
   Top: H(T) − H(253 K), x 253 to 293 K, y 0 to 9 kJ/mol fixed (8.28 at 293 K): two straight lines of slope C_p and
   the vertical jump Δ_fus H at 273 K. Bottom, the same x: C_p, y 0 to 1400 J mol⁻¹ K⁻¹ fixed; the ideal C_p is the
   step from ice to water with an upward arrow at 273 K for the singularity (a symbol for "infinite", not motion);
   the DSC signal is that baseline plus a Gaussian of width σ whose shaded area is Δ_fus H at every σ (at σ = 2 K it
   peaks at 1255, inside the frame). The state point at T rides both curves, joined by a drop line. Still. */
(function () {
  const d = sim('sim-enthalpy-melting', 700);
  const T = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: 253, max: 293, step: 0.5, value: 293, unit: 'K', dec: 1, detents: [273], snap: true });
  const SG = ctl(d.controls, { label: '\\sigma', cls: '', min: 2, max: 6, step: 0.1, value: 3, unit: 'K', dec: 1 });
  const hov = []; F.hover(d.stage, () => hov);
  const base = (t) => t < TM ? CP_ICE : CP_WATER;
  function draw() {
    const { ctx, W } = begin(d.c);
    const t = T.v, s = SG.v, h = H(t);
    const melted = t > TM;
    topline(ctx, `At $\\kT$ = ${fmt(t, 1)} K, ${melted ? 'the water' : 'the ice'} holds ${fmt(h / 1000, 2)} kJ/mol more enthalpy than the ice at 253 K.`);
    /* top: the enthalpy */
    const top = axes(ctx, { l: 170, r: W - 60, t: 110, b: 330 }, [253, 293], [0, 9], { nx: 4, ny: 3, xl: '', yl: 'H(T) − H(253 K) (kJ/mol)', xc: C('temperature'), yc: C('energy') });
    const hk = (x) => H(x) / 1000;
    plot(ctx, top, [{ f: hk, x: [253, 273], ends: '[]' }, { f: hk, x: [273.0001, 293], ends: '(]' }], C('energy'), { w: 5 });
    line(ctx, top.X(TM), top.Y(hk(TM)), top.X(TM), top.Y(hk(TM) + DFUS / 1000), C('energy'), 5);
    text(ctx, `Δ_{fus}H = ${fmt(DFUS / 1000, 2)} kJ/mol`, top.X(TM) + 14, top.Y(hk(TM) + DFUS / 2000), C('energy'), { size: 20, weight: 600, base: 'middle', bg: PAL.panel });
    /* bottom: the heat capacity */
    const bot = axes(ctx, { l: 170, r: W - 60, t: 400, b: 610 }, [253, 293], [0, 1400], { nx: 4, ny: 4, xl: 'temperature T (K)', yl: 'C_p (J mol⁻¹ K⁻¹)', xc: C('temperature'), yc: C('heat-capacity') });
    const g = (x) => DFUS / (s * Math.sqrt(2 * Math.PI)) * Math.exp(-((x - TM) ** 2) / (2 * s * s));
    const dsc = (x) => base(x) + g(x);
    const area = shade(ctx, bot, dsc, base, Math.max(253, TM - 5 * s), Math.min(293, TM + 5 * s), C('heat-capacity'), { alpha: 0.2 });
    plot(ctx, bot, dsc, alpha(C('heat-capacity'), 0.7), { w: 3, dash: [10, 10] });
    plot(ctx, bot, [{ f: () => CP_ICE, x: [253, 273], ends: '[)' }, { f: () => CP_WATER, x: [273, 293], ends: '[]' }], C('heat-capacity'), { w: 5 });
    arrow(ctx, bot.X(TM), bot.Y(CP_WATER), bot.X(TM), bot.box.t + 4, C('heat-capacity'), 4);
    text(ctx, 'ideal: infinite at 273 K', bot.X(TM) - 14, bot.box.t + 22, C('heat-capacity'), { size: 20, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, `DSC peak, area ${fmt(area / 1000, 2)} kJ/mol`, bot.X(TM) + 14 + 2.2 * s * (bot.X(254) - bot.X(253)), bot.Y(dsc(TM) * 0.55), C('heat-capacity'), { size: 20, base: 'middle', bg: PAL.panel });
    /* the state point on both graphs */
    const xs = top.X(t);
    line(ctx, xs, top.Y(hk(t)), xs, bot.Y(base(t)), alpha(PAL.ink, 0.4), 2, [4, 8]);
    dot(ctx, xs, top.Y(hk(t)), C('energy'), true, 10);
    dot(ctx, xs, bot.Y(t === TM ? CP_ICE : base(t)), C('heat-capacity'), true, 10);
    hov.length = 0;
    hov.push({ x: top.X(263), y: top.Y(hk(263)), r: 14, name: `ice: slope C_p = ${CP_ICE} J mol⁻¹ K⁻¹` });
    hov.push({ x: top.X(283), y: top.Y(hk(283)), r: 14, name: `liquid water: slope C_p = ${CP_WATER} J mol⁻¹ K⁻¹` });
    hov.push({ x: bot.X(263), y: bot.Y(CP_ICE), r: 14, name: `C_p of ice, ${CP_ICE} J mol⁻¹ K⁻¹` });
    hov.push({ x: bot.X(283), y: bot.Y(CP_WATER), r: 14, name: `C_p of liquid water, ${CP_WATER} J mol⁻¹ K⁻¹` });
    hov.push({ x: xs, y: top.Y(hk(t)), r: 14, name: `T = ${fmt(t, 1)} K: H − H(253 K) = ${fmt(h, 0)} J/mol` });
    /* the readout: the section's sum, and the peak's area */
    const d1 = CP_ICE * (Math.min(t, TM) - T0), d3 = CP_WATER * Math.max(0, t - TM);
    const sum = melted
      ? `\\kDeltaH = \\kDeltaH_1 + \\kDeltafusH + \\kDeltaH_3 \\\\ \\kDeltaH = ${fmt(d1, 0)} + ${fmt(DFUS, 0)} + ${fmt(d3, 0)} = ${fmt(d1 + DFUS + d3, 0)}\\ \\text{J/mol}`
      : `\\kDeltaH = \\kDeltaH_1 = \\int_{253\\ \\text{K}}^{${fmt(t, 1)}\\ \\text{K}} C_{P,\\text{ice}}\\,d\\kT = ${fmt(d1, 0)}\\ \\text{J/mol}`;
    tex(d.readout, `${sum} \\\\ \\textstyle\\int (\\text{DSC} - \\text{baseline})\\,d\\kT = ${fmt(area, 0)}\\ \\text{J/mol} = \\kDeltafusH`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
