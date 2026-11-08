/* Figures for section 13.2 Rotations Accompany Vibrational Transitions. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['13.2'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, topline, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* HCl: the band origin of Table 13.5.1 and the rotational constant 13.4 quotes, both in cm^-1;
   kT/hc in cm^-1 per kelvin */
const NU0 = 2885.9, KT_HC = 0.69504;

/* =====================================================================
   FIGURE 13.2.1 + 13.2.3: the rovibrational band built from its ladders.
   The book draws the levels with their transitions (13.2.1 and the first
   13.2.3) and the ideal spectrum (the second 13.2.3) separately; here the
   two J ladders stand over the spectrum and every arrow stands at the
   wavenumber of the line it makes. Top: the v = 0 and v = 1 ladders,
   J = 0 to 7, each in units of B̃ (J(J + 1) up to 56) with the vibrational
   gap between them cut short. Bottom: wavenumber 2600 to 3200 cm^-1, fixed;
   line heights are N_J/N_0 = (2J + 1) exp(-hcB̃J(J + 1)/kT) of the lower
   level over the largest. Moving: play fires the lines in turn, R(0),
   P(1), R(1), P(2), ..., each arrow (symbolic, a transition) dropping its
   line; at rest the whole band shows. Sliders T (100 to 1000 K, detent
   298 K) and B̃ (5 to 15 cm^-1, detent HCl's 10.4); a choice puts in the
   Q branch, ΔJ = 0, as a dotted line at the band origin (allowed in NO).
   Opens on HCl at 298 K.
===================================================================== */
(function () {
  const d = sim('sim-rovib', 860);
  const T = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: 100, max: 1000, step: 1, value: 298, unit: 'K', dec: 0, detents: [298], snap: true, aria: 'the temperature', onInput: () => cy.reset() });
  const B = ctl(d.controls, { label: '\\kBt', cls: 'energy', min: 5, max: 15, step: 0.1, value: 10.4, unit: 'cm⁻¹', dec: 1, detents: [{ v: 10.4, label: 'HCl' }], snap: true, aria: 'the rotational constant in wavenumbers', onInput: () => cy.reset() });
  const Q = F.choice(d.controls, { label: '\\text{Q branch}', options: [{ value: 'no', label: 'forbidden (HCl)' }, { value: 'yes', label: 'allowed (NO)' }], value: 'no', aria: 'whether the Q branch is allowed', onInput: () => cy.reset() });
  const STEP = 0.24, LO = 2600, HI = 3200, JTOP = 7;
  /* the lines on the axis, in firing order */
  const lines = () => {
    const b = B.v, out = [];
    for (let j = 0; j < 40; j++) {
      const r = NU0 + 2 * b * (j + 1), p = NU0 - 2 * b * (j + 1);
      if (r <= HI) out.push({ br: 'R', J: j, nu: r, up: j + 1 });
      if (p >= LO) out.push({ br: 'P', J: j + 1, nu: p, up: j });
      if (r > HI && p < LO) break;
    }
    if (Q.value === 'yes') out.push({ br: 'Q', J: null, nu: NU0 });
    return out;
  };
  const cy = F.cycle(() => lines().length * STEP + 0.4, 1.6);
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const t = T.v, b = B.v, kt = KT_HC * t, all = lines();
    const pop = (j) => (2 * j + 1) * Math.exp(-b * j * (j + 1) / kt);
    let pmax = 0; for (let j = 0; j < 60; j++) pmax = Math.max(pmax, pop(j));
    const jmax = Math.sqrt(kt / (2 * b)) - 0.5, jbest = Math.max(0, Math.round(jmax));
    const now = cy.now(), done = Number.isFinite(now) ? Math.floor(now / STEP) : all.length;
    const cur = done < all.length ? all[done] : null;
    const cw = C('wavenumber'), ce = C('energy');
    /* the spectrum */
    const sp = { l: 140, r: 1300, t: 640, b: 770 };
    const ax = F.axes(ctx, sp, [LO, HI], [0, 1], { nx: 6, ny: 0, xl: 'wavenumber ν̃ (cm⁻¹)', yl: 'intensity', xc: cw, fx: (v) => fmt(v, 0) });
    /* the ladders, in units of B̃, the vibrational gap cut */
    const LY = (j) => 570 - j * (j + 1) / 56 * 170, UY = (j) => 330 - j * (j + 1) / 56 * 170;
    for (let j = 0; j <= JTOP; j++) {
      line(ctx, sp.l, LY(j), sp.r, LY(j), alpha(ce, j ? 0.45 : 0.75), 2);
      line(ctx, sp.l, UY(j), sp.r, UY(j), alpha(ce, j ? 0.45 : 0.75), 2);
    }
    [0, 4, 7].forEach((j) => {
      text(ctx, `J = ${j}`, sp.l - 12, LY(j), ce, { size: 17, align: 'right' });
      text(ctx, `J = ${j}`, sp.l - 12, UY(j), ce, { size: 17, align: 'right' });
    });
    text(ctx, 'v = 0', sp.r + 10, LY(0) - 4, PAL.ink, { size: 20, weight: 600 });
    text(ctx, 'v = 1', sp.r + 10, UY(0) - 4, PAL.ink, { size: 20, weight: 600 });
    /* the cut in the vibrational gap */
    const zig = (y) => { ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(sp.l - 70, y + 6); ctx.lineTo(sp.l - 55, y - 6); ctx.lineTo(sp.l - 40, y + 6); ctx.lineTo(sp.l - 25, y - 6); ctx.stroke(); ctx.restore(); };
    zig((LY(JTOP) + UY(0)) / 2 - 2);
    hits.push({ x: sp.l - 48, y: (LY(JTOP) + UY(0)) / 2, r: 18, name: `the vibrational gap, ${fmt(NU0, 1)} cm⁻¹, cut short` });
    /* lines and their arrows */
    const H = (j) => pop(j) / pmax;
    all.forEach((L, i) => {
      if (i > done) return;
      const x = ax.X(L.nu), live = L === cur;
      if (L.br === 'Q') {
        for (let j = 1; j <= JTOP; j++) arrow(ctx, x, LY(j), x, UY(j), alpha(PAL.ink, live ? 0.9 : 0.35), live ? 3 : 2);
        line(ctx, x, sp.b, x, sp.t - 4, cw, live ? 5 : 3, [4, 8]);
        text(ctx, 'Q', x, sp.t - 20, cw, { size: 20, weight: 600, align: 'center' });
        hits.push({ x, y: sp.t + 20, r: 12, name: `the Q branch, ΔJ = 0: every line at the band origin, ${fmt(NU0, 1)} cm⁻¹` });
        return;
      }
      if (L.J <= JTOP && L.up <= JTOP) arrow(ctx, x, LY(L.J), x, UY(L.up), alpha(PAL.ink, live ? 0.95 : 0.35), live ? 4 : 2);
      const h = H(L.J), y = ax.Y(h * 0.94);
      line(ctx, x, sp.b, x, y, live ? PAL.ink : cw, live ? 6 : 5);
      hits.push({ x, y: (y + sp.b) / 2, r: 10, name: `${L.br}(${L.J}): J = ${L.J} → ${L.up}, ${fmt(L.nu, 1)} cm⁻¹, N${L.J}/N0 = ${fmt(pop(L.J), 2)}` });
    });
    /* the branches and the zero gap */
    const xr = ax.X(NU0 + 2 * b * 5), xp = ax.X(NU0 - 2 * b * 5);
    text(ctx, 'R branch', Math.min(xr, sp.r - 70), sp.t - 22, cw, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'P branch', Math.max(xp, sp.l + 70), sp.t - 22, cw, { size: 20, weight: 600, align: 'center' });
    if (done >= 1) F.hbracket(ctx, ax.X(NU0 - 2 * b), ax.X(NU0 + 2 * b), sp.t - 6, PAL.ink, '4B̃');
    hits.push({ x: ax.X(NU0), y: sp.b - 10, r: 14, name: `the zero gap between P(1) and R(0), 4B̃ = ${fmt(4 * b, 1)} cm⁻¹` });
    /* the headline and the readout follow the line just fired, or the strongest R line at rest */
    const L = cur ?? all.find((x) => x.br === 'R' && x.J === jbest) ?? all[0];
    if (cur) {
      topline(ctx, L.br === 'Q'
        ? `The Q lines, $\\Delta J = 0$, all fall at the band origin, ${fmt(NU0, 1)} cm⁻¹.`
        : `${L.br}(${L.J}) at ${fmt(L.nu, 1)} cm⁻¹ starts from $J = ${L.J}$, where $N_{${L.J}}/N_0 = ${fmt(pop(L.J), 2)}$.`);
    } else {
      topline(ctx, `Lines stand $2\\kBt = ${fmt(2 * b, 1)}$ cm⁻¹ apart, with $4\\kBt = ${fmt(4 * b, 1)}$ cm⁻¹ across the zero gap; the strongest start from $J = ${jbest}$.`);
    }
    const j = L.J ?? 0, e = b * j * (j + 1);
    const lineTex = L.br === 'R' ? `\\knut = \\dfrac{\\knuo}{c} + 2\\kBt(J+1) \\\\ \\knut = ${fmt(NU0, 1)} + 2(${fmt(b, 1)})(${j} + 1) = ${fmt(L.nu, 1)}\\ \\text{cm}^{-1}`
      : L.br === 'P' ? `\\knut = \\dfrac{\\knuo}{c} - 2\\kBt J \\\\ \\knut = ${fmt(NU0, 1)} - 2(${fmt(b, 1)})(${j}) = ${fmt(L.nu, 1)}\\ \\text{cm}^{-1}`
        : `\\knut = \\dfrac{\\knuo}{c} = ${fmt(NU0, 1)}\\ \\text{cm}^{-1}`;
    const popTex = L.br === 'Q' ? '' : ` \\\\ \\dfrac{N_{${j}}}{N_0} = (2J+1)e^{-hc\\kBt J(J+1)/k\\kT} = ${2 * j + 1}\\,e^{-${fmt(e, 1)}/${fmt(kt, 1)}} = ${fmt(pop(j), 2)}`;
    tex(d.readout, `${lineTex}${popTex} \\\\ J_{max} = \\left(\\dfrac{k\\kT}{2h\\kB}\\right)^{1/2} - \\dfrac{1}{2} = ${fmt(jmax, 2)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
