/* Figures for section 17.5 Pressure can be Expressed in Terms of the Canonical Partition Function. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['17.5'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, topline, axes, hbracket, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- constants, SI ---------- */
const H_PL = 6.62607e-34, KB = 1.380649e-23, M_HE = 6.6465e-27;   /* J s; J/K; kg, one helium atom */
const N_AT = 12, AREA = 1e-18;                                      /* the book's dozen particles; the piston's area, 1 nm² */
const L0 = 1.2;                                                     /* nm: the box's length with the piston drawn back (z = 0) */

/* ---------- Figure 17.5.1: a piston raising the levels of a box ----------
   Left, the box seen from the side, its piston coming in from the left along z, drawn at 360 units per nm
   (L from 1.2 nm at z = 0 to 0.4 nm at z = 0.8 nm), with the book's twelve particles at fixed fractions of
   the box. The reader drags the piston's handle (or the z slider). Right, the levels for motion along z,
   E_n = n²h²/8mL², of one helium atom: x the fraction of atoms in the level, 0 to 1; y the energy in
   10⁻²² J, fixed 0 to 10 (at z = 0.8 nm, T = 60 K the level n = 4 sits at 8.3). Each level is a line with its
   Boltzmann population as a bar. The gas's push on the piston, N Σ P_n dE_n/dz, is the arrow on the piston face.
   Still: the drag is the motion and nothing has a clock. */
