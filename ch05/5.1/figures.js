/* Figures for section 5.1 A Harmonic Oscillator Obeys Hooke's Law. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.1'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, topline, axes, plot, fmt, legend } = F;
const sim = (id, H) => F.sim(root, id, H);

/* a coil spring from (x, y0) to (x, y1) or, with horiz, from (x0, y) to (x1, y): n zigzags of half-width w */
function spring(ctx, a0, a1, c, color, { n = 9, w = 18, horiz = false, lw = 3 } = {}) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = lw; ctx.lineJoin = 'round'; ctx.beginPath();
  const lead = 0.08, P = (u, s) => (horiz ? [a0 + (a1 - a0) * u, c + s] : [c + s, a0 + (a1 - a0) * u]);
  ctx.moveTo(...P(0, 0)); ctx.lineTo(...P(lead, 0));
  for (let i = 0; i < 2 * n; i++) { const u = lead + (1 - 2 * lead) * (i + 0.5) / (2 * n); ctx.lineTo(...P(u, i % 2 ? -w : w)); }
  ctx.lineTo(...P(1 - lead, 0)); ctx.lineTo(...P(1, 0)); ctx.stroke(); ctx.restore();
}

/* ---------- Figure 5.1.1: two atoms about their center of mass ----------
   The center of mass is fixed at the middle of the canvas. The bond of length r (210 units at rest,
   vibrating by 12 %) turns once per loop; atom 1 sits m2/(m1 + m2) r from the center, atom 2
   m1/(m1 + m2) r. The faint paths are where each atom goes over the whole loop, so the lighter
   atom's wide path and the heavier one's small one are seen at once. The rates are illustrative:
   five vibrations per turn, a real bond vibrates about a hundred times per turn. */
