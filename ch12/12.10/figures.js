/* Figures for section 12.10 Molecular Motions of a Molecule can be Represented by a Reducible Reperesentation. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['12.10'] = function (root, F) {
const { el, tex, C, PAL, alpha, register, begin, line, arrow, text, topline, cycle } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;
/* a readout line and, where the figure shows one more fact, a small second line set through the same macros */
function readout(host, main, small) { tex(host, main, false, {}); if (small) { const s = el('small', null, small); host.appendChild(s); F.renderMath(s); } }

/* ---------- water in the xz plane (z the C2 axis, up; x right; y into the page) ----------
   Equilibrium geometry r = 0.9572 Å, angle 104.52°, centre of mass at the origin, in Å.
   Normal modes from a valence force field (f_r = 8.45 mdyn/Å, f_rr = -0.1 mdyn/Å,
   f_θ = 0.76 mdyn·Å/rad²), Cartesian displacements scaled so the largest is 1; the
   frequencies shown are the measured fundamentals (NIST): 3657, 1595, 3756 cm^-1.
   zp is the hydrogen's turning-point amplitude in the ground state, Å, from the same model. */
const ATOMS = [{ s: 'O', x: 0, z: 0.0656, name: 'the oxygen atom' }, { s: 'H', x: 0.757, z: -0.5203, name: 'hydrogen H' }, { s: 'H', x: -0.757, z: -0.5203, name: "hydrogen H′" }];
const MODES = {
  sym: { name: 'symmetric stretch', nu: 3657, zp: 0.050, d: [[0, -0.1005], [-1, 0.7975], [1, 0.7975]] },
  bend: { name: 'bend', nu: 1595, zp: 0.071, d: [[0, -0.126], [0.898, 1], [-0.898, 1]] },
  asym: { name: 'asymmetric stretch', nu: 3756, zp: 0.050, d: [[-0.126, 0], [1, -0.774], [1, 0.774]] },
};
/* the four operations of C2v: the sign each puts on x, y, z, and where each atom goes */
const OPS = [
  { tex: '\\kEop', lab: 'E', s: [1, 1, 1], p: [0, 1, 2], name: 'the identity E' },
  { tex: '\\kCtwo', lab: 'C_2', s: [-1, -1, 1], p: [0, 2, 1], name: 'the rotation C₂ about the z axis' },
  { tex: '\\ksigmav(xz)', lab: 'σ_v(xz)', s: [1, -1, 1], p: [0, 1, 2], name: 'the reflection σᵥ(xz), in the plane of the molecule' },
  { tex: "\\ksigmavp(yz)", lab: 'σ_v′(yz)', s: [-1, 1, 1], p: [0, 2, 1], name: "the reflection σᵥ′(yz), in the plane through the z axis square to the molecule" },
];
const A = 0.2;   /* the largest displacement drawn, Å */
const sgn = (v) => (v < 0 ? `−${Math.abs(v)}` : String(v));

