/* Figures for section 17.4 Heat Capacity at Constant Volume is the Change in Internal Energy with Temperature. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['17.4'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, legend, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* the Einstein function: C_V/3Nk of an oscillator at x = theta_E/T (or h nu/kT) */
const einstein = (t) => { if (t <= 0) return 0; const x = 1 / t; if (x > 700) return 0; const e = Math.exp(x); return x * x * e / ((e - 1) * (e - 1)); };

/* ---------- Figure 17.4.2 + 17.4.3 + 17.4.4: the Einstein solid ----------
   Left, one vibrational ladder (v = 0 to 6, spacing h nu, 55 units a step): on each level a bar of
   length e^(-v h nu/kT), its population beside the ground level's, and from the ground up a band of
   height k_BT on the ladder's scale (17.4.2's pink shading), cut at the top level.
   Right, C_V/3Nk against T/theta_E, x 0 to 2.5 (17.4.4's axis), y 0 to 1.1: the Einstein function,
   Dulong and Petit's 3Nk dashed, the state point riding the curve, and 17.4.4's measured points for
   Pb, Ag, Zn, Cu and Al, read off the book's image (its y divided by 2.494, the text's 3R in
   10^4 J K^-1 kmol^-1), hollow in their element colours. Slider T/theta_E with detents at the book's
   three panels, 0.125, 0.5 and 1.25 (17.4.2 read on 17.4.3's axis). Still: no time in it. */