(function () {
  const d = sim('sim-piston-levels', 600);
  const Z = ctl(d.controls, { label: '\\kz', cls: 'length', min: 0, max: 0.8, step: 0.01, value: 0.4, unit: 'nm', dec: 2 });
  const T = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: 5, max: 60, step: 1, value: 20, unit: 'K', dec: 0 });
  const S = 360, RX = 640, BT = 150, BB = 150 + S, CY = (BT + BB) / 2;   /* right wall x; box top and bottom (1 nm high) */
  const faceX = (z) => RX - (L0 - z) * S;
  /* the handle sits on the piston rod; a pseudo-axes maps its x to z for F.drag */
  const grip = { box: { l: faceX(0), r: faceX(0.8), t: CY - 40, b: CY + 40 }, xr: [0, 0.8], yr: [-1, 1] };
  grip.X = (z) => faceX(z) - 70; grip.Y = () => CY;
  const gb = grip.box; gb.l -= 70; gb.r -= 70;
  const P = F.drag(d, { x: Z, y: 0 });
  /* the book's particles, fractions of the box (x from the piston, y from the top) */
  const SPOTS = [[0.18, 0.15], [0.55, 0.1], [0.82, 0.22], [0.35, 0.3], [0.68, 0.4], [0.12, 0.5], [0.45, 0.55],
    [0.88, 0.58], [0.25, 0.78], [0.6, 0.72], [0.8, 0.88], [0.4, 0.9]];
  const hov = []; F.hover(d.stage, () => hov);
  /* the levels of one atom for motion along z in a box of length L (m); energies in J */
  function levels(Lm, t) {
    const e1 = H_PL * H_PL / (8 * M_HE * Lm * Lm), b = 1 / (KB * t), out = [];
    for (let n = 1; n < 400; n++) { const e = n * n * e1, w = Math.exp(-b * (e - e1)); if (w < 1e-12) break; out.push({ n, e, w }); }
    const q = out.reduce((s, l) => s + l.w, 0) * Math.exp(-b * e1);
    out.forEach((l) => { l.p = l.w * Math.exp(-b * e1) / q; l.f = 2 * l.e / Lm; });   /* dE_n/dz = 2E_n/L */
    return { lv: out, q, F1: out.reduce((s, l) => s + l.p * l.f, 0) };
  }
  function draw() {
    const { ctx, W } = begin(d.c);
    const z = Z.v, t = T.v, L = L0 - z, Lm = L * 1e-9, kT = KB * t;
    const { lv, F1 } = levels(Lm, t);
    const Ftot = N_AT * F1, Pavg = Ftot / AREA, Pcl = N_AT * kT / (AREA * Lm);
    topline(ctx, `At $\\kz = ${fmt(z, 2)}$ nm the gas pushes back with $\\kPavg = ${fmt(Pavg / 1e6, 2)}$ MPa, against $Nk\\kT/\\kV = ${fmt(Pcl / 1e6, 2)}$ MPa.`);
    /* the box: three walls, the piston face and its rod */
    const fx = faceX(z);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath();
    ctx.moveTo(faceX(0) - 20, BT); ctx.lineTo(RX, BT); ctx.lineTo(RX, BB); ctx.lineTo(faceX(0) - 20, BB); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.25); ctx.fillRect(fx - 16, BT + 4, 16, S - 8); ctx.restore();
    line(ctx, fx - 16, BT + 4, fx - 16, BB - 4, PAL.ink, 3); line(ctx, fx, BT + 4, fx, BB - 4, PAL.ink, 3);
    line(ctx, 30, CY, fx - 16, CY, PAL.ink, 6);
    /* the atoms */
    const he = F.el('He');
    SPOTS.forEach(([a, b]) => dot(ctx, fx + 14 + a * (L * S - 28), BT + 18 + b * (S - 36), he, true, 9));
    /* the push of the gas on the piston, toward -z (8 pN is 100 units) */
    const len = Math.min(220, 12.5 * Ftot * 1e12);
    arrow(ctx, fx - 4, BT - 24, fx - 4 - len, BT - 24, C('force'), 5);
    text(ctx, `⟨F⟩ = ${fmt(Ftot * 1e12, 1)} pN`, Math.max(110, fx - 4 - len / 2), BT - 54, C('force'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    /* the length of the box and the z axis */
    hbracket(ctx, fx, RX, BB + 36, C('length'), `L = ${fmt(L, 2)} nm`, { side: 'below' });
    arrow(ctx, 60, BB + 70, 170, BB + 70, PAL.muted, 3);
    text(ctx, 'z', 182, BB + 70, C('length'), { size: 24, weight: 600 });
    const g = P.draw(ctx, grip, alpha(PAL.ink, 0.8));
    /* the levels of one atom's motion along z */
    const box = { l: 800, r: W - 50, t: BT - 20, b: BB + 30 };
    const ax = axes(ctx, box, [0, 1], [0, 10], { nx: 4, ny: 5, xl: 'fraction of atoms in the level', yl: 'energy E_n of motion along z (10⁻²² J)', xc: PAL.ink, yc: C('energy') });
    const Y22 = (e) => ax.Y(e / 1e-22);
    lv.forEach((l) => {
      const y = Y22(l.e); if (y < box.t) return;
      line(ctx, box.l, y, box.r, y, alpha(C('energy'), 0.45), 2);
      ctx.save(); ctx.fillStyle = alpha(C('energy'), 0.85); ctx.fillRect(box.l, y - 6, Math.max(1, ax.X(l.p) - box.l), 12); ctx.restore();
    });
    const yk = Y22(kT);
    if (yk > box.t) { line(ctx, box.l, yk, box.r, yk, alpha(PAL.ink, 0.6), 3, [10, 10]); text(ctx, `kT`, box.r - 6, yk - 16, alpha(PAL.ink, 0.8), { size: 20, align: 'right', bg: PAL.panel }); }
    hov.length = 0;
    lv.slice(0, 12).forEach((l) => { const y = Y22(l.e); if (y >= box.t) hov.push({ x: ax.X(Math.max(l.p, 0.02)), y, r: 12, name: `level n = ${l.n}: E = ${fmt(l.e / 1e-22, 2)} × 10⁻²² J, ${fmt(100 * l.p, 1)} % of the atoms` }); });
    hov.push({ x: fx + 14 + SPOTS[0][0] * (L * S - 28), y: BT + 18 + SPOTS[0][1] * (S - 36), r: 14, name: 'a helium atom' });
    if (g) hov.push({ x: g.x, y: g.y, r: 22, name: 'the piston: drag it in or out' });
    tex(d.readout, `\\langle\\kF\\rangle = N\\sum_n P_n\\dfrac{dE_n}{d\\kz} = ${N_AT}\\times ${fmt(F1 * 1e12, 3)}\\ \\text{pN} = ${fmt(Ftot * 1e12, 2)}\\ \\text{pN} \\\\ \\kPavg = \\dfrac{\\langle\\kF\\rangle}{A} = k\\kT\\left(\\dfrac{\\partial \\ln\\kQsys}{\\partial \\kV}\\right)_{N,\\beta} = \\dfrac{${fmt(Ftot * 1e12, 2)}\\ \\text{pN}}{1\\ \\text{nm}^2} = ${fmt(Pavg / 1e6, 2)}\\ \\text{MPa}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
