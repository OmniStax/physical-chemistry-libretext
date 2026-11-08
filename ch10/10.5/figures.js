/* Figures for section 10.5 The pi-Electron Approximation of Conjugation (Hückel Theory). Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['10.5'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, text, arrow, topline, axes, plot, fmt } = F;

/* the second tone of the wavefunction hue, for the negative sign (9.7's convention): the hue mixed
   toward whichever of ink and panel lies farther from it in lightness */
const lightOf = (c) => { const m = /^#([0-9a-f]{6})$/i.exec(c) ? [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16)) : (c.match(/[\d.]+/g) || [0, 0, 0]).slice(0, 3).map(Number); return (0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2]) / 255; };
const otherSign = (cw) => { const l = lightOf(cw), far = Math.abs(lightOf(PAL.ink) - l) > Math.abs(lightOf(PAL.panel) - l) ? PAL.ink : PAL.panel; return F.mixColor(cw, far, 0.55); };
const rng = (s) => () => { s |= 0; s = (s + 0x6d2b79f5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };

/* =====================================================================
   FIGURE 10.5.1: ethylene's sigma and pi frameworks, as clouds of points.
   Mathematical 3D (config): the point is where the two frameworks lie, the
   five sigma bonds in the molecular plane and the pi bond above and below
   it, which a flat drawing can only suggest. Still: nothing has a time.
   Choice: sigma framework, pi bond, or both (the opening, so the point is
   seen at once). Geometry in angstrom: C=C 1.33, C-H 1.08, H-C-H 117 deg,
   the molecule in the xy plane, z up (the book's convention, out of the
   plane). The sigma bonds are schematic: 1600 points of a Gaussian along
   each bond, drawn in muted ink since their sign is one throughout. The pi
   bond is phi1 + phi2 with phi = z e^(-zeta r), zeta = 2 per angstrom
   (one exponent, schematic), 4000 points drawn from |psi|^2 as in 9.7 and
   split by sign. The molecular plane is a faint sheet, the pi orbital's
   nodal plane. Orbit free in azimuth, elevation +-85 deg; no buttons.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-ethylene-frameworks');
  const BX = 3, BY = 3.2, BZ = 2.2;
  const S3 = F.space3d(d, { box: [[-BX, BX], [-BY, BY], [-BZ, BZ]], h: 520, turn: -0.5, tilt: 0.42, fit: 2.4, pitch: [-85 * Math.PI / 180, 85 * Math.PI / 180], spin: 'off', zoom: false });
  const K = F.choice(d.controls, { label: '\\text{framework}', key: 'framework', options: [{ value: 'both', label: 'both' }, { value: 's', label: '$\\sigma$ bonds' }, { value: 'p', label: '$\\pi$ bond' }], value: 'both', aria: 'which bonding framework of ethylene is drawn' });
  const leg = F.makeCanvas(d.stage, 56);
  const CC = 1.33, CH = 1.08, half = 117 / 2 * Math.PI / 180;
  const C1 = [0, -CC / 2, 0], C2 = [0, CC / 2, 0];
  const Hs = [
    [-CH * Math.sin(half), -CC / 2 - CH * Math.cos(half), 0], [CH * Math.sin(half), -CC / 2 - CH * Math.cos(half), 0],
    [-CH * Math.sin(half), CC / 2 + CH * Math.cos(half), 0], [CH * Math.sin(half), CC / 2 + CH * Math.cos(half), 0],
  ];
  const BONDS = [[C1, C2], [C1, Hs[0]], [C1, Hs[1]], [C2, Hs[2]], [C2, Hs[3]]];
  /* the sigma framework: a Gaussian about each bond's midpoint, long along the bond, flattened across it */
  const sigma = (() => {
    const rnd = rng(1051), pts = [];
    const gauss = () => Math.sqrt(-2 * Math.log(rnd() + 1e-12)) * Math.cos(2 * Math.PI * rnd());
    BONDS.forEach(([a, b]) => {
      const u = [b[0] - a[0], b[1] - a[1], b[2] - a[2]], L = Math.hypot(...u), e = u.map((v) => v / L);
      const n = [-e[1], e[0], 0];
      for (let i = 0; i < 320; i++) {
        const s = 0.5 + 0.24 * gauss(), q = 0.2 * gauss(), z = 0.17 * gauss();
        pts.push([a[0] + u[0] * s + n[0] * q, a[1] + u[1] * s + n[1] * q, z]);
      }
    });
    return pts;
  })();
  /* the pi bond: phi1 + phi2 sampled as 9.7 samples its clouds */
  const pi = (() => {
    const rnd = rng(1052), Z = 2, plus = [], minus = [];
    const phi = (c, p) => { const v = [p[0] - c[0], p[1] - c[1], p[2] - c[2]], r = Math.hypot(...v); return v[2] * Math.exp(-Z * r); };
    let guard = 0;
    while (plus.length + minus.length < 4000 && guard++ < 400000) {
      const c = rnd() < 0.5 ? C1 : C2;
      const r = -Math.log(rnd() * rnd() * rnd() * rnd() * rnd() + 1e-300) / (2 * Z);
      const z = 2 * rnd() - 1, ph = 2 * Math.PI * rnd(), s = Math.sqrt(1 - z * z), u = [s * Math.cos(ph), s * Math.sin(ph), z];
      if (rnd() > u[2] * u[2]) continue;
      const p = [c[0] + r * u[0], c[1] + r * u[1], c[2] + r * u[2]];
      if (Math.abs(p[0]) > BX || Math.abs(p[1]) > BY || Math.abs(p[2]) > BZ) continue;
      const a = phi(C1, p), b = phi(C2, p), psi = a + b;
      if (rnd() * 2 * (a * a + b * b) > psi * psi) continue;
      (psi >= 0 ? plus : minus).push(p);
    }
    return { plus, minus };
  })();
  let last = '';
  function draw() {
    const k = K.value, cw = C('wavefunction'), up = cw, down = otherSign(cw), cC = F.el('C'), cH = F.el('H');
    const key = [k, up, down, cC, cH, PAL.ink].join('|');
    if (key !== last) {
      last = key;
      S3.set('plane', [{ k: 'faces', faces: [[[-2.2, -2.6, 0], [2.2, -2.6, 0], [2.2, 2.6, 0], [-2.2, 2.6, 0]]], color: PAL.ink, alpha: 0.08, name: 'the molecular plane, where the π orbital changes sign' }]);
      S3.set('sigma', k === 'p' ? [] : [{ k: 'points', pts: sigma, color: 'muted', r: 3, name: 'the five σ bonds, four C–H and one C–C, in the molecular plane' }]);
      S3.set('pi', k === 's' ? [] : [
        { k: 'points', pts: pi.plus, color: up, r: 3, name: 'the π bond above the plane, where ψ > 0' },
        { k: 'points', pts: pi.minus, color: down, r: 3, name: 'the π bond below the plane, where ψ < 0' },
      ]);
      S3.set('nuclei', [
        { k: 'points', pts: [C1, C2], color: cC, r: 9, name: 'a carbon nucleus' },
        { k: 'points', pts: Hs, color: cH, r: 6, name: 'a hydrogen nucleus' },
        { k: 'label', s: '$z$', p: [0, 0, BZ * 0.95], color: PAL.muted, cls: 'bare' },
        { k: 'line', pts: [[0, 0, 0], [0, 0, BZ * 0.85]], color: 'guide', w: 2, dash: [4, 8], name: 'the z axis, square to the molecular plane' },
      ]);
    }
    S3.headline(k === 'p' ? 'The π bond lies above and below the molecular plane, with opposite signs on the two sides.'
      : k === 's' ? 'The five σ bonds lie in the molecular plane.'
        : 'The σ bonds lie in the molecular plane; the π bond lies above and below it.');
    const { ctx, W } = begin(leg);
    F.legend(ctx, { l: 0, t: 0, r: W, b: 56 }, [
      ...(k !== 'p' ? [{ s: 'σ bonds', color: PAL.muted, kind: 'dot' }] : []),
      ...(k !== 's' ? [{ s: 'π, $\\psi > 0$', color: up, kind: 'dot' }, { s: 'π, $\\psi < 0$', color: down, kind: 'dot' }] : []),
      { s: 'C', color: cC, kind: 'dot' }, { s: 'H', color: cH, kind: 'dot' },
    ], { corner: 'top', panel: false, row: true });
    const sig = '\\text{five } \\sigma \\text{ bonds: 10 of the 12 valence electrons}', pib = '\\text{one } \\pi \\text{ bond: the other 2}';
    tex(d.readout, k === 's' ? sig : k === 'p' ? pib : `${sig} \\\\ ${pib}`, false, { values: false });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 10.5.3: ethylene's sigma and pi levels, a faithful copy (archetype 7)
   in the house level style. Still, no controls. The two frameworks wear two
   instance colours (F.cat), a legend naming them; the book draws them red
   and blue. Heights schematic, as the book draws them.
===================================================================== */
(function () {
  const d = F.sim(root, 'fig-10-5-3', 600);
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const cs = F.cat(0), cp = F.cat(1), ee = F.el('e-');
    const bar = (x, y, w, col, dash) => line(ctx, x - w / 2, y, x + w / 2, y, col, 5, dash);
    const tie = (x1, y1, x2, y2, col) => line(ctx, x1, y1, x2, y2, alpha(col, 0.6), 2.5, [8, 8]);
    const spin = (x, y, up, col) => (up ? arrow(ctx, x, y + 18, x, y - 26, col, 3) : arrow(ctx, x, y - 26, x, y + 18, col, 3));
    const xL = 300, xM = 700, xR = 1100;
    const yStar = 90, yPiS = 175, yP = 240, yPi = 305, ySp = 430, ySig = 545;
    /* the energy axis */
    arrow(ctx, 90, 570, 90, 70, C('energy'), 4);
    text(ctx, 'E', 64, 320, C('energy'), { size: 30, weight: 600, align: 'center', base: 'middle' });
    /* sigma: three sp2 on each carbon, three filled sigma below, three empty sigma* above */
    [-70, 0, 70].forEach((o) => { bar(xL + o, ySp, 52, cs); spin(xL + o, ySp, true, ee); bar(xR + o, ySp, 52, cs); spin(xR + o, ySp, false, ee); });
    [-60, 0, 60].forEach((o) => { bar(xM + o, ySig, 48, cs); spin(xM + o - 7, ySig, true, ee); spin(xM + o + 7, ySig, false, ee); });
    bar(xM, yStar, 170, cs, [26, 12]);
    tie(xL + 100, ySp, xM - 90, ySig, cs); tie(xR - 100, ySp, xM + 90, ySig, cs);
    tie(xL + 100, ySp, xM - 90, yStar, PAL.ink); tie(xR - 100, ySp, xM + 90, yStar, PAL.ink);
    /* pi: one p on each carbon, pi filled, pi* empty */
    bar(xL + 120, yP, 90, cp); spin(xL + 120, yP, true, ee);
    bar(xR - 120, yP, 90, cp); spin(xR - 120, yP, false, ee);
    bar(xM, yPi, 90, cp); spin(xM - 7, yPi, true, ee); spin(xM + 7, yPi, false, ee);
    bar(xM, yPiS, 90, cp);
    tie(xL + 165, yP, xM - 45, yPi, cp); tie(xL + 165, yP, xM - 45, yPiS, cp);
    tie(xR - 165, yP, xM + 45, yPi, cp); tie(xR - 165, yP, xM + 45, yPiS, cp);
    /* names */
    text(ctx, 'σ*', xM, yStar - 30, cs, { size: 28, align: 'center' });
    text(ctx, 'π*', xM, yPiS + 34, cp, { size: 28, align: 'center' });
    text(ctx, 'π', xM, yPi + 46, cp, { size: 28, align: 'center' });
    text(ctx, 'σ', xM, ySig + 46, cs, { size: 28, align: 'center' });
    text(ctx, 'p orbital', xR - 60, yP, PAL.ink, { size: 22, base: 'middle' });
    text(ctx, 'sp² hybrids', xR + 140, ySp, PAL.ink, { size: 22, base: 'middle' });
    text(ctx, 'carbon 1', xL, 590, PAL.muted, { size: 22, align: 'center' });
    text(ctx, 'carbon 2', xR, 590, PAL.muted, { size: 22, align: 'center' });
    text(ctx, 'ethylene', xM, 590, PAL.muted, { size: 22, align: 'center' });
    F.legend(ctx, { l: 900, t: 60, r: 1380, b: 180 }, [{ s: 'σ framework', color: cs, w: 5 }, { s: 'π framework', color: cp, w: 5 }], { corner: 'tr' });
    hits.length = 0;
    hits.push({ x: xM, y: ySig - 8, r: 70, name: 'σ: the three filled σ bonding levels of each carbon’s sp² hybrids (C–C and C–H bonds)' });
    hits.push({ x: xM, y: yStar, r: 70, name: 'σ*: the empty σ antibonding levels' });
    hits.push({ x: xM, y: yPi - 8, r: 40, name: 'π: the bonding π orbital, holding two electrons' });
    hits.push({ x: xM, y: yPiS, r: 40, name: 'π*: the empty antibonding π orbital' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 10.5.4 + 10.5.5: two 2p_z orbitals mixed in every proportion.
   Still, 2D: the energy answers a slider, nothing has a time. The slider is
   the mixing angle theta of psi = cos(theta) phi1 + sin(theta) phi2, a
   normalized mix since the Hückel overlap S12 is zero; its energy is
   <E> = alpha + 2 c1 c2 beta = alpha + beta sin(2 theta). Specials at 45 deg
   (in phase, pi1, alpha + beta, the opening: the book's filled orbital) and
   135 deg (out of phase, pi2, alpha - beta). Scene above: the two carbons
   with their p lobes, sized by |c| and toned by sign, a node between them
   when the signs differ. Graph below: E - alpha in kJ/mol against theta,
   0 to 180 deg, y fixed -90 to 90 kJ/mol with beta = -75 kJ/mol (the
   book's typical value, 10.6).
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-two-p', 640);
  const BETA = -75;
  const T = ctl(d.controls, { label: '\\theta', cls: '', min: 0, max: 180, step: 1, value: 45, unit: '°', dec: 0,
    specials: [{ at: 45, label: 'π₁' }, { at: 135, label: 'π₂' }] });
  const hits = [];
  F.hover(d.stage, () => hits);
  /* a p lobe from (x, y) along dir (-1 up, +1 down), length L */
  function lobe(ctx, x, y, dir, L, fill) {
    if (L < 2) return;
    const w = L * 0.42;
    ctx.save(); ctx.beginPath(); ctx.moveTo(x, y);
    ctx.bezierCurveTo(x - w * 1.3, y + dir * L * 0.35, x - w, y + dir * L, x, y + dir * L);
    ctx.bezierCurveTo(x + w, y + dir * L, x + w * 1.3, y + dir * L * 0.35, x, y);
    ctx.fillStyle = fill; ctx.globalAlpha = 0.85; ctx.fill(); ctx.globalAlpha = 1; ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const th = T.v * Math.PI / 180, c1 = Math.cos(th), c2 = Math.sin(th), s2 = Math.sin(2 * th), e = BETA * s2;
    const cw = C('wavefunction'), neg = otherSign(cw), cE = C('energy');
    const sgn = (v) => (v >= 0 ? cw : neg);
    const near = (a) => Math.abs(T.v - a) < 0.5;
    topline(ctx, near(45) ? 'In phase, $c_1 = c_2$: the lowest energy of any mix, $\\kalphaH + \\kbetaH$.'
      : near(135) ? 'Out of phase, $c_1 = -c_2$: the highest energy of any mix, $\\kalphaH - \\kbetaH$.'
        : `At $\\theta = ${fmt(T.v, 0)}°$ the mix sits ${Math.abs(e) < 0.5 ? 'at' : e < 0 ? `${fmt(-e, 0)} kJ/mol below` : `${fmt(e, 0)} kJ/mol above`} $\\kalphaH$.`);
    /* the scene: two carbons 300 apart, lobes up to 110 long */
    const xa = 560, xb = 840, yc = 230, L = 105;
    line(ctx, xa, yc, xb, yc, alpha(PAL.ink, 0.5), 4);
    [[xa, c1], [xb, c2]].forEach(([x, c]) => {
      const len = L * Math.sqrt(Math.abs(c));
      lobe(ctx, x, yc, -1, len, sgn(c)); lobe(ctx, x, yc, 1, len, sgn(-c));
      ctx.save(); ctx.fillStyle = F.el('C'); ctx.beginPath(); ctx.arc(x, yc, 13, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
    });
    if (c1 * c2 < -1e-3) line(ctx, (xa + xb) / 2, yc - 120, (xa + xb) / 2, yc + 120, alpha(PAL.ink, 0.55), 3, [10, 10]);
    text(ctx, 'C₁', xa - 60, yc + 6, PAL.ink, { size: 24, base: 'middle', align: 'right' });
    text(ctx, 'C₂', xb + 60, yc + 6, PAL.ink, { size: 24, base: 'middle' });
    if (c1 * c2 < -1e-3) text(ctx, 'node', (xa + xb) / 2, yc - 136, PAL.muted, { size: 20, align: 'center' });
    /* the graph */
    const ax = axes(ctx, { l: 160, r: 1300, t: 380, b: 590 }, [0, 180], [-90, 90], { nx: 4, ny: 2, xl: 'mixing angle θ (°)', yl: 'E − α (kJ/mol)', yc: cE });
    plot(ctx, ax, () => BETA, alpha(cE, 0.6), { w: 3, dash: [10, 10] });
    plot(ctx, ax, () => -BETA, alpha(cE, 0.6), { w: 3, dash: [10, 10] });
    text(ctx, 'α + β, π₁', ax.X(180) - 8, ax.Y(BETA) + 22, cE, { size: 20, align: 'right' });
    text(ctx, 'α − β, π₂', ax.X(180) - 8, ax.Y(-BETA) - 12, cE, { size: 20, align: 'right' });
    plot(ctx, ax, (x) => BETA * Math.sin(2 * x * Math.PI / 180), cE, { w: 5 });
    F.dot(ctx, ax.X(T.v), ax.Y(e), cE, true, 10);
    hits.length = 0;
    hits.push({ x: xa, y: yc, r: 60, name: `carbon 1’s 2p_z orbital, coefficient ${fmt(c1, 2)}` });
    hits.push({ x: xb, y: yc, r: 60, name: `carbon 2’s 2p_z orbital, coefficient ${fmt(c2, 2)}` });
    hits.push({ x: ax.X(T.v), y: ax.Y(e), r: 16, name: `the energy of this mix, α ${e <= 0 ? '−' : '+'} ${fmt(Math.abs(e), 0)} kJ/mol` });
    const sg = c2 < 0 ? '-' : '+', p = 2 * c1 * c2;
    tex(d.readout, `\\psi = ${fmt(c1, 2)}\\,\\kphione ${sg} ${fmt(Math.abs(c2), 2)}\\,\\kphitwo \\\\ \\langle \\kE \\rangle = \\kalphaH + 2c_1c_2\\,\\kbetaH = \\kalphaH ${p < 0 ? '-' : '+'} ${fmt(Math.abs(p), 2)}\\,\\kbetaH`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
