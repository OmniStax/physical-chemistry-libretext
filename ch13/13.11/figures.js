/* Figures for section 13.11 Time-Dependent Perturbation Theory. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['13.11'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, cycle, register, begin, line, dot, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* =====================================================================
   FIGURE (the book's two unnumbered images folded): light driving a two-level system.
   Moving: the light is switched on at t = 0 and the populations change in time.
   First-order result only (the orchestrator's decision): P12 = (|H21|/ħ)² sin²(Δt/2)/Δ², Δ = ω − ω0,
   which at Δ = 0 is (|H21| t / 2ħ)².
   Units: frequencies in rad/ps, time in ps. Time runs 0 to 8 ps. The coupling slider stops at
   0.25 ps⁻¹ so that P12 at resonance reaches 1 exactly at the end of the run, (0.25 · 8 / 2)² = 1,
   where first-order theory has broken down. Top left, the two levels with their populations as
   bars, 1 − P12 and P12; top right, P12 against t at this detuning; below, P12 against the
   detuning at this t (the book's second image), its zeros at ±2π/t.
===================================================================== */
(function () {
  const d = sim('sim-two-level', 690);
  const D = ctl(d.controls, { label: '\\komega - \\komegazero', cls: 'frequency', min: -3, max: 3, step: 0.01, value: 0.5, unit: 'ps⁻¹', dec: 2, detents: [0, 1], snap: true });
  const W1 = ctl(d.controls, { label: '|H_{21}|/\\hbar', cls: '', min: 0.05, max: 0.25, step: 0.005, value: 0.2, unit: 'ps⁻¹', dec: 3 });
  const TT = 8, cy = cycle(() => TT, 1.2);
  const P = (dl, t, w) => (Math.abs(dl) < 1e-6 ? (w * t / 2) ** 2 : (w * Math.sin(dl * t / 2) / dl) ** 2);
  const hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    let t = cy.now(); if (!isFinite(t)) t = TT;
    const dl = D.v, w = W1.v, p = P(dl, t, w);
    topline(ctx, `At $\\kt = ${fmt(t, 1)}$ ps the upper state holds $P_{12} = ${fmt(p, 3)}$ of the population${p > 0.5 ? ', too much for a first-order result to be trusted' : ''}.`);
    /* the two levels and their populations */
    const lx0 = 90, lx1 = 300, y2 = 140, y1 = 310, bw = 160;
    line(ctx, lx0, y2, lx1, y2, PAL.ink, 4); line(ctx, lx0, y1, lx1, y1, PAL.ink, 4);
    text(ctx, '|2⟩', lx0 - 14, y2 + 8, PAL.ink, { size: 24, align: 'right' });
    text(ctx, '|1⟩', lx0 - 14, y1 + 8, PAL.ink, { size: 24, align: 'right' });
    const bar = (y, f) => { ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.12); ctx.fillRect(lx1 + 20, y - 14, bw, 28); ctx.fillStyle = alpha(PAL.ink, 0.6); ctx.fillRect(lx1 + 20, y - 14, bw * Math.min(1, Math.max(0, f)), 28); ctx.restore(); };
    bar(y2, p); bar(y1, 1 - p);
    text(ctx, `|c₂|² = ${fmt(p, 2)}`, lx1 + 20, y2 - 26, PAL.ink, { size: 20 });
    text(ctx, `|c₁|² = ${fmt(1 - p, 2)}`, lx1 + 20, y1 - 26, PAL.ink, { size: 20 });
    F.arrow(ctx, (lx0 + lx1) / 2, y1 - 6, (lx0 + lx1) / 2, y2 + 8, alpha(C('frequency'), 0.8), 4);
    text(ctx, 'ħω', (lx0 + lx1) / 2 + 14, (y1 + y2) / 2 + 8, C('frequency'), { size: 22 });
    /* P12 against time at this detuning */
    const tb = { l: 640, r: W - 70, t: 100, b: 330 };
    const at = axes(ctx, tb, [0, TT], [0, 1], { nx: 4, ny: 4, xl: 'time t (ps)', yl: 'P₁₂', xc: C('time') });
    plot(ctx, at, (s) => P(dl, s, w), alpha(PAL.ink, 0.35), { w: 3, dash: [10, 10] });
    plot(ctx, at, (s) => P(dl, s, w), PAL.ink, { w: 5, x: [0, t] });
    dot(ctx, at.X(t), at.Y(Math.min(1, p)), PAL.ink, true, 9);
    if (Math.abs(dl) > 0.05) { const tm = Math.PI / Math.abs(dl); if (tm <= TT) { line(ctx, at.X(tm), tb.b, at.X(tm), at.Y(P(dl, tm, w)), alpha(C('time'), 0.7), 2, [4, 8]); text(ctx, 'π/|ω − ω₀|', at.X(tm), tb.b - 10 - (at.X(tm) > tb.r - 80 ? 20 : 0), C('time'), { size: 17, align: at.X(tm) > tb.r - 80 ? 'right' : 'center' }); } }
    /* the line shape at this time */
    const lb = { l: 150, r: W - 70, t: 430, b: 610 };
    const al = axes(ctx, lb, [-3, 3], [0, 1], { nx: 6, ny: 4, xl: 'detuning ω − ω₀ (ps⁻¹)', yl: 'P₁₂', xc: C('frequency') });
    if (t > 0.01) plot(ctx, al, (x) => P(x, t, w), PAL.ink, { w: 5 });
    line(ctx, al.X(dl), lb.b, al.X(dl), al.Y(Math.min(1, p)), alpha(C('frequency'), 0.8), 3, [4, 8]);
    dot(ctx, al.X(dl), al.Y(Math.min(1, p)), C('frequency'), true, 9);
    const z = 2 * Math.PI / Math.max(t, 1e-6);
    if (z < 3) F.hbracket(ctx, al.X(-z), al.X(z), lb.b - 18, C('frequency'), '4π/t');
    hits.length = 0;
    hits.push({ x: (lx0 + lx1) / 2, y: (y1 + y2) / 2, r: 40, name: 'the light, of frequency ω, driving the transition' });
    hits.push({ x: al.X(dl), y: al.Y(Math.min(1, p)), r: 14, name: `this detuning, ${fmt(dl, 2)} ps⁻¹` });
    const line2 = Math.abs(dl) < 1e-6
      ? `P_{12} = \\left(\\dfrac{|H_{21}|\\kt}{2\\hbar}\\right)^2 = \\left(\\dfrac{(${fmt(w, 3)}\\ \\text{ps}^{-1})(${fmt(t, 2)}\\ \\text{ps})}{2}\\right)^2 = ${fmt(p, 3)}`
      : `P_{12} = (${fmt(w, 3)}\\ \\text{ps}^{-1})^2\\,\\dfrac{\\sin^2[(${fmt(dl, 2)})(${fmt(t, 2)})/2]}{(${fmt(dl, 2)}\\ \\text{ps}^{-1})^2} = ${fmt(p, 3)}`;
    tex(d.readout, `P_{12} = \\dfrac{|H_{21}|^2}{\\hbar^2}\\,\\dfrac{\\sin^2[(\\komega-\\komegazero)\\kt/2]}{(\\komega-\\komegazero)^2} \\\\ ${line2}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => TT / 6), draw });
})();
};
