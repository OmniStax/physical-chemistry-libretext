/* Figures for section 19.7 Work and Heat Have a Simple Molecular Interpretation. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['19.7'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, text, topline, axes, hbracket, legend, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- constants, SI ---------- */
const H_PL = 6.62607e-34, KB = 1.380649e-23, M_HE = 6.6465e-27;   /* J s; J/K; kg, one helium atom */
const L0 = 1.0, T0 = 5;                                             /* nm and K: the starting box and temperature */
const U23 = 1e-23;                                                  /* energies are shown in 10⁻²³ J */
const NLEV = 60;

/* ---------- Sim: heat moves the populations, work moves the levels ----------
   One helium atom in a one-dimensional box, its levels E_n = n²h²/8mL² (Section 18.1), at 5 K in a 1.0 nm
   box: E_1 = 0.83 and kT = 6.9 in 10⁻²³ J, so five or six levels hold most of the probability.
   The reader adds ΔU either as heat at fixed L (the temperature rises until Σ P_i E_i has grown by ΔU) or as
   work in a reversible adiabatic compression (every level scales by the same factor, the P_i stay the same,
   L shrinks to L0/√s). Graph: x the probability P_i of each level, 0 to 0.5; y the energy, 0 to 40 × 10⁻²³ J
   fixed (ΔU = 6 by work lifts level 4 to 35). The starting state is drawn dashed and hollow; the new state solid.
   Left: the box, its length bracketed. Still: no clock, the change is the slider. */