/* =====================================================================
   FIGURE (unnumbered, the book's two images of water): the 3N Cartesian basis
   and the three vibrations, with their images under the four operations.
   Moving: a vibration has a time in it, so the molecule oscillates (drawn
   frequency in proportion to the real one) and each image moves either in
   step (character +1) or against it (-1). The 3N basis setting is still and
   counts the axes left in place. 2D: every motion is in the molecular plane.
===================================================================== */
(function () {
  const d = sim('sim-water-modes', 700);
  const M = F.choice(d.controls, { label: '\\text{motion}', options: [{ value: 'basis', label: '3N basis' }, { value: 'sym', label: 'symmetric stretch' }, { value: 'bend', label: 'bend' }, { value: 'asym', label: 'asymmetric stretch' }], value: 'basis', aria: 'the motion of water to look at', onInput: () => cy.reset() });
  const cy = cycle(() => Infinity, 0);
  let hits = []; F.hover(d.stage, () => hits);
  function atom(ctx, s, x, y, r, fade) {
    ctx.save(); ctx.globalAlpha = fade; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fillStyle = F.el(s); ctx.fill();
    ctx.strokeStyle = alpha(PAL.ink, 0.7); ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
  }
  function molecule(ctx, P, rO, rH, fade) {
    [1, 2].forEach((i) => line(ctx, P[0][0], P[0][1], P[i][0], P[i][1], alpha(PAL.ink, 0.45 * fade), rH * 0.55));
    P.forEach((p, i) => atom(ctx, ATOMS[i].s, p[0], p[1], i ? rH : rO, fade));
  }
  /* the y axis, into the page (⊗) or out of it (⊙) */
  function yaxis(ctx, x, y, sign, col) {
    ctx.save(); ctx.strokeStyle = col; ctx.fillStyle = col; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(x, y, 9, 0, TAU); ctx.stroke();
    if (sign > 0) { ctx.beginPath(); ctx.moveTo(x - 6, y - 6); ctx.lineTo(x + 6, y + 6); ctx.moveTo(x + 6, y - 6); ctx.lineTo(x - 6, y + 6); ctx.stroke(); }
    else { ctx.beginPath(); ctx.arc(x, y, 3, 0, TAU); ctx.fill(); }
    ctx.restore();
  }
  /* the three axes on an atom, each with the sign the operation gives it */
  function axes3(ctx, x, y, s, L, col, small) {
    const sz = small ? 17 : 20;
    arrow(ctx, x, y, x + s[0] * L, y, col, small ? 3 : 4);
    arrow(ctx, x, y, x, y - s[2] * L, col, small ? 3 : 4);
    yaxis(ctx, x - L * 0.45, y + L * 0.45, s[1], col);
    text(ctx, 'x', x + s[0] * (L + 12), y + 2, col, { size: sz, align: 'center' });
    text(ctx, 'z', x + 14, y - s[2] * L, col, { size: sz });
    text(ctx, 'y', x - L * 0.45 - 20, y + L * 0.45 + 2, col, { size: sz, align: 'center' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const key = M.value, mode = MODES[key], cc = C('character'), cs = C('symmetry-operation');
    let t = cy.now(); const f = mode ? mode.nu / 3700 : 0;
    if (!isFinite(t)) t = mode ? 0.25 / f : 0;
    const sw = mode ? Math.sin(TAU * f * t) : 0;
    /* the molecule */
    const S0 = 190, c0 = [700, 250];
    const at = (i, k, s) => { const a = ATOMS[i], dd = mode ? mode.d[i] : [0, 0]; return [c0[0] + (a.x + k * A * dd[0] * s) * S0 * (s === undefined ? 1 : 1), c0[1] - (a.z + k * A * dd[1] * s) * S0]; };
    const P = ATOMS.map((a, i) => at(i, 1, sw));
    if (mode) { const E = ATOMS.map((a, i) => at(i, 0, 0)); E.forEach((p, i) => { ctx.save(); ctx.setLineDash([4, 6]); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(p[0], p[1], i ? 22 : 34, 0, TAU); ctx.stroke(); ctx.restore(); }); }
    molecule(ctx, P, 34, 22, 1);
    if (!mode) P.forEach((p) => axes3(ctx, p[0], p[1], [1, 1, 1], 66, PAL.ink, false));
    P.forEach((p, i) => hits.push({ x: p[0], y: p[1], r: i ? 22 : 34, name: ATOMS[i].name + (mode ? `, moving in the ${mode.name}` : ', with its x, y and z axes') }));
    /* the four images */
    const S1 = 120, W1 = 320, x0 = 700 - 1.5 * W1, yc = 560;
    const chis = [];
    OPS.forEach((op, k) => {
      const cx = x0 + k * W1, Q = (x, z) => [cx + x * S1, yc - z * S1];
      text(ctx, op.lab, cx, 420, cs, { size: 24, weight: 600, align: 'center' });
      /* the element, faint: the C2 axis dashed, σv(xz) the page itself (a tinted panel), σv'(yz) edge-on */
      if (k === 1) line(ctx, cx, 445, cx, 660, alpha(cs, 0.6), 3, [10, 10]);
      if (k === 2) { ctx.save(); ctx.fillStyle = alpha(cs, 0.08); ctx.fillRect(cx - 140, 445, 280, 205); ctx.restore(); }
      if (k === 3) line(ctx, cx, 445, cx, 660, alpha(cs, 0.6), 3);
      if (!mode) {
        /* the axes as the operation leaves them; an atom that moves contributes nothing and is faded */
        let fixed = 0;
        ATOMS.forEach((a, i) => {
          const j = op.p[i], q = Q(ATOMS[j].x, ATOMS[j].z), stays = j === i;
          atom(ctx, a.s, q[0], q[1], i ? 15 : 23, stays ? 1 : 0.25);
          if (stays) { fixed++; axes3(ctx, q[0], q[1], op.s, 44, PAL.ink, true); }
        });
        const cx3 = op.s[0] + op.s[1] + op.s[2], chi = fixed * cx3; chis.push(chi);
        text(ctx, `${fixed} × ${cx3 < 0 ? '(' + sgn(cx3) + ')' : cx3} = ${sgn(chi)}`, cx, 680, cc, { size: 22, weight: 600, align: 'center' });
        hits.push({ x: cx, y: yc, r: 120, name: `${op.name}: ${fixed} atom${fixed > 1 ? 's' : ''} left in place, each adding ${sgn(cx3)}` });
      } else {
        /* the image of the moving molecule: atom i lands on p(i) carrying R·d_i */
        const img = [0, 0, 0].map(() => [0, 0]);
        ATOMS.forEach((a, i) => { const j = op.p[i]; img[j] = [op.s[0] * mode.d[i][0], op.s[2] * mode.d[i][1]]; });
        const dot = img.reduce((s, v, j) => s + v[0] * mode.d[j][0] + v[1] * mode.d[j][1], 0);
        const chi = dot > 0 ? 1 : -1; chis.push(chi);
        const Pi = ATOMS.map((a, j) => Q(a.x + A * img[j][0] * sw, a.z + A * img[j][1] * sw));
        molecule(ctx, Pi, 23, 15, 1);
        text(ctx, chi > 0 ? 'χ = +1' : 'χ = −1', cx, 680, cc, { size: 22, weight: 600, align: 'center' });
        hits.push({ x: cx, y: yc, r: 120, name: `the ${mode.name} after ${op.name}: it moves ${chi > 0 ? 'in step with' : 'against'} the molecule, character ${sgn(chi)}` });
      }
    });
    const row = `\\begin{array}{l|cccc} & \\kEop & \\kCtwo & \\ksigmav(xz) & \\ksigmavp(yz) \\\\ \\hline `;
    if (!mode) {
      topline(ctx, 'Only the atoms an operation leaves in place count, so $\\kchar_{3N} = 9, -1, 3, 1$.');
      readout(d.readout, row + `\\kchar_{xyz} & 3 & -1 & 1 & 1 \\\\ \\text{unshifted atoms} & 3 & 1 & 3 & 1 \\\\ \\kchar_{3N} & 9 & -1 & 3 & 1 \\end{array}`);
    } else {
      const sp = key === 'asym' ? 'B_1' : 'A_1';
      topline(ctx, key === 'asym'
        ? `In the asymmetric stretch the images under $\\kCtwo$ and $\\ksigmavp(yz)$ move against the molecule, so the stretch is $${sp}$.`
        : `In the ${mode.name} every image moves in step with the molecule, so the ${mode.name} is $${sp}$.`);
      readout(d.readout, row + `\\kchar & ${chis.map((c) => (c > 0 ? '1' : '-1')).join(' & ')} \\end{array} \\\\ \\kGamma = ${sp}`,
        `Water's ${mode.name} absorbs at $\\knut = ${mode.nu}\\ \\text{cm}^{-1}$. A hydrogen swings about ${mode.zp.toFixed(3)} Å in the ground state, drawn ${(A / mode.zp).toFixed(0)} times larger.`);
    }
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