(function () {
  const d = sim('sim-pair', 560);
  const LOOP = 6, NV = 5;
  const cy = F.cycle(() => LOOP, 0);
  const lg = (v) => Math.log10(v);
  const R = ctl(d.controls, { label: '\\kmtwo/\\kmone', cls: 'mass', min: 0, max: lg(40), step: 0.001, value: lg(34.7),
    fmt: (u) => `${fmt(10 ** u, 10 ** u < 10 ? 2 : 1)}`, detents: [{ v: 0, label: 'H₂' }, { v: lg(1.333), label: 'CO' }, { v: lg(34.7), label: 'HCl' }], snap: true });
  const M = F.choice(d.controls, { label: 'motion', options: [{ value: 'vib', label: 'vibration' }, { value: 'rot', label: 'rotation' }, { value: 'both', label: 'both' }], value: 'both' });
  const hits = [];
  F.hover(d.stage, () => hits);
  const pos = (t, ratio, mode) => {
    const vib = mode !== 'rot', rot = mode !== 'vib';
    const r = 210 * (1 + (vib ? 0.12 * Math.sin(2 * Math.PI * NV * t / LOOP) : 0));
    const th = rot ? 2 * Math.PI * t / LOOP : 0, u = [Math.cos(th), -Math.sin(th)];
    const f1 = ratio / (1 + ratio), f2 = 1 / (1 + ratio);
    return { r, u, a: [-f1 * r * u[0], -f1 * r * u[1]], b: [f2 * r * u[0], f2 * r * u[1]], f1, f2 };
  };
  function draw() {
    const { ctx, W } = begin(d.c);
    const ratio = 10 ** R.v, mode = M.value, t = cy.now(), cx = W / 2, cyy = 300;
    const c1 = F.cat(0), c2 = F.cat(1);
    topline(ctx, `$\\kmtwo$ is ${fmt(ratio, ratio < 10 ? 2 : 1)} times $\\kmone$, so $\\kmone$ swings ${fmt(ratio, ratio < 10 ? 2 : 1)} times as far from the center of mass.`);
    /* the paths over one whole loop */
    [[c1, 'a'], [c2, 'b']].forEach(([c, k]) => {
      ctx.save(); ctx.strokeStyle = alpha(c, 0.4); ctx.lineWidth = 2; ctx.beginPath();
      for (let i = 0; i <= 600; i++) { const p = pos(LOOP * i / 600, ratio, mode)[k]; if (i) ctx.lineTo(cx + p[0], cyy + p[1]); else ctx.moveTo(cx + p[0], cyy + p[1]); }
      ctx.stroke(); ctx.restore();
    });
    const P = pos(t, ratio, mode), A = [cx + P.a[0], cyy + P.a[1]], B = [cx + P.b[0], cyy + P.b[1]];
    const ra = 22, rb = Math.min(70, 22 * Math.cbrt(ratio));
    ctx.save(); ctx.translate(A[0], A[1]); ctx.rotate(Math.atan2(B[1] - A[1], B[0] - A[0]));
    spring(ctx, 0, Math.hypot(B[0] - A[0], B[1] - A[1]), 0, alpha(PAL.ink, 0.7), { horiz: true, n: 10, w: 12 });
    ctx.restore();
    dot(ctx, A[0], A[1], c1, true, ra); dot(ctx, B[0], B[1], c2, true, rb);
    /* the center of mass, fixed */
    line(ctx, cx - 16, cyy, cx + 16, cyy, PAL.ink, 3); line(ctx, cx, cyy - 16, cx, cyy + 16, PAL.ink, 3);
    dot(ctx, cx, cyy, PAL.ink, false, 9);
    text(ctx, 'center of mass', cx, 520, PAL.ink, { size: 20, align: 'center' });
    line(ctx, cx, 495, cx, cyy + 22, alpha(PAL.ink, 0.4), 2, [4, 8]);
    legend(ctx, { l: 40, r: W - 40, t: 90, b: 520 }, [{ s: 'm_1', color: c1, kind: 'dot' }, { s: 'm_2', color: c2, kind: 'dot' }], { corner: 'tl' });
    hits.length = 0;
    hits.push({ x: A[0], y: A[1], r: ra + 6, name: `atom 1, mass m₁, ${fmt(P.f1, 3)} of the bond length from the center of mass` });
    hits.push({ x: B[0], y: B[1], r: rb + 6, name: `atom 2, mass m₂ = ${fmt(ratio, 2)} m₁, ${fmt(P.f2, 3)} of the bond length from the center of mass` });
    hits.push({ x: cx, y: cyy, r: 14, name: 'the center of mass, which does not move' });
    tex(d.readout, `\\kmone r_1 = \\kmtwo r_2 \\\\ (1)(${fmt(P.f1, 3)}\\,r) = (${fmt(ratio, 3)})(${fmt(P.f2, 4)}\\,r)`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* ---------- Figure 5.1.2 + 5.1.4: the mass on a spring and x(t) ----------
   The scene stands the book's spring on end, a mass on a spring rising from a fixed base, so its
   displacement x shares the vertical axis of the graph beside it: x from -0.30 to 0.30 m (the
   amplitude slider's maximum is 0.25 m), t from 0 to 10 s, one loop. x(t) = x0 sin(omega t), the
   phase 0 of Figure 5.1.4. The force -kx is drawn on the mass at 40 units per newton (5 N at the
   extremes of k and x0). */
(function () {
  const d = sim('sim-spring', 560);
  const LOOP = 10;
  const cy = F.cycle(() => LOOP, 1.2);
  const K = ctl(d.controls, { label: '\\kk', cls: 'force-constant', min: 1, max: 20, step: 0.5, value: 10, unit: 'N/m', dec: 1, onInput: () => cy.reset() });
  const Mm = ctl(d.controls, { label: '\\km', cls: 'mass', min: 0.2, max: 2, step: 0.1, value: 1, unit: 'kg', dec: 1, onInput: () => cy.reset() });
  const X0 = ctl(d.controls, { label: '\\kxlo', cls: 'length', min: 0.05, max: 0.25, step: 0.01, value: 0.2, unit: 'm', dec: 2, onInput: () => cy.reset() });
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    const k = K.v, m = Mm.v, x0 = X0.v, w = Math.sqrt(k / m), t = cy.now(), x = x0 * Math.sin(w * t), Fv = -k * x;
    topline(ctx, `At $\\kx = ${fmt(x, 2)}$ m the spring pulls with $\\kF = ${fmt(Fv, 2)}$ N, back toward $\\kx = 0$.`);
    const box = { l: 520, r: W - 60, t: 110, b: 490 };
    const ax = axes(ctx, box, [0, LOOP], [-0.3, 0.3], { nx: 5, ny: 6, xl: 'time t (s)', xc: C('time'), yl: 'displacement x (m)', yc: C('length') });
    /* the scene: base, spring, mass, equilibrium line */
    const sx = 230, floor = 540, yb = ax.Y(x), hb = 56, wb = 96;
    line(ctx, sx - 90, floor, sx + 90, floor, PAL.ink, 4);
    for (let i = -80; i < 90; i += 22) line(ctx, sx + i, floor, sx + i - 14, floor + 14, alpha(PAL.ink, 0.35), 2);
    line(ctx, sx - 110, ax.Y(0), box.l, ax.Y(0), alpha(PAL.ink, 0.4), 2, [10, 10]);
    text(ctx, 'x = 0', sx - 110, ax.Y(0) - 14, PAL.ink, { size: 17 });
    spring(ctx, floor, yb + hb / 2, sx, alpha(PAL.ink, 0.75), { n: 8, w: 20 });
    ctx.save(); ctx.fillStyle = alpha(C('mass'), 0.85); ctx.beginPath(); ctx.roundRect(sx - wb / 2, yb - hb / 2, wb, hb, 8); ctx.fill(); ctx.restore();
    text(ctx, `${fmt(m, 1)} kg`, sx, yb, PAL.panel, { size: 20, weight: 600, align: 'center', base: 'middle' });
    /* the restoring force on the mass */
    const fx = sx + wb / 2 + 34, L = 40 * Fv;
    if (Math.abs(L) > 6) arrow(ctx, fx, yb, fx, yb - L, C('force'), 5);
    /* x(t) so far, and the line joining the mass to its point */
    plot(ctx, ax, (s) => x0 * Math.sin(w * s), C('length'), { w: 5, x: [0, Math.max(t, 1e-6)] });
    line(ctx, sx + wb / 2, yb, ax.X(t), yb, alpha(PAL.ink, 0.4), 2, [4, 8]);
    dot(ctx, ax.X(t), yb, C('length'), true, 9);
    legend(ctx, ax, [{ s: 'restoring force F = −kx', color: C('force'), w: 5 }], { corner: 'above' });
    hits.length = 0;
    hits.push({ x: sx, y: yb, r: 50, name: `the mass, ${fmt(m, 1)} kg, at x = ${fmt(x, 3)} m` });
    hits.push({ x: fx, y: yb - L / 2, r: 24, name: `the restoring force, ${fmt(Fv, 2)} N` });
    hits.push({ x: ax.X(t), y: yb, r: 14, name: `x(t) at t = ${fmt(t, 2)} s` });
    tex(d.readout, `\\kF = -\\kk\\kx = -(${fmt(k, 1)}\\ \\text{N/m})(${fmt(x, 3)}\\ \\text{m}) = ${fmt(Fv, 2)}\\ \\text{N} \\\\ \\komega = \\sqrt{\\dfrac{\\kk}{\\km}} = \\sqrt{\\dfrac{${fmt(k, 1)}\\ \\text{N/m}}{${fmt(m, 1)}\\ \\text{kg}}} = ${fmt(w, 2)}\\ \\text{rad/s} \\\\ \\kx(\\kt) = (${fmt(x0, 2)}\\ \\text{m})\\sin(${fmt(w, 2)}\\,\\kt)`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* ---------- Figure 5.1.3: two bodies and one (a faithful copy) ----------
   (a) the two atoms with R to their center of mass and r1, r2 from it; (b) the one particle of
   reduced mass mu at r from the origin, which is the center of mass. The book's perspective axes
   are kept as drawn lines; nothing varies, so there are no controls. */
(function () {
  const d = sim('fig-5-1-3', 560);
  let hits = []; F.hover(d.stage, () => hits);
  const axes3 = (ctx, o) => {
    const ink = PAL.ink;
    arrow(ctx, o[0], o[1], o[0], o[1] - 230, ink, 3); text(ctx, 'z', o[0] - 22, o[1] - 230, ink, { size: 22, base: 'middle' });
    arrow(ctx, o[0], o[1], o[0] + 280, o[1], ink, 3); text(ctx, 'y', o[0] + 296, o[1], ink, { size: 22, base: 'middle' });
    arrow(ctx, o[0], o[1], o[0] - 130, o[1] + 120, ink, 3); text(ctx, 'x', o[0] - 150, o[1] + 128, ink, { size: 22, base: 'middle' });
  };
  function draw() {
    const { ctx } = begin(d.c), cl = C('length'), cm = C('mass');
    hits = [];
    /* (a) */
    const oa = [170, 420], G = [470, 170], A1 = [380, 80], A2 = [600, 290];
    text(ctx, '(a)', 60, 60, PAL.ink, { size: 22, weight: 600 });
    axes3(ctx, oa);
    arrow(ctx, oa[0], oa[1], G[0], G[1], cl, 4); text(ctx, 'R', 300, 280, cl, { size: 24, weight: 600 });
    arrow(ctx, G[0], G[1], A1[0] + 26, A1[1] + 24, cl, 4); text(ctx, 'r_1', 448, 108, cl, { size: 24, weight: 600 });
    arrow(ctx, G[0], G[1], A2[0] - 20, A2[1] - 18, cl, 4); text(ctx, 'r_2', 548, 210, cl, { size: 24, weight: 600 });
    dot(ctx, A1[0], A1[1], F.cat(0), true, 36); text(ctx, 'm_1', A1[0], A1[1], cm, { size: 24, weight: 600, align: 'center', base: 'middle', bg: PAL.panel });
    dot(ctx, A2[0], A2[1], F.cat(1), true, 28); text(ctx, 'm_2', A2[0], A2[1], cm, { size: 22, weight: 600, align: 'center', base: 'middle', bg: PAL.panel });
    dot(ctx, G[0], G[1], PAL.ink, true, 6);
    text(ctx, 'center of mass', 640, 130, PAL.ink, { size: 20 }); line(ctx, 636, 136, G[0] + 10, G[1] - 4, alpha(PAL.ink, 0.5), 2);
    text(ctx, 'r = r_2 − r_1', 640, 200, cl, { size: 22, weight: 600 });
    hits.push({ x: A1[0], y: A1[1], r: 40, name: 'atom 1, of mass m₁' }, { x: A2[0], y: A2[1], r: 32, name: 'atom 2, of mass m₂' }, { x: G[0], y: G[1], r: 14, name: 'the center of mass, at R' });
    /* (b) */
    const ob = [1000, 420], Mu = [1230, 520];
    text(ctx, '(b)', 900, 60, PAL.ink, { size: 22, weight: 600 });
    axes3(ctx, ob);
    arrow(ctx, ob[0], ob[1], Mu[0] - 18, Mu[1] - 10, cl, 4); text(ctx, 'r', 1130, 450, cl, { size: 24, weight: 600 });
    dot(ctx, Mu[0], Mu[1], F.cat(2), true, 26); text(ctx, 'μ', Mu[0], Mu[1], cm, { size: 24, weight: 600, align: 'center', base: 'middle', bg: PAL.panel });
    text(ctx, 'center of mass', 1030, 300, PAL.ink, { size: 20 }); line(ctx, 1040, 310, ob[0] + 4, ob[1] - 8, alpha(PAL.ink, 0.5), 2);
    hits.push({ x: Mu[0], y: Mu[1], r: 30, name: 'the one particle of reduced mass μ' }, { x: ob[0], y: ob[1], r: 14, name: 'the center of mass, at the origin' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- Figure 5.1.5: energy shared between T and V, and where the oscillator is found ----------
   Top: V(x) = kx^2/2 on x from -0.30 to 0.30 m and E from 0 to 0.35 J (the sliders' largest
   E is kA^2/2 = 0.3125 J); the line E between the turning points, the ball on the curve, and two bars
   beside it holding T and V on the same energy scale. Bottom: a tally of where the ball has been,
   sampled every 1/200 of a period from t = 0 to now (so it is a function of time and scrubs exactly),
   with the classical density 1/(pi sqrt(A^2 - x^2)) dashed over it, scaled to its own height.
   m = 1 kg; one loop is three periods. */
(function () {
  const d = sim('sim-energy', 680);
  const K = ctl(d.controls, { label: '\\kk', cls: 'force-constant', min: 2, max: 10, step: 0.5, value: 5, unit: 'N/m', dec: 1, onInput: () => cy.reset() });
  const A = ctl(d.controls, { label: '\\kA', cls: 'length', min: 0.05, max: 0.25, step: 0.01, value: 0.2, unit: 'm', dec: 2, onInput: () => cy.reset() });
  const per = () => 2 * Math.PI / Math.sqrt(K.v);
  const cy = F.cycle(() => 3 * per(), 1.2);
  const hits = [], NB = 24;
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    const k = K.v, a = A.v, w = Math.sqrt(k), t = cy.now(), x = a * Math.sin(w * t);
    const E = 0.5 * k * a * a, Er = +fmt(E, 3), Vr = +fmt(0.5 * k * x * x, 3), Tr = Er - Vr;
    const ce = C('energy');
    topline(ctx, `Now $\\kT = ${fmt(Tr, 3)}$ J and $\\kV = ${fmt(Vr, 3)}$ J; they always add to $\\kE = ${fmt(Er, 3)}$ J.`);
    const box = { l: 150, r: 960, t: 100, b: 360 };
    const ax = axes(ctx, box, [-0.3, 0.3], [0, 0.35], { nx: 6, ny: 7, xl: '', yl: 'energy (J)', yc: ce });
    plot(ctx, ax, (s) => 0.5 * k * s * s, ce, { w: 5 });
    line(ctx, ax.X(-a), ax.Y(E), ax.X(a), ax.Y(E), ce, 3, [10, 10]);
    [-a, a].forEach((s) => line(ctx, ax.X(s), ax.Y(E), ax.X(s), box.b, alpha(PAL.ink, 0.4), 2, [4, 8]));
    text(ctx, 'E', ax.X(a) + 14, ax.Y(E), ce, { size: 22, weight: 600, base: 'middle' });
    dot(ctx, ax.X(x), ax.Y(0.5 * k * x * x), PAL.ink, true, 11);
    /* the bars, on the same energy scale */
    const bw = 70, bx = [1080, 1200];
    [[Tr, 'T', 0.45, bx[0]], [Vr, 'V', 0.9, bx[1]]].forEach(([v, s, al, x0]) => {
      ctx.save(); ctx.fillStyle = alpha(ce, al); ctx.fillRect(x0 - bw / 2, ax.Y(Math.max(v, 0)), bw, box.b - ax.Y(Math.max(v, 0))); ctx.restore();
      text(ctx, s, x0, box.b + 26, ce, { size: 24, weight: 600, align: 'center' });
    });
    line(ctx, bx[0] - 60, ax.Y(E), bx[1] + 60, ax.Y(E), ce, 3, [10, 10]);
    line(ctx, bx[0] - 60, box.b, bx[1] + 60, box.b, PAL.ink, 2);
    /* where it has been */
    const hb = { l: 150, r: 960, t: 470, b: 610 };
    const hx = axes(ctx, hb, [-0.3, 0.3], [0, 1], { nx: 6, ny: 0, xl: 'displacement x (m)', xc: C('length'), yl: 'time spent', yc: C('probability-density') });
    const dt = per() / 200, n = Math.floor(t / dt), bins = new Array(NB).fill(0), bwid = 2 * a / NB;
    for (let j = 0; j <= n; j++) { const s = a * Math.sin(w * j * dt); bins[Math.min(NB - 1, Math.floor((s + a) / bwid))]++; }
    /* densities over u = x/A in (-1, 1): the edge bin's, 1.1 times over, is the top of the frame */
    const top = 1.1 * Math.acos(1 - 2 / NB) / Math.PI / (2 / NB), scale = (v) => v / top;
    if (n > 0) bins.forEach((c, i) => {
      const dens = c / (n + 1) / (2 / NB), h = Math.min(1, scale(dens));
      ctx.save(); ctx.fillStyle = alpha(C('probability-density'), 0.55);
      ctx.fillRect(hx.X(-a + i * bwid) + 1, hx.Y(h), hx.X(-a + (i + 1) * bwid) - hx.X(-a + i * bwid) - 2, hb.b - hx.Y(h)); ctx.restore();
    });
    plot(ctx, hx, (s) => (Math.abs(s) < a ? scale(1 / (Math.PI * Math.sqrt(1 - (s / a) ** 2))) : NaN), alpha(PAL.ink, 0.55), { w: 2, dash: [10, 10], x: [-a * 0.999, a * 0.999] });
    line(ctx, hx.X(x), hb.t, hx.X(x), hb.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    hits.length = 0;
    hits.push({ x: ax.X(x), y: ax.Y(0.5 * k * x * x), r: 16, name: `the oscillator at x = ${fmt(x, 3)} m` });
    hits.push({ x: ax.X(a), y: box.b, r: 14, name: `turning point +A = ${fmt(a, 2)} m` }, { x: ax.X(-a), y: box.b, r: 14, name: `turning point −A = −${fmt(a, 2)} m` });
    hits.push({ x: bx[0], y: box.b - 30, r: 40, name: `kinetic energy T = ${fmt(Tr, 3)} J` }, { x: bx[1], y: box.b - 30, r: 40, name: `potential energy V = ${fmt(Vr, 3)} J` });
    hits.push({ x: hx.X(0), y: (hb.t + hb.b) / 2, r: 50, name: 'how often the oscillator has been at each x; the dashed curve is where a classical oscillator spends its time' });
    tex(d.readout, `\\kE = \\dfrac{\\kp^2}{2\\km} + \\dfrac{\\kk}{2}\\kx^2 \\\\ ${fmt(Er, 3)}\\ \\text{J} = ${fmt(Tr, 3)}\\ \\text{J} + ${fmt(Vr, 3)}\\ \\text{J}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
