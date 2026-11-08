/* Figures for section 6.5 s-orbitals are Spherically Symmetric. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.5'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, shade, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* =====================================================================
   FIGURE 6.5.1 + 6.5.2 + 6.5.5: the 1s electron detected again and again.
   Moving: the book's experiment is "repeated a large number of times", so
   detections arrive over 6 s and the histograms fill. 6000 positions are
   drawn once from |psi_1s|^2 (seeded): r from r^2 e^(-2r) (a sum of three
   exponentials of mean a0/2), the direction uniform. Left, the slice
   |z| < 0.25 a0 through the nucleus seen from above (2D: a sphere looks the
   same from every side), so the dots crowd the nucleus. Right, two graphs
   on r from 0 to 5 a0, bins of 0.2 a0: top, detections per shell volume,
   the density P1 = e^(-2r)/pi (0 to 0.35 e-/a0^3; 0.318 at the nucleus);
   bottom, detections per shell thickness, the radial distribution
   4 pi r^2 P1 = 4 r^2 e^(-2r) (0 to 0.6 per a0; 0.541 at a0). Slider R
   draws the sphere and reads the enclosed fraction, counted and exact;
   it opens on the book's 2 a0 (Example 6.5.1).
===================================================================== */
(function () {
  const d = sim('sim-1s-detections', 640);
  const RUN = 6, N = 6000, SLAB = 0.25, BIN = 0.2, NB = 25;
  const cy = F.cycle(() => RUN, 1.2);
  const R = ctl(d.controls, { label: 'R', cls: 'length', key: 'R', min: 0.5, max: 4, step: 0.1, value: 2, unit: 'a₀', dec: 1, detents: [1, 2, 3, 4], snap: true, aria: 'the radius of the sphere, in Bohr radii' });
  /* the detections, drawn once from a seeded generator so every play is the same experiment */
  let seed = 61;
  const rnd = () => { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const pts = Array.from({ length: N }, () => {
    const r = -0.5 * Math.log((1 - rnd()) * (1 - rnd()) * (1 - rnd())), c = 2 * rnd() - 1, s = Math.sqrt(1 - c * c), p = 2 * Math.PI * rnd();
    return { r, x: r * s * Math.cos(p), y: r * s * Math.sin(p), z: r * c };
  });
  const P1 = (r) => Math.exp(-2 * r) / Math.PI, Q1 = (r) => 4 * r * r * Math.exp(-2 * r);
  const inside = (x) => 1 - Math.exp(-2 * x) * (1 + 2 * x + 2 * x * x);
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const n = Math.max(1, Math.min(N, Math.round(N * Math.min(cy.now(), RUN) / RUN))), Rv = R.v;
    const cp = C('probability-density'), cl = C('length');
    let within = 0; const bins = new Array(NB).fill(0);
    for (let i = 0; i < n; i++) { const r = pts[i].r; if (r < Rv) within++; const b = Math.floor(r / BIN); if (b < NB) bins[b]++; }
    topline(ctx, `Of ${n} detections, ${fmt(100 * within / n, 1)}% fall within $R = ${fmt(Rv, 1)}\\,\\kao$ of the nucleus; the exact share is ${fmt(100 * inside(Rv), 1)}%.`);
    hits = [];
    /* the slice through the nucleus */
    const cx = 300, cyy = 370, sc = 52;
    ctx.save(); ctx.beginPath(); ctx.rect(cx - 4.6 * sc, cyy - 4.6 * sc, 9.2 * sc, 9.2 * sc); ctx.strokeStyle = alpha(PAL.ink, 0.25); ctx.lineWidth = 1.5; ctx.stroke(); ctx.clip();
    ctx.fillStyle = alpha(F.el('e-'), 0.6);
    for (let i = 0; i < n; i++) { const q = pts[i]; if (Math.abs(q.z) < SLAB) { ctx.beginPath(); ctx.arc(cx + q.x * sc, cyy - q.y * sc, 2.6, 0, 2 * Math.PI); ctx.fill(); } }
    ctx.restore();
    line(ctx, cx, cyy, cx + Rv * sc, cyy, cl, 3);
    ctx.save(); ctx.strokeStyle = cl; ctx.lineWidth = 3; ctx.setLineDash([10, 10]); ctx.beginPath(); ctx.arc(cx, cyy, Rv * sc, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    text(ctx, 'R', cx + Rv * sc / 2, cyy - 18, cl, { size: 24, weight: 600, align: 'center' });
    dot(ctx, cx, cyy, F.el('p+'), true, 8);
    text(ctx, 'a slice 0.5 a₀ thick through the nucleus', cx, cyy + 4.6 * sc + 30, PAL.muted, { size: 17, align: 'center' });
    hits.push({ x: cx, y: cyy, r: 12, name: 'the proton, at the nucleus' });
    hits.push({ x: cx + Rv * sc, y: cyy, r: 14, name: `the sphere of radius R = ${fmt(Rv, 1)} a₀` });
    /* the two graphs on one r axis */
    const b1 = { l: 700, r: 1350, t: 110, b: 300 }, b2 = { l: 700, r: 1350, t: 385, b: 575 };
    const a1 = axes(ctx, b1, [0, 5], [0, 0.35], { nx: 5, ny: 7, xl: '', yl: 'density P₁ (e⁻/a₀³)', yc: cp });
    const a2 = axes(ctx, b2, [0, 5], [0, 0.6], { nx: 5, ny: 6, xl: 'distance r from the nucleus (a₀)', xc: cl, yl: 'per shell 4πr²P₁ (e⁻/a₀)', yc: cp });
    for (let k = 0; k < NB; k++) {
      const r0 = k * BIN, r1 = r0 + BIN, vol = 4 / 3 * Math.PI * (r1 ** 3 - r0 ** 3);
      const h1 = Math.min(0.35, bins[k] / n / vol), h2 = Math.min(0.6, bins[k] / n / BIN);
      ctx.save(); ctx.fillStyle = alpha(cp, 0.22); ctx.strokeStyle = alpha(cp, 0.45); ctx.lineWidth = 1;
      ctx.fillRect(a1.X(r0) + 1, a1.Y(h1), a1.X(r1) - a1.X(r0) - 2, a1.Y(0) - a1.Y(h1));
      ctx.fillRect(a2.X(r0) + 1, a2.Y(h2), a2.X(r1) - a2.X(r0) - 2, a2.Y(0) - a2.Y(h2));
      ctx.restore();
    }
    shade(ctx, a2, Q1, 0, 0, Math.min(5, Rv), cp, { alpha: 0.18 });
    plot(ctx, a1, P1, cp, { w: 4 });
    plot(ctx, a2, Q1, cp, { w: 4 });
    line(ctx, a1.X(Rv), b1.t, a1.X(Rv), b1.b, alpha(cl, 0.8), 3, [4, 8]);
    line(ctx, a2.X(Rv), b2.t, a2.X(Rv), b2.b, alpha(cl, 0.8), 3, [4, 8]);
    line(ctx, a2.X(1), a2.Y(Q1(1)), a2.X(1), b2.b, alpha(PAL.ink, 0.5), 2, [4, 8]);
    line(ctx, a2.X(1.5), a2.Y(Q1(1.5)), a2.X(1.5), b2.b, alpha(PAL.ink, 0.5), 2, [10, 10]);
    text(ctx, 'r_{max}', a2.X(1) - 8, b2.t + 16, PAL.ink, { size: 20, align: 'right' });
    text(ctx, 'r̄', a2.X(1.5) + 8, b2.t + 16, PAL.ink, { size: 20, align: 'left' });
    hits.push({ x: a2.X(1), y: a2.Y(Q1(1)), r: 14, name: 'r_max = a₀, where the radial distribution is greatest' });
    hits.push({ x: a2.X(1.5), y: a2.Y(Q1(1.5)), r: 14, name: 'r̄ = 1.5 a₀, the average distance' });
    F.legend(ctx, a1, [{ s: 'detections', kind: 'swatch', color: alpha(cp, 0.35) }, { s: 'from ψ₁²', color: cp, w: 4 }], { corner: 'tr' });
    tex(d.readout, `P(\\kr < R) = 1 - e^{-2R/\\kao}\\left(1 + \\dfrac{2R}{\\kao} + \\dfrac{2R^2}{\\kao^2}\\right) = ${fmt(inside(Rv), 3)} \\\\ \\krmax = \\kao \\\\ \\krbar = 1.5\\,\\kao`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   Figure (the shell note's unnumbered image): the shell between spheres of
   radius r and r + dr, as a locked perspective (root 28.2: the book's image
   is a perspective drawing), a quarter cut away toward the reader so the
   shell's thickness shows on the cut faces. Still. Sliders r (0.5 to 1.5 a0,
   default 1) and dr (0.02 to 1 a0, default 0.5). One scale for the scene,
   from the largest r + dr = 2.5 a0. Right, the ratio of the exact volume to
   4 pi r^2 dr against dr at this r: 1 + dr/r + dr^2/3r^2, falling to 1 as
   dr shrinks (y 1 to 4.5, fixed from the sliders' extremes).
===================================================================== */
(function () {
  const d = sim('sim-shell', 560);
  const RR = ctl(d.controls, { label: '\\kr', cls: 'length', key: 'r', min: 0.5, max: 1.5, step: 0.05, value: 1, unit: 'a₀', dec: 2, aria: 'the inner radius r, in Bohr radii' });
  const DR = ctl(d.controls, { label: '\\kdr', cls: 'length', key: 'dr', min: 0.02, max: 1, step: 0.01, value: 0.5, unit: 'a₀', dec: 2, aria: 'the thickness of the shell, in Bohr radii' });
  const REV = F.revolve, AX = { x: 0 };
  let hits = []; F.hover(d.stage, () => hits);
  const arc = (rad, a0, a1, n = 24) => Array.from({ length: n + 1 }, (_, i) => { const t = a0 + (a1 - a0) * i / n; return [rad * Math.cos(t), rad * Math.sin(t)]; });
  function draw() {
    const { ctx } = begin(d.c);
    const r = RR.v, dr = DR.v, cl = C('length');
    const exact = 4 / 3 * Math.PI * ((r + dr) ** 3 - r ** 3), approx = 4 * Math.PI * r * r * dr;
    topline(ctx, `At $\\kdr = ${fmt(dr, 2)}\\,\\kao$ the exact volume is ${fmt(exact / approx, 3)} times $4\\pi \\kr^2 \\kdr$.`);
    hits = [];
    /* the half annulus in the plane x >= 0, turned three quarters of the way round the vertical axis */
    const outline = [...arc(r + dr, -Math.PI / 2, Math.PI / 2), ...arc(r, Math.PI / 2, -Math.PI / 2)];
    const sweep = { from: Math.PI / 2, to: 2 * Math.PI, m: 64 };
    const cam = REV.camera({ yaw: Math.PI / 4, pitch: 0.42, dist: 2600, cx: 340, cy: 335, s: 88 });
    /* each cut face is the half annulus itself, laid as quads between the inner and outer arcs */
    const inner = arc(r, -Math.PI / 2, Math.PI / 2), outer = arc(r + dr, -Math.PI / 2, Math.PI / 2), cutFaces = [];
    [sweep.from, sweep.to].forEach((a) => { for (let i = 0; i + 1 < inner.length; i++) cutFaces.push([inner[i], inner[i + 1], outer[i + 1], outer[i]].map((p) => REV.turn(p, AX, a))); });
    REV.paint(ctx, cam, [{ faces: REV.lathe(outline, AX, sweep), color: PAL.soft, alpha: 1 }, { faces: cutFaces, color: F.mixColor(PAL.soft, cl, 0.45), alpha: 1 }]);
    /* r and dr on the cut face at angle 2 pi, the plane x >= 0, z = 0, at mid height */
    const P = (x, y) => cam.P([x, y, 0]);
    const [ox, oy] = P(0, 0), [ix, iy] = P(r, 0), [ex, ey] = P(r + dr, 0);
    line(ctx, ox, oy, ix, iy, PAL.ink, 3);
    dot(ctx, ox, oy, PAL.ink, true, 5);
    text(ctx, 'r', (ox + ix) / 2, (oy + iy) / 2 - 20, cl, { size: 24, weight: 600, align: 'center' });
    line(ctx, ix, iy, ex, ey, cl, 5);
    text(ctx, 'Δr', ex + 14, ey - 4, cl, { size: 24, weight: 600, align: 'left' });
    hits.push({ x: (ix + ex) / 2, y: (iy + ey) / 2, r: 16, name: `the shell's thickness Δr = ${fmt(dr, 2)} a₀` });
    hits.push({ x: (ox + ix) / 2, y: (oy + iy) / 2, r: 16, name: `the inner radius r = ${fmt(r, 2)} a₀` });
    /* the ratio against dr */
    const box = { l: 800, r: 1350, t: 120, b: 470 };
    const ax = axes(ctx, box, [0, 1], [1, 4.5], { nx: 5, ny: 7, xl: 'thickness Δr (a₀)', xc: cl, yl: 'exact volume ÷ 4πr²Δr', yc: PAL.ink });
    const ratio = (x) => 1 + x / r + x * x / (3 * r * r);
    line(ctx, box.l, ax.Y(1), box.r, ax.Y(1), alpha(PAL.ink, 0.4), 2, [10, 10]);
    plot(ctx, ax, ratio, PAL.ink, { w: 4 });
    dot(ctx, ax.X(dr), ax.Y(Math.min(4.5, ratio(dr))), cl, true, 10);
    hits.push({ x: ax.X(dr), y: ax.Y(Math.min(4.5, ratio(dr))), r: 14, name: `the ratio at Δr = ${fmt(dr, 2)} a₀` });
    tex(d.readout, `\\dfrac{4}{3}\\pi\\left[(\\kr + \\kdr)^3 - \\kr^3\\right] = ${fmt(exact, 3)}\\,\\kao^3 \\\\ 4\\pi \\kr^2 \\kdr = ${fmt(approx, 3)}\\,\\kao^3`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
