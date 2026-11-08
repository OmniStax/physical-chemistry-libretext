/* Figures for section 12.12 Normal Modes of Vibrations Describe how Molecules Vibrate. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['12.12'] = function (root, F) {
const { el, tex, C, PAL, ctl, cycle, register } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;
function readout(host, main, small) { tex(host, main, false, {}); if (small) { const s = el('small', null, small); host.appendChild(s); F.renderMath(s); } }

/* ---------- ammonia, C3 axis along +y (up), N on top, Å, centre of mass at the origin ----------
   r(N–H) = 1.012 Å, angle HNH = 106.7°. Normal modes from a valence force field (f_r = 6.5 mdyn/Å,
   f_θ = 0.65 mdyn·Å/rad²), Cartesian displacements of N, H1, H2, H3 scaled so the largest is 1; an E
   pair's partners are orthogonal in mass-weighted space, the first symmetric in the plane through H1
   and the axis. Frequencies are the measured fundamentals (NIST): 3337, 950 (the mean of the
   inversion doublet 932/968), 3444, 1627 cm^-1. zp is the largest hydrogen turning-point amplitude
   in the ground state, Å, from the same model. */
const XYZ = [[0, 0.0677, 0], [0, -0.3134, 0.9375], [-0.8119, -0.3134, -0.4688], [0.8119, -0.3134, -0.4688]];
const SYM = ['N', 'H', 'H', 'H'], NAMES = ['the nitrogen atom', 'hydrogen 1', 'hydrogen 2', 'hydrogen 3'];
const MODES = {
  sym: { name: 'symmetric stretch', sp: 'A_1', nu: 3337, zp: 0.052, d: [[[0, -0.09, 0], [0, 0.418, -1], [0.866, 0.418, 0.5], [-0.866, 0.418, 0.5]]] },
  umb: { name: 'umbrella', sp: 'A_1', nu: 950, zp: 0.079, d: [[[0, 0.216, 0], [0, -1, -0.508], [0.44, -1, 0.254], [-0.44, -1, 0.254]]] },
  asym: { name: 'asymmetric stretch', sp: 'E', nu: 3444, zp: 0.06, d: [[[0, 0, 0.11], [0, 0.416, -1], [-0.423, -0.208, -0.267], [0.423, -0.208, -0.267]], [[0.11, 0, 0], [-0.023, 0, 0], [-0.756, -0.36, -0.423], [-0.756, 0.36, 0.423]]] },
  def: { name: 'deformation', sp: 'E', nu: 1627, zp: 0.09, d: [[[0, 0, 0.082], [0, 0.31, 0.236], [0.535, -0.155, -0.691], [-0.535, -0.155, -0.691]], [[-0.082, 0, 0], [1, 0, 0], [0.073, 0.269, -0.535], [0.073, -0.269, 0.535]]] },
};
const ACT = { A_1: 'IR active with $z$-polarized light and Raman active ($x^2 + y^2$, $z^2$)', E: 'IR active with $x$- or $y$-polarized light and Raman active ($x^2 - y^2$, $xy$, $xz$, $yz$)' };

