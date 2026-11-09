/* Figures for section 25.4 Osmotic Pressure can Determine Molecular Masses. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['25.4'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, arrow, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

const R = 8.314, T = 298.15;          /* J/(mol K); K, the figure's own temperature */
const RHOG = 9.78;                    /* water at 298 K: rho g in kPa per metre */
const piOf = (c) => c * R * T / 1000; /* c in mol/m^3 (= mmol/L), Pi in kPa */

/* ---------- Figure 25.4.1: the osmotic cell ----------
   One U-tube in time, the book's three panels as its states. The left arm holds pure water, the right a
   glucose solution; the membrane is at the bottom of the U. Each run starts with the levels equal (panel a).
   The net drive on the water is Pi - P_ext - rho g h: water crosses toward the solution while it is
   positive, the right level climbs and the left falls by the same amount, and h relaxes to
   h_eq = (Pi - P_ext) / (rho g) (panel b). With the piston at P_ext = Pi (the dashed circle) the levels
   stay equal (panel c); above it h_eq < 0 and water leaves the solution (reverse osmosis).
   Scale fixed from the slider extremes: |h_eq| reaches 117 cm (c = 0.2 mmol/L, P_ext = 12 kPa), so 2.8 px
   per cm keeps both levels inside the arms. The flow arrows are kinematic: their lengths are the two
   rates across the membrane, equal at equilibrium. */
