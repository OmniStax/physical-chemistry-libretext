/* Figures for section 5.2 The Equation for a Harmonic-Oscillator Model of a Diatomic Molecule Contains the Reduced Mass of the Molecule. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.2'] = function (root, F) {
const { tex, PAL, alpha, ctl, register, begin, line, dot, text, topline, fmt, legend } = F;
const sim = (id, H) => F.sim(root, id, H);

const AMU = 1.66054e-27, K = 478;
const nuOf = (mu) => Math.sqrt(K / (mu * AMU)) / (2 * Math.PI);
function spring(ctx, x0, x1, y, color, n = 10, w = 13) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(x0, y);
  const a = x0 + 0.08 * (x1 - x0), b = x1 - 0.08 * (x1 - x0); ctx.lineTo(a, y);
  for (let i = 0; i < 2 * n; i++) ctx.lineTo(a + (b - a) * (i + 0.5) / (2 * n), y + (i % 2 ? -w : w));
  ctx.lineTo(b, y); ctx.lineTo(x1, y); ctx.stroke(); ctx.restore();
}

/* ---------- Figure 5.2.1: two bodies vibrate as one of reduced mass ----------
   Top: the two atoms about their fixed center of mass, atom 1 at m2/(m1 + m2) r to the left of it and
   atom 2 at m1/(m1 + m2) r to the right. Bottom: one particle of mass mu on the same spring against a
   wall, at distance r. Both share r(t) = r0 (1 + 0.15 sin), with r0 drawn 330 units long; the swing is
   exaggerated. Each loop of 6 s holds a whole number of vibrations, about four for HCl and fewer as mu
   grows (proportional to the true frequency), so a heavier pair is seen to vibrate more slowly.
   Masses in amu open on the book's 1H and 35Cl; k is the book's 478 N/m. */
(function () {
  const d = sim('sim-two-body', 540);
  const LOOP = 6, NU0 = nuOf(1.0078 * 34.9688 / 35.9766);
  const cy = F.cycle(() => LOOP, 0);
  const det = [{ v: 1.0078, label: '¹H' }, 2.0140, { v: 34.9688, label: '³⁵Cl' }, 36.9659];
  const M1 = ctl(d.controls, { label: '\\kmone', cls: 'mass', min: 1, max: 40, step: 0.0001, value: 1.0078, unit: 'amu', dec: 4, detents: det, snap: true });
  const M2 = ctl(d.controls, { label: '\\kmtwo', cls: 'mass', min: 1, max: 40, step: 0.0001, value: 34.9688, unit: 'amu', dec: 4, detents: det, snap: true });
  const hits = [];
  F.hover(d.stage, () => hits);
  const rad = (m) => Math.min(50, 14 * Math.cbrt(m));
  function draw() {
    const { ctx, W } = begin(d.c);
    const m1 = M1.v, m2 = M2.v, mu = m1 * m2 / (m1 + m2), nu = nuOf(mu);
    const N = Math.max(1, Math.round(4 * nu / NU0)), t = cy.now();
    const r = 330 * (1 + 0.15 * Math.sin(2 * Math.PI * N * t / LOOP));
    const c1 = F.cat(0), c2 = F.cat(1), c3 = F.cat(2);
    topline(ctx, `$\\kmu = ${fmt(mu, 4)}$ amu, lighter than the lighter atom (${fmt(Math.min(m1, m2), 4)} amu).`);
    /* the pair about its center of mass */
    const cx = 760, y1 = 200, xa = cx - m2 / (m1 + m2) * r, xb = cx + m1 / (m1 + m2) * r;
    spring(ctx, xa, xb, y1, alpha(PAL.ink, 0.7));
    dot(ctx, xa, y1, c1, true, rad(m1)); dot(ctx, xb, y1, c2, true, rad(m2));
    line(ctx, cx, y1 - 70, cx, y1 + 70, alpha(PAL.ink, 0.5), 2, [4, 8]);
    text(ctx, 'center of mass', cx, y1 + 92, PAL.ink, { size: 18, align: 'center' });
    /* one particle of mass mu on the same spring, against a wall */
    const wx = 430, y2 = 420, xm = wx + r;
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.12); ctx.fillRect(wx - 34, y2 - 70, 34, 140); ctx.restore();
    line(ctx, wx, y2 - 70, wx, y2 + 70, PAL.ink, 4);
    text(ctx, 'wall', wx - 17, y2 + 96, PAL.ink, { size: 18, align: 'center' });
    spring(ctx, wx, xm, y2, alpha(PAL.ink, 0.7));
    dot(ctx, xm, y2, c3, true, rad(mu));
    legend(ctx, { l: 40, r: W - 40, t: 80, b: 510 }, [{ s: 'm_1', color: c1, kind: 'dot' }, { s: 'm_2', color: c2, kind: 'dot' }, { s: 'μ', color: c3, kind: 'dot' }], { corner: 'tl' });
    hits.length = 0;
    hits.push({ x: xa, y: y1, r: rad(m1) + 6, name: `atom 1, m₁ = ${fmt(m1, 4)} amu` }, { x: xb, y: y1, r: rad(m2) + 6, name: `atom 2, m₂ = ${fmt(m2, 4)} amu` });
    hits.push({ x: xm, y: y2, r: rad(mu) + 6, name: `one particle of reduced mass μ = ${fmt(mu, 4)} amu, the same distance r from the wall as the two atoms are apart` });
    hits.push({ x: cx, y: y1 - 60, r: 14, name: 'the center of mass, which does not move' });
    tex(d.readout, `\\kmu = \\dfrac{\\kmone\\kmtwo}{\\kmone+\\kmtwo} = \\dfrac{(${fmt(m1, 4)})(${fmt(m2, 4)})}{${fmt(m1, 4)}+${fmt(m2, 4)}}\\ \\text{amu} = ${fmt(mu, 4)}\\ \\text{amu} \\\\ \\knu = \\dfrac{1}{2\\pi}\\sqrt{\\dfrac{\\kk}{\\kmu}} = \\dfrac{1}{2\\pi}\\sqrt{\\dfrac{478\\ \\text{N/m}}{${fmt(mu * AMU * 1e27, 4)}\\times10^{-27}\\ \\text{kg}}} = ${fmt(nu / 1e13, 3)}\\times10^{13}\\ \\text{s}^{-1}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
