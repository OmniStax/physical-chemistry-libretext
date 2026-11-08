/* Figures for section 1.1 Blackbody Radiation Cannot Be Explained Classically. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.1'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, shade, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

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
   maximum (5500 K peaks at 8.7 x 10^5 J/m^4). The point is the peak: it rides the book's path of peaks
   (Wien's law traced over 2500 to 5500 K) up and to the left as T rises. The part of the area the eye can
   see is filled with its own colours, and the hole of the oven glows in the corner the curves leave empty.
   The classical Rayleigh-Jeans curve is thin, dashed and muted: Figure 1.1.5's point, kept but secondary. */
(function () {
  const d = sim('sim-blackbody', 620);
  const T = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: 2500, max: 5500, step: 50, value: 5000, unit: 'K', dec: 0,
    detents: [3000, 4000, 5000], snap: true });
  const Y = 1e5, hits = [];
  F.hover(d.stage, () => hits);
  /* the dark of the oven's wall, against which the hole glows (a fact: the hole is the only light) */
  const OVEN = '#1d1d22';
  function draw() {
    const { ctx, W } = begin(d.c);
    const t = T.v, lmax = WIEN / t * 1e9, rho = (l) => planck(l, t) / Y;
    topline(ctx, `At $\\kT = ${fmt(t, 0)}\\ \\text{K}$ the peak sits at $\\klmax = ${fmt(lmax, 0)}\\ \\text{nm}$.`);
    const box = { l: 130, r: W - 70, t: 110, b: 530 };
    const ax = axes(ctx, box, [0, 3000], [0, 10], { nx: 6, ny: 5, xl: 'wavelength λ (nm)', yl: 'spectral energy density ρ (10⁵ J/m⁴)', xc: C('wavelength'), yc: C('energy-density') });
    /* the area under the curve; the visible part in the colours the eye sees */
    shade(ctx, ax, rho, 0, 1, 3000, C('energy-density'), { alpha: 0.1 });
    for (let nm = 380; nm < 780; nm += 4) {
      const x0 = ax.X(nm), x1 = ax.X(nm + 4), y = ax.Y(Math.min(10, rho(nm + 2)));
      ctx.save(); ctx.fillStyle = F.fact(spectral(nm + 2)); ctx.globalAlpha = 0.85; ctx.fillRect(x0, y, x1 - x0 + 0.5, box.b - y); ctx.restore();
    }
    /* the classical prediction, secondary */
    plot(ctx, ax, (l) => rj(l, t) / Y, alpha(PAL.ink, 0.45), { w: 2, dash: [10, 10] });
    /* the path the peak walks as T changes (Wien's law), the book's line through the peaks */
    ctx.save(); ctx.strokeStyle = alpha(C('wavelength'), 0.55); ctx.lineWidth = 3; ctx.beginPath();
    for (let tt = 2400; tt <= 5600; tt += 25) { const l = WIEN / tt * 1e9, x = ax.X(l), y = ax.Y(planck(l, tt) / Y); if (tt === 2400) ctx.moveTo(x, y); else ctx.lineTo(x, y); }
    ctx.stroke(); ctx.restore();
    { const l = WIEN / 5600 * 1e9; text(ctx, 'path of the peak', ax.X(l) + 16, ax.Y(planck(l, 5600) / Y) + 8, alpha(C('wavelength'), 0.85), { size: 20 }); }
    plot(ctx, ax, rho, C('energy-density'), { w: 5 });
    /* the peak */
    const yp = rho(lmax);
    line(ctx, ax.X(lmax), ax.Y(yp), ax.X(lmax), box.b, alpha(C('wavelength'), 0.9), 3, [4, 8]);
    dot(ctx, ax.X(lmax), ax.Y(yp), C('energy-density'), true, 12);
    /* names, on the curves */
    const l9 = Math.pow(8 * Math.PI * kB * t / (8 * Y), 0.25) * 1e9;
    text(ctx, 'Rayleigh-Jeans', ax.X(l9) + 14, ax.Y(8), alpha(PAL.ink, 0.6), { size: 20 });
    text(ctx, 'measured', ax.X(1600), ax.Y(rho(1600)) - 18, C('energy-density'), { size: 20, weight: 600 });
    /* the hole in the oven, glowing the colour of the body at this temperature */
    const gx = ax.X(2450), gy = ax.Y(6.9), s = 112, r = 70;
    ctx.save(); ctx.fillStyle = F.fact(OVEN); ctx.beginPath(); ctx.roundRect(gx - s, gy - s, 2 * s, 2 * s, 14); ctx.fill();
    const g = ctx.createRadialGradient(gx, gy, r * 0.6, gx, gy, r * 1.45);
    g.addColorStop(0, alpha(F.fact(glow(t)), 0.55)); g.addColorStop(1, alpha(F.fact(glow(t)), 0));
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(gx, gy, r * 1.45, 0, 2 * Math.PI); ctx.fill();
    ctx.fillStyle = F.fact(glow(t)); ctx.beginPath(); ctx.arc(gx, gy, r, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
    text(ctx, `the hole glows at ${fmt(t, 0)} K`, gx, gy + s + 28, C('temperature'), { size: 20, weight: 600, align: 'center' });
    hits.length = 0;
    hits.push({ x: ax.X(lmax), y: ax.Y(yp), r: 16, name: `the peak, λmax = ${fmt(lmax, 0)} nm` });
    hits.push({ x: gx, y: gy, r: s, name: `a hole in an oven at ${fmt(t, 0)} K, in the colour it glows` });
    hits.push({ x: ax.X(WIEN / 3000 * 1e9), y: ax.Y(planck(WIEN / 3000 * 1e9, 3000) / Y), r: 14, name: 'the path of the peak as the temperature changes' });
    tex(d.readout, `\\klmax = \\dfrac{b}{\\kT} \\\\ \\klmax = \\dfrac{2.898\\times10^{-3}\\ \\text{m·K}}{${fmt(t, 0)}\\ \\text{K}} = ${fmt(lmax, 0)}\\ \\text{nm}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- Figure 1.1.4: the fourth power ----------
   x: temperature 0 to 400 K; y: radiated power 0 to 1600 W/m^2 (sigma 400^4 = 1452).
   The point is the sixteen: a column at T and a column at T/2 stand on the curve, one sixteen times the
   other. The book's everyday temperatures are the slider's detents. */
(function () {
  const d = sim('sim-stefan', 560);
  const T = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: 0, max: 400, step: 1, value: 300, unit: 'K', dec: 0,
    detents: [{ v: 273, label: 'ice' }, 293, { v: 310, label: 'body' }, { v: 373, label: 'boiling' }], snap: true });
  const hits = [];
  F.hover(d.stage, () => hits);
  const P = (x) => SIGMA * Math.pow(x, 4);
  /* two significant figures below 100 W/m^2, whole watts above */
  const fp = (v) => v <= 0 ? '0' : v >= 100 ? fmt(v, 0) : fmt(v, Math.max(0, 1 - Math.floor(Math.log10(v))));
  function draw() {
    const { ctx, W } = begin(d.c);
    const t = T.v, p = P(t), th = t / 2, ph = P(th);
    topline(ctx, t < 1 ? `At $\\kT = 0$ K a surface radiates nothing.` : `Doubling $\\kT$ from ${fmt(th, th % 1 ? 1 : 0)} K to ${fmt(t, 0)} K raises $\\kP$ from ${fp(ph)} to ${fp(p)} W/m², sixteen times as much.`);
    const box = { l: 150, r: W - 90, t: 120, b: 470 };
    const ax = axes(ctx, box, [0, 400], [0, 1600], { nx: 8, ny: 8, xl: 'temperature T (K)', yl: 'radiated power P (W/m²)', xc: C('temperature'), yc: C('power') });
    const col = (x, y, a) => { const w = 34, top = ax.Y(y); ctx.save(); ctx.fillStyle = alpha(C('power'), a); ctx.fillRect(ax.X(x) - w / 2, top, w, box.b - top); ctx.restore(); };
    col(th, ph, 0.75); col(t, p, 0.75);
    plot(ctx, ax, P, C('power'), { w: 5 });
    line(ctx, box.l, ax.Y(p), ax.X(t) - 17, ax.Y(p), alpha(PAL.ink, 0.4), 2, [4, 8]);
    dot(ctx, ax.X(th), ax.Y(ph), C('power'), false, 9);
    dot(ctx, ax.X(t), ax.Y(p), C('power'), true, 10);
    if (t >= 40) text(ctx, '½T', ax.X(th), ax.Y(ph) - 24, C('temperature'), { size: 20, weight: 600, align: 'center' });
    hits.length = 0;
    hits.push({ x: ax.X(th), y: ax.Y(ph), r: 16, name: `half the temperature, ${fmt(th, 1)} K: ${fp(ph)} W/m²` });
    hits.push({ x: ax.X(t), y: ax.Y(p), r: 16, name: `${fmt(t, 0)} K: ${fp(p)} W/m²` });
    tex(d.readout, `\\kP = \\sigma \\kT^4 \\\\ \\kP = (5.67\\times10^{-8}\\ \\text{W m}^{-2}\\text{K}^{-4})(${fmt(t, 0)}\\ \\text{K})^4 = ${fp(p)}\\ \\text{W/m}^2`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
