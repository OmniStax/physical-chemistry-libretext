/* Figures for section 5.3 The Harmonic Oscillator Approximates Molecular Vibrations. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.3'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, shade, fmt, legend, vbracket } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- HCl in a Morse well ----------
   The book gives no constants for HCl; these are literature values (Huber and Herzberg, via the NIST
   Chemistry WebBook): harmonic wavenumber 2990.946 cm^-1, anharmonicity 52.8186 cm^-1, r_e 1.27455 A,
   reduced mass 0.979593 amu. A Morse well with these two constants has the book's two-term levels
   exactly, E_v = (v + 1/2) we - (v + 1/2)^2 wexe, and depth De = we^2 / (4 wexe) = 42 343 cm^-1, about
   14 % deeper than HCl's measured well. beta = 2 pi c we sqrt(mu / 2 De) = 1.752 per angstrom. */
const WE = 2990.946, WEXE = 52.8186, RE = 1.27455, MU = 0.979593 * 1.66054e-27;
const DE = WE * WE / (4 * WEXE), HC = 6.62607e-34 * 2.99792458e10;
const BETA = 2 * Math.PI * 2.99792458e10 * WE * Math.sqrt(MU / (2 * DE * HC)) * 1e-10;   /* per angstrom */
const VMAX = Math.floor(WE / (2 * WEXE) - 0.5);                                         /* 27, the last bound level */
const Ev = (v) => (v + 0.5) * WE - (v + 0.5) ** 2 * WEXE;
const morse = (r) => DE * (1 - Math.exp(-BETA * (r - RE))) ** 2;
const harm = (r) => DE * BETA * BETA * (r - RE) ** 2;
const turnM = (E) => { const s = Math.sqrt(E / DE); return [RE - Math.log(1 + s) / BETA, RE - Math.log(1 - s) / BETA]; };
const turnH = (E) => { const a = Math.sqrt(E / DE) / BETA; return [RE - a, RE + a]; };

/* ---------- Figure 5.3.1 + 5.3.4: HCl in its anharmonic well ----------
   x: the H-Cl distance r, 0 to 4.0 A, so the Cl atom sits at r = 0 on the frame's left edge; y: energy
   0 to 48 000 cm^-1, above De. The Morse levels are drawn between their turning points, the harmonic
   ones (dashed) between the parabola's. The H atom moves on the Morse solution
   r(t) = re + ln[(1 - s cos W t)/(1 - s^2)] / beta with s = sqrt(E/De), whose period grows by
   1/sqrt(1 - s^2) toward dissociation; drawn with 1.2 s for the period at the bottom of the well. */
