/* Figures for section 10.1 Hybrid Orbitals Account for Molecular Shape. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['10.1'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, text, dot, fmt } = F;

/* the other sign of psi: the wavefunction hue a clear step toward whichever of ink and ground lies farther
   from it in lightness, so the two tones part on either theme (6.6's rule) */
const lightOf = (c) => { const m = /^#([0-9a-f]{6})$/i.exec(c) ? [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16)) : (c.match(/[\d.]+/g) || [0, 0, 0]).slice(0, 3).map(Number); return (0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2]) / 255; };
const otherSign = (cw) => { const l = lightOf(cw), far = Math.abs(lightOf(PAL.ink) - l) > Math.abs(lightOf(PAL.panel) - l) ? PAL.ink : PAL.panel; return F.mixColor(cw, far, 0.55); };
/* a seeded generator, so a cloud is the same on every load */
const rng = (s) => () => { s |= 0; s = (s + 0x6d2b79f5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
const pct = (v) => `${fmt(100 * v, 0)}%`;

/* =====================================================================
   FIGURE 10.1.3 + 10.1.7 + 10.1.8: the sp, sp2 and sp3 hybrids.
   Mathematical 3D (root 28.3): a hybrid's lobes and the angles between the
   members of a set are an arrangement in space. Still: no clock.
   The hybrid chi = sqrt(s) psi_2s + sqrt(1 - s) psi_2p(n), with hydrogen's
   2s and 2p (Z = 1, a0 = 1; both share the factor e^(-r/2) / 4 sqrt(2 pi)),
   so chi ~ e^(-r/2) [sqrt(s)(r - 2) + sqrt(1 - s)(x . n)], the 2s taken with
   the sign that is positive outside its node, as the book's pictures draw it, so that
   s + p points along +n. Its density is
   sampled by rejection from one fixed set of candidates (seeded), so the
   cloud morphs as s moves rather than jumping. The bright hybrid is the
   set's chi_1 at the slider's s; the set's other hybrids stand faint at the
   set's own s along their directions, the book's (10.1.18), (10.1.24),
   (10.1.25): sp along +z and -z; sp2 at 180 deg and +-60 deg in the xy plane
   (chi_1 = (psi_2s - sqrt2 psi_2px)/sqrt3 points along -x); sp3 at the
   corners (1,1,1), (-1,-1,1), (1,-1,-1), (-1,1,-1). Box +-16 a0 for every set.
   Orbit free, no buttons (config); flat view without WebGL.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-hybrids');
  const B = 16, NC = 160000, MAXP = 4200, FAINT = 1400;
  const S = F.space3d(d, { box: [[-B, B], [-B, B], [-B, B]], h: 600, turn: -0.6, tilt: 0.45, fit: 2.6, pitch: [-85 * Math.PI / 180, 85 * Math.PI / 180], spin: 'off', zoom: false });
  const r3 = Math.sqrt(3);
  const SETS = {
    sp: { s: 1 / 2, name: 'sp', angle: 180, dirs: [[0, 0, 1], [0, 0, -1]], p: '2p_z', sign: 1 },
    sp2: { s: 1 / 3, name: 'sp^2', angle: 120, dirs: [[-1, 0, 0], [0.5, r3 / 2, 0], [0.5, -r3 / 2, 0]], p: '2p_x', sign: -1 },
    sp3: { s: 1 / 4, name: 'sp^3', angle: 109.5, dirs: [[1, 1, 1], [-1, -1, 1], [1, -1, -1], [-1, 1, -1]].map((v) => v.map((c) => c / r3)), p: null, sign: 1 },
  };
  const K = F.choice(d.controls, { label: '\\text{set}', options: [{ value: 'sp', label: '$sp$' }, { value: 'sp2', label: '$sp^2$' }, { value: 'sp3', label: '$sp^3$' }], value: 'sp', aria: 'the set of hybrid orbitals', key: 'set',
    onInput: (v) => Sc.set(SETS[v].s) });
  const Sc = ctl(d.controls, { label: '\\text{s character}', cls: '', key: 's', min: 0, max: 0.5, step: 0.01, value: 0.5, unit: '', fmt: pct,
    specials: [{ at: 1 / 4, label: 'sp³, 25%' }, { at: 1 / 3, label: 'sp², 33%' }, { at: 1 / 2, label: 'sp, 50%' }] });
  /* candidates in the hybrid's own frame (n = +z), uniform in the box, each with its own threshold */
  const rnd = rng(1013), cx = new Float32Array(NC), cy = new Float32Array(NC), cz = new Float32Array(NC), cu = new Float32Array(NC);
  for (let i = 0; i < NC; i++) { cx[i] = (2 * rnd() - 1) * B; cy[i] = (2 * rnd() - 1) * B; cz[i] = (2 * rnd() - 1) * B; cu[i] = rnd(); }
  const amp = (s, i) => { const r = Math.hypot(cx[i], cy[i], cz[i]); return Math.exp(-r / 2) * (Math.sqrt(s) * (r - 2) + Math.sqrt(1 - s) * cz[i]); };
  /* the accepted points of the hybrid at s along +z: [position, sign] */
  const memo = new Map();
  function cloud(s, cap) {
    const key = s.toFixed(3) + '|' + cap; if (memo.has(key)) return memo.get(key);
    const a = new Float32Array(NC); let mx = 0;
    for (let i = 0; i < NC; i++) { const v = amp(s, i); a[i] = v; if (v * v > mx) mx = v * v; }
    const out = [];
    for (let i = 0; i < NC && out.length < cap; i++) if (cu[i] * mx < a[i] * a[i]) out.push([cx[i], cy[i], cz[i], a[i] >= 0 ? 1 : -1]);
    if (memo.size > 60) memo.clear();
    memo.set(key, out); return out;
  }
  /* the rotation taking +z to n */
  const toward = (n) => {
    const [x, y, z] = n; if (z > 0.9999) return (p) => [p[0], p[1], p[2]]; if (z < -0.9999) return (p) => [p[0], -p[1], -p[2]];
    const k = [-y, x, 0], kn = Math.hypot(k[0], k[1]), u = [k[0] / kn, k[1] / kn, 0], c = z, sn = Math.sqrt(1 - z * z);
    return (p) => { const d = u[0] * p[0] + u[1] * p[1], cr = [u[1] * p[2], -u[0] * p[2], u[0] * p[1] - u[1] * p[0]];
      return [0, 1, 2].map((j) => p[j] * c + cr[j] * sn + [u[0], u[1], 0][j] * d * (1 - c)); };
  };
  const split = (pts, n) => { const R = toward(n), plus = [], minus = []; for (const p of pts) (p[3] > 0 ? plus : minus).push(R(p)); return { plus, minus }; };
  const leg = F.makeCanvas(d.stage, 56);
  let last = '';
  function draw() {
    const set = SETS[K.value], s = Sc.v;
    const cw = C('wavefunction'), up = cw, down = otherSign(cw), fu = F.mixColor(up, PAL.panel, 0.62), fd = F.mixColor(down, PAL.panel, 0.62);
    const key = [K.value, s.toFixed(3), up, down, PAL.ink, PAL.panel].join('|');
    if (key !== last) {
      last = key;
      const main = split(cloud(s, MAXP), set.dirs[0]);
      const faint = cloud(set.s, FAINT), others = set.dirs.slice(1).map((n) => split(faint, n));
      S.set('axes', F.space.axes([[-B, B], [-B, B], [-B, B]], {}));
      S.set('others', others.flatMap((o, i) => [
        { k: 'points', pts: o.plus, color: fu, r: 2.4, name: `χ${i + 2}, a partner in the ${set.name.replace('^2', '²').replace('^3', '³')} set, where it is positive` },
        { k: 'points', pts: o.minus, color: fd, r: 2.4, name: `χ${i + 2}, where it is negative` },
      ]));
      S.set('main', [
        { k: 'points', pts: main.plus, color: up, r: 3, name: `χ₁ with ${pct(s)} s character, where it is positive` },
        { k: 'points', pts: main.minus, color: down, r: 3, name: `χ₁ with ${pct(s)} s character, where it is negative` },
      ]);
      S.set('nucleus', [{ k: 'points', pts: [[0, 0, 0]], color: F.el('p+'), r: 7, name: 'the nucleus' }]);
    }
    const nm = set.name.replace('^2', '²').replace('^3', '³');
    S.headline(Math.abs(s - set.s) < 0.005 ? `The ${set.dirs.length} ${nm} hybrids are equivalent and point ${fmt(set.angle, set.angle % 1 ? 1 : 0)}° apart.` : `χ₁ has ${pct(s)} s character; its ${nm} partners have ${pct(set.s)}.`);
    const { ctx, W } = begin(leg);
    F.legend(ctx, { l: 0, t: 0, r: W, b: 56 }, [
      { s: '$\\kchi_1 > 0$', color: up, kind: 'dot' },
      { s: '$\\kchi_1 < 0$', color: down, kind: 'dot' },
      { s: 'its partners', color: fu, kind: 'dot' },
    ], { corner: 'top', panel: false, row: true });
    const a = Math.sqrt(s), b = Math.sqrt(1 - s);
    let p;
    if (K.value === 'sp3') {
      const c = b / r3;
      p = `+ ${fmt(c, 3)}\\,\\psi_{2p_x} + ${fmt(c, 3)}\\,\\psi_{2p_y} + ${fmt(c, 3)}\\,\\psi_{2p_z}`;
    } else p = `${set.sign < 0 ? '-' : '+'} ${fmt(b, 3)}\\,\\psi_{${set.p}}`;
    tex(d.readout, `\\kchi_1 = ${fmt(a, 3)}\\,\\psi_{2s} ${p} \\\\ \\small \\text{s character} = (${fmt(a, 3)})^2 = ${pct(s)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 10.1.4 + 10.1.5 + 10.1.6: a p orbital turned in the plane of BH3.
   2D, still: the variation is the angle. The frame is Figure 10.1.4's, with
   B at the centre and the H atoms where the book draws them (0, 120 and 240
   deg; the text's quadrants are footnoted). A slider turns the chosen
   starting orbital (2p_y or -2p_y) by delta, -90 to 90 deg, circles at -30
   and +30 (the book's two turns). Turning sin(phi) by delta gives
   sin(phi - delta) = cos(delta) sin(phi) - sin(delta) cos(phi), so the
   turned orbital is cos(delta) psi_2py - sin(delta) psi_2px (times -1 for
   -2p_y): (10.1.20) at delta = -30, (10.1.21) at +30 for -2p_y. On the
   right the two parts, psi_2py and psi_2px, are drawn at their weights, a
   negative weight swapping the sign colours. Lobes are the polar curve
   r = R |cos(phi - phi+)|, the + lobe toward phi+ = 90 deg + delta (or the
   opposite for -2p_y).
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-rotate', 600);
  const K = F.choice(d.controls, { label: '\\text{start}', options: [{ value: 'py', label: '$2p_y$' }, { value: 'my', label: '$-2p_y$' }], value: 'py', aria: 'the orbital turned', key: 'start' });
  const T = ctl(d.controls, { label: '\\text{turn}', cls: 'angle', key: 'turn', min: -90, max: 90, step: 1, value: -30, unit: '°', dec: 0,
    specials: [{ at: -30, label: '−30°, Figure 10.1.5' }, { at: 30, label: '+30°, Figure 10.1.6' }] });
  const hits = [];
  F.hover(d.stage, () => hits);
  /* a p orbital as two filled lobes about (x, y): + lobe toward angle th (radians, y up), size R; w scales it */
  function porb(ctx, x, y, th, R, up, down, a = 0.85) {
    for (const [sg, col] of [[1, up], [-1, down]]) {
      ctx.save(); ctx.beginPath();
      for (let k = 0; k <= 90; k++) {
        const ph = th + (sg > 0 ? 0 : Math.PI) + (k / 90 - 0.5) * Math.PI, rr = R * Math.cos(ph - th - (sg > 0 ? 0 : Math.PI));
        const px = x + rr * Math.cos(ph), py = y - rr * Math.sin(ph); if (k === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.closePath(); ctx.fillStyle = alpha(col, a); ctx.fill(); ctx.strokeStyle = col; ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
    }
  }
  function atom(ctx, x, y, sym, r) {
    ctx.save(); ctx.beginPath(); ctx.arc(x, y, r, 0, 2 * Math.PI); ctx.fillStyle = F.el(sym); ctx.fill(); ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
    text(ctx, sym, x, y + 1, PAL.ink, { size: 22, weight: 600, align: 'center', base: 'middle' });
  }
  function draw() {
    const { ctx, W } = begin(d.c);
    const del = T.v, rad = del * Math.PI / 180, sg = K.value === 'py' ? 1 : -1;
    const cy = sg * Math.cos(rad), cx = -sg * Math.sin(rad);
    const cw = C('wavefunction'), up = cw, down = otherSign(cw);
    /* the plane */
    const X0 = 380, Y0 = 320, L = 250, bond = 175;
    F.arrow(ctx, X0 - L, Y0, X0 + L, Y0, alpha(PAL.ink, 0.5), 3); F.arrow(ctx, X0, Y0 + L, X0, Y0 - L, alpha(PAL.ink, 0.5), 3);
    text(ctx, 'x', X0 + L + 16, Y0 + 6, PAL.ink, { size: 24, weight: 600 }); text(ctx, 'y', X0 - 6, Y0 - L - 18, PAL.ink, { size: 24, weight: 600, align: 'center' });
    hits.length = 0;
    [0, 120, 240].forEach((g, i) => {
      const hx = X0 + bond * Math.cos(g * Math.PI / 180), hy = Y0 - bond * Math.sin(g * Math.PI / 180);
      line(ctx, X0, Y0, hx, hy, alpha(PAL.ink, 0.45), 4);
      hits.push({ x: hx, y: hy, r: 22, name: `a hydrogen atom at ${g}°, where Figure 10.1.4 draws it` });
    });
    const plus = Math.PI / 2 + rad + (sg > 0 ? 0 : Math.PI);
    porb(ctx, X0, Y0, plus, 150, up, down, 0.55);
    [0, 120, 240].forEach((g) => atom(ctx, X0 + bond * Math.cos(g * Math.PI / 180), Y0 - bond * Math.sin(g * Math.PI / 180), 'H', 20));
    atom(ctx, X0, Y0, 'B', 26);
    hits.push({ x: X0, y: Y0, r: 26, name: 'the boron atom' });
    const tipx = X0 + 150 * Math.cos(plus), tipy = Y0 - 150 * Math.sin(plus);
    hits.push({ x: (X0 + tipx) / 2, y: (Y0 + tipy) / 2, r: 40, name: `the turned orbital's positive lobe, at ${fmt(((plus * 180 / Math.PI) % 360 + 360) % 360, 0)}°` });
    /* its two parts, drawn at their weights */
    const parts = [{ c: cy, th: Math.PI / 2, n: '2p_y', x: 900 }, { c: cx, th: 0, n: '2p_x', x: 1190 }];
    text(ctx, '=', 760, Y0 + 8, PAL.ink, { size: 40, align: 'center', base: 'middle' });
    text(ctx, '+', 1045, Y0 + 8, PAL.ink, { size: 40, align: 'center', base: 'middle' });
    parts.forEach((q) => {
      const R = 110 * Math.abs(q.c);
      line(ctx, q.x - 125, Y0, q.x + 125, Y0, alpha(PAL.ink, 0.2), 2); line(ctx, q.x, Y0 + 125, q.x, Y0 - 125, alpha(PAL.ink, 0.2), 2);
      if (R > 1) porb(ctx, q.x, Y0, q.th + (q.c < 0 ? Math.PI : 0), R, up, down, 0.55);
      dot(ctx, q.x, Y0, alpha(PAL.ink, 0.6), true, 5);
      text(ctx, `${fmt(q.c, 3)} ψ_{${q.n}}`, q.x, Y0 + 175, PAL.ink, { size: 24, weight: 600, align: 'center' });
      hits.push({ x: q.x, y: Y0, r: 110, name: `${q.n.replace('_', '')} with weight ${fmt(q.c, 3)}` });
    });
    F.topline(ctx, `Turned by ${fmt(del, 0)}°, the orbital is $${fmt(cy, 3)}\\,2p_y ${cx < 0 ? '-' : '+'} ${fmt(Math.abs(cx), 3)}\\,2p_x$.`);
    const lhs = sg > 0 ? '\\psi_{2p_y}^{(rot)}' : '-\\psi_{2p_y}^{(rot)}';
    const arg = `\\kphif ${del <= 0 ? '+' : '-'} ${fmt(Math.abs(del), 0)}^\\circ`;
    tex(d.readout, `${lhs} \\sim ${sg > 0 ? '' : '-'}\\sin(${arg}) \\\\ ${lhs} \\sim ${fmt(cy, 3)}\\,\\psi_{2p_y} ${cx < 0 ? '-' : '+'} ${fmt(Math.abs(cx), 3)}\\,\\psi_{2p_x}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
