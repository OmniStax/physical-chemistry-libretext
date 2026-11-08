/* Figures for section 1.9 The Heisenberg Uncertainty Principle. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.9'] = function (root, F) {
const { el, tex, C, PAL, alpha, ctl, cycle, register, begin, line, dot, text, topline, axes, plot, fmt, hbracket } = F;
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
   FIGURE 1.9.1: electrons arriving one by one. The point: the screen, face
   on and as wide as the figure, where single dots turn into bands, with the
   counts beneath it growing into the predicted distribution (the book's
   three photographs and the curve under them). Moving: the clock is the
   number of electrons recorded. Two slits 2.0 nm apart and 0.5 nm wide, the
   screen 1.0 µm beyond them: bands lambda L / d apart under a single-slit
   envelope whose first zeros stand lambda L / a from the centre. Watching
   which slit each electron passes through leaves the envelope alone. The
   screen spans -1.5 to 1.5 µm across.
===================================================================== */
(function () {
  const d = sim('sim-electron-buildup', 480);
  const W = F.choice(d.controls, { label: '\\text{which slit}', options: [{ value: 'no', label: 'not watched' }, { value: 'yes', label: 'watched' }], value: 'no', aria: 'whether the slit each electron passes through is detected', onInput: () => { sample(); cy.reset(); } });
  const v = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 1.5, max: 4, step: 0.05, value: 2, unit: '× 10⁶ m/s', dec: 2, aria: 'the speed of the electrons', onInput: () => { sample(); cy.reset(); } });
  const T = 7, NMAX = 3000, DS = 2.0e-9, AS = 0.5e-9, LS = 1.0e-6, HALF = 1.5e-6;
  const cy = cycle(() => T, 2.5);
  const SCR = { l: 70, r: 1330, t: 96, b: 296 }, XC = (SCR.l + SCR.r) / 2;
  const HB = { t: 318, b: 440 }, NB = 90, BW = (SCR.r - SCR.l) / NB;
  const lam = () => HP / (ME * v.v * 1e6);
  const yOf = (px) => ((px - XC) / ((SCR.r - SCR.l) / 2)) * HALF;      /* metres across the screen */
  const sinc2 = (u) => (Math.abs(u) < 1e-9 ? 1 : Math.pow(Math.sin(u) / u, 2));
  const prob = (px) => { const y = yOf(px), l = lam(), env = sinc2(Math.PI * AS * y / (l * LS)); return W.value === 'yes' ? env : env * Math.pow(Math.cos(Math.PI * DS * y / (l * LS)), 2); };
  /* one fixed stream of random numbers, so the same electrons arrive every time the clock runs */
  function rng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  let pts = [], expect = [], norm = 1;
  function sample() {
    const r = rng(1991); pts = [];
    while (pts.length < NMAX) { const x = SCR.l + r() * (SCR.r - SCR.l), y = SCR.t + 6 + r() * (SCR.b - SCR.t - 12); if (r() < prob(x)) pts.push([x, y]); }
    let tot = 0; expect = Array.from({ length: NB }, (_, i) => { const p = prob(SCR.l + (i + 0.5) * BW); tot += p; return p; });
    expect = expect.map((p) => p / tot); norm = 1 / tot;
  }
  sample();
  const count = (t) => Math.min(NMAX, Math.floor(NMAX * Math.pow(t / T, 2.4)));
  F.hover(d.stage, () => [{ x: XC, y: (SCR.t + SCR.b) / 2, r: 90, name: 'the screen, seen face on' }, { x: XC, y: (HB.t + HB.b) / 2, r: 60, name: 'electrons counted at each place across the screen, and the predicted distribution' }]);
  function draw() {
    const { ctx } = begin(d.c), t = cy.now(), N = count(t), ce = F.el('e-'), watched = W.value === 'yes';
    topline(ctx, N === 0 ? 'No electrons have arrived yet.'
      : N < 40 ? `${N} electron${N === 1 ? ' has' : 's have'} arrived, each at one place, with no pattern yet.`
        : N < 500 ? `${N} electrons have arrived, and ${watched ? 'a pattern is' : 'bands are'} starting to show.`
          : watched ? `${N} electrons, watched at the slits, make one broad hump with no bands.`
            : `${N} electrons together draw the interference bands of a wave.`);
    /* the screen face on, and the electrons on it */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = alpha(PAL.ink, 0.4); ctx.lineWidth = 2; ctx.fillRect(SCR.l, SCR.t, SCR.r - SCR.l, SCR.b - SCR.t); ctx.strokeRect(SCR.l, SCR.t, SCR.r - SCR.l, SCR.b - SCR.t); ctx.restore();
    ctx.save(); ctx.fillStyle = ce;
    for (let i = 0; i < N; i++) { ctx.beginPath(); ctx.arc(pts[i][0], pts[i][1], 3, 0, TAU); ctx.fill(); }
    ctx.restore();
    if (N > 0 && N < 200) { const h = pts[N - 1]; dot(ctx, h[0], h[1], ce, false, 12); }
    /* the counts across the screen, and the distribution they approach */
    const bins = new Array(NB).fill(0);
    for (let i = 0; i < N; i++) bins[Math.min(NB - 1, Math.floor((pts[i][0] - SCR.l) / BW))]++;
    const top = Math.max(Math.max(...expect) * Math.max(N, 1), ...bins), sc = (HB.b - HB.t) / (top * 1.08 || 1);
    line(ctx, SCR.l, HB.b, SCR.r, HB.b, alpha(PAL.ink, 0.6), 2);
    ctx.save(); ctx.fillStyle = alpha(ce, 0.5);
    bins.forEach((b, i) => { if (b) ctx.fillRect(SCR.l + i * BW + 0.5, HB.b - b * sc, BW - 1, b * sc); });
    ctx.restore();
    if (N >= 20) {
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath();
      for (let x = SCR.l; x <= SCR.r; x += 2) { const y = HB.b - prob(x) * norm * N * sc; if (x > SCR.l) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
      ctx.stroke(); ctx.restore();
    }
    text(ctx, 'electrons counted across the screen', XC, HB.b + 26, PAL.muted, { size: 17, align: 'center' });
    const l = lam();
    readout(d.readout, `\\klambda = \\dfrac{h}{\\km \\kv} = \\dfrac{6.626\\times10^{-34}\\ \\text{kg m}^{2}\\text{/s}}{(9.109\\times10^{-31}\\ \\text{kg})(${fmt(v.v, 2)}\\times10^{6}\\ \\text{m/s})} = ${sciT(l)}\\ \\text{m}`,
      watched ? 'With the slit known, only the single-slit pattern is left, its first dark bands $\\klambda L/a$ = ' + fmt(l * LS / AS * 1e6, 2) + ' µm from the centre.' : 'The bands stand $\\klambda L/d$ = ' + fmt(l * LS / DS * 1e6, 3) + ' µm apart on the screen.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 1.9.2: the wave packet. Still: the width is the whole figure.
   The point: the two shaded widths, ±Δx on the packet above and ±Δp on its
   momenta below, one shrinking as the other grows. An electron of central
   wavelength 100 pm (p0 = 6.63 x 10^-24 kg m/s) localized as
   psi(x) = exp(-x^2 / 4 dx^2) cos(2 pi x / lambda0), so dx is the standard
   deviation of |psi|^2; its momenta spread as a Gaussian of standard
   deviation dp = hbar / (2 dx), the least the principle allows.
   Top x: -1500 to 1500 pm. Bottom x: p from 0 to 14 x 10^-24 kg m/s (at the
   narrowest packet, 25 pm, p0 +- 3 dp runs from 0.3 to 13).
===================================================================== */
(function () {
  const d = sim('sim-wave-packet', 640);
  const DX = ctl(d.controls, { label: '\\kdx', cls: 'length', min: 25, max: 600, step: 1, value: 150, unit: 'pm', dec: 0, detents: [{ v: 150, label: 'Mg atom' }], snap: true, aria: 'the uncertainty in the position of the electron' });
  const L0 = 100, P0 = HP / (L0 * 1e-12);
  function draw() {
    const { ctx } = begin(d.c);
    const dx = DX.v, dp = HBAR / (2 * dx * 1e-12), dv = dp / ME;
    const cx = C('length'), cp = C('momentum'), cw = C('wavelength');
    topline(ctx, `A packet $\\kdx = ${fmt(dx, 0)}$ pm wide holds momenta spread over $\\kdp = ${sciT(dp)}$ kg m/s.`);
    /* the packet, its ±Δx stretch shaded */
    const b1 = { l: 150, r: 1320, t: 130, b: 320 };
    const a1 = axes(ctx, b1, [-1500, 1500], [-1.2, 1.2], { nx: 6, ny: 0, xl: 'position x (pm)', xc: cx, yc: PAL.ink });
    ctx.save(); ctx.fillStyle = alpha(cx, 0.14); ctx.fillRect(a1.X(-dx), b1.t, a1.X(dx) - a1.X(-dx), b1.b - b1.t); ctx.restore();
    const env = (x) => Math.exp(-(x * x) / (4 * dx * dx));
    plot(ctx, a1, env, alpha(PAL.ink, 0.35), { w: 2 });
    plot(ctx, a1, (x) => -env(x), alpha(PAL.ink, 0.35), { w: 2 });
    plot(ctx, a1, (x) => env(x) * Math.cos(TAU * x / L0), cw, { w: 4 });
    hbracket(ctx, a1.X(-dx), a1.X(dx), b1.t - 8, cx, '±Δx', { side: 'above' });
    /* the momenta it holds, their ±Δp stretch shaded */
    const b2 = { l: 150, r: 1320, t: 420, b: 570 };
    const a2 = axes(ctx, b2, [0, 14], [0, 1.15], { nx: 7, ny: 0, xl: 'momentum p (10⁻²⁴ kg m/s)', xc: cp, yc: PAL.ink });
    const p0 = P0 / 1e-24, s = dp / 1e-24, g = (p) => Math.exp(-((p - p0) ** 2) / (2 * s * s));
    ctx.save(); ctx.fillStyle = alpha(cp, 0.14); ctx.fillRect(a2.X(p0 - s), b2.t, a2.X(p0 + s) - a2.X(p0 - s), b2.b - b2.t); ctx.restore();
    F.shade(ctx, a2, g, 0, 0, 14, cp, { alpha: 0.18 });
    plot(ctx, a2, g, cp, { w: 4 });
    hbracket(ctx, a2.X(p0 - s), a2.X(p0 + s), b2.t - 8, cp, '±Δp', { side: 'above' });
    readout(d.readout,
      `\\kdp_x\\kdx \\ge \\dfrac{\\hbar}{2} \\\\ \\kdp_x = \\dfrac{1.0546\\times10^{-34}\\ \\text{kg m}^2\\text{/s}}{2\\,(${fmt(dx, 0)}\\times10^{-12}\\ \\text{m})} = ${sciT(dp)}\\ \\text{kg m/s}`,
      `For an electron that is $\\kdv = \\kdp/\\km$ = ${sciU(dv)} m/s.`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
