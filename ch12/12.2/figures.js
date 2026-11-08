/* Figures for section 12.2 Symmetry Elements and Operations Define the Point Groups. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['12.2'] = function (root, F) {
const { tex, C, PAL, alpha, register, begin, line, text, dot } = F;

/* ---------- vectors, in the molecule's frame: z along the principal axis, in ångström ---------- */
const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const mul = (a, k) => [a[0] * k, a[1] * k, a[2] * k];
const dotp = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const unit = (a) => mul(a, 1 / Math.hypot(...a));
const RAD = Math.PI / 180, TET = Math.acos(-1 / 3);
/* p turned by angle a about the unit axis u through the origin (Rodrigues) */
const turn = (p, u, a) => add(add(mul(p, Math.cos(a)), mul(cross(u, p), Math.sin(a))), mul(u, dotp(u, p) * (1 - Math.cos(a))));
/* p reflected a fraction q of the way through the plane through the origin with unit normal n: it slides straight across */
const mirror = (p, n, q = 1) => sub(p, mul(n, 2 * q * dotp(p, n)));
/* a direction at polar angle th from +z and azimuth ph */
const polar = (th, ph) => [Math.sin(th) * Math.cos(ph * RAD), Math.sin(th) * Math.sin(ph * RAD), Math.cos(th)];
const azi = (ph) => [Math.cos(ph * RAD), Math.sin(ph * RAD), 0];
const NAMES = { H: 'hydrogen', D: 'deuterium', C: 'carbon', N: 'nitrogen', O: 'oxygen', F: 'fluorine', Cl: 'chlorine', Br: 'bromine', S: 'sulfur' };
const RADIUS = { H: 13, D: 13, C: 20, N: 20, O: 20, F: 18, Cl: 24, Br: 27, S: 26 };
const colour = (el) => F.el(el === 'D' ? 'H' : el);
/* every atom bonded to the centre atom 0, unless the molecule lists its bonds */
const star = (atoms) => atoms.slice(1).map((_, i) => [0, i + 1]);
/* the hover names: an atom numbered where the molecule has more than one of its element */
function named(atoms, mol) {
  const count = {}, seen = {};
  atoms.forEach((a) => { count[a.el] = (count[a.el] ?? 0) + 1; });
  return atoms.map((a) => { seen[a.el] = (seen[a.el] ?? 0) + 1; return `${NAMES[a.el]}${count[a.el] > 1 ? ` atom ${seen[a.el]}` : ' atom'} of ${mol}`; });
}

/* ---------- the molecules, honest geometry (bond lengths and angles from the usual tables) ---------- */
const water = { atoms: [{ el: 'O', p: [0, 0, 0.12] }, { el: 'H', p: [0.757, 0, -0.466] }, { el: 'H', p: [-0.757, 0, -0.466] }] };
const ammonia = { atoms: [{ el: 'N', p: [0, 0, 0.3] }, ...[90, 210, 330].map((ph) => ({ el: 'H', p: add([0, 0, 0.3], mul(polar(112 * RAD, ph), 1.01)) }))] };
const methane = { atoms: [{ el: 'C', p: [0, 0, 0] }, ...[[1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]].map((v) => ({ el: 'H', p: mul(unit(v), 1.09) }))] };
function ethane(sub6) {
  /* staggered: the front carbon's three bonds at azimuths 0, 120, 240 above, the back carbon's at 60, 180, 300 below */
  const top = [0, 0, 0.77], bot = [0, 0, -0.77], els = sub6 ?? ['H', 'H', 'H', 'H', 'H', 'H'];
  const atoms = [{ el: 'C', p: top }, { el: 'C', p: bot }];
  [0, 120, 240].forEach((ph, i) => atoms.push({ el: els[i], p: add(top, mul(polar(Math.PI - TET, ph), els[i] === 'Cl' ? 1.77 : els[i] === 'F' ? 1.35 : 1.09)) }));
  [180, 300, 60].forEach((ph, i) => atoms.push({ el: els[3 + i], p: add(bot, mul(polar(TET, ph), els[3 + i] === 'Cl' ? 1.77 : els[3 + i] === 'F' ? 1.35 : 1.09)) }));
  return { atoms, bonds: [[0, 1], [0, 2], [0, 3], [0, 4], [1, 5], [1, 6], [1, 7]] };
}
const benzene = (() => {
  const atoms = [], bonds = [];
  for (let k = 0; k < 6; k++) atoms.push({ el: 'C', p: mul(azi(60 * k), 1.39) });
  for (let k = 0; k < 6; k++) { atoms.push({ el: 'H', p: mul(azi(60 * k), 2.47) }); bonds.push([k, (k + 1) % 6], [k, k + 6]); }
  return { atoms, bonds };
})();
/* a tetrahedral carbon: the first substituent straight up, the other three below at azimuths 0, 120, 240 */
function tetra(els, lens) {
  return { atoms: [{ el: 'C', p: [0, 0, 0] }, { el: els[0], p: [0, 0, lens[0]] }, ...[0, 120, 240].map((ph, i) => ({ el: els[i + 1], p: mul(polar(TET, ph), lens[i + 1]) }))] };
}
const chfclbr = tetra(['H', 'F', 'Cl', 'Br'], [1.09, 1.35, 1.77, 1.93]);
const LEN = { H: 1.09, D: 1.09, F: 1.35, Cl: 1.77, Br: 1.93 };
const bondsOf = (m) => m.bonds ?? star(m.atoms);