(function () {
  const d = sim('sim-morse', 640);
  /* v stops at 24, the last level whose outer turning point (3.9 A) stays inside the 4 A frame */
  const per = () => 1.2 / Math.sqrt(1 - Ev(V.v) / DE);
  const V = ctl(d.controls, { label: 'v', cls: '', min: 0, max: 24, step: 1, value: 3, dec: 0, onInput: () => cy.reset() });
  const cy = F.cycle(() => 3 * per(), 0);
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    const v = V.v, E = Ev(v), gap = Ev(v + 1) - E, ce = C('energy');
    topline(ctx, `From $v = ${v}$ to ${v + 1} the gap is ${fmt(gap, 0)} cm⁻¹; every harmonic gap is ${fmt(WE, 0)} cm⁻¹.`);
    const box = { l: 150, r: W - 160, t: 100, b: 470 };
    const ax = axes(ctx, box, [0, 4], [0, 48000], { nx: 8, ny: 6, xl: 'H–Cl distance r (Å)', xc: C('length'), yl: 'energy (cm⁻¹)', yc: ce });
    /* the dissociation limit and the two depths */
    line(ctx, box.l, ax.Y(DE), box.r, ax.Y(DE), alpha(PAL.ink, 0.4), 2, [10, 10]);
    vbracket(ctx, box.r + 30, ax.Y(0), ax.Y(DE), ce, 'D_e', 1);
    vbracket(ctx, box.r - 40, ax.Y(Ev(0)), ax.Y(DE), ce, 'D_0', -1);
    /* the harmonic parabola and its rungs, dashed */
    for (let n = 0; Ev(0) + n * WE < 48000; n++) { const e = (n + 0.5) * WE, [a, b] = turnH(e); line(ctx, ax.X(a), ax.Y(e), ax.X(b), ax.Y(e), alpha(PAL.ink, 0.35), 2, [6, 6]); }
    plot(ctx, ax, harm, alpha(PAL.ink, 0.55), { w: 3, dash: [10, 10] });
    /* the Morse curve and its levels */
    for (let n = 0; n <= VMAX; n++) { const e = Ev(n), [a, b0] = turnM(e), b = Math.min(4, b0); line(ctx, ax.X(a), ax.Y(e), ax.X(b), ax.Y(e), alpha(ce, n === v ? 1 : 0.45), n === v ? 4 : 2); }
    plot(ctx, ax, morse, ce, { w: 5 });
    const [ra, rb0] = turnM(E), rb = Math.min(4, rb0);
    text(ctx, `v = ${v}`, ax.X(rb) + 14, ax.Y(E), ce, { size: 20, weight: 600, base: 'middle', bg: PAL.panel });
    /* the molecule, on the same r axis */
    const s = Math.sqrt(E / DE), ph = 2 * Math.PI * cy.now() / per();
    const r = RE + Math.log((1 - s * Math.cos(ph)) / (1 - s * s)) / BETA, ym = 560;
    line(ctx, ax.X(r), ax.Y(E), ax.X(r), ym - 20, alpha(PAL.ink, 0.4), 2, [4, 8]);
    line(ctx, ax.X(0), ym, ax.X(r), ym, alpha(PAL.ink, 0.6), 4);
    dot(ctx, ax.X(0), ym, F.el('Cl'), true, 30); dot(ctx, ax.X(r), ym, F.el('H'), true, 16);
    dot(ctx, ax.X(r), ax.Y(E), ce, true, 9);
    legend(ctx, ax, [{ s: 'Morse well and levels', color: ce, w: 5 }, { s: 'harmonic well and levels', color: alpha(PAL.ink, 0.55), w: 3, dash: [10, 10] }], { corner: 'above' });
    hits.length = 0;
    hits.push({ x: ax.X(0), y: ym, r: 32, name: 'Cl atom, held at r = 0' }, { x: ax.X(r), y: ym, r: 18, name: `H atom, r = ${fmt(r, 2)} Å` });
    hits.push({ x: ax.X(ra), y: ax.Y(E), r: 14, name: `inner turning point, ${fmt(ra, 2)} Å` }, { x: ax.X(rb), y: ax.Y(E), r: 14, name: `outer turning point, ${fmt(rb, 2)} Å` });
    hits.push({ x: box.r + 30, y: ax.Y(DE / 2), r: 24, name: `well depth Dₑ = ${fmt(DE, 0)} cm⁻¹` }, { x: box.r - 40, y: ax.Y((DE + Ev(0)) / 2), r: 24, name: `dissociation energy D₀ = ${fmt(DE - Ev(0), 0)} cm⁻¹, Dₑ less the zero-point energy` });
    const h = v + 0.5;
    tex(d.readout, `\\kEv = \\left(v + \\tfrac{1}{2}\\right)\\knue - \\left(v + \\tfrac{1}{2}\\right)^2 \\knue x_e \\\\ E_{${v}} = (${fmt(h, 1)})(${fmt(WE, 1)}) - (${fmt(h, 1)})^2(${fmt(WEXE, 2)}) = ${fmt(E, 0)}\\ \\text{cm}^{-1} \\\\ E_{${v + 1}} - E_{${v}} = ${fmt(Ev(v + 1), 0)} - ${fmt(E, 0)} = ${fmt(Ev(v + 1) - E, 0)}\\ \\text{cm}^{-1}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* ---------- Figure 5.3.2: Taylor truncations of a Morse potential ----------
   In units of the well's own scales: u = beta (x - x0) and V/D, so V/D = (1 - e^-u)^2 = u^2 - u^3 +
   (7/12) u^4 - ... (k = 2 D beta^2, gamma = -6 D beta^3). x: u from -1 to 3; y: 0 to 1.6. The book's two
   panels are the four choices; the shaded stretch is where the truncation stays within 0.05 D. */
(function () {
  const d = sim('sim-taylor', 520);
  const O = F.choice(d.controls, { label: 'terms', options: [{ value: '2', label: 'harmonic' }, { value: '3', label: '+ cubic' }, { value: '4', label: '+ quartic' }, { value: '-4', label: '− quartic' }], value: '3' });
  const hits = [];
  F.hover(d.stage, () => hits);
  const exact = (u) => (1 - Math.exp(-u)) ** 2;
  const SER = {
    2: { f: (u) => u * u, tex: 'u^2', name: 'harmonic term alone' },
    3: { f: (u) => u * u - u ** 3, tex: 'u^2 - u^3', name: 'series to the cubic term' },
    4: { f: (u) => u * u - u ** 3 + 7 / 12 * u ** 4, tex: 'u^2 - u^3 + \\tfrac{7}{12}u^4', name: 'series to the quartic term' },
    '-4': { f: (u) => u * u - u ** 3 - 7 / 12 * u ** 4, tex: 'u^2 - u^3 - \\tfrac{7}{12}u^4', name: 'series with the quartic term of the wrong sign' },
  };
  const reach = (f, dir) => { let u = 0; while (Math.abs(u) < 3 && Math.abs(f(u + dir * 0.005) - exact(u + dir * 0.005)) < 0.05) u += dir * 0.005; return u; };
  function draw() {
    const { ctx, W } = begin(d.c);
    const S = SER[O.value], lo = reach(S.f, -1), hi = reach(S.f, 1), ce = C('energy');
    topline(ctx, `The ${S.name} stays within $0.05\\,\\kDM$ of the true curve for $${fmt(lo, 2)} < u < ${fmt(hi, 2)}$.`);
    const box = { l: 150, r: W - 70, t: 100, b: 450 };
    const ax = axes(ctx, box, [-1, 3], [0, 1.6], { nx: 8, ny: 4, xl: 'displacement u = β(x − x₀)', xc: C('length'), yl: 'energy V/D', yc: ce });
    shade(ctx, ax, exact, 0, lo, hi, ce, { alpha: 0.12 });
    [lo, hi].forEach((u) => line(ctx, ax.X(u), ax.Y(exact(u)), ax.X(u), box.b, alpha(PAL.ink, 0.4), 2, [4, 8]));
    line(ctx, box.l, ax.Y(1), box.r, ax.Y(1), alpha(PAL.ink, 0.3), 2, [10, 10]);
    plot(ctx, ax, exact, ce, { w: 5 });
    plot(ctx, ax, S.f, PAL.ink, { w: 3, dash: [10, 10] });
    legend(ctx, ax, [{ s: 'Morse potential', color: ce, w: 5, f: exact }, { s: 'truncated series', color: PAL.ink, w: 3, dash: [10, 10], f: S.f }], { corner: 'tr' });
    hits.length = 0;
    hits.push({ x: ax.X(2.5), y: ax.Y(exact(2.5)), r: 18, name: 'the Morse potential' }, { x: ax.X(hi), y: box.b, r: 14, name: `the fit holds to u = ${fmt(hi, 2)}` }, { x: ax.X(lo), y: box.b, r: 14, name: `the fit holds to u = ${fmt(lo, 2)}` });
    tex(d.readout, `\\dfrac{\\kV}{\\kDM} \\approx ${S.tex} \\\\ u = \\kbeta(\\kx - \\kxo)`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
