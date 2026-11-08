/* Figures for section 9.4 Chemical Bond Stability. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.4'] = function (root, F) {
const { tex, C, PAL, alpha, cycle, register, begin, line, dot, text, topline, axes, plot, fmt } = F;
const A0_PM = 52.918, HARTREE_EV = 27.2114;

/* ---------- Figure 9.4.2 + 9.4.3: the energy curves traced as the protons approach ----------
   Atomic units (R in a₀, energies in hartrees). S(R) is (9.3.9); J(R) = −(1/R)[1 − (1 + R)e^(−2R)] and
   K(R) = −(1 + R)e^(−R) are the closed forms of the two integrals for 1s orbitals (Pauling 1928; McQuarrie and
   Simon §9.4), which the book plots in Figure 9.4.2 but does not print. ΔE± = 1/R + (J ± K)/(1 ± S), (9.4.11).
   Moving: the transport is the approach, R from 6 a₀ to 0.8 a₀ over 7 s; each curve is traced from 6 a₀ down to
   the current R. Left: 1/R, J, K and S (S has no units and shares the axis, 0 to 1). Right: ΔE₊ and ΔE₋; the
   minimum of ΔE₊, 2.49 a₀ = 132 pm and −0.0648 hartree = −1.76 eV, is marked once the approach has passed it.
   Fixed ranges: left −1.5 to 1.5 hartree (1/R reaches 1.25 at 0.8 a₀); right −0.1 to 0.5 hartree, ΔE₋ cut at the top.
   Above: the two protons on the axis with ψ² of the chosen combination between them. */
