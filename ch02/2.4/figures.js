/* Figures for section 2.4 The General Solution is a Superposition of Normal Modes. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['2.4'] = function (root, F) {
const { el, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;
/* a readout line and, where the figure shows one more fact, a small second line set through the same macros */
function readout(host, main, small, o) { tex(host, main, false, o || {}); if (small) { const s = el('small', null, small); host.appendChild(s); F.renderMath(s); } }
/* a signed number for a sum written out term by term */
const signed = (x, d) => (x < 0 ? '-' : '+') + fmt(Math.abs(x), d);
/* a dashed curve clipped to its graph's box, for a part drawn beside the whole it sums to */
function dashed(ctx, ax, f, color, w = 3) {
  const { box, X, Y, xr } = ax;
  ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
  ctx.strokeStyle = color; ctx.lineWidth = w; ctx.setLineDash([10, 8]); ctx.beginPath();
  for (let i = 0; i <= 400; i++) { const x = xr[0] + (xr[1] - xr[0]) * i / 400; if (i) ctx.lineTo(X(x), Y(f(x))); else ctx.moveTo(X(x), Y(f(x))); }
  ctx.stroke(); ctx.restore();
}

/* the stack of normal modes sin(n pi x / L), one strip per mode, drawn between two fixed ends.
   Kept as a helper so the particle in a box of Chapter 3 can draw the same stack.
   X maps x (m) to the canvas, y0 is the strip's rest line, a the drawn amplitude, s the swing cos(omega_n t). */
