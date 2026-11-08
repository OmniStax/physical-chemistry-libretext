/* Figures for section 3.7 The Average Momentum of a Particle in a Box is Zero. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.7'] = function (root, F) {
const { tex, C, PAL, alpha, register, begin, line, arrow, dot, text, topline, axes, plot, shade, cycle } = F;
const sim = (id, H) => F.sim(root, id, H);
const frac = (v) => (v === 0 ? '0' : v === 1 ? 'L' : v === 0.5 ? 'L/2' : v === 0.25 ? 'L/4' : '3L/4');
const nOptions = (k) => Array.from({ length: k }, (_, i) => ({ value: String(i + 1), label: `n = ${i + 1}` }));

/* ---------- Figure 3.7.1: the average position as a balance point ----------
   Top: psi_n = sqrt(2/L) sin(n pi x / L), in 1/sqrt(L), y -2..2. Below: |psi_n|^2 in 1/L,
   0 to 2.2, filled, standing on a fulcrum at <x> = L/2. Dots mark the most probable positions,
   x = (2j - 1) L / 2n. The book draws n = 1 (its two panels A and B), which is the default.
   Still: a choice of state, no time. */
(function () {
  const d = sim('sim-balance', 700);
  const N = F.choice(d.controls, { label: 'n', options: nOptions(5), value: '1', aria: 'the quantum number of the state' });
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const n = +N.value, psi = (x) => Math.SQRT2 * Math.sin(n * Math.PI * x), rho = (x) => psi(x) * psi(x);
    const cw = C('wavefunction'), cp = C('probability-density'), cl = C('length');
    const top = { l: 170, r: 1290, t: 110, b: 250 }, bot = { l: 170, r: 1290, t: 300, b: 580 };
    const ax1 = axes(ctx, top, [0, 1], [-2, 2], { nx: 0, ny: 2, xl: '', yl: 'ψ (1/√L)', yc: cw });
    line(ctx, top.l, ax1.Y(0), top.r, ax1.Y(0), alpha(PAL.ink, 0.35), 2);
    plot(ctx, ax1, psi, cw, { w: 4 });
    const ax = axes(ctx, bot, [0, 1], [0, 2.2], { nx: 4, ny: 2, fx: (v) => (v === 0.5 ? '' : frac(v)), xl: 'position x', yl: '|ψ|² (1/L)', xc: cl, yc: cp });
    shade(ctx, ax, rho, 0, 0, 1, cp, { alpha: 0.3 });
    plot(ctx, ax, rho, cp, { w: 5 });
    hits.length = 0;
    /* the most probable positions */
    for (let j = 1; j <= n; j++) {
      const xm = (2 * j - 1) / (2 * n);
      dot(ctx, ax.X(xm), ax.Y(2), cp, false, 9);
      hits.push({ x: ax.X(xm), y: ax.Y(2), r: 14, name: `a most probable position, x = ${(2 * j - 1)}L/${2 * n}` });
    }
    /* the fulcrum at the average */
    const fx = ax.X(0.5), fy = bot.b;
    ctx.save(); ctx.fillStyle = cl; ctx.beginPath(); ctx.moveTo(fx, fy + 2); ctx.lineTo(fx - 22, fy + 38); ctx.lineTo(fx + 22, fy + 38); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, fx, bot.t, fx, fy, alpha(cl, 0.7), 3, [10, 10]);
    text(ctx, '⟨x⟩ = L/2', fx + 34, fy + 26, cl, { size: 22, weight: 600, align: 'left', bg: PAL.panel });
    hits.push({ x: fx, y: fy + 20, r: 22, name: 'the balance point of the density, the average position ⟨x⟩ = L/2' });
    if (n % 2 === 0) {
      dot(ctx, fx, ax.Y(0), PAL.ink, false, 10);
      hits.push({ x: fx, y: ax.Y(0), r: 14, name: 'a node at the center: the particle is never found at L/2' });
    }
    topline(ctx, n === 1
      ? 'For $n = 1$ the center is both the most probable position and the average, $\\kxavg = \\kL/2$.'
      : n % 2 === 0
        ? `For $n = ${n}$ the density is zero at the center, yet it balances there: $\\kxavg = \\kL/2$.`
        : `For $n = ${n}$ the density has ${n} peaks, and it still balances at $\\kxavg = \\kL/2$.`);
    tex(d.readout, `\\kxavg = \\int_0^{\\kL} \\kpsi_{${n}}^*\\,\\kx\\,\\kpsi_{${n}}\\,d\\kx \\\\ \\kxavg = \\dfrac{2}{\\kL}\\int_0^{\\kL} \\kx\\sin^2\\left(\\dfrac{${n === 1 ? '' : n}\\pi\\kx}{\\kL}\\right)d\\kx = \\dfrac{\\kL}{2}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- Figure 3.7.2: two momentum waves make the standing wave ----------
   Re Psi_n(x, t) = sin(kx) cos(wt) = 1/2 sin(kx - wt) + 1/2 sin(kx + wt), with k = n pi / L,
   in units of sqrt(2/L). The half running right (momentum +hbar k) and the half running left
   (-hbar k) are the two referents, thin and dashed; their sum, the box's wavefunction, is solid
   and stands still between fixed nodes. Moving: one loop is one period of the phase, 5 s drawn.
   The arrows ride on a crest of each travelling wave (kinematic). x: 0 to L; y: -1 to 1. */
(function () {
  const d = sim('sim-standing', 620);
  const N = F.choice(d.controls, { label: 'n', options: nOptions(4), value: '2', aria: 'the quantum number of the state', onInput: () => cy.reset() });
  const LOOP = 5;
  const cy = cycle(() => LOOP, 0);
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const n = +N.value, k = n * Math.PI, wt = 2 * Math.PI * (cy.now() / LOOP);
    const cw = C('wavefunction'), cr = F.ref('wave-right'), cL = F.ref('wave-left');
    const right = (x) => 0.5 * Math.sin(k * x - wt), left = (x) => 0.5 * Math.sin(k * x + wt), sum = (x) => right(x) + left(x);
    const bx = { l: 150, r: 1300, t: 140, b: 540 };
    const ax = axes(ctx, bx, [0, 1], [-1, 1], { nx: 4, ny: 4, fx: frac, fy: (v) => F.fmt(v, 1), xl: 'position x', yl: 'real part of Ψ (√(2/L))', xc: C('length'), yc: cw });
    line(ctx, bx.l, ax.Y(0), bx.r, ax.Y(0), alpha(PAL.ink, 0.3), 2);
    /* the walls */
    line(ctx, ax.X(0), bx.t + 10, ax.X(0), bx.b, PAL.ink, 5);
    line(ctx, ax.X(1), bx.t + 10, ax.X(1), bx.b, PAL.ink, 5);
    plot(ctx, ax, right, cr, { w: 3, dash: [10, 8] });
    plot(ctx, ax, left, cL, { w: 3, dash: [10, 8] });
    plot(ctx, ax, sum, cw, { w: 5 });
    hits.length = 0;
    for (let j = 1; j < n; j++) { dot(ctx, ax.X(j / n), ax.Y(0), PAL.ink, true, 7); hits.push({ x: ax.X(j / n), y: ax.Y(0), r: 12, name: `a node at x = ${j}L/${n}: the sum is zero here at every moment` }); }
    /* each travelling wave's direction, riding on one of its crests */
    const crest = (sgn) => { /* a crest or trough, k x -/+ wt = pi/2 + pi m, the one nearest the middle; they are L/n apart */
      let best = null;
      for (let m = -6; m <= 12; m++) { const x = (Math.PI / 2 + Math.PI * m + sgn * wt) / k; if (x > 0.04 && x < 0.96 && (best === null || Math.abs(x - 0.5) < Math.abs(best - 0.5))) best = x; }
      return best;
    };
    const ride = (x, f, c, dir, name) => {
      if (x === null) return;
      const v = f(x), y = ax.Y(v) + (v >= 0 ? -30 : 30);
      arrow(ctx, ax.X(x) - dir * 36, y, ax.X(x) + dir * 36, y, c, 4);
      hits.push({ x: ax.X(x), y, r: 26, name });
    };
    ride(crest(1), right, cr, 1, 'the wave moving right, e^{ikx}, momentum +ħk');
    ride(crest(-1), left, cL, -1, 'the wave moving left, e^{−ikx}, momentum −ħk');
    F.legend(ctx, ax, [{ s: 'moving right, p = +ħk', color: cr, w: 3, dash: [10, 8] }, { s: 'moving left, p = −ħk', color: cL, w: 3, dash: [10, 8] }, { s: 'their sum', color: cw, w: 5 }], { corner: 'above' });
    const kt = n === 1 ? '\\pi' : `${n}\\pi`;
    topline(ctx, `In state $n = ${n}$ the two waves carry momenta $+\\hbar\\kk$ and $-\\hbar\\kk$, so their average is zero, while their sum stands still${n > 1 ? ` with ${n - 1} fixed node${n > 2 ? 's' : ''}` : ''}.`);
    tex(d.readout, `\\sin(\\kk\\kx) = \\dfrac{e^{i\\kk\\kx} - e^{-i\\kk\\kx}}{2i} \\\\ \\kp = \\pm\\hbar\\kk = \\pm\\dfrac{${kt}\\hbar}{\\kL}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