(function () {
  const d = sim('sim-einstein-solid', 620);
  const t = ctl(d.controls, { label: '\\kT/\\kthetaE', cls: 'temperature', min: 0.05, max: 2.5, step: 0.005, value: 0.5, unit: '', dec: 3,
    detents: [0.125, 0.5, 1.25], snap: true });
  const DATA = {
    Pb: [[0.536, 1.631], [0.642, 1.861], [0.678, 1.916], [0.724, 1.976], [0.813, 2.066], [0.873, 2.114], [0.962, 2.174], [1.025, 2.216], [1.137, 2.232], [1.173, 2.254], [1.373, 2.323], [1.451, 2.334], [2.16, 2.41]],
    Ag: [[0.687, 1.969], [1.336, 2.302], [1.82, 2.36], [1.85, 2.33], [1.97, 2.36]],
    Zn: [[0.501, 1.595], [1.221, 2.317], [1.257, 2.334], [1.692, 2.361], [1.75, 2.37], [1.99, 2.44], [2.05, 2.41], [2.34, 2.45]],
    Cu: [[0.758, 2.005], [1.276, 2.283], [1.99, 2.38], [2.03, 2.37], [2.13, 2.4]],
    Al: [[0.201, 0.203], [0.225, 0.295], [0.239, 0.392], [0.265, 0.52], [0.285, 0.607], [0.289, 0.655], [0.317, 0.74], [0.323, 0.83], [0.336, 0.895], [0.359, 0.997], [0.53, 1.582], [1.196, 2.286], [1.693, 2.42], [1.89, 2.44], [2.15, 2.44]],
  };
  const NAMES = { Pb: 'lead', Ag: 'silver', Zn: 'zinc', Cu: 'copper', Al: 'aluminum' };
  const R3 = 2.494, LEVELS = 7, hov = []; F.hover(d.stage, () => hov);
  function draw() {
    const { ctx, W } = begin(d.c);
    const tv = t.v, f = einstein(tv), x = 1 / tv, exc = Math.exp(-x);
    topline(ctx, `At $\\kT = ${fmt(tv, 3)}\\,\\kthetaE$, ${exc < 0.001 ? 'fewer than 0.1' : fmt(100 * exc, exc < 0.1 ? 1 : 0)}% of the oscillators are above the ground level and $\\kCV$ is ${fmt(100 * f, f < 0.1 ? 1 : 0)}% of $3Nk$.`);
    hov.length = 0;
    /* the ladder */
    const xl = 90, xr = 420, y0 = 520, gap = 55;
    const bh = Math.min(LEVELS - 0.5, tv) * gap;
    ctx.save(); ctx.fillStyle = alpha(C('temperature'), 0.13); ctx.fillRect(xl - 14, y0 - bh, xr - xl + 28, bh); ctx.restore();
    if (tv < LEVELS - 0.5) { line(ctx, xl - 14, y0 - bh, xr + 14, y0 - bh, alpha(C('temperature'), 0.8), 2, [4, 8]); text(ctx, 'k_{B}T', xr + 22, y0 - bh + 6, C('temperature'), { size: 17 }); }
    for (let v = 0; v < LEVELS; v++) {
      const y = y0 - v * gap, p = Math.exp(-v * x);
      line(ctx, xl, y, xr, y, alpha(C('energy'), 0.85), 2);
      text(ctx, `v = ${v}`, xl - 24, y + 6, PAL.muted, { size: 17, align: 'right' });
      if (p > 0.002) { ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.5); ctx.fillRect(xl, y - 10, (xr - xl) * p, 9); ctx.restore(); }
    }
    line(ctx, xr + 90, y0, xr + 90, y0 - gap, C('energy'), 2);
    line(ctx, xr + 82, y0, xr + 98, y0, C('energy'), 2); line(ctx, xr + 82, y0 - gap, xr + 98, y0 - gap, C('energy'), 2);
    text(ctx, 'hν', xr + 106, y0 - gap / 2 + 7, C('energy'), { size: 20 });
    text(ctx, 'one oscillator of the 3N', (xl + xr) / 2, 104, PAL.ink, { size: 20, align: 'center' });
    hov.push({ x: xl + 40, y: y0 - gap - 5, r: 16, name: `the first excited level holds ${fmt(exc, 3)} of the ground level's population` });
    /* the heat capacity */
    const box = { l: 640, r: W - 60, t: 110, b: 520 };
    const ax = axes(ctx, box, [0, 2.5], [0, 1.1], { nx: 5, ny: 0, xl: 'T/Θ_{E}', yl: 'C_{V}/3Nk', xc: C('temperature'), yc: C('heat-capacity') });
    [0, 0.25, 0.5, 0.75, 1].forEach((v) => text(ctx, fmt(v, 2), box.l - 12, ax.Y(v) + 6, PAL.muted, { size: 17, align: 'right' }));
    line(ctx, box.l, ax.Y(1), box.r, ax.Y(1), alpha(PAL.ink, 0.55), 3, [10, 10]);
    text(ctx, 'Dulong–Petit, 3Nk', box.l + 12, ax.Y(1) - 14, alpha(PAL.ink, 0.8), { size: 17 });
    plot(ctx, ax, einstein, C('heat-capacity'), { w: 5, x: [0.02, 2.5] });
    for (const el of Object.keys(DATA)) for (const [u, c] of DATA[el]) dot(ctx, ax.X(u), ax.Y(c / R3), F.el(el), false, 6);
    for (const el of Object.keys(DATA)) { const [u, c] = DATA[el][0]; hov.push({ x: ax.X(u), y: ax.Y(c / R3), r: 10, name: `${NAMES[el]}, measured (Figure 17.4.4)` }); }
    line(ctx, ax.X(tv), ax.Y(f), ax.X(tv), box.b, alpha(C('temperature'), 0.8), 3, [4, 8]);
    dot(ctx, ax.X(tv), ax.Y(f), C('heat-capacity'), true, 10);
    hov.push({ x: ax.X(tv), y: ax.Y(f), r: 14, name: `the Einstein solid at T = ${fmt(tv, 3)} Θ_E` });
    legend(ctx, ax, [{ s: 'Einstein', color: C('heat-capacity'), w: 5 }, ...Object.keys(DATA).map((el) => ({ s: el, kind: 'dot', color: F.el(el) }))], { corner: 'br' });
    const xs = fmt(x, x >= 10 ? 1 : 2);
    tex(d.readout, `\\kCV = 3Nk\\left(\\dfrac{\\kthetaE}{\\kT}\\right)^2\\dfrac{e^{\\kthetaE/\\kT}}{\\left(e^{\\kthetaE/\\kT} - 1\\right)^2} \\\\ \\dfrac{\\kCV}{3Nk} = (${xs})^2\\dfrac{e^{${xs}}}{\\left(e^{${xs}} - 1\\right)^2} = ${fmt(f, 3)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- Sim: a ladder that ends ----------
   Left, a system of two levels, 0 and epsilon, with bars of their populations P = e^(-E/kT)/q.
   Right, C_V per particle in units of k against kT/epsilon, x 0 to 3, y 0 to 1.1: the two-level
   heat capacity (peak 0.439 at kT = 0.417 epsilon, a dashed circle on the slider) and, dashed, an
   oscillator whose rungs are epsilon apart, which climbs to 1 and stays. Still: no time in it. */
(function () {
  const d = sim('sim-schottky', 560);
  const PEAK = 0.4168;
  const t = ctl(d.controls, { label: 'k\\kT/\\varepsilon', cls: 'temperature', min: 0.05, max: 3, step: 0.005, value: 1, unit: '', dec: 3,
    specials: [{ at: PEAK, label: 'the peak' }] });
  const two = (tt) => { const x = 1 / tt; if (x > 700) return 0; const e = Math.exp(x); return x * x * e / ((1 + e) * (1 + e)); };
  const hov = []; F.hover(d.stage, () => hov);
  function draw() {
    const { ctx, W } = begin(d.c);
    const tv = t.v, x = 1 / tv, p1 = 1 / (1 + Math.exp(x)), p0 = 1 - p1, f = two(tv), fo = einstein(tv);
    topline(ctx, `At $k\\kT = ${fmt(tv, 2)}\\,\\varepsilon$ the upper level holds ${fmt(100 * p1, 1)}% of the systems, and $\\kCV$ is ${fmt(f, 3)} $Nk$ against ${fmt(fo, 3)} $Nk$ for an oscillator.`);
    hov.length = 0;
    /* the two levels */
    const xl = 90, xr = 400, y0 = 440, y1 = 240;
    [[y0, p0, '0'], [y1, p1, 'ε']].forEach(([y, p, s]) => {
      line(ctx, xl, y, xr, y, alpha(C('energy'), 0.85), 3);
      text(ctx, s, xl - 20, y + 7, C('energy'), { size: 22, align: 'right' });
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.5); ctx.fillRect(xl, y - 14, (xr - xl) * p, 12); ctx.restore();
      text(ctx, `${fmt(100 * p, 1)}%`, xr + 14, y - 2, PAL.ink, { size: 17 });
    });
    text(ctx, 'two levels', (xl + xr) / 2, 150, PAL.ink, { size: 20, align: 'center' });
    hov.push({ x: (xl + xr) / 2, y: y1 - 8, r: 18, name: 'the upper level; its share never passes one half' });
    /* the heat capacities */
    const box = { l: 600, r: W - 60, t: 150, b: 470 };
    const ax = axes(ctx, box, [0, 3], [0, 1.1], { nx: 6, ny: 0, xl: 'kT/ε', yl: 'C_{V}/Nk', xc: C('temperature'), yc: C('heat-capacity') });
    [0, 0.25, 0.5, 0.75, 1].forEach((v) => text(ctx, fmt(v, 2), box.l - 12, ax.Y(v) + 6, PAL.muted, { size: 17, align: 'right' }));
    plot(ctx, ax, einstein, C('heat-capacity'), { w: 3, dash: [10, 10], x: [0.02, 3] });
    plot(ctx, ax, two, C('heat-capacity'), { w: 5, x: [0.02, 3] });
    line(ctx, ax.X(tv), ax.Y(f), ax.X(tv), box.b, alpha(C('temperature'), 0.8), 3, [4, 8]);
    dot(ctx, ax.X(tv), ax.Y(f), C('heat-capacity'), true, 10);
    dot(ctx, ax.X(tv), ax.Y(fo), C('heat-capacity'), false, 8);
    hov.push({ x: ax.X(PEAK), y: ax.Y(two(PEAK)), r: 14, name: 'the peak: 0.439 Nk at kT = 0.417ε' });
    legend(ctx, ax, [{ s: 'two levels', color: C('heat-capacity'), w: 5 }, { s: 'oscillator', color: C('heat-capacity'), w: 3, dash: [10, 10] }], { corner: 'br' });
    const xs = fmt(x, x >= 10 ? 1 : 2);
    tex(d.readout, `\\dfrac{\\kCV}{Nk} = \\left(\\dfrac{\\varepsilon}{k\\kT}\\right)^2\\dfrac{e^{\\varepsilon/k\\kT}}{\\left(1 + e^{\\varepsilon/k\\kT}\\right)^2} \\\\ \\dfrac{\\kCV}{Nk} = (${xs})^2\\dfrac{e^{${xs}}}{\\left(1 + e^{${xs}}\\right)^2} = ${fmt(f, 3)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
