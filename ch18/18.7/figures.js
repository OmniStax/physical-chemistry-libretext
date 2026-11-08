/* Figures for section 18.7 Vibrational Partition Functions of Polyatomic Molecules Include the Partition Function for Each Normal Coordinate. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['18.7'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, cycle, register, begin, line, text, topline, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;

/* ---------- Figure 18.7.1: water's three modes, each its own oscillator and its own factor of q_vib ----------
   Water in the molecular plane (x right, z up), r = 0.9572 Å, angle 104.52°, centre of mass at the origin, Å.
   Mode shapes as in 12.10's sim-water-modes (a valence force field, Cartesian displacements scaled so the
   largest is 1). Wavenumbers are the caption's, 3656.7, 3755.8 and 1594.8 cm^-1, in its order; each mode's
   Θ_vib = hcν̃/k = 1.438777 cm K × ν̃ (5261, 5404, 2295 K). Under each mode its ladder v = 0 to 3 on one
   energy scale for all three (0.0205 px per cm^-1, so the bend's rungs sit closest), each level with its
   population f_v = (1 − x)x^v, x = e^(−Θ/T), as a bar, and from the ground a band of height kT/hc.
   Its factor 1/(1 − e^(−Θ/T)), the levels counted from the zero-point level as the section's example does,
   is printed under it. T on a log slider 300 to 10 000 K, opening at 300 K, where all three factors are
   1.000 to four places but the bend's and q_vib = 1.0005.
   Moving: the modes are motion, so each molecule oscillates at a drawn frequency in proportion to the
   real one, with an amplitude that grows as √(2⟨v⟩ + 1), drawn about 2.6 times the zero-point swing. */
(function () {
  const d = sim('sim-water-mode-factors', 680);
  const LG = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: Math.log10(300), max: 4, step: 0.001, value: Math.log10(300), unit: 'K',
    fmt: (lg) => `${fmt(10 ** lg, 0)} K`, detents: [{ v: Math.log10(300), label: '300 K' }], snap: true });
  const HCK = 1.438777;   /* hc/k, cm K */
  const ATOMS = [{ s: 'O', x: 0, z: 0.0656, name: 'oxygen' }, { s: 'H', x: 0.757, z: -0.5203, name: 'hydrogen' }, { s: 'H', x: -0.757, z: -0.5203, name: 'hydrogen' }];
  const MODES = [
    { name: 'symmetric stretch', nu: 3656.7, d: [[0, -0.1005], [-1, 0.7975], [1, 0.7975]] },
    { name: 'asymmetric stretch', nu: 3755.8, d: [[-0.126, 0], [1, -0.774], [1, 0.774]] },
    { name: 'bend', nu: 1594.8, d: [[0, -0.126], [0.898, 1], [-0.898, 1]] },
  ];
  MODES.forEach((m) => { m.th = HCK * m.nu; });
  const A = 0.13, S = 120, LV = 4, SC = 0.0205;
  const cy = cycle(() => Infinity, 0);
  const hov = []; F.hover(d.stage, () => hov);
  const f4 = (v) => (v < 10 ? fmt(v, 4) : fmt(v, 2));
  function atom(ctx, s, x, y, r) {
    ctx.save(); ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fillStyle = F.el(s); ctx.fill();
    ctx.strokeStyle = alpha(PAL.ink, 0.7); ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx, W } = begin(d.c);
    const T = 10 ** LG.v, kTcm = T / HCK;
    let t = cy.now(); if (!isFinite(t)) t = 0.25 * 3700 / 3656.7;
    hov.length = 0;
    topline(ctx, `At $\\kT = ${fmt(T, 0)}$ K, $k\\kT/hc = ${fmt(kTcm, 0)}$ cm⁻¹, against rungs of 1595 to 3756 cm⁻¹.`);
    const colW = W / 3, y0 = 575, facs = [];
    MODES.forEach((m, k) => {
      const cx = colW * (k + 0.5), x = Math.exp(-m.th / T), fac = 1 / (1 - x), nv = x / (1 - x);
      facs.push(fac);
      text(ctx, m.name, cx, 96, PAL.ink, { size: 22, weight: 600, align: 'center' });
      text(ctx, `${fmt(m.nu, 1)} cm⁻¹`, cx, 124, C('wavenumber'), { size: 17, align: 'center' });
      /* the molecule in this mode */
      const amp = A * Math.min(2.4, Math.sqrt(2 * nv + 1)), sw = Math.sin(TAU * (m.nu / 3700) * t), mc = [cx, 222];
      const P = ATOMS.map((a, i) => [mc[0] + (a.x + amp * m.d[i][0] * sw) * S, mc[1] - (a.z + amp * m.d[i][1] * sw) * S]);
      ATOMS.forEach((a, i) => { const q = [mc[0] + a.x * S, mc[1] - a.z * S]; ctx.save(); ctx.setLineDash([4, 6]); ctx.strokeStyle = alpha(PAL.ink, 0.3); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(q[0], q[1], i ? 17 : 26, 0, TAU); ctx.stroke(); ctx.restore(); });
      [1, 2].forEach((i) => line(ctx, P[0][0], P[0][1], P[i][0], P[i][1], alpha(PAL.ink, 0.45), 9));
      P.forEach((p, i) => atom(ctx, ATOMS[i].s, p[0], p[1], i ? 17 : 26));
      P.forEach((p, i) => hov.push({ x: p[0], y: p[1], r: i ? 17 : 26, name: `${ATOMS[i].name}, moving in the ${m.name}, its swing drawn about ${fmt(2.6 * amp / A, 0)} times the ground state's` }));
      /* the ladder on the common energy scale, the band of height kT, the populations */
      const xl = cx - 120, xr = cx + 70;
      const bh = Math.min(kTcm * SC, y0 - 318);
      ctx.save(); ctx.fillStyle = alpha(C('temperature'), 0.13); ctx.fillRect(xl - 12, y0 - bh, xr - xl + 24, bh); ctx.restore();
      line(ctx, xl - 12, y0 - bh, xr + 12, y0 - bh, alpha(C('temperature'), 0.8), 2, [4, 8]);
      if (k === 0 && bh > 16) text(ctx, 'kT', xr + 18, y0 - bh, C('temperature'), { size: 17 });
      for (let v = 0; v < LV; v++) {
        const y = y0 - v * m.nu * SC, f = (1 - x) * x ** v;
        line(ctx, xl, y, xr, y, alpha(C('energy'), 0.85), 2);
        if (f > 0.002) { ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.5); ctx.fillRect(xl, y - 10, (xr - xl) * f, 8); ctx.restore(); }
        if (k === 0) text(ctx, `v = ${v}`, xl - 22, y, PAL.muted, { size: 17, align: 'right' });
        hov.push({ x: (xl + xr) / 2, y: y - 4, r: 14, name: `level v = ${v} of the ${m.name}, holding a fraction ${f < 1e-4 ? f.toExponential(1) : fmt(f, 4)} of the molecules` });
      }
      text(ctx, `Θ_{vib} = ${fmt(m.th, 0)} K`, cx - 25, y0 + 34, C('temperature'), { size: 17, align: 'center' });
      text(ctx, `factor ${f4(fac)}`, cx - 25, y0 + 66, C('partition-function'), { size: 22, weight: 600, align: 'center' });
    });
    const q = facs.reduce((a, b) => a * b, 1);
    tex(d.readout, `\\kqvib = \\prod_{i=1}^{3} \\dfrac{1}{1- e^{-\\kThetavibi/\\kT}} \\\\ \\kqvib = (${f4(facs[0])})(${f4(facs[1])})(${f4(facs[2])}) = ${f4(q)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
