/* Figures for section 12.4 Symmetry Operations as Matrices. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['12.4'] = function (root, F) {
const { tex, C, PAL, alpha, register, fmt } = F;

/* ---------- Figure 12.4.1: a vector and the matrix of each operation ----------
   Mathematical 3D (root 28.3): a reflection or a turn is a direction out of a plane, so the
   frame turns freely. The vector u = (1.0, 0.5, 0.8) sits in a box of +-1.4 on every axis.
   A select picks the operation (nine would wrap a row): E, the three reflections the text
   names, C2, C3, C4, C6 about z, and the inversion. Play carries u to its image: a reflection
   slides the tip straight through the plane, a rotation turns it about z by 2pi/n, the
   inversion sends it straight through the origin; E leaves it where it is. The element is drawn
   in the operation's colour (plane, axis or point), u's start stays as a faint ghost, and the
   moving vector drops its x, y, z legs so the one coordinate that changes sign is seen to flip.
   Opens on sigma(xy), the book's Figure 12.4.1. */
(function () {
  const d = F.sim(root, 'sim-vector-ops');
  const B = 1.2, U = [1.0, 0.5, 0.8];
  const OPS = {
    E: { label: 'E', tex: '\\kEop', M: [[1, 0, 0], [0, 1, 0], [0, 0, 1]], el: null, say: 'The identity leaves u where it is.' },
    sxy: { label: 'σ(xy)', tex: '\\ksigmaop(xy)', M: [[1, 0, 0], [0, 1, 0], [0, 0, -1]], el: { plane: [0, 0, 1] }, say: 'Reflection in the xy plane changes the sign of z alone.' },
    sxz: { label: 'σ(xz)', tex: '\\ksigmaop(xz)', M: [[1, 0, 0], [0, -1, 0], [0, 0, 1]], el: { plane: [0, 1, 0] }, say: 'Reflection in the xz plane changes the sign of y alone.' },
    syz: { label: 'σ(yz)', tex: '\\ksigmaop(yz)', M: [[-1, 0, 0], [0, 1, 0], [0, 0, 1]], el: { plane: [1, 0, 0] }, say: 'Reflection in the yz plane changes the sign of x alone.' },
    C2: { n: 2 }, C3: { n: 3 }, C4: { n: 4 }, C6: { n: 6 },
    i: { label: 'i', tex: '\\kiop', M: [[-1, 0, 0], [0, -1, 0], [0, 0, -1]], el: { point: true }, say: 'Inversion changes the sign of all three coordinates.' },
  };
  for (const k of ['C2', 'C3', 'C4', 'C6']) {
    const o = OPS[k], a = 2 * Math.PI / o.n, c = Math.cos(a), s = Math.sin(a);
    Object.assign(o, { label: `C${'₂₃₄₅₆'[o.n - 2]}`, tex: o.n === 2 ? '\\kCtwo' : '\\kCn', M: [[c, -s, 0], [s, c, 0], [0, 0, 1]], el: { axis: true },
      say: `$C_${o.n}$ turns u by ${fmt(360 / o.n, 0)}° about z: x and y mix, z stays.` });
  }
  const order = ['E', 'sxy', 'sxz', 'syz', 'C2', 'C3', 'C4', 'C6', 'i'];
  const K = F.select(d.controls, { label: '\\text{operation}', aria: 'the symmetry operation', key: 'op', value: 'sxy',
    options: order.map((v) => ({ value: v, label: OPS[v].label })), onInput: () => cy.reset() });
  const cy = F.cycle(() => 2.4, 1.6);
  const S = F.space3d(d, { box: [[-B, B], [-B, B], [-B, B]], h: 560, turn: -0.65, tilt: 0.38, fit: 3.0,
    pitch: [-85 * Math.PI / 180, 85 * Math.PI / 180], spin: 'off', zoom: false });
  const apply = (M, v) => M.map((r) => r[0] * v[0] + r[1] * v[1] + r[2] * v[2]);
  const num = (v) => { const r = Math.round(v * 1000) / 1000; return String(Math.abs(r) < 5e-4 ? 0 : r); };
  const mat = (M) => `\\begin{pmatrix} ${M.map((r) => r.map(num).join(' & ')).join(' \\\\ ')} \\end{pmatrix}`;
  const col = (v) => `\\begin{pmatrix} ${v.map(num).join(' \\\\ ')} \\end{pmatrix}`;
  let lastOp = '';
  function draw() {
    const op = OPS[K.value], k = F.ease.smooth(Math.min(1, cy.now() / 2.4)), img = apply(op.M, U);
    const cs = C('symmetry-operation'), cu = C('length');
    /* where u is at time k */
    let p;
    if (op.n) { const a = k * 2 * Math.PI / op.n, c = Math.cos(a), s = Math.sin(a); p = [c * U[0] - s * U[1], s * U[0] + c * U[1], U[2]]; }
    else p = U.map((x, j) => x + (img[j] - x) * k);
    if (lastOp !== K.value) {
      lastOp = K.value;
      S.set('axes', F.space.axes([[-B, B], [-B, B], [-B, B]], { ticks: 0 }));
      const el = op.el, marks = [];
      if (el && el.plane) marks.push(...F.space.plane([0, 0, 0], el.plane, cs, { size: 1.15, alpha: 0.18 }).map((m) => ({ ...m, name: `the mirror plane of ${op.label}` })));
      if (el && el.axis) marks.push(...F.space.line([0, 0, 0], [0, 0, 1], cs, { t: [-1.3, 1.3], w: 4 }).map((m) => ({ ...m, name: `the ${op.n}-fold axis, z` })));
      if (el && el.point) marks.push({ k: 'dot', p: [0, 0, 0], color: cs, r: 9, name: 'the centre of inversion, the origin' });
      S.set('element', marks);
      S.set('ghost', [{ k: 'arrow', a: [0, 0, 0], b: U, color: alpha(cu, 0.35), w: 4, name: 'u before the operation, (1.0, 0.5, 0.8)' }, { k: 'label', s: '$\\mathbf{u}$', p: U.map((x) => x * 1.12), color: alpha(cu, 0.7) }]);
    }
    S.set('u', F.space.vector([0, 0, 0], p, cu, { drop: true, w: 5 }).map((m) => (m.k === 'arrow' ? { ...m, name: `u carried by the operation, now (${p.map((x) => fmt(x, 2)).join(', ')})` } : m)));
    S.headline(op.say);
    tex(d.readout, `${op.tex}\\,\\mathbf{u} = ${mat(op.M)} ${col(U)} = ${col(img)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
