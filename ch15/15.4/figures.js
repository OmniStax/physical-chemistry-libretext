/* Figures for section 15.4 Population Inversion can be Achieved in a Three-Level System. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['15.4'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- Figure 15.4.2 + 15.4.3 + 15.4.4: three levels (and four) under a steady pump ----------
   Rate equations with the events the book keeps, before any lasing light builds up (no stimulated emission yet):
   ruby (lasing 2 -> 1): pump P from 1 to 3, A32 = 20 (short-lived level 3), A21 = 1; time in 1/A21.
     dN3 = P N1 - A32 N3, dN2 = A32 N3 - A21 N2; steady N2/N1 = P/A21, inverted once P > A21 (the special).
   copper vapor (lasing 3 -> 2): pump P from 1 to 3, A32 = 1, A21 = r A32; time in 1/A32.
     dN3 = P N1 - A32 N3, dN2 = A32 N3 - A21 N2; steady N3/N2 = A21/A32, (15.4.3) with rho B32 = 0.
   four-level (lasing 3 -> 2, level 2 above the ground): pump 1 -> 4, A43 = 20, A32 = 1, A21 = 20; time in 1/A32.
     steady N3/N2 = A21/A32 = 20 at any pump.
   The rates 20 and 1 stand for "fast" and "slow"; the book gives none. Graph: N_i/N against t, 0 to 6 time units,
   y 0 to 1. Arrows are the transitions (notation); the dots running along them are atoms making the transition,
   as many as the flux, which is the motion (population flowing). */
