/* Figures for section 8.4 An Electron has an Intrinsic Spin Angular Momentum. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.4'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- constants, SI ---------- */
const h = 6.62607e-34, c = 2.99792e8, MUB = 9.2740e-24, G = 2.0023, EV = 1.602177e-19;
/* a number as m × 10^k in TeX */
function sci(x, d) {
  if (x === 0) return '0';
  const k = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, k), ms = m.toFixed(d);
  if (Math.abs(+ms) >= 10) return sci(x * 1.0000001, d);
  return `${ms}\\times10^{${k}}`;
}
/* boxes in a locked perspective (rule 28.2): the faces that look at the camera, far to near */
function solids(ctx, V, eye, list) {
  const faces = [];
  for (const b of list) {
    const [cx, cy, cz] = b.c, [w, hh, d] = b.s.map((v) => v / 2);
    const P = (sx, sy, sz) => [cx + sx * w, cy + sy * hh, cz + sz * d];
    const quads = [
      [[1, 0, 0], [P(1, -1, -1), P(1, 1, -1), P(1, 1, 1), P(1, -1, 1)]], [[-1, 0, 0], [P(-1, -1, -1), P(-1, -1, 1), P(-1, 1, 1), P(-1, 1, -1)]],
      [[0, 1, 0], [P(-1, 1, -1), P(-1, 1, 1), P(1, 1, 1), P(1, 1, -1)]], [[0, -1, 0], [P(-1, -1, -1), P(1, -1, -1), P(1, -1, 1), P(-1, -1, 1)]],
      [[0, 0, 1], [P(-1, -1, 1), P(1, -1, 1), P(1, 1, 1), P(-1, 1, 1)]], [[0, 0, -1], [P(-1, -1, -1), P(-1, 1, -1), P(1, 1, -1), P(1, -1, -1)]]];
    for (const [n, q] of quads) {
      const fc = [cx + n[0] * w, cy + n[1] * hh, cz + n[2] * d];
      if ((eye[0] - fc[0]) * n[0] + (eye[1] - fc[1]) * n[1] + (eye[2] - fc[2]) * n[2] <= 0) continue;
      faces.push({ q, n, far: Math.hypot(eye[0] - cx, eye[1] - cy, eye[2] - cz), tint: b.tint });
    }
  }
  faces.sort((a, b) => b.far - a.far);
  for (const f of faces) {
    const pts = f.q.map((p) => V.P(p));
    F.face(ctx, pts, V.shade(f.n), 2);
    if (f.tint) { ctx.save(); ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); ctx.fillStyle = f.tint; ctx.fill(); ctx.restore(); }
  }
}
const eyeOf = (yaw, pitch, dist) => [dist * Math.sin(yaw) * Math.cos(pitch), dist * Math.sin(pitch), dist * Math.cos(yaw) * Math.cos(pitch)];

/* ---------- Figure 8.4.1 + 8.4.4: the spin-resonance spectrometer ----------
   Moving: microwave photons stream from the generator through the sample of hydrogen atoms between the
   poles of the magnet to the detector, one pass every 4 s (the stream is evenly spaced, so the loop is
   seamless). The sample absorbs a share A(nu) of them, a resonance line of half-width 0.4 GHz (drawn
   wider than a real line so a slider can find it) centred on nu0 = g mu_B B / h. Right: the alpha and
   beta levels against B, 0 to 1.5 T, E - E_1s from -15 to 15 x 10^-24 J (g mu_B 1.5 T / 2 = 13.9), and the
   photon's h nu drawn up from beta at the current B. Below the apparatus: the detector's signal against
   nu, 0 to 40 GHz, with its dip. Opens on the book's 10^4 G and 28 GHz. */
