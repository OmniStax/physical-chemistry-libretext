/* Figures for section 5.6 The Harmonic Oscillator Wavefunctions involve Hermite Polynomials. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.6'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, text, topline, axes, plot, shade, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const SUB = '₀₁₂₃₄₅₆₇₈₉';
const sub = (k) => String(k).split('').map((c) => SUB[+c]).join('');
/* the Hermite polynomials by H_{n+1} = 2x H_n − 2n H_{n−1} (H₀ = 1, H₁ = 2x), the book's list */
function hermite(n, x) { let a = 1, b = 0; for (let k = 0; k < n; k++) { const c = 2 * x * a - 2 * k * b; b = a; a = c; } return a; }
/* the normalized wavefunctions ψ_v = N_v H_v e^(−x²/2) (Equation 5.6.15), by the stable recurrence
   ψ_{n+1} = √(2/(n+1)) x ψ_n − √(n/(n+1)) ψ_{n−1}, which holds up to v = 50 where H_v alone overflows */
function psi(n, x) {
  let a = Math.pow(Math.PI, -0.25) * Math.exp(-x * x / 2), b = 0;
  for (let k = 0; k < n; k++) { const c = Math.sqrt(2 / (k + 1)) * x * a - Math.sqrt(k / (k + 1)) * b; b = a; a = c; }
  return a;
}
const fact = (n) => { let p = 1; for (let k = 2; k <= n; k++) p *= k; return p; };
const Nv = (v) => 1 / Math.sqrt(Math.pow(2, v) * fact(v) * Math.sqrt(Math.PI));
const HTEX = ['1', '2x', '-2 + 4x^2', '-12x + 8x^3', '12 - 48x^2 + 16x^4', '120x - 160x^3 + 32x^5', '-120 + 720x^2 - 480x^4 + 64x^6', '-1680x + 3360x^3 - 1344x^5 + 128x^7'];

