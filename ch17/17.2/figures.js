/* Figures for section 17.2 The Boltzmann Distribution represents a Thermally Equilibrated Distribution. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['17.2'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, cycle, register, begin, line, text, topline, axes, plot, legend, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- Sim: quanta passed at random settle into the Boltzmann distribution ----------
   A oscillators share nbar*A quanta (energies e_j = j quanta). The run starts with every oscillator
   holding nbar quanta, one distribution with W = 1. At each attempt a random oscillator passes one
   quantum, if it has one, to another chosen at random: A and E_total stay fixed, the two constraints
   (17.2.2) and (17.2.3). Top: one column per oscillator, its height the quanta it holds (cut at 14).
   Bottom left: the histogram a_j/A against j, x 0 to 15, y 0 to 0.6 (nbar = 1 settles at 0.5 in j = 0;
   the opening bar of 1 is cut at the frame and labelled), with the Boltzmann distribution for this
   mean, (1 - x) x^j with x = nbar/(1 + nbar), dashed. Bottom right: ln W per oscillator against the
   attempts per oscillator, x 0 to 25, y 0 to 3 (the exponential's ln W/A at nbar = 4 is 2.50), its
   ceiling, the ln W of the Boltzmann distribution, dashed.
   Moving: the quanta move. One loop is 25 attempts per oscillator in 6 s; the run is seeded, so the
   state is a function of the transport's time and replays exactly when scrubbed back. */
