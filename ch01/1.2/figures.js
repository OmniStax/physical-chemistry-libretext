/* Figures for section 1.2 Quantum Hypothesis Used for Blackbody Radiation Law. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.2'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, shade, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
/* a dashed curve clipped to its graph's box, for a prediction drawn beside what was measured */
function dashed(ctx, ax, f, color, w = 3) {
  const { box, X, Y, xr } = ax;
  ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
  ctx.strokeStyle = color; ctx.lineWidth = w; ctx.setLineDash([10, 10]); ctx.beginPath();
  let on = false;
  for (let i = 0; i <= 400; i++) {
    const x = xr[0] + (xr[1] - xr[0]) * i / 400, y = f(x);
    if (!isFinite(y) || y > 1e3) { on = false; continue; }
    if (on) ctx.lineTo(X(x), Y(y)); else { ctx.moveTo(X(x), Y(y)); on = true; }
  }
  ctx.stroke(); ctx.restore();
}
/* a number as m × 10^k in TeX */
function sci(x, d) {
  if (x === 0) return '0';
  const k = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, k);
  const ms = m.toFixed(d);
  if (+ms >= 10) return sci(x * 1.0000001, d);
  return `${ms}\\times10^{${k}}`;
}

/* ---------- physics, SI, the book's constants (the list under Equation 1.2.2) ---------- */
const h = 6.626e-34, c = 3.00e8, kB = 1.38e-23;
/* Planck's law in wavelength, Equation 1.2.3, J/m^4 */
const planck = (lamNm, T) => { const l = lamNm * 1e-9; return (8 * Math.PI * h * c / Math.pow(l, 5)) / (Math.exp(h * c / (l * kB * T)) - 1); };
/* the Rayleigh-Jeans law in the same variable */
const rj = (lamNm, T) => { const l = lamNm * 1e-9; return 8 * Math.PI * kB * T / Math.pow(l, 4); };
const peak = (T) => h * c / (4.965 * kB * T) * 1e9;

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

/* ---------- Sim: the ramp and the staircase ----------
   One energy axis, 0 to 30 x 10^-20 J (the slider's maximum), shared by a smooth ramp on the left and a
   staircase of steps h nu on the right. Moving: both balls are fed energy at the same steady rate up to E.
   The ramp ball rolls up in step with the rising energy line; the stair ball sits on its tread until the
   energy reaches the next whole h nu and then hops up one step, so its climb is a staircase in time.
   nu runs 1 to 10 x 10^13 Hz, a step 0.66 to 6.6 x 10^-20 J: at the low end 45 hops blur into the ramp. */
