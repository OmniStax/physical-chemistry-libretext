/* Figures for section 13.10 Irreducible Representation of Point Groups. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['13.10'] = function (root, F) {
const { el, tex, PAL, alpha, cycle, register, begin, line } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;
function readout(host, main, small) { tex(host, main, false, {}); if (small) { const s = el('small', null, small); host.appendChild(s); F.renderMath(s); } }

/* =====================================================================
   FIGURE 13.10.3: the nine vibrations of [PtCl4]2-.
   Physical 3D: the ion lies in its molecular xy plane, drawn horizontal (the scene's y is the
   molecule's z, up). Pt-Cl 2.31 Å. Mode shapes from symmetry alone, Cartesian displacements in
   the molecule's axes with the largest set to 1; the platinum recoils so the centre of mass stays
   put (masses 195.08 and 35.45). The two e_u pairs are drawn as a pure stretch and a pure bend;
   in the ion each real e_u mode is a mixture of the two, a simplification the notes state.
   Every mode runs at the same drawn rate, amplitude 0.35 Å. Activity from the D4h character
   table: a2u (z) and e_u (x, y) IR active; a1g, b1g, b2g Raman active; b2u neither.
   Orbit: all the way round in yaw, from 70° below the plane to nearly overhead, so the
   out-of-plane modes can be seen edge on; no spin, no zoom.
===================================================================== */
(function () {
  const d = sim('sim-ptcl4-modes');
  const S = 1.4, A = 0.35, R = 2.31, k = (2 * 35.45) / 195.08, k4 = (4 * 35.45) / 195.08;
  /* the molecule's (x, y, z) to the scene's (x, z, y): its plane horizontal */
  const sc = (p) => [p[0], p[2], p[1]];
  const POS = [[0, 0, 0], [R, 0, 0], [0, R, 0], [-R, 0, 0], [0, -R, 0]];
  const z = [0, 0, 0];
  const MODES = {
    a1g: { sp: 'a_{1g}', kind: 'stretch', act: 'Raman active', d: [z, [1, 0, 0], [0, 1, 0], [-1, 0, 0], [0, -1, 0]] },
    b1g: { sp: 'b_{1g}', kind: 'stretch', act: 'Raman active', d: [z, [1, 0, 0], [0, -1, 0], [-1, 0, 0], [0, 1, 0]] },
    b2g: { sp: 'b_{2g}', kind: 'bend', act: 'Raman active', d: [z, [0, 1, 0], [1, 0, 0], [0, -1, 0], [-1, 0, 0]] },
    a2u: { sp: 'a_{2u}', kind: 'bend', act: 'IR active with $z$-polarized light', d: [[0, 0, -k4], [0, 0, 1], [0, 0, 1], [0, 0, 1], [0, 0, 1]] },
    b2u: { sp: 'b_{2u}', kind: 'bend', act: 'neither IR nor Raman active', d: [z, [0, 0, 1], [0, 0, -1], [0, 0, 1], [0, 0, -1]] },
    eusx: { sp: 'e_u', kind: 'stretch', act: 'IR active with $x$- or $y$-polarized light', d: [[-k, 0, 0], [1, 0, 0], z, [1, 0, 0], z] },
    eusy: { sp: 'e_u', kind: 'stretch', act: 'IR active with $x$- or $y$-polarized light', d: [[0, -k, 0], z, [0, 1, 0], z, [0, 1, 0]] },
    eubx: { sp: 'e_u', kind: 'bend', act: 'IR active with $x$- or $y$-polarized light', d: [[-k, 0, 0], z, [1, 0, 0], z, [1, 0, 0]] },
    euby: { sp: 'e_u', kind: 'bend', act: 'IR active with $x$- or $y$-polarized light', d: [[0, -k, 0], [0, 1, 0], z, [0, 1, 0], z] },
  };
  const LABEL = { a1g: 'a₁g stretch', b1g: 'b₁g stretch', b2g: 'b₂g bend', a2u: 'a₂u bend', b2u: 'b₂u bend', eusx: 'eᵤ stretch (x)', eusy: 'eᵤ stretch (y)', eubx: 'eᵤ bend (x)', euby: 'eᵤ bend (y)' };
  const M = F.select(d.controls, { label: '\\text{mode}', options: Object.keys(MODES).map((value) => ({ value, label: LABEL[value] })), value: 'a1g', aria: 'the vibration of the ion to show', onInput: () => cy.reset() });
  const cy = cycle(() => Infinity, 0);
  const v = F.view3d(d.stage, { h: 480, dist: 13, tilt: 0.55, pitch: [-1.22, 1.45], yaw: 'free', spin: 'off', zoom: false });
  const g = v.part(0);
  if (v.setView) v.setView(0.45, 0.55);
  const flat = d.stage.querySelector('.three-none') ? F.makeCanvas(d.stage, 480) : null;
  const SYM = ['Pt', 'Cl', 'Cl', 'Cl', 'Cl'], RAD = [0.5, 0.42, 0.42, 0.42, 0.42];
  const NAMES = ['the platinum ion', 'chlorine 1', 'chlorine 2', 'chlorine 3', 'chlorine 4'];
  function paintFlat(P) {
    const { ctx } = begin(flat), yaw = 0.45, p = 0.55, kk = 120, cx = 700, cy0 = 250;
    const Q = P.map((q) => { const x = q[0] * Math.cos(yaw) + q[2] * Math.sin(yaw), zz = -q[0] * Math.sin(yaw) + q[2] * Math.cos(yaw);
      return { x: cx + x * kk / S, y: cy0 - (q[1] * Math.cos(p) - zz * Math.sin(p)) * kk / S, z: q[1] * Math.sin(p) + zz * Math.cos(p) }; });
    [1, 2, 3, 4].forEach((i) => line(ctx, Q[0].x, Q[0].y, Q[i].x, Q[i].y, PAL.muted, 10));
    Q.map((q, i) => [q, i]).sort((a, b) => a[0].z - b[0].z).forEach(([q, i]) => { ctx.save(); ctx.beginPath(); ctx.arc(q.x, q.y, i ? 34 : 40, 0, TAU); ctx.fillStyle = F.el(SYM[i]); ctx.fill(); ctx.strokeStyle = alpha(PAL.ink, 0.7); ctx.lineWidth = 2; ctx.stroke(); ctx.restore(); });
  }
  let sig = '', balls = [], sticks = [];
  function build() {
    if (flat) return;
    const s = [PAL.ink, PAL.muted, F.el('Pt'), F.el('Cl')].join('|'); if (s === sig) return; sig = s;
    v.clear(); balls = []; sticks = [];
    [1, 2, 3, 4].forEach(() => sticks.push(F.mesh.stick(g, [0, 0, 0], [1, 0, 0], 0.09, PAL.muted)));
    POS.forEach((p, i) => { const b = F.mesh.sphere(g, sc(p).map((x) => x * S), RAD[i], F.el(SYM[i])); v.pickable(b, NAMES[i]); balls.push(b); });
  }
  function draw() {
    build();
    const m = MODES[M.value];
    let t = cy.now(); if (!isFinite(t)) t = 0.25;
    const sw = Math.sin(TAU * 0.6 * t);
    const P = POS.map((p, i) => sc(p.map((x, j) => x + A * sw * m.d[i][j])).map((x) => x * S));
    if (!flat) {
      balls.forEach((b, i) => b.position.set(P[i][0], P[i][1], P[i][2]));
      sticks.forEach((st, i) => F.mesh.setStick(st, P[0], P[i + 1]));
      const out = M.value === 'a2u' || M.value === 'b2u';
      v.headline(`${LABEL[M.value]}: the Pt–Cl bonds ${m.kind === 'stretch' ? 'stretch' : 'bend'}${out ? ' and the chlorines leave the plane' : ' within the plane'}.`);
      v.invalidate();
    } else paintFlat(P);
    readout(d.readout, `\\kGammavib = a_{1g} + b_{1g} + b_{2g} + a_{2u} + b_{2u} + 2e_u \\\\ \\Gamma(\\text{this mode}) = ${m.sp}`,
      `A ${m.kind} of species $${m.sp}$, ${m.act}.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
