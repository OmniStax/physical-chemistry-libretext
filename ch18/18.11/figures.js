/* Figures for section 18.11 The Equipartition Principle. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['18.11'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, shade, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- Figure 18.11.1: the heat capacity of a diatomic gas ----------
   C_V/R = 3/2 (translation) + C_rot/R + C_vib/R against log10 T, 1 K to 10 000 K (x 0 to 4), y 0 to 4.
   C_rot/R: the variance of x_J = J(J+1)Theta_rot/T over all J with weight 2J + 1 (no nuclear-spin weights;
   H2's ortho and para are Figure 18.10.1), taken as 1 once T > 40 Theta_rot. C_vib/R: 18.4's oscillator function
   x^2 e^x/(e^x - 1)^2 with x = Theta_vib/T. Data: Table 18.4.1's Theta_vib and Theta_rot; CO and I2 from the book's
   caption (2.8 K and 3103 K; 308 K). I2's Theta_rot is not printed; it is below Cl2's 0.351 K, so its rotation is
   fully classical across the axis and has no mark. The curve is stacked in three shaded bands, the state point rides
   it, a dashed line marks 300 K. Slider log10 T opening at 300 K; a select of molecule opening on CO. Still. */
(function () {
  const d = sim('sim-diatomic-heat-capacity', 600);
  const MOL = {
    H2: ['H₂', 6332, 87.6], D2: ['D₂', 4487, 43.8], N2: ['N₂', 3393, 2.99], O2: ['O₂', 2274, 2.08], Cl2: ['Cl₂', 805, 0.351],
    CO: ['CO', 3103, 2.8], NO: ['NO', 2719, 2.45], HCl: ['HCl', 4227, 15.02], HI: ['HI', 3266, 9.06], Na2: ['Na₂', 229, 0.221],
    K2: ['K₂', 133, 0.081], I2: ['I₂', 308, null],
  };
  const T = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: 0, max: 4, step: 0.001, value: Math.log10(300),
    fmt: (lg) => { const t = 10 ** lg; return `${t < 10 ? fmt(t, 1) : fmt(t, 0)} K`; }, detents: [{ v: Math.log10(300), label: '300 K' }], snap: true });
  const pick = F.select(d.controls, { label: '\\text{molecule}', aria: 'the diatomic gas', value: 'CO',
    options: Object.keys(MOL).map((k) => ({ value: k, label: MOL[k][0] })) });
  const crot = (th, t) => {
    if (th === null || t > 40 * th) return 1;
    let q = 0, m = 0, m2 = 0;
    for (let J = 0; J < 200; J++) { const x = J * (J + 1) * th / t; if (x > 700) break; const w = (2 * J + 1) * Math.exp(-x); q += w; m += x * w; m2 += x * x * w; }
    return m2 / q - (m / q) ** 2;
  };
  const cvib = (th, t) => { const x = th / t; if (x > 700) return 0; const e = Math.exp(x); return x * x * e / ((e - 1) * (e - 1)); };
  const state = (c, on, name) => (c > 0.97 ? `${name} fully on` : c < 0.03 ? `${name} frozen out` : `${name} partly on`);
  const hov = []; F.hover(d.stage, () => hov);
  function draw() {
    const { ctx, W } = begin(d.c);
    const [name, tv, tr] = MOL[pick.value], lg = T.v, t = 10 ** lg;
    const fr = (u) => crot(tr, 10 ** u), fv = (u) => cvib(tv, 10 ** u);
    const r = fr(lg), v = fv(lg), rs = fmt(r, 2), vs = fmt(v, 2), tot = 1.5 + +rs + +vs;
    topline(ctx, `At ${t < 10 ? fmt(t, 1) : fmt(t, 0)} K, ${name} has $\\kCVbar = ${fmt(tot, 2)}\\,\\kR$: ${state(r, true, 'rotation')}, ${state(v, true, 'vibration')}.`);
    hov.length = 0;
    const box = { l: 150, r: W - 60, t: 120, b: 500 };
    const ax = axes(ctx, box, [0, 4], [0, 4], { nx: 4, ny: 8, fx: (u) => fmt(10 ** u, 0), fy: (y) => (Math.round(2 * y) % 2 ? `${Math.round(2 * y)}/2` : fmt(y, 0)),
      xl: 'T (K)', xc: C('temperature'), yl: 'C̄_{V}/R', yc: C('heat-capacity') });
    const HC = C('heat-capacity');
    shade(ctx, ax, () => 1.5, 0, 0, 4, HC, { alpha: 0.1 });
    shade(ctx, ax, (u) => 1.5 + fr(u), 1.5, 0, 4, HC, { alpha: 0.2 });
    shade(ctx, ax, (u) => 1.5 + fr(u) + fv(u), (u) => 1.5 + fr(u), 0, 4, HC, { alpha: 0.34 });
    plot(ctx, ax, (u) => 1.5 + fr(u) + fv(u), HC, { w: 5 });
    /* band names at 7000 K, where each band is widest for most molecules */
    const u0 = 3.85, rr = fr(u0), vv = fv(u0);
    text(ctx, 'translation', ax.X(u0), ax.Y(0.75) + 6, PAL.ink, { size: 17, align: 'right' });
    if (rr > 0.35) text(ctx, 'rotation', ax.X(u0), ax.Y(1.5 + rr / 2) + 6, PAL.ink, { size: 17, align: 'right' });
    if (vv > 0.35) text(ctx, 'vibration', ax.X(u0), ax.Y(1.5 + rr + vv / 2) + 6, PAL.ink, { size: 17, align: 'right' });
    /* 300 K, and the two characteristic temperatures */
    const l3 = Math.log10(300);
    line(ctx, ax.X(l3), box.t, ax.X(l3), box.b, alpha(PAL.ink, 0.4), 2, [10, 10]);
    text(ctx, '300 K', ax.X(l3) + 8, box.t + 20, PAL.muted, { size: 17 });
    const marks = [[tr, 'Θ_{rot}'], [tv, 'Θ_{vib}']];
    marks.forEach(([th, s]) => {
      if (th === null || th < 1) return;
      const x = ax.X(Math.log10(th));
      line(ctx, x, box.b - 28, x, box.b, C('temperature'), 3);
      text(ctx, s, x + 6, box.b - 36, C('temperature'), { size: 20 });
      hov.push({ x, y: box.b - 14, r: 14, name: `${s.replace('_{rot}', '_rot').replace('_{vib}', '_vib')} of ${name} = ${th} K` });
    });
    if (tr === null || tr < 1) hov.push({ x: box.l + 30, y: ax.Y(2), r: 20, name: tr === null ? `Θ_rot of ${name} is below 1 K, so its rotation is fully on across the axis` : `Θ_rot of ${name} = ${tr} K, below the axis` });
    line(ctx, ax.X(lg), ax.Y(tot), ax.X(lg), box.b, alpha(C('temperature'), 0.8), 3, [4, 8]);
    dot(ctx, ax.X(lg), ax.Y(1.5 + r + v), HC, true, 10);
    hov.push({ x: ax.X(lg), y: ax.Y(1.5 + r + v), r: 14, name: `${name} at ${t < 10 ? fmt(t, 1) : fmt(t, 0)} K` });
    tex(d.readout, `\\kCVbar = \\dfrac{3}{2}\\kR + \\kCrot + \\kCvib \\\\ \\kCVbar = (1.50 + ${rs} + ${vs})\\,\\kR = ${fmt(tot, 2)}\\,\\kR`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
