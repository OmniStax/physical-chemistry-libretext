/* Figures for section 3.5 The Energy of a Particle in a Box is Quantized. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.5'] = function (root, F) {
const { el, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, topline, axes, plot, shade, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI, SUB = '₀₁₂₃₄₅₆₇₈₉';
const sub = (k) => String(k).split('').map((c) => SUB[+c]).join('');
/* a readout line and, where the figure shows one more fact, a small second line set through the same macros */
function readout(host, main, small, o) { tex(host, main, false, o || {}); if (small) { const s = el('small', null, small); host.appendChild(s); F.renderMath(s); } }
/* the box's normalized eigenfunctions with x in units of L (Equation 3.5.16): psi_n = sqrt(2) sin(n pi x), in units of L^(-1/2) */
const psi = (n) => (x) => (x < 0 || x > 1 ? 0 : Math.SQRT2 * Math.sin(n * Math.PI * x));
/* constants, SI; the electron's energies in eV for a box of length L nm */
const h = 6.62607e-34, me = 9.10938e-31, eV = 1.602177e-19, HEV = 4.135668e-15, HBAR_EVFS = 0.6582120;
const E1eV = (Lnm) => h * h / (8 * me * Math.pow(Lnm * 1e-9, 2)) / eV;
/* the walls: V is infinite outside 0 <= x <= L, drawn as shaded bands on the axes' x range [-0.12, 1.12] */
function walls(ctx, ax, hits, label) {
  const { box, X } = ax;
  ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.12);
  ctx.fillRect(box.l, box.t, X(0) - box.l, box.b - box.t); ctx.fillRect(X(1), box.t, box.r - X(1), box.b - box.t); ctx.restore();
  line(ctx, X(0), box.t, X(0), box.b, PAL.ink, 4); line(ctx, X(1), box.t, X(1), box.b, PAL.ink, 4);
  if (label) { text(ctx, 'V = ∞', (box.l + X(0)) / 2, box.t + 26, PAL.muted, { size: 17, align: 'center' }); }
  hits.push({ x: (box.l + X(0)) / 2, y: (box.t + box.b) / 2, r: 30, name: 'outside the box, where V is infinite and ψ = 0' });
  hits.push({ x: (X(1) + box.r) / 2, y: (box.t + box.b) / 2, r: 30, name: 'outside the box, where V is infinite and ψ = 0' });
}
const XR = [-0.12, 1.12];
const fx = (v) => (Math.abs(v) < 1e-9 ? '0' : Math.abs(v - 1) < 1e-9 ? 'L' : Math.abs(v - 0.5) < 1e-9 ? 'L/2' : '');