(function () {
  const d = sim('sim-quanta-exchange', 640);
  const A = ctl(d.controls, { label: 'A', cls: '', min: 20, max: 400, step: 10, value: 100, unit: '', dec: 0, onInput: reset });
  const NB = ctl(d.controls, { label: '\\text{quanta each}', cls: '', min: 1, max: 4, step: 1, value: 2, unit: '', dec: 0, onInput: reset });
  const LOOP = 6, SWEEPS = 25, JMAX = 15, CUT = 14;
  const cy = cycle(() => LOOP, 1.2);
  const hov = []; F.hover(d.stage, () => hov);
  /* ln n! by table, and ln Gamma(z + 1) for the continuous ceiling (Stirling's series past 8) */
  const lnF = [0]; for (let n = 1; n <= 2000; n++) lnF[n] = lnF[n - 1] + Math.log(n);
  const lnG1 = (z) => { let s = 0; while (z < 8) { z += 1; s -= Math.log(z); } return s + z * Math.log(z) - z + 0.5 * Math.log(2 * Math.PI * z) + 1 / (12 * z) - 1 / (360 * z ** 3); };
  const rng = (seed) => () => { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  let n = [], a = [], done = 0, rand = rng(1), trace = [], last = [-1, -1];
  const lnW = () => { let s = lnF[n.length]; for (const c of a) if (c) s -= lnF[c]; return s; };
  function reset() {
    const N = A.v, nb = NB.v;
    n = new Array(N).fill(nb); a = new Array(nb * N + 1).fill(0); a[nb] = N;
    done = 0; rand = rng(1); trace = [[0, 0]]; last = [-1, -1]; cy.reset();
  }
  function advance(K) {
    const N = n.length, every = Math.max(1, Math.round(N / 20));
    while (done < K) {
      const i = Math.floor(rand() * N); let k = Math.floor(rand() * (N - 1)); if (k >= i) k++;
      if (n[i] > 0) { a[n[i]]--; n[i]--; a[n[i]]++; a[n[k]]--; n[k]++; a[n[k]]++; last = [i, k]; }
      done++;
      if (done % every === 0) trace.push([done / N, lnW() / N]);
    }
  }
  reset();
  function draw() {
    const { ctx, W } = begin(d.c);
    const N = A.v, nb = NB.v;
    if (n.length !== N || a.length !== nb * N + 1) reset();
    const K = Math.floor(Math.min(1, cy.now() / LOOP) * SWEEPS * N);
    if (K < done) { reset(); }
    advance(K);
    const x = nb / (1 + nb), P = (j) => (1 - x) * x ** j;
    let lwMax = lnF[N]; for (let j = 0; j < 200; j++) lwMax -= lnG1(N * P(j));
    const lw = lnW(), s = done / N;
    topline(ctx, `After ${fmt(s, 1)} exchanges per oscillator, $\\ln W = ${fmt(lw, 1)}$; the Boltzmann distribution of the same ${N * nb} quanta has $\\ln W = ${fmt(lwMax, 1)}$.`);
    /* the oscillators, one column each */
    const sx = 90, sw = W - 180, top = 112, base = 262, cw = sw / N, qh = (base - top) / CUT;
    ctx.save();
    for (let i = 0; i < N; i++) {
      const h = Math.min(n[i], CUT) * qh, hot = i === last[0] || i === last[1];
      ctx.fillStyle = hot ? C('energy') : alpha(C('energy'), 0.5);
      ctx.fillRect(sx + i * cw + cw * 0.12, base - h, Math.max(1, cw * 0.76), h);
    }
    ctx.restore();
    line(ctx, sx, base, sx + sw, base, PAL.ink, 2);
    hov.length = 0;
    hov.push({ x: sx + sw / 2, y: base - 30, r: Math.min(sw / 2, 70), name: `${N} oscillators sharing ${N * nb} quanta; a column's height is the quanta it holds` });
    if (last[0] >= 0) hov.push({ x: sx + (last[1] + 0.5) * cw, y: base - Math.min(n[last[1]], CUT) * qh - 8, r: 14, name: 'the oscillator that took the last quantum passed' });
    /* the histogram */
    const bl = { l: 120, r: 640, t: 340, b: 560 };
    const axH = axes(ctx, bl, [0, JMAX + 1], [0, 0.6], { nx: 0, ny: 3, xl: 'quanta held, j', yl: 'fraction a_{j}/A', xc: C('energy'), yc: PAL.ink });
    for (let j = 0; j <= JMAX; j += 5) text(ctx, String(j), axH.X(j + 0.5), bl.b + 26, PAL.muted, { size: 17, align: 'center' });
    ctx.save();
    for (let j = 0; j <= JMAX && j < a.length; j++) {
      const f = a[j] / N; if (!f) continue;
      const x0 = axH.X(j + 0.1), x1 = axH.X(j + 0.9), y = axH.Y(Math.min(0.6, f));
      ctx.fillStyle = alpha(PAL.ink, 0.42); ctx.fillRect(x0, y, x1 - x0, bl.b - y);
      if (f > 0.6) text(ctx, `${fmt(f, 2)}`, (x0 + x1) / 2 + 12, bl.t + 18, PAL.ink, { size: 17, align: 'left' });
    }
    ctx.restore();
    plot(ctx, axH, (u) => P(u - 0.5), C('energy'), { w: 3, dash: [10, 10], x: [0.5, JMAX + 0.5] });
    legend(ctx, axH, [{ s: 'a_{j}/A now', kind: 'swatch', color: alpha(PAL.ink, 0.42) }, { s: 'Boltzmann distribution', color: C('energy'), w: 3, dash: [10, 10] }], { corner: 'tr' });
    /* ln W against the exchanges */
    const br = { l: 820, r: W - 60, t: 340, b: 560 };
    const axW = axes(ctx, br, [0, SWEEPS], [0, 3], { nx: 5, ny: 3, xl: 'exchanges per oscillator', yl: 'ln W per oscillator', xc: PAL.ink, yc: PAL.ink });
    line(ctx, br.l, axW.Y(lwMax / N), br.r, axW.Y(lwMax / N), alpha(C('energy'), 0.8), 3, [10, 10]);
    text(ctx, 'Boltzmann distribution', br.r - 6, axW.Y(lwMax / N) + (lwMax / N > 2.4 ? 22 : -14), C('energy'), { size: 17, align: 'right' });
    if (trace.length > 1) {
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath();
      trace.forEach(([u, v], i) => { const X = axW.X(u), Y = axW.Y(v); if (i) ctx.lineTo(X, Y); else ctx.moveTo(X, Y); });
      ctx.stroke(); ctx.restore();
    }
    hov.push({ x: axW.X(s), y: axW.Y(lw / N), r: 14, name: `ln W of the present distribution, ${fmt(lw, 1)}` });
    tex(d.readout, `\\ln W = \\ln A! - \\sum_j \\ln a_j! = ${fmt(lw, 1)} \\\\ \\kEtotal = \\sum_j a_j \\kej = ${N * nb}\\ \\text{quanta}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* ---------- Figure 17.2.1 + 17.2.2: three ladders switching on with temperature ----------
   The book's three ladders side by side, each evenly spaced and drawn on its own energy scale (twelve
   levels a column): rotational 0.012, vibrational 12, electronic 120 kJ/mol. On each level a bar of
   length e^(-j dE/RT), its population beside the ground level's, and from the ground up a band of
   height k_BT on that ladder's scale, cut at the top level. q = 1/(1 - e^(-dE/RT)) under each.
   T on a log slider, 1 K to 20 000 K, opening at the book's 300 K (k_BT = 2.49 kJ/mol). The point: a
   ladder is populated only where k_BT is not small beside its spacing, so warming switches the three
   on at their own temperatures. Still: no time in it. */
(function () {
  const d = sim('sim-level-populations', 640);
  const LG = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: 0, max: Math.log10(20000), step: 0.001, value: Math.log10(300), unit: 'K',
    fmt: (lg) => { const t = 10 ** lg; return `${t < 10 ? fmt(t, 1) : fmt(t, 0)} K`; }, detents: [{ v: Math.log10(300), label: '300 K' }], snap: true });
  const R = 8.314e-3;                 /* kJ mol^-1 K^-1 */
  const LAD = [{ name: 'rotational', dE: 0.012 }, { name: 'vibrational', dE: 12 }, { name: 'electronic', dE: 120 }];
  const LEVELS = 12, hov = []; F.hover(d.stage, () => hov);
  const sig = (v) => v >= 100 ? fmt(v, 0) : v >= 10 ? fmt(v, 1) : v >= 1 ? fmt(v, 3) : fmt(v, 3);
  const sci = (v) => { if (v === 0) return '0'; const e = Math.floor(Math.log10(v)); return e >= -2 ? fmt(v, Math.max(0, 2 - e)) : `${fmt(v / 10 ** e, 1)}\\times10^{${e}}`; };
  function draw() {
    const { ctx, W } = begin(d.c);
    const T = 10 ** LG.v, kT = R * T;
    const qs = LAD.map((L) => 1 / (1 - Math.exp(-L.dE / kT)));
    topline(ctx, `At $\\kT = ${T < 10 ? fmt(T, 1) : fmt(T, 0)}$ K, $k_B\\kT = ${sci(kT)}$ kJ/mol, and $\\kqmol$ counts ${qs.map(sig).join(', ')} levels within reach on the three ladders.`);
    hov.length = 0;
    const colW = (W - 160) / 3, y0 = 510, gap = 28;
    LAD.forEach((L, k) => {
      const cx = 80 + colW * (k + 0.5), xl = cx - 130, xr = cx + 130, x = L.dE / kT;
      text(ctx, L.name, cx, 140, PAL.ink, { size: 22, weight: 600, align: 'center' });
      /* the band of height k_BT on this ladder's scale */
      const bh = Math.min(LEVELS - 0.5, kT / L.dE) * gap;
      ctx.save(); ctx.fillStyle = alpha(C('temperature'), 0.13); ctx.fillRect(xl - 14, y0 - bh, xr - xl + 28, bh); ctx.restore();
      if (kT / L.dE < LEVELS - 0.5) {
        line(ctx, xl - 14, y0 - bh, xr + 14, y0 - bh, alpha(C('temperature'), 0.8), 2, [4, 8]);
        if (bh > 18) text(ctx, 'k_{B}T', xr + 20, y0 - bh + 6, C('temperature'), { size: 17 });
      } else text(ctx, 'k_{B}T is higher still', cx, y0 - (LEVELS - 0.5) * gap - 14, C('temperature'), { size: 17, align: 'center' });
      for (let j = 0; j < LEVELS; j++) {
        const y = y0 - j * gap, f = Math.exp(-j * x);
        line(ctx, xl, y, xr, y, alpha(C('energy'), 0.85), 2);
        if (f > 0.002) { ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.5); ctx.fillRect(xl, y - 9, (xr - xl) * f, 8); ctx.restore(); }
      }
      text(ctx, `ΔE = ${L.dE} kJ/mol`, cx, y0 + 34, C('energy'), { size: 17, align: 'center' });
      text(ctx, `ΔE/k_{B}T = ${x >= 1000 ? fmt(x, 0) : x >= 10 ? fmt(x, 1) : x >= 0.1 ? fmt(x, 2) : fmt(x, 4)}`, cx, y0 + 60, PAL.muted, { size: 17, align: 'center' });
      text(ctx, `q = ${sig(qs[k])}`, cx, y0 + 92, C('partition-function'), { size: 22, weight: 600, align: 'center' });
      hov.push({ x: cx, y: y0 - 4, r: 16, name: `the ground level of the ${L.name} ladder` });
      hov.push({ x: xl + 30, y: y0 - gap - 4, r: 16, name: `the first ${L.name} level holds ${sci(Math.exp(-x))} of the ground level's population` });
    });
    const xv = LAD[1].dE / kT, q = qs[1];
    tex(d.readout, `\\kqmol = \\sum_j e^{-\\kej/k_B\\kT} \\\\ \\kqmol_{\\text{vib}} = 1 + e^{-${fmt(xv, xv >= 10 ? 1 : 2)}} + e^{-${fmt(2 * xv, 2 * xv >= 10 ? 1 : 2)}} + \\cdots = ${sig(q)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
