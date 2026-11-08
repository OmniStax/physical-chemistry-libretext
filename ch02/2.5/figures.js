/* Figures for section 2.5 A Vibrating Membrane. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['2.5'] = function (root, F) {
const { tex, C, PAL, alpha, register, begin, text, fmt } = F;

/* ---------- the displacement scale (a fact: one false-colour scale of u with its legend, root 7.1) ----------
   The book's convention for the drum: red above the rest plane, blue below; the sheet at rest takes a neutral of the
   page's own ground, so the nodal lines in ink read on it in either theme. */
const UP = '#c2413a', DOWN = '#2f6ab3';
const rest = () => F.mixColor(PAL.panel, PAL.ink, 0.1);
const STEPS = 16;   /* 33 bands from -1 to 1 */
const band = (q) => (q === 0 ? rest() : q > 0 ? F.mixColor(rest(), F.fact(UP), q / STEPS) : F.mixColor(rest(), F.fact(DOWN), -q / STEPS));
const level = (w) => Math.max(-STEPS, Math.min(STEPS, Math.round(w * STEPS)));
/* the sheet as faces grouped by band: rows[j][i] are points, w[j][i] the displacement over its maximum */
function sheet(rows, w) {
  const groups = new Map();
  for (let j = 0; j + 1 < rows.length; j++) for (let i = 0; i + 1 < rows[j].length; i++) {
    const q = level((w[j][i] + w[j][i + 1] + w[j + 1][i] + w[j + 1][i + 1]) / 4);
    if (!groups.has(q)) groups.set(q, []);
    groups.get(q).push([rows[j][i], rows[j][i + 1], rows[j + 1][i + 1], rows[j + 1][i]]);
  }
  /* grid curves every few rows, so the sheet reads as a surface even as it passes through rest */
  const segs = [], nj = rows.length, ni = rows[0].length, sj = Math.max(1, Math.round((nj - 1) / 8)), si = Math.max(1, Math.round((ni - 1) / 10));
  for (let j = 0; j < nj; j += sj) for (let i = 0; i + 1 < ni; i++) segs.push([rows[j][i], rows[j][i + 1]]);
  for (let i = 0; i < ni; i += si) for (let j = 0; j + 1 < nj; j++) segs.push([rows[j][i], rows[j + 1][i]]);
  return [...[...groups.entries()].map(([q, faces]) => ({ k: 'faces', faces, color: band(q), alpha: 1,
    name: q > 0 ? 'the membrane, above its rest position' : q < 0 ? 'the membrane, below its rest position' : 'the membrane, near its rest position' })),
    { k: 'segs', segs, color: alpha(PAL.ink, 0.3), w: 1 }];
}
/* the legend under the scene: the scale from below rest to above it */
function legend(c) {
  const { ctx, W } = begin(c), n = 2 * STEPS + 1, w = 34, x0 = W / 2 - (n * w) / 2, y = 22, h = 22;
  for (let q = -STEPS; q <= STEPS; q++) { ctx.save(); ctx.fillStyle = band(q); ctx.fillRect(x0 + (q + STEPS) * w, y, w + 0.5, h); ctx.restore(); }
  ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.4); ctx.lineWidth = 1; ctx.strokeRect(x0, y, n * w, h); ctx.restore();
  text(ctx, 'below rest', x0 - 14, y + h / 2 + 7, PAL.muted, { size: 17, align: 'right' });
  text(ctx, 'above rest', x0 + n * w + 14, y + h / 2 + 7, PAL.muted, { size: 17 });
  text(ctx, 'at rest', W / 2, y + h + 26, PAL.muted, { size: 17, align: 'center' });
}
/* the flat nodal map, drawn where WebGL is missing: the sheet from straight above on the same scale */
function flatMap(c, cells, nodes, frame, head) {
  const { ctx } = begin(c);
  cells.forEach(({ poly, w }) => { ctx.save(); ctx.fillStyle = band(level(w)); ctx.beginPath(); poly.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath(); ctx.fill(); ctx.restore(); });
  [...frame, ...nodes].forEach((pts) => { ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke(); ctx.restore(); });
  if (head) F.topline(ctx, head);
}
/* the stage: a free orbit from 20° above the sheet to straight down, never from beneath; no spin, no zoom */
const ORBIT = { pitch: [20 * Math.PI / 180, Math.PI / 2], spin: 'off', zoom: false };
/* one loop of 6 s holds a whole number of swings, three for the slowest mode, so the sheet never jumps */
const LOOP = 6;
const swings = (ratio) => Math.max(1, Math.round(3 * ratio));

