/* Figures for section 26.7 The van 't Hoff Equation. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['26.7'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

const R = 8.314, T1 = 298.15;
/* a number in TeX: plain between 0.01 and 10^4, else a × 10^n to three figures */
function sciTex(v) {
  if (v === 0) return '0';
  const e = Math.floor(Math.log10(Math.abs(v)));
  if (e >= -2 && e < 4) return fmt(v, Math.max(0, 2 - e));
  const m = v / Math.pow(10, e);
  return `${fmt(m, 2)} \\times 10^{${e}}`;
}
/* the same as page text, with Unicode superscripts */
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
function sciTxt(v) {
  const e = Math.floor(Math.log10(Math.abs(v)));
  if (e >= -2 && e < 4) return fmt(v, Math.max(0, 2 - e));
  return `${fmt(v / Math.pow(10, e), 2)} × 10${String(e).split('').map((ch) => SUP[ch]).join('')}`;
}

/* ---------- Figure 26.7.1: ln K against 1/T ----------
   Still. x: 1/T from 0 to 4 x 10^-3 1/K, so the intercept at 1/T = 0 (Delta S/R) is on the axis; the
   temperatures the slider reaches, 250 to 1000 K, are the solid stretch from 1.0 to 4.0, the
   extrapolation to infinite temperature dashed. y: ln K fixed from -40 to 40, which holds the default
   (the NH3 synthesis, -23.8 to 20.4); the steepest slider extremes run out of the box and are clipped.
   Opens on the book's NH3 synthesis: Delta_rH = -91.8 kJ/mol (26.2) and Delta_rS = -197.5 J/(K mol),
   which gives Delta_rG = -32.9 kJ/mol at 298 K (26.6). The point: the slope is -Delta H/R. */
(function () {
  const d = sim('sim-van-t-hoff', 600);
  const H = ctl(d.controls, { label: '\\kDeltaHstd', cls: 'energy', key: 'dH', min: -100, max: 100, step: 0.1, value: -91.8, unit: 'kJ/mol', dec: 1,
    specials: [{ at: 0, label: 'flat line' }] });
  const S = ctl(d.controls, { label: '\\kDeltaSstd', cls: 'entropy', key: 'dS', min: -250, max: 250, step: 0.5, value: -197.5, unit: 'J/(K mol)', dec: 1 });
  const T = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: 250, max: 1000, step: 1, value: 400, unit: 'K', dec: 0,
    detents: [298, 400, 500, 1000], snap: true });
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    const dH = H.v * 1000, dS = S.v, t = T.v;
    const lnK = (x) => -dH / R * x * 1e-3 + dS / R;     /* x is 1/T in 10^-3 1/K */
    const k1 = Math.exp(lnK(1000 / T1)), kt = Math.exp(lnK(1000 / t));
    const flat = Math.abs(H.v) < 0.05;
    if (flat) topline(ctx, `With $\\kDeltaHstd = 0$, $K = ${sciTex(k1)}$ at every temperature.`);
    else topline(ctx, `${dH < 0 ? 'Exothermic' : 'Endothermic'}: $K$ ${(t > T1) === (dH < 0) ? 'falls' : 'rises'} from $${sciTex(k1)}$ at 298 K to $${sciTex(kt)}$ at ${fmt(t, 0)} K.`);
    const box = { l: 150, r: W - 70, t: 110, b: 500 };
    const ax = axes(ctx, box, [0, 4], [-40, 40], { nx: 4, ny: 4, xl: 'inverse temperature 1/T (10⁻³ K⁻¹)', yl: 'ln K', xc: C('temperature') });
    line(ctx, box.l, ax.Y(0), box.r, ax.Y(0), alpha(PAL.ink, 0.4), 2);
    /* past 1000 K the line is an extrapolation to infinite temperature, where it meets the axis at Delta S/R */
    plot(ctx, ax, lnK, PAL.ink, { w: 4, x: [0, 1], dash: [10, 10] });
    plot(ctx, ax, lnK, PAL.ink, { w: 5, x: [1, 4] });
    hits.length = 0;
    const y0 = lnK(0);
    if (Math.abs(y0) <= 40) {
      dot(ctx, ax.X(0), ax.Y(y0), C('entropy'), true, 10);
      F.label(ctx, 'ΔS°/R', ax.X(0), ax.Y(y0), { side: 'right', color: C('entropy'), size: 22 });
      hits.push({ x: ax.X(0), y: ax.Y(y0), r: 14, name: `intercept ΔS°/R = ${fmt(y0, 1)}` });
    }
    /* the two temperatures of the integrated form */
    const x1 = 1000 / T1, xt = 1000 / t;
    const pin = (x, filled, name) => {
      const y = lnK(x); if (Math.abs(y) > 40) return;
      line(ctx, ax.X(x), ax.Y(y), ax.X(x), box.b, alpha(C('temperature'), 0.8), 3, [4, 8]);
      dot(ctx, ax.X(x), ax.Y(y), PAL.ink, filled, filled ? 10 : 9);
      hits.push({ x: ax.X(x), y: ax.Y(y), r: 14, name });
    };
    pin(x1, false, `298 K: ln K = ${fmt(lnK(x1), 2)}, K = ${sciTxt(k1)}`);
    pin(xt, true, `${fmt(t, 0)} K: ln K = ${fmt(lnK(xt), 2)}, K = ${sciTxt(kt)}`);
    if (Math.abs(xt - x1) > 0.25) {
      const lab = (x, s) => { const y = lnK(x); if (Math.abs(y) <= 40) F.label(ctx, s, ax.X(x), ax.Y(y), { side: dH < 0 ? 'below' : 'above', color: C('temperature'), size: 20 }); };
      lab(x1, '298 K'); lab(xt, `${fmt(t, 0)} K`);
    }
    const slope = -H.v * 1000 / R / 1000;   /* in 10^3 K */
    hits.push({ x: ax.X(2.5), y: ax.Y(lnK(2.5)), r: 16, name: `slope −ΔH°/R = ${fmt(slope, 2)} × 10³ K` });
    const sH = `${fmt(H.v, 1)}\\times 10^{3}`, sS = fmt(dS, 1);
    tex(d.readout, `\\ln K = -\\dfrac{\\kDeltaHstd}{\\kR}\\dfrac{1}{\\kT} + \\dfrac{\\kDeltaSstd}{\\kR} \\\\ \\ln K = -\\dfrac{${sH}\\ \\text{J/mol}}{8.314\\ \\text{J/(K mol)}}\\cdot\\dfrac{1}{${fmt(t, 0)}\\ \\text{K}} + \\dfrac{${sS}\\ \\text{J/(K mol)}}{8.314\\ \\text{J/(K mol)}} = ${fmt(lnK(xt), 2)} \\\\ \\ln \\dfrac{K(${fmt(t, 0)}\\ \\text{K})}{K(298.15\\ \\text{K})} = -\\dfrac{${sH}\\ \\text{J/mol}}{8.314\\ \\text{J/(K mol)}}\\left(\\dfrac{1}{${fmt(t, 0)}\\ \\text{K}} - \\dfrac{1}{298.15\\ \\text{K}}\\right) = ${fmt(lnK(xt) - lnK(x1), 2)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