(function () {
  const d = F.sim(root, 'sim-energy', 760);
  const R0 = 6, R1 = 0.8, LOOP = 7;
  const cy = cycle(() => LOOP, 1.4);
  const MO = F.choice(d.controls, { label: '\\text{orbital}', key: 'mo', options: [{ value: '+', label: 'bonding $\\kpsip$' }, { value: '-', label: 'antibonding $\\kpsim$' }], value: '+', aria: 'which molecular orbital the electron is in' });
  const S = (R) => Math.exp(-R) * (1 + R + R * R / 3);
  const J = (R) => -(1 / R) * (1 - (1 + R) * Math.exp(-2 * R));
  const K = (R) => -(1 + R) * Math.exp(-R);
  const dE = (R, sg) => 1 / R + (J(R) + sg * K(R)) / (1 + sg * S(R));
  const RMIN = 2.4928, EMIN = dE(RMIN, 1);
  const N1 = 1 / Math.sqrt(Math.PI);
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const k = Math.min(1, cy.now() / LOOP), R = R0 + (R1 - R0) * k;
    const sg = MO.value === '+' ? 1 : -1;
    const ce = C('energy'), cl = C('length'), cw = C('wavefunction'), cp = C('probability-density');
    /* the scene: x −6 to 6 a₀ on 150..1320 */
    const sx = (1320 - 150) / 12, X = (x) => 735 + x * sx, YA = 175;
    line(ctx, 150, YA, 1320, YA, alpha(PAL.ink, 0.3), 2);
    const Cn = 1 / Math.sqrt(2 * (1 + sg * S(R)));
    const dens = (x) => { const v = Cn * N1 * (Math.exp(-Math.abs(x + R / 2)) + sg * Math.exp(-Math.abs(x - R / 2))); return v * v; };
    ctx.save(); ctx.fillStyle = alpha(cp, 0.45); ctx.strokeStyle = cp; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(X(-6), YA);
    for (let i = 0; i <= 300; i++) { const x = -6 + 12 * i / 300; ctx.lineTo(X(x), YA - 260 * Math.min(0.3, dens(x))); }
    ctx.lineTo(X(6), YA); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    const xa = X(-R / 2), xb = X(R / 2);
    dot(ctx, xa, YA, F.el('p+'), true, 11); dot(ctx, xb, YA, F.el('p+'), true, 11);
    text(ctx, 'A', xa, YA + 30, PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'B', xb, YA + 30, PAL.ink, { size: 20, weight: 600, align: 'center' });
    hits.push({ x: xa, y: YA, r: 14, name: 'proton A' }, { x: xb, y: YA, r: 14, name: 'proton B' });
    hits.push({ x: X(0), y: YA - 30, r: 20, name: `ψ² of ${sg > 0 ? 'the bonding' : 'the antibonding'} orbital along the axis; at the midpoint ${fmt(dens(0), 4)}` });
    /* left: the parts */
    const L = { l: 120, r: 660, t: 290, b: 690 };
    const ax = axes(ctx, L, [0, 6], [-1.5, 1.5], { nx: 6, ny: 6, xl: 'R (a₀)', yl: 'hartree; S has no unit', xc: cl, yc: ce, fx: (v) => fmt(v, 0) });
    line(ctx, L.l, ax.Y(0), L.r, ax.Y(0), alpha(PAL.ink, 0.3), 2);
    const tr = [Math.max(R, 0.8), 6];
    plot(ctx, ax, (r) => 1 / r, ce, { w: 3, x: tr });
    plot(ctx, ax, J, ce, { w: 3, dash: [10, 10], x: tr });
    plot(ctx, ax, K, ce, { w: 3, dash: [4, 8], x: tr });
    plot(ctx, ax, S, PAL.ink, { w: 3, x: tr });
    [[1 / R, ce], [J(R), ce], [K(R), ce], [S(R), PAL.ink]].forEach(([v, c]) => { if (v <= 1.5) dot(ctx, ax.X(R), ax.Y(v), c, true, 7); });
    F.legend(ctx, ax, [{ s: 'e²/4πε₀R', color: ce, w: 3 }, { s: 'J', color: ce, w: 3, dash: [10, 10] }, { s: 'K', color: ce, w: 3, dash: [4, 8] }, { s: 'S', color: PAL.ink, w: 3 }], { corner: 'tr' });
    hits.push({ x: ax.X(R), y: ax.Y(J(R)), r: 12, name: `J = ${fmt(J(R), 3)} hartree` }, { x: ax.X(R), y: ax.Y(K(R)), r: 12, name: `K = ${fmt(K(R), 3)} hartree` },
      { x: ax.X(R), y: ax.Y(S(R)), r: 12, name: `S = ${fmt(S(R), 3)}` }, { x: ax.X(R), y: ax.Y(Math.min(1.3, 1 / R)), r: 12, name: `the protons' repulsion, ${fmt(1 / R, 3)} hartree` });
    /* right: the two energies */
    const Rb = { l: 790, r: 1320, t: 290, b: 690 };
    const bx = axes(ctx, Rb, [0, 6], [-0.1, 0.5], { nx: 6, ny: 6, xl: 'R (a₀)', yl: 'ΔE (hartree)', xc: cl, yc: ce, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 1) });
    line(ctx, Rb.l, bx.Y(0), Rb.r, bx.Y(0), alpha(PAL.ink, 0.35), 2);
    plot(ctx, bx, (r) => dE(r, 1), sg > 0 ? ce : alpha(ce, 0.45), { w: sg > 0 ? 5 : 3, x: tr });
    plot(ctx, bx, (r) => dE(r, -1), sg < 0 ? ce : alpha(ce, 0.45), { w: sg < 0 ? 5 : 3, dash: [10, 10], x: tr });
    const vp = dE(R, 1), vm = dE(R, -1);
    if (vp <= 0.5) dot(ctx, bx.X(R), bx.Y(vp), ce, sg > 0, 8);
    if (vm <= 0.5) dot(ctx, bx.X(R), bx.Y(vm), ce, sg < 0, 8);
    if (R <= RMIN) {
      dot(ctx, bx.X(RMIN), bx.Y(EMIN), PAL.ink, false, 7);
      F.label(ctx, '132 pm, −1.76 eV', bx.X(RMIN) + 8, bx.Y(EMIN) + 30, { side: 'right', size: 18, color: ce });
      hits.push({ x: bx.X(RMIN), y: bx.Y(EMIN), r: 14, name: 'the bottom of the bonding well: R = 2.49 a₀ = 132 pm, ΔE₊ = −0.0648 hartree = −1.76 eV' });
    }
    F.legend(ctx, bx, [{ s: 'ΔE₊, bonding', color: ce, w: 5 }, { s: 'ΔE₋, antibonding', color: ce, w: 3, dash: [10, 10] }], { corner: 'tr' });
    hits.push({ x: bx.X(R), y: bx.Y(Math.min(0.5, vp)), r: 12, name: `ΔE₊ = ${fmt(vp, 3)} hartree` }, { x: bx.X(R), y: bx.Y(Math.min(0.5, vm)), r: 12, name: `ΔE₋ = ${fmt(vm, 3)} hartree` });
    const v = sg > 0 ? vp : vm;
    topline(ctx, `At $\\kR = ${fmt(R * A0_PM, 0)}$ pm the electron in $${sg > 0 ? '\\kpsip' : '\\kpsim'}$ gives $\\Delta E_{${sg > 0 ? '+' : '-'}} = ${fmt(v * HARTREE_EV, 2)}$ eV${sg > 0 && v < -0.005 ? ': the molecule holds together' : v > 0.005 ? ': the molecule flies apart' : ''}.`);
    const s3 = +S(R).toFixed(3), j3 = +J(R).toFixed(3), k3 = +K(R).toFixed(3), q3 = +(1 / R).toFixed(3);
    const num = +(j3 + sg * k3).toFixed(3), den = +(1 + sg * s3).toFixed(3), res = q3 + num / den;
    tex(d.readout, `\\kdEpm = \\dfrac{\\ke^2}{4\\pi\\epsilon_0\\kR} + \\dfrac{\\kJint \\pm \\kKint}{1 \\pm S} \\\\ \\Delta E_{${sg > 0 ? '+' : '-'}} = ${fmt(q3, 3)} + \\dfrac{${fmt(j3, 3)} ${sg > 0 ? '+' : '-'} (${fmt(k3, 3)})}{1 ${sg > 0 ? '+' : '-'} ${fmt(s3, 3)}} = ${fmt(res, 3)}\\ \\text{hartree}`, false, { values: false });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
