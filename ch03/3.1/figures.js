/* Figures for section 3.1 The Schrödinger Equation. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.1'] = function (root, F) {
const { el, tex, C, PAL, alpha, ctl, cycle, register, begin, line, text, topline, axes, plot, shade, hbracket, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;
/* a readout line and a small second line set through the same macros */
function readout(host, main, small) { tex(host, main); if (small) { const s = el('small', null, small); host.appendChild(s); F.renderMath(s); } }

/* ---------- physics, SI ---------- */
const h = 6.62607e-34, HBAR = h / TAU, ME = 9.10938e-31, EV = 1.602177e-19;

/* =====================================================================
   Sim: the free-particle wave of Equation 3.1.7, an electron.
   Psi(x,t) = exp[i(px - Et)/hbar], drawn as its real part (solid) and its
   imaginary part (dashed, the same wavefunction hue) over x = 0 to 4 nm,
   with |Psi|^2 = 1 filled in the probability-density hue. Moving: the
   phase runs right at E/p = p/2m. The real wave period h/E is about a
   femtosecond; the drawing maps one period of the default momentum to
   1.25 s and keeps that time scale for every momentum, so a larger p
   both shortens the wave (lambda = h/p) and turns its phase faster
   (E = p^2/2m). The loop is a whole number of periods, so it closes on
   the shape it opened with. y: -2 to 2 (the parts swing between
   -1 and 1; |Psi|^2 is 1). p slider 0.5 to 2.5 x 10^-24 kg m/s,
   default 1.0 (lambda = 0.66 nm, E = 3.4 eV).
===================================================================== */
(function () {
  const d = sim('sim-free-wave', 560);
  const P = ctl(d.controls, { label: '\\kp', cls: 'momentum', min: 0.5, max: 2.5, step: 0.05, value: 1.0, unit: '×10⁻²⁴ kg·m/s', dec: 2, aria: 'the momentum of the electron', onInput: () => cy.reset() });
  const E0 = Math.pow(1e-24, 2) / (2 * ME), T0 = h / E0, SHOW = 1.25;     /* one default period takes 1.25 s on screen */
  const SLOW = T0 / SHOW;                                                /* real seconds per drawn second */
  const freq = () => (Math.pow(P.v * 1e-24, 2) / (2 * ME)) / h * SLOW;  /* drawn turns per second */
  const cy = cycle(() => Math.max(1, Math.round(5 * freq())) / freq(), 1.2);
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const p = P.v * 1e-24, E = p * p / (2 * ME), lam = h / p * 1e9, t = cy.now() * SLOW;
    const k = p / HBAR * 1e-9, w = E / HBAR;              /* k per nm, omega per s */
    const re = (x) => Math.cos(k * x - w * t), im = (x) => Math.sin(k * x - w * t);
    const cw = C('wavefunction'), cp = C('probability-density');
    const box = { l: 150, r: 1320, t: 130, b: 470 };
    const ax = axes(ctx, box, [0, 4], [-2, 2], { nx: 4, ny: 4, xl: 'position x (nm)', yl: 'Ψ and |Ψ|²', xc: C('length'), yc: cw });
    line(ctx, box.l, ax.Y(0), box.r, ax.Y(0), alpha(PAL.ink, 0.35), 2);
    shade(ctx, ax, () => 1, 0, 0, 4, cp, { alpha: 0.16 });
    plot(ctx, ax, () => 1, cp, { w: 4 });
    plot(ctx, ax, im, cw, { w: 3, dash: [10, 10] });
    plot(ctx, ax, re, cw, { w: 5 });
    /* one wavelength, a fixed ruler under the top of the frame */
    hbracket(ctx, ax.X(0.2), ax.X(0.2 + lam), ax.Y(1.6), C('wavelength'), `λ = ${fmt(lam, 2)} nm`);
    F.legend(ctx, ax, [{ s: 'Re Ψ', color: cw, w: 5 }, { s: 'Im Ψ', color: cw, w: 3, dash: [10, 10] }, { s: '|Ψ|²', color: cp, w: 4 }], { corner: 'above' });
    hits.push({ x: ax.X(3.6), y: ax.Y(1), r: 16, name: '|Ψ|² = 1 at every x: the free particle is equally likely anywhere' });
    hits.push({ x: ax.X(2), y: ax.Y(re(2)), r: 16, name: `the real part of Ψ at x = 2 nm, ${fmt(re(2), 2)}` });
    hits.push({ x: ax.X(2), y: ax.Y(im(2)), r: 16, name: `the imaginary part of Ψ at x = 2 nm, ${fmt(im(2), 2)}` });
    topline(ctx, `At $\\kp = ${fmt(P.v, 2)}\\times10^{-24}$ kg·m/s the wave is ${fmt(lam, 2)} nm long and its phase runs right at ${fmt(E / p / 1e3, 0)} km/s.`);
    const eV = E / EV, period = h / E * 1e15;
    readout(d.readout,
      `\\kPsi(\\kx,\\kt) = \\exp\\left[\\dfrac{i(\\kp\\kx-\\kE\\kt)}{\\hbar}\\right] \\\\ \\klambda = \\dfrac{h}{\\kp} = \\dfrac{6.626\\times10^{-34}\\ \\text{J s}}{${fmt(P.v, 2)}\\times10^{-24}\\ \\text{kg m/s}} = ${fmt(lam, 2)}\\ \\text{nm} \\\\ \\kE = \\dfrac{\\kp^2}{2\\km} = ${fmt(eV, 2)}\\ \\text{eV}`,
      `One turn of the phase, $h/\\kE = ${fmt(period, 2)}$ fs, takes ${fmt((h / E) / SLOW, 2)} s on screen.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
