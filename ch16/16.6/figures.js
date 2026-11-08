/* Figures for section 16.6 The Repulsive Term in the Lennard-Jones Potential. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['16.6'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- Figure 16.6.1 (with Figures A and C): two atoms and the Lennard-Jones curve ----------
   Above, two atoms on a line, each drawn with radius σ/2 (the van der Waals radius) at 64 units per Å,
   centred on the canvas r apart, so they touch exactly at r = σ. The force
   arrows on them (symbolic) are −dV/dr: apart inside r_min, together outside it, none at it.
   Below, V(r) = 4ε[(σ/r)¹² − (σ/r)⁶] with its two terms dashed. x: r 2 to 10 Å; y: V −2 to 2 kJ/mol
   (the deepest well the ε slider reaches is 2.0). Opens on Example 16.6.2: argon, ε = 0.997 kJ/mol,
   σ = 3.40 Å, r = 4.0 Å; detents at xenon's 1.77 kJ/mol and 4.10 Å (Example 16.6.1).
   Still: the book's four panels of Figure A are positions, which the drag reaches. */
(function () {
  const d = sim('sim-lennard-jones', 910);
  const EP = ctl(d.controls, { label: '\\kepsilon', cls: 'energy', min: 0.5, max: 2.0, step: 0.001, value: 0.997, unit: 'kJ/mol', dec: 3, detents: [0.997, 1.77], snap: true, aria: 'the well depth' });
  const SG = ctl(d.controls, { label: '\\ksigmalj', cls: 'length', min: 3.0, max: 4.2, step: 0.01, value: 3.40, unit: 'Å', dec: 2, detents: [3.40, 4.10], snap: true, aria: 'the separation where the potential is zero' });
  const RR = ctl(d.controls, { label: '\\kr', cls: 'length', min: 2.8, max: 9.5, step: 0.01, value: 4.0, unit: 'Å', dec: 2,
    specials: [{ at: () => SG.v, label: 'r = σ' }, { at: () => Math.pow(2, 1 / 6) * SG.v, label: 'r = r_min' }], aria: 'the separation of the two atoms' });
  const V = (r) => { const q6 = Math.pow(SG.v / r, 6); return 4 * EP.v * (q6 * q6 - q6); };
  const rep = (r) => 4 * EP.v * Math.pow(SG.v / r, 12), att = (r) => -4 * EP.v * Math.pow(SG.v / r, 6);
  const force = (r) => { const q6 = Math.pow(SG.v / r, 6); return 4 * EP.v * (12 * q6 * q6 - 6 * q6) / r; };   /* −dV/dr, kJ mol⁻¹ Å⁻¹; positive pushes apart */
  const P = F.drag(d, { x: RR, y: V });
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const ep = EP.v, sg = SG.v, r = RR.v, rmin = Math.pow(2, 1 / 6) * sg, ce = C('energy'), cl = C('length'), cf = C('force');
    const box = { l: 200, r: 1260, t: 460, b: 840 };
    const ax = axes(ctx, box, [2, 10], [-2, 2], { nx: 8, ny: 4, xl: 'separation r (Å)', yl: 'potential V (kJ/mol)', xc: cl, yc: ce });
    /* the scene: two atoms on the graph's own r scale */
    const S = 64, cy = 260, rad = (sg / 2) * S, x1 = 700 - r * S / 2, x2 = 700 + r * S / 2;
    line(ctx, 30, cy, 1370, cy, alpha(PAL.ink, 0.25), 2);
    [x1, x2].forEach((x) => { ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.12); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(x, cy, rad, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore(); dot(ctx, x, cy, PAL.ink, true, 5); });
    hits.push({ x: x1, y: cy, r: rad, name: `atom 1, radius σ/2 = ${fmt(sg / 2, 2)} Å` });
    hits.push({ x: x2, y: cy, r: rad, name: `atom 2, ${fmt(r, 2)} Å from atom 1` });
    /* the forces, symbolic: apart inside r_min, together outside it */
    const f = force(r), len = Math.max(-170, Math.min(170, 160 * f));
    if (Math.abs(len) > 6) {
      arrow(ctx, x2, cy - rad - 26, x2 + len, cy - rad - 26, cf, 5);
      arrow(ctx, x1, cy - rad - 26, x1 - len, cy - rad - 26, cf, 5);
      text(ctx, f > 0 ? 'repulsive force' : 'attractive force', 700, cy + rad + 30, cf, { size: 20, align: 'center' });
    } else text(ctx, 'no force', 700, cy + rad + 30, cf, { size: 20, align: 'center' });
    /* the curve and its two terms */
    line(ctx, box.l, ax.Y(0), box.r, ax.Y(0), alpha(PAL.ink, 0.4), 2);
    plot(ctx, ax, rep, alpha(ce, 0.6), { w: 3, dash: [10, 10] });
    plot(ctx, ax, att, alpha(ce, 0.6), { w: 3, dash: [3, 7] });
    plot(ctx, ax, V, ce, { w: 5 });
    /* σ where V = 0, and the well of depth ε at r_min */
    line(ctx, ax.X(sg), ax.Y(0) + 8, ax.X(sg), box.b, alpha(cl, 0.7), 2, [4, 8]);
    text(ctx, 'σ', ax.X(sg) - 12, box.b - 14, cl, { size: 22, align: 'right' });
    line(ctx, ax.X(rmin), ax.Y(-ep), ax.X(rmin), box.b, alpha(cl, 0.7), 2, [4, 8]);
    text(ctx, 'r_{min}', ax.X(rmin) + 10, box.b - 14, cl, { size: 22 });
    line(ctx, ax.X(rmin) + 40, ax.Y(0), ax.X(rmin) + 40, ax.Y(-ep), alpha(ce, 0.8), 3);
    text(ctx, 'ε', ax.X(rmin) + 54, ax.Y(-ep / 2), ce, { size: 24, base: 'middle' });
    hits.push({ x: ax.X(rmin), y: ax.Y(-ep), r: 14, name: `the bottom of the well: r_min = ${fmt(rmin, 2)} Å, V = −ε = −${fmt(ep, 3)} kJ/mol` });
    hits.push({ x: ax.X(sg), y: ax.Y(0), r: 14, name: `V = 0 at r = σ = ${fmt(sg, 2)} Å` });
    const p = P.draw(ctx, ax, ce);
    if (p) dot(ctx, p.x, p.y, ce, true, 9);
    F.legend(ctx, ax, [{ s: 'V(r)', color: ce, w: 5 }, { s: 'repulsion 4ε(σ/r)¹²', color: alpha(ce, 0.6), w: 3, dash: [10, 10] }, { s: 'attraction −4ε(σ/r)⁶', color: alpha(ce, 0.6), w: 3, dash: [3, 7] }], { corner: 'tr' });
    topline(ctx, Math.abs(r - rmin) < 0.015
      ? `At $\\kr = \\krmin = ${fmt(rmin, 2)}$ Å the force is zero and $\\kV = -\\kepsilon$: the bottom of the well.`
      : r < rmin
        ? `At $\\kr = ${fmt(r, 2)}$ Å, inside $\\krmin = ${fmt(rmin, 2)}$ Å, the two atoms repel.`
        : `At $\\kr = ${fmt(r, 2)}$ Å, outside $\\krmin = ${fmt(rmin, 2)}$ Å, the two atoms attract.`);
    const q = sg / r, t12 = +Math.pow(q, 12).toFixed(4), t6 = +Math.pow(q, 6).toFixed(4), pre = +(4 * ep).toFixed(3);
    tex(d.readout, `\\kV(\\kr) = 4\\kepsilon\\left[\\left(\\dfrac{\\ksigmalj}{\\kr}\\right)^{12} - \\left(\\dfrac{\\ksigmalj}{\\kr}\\right)^{6}\\right] \\\\ \\kV = 4(${fmt(ep, 3)}\\ \\text{kJ/mol})\\left[\\left(\\dfrac{${fmt(sg, 2)}\\ \\text{Å}}{${fmt(r, 2)}\\ \\text{Å}}\\right)^{12} - \\left(\\dfrac{${fmt(sg, 2)}\\ \\text{Å}}{${fmt(r, 2)}\\ \\text{Å}}\\right)^{6}\\right] = ${fmt(pre, 3)}(${fmt(t12, 4)} - ${fmt(t6, 4)}) = ${fmt(pre * (t12 - t6), 3)}\\ \\text{kJ/mol}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