/* =====================================================================
   FIGURE (unnumbered, the book's ball-and-stick NH3): ammonia's six vibrations.
   Moving: each mode oscillates, at a drawn frequency in proportion to the real one.
   Physical 3D: the mode's shape in space is the lesson (an umbrella, a tilt off
   the axis). Orbit bounded above the plane of the hydrogens and ±60° about the C3
   axis; no spin, no zoom (config). The C3 axis is drawn so the reader sees which
   modes keep it. An E mode's two partners blend on the mix slider.
===================================================================== */
(function () {
  const d = sim('sim-ammonia-modes');
  const S = 2.0, A = 0.22;   /* scene units per Å; the largest displacement drawn, Å */
  const M = F.choice(d.controls, { label: '\\text{mode}', options: [{ value: 'sym', label: 'symmetric stretch' }, { value: 'umb', label: 'umbrella' }, { value: 'asym', label: 'asymmetric stretch' }, { value: 'def', label: 'deformation' }], value: 'sym', aria: 'the vibration of ammonia to show', onInput: () => { mix.show(MODES[M.value].d.length > 1); cy.reset(); } });
  const mix = ctl(d.controls, { label: '\\text{mix}', cls: 'angle', min: 0, max: 180, step: 1, value: 0, unit: '°', dec: 0, detents: [0, 90], aria: 'how much of the second partner the E mode holds' });
  mix.show(false);
  const cy = cycle(() => Infinity, 0);
  const v = F.view3d(d.stage, { h: 520, dist: 7.5, tilt: 0.35, pitch: [0.05, 1.45], yaw: [-Math.PI / 3, Math.PI / 3], spin: 'off', zoom: false });
  const g = v.part(0);
  /* without WebGL, the same molecule painted flat from the opening view */
  const flat = d.stage.querySelector('.three-none') ? F.makeCanvas(d.stage, 520) : null;
  function paintFlat(P) {
    const { ctx } = F.begin(flat), p = 0.35, k = 120, cx = 700, cy0 = 280;
    const Q = P.map((q) => ({ x: cx + q[0] * k / S * 1.2, y: cy0 - (q[1] * Math.cos(p) - q[2] * Math.sin(p)) * k / S * 1.2, z: q[1] * Math.sin(p) + q[2] * Math.cos(p) }));
    F.line(ctx, cx, cy0 + 230, cx, cy0 - 230, F.alpha(C('symmetry-operation'), 0.6), 3, [10, 10]);
    F.text(ctx, 'C₃', cx + 16, cy0 - 220, C('symmetry-operation'), { size: 22, weight: 600 });
    [1, 2, 3].forEach((i) => F.line(ctx, Q[0].x, Q[0].y, Q[i].x, Q[i].y, PAL.muted, 10));
    Q.map((q, i) => [q, i]).sort((a, b) => a[0].z - b[0].z).forEach(([q, i]) => { ctx.save(); ctx.beginPath(); ctx.arc(q.x, q.y, i ? 26 : 40, 0, TAU); ctx.fillStyle = F.el(SYM[i]); ctx.fill(); ctx.strokeStyle = F.alpha(PAL.ink, 0.7); ctx.lineWidth = 2; ctx.stroke(); ctx.restore(); });
  }
  let sig = '', balls = [], sticks = [];
  function build() {
    if (flat) return;
    const s = [PAL.ink, F.el('N'), F.el('H'), C('symmetry-operation')].join('|'); if (s === sig) return; sig = s;
    v.clear(); balls = []; sticks = [];
    [1, 2, 3].forEach(() => sticks.push(F.mesh.stick(g, [0, 0, 0], [0, 1, 0], 0.07, PAL.muted)));
    XYZ.forEach((p, i) => { const b = F.mesh.sphere(g, p.map((x) => x * S), i ? 0.26 : 0.4, F.el(SYM[i])); v.pickable(b, NAMES[i]); balls.push(b); });
    const ax = F.mesh.stick(g, [0, -1.8, 0], [0, 1.8, 0], 0.025, C('symmetry-operation'), { transparent: true, opacity: 0.6 });
    v.pickable(ax, 'the C₃ axis');
    v.label('C₃', [0, 1.95, 0], g);
  }
  function draw() {
    build();
    const m = MODES[M.value];
    let t = cy.now(); const f = m.nu / 3400;
    if (!isFinite(t)) t = 0.25 / f;
    const sw = Math.sin(TAU * f * t), th = mix.v * Math.PI / 180;
    const dv = (i) => (m.d.length > 1 ? [0, 1, 2].map((k) => Math.cos(th) * m.d[0][i][k] + Math.sin(th) * m.d[1][i][k]) : m.d[0][i]);
    const P = XYZ.map((p, i) => p.map((x, k) => (x + A * sw * dv(i)[k]) * S));
    balls.forEach((b, i) => b.position.set(P[i][0], P[i][1], P[i][2]));
    sticks.forEach((st, i) => F.mesh.setStick(st, P[0], P[i + 1]));
    const deg = m.d.length > 1;
    v.headline(deg
      ? `In the ${m.name} the three hydrogens move unequally and the C₃ axis is lost. Any mix of its two partners, here ${mix.v}°, vibrates at the same ${m.nu} cm⁻¹.`
      : `In the ${m.name} all three hydrogens move alike, so the C₃ axis is kept.`);
    v.invalidate();
    if (flat) paintFlat(P);
    readout(d.readout, `\\kGammavib = 2A_1 + 2E \\\\ \\kGamma(\\text{${m.name}}) = ${m.sp}`,
      `The ${m.name} is ${ACT[m.sp]}; it absorbs at $\\knut = ${m.nu}\\ \\text{cm}^{-1}$. A hydrogen swings about ${m.zp.toFixed(2)} Å in the ground state, drawn ${Math.round(A / m.zp)} times larger.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
