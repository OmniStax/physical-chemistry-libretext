/* Figures for section 5.9 The Rigid Rotator is a Model for a Rotating Diatomic Molecule. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.9'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, text, topline, dot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* carbon monoxide, 12C16O: isotopic masses (amu), the reduced mass, and Table 5.9.1's lines (MHz) */
const H_ = 6.62607015e-34, AMU = 1.66053907e-27;
const M_C = 12.0, M_O = 15.99491, MU = M_C * M_O / (M_C + M_O);
const LINES = [115271.21, 230538.01, 345795.99, 461040.76, 576267.91, 691473.03, 806651.78, 921799.55, 1036912.14, 1151985.08];
const GAMMA = [0.0082, 0.0533, 0.1278, 0.1878, 0.1983, 0.1618, 0.1064, 0.0576, 0.0262, 0.0103];
/* B/h in Hz for a bond length r in metres */
const Bh = (r) => H_ / (8 * Math.PI ** 2 * MU * AMU * r * r);

/* =====================================================================
   FIGURE 5.9.1 + 5.9.2: the rotations of a chair and of a diatomic.
   Physical 3D (root 28.3): the lesson is an arrangement in space, three
   independent turns for the chair and two for a linear molecule. Moving:
   the object turns once about the chosen axis in 5 s, then holds. Choices
   object (chair, the book's; carbon monoxide) and axis (x, y, z). The
   molecule's bond lies along x, the book's interatomic axis, so a turn
   about x leaves it as it was. Orbit bounded from just above level to
   70 deg above, so the chair is never seen from beneath; no spin, no zoom.
   The chair is boxes in a neutral; the atoms wear the element palette.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-rotations');
  const S = F.space3d(d, { box: [[-1.1, 1.1], [-1.1, 1.1], [-1.1, 1.1]], h: 560, turn: -2.2, tilt: 0.35, fit: 2.4, pitch: [0.05, 70 * Math.PI / 180], spin: 'off', zoom: false });
  const cy = F.cycle(() => 5, 1.2);
  const OBJ = F.choice(d.controls, { label: '\\text{object}', options: [{ value: 'chair', label: 'chair' }, { value: 'co', label: 'CO' }], value: 'chair', aria: 'the object that turns', key: 'object', onInput: () => cy.reset() });
  const AX = F.choice(d.controls, { label: '\\text{axis}', options: ['x', 'y', 'z'].map((a) => ({ value: a, label: a })), value: 'z', aria: 'the axis of rotation', key: 'axis', onInput: () => cy.reset() });
  const turn = (p, ax, a) => {
    const c = Math.cos(a), s = Math.sin(a), [x, y, z] = p;
    return ax === 'x' ? [x, y * c - z * s, y * s + z * c] : ax === 'y' ? [x * c + z * s, y, -x * s + z * c] : [x * c - y * s, x * s + y * c, z];
  };
  /* a box as six quads, centre c, half sizes h */
  const box = (c, h) => {
    const v = (sx, sy, sz) => [c[0] + sx * h[0], c[1] + sy * h[1], c[2] + sz * h[2]];
    return [
      [v(-1, -1, -1), v(1, -1, -1), v(1, 1, -1), v(-1, 1, -1)], [v(-1, -1, 1), v(1, -1, 1), v(1, 1, 1), v(-1, 1, 1)],
      [v(-1, -1, -1), v(1, -1, -1), v(1, -1, 1), v(-1, -1, 1)], [v(-1, 1, -1), v(1, 1, -1), v(1, 1, 1), v(-1, 1, 1)],
      [v(-1, -1, -1), v(-1, 1, -1), v(-1, 1, 1), v(-1, -1, 1)], [v(1, -1, -1), v(1, 1, -1), v(1, 1, 1), v(1, -1, 1)],
    ];
  };
  /* the chair, about its own middle: seat at z = 0, legs to z = -0.55, back up to z = 0.75 on the -x side */
  const CHAIR = [
    ...box([0, 0, 0], [0.42, 0.42, 0.04]),
    ...[[-1, -1], [1, -1], [1, 1], [-1, 1]].flatMap(([sx, sy]) => box([sx * 0.37, sy * 0.37, -0.3], [0.04, 0.04, 0.26])),
    ...box([-0.4, 0, 0.4], [0.03, 0.42, 0.36]),
  ];
  const RC = -0.84 * M_O / (M_C + M_O), RO = 0.84 * M_C / (M_C + M_O);
  function draw() {
    const ax = AX.value, k = cy.now() / 5, a = 2 * Math.PI * F.ease.smooth(k), ca = C('angle');
    const chair = OBJ.value === 'chair';
    S.set('axes', F.space.axes([[-1.1, 1.1], [-1.1, 1.1], [-1.1, 1.1]], { ticks: 0 }));
    const idx = 'xyz'.indexOf(ax), u = [0, 0, 0]; u[idx] = 1;
    /* the arc of the turn so far, round the axis near its positive end */
    const arc = Array.from({ length: 41 }, (_, i) => turn(ax === 'x' ? [0.95, 0.22, 0] : ax === 'y' ? [0.22, 0.95, 0] : [0.22, 0, 0.95], ax, a * i / 40));
    S.set('turn', [
      { k: 'line', pts: [u.map((v) => -1.05 * v), u.map((v) => 1.05 * v)], color: ca, w: 4, name: `the axis of rotation, ${ax}` },
      ...(a > 0.05 ? [{ k: 'line', pts: arc, color: ca, w: 4, name: `the angle turned so far, ${fmt(a * 180 / Math.PI, 0)}°` }] : []),
    ]);
    if (chair) {
      S.set('obj', [{ k: 'faces', faces: CHAIR.map((f) => f.map((p) => turn(p, ax, a))), color: PAL.muted, alpha: 1, name: 'the chair' }]);
    } else {
      const pc = turn([RC, 0, 0], ax, a), po = turn([RO, 0, 0], ax, a);
      S.set('obj', [
        { k: 'line', pts: [pc, po], color: PAL.muted, w: 8, name: 'the C–O bond, along the x axis at rest' },
        { k: 'points', pts: [pc], color: F.el('C'), r: 26, name: 'carbon' },
        { k: 'points', pts: [po], color: F.el('O'), r: 30, name: 'oxygen' },
      ]);
    }
    const same = !chair && ax === 'x';
    S.headline(chair ? `A turn about ${ax} carries the chair into a new orientation.` : same ? 'A turn about the bond axis x leaves the molecule as it was.' : `A turn about ${ax} swings the bond to a new direction.`);
    tex(d.readout, `\\text{angle about } ${ax} = ${fmt(a * 180 / Math.PI, 0)}^\\circ \\\\ \\text{independent rotations} = ${chair ? 3 : 2}`, false, { values: false });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 5.9.3 + 5.9.4: the spectrum built from the ladder. Still: a
   spectrum has no time in it. Slider r0, 1.00 to 1.30 A, opening on the
   book's 1.131 A for 12C16O (Example 5.9.6), a detent there. Top: the
   levels E_J = J(J + 1)B for J = 0 to 10, in units of B, and each J -> J + 1
   absorption as an arrow standing at its line's frequency (arrows
   symbolic). Bottom: the frequency axis, 0 to 1300 GHz, fixed; predicted
   lines at 2B(J + 1) with Table 5.9.1's gamma_max as heights; the
   measured positions as ink ticks under the axis.
