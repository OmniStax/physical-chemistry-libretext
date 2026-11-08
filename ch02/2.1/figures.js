/* Figures for section 2.1 The One-Dimensional Wave Equation. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['2.1'] = function (root, F) {
const { el, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, topline, axes, plot, fmt, hbracket } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;
/* a readout line and, where the figure shows one more fact, a small second line set through the same macros */
function readout(host, main, small) { tex(host, main); if (small) { const s = el('small', null, small); host.appendChild(s); F.renderMath(s); } }
/* a steady clock: the wave runs on with no loop to scrub; reduced motion holds it at t = 0 */
const clock = (cy) => { const t = cy.now(); return isFinite(t) ? t : 0; };

/* ---------- Figure 2.1.1: the travelling sine wave ----------
   x: position 0 to 4 m; y: displacement -2 to 2 cm, fixed from the A_o slider's maximum.
   Moving, steadily: A(x,t) = A_o sin(kx - wt + phi). The point is the two motions at once: the
   crest (marked, with its velocity arrow) runs to the right at v = w/k, while the marked bead at
   x = 1 m only rises and falls on its dashed track, its velocity arrow vertical. The crest marker
   is the first crest right of 0.4 m; it hands over to the next one as it leaves the frame.
   The book draws no numbers; it opens on k = pi rad/m (a 2 m wavelength) and w = 2 pi rad/s
   (one cycle a second), so v = 2 m/s. */