(function () {
  const d = sim('sim-heat-and-work-levels', 600);
  const K = F.choice(d.controls, { label: '\\text{added as}', key: 'route', options: [{ value: 'heat', label: 'heat' }, { value: 'work', label: 'work' }], value: 'heat', aria: 'how the energy is added' });
  const DU = ctl(d.controls, { label: '\\kDeltaU', cls: 'energy', min: 0, max: 6, step: 0.1, value: 3, unit: '× 10⁻²³ J', dec: 1 });
  const hov = []; F.hover(d.stage, () => hov);
  const e1 = (L) => H_PL * H_PL / (8 * M_HE * (L * 1e-9) ** 2) / U23;     /* lowest level, 10⁻²³ J */
  function state(L, T) {
    const a = e1(L), kT = KB * T / U23, w = [];
    for (let n = 1; n <= NLEV; n++) w.push(Math.exp(-(n * n - 1) * a / kT));
    const z = w.reduce((s, x) => s + x, 0);
    const lv = w.map((x, i) => ({ n: i + 1, E: (i + 1) ** 2 * a, P: x / z }));
    return { lv, U: lv.reduce((s, l) => s + l.P * l.E, 0) };
  }
  const S0 = state(L0, T0);
  /* the temperature at which the box of length L0 holds energy U (bisection) */
  function tempFor(U) {
    let lo = 0.5, hi = 400;
    for (let i = 0; i < 60; i++) { const m = (lo + hi) / 2; if (state(L0, m).U < U) lo = m; else hi = m; }
    return (lo + hi) / 2;
  }
  function draw() {
    const { ctx, W } = begin(d.c);
    const du = DU.v, heat = K.value === 'heat';
    let S1, L1, T1;
    if (heat) { T1 = tempFor(S0.U + du); L1 = L0; S1 = state(L0, T1); }
    else { const s = (S0.U + du) / S0.U; L1 = L0 / Math.sqrt(s); T1 = T0 * s; S1 = { lv: S0.lv.map((l) => ({ n: l.n, E: l.E * s, P: l.P })), U: S0.U * s }; }
    const sumEdP = S0.lv.reduce((s, l, i) => s + l.E * (S1.lv[i].P - l.P), 0);
    const sumPdE = S0.lv.reduce((s, l, i) => s + l.P * (S1.lv[i].E - l.E), 0);
    topline(ctx, heat
      ? `Heat at fixed $\\kV$: the levels stay put and the populations shift up as $\\kT$ rises to ${fmt(T1, 1)} K.`
      : `Work: the box shrinks to ${fmt(L1, 2)} nm, every level rises, and the populations stay as they were.`);
    /* the box, 300 units per nm, its right wall fixed */
    const RX = 400, BT = 190, BB = 430, S = 300, lx = RX - L1 * S, lx0 = RX - L0 * S;
    if (!heat) { ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2; ctx.setLineDash([10, 10]); ctx.strokeRect(lx0, BT, L0 * S, BB - BT); ctx.restore(); }
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.strokeRect(lx, BT, L1 * S, BB - BT); ctx.restore();
    F.dot(ctx, lx + L1 * S * 0.45, (BT + BB) / 2, F.el('He'), true, 11);
    hbracket(ctx, lx, RX, BB + 34, C('length'), `L = ${fmt(L1, 2)} nm`, { side: 'below' });
    /* the ladder */
    const box = { l: 560, r: W - 60, t: 110, b: 520 };
    const ax = axes(ctx, box, [0, 0.5], [0, 40], { nx: 5, ny: 4, xl: 'probability P_i of the level', yl: 'energy E_i (10⁻²³ J)', xc: PAL.ink, yc: C('energy') });
    const lvlCol = heat ? C('energy') : C('work'), barCol = heat ? C('heat') : alpha(PAL.ink, 0.6);
    S0.lv.forEach((l) => {
      const y = ax.Y(l.E); if (y < box.t) return;
      line(ctx, box.l, y, box.r, y, alpha(PAL.ink, 0.3), 2, [10, 10]);
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 2; ctx.strokeRect(box.l, y - 7, Math.max(1, ax.X(l.P) - box.l), 14); ctx.restore();
    });
    hov.length = 0;
    S1.lv.forEach((l, i) => {
      const y = ax.Y(l.E); if (y < box.t) return;
      line(ctx, box.l, y, box.r, y, alpha(lvlCol, 0.75), 3);
      ctx.save(); ctx.fillStyle = alpha(barCol, 0.8); ctx.fillRect(box.l, y - 6, Math.max(1, ax.X(l.P) - box.l), 12); ctx.restore();
      if (i < 8) hov.push({ x: ax.X(Math.max(l.P, 0.03)), y, r: 12, name: `level n = ${l.n}: E = ${fmt(l.E, 2)} × 10⁻²³ J, P = ${fmt(l.P, 3)} (it started at ${fmt(S0.lv[i].E, 2)} × 10⁻²³ J, P = ${fmt(S0.lv[i].P, 3)})` });
    });
    /* the average energy before and after */
    line(ctx, box.l, ax.Y(S0.U), box.r, ax.Y(S0.U), alpha(C('energy'), 0.5), 3, [4, 8]);
    line(ctx, box.l, ax.Y(S1.U), box.r, ax.Y(S1.U), C('energy'), 3, [4, 8]);
    text(ctx, 'U', box.r + 8, ax.Y(S1.U), C('energy'), { size: 22, weight: 600, base: 'middle' });
    hov.push({ x: box.r - 40, y: ax.Y(S1.U), r: 12, name: `U = Σ P_i E_i = ${fmt(S1.U, 2)} × 10⁻²³ J now, ${fmt(S0.U, 2)} at the start` });
    hov.push({ x: lx + L1 * S * 0.45, y: (BT + BB) / 2, r: 16, name: `a helium atom in a box of length ${fmt(L1, 2)} nm at ${fmt(T1, 1)} K` });
    legend(ctx, ax, [{ s: 'at the start', color: alpha(PAL.ink, 0.45), w: 2, dash: [10, 10] }, { s: heat ? 'after heating' : 'after compression', color: lvlCol, w: 3 }], { corner: 'tr' });
    tex(d.readout, `\\kDeltaU = \\sum_i \\kEi\\,\\Delta P_i + \\sum_i P_i\\,\\Delta \\kEi \\\\ \\kDeltaU = ${fmt(Math.abs(sumEdP) < 5e-4 ? 0 : sumEdP, 2)} + ${fmt(Math.abs(sumPdE) < 5e-4 ? 0 : sumPdE, 2)} = ${fmt(sumEdP + sumPdE, 2)}\\times 10^{-23}\\ \\text{J}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
