/* Figures for section 20.1 Energy Does not Determine Spontaneity. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['20.1'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

const KB = 1.380649e-23;
/* ln n!, summed (n stays at or below 100 here) */
const lnFact = (n) => { let s = 0; for (let i = 2; i <= n; i++) s += Math.log(i); return s; };
/* a number as m x 10^e in TeX */
const sci = (v, d) => { if (v === 0) return '0'; const e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e); return `${fmt(m, d)}\\times10^{${e}}`; };
/* W = N!/(nL! nR!) written exactly while it fits, else in powers of ten */
const wTex = (lnW) => (lnW < 18 ? String(Math.round(Math.exp(lnW))) : sci(Math.exp(lnW), 2));
/* a seeded generator, so a given N always gives the same gas */
const rng = (seed) => () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
/* a coordinate bouncing between walls a and b */
const fold = (x, a, b) => { const L = b - a; let u = (x - a) % (2 * L); if (u < 0) u += 2 * L; return a + (u <= L ? u : 2 * L - u); };

/* ---------- Sim: the free expansion ----------
   Scene: a box 600 by 350 with a partition at its middle; N molecules (4 to 100, opening 10) start in the left half.
   Moving: the partition lifts at t = 1 s and the molecules fly straight and bounce off the walls, so every
   position is a function of time and the transport can scrub it. Graph beside: W(n_L) / W(N/2) against the share
   n_L / N in the left half, 0 to 1 on both axes (fixed); the bar of the present split is marked. The point: the even
   splits have overwhelmingly more arrangements, and the peak narrows as N grows. */
