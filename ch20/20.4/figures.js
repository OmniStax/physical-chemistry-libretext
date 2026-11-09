/* Figures for section 20.4 The Second Law of Thermodynamics. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['20.4'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- Sim: two blocks reach one temperature (the book's two unnumbered images, folded) ----------
   Scene: two identical aluminium blocks, C_V = 10.0 J/K each, touching, each filled more strongly the hotter it is;
   heat travels across the contact from the hotter block, as fast as their difference allows (kinematic).
   Moving: T_A(t) = T_f + (T_A0 - T_f) e^(-t/tau), tau = 1 s, over 6 s. Graphs below: temperatures against time
   (200 to 600 K, fixed) and the entropy changes of each block and of the pair. The entropy axis follows the
   sliders (nice range), since the pair's gain is a few percent of either block's change and a fixed range would
   flatten it at the book's 400 K and 300 K; the readout carries the numbers. */
(function () {
  const d = sim('sim-two-blocks', 660);
  const RUN = 6, TAU = 1, CV = 10;
  const cy = F.cycle(() => RUN, 1.2);
  let TB = null;
  const TA = ctl(d.controls, { label: '\\kTA', cls: 'temperature', min: 250, max: 600, step: 1, value: 400, unit: 'K', dec: 0,
    specials: [{ at: () => (TB ? TB.v : null), label: 'equal' }], onInput: () => cy.reset() });
  TB = ctl(d.controls, { label: '\\kTB', cls: 'temperature', min: 250, max: 600, step: 1, value: 300, unit: 'K', dec: 0,
    specials: [{ at: () => TA.v, label: 'equal' }], onInput: () => cy.reset() });
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    const a0 = TA.v, b0 = TB.v, tf = (a0 + b0) / 2, t = cy.now();
    const Ta = (s) => tf + (a0 - tf) * Math.exp(-s / TAU), Tb = (s) => tf + (b0 - tf) * Math.exp(-s / TAU);
    const sA = (s) => CV * Math.log(Ta(s) / a0), sB = (s) => CV * Math.log(Tb(s) / b0), sT = (s) => sA(s) + sB(s);
    const ta = Ta(t), tb = Tb(t), gain = sT(t), same = Math.abs(a0 - b0) < 0.5;
    topline(ctx, same ? `Both blocks start at ${fmt(a0, 0)} K, so no heat flows and the entropy stays where it is.`
      : `Block A is at ${fmt(ta, 1)} K and block B at ${fmt(tb, 1)} K; together they have gained $\\Delta\\kSent = ${fmt(gain, 3)}$ J/K.`);
    const cA = F.cat(0), cB = F.cat(1);
    /* the blocks */
    const by = 110, bh = 120, ax0 = 380, mid = 700, bx1 = 1020;
    const fill = (T) => F.mixColor(PAL.panel, C('temperature'), 0.15 + 0.75 * (T - 250) / 350);
    ctx.save();
    ctx.fillStyle = fill(ta); ctx.fillRect(ax0, by, mid - ax0, bh);
    ctx.fillStyle = fill(tb); ctx.fillRect(mid, by, bx1 - mid, bh);
    ctx.lineWidth = 4; ctx.strokeStyle = cA; ctx.strokeRect(ax0, by, mid - ax0, bh);
    ctx.strokeStyle = cB; ctx.strokeRect(mid, by, bx1 - mid, bh); ctx.restore();
    text(ctx, `A: ${fmt(ta, 0)} K`, ax0 - 16, by + bh / 2, cA, { size: 24, weight: 600, align: 'right', base: 'middle' });
    text(ctx, `B: ${fmt(tb, 0)} K`, bx1 + 16, by + bh / 2, cB, { size: 24, weight: 600, base: 'middle' });
    hits.length = 0;
    hits.push({ x: (ax0 + mid) / 2, y: by + bh / 2, r: 80, name: `aluminium block A, ${fmt(ta, 1)} K` });
    hits.push({ x: (mid + bx1) / 2, y: by + bh / 2, r: 80, name: `aluminium block B, ${fmt(tb, 1)} K` });
    /* heat crossing the contact: chevrons that drift from the hotter block into the colder, faster for a larger gap */
    const gap = ta - tb, k = Math.min(1, Math.abs(gap) / 60), dir = gap >= 0 ? 1 : -1;
    if (k > 0.01) {
      const span = 220, speed = 40 + 160 * k;
      for (let i = 0; i < 6; i++) {
        const u = ((t * speed + i * span / 6) % span) / span, x = mid + dir * (u - 0.5) * span, y = by + bh / 2;
        const a = Math.sin(Math.PI * u) * k;
        ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = C('heat'); ctx.lineWidth = 5; ctx.beginPath();
        ctx.moveTo(x - dir * 12, y - 16); ctx.lineTo(x + dir * 6, y); ctx.lineTo(x - dir * 12, y + 16); ctx.stroke(); ctx.restore();
      }
      text(ctx, 'q', mid, by - 22, alpha(C('heat'), Math.max(0.3, k)), { size: 26, weight: 600, align: 'center' });
      hits.push({ x: mid, y: by + bh / 2, r: 30, name: 'heat flowing from the hotter block to the colder' });
    }
    /* temperatures against time */
    const T = axes(ctx, { l: 130, r: 640, t: 330, b: 580 }, [0, RUN], [200, 600], { nx: 6, ny: 4, xl: 'time t (s)', yl: 'temperature T (K)', xc: C('time'), yc: C('temperature') });
    line(ctx, T.X(0), T.Y(tf), T.X(RUN), T.Y(tf), alpha(PAL.ink, 0.4), 2, [10, 10]);
    plot(ctx, T, Ta, cA, { w: 5, x: [0, Math.max(1e-3, t)] });
    plot(ctx, T, Tb, cB, { w: 5, x: [0, Math.max(1e-3, t)] });
    dot(ctx, T.X(t), T.Y(ta), cA, true, 9); dot(ctx, T.X(t), T.Y(tb), cB, true, 9);
    hits.push({ x: T.X(RUN) - 30, y: T.Y(tf), r: 14, name: `the final temperature, the average ${fmt(tf, 1)} K` });
    /* entropy changes against time */
    const lo = Math.min(0, sA(RUN), sB(RUN)), hi = Math.max(0.05, sA(RUN), sB(RUN), sT(RUN));
    const n = F.nice(lo, hi, 4);
    const S = axes(ctx, { l: 820, r: W - 50, t: 330, b: 580 }, [0, RUN], [n.lo, n.hi], { nx: 6, ny: n.n, xl: 'time t (s)', yl: 'entropy change ΔS (J/K)', xc: C('time'), yc: C('entropy') });
    line(ctx, S.X(0), S.Y(0), S.X(RUN), S.Y(0), alpha(PAL.ink, 0.4), 2);
    plot(ctx, S, sA, cA, { w: 3, x: [0, Math.max(1e-3, t)] });
    plot(ctx, S, sB, cB, { w: 3, x: [0, Math.max(1e-3, t)] });
    plot(ctx, S, sT, C('entropy'), { w: 5, x: [0, Math.max(1e-3, t)] });
    dot(ctx, S.X(t), S.Y(gain), C('entropy'), true, 9);
    F.legend(ctx, S, [{ s: 'block A', color: cA, w: 3 }, { s: 'block B', color: cB, w: 3 }, { s: 'both blocks', color: C('entropy'), w: 5 }], { corner: 'above' });
    hits.push({ x: S.X(t), y: S.Y(gain), r: 16, name: `entropy gained by the pair, ${fmt(gain, 3)} J/K` });
    hits.push({ x: S.X(t), y: S.Y(sA(t)), r: 14, name: `entropy change of block A, ${fmt(sA(t), 3)} J/K` });
    hits.push({ x: S.X(t), y: S.Y(sB(t)), r: 14, name: `entropy change of block B, ${fmt(sB(t), 3)} J/K` });
    const fin = CV * Math.log((a0 + b0) * (a0 + b0) / (4 * a0 * b0));
    tex(d.readout, `d\\kSent = d\\kUA\\left(\\dfrac{1}{\\kTA} - \\dfrac{1}{\\kTB}\\right) = d\\kUA\\left(\\dfrac{1}{${fmt(ta, 1)}\\ \\text{K}} - \\dfrac{1}{${fmt(tb, 1)}\\ \\text{K}}\\right) \\\\ \\Delta\\kSent = (10.0\\ \\text{J/K})\\ln\\dfrac{(${fmt(a0, 0)} + ${fmt(b0, 0)})^2}{4(${fmt(a0, 0)})(${fmt(b0, 0)})} = ${fmt(fin, 3)}\\ \\text{J/K}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
