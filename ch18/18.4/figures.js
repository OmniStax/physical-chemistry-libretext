/* Figures for section 18.4 Most Molecules are in the Ground Vibrational State. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['18.4'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, pinned, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* C̄_V,vib/R of one harmonic mode at t = T/Θ_vib (Equation 18.4.5 per mole) */
const cvib = (t) => { if (t <= 0) return 0; const x = 1 / t; if (x > 600) return 0; const e = Math.exp(-x); return x * x * e / ((1 - e) * (1 - e)); };

/* ---------- Figure 18.4.1 (+ the unnumbered Cl₂ population chart): vibration freezing out ----------
   Left, the ladder v = 0 to 5 of the chosen molecule, 70 units a rung (rungs Θ_vib apart in k units), each
   level with a bar of length f_v = (1 − e^(−Θ/T))e^(−vΘ/T) (Equation 18.4.6; the book's bar chart turned
   upright) and its value; a dashed line at kT above v = 0 on the ladder's scale, cut at the top rung.
   Right, C̄_V,vib/R against T/Θ_vib on a log axis 0.05 to 5 (the book's reduced temperature), y 0 to 1.1:
   the one curve every diatomic follows, the R limit dashed, the state point (pinned at the edge when the
   slider takes T/Θ outside). Choice: the eleven molecules of Table 18.4.1, opening on Cl₂ (Θ_vib = 805 K)
   at 300 K, the chart's case (f₀ = 0.932). Slider T, log, 10 to 10 000 K, a circle at T = Θ_vib.
   Still: a temperature has no time in it. */
