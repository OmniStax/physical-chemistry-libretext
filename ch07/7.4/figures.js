/* Figures for section 7.4 Perturbation Theory Expresses the Solutions in Terms of Solved Problems. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.4'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, shade, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const SUB = '₀₁₂₃₄₅₆₇₈₉';
const sub = (k) => String(k).split('').map((c) => SUB[+c]).join('');

/* the eigenvalues of a real symmetric matrix, by cyclic Jacobi rotations, ascending */
function eigenvalues(A) {
  const n = A.length, a = A.map((r) => r.slice());
  for (let sweep = 0; sweep < 60; sweep++) {
    let off = 0;
    for (let p = 0; p < n; p++) for (let q = p + 1; q < n; q++) off += a[p][q] * a[p][q];
    if (off < 1e-20) break;
    for (let p = 0; p < n; p++) for (let q = p + 1; q < n; q++) {
      if (Math.abs(a[p][q]) < 1e-14) continue;
      const th = (a[q][q] - a[p][p]) / (2 * a[p][q]);
      const t = Math.sign(th || 1) / (Math.abs(th) + Math.sqrt(th * th + 1)), c = 1 / Math.sqrt(t * t + 1), s = t * c;
      for (let k = 0; k < n; k++) { const akp = a[k][p], akq = a[k][q]; a[k][p] = c * akp - s * akq; a[k][q] = s * akp + c * akq; }
      for (let k = 0; k < n; k++) { const apk = a[p][k], aqk = a[q][k]; a[p][k] = c * apk - s * aqk; a[q][k] = s * apk + c * aqk; }
    }
  }
  return a.map((r, i) => r[i]).sort((x, y) => x - y);
}

