/* Figures for section 24.9 Gibbs Energy of Mixing of Binary Solutions in Terms of the Activity Coefficient.
   Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['24.9'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, fmt, legend } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- Sim: the regular solution's Gibbs energy of mixing as RT/W changes ----------
   The book's rearranged form, Delta_mix G / W = (RT/W)[x1 ln x1 + x2 ln x2] + x1 x2. Dividing by W keeps
   the interaction term fixed (the parabola x1 x2) while the entropy term scales with RT/W, so the
   competition the text describes is read straight off the left panel. Below RT/W = 1/2 (a = W/RT > 2)
   the curve has two minima; by symmetry their common tangent is horizontal, and its two touching points
   are the coexisting liquids, found from (1 - 2x)/ln((1 - x)/x) = RT/W. The right panel traces those
   compositions against RT/W: the miscibility dome, whose top is the consolute point (RT/W = 1/2). */
(function () {
  const xlnx = (x) => (x <= 0 || x >= 1 ? 0 : x * Math.log(x));
  const Sterm = (t) => (x) => t * (xlnx(x) + xlnx(1 - x));
  const Hterm = (x) => x * (1 - x);
  const Gw = (t) => (x) => Sterm(t)(x) + Hterm(x);
  /* the dome: RT/W at which composition x (and 1 - x) coexists */
  const dome = (x) => (Math.abs(x - 0.5) < 1e-6 ? 0.5 : (1 - 2 * x) / Math.log((1 - x) / x));
  /* the left coexisting composition at RT/W = t < 1/2, by bisection on (0, 1/2) */
  function binodal(t) {
    if (t >= 0.5) return null;
    let lo = 1e-12, hi = 0.5 - 1e-9;
    for (let i = 0; i < 80; i++) { const m = (lo + hi) / 2; if (dome(m) < t) lo = m; else hi = m; }
    return (lo + hi) / 2;
  }

  const d = sim('sim-mixing-gibbs', 600);
  const tau = ctl(d.controls, { label: '\\kR\\kT/\\kWint', cls: '', key: 'rtw', min: 0.15, max: 1.0, step: 0.01, value: 0.40, unit: '', dec: 2,
    specials: [{ at: 0.5, label: 'consolute point' }] });
  const xs = ctl(d.controls, { label: '\\kxone', cls: '', key: 'x1', min: 0.02, max: 0.98, step: 0.01, value: 0.30, unit: '', dec: 2 });
  const hits = [];
  F.hover(d.stage, () => hits);

  function draw() {
    const { ctx } = begin(d.c);
    const t = tau.v, x = xs.v, g = Gw(t), xb = binodal(t);
    const split = xb !== null && x > xb && x < 1 - xb;
    topline(ctx, xb === null
      ? `$\\kR\\kT/\\kWint = ${fmt(t, 2)}$: one minimum, so the two liquids mix in every proportion.`
      : `$\\kR\\kT/\\kWint = ${fmt(t, 2)}$: two minima. Between $\\kxone = ${fmt(xb, 2)}$ and $${fmt(1 - xb, 2)}$ the mixture splits into two liquids.`);
    const L = { l: 130, r: 760, t: 130, b: 510 }, Rb = { l: 920, r: 1340, t: 130, b: 510 };
    const a1 = axes(ctx, L, [0, 1], [-0.75, 0.3], { nice: true, nx: 4, ny: 5, xl: 'mole fraction x_1', yl: 'Δ_{mix}G / W', yc: C('energy') });
    line(ctx, L.l, a1.Y(0), L.r, a1.Y(0), alpha(PAL.ink, 0.35), 2);
    plot(ctx, a1, Hterm, alpha(C('energy'), 0.55), { w: 3, dash: [10, 10] });
    plot(ctx, a1, Sterm(t), C('entropy'), { w: 3, dash: [10, 10] });
    plot(ctx, a1, g, C('energy'), { w: 5 });
    hits.length = 0;
    if (xb !== null) {
      const gb = g(xb);
      line(ctx, a1.X(xb), a1.Y(gb), a1.X(1 - xb), a1.Y(gb), PAL.ink, 2, [6, 8]);
      dot(ctx, a1.X(xb), a1.Y(gb), PAL.ink, true, 8);
      dot(ctx, a1.X(1 - xb), a1.Y(gb), PAL.ink, true, 8);
      hits.push({ x: a1.X(xb), y: a1.Y(gb), r: 14, name: `liquid rich in 2, x₁ = ${fmt(xb, 2)}` });
      hits.push({ x: a1.X(1 - xb), y: a1.Y(gb), r: 14, name: `liquid rich in 1, x₁ = ${fmt(1 - xb, 2)}` });
      hits.push({ x: a1.X(0.5), y: a1.Y(gb), r: 14, name: 'common tangent: the two coexisting liquids' });
      if (split) {
        line(ctx, a1.X(x), a1.Y(g(x)), a1.X(x), a1.Y(gb), alpha(C('energy'), 0.8), 3, [4, 6]);
        dot(ctx, a1.X(x), a1.Y(gb), C('energy'), false, 9);
        hits.push({ x: a1.X(x), y: a1.Y(gb), r: 14, name: `split into two liquids: Δ_mix G/W = ${fmt(gb, 3)}` });
      }
    }
    dot(ctx, a1.X(x), a1.Y(g(x)), C('energy'), true, 9);
    hits.push({ x: a1.X(x), y: a1.Y(g(x)), r: 14, name: `one liquid at x₁ = ${fmt(x, 2)}: Δ_mix G/W = ${fmt(g(x), 3)}` });
    legend(ctx, a1, [
      { s: 'Δ_{mix}G / W', color: C('energy'), w: 5, f: g },
      { s: 'interaction term x_1x_2', color: alpha(C('energy'), 0.55), w: 3, dash: [10, 10], f: Hterm },
      { s: 'entropy term', color: C('entropy'), w: 3, dash: [10, 10], f: Sterm(t) },
    ], { corner: 'br' });

    /* right: the dome */
    const a2 = axes(ctx, Rb, [0, 1], [0, 1], { nx: 4, ny: 4, xl: 'mole fraction x_1', yl: 'RT / W' });
    F.shade(ctx, a2, dome, 0, 0.001, 0.999, alpha(PAL.ink, 1), { alpha: 0.08 });
    plot(ctx, a2, dome, PAL.ink, { w: 4, x: [0.001, 0.999] });
    text(ctx, 'one liquid', a2.X(0.5), a2.Y(0.8), PAL.muted, { size: 19, align: 'center' });
    text(ctx, 'two liquids', a2.X(0.5), a2.Y(0.2), PAL.muted, { size: 19, align: 'center' });
    dot(ctx, a2.X(0.5), a2.Y(0.5), PAL.ink, false, 8);
    hits.push({ x: a2.X(0.5), y: a2.Y(0.5), r: 14, name: 'consolute point: RT/W = 1/2, a = 2' });
    line(ctx, Rb.l, a2.Y(t), Rb.r, a2.Y(t), alpha(PAL.ink, 0.45), 2, [6, 8]);
    if (xb !== null) {
      dot(ctx, a2.X(xb), a2.Y(t), PAL.ink, true, 8);
      dot(ctx, a2.X(1 - xb), a2.Y(t), PAL.ink, true, 8);
    }
    dot(ctx, a2.X(x), a2.Y(t), C('energy'), true, 9);
    hits.push({ x: a2.X(x), y: a2.Y(t), r: 14, name: `x₁ = ${fmt(x, 2)} at RT/W = ${fmt(t, 2)}` });

    const s = Sterm(t)(x), h = Hterm(x), x2 = 1 - x;
    tex(d.readout, `\\dfrac{\\kDeltamixG}{\\kWint} = \\dfrac{\\kR\\kT}{\\kWint}[\\kxone\\ln{\\kxone}+\\kxtwo\\ln{\\kxtwo}]+\\kxone\\kxtwo \\\\ \\dfrac{\\kDeltamixG}{\\kWint} = ${fmt(t, 2)}\\,[${fmt(x, 2)}\\ln ${fmt(x, 2)} + ${fmt(x2, 2)}\\ln ${fmt(x2, 2)}] + (${fmt(x, 2)})(${fmt(x2, 2)}) \\\\ \\dfrac{\\kDeltamixG}{\\kWint} = ${fmt(s, 3)} + ${fmt(h, 3)} = ${fmt(s + h, 3)} \\\\ \\kareg = \\dfrac{\\kWint}{\\kR\\kT} = ${fmt(1 / t, 2)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
