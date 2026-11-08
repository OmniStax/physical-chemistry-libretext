/* Figures for section 12.15 Molecular Orbitals can be Constructed on the Basis of Symmetry. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['12.15'] = function (root, F) {
const { tex, C, PAL, alpha, register, begin, line, text } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- water, in the book's frame (z up along C2, the molecule in the xz plane) ----------
   Physical 3D (config): the arrangement of the orbitals on the atoms is the lesson. O-H 0.96 A and
   104.5 deg, drawn at 1.6 units per angstrom with the oxygen above the hydrogens as Vallance's
   drawing has it. s_H sits on the hydrogen at +x, s_H' on the one at -x. Orbit: yaw within 60 deg of
   the face-on view (about the principal axis), pitch from just below level to 50 deg above, as the
   chapter's config bounds water; no spin, no zoom. Without WebGL F.space3d paints the opening view flat. */
const RAD = Math.PI / 180, BL = 0.96 * 1.6, HALF = 104.5 / 2 * RAD;
const O = [0, 0, 0.5];
const HP = [BL * Math.sin(HALF), 0, 0.5 - BL * Math.cos(HALF)];   /* s_H */
const HM = [-HP[0], 0, HP[2]];                                    /* s_H' */
const BOX = [[-2.4, 2.4], [-2.4, 2.4], [-1.9, 2.3]];
const ORBIT = { pitch: [-0.15, 50 * RAD], yaw: [-60 * RAD, 60 * RAD], spin: 'off', zoom: false };
/* the two signs of an orbital: the wavefunction's colour, and the same pushed toward ink or page (9.7's rule) */
const lightOf = (c) => { const m = /^#([0-9a-f]{6})$/i.exec(c) ? [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16)) : (c.match(/[\d.]+/g) || [0, 0, 0]).slice(0, 3).map(Number); return (0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2]) / 255; };
const otherSign = (cw) => { const l = lightOf(cw), far = Math.abs(lightOf(PAL.ink) - l) > Math.abs(lightOf(PAL.panel) - l) ? PAL.ink : PAL.panel; return F.mixColor(cw, far, 0.55); };
const signCol = (s) => (s > 0 ? C('wavefunction') : otherSign(C('wavefunction')));
/* a ball of radius r about c, or an ellipsoid stretched along unit d */
function ball(c, r, color, a, name, d = null, stretch = 1) {
  const R = (u, v) => {
    const p = [Math.sin(u) * Math.cos(v) * r, Math.sin(u) * Math.sin(v) * r, Math.cos(u) * r];
    if (d) { const t = p[0] * d[0] + p[1] * d[1] + p[2] * d[2]; for (let i = 0; i < 3; i++) p[i] += (stretch - 1) * t * d[i]; }
    return [c[0] + p[0], c[1] + p[1], c[2] + p[2]];
  };
  return F.space.surface(R, [0, Math.PI], [0, 2 * Math.PI], color, { n: [18, 24], grid: 0, alpha: a }).map((m) => ({ ...m, name }));
}
/* an s orbital of sign s on centre c; a p orbital of sign s along unit d from c (its + lobe toward d) */
const sOrb = (c, s, r, name) => ball(c, r, signCol(s), 0.55, name);
function pOrb(c, d, s, r, name) {
  const L = 0.62 * r / 0.5;
  return [1, -1].flatMap((k) => ball([c[0] + d[0] * L * k, c[1] + d[1] * L * k, c[2] + d[2] * L * k], 0.55 * r, signCol(s * k), 0.6, `${name}, ${s * k > 0 ? 'positive' : 'negative'} lobe`, d, 1.25));
}
const atoms = (pO, p1, p2, faint) => [
  ...ball(pO, 0.36, F.el('O'), faint ? 0.18 : 1, 'oxygen'),
  ...ball(p1, 0.24, F.el('H'), faint ? 0.18 : 1, 'hydrogen'),
  ...ball(p2, 0.24, F.el('H'), faint ? 0.18 : 1, 'hydrogen'),
  ...(faint ? [] : [
    { k: 'line', pts: [pO, p1], color: alpha(PAL.ink, 0.5), w: 5 },
    { k: 'line', pts: [pO, p2], color: alpha(PAL.ink, 0.5), w: 5 },
  ]),
];
const axesMarks = () => [
  { k: 'line', pts: [[0, 0, -1.8], [0, 0, 1.8]], color: 'guide', w: 2, dash: [6, 8], name: 'the z axis, which carries the C₂ axis' },
  { k: 'label', s: '$z$', p: [0, 0, 2.0], color: PAL.muted, cls: 'bare' },
  { k: 'line', pts: [[-2.3, 0, 0], [2.3, 0, 0]], color: 'guide', w: 2, dash: [6, 8], name: 'the x axis, in the plane of the molecule' },
  { k: 'label', s: '$x$', p: [2.5, 0, 0], color: PAL.muted, cls: 'bare' },
  { k: 'line', pts: [[0, -2.3, 0], [0, 2.3, 0]], color: 'guide', w: 2, dash: [6, 8], name: 'the y axis, square to the molecule' },
  { k: 'label', s: '$y$', p: [0, 2.5, 0], color: PAL.muted, cls: 'bare' },
];

/* ---------- the water operations scene (unnumbered figure beside the C2v axes) ----------
   Moving: an operation carries the molecule and one basis orbital from start to image. C2 turns them
   half a turn about z, sigma_v(xz) slides each point's y through zero, sigma_v'(yz) its x, E moves
   nothing. The atoms trade places; a faint copy of the start stays. When the orbital lands, its column
   of the 6 x 6 representative fills in the matrix under the scene (a 2D canvas, archetype 5), the other
   columns faint, the diagonal boxed. 2.0 s of motion, 0.5 s for the column, 1.4 s hold. Opens on C2
   and s_H, the book's "Rotation" example. */
(function () {
  const d = sim('sim-water-basis');
  const S = F.space3d(d, { box: BOX, h: 440, turn: -0.35, tilt: 0.28, fit: 3.3, ...ORBIT });
  const mat = F.makeCanvas(d.stage, 330);
  const OPS = {
    E: { tx: '\\kEop', txt: 'E', perm: [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1]], name: 'E leaves everything where it is' },
    C2: { tx: '\\kCtwo', txt: 'C₂', perm: [[1, 1], [0, 1], [2, 1], [3, -1], [4, -1], [5, 1]], name: 'C₂ turns the molecule half a turn about z' },
    sv: { tx: '\\ksigmav(xz)', txt: 'σᵥ(xz)', perm: [[0, 1], [1, 1], [2, 1], [3, 1], [4, -1], [5, 1]], name: 'σᵥ(xz) reflects through the plane of the molecule' },
    svp: { tx: "\\ksigmavp(yz)", txt: 'σᵥ′(yz)', perm: [[1, 1], [0, 1], [2, 1], [3, -1], [4, 1], [5, 1]], name: 'σᵥ′(yz) reflects through the plane square to the molecule, swapping the hydrogens' },
  };
  const FN = [
    { tx: '\\ksH', txt: 's_H', html: 's<sub>H</sub>' }, { tx: '\\ksHp', txt: 's_H′', html: 's<sub>H</sub>′' }, { tx: '\\ksO', txt: 's_O', html: 's<sub>O</sub>' },
    { tx: 'p_x', txt: 'p_x', html: 'p<sub>x</sub>' }, { tx: 'p_y', txt: 'p_y', html: 'p<sub>y</sub>' }, { tx: 'p_z', txt: 'p_z', html: 'p<sub>z</sub>' },
  ];
  const OP = F.choice(d.controls, { label: '\\text{operation}', key: 'operation', options: [{ value: 'E', label: '$E$' }, { value: 'C2', label: '$C_2$' }, { value: 'sv', label: '$\\sigma_v(xz)$' }, { value: 'svp', label: "$\\sigma_v'(yz)$" }], value: 'C2', aria: 'the symmetry operation applied', onInput: () => cy.reset() });
  const FB = F.choice(d.controls, { label: '\\text{orbital}', key: 'orbital', options: FN.map((f, i) => ({ value: String(i), label: `$${['s_H', "s_H'", 's_O', 'p_x', 'p_y', 'p_z'][i]}$` })), value: '0', aria: 'the basis orbital followed', onInput: () => cy.reset() });
  const MOVE = 2.0, FILL = 0.5;
  const cy = F.cycle(() => MOVE + FILL, 1.4);
  const ease = (x) => { const t = Math.max(0, Math.min(1, x)); return t * t * (3 - 2 * t); };
  /* the operation k of the way through, on a point */
  const carry = (op, k) => (p) => {
    if (op === 'C2') { const a = Math.PI * k, c = Math.cos(a), s = Math.sin(a); return [c * p[0] - s * p[1], s * p[0] + c * p[1], p[2]]; }
    if (op === 'sv') return [p[0], p[1] * (1 - 2 * k), p[2]];
    if (op === 'svp') return [p[0] * (1 - 2 * k), p[1], p[2]];
    return p;
  };
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  const unit = (a) => { const l = Math.hypot(...a) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
  function orbital(j, M) {
    const name = `the basis orbital ${FN[j].txt}, carried by the operation`;
    if (j < 2) return sOrb(M(j === 0 ? HP : HM), 1, 0.5, name);
    if (j === 2) return sOrb(M(O), 1, 0.62, name);
    const ax = [[1, 0, 0], [0, 1, 0], [0, 0, 1]][j - 3];
    /* the + lobe follows the carried direction; a reflection flattens it through the plane */
    const tip = M([O[0] + ax[0], O[1] + ax[1], O[2] + ax[2]]), dir = sub(tip, M(O)), L = Math.hypot(...dir);
    if (L < 0.08) return [];
    return pOrb(M(O), unit(dir), 1, 0.5 * Math.max(0.35, L), name);
  }
  function draw() {
    const op = OP.value, j = +FB.value, t = cy.now(), k = ease(t / MOVE), kf = ease((t - MOVE) / FILL);
    const M = carry(op, k), [to, sg] = OPS[op].perm[j];
    S.set('axes', axesMarks());
    S.set('elements', [
      { k: 'faces', faces: [[[-2.2, 0, -1.6], [2.2, 0, -1.6], [2.2, 0, 1.6], [-2.2, 0, 1.6]]], color: C('symmetry-operation'), alpha: op === 'sv' ? 0.16 : 0.05, name: 'the mirror plane σᵥ(xz), the plane of the molecule' },
      { k: 'faces', faces: [[[0, -2.2, -1.6], [0, 2.2, -1.6], [0, 2.2, 1.6], [0, -2.2, 1.6]]], color: C('symmetry-operation'), alpha: op === 'svp' ? 0.16 : 0.05, name: 'the mirror plane σᵥ′(yz), square to the molecule' },
      { k: 'line', pts: [[0, 0, -1.6], [0, 0, 1.6]], color: C('symmetry-operation'), w: op === 'C2' ? 5 : 2.5, name: 'the C₂ axis' },
      { k: 'label', s: '$C_2$', p: [0.3, 0, 1.55], color: C('symmetry-operation'), cls: 'bare' },
    ]);
    const moved = op !== 'E' && k > 0;
    S.set('start', moved ? atoms(O, HP, HM, true) : []);
    const pO = M(O), p1 = M(HP), p2 = M(HM);
    S.set('atoms', [...atoms(pO, p1, p2, false),
      { k: 'label', s: 'H', p: [p1[0] * 1.32, p1[1] * 1.32, p1[2] - 0.35], color: PAL.ink, cls: 'bare' },
      { k: 'label', s: "H′", p: [p2[0] * 1.32, p2[1] * 1.32, p2[2] - 0.35], color: PAL.ink, cls: 'bare' }]);
    S.set('orbital', orbital(j, M));
    const lands = `${sg < 0 ? '−' : ''}${FN[to].html}`;
    S.headline(op === 'E' ? `E leaves ${FN[j].html} as it is.` : `${OPS[op].txt} carries ${FN[j].html} onto ${lands}.`);
    /* the representative, its chosen column filling as the orbital lands */
    const { ctx, W } = begin(mat);
    F.legend(ctx, { l: 20, t: 10, r: 300, b: 120 }, [{ s: 'ψ > 0', color: signCol(1), kind: 'swatch' }, { s: 'ψ < 0', color: signCol(-1), kind: 'swatch' }], { corner: 'tl' });
    const perm = OPS[op].perm, cw = 92, ch = 38, x0 = (W - 6 * cw) / 2 + 60, y0 = 70;
    text(ctx, `Γ(${OPS[op].txt}) =`, x0 - 40, y0 + 3 * ch, C('representation'), { size: 24, weight: 600, align: 'right', base: 'middle' });
    FN.forEach((f, c) => text(ctx, f.txt, x0 + c * cw + cw / 2, y0 - 22, c === j ? C('wavefunction') : PAL.muted, { size: 20, weight: c === j ? 600 : 400, align: 'center' }));
    ctx.save(); ctx.fillStyle = alpha(C('representation'), 0.12); ctx.fillRect(x0 + j * cw, y0, cw, 6 * ch); ctx.restore();
    line(ctx, x0 - 6, y0, x0 - 6, y0 + 6 * ch, PAL.ink, 2.5); line(ctx, x0 + 6 * cw + 6, y0, x0 + 6 * cw + 6, y0 + 6 * ch, PAL.ink, 2.5);
    for (let c = 0; c < 6; c++) for (let r = 0; r < 6; r++) {
      const v = perm[c][0] === r ? perm[c][1] : 0, here = c === j;
      if (r === c) { ctx.save(); ctx.strokeStyle = alpha(C('character'), 0.6); ctx.lineWidth = 2; ctx.strokeRect(x0 + c * cw + 18, y0 + r * ch + 3, cw - 36, ch - 6); ctx.restore(); }
      if (here && kf <= 0) continue;
      const col = here ? (v ? PAL.ink : PAL.muted) : alpha(v ? PAL.ink : PAL.muted, 0.35);
      ctx.save(); if (here) ctx.globalAlpha = kf;
      text(ctx, v < 0 ? '−1' : String(v), x0 + c * cw + cw / 2, y0 + r * ch + ch / 2, col, { size: 21, weight: here && v ? 600 : 400, align: 'center', base: 'middle' });
      ctx.restore();
    }
    const diag = perm.map((p, c) => (p[0] === c ? p[1] : 0)), chi = diag.reduce((a, b) => a + b, 0);
    text(ctx, `χ = ${chi}`, x0 + 6 * cw + 30, y0 + 3 * ch, C('character'), { size: 24, weight: 600, base: 'middle' });
    text(ctx, 'boxes: the diagonal, whose sum is the character', x0, y0 + 6 * ch + 34, PAL.muted, { size: 17 });
    const terms = diag.map((v, c) => (c === 0 ? (v < 0 ? '-1' : String(v)) : v < 0 ? '- 1' : `+ ${v}`)).join(' ');
    tex(d.readout, `${OPS[op].tx}\\,${FN[j].tx} = ${sg < 0 ? '-' : ''}${FN[to].tx} \\\\ \\kchar(${OPS[op].tx}) = ${terms} = ${chi}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* ---------- water's molecular orbitals and excited states (unnumbered figures 57783 + 61176) ----------
   Still: a choice of orbital and of electronic state, nothing with a clock. The six valence orbitals are
   drawn from the page's SALCs, each with only the SALCs of its own species, signs as the book's
   isosurface pictures show them (bonding where neighbouring lobes share a sign); the sizes are
   schematic, since the page gives no coefficients. The ladder under the scene is schematic in spacing,
   as the book's diagram is, and prints the book's energies beside each level. Electrons fill to 1B2;
   an excited state moves one from 1B2 up, and the arrow of the excitation says which polarization of
   light reaches it, from the direct product of the two half-filled orbitals' species. */
(function () {
  const d = sim('sim-water-mos');
  const S = F.space3d(d, { box: BOX, h: 420, turn: -0.35, tilt: 0.28, fit: 3.3, ...ORBIT });
  const lad = F.makeCanvas(d.stage, 390);
  /* [id, species, energy in eV (the book's), bonding?, the parts drawn: [kind, sign]] */
  const MO = [
    { id: '1a1', sp: 'A_1', html: '1A<sub>1</sub>', txt: '1A₁', e: -37.03, kind: 'bonding', parts: [['sO', 1, 0.75], ['sH', 1], ['sHp', 1]], form: 'c_1\\phi_1 + c_2\\phi_2 + c_3\\phi_3' },
    { id: '1b1', sp: 'B_1', html: '1B<sub>1</sub>', txt: '1B₁', e: -17.51, kind: 'bonding', parts: [['px', 1], ['sH', 1], ['sHp', -1]], form: 'c_4\\phi_4 + c_5\\phi_5' },
    { id: '2a1', sp: 'A_1', html: '2A<sub>1</sub>', txt: '2A₁', e: -14.69, kind: 'bonding', parts: [['pz', 1], ['sH', -1], ['sHp', -1]], form: 'c_1\\phi_1 + c_2\\phi_2 + c_3\\phi_3' },
    { id: '1b2', sp: 'B_2', html: '1B<sub>2</sub>', txt: '1B₂', e: -12.35, kind: 'nonbonding', parts: [['py', 1]], form: '\\phi_6 = p_y' },
    { id: '3a1', sp: 'A_1', html: '3A<sub>1</sub>', txt: '3A₁', e: 4.279, kind: 'antibonding', parts: [['pz', 1], ['sH', 1], ['sHp', 1]], form: 'c_1\\phi_1 + c_2\\phi_2 + c_3\\phi_3' },
    { id: '2b1', sp: 'B_1', html: '2B<sub>1</sub>', txt: '2B₁', e: 5.269, kind: 'antibonding', parts: [['px', 1], ['sH', -1], ['sHp', 1]], form: 'c_4\\phi_4 + c_5\\phi_5' },
  ];
  const STATES = {
    g: { label: 'ground', occ: { '1a1': 2, '1b1': 2, '2a1': 2, '1b2': 2 }, to: null },
    a: { label: '(1B₂)¹(3A₁)¹', occ: { '1a1': 2, '1b1': 2, '2a1': 2, '1b2': 1, '3a1': 1 }, to: '3a1', prod: 'B_2 \\otimes A_1 = B_2', pol: 'y', head: 'B₂ ⊗ A₁ = B₂, the symmetry of y: a y-polarized photon reaches this state.' },
    b: { label: '(1B₂)¹(2B₁)¹', occ: { '1a1': 2, '1b1': 2, '2a1': 2, '1b2': 1, '2b1': 1 }, to: '2b1', prod: 'B_2 \\otimes B_1 = A_2', pol: null, head: 'B₂ ⊗ B₁ = A₂, and no polarization transforms as A₂: one photon cannot reach this state.' },
  };
  const ORB = F.select(d.controls, { label: '\\text{orbital}', key: 'orbital', options: MO.map((m) => ({ value: m.id, label: m.txt })), value: '1b1', aria: 'the molecular orbital drawn' });
  const ST = F.choice(d.controls, { label: '\\text{state}', key: 'state', options: Object.entries(STATES).map(([value, s]) => ({ value, label: s.label })), value: 'g', aria: 'the electronic state' });
  const hits = [];
  F.hover(d.stage, () => hits, lad);
  function parts(m) {
    return m.parts.flatMap(([w, s, r]) => {
      const name = `${w === 'sH' ? 's_H' : w === 'sHp' ? 's_H′' : w === 'sO' ? 's_O' : w.replace('p', 'p_')} in ${m.txt}`;
      if (w === 'sH') return sOrb(HP, s, 0.5, name);
      if (w === 'sHp') return sOrb(HM, s, 0.5, name);
      if (w === 'sO') return sOrb(O, s, r || 0.62, name);
      const ax = { px: [1, 0, 0], py: [0, 1, 0], pz: [0, 0, 1] }[w];
      return pOrb(O, ax, s, 0.7, name);
    });
  }
  function draw() {
    const m = MO.find((x) => x.id === ORB.value), st = STATES[ST.value];
    S.set('axes', axesMarks());
    S.set('atoms', atoms(O, HP, HM, false));
    S.set('orbital', parts(m));
    S.headline(`${m.html} is ${m.kind}, built only from SALCs of ${m.sp.replace('_', '<sub>')}</sub> symmetry.`);
    /* the ladder: schematic spacing, the book's energies beside the levels */
    const { ctx, W } = begin(lad);
    const x0 = W / 2 - 150, x1 = W / 2 + 150, yOf = (i) => 360 - i * 48 - (i >= 4 ? 24 : 0);
    hits.length = 0;
    F.legend(ctx, { l: 20, t: 50, r: 380, b: 160 }, [{ s: 'ψ > 0', color: signCol(1), kind: 'swatch' }, { s: 'ψ < 0', color: signCol(-1), kind: 'swatch' }], { corner: 'tl' });
    text(ctx, 'antibonding', x1 + 190, (yOf(4) + yOf(5)) / 2, PAL.muted, { size: 18, base: 'middle' });
    text(ctx, 'bonding', x1 + 190, (yOf(0) + yOf(3)) / 2, PAL.muted, { size: 18, base: 'middle' });
    MO.forEach((o, i) => {
      const y = yOf(i), on = o.id === m.id;
      line(ctx, x0, y, x1, y, on ? C('energy') : alpha(PAL.ink, 0.7), on ? 5 : 3);
      text(ctx, o.txt, x0 - 20, y, on ? C('wavefunction') : PAL.ink, { size: 22, weight: on ? 600 : 400, align: 'right', base: 'middle' });
      text(ctx, `${o.e < 0 ? '−' : ''}${Math.abs(o.e)} eV`, x1 + 20, y, C('energy'), { size: 20, base: 'middle' });
      const n = st.occ[o.id] || 0;
      for (let e = 0; e < n; e++) {
        const ex = W / 2 + (n === 2 ? (e ? 16 : -16) : 0), up = e === 0;
        F.arrow(ctx, ex, up ? y + 14 : y - 14, ex, up ? y - 16 : y + 16, PAL.ink, 3);
      }
      hits.push({ x: W / 2, y, r: 26, name: `${o.txt}, ${o.kind}, ${o.e} eV, ${n} electron${n === 1 ? '' : 's'}` });
    });
    if (st.to) {
      const i = MO.findIndex((o) => o.id === st.to), xa = x0 + 40;
      F.arrow(ctx, xa, yOf(3) - 6, xa, yOf(i) + 8, st.pol ? C('energy') : alpha(PAL.ink, 0.45), 4);
      text(ctx, st.pol ? `${st.pol}-polarized photon` : 'no single photon', xa - 14, (yOf(3) + yOf(4)) / 2, st.pol ? C('energy') : PAL.muted, { size: 18, align: 'right', base: 'middle' });
    }
    text(ctx, st.to ? STATES[ST.value].head : 'Ground state: every orbital doubly filled, so the state is A₁.', W / 2, 24, PAL.ink, { size: 20, align: 'center', base: 'middle' });
    const stateTex = st.to ? `\\Gamma = ${st.prod}` : '\\Gamma = B_2 \\otimes B_2 = A_1';
    tex(d.readout, `\\kPsi(${m.sp}) = ${m.form} \\\\ \\small ${stateTex}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
