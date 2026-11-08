/* Figures for section 9.7 Molecular Orbitals Can Be Ordered According to Their Energies. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.7'] = function (root, F) {
const { tex, C, PAL, alpha, register, begin, line, text, arrow, topline } = F;

/* ---------- the level-diagram style shared by the section's diagrams ----------
   Levels are ink bars, correlation lines faint dashed ink, electrons arrows in the
   electron's convention colour (up for alpha, down for beta), the energy axis in the
   energy hue. The book prints no energies, so every diagram is schematic. */
const BAR = 130;
const bar = (ctx, x, y, w = BAR, a = 1) => line(ctx, x - w / 2, y, x + w / 2, y, alpha(PAL.ink, a), 4);
const tie = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.35), 2, [4, 8]);
/* the electrons on one orbital: s is '', 'u', 'd' or 'ud'; k fades in the last one placed */
function spins(ctx, x, y, s, col, k = 1, drop = 0) {
  const L = 44;
  [...s].forEach((t, i) => {
    const dx = s.length === 2 ? (i ? 13 : -13) : 0, last = i === s.length - 1, a = last ? k : 1, dy = last ? -drop : 0;
    const c = alpha(col, a);
    if (t === 'u') arrow(ctx, x + dx, y + 4 + dy, x + dx, y - L + dy, c, 4); else arrow(ctx, x + dx, y - L + dy, x + dx, y + 4 + dy, c, 4);
  });
}
function energyAxis(ctx, x, y0, y1) {
  arrow(ctx, x, y0, x, y1, C('energy'), 4);
  text(ctx, 'E', x - 26, (y0 + y1) / 2, C('energy'), { size: 30, weight: 600, align: 'center', base: 'middle' });
}
const half = (n) => (n % 2 ? `${n}/2` : String(n / 2));
const halfTex = (n) => (n % 2 ? `\\tfrac{${n}}{2}` : String(n / 2));

