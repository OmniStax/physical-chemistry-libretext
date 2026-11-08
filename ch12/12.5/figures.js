/* Figures for section 12.5 Molecules can be Represented by Reducible Representations. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['12.5'] = function (root, F) {
const { tex, C, PAL, alpha, register, line, text, fmt } = F;

/* ---------- Figure (the book's NH3 s basis, unnumbered): the permutation matrices ----------
   A locked view down the C3 axis (root 28.2): NH3 seen from above, as the book draws it, the
   atoms shaded spheres in F.el colours. 2D cost: a sequence in the plane is the lesson. The
   book's positions: s1 at the top (90 deg), s2 lower left (210 deg), s3 lower right (330 deg);
   sigma_v contains H1, sigma_v' contains H3, sigma_v'' contains H2 (the book's lines). C3+ turns
   counterclockwise seen from above (s1 onto s2's place), C3- clockwise. Moving: play carries
   each hydrogen to its image (a turn, or a slide straight through the mirror plane); the label
   on each atom travels with it, the faint rings keep the home places, and the matrix beside
   fills in as the move lands, its diagonal boxed and summed into the character. */
(function () {
  const d = F.sim(root, 'sim-nh3-permutation', 560);
  /* g s_j = s_{perm[j]} for j = 1, 2, 3 (12.5.1) */
  const OPS = {
    E: { label: '$E$', tex: '\\kEop', perm: [1, 2, 3], rot: 0 },
    Cp: { label: '$C_3^+$', tex: 'C_3^+', perm: [2, 3, 1], rot: 1 },
    Cm: { label: '$C_3^-$', tex: 'C_3^-', perm: [3, 1, 2], rot: -1 },
    s: { label: '$\\sigma_v$', tex: '\\ksigmav', perm: [1, 3, 2], plane: 90 },
    sp: { label: "$\\sigma_v'$", tex: '\\ksigmavp', perm: [2, 1, 3], plane: 330 },
    spp: { label: "$\\sigma_v''$", tex: '\\ksigmavpp', perm: [3, 2, 1], plane: 210 },
  };
  const order = ['E', 'Cp', 'Cm', 's', 'sp', 'spp'];
  const K = F.choice(d.controls, { label: '\\text{operation}', aria: 'the symmetry operation of C3v', key: 'op', value: 'Cp',
    options: order.map((v) => ({ value: v, label: OPS[v].label })), onInput: () => cy.reset() });
  const T = 2.2, cy = F.cycle(() => T, 1.8);
  const hits = [];
  F.hover(d.stage, () => hits);
  const X0 = 330, Y0 = 300, R = 150, HOME = [90, 210, 330];
  const at = (deg, r = R) => [X0 + r * Math.cos(deg * Math.PI / 180), Y0 - r * Math.sin(deg * Math.PI / 180)];
  /* a shaded sphere: the element's colour, darker toward the rim away from a lamp at the upper left */
  function ball(ctx, x, y, r, sym) {
    const c = F.el(sym), g = ctx.createRadialGradient(x - r * 0.35, y - r * 0.35, r * 0.1, x, y, r);
    g.addColorStop(0, F.mixColor(c, PAL.panel, 0.35)); g.addColorStop(1, F.mixColor(c, PAL.ink, 0.35));
    ctx.save(); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, 2 * Math.PI); ctx.fill();
    ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 1.5; ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx } = F.begin(d.c);
    const op = OPS[K.value], k = F.ease.smooth(Math.min(1, cy.now() / T)), cs = C('symmetry-operation'), ch = C('character');
    hits.length = 0;
    /* the three mirror planes, seen edge on; the active one in the operation's colour */
    const names = { 90: '\\sigma_v', 330: "\\sigma_v'", 210: "\\sigma_v''" };
    for (const a of [90, 330, 210]) {
      const on = op.plane === a, [x1, y1] = at(a, 235), [x2, y2] = at(a + 180, 235);
      line(ctx, x1, y1, x2, y2, on ? cs : alpha(PAL.ink, 0.3), on ? 4 : 2, on ? null : [6, 8]);
      const [lx, ly] = at(a, 262);
      text(ctx, `$${names[a]}$`, lx, ly + 8, on ? cs : PAL.muted, { size: 24, align: 'center', tex: true });
      hits.push({ x: (x1 + X0) / 2, y: (y1 + Y0) / 2, r: 20, name: `the mirror plane ${names[a].replace('\\sigma', 'σ').replace(/''/, '″').replace(/'/, '′')}, seen edge on` });
    }
    /* the C3 axis, end on, with the sense of the turn */
    if (op.rot) {
      ctx.save(); ctx.strokeStyle = cs; ctx.lineWidth = 4; ctx.beginPath();
      const a0 = op.rot > 0 ? 20 : 160, a1 = op.rot > 0 ? 160 : 20, r = 62;
      ctx.arc(X0, Y0, r, -a0 * Math.PI / 180, -a1 * Math.PI / 180, op.rot > 0); ctx.stroke(); ctx.restore();
      const [ex, ey] = at(a1, 62), tx = -Math.sin(a1 * Math.PI / 180) * op.rot, ty = -Math.cos(a1 * Math.PI / 180) * op.rot;
      F.arrow(ctx, ex - tx * 14, ey - ty * 14, ex + tx * 4, ey + ty * 4, cs, 4);
    }
    /* home places */
    HOME.forEach((a, i) => { const [x, y] = at(a); ctx.save(); ctx.setLineDash([5, 7]); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(x, y, 44, 0, 2 * Math.PI); ctx.stroke(); ctx.restore(); });
    /* where hydrogen j is at time k */
    const pos = [1, 2, 3].map((j) => {
      const a0 = HOME[j - 1];
      if (op.rot) return at(a0 + op.rot * 120 * k);
      if (op.plane) { const a1 = HOME[op.perm[j - 1] - 1], p0 = at(a0), p1 = at(a1); return [p0[0] + (p1[0] - p0[0]) * k, p0[1] + (p1[1] - p0[1]) * k]; }
      return at(a0);
    });
    pos.forEach(([x, y]) => line(ctx, X0, Y0, x, y, alpha(PAL.ink, 0.45), 5));
    ball(ctx, X0, Y0, 46, 'N');
    text(ctx, 's_N', X0, Y0 + 8, PAL.ink, { size: 24, weight: 600, align: 'center' });
    hits.push({ x: X0, y: Y0, r: 46, name: 'nitrogen and its s orbital, s_N, on the C₃ axis: every operation leaves it in place' });
    pos.forEach(([x, y], i) => {
      ball(ctx, x, y, 34, 'H');
      text(ctx, `s_${i + 1}`, x, y + 8, PAL.ink, { size: 24, weight: 600, align: 'center' });
      hits.push({ x, y, r: 34, name: `hydrogen ${i + 1} and its s orbital, s${'₁₂₃'[i]}` });
    });
    /* the matrix of the row-vector form (12.5.2): column j holds a 1 in the row of g s_j */
    const full = [[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    op.perm.forEach((p, j) => { full[p][j + 1] = 1; });
    const MX = 830, MY = 170, cell = 82, heads = ['s_N', 's_1', 's_2', 's_3'], show = Math.max(0, Math.min(1, (k - 0.75) / 0.25));
    heads.forEach((h, i) => {
      text(ctx, h, MX + cell * i + cell / 2, MY - 20, PAL.muted, { size: 20, align: 'center' });
      text(ctx, h, MX - 34, MY + cell * i + cell / 2 + 7, PAL.muted, { size: 20, align: 'center' });
    });
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    for (const [x, s] of [[MX - 8, 1], [MX + 4 * cell + 8, -1]]) { ctx.beginPath(); ctx.moveTo(x + 14 * s, MY - 4); ctx.lineTo(x, MY - 4); ctx.lineTo(x, MY + 4 * cell + 4); ctx.lineTo(x + 14 * s, MY + 4 * cell + 4); ctx.stroke(); }
    ctx.restore();
    let chi = 0;
    for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
      const v = full[i][j], x = MX + cell * j + cell / 2, y = MY + cell * i + cell / 2;
      if (i === j) {
        ctx.save(); ctx.strokeStyle = alpha(ch, 0.85); ctx.lineWidth = 3; ctx.strokeRect(x - cell / 2 + 6, y - cell / 2 + 6, cell - 12, cell - 12); ctx.restore();
        chi += v;
      }
      const shown = v ? (j === 0 ? 1 : show) : 1;
      text(ctx, String(v), x, y + 9, alpha(v ? PAL.ink : PAL.muted, shown), { size: 28, weight: v ? 600 : 400, align: 'center' });
    }
    hits.push({ x: MX + 2 * cell, y: MY + 2 * cell, r: 2 * cell, name: 'the representative Γ(g): a 1 in column j sits in the row of the orbital that s_j is carried onto' });
    const tr = full.reduce((s, r, i) => s + r[i], 0);
    text(ctx, `trace = ${show > 0.5 || op.rot === 0 && !op.plane ? tr : '…'}`, MX + 2 * cell, MY + 4 * cell + 62, ch, { size: 26, weight: 600, align: 'center' });
    const stay = ['s_N'].concat([1, 2, 3].filter((j) => op.perm[j - 1] === j).map((j) => `s_${j}`));
    F.topline(ctx, `${op.label.replace(/\$/g, '') === 'E' ? '$E$ leaves every orbital in place' : `${op.label} leaves ${stay.length === 1 ? 'only $s_N$' : stay.map((s) => `$${s}$`).join(' and ')} in place`}, so $\\kchar = ${chi}$.`);
    const after = ['\\ksN'].concat(op.perm.map((p) => `s_${p}`)).join(', ');
    tex(d.readout, `(\\ksN, s_1, s_2, s_3)\\,\\kGamma(${op.tex}) = (${after}) \\\\ \\kchar(${op.tex}) = ${chi}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