(function () {
  const d = sim('sim-three-level', 600);
  const T = 6, FAST = 20;
  const cy = F.cycle(() => T, 1.2);
  const K = F.choice(d.controls, { label: '\\text{laser}', key: 'laser', value: 'ruby', aria: 'the laser',
    options: [{ value: 'ruby', label: 'ruby, 2 → 1' }, { value: 'cu', label: 'copper vapor, 3 → 2' }, { value: 'four', label: 'four-level' }],
    onInput: () => { R.show(K.value === 'cu'); P.mark(K.value === 'ruby' ? [{ at: 0, label: 'pump = A₂₁' }] : []); solve(); cy.reset(); } });
  const unit = () => (K.value === 'ruby' ? 'A₂₁' : 'A₃₂');
  const P = ctl(d.controls, { label: '\\text{pump}', cls: '', key: 'pump', min: -1, max: 1, step: 0.01, value: Math.log10(3), unit: '',
    fmt: (lg) => `${fmt(10 ** lg, 10 ** lg < 1 ? 2 : 1)} ${unit()}`, specials: [{ at: 0, label: 'pump = A₂₁' }], onInput: () => { solve(); cy.reset(); } });
  const R = ctl(d.controls, { label: 'A_{21}/A_{32}', cls: '', key: 'ratio', min: -1, max: 1, step: 0.01, value: Math.log10(3), unit: '',
    fmt: (lg) => fmt(10 ** lg, 10 ** lg < 1 ? 2 : 1), specials: [{ at: 0, label: 'A₂₁ = A₃₂' }], onInput: () => { solve(); cy.reset(); } });
  R.show(false);
  const hits = [];
  F.hover(d.stage, () => hits);
  /* the model of the chosen laser: its levels, its transitions (from, to, rate constant, kind) and the solved populations */
  let M = null;
  function model() {
    const p = 10 ** P.v, r = 10 ** R.v;
    if (K.value === 'ruby') return { n: 3, lase: [2, 1], tr: [[1, 3, p, 'pump'], [3, 2, FAST, 'fast'], [2, 1, 1, 'slow']] };
    if (K.value === 'cu') return { n: 3, lase: [3, 2], tr: [[1, 3, p, 'pump'], [3, 2, 1, 'decay'], [2, 1, r, 'decay']] };
    return { n: 4, lase: [3, 2], tr: [[1, 4, p, 'pump'], [4, 3, FAST, 'fast'], [3, 2, 1, 'slow'], [2, 1, FAST, 'fast']] };
  }
  function solve() {
    const m = model(), n = m.n, h = 0.002, every = 10, N = new Array(n + 1).fill(0); N[1] = 1;
    const f = (y) => { const dy = new Array(n + 1).fill(0); m.tr.forEach(([a, b, k]) => { const fl = k * y[a]; dy[a] -= fl; dy[b] += fl; }); return dy; };
    const S = [N.slice()];
    for (let i = 1; i <= T / h; i++) {
      const k1 = f(N), y2 = N.map((v, j) => v + h / 2 * k1[j]), k2 = f(y2), y3 = N.map((v, j) => v + h / 2 * k2[j]), k3 = f(y3), y4 = N.map((v, j) => v + h * k3[j]), k4 = f(y4);
      for (let j = 1; j <= n; j++) N[j] += h / 6 * (k1[j] + 2 * k2[j] + 2 * k3[j] + k4[j]);
      if (i % every === 0) S.push(N.slice());
    }
    m.S = S; m.dt = h * every; M = m;
  }
  solve();
  const at = (j, t) => { const S = M.S, x = Math.min(S.length - 1, t / M.dt), i = Math.floor(x), q = x - i; return i >= S.length - 1 ? S[S.length - 1][j] : S[i][j] * (1 - q) + S[i + 1][j] * q; };
  const frac = (x) => x - Math.floor(x);
  function draw() {
    const { ctx, W } = begin(d.c);
    const t = Math.min(cy.now(), T), n = M.n, [up, lo] = M.lase, p = 10 ** P.v, r = 10 ** R.v;
    const col = (j) => F.cat(j - 1), cL = C('frequency');
    const end = (j) => M.S[M.S.length - 1][j], ratio = end(up) / Math.max(1e-12, end(lo));
    const lead = K.value === 'ruby' ? `Pumping at ${fmt(p, p < 1 ? 2 : 1)} A₂₁, level 2 settles at ${fmt(ratio, 2)} times the ground state's population`
      : `Level ${up} settles at ${fmt(ratio, ratio < 10 ? 2 : 0)} times the population of level ${lo}`;
    topline(ctx, `${lead}: ${ratio > 1.0005 ? 'inverted' : 'no inversion'}.`);
    /* the ladder: levels on the left, a bar on each as long as its share of the atoms */
    const yOf = n === 3 ? { 1: 530, 2: 330, 3: 160 } : { 1: 530, 2: 400, 3: 250, 4: 140 };
    const lx0 = 130, lx1 = 380, bar = 240;
    for (let j = 1; j <= n; j++) {
      const y = yOf[j], v = at(j, t);
      ctx.save(); ctx.fillStyle = alpha(col(j), 0.55); ctx.fillRect(lx0, y - 28, bar * v, 26); ctx.restore();
      line(ctx, lx0, y, lx1, y, PAL.ink, 4);
      text(ctx, `${j}`, lx0 - 28, y, col(j), { size: 24, weight: 600, align: 'center' });
      hits.length = j === 1 ? 0 : hits.length;
      hits.push({ x: (lx0 + lx1) / 2, y: y - 12, r: 26, name: `level ${j}: N${'₁₂₃₄'[j - 1]}/N = ${fmt(v, 3)}` });
    }
    /* the transitions: the pump up at the left, the decays down at the right; atoms run along them as fast as they flow */
    M.tr.forEach(([a, b, k, kind], i) => {
      const fl = k * at(a, t), isPump = kind === 'pump', isLase = a === up && b === lo;
      const x = isPump ? lx0 + 30 : lx1 - 60 + 32 * (i % 2), y0 = yOf[a] + (isPump ? -4 : 6), y1 = yOf[b] + (isPump ? 6 : -8);
      const c = isLase ? cL : alpha(PAL.ink, 0.75);
      if (isLase) line(ctx, x, y0, x, y1, c, 4, [10, 8]); else arrow(ctx, x, y0, x, y1, c, isPump ? 5 : 4);
      const nd = Math.min(7, Math.round(fl * 14));
      for (let q = 0; q < nd; q++) { const s = frac(t * 1.6 + q / nd); dot(ctx, x, y0 + (y1 - y0) * s, col(a), true, 6); }
      const nm = isPump ? 'pump' : isLase ? 'lasing' : kind === 'fast' ? 'fast' : kind === 'slow' ? 'slow' : '';
      const ly = isPump ? y1 + (y0 - y1) * 0.22 : (y0 + y1) / 2;
      if (nm) text(ctx, nm, x + (isPump ? -14 : 18), ly, isLase ? cL : PAL.muted, { size: 20, align: isPump ? 'right' : 'left' });
      hits.push({ x, y: (y0 + y1) / 2, r: 16, name: `${isPump ? 'pump' : 'decay'} ${a} → ${b}: ${fmt(fl, 3)} N per unit time` });
    });
    /* the populations against time */
    const box = { l: 560, r: W - 50, t: 110, b: 520 };
    const ax = axes(ctx, box, [0, T], [0, 1], { nx: 6, ny: 4, xl: `time t (units of 1/${unit()})`, yl: 'share of the atoms', xc: C('time') });
    for (let j = 1; j <= n; j++) {
      plot(ctx, ax, (s) => at(j, s), col(j), { w: j === up || j === lo ? 5 : 3, x: [0, Math.max(1e-6, t)] });
      dot(ctx, ax.X(t), ax.Y(at(j, t)), col(j), true, 8);
    }
    F.legend(ctx, ax, Array.from({ length: n }, (_, i) => ({ s: `N${'₁₂₃₄'[i]}/N, level ${i + 1}`, color: col(i + 1), w: i + 1 === up || i + 1 === lo ? 5 : 3 })), { corner: 'tr' });
    /* the readout: the steady ratio the figure reaches */
    if (K.value === 'ruby') tex(d.readout, `\\dfrac{N_2}{N_1} = \\dfrac{\\krhonu(\\knuonethree)B_{13}}{A_{21}} = \\dfrac{${fmt(p, 2)}\\,A_{21}}{A_{21}} = ${fmt(p, 2)}`);
    else if (K.value === 'cu') tex(d.readout, `\\dfrac{N_3}{N_2} = \\dfrac{A_{21} + \\krhonu(\\knuthreetwo)B_{32}}{A_{32} + \\krhonu(\\knuthreetwo)B_{32}} = \\dfrac{${fmt(r, 2)}\\,A_{32} + 0}{A_{32} + 0} = ${fmt(r, 2)} \\\\ \\small \\krhonu(\\knuthreetwo) = 0 \\text{ until light at } \\knuthreetwo \\text{ builds up}`);
    else tex(d.readout, `\\dfrac{N_3}{N_2} = \\dfrac{A_{21}}{A_{32}} = \\dfrac{${FAST}\\,A_{32}}{A_{32}} = ${FAST}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1.1), draw });
})();
};