function modeStrip(ctx, X, L, n, y0, a, s, color, w) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.beginPath();
  for (let i = 0; i <= 240; i++) { const x = L * i / 240, y = y0 - a * s * Math.sin(n * Math.PI * x / L); if (i) ctx.lineTo(X(x), y); else ctx.moveTo(X(x), y); }
  ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 2.4.1: the first seven normal modes, swinging. Moving: each mode
   n swings as cos(omega_n t) with omega_n = n pi v / L, so mode n turns
   n times for each turn of the fundamental. The string is drawn to its
   length on one x axis, 0 to 1.0 m (the slider's longest string), so a
   shorter string is seen to be shorter as well as faster. Real frequencies
   are 50 to 375 Hz; the drawing runs SLOW = 400 times slower and the
   readout says so. The loop is a whole number of fundamental periods, so
   it closes on the shape it opened with. The book's two extremes stay as
   faint outlines. The modes are counted on the left as the ticks of a
   "mode n" axis (seven labels would be too many as entity labels).
===================================================================== */
(function () {
  const d = sim('sim-modes', 700);
  const SLOW = 400;
  const N = F.choice(d.controls, { label: 'n', options: [1, 2, 3, 4, 5, 6, 7].map((k) => ({ value: String(k), label: String(k) })), value: '3', aria: 'the mode to pick out' });
  const V = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 100, max: 300, step: 1, value: 200, unit: 'm/s', dec: 0, aria: 'the velocity of the wave on the string', onInput: () => cy.reset() });
  const L = ctl(d.controls, { label: '\\kL', cls: 'length', min: 0.4, max: 1.0, step: 0.01, value: 0.5, unit: 'm', dec: 2, aria: 'the length of the string', onInput: () => cy.reset() });
  const nu1 = () => V.v / (2 * L.v);                      /* Hz, the fundamental */
  const fund = () => nu1() / SLOW;                         /* drawn turns of the fundamental per second */
  const period = () => Math.max(1, Math.round(4.5 * fund())) / fund();
  const cy = cycle(period, 1.2);
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const n = +N.value, len = L.v, t = cy.now(), f1 = fund();
    const cu = C('displacement'), cl = C('length');
    const box = { l: 180, r: 1300, t: 120, b: 620 };
    const ax = axes(ctx, box, [0, 1.0], [0.5, 7.5], { nx: 5, ny: 0, xl: 'position x (m)', yl: 'mode n', xc: cl, yc: PAL.ink });
    const X = ax.X, gap = (box.b - box.t) / 7, A = gap * 0.36;
    /* the two fixed ends, shared by every mode */
    line(ctx, X(0), box.t + 6, X(0), box.b - 6, PAL.ink, 4);
    line(ctx, X(len), box.t + 6, X(len), box.b - 6, PAL.ink, 4);
    hits.push({ x: X(len), y: box.t + 20, r: 14, name: `the fixed end at x = L = ${fmt(len, 2)} m` });
    for (let m = 1; m <= 7; m++) {
      const y0 = box.t + gap * (m - 0.5), on = m === n;
      text(ctx, String(m), box.l - 24, y0, on ? cu : PAL.ink, { size: on ? 22 : 17, weight: on ? 600 : 400, align: 'right', base: 'middle' });
      /* the book's two extremes, faint */
      modeStrip(ctx, X, len, m, y0, A, 1, alpha(PAL.ink, 0.16), 2);
      modeStrip(ctx, X, len, m, y0, A, -1, alpha(PAL.ink, 0.16), 2);
      /* the mode now */
      modeStrip(ctx, X, len, m, y0, A, Math.cos(TAU * m * f1 * t), on ? cu : alpha(PAL.ink, 0.6), on ? 5 : 3);
      hits.push({ x: X(len / (2 * m)), y: y0, r: 16, name: `mode ${m}: ν${'₀₁₂₃₄₅₆₇'[m]} = ${fmt(m * nu1(), 0)} Hz, ${m - 1} node${m === 2 ? '' : 's'} between the ends` });
      if (on) for (let k = 1; k < m; k++) dot(ctx, X(len * k / m), y0, PAL.ink, true, 7);
    }
    topline(ctx, n === 1
      ? `Mode $n = 1$, the fundamental, has no nodes between the fixed ends.`
      : `Mode $n = ${n}$ has ${n - 1} node${n === 2 ? '' : 's'} between the fixed ends and swings ${n} times for each swing of the fundamental.`);
    readout(d.readout,
      `\\knun = \\dfrac{\\komegan}{2\\pi} = \\dfrac{n\\kv}{2\\kL} \\\\ \\knu_{${n}} = \\dfrac{${n}\\,(${fmt(V.v, 0)}\\ \\text{m/s})}{2\\,(${fmt(len, 2)}\\ \\text{m})} = ${fmt(n * nu1(), 0)}\\ \\text{Hz}`,
      `The drawing runs ${SLOW} times slower than the string.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 2.4.2: two pulses passing through each other. Moving: pulse 1
   (a referent) starts at x = 0.6 m and runs right, pulse 2 starts at
   3.4 m and runs left, both at v = 0.56 m/s, so they meet at the middle,
   x = 2.0 m, at t = 2.5 s and are apart again at 5 s. Each is a bump
   A exp(-(s/w)^2) with w = 0.28 m, drawn dashed; the string, their sum,
   is solid. The arrows above the pulses are kinematic: they ride along.
   A probe at the meeting point carries the readout. x: 0 to 4 m;
   y: -3 to 3 cm (A1 + A2 reaches 3 cm at the slider's top).
===================================================================== */
(function () {
  const d = sim('sim-pulses', 560);
  const S = F.choice(d.controls, { label: '\\text{pulse 2}', options: [{ value: 'same', label: 'same side' }, { value: 'opposite', label: 'opposite side' }], value: 'same', aria: 'which side of the string the second pulse is on', onInput: () => cy.reset() });
  const A2 = ctl(d.controls, { label: 'A_2', cls: 'displacement', min: 0.5, max: 2.0, step: 0.05, value: 1.0, unit: 'cm', dec: 2, detents: [1.0], aria: 'the height of the second pulse', onInput: () => cy.reset() });
  const LOOP = 5, A1 = 1.0, W = 0.28, X1 = 0.6, X2 = 3.4, XP = 2.0, VEL = (X2 - X1) / LOOP;
  const cy = cycle(() => LOOP, 1.2);
  const bump = (a, c) => (x) => a * Math.exp(-Math.pow((x - c) / W, 2));
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const t = cy.now(), sign = S.mix((v) => (v === 'same' ? 1 : -1)), a2 = sign * A2.v;
    const c1 = X1 + VEL * t, c2 = X2 - VEL * t;
    const u1 = bump(A1, c1), u2 = bump(a2, c2), u = (x) => u1(x) + u2(x);
    const cu = C('displacement'), r1 = F.ref('pulse-1'), r2 = F.ref('pulse-2');
    const box = { l: 150, r: 1320, t: 130, b: 480 };
    const ax = axes(ctx, box, [0, 4], [-3, 3], { nx: 4, ny: 6, xl: 'position x (m)', yl: 'displacement u (cm)', xc: C('length'), yc: cu });
    line(ctx, box.l, ax.Y(0), box.r, ax.Y(0), alpha(PAL.ink, 0.35), 2);
    /* the probe at the meeting point */
    line(ctx, ax.X(XP), box.t, ax.X(XP), box.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
    dashed(ctx, ax, u1, r1, 3);
    dashed(ctx, ax, u2, r2, 3);
    plot(ctx, ax, u, cu, { w: 5 });
    dot(ctx, ax.X(XP), ax.Y(u(XP)), cu, true, 9);
    hits.push({ x: ax.X(XP), y: ax.Y(u(XP)), r: 14, name: `the string at x = ${fmt(XP, 1)} m, ${fmt(u(XP), 2)} cm` });
    /* the travel of each pulse, riding above (or below) its peak */
    const ya = (a) => ax.Y(a) + (a >= 0 ? -34 : 34);
    arrow(ctx, ax.X(c1) - 40, ya(A1), ax.X(c1) + 40, ya(A1), r1, 4);
    arrow(ctx, ax.X(c2) + 40, ya(a2), ax.X(c2) - 40, ya(a2), r2, 4);
    hits.push({ x: ax.X(c1), y: ax.Y(A1), r: 22, name: `pulse 1, ${fmt(A1, 2)} cm tall, running right` });
    hits.push({ x: ax.X(c2), y: ax.Y(a2), r: 22, name: `pulse 2, ${fmt(a2, 2)} cm, running left` });
    /* a legend for the three curves */
    const lx = box.r - 230, ly = box.t + 18;
    [[r1, 'pulse 1', [10, 8]], [r2, 'pulse 2', [10, 8]], [cu, 'the string', null]].forEach(([c, s, dash], i) => {
      line(ctx, lx, ly + 30 * i, lx + 44, ly + 30 * i, c, dash ? 3 : 5, dash || undefined);
      text(ctx, s, lx + 56, ly + 30 * i, PAL.ink, { size: 17, base: 'middle' });
    });
    const same = S.value === 'same', top = same ? A1 + A2.v : Math.abs(A1 - A2.v);
    topline(ctx, same
      ? `Pulses on the same side add: where they overlap, the string rises ${fmt(top, 2)} cm.`
      : top < 0.01 ? `Equal pulses on opposite sides cancel: where they overlap, the string is flat for an instant.`
        : `Pulses on opposite sides partly cancel: where they overlap, the string is displaced only ${fmt(top, 2)} cm.`);
    const v1 = u1(XP), v2 = u2(XP);
    readout(d.readout,
      `\\ku(\\kx,\\kt) = \\ku_1(\\kx,\\kt) + \\ku_2(\\kx,\\kt) \\\\ \\ku(${fmt(XP, 1)}\\ \\text{m},\\ ${fmt(t, 1)}\\ \\text{s}) = ${fmt(v1, 2)} ${signed(v2, 2)} = ${fmt(v1 + v2, 2)}\\ \\text{cm}`,
      '', { values: false });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   Sim: the string as a sum of its first three normal modes (Equations
   2.4.14 and 2.4.15 with H_n = 0: the string starts from rest). Moving:
   one loop is one period T1 of the fundamental, 5 s drawn; mode n turns
   n times in it. The string (displacement colour) is on top, its starting
   shape dashed behind it; the three modes, each G_n cos(omega_n t)
   sin(n pi x / L), are small strips beneath, told apart by F.cat. The
   headline says when the string is back in its starting shape: at
   multiples of T1 / gcd of the modes present.
   Top: x/L 0 to 1; u from -10 to 10 mm (three sliders at 3 mm reach 9).
===================================================================== */
(function () {
  const d = sim('sim-mode-sum', 760);
  const G = [3, 1.5, 1].map((v, i) => ctl(d.controls, { label: `G_${i + 1}`, cls: 'displacement', min: -3, max: 3, step: 0.1, value: v, unit: 'mm', dec: 1, key: `g${i + 1}`, detents: [0], aria: `how much of mode ${i + 1} the string starts with`, onInput: () => cy.reset() }));
  const LOOP = 5;
  const cy = cycle(() => LOOP, 1.2);
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const k = Math.min(1, cy.now() / LOOP), g = G.map((s) => s.v);
    const cu = C('displacement');
    const term = (n, x, kk) => g[n - 1] * Math.cos(TAU * n * kk) * Math.sin(n * Math.PI * x);
    const u = (kk) => (x) => term(1, x, kk) + term(2, x, kk) + term(3, x, kk);
    const box = { l: 180, r: 1300, t: 120, b: 420 };
    const ax = axes(ctx, box, [0, 1], [-10, 10], { nx: 4, ny: 4, xl: 'position x / L', yl: 'displacement u (mm)', xc: C('length'), yc: cu });
    line(ctx, box.l, ax.Y(0), box.r, ax.Y(0), alpha(PAL.ink, 0.3), 2);
    /* the starting shape, dashed, and the string now */
    const p0 = []; for (let i = 0; i <= 200; i++) { const x = i / 200; p0.push([ax.X(x), ax.Y(u(0)(x))]); }
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 3; ctx.setLineDash([10, 10]); ctx.beginPath();
    p0.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke(); ctx.restore();
    plot(ctx, ax, u(k), cu, { w: 5 });
    hits.push({ x: ax.X(0.25), y: ax.Y(u(0)(0.25)), r: 14, name: 'the starting shape of the string' });
    dot(ctx, ax.X(0), ax.Y(0), PAL.ink, true, 8); dot(ctx, ax.X(1), ax.Y(0), PAL.ink, true, 8);
    /* the three modes beneath, one strip each */
    const sx = (x) => ax.X(x), top = 480, gap = 82, A = 30 / 3;     /* 3 mm draws 30 units */
    for (let n = 1; n <= 3; n++) {
      const y0 = top + gap * (n - 1) + 20, c = F.cat(n - 1);
      line(ctx, ax.X(0), y0, ax.X(1), y0, alpha(PAL.ink, 0.2), 2);
      ctx.save(); ctx.strokeStyle = c; ctx.lineWidth = 3.5; ctx.beginPath();
      for (let i = 0; i <= 160; i++) { const x = i / 160, y = y0 - A * term(n, x, k); if (i) ctx.lineTo(sx(x), y); else ctx.moveTo(sx(x), y); }
      ctx.stroke(); ctx.restore();
      text(ctx, `G_${n} = ${fmt(g[n - 1], 1)} mm`, box.l - 20, y0, c, { size: 17, weight: 600, align: 'right', base: 'middle' });
      hits.push({ x: ax.X(0.5 / n), y: y0, r: 16, name: `mode ${n}, swinging ${n} time${n > 1 ? 's' : ''} per period of the fundamental` });
    }
    /* back in its starting shape at multiples of T1 / gcd of the modes present */
    const present = [1, 2, 3].filter((n) => Math.abs(g[n - 1]) > 1e-9);
    const q = present.reduce((a, b) => gcd(a, b), 0);
    const back = q > 0 && Math.abs(k * q - Math.round(k * q)) < 0.004;
    topline(ctx, present.length === 0
      ? 'With every mode at zero, the string stays at rest.'
      : k === 0 ? 'At $t = 0$ the string is in its starting shape.'
        : `At $t = ${fmt(k, 2)}\\,T_1$ the string ${back ? 'is back in its starting shape' : 'has not yet come back to its starting shape'}.`);
    const c = [1, 2, 3].map((n) => g[n - 1] * Math.cos(TAU * n * k));
    readout(d.readout,
      `\\ku(\\kx,\\kt) = \\sum_{n=1}^{3} G_n \\cos(\\komegan \\kt) \\sin\\left(\\dfrac{n\\pi \\kx}{\\kL}\\right) \\\\ \\ku(\\kx,${fmt(k, 2)}\\,T_1) = ${fmt(c[0], 2)}\\sin\\dfrac{\\pi\\kx}{\\kL} ${signed(c[1], 2)}\\sin\\dfrac{2\\pi\\kx}{\\kL} ${signed(c[2], 2)}\\sin\\dfrac{3\\pi\\kx}{\\kL}\\ \\text{mm}`,
      `The string starts from rest, so every $H_n = 0$; $T_1$ is the period of the fundamental.`, { values: false });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