(function () {
  const d = sim('sim-sine-wave', 540);
  const A = ctl(d.controls, { label: '\\kAo', cls: 'displacement', min: 0.2, max: 2, step: 0.1, value: 1, unit: 'cm', dec: 1, aria: 'the maximum amplitude' });
  const K = ctl(d.controls, { label: '\\kk', cls: 'wavenumber', min: 1, max: 8, step: 0.01, value: 3.14, unit: 'rad/m', dec: 2,
    detents: [{ v: 3.14, label: 'π' }, { v: 6.28, label: '2π' }], snap: true, aria: 'the wavenumber' });
  const W = ctl(d.controls, { label: '\\komega', cls: 'frequency', min: 1, max: 13, step: 0.01, value: 6.28, unit: 'rad/s', dec: 2,
    detents: [{ v: 3.14, label: 'π' }, { v: 6.28, label: '2π' }, { v: 12.57, label: '4π' }], snap: true, aria: 'the angular frequency' });
  const PH = ctl(d.controls, { label: '\\phi', cls: '', min: 0, max: 6.28, step: 0.01, value: 0, unit: 'rad', dec: 2, aria: 'the phase constant' });
  const cy = cycle(() => Infinity, 0);
  const XB = 1, hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W: CW } = begin(d.c);
    const t = clock(cy), a = A.v, k = K.v, w = W.v, ph = PH.v, v = w / k;
    const y = (x) => a * Math.sin(k * x - w * t + ph);
    topline(ctx, `The crests move to the right at $\\kv = \\komega/\\kk = ${fmt(v, 2)}$ m/s, while the marked bead only rises and falls.`);
    const box = { l: 140, r: CW - 70, t: 120, b: 450 };
    const ax = axes(ctx, box, [0, 4], [-2, 2], { nx: 8, ny: 4, xl: 'position x (m)', yl: 'displacement A (cm)', xc: C('length'), yc: C('displacement') });
    line(ctx, box.l, ax.Y(0), box.r, ax.Y(0), alpha(PAL.ink, 0.35), 2);
    plot(ctx, ax, y, C('displacement'), { w: 5 });
    /* the bead's track: it stays at x = 1 m */
    line(ctx, ax.X(XB), ax.Y(a), ax.X(XB), ax.Y(-a), alpha(PAL.ink, 0.4), 3, [4, 8]);
    const yb = y(XB), vb = -a * w * Math.cos(k * XB - w * t + ph);   /* cm/s */
    const bx = ax.X(XB), by = ax.Y(yb), len = Math.max(-110, Math.min(110, vb * 9));
    if (Math.abs(len) > 16) arrow(ctx, bx, by, bx, by - len, C('velocity'), 4);
    dot(ctx, bx, by, PAL.ink, true, 11);
    /* the crest that is being followed */
    const m = Math.ceil((k * 0.4 - w * t + ph - Math.PI / 2) / TAU);
    const xc = (Math.PI / 2 + TAU * m - ph + w * t) / k;
    hits.length = 0;
    if (xc <= 3.9) {
      const cx = ax.X(xc), cyy = ax.Y(a);
      dot(ctx, cx, cyy, C('displacement'), true, 10);
      const ay = cyy - 34, al = Math.min(130, 18 + 14 * v);
      arrow(ctx, cx - al / 2, ay, cx + al / 2, ay, C('velocity'), 4);
      text(ctx, 'crest', cx - al / 2 - 12, ay, C('displacement'), { size: 20, align: 'right' });
      hits.push({ x: cx, y: cyy, r: 16, name: `a crest, at x = ${fmt(xc, 2)} m, moving at ${fmt(v, 2)} m/s` });
    }
    text(ctx, 'bead at x = 1 m', bx + 18, box.b - 22, PAL.ink, { size: 20 });
    hits.push({ x: bx, y: by, r: 16, name: `the bead of rope at x = 1 m: displacement ${fmt(yb, 2)} cm, moving ${vb >= 0 ? 'up' : 'down'} at ${fmt(Math.abs(vb), 1)} cm/s` });
    readout(d.readout,
      `A(\\kx,\\kt) = \\kAo \\sin(\\kk\\kx - \\komega\\kt + \\phi) \\\\ A(\\kx,\\kt) = (${fmt(a, 1)}\\ \\text{cm}) \\sin(${fmt(k, 2)}\\kx - ${fmt(w, 2)}\\kt + ${fmt(ph, 2)})`,
      `$\\kv = \\komega/\\kk = ${fmt(w, 2)}/${fmt(k, 2)} = ${fmt(v, 2)}$ m/s`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* ---------- Figure 2.1.2 + 2.1.3: one shape, moved over by vt ----------
   x: position -1 to 9 m; y: displacement -1.5 to 1.5 cm. Moving: the pulse's peak (or, for the
   bump and dip, its middle) passes x = 0 at t = 0, as the book takes it, and the loop runs until it
   reaches x = 8 m, 8/v seconds of model time (3.2 to 8 s). The rope at t = 0 stays as a dashed
   ghost and a bracket measures the shift vt from it, so the same function moved over is seen.
   Choices: the book's three shapes. Slider v 1 to 2.5 m/s. */
(function () {
  const d = sim('sim-pulse', 500);
  const g = (x, c, w) => Math.exp(-((x - c) / w) * ((x - c) / w));
  const SHAPES = {
    bump: (x) => g(x, 0, 0.6),
    'bump-dip': (x) => Math.sqrt(2 * Math.E) * (x / 0.55) * g(x, 0, 0.55),
    two: (x) => g(x, -0.75, 0.42) + g(x, 0.75, 0.42),
  };
  const S = F.choice(d.controls, { label: '\\text{shape}', options: [{ value: 'bump', label: 'a bump' }, { value: 'bump-dip', label: 'a bump, then a dip' }, { value: 'two', label: 'two bumps' }], value: 'bump', aria: 'the shape of the pulse', onInput: () => cy.reset() });
  const V = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 1, max: 2.5, step: 0.1, value: 1.5, unit: 'm/s', dec: 1, aria: 'the velocity of the wave', onInput: () => cy.reset() });
  const cy = cycle(() => 8 / V.v, 1.2);
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    const t = Math.min(cy.now(), 8 / V.v), v = V.v, s = v * t, f = SHAPES[S.value];
    topline(ctx, `At $\\kt = ${fmt(t, 1)}$ s the rope has the shape it had at $\\kt = 0$, moved over by $\\kv\\kt = ${fmt(s, 1)}$ m.`);
    const box = { l: 140, r: W - 70, t: 120, b: 420 };
    const ax = axes(ctx, box, [-1, 9], [-2, 2], { nx: 10, ny: 4, xl: 'position x (m)', yl: 'displacement y (cm)', xc: C('length'), yc: C('displacement') });
    line(ctx, box.l, ax.Y(0), box.r, ax.Y(0), alpha(PAL.ink, 0.35), 2);
    /* the rope at t = 0 */
    ctx.save(); ctx.setLineDash([10, 10]); plot(ctx, ax, f, alpha(PAL.ink, 0.45), { w: 3 }); ctx.restore();
    /* the rope now: the same function, shifted */
    plot(ctx, ax, (x) => f(x - s), C('displacement'), { w: 5 });
    /* the shift */
    if (s > 0.25) hbracket(ctx, ax.X(0), ax.X(s), ax.Y(-1.65), C('length'), `vt = ${fmt(s, 1)} m`);
    /* the travel */
    const ay = ax.Y(1.32), x0 = ax.X(s);
    arrow(ctx, x0 - 50, ay, x0 + 50, ay, C('velocity'), 4);
    text(ctx, `v = ${fmt(v, 1)} m/s`, x0 + 62, ay, C('velocity'), { size: 20, weight: 600 });
    if (s > 2.2) text(ctx, 't = 0', ax.X(0) - 14, ax.Y(1.25), alpha(PAL.ink, 0.7), { size: 20, align: 'right' });
    hits.length = 0;
    hits.push({ x: ax.X(0), y: ax.Y(f(0) > 0.5 ? 1 : 0.6), r: 22, name: 'the rope at t = 0, y = f(x)' });
    hits.push({ x: ax.X(s), y: ax.Y(f(0) > 0.5 ? 1 : 0.6), r: 22, name: `the rope at t = ${fmt(t, 1)} s, y = f(x − ${fmt(s, 1)} m)` });
    tex(d.readout, `\\ky(\\kx,\\kt) = f(\\kx - \\kv\\kt) \\\\ \\ky(\\kx,\\ ${fmt(t, 1)}\\ \\text{s}) = f(\\kx - ${fmt(s, 1)}\\ \\text{m})`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* ---------- Figure 2.1.4 + 2.1.5: the first six standing waves of a string ----------
   x: position 0 to L = 1 m; y: displacement -1.3 to 1.3 cm. Moving, steadily: solution n is
   u = sin(n pi x / L) cos(n w1 t) with w1 = pi rad/s, so solution 1 swings once in 2 s and each
   higher one n times as fast (the curvature note). The nodes are ink dots that never move, the ends
   among them; the dashed envelope is how far each point swings, widest at the antinodes. Choosing a
   solution bends the shape into the new one. Opens on solution 3, two nodes between the ends. */
(function () {
  const d = sim('sim-standing', 500);
  const N = F.choice(d.controls, { label: '\\text{solution}', options: [1, 2, 3, 4, 5, 6].map((n) => ({ value: String(n), label: String(n) })), value: '3', aria: 'which of the first six solutions', ms: 700 });
  const cy = cycle(() => Infinity, 0);
  const L = 1, W1 = Math.PI, hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    const t = clock(cy), n = +N.value;
    const shape = (m, x) => Math.sin(m * Math.PI * x / L);
    const u = (x) => N.mix((v) => shape(+v, x) * Math.cos(+v * W1 * t));
    const env = (x) => N.mix((v) => Math.abs(shape(+v, x)));
    topline(ctx, `Solution ${n} has ${n - 1} node${n === 2 ? '' : 's'} between the ends, and the nodes never move.`);
    const box = { l: 140, r: W - 70, t: 110, b: 410 };
    const ax = axes(ctx, box, [0, L], [-1.4, 1.4], { nx: 4, ny: 0, fx: (x) => fmt(x, 2), xl: 'position x (m)', yl: 'displacement u', xc: C('length'), yc: C('displacement') });
    line(ctx, box.l, ax.Y(0), box.r, ax.Y(0), alpha(PAL.ink, 0.35), 2);
    /* the envelope: how far each point swings */
    ctx.save(); ctx.setLineDash([10, 10]);
    plot(ctx, ax, env, alpha(PAL.ink, 0.4), { w: 2 }); plot(ctx, ax, (x) => -env(x), alpha(PAL.ink, 0.4), { w: 2 });
    ctx.restore();
    plot(ctx, ax, u, C('displacement'), { w: 5 });
    /* the clamps at the ends */
    [0, L].forEach((x) => line(ctx, ax.X(x), ax.Y(-0.3), ax.X(x), ax.Y(0.3), PAL.ink, 5));
    hits.length = 0;
    for (let j = 0; j <= n; j++) {
      const x = j * L / n;
      dot(ctx, ax.X(x), ax.Y(0), PAL.ink, true, 9);
      hits.push({ x: ax.X(x), y: ax.Y(0), r: 14, name: j === 0 || j === n ? `a node at the fixed end, x = ${fmt(x, 2)} m` : `a node at x = ${fmt(x, 2)} m` });
    }
    for (let j = 0; j < n; j++) {
      const x = (j + 0.5) * L / n;
      hits.push({ x: ax.X(x), y: ax.Y(1), r: 18, name: `an antinode at x = ${fmt(x, 2)} m` });
    }
    /* one of each kind named */
    const xn = n > 1 ? L / n : L;
    text(ctx, 'node', ax.X(xn), ax.Y(-1.25), PAL.ink, { size: 20, align: 'center' });
    line(ctx, ax.X(xn), ax.Y(0) + 14, ax.X(xn), ax.Y(-1.1), alpha(PAL.ink, 0.4), 2, [4, 8]);
    text(ctx, 'antinode', ax.X(0.5 * L / n), ax.Y(1.25), PAL.ink, { size: 20, align: 'center' });
    readout(d.readout,
      `\\ku(0,\\kt) = 0 \\\\ \\ku(${fmt(L, 2)}\\ \\text{m},\\kt) = 0`,
      `Solution ${n}: ${n - 1} node${n === 2 ? '' : 's'} between the ends.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