(function () {
  const d = sim('sim-esr', 660);
  const RUN = 4;
  const cy = F.cycle(() => RUN, 0.01);
  const B = ctl(d.controls, { label: '\\kBz', cls: 'magnetic-field', key: 'B', min: 0, max: 1.5, step: 0.01, value: 1, dec: 2,
    fmt: (v) => `${fmt(v, 2)} T = ${fmt(v * 1e4, 0)} G` });
  const NU = ctl(d.controls, { label: '\\knu', cls: 'frequency', key: 'nu', min: 1, max: 40, step: 0.1, value: 28, unit: 'GHz', dec: 1 });
  const W0 = 0.4, DEPTH = 0.9;
  const nu0 = (b) => G * MUB * b / h / 1e9;
  const absorb = (nu, b) => DEPTH / (1 + ((nu - nu0(b)) / W0) ** 2);
  const yaw = 0.55, pitch = 0.32, dist = 1500;
  const eye = eyeOf(yaw, pitch, dist);
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    const b = B.v, nu = NU.v, A = absorb(nu, b), res = A > 0.45, t = cy.now() / RUN;
    topline(ctx, res
      ? `At $\\knu = ${fmt(nu, 1)}$ GHz the sample absorbs: $h\\knu$ matches the gap between $\\kalphas$ and $\\kbetas$ at $\\kBz = ${fmt(b, 2)}$ T.`
      : `At $\\kBz = ${fmt(b, 2)}$ T the sample absorbs at ${fmt(nu0(b), 1)} GHz; at ${fmt(nu, 1)} GHz the photons pass through.`);
    /* the apparatus, from the book's viewpoint */
    const V = F.view({ yaw, pitch, dist, cx: 430, cy: 300 });
    const field = b / 1.5;
    /* the field between the poles, drawn behind the beam */
    const nl = Math.round(field * 5);
    for (let k = 0; k < nl; k++) {
      const z = -55 + (110 * (k + 0.5)) / nl;
      const p0 = V.P([-50, 70, z]), p1 = V.P([-50, -70, z]), q0 = V.P([50, 70, z]), q1 = V.P([50, -70, z]);
      line(ctx, p0[0], p0[1], p1[0], p1[1], alpha(C('magnetic-field'), 0.5), 2, [6, 6]);
      line(ctx, q0[0], q0[1], q1[0], q1[1], alpha(C('magnetic-field'), 0.5), 2, [6, 6]);
    }
    solids(ctx, V, eye, [
      { c: [-330, 0, 0], s: [150, 120, 120] }, { c: [330, 0, 0], s: [110, 120, 120] },
      { c: [0, 125, 0], s: [160, 110, 160] }, { c: [0, -125, 0], s: [160, 110, 160] },
      { c: [0, 0, 0], s: [36, 36, 36], tint: alpha(F.el('H'), 0.55) }]);
    /* the photons */
    const N = 16, x0 = -255, x1 = 275;
    for (let i = 0; i < N; i++) {
      const s = (i / N + t) % 1, x = x0 + (x1 - x0) * s;
      const taken = ((i * 0.6180339) % 1) < A;
      if (taken && x > 18) continue;
      const fade = taken && x > -30 ? Math.max(0, 1 - (x + 30) / 48) : 1;
      const p = V.P([x, 0, 0]);
      dot(ctx, p[0], p[1], alpha(C('frequency'), 0.95 * fade), true, 8);
    }
    const lab = (s, p, dy, col) => { const q = V.P(p); text(ctx, s, q[0], q[1] + dy, col || PAL.ink, { size: 20, align: 'center' }); };
    lab('microwave generator', [-330, -60, 60], 40);
    lab('detector', [330, -60, 60], 40);
    lab('N', [0, 180, 80], -18, PAL.ink); lab('S', [0, -180, 80], 30, PAL.ink);
    lab('hydrogen atoms', [0, -70, 80], 64, PAL.muted);
    /* the detector's signal against frequency */
    const ax = axes(ctx, { l: 110, r: 820, t: 500, b: 610 }, [0, 40], [0, 1.1], { nx: 8, ny: 0, xl: 'microwave frequency ν (GHz)', yl: 'signal', xc: C('frequency') });
    plot(ctx, ax, (f) => 1 - absorb(f, b), PAL.ink, { w: 3 });
    line(ctx, ax.X(nu), ax.Y(0), ax.X(nu), ax.Y(1.1), alpha(C('frequency'), 0.9), 3, [4, 8]);
    dot(ctx, ax.X(nu), ax.Y(1 - A), C('frequency'), true, 9);
    /* the two spin levels against the field */
    const ax2 = axes(ctx, { l: 980, r: W - 40, t: 120, b: 610 }, [0, 1.5], [-15, 15], { nx: 3, ny: 6, xl: 'magnetic field B (T)', yl: 'E − E₁ₛ (10⁻²⁴ J)', xc: C('magnetic-field'), yc: C('energy') });
    const half = (bb) => G * MUB * bb / 2 / 1e-24;
    plot(ctx, ax2, (bb) => half(bb), C('energy'), { w: 4 });
    plot(ctx, ax2, (bb) => -half(bb), C('energy'), { w: 4 });
    text(ctx, 'α', ax2.X(1.42), ax2.Y(half(1.42)) - 22, C('energy'), { size: 24, weight: 600, align: 'center' });
    text(ctx, 'β', ax2.X(1.42), ax2.Y(-half(1.42)) + 24, C('energy'), { size: 24, weight: 600, align: 'center' });
    line(ctx, ax2.X(b), ax2.Y(-15), ax2.X(b), ax2.Y(15), alpha(PAL.ink, 0.35), 2, [4, 8]);
    const hv = h * nu * 1e9 / 1e-24, yb = -half(b), top = Math.min(15, yb + hv);
    arrow(ctx, ax2.X(b) + 14, ax2.Y(yb), ax2.X(b) + 14, ax2.Y(top), res ? C('frequency') : alpha(C('frequency'), 0.45), 4);
    text(ctx, 'hν', ax2.X(b) + 26, ax2.Y((yb + top) / 2), C('frequency'), { size: 22, weight: 600 });
    hits.length = 0;
    const g = V.P([-330, 0, 0]), s0 = V.P([0, 0, 0]), dd = V.P([330, 0, 0]);
    hits.push({ x: g[0], y: g[1], r: 70, name: 'microwave generator' }, { x: s0[0], y: s0[1], r: 26, name: 'sample of hydrogen atoms between the magnet poles' },
      { x: dd[0], y: dd[1], r: 60, name: 'detector' });
    const dE = G * MUB * b;
    tex(d.readout, `\\kdE = \\kEalpha - \\kEbeta = g\\mu_B \\kBz = (2.0023)(9.274\\times10^{-24}\\ \\text{J/T})(${fmt(b, 2)}\\ \\text{T}) = ${sci(dE, 3)}\\ \\text{J} \\\\ h\\knu = (6.626\\times10^{-34}\\ \\text{J s})(${fmt(nu, 1)}\\times10^{9}\\ \\text{Hz}) = ${sci(h * nu * 1e9, 3)}\\ \\text{J} ${res ? '\\approx' : '\\neq'} \\kdE`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* ---------- Figure 8.4.2: the Zeeman splitting of 2p -> 1s ----------
   Still: a level diagram and the emission it gives answer the field slider. Left: 1s at the bottom and 2p
   above, 10.2 eV apart (drawn 380 units); 2p splits by mu_B B_z per step of m_l, drawn at 70 units per tesla,
   far larger than to scale (the readout states the factor, rule 28.4). Three arrows (symbolic: they name
   the transitions) run down to 1s. Right: the Lyman alpha line on a true scale, its three components at
   their shifts from 121.567 nm in picometres, -1.5 to 1.5 pm (2 T shifts them 1.38 pm). */
(function () {
  const d = sim('sim-zeeman', 600);
  const BZ = ctl(d.controls, { label: '\\kBz', cls: 'magnetic-field', key: 'Bz', min: 0, max: 2, step: 0.01, value: 1, unit: 'T', dec: 2 });
  const E2 = -13.6057 / 4, LAM = 121.567e-9, PXT = 70, PXEV = 380 / 10.2;
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    const b = BZ.v, split = MUB * b / EV, factor = PXT / (PXEV * MUB / EV);
    topline(ctx, b < 0.005
      ? 'With no field the three 2p states share one energy, and 2p → 1s gives one line.'
      : `At $\\kBz = ${fmt(b, 2)}$ T the 2p levels lie ${fmt(split * 1e5, 2)} × 10⁻⁵ eV apart, drawn about ${fmt(factor / 1e4, 0)} × 10⁴ times larger.`);
    /* the level diagram */
    const y1s = 540, y2p = y1s - 380, xl = 120, xm = 330, xr = 600;
    line(ctx, xl, y1s, xr, y1s, PAL.ink, 5);
    text(ctx, '1s', xl - 20, y1s, PAL.ink, { size: 24, align: 'right' });
    line(ctx, xl, y2p, xm - 40, y2p, PAL.ink, 5);
    text(ctx, '2p', xl - 20, y2p, PAL.ink, { size: 24, align: 'right' });
    text(ctx, 'B = 0', (xl + xm - 40) / 2, y1s + 40, PAL.muted, { size: 20, align: 'center' });
    text(ctx, 'B_z on', (xm + xr) / 2 + 20, y1s + 40, PAL.muted, { size: 20, align: 'center' });
    const ys = [1, 0, -1].map((m) => y2p - m * PXT * b);
    [1, 0, -1].forEach((m, i) => {
      line(ctx, xm - 40, y2p, xm + 10, ys[i], alpha(PAL.ink, 0.35), 2, [4, 8]);
      line(ctx, xm + 10, ys[i], xr, ys[i], C('energy'), 5);
      if (b >= 0.3 || m === 0) text(ctx, `m_l = ${m > 0 ? '+1' : m === 0 ? '0' : '−1'}`, xr + 16, ys[i], C('energy'), { size: 20 });
      const xa = xm + 80 + i * 70;
      arrow(ctx, xa, ys[i] + 6, xa, y1s - 6, alpha(PAL.ink, 0.6), 3);
    });
    arrow(ctx, (xl + xm - 40) / 2, y2p + 6, (xl + xm - 40) / 2, y1s - 6, alpha(PAL.ink, 0.6), 3);
    /* the line on a true scale */
    const ax = axes(ctx, { l: 830, r: W - 50, t: 200, b: 460 }, [-1.5, 1.5], [0, 1], { nx: 6, ny: 0, xl: 'shift from 121.567 nm (pm)', yl: '', xc: C('wavelength') });
    const sh = (m) => -LAM * LAM * (m * MUB * b / (h * c)) * 1e12;
    [1, 0, -1].forEach((m) => {
      const x = ax.X(sh(m));
      line(ctx, x, ax.Y(0), x, ax.Y(0.85), C('wavelength'), 5);
      if (b >= 0.3) text(ctx, m > 0 ? '+1' : m === 0 ? '0' : '−1', x, ax.Y(0.92), C('energy'), { size: 20, align: 'center' });
    });
    text(ctx, 'Lyman α emission', (830 + W - 50) / 2, 160, PAL.ink, { size: 22, align: 'center' });
    hits.length = 0;
    [1, 0, -1].forEach((m, i) => hits.push({ x: (xm + xr) / 2, y: ys[i], r: 14, name: `2p, m_l = ${m}: ${fmt(m * split * 1e5, 2)} × 10⁻⁵ eV from the zero-field level` }));
    hits.push({ x: (xl + xr) / 2, y: y1s, r: 14, name: '1s, m_l = 0 only: no shift' });
    const E = E2 + split;
    tex(d.readout, `\\langle \\kE \\rangle = \\kEn + \\mu_B \\kBz m_l \\\\ \\langle \\kE \\rangle = ${fmt(E2, 5)}\\ \\text{eV} + (5.788\\times10^{-5}\\ \\text{eV/T})(${fmt(b, 2)}\\ \\text{T})(+1) = ${fmt(E, 6)}\\ \\text{eV}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- Figure (the book's second 8.4.2): Stern-Gerlach ----------
   Moving: atoms leave the oven, pass the slit and the magnet and land on the screen, which fills dot by dot
   over 6 s. In the magnet the field grows toward the north pole, so an atom feels F_z = mu_z dB/dz. A silver
   atom's mu_z is +mu_B or -mu_B (one unpaired electron), two spots; classical magnets pointing every way
   have mu_z = mu_B cos(theta) with cos(theta) spread evenly from -1 to 1, a smear. Deflection on the screen:
   70 units at mu_B and 1500 T/m. The atoms are a fixed pseudo-random sequence, so every pass is the same. */
(function () {
  const d = sim('sim-sg', 600);
  const RUN = 6, NMAX = 260, FLY = 0.9;
  const cy = F.cycle(() => RUN, 1.2);
  const K = F.choice(d.controls, { label: '\\text{beam}', key: 'beam', aria: 'what the beam is made of',
    options: [{ value: 'ag', label: 'silver atoms' }, { value: 'classical', label: 'classical magnets' }], value: 'ag', onInput: () => cy.reset() });
  const GR = ctl(d.controls, { label: 'dB_z/dz', cls: 'magnetic-field', key: 'grad', min: 0, max: 1500, step: 10, value: 1000, unit: 'T/m', dec: 0, onInput: () => cy.reset() });
  const rnd = (i, k) => { const x = Math.sin(i * 12.9898 + k * 78.233) * 43758.5453; return x - Math.floor(x); };
  const yaw = 0.62, pitch = 0.28, dist = 1500;
  const eye = eyeOf(yaw, pitch, dist);
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const ag = K.value === 'ag', g = GR.v, t = cy.now();
    const mu = (i) => (ag ? (rnd(i, 1) < 0.5 ? 1 : -1) : 2 * rnd(i, 1) - 1);
    const defl = (i) => 70 * mu(i) * g / 1500;
    topline(ctx, ag ? 'Silver atoms land in two spots: the moment along the field has only two values.' : 'Magnets pointing every which way would spread into a smear along the field.');
    const V = F.view({ yaw, pitch, dist, cx: 640, cy: 330 });
    const XS = 420;
    /* the screen: a plate at x = XS, seen from the front side */
    const sc = [[XS, -150, -110], [XS, 150, -110], [XS, 150, 110], [XS, -150, 110]].map((p) => V.P(p));
    F.face(ctx, sc, V.shade([-1, 0, 0]), 2);
    solids(ctx, V, eye, [
      { c: [-430, 0, 0], s: [130, 130, 130] },
      { c: [-250, 55, 0], s: [14, 90, 130] }, { c: [-250, -55, 0], s: [14, 90, 130] },
      { c: [60, 95, 0], s: [300, 80, 120] }, { c: [60, -95, 0], s: [300, 80, 120] }]);
    /* the hits so far */
    const n = Math.min(NMAX, Math.floor(NMAX * t / (RUN - FLY)));
    for (let i = 0; i < n; i++) {
      const p = V.P([XS - 1, defl(i), (rnd(i, 2) - 0.5) * 90]);
      dot(ctx, p[0], p[1], alpha(PAL.ink, 0.75), true, 3);
    }
    /* atoms in flight: from the oven to the screen in FLY seconds, bending inside the magnet */
    for (let i = n; i < n + 6 && i < NMAX; i++) {
      const born = (i * (RUN - FLY)) / NMAX, s = (t - born) / FLY;
      if (s <= 0 || s >= 1) continue;
      const x = -360 + (XS + 360) * s, k = Math.max(0, Math.min(1, (x + 90) / (XS + 90)));
      const p = V.P([x, defl(i) * k * k, (rnd(i, 2) - 0.5) * 90 * Math.max(0, (x + 250) / (XS + 250))]);
      dot(ctx, p[0], p[1], F.el('Ag'), true, 7);
    }
    const lab = (s, pt, dy, col) => { const q = V.P(pt); text(ctx, s, q[0], q[1] + dy, col || PAL.ink, { size: 20, align: 'center' }); };
    lab('oven', [-430, -65, 65], 30); lab('slit', [-250, -100, 65], 26); lab('N', [60, 135, 60], -16); lab('S', [60, -135, 60], 26);
    lab('screen', [XS, -150, 110], 28);
    hits.length = 0;
    const o = V.P([-430, 0, 0]), m = V.P([60, 0, 0]), s2 = V.P([XS, 0, 0]);
    hits.push({ x: o[0], y: o[1], r: 60, name: 'oven of vaporized silver' }, { x: m[0], y: m[1] - 60, r: 60, name: 'magnet, its field strongest near the north pole' },
      { x: s2[0], y: s2[1], r: 80, name: 'screen where the atoms land' });
    const f = MUB * g;
    tex(d.readout, ag
      ? `F_z = \\mu_z \\dfrac{\\partial \\kBz}{\\partial z} = \\pm \\mu_B \\dfrac{\\partial \\kBz}{\\partial z} \\\\ F_z = \\pm (9.274\\times10^{-24}\\ \\text{J/T})(${fmt(g, 0)}\\ \\text{T/m}) = \\pm ${g ? sci(f, 2) : '0'}\\ \\text{N}`
      : `F_z = \\mu_z \\dfrac{\\partial \\kBz}{\\partial z} = \\mu_B \\cos\\theta \\, \\dfrac{\\partial \\kBz}{\\partial z} \\\\ -${g ? sci(f, 2) : '0'}\\ \\text{N} \\le F_z \\le ${g ? sci(f, 2) : '0'}\\ \\text{N}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
