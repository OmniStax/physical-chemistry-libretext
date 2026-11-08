/* Figures for section 3.9 A Particle in a Three-Dimensional Box. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.9'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, text, topline, axes, fmt } = F;

/* ---------- shared: the box and its energies ----------
   Both figures stretch the box with two ratios, ry = L_y/L_x and rz = L_z/L_x, and keep its volume
   L_x L_y L_z = L^3, the cube's, so the ladder never slides as a whole and energies stay in units of
   h^2/8mL^2: in the cube they are the book's 3, 6, 9, ... of Table 3.9.1. */
const sides = (ry, rz) => { const lx = Math.pow(ry * rz, -1 / 3); return [lx, ry * lx, rz * lx]; };
/* E in units of h^2/8mL^2 */
const energy = ([a, b, c], [lx, ly, lz]) => a * a / (lx * lx) + b * b / (ly * ly) + c * c / (lz * lz);
const NMAX = 12;
const ALL = [];
for (let a = 1; a <= NMAX; a++) for (let b = 1; b <= NMAX; b++) for (let c = 1; c <= NMAX; c++) ALL.push([a, b, c]);
const same = (e, f) => Math.abs(e - f) <= 1e-9 * Math.max(1, Math.abs(f));
/* a number as the reader reads it: whole where it is whole */
const num = (v, d = 2) => (Math.abs(v - Math.round(v)) < 1e-9 ? String(Math.round(v)) : fmt(v, d));
const trio = (s) => `(${s.join(',')})`;

/* the sign of psi as a fact: one false-colour scale of the wavefunction, the drum's red above zero and
   blue below (2.5), the page's neutral at zero (root 7.1) */
const UP = '#c2413a', DOWN = '#2f6ab3';

/* ---------- Figure 3.9.1: |psi|^2 of a particle in a 3D box, as a cloud of points ----------
   Mathematical 3D (root 28.3): the density fills the volume, and the lesson is where its nodal planes stand.
   Each of N points is a place a measurement could find the particle (3.4's Born picture). |psi|^2 is
   X^2 Y^2 Z^2, so each coordinate is drawn on its own: u in [0, 1] goes through the inverse of the 1D box's
   cumulative probability F_n(t) = t - sin(2 n pi t)/(2 n pi). Every point keeps its three uniform numbers
   for good, so a change of n_x slides each point along x from its old quantile to its new one: the cloud
   morphs. Colour is the sign of psi there. The box is drawn with its longest side 2 units, centred.
   Orbit: azimuth free, elevation -80 to 80 deg (no ground; the z axis stays upright); no spin, no zoom. */