/* =====================================================================
   FIGURE 5.6.1: the polynomial and the Gaussian. Still: no time in it.
   A choice v, 0 to 7 (the book's eight polynomials). Top, the book's six,
   H₀ to H₅, faint, and H_v bold: every one but H₀ leaves the frame at both
   ends. Below on the same x, ψ_v = N_v H_v e^(−x²/2), which the Gaussian
   brings back to zero. Axes fixed: x −4.5 to 4.5 (ψ₇ dies out by then);
   H from −40 to 40, the book's frame being about that; ψ from −0.8 to 0.8
   (ψ₀ peaks at 0.751). Opens on v = 3.
===================================================================== */
(function () {
  const d = sim('sim-hermite', 760);
  const V = F.choice(d.controls, { label: 'v', options: [0, 1, 2, 3, 4, 5, 6, 7].map((k) => ({ value: String(k), label: String(k) })), value: '3', aria: 'the degree of the polynomial', key: 'v' });
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const v = +V.value, cw = C('wavefunction');
    topline(ctx, v === 0
      ? '$H_0 = 1$ never grows, and the Gaussian alone takes $\\kpsi_0$ to zero.'
      : `$H_{${v}}$ grows like $x^{${v}}$, and the Gaussian still takes $\\kpsi_{${v}}$ to zero.`);
    const top = { l: 170, r: 1340, t: 110, b: 370 };
    const ax = axes(ctx, top, [-4.5, 4.5], [-40, 40], { nx: 6, ny: 4, xl: '', yl: 'H_v(x)' });
    for (let k = 0; k <= 5; k++) if (k !== v) {
      plot(ctx, ax, (x) => hermite(k, x), alpha(PAL.ink, 0.25), { w: 2 });
      const xa = k === 0 ? 4.0 : Math.pow(36 / Math.pow(2, k), 1 / k);
      hits.push({ x: ax.X(xa), y: ax.Y(Math.max(-40, Math.min(40, hermite(k, xa)))), r: 12, name: `H${sub(k)}(x) = ${HTEX[k].replace(/\^(\d)/g, (m, p) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[+p])}` });
    }
    plot(ctx, ax, (x) => hermite(v, x), PAL.ink, { w: 5 });
    /* the label sits where H_v leaves the frame on the right (H₀ never does) */
    let xl = 3.6; if (v > 0) { for (let x = 0; x <= 4.5; x += 0.005) if (Math.abs(hermite(v, x)) <= 36) xl = x; }
    text(ctx, `H${sub(v)}`, ax.X(xl) + 14, ax.Y(Math.max(-36, Math.min(36, hermite(v, xl)))), PAL.ink, { size: 22, weight: 600, base: 'middle' });
    hits.push({ x: ax.X(xl), y: ax.Y(Math.max(-36, Math.min(36, hermite(v, xl)))), r: 14, name: `H${sub(v)}, the chosen polynomial` });
    const bot = { l: 170, r: 1340, t: 470, b: 690 };
    const bx = axes(ctx, bot, [-4.5, 4.5], [-0.8, 0.8], { nx: 6, ny: 4, xl: 'x', yl: 'ψ_v(x)', yc: cw });
    plot(ctx, bx, (x) => psi(v, x), cw, { w: 5 });
    hits.push({ x: bx.X(0.3), y: bx.Y(psi(v, 0.3)), r: 14, name: `ψ${sub(v)}(x) = N${sub(v)}H${sub(v)}(x)e^(−x²/2)` });
    tex(d.readout, `\\kpsiv(x) = N_v H_v(x)\\,e^{-x^2/2} \\\\ H_{${v}}(x) = ${HTEX[v]} \\\\ N_{${v}} = \\dfrac{1}{(2^{${v}}\\,${v}!\\,\\sqrt{\\pi})^{1/2}} = ${fmt(Nv(v), 4)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 5.6.2 + 5.6.3: the wavefunction on its level and its density.
   Still: a stationary state has no time in it. Slider v, 0 to 50, detents
   at the book's 0 to 3 and Exercise 5.6.9's 10, 20 and 50. Top, in units
   of ħω against x = q/β: the well x²/2, the level v + ½, ψ_v drawn on it,
   the classical turning points ±x_v = ±√(2v + 1) (x = 1 is Q₀ for v = 0)
   with the regions past them shaded. Below, |ψ_v|² filled and the classical
   density 1/(π√(x_v² − x²)) dashed (5.1's curve), the forbidden regions
   shaded the same. The one zoom: x runs to ±max(4, 1.3 x_v) and the energy
   to 1.35 (v + ½), so the level always sits at the same height and the
   tails stay in view; the density axis follows the tallest peak. Readout:
   E_v, x_v and the probability beyond ±x_v, 0.157 at v = 0 (Equation
   5.6.19). Opens on v = 0, the ground state the text works.
===================================================================== */
(function () {
  const d = sim('sim-states', 800);
  const V = ctl(d.controls, { label: 'v', cls: '', min: 0, max: 50, step: 1, value: 0, unit: '', dec: 0, detents: [0, 1, 2, 3, 10, 20, 50], snap: true, aria: 'the vibrational quantum number' });
  let hits = []; F.hover(d.stage, () => hits);
  const integral = (f, a, b, n = 4000) => { let s = 0; const h = (b - a) / n; for (let i = 0; i < n; i++) s += f(a + (i + 0.5) * h) * h; return s; };
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const v = Math.round(V.v), E = v + 0.5, xv = Math.sqrt(2 * v + 1), X = Math.max(4, 1.3 * xv);
    const cw = C('wavefunction'), cp = C('probability-density'), ce = C('energy');
    const dens = (x) => psi(v, x) * psi(v, x);
    const Pin = integral(dens, -xv, xv), Pout = Math.max(0, 1 - Pin);
    const parity = v % 2 ? 'odd (ungerade)' : 'even (gerade)';
    topline(ctx, `$\\kpsi_{${v}}$ has ${v} node${v === 1 ? '' : 's'} and is ${parity}; ${fmt(100 * Pout, 1)}% of its density lies beyond the turning points.`);
    /* top: the well, the level and the wavefunction on it */
    const Emax = 1.35 * E;
    const top = { l: 170, r: 1340, t: 110, b: 390 };
    const ax = axes(ctx, top, [-X, X], [0, Emax], { nx: 6, ny: 3, nice: true, xl: '', yl: 'energy (ħω)', yc: ce });
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.07);
    ctx.fillRect(top.l, top.t, ax.X(-xv) - top.l, top.b - top.t); ctx.fillRect(ax.X(xv), top.t, top.r - ax.X(xv), top.b - top.t); ctx.restore();
    plot(ctx, ax, (x) => x * x / 2, PAL.ink, { w: 3 });
    line(ctx, ax.X(-X), ax.Y(E), ax.X(X), ax.Y(E), alpha(ce, 0.8), 2, [10, 10]);
    let pm = 0; for (let i = 0; i <= 400; i++) pm = Math.max(pm, Math.abs(psi(v, -X + 2 * X * i / 400)));
    const amp = 0.22 * Emax / pm;
    plot(ctx, ax, (x) => E + amp * psi(v, x), cw, { w: 4 });
    for (const s of [-1, 1]) line(ctx, ax.X(s * xv), top.t, ax.X(s * xv), top.b, alpha(PAL.ink, 0.45), 2, [4, 8]);
    text(ctx, `E${sub(v)}`, top.r - 8, ax.Y(E) - 16, ce, { size: 22, weight: 600, align: 'right' });
    hits.push({ x: ax.X(0), y: ax.Y(E), r: 16, name: `ψ${sub(v)} drawn on its level, E${sub(v)} = ${2 * v + 1}ħω/2` });
    hits.push({ x: ax.X(xv), y: ax.Y(E), r: 14, name: `the classical turning point x = √(2v + 1) = ${fmt(xv, 2)}` });
    hits.push({ x: (top.l + ax.X(-xv)) / 2, y: (top.t + top.b) / 2, r: 24, name: 'the classically forbidden region, where V > E' });
    /* bottom: the density against the classical one */
    let dm = 0; for (let i = 0; i <= 600; i++) dm = Math.max(dm, dens(-X + 2 * X * i / 600));
    const bot = { l: 170, r: 1340, t: 500, b: 730 };
    const bx = axes(ctx, bot, [-X, X], [0, 1.25 * dm], { nx: 6, ny: 3, nice: true, xl: 'displacement x = q/β', yl: '|ψ_v|²', yc: cp });
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.07);
    ctx.fillRect(bot.l, bot.t, bx.X(-xv) - bot.l, bot.b - bot.t); ctx.fillRect(bx.X(xv), bot.t, bot.r - bx.X(xv), bot.b - bot.t); ctx.restore();
    shade(ctx, bx, dens, 0, -X, X, cp, { alpha: 0.3 });
    plot(ctx, bx, dens, cp, { w: 4 });
    const e = 1e-4 * xv;
    plot(ctx, bx, (x) => 1 / (Math.PI * Math.sqrt(xv * xv - x * x)), alpha(PAL.ink, 0.7), { w: 3, dash: [10, 10], x: [-xv + e, xv - e] });
    for (const s of [-1, 1]) line(ctx, bx.X(s * xv), bot.t, bx.X(s * xv), bot.b, alpha(PAL.ink, 0.45), 2, [4, 8]);
    F.legend(ctx, bx, [{ s: `|ψ${sub(v)}|²`, color: cp, w: 4 }, { s: 'classical', color: alpha(PAL.ink, 0.7), w: 3, dash: [10, 10] }], { corner: 'above' });
    hits.push({ x: bx.X(0), y: bx.Y(dens(0)), r: 16, name: `|ψ${sub(v)}|², the probability density of level ${v}` });
    tex(d.readout, `\\kEv = \\left(v + \\tfrac{1}{2}\\right)\\hbar\\komega = ${v === 0 ? '\\tfrac{1}{2}' : `\\tfrac{${2 * v + 1}}{2}`}\\hbar\\komega \\\\ x_{${v}} = \\sqrt{2v + 1} = ${fmt(xv, 3)} \\\\ P[\\text{forbidden}] = 1 - \\int_{-x_{${v}}}^{x_{${v}}} |\\kpsi_{${v}}|^2\\,dx = ${fmt(Pout, 3)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
