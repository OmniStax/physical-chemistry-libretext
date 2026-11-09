/* Figures for section 19.2 Pressure-Volume Work. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['19.2'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, arrow, fmt } = F;

/* ---------- Figure 19.2.1 + 19.2.2 + 19.2.3: the piston and its work ----------
   The gas starts at 1.00 L and 1.00 bar (19.3's cylinder), so nRT = 1.00 L bar = 100 J. Released against a
   constant external pressure it comes to rest where its own pressure equals P_ext, at V = 1.00 L bar / P_ext,
   at the starting temperature. Left, the cylinder: its start dashed, its end solid, the two pressures as
   (symbolic) force arrows on the piston. Right, the PV plane, V 0 to 2.5 L and P 0 to 2.5 bar (the slider
   spans 0.5 to 2 bar, so V runs 0.5 to 2 L): the isotherm P = nRT/V dashed, P_ext as a level from V1 to V2 and
   the rectangle under it, -P_ext dV, shaded in the work colour. Still: the step itself is 19.3's figure. */
(function () {
  const d = F.sim(root, 'sim-pv-work', 600);
  const NRT = 1.0, V1 = 1.0, P1 = 1.0;
  const PX = ctl(d.controls, { label: '\\kPext', cls: 'pressure', min: 0.5, max: 2, step: 0.05, value: 2, unit: 'bar', dec: 2, detents: [{ v: 1, label: 'P' }, 2], snap: true, aria: 'the constant external pressure' });
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const pe = PX.v, V2 = NRT / pe, dV = V2 - V1, wLb = Math.abs(dV) < 1e-9 ? 0 : -pe * dV, wJ = wLb * 100;
    const cp = C('pressure'), cv = C('volume'), cw = C('work');
    const same = Math.abs(pe - P1) < 1e-9;
    topline(ctx, same ? `With $\\kPext = \\kP = 1.00$ bar the forces balance, the piston stays put and $\\kw = 0$.`
      : pe > P1 ? `At $\\kPext = ${fmt(pe, 2)}$ bar the piston is driven down to ${fmt(V2, 2)} L, and the surroundings do ${fmt(wJ, 0)} J of work on the gas.`
        : `At $\\kPext = ${fmt(pe, 2)}$ bar the gas pushes the piston up to ${fmt(V2, 2)} L and does ${fmt(-wJ, 0)} J of work on the surroundings.`);
    /* the cylinder: 150 units per litre, standing on y = 500 */
    const cx = 260, half = 95, base = 520, s = 150, yV = (v) => base - v * s;
    const yTop = yV(2.25);
    ctx.save(); ctx.fillStyle = alpha(cv, 0.16); ctx.fillRect(cx - half, yV(V2), 2 * half, base - yV(V2)); ctx.restore();
    line(ctx, cx - half, yTop, cx - half, base, PAL.ink, 3); line(ctx, cx + half, yTop, cx + half, base, PAL.ink, 3); line(ctx, cx - half, base, cx + half, base, PAL.ink, 3);
    /* the piston where it started, dashed, and where it comes to rest */
    if (!same) line(ctx, cx - half, yV(V1), cx + half, yV(V1), alpha(PAL.ink, 0.45), 3, [10, 10]);
    ctx.save(); ctx.fillStyle = PAL.muted; ctx.fillRect(cx - half + 3, yV(V2) - 16, 2 * half - 6, 16); ctx.fillRect(cx - 8, yV(V2) - 70, 16, 54); ctx.restore();
    /* the two pressures on the piston, as forces */
    const yp = yV(V2);
    arrow(ctx, cx + 55, yp - 100, cx + 55, yp - 22, cp, 4);
    text(ctx, `P_{ext} = ${fmt(pe, 2)} bar`, cx + 70, yp - 84, cp, { size: 20, weight: 600 });
    arrow(ctx, cx - 50, yp + 70, cx - 50, yp + 8, alpha(cp, 0.7), 3);
    text(ctx, `P = ${fmt(NRT / V2, 2)} bar`, cx - half - 12, yp + 46, alpha(cp, 0.85), { size: 20, align: 'right' });
    if (!same) text(ctx, 'start', cx - half - 12, yV(V1) + 6, PAL.muted, { size: 17, align: 'right' });
    text(ctx, `${fmt(V2, 2)} L`, cx, base + 30, cv, { size: 20, weight: 600, align: 'center' });
    hits.length = 0;
    hits.push({ x: cx, y: yp - 8, r: 30, name: `the piston at rest, where P = Pext = ${fmt(pe, 2)} bar` });
    if (!same) hits.push({ x: cx + half - 20, y: yV(V1), r: 16, name: 'where the piston started, 1.00 L at 1.00 bar' });
    /* the PV plane */
    const box = { l: 620, r: 1330, t: 150, b: 520 };
    const ax = axes(ctx, box, [0, 2.5], [0, 2.5], { nx: 5, ny: 5, xl: 'volume V (L)', yl: 'pressure P (bar)', xc: cv, yc: cp });
    const lo = Math.min(V1, V2), hi = Math.max(V1, V2);
    if (!same) { ctx.save(); ctx.fillStyle = alpha(cw, 0.35); ctx.fillRect(ax.X(lo), ax.Y(pe), ax.X(hi) - ax.X(lo), ax.Y(0) - ax.Y(pe)); ctx.restore(); }
    plot(ctx, ax, (v) => NRT / v, alpha(cp, 0.6), { w: 3, dash: [10, 10], x: [0.4, 2.5] });
    line(ctx, ax.X(lo), ax.Y(pe), ax.X(hi), ax.Y(pe), cp, 5);
    line(ctx, ax.X(V2), ax.Y(pe), ax.X(V2), ax.Y(0), alpha(PAL.ink, 0.4), 2, [4, 8]);
    dot(ctx, ax.X(V1), ax.Y(P1), cp, false, 10);
    dot(ctx, ax.X(V2), ax.Y(pe), cp, true, 10);
    text(ctx, '1', ax.X(V1) + 14, ax.Y(P1) - 14, PAL.ink, { size: 22, weight: 600 });
    if (!same) text(ctx, '2', ax.X(V2) + 14, ax.Y(pe) - 14, PAL.ink, { size: 22, weight: 600 });
    text(ctx, 'isotherm', ax.X(2.2) - 10, ax.Y(NRT / 2.2) - 16, alpha(cp, 0.8), { size: 20, align: 'center' });
    if (!same) text(ctx, `|w| = ${fmt(Math.abs(wJ), 0)} J`, ax.X((lo + hi) / 2), ax.Y(pe / 2) + 7, cw, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    hits.push({ x: ax.X(V1), y: ax.Y(P1), r: 14, name: 'state 1: 1.00 L, 1.00 bar' });
    hits.push({ x: ax.X(V2), y: ax.Y(pe), r: 14, name: `state 2: ${fmt(V2, 2)} L, ${fmt(pe, 2)} bar` });
    hits.push({ x: ax.X(1.8), y: ax.Y(NRT / 1.8), r: 14, name: 'the isotherm, the gas\'s own pressure at its starting temperature' });
    const sgn = wLb > 0 ? '+' : '';
    tex(d.readout, `\\kw = -\\kPext\\Delta \\kV \\\\ \\kw = -(${fmt(pe, 2)}\\ \\text{bar})(${fmt(V2, 2)}\\ \\text{L} - ${fmt(V1, 2)}\\ \\text{L}) = ${sgn}${fmt(wLb, 2)}\\ \\text{L bar} = ${sgn}${fmt(wJ, 0)}\\ \\text{J}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
