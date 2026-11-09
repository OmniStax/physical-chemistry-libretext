/* Figures for section 22.2 Gibbs Energy Determines the Direction of Spontaneity at Constant Pressure and Temperature. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['22.2'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, shade, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- Sim: the sign of ΔG = ΔH − TΔS ----------
   x: temperature 0 to 1000 K; y: ΔG −300 to +300 kJ, fixed (the default line runs from −176.2 kJ at 0 K
   to +108.8 kJ at 1000 K; the sliders' extremes leave the frame and are clipped). The point is the zero
   crossing: the book's NH3 + HCl line crosses ΔG = 0 at T = ΔH/ΔS = 618 K, spontaneous below, reverse above.
   ΔH and ΔS sliders flip the signs and give the other three cases. Still: nothing in it has a time. */
(function () {
  const d = sim('sim-gibbs-sign', 600);
  let H = null, S = null;
  const cross = () => { if (!H || !S) return null; const dh = H.v, ds = S.v; if (Math.abs(ds) < 1e-6) return null; const t = dh / ds; return t > 0 && t < 1000 ? t : null; };
  const T = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: 0, max: 1000, step: 1, value: 298, unit: 'K', dec: 0,
    specials: [{ at: () => cross(), label: 'ΔG = 0' }], aria: 'the temperature' });
  H = ctl(d.controls, { label: '\\kDeltaH', cls: 'energy', min: -300, max: 300, step: 0.1, value: -176.2, unit: 'kJ', dec: 1,
    detents: [0], aria: 'the enthalpy change' });
  S = ctl(d.controls, { label: '\\Delta\\kSent', cls: 'entropy', min: -0.5, max: 0.5, step: 0.001, value: -0.285, unit: 'kJ/K', dec: 3,
    detents: [0], aria: 'the entropy change' });
  const hits = [];
  F.hover(d.stage, () => hits);
  const par = (v, dec, u) => (v < 0 ? `(${fmt(v, dec)}\\ \\text{${u}})` : `${fmt(v, dec)}\\ \\text{${u}}`);
  function draw() {
    const { ctx, W } = begin(d.c);
    const t = T.v, dh = H.v, ds = S.v, g = (x) => dh - x * ds, gt = g(t), tc = cross();
    const verdict = Math.abs(gt) < 0.05 ? 'the reaction is at equilibrium' : gt < 0 ? 'the forward reaction is spontaneous' : 'the reverse reaction is spontaneous';
    topline(ctx, `At $\\kT = ${fmt(t, 0)}$ K, $\\Delta\\kG = ${fmt(gt, 1)}$ kJ: ${verdict}.`);
    const box = { l: 150, r: W - 80, t: 110, b: 540 };
    const ax = axes(ctx, box, [0, 1000], [-300, 300], { nx: 5, ny: 4, xl: 'temperature T (K)', yl: 'ΔG (kJ)', xc: C('temperature'), yc: C('energy') });
    /* the zero line, and the two halves of the plane it divides */
    line(ctx, box.l, ax.Y(0), box.r, ax.Y(0), alpha(PAL.ink, 0.55), 2);
    shade(ctx, ax, (x) => Math.min(0, Math.max(-300, g(x))), 0, 0, 1000, C('energy'), { alpha: 0.22 });
    text(ctx, 'spontaneous (ΔG < 0)', box.r - 12, ax.Y(-282), alpha(PAL.ink, 0.7), { size: 20, align: 'right' });
    text(ctx, 'reverse spontaneous (ΔG > 0)', box.r - 12, ax.Y(282), alpha(PAL.ink, 0.7), { size: 20, align: 'right', base: 'top' });
    plot(ctx, ax, g, C('energy'), { w: 5 });
    hits.length = 0;
    if (tc !== null) {
      line(ctx, ax.X(tc), box.t, ax.X(tc), box.b, alpha(C('temperature'), 0.8), 2, [6, 8]);
      dot(ctx, ax.X(tc), ax.Y(0), C('temperature'), false, 9);
      const right = tc < 700;
      text(ctx, `${fmt(tc, 0)} K`, ax.X(tc) + (right ? 12 : -12), ax.Y(0) + (g(tc + 1) > 0 ? 30 : -18), C('temperature'), { size: 20, weight: 600, align: right ? 'left' : 'right' });
      hits.push({ x: ax.X(tc), y: ax.Y(0), r: 16, name: `ΔG = 0 at T = ΔH/ΔS = ${fmt(tc, 0)} K` });
    }
    const yy = Math.max(-300, Math.min(300, gt));
    line(ctx, ax.X(t), ax.Y(0), ax.X(t), ax.Y(yy), alpha(C('energy'), 0.6), 3, [4, 6]);
    dot(ctx, ax.X(t), ax.Y(yy), C('energy'), true, 11);
    hits.push({ x: ax.X(t), y: ax.Y(yy), r: 16, name: `ΔG = ${fmt(gt, 1)} kJ at ${fmt(t, 0)} K` });
    hits.push({ x: ax.X(40), y: ax.Y(Math.max(-300, Math.min(300, g(40)))), r: 14, name: 'ΔG against T: intercept ΔH, slope −ΔS' });
    const lines = [`\\Delta\\kG = \\kDeltaH - \\kT\\Delta\\kSent`,
      `\\Delta\\kG = ${par(dh, 1, 'kJ')} - (${fmt(t, 0)}\\ \\text{K})${par(ds, 3, 'kJ/K')} = ${fmt(gt, 1)}\\ \\text{kJ}`];
    if (tc !== null) lines.push(`\\kT = \\dfrac{\\kDeltaH}{\\Delta\\kSent} = ${fmt(tc, 0)}\\ \\text{K}`);
    tex(d.readout, lines.join(' \\\\ '));
  }
  register(d.fig, { update: () => {}, draw });
})();
};
