/* Figures for section 9.5 Bonding and Antibonding Orbitals. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.5'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, text, axes, plot, shade, arrow, fmt } = F;

const A0 = 52.9177;                       /* pm in a bohr */
/* the other sign of psi: the hue a clear step toward whichever of ink and ground lies farther from it in lightness (6.6's rule) */
const lightOf = (c) => { const m = /^#([0-9a-f]{6})$/i.exec(c) ? [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16)) : (c.match(/[\d.]+/g) || [0, 0, 0]).slice(0, 3).map(Number); return (0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2]) / 255; };
const otherSign = (cw) => { const l = lightOf(cw), far = Math.abs(lightOf(PAL.ink) - l) > Math.abs(lightOf(PAL.panel) - l) ? PAL.ink : PAL.panel; return F.mixColor(cw, far, 0.55); };
/* a seeded generator, so a cloud is the same on every load */
const rng = (s) => () => { s |= 0; s = (s + 0x6d2b79f5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
/* the overlap of two 1s orbitals R apart, R in bohr (Equation 9.3.9) */
const overlap = (R) => Math.exp(-R) * (1 + R + R * R / 3);

/* =====================================================================
   FIGURE 9.5.1: sigma_1s and sigma*_1s as clouds of points.
   Mathematical 3D (root 28.3, config): cylindrical symmetry and the nodal
   plane are arrangements in space. Still: a stationary state has no time.
   Choice of orbital, the sum (9.5.2) or the difference (9.5.3); slider R
   53 to 212 pm (1 to 4 a0), opening at 106 pm, H2+'s exact bond length,
   where S = 0.586. 3500 points drawn from |psi|^2 (a0 = 1): a nucleus
   picked at random, r from the 1s density r^2 e^-2r (a gamma variate),
   a uniform direction, kept with probability (a +- b)^2 / 2(a^2 + b^2),
   a = e^-rA, b = e^-rB, which is |psi|^2 over the mean of the two atomic
   densities (at most 1). Each point wears the sign of psi there, two
   tones of the wavefunction hue. The internuclear axis is the scene's y
   axis (horizontal at the opening view) and is labelled z, the book's
   name for it. sigma* shows its nodal plane z = 0 as a faint disc.
   Beneath, flat, psi and psi^2 along the axis (panels a-d of the book):
   z from -300 to 300 pm, psi from -0.8 to 0.8 a0^-3/2 and psi^2 from 0 to
   0.5 a0^-3 (sigma* at R = 1 a0 peaks at 0.67 and 0.45). Orbit: azimuth
   free, elevation +-85 deg; no buttons.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-sigma-clouds');
  const BX = 4, BZ = 6, NPTS = 3500;
  const S3 = F.space3d(d, { box: [[-BX, BX], [-BZ, BZ], [-BX, BX]], h: 520, turn: -1.95, tilt: 0.32, fit: 2.4, pitch: [-85 * Math.PI / 180, 85 * Math.PI / 180], spin: 'off', zoom: false });
  const K = F.choice(d.controls, { label: '\\text{orbital}', key: 'orbital', options: [{ value: 'sum', label: '$\\sigma_{1s}$' }, { value: 'diff', label: '$\\sigma^{*}_{1s}$' }], value: 'sum', aria: 'the molecular orbital drawn: the sum or the difference of the two 1s orbitals' });
  const Rs = ctl(d.controls, { label: '\\kR', cls: 'length', key: 'R', min: 53, max: 212, step: 0.1, value: 105.8, unit: 'pm', dec: 0, aria: 'the distance between the two nuclei in picometres', detents: [105.8], snap: true });
  const leg = F.makeCanvas(d.stage, 56);
  const gc = F.makeCanvas(d.stage, 330);
  const made = new Map();
  /* the cloud for one orbital at one separation (bohr): [plus points, minus points] in scene coordinates, axis along y */
  function cloud(kind, R) {
    const key = kind + '|' + R.toFixed(3);
    if (made.has(key)) return made.get(key);
    const rnd = rng(9501 + Math.round(R * 1000) + (kind === 'sum' ? 0 : 7)), sg = kind === 'sum' ? 1 : -1;
    const plus = [], minus = [];
    let guard = 0;
    while (plus.length + minus.length < NPTS && guard++ < 200000) {
      const zA = rnd() < 0.5 ? -R / 2 : R / 2;
      const r = -0.5 * Math.log(rnd() * rnd() * rnd() + 1e-300);           /* gamma(3, 1/2): the 1s radial density */
      const c = 2 * rnd() - 1, ph = 2 * Math.PI * rnd(), s = Math.sqrt(1 - c * c);
      const p = [r * s * Math.cos(ph), zA + r * c, r * s * Math.sin(ph)];
      if (Math.abs(p[0]) > BX || Math.abs(p[2]) > BX || Math.abs(p[1]) > BZ) continue;
      const a = Math.exp(-Math.hypot(p[0], p[1] + R / 2, p[2])), b = Math.exp(-Math.hypot(p[0], p[1] - R / 2, p[2]));
      const psi = a + sg * b;
      if (rnd() * 2 * (a * a + b * b) > psi * psi) continue;
      (psi >= 0 ? plus : minus).push(p);
    }
    const got = { plus, minus }; made.set(key, got); return got;
  }
  const disc = (rad) => { const n = 48, f = []; for (let i = 0; i < n; i++) { const a0 = 2 * Math.PI * i / n, a1 = 2 * Math.PI * (i + 1) / n; f.push([[0, 0, 0], [rad * Math.cos(a0), 0, rad * Math.sin(a0)], [rad * Math.cos(a1), 0, rad * Math.sin(a1)]]); } return f; };
  let last = '';
  const gh = [];
  F.hover(d.stage, () => gh, gc);
  function draw() {
    const kind = K.value, R = Rs.v / A0, Sv = overlap(R), sg = kind === 'sum' ? 1 : -1;
    const N = 1 / Math.sqrt(2 * (1 + sg * Sv));
    const cw = C('wavefunction'), up = cw, down = otherSign(cw);
    const key = [kind, R.toFixed(3), up, down, PAL.ink, F.el('p+')].join('|');
    if (key !== last) {
      last = key;
      const { plus, minus } = cloud(kind, R);
      S3.set('axis', [
        { k: 'line', pts: [[0, -BZ, 0], [0, BZ, 0]], color: 'guide', w: 2, dash: [4, 8], name: 'the internuclear axis, z' },
        { k: 'label', s: '$z$', p: [0, BZ + 0.4, 0], color: PAL.muted, cls: 'bare' },
      ]);
      S3.set('cloud', [
        ...(plus.length ? [{ k: 'points', pts: plus, color: up, r: 3, name: 'where ψ > 0: each point a place the electron could be found' }] : []),
        ...(minus.length ? [{ k: 'points', pts: minus, color: down, r: 3, name: 'where ψ < 0: each point a place the electron could be found' }] : []),
      ]);
      S3.set('node', sg < 0 ? [{ k: 'faces', faces: disc(3.6), color: PAL.ink, alpha: 0.12, name: 'the nodal plane, halfway between the nuclei, where ψ = 0' }] : []);
      S3.set('nuclei', [
        { k: 'points', pts: [[0, -R / 2, 0]], color: F.el('p+'), r: 8, name: 'proton A' },
        { k: 'points', pts: [[0, R / 2, 0]], color: F.el('p+'), r: 8, name: 'proton B' },
        { k: 'label', s: 'A', p: [0, -R / 2, 0.75], color: PAL.ink, cls: 'bare' },
        { k: 'label', s: 'B', p: [0, R / 2, 0.75], color: PAL.ink, cls: 'bare' },
      ]);
    }
    /* psi^2 at the midpoint, a0^-3: both atomic functions are e^{-R/2}/sqrt(pi) there */
    const mid = sg > 0 ? (2 * N * Math.exp(-R / 2)) ** 2 / Math.PI : 0;
    S3.headline(sg > 0 ? `At the midpoint $\\kpsi^2 = ${fmt(mid, 3)}\\,a_0^{-3}$: the density gathers between the nuclei.` : 'At the midpoint $\\kpsi^2 = 0$: a nodal plane cuts the axis there.');
    { const { ctx, W } = begin(leg);
      F.legend(ctx, { l: 0, t: 0, r: W, b: 56 }, [
        { s: '$\\kpsi > 0$', color: up, kind: 'dot' },
        ...(sg < 0 ? [{ s: '$\\kpsi < 0$', color: down, kind: 'dot' }, { s: 'nodal plane', color: alpha(PAL.ink, 0.3), kind: 'swatch' }] : []),
      ], { corner: 'top', panel: false, row: true }); }
    /* the axis slices: psi beside psi^2, z in pm */
    const { ctx } = begin(gc);
    const fA = (z) => Math.exp(-Math.abs(z / A0 + R / 2)) / Math.sqrt(Math.PI), fB = (z) => Math.exp(-Math.abs(z / A0 - R / 2)) / Math.sqrt(Math.PI);
    const psi = (z) => N * (fA(z) + sg * fB(z)), cp = C('probability-density');
    const b1 = { l: 110, r: 640, t: 40, b: 270 }, b2 = { l: 820, r: 1350, t: 40, b: 270 };
    const a1 = axes(ctx, b1, [-300, 300], [-0.8, 0.8], { nx: 4, ny: 4, xl: 'position along the axis z (pm)', yl: 'ψ (a₀⁻³ᐟ²)', yc: cw });
    const a2 = axes(ctx, b2, [-300, 300], [0, 0.5], { nx: 4, ny: 5, xl: 'position along the axis z (pm)', yl: 'ψ² (a₀⁻³)', yc: cp });
    line(ctx, a1.X(-300), a1.Y(0), a1.X(300), a1.Y(0), alpha(PAL.ink, 0.35), 2);
    plot(ctx, a1, (z) => N * fA(z), alpha(cw, 0.5), { w: 3, dash: [10, 10] });
    plot(ctx, a1, (z) => sg * N * fB(z), alpha(cw, 0.5), { w: 3, dash: [10, 10] });
    plot(ctx, a1, psi, cw, { w: 5 });
    shade(ctx, a2, (z) => psi(z) ** 2, 0, -300, 300, cp, { alpha: 0.18 });
    plot(ctx, a2, (z) => psi(z) ** 2, cp, { w: 5 });
    [a1, a2].forEach((ax) => [-1, 1].forEach((s) => line(ctx, ax.X(s * Rs.v / 2), ax.box.b, ax.X(s * Rs.v / 2), ax.box.b - 12, PAL.ink, 4)));
    gh.length = 0;
    [a1, a2].forEach((ax) => { gh.push({ x: ax.X(-Rs.v / 2), y: ax.box.b - 6, r: 14, name: 'proton A' }); gh.push({ x: ax.X(Rs.v / 2), y: ax.box.b - 6, r: 14, name: 'proton B' }); });
    gh.push({ x: a1.X(-Rs.v / 2 - 60), y: a1.Y(N * fA(-Rs.v / 2 - 60)), r: 14, name: `1s on A, times ${fmt(N, 3)}` });
    gh.push({ x: a2.X(0), y: a2.Y(psi(0) ** 2), r: 14, name: `ψ² at the midpoint, ${fmt(psi(0) ** 2, 3)} a₀⁻³` });
    const lhs = sg > 0 ? '|\\ksigmaones\\rangle' : '|\\ksigmaonesst\\rangle', op = sg > 0 ? '+' : '-', pm = sg > 0 ? '+' : '-';
    tex(d.readout, `${lhs} = \\dfrac{1}{\\sqrt{2(1 ${pm} S)}}\\left(|\\konesA\\rangle ${op} |\\konesB\\rangle\\right) \\\\ S = e^{-\\kR/a_0}\\left(1 + \\dfrac{\\kR}{a_0} + \\dfrac{\\kR^2}{3a_0^2}\\right) = ${fmt(Sv, 3)} \\\\ \\dfrac{1}{\\sqrt{2(1 ${pm} ${fmt(Sv, 3)})}} = ${fmt(N, 3)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.5.2: H2's molecular orbital energy-level diagram, a faithful
   copy in the house level style. Still and without controls: nothing in
   9.5 varies on it. The book prints no energies, so the levels are
   schematic: sigma_1s as far below 1s as sigma*_1s is above it, as the
   book draws them. Electrons are arrows in the electron's convention
   colour; levels in ink; the energy axis in the energy hue. The book's
   lobe sketches are left to Figure 9.5.1, which draws the orbitals.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-h2-diagram', 520);
  const hits = [];
  F.hover(d.stage, () => hits);
  /* n electrons on a level centred at x: up first, then down */
  function spins(ctx, x, y, n, col) {
    const L = 46;
    if (n >= 1) arrow(ctx, x - (n > 1 ? 12 : 0), y + 4, x - (n > 1 ? 12 : 0), y - L, col, 4);
    if (n >= 2) arrow(ctx, x + 12, y - L, x + 12, y + 4, col, 4);
  }
  function draw() {
    const { ctx } = begin(d.c);
    const ce = C('energy'), ee = F.el('e-');
    const yA = 270, yS = 390, yX = 150, xL = 300, xM = 700, xR = 1100, w = 150;
    arrow(ctx, 110, 440, 110, 90, ce, 4);
    text(ctx, 'E', 84, 270, ce, { size: 30, weight: 600, align: 'center', base: 'middle' });
    const lev = (x, y) => line(ctx, x - w / 2, y, x + w / 2, y, PAL.ink, 4);
    const tie = (x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2, [4, 8]);
    lev(xL, yA); lev(xR, yA); lev(xM, yS); lev(xM, yX);
    tie(xL + w / 2, yA, xM - w / 2, yS); tie(xL + w / 2, yA, xM - w / 2, yX);
    tie(xR - w / 2, yA, xM + w / 2, yS); tie(xR - w / 2, yA, xM + w / 2, yX);
    spins(ctx, xL, yA, 1, ee); spins(ctx, xR, yA, 1, ee); spins(ctx, xM, yS, 2, ee);
    text(ctx, '1s', xL, yA + 34, PAL.ink, { size: 30, align: 'center' });
    text(ctx, '1s', xR, yA + 34, PAL.ink, { size: 30, align: 'center' });
    text(ctx, 'σ_{1s}', xM, yS + 34, PAL.ink, { size: 30, align: 'center' });
    text(ctx, 'σ*_{1s}', xM, yX + 34, PAL.ink, { size: 30, align: 'center' });
    text(ctx, 'H (AO)', xL, 490, PAL.muted, { size: 26, align: 'center' });
    text(ctx, 'H₂ (MOs)', xM, 490, PAL.muted, { size: 26, align: 'center' });
    text(ctx, 'H (AO)', xR, 490, PAL.muted, { size: 26, align: 'center' });
    hits.length = 0;
    hits.push({ x: xL, y: yA - 20, r: 30, name: 'the 1s orbital of hydrogen atom A and its electron' });
    hits.push({ x: xR, y: yA - 20, r: 30, name: 'the 1s orbital of hydrogen atom B and its electron' });
    hits.push({ x: xM, y: yS - 20, r: 30, name: 'the bonding orbital σ₁ₛ with two paired electrons' });
    hits.push({ x: xM, y: yX, r: 30, name: 'the antibonding orbital σ*₁ₛ, empty' });
    tex(d.readout, `\\mathrm{H_2}:\\ (\\ksigmaones)^2`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
