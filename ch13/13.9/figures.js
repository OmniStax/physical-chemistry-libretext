/* Figures for section 13.9 Normal Modes in Polyatomic Molecules. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['13.9'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, cycle, register, begin, line, dot, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;

/* =====================================================================
   FIGURE 13.9.1: the six motions of a CH2 group.
   Physical 3D (the lesson is which motions leave the plane): the carbon at the origin, its two
   hydrogens in the xy plane (C-H 1.09 Å, HCH 109.5°), the two backbone carbons below it in the yz
   plane (C-C 1.54 Å). Each motion moves the hydrogens along a fixed pattern; the carbon and the
   backbone are held still (they are far heavier), which is the usual simplification of these
   pictures. Drawn amplitude 0.25 Å, about three times a C-H stretch's ground-state swing.
   Every motion runs at the same drawn rate. Orbit: ±75° about the vertical and from slightly below
   to well above the plane, so the reader can look along the CH2 plane but never through the
   backbone; no spin, no zoom.
===================================================================== */
(function () {
  const d = sim('sim-ch2-modes');
  const S = 2.0, A = 0.25;
  const H1 = [0.890, 0.629, 0], H2 = [-0.890, 0.629, 0];
  const R1 = [0, -0.889, 1.257], R2 = [0, -0.889, -1.257];
  const b1 = [0.817, 0.577, 0], b2 = [-0.817, 0.577, 0];
  const MODES = {
    sym: { name: 'symmetric stretching', kind: 'a stretch', plane: 'in the plane', d: [b1, b2] },
    asym: { name: 'asymmetric stretching', kind: 'a stretch', plane: 'in the plane', d: [b1, b2.map((x) => -x)] },
    scis: { name: 'scissoring', kind: 'a bend', plane: 'in the plane', d: [[-0.577, 0.817, 0], [0.577, 0.817, 0]] },
    rock: { name: 'rocking', kind: 'a bend', plane: 'in the plane', d: [[-0.577, 0.817, 0], [-0.577, -0.817, 0]] },
    wag: { name: 'wagging', kind: 'a bend', plane: 'out of the plane', d: [[0, 0, 1], [0, 0, 1]] },
    twist: { name: 'twisting', kind: 'a bend', plane: 'out of the plane', d: [[0, 0, 1], [0, 0, -1]] },
  };
  const M = F.select(d.controls, { label: '\\text{motion}', options: Object.entries(MODES).map(([value, m]) => ({ value, label: m.name })), value: 'sym', aria: 'the motion of the CH₂ group to show', onInput: () => cy.reset() });
  const cy = cycle(() => Infinity, 0);
  const v = F.view3d(d.stage, { h: 480, dist: 11, tilt: 0.35, pitch: [-0.3, 1.3], yaw: [-1.31, 1.31], spin: 'off', zoom: false });
  const g = v.part(0);
  if (v.setView) v.setView(0.55, 0.35);
  const flat = d.stage.querySelector('.three-none') ? F.makeCanvas(d.stage, 480) : null;
  function paintFlat(P) {
    const { ctx } = begin(flat), yaw = 0.55, p = 0.35, k = 130, cx = 700, cy0 = 260;
    const pr = (q) => { const x = q[0] * Math.cos(yaw) + q[2] * Math.sin(yaw), z = -q[0] * Math.sin(yaw) + q[2] * Math.cos(yaw);
      return { x: cx + x * k / S, y: cy0 - (q[1] * Math.cos(p) - z * Math.sin(p)) * k / S, z: q[1] * Math.sin(p) + z * Math.cos(p) }; };
    const Q = P.map(pr);
    [[0, 1], [0, 2], [0, 3], [0, 4]].forEach(([a, b]) => line(ctx, Q[a].x, Q[a].y, Q[b].x, Q[b].y, PAL.muted, 10));
    const sym = ['C', 'H', 'H', 'C', 'C'], rad = [34, 22, 22, 30, 30];
    Q.map((q, i) => [q, i]).sort((a, b) => a[0].z - b[0].z).forEach(([q, i]) => { ctx.save(); ctx.beginPath(); ctx.arc(q.x, q.y, rad[i], 0, TAU); ctx.fillStyle = F.el(sym[i]); ctx.globalAlpha = i > 2 ? 0.55 : 1; ctx.fill(); ctx.globalAlpha = 1; ctx.strokeStyle = alpha(PAL.ink, 0.7); ctx.lineWidth = 2; ctx.stroke(); ctx.restore(); });
  }
  let sig = '', balls = [], sticks = [];
  function build() {
    if (flat) return;
    const s = [PAL.ink, PAL.muted, F.el('C'), F.el('H')].join('|'); if (s === sig) return; sig = s;
    v.clear(); balls = []; sticks = [];
    [0, 1, 2, 3].forEach(() => sticks.push(F.mesh.stick(g, [0, 0, 0], [0, 1, 0], 0.08, PAL.muted)));
    const P0 = [[0, 0, 0], H1, H2, R1, R2], sym = ['C', 'H', 'H', 'C', 'C'], rad = [0.36, 0.24, 0.24, 0.3, 0.3];
    const names = ['the carbon of the CH₂ group', 'hydrogen 1', 'hydrogen 2', 'a carbon of the rest of the molecule', 'a carbon of the rest of the molecule'];
    P0.forEach((p, i) => { const b = F.mesh.sphere(g, p.map((x) => x * S), rad[i], F.el(sym[i]), i > 2 ? { transparent: true, opacity: 0.55 } : undefined); v.pickable(b, names[i]); balls.push(b); });
  }
  function draw() {
    build();
    const m = MODES[M.value];
    let t = cy.now(); if (!isFinite(t)) t = 0.25;
    const sw = Math.sin(TAU * 0.6 * t);
    const P = [[0, 0, 0], H1.map((x, k) => x + A * sw * m.d[0][k]), H2.map((x, k) => x + A * sw * m.d[1][k]), R1, R2].map((p) => p.map((x) => x * S));
    if (!flat) {
      balls.forEach((b, i) => b.position.set(P[i][0], P[i][1], P[i][2]));
      sticks.forEach((st, i) => F.mesh.setStick(st, P[0], P[i + 1]));
      v.headline(`In ${m.name} the hydrogens move ${m.plane} of the CH₂ group: ${m.kind}.`);
      v.invalidate();
    } else paintFlat(P);
    tex(d.readout, `\\kQj(t) = A\\sin(2\\pi\\knuj t) \\\\ \\kQj = ${fmt(sw, 2)}\\,A`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 13.9.2: CO's normal coordinate.
   Moving: the molecule vibrates about its fixed centre of mass. r_o = 112.8 pm, masses 12 and 16,
   so Δr(C) = (16/28) q and Δr(O) = (12/28) q, each measured outward from its equilibrium place.
   Scene at 4 units per pm. Below, q, Δr(C) and Δr(O) traced against time over three periods
   (CO's period, 1/(c·2143 cm⁻¹) = 15.6 fs). Graph y range ±30 pm, round ticks above the amplitude slider's 25 pm maximum.
   The amplitude slider runs 2 to 25 pm; its detent, 4.8 pm, is the classical turning point of
   the ground state.
===================================================================== */
(function () {
  const d = sim('sim-co-normal', 640);
  const R0 = 112.8, MC = 12, MO = 16, MT = MC + MO, PER = 15.56;
  const Am = ctl(d.controls, { label: 'A', cls: 'length', min: 2, max: 25, step: 0.1, value: 15, unit: 'pm', dec: 1, detents: [4.8], snap: true });
  const cy = cycle(() => 3, 1.2);
  const hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    let t = cy.now(); if (!isFinite(t)) t = 3;
    const A = Am.v, q = A * Math.sin(TAU * t), dc = q * MO / MT, dO = q * MC / MT;
    topline(ctx, `$\\kq = ${fmt(q, 1)}$ pm: carbon has moved ${fmt(Math.abs(dc), 1)} pm and oxygen ${fmt(Math.abs(dO), 1)} pm, ${q >= 0 ? 'both outward' : 'both inward'}.`);
    /* the scene */
    const k = 4, cx = W / 2, y0 = 170, xC0 = cx - R0 * MO / MT * k, xO0 = cx + R0 * MC / MT * k;
    const xC = xC0 - dc * k, xO = xO0 + dO * k;
    [[xC0, 44], [xO0, 48]].forEach(([x, r]) => { ctx.save(); ctx.setLineDash([6, 8]); ctx.strokeStyle = alpha(PAL.ink, 0.4); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(x, y0, r, 0, TAU); ctx.stroke(); ctx.restore(); });
    line(ctx, xC, y0, xO, y0, PAL.muted, 10);
    [[xC, 44, 'C'], [xO, 48, 'O']].forEach(([x, r, s]) => { ctx.save(); ctx.fillStyle = F.el(s); ctx.beginPath(); ctx.arc(x, y0, r, 0, TAU); ctx.fill(); ctx.strokeStyle = alpha(PAL.ink, 0.7); ctx.lineWidth = 2; ctx.stroke(); ctx.restore(); text(ctx, s, x, y0 + 8, PAL.ink, { size: 24, weight: 600, align: 'center' }); });
    line(ctx, cx, y0 - 70, cx, y0 + 70, alpha(PAL.ink, 0.35), 2, [4, 8]);
    text(ctx, 'centre of mass', cx, y0 - 84, PAL.muted, { size: 17, align: 'center' });
    const yb = y0 + 82;
    if (Math.abs(dc) * k > 6) F.hbracket(ctx, Math.min(xC, xC0), Math.max(xC, xC0), yb, C('length'), 'Δr(C)');
    if (Math.abs(dO) * k > 6) F.hbracket(ctx, Math.min(xO, xO0), Math.max(xO, xO0), yb, C('length'), 'Δr(O)');
    /* the trace */
    const box = { l: 150, r: W - 80, t: 340, b: 580 };
    const ax = axes(ctx, box, [0, 3], [-30, 30], { nx: 6, ny: 6, xl: 'time (periods, one period = 15.6 fs)', yl: 'displacement (pm)', xc: C('time'), yc: C('length') });
    const f = (s) => A * Math.sin(TAU * s);
    plot(ctx, ax, f, C('length'), { w: 5, x: [0, t] });
    plot(ctx, ax, (s) => f(s) * MO / MT, alpha(C('length'), 0.75), { w: 3, dash: [10, 10], x: [0, t] });
    plot(ctx, ax, (s) => f(s) * MC / MT, alpha(C('length'), 0.75), { w: 3, dash: [4, 8], x: [0, t] });
    dot(ctx, ax.X(t), ax.Y(q), C('length'), true, 9);
    F.legend(ctx, ax, [{ s: 'q', color: C('length'), w: 5 }, { s: 'Δr(C)', color: alpha(C('length'), 0.75), w: 3, dash: [10, 10] }, { s: 'Δr(O)', color: alpha(C('length'), 0.75), w: 3, dash: [4, 8] }], { corner: 'above' });
    hits.length = 0;
    hits.push({ x: xC, y: y0, r: 44, name: 'the carbon atom' }, { x: xO, y: y0, r: 48, name: 'the oxygen atom' });
    hits.push({ x: xC0, y: y0 - 44, r: 14, name: 'carbon at equilibrium' }, { x: xO0, y: y0 - 48, r: 14, name: 'oxygen at equilibrium' });
    tex(d.readout, `\\kq = \\kdr(\\text{C}) + \\kdr(\\text{O}) \\\\ ${fmt(q, 1)}\\ \\text{pm} = ${fmt(dc, 1)}\\ \\text{pm} + ${fmt(dO, 1)}\\ \\text{pm} \\\\ r = \\krzero + \\kq = ${fmt(R0 + q, 1)}\\ \\text{pm}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.6), draw });
})();
};