/* ---------- the symmetry operations, as the scene performs them ----------
   kind E, C (rotation by 2π/n about axis u), s (reflection in the plane with normal u), i (inversion through
   the centre), S (C_n about u, then reflection in the plane square to u). `tex` is how the readout writes it. */
const Z = [0, 0, 1];
const op = (kind, n, u, tx, name) => ({ kind, n, u: u && unit(u), tex: tx, name });
const E = op('E', 1, null, '\\kEop', 'the identity E');
const rotTex = (n) => (n === 2 ? '\\kCtwo' : n === 3 ? '\\kCthree' : `C_{${n}}`);
/* how many times the operation is applied before every atom is back where it began */
const order = (o) => (o.kind === 'E' ? 1 : o.kind === 'C' ? o.n : o.kind === 'S' ? (o.n % 2 ? 2 * o.n : o.n) : 2);
/* where p goes under o applied once, a fraction q of the way */
function partway(o, p, q) {
  if (o.kind === 'C') return turn(p, o.u, q * 2 * Math.PI / o.n);
  if (o.kind === 's') return mirror(p, o.u, q);
  if (o.kind === 'i') return mul(p, 1 - 2 * q);
  if (o.kind === 'S') return q < 0.5 ? turn(p, o.u, 2 * q * 2 * Math.PI / o.n) : mirror(turn(p, o.u, 2 * Math.PI / o.n), o.u, 2 * q - 1);
  return p;
}
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
/* o applied j times, as the simplest single operation the text names (C_4^2 = C_2, S_6^3 = i, σ² = E) */
function power(o, j) {
  const rot = (n, m) => { const g = gcd(m, n), nn = n / g, mm = m / g; return nn === 1 ? '\\kEop' : `${rotTex(nn)}${mm > 1 ? `^{${mm}}` : ''}`; };
  if (o.kind === 'E') return '\\kEop';
  if (o.kind === 'C') return j % o.n === 0 ? '\\kEop' : rot(o.n, j % o.n);
  if (o.kind === 's' || o.kind === 'i') return j % 2 ? o.tex : '\\kEop';
  const N = order(o), m = j % N;
  if (m === 0) return '\\kEop';
  if (m === 1) return o.tex;
  if (m % 2 === 0) return rot(o.n, m % o.n);
  if ((2 * m) % o.n === 0 && (2 * m / o.n) % 2 === 1) return '\\kiop';
  return m === o.n && o.n % 2 ? '\\ksigmah' : `S_{${o.n}}^{${m}}`;
}

/* ---------- Figures 12.2.1 to 12.2.5: one molecule, one operation ----------
   Physical 3D (an arrangement in space, rule 24.8), drawn through F.space3d with the molecule's principal axis up.
   Moving: play applies the chosen operation once, then again, until every atom is back where it began (C_n n times,
   σ and i twice, S_n n times for even n); between applications every atom stands on a faint ghost of the start.
   The symmetry element (axis, plane, point) is drawn in the operation colour. CHFClBr is offered C3, σ and i about
   its own C–H bond and C, H, F plane, which carry each atom onto a different element: only E leaves it unchanged.
   Orbit: from just above the xy plane to 75° above it, ±60° about the principal axis; no spin, no zoom. */
