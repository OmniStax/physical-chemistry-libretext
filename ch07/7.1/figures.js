/* Figures for section 7.1 The Variational Method Approximation. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.1'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- physics, atomic units ---------- */
const EH = 27.211;            /* the hartree in eV, m_e e^4 / 4 eps0^2 h^2 */
const ZOPT = 27 / 16;         /* the variational optimum (Exercise 7.1.1) */
const E_TRUE = -79.0, E_IND = -108.8;   /* Table 7.1.1 */
const eTrial = (z) => EH * (z * z - 27 * z / 8);
/* the fraction of a 1s electron of exponent z lying inside radius r (in a0): 1 - e^{-2zr}(1 + 2zr + 2z^2r^2), as 6.5 */
const inside = (z, r) => 1 - Math.exp(-2 * z * r) * (1 + 2 * z * r + 2 * z * z * r * r);
/* radial distribution of a 1s electron of exponent z, per a0 */
const radial = (z, r) => 4 * z * z * z * r * r * Math.exp(-2 * z * r);

/* ---------- Figure 7.1.1: shielding ----------
   Left, helium seen as a slice: the nucleus (+2), electron 1 as its 1s charge cloud (zeta = 27/16) and
   electron 2 at distance r2 on the slider, with the sphere of radius r2 dashed. On electron 2 two arrows,
   their lengths in proportion to the charges that act: the pull of the nucleus (+2) and the push of the part
   of electron 1's charge inside the sphere. Right, Z_eff = 2 - q_inside(r2) against r2, 0 to 4 a0, y 1 to 2. */