(function () {
  const d = sim('sim-ladder', 560);
  const RUN = 4.5;
  const cy = F.cycle(() => RUN, 1.2);
  const E = ctl(d.controls, { label: '\\kE', cls: 'energy', min: 0, max: 30, step: 0.1, value: 9, unit: '× 10⁻²⁰ J', dec: 1, onInput: () => cy.reset() });
  const NU = ctl(d.controls, { label: '\\knu', cls: 'frequency', min: 1, max: 10, step: 0.1, value: 3, unit: '× 10¹³ Hz', dec: 1, onInput: () => cy.reset() });
  const EMAX = 30, hits = [];
  F.hover(d.stage, () => hits);
  const smooth = (k) => k * k * (3 - 2 * k);
  function draw() {
    const { ctx, W } = begin(d.c);
    const tau = Math.min(cy.now(), RUN), E0 = E.v, e = E0 * tau / RUN;
    const step = h * NU.v * 1e13 / 1e-20, n = Math.floor(e / step + 1e-9), en = n * step;
    topline(ctx, `The ramp ball holds $\\kE = ${fmt(e, 1)}\\times10^{-20}$ J; the stair ball holds $${n}h\\knu = ${fmt(en, 2)}\\times10^{-20}$ J.`);
    const box = { l: 150, r: W - 60, t: 120, b: 470 };
    const ax = axes(ctx, box, [0, 1], [0, EMAX], { nx: 0, ny: 6, xl: '', yl: 'energy E (10⁻²⁰ J)', yc: C('energy') });
    const Y = ax.Y, r = 16;
    /* the ramp */
    const r0 = box.l + 40, r1 = box.l + 520;
    ctx.save(); ctx.beginPath(); ctx.moveTo(r0, box.b); ctx.lineTo(r1, Y(EMAX)); ctx.lineTo(r1, box.b); ctx.closePath();
    ctx.fillStyle = PAL.soft; ctx.fill(); ctx.lineWidth = 2; ctx.strokeStyle = PAL.muted; ctx.stroke(); ctx.restore();
    /* the staircase: step k is the tread at height k h nu */
    const s0 = box.l + 620, s1 = W - 90, N = Math.floor(EMAX / step + 1e-9), w = (s1 - s0) / (N + 1);
    ctx.save(); ctx.beginPath(); ctx.moveTo(s0, box.b);
    for (let k = 0; k <= N; k++) { ctx.lineTo(s0 + k * w, Y(k * step)); ctx.lineTo(s0 + (k + 1) * w, Y(k * step)); }
    ctx.lineTo(s1, box.b); ctx.closePath(); ctx.fillStyle = PAL.soft; ctx.fill(); ctx.lineWidth = 2; ctx.strokeStyle = PAL.muted; ctx.stroke(); ctx.restore();
    /* the energy given so far, across both */
    line(ctx, box.l, Y(e), W - 70, Y(e), alpha(C('energy'), 0.8), 3, [10, 10]);
    /* the ramp ball rides the energy line */
    const slope = Math.atan2(Y(EMAX) - box.b, r1 - r0), xr = r0 + (r1 - r0) * e / EMAX;
    const bx = xr + r * Math.sin(slope), by = Y(e) - r * Math.cos(slope);
    dot(ctx, bx, by, PAL.ink, true, r);
    /* the stair ball hops one tread when the energy reaches the next whole h nu */
    const tread = (k) => [s0 + (k + 0.5) * w, Y(k * step) - r];
    let [sx, sy] = tread(n);
    if (n >= 1 && E0 > 0) {
      const tn = n * step / E0 * RUN, dur = Math.min(0.3, 0.7 * RUN * step / E0), k = Math.max(0, Math.min(1, (tau - tn) / dur));
      if (k < 1) {
        const [x0, y0] = tread(n - 1), q = smooth(k);
        sx = x0 + (sx - x0) * q; sy = y0 + (sy - y0) * q - Math.sin(Math.PI * k) * Math.min(40, 0.6 * (Y(0) - Y(step)) + 14);
      }
    }
    dot(ctx, sx, sy, PAL.ink, true, r);
    text(ctx, 'ramp: any energy', (r0 + r1) / 2, box.b + 40, PAL.ink, { size: 22, align: 'center' });
    text(ctx, 'stairs: whole steps of hν', (s0 + s1) / 2, box.b + 40, PAL.ink, { size: 22, align: 'center' });
    hits.length = 0;
    hits.push({ x: bx, y: by, r: r + 4, name: 'ball on the ramp' });
    hits.push({ x: sx, y: sy, r: r + 4, name: `ball on the stairs, step n = ${n}` });
    hits.push({ x: W - 90, y: Y(e), r: 14, name: 'the energy given so far' });
    tex(d.readout, `n = \\left\\lfloor \\dfrac{\\kE}{h\\knu} \\right\\rfloor = ${n} \\\\ n h\\knu = ${n} \\times (6.626\\times10^{-34}\\ \\text{J·s})(${fmt(NU.v, 1)}\\times10^{13}\\ \\text{Hz}) = ${n === 0 ? '0' : sci(en * 1e-20, 2)}\\ \\text{J}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* ---------- Figure 1.2.1 + 1.2.2: Planck's law against the Sun ----------
   x: wavelength 0 to 2500 nm; y: spectral energy density in 10^5 J/m^4, fixed 0 to 16 from the slider's
   maximum (6000 K peaks at 13.4 x 10^5 J/m^4). SUN is the ASTM G173-03 extraterrestrial (AM0) spectrum,
   averaged over 20 nm bins centred 290 to 2490 nm and turned into the energy density at the Sun's surface,
   rho = (4/c) E_lambda (AU/R_sun)^2, in 10^5 J/m^4; it is measured data and is drawn in ink.
   The point: at 5777 K Planck's curve lies on the Sun. The scale along the top gives one quantum hc/lambda in
   units of k_B T at this temperature; the peak always stands under about 5 (hc/lambda_max = 4.965 k_B T),
   Planck's argument that quanta much larger than k_B T are rarely emitted. Rayleigh-Jeans is thin and muted. */
(function () {
  const d = sim('sim-planck', 620);
  const SUN = [2.50, 3.87, 5.60, 5.99, 6.97, 6.66, 10.67, 10.18, 12.17, 12.47, 12.01, 11.56, 11.60, 11.42, 11.32, 11.09, 10.64, 10.27, 9.64, 9.46, 9.01, 8.57, 8.19, 7.87, 7.54, 7.20, 6.88, 6.54, 6.15, 5.95, 5.76, 5.55, 5.33, 5.06, 4.85, 4.69, 4.46, 4.26, 4.08, 3.89, 3.70, 3.61, 3.48, 3.37, 3.24, 3.13, 3.03, 2.92, 2.81, 2.73, 2.59, 2.50, 2.39, 2.31, 2.24, 2.17, 2.09, 2.02, 1.95, 1.90, 1.84, 1.78, 1.73, 1.67, 1.61, 1.56, 1.51, 1.46, 1.39, 1.35, 1.29, 1.25, 1.19, 1.15, 1.11, 1.07, 1.02, 0.99, 0.95, 0.89, 0.88, 0.85, 0.82, 0.78, 0.76, 0.73, 0.71, 0.68, 0.66, 0.63, 0.60, 0.59, 0.57, 0.55, 0.53, 0.52, 0.50, 0.49, 0.47, 0.45, 0.44, 0.43, 0.41, 0.40, 0.39, 0.37, 0.36, 0.35, 0.34, 0.33, 0.32];
  const sun = (nm) => { const i = (nm - 290) / 20; if (i < 0 || i > SUN.length - 1) return NaN; const j = Math.floor(i), f = i - j; return j >= SUN.length - 1 ? SUN[j] : SUN[j] * (1 - f) + SUN[j + 1] * f; };
  const T = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: 3000, max: 6000, step: 1, value: 5777, unit: 'K', dec: 0,
    specials: [{ at: 5777, label: "the Sun's effective temperature" }] });
  const Y = 1e5, hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    const t = T.v, lmax = peak(t), x = h * c / (lmax * 1e-9 * kB * t), rho = planck(lmax, t);
    const onSun = Math.abs(t - 5777) < 0.5;
    topline(ctx, `At $\\kT = ${fmt(t, 0)}$ K Planck's curve peaks at $\\klmax = ${fmt(lmax, 0)}$ nm${onSun ? ", on top of the Sun's measured spectrum" : ''}.`);
    const box = { l: 130, r: W - 80, t: 130, b: 530 };
    const ax = axes(ctx, box, [0, 2500], [0, 16], { nx: 5, ny: 8, xl: 'wavelength λ (nm)', yl: 'spectral energy density ρ (10⁵ J/m⁴)', xc: C('wavelength'), yc: C('energy-density') });
    /* the visible band, in its own colours, as a strip under the axis */
    for (let nm = 380; nm < 780; nm += 4) {
      const x0 = ax.X(nm), x1 = ax.X(nm + 4);
      ctx.save(); ctx.fillStyle = F.fact(spectral(nm + 2)); ctx.globalAlpha = 0.9; ctx.fillRect(x0, box.b + 2, x1 - x0 + 0.5, 10); ctx.restore();
    }
    /* one quantum hc/lambda in units of k_B T, along the top edge */
    text(ctx, 'one quantum hc/λ, in units of kT', box.r, box.t - 24, C('energy'), { size: 20, weight: 600, align: 'right' });
    [1, 2, 3, 5, 10, 20].forEach((q) => {
      const lam = h * c / (q * kB * t) * 1e9;
      if (lam < 60 || lam > 2500) return;
      const X = ax.X(lam);
      line(ctx, X, box.t, X, box.t + 12, C('energy'), 2);
      text(ctx, String(q), X, box.t + 32, C('energy'), { size: 17, align: 'center' });
    });
    /* the Sun, measured */
    shade(ctx, ax, sun, 0, 290, 2490, PAL.ink, { alpha: 0.13 });
    plot(ctx, ax, sun, alpha(PAL.ink, 0.5), { w: 2, x: [290, 2490] });
    dashed(ctx, ax, (l) => rj(l, t) / Y, alpha(PAL.ink, 0.45), 2);
    plot(ctx, ax, (l) => planck(l, t) / Y, C('energy-density'), { w: 5 });
    /* the peak, its drop to the axis and its rise to the quantum scale */
    const py = rho / Y;
    line(ctx, ax.X(lmax), box.t + 50, ax.X(lmax), box.b, alpha(C('wavelength'), 0.8), 3, [4, 8]);
    dot(ctx, ax.X(lmax), ax.Y(py), C('energy-density'), true, 11);
    /* names, on the curves */
    const yl = 9, ll = Math.min(2300, Math.pow(8 * Math.PI * kB * t / (yl * Y), 0.25) * 1e9);
    text(ctx, 'Rayleigh-Jeans', ax.X(ll) + 14, ax.Y(yl), alpha(PAL.ink, 0.6), { size: 20 });
    /* Planck's name on the rising flank, at half the peak, where no measured data lies */
    let lo = 60, hi = lmax; for (let i = 0; i < 40; i++) { const m = (lo + hi) / 2; if (planck(m, t) < rho / 2) lo = m; else hi = m; }
    if (py > 6) text(ctx, 'Planck', ax.X(lo) - 16, ax.Y(py / 2), C('energy-density'), { size: 20, weight: 600, align: 'right' });
    else text(ctx, 'Planck', ax.X(lmax) + 20, ax.Y(py) - 22, C('energy-density'), { size: 20, weight: 600 });
    text(ctx, 'the Sun, measured', ax.X(1350), ax.Y(1.1), PAL.ink, { size: 20, align: 'center' });
    hits.length = 0;
    hits.push({ x: ax.X(lmax), y: ax.Y(py), r: 16, name: `the peak: one quantum here is ${fmt(x, 2)} kT` });
    tex(d.readout, `\\krho(\\klambda,\\kT) = \\dfrac{8\\pi hc}{\\klambda^5}\\dfrac{1}{e^{hc/\\klambda k_B\\kT}-1} \\\\ \\krho(\\klmax,\\kT) = \\dfrac{8\\pi hc}{(${fmt(lmax, 0)}\\ \\text{nm})^5}\\dfrac{1}{e^{${fmt(x, 2)}}-1} = ${sci(rho, 2)}\\ \\text{J/m}^4`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
