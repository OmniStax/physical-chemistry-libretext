/* Figures for section 1.1 Blackbody Radiation Cannot Be Explained Classically. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.1'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, shade, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
/* a dashed curve clipped to its graph's box, for a prediction drawn beside what was measured */
function dashed(ctx, ax, f, color) {
  const { box, X, Y, xr } = ax;
  ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
  ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.setLineDash([10, 10]); ctx.beginPath();
  let on = false;
  for (let i = 0; i <= 400; i++) {
    const x = xr[0] + (xr[1] - xr[0]) * i / 400, y = f(x);
    if (!isFinite(y) || y > 1e3) { on = false; continue; }
    if (on) ctx.lineTo(X(x), Y(y)); else { ctx.moveTo(X(x), Y(y)); on = true; }
  }
  ctx.stroke(); ctx.restore();
}

/* ---------- physics, SI ---------- */
const h = 6.62607e-34, c = 2.99792e8, kB = 1.380649e-23, SIGMA = 5.67e-8, WIEN = 2.898e-3;
/* Planck's spectral energy density per wavelength, J/m^4, the curve the experiments traced */
const planck = (lamNm, T) => { const l = lamNm * 1e-9; return (8 * Math.PI * h * c / Math.pow(l, 5)) / (Math.exp(h * c / (l * kB * T)) - 1); };
/* the Rayleigh-Jeans law in the same variable, 8 pi k_B T / lambda^4 */
const rj = (lamNm, T) => { const l = lamNm * 1e-9; return 8 * Math.PI * kB * T / Math.pow(l, 4); };

/* ---------- real colours (facts) ---------- */
const hex = (r, g, b) => '#' + [r, g, b].map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')).join('');
/* the colour of visible light of one wavelength, 380 to 780 nm (the usual piecewise approximation, dimmed at the ends of the eye's range) */
function spectral(nm) {
  let r = 0, g = 0, b = 0;
  if (nm < 440) { r = (440 - nm) / 60; b = 1; } else if (nm < 490) { g = (nm - 440) / 50; b = 1; }
  else if (nm < 510) { g = 1; b = (510 - nm) / 20; } else if (nm < 580) { r = (nm - 510) / 70; g = 1; }
  else if (nm < 645) { r = 1; g = (645 - nm) / 65; } else { r = 1; }
  const f = nm < 420 ? 0.3 + 0.7 * (nm - 380) / 40 : nm > 700 ? 0.3 + 0.7 * (780 - nm) / 80 : 1;
  return hex(255 * r * f, 255 * g * f, 255 * b * f);
}
/* the colour a body glows at temperature T, normalised to its brightest channel (Tanner Helland's fit to the blackbody locus) */
function glow(T) {
  const t = T / 100; let r, g, b;
  r = t <= 66 ? 255 : 329.7 * Math.pow(t - 60, -0.1332);
  g = t <= 66 ? 99.47 * Math.log(t) - 161.12 : 288.12 * Math.pow(t - 60, -0.0755);
  b = t >= 66 ? 255 : t <= 19 ? 0 : 138.52 * Math.log(t - 10) - 305.04;
  return hex(r, g, b);
}

/* ---------- Figure 1.1.3 + 1.1.5: the blackbody spectrum ----------
   x: wavelength 0 to 3000 nm; y: spectral energy density in 10^5 J/m^4, fixed 0 to 10 from the slider's
   maximum (5500 K peaks at 8.7 x 10^5 J/m^4). The book's curves at 3000, 4000 and 5000 K stay faint
   behind the live one; the classical curve is dashed and leaves the box at short wavelengths. */