/* =====================================================================
   FIGURE 3.5.1 + 3.5.2 + 3.5.3: the box and its ladder. Still: an energy
   level has no time in it. The box (3.5.1) between shaded walls; above it
   the ladder (3.5.2), every level a line at E_n / E_1 = n^2 with its psi_n
   drawn on it, the chosen one lit with its nodes dotted; beneath it the
   chosen |psi_n|^2 filled (3.5.3). Energy is in units of E_1, so L moves
   the energies in the readout only. The energy axis is the one zoom: it
   follows n, 0 to max(4.6, 1.15 n^2), so the chosen rung and the ground
   rung both stay in frame (at n = 20 the low rungs crowd the floor, which
   is the n^2 spreading seen at its largest). Opens on n = 3, the book's top
   state, and on a 1.00 nm box (an electron, the AI exercises' case).
===================================================================== */
(function () {
  const d = sim('sim-ladder', 820);
  const N = ctl(d.controls, { label: 'n', cls: '', min: 1, max: 20, step: 1, value: 3, unit: '', dec: 0, detents: [1, 2, 3, 20], snap: true, aria: 'the quantum number' });
  const L = ctl(d.controls, { label: '\\kL', cls: 'length', min: 0.2, max: 2, step: 0.01, value: 1, unit: 'nm', dec: 2, detents: [1], aria: 'the length of the box' });
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const n = Math.round(N.v), ce = C('energy'), cw = C('wavefunction'), cp = C('probability-density'), cl = C('length');
    const ymax = Math.max(4.6, 1.15 * n * n);
    const top = { l: 190, r: 1250, t: 120, b: 500 };
    const ax = axes(ctx, top, XR, [0, ymax], { nx: 0, ny: 5, nice: true, xl: '', yl: 'energy E / E₁', yc: ce });
    walls(ctx, ax, hits, true);
    const K = Math.floor(Math.sqrt(ymax));
    const pxPer = (top.b - top.t) / ymax;
    for (let k = 1; k <= K; k++) {
      const y = ax.Y(k * k), on = k === n;
      const gap = (k === 1 ? 3 : 2 * k - 1) * pxPer;
      const amp = Math.min(46, 0.3 * gap);
      line(ctx, ax.X(0), y, ax.X(1), y, on ? ce : alpha(PAL.ink, 0.35), on ? 3 : 2, on ? undefined : [10, 10]);
      if (amp >= 5 || on) {
        const a = on ? Math.max(amp, 18) : amp;
        ctx.save(); ctx.strokeStyle = on ? cw : alpha(cw, 0.45); ctx.lineWidth = on ? 5 : 2; ctx.lineJoin = 'round'; ctx.beginPath();
        for (let i = 0; i <= 400; i++) { const x = i / 400, Y = y - a * Math.sin(k * Math.PI * x); if (i) ctx.lineTo(ax.X(x), Y); else ctx.moveTo(ax.X(x), Y); }
        ctx.stroke(); ctx.restore();
      }
      if (on) for (let j = 1; j < k; j++) dot(ctx, ax.X(j / k), y, PAL.ink, true, n > 12 ? 4 : 6);
      hits.push({ x: ax.X(1) - 20, y, r: Math.max(8, Math.min(16, gap / 2)), name: `level n = ${k}: E${sub(k)} = ${k * k}E₁ = ${fmt(k * k * E1eV(L.v), 3)} eV, ${k - 1} node${k === 2 ? '' : 's'}` });
    }
    text(ctx, `n = ${n}`, ax.X(1) + 18, ax.Y(n * n), ce, { size: 22, weight: 600, base: 'middle' });
    if (n > 1 && (n * n - 1) * pxPer > 26) text(ctx, 'n = 1', ax.X(1) + 18, ax.Y(1), alpha(PAL.ink, 0.7), { size: 17, base: 'middle' });
    /* the probability density of the chosen state, beneath the box */
    const bot = { l: 190, r: 1250, t: 570, b: 740 };
    const bx = axes(ctx, bot, XR, [0, 2], { nx: 0, ny: 2, xl: 'position x', yl: '|ψ|² (1/L)', xc: cl, yc: cp });
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.12);
    ctx.fillRect(bot.l, bot.t, bx.X(0) - bot.l, bot.b - bot.t); ctx.fillRect(bx.X(1), bot.t, bot.r - bx.X(1), bot.b - bot.t); ctx.restore();
    for (const v of [0, 0.5, 1]) text(ctx, fx(v), bx.X(v), bot.b + 26, cl, { size: 17, align: 'center' });
    const dens = (x) => Math.pow(psi(n)(x), 2);
    shade(ctx, bx, dens, 0, 0, 1, cp, { alpha: 0.35 });
    plot(ctx, bx, dens, cp, { w: 4, x: [0, 1] });
    hits.push({ x: bx.X(0.5 / n), y: bx.Y(2), r: 18, name: `|ψ${sub(n)}|², the probability density of level ${n}` });
    topline(ctx, n === 1
      ? `The ground state, $n = 1$, lies at $\\kEone$ and has no nodes.`
      : `Level $n = ${n}$ lies at ${n * n}$\\kEone$ and $\\kpsi_{${n}}$ has ${n - 1} node${n === 2 ? '' : 's'}.`);
    const E = n * n * E1eV(L.v);
    readout(d.readout,
      `\\kEn = \\dfrac{h^2}{8\\km\\kL^2}n^2 \\\\ \\kE_{${n}} = \\dfrac{(6.626\\times10^{-34}\\ \\text{J s})^2\\,(${n})^2}{8\\,(9.109\\times10^{-31}\\ \\text{kg})(${fmt(L.v, 2)}\\times10^{-9}\\ \\text{m})^2} = ${fmt(E, E < 10 ? 3 : E < 100 ? 2 : 1)}\\ \\text{eV}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 3.5.4: the turning phase. Moving: Psi_n = psi_n e^(-i E_n t / hbar)
   has a time in it. An electron in a 1.00 nm box: E_1 = 0.376 eV, so one
   ground-state period T_1 = h / E_1 = 11.0 fs, drawn over 5 s; the loop is
   one T_1, in which the phase of level n turns n^2 times. Top: the real
   part (solid) and the imaginary part (dashed) of Psi, with a dial at the
   side turning clockwise at omega_n = E_n / hbar. Bottom: |Psi|^2 filled,
   which stands still in a stationary state. The superposition
   (psi_1 + psi_2) / sqrt 2 sloshes three times per loop, since
   E_2 - E_1 = 3E_1; the readout follows the chance of finding it in the
   left half, 1/2 + (4 / 3 pi) cos((E_2 - E_1) t / hbar). The classical
   ball has the energy E_1, p = h / 2L, and makes two round trips per loop.
   Units: x in L, psi in L^(-1/2), |Psi|^2 in 1/L, t in fs.
===================================================================== */
(function () {
  const d = sim('sim-phase', 720);
  const S = F.choice(d.controls, { label: '\\text{state}', options: [
    { value: 'ball', label: 'classical' }, { value: '1', label: 'ψ₁' }, { value: '2', label: 'ψ₂' }, { value: '3', label: 'ψ₃' }, { value: 'sup', label: 'ψ₁ + ψ₂' }],
    value: '2', aria: 'the state of the particle', onInput: () => cy.reset() });
  const E1 = E1eV(1), T1 = HEV / E1, DRAWN = 5;
  const cy = cycle(() => T1, 1.2);
  let hits = []; F.hover(d.stage, () => hits);
  const w = (n) => n * n * E1 / HBAR_EVFS;            /* rad per fs */
  function dial(ctx, cx, cy0, r, hands) {
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(cx, cy0, r, 0, TAU); ctx.stroke(); ctx.restore();
    line(ctx, cx - r, cy0, cx + r, cy0, alpha(PAL.ink, 0.25), 2); line(ctx, cx, cy0 - r, cx, cy0 + r, alpha(PAL.ink, 0.25), 2);
    for (const hd of hands) { const x2 = cx + hd.len * r * Math.cos(hd.a), y2 = cy0 + hd.len * r * Math.sin(hd.a); line(ctx, cx, cy0, x2, y2, PAL.ink, hd.w); dot(ctx, x2, y2, PAL.ink, true, hd.w + 2); }
    text(ctx, 'Re', cx + r + 8, cy0, PAL.muted, { size: 17, base: 'middle' });
    text(ctx, 'Im', cx, cy0 - r - 14, PAL.muted, { size: 17, align: 'center' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const v = S.value, t = cy.now(), cw = C('wavefunction'), cp = C('probability-density'), cl = C('length');
    const top = { l: 150, r: 1100, t: 130, b: 400 };
    const ax = axes(ctx, top, XR, [-1.6, 1.6], { nx: 0, ny: 4, xl: '', yl: v === 'ball' ? '' : 'Ψ (L^{-1/2})', yc: cw });
    walls(ctx, ax, hits, false);
    line(ctx, ax.X(0), ax.Y(0), ax.X(1), ax.Y(0), alpha(PAL.ink, 0.35), 2);
    if (v === 'ball') {
      /* two round trips per T_1: x runs 0 to 1 and back twice */
      const u = (2 * t / T1) % 1, x = u < 0.5 ? 2 * u : 2 - 2 * u, right = u < 0.5;
      const X = ax.X(0.03 + 0.94 * x), Y = ax.Y(0);
      dot(ctx, X, Y, PAL.ink, true, 14);
      arrow(ctx, X, Y - 40, X + (right ? 70 : -70), Y - 40, C('momentum'), 4);
      text(ctx, right ? 'p = +h/2L' : 'p = −h/2L', X + (right ? 80 : -80), Y - 40, C('momentum'), { size: 20, weight: 600, align: right ? 'left' : 'right', base: 'middle' });
      hits.push({ x: X, y: Y, r: 18, name: `the classical particle at x = ${fmt(x, 2)} L, moving ${right ? 'right' : 'left'} at constant speed` });
      topline(ctx, 'A classical particle with the energy $\\kEone$ is at one place at a time and bounces between the walls at a constant speed.');
      readout(d.readout, `\\kEone = \\dfrac{\\kp^2}{2\\km} \\\\ \\kp = \\pm\\dfrac{h}{2\\kL} = \\pm\\dfrac{6.626\\times10^{-34}\\ \\text{J s}}{2\\,(1.00\\times10^{-9}\\ \\text{m})} = \\pm 3.31\\times10^{-25}\\ \\text{kg m/s}`, '', { values: false });
      return;
    }
    /* the complex wavefunction at time t, as real and imaginary parts */
    const terms = v === 'sup' ? [[1, Math.SQRT1_2], [2, Math.SQRT1_2]] : [[+v, 1]];
    const re = (x) => terms.reduce((s, [n, c]) => s + c * psi(n)(x) * Math.cos(w(n) * t), 0);
    const im = (x) => terms.reduce((s, [n, c]) => s - c * psi(n)(x) * Math.sin(w(n) * t), 0);
    plot(ctx, ax, im, cw, { w: 3, dash: [10, 10], x: [0, 1] });
    plot(ctx, ax, re, cw, { w: 5, x: [0, 1] });
    F.legend(ctx, ax, [{ s: 'real part', color: cw, w: 5 }, { s: 'imaginary part', color: cw, w: 3, dash: [10, 10] }], { corner: 'above' });
    hits.push({ x: ax.X(0.5 / terms[terms.length - 1][0]), y: ax.Y(re(0.5 / terms[terms.length - 1][0])), r: 16, name: 'the real part of Ψ' });
    /* the dial: the phase e^(-i E_n t / hbar), turning clockwise (the canvas y grows downward, so +angle turns clockwise on screen) */
    const dx = 1250, dy = (top.t + top.b) / 2;
    dial(ctx, dx, dy, 62, terms.map(([n]) => ({ a: w(n) * t, len: terms.length > 1 && n === 1 ? 0.6 : 0.92, w: terms.length > 1 && n === 1 ? 3 : 4 })));
    hits.push({ x: dx, y: dy, r: 62, name: terms.length > 1 ? 'the phases of ψ₁ (short hand) and ψ₂ (long hand)' : `the phase of ψ${sub(+v)}, e^(−iE${sub(+v)}t/ħ)` });
    /* the probability density, which moves only when two energies are mixed */
    const bot = { l: 150, r: 1100, t: 470, b: 660 };
    const bx = axes(ctx, bot, XR, [0, 3], { nx: 0, ny: 3, xl: 'position x', yl: '|Ψ|² (1/L)', xc: cl, yc: cp });
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.12);
    ctx.fillRect(bot.l, bot.t, bx.X(0) - bot.l, bot.b - bot.t); ctx.fillRect(bx.X(1), bot.t, bot.r - bx.X(1), bot.b - bot.t); ctx.restore();
    for (const q of [0, 0.5, 1]) text(ctx, fx(q), bx.X(q), bot.b + 26, cl, { size: 17, align: 'center' });
    const dens = (x) => re(x) * re(x) + im(x) * im(x);
    shade(ctx, bx, dens, 0, 0, 1, cp, { alpha: 0.35 });
    plot(ctx, bx, dens, cp, { w: 4, x: [0, 1] });
    hits.push({ x: bx.X(0.5), y: bx.Y(Math.min(2.8, dens(0.5))), r: 18, name: '|Ψ|², the probability density' });
    if (v === 'sup') {
      const dphi = (w(2) - w(1)) * t, Pl = 0.5 + 4 / (3 * Math.PI) * Math.cos(dphi);
      line(ctx, bx.X(0.5), bot.t, bx.X(0.5), bot.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
      topline(ctx, `In $(\\kpsi_1 + \\kpsi_2)/\\sqrt{2}$ the density sloshes from wall to wall, three times for each turn of $\\kpsi_1$'s phase.`);
      readout(d.readout,
        `|\\kPsi|^2 = \\tfrac{1}{2}\\left[\\kpsi_1^2 + \\kpsi_2^2 + 2\\kpsi_1\\kpsi_2\\cos\\dfrac{(\\kE_2-\\kE_1)\\kt}{\\hbar}\\right] \\\\ P\\left(0,\\tfrac{\\kL}{2}\\right) = \\dfrac{1}{2} + \\dfrac{4}{3\\pi}\\cos\\dfrac{(\\kE_2-\\kE_1)\\kt}{\\hbar} = ${fmt(Pl, 2)}`,
        `At $\\kt = ${fmt(t, 1)}$ fs.`, { values: false });
    } else {
      const n = +v, En = n * n * E1, ph = w(n) * t;
      topline(ctx, n === 1
        ? `The phase of $\\kpsi_1$ turns once in ${fmt(T1, 1)} fs while $|\\kPsi|^2$ stays still.`
        : `The phase of $\\kpsi_{${n}}$ turns ${n * n} times while that of $\\kpsi_1$ turns once, and $|\\kPsi|^2$ stays still.`);
      readout(d.readout,
        `\\kPsi(\\kx,\\kt) = \\kpsi_{${n}}(\\kx)\\,e^{-i\\kE_{${n}}\\kt/\\hbar} \\\\ \\dfrac{\\kE_{${n}}\\kt}{\\hbar} = \\dfrac{(${fmt(En, 3)}\\ \\text{eV})(${fmt(t, 1)}\\ \\text{fs})}{0.658\\ \\text{eV fs}} = ${fmt(ph, 1)}\\ \\text{rad}`,
        '', { values: false });
    }
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T1 / DRAWN), draw });
})();

