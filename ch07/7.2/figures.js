/* Figures for section 7.2 Linear Variational Method and the Secular Determinant. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.2'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const DEG = Math.PI / 180;

/* ---------- Figure 7.2.1: the energy landscape of two basis functions ----------
   Two orthonormal functions, a1 = cos(theta), a2 = sin(theta), so the trial function stays normalized and
   E_trial(theta) = H11 cos^2 + H22 sin^2 + 2 H12 sin cos, a single sinusoid between the two roots of the
   secular determinant. H11 = -1.0 Eh fixed; the sliders set the coupling H12 and the gap H22 - H11.
   Left, the landscape over theta -90 to 90 degrees; right, on the same energy axis, H11 and H22 beside the
   roots E- and E+. y fixed -1.6 to 0.4 Eh (the widest the sliders reach is -1.50 to 0.21). The book prints
   no numbers: it opens on H12 = -0.2 and H22 = -0.5, with theta = 0, the pure first function. */
(function () {
  const d = sim('sim-landscape', 560);
  const H11 = -1.0;
  const H12 = ctl(d.controls, { label: 'H_{12}', cls: 'energy', min: -0.5, max: 0, step: 0.01, value: -0.2, unit: 'Eₕ', dec: 2,
    specials: [{ at: 0, label: 'no coupling' }] });
  const G = ctl(d.controls, { label: 'H_{22} - H_{11}', cls: 'energy', min: 0, max: 1, step: 0.01, value: 0.5, unit: 'Eₕ', dec: 2,
    specials: [{ at: 0, label: 'equal' }] });
  const roots = () => {
    const h22 = H11 + G.v, m = (H11 + h22) / 2, w = Math.hypot((h22 - H11) / 2, H12.v);
    return { h22, lo: m - w, hi: m + w, tmin: 0.5 * Math.atan2(-H12.v, (h22 - H11) / 2) / DEG };
  };
  const T = ctl(d.controls, { label: '\\theta', cls: '', min: -90, max: 90, step: 0.5, value: 0, unit: '°', dec: 1,
    specials: [{ at: () => roots().tmin, label: 'minimum' }] });
  let hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const { h22, lo, hi, tmin } = roots(), h12 = H12.v, cE = C('energy');
    const E = (t) => { const c = Math.cos(t * DEG), s = Math.sin(t * DEG); return H11 * c * c + h22 * s * s + 2 * h12 * s * c; };
    const t = T.v, e = E(t);
    topline(ctx, `At $\\theta = ${fmt(t, 1)}°$ the trial energy is ${fmt(e, 3)} Eₕ; the lowest, ${fmt(lo, 3)} Eₕ, lies at $\\theta = ${fmt(tmin, 1)}°$.`);
    const ax = axes(ctx, { l: 140, r: 760, t: 120, b: 470 }, [-90, 90], [-1.6, 0.4], { nx: 6, ny: 5, xl: 'mixing angle θ (a₁ = cos θ, a₂ = sin θ)', yl: 'energy (Eₕ)', yc: cE });
    plot(ctx, ax, E, cE, { w: 5 });
    line(ctx, ax.X(tmin), ax.Y(lo), ax.box.r, ax.Y(lo), alpha(cE, 0.5), 2, [10, 10]);
    dot(ctx, ax.X(tmin), ax.Y(lo), cE, false, 10);
    dot(ctx, ax.X(t), ax.Y(e), cE, true, 10);
    hits.push({ x: ax.X(t), y: ax.Y(e), r: 14, name: `E_trial = ${fmt(e, 3)} Eₕ at θ = ${fmt(t, 1)}°` });
    hits.push({ x: ax.X(tmin), y: ax.Y(lo), r: 14, name: `the minimum, ${fmt(lo, 3)} Eₕ, the lower root` });
    /* the ladder, on the same energy axis */
    const Y = ax.Y, x1 = [860, 970], x2 = [1090, 1200];
    text(ctx, 'φ₁ and φ₂ alone', (x1[0] + x1[1]) / 2, 108, PAL.ink, { size: 17, align: 'center' });
    text(ctx, 'roots', (x2[0] + x2[1]) / 2, 108, PAL.ink, { size: 17, align: 'center' });
    const lev = (xs, y, w, col) => line(ctx, xs[0], Y(y), xs[1], Y(y), col, w);
    lev(x1, H11, 4, alpha(cE, 0.6)); lev(x1, h22, 4, alpha(cE, 0.6));
    lev(x2, lo, 5, cE); lev(x2, hi, 5, cE);
    line(ctx, x1[1], Y(H11), x2[0], Y(lo), alpha(PAL.ink, 0.35), 2, [4, 8]);
    line(ctx, x1[1], Y(h22), x2[0], Y(hi), alpha(PAL.ink, 0.35), 2, [4, 8]);
    const close = Math.abs(Y(H11) - Y(h22)) < 26;
    text(ctx, 'H₁₁', x1[0] - 12, Y(H11) + (close ? 12 : 0), cE, { size: 20, weight: 600, align: 'right', base: 'middle' });
    text(ctx, 'H₂₂', x1[0] - 12, Y(h22) - (close ? 12 : 0), cE, { size: 20, weight: 600, align: 'right', base: 'middle' });
    text(ctx, `E₋ = ${fmt(lo, 3)}`, x2[1] + 14, Y(lo), cE, { size: 20, weight: 600, base: 'middle' });
    text(ctx, `E₊ = ${fmt(hi, 3)}`, x2[1] + 14, Y(hi), cE, { size: 20, weight: 600, base: 'middle' });
    dot(ctx, (x2[0] + x2[1]) / 2, Y(e), cE, true, 7);
    hits.push({ x: (x1[0] + x1[1]) / 2, y: Y(H11), r: 14, name: `H₁₁ = ${fmt(H11, 2)} Eₕ, the energy of φ₁ alone` });
    hits.push({ x: (x1[0] + x1[1]) / 2, y: Y(h22), r: 14, name: `H₂₂ = ${fmt(h22, 2)} Eₕ, the energy of φ₂ alone` });
    hits.push({ x: (x2[0] + x2[1]) / 2, y: Y(e), r: 12, name: 'the current trial energy, always between the two roots' });
    const n = (v) => fmt(v, 2);
    tex(d.readout, `\\begin{vmatrix} ${n(H11)} - \\kE & ${n(h12)} \\\\ ${n(h12)} & ${n(h22)} - \\kE \\end{vmatrix} = 0 \\\\ \\kE_- = ${fmt(lo, 3)}\\ E_h \\\\ \\kE_+ = ${fmt(hi, 3)}\\ E_h`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- Figure 7.2.2: the flowchart of the linear variational method ----------
   A faithful copy of the book's six steps, numbered, with the "Not Good" loop back to step 2. The four
   steps whose wording differs from Figure 7.1.2 (basis functions and coefficients in place of parameters,
   the secular equations) are shaded, as the caption asks the reader to compare. */
(function () {
  const steps = [
    { lines: ['Define Hamiltonian'] },
    { lines: ['Define Trial Function as a linear combination of basis functions'], diff: true },
    { lines: ['Evaluate Expression for Variational Energy of Trial Wavefunction', 'as function of coefficients of basis functions'], diff: true },
    { lines: ['Find Minimum of Variational Energy as function of coefficients', 'by solving the Secular Equations'], diff: true, bold: 1 },
    { lines: ['Construct Trial Wavefunction and Energy with coefficients'], diff: true },
    { lines: ['Compare Optimized Wavefunction and Energy to known data', 'to verify if a different Trial Wavefunction must be constructed'] },
  ];
  const d = sim('fig-7-2-2', 780);
  let hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const L = 220, Rr = 1000, h = 80, gap = 30, top = 24, cx = (L + Rr) / 2;
    steps.forEach((s, i) => {
      const y = top + i * (h + gap);
      ctx.save(); ctx.fillStyle = s.diff ? alpha(PAL.ink, 0.1) : PAL.panel; ctx.strokeStyle = alpha(PAL.ink, s.diff ? 0.9 : 0.7); ctx.lineWidth = s.diff ? 4 : 2.5;
      ctx.beginPath(); ctx.roundRect(L, y, Rr - L, h, 8); ctx.fill(); ctx.stroke(); ctx.restore();
      const n = s.lines.length, lh = 26;
      s.lines.forEach((t, j) => text(ctx, t, cx, y + h / 2 + (j - (n - 1) / 2) * lh, PAL.ink, { size: 20, align: 'center', base: 'middle', weight: s.bold === j ? 600 : undefined }));
      dot(ctx, L - 50, y + h / 2, PAL.ink, false, 20);
      text(ctx, String(i + 1), L - 50, y + h / 2, PAL.ink, { size: 20, weight: 600, align: 'center', base: 'middle' });
      if (i < steps.length - 1) F.arrow(ctx, cx, y + h, cx, y + h + gap, alpha(PAL.ink, 0.7), 3);
      hits.push({ x: cx, y: y + h / 2, r: 40, name: `Step ${i + 1}: ${s.lines.join(' ')}${s.diff ? ' (worded differently in Figure 7.1.2)' : ''}` });
    });
    const y6 = top + 5 * (h + gap) + h / 2, y2 = top + (h + gap) + h / 2, xl = 1110;
    line(ctx, Rr, y6, xl, y6, alpha(PAL.ink, 0.7), 3); line(ctx, xl, y6, xl, y2, alpha(PAL.ink, 0.7), 3);
    F.arrow(ctx, xl, y2, Rr, y2, alpha(PAL.ink, 0.7), 3);
    text(ctx, 'Not Good', xl + 14, (y6 + y2) / 2, PAL.ink, { size: 20, base: 'middle' });
    const yb = top + 6 * (h + gap) - gap;
    F.arrow(ctx, cx, yb, cx, yb + 40, alpha(PAL.ink, 0.7), 3);
    text(ctx, 'Good', cx, yb + 62, PAL.ink, { size: 20, align: 'center', base: 'middle' });
    F.legend(ctx, { l: 1040, r: 1390, t: 640, b: 760 }, [{ s: 'differs from Figure 7.1.2', kind: 'swatch', color: alpha(PAL.ink, 0.25) }], { corner: 'br' });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