===================================================================== */
(function () {
  const d = sim('sim-spectrum', 700);
  const R = ctl(d.controls, { label: '\\krzero', cls: 'length', key: 'r0', min: 1.0, max: 1.3, step: 0.001, value: 1.131, unit: 'Å', dec: 3, aria: 'the bond length in angstroms', specials: [{ at: 1.131, label: 'CO, Example 5.9.6' }] });
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const b = Bh(R.v * 1e-10) / 1e9, ce = C('energy'), cf = C('frequency');
    const sp = { l: 140, r: 1290, t: 470, b: 620 };
    const ax = F.axes(ctx, sp, [0, 1300], [0, 0.22], { nx: 13, ny: 0, xl: 'frequency (GHz)', xc: cf, fx: (v) => (v % 200 === 0 ? String(v) : '') });
    const lv = { t: 130, b: 400 }, EY = (j) => lv.b - (j * (j + 1)) / 110 * (lv.b - lv.t);
    for (let j = 0; j <= 10; j++) {
      line(ctx, sp.l, EY(j), sp.r, EY(j), alpha(ce, j ? 0.5 : 0.8), 2);
      if (j % 2 === 0) text(ctx, `J = ${j}`, sp.l - 12, EY(j), ce, { size: 17, align: 'right' });
    }
    text(ctx, 'energy (B)', sp.l, lv.t - 30, ce, { size: 20, weight: 600 });
    for (let j = 0; j < 10; j++) {
      const nu = 2 * b * (j + 1), x = ax.X(nu);
      if (x > sp.r) continue;
      F.arrow(ctx, x, EY(j), x, EY(j + 1), PAL.ink, 3);
      line(ctx, x, EY(j), x, sp.b - GAMMA[j] / 0.22 * (sp.b - sp.t), alpha(PAL.ink, 0.25), 2, [4, 8]);
      line(ctx, x, sp.b, x, ax.Y(GAMMA[j]), cf, 6);
      hits.push({ x, y: ax.Y(GAMMA[j]), r: 14, name: `the line J = ${j} → ${j + 1}, predicted at ${fmt(nu, 1)} GHz` });
    }
    LINES.forEach((nu, j) => { const x = ax.X(nu / 1000); dot(ctx, x, ax.Y(GAMMA[j]), PAL.ink, false, 8); hits.push({ x, y: ax.Y(GAMMA[j]), r: 10, name: `the measured line J = ${j} → ${j + 1}, ${fmt(nu / 1000, 2)} GHz` }); });
    F.legend(ctx, ax, [{ s: 'predicted line, height γ_max', color: cf, w: 6 }, { s: 'measured line (Table 5.9.1)', kind: 'dot', color: PAL.ink }], { corner: 'tr' });
    topline(ctx, `$2B/h = ${fmt(2 * b, 2)}$ GHz: the first line, and the gap between every pair of lines.`);
    tex(d.readout, `\\dfrac{B}{h} = \\dfrac{h}{8\\pi^2 \\kmu \\krzero^2} = ${fmt(b, 2)}\\text{ GHz} \\\\ \\knu = 2\\dfrac{B}{h}(J_i + 1) = ${fmt(2 * b, 2)}\\text{ GHz},\\ ${fmt(4 * b, 2)}\\text{ GHz},\\ ${fmt(6 * b, 2)}\\text{ GHz}, \\ldots`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 5.9.5: the stretching rotor, on Table 5.9.1's numbers. Moving:
   the molecule turns steadily, faster as J grows (angular momentum
   proportional to sqrt(J(J + 1)), J = 0 standing still). Select J, the
   lower level of the line J -> J + 1, 0 to 9. From that line,
   B_J/h = nu_J / 2(J + 1) and r_J = sqrt(h / 8 pi^2 mu B_J): 113.089 pm at
   J = 0 to 113.125 pm at J = 9. The bond is drawn with its stretch beyond
   r_0 multiplied by 1000 (root 28.4), stated in the readout. Right: B_J/h
   against J, the current one filled.
===================================================================== */
(function () {
  const d = sim('sim-stretch', 520);
  const J = F.select(d.controls, { label: 'J', options: Array.from({ length: 10 }, (_, j) => ({ value: String(j), label: `${j} → ${j + 1}` })), value: '4', aria: 'the line J to J + 1', key: 'J' });
  const cy = F.cycle(() => Infinity, 0);
  let hits = []; F.hover(d.stage, () => hits);
  const BJ = LINES.map((nu, j) => nu / (2 * (j + 1)));
  const RJ = BJ.map((b) => Math.sqrt(H_ / (8 * Math.PI ** 2 * MU * AMU * b * 1e6)) * 1e12);
  const PX = 2.2, X = 1000;   /* canvas units per pm; the stretch factor */
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const j = +J.value, cl = C('length'), cf = C('frequency');
    const r = RJ[j], drawn = RJ[0] + X * (r - RJ[0]);
    const w = 1.2 * Math.sqrt(j * (j + 1)), now = cy.now(), a = w * (Number.isFinite(now) ? now : 0.6);
    const O = { x: 400, y: 280 }, L = drawn * PX;
    const xc = -L * M_O / (M_C + M_O), xo = L * M_C / (M_C + M_O);
    const P = (s) => ({ x: O.x + s * Math.cos(a), y: O.y - s * Math.sin(a) });
    const pc = P(xc), po = P(xo);
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.12); ctx.lineWidth = 2; ctx.setLineDash([4, 8]); ctx.beginPath(); ctx.arc(O.x, O.y, Math.abs(xc), 0, 2 * Math.PI); ctx.stroke(); ctx.beginPath(); ctx.arc(O.x, O.y, xo, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    line(ctx, pc.x, pc.y, po.x, po.y, PAL.muted, 8);
    dot(ctx, pc.x, pc.y, F.el('C'), true, 30); dot(ctx, po.x, po.y, F.el('O'), true, 34);
    dot(ctx, O.x, O.y, PAL.ink, true, 5);
    hits.push({ x: pc.x, y: pc.y, r: 30, name: 'carbon' }, { x: po.x, y: po.y, r: 34, name: 'oxygen' }, { x: O.x, y: O.y, r: 10, name: 'the center of mass' });
    text(ctx, `r = ${fmt(r, 3)} pm`, O.x, O.y + 200, cl, { size: 22, weight: 600, align: 'center' });
    const box = { l: 860, r: 1300, t: 110, b: 420 };
    const ax = F.axes(ctx, box, [-0.5, 9.5], [57595, 57640], { nx: 0, ny: 3, xl: 'J', yl: 'B_J/h (MHz)', yc: cf, fy: (v) => fmt(v, 0) });
    BJ.forEach((b, k) => { const x = ax.X(k); if (k % 3 === 0) text(ctx, String(k), x, box.b + 26, PAL.muted, { size: 17, align: 'center' }); dot(ctx, x, ax.Y(b), cf, k === j, k === j ? 10 : 7); hits.push({ x, y: ax.Y(b), r: 12, name: `B/h from the line ${k} → ${k + 1}: ${fmt(b, 2)} MHz` }); });
    topline(ctx, j ? `The faster it turns, the longer the bond: ${fmt(r - RJ[0], 3)} pm longer than at $J = 0$.` : 'At $J = 0$ the molecule does not rotate, and the bond is at its shortest.');
    tex(d.readout, `\\dfrac{B_{${j}}}{h} = \\dfrac{\\knu_{${j}}}{2(${j} + 1)} = \\dfrac{${fmt(LINES[j], 2)}\\text{ MHz}}{${2 * (j + 1)}} = ${fmt(BJ[j], 2)}\\text{ MHz} \\\\ \\kr = \\sqrt{\\dfrac{h}{8\\pi^2 \\kmu B_{${j}}}} = ${fmt(r, 3)}\\text{ pm} \\\\ \\small \\text{the stretch beyond } ${fmt(RJ[0], 3)}\\text{ pm is drawn } \\times 1000`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
