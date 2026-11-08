/* Figures for section 13.1 The Electromagnetic Spectrum. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['13.1'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

const C_LIGHT = 3.00e8, H_PLANCK = 6.626e-34, TAU = 2 * Math.PI;
/* a number in TeX scientific notation to three significant figures: 5.09\times10^{14} */
function sci(x, sig = 3) {
  if (x === 0) return '0';
  const e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e);
  const ms = m.toFixed(sig - 1);
  if (+ms >= 10) return sci(x * 1.0000001, sig);
  return e === 0 ? ms : `${ms}\\times10^{${e}}`;
}
/* the same as plain text with Unicode superscripts, for a slider value or a headline */
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const sup = (n) => String(n).split('').map((ch) => SUP[ch]).join('');
function sciText(x, sig = 3) {
  const e = Math.floor(Math.log10(Math.abs(x))), m = (x / Math.pow(10, e)).toFixed(sig - 1);
  return e === 0 ? m : `${m} × 10${sup(e)}`;
}
/* a wavelength in metres written in the unit the book would use for it */
function lamText(m) {
  if (m < 1e-9) return `${fmt(m * 1e12, m < 1e-11 ? 3 : 1)} pm`;
  if (m < 1e-6) { const v = m * 1e9; return `${fmt(v, 1)} nm`; }
  if (m < 1e-3) return `${fmt(m * 1e6, 2)} μm`;
  if (m < 1) return `${fmt(m * 1e3, 2)} mm`;
  return `${fmt(m, m < 100 ? 2 : 0)} m`;
}

/* ---------- real colours (facts) ---------- */
const hex = (r, g, b) => '#' + [r, g, b].map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')).join('');
/* the colour of visible light of one wavelength, 380 to 780 nm (the usual piecewise approximation, dimmed at the ends of the eye's range) */
function spectral(nm) {
  let r = 0, g = 0, b = 0;
  if (nm < 440) { r = (440 - nm) / 60; b = 1; } else if (nm < 490) { g = (nm - 440) / 50; b = 1; }
  else if (nm < 510) { g = 1; b = (510 - nm) / 20; } else if (nm < 580) { r = (nm - 510) / 70; g = 1; }
  else if (nm < 645) { r = 1; g = (645 - nm) / 65; } else { r = 1; }
  const f = nm < 420 ? 0.3 + 0.7 * (nm - 380) / 40 : nm > 700 ? 0.3 + 0.7 * (780 - nm) / 80 : 1;
  return hex(255 * r * f, 255 * g * f, 255 * b * f);
}