(function () {
  const d = sim('sim-osmosis', 640);
  const RUN = 5;
  const cy = F.cycle(() => RUN, 1.2);
  const cc = ctl(d.controls, { label: 'c', cls: '', min: 0.2, max: 4, step: 0.05, value: 1, unit: 'mmol/L', dec: 2,
    detents: [1, 2, 3], onInput: () => cy.reset() });
  const P = ctl(d.controls, { label: 'P_{\\text{ext}}', cls: 'pressure', key: 'pext', min: 0, max: 12, step: 0.05, value: 0, unit: 'kPa', dec: 2,
    specials: [{ at: () => piOf(cc.v), label: 'the osmotic pressure' }], onInput: () => cy.reset() });
  const hits = [];
  F.hover(d.stage, () => hits);
  let clock = 0;
  const frac = (x) => x - Math.floor(x);
  /* the U-tube: arms centred at xL and xR, 90 wide; the channel joins them between y 470 and 560 */
  const xL = 430, xR = 790, AW = 45, TOP = 120, IN = 470, BOT = 560, Y0 = 300, S = 2.8, XM = (xL + xR) / 2;
  function draw() {
    const { ctx, W } = begin(d.c);
    const c = cc.v, pext = P.v, Pi = piOf(c), heq = (Pi - pext) / RHOG * 100;   /* cm */
    const k = Math.min(cy.now(), RUN) / RUN, g = (1 - Math.exp(-3 * k)) / (1 - Math.exp(-3));
    const h = heq * g, drive = Pi - pext - RHOG * h / 100;                       /* kPa */
    const yR = Y0 - h / 2 * S, yL = Y0 + h / 2 * S;
    const bal = Math.abs(Pi - pext) < 0.02;
    topline(ctx, bal ? `With $P_{\\text{ext}} = \\kPi = ${fmt(Pi, 2)}$ kPa the two flows balance and the levels stay equal.`
      : pext < Pi ? `Water crosses into the solution until its column stands $h = ${fmt(heq, 1)}$ cm higher.`
      : `A push above $\\kPi = ${fmt(Pi, 2)}$ kPa drives water out of the solution: reverse osmosis.`);
    /* the liquid: pure water left of the membrane, the solution right of it */
    ctx.save();
    ctx.fillStyle = alpha(PAL.muted, 0.22);
    ctx.fillRect(xL - AW, yL, 2 * AW, BOT - yL); ctx.fillRect(xL + AW, IN, XM - xL - AW, BOT - IN);
    ctx.fillStyle = alpha(F.cat(0), 0.14);
    ctx.fillRect(xR - AW, yR, 2 * AW, BOT - yR); ctx.fillRect(XM, IN, xR - AW - XM, BOT - IN);
    ctx.restore();
    /* the tube's walls */
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.beginPath();
    ctx.moveTo(xL - AW, TOP); ctx.lineTo(xL - AW, BOT); ctx.lineTo(xR + AW, BOT); ctx.lineTo(xR + AW, TOP);
    ctx.moveTo(xL + AW, TOP); ctx.lineTo(xL + AW, IN); ctx.lineTo(xR - AW, IN); ctx.lineTo(xR - AW, TOP);
    ctx.stroke(); ctx.restore();
    /* the membrane */
    line(ctx, XM, IN, XM, BOT, PAL.ink, 4, [6, 6]);
    /* glucose, only on the solution side, more of it at a higher concentration */
    const n = Math.round(6 + 6 * c), gl = [];
    for (let i = 0; i < n; i++) {
      const u = frac(i * 0.618 + 0.11), v = frac(i * 0.382 + 0.27), wob = 3 * Math.sin(clock * 2 + i);
      let x, y;
      if (i % 3 === 0) { x = XM + 30 + u * (xR - AW - XM - 40); y = IN + 18 + v * (BOT - IN - 36); }
      else { x = xR - AW + 16 + u * (2 * AW - 32); y = yR + 18 + v * (BOT - yR - 36); }
      dot(ctx, x + wob, y - wob, F.cat(0), true, 8); gl.push([x, y]);
    }
    /* water crossing the membrane both ways; the share going right follows the two rates */
    const fwd = 1 + Math.max(drive, 0) / 2, bwd = 1 + Math.max(-drive, 0) / 2, p = fwd / (fwd + bwd);
    for (let i = 0; i < 16; i++) {
      const dir = frac(i * 0.754 + 0.13) < p ? 1 : -1, y = IN + 14 + frac(i * 0.437) * (BOT - IN - 28);
      const x = XM - 100 + frac(i * 0.29 + dir * clock * 0.35) * 200;
      dot(ctx, x, y, alpha(PAL.ink, 0.45), true, 5);
    }
    /* the two rates across the membrane (kinematic arrows) */
    const len = (r) => Math.min(170, 46 * r);
    arrow(ctx, XM - len(fwd) / 2, IN - 28, XM + len(fwd) / 2, IN - 28, alpha(PAL.ink, 0.8), 4);
    arrow(ctx, XM + len(bwd) / 2, IN - 58, XM - len(bwd) / 2, IN - 58, alpha(PAL.ink, 0.8), 4);
    /* the piston and its push (a force: symbolic) */
    if (pext > 0.01) {
      ctx.save(); ctx.fillStyle = PAL.muted; ctx.fillRect(xR - AW + 3, yR - 22, 2 * AW - 6, 22); ctx.restore();
      const a = 30 + pext / 12 * 80, y1 = Math.max(TOP - 30, yR - 30 - a);
      arrow(ctx, xR, y1, xR, yR - 28, C('pressure'), 5);
      text(ctx, `P_{ext} = ${fmt(pext, 2)} kPa`, xR + AW + 16, y1 + 12, C('pressure'), { size: 20, weight: 600 });
    }
    /* the head */
    if (Math.abs(h) > 1.5) {
      const xb = xR + AW + 70;
      line(ctx, xL + AW, yL, xb + 12, yL, alpha(PAL.ink, 0.4), 2, [4, 8]);
      F.vbracket(ctx, xb, Math.min(yL, yR), Math.max(yL, yR), C('pressure'), `h = ${fmt(Math.abs(h), 1)} cm`, 1);
    }
    text(ctx, 'pure water', xL, BOT + 36, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'glucose solution', xR, BOT + 36, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'membrane', XM, BOT + 36, PAL.muted, { size: 18, align: 'center' });
    hits.length = 0;
    hits.push({ x: XM, y: (IN + BOT) / 2, r: 30, name: 'the semipermeable membrane: water passes, glucose does not' });
    gl.forEach(([x, y]) => hits.push({ x, y, r: 10, name: 'a glucose molecule' }));
    hits.push({ x: XM, y: IN - 28, r: 40, name: 'water flowing into the solution' });
    hits.push({ x: XM, y: IN - 58, r: 40, name: 'water flowing out of the solution' });
    tex(d.readout, `\\kPi = \\kR\\kT c \\\\ \\kPi = (8.314\\ \\text{J/(mol K)})(298.15\\ \\text{K})(${fmt(c, 2)}\\ \\text{mol/m}^3) = ${fmt(Pi, 2)}\\ \\text{kPa} \\\\ h_{\\text{eq}} = \\dfrac{\\kPi - P_{\\text{ext}}}{\\rho g} = \\dfrac{${fmt(Pi, 2)}\\ \\text{kPa} - ${fmt(pext, 2)}\\ \\text{kPa}}{9.78\\ \\text{kPa/m}} = ${fmt(heq, 1)}\\ \\text{cm}`);
  }
  register(d.fig, { update: (dt) => { clock += dt; cy.step(dt, () => 1); }, draw });
})();
};
