/* Figures for section 1.9 The Heisenberg Uncertainty Principle. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.9'] = function (root, F) {
const { el, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, topline, axes, plot, fmt, hbracket } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;
function readout(host, main, small) { tex(host, main); if (small) { const s = el('small', null, small); host.appendChild(s); F.renderMath(s); } }

/* ---------- constants as the book states them ---------- */
const HP = 6.626e-34, HBAR = 1.0545718e-34, ME = 9.109383e-31;
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const expOf = (x) => Math.floor(Math.log10(Math.abs(x)) + 1e-9);
function sciT(x, d = 2) { const e = expOf(x), m = x / Math.pow(10, e); return m.toFixed(d) + '\\times10^{' + e + '}'; }
function sciU(x, d = 2) { const e = expOf(x), m = x / Math.pow(10, e); return m.toFixed(d) + ' × 10' + String(e).split('').map((c) => SUP[c] ?? c).join(''); }

/* =====================================================================
   FIGURE 1.9.1: electrons arriving one by one. Moving: the clock is the
   number of electrons recorded, and the pattern emerges from it. Two slits
   2.0 nm apart and 0.5 nm wide, the screen 1.0 µm beyond them (drawn not to
   scale): bands lambda L / d apart under a single-slit envelope whose first
   zeros stand lambda L / a from the centre. Watching which slit each
   electron passes through leaves the single-slit envelope alone. The screen
   face on spans -1.5 to 1.5 µm.
===================================================================== */
(function () {
  const d = sim('sim-electron-buildup', 480);
  const W = F.choice(d.controls, { label: '\\text{which slit}', options: [{ value: 'no', label: 'not watched' }, { value: 'yes', label: 'watched' }], value: 'no', aria: 'whether the slit each electron passes through is detected', onInput: () => { sample(); cy.reset(); } });
  const v = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 1.5, max: 4, step: 0.05, value: 2, unit: '× 10⁶ m/s', dec: 2, aria: 'the speed of the electrons', onInput: () => { sample(); cy.reset(); } });
  const T = 7, NMAX = 2400, DS = 2.0e-9, AS = 0.5e-9, LS = 1.0e-6, HALF = 1.5e-6;
  const cy = cycle(() => T, 2.5);
  const SCR = { l: 660, r: 810, t: 90, b: 410 }, YC = (SCR.t + SCR.b) / 2;
  const HB = { l: 880, r: 1320 }, NB = 64, BH = (SCR.b - SCR.t) / NB;
  const lam = () => HP / (ME * v.v * 1e6);
  const yOf = (py) => ((py - YC) / ((SCR.b - SCR.t) / 2)) * HALF;      /* metres on the screen */
  const sinc2 = (u) => (Math.abs(u) < 1e-9 ? 1 : Math.pow(Math.sin(u) / u, 2));
  const prob = (py) => { const y = yOf(py), l = lam(), env = sinc2(Math.PI * AS * y / (l * LS)); return W.value === 'yes' ? env : env * Math.pow(Math.cos(Math.PI * DS * y / (l * LS)), 2); };
  /* one fixed stream of random numbers, so the same electrons arrive every time the clock runs */
  function rng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  let pts = [], expect = [];
  function sample() {
    const r = rng(1991); pts = [];
    while (pts.length < NMAX) { const y = SCR.t + r() * (SCR.b - SCR.t), x = SCR.l + 6 + r() * (SCR.r - SCR.l - 12); if (r() < prob(y)) pts.push([x, y]); }
    let tot = 0; expect = Array.from({ length: NB }, (_, i) => { const p = prob(SCR.t + (i + 0.5) * BH); tot += p; return p; });
    expect = expect.map((p) => p / tot);
  }
  sample();
  const count = (t) => Math.min(NMAX, Math.floor(NMAX * Math.pow(t / T, 2.4)));
  F.hover(d.stage, () => [{ x: 110, y: 250, r: 50, name: 'the electron source' }, { x: 380, y: 250, r: 40, name: 'the barrier with two slits' }, { x: 580, y: 250, r: 20, name: 'the screen, seen edge on' }]);
  function draw() {
    const { ctx } = begin(d.c), t = cy.now(), N = count(t), ce = F.el('e-'), watched = W.value === 'yes';
    topline(ctx, N === 0 ? 'No electrons have arrived yet.' : `${N} electron${N === 1 ? ' has' : 's have'} arrived, each at one definite place. ` + (N < 40 ? 'So far they seem to land at random.' : N < 500 ? 'A pattern is beginning to show.' : watched ? 'Watched at the slits, they draw only the single-slit pattern.' : 'Together they draw the interference pattern of a wave.'));
    /* the source, the barrier and the screen edge on */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.fillStyle = PAL.soft; ctx.beginPath(); ctx.rect(70, 220, 80, 60); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'electron source', 110, 306, PAL.muted, { size: 18, align: 'center' });
    const sl = [YC - 22, YC + 22];
    line(ctx, 380, SCR.t, 380, sl[0] - 6, PAL.ink, 10); line(ctx, 380, sl[0] + 6, 380, sl[1] - 6, PAL.ink, 10); line(ctx, 380, sl[1] + 6, 380, SCR.b, PAL.ink, 10);
    text(ctx, 'two slits', 380, SCR.b + 26, PAL.muted, { size: 18, align: 'center' });
    if (watched) { [sl[0], sl[1]].forEach((y) => { ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(380, y, 18, 12, 0, 0, TAU); ctx.stroke(); ctx.restore(); }); text(ctx, 'detector coils', 380, SCR.t - 14, PAL.muted, { size: 16, align: 'center' }); }
    line(ctx, 580, SCR.t, 580, SCR.b, PAL.ink, 5);
    text(ctx, 'screen', 580, SCR.b + 26, PAL.muted, { size: 18, align: 'center' });
    arrow(ctx, 160, 250, 360, 250, alpha(PAL.ink, 0.4), 3);
    /* the newest electron in flight */
    if (N > 0 && N < NMAX) { const k = (t * 9) % 1, h = pts[Math.min(N, NMAX - 1)], x = 160 + (580 - 160) * k, y = k < 0.53 ? 250 : 250 + (h[1] - 250) * (k - 0.53) / 0.47; dot(ctx, x, y, ce, true, 6); }
    /* the screen face on */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.fillRect(SCR.l, SCR.t, SCR.r - SCR.l, SCR.b - SCR.t); ctx.strokeRect(SCR.l, SCR.t, SCR.r - SCR.l, SCR.b - SCR.t); ctx.restore();
    text(ctx, 'the screen, face on', (SCR.l + SCR.r) / 2, SCR.b + 26, PAL.muted, { size: 18, align: 'center' });
    ctx.save(); ctx.fillStyle = ce;
    for (let i = 0; i < N; i++) { ctx.beginPath(); ctx.arc(pts[i][0], pts[i][1], 2.6, 0, TAU); ctx.fill(); }
    ctx.restore();
    if (N > 0 && N < 200) { const h = pts[N - 1]; dot(ctx, h[0], h[1], ce, false, 11); }
    /* the counts at each height, and the probability distribution they approach */
    const bins = new Array(NB).fill(0);
    for (let i = 0; i < N; i++) bins[Math.min(NB - 1, Math.floor((pts[i][1] - SCR.t) / BH))]++;
    const top = Math.max(Math.max(...expect) * Math.max(N, 1), ...bins), sc = (HB.r - HB.l) / (top * 1.1 || 1);
    line(ctx, HB.l, SCR.t, HB.l, SCR.b, PAL.ink, 2.5);
    ctx.save(); ctx.fillStyle = alpha(ce, 0.45);
    bins.forEach((b, i) => { if (b) ctx.fillRect(HB.l, SCR.t + i * BH + 0.5, b * sc, BH - 1); });
    ctx.restore();
    if (N >= 20) {
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath();
      expect.forEach((p, i) => { const x = HB.l + p * N * sc, y = SCR.t + (i + 0.5) * BH; if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); });
      ctx.stroke(); ctx.restore();
      text(ctx, 'predicted distribution', HB.r, SCR.t + 8, PAL.ink, { size: 18, weight: 600, align: 'right', bg: PAL.panel });
    }
    text(ctx, 'electrons counted at each height', (HB.l + HB.r) / 2, SCR.b + 26, PAL.ink, { size: 18, align: 'center' });
    const l = lam();
    readout(d.readout, `\\klambda = \\dfrac{h}{\\km \\kv} = \\dfrac{6.626\\times10^{-34}\\ \\text{kg m}^{2}\\text{/s}}{(9.109\\times10^{-31}\\ \\text{kg})(${fmt(v.v, 2)}\\times10^{6}\\ \\text{m/s})} = ${sciT(l)}\\ \\text{m}`,
      watched ? 'Knowing the slit leaves a single-slit pattern, its first dark bands $\\klambda L/a$ = ' + fmt(l * LS / AS * 1e6, 2) + ' µm from the centre.' : 'The bands stand $\\klambda L/d$ = ' + fmt(l * LS / DS * 1e6, 3) + ' µm apart on the screen.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 1.9.2: the wave packet. Still: the width is the whole figure.
   An electron of central wavelength 100 pm (p0 = 6.63 x 10^-24 kg m/s)
   localized as psi(x) = exp(-x^2 / 4 dx^2) cos(2 pi x / lambda0), so dx is
   the standard deviation of |psi|^2; its momenta spread as a Gaussian of
   standard deviation dp = hbar / (2 dx), the least the principle allows.
   Faint behind the packet, seven of the waves it is made of, each weighted
   by how much of it the packet holds.
   Top x: -1500 to 1500 pm. Bottom x: p from 0 to 14 x 10^-24 kg m/s (at the
   narrowest packet, 25 pm, p0 +- 3 dp runs from 0.3 to 13).
===================================================================== */
(function () {
  const d = sim('sim-wave-packet', 720);
  const DX = ctl(d.controls, { label: '\\kdx', cls: 'length', min: 25, max: 600, step: 1, value: 150, unit: 'pm', dec: 0, detents: [{ v: 150, label: 'Mg atom' }], snap: true, aria: 'the uncertainty in the position of the electron' });
  const L0 = 100, P0 = HP / (L0 * 1e-12);
  function draw() {
    const { ctx } = begin(d.c);
    const dx = DX.v, dp = HBAR / (2 * dx * 1e-12), dv = dp / ME;
    const cx = C('length'), cp = C('momentum'), cw = C('wavelength');
    topline(ctx, `A packet with Δx = ${fmt(dx, 0)} pm holds momenta spread by ${sciU(dp)} kg m/s; the electron's speed is uncertain by ${sciU(dv)} m/s.`);
    /* the packet */
    const b1 = { l: 150, r: 1320, t: 160, b: 360 };
    const a1 = axes(ctx, b1, [-1500, 1500], [-1.2, 1.2], { nx: 6, ny: 0, xl: 'position x (pm)', yl: 'wave', xc: cx, yc: PAL.ink });
    const env = (x) => Math.exp(-(x * x) / (4 * dx * dx));
    const ks = dp / HBAR * 1e-12;                         /* the spread in wavenumber, per pm */
    for (let j = -3; j <= 3; j++) { const w = Math.exp(-(j * j) / 2), k = TAU / L0 + j * ks; plot(ctx, a1, (x) => w * Math.cos(k * x), alpha(cw, 0.12 + 0.1 * w), { w: 1.5 }); }
    plot(ctx, a1, env, alpha(PAL.ink, 0.45), { w: 2 });
    plot(ctx, a1, (x) => -env(x), alpha(PAL.ink, 0.45), { w: 2 });
    plot(ctx, a1, (x) => env(x) * Math.cos(TAU * x / L0), cw, { w: 3.5 });
    if (dx * 2 < 3000) hbracket(ctx, a1.X(-dx), a1.X(dx), b1.t - 6, cx, '±Δx = ±' + fmt(dx, 0) + ' pm', { side: 'above' });
    /* the momenta it holds */
    const b2 = { l: 150, r: 1320, t: 470, b: 630 };
    const a2 = axes(ctx, b2, [0, 14], [0, 1.15], { nx: 7, ny: 0, xl: 'momentum p (10⁻²⁴ kg m/s)', yl: 'share', xc: cp, yc: PAL.ink });
    const p0 = P0 / 1e-24, s = dp / 1e-24;
    F.shade(ctx, a2, (p) => Math.exp(-((p - p0) ** 2) / (2 * s * s)), 0, 0, 14, cp, { alpha: 0.18 });
    plot(ctx, a2, (p) => Math.exp(-((p - p0) ** 2) / (2 * s * s)), cp, { w: 4 });
    line(ctx, a2.X(p0), b2.t, a2.X(p0), b2.b, alpha(PAL.ink, 0.4), 2, [10, 10]);
    text(ctx, 'p₀ = h/λ₀', a2.X(p0) + 8, b2.t + 10, PAL.muted, { size: 17 });
    const y0 = a2.Y(Math.exp(-0.5));
    if (s > 0.02) hbracket(ctx, a2.X(p0 - s), a2.X(p0 + s), y0, cp, '±Δp', { side: 'below' });
    readout(d.readout,
      `\\kdp_x\\kdx \\ge \\dfrac{\\hbar}{2} \\\\ \\kdp_x = \\dfrac{1.0546\\times10^{-34}\\ \\text{kg m}^2\\text{/s}}{2\\,(${fmt(dx, 0)}\\times10^{-12}\\ \\text{m})} = ${sciT(dp)}\\ \\text{kg m/s}`,
      `For an electron that is $\\kdv = \\kdp/\\km$ = ${sciU(dv)} m/s.`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