(function () {
  const d = sim('sim-blackbody', 640);
  const T = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: 2500, max: 5500, step: 50, value: 5000, unit: 'K', dec: 0,
    detents: [3000, 4000, 5000], snap: true });
  const Y = 1e5;
  function draw() {
    const { ctx, W } = begin(d.c);
    const t = T.v, lmax = WIEN / t * 1e9;
    topline(ctx, `At $\\kT = ${fmt(t, 0)}\\ \\text{K}$ the spectrum peaks at $\\klmax = ${fmt(lmax, 0)}\\ \\text{nm}$, and the body glows the colour of the disc.`);
    const box = { l: 130, r: W - 260, t: 110, b: 540 };
    const ax = axes(ctx, box, [0, 3000], [0, 10], { nx: 6, ny: 5, xl: 'wavelength λ (nm)', yl: 'spectral energy density ρ (10⁵ J/m⁴)', xc: C('wavelength'), yc: C('energy-density') });
    /* the visible band, in its own colours, as a strip under the axis */
    for (let nm = 380; nm < 780; nm += 4) {
      const x0 = ax.X(nm), x1 = ax.X(nm + 4);
      ctx.save(); ctx.fillStyle = F.fact(spectral(nm + 2)); ctx.globalAlpha = 0.9; ctx.fillRect(x0, box.b + 2, x1 - x0 + 0.5, 12); ctx.restore();
    }
    [3000, 4000, 5000].forEach((tb) => { if (Math.abs(tb - t) > 1) plot(ctx, ax, (l) => planck(l, tb) / Y, alpha(C('energy-density'), 0.3), { w: 3 }); });
    dashed(ctx, ax, (l) => rj(l, t) / Y, C('energy-density'));
    shade(ctx, ax, (l) => planck(l, t) / Y, 0, 1, 3000, C('energy-density'), { alpha: 0.12 });
    plot(ctx, ax, (l) => planck(l, t) / Y, C('energy-density'), { w: 5 });
    /* the peak, Wien's law */
    const yp = planck(lmax, t) / Y;
    if (lmax < 3000) {
      line(ctx, ax.X(lmax), ax.Y(yp), ax.X(lmax), box.b, alpha(C('wavelength'), 0.8), 3, [4, 8]);
      dot(ctx, ax.X(lmax), ax.Y(Math.min(yp, 10)), C('energy-density'), true, 9);
    }
    /* which curve is which, on the curves themselves at long wavelength */
    const lx = 2200;
    text(ctx, 'Rayleigh–Jeans', ax.X(lx) + 6, ax.Y(Math.min(rj(lx, t) / Y, 9.6)) - 16, C('energy-density'), { size: 20 });
    text(ctx, 'observed', ax.X(lmax) + 30, ax.Y(Math.min(yp, 10)) - 6, C('energy-density'), { size: 20, weight: 600 });
    /* the glowing body */
    const gx = W - 130, gy = 300;
    ctx.save(); ctx.beginPath(); ctx.arc(gx, gy, 70, 0, 2 * Math.PI); ctx.fillStyle = F.fact(glow(t)); ctx.fill();
    ctx.lineWidth = 2; ctx.strokeStyle = PAL.rule; ctx.stroke(); ctx.restore();
    text(ctx, `${fmt(t, 0)} K`, gx, gy + 104, C('temperature'), { size: 22, weight: 600, align: 'center' });
    tex(d.readout, `\\klmax = \\dfrac{b}{\\kT} = \\dfrac{2.898\\times10^{-3}\\ \\text{m·K}}{${fmt(t, 0)}\\ \\text{K}} = ${fmt(lmax, 0)}\\ \\text{nm}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- Figure 1.1.4: the fourth power ----------
   x: temperature 0 to 400 K; y: radiated power 0 to 1400 W/m^2 (sigma 400^4 = 1452). The book's four
   marks (ice, a room, a body, boiling water) stand on the curve. */
(function () {
  const d = sim('sim-stefan', 560);
  const T = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: 0, max: 400, step: 1, value: 305, unit: 'K', dec: 0,
    detents: [273, 293, 310, 373], snap: true });
  const marks = [[273, 'ice'], [293, 'room'], [310, 'body'], [373, 'boiling water']];
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    const t = T.v, p = SIGMA * Math.pow(t, 4);
    topline(ctx, `A surface at $\\kT = ${fmt(t, 0)}\\ \\text{K}$ radiates $\\kP = ${fmt(p, 0)}\\ \\text{W/m}^2$; double the temperature and the power grows sixteenfold.`);
    const box = { l: 150, r: W - 90, t: 110, b: 470 };
    const ax = axes(ctx, box, [0, 400], [0, 1400], { nx: 8, ny: 7, xl: 'temperature T (K)', yl: 'radiated power P (W/m²)', xc: C('temperature'), yc: C('power') });
    plot(ctx, ax, (x) => SIGMA * Math.pow(x, 4), C('power'), { w: 5 });
    hits.length = 0;
    marks.forEach(([tm, name]) => {
      const x = ax.X(tm), y = ax.Y(SIGMA * Math.pow(tm, 4));
      dot(ctx, x, y, C('power'), false, 8);
      hits.push({ x, y, r: 14, name: `${name}, ${tm} K` });
    });
    line(ctx, ax.X(t), ax.Y(p), ax.X(t), box.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
    line(ctx, box.l, ax.Y(p), ax.X(t), ax.Y(p), alpha(PAL.ink, 0.4), 2, [4, 8]);
    dot(ctx, ax.X(t), ax.Y(p), C('power'), true, 10);
    tex(d.readout, `\\kP = \\sigma \\kT^4 = (5.67\\times10^{-8}\\ \\text{W m}^{-2}\\text{K}^{-4})(${fmt(t, 0)}\\ \\text{K})^4 = ${fmt(p, 0)}\\ \\text{W/m}^2`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