(function () {
  const d = sim('sim-vibrational-freeze', 600);
  const MOL = [['H2', 'H₂', 6332], ['D2', 'D₂', 4487], ['N2', 'N₂', 3393], ['O2', 'O₂', 2274], ['Cl2', 'Cl₂', 805], ['CO', 'CO', 3122],
    ['NO', 'NO', 2719], ['HCl', 'HCl', 4227], ['HI', 'HI', 3266], ['Na2', 'Na₂', 229], ['K2', 'K₂', 133]];
  const BY = Object.fromEntries(MOL.map(([k, s, th]) => [k, { s, th }]));
  const m = F.select(d.controls, { label: 'molecule', options: MOL.map(([k, s]) => ({ value: k, label: s })), value: 'Cl2' });
  const t = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: 1, max: 4, step: 0.001, value: Math.log10(300), unit: '',
    fmt: (lg) => `${fmt(10 ** lg, 0)} K`, specials: [{ at: () => Math.log10(BY[m.value].th), label: 'T = Θ_vib' }] });
  const LO = Math.log10(0.05), HI = Math.log10(5), TICKS = [0.05, 0.1, 0.2, 0.5, 1, 2, 5];
  const hov = []; F.hover(d.stage, () => hov);
  function draw() {
    const { ctx, W } = begin(d.c);
    const M = BY[m.value], T = 10 ** t.v, th = M.th, x = th / T, e = Math.exp(-x), q = 1 / (1 - e), cr = cvib(T / th);
    const fv = (v) => (1 - e) * Math.exp(-v * x);
    const f0 = fv(0);
    topline(ctx, `At ${fmt(T, 0)} K, ${f0 > 0.9995 ? 'over 99.9' : fmt(100 * f0, 1)}% of ${M.s} molecules are in $v = 0$ and vibration adds ${fmt(cr, 3)}$R$ to $\\kCVbar$.`);
    hov.length = 0;
    /* the ladder */
    const xl = 110, xr = 400, y0 = 520, gap = 70, TOP = 5;
    const yk = y0 - (T / th) * gap;
    if (T / th < TOP + 0.3) {
      ctx.save(); ctx.fillStyle = alpha(C('temperature'), 0.12); ctx.fillRect(xl - 14, yk, xr - xl + 28, y0 - yk); ctx.restore();
      line(ctx, xl - 14, yk, xr + 14, yk, alpha(C('temperature'), 0.85), 2, [4, 8]);
      if (y0 - yk > 26) text(ctx, 'kT', xr + 80, yk + 6, C('temperature'), { size: 20 });
    }
    for (let v = 0; v <= TOP; v++) {
      const y = y0 - v * gap, p = fv(v);
      line(ctx, xl, y, xr, y, alpha(C('energy'), 0.85), 2);
      text(ctx, `v = ${v}`, xl - 24, y - 8, PAL.muted, { size: 17, align: 'right' });
      if (p > 0.001) { ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.55); ctx.fillRect(xl, y - 13, (xr - xl) * p, 11); ctx.restore(); }
      text(ctx, fmt(p, 3), xr + 16, y - 2, PAL.ink, { size: 17 });
      hov.push({ x: xl + 30, y: y - 6, r: 16, name: `v = ${v}: a fraction ${fmt(p, 4)} of the molecules` });
    }
    text(ctx, `${M.s}, rungs ${th} K apart`, (xl + xr) / 2, 112, PAL.ink, { size: 20, align: 'center' });
    /* the heat capacity against T/Θ_vib */
    const box = { l: 620, r: W - 60, t: 130, b: 500 };
    const ax = axes(ctx, box, [LO, HI], [0, 1.1], { nx: 0, ny: 0, xl: 'T/Θ_{vib}', yl: 'C̄_{V}/R', xc: C('temperature'), yc: C('heat-capacity') });
    TICKS.forEach((v) => { const X = ax.X(Math.log10(v)); line(ctx, X, box.b, X, box.b + 8, PAL.muted, 2); text(ctx, fmt(v, v < 1 ? (v < 0.1 ? 2 : 1) : 0), X, box.b + 28, PAL.muted, { size: 17, align: 'center' }); });
    [0, 0.25, 0.5, 0.75, 1].forEach((v) => text(ctx, fmt(v, 2), box.l - 12, ax.Y(v) + 6, PAL.muted, { size: 17, align: 'right' }));
    line(ctx, box.l, ax.Y(1), box.r, ax.Y(1), alpha(PAL.ink, 0.55), 3, [10, 10]);
    text(ctx, 'R', box.l + 12, ax.Y(1) - 14, alpha(PAL.ink, 0.8), { size: 20 });
    line(ctx, ax.X(0), box.t, ax.X(0), box.b, alpha(PAL.ink, 0.25), 2);
    plot(ctx, ax, (lg) => cvib(10 ** lg), C('heat-capacity'), { w: 5 });
    const lg = Math.log10(T / th);
    if (lg >= LO && lg <= HI) line(ctx, ax.X(lg), ax.Y(cr), ax.X(lg), box.b, alpha(C('temperature'), 0.8), 3, [4, 8]);
    const pt = pinned(ctx, box, ax.X, ax.Y, lg, cr, C('heat-capacity'));
    hov.push({ x: pt.x, y: pt.y, r: 14, name: `${M.s} at ${fmt(T, 0)} K: T/Θ_vib = ${fmt(T / th, 3)}, C̄_V,vib = ${fmt(cr, 3)}R` });
    hov.push({ x: ax.X(0), y: ax.Y(cvib(1)), r: 12, name: `at T = Θ_vib the contribution is already 0.921R` });
    const xs = fmt(x, x >= 10 ? 1 : 2);
    tex(d.readout, `f_0 = 1 - e^{-\\kThetavib/\\kT} = 1 - e^{-${xs}} = ${fmt(f0, 3)} \\\\ \\kqvib = \\dfrac{1}{1 - e^{-${xs}}} = ${fmt(q, 3)} \\\\ \\dfrac{\\kCVbar}{R} = \\left(\\dfrac{\\kThetavib}{\\kT}\\right)^2\\dfrac{e^{-\\kThetavib/\\kT}}{\\left(1 - e^{-\\kThetavib/\\kT}\\right)^2} = ${fmt(cr, 3)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
