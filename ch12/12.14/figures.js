/* Figures for section 12.14 Symmetry Adapted Linear Combinations are the Sum over all Basis functions. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['12.14'] = function (root, F) {
const { tex, C, PAL, alpha, register, begin, line, arrow, dot, text, topline } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- Figures 12.14.1 + 12.14.2 + 12.14.3 + 12.14.4: the projection operator on water's stretches ----------
   Water in the yz plane, as Table 12.14.2 and the projection table put it: sigma_v(xz) stands square to the
   molecule and swaps the hydrogens, sigma_v'(yz) is the molecule's own plane and moves nothing, C2 turns the
   molecule half a turn about its vertical axis. Five panels, the four operations and the sum. Moving: each
   operation carries b1 to its image in turn (a turn seen face-on is a squeeze through zero width, a
   reflection a slide through the plane), the character then sets the sign of that image, and the last panel
   draws the sum as arrows on the two bonds (Figure 12.14.4), or nothing where it is zero. Each panel takes
   1.1 s, the sum 1 s, then a 1.4 s hold. The choice is the irreducible representation, opening on A1, the
   first row of Table 12.14.3. */
(function () {
  const d = sim('sim-projection', 560);
  const SPECIES = ['A1', 'A2', 'B1', 'B2'];
  const CHI = { A1: [1, 1, 1, 1], A2: [1, 1, -1, -1], B1: [1, -1, 1, -1], B2: [1, -1, -1, 1] };
  const TEXSP = { A1: 'A_1', A2: 'A_2', B1: 'B_1', B2: 'B_2' };
  const SP = { A1: 'A₁', A2: 'A₂', B1: 'B₁', B2: 'B₂' };
  const OPS = [
    { t: 'E', tx: 'E', img: 1, move: 'none', name: 'the identity E, which leaves b₁ where it is' },
    { t: 'C_2', tx: 'C_2', img: 2, move: 'turn', name: 'the twofold axis C₂, vertical through the oxygen' },
    { t: 'σ_v(xz)', tx: '\\sigma_v(xz)', img: 2, move: 'reflect', name: 'the plane σᵥ(xz), square to the molecule, which swaps the hydrogens' },
    { t: 'σ_v′(yz)', tx: "\\sigma_v'(yz)", img: 1, move: 'none', name: 'the plane σᵥ′(yz), the plane of the molecule itself' },
  ];
  const HEAD = {
    A1: 'Under $A_1$ every image keeps its sign, so the four terms add to $2b_1 + 2b_2$.',
    A2: 'A₂ gives both reflections a −1, and the four terms cancel to zero.',
    B1: 'B₁ gives C₂ and σᵥ′ a −1, and the four terms cancel: the stretches have no B₁ combination.',
    B2: 'B₂ gives every $b_2$ a −1, which leaves the antisymmetric stretch $2b_1 - 2b_2$.',
  };
  const STEP = 1.1, SUM = 1.0;
  const K = F.choice(d.controls, { label: '\\Gamma', key: 'species', options: SPECIES.map((s) => ({ value: s, label: `$${TEXSP[s]}$` })), value: 'A1', aria: 'the irreducible representation projected', onInput: () => cy.reset() });
  const cy = F.cycle(() => 4 * STEP + SUM, 1.4);
  const hits = [];
  F.hover(d.stage, () => hits);
  const clamp01 = (x) => Math.max(0, Math.min(1, x));
  const ease = (x) => { const t = clamp01(x); return t * t * (3 - 2 * t); };
  const PW = 250, GAP = 14, L0 = (1400 - (5 * PW + 4 * GAP)) / 2, TOP = 112, PH = 330;
  const signed = (v) => (v < 0 ? '-' : '+');
  /* one water molecule in a panel: oxygen at the top, the hydrogens below, x squeezed by sx */
  function water(ctx, cx, oy, sx, faint) {
    const O = [cx, oy], H1 = [cx - 82 * sx, oy + 104], H2 = [cx + 82 * sx, oy + 104];
    const a = faint ? 0.35 : 1;
    line(ctx, O[0], O[1], H1[0], H1[1], alpha(PAL.ink, 0.25 * a), 10);
    line(ctx, O[0], O[1], H2[0], H2[1], alpha(PAL.ink, 0.25 * a), 10);
    dot(ctx, H1[0], H1[1], alpha(F.el('H'), a), true, 16);
    dot(ctx, H2[0], H2[1], alpha(F.el('H'), a), true, 16);
    dot(ctx, O[0], O[1], alpha(F.el('O'), a), true, 24);
    return { O, H1, H2 };
  }
  /* the stretch along the bond from O toward H, shortened to stand clear of both atoms; sign -1 reverses it */
  function stretch(ctx, O, Hp, sign, color, w = 5) {
    const ux = Hp[0] - O[0], uy = Hp[1] - O[1], L = Math.hypot(ux, uy) || 1, nx = ux / L, ny = uy / L;
    const a = [O[0] + nx * 30, O[1] + ny * 30], b = [O[0] + nx * (L - 22), O[1] + ny * (L - 22)];
    if (Math.abs(L) < 40) return;
    if (sign > 0) arrow(ctx, a[0], a[1], b[0], b[1], color, w); else arrow(ctx, b[0], b[1], a[0], a[1], color, w);
  }
  function draw() {
    const { ctx } = begin(d.c);
    const sp = K.value, chi = CHI[sp], t = cy.now();
    topline(ctx, HEAD[sp]);
    hits.length = 0;
    OPS.forEach((op, j) => {
      const x0 = L0 + j * (PW + GAP), cx = x0 + PW / 2, oy = TOP + 92;
      const k = clamp01((t - j * STEP) / STEP), km = ease(k / 0.6), ks = ease((k - 0.6) / 0.3);
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.18); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.roundRect(x0, TOP, PW, PH, 8); ctx.stroke(); ctx.restore();
      text(ctx, op.t, cx, TOP + 32, C('symmetry-operation'), { size: 24, weight: 600, align: 'center' });
      /* the element */
      if (op.move === 'turn') line(ctx, cx, TOP + 50, cx, TOP + 238, alpha(C('symmetry-operation'), 0.8), 3, [10, 8]);
      if (op.move === 'reflect') line(ctx, cx, TOP + 50, cx, TOP + 238, alpha(C('symmetry-operation'), 0.8), 4);
      if (op.t.startsWith('σ_v′')) { ctx.save(); ctx.fillStyle = alpha(C('symmetry-operation'), 0.08); ctx.fillRect(x0 + 18, TOP + 50, PW - 36, 188); ctx.restore(); }
      /* the molecule carried through the operation: a turn squeezes x by cos, a reflection slides it through zero */
      const sx = op.move === 'turn' ? Math.cos(Math.PI * km) : op.move === 'reflect' ? 1 - 2 * km : 1;
      if (sx !== 1) water(ctx, cx, oy, 1, true);
      const m = water(ctx, cx, oy, sx, false);
      const after = k >= 0.6;
      const sign = ks > 0.5 ? chi[j] : 1;
      const col = after ? PAL.ink : alpha(PAL.ink, 0.85);
      if (Math.abs(sx) > 0.12) stretch(ctx, m.O, m.H1, sign, col, 5);
      /* the name the vector wears: b1 before, its image after */
      const lab = after ? `b_${op.img}` : 'b_1';
      const lp = sx >= 0 ? [m.O[0] - 64 * Math.max(0.3, Math.abs(sx)), m.O[1] + 34] : [m.O[0] + 64 * Math.max(0.3, Math.abs(sx)), m.O[1] + 34];
      text(ctx, lab, lp[0], lp[1], PAL.ink, { size: 22, weight: 600, align: 'center' });
      /* the character and the weighted term */
      const ty = TOP + 270;
      if (ks > 0) {
        ctx.save(); ctx.globalAlpha = ks;
        text(ctx, `χ = ${chi[j] < 0 ? '−1' : '1'}`, cx, ty, C('character'), { size: 22, weight: 600, align: 'center' });
        text(ctx, `${chi[j] < 0 ? '−' : '+'}b_${op.img}`, cx, ty + 36, PAL.ink, { size: 24, weight: 600, align: 'center' });
        ctx.restore();
      } else text(ctx, k > 0 ? 'T_j b_1' : '', cx, ty, PAL.muted, { size: 20, align: 'center' });
      hits.push({ x: cx, y: TOP + 32, r: 30, name: op.name });
    });
    /* the sum panel: the SALC drawn on the two bonds, coefficients scaled so 2 is a full stretch */
    {
      const x0 = L0 + 4 * (PW + GAP), cx = x0 + PW / 2, oy = TOP + 92, ks = ease((t - 4 * STEP) / SUM);
      ctx.save(); ctx.strokeStyle = alpha(C('wavefunction'), 0.5); ctx.lineWidth = 2; ctx.beginPath(); ctx.roundRect(x0, TOP, PW, PH, 8); ctx.stroke(); ctx.restore();
      text(ctx, 'sum', cx, TOP + 32, C('wavefunction'), { size: 24, weight: 600, align: 'center' });
      const m = water(ctx, cx, oy, 1, ks <= 0);
      const full = [0, 0]; OPS.forEach((op, j) => { full[op.img - 1] += chi[j]; });
      if (ks > 0) {
        ctx.save(); ctx.globalAlpha = ks;
        if (full[0]) stretch(ctx, m.O, m.H1, Math.sign(full[0]), C('wavefunction'), 6);
        if (full[1]) stretch(ctx, m.O, m.H2, Math.sign(full[1]), C('wavefunction'), 6);
        const s = !full[0] && !full[1] ? '0' : `${full[0]}b_1 ${full[1] < 0 ? '−' : '+'} ${Math.abs(full[1])}b_2`;
        text(ctx, s, cx, TOP + 288, C('wavefunction'), { size: 24, weight: 600, align: 'center' });
        ctx.restore();
      }
      hits.push({ x: cx, y: oy + 50, r: 90, name: full[0] || full[1] ? `the ${SP[sp]} SALC: ${full[0]}b₁ ${full[1] < 0 ? '−' : '+'} ${Math.abs(full[1])}b₂ before normalizing` : `the ${SP[sp]} projection: zero, so the stretches have no ${SP[sp]} combination` });
    }
    /* the sum so far, under the panels */
    {
      const reached = OPS.map((op, j) => ((t - j * STEP) / STEP >= 0.9 ? `${chi[j] < 0 ? '−' : j ? '+' : ''} b_${op.img}` : null)).filter(Boolean);
      text(ctx, reached.length ? `running sum:  ${reached.join(' ')}` : 'running sum:', L0 + 8, TOP + PH + 52, PAL.muted, { size: 20 });
    }
    const sum = CHI[sp].reduce((acc, c, j) => { acc[OPS[j].img - 1] += c; return acc; }, [0, 0]);
    const res = !sum[0] && !sum[1] ? '0' : `${sum[0]}b_1 ${sum[1] < 0 ? '-' : '+'} ${Math.abs(sum[1])}b_2`;
    const norm = !sum[0] && !sum[1] ? `\\phi(${TEXSP[sp]}) = 0` : `\\phi(${TEXSP[sp]}) = \\tfrac{1}{\\sqrt{2}}(b_1 ${sum[1] < 0 ? '-' : '+'} b_2)`;
    tex(d.readout, `\\phi(${TEXSP[sp]}) = \\sum_j \\kchar(j)\\,T_j b_1 = ${CHI[sp].map((c, j) => `${j ? signed(c) : (c < 0 ? '-' : '')}${OPS[j].img === 1 ? 'b_1' : 'b_2'}`).join(' ')} = ${res} \\\\ \\small ${norm}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