/* ---------- Figure 2.5.1: a mode of a rectangular membrane ----------
   The membrane is a by b with a = 1.4 b, edges fixed. u = cos(omega t) sin(n_x pi x / a) sin(n_y pi y / b), drawn
   0.36 b high at its crest. The point is the nodal lines: straight, still, at x = k a / n_x and y = k b / n_y,
   while the lobes between them swing. A mode swings at omega_nm, in proportion to sqrt((n_x/a)^2 + (n_y/b)^2). */
(function () {
  const d = F.sim(root, 'sim-rect-membrane');
  const A = 1.4, B = 1, Z = 0.36, NI = 70, NJ = 50;
  const S = F.space3d(d, { box: [[0, A], [0, B], [-0.45, 0.45]], h: 560, turn: -0.55, tilt: 0.62, fit: 2.7, ...ORBIT });
  const cy = F.cycle(() => LOOP, 1.2);
  const opts = [1, 2, 3].map((k) => ({ value: String(k), label: String(k) }));
  const NX = F.choice(d.controls, { label: 'n_x', options: opts, value: '1', aria: 'the quantum number along x', key: 'nx', onInput: () => cy.reset() });
  const NY = F.choice(d.controls, { label: 'n_y', options: opts, value: '1', aria: 'the quantum number along y', key: 'ny', onInput: () => cy.reset() });
  const leg = F.makeCanvas(d.stage, 90);
  const shape = (nx, ny) => (x, y) => Math.sin(nx * Math.PI * x / A) * Math.sin(ny * Math.PI * y / B);
  const omega = (nx, ny) => Math.hypot(nx / A, ny / B);
  const nodalLines = (nx, ny) => [
    ...Array.from({ length: nx - 1 }, (_, i) => ({ pts: [[(i + 1) * A / nx, 0, 0], [(i + 1) * A / nx, B, 0]], name: `a nodal line, x = ${i + 1 === nx / 2 ? 'a/2' : `${i + 1}a/${nx}`}` })),
    ...Array.from({ length: ny - 1 }, (_, i) => ({ pts: [[0, (i + 1) * B / ny, 0], [A, (i + 1) * B / ny, 0]], name: `a nodal line, y = ${i + 1 === ny / 2 ? 'b/2' : `${i + 1}b/${ny}`}` })),
  ];
  const rim = [[0, 0, 0], [A, 0, 0], [A, B, 0], [0, B, 0], [0, 0, 0]];
  function draw() {
    const nx = +NX.value, ny = +NY.value, k = Math.min(NX.k, NY.k);
    const fx = NX.k < 1 ? +NX.from : nx, fy = NY.k < 1 ? +NY.from : ny;
    const now = shape(nx, ny), was = shape(fx, fy);
    const c = Math.cos(2 * Math.PI * swings(omega(nx, ny) / omega(1, 1)) * cy.now() / LOOP);
    const at = (x, y) => c * ((1 - k) * was(x, y) + k * now(x, y));
    const grid = Array.from({ length: NJ + 1 }, (_, j) => Array.from({ length: NI + 1 }, (_, i) => [i * A / NI, j * B / NJ]));
    const w = grid.map((row) => row.map(([x, y]) => at(x, y)));
    const nodes = [...nodalLines(nx, ny).map((l) => ({ ...l, a: k })), ...(k < 1 && (fx !== nx || fy !== ny) ? nodalLines(fx, fy).map((l) => ({ ...l, a: 1 - k })) : [])];
    if (S.flat) {
      const c2 = d.stage.querySelector('canvas'), s = 820 / A, ox = 700 - (A * s) / 2, oy = 280 + (B * s) / 2, P = ([x, y]) => [ox + x * s, oy - y * s];
      const cells = [];
      for (let j = 0; j < NJ; j++) for (let i = 0; i < NI; i++) cells.push({ poly: [grid[j][i], grid[j][i + 1], grid[j + 1][i + 1], grid[j + 1][i]].map(P), w: (w[j][i] + w[j + 1][i + 1]) / 2 });
      flatMap(c2, cells, nodes.filter((l) => l.a > 0.5).map((l) => l.pts.map(P)), [rim.map(P)], '');
    } else {
      S.set('sheet', sheet(grid.map((row, j) => row.map(([x, y], i) => [x, y, Z * w[j][i]])), w));
      S.set('nodes', nodes.map((l) => ({ k: 'line', pts: l.pts, color: alpha(PAL.ink, 0.25 + 0.75 * l.a), w: 4, name: l.name })));
      S.set('frame', [
        { k: 'line', pts: rim, color: 'ink', w: 3, name: 'the fixed edge, where u = 0' },
        { k: 'arrow', a: [0, -0.08, 0], b: [0.4, -0.08, 0], color: C('length'), w: 3 },
        { k: 'arrow', a: [-0.08, 0, 0], b: [-0.08, 0.4, 0], color: C('length'), w: 3 },
        { k: 'label', s: '$\\kx$', p: [0.48, -0.13, 0], color: C('length'), cls: 'bare' },
        { k: 'label', s: '$\\ky$', p: [-0.13, 0.48, 0], color: C('length'), cls: 'bare' },
      ]);
    }
    legend(leg);
    const term = (n, v, L) => `\\sin\\left(\\dfrac{${n > 1 ? n : ''}\\pi ${v}}{${L}}\\right)`;
    const lines = nx - 1 + ny - 1;
    tex(d.readout, `\\ku(\\kx,\\ky,\\kt) = \\kAnm \\cos(\\komeganm \\kt)\\, ${term(nx, '\\kx', '\\ka')} ${term(ny, '\\ky', '\\kbm')} \\\\ \\small \\text{nodal lines: } (${nx} - 1) + (${ny} - 1) = ${lines}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* ---------- Figure 2.5.2: a mode of a circular membrane ----------
   A drum of radius 1, rim fixed. u = J_m(lambda_mn r) cos(m theta) cos(c lambda_mn t), lambda_mn the nth zero of J_m,
   drawn 0.42 high at its largest. The point is the nodes: m diameters at the zeros of cos m theta and n - 1 circles
   at the earlier zeros of J_m, all still while the lobes swing. A mode swings at c lambda_mn. */
(function () {
  const d = F.sim(root, 'sim-circ-membrane');
  const Z = 0.42, NR = 40, NT = 128;
  /* the first three zeros of J_0 to J_4 */
  const ZEROS = [[2.4048, 5.5201, 8.6537], [3.8317, 7.0156, 10.1735], [5.1356, 8.4172, 11.6198], [6.3802, 9.761, 13.0152], [7.5883, 11.0647, 14.3725]];
  /* J_m(x) = (1/pi) integral_0^pi cos(m tau - x sin tau) d tau, by the trapezoid rule, exact to 1e-10 here */
  const J = (m, x) => { const N = 96; let s = 0; for (let i = 0; i <= N; i++) { const t = Math.PI * i / N; s += (i === 0 || i === N ? 0.5 : 1) * Math.cos(m * t - x * Math.sin(t)); } return s / N; };
  const S = F.space3d(d, { box: [[-1, 1], [-1, 1], [-0.45, 0.45]], h: 560, turn: -0.55, tilt: 0.62, fit: 2.8, ...ORBIT });
  const cy = F.cycle(() => LOOP, 1.2);
  const M = F.choice(d.controls, { label: 'm', options: [0, 1, 2, 3, 4].map((k) => ({ value: String(k), label: String(k) })), value: '0', aria: 'the number of nodal diameters', key: 'm', onInput: () => cy.reset() });
  const N = F.choice(d.controls, { label: 'n', options: [1, 2, 3].map((k) => ({ value: String(k), label: String(k) })), value: '1', aria: 'the radial quantum number', key: 'n', onInput: () => cy.reset() });
  const leg = F.makeCanvas(d.stage, 90);
  const peaks = new Map();
  /* the mode's shape over its largest |value|, so every mode reaches the same height */
  function shape(m, n) {
    const lam = ZEROS[m][n - 1], key = `${m},${n}`;
    if (!peaks.has(key)) { let big = 0; for (let i = 0; i <= 400; i++) big = Math.max(big, Math.abs(J(m, lam * i / 400))); peaks.set(key, big); }
    const big = peaks.get(key), rad = Array.from({ length: NR + 1 }, (_, i) => J(m, lam * i / NR) / big);
    return (i, t) => rad[i] * Math.cos(m * t);
  }
  const ring = (r) => Array.from({ length: 121 }, (_, i) => { const t = 2 * Math.PI * i / 120; return [r * Math.cos(t), r * Math.sin(t), 0]; });
  const nodalLines = (m, n) => [
    ...Array.from({ length: m }, (_, i) => { const t = (2 * i + 1) * Math.PI / (2 * m); return { pts: [[-Math.cos(t), -Math.sin(t), 0], [Math.cos(t), Math.sin(t), 0]], name: `a nodal diameter, θ = ${fmt(t * 180 / Math.PI, 1)}°` }; }),
    ...Array.from({ length: n - 1 }, (_, i) => { const r = ZEROS[m][i] / ZEROS[m][n - 1]; return { pts: ring(r), name: `a nodal circle, r = ${fmt(r, 2)}` }; }),
  ];
  function draw() {
    const m = +M.value, n = +N.value, k = Math.min(M.k, N.k);
    const fm = M.k < 1 ? +M.from : m, fn = N.k < 1 ? +N.from : n;
    const now = shape(m, n), was = shape(fm, fn), lam = ZEROS[m][n - 1];
    const c = Math.cos(2 * Math.PI * swings(lam / ZEROS[0][0]) * cy.now() / LOOP);
    const grid = Array.from({ length: NT + 1 }, (_, j) => Array.from({ length: NR + 1 }, (_, i) => ({ r: i / NR, t: 2 * Math.PI * j / NT, i })));
    const w = grid.map((row) => row.map(({ i, t }) => c * ((1 - k) * was(i, t) + k * now(i, t))));
    const nodes = [...nodalLines(m, n).map((l) => ({ ...l, a: k })), ...(k < 1 && (fm !== m || fn !== n) ? nodalLines(fm, fn).map((l) => ({ ...l, a: 1 - k })) : [])];
    if (S.flat) {
      const c2 = d.stage.querySelector('canvas'), s = 230, P = ([x, y]) => [700 + x * s, 290 - y * s];
      const cells = [];
      for (let j = 0; j < NT; j++) for (let i = 0; i < NR; i++) cells.push({ poly: [grid[j][i], grid[j][i + 1], grid[j + 1][i + 1], grid[j + 1][i]].map(({ r, t }) => P([r * Math.cos(t), r * Math.sin(t)])), w: (w[j][i] + w[j + 1][i + 1]) / 2 });
      flatMap(c2, cells, nodes.filter((l) => l.a > 0.5).map((l) => l.pts.map(P)), [ring(1).map(P)], '');
    } else {
      S.set('sheet', sheet(grid.map((row, j) => row.map(({ r, t }, i) => [r * Math.cos(t), r * Math.sin(t), Z * w[j][i]])), w));
      S.set('nodes', nodes.map((l) => ({ k: 'line', pts: l.pts, color: alpha(PAL.ink, 0.25 + 0.75 * l.a), w: 4, name: l.name })));
      S.set('frame', [{ k: 'line', pts: ring(1), color: 'ink', w: 3, name: 'the fixed rim, where u = 0' }]);
    }
    legend(leg);
    const mn = `${m}${n}`;
    tex(d.readout, `\\ku(\\kr,\\theta,\\kt) = J_{${m}}(\\lambda_{${mn}} \\kr) \\cos ${m}\\theta \\cos c \\lambda_{${mn}} \\kt \\\\ \\lambda_{${mn}} = ${fmt(lam, 3)} \\\\ \\small \\text{${m} nodal diameter${m === 1 ? '' : 's'}, ${n - 1} nodal circle${n === 2 ? '' : 's'}}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