/* =====================================================================
   FIGURE 13.1.1: plane-polarized light travelling. Mathematical 3D (root
   28.3): a wave with two perpendicular parts. The scene's coordinates are
   in units of 100 nm: the wave travels along +y from 0 to 20 (2000 nm), the
   electric field oscillates along z and the magnetic field along x, both
   drawn 2 units high per V/m of A_e (the magnetic one to the same height:
   the drawing compares directions, not sizes). Moving: the wave travels
   steadily, one optical period every 2 s of drawing; the model time t is
   in femtoseconds. A probe at y = 400 nm follows A_t = A_e sin(2 pi nu t + phi),
   so phi is the phase at the probe. The bracket marks one wavelength between
   successive crests, on the far side of the probe. Orbit: yaw within
   +-66 deg and pitch within +-57 deg of the side view, so the propagation
   axis is never seen end on; no spin, no zoom. Opens on the sodium D line,
   589 nm (Example 13.1.1).
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-em-wave');
  const S = F.space3d(d, { box: [[-3, 3], [0, 20], [-3, 3]], h: 560, turn: -0.35, tilt: 0.28, fit: 3.6,
    yaw: [-1.15, 1.15], pitch: [-1.0, 1.0], spin: 'off', zoom: false });
  const cy = F.cycle(() => Infinity, 0);
  const LAM = ctl(d.controls, { label: '\\klambda', cls: 'wavelength', min: 380, max: 750, step: 1, value: 589, unit: 'nm', dec: 0,
    detents: [{ v: 589, label: 'Na D' }], snap: true, aria: 'the wavelength in nanometres' });
  const AMP = ctl(d.controls, { label: '\\kAe', cls: 'electric-field', min: 0.5, max: 1.4, step: 0.05, value: 1.0, unit: 'V/m', dec: 2, aria: 'the maximum amplitude of the electric field' });
  const PHI = ctl(d.controls, { label: '\\phi', cls: '', min: -3.14, max: 3.14, step: 0.01, value: 0, unit: 'rad', dec: 2, detents: [0], aria: 'the phase angle' });
  const YP = 4, DRAWN_PERIOD = 2;   /* the probe's place (100 nm units); seconds of drawing per optical period */
  function draw() {
    const lamNm = LAM.v, lamU = lamNm / 100, A = AMP.v, phi = PHI.v, z0 = 2 * A;
    const nu = C_LIGHT / (lamNm * 1e-9), Tfs = 1e15 / nu;
    const now = cy.now(), tReal = Number.isFinite(now) ? now : 0.3 * DRAWN_PERIOD;
    const tfs = +((tReal / DRAWN_PERIOD) * Tfs % (10 * Tfs)).toFixed(2);
    const ph = (y) => TAU * (tfs / Tfs) - TAU * (y - YP) / lamU + phi;
    const ce = C('electric-field'), cb = C('magnetic-field'), cl = C('wavelength');
    const N = 400, ys = Array.from({ length: N + 1 }, (_, i) => 20 * i / N);
    const eCurve = ys.map((y) => [0, y, z0 * Math.sin(ph(y))]);
    const bCurve = ys.map((y) => [z0 * Math.sin(ph(y)), y, 0]);
    const stems = (f) => Array.from({ length: 51 }, (_, i) => { const y = 0.4 * i; return [[0, y, 0], f(y)]; });
    S.set('axis', [
      { k: 'line', pts: [[0, 0, 0], [0, 20, 0]], color: 'ink', w: 2.5, name: 'the direction of propagation' },
      { k: 'arrow', a: [0, 19.2, 0], b: [0, 20.8, 0], color: 'ink', w: 3 },
      { k: 'label', s: 'direction of travel', p: [0, 21.6, -0.9] },
    ]);
    S.set('e', [
      { k: 'segs', segs: stems((y) => [0, y, z0 * Math.sin(ph(y))]), color: alpha(ce, 0.35), w: 1.5 },
      { k: 'line', pts: eCurve, color: ce, w: 4, name: 'the electric field' },
      { k: 'label', s: 'electric field', p: [0, 0.2, z0 + 1.0], color: ce },
    ]);
    S.set('b', [
      { k: 'segs', segs: stems((y) => [z0 * Math.sin(ph(y)), y, 0]), color: alpha(cb, 0.35), w: 1.5 },
      { k: 'line', pts: bCurve, color: cb, w: 4, name: 'the magnetic field' },
      { k: 'label', s: 'magnetic field', p: [z0 + 1.4, 9, 0], color: cb },
    ]);
    /* the probe: the field at one point, as the readout writes it */
    const ep = z0 * Math.sin(ph(YP));
    S.set('probe', [
      ...(Math.abs(ep) > 0.05 ? [{ k: 'arrow', a: [0, YP, 0], b: [0, YP, ep], color: ce, w: 5 }] : []),
      { k: 'dot', p: [0, YP, ep], color: ce, r: 7, name: `the probe: the electric field at one point, ${fmt(ep / 2, 2)} V/m` },
      { k: 'label', s: 'probe', p: [0, YP, -z0 - 0.9] },
    ]);
    /* one wavelength between two successive crests, beyond the probe */
    const kc = tfs / Tfs + phi / TAU - 0.25;
    let yc = YP + lamU * (kc - Math.floor(kc));      /* the first crest at or past the probe */
    while (yc < YP + 2.5) yc += lamU;
    const zb = z0 + 0.6;
    S.set('lambda', yc + lamU <= 19.6 ? [
      { k: 'segs', segs: [[[0, yc, z0], [0, yc, zb + 0.3]], [[0, yc + lamU, z0], [0, yc + lamU, zb + 0.3]]], color: alpha(cl, 0.8), w: 2 },
      { k: 'line', pts: [[0, yc, zb], [0, yc + lamU, zb]], color: cl, w: 3, name: `one wavelength, ${fmt(lamNm, 0)} nm` },
      { k: 'label', s: 'λ', p: [0, yc + lamU / 2, zb + 0.7], color: cl },
    ] : []);
    S.headline(`Crests ${fmt(lamNm, 0)} nm apart pass the probe ${sciText(nu)} times a second, and the two fields rise and fall together.`);
    const at = A * Math.sin(TAU * (+sci(nu).replace('\\times10^{', 'e').replace('}', '')) * tfs * 1e-15 + phi);
    tex(d.readout, `\\kAt = \\kAe\\sin(2\\pi\\knu \\kt + \\phi) \\\\ \\kAt = (${fmt(A, 2)}\\ \\text{V/m})\\sin\\left(2\\pi(${sci(nu)}\\ \\text{s}^{-1})(${fmt(tfs, 2)}\\times10^{-15}\\ \\text{s}) ${phi < 0 ? '-' : '+'} ${fmt(Math.abs(phi), 2)}\\right) = ${fmt(at, 2)}\\ \\text{V/m} \\\\ \\klambda = \\dfrac{c}{\\knu} = \\dfrac{3.00\\times10^{8}\\ \\text{m/s}}{${sci(nu)}\\ \\text{s}^{-1}} = ${fmt(lamNm, 0)}\\ \\text{nm}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 13.1.2: one photon on the electromagnetic spectrum. Still: a
   spectrum has no time in it. x: log10 of the wavelength in metres, -14
   to 4, fixed; the frequency scale above is the same axis read through
   nu = c / lambda. The regions and their transitions are the book's
   figure's (Harvey, after Zedh); the visible band is painted in its own
   colours (fact: spectrum). One slider, the photon's wavelength on a log
   scale, opens on the sodium D line, 589 nm (Example 13.1.1), with a detent
   at the Balmer line of Exercise 13.1.1, 656.3 nm. The photon wears its
   real colour when it is visible, and the wavelength's colour otherwise.
===================================================================== */
(function () {
  const d = sim('sim-em-spectrum', 520);
  const LG = ctl(d.controls, { label: '\\klambda', cls: 'wavelength', min: -13.5, max: 3.5, step: 0.0001, value: Math.log10(589e-9), unit: '', dec: 3,
    fmt: (v) => lamText(Math.pow(10, v)),
    detents: [{ v: Math.log10(589e-9), label: 'Na D' }, Math.log10(656.3e-9)], snap: true,
    aria: 'the wavelength of the photon, on a logarithmic scale' });
  const VIS = [Math.log10(380e-9), Math.log10(750e-9)];
  const REG = [
    { a: -14, b: -11, name: 'γ-rays', what: 'nuclear energy levels', row: 0 },
    { a: -11, b: -8, name: 'X-rays', what: 'core-level electrons', row: 1 },
    { a: -8, b: VIS[0], name: 'UV', what: 'valence electrons', row: 0, span: [-8, VIS[1]] },
    { a: VIS[0], b: VIS[1], name: 'visible', what: 'valence electrons', row: -1 },
    { a: VIS[1], b: -3, name: 'IR', what: 'molecular vibrations', row: 1 },
    { a: -3, b: 0, name: 'microwave', what: 'molecular rotations; electron spin', row: 0 },
    { a: 0, b: 4, name: 'radio', what: 'nuclear spin', row: 1 },
  ];
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const box = { l: 110, r: 1310 }, X = (lg) => box.l + (lg + 14) / 18 * (box.r - box.l);
    const sT = 200, sB = 300, cl = C('wavelength'), cf = C('frequency');
    const lg = LG.v, lam = Math.pow(10, lg), nm = lam * 1e9, visible = nm >= 380 && nm <= 750;
    const reg = REG.find((r) => lg >= r.a && lg < r.b) ?? REG[REG.length - 1];
    /* the regions, alternate shades, the visible band in its own colours */
    REG.forEach((r, i) => {
      if (r.name === 'visible') {
        for (let n = 380; n < 750; n += 2) { const x0 = X(Math.log10(n * 1e-9)), x1 = X(Math.log10((n + 2) * 1e-9)); ctx.save(); ctx.fillStyle = F.fact(spectral(n + 1)); ctx.fillRect(x0, sT, x1 - x0 + 0.6, sB - sT); ctx.restore(); }
      } else {
        ctx.save(); ctx.fillStyle = alpha(PAL.ink, i % 2 ? 0.1 : 0.05); ctx.fillRect(X(r.a), sT, X(r.b) - X(r.a), sB - sT); ctx.restore();
        text(ctx, r.name, (X(r.a) + X(r.b)) / 2, (sT + sB) / 2, r === reg ? PAL.ink : PAL.muted, { size: 20, weight: r === reg ? 600 : 400, align: 'center' });
      }
      line(ctx, X(r.a), sT, X(r.a), sB, alpha(PAL.ink, 0.45), 2);
      hits.push({ x: (X(r.a) + X(r.b)) / 2, y: (sT + sB) / 2, r: Math.max(12, (X(r.b) - X(r.a)) / 2), name: `${r.name}: ${r.what}` });
    });
    line(ctx, box.l, sT, box.r, sT, alpha(PAL.ink, 0.45), 2); line(ctx, box.l, sB, box.r, sB, alpha(PAL.ink, 0.45), 2); line(ctx, box.r, sT, box.r, sB, alpha(PAL.ink, 0.45), 2);
    /* what each region's photons do: one name per region under the strip, on two rows so neighbours never touch */
    REG.filter((r) => r.row >= 0).forEach((r) => {
      const [a, b] = r.span ?? [r.a, r.b], y = sB + 92 + 30 * r.row, on = r.what === reg.what;
      const parts = r.what.split('; ');
      parts.forEach((p, k) => text(ctx, p + (k < parts.length - 1 ? ';' : ''), (X(a) + X(b)) / 2, y + 24 * k, on ? PAL.ink : PAL.muted, { size: 17, weight: on ? 600 : 400, align: 'center' }));
    });
    /* the wavelength scale below, the frequency scale above */
    for (let e = -14; e <= 4; e += 2) {
      line(ctx, X(e), sB, X(e), sB + 10, cl, 2);
      text(ctx, `10${sup(e)}`, X(e), sB + 30, cl, { size: 17, align: 'center' });
    }
    text(ctx, 'wavelength λ (m)', box.r, sB + 60, cl, { size: 20, weight: 600, align: 'right' });
    for (let n = 6; n <= 22; n += 2) {
      const x = X(Math.log10(C_LIGHT) - n); if (x < box.l || x > box.r) continue;
      line(ctx, x, sT - 10, x, sT, cf, 2);
      text(ctx, `10${sup(n)}`, x, sT - 28, cf, { size: 17, align: 'center' });
    }
    text(ctx, 'frequency ν (s⁻¹)', box.r, sT - 66, cf, { size: 20, weight: 600, align: 'right' });
    /* the photon */
    const x = X(lg), pc = visible ? F.fact(spectral(nm)) : cl;
    line(ctx, x, sT - 4, x, sB + 4, PAL.ink, 3);
    dot(ctx, x, (sT + sB) / 2, pc, true, 13);
    hits.push({ x, y: (sT + sB) / 2, r: 16, name: `the photon, λ = ${lamText(lam)}` });
    const nu = C_LIGHT / lam;
    const where = reg.name === 'visible' ? 'visible light' : reg.name === 'radio' ? 'a radio wave' : reg.name === 'microwave' ? 'a microwave' : reg.name === 'γ-rays' ? 'a γ-ray' : reg.name === 'X-rays' ? 'an X-ray' : `${reg.name} radiation`;
    topline(ctx, `A ${lamText(lam)} photon is ${where}: it drives transitions of ${reg.what.replace('; ', ' and of ')}.`);
    const lamTex = sci(lam), nuTex = sci(nu), nutTex = sci(1 / (lam * 100)), eTex = sci(H_PLANCK * (+nuTex.replace('\\times10^{', 'e').replace('}', '')));
    tex(d.readout, `\\knu = \\dfrac{c}{\\klambda} = \\dfrac{3.00\\times10^{8}\\ \\text{m/s}}{${lamTex}\\ \\text{m}} = ${nuTex}\\ \\text{s}^{-1} \\\\ \\knut = \\dfrac{1}{\\klambda} = ${nutTex}\\ \\text{cm}^{-1} \\\\ \\kdE = h\\knu = ${eTex}\\ \\text{J}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
