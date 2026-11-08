/* Figures for section 4.3 Observable Quantities Must Be Eigenvalues of Quantum Mechanical Operators. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.3'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, cycle, register, begin, line, dot, text, topline, axes, plot, shade, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const SUB = '₀₁₂₃₄₅₆₇₈₉', sub = (k) => String(k).split('').map((c) => SUB[+c]).join('');
/* the box's normalized eigenfunctions, x in units of L */
const box = (n) => (x) => (x < 0 || x > 1 ? 0 : Math.SQRT2 * Math.sin(n * Math.PI * x));
/* the integral of f over [a, b] by the midpoint rule */
const integ = (f, a, b, K = 2000) => { let s = 0; const h = (b - a) / K; for (let i = 0; i < K; i++) s += f(a + (i + 0.5) * h); return s * h; };

/* =====================================================================
   FIGURE 4.3.1: sigma as the spread of measurements. Still: no time in it.
   A density |psi|^2 with <x> marked and the bands one sigma wide filled,
   each labelled with the share of measurements it holds. Choice of state:
   the book's normal distribution (slider sigma_x, 0.5 to 1.6, x on [-5, 5]
   so the bands to 3 sigma stay in frame, density on [0, 0.9], the tallest
   at sigma 0.5 being 0.80), or the box's psi_1 or psi_2 of Example 4.3.1
   (x in units of L on [0, 1], density on [0, 2.2]; bands past a wall are
   cut there). The shares are integrated from the density. Opens on the
   book's normal curve, sigma = 1: 34.1, 13.6 and 2.1 % per band.
===================================================================== */
(function () {
  const d = sim('sim-sigma', 600);
  const S = F.choice(d.controls, { label: '\\text{state}', options: [{ value: 'g', label: 'normal' }, { value: '1', label: 'box ψ₁' }, { value: '2', label: 'box ψ₂' }],
    value: 'g', aria: 'the state', onInput: () => Sg.show(S.value === 'g') });
  const Sg = ctl(d.controls, { label: '\\ksigx', cls: 'length', min: 0.5, max: 1.6, step: 0.01, value: 1, unit: '', dec: 2, detents: [1], aria: 'the standard deviation' });
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const v = S.value, cp = C('probability-density'), cl = C('length');
    let dens, xr, yr, lo, hi, unit;
    if (v === 'g') { const s = Sg.v; dens = (x) => Math.exp(-x * x / (2 * s * s)) / (Math.sqrt(2 * Math.PI) * s); xr = [-5, 5]; yr = [0, 0.9]; lo = -5; hi = 5; unit = ''; }
    else { const n = +v; dens = (x) => box(n)(x) ** 2; xr = [-0.05, 1.05]; yr = [0, 2.2]; lo = 0; hi = 1; unit = ' L'; }
    const m1 = integ((x) => x * dens(x), lo, hi), m2 = integ((x) => x * x * dens(x), lo, hi), sg = Math.sqrt(m2 - m1 * m1);
    const bx = { l: 170, r: 1250, t: 150, b: 470 };
    const ax = axes(ctx, bx, xr, yr, { nice: true, nx: v === 'g' ? 10 : 0, ny: v === 'g' ? 3 : 2, xl: v === 'g' ? 'position x' : 'position x (L)', yl: 'P = |ψ|²', xc: cl, yc: cp });
    if (v !== 'g') for (const q of [0, 0.5, 1]) text(ctx, q === 0 ? '0' : q === 1 ? 'L' : 'L/2', ax.X(q), bx.b + 26, cl, { size: 17, align: 'center' });
    /* the bands, darkest near the mean */
    const shares = [];
    for (let k = -3; k < 3; k++) {
      const a = Math.max(lo, m1 + k * sg), b = Math.min(hi, m1 + (k + 1) * sg);
      if (b <= a) { shares.push(0); continue; }
      const p = integ(dens, a, b, 600); shares.push(p);
      const depth = k === -1 || k === 0 ? 0.55 : k === -2 || k === 1 ? 0.33 : 0.16;
      shade(ctx, ax, dens, 0, a, b, cp, { alpha: depth });
      const xm = (a + b) / 2, ym = Math.min(yr[1] * 0.92, dens(xm)), ytop = Math.min(yr[1] * 0.92, Math.max(dens(a), dens(xm), dens(b))), inner = ax.Y(0) - ax.Y(ym) > 60 && ax.X(b) - ax.X(a) > 60;
      text(ctx, `${fmt(100 * p, 1)}%`, ax.X(xm), inner ? ax.Y(ym * 0.4) : ax.Y(ytop) - 16, PAL.ink, { size: 17, align: 'center', base: 'middle' });
      hits.push({ x: ax.X(xm), y: ax.Y(ym / 2), r: 20, name: `between ${k} and ${k + 1} standard deviations from ⟨x⟩: ${fmt(100 * p, 1)}% of measurements` });
    }
    plot(ctx, ax, dens, cp, { w: 5, x: [lo, hi] });
    for (let k = -3; k <= 3; k++) { const x = m1 + k * sg; if (x > lo && x < hi && k) line(ctx, ax.X(x), bx.t + 20, ax.X(x), bx.b, alpha(cl, 0.5), 2, [4, 8]); }
    line(ctx, ax.X(m1), bx.t + 20, ax.X(m1), bx.b, cl, 3);
    text(ctx, '⟨x⟩', ax.X(m1), bx.t + 14, cl, { size: 22, weight: 600, align: 'center', base: 'bottom' });
    F.hbracket(ctx, ax.X(m1), ax.X(Math.min(hi, m1 + sg)), bx.b + 50, cl, 'σₓ');
    hits.push({ x: ax.X(m1), y: bx.t + 10, r: 18, name: `the expectation value ⟨x⟩ = ${fmt(m1, 2)}${unit}` });
    const within = shares[2] + shares[3];
    topline(ctx, `${fmt(100 * within, 1)}% of measurements land within one standard deviation of $\\kxavg$.`);
    tex(d.readout, `\\sigma^2_x = \\langle \\kx^2\\rangle - \\kxavg^2 \\\\ \\sigma^2_x = ${fmt(m2, 3)} - (${fmt(m1, 3)})^2 = ${fmt(sg * sg, 3)}${unit ? '\\ \\kL^2' : ''} \\\\ \\ksigx = ${fmt(sg, 3)}${unit ? '\\ \\kL' : ''}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: a state built from the box's eigenstates (Equation 4.3.11). Still:
   the number of terms is the variable, not time. Two states in the box,
   both zero at the walls and normalized: a tent, sqrt(12) x up to L/2 and
   sqrt(12)(1 - x) after (its odd-n weights only, |c_1|^2 = 0.986), and a
   lopsided lump, sqrt(105) x^2 (1 - x). Slider N, 1 to 20 terms, opening on
   3. Left: the state dashed in ink and the partial sum of c_i psi_i
   stroked; right: the bars |c_i|^2 for i = 1 to 12, the first N lit.
   x in L; psi on [-0.6, 2.4] (the lump peaks at 1.95, the tent at 1.73).
===================================================================== */
(function () {
  const d = sim('sim-expansion', 560);
  const S = F.choice(d.controls, { label: '\\kpsi', options: [{ value: 'tent', label: 'tent' }, { value: 'lump', label: 'lopsided' }], value: 'tent', aria: 'the state' });
  const Nn = ctl(d.controls, { label: 'N', cls: '', min: 1, max: 20, step: 1, value: 3, unit: '', dec: 0, detents: [1, 20], aria: 'the number of eigenstates in the sum' });
  const states = {
    tent: (x) => (x < 0 || x > 1 ? 0 : x < 0.5 ? Math.sqrt(12) * x : Math.sqrt(12) * (1 - x)),
    lump: (x) => (x < 0 || x > 1 ? 0 : Math.sqrt(105) * x * x * (1 - x)),
  };
  const coef = {};
  for (const k of Object.keys(states)) coef[k] = Array.from({ length: 20 }, (_, i) => integ((x) => box(i + 1)(x) * states[k](x), 0, 1, 4000));
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const v = S.value, N = Math.round(Nn.v), c = coef[v], cw = C('wavefunction'), cl = C('length');
    const sum = (x) => { let s = 0; for (let i = 0; i < N; i++) s += c[i] * box(i + 1)(x); return s; };
    const L = { l: 150, r: 850, t: 120, b: 450 };
    const ax = axes(ctx, L, [0, 1], [-1, 2], { nice: true, nx: 0, ny: 3, xl: 'position x (L)', yl: 'ψ', xc: cl, yc: cw });
    for (const q of [0, 0.5, 1]) text(ctx, q === 0 ? '0' : q === 1 ? 'L' : 'L/2', ax.X(q), L.b + 26, cl, { size: 17, align: 'center' });
    line(ctx, L.l, ax.Y(0), L.r, ax.Y(0), alpha(PAL.ink, 0.3), 2);
    plot(ctx, ax, states[v], alpha(PAL.ink, 0.6), { w: 3, dash: [10, 10], x: [0, 1] });
    plot(ctx, ax, sum, cw, { w: 5, x: [0, 1] });
    F.legend(ctx, ax, [{ s: 'the state ψ', color: alpha(PAL.ink, 0.6), w: 3, dash: [10, 10] }, { s: `sum of ${N} term${N === 1 ? '' : 's'}`, color: cw, w: 5 }], { corner: 'above' });
    hits.push({ x: ax.X(v === 'tent' ? 0.5 : 0.67), y: ax.Y(states[v](v === 'tent' ? 0.5 : 0.67)), r: 18, name: 'the state ψ being built' });
    /* the bars */
    const B = { l: 960, r: 1310, t: 120, b: 450 };
    const bx = axes(ctx, B, [0.4, 12.6], [0, 1], { nice: true, nx: 0, ny: 2, xl: 'i', yl: '|cᵢ|²', xc: PAL.ink, yc: PAL.ink });
    const wbar = (bx.X(1) - bx.X(0)) * 0.7;
    for (let i = 1; i <= 12; i++) {
      const p = c[i - 1] * c[i - 1], y = bx.Y(p), on = i <= N;
      ctx.save(); ctx.fillStyle = on ? cw : alpha(cw, 0.2); ctx.fillRect(bx.X(i) - wbar / 2, y, wbar, B.b - y); ctx.restore();
      if (i <= 3 || i % 3 === 0) text(ctx, String(i), bx.X(i), B.b + 24, PAL.ink, { size: 17, align: 'center' });
      hits.push({ x: bx.X(i), y: Math.min(y, B.b - 10), r: 14, name: `|c${sub(i)}|² = ${fmt(p, 4)}, the chance that a measurement of the energy gives E${sub(i)}` });
    }
    let tot = 0; for (let i = 0; i < N; i++) tot += c[i] * c[i];
    const cN = c[N - 1];
    topline(ctx, `The first ${N} eigenstate${N === 1 ? '' : 's'} carry ${fmt(100 * tot, 2)}% of the state.`);
    tex(d.readout, `c_{${N}} = \\int_0^{\\kL} \\kpsi_{${N}}^{\\ast}\\,\\kpsi\\,d\\kx = ${fmt(Math.abs(cN) < 5e-5 ? 0 : cN, 4)} \\\\ \\sum_{i=1}^{${N}} |c_i|^2 = ${fmt(tot, 4)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE (the note's two images, folded): measurement collapses a spread
   state. Moving: a measurement is an event in time. Three systems are
   prepared alike and each is measured once; one cycle is three
   measurements of 2 s of model time each (6 s, held 1.2 s). In each: the
   density sits (0 to 0.6 s), the probe fires at x_k, the density narrows
   onto a spike there (0.6 to 1.4 s), and it is held; the next system then
   starts from the prepared state again (the spike widens back, 0 to 0.4 s).
   The spread state is a normal density, sigma 0.8, on x in [-4, 4]; its
   three results are fixed draws from it, -1.20, 0.70 and 0.15, so every
   time of the cycle has one state. The eigenstate is a spike at 0.50
   (drawn with width 0.15 so it shows); every result is 0.50. The results
   pile up on a strip below. Density on [0, 2.8].
===================================================================== */
(function () {
  const d = sim('sim-collapse', 600);
  const S = F.choice(d.controls, { label: '\\text{state}', options: [{ value: 'spread', label: 'spread' }, { value: 'eigen', label: 'position eigenstate' }],
    value: 'spread', aria: 'the state measured', onInput: () => cy.reset() });
  const T = 6, cy = cycle(() => T, 1.2);
  const g = (m, s) => (x) => Math.exp(-((x - m) ** 2) / (2 * s * s)) / (Math.sqrt(2 * Math.PI) * s);
  const SP = 0.15, RES = { spread: [-1.2, 0.7, 0.15], eigen: [0.5, 0.5, 0.5] };
  const ease = (u) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u));
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const v = S.value, cp = C('probability-density'), cl = C('length');
    const t = Math.min(cy.now(), T - 1e-9), k = Math.floor(t / 2), u = t - 2 * k, xs = RES[v];
    const prep = v === 'spread' ? g(0, 0.8) : g(0.5, SP);
    /* how far the density has narrowed onto x_k, and how far the last spike has widened back */
    const into = ease((u - 0.6) / 0.8), back = k > 0 ? 1 - ease(u / 0.4) : 0;
    const dens = (x) => {
      if (u < 0.6 && back > 0) return back * g(xs[k - 1], SP)(x) + (1 - back) * prep(x);
      return (1 - into) * prep(x) + into * g(xs[k], SP)(x);
    };
    const bx = { l: 170, r: 1250, t: 120, b: 400 };
    const ax = axes(ctx, bx, [-4, 4], [0, 2.8], { nice: true, nx: 0, ny: 2, xl: '', yl: 'P = |ψ|²', yc: cp });
    shade(ctx, ax, dens, 0, -4, 4, cp, { alpha: 0.35 });
    plot(ctx, ax, dens, cp, { w: 4 });
    const fired = u >= 0.6;
    if (fired) {
      const flash = Math.max(0, 1 - (u - 0.6) / 0.6);
      line(ctx, ax.X(xs[k]), bx.t, ax.X(xs[k]), bx.b, alpha(cl, 0.35 + 0.6 * flash), 3);
    }
    /* the results so far, on a strip */
    const sy = 520;
    line(ctx, ax.X(-4), sy, ax.X(4), sy, alpha(PAL.ink, 0.5), 2);
    for (let x = -4; x <= 4; x += 1) { line(ctx, ax.X(x), sy - 6, ax.X(x), sy + 6, alpha(PAL.ink, 0.5), 2); text(ctx, fmt(x, 0), ax.X(x), sy + 28, cl, { size: 17, align: 'center' }); }
    text(ctx, 'measured x', ax.X(4) + 14, sy, cl, { size: 20, weight: 600, base: 'middle' });
    const done = []; for (let j = 0; j < 3; j++) if (t >= 2 * j + 0.6) done.push(j);
    const seen = {};
    done.forEach((j) => {
      const key = xs[j].toFixed(2); seen[key] = (seen[key] || 0) + 1;
      const y = sy - 18 - 24 * (seen[key] - 1);
      dot(ctx, ax.X(xs[j]), y, cl, j === k && fired, 10);
      text(ctx, String(j + 1), ax.X(xs[j]) + 16, y, PAL.ink, { size: 17, base: 'middle' });
      hits.push({ x: ax.X(xs[j]), y, r: 14, name: `measurement ${j + 1}: x = ${fmt(xs[j], 2)}` });
    });
    hits.push({ x: ax.X(v === 'spread' ? 0 : 0.5), y: ax.Y(0.3), r: 24, name: v === 'spread' ? 'the density of the prepared state, spread over x' : 'the density of a position eigenstate, one spike' });
    const n = k + 1;
    if (!fired) topline(ctx, k === 0 ? `System 1 is prepared; nothing has been measured yet.` : `System ${n} is prepared in the same state as the others.`);
    else if (v === 'spread') topline(ctx, `Measurement ${n} finds the particle at $\\kx = ${fmt(xs[k], 2)}$, and the density collapses there.`);
    else topline(ctx, `Measurement ${n} finds $\\kx = 0.50$ again, and the density does not change.`);
    const lines = done.map((j) => `\\kx_{${j + 1}} = ${fmt(xs[j], 2)}`);
    tex(d.readout, [`\\kPd(\\kx) = |\\kpsi(\\kx)|^2`].concat(lines).join(' \\\\ '), false, { values: false });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