(function () {
  const d = F.sim(root, 'sim-box3d');
  const H = 560, FIT = 2.6, N = 3500, RPX = 2.6;
  const S = F.space3d(d, { box: [[-1, 1], [-1, 1], [-1, 1]], h: H, tilt: 0.35, fit: FIT, pitch: [-80 * Math.PI / 180, 80 * Math.PI / 180], spin: 'off', zoom: false });
  const opts = [1, 2, 3].map((k) => ({ value: String(k), label: String(k) }));
  const NX = F.choice(d.controls, { label: 'n_x', options: opts, value: '1', aria: 'the quantum number along x', key: 'nx' });
  const NY = F.choice(d.controls, { label: 'n_y', options: opts, value: '1', aria: 'the quantum number along y', key: 'ny' });
  const NZ = F.choice(d.controls, { label: 'n_z', options: opts, value: '1', aria: 'the quantum number along z', key: 'nz' });
  const RY = ctl(d.controls, { label: '\\kLy/\\kLx', cls: '', key: 'ry', min: 0.5, max: 2, step: 0.01, value: 1, unit: '', dec: 2, aria: 'the ratio of L_y to L_x', specials: [{ at: 1, label: 'a cube' }] });
  const RZ = ctl(d.controls, { label: '\\kLz/\\kLx', cls: '', key: 'rz', min: 0.5, max: 2, step: 0.01, value: 1, unit: '', dec: 2, aria: 'the ratio of L_z to L_x', specials: [{ at: 1, label: 'a cube' }] });
  const leg = F.makeCanvas(d.stage, 64);
  /* three uniform numbers per point, from a seeded generator, so the cloud is the same on every load */
  let seed = 3901;
  const rnd = () => { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const U = Array.from({ length: N }, () => [rnd(), rnd(), rnd()]);
  /* the inverse of F_n on a table of 1601 values of u, for n = 1, 2, 3 */
  const INV = [null, 1, 2, 3].map((n) => {
    if (!n) return null;
    const M = 4000, ts = [], Fs = [];
    for (let i = 0; i <= M; i++) { const t = i / M; ts.push(t); Fs.push(t - Math.sin(2 * n * Math.PI * t) / (2 * n * Math.PI)); }
    const K = 1600, out = new Float64Array(K + 1); let j = 0;
    for (let i = 0; i <= K; i++) { const u = i / K; while (j < M - 1 && Fs[j + 1] < u) j++; const f = (u - Fs[j]) / Math.max(1e-12, Fs[j + 1] - Fs[j]); out[i] = ts[j] + Math.min(1, Math.max(0, f)) / M; }
    return out;
  });
  const Q = (n, u) => { const T = INV[n], x = u * 1600, i = Math.min(1599, Math.floor(x)); return T[i] + (T[i + 1] - T[i]) * (x - i); };
  /* one point's octahedron, radius r, as eight triangles */
  const gem = (c, r, out) => {
    for (const sx of [-1, 1]) for (const sy of [-1, 1]) for (const sz of [-1, 1])
      out.push([[c[0] + sx * r, c[1], c[2]], [c[0], c[1] + sy * r, c[2]], [c[0], c[1], c[2] + sz * r]]);
  };
  const s3 = Math.sqrt(3), pxu = (2 * 7 * Math.tan(Math.PI / 12)) / H / (FIT / s3), R = RPX * pxu;
  const rest = () => F.mixColor(PAL.panel, PAL.ink, 0.1);
  const scale = () => [[-1, F.fact(DOWN)], [0, rest()], [1, F.fact(UP)]];
  let last = '';
  function legend() {
    const { ctx, W } = begin(leg);
    F.legend(ctx, { l: 0, t: 0, r: W, b: 64 }, [
      { s: 'ψ > 0', color: F.fact(UP), kind: 'dot' },
      { s: 'ψ < 0', color: F.fact(DOWN), kind: 'dot' },
      { s: 'nodal plane, ψ = 0', color: alpha(PAL.ink, 0.3), kind: 'swatch' },
    ], { corner: 'top', panel: false, row: true });
  }
  /* without WebGL: the density cut by three planes through the first lobe, on one diverging scale of psi */
  function flat(n, L) {
    const c2 = d.stage.querySelector('canvas'); if (!c2) return;
    const { ctx } = begin(c2), sc = scale(), G = 36, side = 300, y0 = 150;
    const cuts = [['x', 'y', 2, 'z'], ['x', 'z', 1, 'y'], ['y', 'z', 0, 'x']];
    const idx = { x: 0, y: 1, z: 2 };
    cuts.forEach(([a, b, fixed, name], k) => {
      const ia = idx[a], ib = idx[b], big = Math.max(L[ia], L[ib]), wa = side * L[ia] / big, wb = side * L[ib] / big;
      const ox = 110 + k * 420 + (side - wa) / 2, oy = y0 + (side - wb) / 2;
      const uf = 1 / (2 * n[fixed]);
      for (let i = 0; i < G; i++) for (let j = 0; j < G; j++) {
        const u = [0, 0, 0]; u[ia] = (i + 0.5) / G; u[ib] = (j + 0.5) / G; u[fixed] = uf;
        const v = Math.sin(n[0] * Math.PI * u[0]) * Math.sin(n[1] * Math.PI * u[1]) * Math.sin(n[2] * Math.PI * u[2]);
        ctx.fillStyle = F.space.tint(sc, v); ctx.fillRect(ox + i * wa / G, oy + wb - (j + 1) * wb / G, wa / G + 0.6, wb / G + 0.6);
      }
      line(ctx, ox, oy, ox + wa, oy, PAL.ink, 3); line(ctx, ox + wa, oy, ox + wa, oy + wb, PAL.ink, 3);
      line(ctx, ox + wa, oy + wb, ox, oy + wb, PAL.ink, 3); line(ctx, ox, oy + wb, ox, oy, PAL.ink, 3);
      text(ctx, `${a}${b} plane through the first lobe in ${name}`, ox + wa / 2, oy + wb + 34, PAL.muted, { size: 17, align: 'center' });
    });
  }
  function draw() {
    const n = [+NX.value, +NY.value, +NZ.value], ks = [NX.k, NY.k, NZ.k], fr = [+NX.from, +NY.from, +NZ.from];
    const L = sides(RY.v, RZ.v), big = Math.max(...L), D = L.map((l) => 2 * l / big);
    legend();
    if (S.flat) flat(n, L);
    else {
      const key = [n, ks.map((k) => (k >= 1 ? 1 : k.toFixed(3))), fr, D.map((v) => v.toFixed(4)), F.fact(UP), F.fact(DOWN), PAL.ink].join('|');
      if (key !== last) {
        last = key;
        const plus = [], minus = [];
        for (let i = 0; i < N; i++) {
          const u = U[i].map((ui, a) => (ks[a] >= 1 || fr[a] === n[a] ? Q(n[a], ui) : Q(fr[a], ui) + (Q(n[a], ui) - Q(fr[a], ui)) * ks[a]));
          const s = Math.sin(n[0] * Math.PI * u[0]) * Math.sin(n[1] * Math.PI * u[1]) * Math.sin(n[2] * Math.PI * u[2]);
          gem(u.map((ua, a) => (ua - 0.5) * D[a]), R, s >= 0 ? plus : minus);
        }
        S.set('cloud', [
          { k: 'faces', faces: plus, color: F.fact(UP), alpha: 1, name: 'where ψ > 0: each point a place the particle could be found' },
          ...(minus.length ? [{ k: 'faces', faces: minus, color: F.fact(DOWN), alpha: 1, name: 'where ψ < 0: each point a place the particle could be found' }] : []),
        ]);
        /* the nodal planes of the state, the old ones fading out while the cloud morphs */
        const planes = [];
        const plane = (a, nn, j, op) => {
          const c = (j / nn - 0.5) * D[a], o = [0, 1, 2].filter((b) => b !== a), h = o.map((b) => D[b] / 2);
          const corner = (p, q) => { const v = [0, 0, 0]; v[a] = c; v[o[0]] = p * h[0]; v[o[1]] = q * h[1]; return v; };
          const ax = 'xyz'[a], at = nn === 2 ? `L${ax}/2` : `${j}L${ax}/${nn}`;
          planes.push({ k: 'faces', faces: [[corner(-1, -1), corner(1, -1), corner(1, 1), corner(-1, 1)]], color: PAL.ink, alpha: op, name: `a nodal plane, ${ax} = ${at}, where ψ = 0` });
        };
        [0, 1, 2].forEach((a) => {
          const k = ks[a] >= 1 || fr[a] === n[a] ? 1 : ks[a];
          for (let j = 1; j < n[a]; j++) plane(a, n[a], j, 0.14 * k);
          if (k < 1) for (let j = 1; j < fr[a]; j++) plane(a, fr[a], j, 0.14 * (1 - k));
        });
        S.set('planes', planes);
        const h = D.map((v) => v / 2), segs = [];
        for (const sy of [-1, 1]) for (const sz of [-1, 1]) segs.push([[-h[0], sy * h[1], sz * h[2]], [h[0], sy * h[1], sz * h[2]]]);
        for (const sx of [-1, 1]) for (const sz of [-1, 1]) segs.push([[sx * h[0], -h[1], sz * h[2]], [sx * h[0], h[1], sz * h[2]]]);
        for (const sx of [-1, 1]) for (const sy of [-1, 1]) segs.push([[sx * h[0], sy * h[1], -h[2]], [sx * h[0], sy * h[1], h[2]]]);
        const g = 0.14;
        S.set('box', [
          { k: 'segs', segs, color: 'ink', w: 3, name: 'the walls of the box, where ψ = 0' },
          { k: 'label', s: '$\\kLx$', p: [0, -h[1] - g, -h[2] - g], color: C('length'), cls: 'bare' },
          { k: 'label', s: '$\\kLy$', p: [h[0] + g, 0, -h[2] - g], color: C('length'), cls: 'bare' },
          { k: 'label', s: '$\\kLz$', p: [h[0] + g, -h[1] - g, 0], color: C('length'), cls: 'bare' },
        ]);
      }
    }
    const E = energy(n, L);
    const term = (q, l) => (same(l, 1) ? `${q * q}` : `\\dfrac{${q * q}}{${fmt(l, 2)}^2}`);
    const deg = ALL.filter((s) => same(energy(s, L), E));
    const list = deg.length > 1 ? `:\\ ${deg.slice(0, 6).map(trio).join(',\\ ')}${deg.length > 6 ? ',\\ \\ldots' : ''}` : '';
    tex(d.readout, `\\kEnnn = \\dfrac{h^2}{8\\km}\\left(\\dfrac{n_x^2}{\\kLx^2} + \\dfrac{n_y^2}{\\kLy^2} + \\dfrac{n_z^2}{\\kLz^2}\\right) \\\\ E_{${n.join(',')}} = \\dfrac{h^2}{8\\km\\kL^2}\\left(${term(n[0], L[0])} + ${term(n[1], L[1])} + ${term(n[2], L[2])}\\right) = ${num(E)}\\,\\dfrac{h^2}{8\\km\\kL^2} \\\\ \\small \\text{degree of degeneracy } ${deg.length}${list}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- Sim: the levels split as the box stops being a cube ----------
   Still: the two ratios are the idea, and nothing in it has a time. Every state below 21.5 h^2/8mL^2 (the cube's levels to 21, Table 3.9.1) is a
   short rung at the height of its energy (y: 0 to 22 in units of h^2/8mL^2, fixed; at every aspect about
   30 states fall below the cut, since the volume is kept). A state keeps its own place across the
   ladder, its slot within its level in the cube, so stretching the box moves rungs only up and down and a
   degenerate level visibly comes apart. Where states share an energy exactly (the cube, or an accidental
   meeting such as Ly = 2Lx with Lz = Lx, Example 3.9.1) they slide together side by side and the degree
   of degeneracy is written beside them; a tween carries that slide. Hover names give each rung's state. */
(function () {
  const d = F.sim(root, 'sim-split', 600);
  const EMAX = 21.5, SLOT = 62, RUNG = 46;
  const RY = ctl(d.controls, { label: '\\kLy/\\kLx', cls: '', key: 'ry', min: 0.5, max: 2, step: 0.01, value: 1, unit: '', dec: 2, aria: 'the ratio of L_y to L_x',
    specials: [{ at: 1, label: 'a cube' }, { at: 2, label: 'L_y = 2 L_x' }] });
  const RZ = ctl(d.controls, { label: '\\kLz/\\kLx', cls: '', key: 'rz', min: 0.5, max: 2, step: 0.01, value: 1, unit: '', dec: 2, aria: 'the ratio of L_z to L_x', specials: [{ at: 1, label: 'a cube' }] });
  let hits = []; F.hover(d.stage, () => hits);
  /* each state's slot in the cube: its place among the permutations of its level, centred */
  const cubeSlot = new Map(), byLevel = new Map();
  ALL.forEach((s) => { const e = s[0] * s[0] + s[1] * s[1] + s[2] * s[2]; if (!byLevel.has(e)) byLevel.set(e, []); byLevel.get(e).push(s); });
  byLevel.forEach((ss) => { ss.sort((p, q) => q[0] - p[0] || q[1] - p[1] || q[2] - p[2]); ss.forEach((s, i) => cubeSlot.set(trio(s), i - (ss.length - 1) / 2)); });
  const tw = F.tween(d, 1); let shown = new Map(), from = new Map(), sig = '';
  function draw() {
    const { ctx, W } = begin(d.c);
    hits = [];
    const L = sides(RY.v, RZ.v);
    const states = ALL.map((s) => ({ s, id: trio(s), e: energy(s, L) })).filter((q) => q.e <= EMAX).sort((p, q) => p.e - q.e);
    /* exact groups at this shape */
    const groups = [];
    states.forEach((q) => { const g = groups[groups.length - 1]; if (g && same(q.e, g[0].e)) g.push(q); else groups.push([q]); });
    const target = new Map();
    groups.forEach((g) => {
      if (g.length === 1) { target.set(g[0].id, cubeSlot.get(g[0].id)); return; }
      g.sort((p, q) => cubeSlot.get(p.id) - cubeSlot.get(q.id)).forEach((q, i) => target.set(q.id, i - (g.length - 1) / 2));
    });
    const now = groups.filter((g) => g.length > 1).map((g) => g.map((q) => q.id).join('')).join('|');
    if (now !== sig) {
      sig = now; from = new Map(shown); tw.set(0); tw.to(1, 600);
    }
    const k = tw.v, cx = W / 2;
    const box = { l: 190, r: W - 170, t: 80, b: 540 };
    const ax = axes(ctx, box, [0, 1], [0, 22], { nx: 0, ny: 11, fy: (v) => fmt(v, 0), xl: '', yl: 'E (h²/8mL²)', yc: C('energy') });
    const ce = C('energy');
    shown = new Map();
    states.forEach((q) => {
      const t = target.get(q.id), f = from.has(q.id) ? from.get(q.id) : t, x = f + (t - f) * k;
      shown.set(q.id, x);
      const px = cx + x * SLOT, py = ax.Y(q.e);
      line(ctx, px - RUNG / 2, py, px + RUNG / 2, py, ce, 5);
      hits.push({ x: px, y: py, r: 16, name: `${q.id}: E = ${fmt(q.e, 2)} h²/8mL²` });
    });
    /* the degree beside each shared level; a label that would touch the one below steps right */
    const placed = [];
    groups.filter((g) => g.length > 1).forEach((g) => {
      const xs = g.map((q) => shown.get(q.id)), y = ax.Y(g[0].e);
      let right = cx + Math.max(...xs) * SLOT + RUNG / 2 + 14;
      while (placed.some(([x, yy]) => Math.abs(x - right) < 20 && Math.abs(yy - y) < 18)) right += 22;
      placed.push([right, y]);
      text(ctx, String(g.length), right, y, PAL.ink, { size: 17, weight: 600, base: 'middle', align: 'left' });
    });
    const M = groups.length;
    topline(ctx, `The ${states.length} states below $21.5\\,h^2/8\\km\\kL^2$ sit on ${M} level${M === 1 ? '' : 's'}.`);
    const e3 = [[2, 1, 1], [1, 2, 1], [1, 1, 2]].map((s) => num(energy(s, L)));
    tex(d.readout, `\\kEnnn = \\dfrac{h^2}{8\\km}\\left(\\dfrac{n_x^2}{\\kLx^2} + \\dfrac{n_y^2}{\\kLy^2} + \\dfrac{n_z^2}{\\kLz^2}\\right) \\\\ \\left(E_{2,1,1},\\ E_{1,2,1},\\ E_{1,1,2}\\right) = \\left(${e3.join(',\\ ')}\\right)\\dfrac{h^2}{8\\km\\kL^2}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