(function () {
  const d = sim('sim-free-expansion', 600);
  const RUN = 8, LIFT = 1;
  const cy = F.cycle(() => RUN, 1.2);
  const N = ctl(d.controls, { label: 'N', cls: '', min: 4, max: 100, step: 1, value: 10, unit: 'molecules', dec: 0,
    detents: [10, 50, 100], snap: true, key: 'molecules', onInput: () => cy.reset() });
  const hits = [];
  F.hover(d.stage, () => hits);
  let gas = null, gasN = 0;
  const make = (n) => { const r = rng(7 + n * 131), g = [];
    for (let i = 0; i < n; i++) { const a = 2 * Math.PI * r(), v = 0.16 + 0.16 * r(); g.push({ x: 0.03 + 0.44 * r(), y: 0.04 + 0.92 * r(), vx: v * Math.cos(a), vy: 0.6 * v * Math.sin(a) }); }
    return g; };
  function draw() {
    const { ctx, W } = begin(d.c);
    const n = Math.round(N.v); if (n !== gasN) { gas = make(n); gasN = n; }
    const t = cy.now(), dt = t - LIFT;
    const B = { l: 70, r: 670, t: 140, b: 490 }, X = (u) => B.l + u * (B.r - B.l), Y = (u) => B.t + u * (B.b - B.t);
    const pos = gas.map((m) => ({ x: dt < 0 ? fold(m.x + m.vx * dt, 0.02, 0.48) : fold(m.x + m.vx * dt, 0.02, 0.98), y: fold(m.y + m.vy * t, 0.03, 0.97) }));
    const nL = pos.filter((p) => p.x < 0.5).length, nR = n - nL;
    const lnW = lnFact(n) - lnFact(nL) - lnFact(nR), S = KB * lnW;
    topline(ctx, dt < 0 ? `Before the partition lifts, all ${n} molecules are on the left: $W = 1$.`
      : `Left : right $= ${nL} : ${nR}$, and that split can be made in $W = ${wTex(lnW)}$ ways.`);
    /* the box; the partition rises out of it over 0.4 s */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.fillRect(B.l, B.t, B.r - B.l, B.b - B.t); ctx.restore();
    const lift = Math.max(0, Math.min(1, dt / 0.4)), py = B.t - lift * (B.b - B.t + 20);
    if (lift < 1) line(ctx, X(0.5), Math.max(B.t, py), X(0.5), Math.max(B.t, py + B.b - B.t), PAL.ink, 6);
    line(ctx, X(0.5), B.b, X(0.5), B.b + 14, alpha(PAL.ink, 0.4), 2);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.strokeRect(B.l, B.t, B.r - B.l, B.b - B.t); ctx.restore();
    if (dt < 0.6) { const a = Math.max(0, 1 - Math.max(0, dt) / 0.6);
      text(ctx, 'vacuum', X(0.75), Y(0.5), alpha(PAL.muted, a), { size: 22, align: 'center' }); }
    text(ctx, 'left half', X(0.25), B.b + 34, PAL.muted, { size: 20, align: 'center' });
    text(ctx, 'right half', X(0.75), B.b + 34, PAL.muted, { size: 20, align: 'center' });
    const r = n > 50 ? 6 : n > 20 ? 8 : 11;
    hits.length = 0;
    pos.forEach((p) => { dot(ctx, X(p.x), Y(p.y), PAL.ink, true, r); });
    hits.push({ x: X(0.25), y: Y(0.5), r: 120, name: `the left half, ${nL} molecules` });
    hits.push({ x: X(0.75), y: Y(0.5), r: 120, name: dt < 0 ? 'the empty right half, a vacuum' : `the right half, ${nR} molecules` });
    /* the number of arrangements of every split, as a share of the even split's */
    const lnMax = lnFact(n) - lnFact(Math.floor(n / 2)) - lnFact(n - Math.floor(n / 2));
    const ax = axes(ctx, { l: 800, r: W - 50, t: 140, b: 490 }, [0, 1], [0, 1], { nx: 4, ny: 4, xl: 'share in the left half, nL / N', yl: 'W ÷ W of the even split' });
    const bw = Math.max(2, (ax.X(1) - ax.X(0)) / (n + 1) * 0.8);
    for (let k = 0; k <= n; k++) {
      const h = Math.exp(lnFact(n) - lnFact(k) - lnFact(n - k) - lnMax), x = ax.X(k / n), y = ax.Y(h);
      ctx.save(); ctx.fillStyle = k === nL ? PAL.ink : alpha(PAL.muted, 0.55); ctx.fillRect(x - bw / 2, y, bw, ax.Y(0) - y); ctx.restore();
    }
    const hn = Math.exp(lnW - lnMax);
    dot(ctx, ax.X(nL / n), ax.Y(hn), PAL.ink, true, 9);
    hits.push({ x: ax.X(nL / n), y: ax.Y(hn), r: 16, name: `the split now, ${nL} : ${nR}` });
    hits.push({ x: ax.X(0.5), y: ax.Y(1), r: 16, name: 'the even split, with the most arrangements' });
    hits.push({ x: ax.X(1), y: ax.Y(0), r: 16, name: 'every molecule on the left: W = 1' });
    tex(d.readout, `\\kSent = k\\ln W \\\\ \\kSent = (1.381\\times10^{-23}\\ \\text{J/K})\\,\\ln ${wTex(lnW)} = ${lnW < 1e-9 ? '0' : sci(S, 2)}\\ \\text{J/K}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* ---------- Sim: more realizations of the same average energy ----------
   Two particles on equidistant levels E = n s (n = 1, 2, ...), the spacing s = 1/a^2 in units of the spacing at a0.
   <E> = 4.5 is fixed, and a realization is a pair of levels whose energies add to 2<E> within the grid, both inside
   <E> +/- 2.5: that gives the book's W = 3 at a = a0 and W = 6 at a = 1.41 a0, where the spacing has halved.
   y: energy 0 to 9 (fixed). Still: the slider is the expansion; nothing in the idea moves in time. */
(function () {
  const d = sim('sim-levels-realizations', 600);
  const A = ctl(d.controls, { label: '\\ka', cls: 'length', min: 1, max: 2, step: 0.01, value: 1, fmt: (v) => `${fmt(v, 2)} a₀`,
    detents: [{ v: 1.414, label: 'spacing halved' }], snap: true });
  const EAVG = 4.5, D = 2.5, hits = [];
  F.hover(d.stage, () => hits);
  function pairs(s) {
    const out = [];
    for (let i = Math.max(1, Math.ceil((EAVG - D) / s - 1e-6)); ; i++) {
      const j = Math.round(2 * EAVG / s - i);
      if (j < i) break;
      out.push([i * s, j * s]);
    }
    return out;
  }
  function draw() {
    const { ctx, W } = begin(d.c);
    const a = A.v, s = 1 / (a * a), P = pairs(s), w = P.length;
    topline(ctx, `With the box side at $${fmt(a, 2)}\\,a_0$ the levels are ${fmt(s, 2)} apart, and $W = ${w}$ pairs share $\\kEavg$.`);
    /* the box, drawn to scale with its side */
    const cx = 190, cyy = 330, side = 120 * a;
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.fillRect(cx - side / 2, cyy - side / 2, side, side);
    ctx.strokeStyle = C('length'); ctx.lineWidth = 4; ctx.strokeRect(cx - side / 2, cyy - side / 2, side, side); ctx.restore();
    text(ctx, `a = ${fmt(a, 2)} a₀`, cx, cyy + side / 2 + 34, C('length'), { size: 22, weight: 600, align: 'center' });
    dot(ctx, cx - side / 5, cyy - side / 6, PAL.ink, true, 9); dot(ctx, cx + side / 5, cyy + side / 8, PAL.ink, true, 9);
    hits.length = 0;
    hits.push({ x: cx, y: cyy, r: side / 2, name: 'the box with its two particles' });
    /* the levels, the average and the columns of realizations */
    const ax = axes(ctx, { l: 470, r: W - 50, t: 120, b: 520 }, [0, 1], [0, 9], { nx: 0, ny: 9, xl: '', yl: 'energy (first spacing = 1)', yc: C('energy') });
    for (let n = 1; n * s <= 9 + 1e-9; n++) line(ctx, ax.X(0), ax.Y(n * s), ax.X(1), ax.Y(n * s), alpha(PAL.ink, 0.3), 2);
    line(ctx, ax.X(0), ax.Y(EAVG), ax.X(1), ax.Y(EAVG), C('energy'), 3, [10, 10]);
    text(ctx, '⟨E⟩', ax.X(1) + 8, ax.Y(EAVG), C('energy'), { size: 24, weight: 600, base: 'middle' });
    hits.push({ x: ax.X(0.02), y: ax.Y(EAVG), r: 14, name: 'the average energy ⟨E⟩, the same before and after' });
    P.forEach(([e1, e2], k) => {
      const x = ax.X((k + 1) / (w + 1));
      line(ctx, x, ax.Y(e1), x, ax.Y(e2), alpha(PAL.ink, 0.5), 3);
      dot(ctx, x, ax.Y(e1), PAL.ink, true, 10); dot(ctx, x, ax.Y(e2), PAL.ink, true, 10);
      if (w <= 6) text(ctx, `W_${k + 1}`, x, ax.Y(0) + 30, PAL.ink, { size: 22, align: 'center' });
      hits.push({ x, y: (ax.Y(e1) + ax.Y(e2)) / 2, r: 18, name: `realization ${k + 1}: the particles at ${fmt(e1, 2)} and ${fmt(e2, 2)}` });
    });
    const S = KB * Math.log(w);
    tex(d.readout, `W = ${w} \\\\ \\kSent = k\\ln W = (1.381\\times10^{-23}\\ \\text{J/K})\\,\\ln ${w} = ${sci(S, 2)}\\ \\text{J/K}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
