/* Figures for section 8.3 Hartree-Fock Equations are Solved by the Self-Consistent Field Method. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.3'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, arrow, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- a Hartree calculation for helium, in atomic units ----------
   Both electrons share one 1s orbital, so each moves in the field of the nucleus (Z = 2) and of the other
   electron smeared into its charge density. u(r) = r R(r) on a uniform radial grid, h = 0.01 bohr out to
   15 bohr; -u''/2 + [-Z/r + V_el(r)] u = eps u by finite differences, the lowest root found by bisection on
   the Sturm count and its vector by inverse iteration. V_el(r) = (1/r) int_0^r u^2 + int_r^inf u^2/r'.
   It settles on eps = -0.9178 E_h and E = 2 eps - J = -2.8613 E_h (the Hartree-Fock limit is -0.9180 and
   -2.8617; the grid costs the last digit). */
const Z = 2, h = 0.01, N = 1500;
const R = Float64Array.from({ length: N }, (_, i) => (i + 1) * h);
const integ = (f) => { let s = 0; for (let i = 0; i < N; i++) s += f[i]; return s * h; };
function potential(P) {
  const V = new Float64Array(N), outer = new Float64Array(N + 1); let inner = 0;
  for (let i = N - 1; i >= 0; i--) outer[i] = outer[i + 1] + P[i] / R[i] * h;
  for (let i = 0; i < N; i++) { inner += P[i] * h; V[i] = inner / R[i] + outer[i + 1]; }
  return V;
}
function lowest(v) {
  const off = -0.5 / (h * h), d = Float64Array.from(v, (x) => 1 / (h * h) + x);
  const count = (x) => { let q = d[0] - x, c = q < 0 ? 1 : 0; for (let i = 1; i < N; i++) { q = d[i] - x - off * off / (q === 0 ? 1e-300 : q); if (q < 0) c++; } return c; };
  let lo = -Z * Z, hi = 0;
  for (let k = 0; k < 56; k++) { const m = (lo + hi) / 2; if (count(m) >= 1) hi = m; else lo = m; }
  const eps = (lo + hi) / 2, s = eps - 1e-7; let u = new Float64Array(N).fill(1);
  for (let it = 0; it < 3; it++) {
    const c = new Float64Array(N), y = new Float64Array(N), x = new Float64Array(N);
    let b = d[0] - s; c[0] = off / b; y[0] = u[0] / b;
    for (let i = 1; i < N; i++) { b = d[i] - s - off * c[i - 1]; c[i] = off / b; y[i] = (u[i] - off * y[i - 1]) / b; }
    x[N - 1] = y[N - 1]; for (let i = N - 2; i >= 0; i--) x[i] = y[i] - c[i] * x[i + 1];
    const n = Math.sqrt(integ(x.map((q) => q * q))); u = x.map((q) => q / n);
  }
  if (u[50] < 0) u = u.map((q) => -q);
  return { eps, u };
}
/* the loop: from a guessed density to the next, until the density stops changing (TOL) or KMAX passes */
const TOL = 1e-3, KMAX = 14;
function run(zeta, mix) {
  let Pin = Float64Array.from(R, (r) => 4 * zeta ** 3 * r * r * Math.exp(-2 * zeta * r));
  const out = [];
  for (let k = 1; k <= KMAX; k++) {
    const V = potential(Pin), { eps, u } = lowest(Float64Array.from(R, (r, i) => -Z / r + V[i]));
    const Pout = u.map((q) => q * q), J = integ(Pout.map((p, i) => p * V[i])), Vn = integ(Pout.map((p, i) => -Z * p / R[i]));
    let dr = 0; for (let i = 0; i < N; i++) dr = Math.max(dr, Math.abs(Pout[i] - Pin[i]));
    out.push({ k, Pin, V, Pout, eps, J, Vn, KE: eps - Vn - J, E: 2 * eps - J, dr });
    if (dr < TOL) break;
    Pin = Pin.map((p, i) => (1 - mix) * p + mix * Pout[i]);
  }
  return out;
}
/* a grid quantity read at r by linear interpolation */
const at = (A, r) => { const x = r / h - 1, i = Math.max(0, Math.min(N - 2, Math.floor(x))), t = x - i; return A[i] * (1 - t) + A[i + 1] * t; };

