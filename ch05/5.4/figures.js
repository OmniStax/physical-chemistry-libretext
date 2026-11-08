/* Figures for section 5.4 The Harmonic Oscillator Energy Levels. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.4'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, vbracket, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const HBAR = 1.054572e-34, AMU = 1.660539e-27;
const SUB = '₀₁₂₃₄₅₆₇₈₉';
const sub = (k) => String(k).split('').map((c) => SUB[+c]).join('');

/* =====================================================================
   FIGURE 5.4.1: the ladder in the well. Still: an energy level has no time
   in it. The parabola V = kQ²/2 and every allowed level E_v = (v + ½)ħω
   drawn as a rung between its classical turning points ±Q_v = ±√(2E_v/k).
   Two brackets carry the point: ħω/2 from the bottom of the well to the
   lowest rung, and ħω between the first two rungs. Sliders k (force
   constant, 100 to 2000 N/m) and μ (reduced mass, 0.5 to 20 amu); opens on
   HCl, k = 481 N/m (Example 5.5.2) and μ = 0.980 amu (Section 5.2).
   Axes fixed: Q from −60 to 60 pm; energy 0 to 40 × 10⁻²⁰ J, which holds
   HCl's first seven rungs; a stiff light molecule keeps two, a soft heavy
   one crowds a hundred toward the classical continuum.
===================================================================== */
(function () {
  const d = sim('sim-ladder', 680);
  const K = ctl(d.controls, { label: '\\kk', cls: 'force-constant', min: 100, max: 2000, step: 1, value: 481, unit: 'N/m', dec: 0,
    detents: [481, 575], snap: true, aria: 'the force constant' });
  const M = ctl(d.controls, { label: '\\kmu', cls: 'mass', min: 0.5, max: 20, step: 0.001, value: 0.98, unit: 'amu', dec: 3,
    detents: [0.504, 0.98, 1.007], snap: true, aria: 'the reduced mass' });
  let hits = []; F.hover(d.stage, () => hits);
  const EMAX = 40, QMAX = 60;
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const k = K.v, mu = M.v * AMU, w = Math.sqrt(k / mu), hw = HBAR * w / 1e-20;          /* ħω in 10⁻²⁰ J */
    const Qv = (E) => Math.sqrt(2 * E * 1e-20 / k) / 1e-12;                                  /* turning point, pm */
    const ce = C('energy'), cl = C('length');
    topline(ctx, `The rungs are spaced by $\\hbar\\komega = ${fmt(hw, 2)}\\times10^{-20}$ J, and the lowest sits $\\hbar\\komega/2$ above the bottom of the well.`);
    const box = { l: 170, r: 1150, t: 120, b: 600 };
    const ax = axes(ctx, box, [-QMAX, QMAX], [0, EMAX], { nx: 6, ny: 4, xl: 'displacement Q (pm)', yl: 'energy (10⁻²⁰ J)', xc: cl, yc: ce });
    /* the well */
    plot(ctx, ax, (q) => 0.5 * k * q * q * 1e-4, PAL.ink, { w: 3 });
    /* the rungs */
    const n = Math.floor(EMAX / hw - 0.5);
    const gap = hw * (box.b - box.t) / EMAX;
    for (let v = 0; v <= n; v++) {
      const E = (v + 0.5) * hw, q = Math.min(Qv(E), QMAX), y = ax.Y(E);
      line(ctx, ax.X(-q), y, ax.X(q), y, ce, v === 0 ? 5 : gap > 8 ? 3 : 2);
      if (gap >= 24 && v <= 9) text(ctx, `v = ${v}`, box.r + 16, y, alpha(PAL.ink, 0.75), { size: 17, base: 'middle' });
      hits.push({ x: ax.X(0), y, r: Math.max(6, Math.min(16, gap / 2)), name: `level v = ${v}: E${sub(v)} = ${2 * v + 1}ħω/2 = ${fmt(E, 2)} × 10⁻²⁰ J, turning points ±${fmt(Qv(E), 1)} pm` });
    }
    /* the classical limits of the ground state, ±Q₀ */
    const q0 = Qv(hw / 2), y0 = ax.Y(hw / 2);
    for (const s of [-1, 1]) { line(ctx, ax.X(s * q0), y0, ax.X(s * q0), box.b, alpha(cl, 0.8), 2, [4, 8]); dot(ctx, ax.X(s * q0), y0, cl, true, 8); }
    text(ctx, '−Q₀', ax.X(-q0) - 12, y0 - 14, cl, { size: 20, weight: 600, align: 'right', base: 'bottom' });
    text(ctx, 'Q₀', ax.X(q0) + 12, y0 - 14, cl, { size: 20, weight: 600, align: 'left', base: 'bottom' });
    hits.push({ x: ax.X(q0), y: y0, r: 14, name: `Q₀ = ${fmt(q0, 1)} pm, the classical limit of the ground state` });
    /* the two brackets: ħω/2 off the floor, ħω between the first two rungs */
    vbracket(ctx, box.l + 60, ax.Y(0), y0, ce, 'ħω/2', 1, { size: 20 });
    if (n >= 1) vbracket(ctx, box.r - 70, y0, ax.Y(1.5 * hw), ce, 'ħω', -1, { size: 20 });
    const Q0m = Math.sqrt(HBAR * w / k);
    tex(d.readout, `\\kEv = \\left(v + \\tfrac{1}{2}\\right)\\hbar\\komega \\\\ \\hbar\\komega = \\hbar\\sqrt{\\dfrac{\\kk}{\\kmu}} = (1.055\\times10^{-34}\\ \\text{J s})\\sqrt{\\dfrac{${fmt(k, 0)}\\ \\text{N/m}}{${fmt(mu * 1e27, 3)}\\times10^{-27}\\ \\text{kg}}} = ${fmt(hw, 2)}\\times10^{-20}\\ \\text{J} \\\\ \\kQzero = \\sqrt{\\dfrac{\\hbar\\komega}{\\kk}} = ${fmt(Q0m * 1e12, 1)}\\ \\text{pm}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