/* =====================================================================
   FIGURE 3.5.5: orthogonality as cancelling areas. Still: no time in it.
   Two choices m and n, 1 to 4; top, psi_m and psi_n in their referent
   colours (the book's four eigenfunctions, psi-1 to psi-4); bottom, their
   product with the area above the axis filled dark and the area below
   filled light. The readout adds the two areas: they cancel unless m = n,
   when the product is |psi_n|^2, never negative, with area 1.
   Opens on the book's first pair, (1, 2). x in L; psi in L^(-1/2); the
   product in 1/L, -2 to 2 (its largest value, at m = n, is 2).
===================================================================== */
(function () {
  const d = sim('sim-ortho', 720);
  const opts = [1, 2, 3, 4].map((k) => ({ value: String(k), label: String(k) }));
  const M = F.choice(d.controls, { label: 'm', options: opts, value: '1', aria: 'the first eigenfunction', key: 'm' });
  const Nn = F.choice(d.controls, { label: 'n', options: opts, value: '2', aria: 'the second eigenfunction', key: 'n' });
  let hits = []; F.hover(d.stage, () => hits);
  /* the area of the positive and of the negative part of f on [0, 1], by the midpoint rule */
  const parts = (f) => { let p = 0, q = 0; const K = 4000; for (let i = 0; i < K; i++) { const v = f((i + 0.5) / K) / K; if (v > 0) p += v; else q += v; } return [p, q]; };
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const m = +M.value, n = +Nn.value, cm = F.ref(`psi-${m}`), cn = F.ref(`psi-${n}`), cl = C('length'), cw = C('wavefunction');
    const top = { l: 150, r: 1250, t: 120, b: 360 };
    const ax = axes(ctx, top, XR, [-1.6, 1.6], { nx: 0, ny: 4, xl: '', yl: 'ψ (L^{-1/2})', yc: cw });
    walls(ctx, ax, hits, false);
    line(ctx, ax.X(0), ax.Y(0), ax.X(1), ax.Y(0), alpha(PAL.ink, 0.35), 2);
    plot(ctx, ax, psi(n), cn, { w: 5, x: [0, 1] });
    if (m !== n) plot(ctx, ax, psi(m), cm, { w: 5, x: [0, 1] });
    /* names at each curve's first crest, where the two never meet */
    const crest = (k) => 0.5 / k;
    text(ctx, `ψ${sub(m)}`, ax.X(crest(m)), ax.Y(psi(m)(crest(m))) - 22, cm, { size: 24, weight: 600, align: 'center' });
    if (m !== n) text(ctx, `ψ${sub(n)}`, ax.X(crest(n)) + (Math.abs(crest(n) - crest(m)) < 0.08 ? 40 : 0), ax.Y(psi(n)(crest(n))) - 22, cn, { size: 24, weight: 600, align: 'center' });
    hits.push({ x: ax.X(crest(m)), y: ax.Y(psi(m)(crest(m))), r: 16, name: `ψ${sub(m)}, ${m - 1} node${m === 2 ? '' : 's'}` });
    hits.push({ x: ax.X(crest(n)), y: ax.Y(psi(n)(crest(n))), r: 16, name: `ψ${sub(n)}, ${n - 1} node${n === 2 ? '' : 's'}` });
    const bot = { l: 150, r: 1250, t: 440, b: 660 };
    const bx = axes(ctx, bot, XR, [-2, 2], { nx: 0, ny: 4, xl: 'position x', yl: `ψ${sub(m)}ψ${sub(n)} (1/L)`, xc: cl, yc: PAL.ink });
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.12);
    ctx.fillRect(bot.l, bot.t, bx.X(0) - bot.l, bot.b - bot.t); ctx.fillRect(bx.X(1), bot.t, bot.r - bx.X(1), bot.b - bot.t); ctx.restore();
    for (const q of [0, 0.5, 1]) text(ctx, fx(q), bx.X(q), bot.b + 26, cl, { size: 17, align: 'center' });
    line(ctx, bx.X(0), bx.Y(0), bx.X(1), bx.Y(0), alpha(PAL.ink, 0.35), 2);
    const prod = (x) => psi(m)(x) * psi(n)(x);
    shade(ctx, bx, (x) => Math.max(0, prod(x)), 0, 0, 1, PAL.ink, { alpha: 0.4 });
    shade(ctx, bx, (x) => Math.min(0, prod(x)), 0, 0, 1, PAL.ink, { alpha: 0.14 });
    plot(ctx, bx, prod, PAL.ink, { w: 4, x: [0, 1] });
    F.legend(ctx, bx, [{ s: 'area above the axis', kind: 'swatch', color: alpha(PAL.ink, 0.4) }, { s: 'area below the axis', kind: 'swatch', color: alpha(PAL.ink, 0.14) }], { corner: 'above' });
    const [p, q] = parts(prod), pr = +p.toFixed(3), qr = +q.toFixed(3);
    hits.push({ x: bx.X(0.5), y: bx.Y(0), r: 20, name: `the product ψ${sub(m)}ψ${sub(n)}: ${fmt(pr, 3)} above the axis, ${fmt(qr, 3)} below` });
    topline(ctx, m === n
      ? `$\\kpsi_{${m}}\\kpsi_{${n}} = |\\kpsi_{${n}}|^2$ is never negative, and its area is 1.`
      : `The two areas of $\\kpsi_{${m}}\\kpsi_{${n}}$ are equal and opposite, so its integral is zero.`);
    readout(d.readout,
      `\\int_{0}^{\\kL}\\kpsi_{${m}}(\\kx)\\kpsi_{${n}}(\\kx)\\,d\\kx = \\delta_{${m}${n}} \\\\ \\int_{0}^{\\kL}\\kpsi_{${m}}(\\kx)\\kpsi_{${n}}(\\kx)\\,d\\kx = (${fmt(pr, 3)}) + (${fmt(qr, 3)}) = ${fmt(pr + qr, 3)}`,
      '', { values: false });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