/* ---------- Figure 8.3.1: the self-consistent field loop, run ----------
   Moving: one transport step is one pass round the loop. Each pass lights the book's boxes in turn: the
   potential of the other electron is built from the density (its curve redrawn), the one-electron equation
   is solved, the new density is drawn over the old, and the two are compared. The orbital energy of each
   pass joins the plot at the bottom right, and the loop stops when the density changes by less than
   0.001 per bohr anywhere. Frames: r 0 to 4 bohr; radial density 0 to 1.8 per bohr (a zeta = 3 guess peaks
   at 1.62); V_el 0 to 3 E_h (V_el(0) = zeta for a 1s guess); eps -1.25 to -0.6 E_h over passes 1 to 14. */
(function () {
  const d = sim('sim-scf', 790);
  const STEP = 0.7;
  let data = [];
  const cy = F.cycle(() => data.length * STEP, 1.2);
  const G = F.choice(d.controls, { label: '\\text{first guess}', key: 'guess', aria: 'the starting guess for the orbital exponent',
    options: [{ value: '1', label: 'ζ = 1' }, { value: '2', label: 'ζ = 2' }, { value: '3', label: 'ζ = 3' }], value: '2',
    onInput: () => { solve(); cy.reset(); } });
  const MIX = ctl(d.controls, { label: '\\text{mixing}', cls: '', key: 'mix', min: 0.3, max: 1, step: 0.05, value: 1, dec: 2,
    onInput: () => { solve(); cy.reset(); } });
  function solve() { data = run(+G.value, MIX.v); }
  solve();
  const BOXES = ['guess ρ', 'potential from ρ', 'solve for ψ and ε', 'new ρ from ψ', 'same as before?', 'stop'];
  function draw() {
    const { ctx, W } = begin(d.c);
    const t = cy.now(), K = data.length, kf = Math.min(K - 1e-9, t / STEP), i = Math.floor(kf), ph = Math.min(1, t / STEP - i);
    const s = data[i], done = t >= K * STEP - 1e-9, conv = data[K - 1].dr < TOL;
    /* which box is lit: the guess opens pass 1, then potential, solve, new density, compare */
    const stage = done ? (conv ? 5 : 4) : ph < 0.25 ? (i === 0 && ph < 0.12 ? 0 : 1) : ph < 0.5 ? 2 : ph < 0.75 ? 3 : 4;
    const shownNew = done || ph >= 0.5, shownEps = done || ph >= 0.75;
    topline(ctx, done
      ? (conv ? `After ${K} passes the density changes by less than 0.001 per bohr: $\\kepsi = ${fmt(s.eps, 4)}\\ E_h$.` : `After ${K} passes the density still changes by ${fmt(s.dr, 4)} per bohr.`)
      : `Pass ${i + 1}: ${shownEps ? `$\\kepsi = ${fmt(s.eps, 4)}\\ E_h$, and the density changed by ${fmt(s.dr, s.dr < 0.01 ? 4 : 3)} per bohr` : 'the other electron\'s potential is built from the density'}.`);
    /* the loop, as the book draws it */
    const bx = 40, bw = 330, bh = 64, y0 = 130, gap = 40;
    const Y = (j) => y0 + j * (bh + gap);
    for (let j = 0; j < BOXES.length; j++) {
      const lit = j === stage, y = Y(j);
      ctx.save(); ctx.beginPath(); ctx.roundRect(bx, y, bw, bh, j === 4 ? 30 : 10);
      ctx.fillStyle = lit ? alpha(C('energy'), 0.16) : PAL.panel; ctx.fill();
      ctx.lineWidth = lit ? 4 : 2; ctx.strokeStyle = lit ? C('energy') : alpha(PAL.ink, 0.45); ctx.stroke(); ctx.restore();
      text(ctx, BOXES[j], bx + bw / 2, y + bh / 2, lit ? PAL.ink : PAL.muted, { size: 22, align: 'center', weight: lit ? 600 : 400 });
      if (j < BOXES.length - 1) arrow(ctx, bx + bw / 2, y + bh + 3, bx + bw / 2, Y(j + 1) - 4, alpha(PAL.ink, 0.5), 3);
    }
    /* "no": back round to the potential */
    const xr = bx + bw + 26;
    line(ctx, bx + bw, Y(4) + bh / 2, xr, Y(4) + bh / 2, alpha(PAL.ink, 0.5), 3);
    line(ctx, xr, Y(4) + bh / 2, xr, Y(1) + bh / 2, alpha(PAL.ink, 0.5), 3);
    arrow(ctx, xr, Y(1) + bh / 2, bx + bw + 4, Y(1) + bh / 2, alpha(PAL.ink, 0.5), 3);
    text(ctx, 'no', xr + 10, Y(4) - 10, PAL.muted, { size: 17 });
    text(ctx, 'yes', bx + bw / 2 + 12, Y(5) - gap / 2, PAL.muted, { size: 17 });
    /* the density: the one the potential was built from, dashed, and the new one */
    const L = 520, Rr = W - 40;
    const a1 = axes(ctx, { l: L, r: Rr, t: 120, b: 270 }, [0, 4], [0, 1.8], { nx: 4, ny: 3, xl: 'r (bohr)', yl: 'radial density (1/bohr)', yc: C('probability-density') });
    plot(ctx, a1, (r) => at(s.Pin, r), alpha(C('probability-density'), 0.6), { w: 3, dash: [10, 10] });
    if (shownNew) {
      const k = done ? 1 : Math.min(1, (ph - 0.5) / 0.15);
      plot(ctx, a1, (r) => at(s.Pin, r) * (1 - k) + at(s.Pout, r) * k, C('probability-density'), { w: 5 });
    }
    F.legend(ctx, a1, [{ s: 'density in', color: alpha(C('probability-density'), 0.6), w: 3, dash: [10, 10] }, { s: 'density out', color: C('probability-density'), w: 5 }], { corner: 'tr' });
    /* the potential of the other electron */
    const prevV = i > 0 ? data[i - 1].V : s.V, kv = done ? 1 : i === 0 ? 1 : Math.min(1, ph / 0.2);
    const a2 = axes(ctx, { l: L, r: Rr, t: 370, b: 500 }, [0, 4], [0, 3], { nx: 4, ny: 3, xl: 'r (bohr)', yl: 'V_el (E_h)', yc: C('energy') });
    plot(ctx, a2, (r) => at(prevV, r) * (1 - kv) + at(s.V, r) * kv, C('energy'), { w: 5 });
    text(ctx, 'potential of the other electron', a2.X(1.3), a2.Y(2.3), C('energy'), { size: 20 });
    /* the orbital energy, pass by pass */
    const a3 = axes(ctx, { l: L, r: Rr, t: 600, b: 730 }, [0, KMAX], [-1.2, -0.6], { nx: 7, ny: 3, xl: 'pass', yl: 'ε (E_h)', yc: C('energy') });
    line(ctx, a3.X(0), a3.Y(-0.9178), a3.X(KMAX), a3.Y(-0.9178), alpha(PAL.ink, 0.35), 2, [10, 10]);
    const pts = data.slice(0, shownEps ? i + 1 : i);
    if (pts.length > 1) { ctx.save(); ctx.strokeStyle = alpha(C('energy'), 0.7); ctx.lineWidth = 3; ctx.beginPath(); pts.forEach((p, j) => (j ? ctx.lineTo(a3.X(p.k), a3.Y(p.eps)) : ctx.moveTo(a3.X(p.k), a3.Y(p.eps)))); ctx.stroke(); ctx.restore(); }
    pts.forEach((p, j) => F.dot(ctx, a3.X(p.k), a3.Y(Math.max(-1.2, Math.min(-0.6, p.eps))), C('energy'), j === pts.length - 1, 8));
    const r = shownEps || i === 0 ? s : data[i - 1];
    tex(d.readout, `\\kepsi = \\kKE + \\langle \\kVnuc \\rangle + \\kJjk \\\\ \\kepsi = ${fmt(r.KE, 4)} ${fmt(r.Vn, 4)} + ${fmt(r.J, 4)} = ${fmt(r.eps, 4)}\\ E_h \\\\ \\kE = 2\\kepsi - \\kJjk = ${fmt(r.E, 4)}\\ E_h`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