(function () {
  const d = sim('sim-shielding', 560);
  const R = ctl(d.controls, { label: '\\krb', cls: 'length', min: 0.1, max: 4, step: 0.05, value: 1, unit: 'a₀', dec: 2 });
  let hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const r = R.v, q = inside(ZOPT, r), z = 2 - q;
    topline(ctx, `At $\\krb = ${fmt(r, 2)}\\,\\kao$ electron 2 feels $Z_{eff} = ${fmt(z, 2)}$.`);
    /* the atom */
    const O = { x: 340, y: 320 }, S = 64;   /* 64 units per a0: 4 a0 reaches 256 */
    const ce = F.el('e-'), ch = C('charge');
    for (let k = 40; k >= 1; k--) {   /* the cloud, darker where electron 1's density is higher */
      const rr = k * 0.1;
      ctx.save(); ctx.fillStyle = alpha(ce, 0.5 * Math.exp(-2 * ZOPT * rr) * 0.9 + 0.012); ctx.beginPath(); ctx.arc(O.x, O.y, rr * S, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
    }
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 2.5; ctx.setLineDash([10, 10]); ctx.beginPath(); ctx.arc(O.x, O.y, r * S, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    dot(ctx, O.x, O.y, F.el('He'), true, 16);
    text(ctx, '+2', O.x, O.y - 34, ch, { size: 22, weight: 600, align: 'center' });
    const a = -0.5, P = { x: O.x + r * S * Math.cos(a), y: O.y + r * S * Math.sin(a) };
    line(ctx, O.x, O.y, P.x, P.y, alpha(C('length'), 0.8), 3);
    /* the two pulls on electron 2, in units of 56 per unit charge */
    const ux = Math.cos(a), uy = Math.sin(a), U = 56;
    F.arrow(ctx, P.x, P.y, P.x - ux * 2 * U, P.y - uy * 2 * U, ch, 4);
    if (q > 0.04) F.arrow(ctx, P.x + uy * 14, P.y - ux * 14, P.x + uy * 14 + ux * q * U, P.y - ux * 14 + uy * q * U, alpha(ch, 0.6), 4);
    dot(ctx, P.x, P.y, ce, true, 10);
    text(ctx, 'electron 2', P.x + 18, P.y + 26, F.ref('electron-2'), { size: 22, weight: 600, bg: PAL.panel });
    text(ctx, 'electron 1', O.x - 70, O.y + 150, F.ref('electron-1'), { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    hits.push({ x: O.x, y: O.y, r: 18, name: 'the helium nucleus, charge +2' });
    hits.push({ x: P.x, y: P.y, r: 14, name: `electron 2, at ${fmt(r, 2)} a₀ from the nucleus` });
    hits.push({ x: P.x - ux * U, y: P.y - uy * U, r: 16, name: 'the pull of the nucleus, +2' });
    hits.push({ x: O.x - 100, y: O.y + 100, r: 30, name: `the charge cloud of electron 1; ${fmt(q * 100, 0)}% of it lies inside the dashed sphere` });
    /* Z_eff against r2 */
    const ax = axes(ctx, { l: 720, r: 1330, t: 120, b: 470 }, [0, 4], [1, 2], { nx: 4, ny: 4, xl: 'distance of electron 2, r₂ (a₀)', yl: 'effective nuclear charge Z_eff', xc: C('length') });
    plot(ctx, ax, (x) => 2 - inside(ZOPT, x), ch, { w: 5 });
    line(ctx, ax.X(r), ax.Y(z), ax.X(r), ax.box.b, alpha(C('length'), 0.9), 3, [4, 8]);
    dot(ctx, ax.X(r), ax.Y(z), ch, true, 10);
    hits.push({ x: ax.X(r), y: ax.Y(z), r: 14, name: `Z_eff = ${fmt(z, 2)} at r₂ = ${fmt(r, 2)} a₀` });
    tex(d.readout, `Z_{eff} = Z - q_{inside}(\\krb) \\\\ Z_{eff} = 2 - ${fmt(q, 2)} = ${fmt(z, 2)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- flowchart, shared by Figure 7.1.2 ----------
   A faithful copy: six steps in boxes, numbered (Exercise 7.1.1 walks them by number), arrows down, the
   "Not Good" loop from the last step back to the second, and "Good" out of the bottom. */
function flow(id, steps) {
  const d = sim(id, 780);
  let hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const L = 220, Rr = 1000, h = 80, gap = 30, top = 24, cx = (L + Rr) / 2;
    steps.forEach((s, i) => {
      const y = top + i * (h + gap);
      ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = alpha(PAL.ink, 0.7); ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.roundRect(L, y, Rr - L, h, 8); ctx.fill(); ctx.stroke(); ctx.restore();
      const n = s.lines.length, lh = 26;
      s.lines.forEach((t, j) => text(ctx, t, cx, y + h / 2 + (j - (n - 1) / 2) * lh, PAL.ink, { size: 20, align: 'center', base: 'middle' }));
      dot(ctx, L - 50, y + h / 2, PAL.ink, false, 20);
      text(ctx, String(i + 1), L - 50, y + h / 2, PAL.ink, { size: 20, weight: 600, align: 'center', base: 'middle' });
      if (i < steps.length - 1) F.arrow(ctx, cx, y + h, cx, y + h + gap, alpha(PAL.ink, 0.7), 3);
      hits.push({ x: cx, y: y + h / 2, r: 40, name: `Step ${i + 1}: ${s.lines.join(' ')}` });
    });
    const y6 = top + 5 * (h + gap) + h / 2, y2 = top + (h + gap) + h / 2, xl = 1110;
    line(ctx, Rr, y6, xl, y6, alpha(PAL.ink, 0.7), 3); line(ctx, xl, y6, xl, y2, alpha(PAL.ink, 0.7), 3);
    F.arrow(ctx, xl, y2, Rr, y2, alpha(PAL.ink, 0.7), 3);
    text(ctx, 'Not Good', xl + 14, (y6 + y2) / 2, PAL.ink, { size: 20, base: 'middle' });
    const yb = top + 6 * (h + gap) - gap;
    F.arrow(ctx, cx, yb, cx, yb + 40, alpha(PAL.ink, 0.7), 3);
    text(ctx, 'Good', cx, yb + 62, PAL.ink, { size: 20, align: 'center', base: 'middle' });
  }
  register(d.fig, { update: () => {}, draw });
}
flow('fig-7-1-2', [
  { lines: ['Define Hamiltonian'] },
  { lines: ['Define Trial Function as a function of Parameter(s)'] },
  { lines: ['Evaluate Expression for Variational Energy of', 'Trial Wavefunction as function of Parameters'] },
  { lines: ['Find Minimum of Variational Energy', 'as function of parameters'] },
  { lines: ['Construct Trial Wavefunction and Energy with parameters'] },
  { lines: ['Compare Optimized Wavefucntion and Energy to known data', 'to verify if a different Trial Wavefunction must be constructed'] },
]);

/* ---------- Figure 7.1.3: the trial energy against zeta ----------
   Left, E_trial(zeta) = E_h(zeta^2 - 27 zeta / 8) in eV for zeta 1 to 2.5; y fixed -120 to -50 eV so the
   experimental -79.0 eV and the independent-electron -108.8 eV (dashed) of Table 7.1.1 both show. The curve
   never crosses the experimental line. Right, electron 1's radial distribution for the current zeta beside
   He+'s (zeta = 2), r 0 to 3 a0, y 0 to 1.4 per a0 (the largest, zeta = 2.5, peaks at 1.35). */
(function () {
  const d = sim('sim-trial-energy', 560);
  const Z = ctl(d.controls, { label: '\\zeta', cls: '', min: 1, max: 2.5, step: 0.005, value: 2, unit: '', dec: 3,
    specials: [{ at: ZOPT, label: 'minimum' }, { at: 2, label: 'no shielding' }] });
  let hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const z = Z.v, e = eTrial(z), gap = e - E_TRUE, cE = C('energy');
    topline(ctx, `At $\\zeta = ${fmt(z, 3)}$ the trial energy is $\\kEtrial = ${fmt(e, 1)}$ eV, ${fmt(gap, 1)} eV above $\\kEtrue$.`);
    const ax = axes(ctx, { l: 140, r: 800, t: 120, b: 470 }, [1, 2.5], [-120, -50], { nx: 6, ny: 7, xl: 'effective nuclear charge ζ', yl: 'energy (eV)', yc: cE });
    line(ctx, ax.X(1), ax.Y(E_TRUE), ax.X(2.5), ax.Y(E_TRUE), PAL.ink, 3);
    text(ctx, 'experiment, −79.0 eV', ax.X(2.48), ax.Y(E_TRUE) + 22, PAL.ink, { size: 17, align: 'right' });
    plot(ctx, ax, () => E_IND, alpha(PAL.ink, 0.55), { w: 3, dash: [10, 10] });
    text(ctx, 'repulsion ignored, −108.8 eV', ax.X(2.48), ax.Y(E_IND) - 14, alpha(PAL.ink, 0.7), { size: 17, align: 'right' });
    plot(ctx, ax, eTrial, cE, { w: 5 });
    line(ctx, ax.X(z), ax.Y(e), ax.X(z), ax.Y(E_TRUE), alpha(cE, 0.8), 3, [4, 8]);
    dot(ctx, ax.X(z), ax.Y(e), cE, true, 10);
    hits.push({ x: ax.X(z), y: ax.Y(e), r: 14, name: `E_trial = ${fmt(e, 1)} eV at ζ = ${fmt(z, 3)}` });
    hits.push({ x: ax.X(ZOPT), y: ax.Y(eTrial(ZOPT)), r: 12, name: 'the lowest trial energy, −77.5 eV at ζ = 27/16' });
    /* the orbital beside it */
    const cp = C('probability-density');
    const bx = axes(ctx, { l: 930, r: 1330, t: 120, b: 470 }, [0, 3], [0, 1.4], { nx: 3, ny: 7, xl: 'r (a₀)', yl: 'radial distribution (1/a₀)', xc: C('length'), yc: cp });
    plot(ctx, bx, (r) => radial(2, r), alpha(cp, 0.5), { w: 3, dash: [10, 10] });
    plot(ctx, bx, (r) => radial(z, r), cp, { w: 4 });
    F.legend(ctx, bx, [{ s: `ζ = ${fmt(z, 3)}`, color: cp, w: 4 }, { s: 'ζ = 2, as in He⁺', color: alpha(cp, 0.5), w: 3, dash: [10, 10] }], { corner: 'tr' });
    tex(d.readout, `\\kEtrial = E_h\\left(\\zeta^2 - \\tfrac{27}{8}\\zeta\\right) \\\\ \\kEtrial = 27.21\\ \\text{eV}\\,\\left(${fmt(z, 3)}^2 - \\tfrac{27}{8}\\times ${fmt(z, 3)}\\right) = ${fmt(e, 1)}\\ \\text{eV} \\\\ \\kEtrial - \\kEtrue = ${fmt(gap, 1)}\\ \\text{eV}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