/* =====================================================================
   FIGURE 9.7.1 + Example 9.7.1's diagram: the ns diagram filled.
   Still: a choice of species, nothing in the idea has a time. M2 of the
   alkali metals (2 valence electrons, opening, part (a) of the book's
   figure), Na2- (3, Example 9.7.1) and M2 of the alkaline earths (4, part
   (b)). The atoms' ns levels at the sides hold what each atom brings; the
   sigma_ns level sits as far below ns as sigma*_ns sits above it, as the
   book draws them. Exercise 9.7.1's Ca2+ is not a choice: it would show
   the answer. Readout: the configuration and the bond order.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-ns-diagram', 520);
  const SP = {
    alk: { label: 'M₂, alkali', name: 'M_2', n: 'n', L: ['u', 'u'], b: 'ud', a: '' },
    na: { label: 'Na₂⁻', name: 'Na_2^-', n: '3', L: ['u', 'ud'], b: 'ud', a: 'u' },
    ae: { label: 'M₂, alkaline earth', name: 'M_2', n: 'n', L: ['ud', 'ud'], b: 'ud', a: 'ud' },
  };
  const K = F.choice(d.controls, { label: '\\text{molecule}', key: 'molecule', options: Object.entries(SP).map(([value, s]) => ({ value, label: s.label })), value: 'alk', aria: 'the diatomic species whose valence electrons are placed' });
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const s = SP[K.value], ee = F.el('e-'), n = s.n;
    const xL = 300, xM = 700, xR = 1100, yA = 280, yB = 390, yX = 170;
    const nb = s.b.length, na = s.a.length, bo = nb - na;
    topline(ctx, `$\\mathrm{${s.name}}$: ${nb + na} valence electrons, bond order ${half(bo)}.`);
    energyAxis(ctx, 120, 440, 110);
    bar(ctx, xL, yA); bar(ctx, xR, yA); bar(ctx, xM, yB); bar(ctx, xM, yX);
    tie(ctx, xL + BAR / 2, yA, xM - BAR / 2, yB); tie(ctx, xL + BAR / 2, yA, xM - BAR / 2, yX);
    tie(ctx, xR - BAR / 2, yA, xM + BAR / 2, yB); tie(ctx, xR - BAR / 2, yA, xM + BAR / 2, yX);
    spins(ctx, xL, yA, s.L[0], ee); spins(ctx, xR, yA, s.L[1], ee); spins(ctx, xM, yB, s.b, ee); spins(ctx, xM, yX, s.a, ee);
    const lab = (t, x, y) => text(ctx, t, x, y + 36, PAL.ink, { size: 30, align: 'center' });
    lab(`${n}s`, xL, yA); lab(`${n}s`, xR, yA); lab(`σ_{${n}s}`, xM, yB); lab(`σ*_{${n}s}`, xM, yX);
    text(ctx, K.value === 'na' ? 'Na' : 'M', xL, 480, PAL.muted, { size: 26, align: 'center' });
    text(ctx, K.value === 'na' ? 'Na⁻' : 'M', xR, 480, PAL.muted, { size: 26, align: 'center' });
    text(ctx, K.value === 'na' ? 'Na₂⁻' : 'M₂', xM, 480, PAL.muted, { size: 26, align: 'center' });
    hits.length = 0;
    hits.push({ x: xM, y: yB - 20, r: 32, name: `the bonding orbital σ${n}s, ${nb} electron${nb === 1 ? '' : 's'}` });
    hits.push({ x: xM, y: yX - 20, r: 32, name: `the antibonding orbital σ*${n}s, ${na ? na + ' electron' + (na === 1 ? '' : 's') : 'empty'}` });
    hits.push({ x: xL, y: yA - 20, r: 32, name: `the ${n}s orbital of the left atom` });
    hits.push({ x: xR, y: yA - 20, r: 32, name: `the ${n}s orbital of the right atom` });
    const cfg = `(\\sigma_{${n}s})^{${nb}}` + (na ? `(\\sigma^{*}_{${n}s})^{${na}}` : '');
    tex(d.readout, `\\mathrm{${s.name}}:\\ ${cfg} \\\\ \\text{bond order} = \\dfrac{${nb} - ${na}}{2} = ${halfTex(bo)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.7.2 + 9.7.3 + 9.7.7: sigma and pi orbitals from p orbitals, as
   clouds of points. Mathematical 3D (root 28.3, config): head-on against
   side-on overlap and where the nodal planes stand are arrangements in
   space. Still: a stationary state has no time. Choices: the pair (two
   np_z head on, two np_x side on, ns with np_z) and the combination
   (bonding, antibonding), with the book's signs: the p_z orbitals both
   point along +z, so their difference bonds (9.7.2); the p_x orbitals are
   parallel, so their sum bonds (9.7.4); the ns + np_z pair has the p lobe
   of B's plus sign facing A, as the book draws Figure 9.7.7, so the sum
   bonds. np_y behaves as np_x turned a quarter turn about the axis, as
   the text says, and is not a separate choice. Schematic orbitals: Slater
   functions r e^-r for s and sqrt3 x e^-r for p (one exponent, unit 1/zeta),
   nuclei 3.5 apart. 4000 points drawn from |psi|^2 as in 9.5: an atom at
   random, r from r^4 e^-2r (a gamma variate), the direction uniform for s
   and by rejection on cos^2 for p, kept with probability
   (a +- b)^2 / 2(a^2 + b^2). Scene axes: the internuclear axis z is the
   scene's y (horizontal at the opening view), the book's x is the scene's
   z (up, in the plane of the page) and the book's y the scene's x (toward
   the reader). Nodal planes in faint ink: z = 0 for the homonuclear
   antibonding pair, x = 0 (containing the axis) for pi. The ns - np_z
   node is a curved surface, not drawn; the readout names it. Orbit:
   azimuth free, elevation +-85 deg; no buttons.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-p-clouds');
  const R = 3.5, BX = 5, BY = 7, NPTS = 4000;
  const S3 = F.space3d(d, { box: [[-BX, BX], [-BY, BY], [-BX, BX]], h: 520, turn: -1.95, tilt: 0.3, fit: 2.5, pitch: [-85 * Math.PI / 180, 85 * Math.PI / 180], spin: 'off', zoom: false });
  const P = F.choice(d.controls, { label: '\\text{pair}', key: 'pair', options: [{ value: 'pz', label: '$np_z$ and $np_z$' }, { value: 'px', label: '$np_x$ and $np_x$' }, { value: 'sp', label: '$ns$ and $np_z$' }], value: 'pz', aria: 'the two atomic orbitals combined' });
  const Q = F.choice(d.controls, { label: '\\text{combination}', key: 'combination', options: [{ value: 'b', label: 'bonding' }, { value: 'a', label: 'antibonding' }], value: 'b', aria: 'the bonding or the antibonding combination' });
  const leg = F.makeCanvas(d.stage, 56);
  /* each pair: the orbital on A and on B as [kind, direction in scene axes], and the sign that bonds */
  const PAIR = {
    pz: { A: ['p', [0, 1, 0]], B: ['p', [0, 1, 0]], bond: -1 },
    px: { A: ['p', [0, 0, 1]], B: ['p', [0, 0, 1]], bond: 1 },
    sp: { A: ['s', null], B: ['p', [0, -1, 0]], bond: 1 },
  };
  const lightOf = (c) => { const m = /^#([0-9a-f]{6})$/i.exec(c) ? [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16)) : (c.match(/[\d.]+/g) || [0, 0, 0]).slice(0, 3).map(Number); return (0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2]) / 255; };
  const otherSign = (cw) => { const l = lightOf(cw), far = Math.abs(lightOf(PAL.ink) - l) > Math.abs(lightOf(PAL.panel) - l) ? PAL.ink : PAL.panel; return F.mixColor(cw, far, 0.55); };
  const rng = (s) => () => { s |= 0; s = (s + 0x6d2b79f5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const CA = [0, -R / 2, 0], CB = [0, R / 2, 0];
  /* the value of one atomic orbital at p */
  const phi = ([kind, dir], c, p) => {
    const v = [p[0] - c[0], p[1] - c[1], p[2] - c[2]], r = Math.hypot(...v), e = Math.exp(-r);
    return kind === 's' ? r * e : Math.sqrt(3) * (v[0] * dir[0] + v[1] * dir[1] + v[2] * dir[2]) * e;
  };
  const made = new Map();
  function cloud(pair, comb) {
    const key = pair + comb;
    if (made.has(key)) return made.get(key);
    const o = PAIR[pair], sg = comb === 'b' ? o.bond : -o.bond, rnd = rng(9702 + key.charCodeAt(0) * 7 + key.charCodeAt(2));
    const plus = [], minus = [];
    let guard = 0;
    while (plus.length + minus.length < NPTS && guard++ < 400000) {
      const fromA = rnd() < 0.5, orb = fromA ? o.A : o.B, c = fromA ? CA : CB;
      const r = -0.5 * Math.log(rnd() * rnd() * rnd() * rnd() * rnd() + 1e-300);
      const z = 2 * rnd() - 1, ph = 2 * Math.PI * rnd(), s = Math.sqrt(1 - z * z), u = [s * Math.cos(ph), s * Math.sin(ph), z];
      if (orb[0] === 'p') { const ct = u[0] * orb[1][0] + u[1] * orb[1][1] + u[2] * orb[1][2]; if (rnd() > ct * ct) continue; }
      const p = [c[0] + r * u[0], c[1] + r * u[1], c[2] + r * u[2]];
      if (Math.abs(p[0]) > BX || Math.abs(p[2]) > BX || Math.abs(p[1]) > BY) continue;
      const a = phi(o.A, CA, p), b = phi(o.B, CB, p), psi = a + sg * b;
      if (rnd() * 2 * (a * a + b * b) > psi * psi) continue;
      (psi >= 0 ? plus : minus).push(p);
    }
    const got = { plus, minus }; made.set(key, got); return got;
  }
  const rect = (corner) => [[corner(-1, -1), corner(1, -1), corner(1, 1), corner(-1, 1)]];
  const NAME = {
    pzb: { f: '\\sigma_{np_z} = np_z(A) - np_z(B)', t: 'σ', h: 'Head on, the difference puts like signs together between the atoms: a σ bonding orbital.' },
    pza: { f: '\\sigma^{*}_{np_z} = np_z(A) + np_z(B)', t: 'σ*', h: 'Head on, the sum puts opposite signs together: a σ* orbital with a nodal plane between the atoms.' },
    pxb: { f: '\\pi_{np_x} = np_x(A) + np_x(B)', t: 'π', h: 'Side by side, the sum gathers density above and below the axis: a π orbital, split by the plane x = 0.' },
    pxa: { f: '\\pi^{*}_{np_x} = np_x(A) - np_x(B)', t: 'π*', h: 'Side by side, the difference adds a second nodal plane, between the atoms: a π* orbital.' },
    spb: { f: '\\sigma = ns(A) + np_z(B)', t: 'σ', h: 'An s and a p_z lobe of the same sign meet between the atoms: a σ bonding orbital.' },
    spa: { f: '\\sigma^{*} = ns(A) - np_z(B)', t: 'σ*', h: 'With the signs opposed the density between the atoms falls to a node: a σ* orbital.' },
  };
  let last = '';
  function draw() {
    const pair = P.value, comb = Q.value, nm = NAME[pair + comb];
    const cw = C('wavefunction'), up = cw, down = otherSign(cw);
    const key = [pair, comb, up, down, PAL.ink].join('|');
    const planes = [];
    if (pair === 'px') planes.push({ k: 'faces', faces: rect((p, q) => [p * BX * 0.9, q * BY * 0.9, 0]), color: PAL.ink, alpha: 0.1, name: 'the nodal plane x = 0, which contains the internuclear axis' });
    if (comb === 'a' && pair !== 'sp') planes.push({ k: 'faces', faces: rect((p, q) => [p * BX * 0.85, 0, q * BX * 0.85]), color: PAL.ink, alpha: 0.12, name: 'the nodal plane z = 0, halfway between the nuclei' });
    if (key !== last) {
      last = key;
      const { plus, minus } = cloud(pair, comb);
      S3.set('axes', [
        { k: 'line', pts: [[0, -BY, 0], [0, BY, 0]], color: 'guide', w: 2, dash: [4, 8], name: 'the internuclear axis, z' },
        { k: 'label', s: '$z$', p: [0, BY + 0.5, 0], color: PAL.muted, cls: 'bare' },
        { k: 'line', pts: [[0, 0, 0], [0, 0, BX]], color: 'guide', w: 2, dash: [4, 8], name: 'the x axis, in the plane of the page' },
        { k: 'label', s: '$x$', p: [0, 0, BX + 0.5], color: PAL.muted, cls: 'bare' },
        { k: 'line', pts: [[0, 0, 0], [BX, 0, 0]], color: 'guide', w: 2, dash: [4, 8], name: 'the y axis, out of the page' },
        { k: 'label', s: '$y$', p: [BX + 0.5, 0, 0], color: PAL.muted, cls: 'bare' },
      ]);
      S3.set('cloud', [
        ...(plus.length ? [{ k: 'points', pts: plus, color: up, r: 3, name: 'where ψ > 0: each point a place the electron could be found' }] : []),
        ...(minus.length ? [{ k: 'points', pts: minus, color: down, r: 3, name: 'where ψ < 0: each point a place the electron could be found' }] : []),
      ]);
      S3.set('nodes', planes);
      S3.set('nuclei', [
        { k: 'points', pts: [CA], color: PAL.ink, r: 7, name: 'nucleus A' },
        { k: 'points', pts: [CB], color: PAL.ink, r: 7, name: 'nucleus B' },
        { k: 'label', s: 'A', p: [0, CA[1], -1.1], color: PAL.ink, cls: 'bare' },
        { k: 'label', s: 'B', p: [0, CB[1], -1.1], color: PAL.ink, cls: 'bare' },
      ]);
    }
    S3.headline(nm.h);
    const { ctx, W } = begin(leg);
    F.legend(ctx, { l: 0, t: 0, r: W, b: 56 }, [
      { s: '$\\kpsi > 0$', color: up, kind: 'dot' },
      { s: '$\\kpsi < 0$', color: down, kind: 'dot' },
      ...(planes.length ? [{ s: planes.length > 1 ? 'nodal planes' : 'nodal plane', color: alpha(PAL.ink, 0.3), kind: 'swatch' }] : []),
    ], { corner: 'top', panel: false, row: true });
    const kind = comb === 'b' ? '\\text{bonding}' : '\\text{antibonding}';
    const node = pair === 'sp' && comb === 'a' ? ',\\ \\text{a node between the atoms}' : '';
    tex(d.readout, `${nm.f} \\\\ \\small ${nm.t.replace('σ', '\\sigma').replace('π', '\\pi').replace('*', '^{*}')}\\text{ orbital, } ${kind}${node}`, false, { values: false });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.7.4 + 9.7.5 + 9.7.6 + Example 9.7.2's diagram: filling the
   period-2 valence diagrams.
   Moving: the filling is a sequence, one electron after another, and the
   steps are the clock (8.8's microstate precedent): an electron every
   0.42 s, each dropping onto its orbital, then a 1.2 s hold. Select over
   Li2 ... F2 and S2 (Example 9.7.2), opening on O2 (Figure 9.7.5b). Order
   by Aufbau, Pauli and Hund: a degenerate pi pair takes one electron
   each, spins parallel, before either pairs. The levels are schematic
   heights, as the book prints no energies: for O2, F2 and S2 sigma_2p_z
   sits below the pi pair, for Li2 to N2 above it, and the level glides
   between the two places when the choice crosses N2 / O2. The atoms'
   ns and np levels stand at the sides, unfilled. Readout: the
   configuration so far, the bond order and the unpaired electrons.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-period2', 640);
  const MOL = {
    Li2: { s: 'Li₂', t: 'Li_2', n: 2, o: 'N', p: 2 }, Be2: { s: 'Be₂', t: 'Be_2', n: 4, o: 'N', p: 2 }, B2: { s: 'B₂', t: 'B_2', n: 6, o: 'N', p: 2 },
    C2: { s: 'C₂', t: 'C_2', n: 8, o: 'N', p: 2 }, N2: { s: 'N₂', t: 'N_2', n: 10, o: 'N', p: 2 }, O2: { s: 'O₂', t: 'O_2', n: 12, o: 'O', p: 2 },
    F2: { s: 'F₂', t: 'F_2', n: 14, o: 'O', p: 2 }, S2: { s: 'S₂', t: 'S_2', n: 12, o: 'O', p: 3 },
  };
  const STEP = 0.42;
  const K = F.select(d.controls, { label: '\\text{molecule}', key: 'molecule', options: Object.entries(MOL).map(([value, m]) => ({ value, label: m.s })), value: 'O2', aria: 'the homonuclear diatomic molecule filled', onInput: () => cy.reset() });
  const cy = F.cycle(() => MOL[K.value].n * STEP + 0.4, 1.2);
  /* the orbitals: id, bonding or not, label pieces, x offset of a degenerate partner */
  const ORB = [
    { id: 's', b: true, lab: (n) => `σ_{${n}s}`, tx: (n) => `\\sigma_{${n}s}` },
    { id: 'ss', b: false, lab: (n) => `σ*_{${n}s}`, tx: (n) => `\\sigma^{*}_{${n}s}` },
    { id: 'z', b: true, lab: (n) => `σ_{${n}p_z}`, tx: (n) => `\\sigma_{${n}p_z}` },
    { id: 'px', b: true, lab: (n) => `π_{${n}p}`, tx: (n) => `\\pi_{${n}p}`, pair: 'py' },
    { id: 'py', b: true },
    { id: 'qx', b: false, lab: (n) => `π*_{${n}p}`, tx: (n) => `\\pi^{*}_{${n}p}`, pair: 'qy' },
    { id: 'qy', b: false },
    { id: 'zs', b: false, lab: (n) => `σ*_{${n}p_z}`, tx: (n) => `\\sigma^{*}_{${n}p_z}` },
  ];
  const GROUPS = { O: [['s'], ['ss'], ['z'], ['px', 'py'], ['qx', 'qy'], ['zs']], N: [['s'], ['ss'], ['px', 'py'], ['z'], ['qx', 'qy'], ['zs']] };
  /* the electrons in order: [orbital id, 'u' or 'd'] */
  function order(m) {
    const out = [];
    let left = m.n;
    for (const g of GROUPS[m.o]) {
      const take = Math.min(left, 2 * g.length); left -= take;
      for (let i = 0; i < take; i++) out.push([g[i % g.length], i < g.length ? 'u' : 'd']);
      if (!left) break;
    }
    return out;
  }
  const Y = { s: 560, ss: 470, px: 330, py: 330, qx: 245, qy: 245, zs: 165 };
  const yZ = (o) => (o === 'O' ? 375 : 285);
  const hits = [];
  F.hover(d.stage, () => hits);
  let lastTex = '';
  function draw() {
    const { ctx } = begin(d.c);
    const m = MOL[K.value], n = m.p, ee = F.el('e-');
    const seq = order(m), t = cy.now();
    const shown = Number.isFinite(t) ? Math.min(seq.length, Math.floor(t / STEP) + 1) : seq.length;
    const kLast = Number.isFinite(t) ? Math.min(1, (t - (shown - 1) * STEP) / 0.3) : 1;
    const occ = {}; ORB.forEach((o) => { occ[o.id] = ''; });
    seq.slice(0, shown).forEach(([id, sp]) => { occ[id] += sp; });
    const lastId = shown ? seq[shown - 1][0] : null;
    const yz = K.mix((v) => yZ(MOL[v].o));
    const yOf = (id) => (id === 'z' ? yz : Y[id]);
    const xM = 700, dx = 80, xL = 250, xR = 1150;
    const xOf = (id) => (id === 'px' || id === 'qx' ? xM - dx : id === 'py' || id === 'qy' ? xM + dx : xM);
    const wOf = (id) => (['px', 'py', 'qx', 'qy'].includes(id) ? 130 : 150);
    energyAxis(ctx, 90, 610, 120);
    /* the atoms' levels */
    const yS = 515, yP = 300;
    [xL, xR].forEach((x) => {
      bar(ctx, x, yS, 120); [-44, 0, 44].forEach((o) => bar(ctx, x + o, yP, 36));
      text(ctx, `${n}s`, x, yS + 36, PAL.ink, { size: 28, align: 'center' });
      text(ctx, `${n}p`, x, yP + 36, PAL.ink, { size: 28, align: 'center' });
    });
    /* correlation lines */
    const ends = (id) => [xOf(id) - wOf(id) / 2, xOf(id) + wOf(id) / 2];
    [['s', yS], ['ss', yS]].forEach(([id, ya]) => { tie(ctx, xL + 60, ya, ends(id)[0], yOf(id)); tie(ctx, xR - 60, ya, ends(id)[1], yOf(id)); });
    ['z', 'zs'].forEach((id) => { tie(ctx, xL + 66, yP, ends(id)[0], yOf(id)); tie(ctx, xR - 66, yP, ends(id)[1], yOf(id)); });
    ['px', 'qx'].forEach((id) => tie(ctx, xL + 66, yP, ends(id)[0], yOf(id)));
    ['py', 'qy'].forEach((id) => tie(ctx, xR - 66, yP, ends(id)[1], yOf(id)));
    hits.length = 0;
    ORB.forEach((o) => {
      const x = xOf(o.id), y = yOf(o.id);
      bar(ctx, x, y, wOf(o.id));
      const isLast = o.id === lastId;
      spins(ctx, x, y, occ[o.id], ee, isLast ? kLast : 1, isLast ? (1 - kLast) * 40 : 0);
      if (o.lab) {
        const lx = o.pair ? xM + dx + 80 : xM + 90;
        text(ctx, o.lab(n), lx, y, PAL.ink, { size: 28, base: 'middle' });
      }
      const ne = occ[o.id].length;
      hits.push({ x, y: y - 18, r: 30, name: `${o.b ? 'bonding' : 'antibonding'} orbital ${(o.lab || ORB[ORB.indexOf(o) - 1].lab)(n).replace(/[_{}]/g, '')}${o.id.endsWith('x') ? ' (x)' : o.id.endsWith('y') ? ' (y)' : ''}: ${ne ? ne + ' electron' + (ne > 1 ? 's' : '') : 'empty'}` });
    });
    text(ctx, m.s.replace('₂', ''), xL, 610, PAL.muted, { size: 26, align: 'center' });
    text(ctx, m.s.replace('₂', ''), xR, 610, PAL.muted, { size: 26, align: 'center' });
    text(ctx, m.s, xM, 610, PAL.muted, { size: 26, align: 'center' });
    /* counts */
    let nb = 0, na = 0, unp = 0;
    ORB.forEach((o) => { const c = occ[o.id].length; if (o.b) nb += c; else na += c; });
    [['s'], ['ss'], ['z'], ['px', 'py'], ['qx', 'qy'], ['zs']].forEach((g) => { const u = g.reduce((a, id) => a + (occ[id] === 'u' ? 1 : 0), 0); unp += u; });
    const done = shown === seq.length && kLast >= 1;
    if (done) topline(ctx, `$\\mathrm{${m.t}}$: ${m.n} valence electrons, bond order ${half(nb - na)}, ${unp ? unp + ' unpaired electron' + (unp > 1 ? 's' : '') : 'no unpaired electrons'}.`);
    else { const i = ORB.findIndex((q) => q.id === lastId), L = ORB[i].lab ? ORB[i] : ORB[i - 1]; topline(ctx, `Electron ${shown} of ${m.n} goes into $${L.tx(n)}$.`); }
    /* the configuration so far, a degenerate pair written as one */
    const parts = [];
    for (const g of GROUPS[m.o]) {
      const c = g.reduce((a, id) => a + occ[id].length, 0); if (!c) continue;
      const o = ORB.find((q) => q.id === g[0]);
      parts.push(`(${o.tx(n)})^{${c}}`);
    }
    const s = `${parts.join('')} \\\\ \\text{bond order} = \\dfrac{${nb} - ${na}}{2} = ${halfTex(nb - na)} \\\\ \\small \\text{unpaired electrons: } ${unp}`;
    if (s !== lastTex) { lastTex = s; tex(d.readout, s); }
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
