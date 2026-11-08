/* Figures for section 6.6 Orbital Angular Momentum and the p-Orbitals. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.6'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, text, topline, axes, dot, fmt } = F;

const HBAR = 1.054571817e-34, ME = 9.1093837e-31;
/* the other sign of psi: the hue a clear step toward whichever of ink and ground lies farther from it in lightness,
   so the two tones part on either theme whatever hue the wavefunction wears */
const lightOf = (c) => { const m = /^#([0-9a-f]{6})$/i.exec(c) ? [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16)) : (c.match(/[\d.]+/g) || [0, 0, 0]).slice(0, 3).map(Number); return (0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2]) / 255; };
const otherSign = (cw, PAL, mix) => { const l = lightOf(cw), far = Math.abs(lightOf(PAL.ink) - l) > Math.abs(lightOf(PAL.panel) - l) ? PAL.ink : PAL.panel; return mix(cw, far, 0.55); };
/* a number as TeX in scientific notation, a × 10^b */
const sci = (x, d = 2) => {
  if (!x) return '0';
  const e = Math.floor(Math.log10(Math.abs(x))), m = x / 10 ** e;
  return `${fmt(m, d)} \\times 10^{${e}}`;
};
/* a seeded generator, so a cloud is the same on every load */
const rng = (s) => () => { s |= 0; s = (s + 0x6d2b79f5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };

/* =====================================================================
   FIGURE 6.6.1: the classical orbit and its angular momentum.
   Mathematical 3D (root 28.3): L is a direction out of the plane of the
   orbit. Moving: the electron goes round a circle tilted 25 deg to z, its
   velocity arrow (kinematic) turning with it, while L = r x mv stands
   still along the orbit's axis. Sliders r (25 to 80 pm) and v (1.0 to
   3.5 x 10^6 m/s) open on Bohr's ground orbit, a0 = 52.9 pm and
   2.19 x 10^6 m/s, where |L| = m v r = hbar. Drawn scales, fixed: the
   orbit's radius is r / 80 pm x 0.9 units, v is 0.6 units at 3.5 x 10^6 m/s,
   L is 1.1 units at its greatest, 2.42 hbar. The real turn (1.5 x 10^-16 s
   at the default) is drawn 2.0 x 10^16 times slower at every setting,
   stated in the readout (root 28.4). Orbit: azimuth free, elevation
   -85 to 85 deg so z stays upright; no buttons.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-orbit');
  const S = F.space3d(d, { box: [[-1, 1], [-1, 1], [-1, 1]], h: 560, tilt: 0.5, fit: 3.1, pitch: [-85 * Math.PI / 180, 85 * Math.PI / 180], spin: 'off', zoom: false });
  const cy = F.cycle(() => Infinity, 0);
  const R = ctl(d.controls, { label: '\\kr', cls: 'length', key: 'r', min: 25, max: 80, step: 0.1, value: 52.9, unit: 'pm', dec: 1, aria: 'the radius of the orbit in picometres', specials: [{ at: 52.9, label: 'the Bohr radius' }] });
  const V = ctl(d.controls, { label: '\\kv', cls: 'velocity', key: 'v', min: 1, max: 3.5, step: 0.01, value: 2.19, unit: '× 10⁶ m/s', dec: 2, aria: 'the speed of the electron in millions of metres per second', specials: [{ at: 2.19, label: 'the Bohr speed' }] });
  const leg = F.makeCanvas(d.stage, 56);
  const TILT = 25 * Math.PI / 180, c0 = Math.cos(TILT), s0 = Math.sin(TILT);
  const E1 = [1, 0, 0], E2 = [0, c0, s0], N = [0, -s0, c0];
  const LMAX = ME * 3.5e6 * 80e-12;
  /* drawn angular speed: one turn in 3 s on Bohr's orbit */
  const K = (2 * Math.PI / 3) / (2.19e6 / 52.9e-12);
  let phase = 0, lastT = 0;
  function draw() {
    const r = R.v * 1e-12, v = V.v * 1e6, L = ME * v * r;
    const t = cy.now();
    if (Number.isFinite(t)) { if (t < lastT) lastT = t; phase += (t - lastT) * K * v / r; lastT = t; } else phase = 0.6;
    const rho = R.v / 80 * 0.95, cp = Math.cos(phase), sp = Math.sin(phase);
    const at = (a) => [rho * (Math.cos(a) * E1[0] + Math.sin(a) * E2[0]), rho * (Math.cos(a) * E1[1] + Math.sin(a) * E2[1]), rho * (Math.cos(a) * E1[2] + Math.sin(a) * E2[2])];
    const p = at(phase), u = [-sp * E1[0] + cp * E2[0], -sp * E1[1] + cp * E2[1], -sp * E1[2] + cp * E2[2]];
    const vl = V.v / 3.5 * 0.6, tip = [p[0] + vl * u[0], p[1] + vl * u[1], p[2] + vl * u[2]];
    const ll = L / LMAX * 1.1, top = N.map((q) => q * ll);
    const cl = C('length'), cv = C('velocity'), cL = C('angular-momentum');
    S.set('frame', [
      { k: 'line', pts: [[0, 0, -1], [0, 0, 1.05]], color: 'guide', w: 2, dash: [4, 8], name: 'the z axis, an arbitrary fixed direction' },
      { k: 'label', s: '$\\kz$', p: [0, 0, 1.12], color: PAL.muted, cls: 'bare' },
      { k: 'line', pts: Array.from({ length: 97 }, (_, i) => at(2 * Math.PI * i / 96)), color: 'muted', w: 2, name: 'the circular orbit' },
      { k: 'points', pts: [[0, 0, 0]], color: F.el('p+'), r: 14, name: 'the nucleus' },
    ]);
    S.set('L', [
      { k: 'arrow', a: [0, 0, 0], b: top, color: cL, w: 5, name: `the angular momentum L, ${fmt(L / HBAR, 2)} ħ, along the axis of the orbit` },
      { k: 'label', s: '$\\kLvec$', p: top.map((q, i) => q + N[i] * 0.12), color: cL, cls: 'bare' },
    ]);
    S.set('electron', [
      { k: 'line', pts: [[0, 0, 0], p], color: cl, w: 3, name: `the radius r, ${fmt(R.v, 1)} pm` },
      { k: 'arrow', a: p, b: tip, color: cv, w: 4, name: `the velocity v, tangent to the orbit, ${fmt(V.v, 2)} × 10⁶ m/s` },
      { k: 'points', pts: [p], color: F.el('e-'), r: 11, name: 'the electron' },
    ]);
    const { ctx, W } = begin(leg);
    F.legend(ctx, { l: 0, t: 0, r: W, b: 56 }, [
      { s: '$\\vec{\\kv}$, the velocity', color: cv, w: 4 },
      { s: '$\\kr$, the radius', color: cl, w: 3 },
      { s: '$\\kLvec$, the angular momentum', color: cL, w: 5 },
    ], { corner: 'top', panel: false, row: true });
    S.headline(`$|\\kLvec| = ${fmt(L / HBAR, 2)}\\,\\hbar$ at every point of the orbit.`);
    const T = 2 * Math.PI * r / v;
    tex(d.readout, `|\\kLvec| = \\km\\kv\\kr \\\\ |\\kLvec| = (${sci(ME, 3)}\\text{ kg})(${fmt(V.v, 2)} \\times 10^{6}\\text{ m/s})(${fmt(R.v, 1)} \\times 10^{-12}\\text{ m}) = ${sci(L, 3)}\\text{ J s} \\\\ \\small \\text{one turn takes } ${sci(T, 2)}\\text{ s, drawn } ${sci(1 / K, 1)} \\text{ times slower}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 6.6.2 + 6.6.4: the p and d orbitals as clouds of points.
   Mathematical 3D (root 28.3): the density fills a volume, and the lesson
   is where its nodes stand. Still: a stationary state has no time in it.
   A select over the real orbitals of Table 6.2.2 (2p_x, 2p_y, 2p_z, 3p_x
   and the five 3d), opening on 2p_z. 4000 points per orbital, drawn from
   |psi|^2 (Z = 1): r from the radial distribution r^2 R^2 by an inverse
   table, the direction by rejection on the angular factor squared; each
   point is coloured by the sign of psi there, two tones of the
   wavefunction hue (config). The nodal surfaces are faint ink: planes,
   the cones of 3d_z2 (cos^2 theta = 1/3) and the sphere r = 6 a0 of 3p.
   One scale for every orbital: the box is +-20 a0, so the 3p and 3d
   clouds stand larger than the 2p, as they are. Orbit: azimuth free,
   elevation -85 to 85 deg; no buttons. Without WebGL the same layers are
   painted from the opening view.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-orbitals');
  const B = 20, NPTS = 4000;
  const S = F.space3d(d, { box: [[-B, B], [-B, B], [-B, B]], h: 600, turn: -2.75, tilt: 0.7, fit: 2.9, pitch: [-85 * Math.PI / 180, 85 * Math.PI / 180], spin: 'off', zoom: false });
  /* each orbital: n, its radial factor's shape f(r) (a0 = 1), its angular factor on a unit vector, the largest |angular| and its nodes */
  const ORB = {
    '2px': { n: 2, name: '2p_x', f: (r) => r * Math.exp(-r / 2), a: (x) => x[0], m: 1, nodes: ['x'] },
    '2py': { n: 2, name: '2p_y', f: (r) => r * Math.exp(-r / 2), a: (x) => x[1], m: 1, nodes: ['y'] },
    '2pz': { n: 2, name: '2p_z', f: (r) => r * Math.exp(-r / 2), a: (x) => x[2], m: 1, nodes: ['z'] },
    '3px': { n: 3, name: '3p_x', f: (r) => r * (6 - r) * Math.exp(-r / 3), a: (x) => x[0], m: 1, nodes: ['x', 'sphere'] },
    '3dz2': { n: 3, name: '3d_{z^2}', f: (r) => r * r * Math.exp(-r / 3), a: (x) => 3 * x[2] * x[2] - 1, m: 2, nodes: ['cone'] },
    '3dxz': { n: 3, name: '3d_{xz}', f: (r) => r * r * Math.exp(-r / 3), a: (x) => x[0] * x[2], m: 0.5, nodes: ['x', 'z'] },
    '3dyz': { n: 3, name: '3d_{yz}', f: (r) => r * r * Math.exp(-r / 3), a: (x) => x[1] * x[2], m: 0.5, nodes: ['y', 'z'] },
    '3dxy': { n: 3, name: '3d_{xy}', f: (r) => r * r * Math.exp(-r / 3), a: (x) => x[0] * x[1], m: 0.5, nodes: ['x', 'y'] },
    '3dx2y2': { n: 3, name: '3d_{x^2-y^2}', f: (r) => r * r * Math.exp(-r / 3), a: (x) => x[0] * x[0] - x[1] * x[1], m: 1, nodes: ['xy+', 'xy-'] },
  };
  /* Table 6.2.2's forms */
  const FORM = {
    '2px': '\\dfrac{1}{\\sqrt{32\\pi}}\\left(\\dfrac{Z}{\\kao}\\right)^{5/2}\\kr e^{-Z\\kr/2\\kao}\\sin\\ktheta\\cos\\phi',
    '2py': '\\dfrac{1}{\\sqrt{32\\pi}}\\left(\\dfrac{Z}{\\kao}\\right)^{5/2}\\kr e^{-Z\\kr/2\\kao}\\sin\\ktheta\\sin\\phi',
    '2pz': '\\dfrac{1}{\\sqrt{32\\pi}}\\left(\\dfrac{Z}{\\kao}\\right)^{5/2}\\kr e^{-Z\\kr/2\\kao}\\cos\\ktheta',
    '3px': '\\dfrac{\\sqrt{2}}{81\\sqrt{\\pi}}\\left(\\dfrac{Z}{\\kao}\\right)^{5/2}\\kr\\left(6 - \\dfrac{Z\\kr}{\\kao}\\right)e^{-Z\\kr/3\\kao}\\sin\\ktheta\\cos\\phi',
    '3dz2': '\\dfrac{1}{81\\sqrt{6\\pi}}\\left(\\dfrac{Z}{\\kao}\\right)^{7/2}\\kr^2 e^{-Z\\kr/3\\kao}\\left(3\\cos^2\\ktheta - 1\\right)',
    '3dxz': '\\dfrac{\\sqrt{2}}{81\\sqrt{\\pi}}\\left(\\dfrac{Z}{\\kao}\\right)^{7/2}\\kr^2 e^{-Z\\kr/3\\kao}\\sin\\ktheta\\cos\\ktheta\\cos\\phi',
    '3dyz': '\\dfrac{\\sqrt{2}}{81\\sqrt{\\pi}}\\left(\\dfrac{Z}{\\kao}\\right)^{7/2}\\kr^2 e^{-Z\\kr/3\\kao}\\sin\\ktheta\\cos\\ktheta\\sin\\phi',
    '3dxy': '\\dfrac{1}{81\\sqrt{2\\pi}}\\left(\\dfrac{Z}{\\kao}\\right)^{7/2}\\kr^2 e^{-Z\\kr/3\\kao}\\sin^2\\ktheta\\sin 2\\phi',
    '3dx2y2': '\\dfrac{1}{81\\sqrt{2\\pi}}\\left(\\dfrac{Z}{\\kao}\\right)^{7/2}\\kr^2 e^{-Z\\kr/3\\kao}\\sin^2\\ktheta\\cos 2\\phi',
  };
  const NODES = {
    '2px': '\\text{the plane } \\kx = 0', '2py': '\\text{the plane } \\ky = 0', '2pz': '\\text{the plane } \\kz = 0',
    '3px': '\\text{the plane } \\kx = 0 \\text{ and the sphere } \\kr = 6\\kao', '3dz2': '\\text{the cones } \\ktheta = 54.7^\\circ \\text{ and } 125.3^\\circ',
    '3dxz': '\\text{the planes } \\kx = 0 \\text{ and } \\kz = 0', '3dyz': '\\text{the planes } \\ky = 0 \\text{ and } \\kz = 0', '3dxy': '\\text{the planes } \\kx = 0 \\text{ and } \\ky = 0',
    '3dx2y2': '\\text{the planes } \\kx = \\ky \\text{ and } \\kx = -\\ky',
  };
  const K = F.select(d.controls, { label: '\\text{orbital}', options: Object.entries(ORB).map(([value, o]) => ({ value, label: `$${o.name}$` })), value: '2pz', aria: 'the real orbital drawn', key: 'orbital' });
  const leg = F.makeCanvas(d.stage, 56);
  /* the points of one orbital, made once: [position, sign] */
  const made = new Map();
  function cloud(id) {
    if (made.has(id)) return made.get(id);
    const o = ORB[id], rnd = rng(6600 + id.length * 31 + id.charCodeAt(2));
    const M = 3000, RC = 30, cum = new Float64Array(M + 1);
    for (let i = 1; i <= M; i++) { const r = (i - 0.5) * RC / M, f = o.f(r); cum[i] = cum[i - 1] + r * r * f * f; }
    const tot = cum[M], rOf = (u) => { let lo = 0, hi = M; while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (cum[mid] < u * tot) lo = mid; else hi = mid; } return (lo + (u * tot - cum[lo]) / Math.max(1e-30, cum[hi] - cum[lo])) * RC / M; };
    const plus = [], minus = [];
    while (plus.length + minus.length < NPTS) {
      const zc = 2 * rnd() - 1, ph = 2 * Math.PI * rnd(), sc = Math.sqrt(1 - zc * zc), u = [sc * Math.cos(ph), sc * Math.sin(ph), zc];
      const a = o.a(u); if (rnd() * o.m * o.m > a * a) continue;
      const r = rOf(rnd()); if (r > B) continue;
      const p = [r * u[0], r * u[1], r * u[2]];
      (a * o.f(r) >= 0 ? plus : minus).push(p);
    }
    const got = { plus, minus }; made.set(id, got); return got;
  }
  /* a faint nodal surface as faces */
  function surface(kind) {
    const sq = (corner) => [[corner(-1, -1), corner(1, -1), corner(1, 1), corner(-1, 1)]];
    if (kind === 'x') return sq((p, q) => [0, p * B, q * B]);
    if (kind === 'y') return sq((p, q) => [p * B, 0, q * B]);
    if (kind === 'z') return sq((p, q) => [p * B, q * B, 0]);
    if (kind === 'xy+') return sq((p, q) => [p * B * 0.8, p * B * 0.8, q * B]);
    if (kind === 'xy-') return sq((p, q) => [p * B * 0.8, -p * B * 0.8, q * B]);
    const faces = [], n = 36;
    if (kind === 'cone') {
      const t = Math.acos(1 / Math.sqrt(3)), L = 0.95 * B;
      for (const sgn of [1, -1]) for (let i = 0; i < n; i++) {
        const a0 = 2 * Math.PI * i / n, a1 = 2 * Math.PI * (i + 1) / n, s = Math.sin(t) * L, c = sgn * Math.cos(t) * L;
        faces.push([[0, 0, 0], [s * Math.cos(a0), s * Math.sin(a0), c], [s * Math.cos(a1), s * Math.sin(a1), c]]);
      }
      return faces;
    }
    /* the sphere r = 6 a0 */
    const r = 6, m = 18;
    for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) {
      const t0 = Math.PI * i / m, t1 = Math.PI * (i + 1) / m, p0 = 2 * Math.PI * j / n, p1 = 2 * Math.PI * (j + 1) / n;
      const P = (t, p) => [r * Math.sin(t) * Math.cos(p), r * Math.sin(t) * Math.sin(p), r * Math.cos(t)];
      faces.push([P(t0, p0), P(t1, p0), P(t1, p1), P(t0, p1)]);
    }
    return faces;
  }
  const nodeName = (kind) => ({ x: 'the nodal plane x = 0', y: 'the nodal plane y = 0', z: 'the nodal plane z = 0', 'xy+': 'the nodal plane x = y', 'xy-': 'the nodal plane x = −y', cone: 'a nodal cone, where 3cos²θ = 1', sphere: 'the radial node, the sphere r = 6a₀' })[kind];
  let last = '';
  function draw() {
    const id = K.value, o = ORB[id];
    const cw = C('wavefunction'), up = cw, down = otherSign(cw, PAL, F.mixColor);
    const key = [id, up, down, PAL.ink].join('|');
    if (key !== last) {
      last = key;
      const { plus, minus } = cloud(id);
      S.set('axes', F.space.axes([[-B, B], [-B, B], [-B, B]], {}));
      S.set('cloud', [
        { k: 'points', pts: plus, color: up, r: 3, name: `where ψ > 0: each point a place the electron could be found` },
        { k: 'points', pts: minus, color: down, r: 3, name: `where ψ < 0: each point a place the electron could be found` },
      ]);
      S.set('nodes', o.nodes.map((kind) => ({ k: 'faces', faces: surface(kind), color: PAL.ink, alpha: kind === 'sphere' ? 0.1 : 0.12, name: nodeName(kind) })));
      S.set('nucleus', [{ k: 'points', pts: [[0, 0, 0]], color: F.el('p+'), r: 7, name: 'the nucleus' }]);
    }
    const { ctx, W } = begin(leg);
    F.legend(ctx, { l: 0, t: 0, r: W, b: 56 }, [
      { s: '$\\kpsi > 0$', color: up, kind: 'dot' },
      { s: '$\\kpsi < 0$', color: down, kind: 'dot' },
      { s: 'node, $\\kpsi = 0$', color: alpha(PAL.ink, 0.3), kind: 'swatch' },
    ], { corner: 'top', panel: false, row: true });
    tex(d.readout, `\\kpsi_{${o.name}} = ${FORM[id]} \\\\ \\small n - 1 = ${o.n - 1}\\text{ node${o.n > 2 ? 's' : ''}: } ${NODES[id]}`, false, { values: false });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 6.6.3: the levels of one l split in a magnetic field.
   Still: the field is a slider and nothing in the idea has a time. Graph
   alone: energy against field, both without a scale, since the book gives
   no formula for the shift (root 26.5); the 2l + 1 levels fan out
   linearly from the one zero-field level, m_l = +l highest, evenly spaced.
   The current field is a dashed line with a dot on each level. Choice l
   = 0, 1, 2 (an s level does not split); slider B from 0 to 1 of the
   frame, opening at 0.6. m_l labels sit at the right end, fixed.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-zeeman', 560);
  const Lc = F.choice(d.controls, { label: 'l', options: [0, 1, 2].map((v) => ({ value: String(v), label: String(v) })), value: '1', aria: 'the angular momentum quantum number', key: 'l' });
  const Bf = ctl(d.controls, { label: 'B', cls: '', key: 'B', min: 0, max: 1, step: 0.01, value: 0.6, unit: '', dec: 2, aria: 'the strength of the magnetic field, as a share of the greatest drawn', specials: [{ at: 0, label: 'no field' }] });
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const l = +Lc.value, b = Bf.v, ce = C('energy');
    const box = { l: 140, r: 1180, t: 100, b: 500 };
    const ax = axes(ctx, box, [-0.12, 1], [-2.6, 2.6], { nx: 0, ny: 0, xl: 'magnetic field B', yl: 'energy', yc: ce });
    const ms = Array.from({ length: 2 * l + 1 }, (_, i) => i - l);
    ms.forEach((m) => {
      ax && F.plot(ctx, ax, (x) => (x <= 0 ? 0 : m * x), ce, { w: 4, x: [-0.12, 1] });
      const lab = m > 0 ? `m_l = +${m}` : `m_l = ${m === 0 ? 0 : '−' + -m}`;
      text(ctx, lab, box.r + 12, ax.Y(m), ce, { size: 20, base: 'middle', align: 'left' });
      const y = ax.Y(m * b);
      dot(ctx, ax.X(b), y, ce, true, 9);
      hits.push({ x: ax.X(b), y, r: 14, name: `the level m_l = ${m}` });
    });
    line(ctx, ax.X(b), box.t, ax.X(b), box.b, alpha(PAL.ink, 0.4), 2, [10, 10]);
    text(ctx, 'no field', ax.X(0), box.b + 26, PAL.muted, { size: 17, align: 'center' });
    const n = 2 * l + 1;
    topline(ctx, l === 0 ? 'An $s$ level, $l = 0$, has one state and does not split.' : b < 0.005 ? `With no field the ${n} states of $l = ${l}$ share one energy.` : `In the field the $l = ${l}$ level has split into ${n} evenly spaced levels.`);
    const vals = ms.map((m) => (m === 0 ? '0' : `${m > 0 ? '+' : '-'}${Math.abs(m) === 1 ? '' : Math.abs(m)}\\hbar`)).join(',\\ ');
    tex(d.readout, `\\kLz = m_l\\hbar = ${vals} \\\\ 2l + 1 = ${n}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
