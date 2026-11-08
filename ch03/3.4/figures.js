/* Figures for section 3.4 Wavefunctions Have a Probabilistic Interpretation. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.4'] = function (root, F) {
const { el, tex, C, PAL, alpha, ctl, cycle, register, begin, line, dot, text, topline, axes, plot, shade, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
/* a readout line and, where the figure shows one more fact, a small second line set through the same macros */
function readout(host, main, small, o) { tex(host, main, false, o || {}); if (small) { const s = el('small', null, small); host.appendChild(s); F.renderMath(s); } }
/* a seeded generator, so the same detections land in the same places on every pass and the figure is a function of its time */
function rng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

/* =====================================================================
   Sim: detections building |psi|^2 (Equation 3.4.2). Moving: the arrivals
   are events in time. A particle held between two walls (x from 0 to L,
   lengths in units of L) in a state psi_n = sqrt(2/L) sin(n pi x / L),
   n = 1, 2, 3 (Chapter 2's string modes); each dot is one measurement,
   drawn from |psi_n|^2 by rejection sampling with a fixed seed. The count
   grows as N_MAX (t/T)^2, so the first dots land one by one and the last
   second brings hundreds. Below, the histogram of the counts, scaled to a
   density, fills toward |psi_n|^2, stroked in the probability-density hue.
   The region [a, b] is shaded in both; the readout sets the integral of
   Equation 3.4.2 against the fraction counted so far.
   x: 0 to 1 (x/L); y: 0 to 3 (|psi|^2 in units of 1/L; the peaks are 2).
===================================================================== */
(function () {
  const d = sim('sim-detections', 660);
  const NMAX = 2000, LOOP = 6, BINS = 25;
  const S = F.choice(d.controls, { label: '\\text{state}', options: [1, 2, 3].map((k) => ({ value: String(k), label: `ψ${'₀₁₂₃'[k]}` })), value: '2', aria: 'the state of the particle', onInput: () => cy.reset() });
  const A = ctl(d.controls, { label: 'a', cls: 'length', min: 0, max: 1, step: 0.01, value: 0, unit: '', fmt: (v) => `${fmt(v, 2)} L`, detents: [0, 0.25, 0.5, 0.75], snap: true, aria: 'the start of the region' });
  const B = ctl(d.controls, { label: 'b', cls: 'length', min: 0, max: 1, step: 0.01, value: 0.25, unit: '', fmt: (v) => `${fmt(v, 2)} L`, detents: [0.25, 0.5, 0.75, 1], snap: true, aria: 'the end of the region' });
  const cy = cycle(() => LOOP, 1.2);
  const dens = (n) => (x) => 2 * Math.pow(Math.sin(n * Math.PI * x), 2);
  const exact = (n, a, b) => (b - a) - (Math.sin(2 * n * Math.PI * b) - Math.sin(2 * n * Math.PI * a)) / (2 * n * Math.PI);
  /* the detections of each state, fixed once: [x, jitter] */
  const hits3 = {};
  for (const n of [1, 2, 3]) {
    const r = rng(1234 + n), f = dens(n), out = [];
    while (out.length < NMAX) { const x = r(), y = 2 * r(); if (y <= f(x)) out.push([x, r()]); }
    hits3[n] = out;
  }
  let hov = []; F.hover(d.stage, () => hov);
  function draw() {
    const { ctx } = begin(d.c);
    hov = [];
    const n = +S.value, t = cy.now(), N = Math.max(1, Math.min(NMAX, Math.floor(NMAX * Math.pow(t / LOOP, 2)) + 1));
    const a = Math.min(A.v, B.v), b = Math.max(A.v, B.v);
    const cp = C('probability-density'), cl = C('length');
    const pts = hits3[n].slice(0, N);
    /* the screen of detections above, on the same x as the graph */
    const box = { l: 170, r: 1290, t: 330, b: 590 };
    const scr = { t: 120, b: 270 };
    const X = (x) => box.l + (box.r - box.l) * x;
    /* the walls, outside which the particle is never found */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.12);
    ctx.fillRect(box.l - 60, scr.t - 10, 60, scr.b - scr.t + 20); ctx.fillRect(box.r, scr.t - 10, 60, scr.b - scr.t + 20); ctx.restore();
    line(ctx, X(0), scr.t - 10, X(0), scr.b + 10, PAL.ink, 4);
    line(ctx, X(1), scr.t - 10, X(1), scr.b + 10, PAL.ink, 4);
    hov.push({ x: X(0) - 30, y: (scr.t + scr.b) / 2, r: 30, name: 'a wall the particle cannot pass' });
    hov.push({ x: X(1) + 30, y: (scr.t + scr.b) / 2, r: 30, name: 'a wall the particle cannot pass' });
    /* the region, in both views */
    ctx.save(); ctx.fillStyle = alpha(cl, 0.1); ctx.fillRect(X(a), scr.t - 10, X(b) - X(a), scr.b - scr.t + 20); ctx.restore();
    const ax = axes(ctx, box, [0, 1], [0, 3], { nx: 4, ny: 3, fx: (v) => (v === 0 ? '0' : v === 1 ? 'L' : `${fmt(v, 2)} L`), xl: 'position x', yl: 'probability density |ψ|² (1/L)', xc: cl, yc: cp });
    ctx.save(); ctx.fillStyle = alpha(cl, 0.1); ctx.fillRect(X(a), box.t, X(b) - X(a), box.b - box.t); ctx.restore();
    line(ctx, X(a), scr.t - 10, X(a), box.b, alpha(cl, 0.7), 2, [4, 8]);
    line(ctx, X(b), scr.t - 10, X(b), box.b, alpha(cl, 0.7), 2, [4, 8]);
    /* the dots: old ones small and faint, the newest one large */
    ctx.save(); ctx.fillStyle = alpha(cp, 0.7);
    for (let i = 0; i < pts.length - 1; i++) { const [x, j] = pts[i]; ctx.beginPath(); ctx.arc(X(x), scr.t + (scr.b - scr.t) * j, 3, 0, 2 * Math.PI); ctx.fill(); }
    ctx.restore();
    const last = pts[pts.length - 1];
    dot(ctx, X(last[0]), scr.t + (scr.b - scr.t) * last[1], cp, true, 8);
    hov.push({ x: X(last[0]), y: scr.t + (scr.b - scr.t) * last[1], r: 14, name: `the latest detection, at x = ${fmt(last[0], 2)} L` });
    /* the histogram, scaled so its area is 1 */
    const counts = new Array(BINS).fill(0);
    let inside = 0;
    for (const [x] of pts) { counts[Math.min(BINS - 1, Math.floor(x * BINS))]++; if (x >= a && x <= b) inside++; }
    ctx.save(); ctx.fillStyle = alpha(cp, 0.35);
    counts.forEach((c, i) => { const h = Math.min(3, c / N * BINS), x0 = X(i / BINS), x1 = X((i + 1) / BINS); ctx.fillRect(x0 + 1, ax.Y(h), x1 - x0 - 2, box.b - ax.Y(h)); });
    ctx.restore();
    plot(ctx, ax, dens(n), cp, { w: 5 });
    hov.push({ x: X(0.5 / n), y: ax.Y(2), r: 18, name: `|ψ${'₀₁₂₃'[n]}|², the density the counts approach` });
    for (let k = 1; k < n; k++) hov.push({ x: X(k / n), y: ax.Y(0) - 10, r: 16, name: `a node at x = ${k}L/${n}: no particle is found here` });
    F.legend(ctx, ax, [{ s: 'counts per bin', kind: 'swatch', color: alpha(cp, 0.35) }, { s: '|ψ|²', color: cp, w: 5 }], { corner: 'above' });
    const nodes = n === 1 ? '' : n === 2 ? ', and none at the node at $L/2$' : ', and none at the nodes at $L/3$ and $2L/3$';
    topline(ctx, `${N} detection${N === 1 ? '' : 's'} of a particle in state $\\kpsi_${n}$${nodes}.`);
    const P = exact(n, a, b);
    readout(d.readout,
      `P(\\kx\\in[a,b]) = \\int_{a}^{b}|\\kpsi_${n}(\\kx)|^2 d\\kx \\\\ P(\\kx\\in[${fmt(a, 2)}\\kL,\\,${fmt(b, 2)}\\kL]) = ${fmt(P, 3)}`,
      `Counted so far: ${inside} of ${N}, a fraction of ${fmt(inside / N, 3)}.`, { values: false });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
