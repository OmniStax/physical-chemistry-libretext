/* Figures for section 13.7 The Franck-Condon Principle. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['13.7'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, arrow, fmt, legend } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- the book's model (13.7, Franck-Condon Progressions) ----------
   Two harmonic wells of the same alpha, their bottoms 8000 cm^-1 apart, the mode 1000 cm^-1. In the dimensionless
   coordinate x = sqrt(alpha)(R - R_e) the ground well is 500 x^2 cm^-1 and the excited well 8000 + 500 (x - d)^2,
   with d = sqrt(alpha)(Q_e - R_e). The book's displacement S is d^2 / 2, so S_00 = e^(-d^2/4) = e^(-S/2) and the
   intensities are the Poisson numbers |S_0v'|^2 = e^(-S) S^v' / v'!. */
const GAP = 8000, HW = 1000;
const V0 = (x) => 0.5 * HW * x * x, V1 = (d) => (x) => GAP + 0.5 * HW * (x - d) ** 2;
const fact = (n) => (n < 2 ? 1 : n * fact(n - 1));
const pois = (S, v) => Math.exp(-S) * S ** v / fact(v);
/* a vibrational function of the dimensionless oscillator, normalised, by the recurrence */
function psi(v, y) { let p0 = Math.pow(Math.PI, -0.25) * Math.exp(-y * y / 2); if (v === 0) return p0; let p1 = Math.SQRT2 * y * p0; for (let k = 1; k < v; k++) { const p2 = Math.sqrt(2 / (k + 1)) * y * p1 - Math.sqrt(k / (k + 1)) * p0; p0 = p1; p1 = p2; } return p1; }
/* a probability density drawn as a filled bump standing on its energy level */
function bump(ctx, ax, xc, E, hpx, color, lo, hi) {
  ctx.save(); ctx.fillStyle = alpha(color, 0.4); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.beginPath();
  ctx.moveTo(ax.X(lo), ax.Y(E));
  for (let x = lo; x <= hi + 1e-9; x += 0.05) ctx.lineTo(ax.X(x), ax.Y(E) - hpx * Math.exp(-(x - xc) ** 2));
  ctx.lineTo(ax.X(hi), ax.Y(E)); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
}

/* ---------- Figure 13.7.1: the vertical transition ----------
   x: -3.5 to 8.5 (d reaches 2.5, the swing reaches 2d); y: energy 0 to 14 000 cm^-1. The packet is the v = 0
   density of the starting well. Play: it rests (0.8 s), rides the photon straight up at fixed x (0.8 s), then swings
   as a displaced Gaussian, exact in a harmonic well of the same width: x_c = d(1 - cos wt) after absorption,
   x_c = d cos wt after emission, a period of 1.6 s drawn. It sits at its mean energy, 500 + 500 d^2 above the new
   bottom, between turning points 0 and 2d (absorption) or -d and d (emission). Moving: the nuclei hold still
   during the jump and swing after it. Opens on d = 2, the book's drawing that favours v' = 2. */