/* =====================================================================
   FIGURE 7.4.1: a particle in a box, perturbed. Still: no time in it.
   Energies in units of h²/8mL², so E_n⁰ = n². A choice of the book's two
   perturbations, a constant V_o over the whole box (Example 7.4.1A) or V_o
   over the left half (Example 7.4.1B); slider V_o 0 to 12, default 2 (first order close, not exact, for the half box); a
   choice of level n = 1 to 4. Left: the box, its floor, the exact levels and
   |ψ_n⁰|² of the chosen level, the density whose average over the
   perturbation is the first-order shift. Right: three columns of levels,
   E_n⁰, E_n⁰ + E_n¹ and the exact E_n (the matrix n²δ_mn + ⟨m⁰|Ĥ¹|n⁰⟩
   diagonalized in 40 box states), joined by symbolic connectors (which
   level becomes which). Axis fixed 0 to 30: level 4 with the largest
   constant shift reaches 28.
===================================================================== */
(function () {
  const d = sim('sim-box-levels', 620);
  const P = F.choice(d.controls, { label: 'perturbation', options: [
    { value: 'whole', label: 'whole box (7.4.1A)' }, { value: 'half', label: 'left half (7.4.1B)' }], value: 'half', aria: 'where the perturbation acts', key: 'pert' });
  const V = ctl(d.controls, { label: '\\kVo', cls: 'energy', min: 0, max: 12, step: 0.1, value: 2, unit: 'h²/8mL²', dec: 1, detents: [0, 2, 4, 8, 12] });
  const N = F.choice(d.controls, { label: 'n', options: [1, 2, 3, 4].map((k) => ({ value: String(k), label: String(k) })), value: '1', aria: 'the level whose density is drawn', key: 'n' });
  const B = 40;
  /* ⟨m⁰|Ĥ¹|n⁰⟩ / V_o for the step over the left half */
  const half = (m, n) => m === n ? 0.5 : (Math.sin((m - n) * Math.PI / 2) / (m - n) - Math.sin((m + n) * Math.PI / 2) / (m + n)) / Math.PI;
  let cache = { key: '', ev: [] };
  function exact(kind, v) {
    const key = kind + v;
    if (cache.key === key) return cache.ev;
    const A = [];
    for (let m = 1; m <= B; m++) { const r = []; for (let n = 1; n <= B; n++) r.push((m === n ? n * n : 0) + v * (kind === 'whole' ? (m === n ? 1 : 0) : half(m, n))); A.push(r); }
    cache = { key, ev: eigenvalues(A) };
    return cache.ev;
  }
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const kind = P.value, v = V.v, n = +N.value, ce = C('energy'), cl = C('length'), cp = C('probability-density');
    const E1 = (k) => kind === 'whole' ? v : v / 2;
    const ev = exact(kind, v);
    const first = n * n + E1(n), ex = ev[n - 1];
    topline(ctx, kind === 'whole'
      ? `Every level rises by $\\kVo = ${fmt(v, 1)}$, and first order is exact.`
      : `Level ${n}: first order gives ${fmt(first, 2)}, the exact energy is ${fmt(ex, 2)} (in $h^2/8m\\kL^2$).`);
    /* left: the box on the energy axis */
    const lb = { l: 150, r: 560, t: 100, b: 560 };
    const ax = axes(ctx, lb, [0, 1], [0, 30], { nx: 2, ny: 6, xl: 'position x (L)', yl: 'energy (h²/8mL²)', xc: cl, yc: ce, fx: (x) => (x === 0 ? '0' : x === 1 ? 'L' : 'L/2') });
    const Vx = (x) => kind === 'whole' || x <= 0.5 ? v : 0;
    /* the raised floor, filled */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.12);
    const xr = kind === 'whole' ? 1 : 0.5;
    ctx.fillRect(ax.X(0), ax.Y(v), ax.X(xr) - ax.X(0), ax.Y(0) - ax.Y(v)); ctx.restore();
    plot(ctx, ax, [{ f: Vx, x: [0, xr] }, { f: () => 0, x: [xr, 1] }], PAL.ink, { w: 3 });
    if (xr < 1) line(ctx, ax.X(0.5), ax.Y(v), ax.X(0.5), ax.Y(0), PAL.ink, 3);
    line(ctx, ax.X(0), lb.t, ax.X(0), lb.b, PAL.ink, 5); line(ctx, ax.X(1), lb.t, ax.X(1), lb.b, PAL.ink, 5);
    for (let k = 1; k <= 4; k++) {
      const e = ev[k - 1];
      if (e <= 30) line(ctx, ax.X(0), ax.Y(e), ax.X(1), ax.Y(e), alpha(ce, k === n ? 1 : 0.35), k === n ? 4 : 2);
    }
    /* |ψ_n⁰|² drawn on the chosen exact level, peak 4 units tall */
    const amp = 2.0, dens = (x) => 2 * Math.sin(n * Math.PI * x) ** 2;
    shade(ctx, ax, (x) => ex + amp * dens(x), ex, 0, 1, cp, { alpha: 0.3 });
    plot(ctx, ax, (x) => ex + amp * dens(x), cp, { w: 3 });
    text(ctx, `|ψ${sub(n)}⁰|²`, ax.X(1) + 12, ax.Y(ex + 1.6), cp, { size: 20, weight: 600, base: 'middle' });
    text(ctx, 'V_o', ax.X(0) + 12, ax.Y(v) - 14, ce, { size: 20, weight: 600 });
    hits.push({ x: ax.X(0.25), y: ax.Y(v / 2), r: 30, name: `the perturbation, V_o = ${fmt(v, 1)} over ${kind === 'whole' ? 'the whole box' : 'the left half'}` });
    hits.push({ x: ax.X(0.5), y: ax.Y(ex + amp), r: 20, name: `|ψ${sub(n)}⁰|², the unperturbed density of level ${n}` });
    /* right: three columns of levels */
    const rb = { l: 720, r: 1340, t: 100, b: 560 };
    const ay = axes(ctx, rb, [0, 3.45], [0, 30], { nx: 0, ny: 6, xl: '', yl: '', yc: ce });
    const cols = [0.5, 1.5, 2.5], hw = 0.32;
    const heads = ['E_n⁰', 'E_n⁰ + E_n¹', 'exact E_n'];
    heads.forEach((h, i) => text(ctx, h, ay.X(cols[i]), rb.b + 34, i === 2 ? PAL.ink : ce, { size: 20, weight: 600, align: 'center' }));
    for (let k = 1; k <= 4; k++) {
      const ys = [k * k, k * k + E1(k), ev[k - 1]];
      const on = k === n, col = alpha(ce, on ? 1 : 0.45), w = on ? 5 : 3;
      ys.forEach((y, i) => { if (y <= 30) line(ctx, ay.X(cols[i] - hw), ay.Y(y), ay.X(cols[i] + hw), ay.Y(y), col, w); });
      for (let i = 0; i < 2; i++) if (ys[i] <= 30 && ys[i + 1] <= 30) line(ctx, ay.X(cols[i] + hw), ay.Y(ys[i]), ay.X(cols[i + 1] - hw), ay.Y(ys[i + 1]), alpha(PAL.ink, 0.35), 2, [4, 8]);
      if (ys[2] <= 30) text(ctx, `n = ${k}`, ay.X(cols[2] + hw) + 10, ay.Y(ys[2]), on ? ce : alpha(PAL.ink, 0.6), { size: 17, base: 'middle' });
      ys.forEach((y, i) => { if (y <= 30) hits.push({ x: ay.X(cols[i]), y: ay.Y(y), r: 14, name: `${['unperturbed', 'first-order', 'exact'][i]} energy of level ${k}: ${fmt(y, 2)} h²/8mL²` }); });
    }
    tex(d.readout, `\\kEn \\approx \\kEnzero + \\langle n^o|\\kHonehat|n^o\\rangle \\\\ E_{${n}} \\approx ${fmt(n * n, 2)} + ${fmt(E1(n), 2)} = ${fmt(first, 2)}\\ \\dfrac{h^2}{8\\km\\kL^2} \\\\ E_{${n}} = ${fmt(ex, 2)}\\ \\dfrac{h^2}{8\\km\\kL^2}\\ \\text{(exact)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 7.4.2: the oscillator's ground state, mixing. Still.
   Scaled units: ξ = √α x, energies in hν. A choice of the cubic term εx³
   (Example 7.4.2) or the quartic γx⁴ (Exercise 7.4.3); one strength slider
   0 to 0.2 (ε in hν α^{3/2}, γ in hν α²), default 0.15. With x³|0⟩ =
   (3|1⟩ + √6|3⟩)/2√2 and x⁴|0⟩ = (3|0⟩ + 6√2|2⟩ + √24|4⟩)/4, the weights
   are c_{m,0} = −⟨m|Ĥ¹|0⟩/m: cubic c₁ = −1.061s, c₃ = −0.289s; quartic
   c₂ = −1.061s, c₄ = −0.306s, and E₀¹ = 3s/4 (0 for the cubic).
   Left: the perturbed well against the harmonic one, ψ₀⁰ dashed and
   ψ₀⁰ + Σ c_m ψ_m⁰ on the level E₀ ≈ ½ + E₀¹. ξ −4 to 4, energy 0 to 3 hν.
   Right: bars of c_{m,0} for m = 1 to 8, the zero ones as hollow marks;
   −0.25 to 0.25 holds the largest weight, 0.212.
===================================================================== */
(function () {
  const d = sim('sim-oscillator-mixing', 600);
  const sfmt = (s) => K.value === 'cubic' ? `ε = ${fmt(s, 3)} hν α³ᐟ²` : `γ = ${fmt(s, 3)} hν α²`;
  let S = null;
  const K = F.choice(d.controls, { label: 'perturbation', options: [
    { value: 'cubic', label: '$\\epsilon x^3$ (7.4.2)' }, { value: 'quartic', label: '$\\gamma x^4$ (7.4.3)' }], value: 'cubic', aria: 'the perturbation', key: 'pert', onInput: () => S && S.range({ min: 0, max: 0.2, fmt: sfmt }) });
  S = ctl(d.controls, { label: 'strength', cls: '', key: 'strength', min: 0, max: 0.2, step: 0.005, value: 0.15, unit: '', dec: 3, fmt: sfmt });
  function psi(n, x) {
    let a = Math.pow(Math.PI, -0.25) * Math.exp(-x * x / 2), b = 0;
    for (let k = 0; k < n; k++) { const c = Math.sqrt(2 / (k + 1)) * x * a - Math.sqrt(k / (k + 1)) * b; b = a; a = c; }
    return a;
  }
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const cubic = K.value === 'cubic', s = S.v, ce = C('energy'), cw = C('wavefunction');
    const c = new Array(9).fill(0);
    if (cubic) { c[1] = -3 / (2 * Math.SQRT2) * s; c[3] = -Math.sqrt(3) / 6 * s; }
    else { c[2] = -(6 * Math.SQRT2 / 4) / 2 * s; c[4] = -(Math.sqrt(24) / 4) / 4 * s; }
    const E1 = cubic ? 0 : 0.75 * s, E0 = 0.5 + E1;
    const pert = (x) => (cubic ? x * x * x : x * x * x * x);
    const nz = cubic ? [1, 3] : [2, 4];
    topline(ctx, cubic
      ? `Only $m$ = 1 and 3 mix in, and the energy stays at $\\tfrac{1}{2}h\\knu$ to first order.`
      : `Only $m$ = 2 and 4 mix in, and the energy rises by $${fmt(E1, 3)}\\,h\\knu$.`);
    /* left: the well and the ground state */
    const lb = { l: 150, r: 760, t: 100, b: 520 };
    const ax = axes(ctx, lb, [-4, 4], [0, 3], { nx: 4, ny: 3, xl: 'scaled displacement √α x', yl: 'energy (hν)', yc: ce });
    plot(ctx, ax, (x) => x * x / 2, alpha(PAL.ink, 0.35), { w: 2, dash: [10, 10] });
    plot(ctx, ax, (x) => x * x / 2 + s * pert(x), PAL.ink, { w: 3 });
    line(ctx, lb.l, ax.Y(E0), lb.r, ax.Y(E0), alpha(ce, 0.8), 2, [10, 10]);
    const A = 1.6;
    const mixed = (x) => { let v = psi(0, x); for (let m = 1; m <= 8; m++) if (c[m]) v += c[m] * psi(m, x); return v; };
    plot(ctx, ax, (x) => E0 + A * psi(0, x), alpha(cw, 0.55), { w: 3, dash: [10, 10] });
    plot(ctx, ax, (x) => E0 + A * mixed(x), cw, { w: 5 });
    F.legend(ctx, ax, [
      { s: 'harmonic well', color: alpha(PAL.ink, 0.35), w: 2, dash: [10, 10] },
      { s: 'perturbed well', color: PAL.ink, w: 3 },
      { s: '|0⁰⟩', color: alpha(cw, 0.55), w: 3, dash: [10, 10] },
      { s: '|0⁰⟩ + Σ c_{m,0}|m⁰⟩', color: cw, w: 5 },
    ], { corner: 'tl' });
    hits.push({ x: ax.X(0), y: ax.Y(E0 + A * mixed(0)), r: 16, name: 'the first-order ground state, drawn on its energy' });
    hits.push({ x: ax.X(-2.2), y: ax.Y(2.42 + s * pert(-2.2)), r: 16, name: 'the perturbed well, ½x² plus the perturbation' });
    hits.push({ x: ax.X(2.45), y: ax.Y(3), r: 16, name: 'the harmonic well, ½x²' });
    /* right: the weights */
    const rb = { l: 900, r: 1340, t: 100, b: 520 };
    const bx = axes(ctx, rb, [0.4, 8.6], [-0.25, 0.25], { nx: 0, ny: 2, xl: 'excited state m', yl: 'weight c_{m,0}' });
    line(ctx, rb.l, bx.Y(0), rb.r, bx.Y(0), alpha(PAL.ink, 0.5), 2);
    for (let m = 1; m <= 8; m++) {
      const x = bx.X(m), w = 30;
      text(ctx, String(m), x, rb.b + 24, PAL.ink, { size: 17, align: 'center' });
      if (nz.includes(m)) {
        const y = bx.Y(c[m]);
        ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.7); ctx.fillRect(x - w / 2, Math.min(y, bx.Y(0)), w, Math.abs(y - bx.Y(0))); ctx.restore();
        if (s > 0) text(ctx, fmt(c[m], 3), x, Math.max(y, bx.Y(0)) + 22, PAL.ink, { size: 17, align: 'center' });
        hits.push({ x, y: (y + bx.Y(0)) / 2, r: 18, name: `c${sub(m)},${sub(0)} = ${fmt(c[m], 3)}` });
      } else {
        dot(ctx, x, bx.Y(0), alpha(PAL.ink, 0.6), false, 7);
        hits.push({ x, y: bx.Y(0), r: 12, name: `c${sub(m)},${sub(0)} = 0: ⟨${m}⁰|Ĥ¹|0⁰⟩ vanishes` });
      }
    }
    const a = nz[0], b = nz[1];
    const term = (m) => `${c[m] < 0 ? '-' : '+'} ${fmt(Math.abs(c[m]), 3)}\\,|${m}^o\\rangle`;
    tex(d.readout, `|0\\rangle \\approx |0^o\\rangle + c_{${a},0}|${a}^o\\rangle + c_{${b},0}|${b}^o\\rangle \\\\ |0\\rangle \\approx |0^o\\rangle ${term(a)} ${term(b)} \\\\ ` + (cubic
      ? `E_0 \\approx \\tfrac{1}{2}h\\knu + 0 = 0.500\\,h\\knu`
      : `E_0 \\approx \\tfrac{1}{2}h\\knu + \\dfrac{3\\gamma}{4\\alpha^2} = (0.500 + ${fmt(E1, 3)})\\,h\\knu = ${fmt(E0, 3)}\\,h\\knu`));
  }
  register(d.fig, { update: () => {}, draw });
})();
};
