/* Figures for section 4.4 The Time-Dependent Schrödinger Equation. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.4'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, cycle, register, begin, line, dot, text, topline, axes, plot, shade, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* =====================================================================
   SIM: a mixture and an energy measurement. Moving: the density of
   a psi_1 + b psi_2 changes in time, and a measurement is an event.
   An electron in a 1.00 nm box (E_1 = 0.376 eV, E_2 = 4 E_1). One loop is
   three runs; each run prepares Psi(x,0) = a psi_1 + b psi_2 (a, b real),
   lets it slosh for 1.75 periods h/(E_2 - E_1), measures the energy, and
   holds the collapsed state for 0.75 period. The outcomes are fixed draws
   u = 0.31, 0.74, 0.46 compared with |a|^2 (E_1 when u < |a|^2), so every
   time of the loop has one state and |a|^2 = 1/2 gives E_1, E_2, E_1.
   Units: x in L, psi in L^(-1/2), the density in 1/L (0 to 4; its
   largest value, for |a|^2 near 0.6, is about 3.1), t in fs.
===================================================================== */
(function () {
  const d = sim('sim-measure', 720);
  const A2 = ctl(d.controls, { label: '|a|^2', cls: '', min: 0, max: 1, step: 0.01, value: 0.5, unit: '', dec: 2,
    specials: [{ at: 0, label: 'ψ₂ alone' }, { at: 0.5, label: 'the equal mixture of Equation 4.4.8' }, { at: 1, label: 'ψ₁ alone' }],
    onInput: () => cy.reset() });
  const E1 = 0.3760, E2 = 4 * E1, HBAR = 0.6582120, HEV = 4.135668;   /* eV, eV fs, eV fs */
  const TQ = HEV / (E2 - E1), RUN = 2.5 * TQ, TM = 1.75 * TQ, U = [0.31, 0.74, 0.46], TOTAL = 3 * RUN;
  const cy = cycle(() => TOTAL, 1.2);
  let hits = []; F.hover(d.stage, () => hits);
  const psi = (n) => (x) => (x < 0 || x > 1 ? 0 : Math.SQRT2 * Math.sin(n * Math.PI * x));
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const a2 = A2.v, b2 = 1 - a2, a = Math.sqrt(a2), b = Math.sqrt(b2);
    const T = cy.now(), k = Math.min(2, Math.floor(T / RUN)), t = Math.min(RUN, T - k * RUN);
    const outcome = (j) => (U[j] < a2 ? 1 : 2);
    const done = t >= TM, n = outcome(k);
    const cp = C('probability-density'), ce = C('energy'), cl = C('length');
    const box = { l: 150, r: 1020, t: 130, b: 640 };
    const ax = axes(ctx, box, [-0.08, 1.08], [0, 4], { nx: 0, ny: 4, xl: 'position x', yl: '|Ψ|² (1/L)', xc: cl, yc: cp });
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.12);
    ctx.fillRect(box.l, box.t, ax.X(0) - box.l, box.b - box.t); ctx.fillRect(ax.X(1), box.t, box.r - ax.X(1), box.b - box.t); ctx.restore();
    line(ctx, ax.X(0), box.t, ax.X(0), box.b, PAL.ink, 4); line(ctx, ax.X(1), box.t, ax.X(1), box.b, PAL.ink, 4);
    for (const [q, s] of [[0, '0'], [0.5, 'L/2'], [1, 'L']]) text(ctx, s, ax.X(q), box.b + 26, cl, { size: 17, align: 'center' });
    const ph = (E2 - E1) * t / HBAR;
    const dens = done
      ? (x) => psi(n)(x) ** 2
      : (x) => a2 * psi(1)(x) ** 2 + b2 * psi(2)(x) ** 2 + 2 * a * b * psi(1)(x) * psi(2)(x) * Math.cos(ph);
    shade(ctx, ax, dens, 0, 0, 1, cp, { alpha: 0.35 });
    plot(ctx, ax, dens, cp, { w: 5, x: [0, 1] });
    hits.push({ x: ax.X(0.5), y: ax.Y(Math.min(3.2, dens(0.5))), r: 20, name: '|Ψ(x,t)|², the probability density' });
    /* the energy ladder: two rungs, the measured one lit once the measurement fires */
    const lx0 = 1110, lx1 = 1290, Yl = (E) => 600 - (E / E2) * 380;
    for (const [m, E] of [[1, E1], [2, E2]]) {
      const lit = done && m === n;
      line(ctx, lx0, Yl(E), lx1, Yl(E), lit ? ce : alpha(PAL.ink, 0.45), lit ? 6 : 3);
      text(ctx, `E_${m} = ${fmt(E, 3)} eV`, lx0, Yl(E) - 14, lit ? ce : PAL.muted, { size: 20, weight: 600 });
      hits.push({ x: (lx0 + lx1) / 2, y: Yl(E), r: 22, name: `the level E${m === 1 ? '₁' : '₂'} of the electron in a 1.00 nm box` });
      if (lit) dot(ctx, lx1 + 22, Yl(E), ce, true, 11);
    }
    /* the results so far in this loop */
    const res = [];
    for (let j = 0; j <= k; j++) if (j < k || done) res.push(`E_${outcome(j)}`);
    text(ctx, 'measured', lx0, 650, PAL.muted, { size: 17 });
    if (res.length) text(ctx, res.join('  '), lx0, 684, ce, { size: 22, weight: 600 });
    hits.push({ x: lx0 + 60, y: 676, r: 30, name: 'the energies measured in the runs so far' });
    if (done) {
      topline(ctx, `Run ${k + 1} of 3: the energy measured is $\\kE_${n}$, so the state is now $\\kpsi_${n}$ and its density stands still.`);
      tex(d.readout, `\\kPsi(\\kx,\\kt) = \\kpsi_${n}(\\kx)\\,e^{-i\\kE_${n}\\kt/\\hbar} \\\\ \\kpdens(\\kx,\\kt) = |\\kpsi_${n}(\\kx)|^2`, false, { values: false });
    } else {
      topline(ctx, a2 > 0.001 && b2 > 0.001
        ? `Run ${k + 1} of 3: the density sloshes once every $h/(\\kE_2-\\kE_1) = ${fmt(TQ, 2)}$ fs until the energy is measured.`
        : `Run ${k + 1} of 3: a single eigenstate, so the density stands still before the measurement too.`);
      tex(d.readout,
        `\\kpdens(\\kx,\\kt) = ${fmt(a2, 2)}\\,\\kpsi_1^2 + ${fmt(b2, 2)}\\,\\kpsi_2^2 + ${fmt(2 * a * b, 2)}\\,\\kpsi_1\\kpsi_2\\cos\\dfrac{(\\kE_2-\\kE_1)\\kt}{\\hbar} \\\\ \\dfrac{(\\kE_2-\\kE_1)\\kt}{\\hbar} = \\dfrac{(${fmt(E2 - E1, 3)}\\ \\text{eV})(${fmt(t, 2)}\\ \\text{fs})}{${fmt(HBAR, 3)}\\ \\text{eV fs}} = ${fmt(ph, 2)}\\ \\text{rad}`,
        false, { values: false });
    }
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => TOTAL / 6), draw });
})();
};