(function () {
  const d = sim('sim-vertical', 640);
  const DIR = F.choice(d.controls, { label: 'transition', key: 'dir', options: [{ value: 'abs', label: 'absorption' }, { value: 'em', label: 'emission' }], value: 'abs', onInput: () => cy.reset() });
  const D = ctl(d.controls, { label: '\\sqrt{\\alpha}(\\kQe - \\kRe)', cls: '', key: 'd', min: 0, max: 2.5, step: 0.05, value: 2, dec: 2,
    aria: 'the displacement of the excited well, in units of the oscillator length', specials: [{ at: 0, label: 'no displacement' }], onInput: () => cy.reset() });
  const T0 = 0.8, T1 = 1.6, PER = 1.6;
  const cy = F.cycle(() => 6.4, 1.2);
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const dd = D.v, ab = DIR.value === 'abs', t = cy.now(), ce = C('energy'), cw = C('wavenumber'), cf = C('wavefunction');
    const up = V1(dd), nuV = ab ? GAP + 0.5 * HW * dd * dd : GAP - 0.5 * HW * dd * dd;
    const s00 = Math.exp(-dd * dd / 4);
    topline(ctx, ab
      ? `The photon lifts the nuclei straight up at $\\kR = \\kRe$, ${fmt(nuV, 0)} cm⁻¹; there they find themselves ${dd > 0.01 ? 'off the new minimum and start to swing' : 'at the new minimum and stay put'}.`
      : `Emission from $v' = 0$ drops straight down at $\\kR = \\kQe$, ${fmt(nuV, 0)} cm⁻¹, ${dd > 0.01 ? 'a shorter arrow than the absorption' : 'the same arrow as the absorption'}.`);
    const box = { l: 150, r: 1300, t: 110, b: 540 };
    const ax = axes(ctx, box, [-3.5, 8.5], [0, 14000], { nx: 12, ny: 7, xl: 'nuclear coordinate √α(R − Rₑ)', xc: C('length'), yl: 'energy (cm⁻¹)', yc: ce });
    F.plot(ctx, ax, V0, ce, { w: 5 });
    F.plot(ctx, ax, up, ce, { w: 5 });
    text(ctx, 'ground state', ax.X(-2.9), ax.Y(V0(-2.9)) + 30, ce, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    text(ctx, 'excited state', ax.X(dd + 3.0), ax.Y(up(dd + 3.0)) + 4, ce, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    /* the levels each well holds, faint */
    for (let v = 0; v < 6; v++) {
      const E = GAP + HW * (v + 0.5), a = Math.sqrt(2 * v + 1); if (E < 14000) line(ctx, ax.X(dd - a), ax.Y(E), ax.X(dd + a), ax.Y(E), alpha(ce, 0.3), 2);
      const e = HW * (v + 0.5); if (e < 6000) line(ctx, ax.X(-a), ax.Y(e), ax.X(a), ax.Y(e), alpha(ce, 0.3), 2);
    }
    /* where the jump starts and where it lands */
    const x0 = ab ? 0 : dd, E0 = ab ? HW / 2 : GAP + HW / 2, E1 = ab ? E0 + nuV : E0 - nuV, centre = ab ? dd : 0;
    hits.length = 0;
    let xc = x0, Ep = E0, ka = 0;
    if (t < T0) { xc = x0; Ep = E0; }
    else if (t < T1) { ka = F.ease.smooth((t - T0) / (T1 - T0)); Ep = E0 + (E1 - E0) * ka; }
    else { ka = 1; Ep = E1; const ph = 2 * Math.PI * (t - T1) / PER; xc = ab ? dd * (1 - Math.cos(ph)) : dd * Math.cos(ph); }
    if (ka > 0) {
      arrow(ctx, ax.X(x0), ax.Y(E0), ax.X(x0), ax.Y(E0 + (E1 - E0) * ka), cw, 5);
      text(ctx, ab ? 'absorption' : 'emission', ax.X(x0) - 14, ax.Y((E0 + E1) / 2), cw, { size: 20, weight: 600, align: 'right', bg: PAL.panel });
      hits.push({ x: ax.X(x0), y: ax.Y((E0 + E1) / 2), r: 16, name: `the vertical transition, ${fmt(nuV, 0)} cm⁻¹, at fixed nuclear positions` });
    }
    if (ka >= 1 && dd > 0.01) {
      /* the swing: between its turning points, at the packet's energy */
      const a = centre - dd, b = centre + dd;
      line(ctx, ax.X(a), ax.Y(E1), ax.X(b), ax.Y(E1), alpha(PAL.ink, 0.5), 2, [10, 10]);
      [a, b].forEach((x) => dot(ctx, ax.X(x), ax.Y(E1), PAL.ink, false, 7));
      hits.push({ x: ax.X(a), y: ax.Y(E1), r: 12, name: 'a turning point of the swing' }, { x: ax.X(b), y: ax.Y(E1), r: 12, name: 'a turning point of the swing' });
    }
    bump(ctx, ax, xc, Ep, 60, cf, xc - 2.6, xc + 2.6);
    hits.push({ x: ax.X(xc), y: ax.Y(Ep) - 30, r: 30, name: 'the probability density of the nuclei, the v = 0 packet of the starting state' });
    /* the two equilibrium positions */
    [[0, 'Rₑ'], [dd, 'Qₑ']].forEach(([x, s], i) => { line(ctx, ax.X(x), box.b, ax.X(x), ax.Y(i ? GAP : 0), alpha(PAL.ink, 0.35), 2, [4, 8]); if (i === 0 || dd > 0.35) text(ctx, s, ax.X(x), box.b - 16, C('length'), { size: 20, weight: 600, align: 'center', bg: PAL.panel }); });
    tex(d.readout, `S_{00} = e^{-\\alpha(\\kRe-\\kQe)^2/4} \\\\ S_{00} = e^{-(${fmt(dd, 2)})^2/4} = ${fmt(s00, 3)} \\\\ \\small |S_{00}|^2 = ${fmt(s00 * s00, 3)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* ---------- Figures 13.7.2 to 13.7.8: the progression and the displacement ----------
   Left: the two wells as above with d = sqrt(2S), the ground v = 0 function and the band of positions it covers
   projected straight up, the upper levels v' = 0 to 7 each drawn as strongly as its Franck-Condon factor. Right: the
   stick spectrum at 8000 + 1000 v' cm^-1, heights e^(-S) S^v' / v'!, dressed with Gaussians of sigma 200 cm^-1 whose
   sum keeps the same area at every S. x 7500 to 15 500 cm^-1, y 0 to 1. Still: S is variation, not time. Opens on the
   book's first case, S = 1; detents at the book's 0.1, 1/2, 1 and 2. */
(function () {
  const d = sim('sim-progression', 600);
  const SS = ctl(d.controls, { label: 'S', cls: '', key: 'S', min: 0.05, max: 3, step: 0.01, value: 1, dec: 2, aria: 'the displacement S of the excited well',
    detents: [0.1, 0.5, 1, 2], snap: true });
  const hits = [];
  F.hover(d.stage, () => hits);
  const NV = 8, SIG = 200;
  function draw() {
    const { ctx } = begin(d.c);
    const S = SS.v, dd = Math.sqrt(2 * S), P = Array.from({ length: NV }, (_, v) => pois(S, v)), vmax = P.indexOf(Math.max(...P));
    const ce = C('energy'), cf = C('wavefunction'), cw = C('wavenumber'), up = V1(dd);
    topline(ctx, `With $S = ${fmt(S, 2)}$ the strongest band is $0 \\to ${vmax}$, and the $0 \\to 0$ band carries ${fmt(100 * P[0], 0)}% of the intensity.`);
    hits.length = 0;
    /* the wells */
    const wb = { l: 150, r: 620, t: 110, b: 500 };
    const ax = axes(ctx, wb, [-3, 6], [0, 16000], { nx: 0, ny: 4, xl: 'nuclear coordinate', xc: C('length'), yl: 'energy (cm⁻¹)', yc: ce });
    const sd = 1 / Math.SQRT2;
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.07); ctx.fillRect(ax.X(-2 * sd), wb.t, ax.X(2 * sd) - ax.X(-2 * sd), ax.Y(HW / 2) - wb.t); ctx.restore();
    F.plot(ctx, ax, V0, ce, { w: 5 });
    F.plot(ctx, ax, up, ce, { w: 5 });
    const pm = Math.max(...P);
    for (let v = 0; v < NV; v++) {
      const E = GAP + HW * (v + 0.5), a = Math.sqrt(2 * v + 1), k = P[v] / pm;
      line(ctx, ax.X(dd - a), ax.Y(E), ax.X(dd + a), ax.Y(E), alpha(ce, 0.2 + 0.8 * k), 1.5 + 3.5 * k);
      hits.push({ x: ax.X(dd), y: ax.Y(E), r: 10, name: `upper level v' = ${v}: Franck-Condon factor ${fmt(P[v], 3)}` });
    }
    /* the ground function, as an amplitude on its level */
    ctx.save(); ctx.strokeStyle = cf; ctx.lineWidth = 4; ctx.beginPath();
    for (let x = -3; x <= 3.001; x += 0.05) { const X = ax.X(x), Y = ax.Y(HW / 2) - 70 * psi(0, x) / psi(0, 0); if (x === -3) ctx.moveTo(X, Y); else ctx.lineTo(X, Y); }
    ctx.stroke(); ctx.restore();
    hits.push({ x: ax.X(0), y: ax.Y(HW / 2) - 40, r: 26, name: 'the ground state v = 0 vibrational function, and the band of positions it projects straight up' });
    text(ctx, 'v = 0', ax.X(1.5), ax.Y(HW / 2) + 2, cf, { size: 18, weight: 600, base: 'middle' });
    /* the spectrum */
    const sb = { l: 720, r: 1330, t: 110, b: 500 };
    const sx = axes(ctx, sb, [7500, 15500], [0, 1], { nx: 4, ny: 4, xl: 'absorption wavenumber (cm⁻¹)', xc: cw, yl: 'intensity', yc: PAL.ink });
    const dressed = (nu) => P.reduce((s, p, v) => s + p * Math.exp(-((nu - GAP - HW * v) ** 2) / (2 * SIG * SIG)), 0);
    F.shade(ctx, sx, dressed, 0, 7500, 15500, PAL.ink, { alpha: 0.08 });
    F.plot(ctx, sx, dressed, alpha(PAL.ink, 0.55), { w: 3, dash: [10, 10] });
    for (let v = 0; v < NV; v++) {
      const x = sx.X(GAP + HW * v);
      line(ctx, x, sx.Y(0), x, sx.Y(P[v]), PAL.ink, v === vmax ? 6 : 4);
      if (P[v] > 0.03) text(ctx, `${v}`, x, sx.Y(P[v]) - 16, PAL.ink, { size: 17, align: 'center' });
      hits.push({ x, y: sx.Y(P[v] / 2), r: 12, name: `0 → ${v}: ${fmt(GAP + HW * v, 0)} cm⁻¹, relative intensity ${fmt(P[v], 3)}` });
    }
    legend(ctx, sx, [{ s: 'stick spectrum', color: PAL.ink, w: 5 }, { s: 'dressed with Gaussians', color: alpha(PAL.ink, 0.55), w: 3, dash: [10, 10], f: dressed }], { corner: 'tr' });
    tex(d.readout, `S_{00} = e^{-\\alpha(\\kRe-\\kQe)^2/4} = e^{-S/2} \\\\ S_{00} = e^{-${fmt(S, 2)}/2} = ${fmt(Math.exp(-S / 2), 3)} \\\\ \\small \\dfrac{I_1}{I_0} = S = ${fmt(S, 2)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