const MOLS = {
  water: { m: water, name: 'water', tx: '\\mathrm{H_2O}', ops: [
    op('C', 2, Z, '\\kCtwo', 'the rotation C₂ about the z axis'), op('s', 0, [0, 1, 0], '\\ksigmav', 'the reflection σᵥ in the molecular plane'),
    op('s', 0, [1, 0, 0], '\\ksigmavp', 'the reflection σᵥ′ in the plane square to the molecule'), E] },
  ammonia: { m: ammonia, name: 'ammonia', tx: '\\mathrm{NH_3}', ops: [op('C', 3, Z, '\\kCthree', 'the rotation C₃ about the z axis'), op('s', 0, [1, 0, 0], '\\ksigmav', 'the reflection σᵥ'), E] },
  ethane: { m: ethane(), name: 'staggered ethane', tx: '\\mathrm{C_2H_6}', ops: [
    op('C', 3, Z, '\\kCthree', 'the rotation C₃ about the C–C axis'), op('C', 2, azi(30), '\\kCtwo', 'the rotation C₂ about an axis square to the C–C bond'),
    op('s', 0, [0, 1, 0], '\\ksigmad', 'the reflection σ_d'), op('i', 0, null, '\\kiop', 'the inversion i through the centre'), op('S', 6, Z, 'S_{6}', 'the improper rotation S₆ about the C–C axis'), E] },
  benzene: { m: benzene, name: 'benzene', tx: '\\mathrm{C_6H_6}', ops: [
    op('C', 6, Z, 'C_{6}', 'the rotation C₆ about the axis square to the ring'), op('C', 2, [1, 0, 0], '\\kCtwo', 'the rotation C₂ about an axis through two carbon atoms'),
    op('s', 0, Z, '\\ksigmah', 'the reflection σ_h in the plane of the ring'), op('s', 0, [0, 1, 0], '\\ksigmav', 'the reflection σᵥ through two carbon atoms'),
    op('s', 0, azi(120), '\\ksigmad', 'the reflection σ_d between the carbon atoms'), op('i', 0, null, '\\kiop', 'the inversion i through the centre'), op('S', 6, Z, 'S_{6}', 'the improper rotation S₆'), E] },
  methane: { m: methane, name: 'methane', tx: '\\mathrm{CH_4}', ops: [
    op('C', 3, [1, 1, 1], '\\kCthree', 'the rotation C₃ about a C–H bond'), op('C', 2, Z, '\\kCtwo', 'the rotation C₂ about the z axis'),
    op('s', 0, [1, -1, 0], '\\ksigmad', 'the reflection σ_d through two C–H bonds'), op('S', 4, Z, 'S_{4}', 'the improper rotation S₄ about the z axis'), E] },
  chfclbr: { m: chfclbr, name: 'CHFClBr', tx: '\\mathrm{CHFClBr}', ops: [
    E, op('C', 3, Z, '\\kCthree', 'a rotation by 120° about the C–H bond'), op('s', 0, [0, 1, 0], '\\ksigmaop', 'a reflection in the plane of C, H and F'), op('i', 0, null, '\\kiop', 'an inversion through the carbon atom')] },
};
const MOL_KEYS = ['water', 'ammonia', 'ethane', 'benzene', 'methane', 'chfclbr'];
const opLabel = (o) => `$${o.tex}$`;
/* the element of an operation as marks: an axis, a plane, a point, or an axis and its plane */
function elementMarks(o, lit) {
  const col = lit ? C('symmetry-operation') : alpha(C('symmetry-operation'), 0.55), out = [];
  const axis = (u, L) => { out.push({ k: 'line', pts: [mul(u, -L), mul(u, L)], color: col, w: 5, name: `the ${o.kind === 'S' ? 'improper ' : ''}rotation axis of ${o.name.replace(/^(the|a|an) /, '')}` }); out.push({ k: 'label', s: opLabel(o), p: mul(u, L + 0.28), color: C('symmetry-operation') }); };
  const plane = (n, R) => {
    const a = unit(Math.abs(n[2]) > 0.9 ? cross(n, [1, 0, 0]) : cross(n, Z)), b = cross(n, a);
    const c = [add(mul(a, R), mul(b, R)), add(mul(a, -R), mul(b, R)), add(mul(a, -R), mul(b, -R)), add(mul(a, R), mul(b, -R))];
    out.push({ k: 'faces', faces: [c], color: C('symmetry-operation'), alpha: lit ? 0.2 : 0.12, name: `the mirror plane of ${o.name.replace(/^(the|a|an) /, '')}` });
    out.push({ k: 'line', pts: [...c, c[0]], color: col, w: 2 });
    return c;
  };
  if (o.kind === 'C') axis(o.u, 2.35);
  else if (o.kind === 's') { const c = plane(o.u, 2.0); out.push({ k: 'label', s: opLabel(o), p: add(c[0], mul(o.u, 0.05)), color: C('symmetry-operation') }); }
  else if (o.kind === 'i') { out.push({ k: 'dot', p: [0, 0, 0], color: C('symmetry-operation'), r: 8, name: 'the centre of inversion' }); out.push({ k: 'label', s: opLabel(o), p: [0, 0, -0.25], color: C('symmetry-operation') }); }
  else if (o.kind === 'S') { axis(o.u, 2.35); plane(o.u, 1.7); }
  return out;
}
(function () {
  const d = F.sim(root, 'sim-operations');
  const S = F.space3d(d, { box: [[-2.5, 2.5], [-2.5, 2.5], [-2.2, 2.2]], h: 540, turn: -2.25, tilt: 0.3, fit: 3.1, spin: 'off', zoom: false, pitch: [0.03, 75 * RAD], yaw: [-2.25 - 60 * RAD, -2.25 + 60 * RAD] });
  const cy = F.cycle(() => total(), 1.4);
  const MOL = F.select(d.controls, { label: 'molecule', options: MOL_KEYS.map((k) => ({ value: k, label: MOLS[k].name === 'CHFClBr' ? 'CHFClBr' : MOLS[k].name })), value: 'water', aria: 'the molecule', key: 'molecule',
    onInput: () => { OP.options(opts(), MOL.value === 'chfclbr' ? '1' : '0'); cy.reset(); } });
  const opts = () => MOLS[MOL.value].ops.map((o, i) => ({ value: String(i), label: opLabel(o) }));
  const OP = F.choice(d.controls, { label: 'operation', options: opts(), value: '0', aria: 'the symmetry operation', key: 'operation', onInput: () => cy.reset() });
  const cur = () => MOLS[MOL.value].ops[+OP.value] ?? MOLS[MOL.value].ops[0];
  const MOVE = (o) => Math.max(0.7, Math.min(1.4, 6 / order(o))), GAP = 0.45, LEAD = 0.3;
  const total = () => { const o = cur(); return LEAD + order(o) * (MOVE(o) + GAP); };
  function draw() {
    const M = MOLS[MOL.value], o = cur(), m = M.m, N = order(o), t = cy.now();
    const slot = MOVE(o) + GAP, raw = (t - LEAD) / slot;
    const j = Math.max(0, Math.min(N, Math.floor(raw))), q = j >= N ? 0 : Math.max(0, Math.min(1, ((t - LEAD) - j * slot) / MOVE(o)));
    const ease = q * q * (3 - 2 * q);
    /* applied j whole times, then the (j+1)th a fraction of the way */
    const pos = m.atoms.map((a) => { let p = a.p; for (let k = 0; k < j; k++) p = partway(o, p, 1); return j < N ? partway(o, p, ease) : p; });
    const done = j >= 1 && (q === 0 || j >= N);
    const names = named(m.atoms, M.name);
    /* after a whole application, is every atom on the start site of an atom of its own element? */
    let wrong = null;
    if (done) m.atoms.forEach((a, i) => { const k = m.atoms.findIndex((b) => Math.hypot(...sub(b.p, pos[i])) < 1e-3); if (!wrong && k >= 0 && m.atoms[k].el !== a.el) wrong = [a.el, m.atoms[k].el]; });
    S.set('element', o.kind === 'E' ? [] : elementMarks(o, q > 0 && q < 1));
    S.set('ghosts', m.atoms.map((a) => ({ k: 'dot', p: a.p, color: alpha(colour(a.el), 0.22), r: RADIUS[a.el] + 2 })));
    S.set('molecule', [
      ...bondsOf(m).map(([a, b]) => ({ k: 'line', pts: [pos[a], pos[b]], color: 'muted', w: 7 })),
      ...m.atoms.map((a, i) => ({ k: 'dot', p: pos[i], color: colour(a.el), r: RADIUS[a.el], name: names[i] })),
    ]);
    const opName = o.name.replace(/^the /, '');
    const VERB = { C: ['turn', 'turns'], s: ['reflection', 'reflections'], i: ['inversion', 'inversions'], S: ['turn and reflection', 'turns and reflections'] }[o.kind];
    S.headline(o.kind === 'E' ? `Doing nothing leaves ${M.name} as it is; every molecule has E.`
      : wrong ? `After one ${opName.replace(/^(a|an) /, '')}, a ${NAMES[wrong[0]]} atom stands where a ${NAMES[wrong[1]]} atom stood, so this is not a symmetry operation of ${M.name}.`
      : j === 0 ? `Play applies ${opName} to ${M.name}, again and again.`
      : j >= N ? `After ${N} ${VERB[1]}, every atom of ${M.name} is back on its own starting place.`
      : `After each ${VERB[0]}, every atom of ${M.name} stands where an identical atom stood.`);
    const sym = M.name === 'CHFClBr' && o.kind !== 'E' ? false : true;
    const now = j <= 1 ? o.tex : `${o.tex}^{${j}} = ${power(o, j)}`;
    const rule = o.kind === 'E' ? '\\kEop' : o.kind === 'C' ? `${o.tex}^{${o.n}} = \\kEop` : o.kind === 'S' ? (o.n % 2 ? `${o.tex}^{${o.n}} = \\ksigmah,\\ ${o.tex}^{${2 * o.n}} = \\kEop` : `${o.tex}^{${o.n}} = \\kEop`) : `${o.tex}^{2} = \\kEop`;
    tex(d.readout, sym ? `${now} \\\\ \\small ${rule}` : `${now} \\\\ \\small \\text{not a symmetry operation of } ${M.tx}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* ---------- Figure: the flowchart and the molecule it classifies ----------
   Still: the reader picks a molecule and nothing has a clock. Above, the molecule in physical 3D with the symmetry
   elements its answers turn on (orbit as in the figure above); below, Vallance's flowchart redrawn, the questions in
   the book's words, the path the molecule takes in ink and the rest faint, ending on its group. */
const Q = {
  lin: { x: 700, y: 46, s: 'Is the molecule linear?' },
  many: { x: 480, y: 132, s: 'Does it have two or more\nCₙ axes with n > 2?' },
  linI: { x: 1150, y: 132, s: 'Does it have a centre\nof inversion?' },
  Dinfh: { x: 1340, y: 132, g: 'D∞h' }, Cinfv: { x: 1150, y: 222, g: 'C∞v' },
  axis: { x: 135, y: 222, s: 'Does it have a\nCₙ axis?' },
  cubI: { x: 760, y: 222, s: 'Does it have a centre\nof inversion?' },
  Td: { x: 660, y: 312, g: 'Td' }, C5: { x: 1040, y: 312, s: 'Does it have a\nC₅ axis?' }, Ih: { x: 1220, y: 312, g: 'Ih' }, Oh: { x: 1040, y: 400, g: 'Oh' },
  mirror: { x: 135, y: 312, s: 'Does it have a\nmirror plane?' }, Cs: { x: 300, y: 312, g: 'Cs' },
  inv: { x: 135, y: 400, s: 'Does it have a centre\nof inversion?' }, Ci: { x: 70, y: 488, g: 'Ci' }, C1: { x: 200, y: 488, g: 'C1' },
  perp: { x: 480, y: 312, s: 'Are there n C₂ axes\nperpendicular to the\nprincipal axis?' },
  hC: { x: 480, y: 412, s: 'Is there a horizontal\nmirror plane?' }, Cnh: { x: 310, y: 412, g: 'Cnh' },
  vC: { x: 480, y: 500, s: 'Are there n vertical\nmirror planes?' }, Cnv: { x: 310, y: 500, g: 'Cnv' },
  sC: { x: 480, y: 588, s: 'Is there an\nS₂ₙ axis?' }, S2n: { x: 310, y: 588, g: 'S2n' }, Cn: { x: 480, y: 670, g: 'Cn' },
  hD: { x: 760, y: 412, s: 'Is there a horizontal\nmirror plane?' }, Dnh: { x: 930, y: 412, g: 'Dnh' },
  dD: { x: 760, y: 500, s: 'Are there n dihedral\nmirror planes?' }, Dnd: { x: 930, y: 500, g: 'Dnd' }, Dn: { x: 760, y: 588, g: 'Dn' },
};
/* each question's two answers, yes then no */
const NEXT = { lin: ['linI', 'many'], linI: ['Dinfh', 'Cinfv'], many: ['cubI', 'axis'], cubI: ['C5', 'Td'], C5: ['Ih', 'Oh'], axis: ['perp', 'mirror'], mirror: ['Cs', 'inv'], inv: ['Ci', 'C1'],
  perp: ['hD', 'hC'], hC: ['Cnh', 'vC'], vC: ['Cnv', 'sC'], sC: ['S2n', 'Cn'], hD: ['Dnh', 'dD'], dD: ['Dnd', 'Dn'] };
const GNAME = { 'D∞h': 'D_{\\infty h}', 'C∞v': 'C_{\\infty v}', Td: 'T_d', Ih: 'I_h', Oh: 'O_h', Cs: 'C_s', Ci: 'C_i', C1: 'C_1', Cnh: 'C_{nh}', Cnv: 'C_{nv}', S2n: 'S_{2n}', Cn: 'C_n', Dnh: 'D_{nh}', Dnd: 'D_{nd}', Dn: 'D_n' };
const FIND = {
  chdfcl: { name: 'CHDFCl', m: tetra(['H', 'D', 'F', 'Cl'], [1.09, 1.09, 1.35, 1.77]), yes: [], group: 'C_1', h: '\\kEop', order: 1, els: [], head: 'CHDFCl has no symmetry element but the identity.' },
  ci: { name: 'C₂H₂F₂Cl₂', m: ethane(['Cl', 'F', 'H', 'Cl', 'F', 'H']), yes: ['inv'], group: 'C_i', h: '\\kEop,\\ \\kiop', order: 2, els: [['i']], head: 'Its one element is the centre of inversion halfway along the C–C bond.' },
  cs: { name: 'CH₂ClF', m: tetra(['Cl', 'F', 'H', 'H'], [1.77, 1.35, 1.09, 1.09]), yes: ['mirror'], group: 'C_s', h: '\\kEop,\\ \\ksigmah', order: 2, els: [['s', [0, 1, 0]]], head: 'Its one element is the mirror plane through C, Cl and F.' },
  h2o2: { name: 'H₂O₂', m: (() => {
    const O1 = [0.735, 0, 0], O2 = [-0.735, 0, 0], al = 34.5 * RAD, h = [0.087, 0.996 * Math.cos(al), 0.996 * Math.sin(al)];
    return { atoms: [{ el: 'O', p: O1 }, { el: 'O', p: O2 }, { el: 'H', p: add(O1, mul(h, 0.95)) }, { el: 'H', p: add(O2, mul([-h[0], -h[1], h[2]], 0.95)) }], bonds: [[0, 1], [0, 2], [1, 3]] };
  })(), yes: ['axis'], group: 'C_2', h: '\\kEop,\\ \\kCtwo', order: 2, els: [['C', Z, 2]], head: 'Its one element is a C₂ axis bisecting the O–O bond, between the two H atoms.' },
  nh3: { name: 'NH₃', m: ammonia, yes: ['axis', 'vC'], group: 'C_{3v}', h: '\\kEop,\\ 2\\kCthree,\\ 3\\ksigmav', order: 6, els: [['C', Z, 3], ...[0, 120, 240].map((a) => ['s', azi(a)])], head: 'One C₃ axis and three vertical mirror planes, each through one H atom.' },
  hcl: { name: 'HCl', m: { atoms: [{ el: 'Cl', p: [0, 0, -0.45] }, { el: 'H', p: [0, 0, 0.82] }] }, yes: ['lin'], group: 'C_{\\infty v}', h: '\\kEop,\\ 2C_{\\infty}^{\\phi},\\ \\infty\\ksigmav', order: '\\infty', els: [['C', Z, '∞']], head: 'A linear molecule with different ends: its axis is C∞, but it has no centre of inversion.' },
  n2h2: { name: 'trans-N₂H₂', m: (() => {
    const N1 = [0.62, 0, 0], d = [Math.cos(74 * RAD), Math.sin(74 * RAD), 0];
    return { atoms: [{ el: 'N', p: N1 }, { el: 'N', p: mul(N1, -1) }, { el: 'H', p: add(N1, mul(d, 1.03)) }, { el: 'H', p: mul(add(N1, mul(d, 1.03)), -1) }], bonds: [[0, 1], [0, 2], [1, 3]] };
  })(), yes: ['axis', 'hC'], group: 'C_{2h}', h: '\\kEop,\\ \\kCtwo,\\ \\kiop,\\ \\ksigmah', order: 4, els: [['C', Z, 2], ['s', Z, 'h']], head: 'A C₂ axis square to the molecule and the molecular plane as σ_h, which together give a centre of inversion.' },
  ethane: { name: 'staggered ethane', m: ethane(), yes: ['axis', 'perp', 'dD'], group: 'D_{3d}', h: '\\kEop,\\ 2\\kCthree,\\ 3\\kCtwo,\\ \\kiop,\\ 2S_6,\\ 3\\ksigmad', order: 12, els: [['C', Z, 3], ...[30, 150, 270].map((a) => ['C', azi(a), 2]), ...[0, 120, 240].map((a) => ['s', azi(a + 90)])], head: 'The C₃ axis along the C–C bond, three C₂ axes square to it and three dihedral mirror planes between them.' },
  co2: { name: 'CO₂', m: { atoms: [{ el: 'C', p: [0, 0, 0] }, { el: 'O', p: [0, 0, 1.16] }, { el: 'O', p: [0, 0, -1.16] }] }, yes: ['lin', 'linI'], group: 'D_{\\infty h}', h: '\\kEop,\\ 2C_{\\infty}^{\\phi},\\ \\infty\\ksigmav,\\ \\kiop,\\ 2S_{\\infty}^{\\phi},\\ \\infty\\kCtwo', order: '\\infty', els: [['C', Z, '∞'], ['i']], head: 'A linear molecule whose two ends match: a C∞ axis and a centre of inversion on the carbon atom.' },
  ch4: { name: 'CH₄', m: methane, yes: ['many'], group: 'T_d', h: '\\kEop,\\ 8\\kCthree,\\ 3\\kCtwo,\\ 6S_4,\\ 6\\ksigmad', order: 24, els: [[1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]].map((v) => ['C', v, 3]), head: 'Four C₃ axes, one along each C–H bond, and no centre of inversion.' },
  sf6: { name: 'SF₆', m: { atoms: [{ el: 'S', p: [0, 0, 0] }, ...[[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]].map((v) => ({ el: 'F', p: mul(v, 1.56) }))] }, yes: ['many', 'cubI'], group: 'O_h', h: '\\kEop,\\ 8\\kCthree,\\ 6\\kCtwo,\\ 6C_4,\\ 3\\kCtwo,\\ \\kiop,\\ 6S_4,\\ 8S_6,\\ 3\\ksigmah,\\ 6\\ksigmad', order: 48, els: [[[1, 0, 0], 4], [[0, 1, 0], 4], [[0, 0, 1], 4]].map(([v, n]) => ['C', v, n]).concat([['i']]), head: 'Three C₄ axes along the S–F bonds and a centre of inversion on the sulfur atom, with no C₅ axis.' },
};
const FIND_KEYS = ['chdfcl', 'ci', 'cs', 'h2o2', 'nh3', 'hcl', 'n2h2', 'ethane', 'co2', 'ch4', 'sf6'];
/* the path a molecule takes: every question answered, yes where the molecule lists it */
function pathOf(f) {
  const nodes = ['lin'], edges = [];
  let k = 'lin';
  while (NEXT[k]) { const y = f.yes.includes(k), nx = NEXT[k][y ? 0 : 1]; edges.push([k, nx]); nodes.push(nx); k = nx; }
  return { nodes, edges, end: k };
}
(function () {
  const d = F.sim(root, 'sim-point-group');
  const S = F.space3d(d, { box: [[-2.2, 2.2], [-2.2, 2.2], [-2, 2]], h: 400, turn: -2.25, tilt: 0.32, fit: 3.0, spin: 'off', zoom: false, pitch: [0.03, 75 * RAD], yaw: [-2.25 - 60 * RAD, -2.25 + 60 * RAD] });
  const chart = F.makeCanvas(d.stage, 712);
  const MOL = F.select(d.controls, { label: 'molecule', options: FIND_KEYS.map((k) => ({ value: k, label: FIND[k].name })), value: 'nh3', aria: 'the molecule', key: 'molecule' });
  const hits = [];
  F.hover(d.stage, () => hits, chart);
  const BW = 250, BH = 58, R = 32;
  const hOf = (n) => (n.g ? 2 * R : Math.max(BH, 22 * n.s.split('\n').length + 14));
  function draw() {
    const f = FIND[MOL.value], m = f.m, names = named(m.atoms, f.name);
    /* the molecule and its elements */
    const els = [];
    f.els.forEach((e) => {
      const col = alpha(C('symmetry-operation'), 0.85);
      if (e[0] === 'C') { const u = unit(e[1]), L = 2.1; els.push({ k: 'line', pts: [mul(u, -L), mul(u, L)], color: col, w: 4, name: `a C${e[2] === '∞' ? '∞' : ['', '', '₂', '₃', '₄'][e[2]]} axis` }); }
      else if (e[0] === 's') {
        const n = unit(e[1]), a = unit(Math.abs(n[2]) > 0.9 ? cross(n, [1, 0, 0]) : cross(n, Z)), b = cross(n, a), r = 1.75;
        const c = [add(mul(a, r), mul(b, r)), add(mul(a, -r), mul(b, r)), add(mul(a, -r), mul(b, -r)), add(mul(a, r), mul(b, -r))];
        els.push({ k: 'faces', faces: [c], color: C('symmetry-operation'), alpha: 0.12, name: e[2] === 'h' ? 'the horizontal mirror plane σ_h' : 'a mirror plane' }, { k: 'line', pts: [...c, c[0]], color: alpha(C('symmetry-operation'), 0.5), w: 2 });
      } else if (e[0] === 'i') els.push({ k: 'dot', p: [0, 0, 0], color: C('symmetry-operation'), r: 7, name: 'the centre of inversion' });
    });
    S.set('elements', els);
    S.set('molecule', [
      ...bondsOf(m).map(([a, b]) => ({ k: 'line', pts: [m.atoms[a].p, m.atoms[b].p], color: 'muted', w: 7 })),
      ...m.atoms.map((a, i) => ({ k: 'dot', p: a.p, color: colour(a.el), r: RADIUS[a.el], name: names[i] })),
    ]);
    S.headline(f.head);
    /* the flowchart */
    const { ctx } = begin(chart), P = pathOf(f), on = new Set(P.nodes), lit = new Set(P.edges.map(([a, b]) => a + '>' + b));
    hits.length = 0;
    Object.entries(NEXT).forEach(([k, [y, n]]) => [[y, 'Y'], [n, 'N']].forEach(([c, w]) => {
      const a = Q[k], b = Q[c], hot = lit.has(k + '>' + c), col = hot ? PAL.ink : alpha(PAL.ink, 0.25);
      /* leave from the box's side toward a child level with it, else from its foot; arrive at the child's head or side */
      const level = Math.abs(a.y - b.y) < 4, sx = level ? a.x + Math.sign(b.x - a.x) * BW / 2 : a.x, sy = level ? a.y : a.y + hOf(a) / 2;
      const ex = level ? b.x - Math.sign(b.x - a.x) * (b.g ? R : BW / 2) : b.x, ey = level ? b.y : b.y - hOf(b) / 2;
      if (level || Math.abs(sx - ex) < 4) line(ctx, sx, sy, ex, ey, col, hot ? 4 : 2);
      else { line(ctx, sx, sy, sx, sy + 10, col, hot ? 4 : 2); line(ctx, sx, sy + 10, ex, sy + 10, col, hot ? 4 : 2); line(ctx, ex, sy + 10, ex, ey, col, hot ? 4 : 2); }
      const lx = level ? (sx + ex) / 2 : ex + 14, ly = level ? sy - 10 : (Math.abs(sx - ex) < 4 ? (sy + ey) / 2 : (sy + 10 + ey) / 2) + 6;
      text(ctx, w, lx, ly, hot ? PAL.ink : alpha(PAL.ink, 0.35), { size: 17, weight: hot ? 700 : 400, align: 'center' });
    }));
    Object.entries(Q).forEach(([k, n]) => {
      const hot = on.has(k), end = k === P.end;
      if (n.g) {
        ctx.save(); ctx.beginPath(); ctx.arc(n.x, n.y, R, 0, 2 * Math.PI); ctx.fillStyle = end ? alpha(PAL.ink, 0.14) : PAL.panel; ctx.fill();
        ctx.lineWidth = end ? 4 : 2; ctx.strokeStyle = hot ? PAL.ink : alpha(PAL.ink, 0.3); ctx.stroke(); ctx.restore();
        text(ctx, `$${GNAME[n.g]}$`, n.x, n.y + 8, hot ? PAL.ink : alpha(PAL.ink, 0.4), { size: 20, weight: end ? 700 : 400, align: 'center', tex: true });
        hits.push({ x: n.x, y: n.y, r: R, name: `the point group ${n.g}` });
        return;
      }
      const lines = n.s.split('\n'), h = hOf(n);
      ctx.save(); ctx.fillStyle = PAL.panel; ctx.fillRect(n.x - BW / 2, n.y - h / 2, BW, h); ctx.lineWidth = hot ? 3 : 1.5; ctx.strokeStyle = hot ? PAL.ink : alpha(PAL.ink, 0.3); ctx.strokeRect(n.x - BW / 2, n.y - h / 2, BW, h); ctx.restore();
      lines.forEach((s, i) => text(ctx, s, n.x, n.y - (lines.length - 1) * 11 + i * 22 + 6, hot ? PAL.ink : alpha(PAL.ink, 0.4), { size: 17, align: 'center' }));
    });
    tex(d.readout, `${f.group}:\\ ${f.h},\\ h = ${f.order}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
