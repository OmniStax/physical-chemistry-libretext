/* Figures for section 13.14 Group Theory Determines Infrared Activity. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['13.14'] = function (root, F) {
const { tex, C, PAL, alpha, cycle, register, begin, line, dot, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI, DEBYE = 4.803;   /* 1 e·Å in debye */

/* =====================================================================
   SIM: the dipole during a vibration.
   Moving: each vibration runs at one drawn rate, three periods to a loop. A point-charge model
   (charges fixed on the atoms, so the dipole changes only through the geometry): HCl ±0.18 e,
   CO2 C +0.8 e and O −0.4 e, H2O O −0.66 e and H +0.33 e, N2 none. Geometries in Å from the
   bond lengths (N2 1.10, HCl 1.27, CO2 1.16, H2O 0.958 at 104.5°); mode shapes are the usual
   symmetric patterns with the centre of mass held still. Drawn amplitude 0.15 Å, about twice a
   ground-state swing. Scene 170 units per Å; the dipole arrow 110 units per debye, drawn
   beside the molecule so the atoms never hide it. Below, the change of the dipole along the direction it moves, ±1 D frame.
===================================================================== */
(function () {
  const d = sim('sim-dipole-vibration', 680);
  const A = 0.15;
  const hO = [0, 0.066], h1 = [-0.757, -0.524], h2 = [0.757, -0.524];
  const MOL = {
    n2: { name: 'N₂ stretch', atoms: [['N', -0.55, 0, 0], ['N', 0.55, 0, 0]], bonds: [[0, 1]], d: [[-1, 0], [1, 0]] },
    hcl: { name: 'HCl stretch', atoms: [['H', -1.235, 0, 0.18], ['Cl', 0.035, 0, -0.18]], bonds: [[0, 1]], d: [[-1, 0], [0.028, 0]] },
    co2s: { name: 'CO₂ symmetric stretch', atoms: [['O', -1.16, 0, -0.4], ['C', 0, 0, 0.8], ['O', 1.16, 0, -0.4]], bonds: [[0, 1], [1, 2]], d: [[-1, 0], [0, 0], [1, 0]] },
    co2a: { name: 'CO₂ asymmetric stretch', atoms: [['O', -1.16, 0, -0.4], ['C', 0, 0, 0.8], ['O', 1.16, 0, -0.4]], bonds: [[0, 1], [1, 2]], d: [[0.375, 0], [-1, 0], [0.375, 0]] },
    co2b: { name: 'CO₂ bend', atoms: [['O', -1.16, 0, -0.4], ['C', 0, 0, 0.8], ['O', 1.16, 0, -0.4]], bonds: [[0, 1], [1, 2]], d: [[0, 0.375], [0, -1], [0, 0.375]] },
    h2os: { name: 'H₂O symmetric stretch', atoms: [['O', hO[0], hO[1], -0.66], ['H', h1[0], h1[1], 0.33], ['H', h2[0], h2[1], 0.33]], bonds: [[0, 1], [0, 2]], d: [[0, 0.076], [-0.79, -0.61], [0.79, -0.61]] },
    h2ob: { name: 'H₂O bend', atoms: [['O', hO[0], hO[1], -0.66], ['H', h1[0], h1[1], 0.33], ['H', h2[0], h2[1], 0.33]], bonds: [[0, 1], [0, 2]], d: [[0, 0.099], [0.61, -0.79], [-0.61, -0.79]] },
    h2oa: { name: 'H₂O asymmetric stretch', atoms: [['O', hO[0], hO[1], -0.66], ['H', h1[0], h1[1], 0.33], ['H', h2[0], h2[1], 0.33]], bonds: [[0, 1], [0, 2]], d: [[0.099, 0], [-0.79, -0.61], [-0.79, 0.61]] },
  };
  const M = F.select(d.controls, { label: '\\text{vibration}', options: Object.entries(MOL).map(([value, m]) => ({ value, label: m.name })), value: 'hcl', aria: 'the molecule and vibration to show', onInput: () => cy.reset() });
  const cy = cycle(() => 3, 1.2);
  const RAD = { H: 22, C: 34, N: 34, O: 34, Cl: 42 };
  const hits = []; F.hover(d.stage, () => hits);
  const dip = (m, s) => m.atoms.reduce((acc, a, i) => [acc[0] + a[3] * (a[1] + s * A * m.d[i][0]) * DEBYE, acc[1] + a[3] * (a[2] + s * A * m.d[i][1]) * DEBYE], [0, 0]);
  function draw() {
    const { ctx, W } = begin(d.c);
    const m = MOL[M.value];
    let t = cy.now(); if (!isFinite(t)) t = 3;
    const sw = Math.sin(TAU * t);
    const mu0 = dip(m, 0), mu1 = dip(m, 1), dmu = [mu1[0] - mu0[0], mu1[1] - mu0[1]], amp = Math.hypot(dmu[0], dmu[1]);
    const u = amp > 1e-6 ? [dmu[0] / amp, dmu[1] / amp] : [1, 0];
    const mu = dip(m, sw), mag = Math.hypot(mu[0], mu[1]);
    const active = amp > 0.005;
    topline(ctx, active ? `The dipole swings by ±${fmt(amp, 2)} D during the ${m.name}: infrared active.` : `The dipole stays at ${fmt(mag, 2)} D during the ${m.name}: infrared inactive.`);
    /* the molecule */
    const k = 170, cx = W / 2, cy0 = 175;
    const P = m.atoms.map((a, i) => [cx + (a[1] + sw * A * m.d[i][0]) * k, cy0 - (a[2] + sw * A * m.d[i][1]) * k]);
    m.bonds.forEach(([a, b]) => line(ctx, P[a][0], P[a][1], P[b][0], P[b][1], PAL.muted, 10));
    hits.length = 0;
    m.atoms.forEach((a, i) => {
      ctx.save(); ctx.fillStyle = F.el(a[0]); ctx.beginPath(); ctx.arc(P[i][0], P[i][1], RAD[a[0]], 0, TAU); ctx.fill(); ctx.strokeStyle = alpha(PAL.ink, 0.7); ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
      hits.push({ x: P[i][0], y: P[i][1], r: RAD[a[0]], name: `${a[0]}, charge ${a[3] === 0 ? '0' : (a[3] > 0 ? '+' : '−') + fmt(Math.abs(a[3]), 2) + ' e'} in the model` });
    });
    const s = 110;
    const ay = cy0, cxa = cx + 380, ax0 = cxa - mu[0] * s / 2, ay0 = ay + mu[1] * s / 2;
    if (mag > 0.01) F.arrow(ctx, ax0, ay0, ax0 + mu[0] * s, ay0 - mu[1] * s, C('dipole-moment'), 5);
    else dot(ctx, cxa, ay, C('dipole-moment'), false, 8);
    text(ctx, 'μ', cxa + Math.max(Math.abs(mu[0]) * s / 2, 10) + 18, ay + 8, C('dipole-moment'), { size: 24, weight: 600 });
    hits.push({ x: cxa, y: ay, r: 50, name: `the dipole moment, ${fmt(mag, 2)} D` });
    /* the change of the dipole against time */
    const box = { l: 150, r: W - 80, t: 380, b: 600 };
    const ax = axes(ctx, box, [0, 3], [-1, 1], { nx: 6, ny: 4, xl: 'time (periods)', yl: 'change in dipole (D)', xc: C('time'), yc: C('dipole-moment') });
    const f = (tt) => { const q = dip(m, Math.sin(TAU * tt)); return (q[0] - mu0[0]) * u[0] + (q[1] - mu0[1]) * u[1]; };
    plot(ctx, ax, f, C('dipole-moment'), { w: 5, x: [0, t] });
    dot(ctx, ax.X(t), ax.Y(f(t)), C('dipole-moment'), true, 9);
    tex(d.readout, `|\\vec{\\kmud}| = ${fmt(mag, 2)}\\ \\text{D} \\\\ \\Delta\\kmud = \\pm ${fmt(amp, 2)}\\ \\text{D} \\\\ ${active ? '\\kMtrans(0 \\rightarrow 1) \\neq 0' : '\\kMtrans(0 \\rightarrow 1) = \\vec{\\kmud}\\langle \\kphivib(1) | \\kphivib(0) \\rangle = 0'}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.6), draw });
})();
};
