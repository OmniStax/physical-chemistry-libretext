/* Figures for section 1.8 The Bohr Theory of the Hydrogen Atom. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.8'] = function (root, F) {
const { el, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, topline, axes, plot, fmt, hbracket } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;
/* a readout line and, where the figure shows one more fact, a small second line set through the same macros */
function readout(host, main, small) { tex(host, main); if (small) { const s = el('small', null, small); host.appendChild(s); F.renderMath(s); } }
/* a quantum number or a named state is a choice, never a slider (rule 26.1) */
function pick(controls, { label, options, value, aria, onInput }) {
  const c = F.choice(controls, { label, options: options.map((o) => ({ value: String(o.value), label: o.label })), value: String(value), aria, onInput });
  return { get v() { return +c.value; }, c };
}

/* ---------- constants, SI, as the book states them ---------- */
const H = 6.626e-34, HBAR = 1.0546e-34, CL = 2.998e8, ME = 9.109e-31, QE = 1.602e-19;
const KC = 8.988e9;                  /* k = 1/(4 pi epsilon_0), N m^2/C^2 */
const A0 = 52.92;                    /* pm, the Bohr radius */
const RY = 2.18e-18;                 /* J, the Rydberg energy of Equation 1.8.11 */
const RHZ = RY / H;                  /* Hz, Z^2 e^4 m_e / (8 eps0^2 h^3) for Z = 1, the constant of Equation 1.8.12 */
const RE = 2.818e-15;                /* m, the classical radius of the electron, k e^2 / (m_e c^2) */

/* ---------- numbers in scientific form ---------- */
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (s) => String(s).split('').map((c) => SUP[c] ?? c).join('');
const expOf = (x) => Math.floor(Math.log10(Math.abs(x)) + 1e-9);
function sciU(x, d = 2) { if (x === 0) return '0'; const e = expOf(x), m = x / Math.pow(10, e); return (m < 0 ? '−' : '') + Math.abs(m).toFixed(d) + ' × 10' + sup(e); }
function sciT(x, d = 2) { if (x === 0) return '0'; const e = expOf(x), m = x / Math.pow(10, e); return (m < 0 ? '-' : '') + Math.abs(m).toFixed(d) + '\\times10^{' + e + '}'; }

/* ---------- the colours of light, a physical fact ---------- */
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
const visible = (nm) => nm >= 380 && nm <= 780;
/* light the eye sees is drawn in its colour; ultraviolet and infrared have a wavelength and no colour, and wear the wavelength hue */
const lightOf = (nm) => (visible(nm) ? F.fact(spectral(nm)) : C('wavelength'));
const region = (nm) => (nm < 380 ? 'in the ultraviolet' : nm > 780 ? 'in the infrared' : 'in the visible');

/* a particle drawn as a disc in its convention colour, ringed in ink */
function particle(ctx, x, y, r, sym) {
  ctx.save(); ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fillStyle = F.el(sym); ctx.fill();
  ctx.lineWidth = 2; ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 1.8.1: the classical death spiral. Moving: the electron radiates
   as it circles, and Larmor's law shrinks its orbit as r^3 = r0^3 (1 - t/T)
   with T = r0^3 / (4 r_e^2 c), 1.56 x 10^-11 s from the Bohr radius. The
   electron really turns 2 f0 T times, about 205 000 from a0; the drawing
   turns it six times, and the caption says so. The graph beside it is the
   orbital frequency, which is the frequency of the light, against time.
   x: 0 to 7 x 10^-11 s (the slider's largest orbit, 85 pm, falls in
   6.5 x 10^-11 s); y: 0 to 40 x 10^15 Hz, the curve leaving the box near
   the end, where it diverges.
===================================================================== */
(function () {
  const d = sim('sim-death-spiral', 600);
  const R0 = ctl(d.controls, { label: '\\kr_0', cls: 'length', min: 40, max: 85, step: 0.1, value: 52.9, unit: 'pm', dec: 1, detents: [{ v: 52.9, label: 'a₀' }], snap: true, aria: 'the radius of the orbit the electron starts on', onInput: () => cy.reset() });
  const LOOP = 5, TURNS = 6;
  const cy = cycle(() => LOOP, 1.2);
  const CX = 330, CY = 340, S = 2.6;                 /* canvas units per pm: the largest starting orbit, 85 pm, is 221 units */
  const collapse = (r0) => Math.pow(r0 * 1e-12, 3) / (4 * RE * RE * CL);       /* s */
  const speed = (rpm) => Math.sqrt(KC * QE * QE / (ME * rpm * 1e-12));          /* m/s */
  const freq = (rpm) => speed(rpm) / (TAU * rpm * 1e-12);                      /* Hz */
  const radiusAt = (r0, k) => r0 * Math.cbrt(Math.max(0, 1 - k));              /* pm, k = t/T */
  const angleAt = (k) => -TAU * TURNS * (1 - Math.sqrt(Math.max(0, 1 - k)));   /* the phase grows as the integral of the frequency */
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const r0 = R0.v, T = collapse(r0), k = Math.min(1, cy.now() / LOOP), t = k * T;
    const r = radiusAt(r0, k), done = r < 4;
    const cr = C('length'), cf = C('frequency');
    /* the trail of the fall, dashed */
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 2; ctx.setLineDash([6, 8]); ctx.beginPath();
    const N = Math.max(2, Math.ceil(400 * k));
    for (let i = 0; i <= N; i++) { const q = (k * i) / N, rr = radiusAt(r0, q) * S, a = angleAt(q); const x = CX + rr * Math.cos(a), y = CY + rr * Math.sin(a); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    ctx.stroke(); ctx.restore();
    /* the starting orbit, faint, and its radius */
    ctx.save(); ctx.strokeStyle = alpha(cr, 0.35); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(CX, CY, r0 * S, 0, TAU); ctx.stroke(); ctx.restore();
    line(ctx, CX, CY, CX - r0 * S * Math.cos(0.6), CY + r0 * S * Math.sin(0.6), alpha(cr, 0.7), 2, [4, 8]);
    text(ctx, 'r₀ = ' + fmt(r0, 1) + ' pm', CX - r0 * S * Math.cos(0.6) * 0.55 - 10, CY + r0 * S * Math.sin(0.6) * 0.55 + 22, cr, { size: 19, weight: 600, align: 'right', bg: PAL.panel });
    /* the nucleus */
    particle(ctx, CX, CY, 12, 'p+'); hits.push({ x: CX, y: CY, r: 16, name: 'the nucleus, a proton' });
    text(ctx, 'nucleus', CX + 20, CY - 18, PAL.muted, { size: 17 });
    /* the electron */
    if (!done) {
      const a = angleAt(k), x = CX + r * S * Math.cos(a), y = CY + r * S * Math.sin(a);
      particle(ctx, x, y, 9, 'e-'); hits.push({ x, y, r: 14, name: `the electron, ${fmt(r, 1)} pm from the nucleus` });
      if (k < 0.04) text(ctx, 'electron', x + 16, y - 16, PAL.muted, { size: 17 });
    }
    /* the frequency against time */
    const box = { l: 780, r: 1330, t: 130, b: 500 };
    const ax = axes(ctx, box, [0, 7], [0, 40], { nx: 7, ny: 4, xl: 'time t (10⁻¹¹ s)', yl: 'orbital frequency ν (10¹⁵ Hz)', xc: PAL.ink, yc: cf });
    const fOf = (ts) => { const q = (ts * 1e-11) / T; return q >= 1 ? NaN : freq(radiusAt(r0, q)) / 1e15; };
    plot(ctx, ax, fOf, alpha(cf, 0.3), { w: 3, x: [0, Math.min(7, T / 1e-11)] });
    if (k > 0) plot(ctx, ax, fOf, cf, { w: 5, x: [0, Math.min(7, t / 1e-11 * 0.9999)] });
    line(ctx, ax.X(T / 1e-11), box.t, ax.X(T / 1e-11), box.b, alpha(PAL.ink, 0.4), 2, [10, 10]);
    text(ctx, 'on the nucleus', ax.X(T / 1e-11) + 8, box.t + 14, PAL.muted, { size: 17 });
    const fNow = done ? Infinity : freq(r) / 1e15;
    if (!done && fNow <= 40) dot(ctx, ax.X(t / 1e-11), ax.Y(fNow), cf, true, 9);
    /* the headline and the readout */
    topline(ctx, done
      ? `The electron has spiralled into the nucleus after ${fmt(T / 1e-11, 2)} × 10⁻¹¹ s, sweeping every frequency on the way: a continuous spectrum, not lines.`
      : `After ${fmt(t / 1e-11, 2)} × 10⁻¹¹ s the electron is ${fmt(r, 1)} pm from the nucleus and circles ${fmt(fNow, 2)} × 10¹⁵ times a second; it reaches the nucleus at ${fmt(T / 1e-11, 2)} × 10⁻¹¹ s.`);
    const rr = Math.max(r, 4), v = speed(rr), f = freq(rr);
    readout(d.readout,
      `\\knu = \\dfrac{\\kv}{2\\pi \\kr} = \\dfrac{${fmt(v / 1e6, 2)}\\times10^{6}\\ \\text{m/s}}{2\\pi\\,(${fmt(rr, 1)}\\times10^{-12}\\ \\text{m})} = ${fmt(f / 1e15, 2)}\\times10^{15}\\ \\text{Hz}`,
      `From $\\kr_0 = ${fmt(r0, 1)}$ pm the fall takes $${sciT(T)}$ s, and on the way the electron really circles about ${fmt(2 * freq(r0) * T / 1000, 0)} thousand times.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 1.8.2: the Coulomb potential, both signs. Still: a pair and a
   separation answer the controls. A proton sits at the left end of the
   graph's own r axis and the second particle at r, so the scene and the
   curve share one scale. The choice morphs the curve through zero from
   one sign to the other; the tangent at r has slope -F.
   x: r from 0 to 400 pm; y: V from -8 to 8 x 10^-18 J (k e^2 / 30 pm,
   the slider's least separation, is 7.69 x 10^-18 J).
===================================================================== */
(function () {
  const d = sim('sim-coulomb', 700);
  const P = F.choice(d.controls, { label: '\\text{charges}', options: [{ value: 'like', label: 'same sign (p⁺, p⁺)' }, { value: 'opposite', label: 'opposite signs (p⁺, e⁻)' }], value: 'like', aria: 'the signs of the two charges' });
  const R = ctl(d.controls, { label: '\\kr', cls: 'length', min: 30, max: 400, step: 1, value: 100, unit: 'pm', dec: 0, aria: 'the distance between the two charges' });
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const like = P.value === 'like', s = P.mix((v) => (v === 'like' ? 1 : -1)), r = R.v;
    const ce = C('energy'), cr = C('length'), cF = C('force');
    const V = (x) => (KC * QE * QE * s / (x * 1e-12)) / 1e-18;             /* 10^-18 J */
    const box = { l: 170, r: 1320, t: 300, b: 610 };
    const ax = axes(ctx, box, [0, 400], [-8, 8], { nx: 8, ny: 4, xl: 'separation r (pm)', yl: 'potential energy V (10⁻¹⁸ J)', xc: cr, yc: ce });
    line(ctx, box.l, ax.Y(0), box.r, ax.Y(0), alpha(PAL.ink, 0.4), 2);
    plot(ctx, ax, V, ce, { w: 5, x: [12, 400] });
    const vr = V(r), Fv = KC * QE * QE / Math.pow(r * 1e-12, 2);         /* N, the magnitude */
    F.tangent(ctx, ax, V, r, alpha(cF, 0.8), { df: (x) => -V(x) / x, w: 3, dash: [10, 10] });
    const py = Math.max(box.t, Math.min(box.b, ax.Y(vr)));
    line(ctx, ax.X(r), py, ax.X(r), ax.Y(0), alpha(PAL.ink, 0.4), 2, [4, 8]);
    dot(ctx, ax.X(r), py, ce, true, 10);
    text(ctx, (like ? 'repulsive' : 'attractive') + ' potential', ax.X(300), ax.Y(V(300)) + (like ? -26 : 30), ce, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    /* the two charges on the r axis, above the graph */
    const sy = 150, x1 = ax.X(0), x2 = ax.X(r);
    hbracket(ctx, x1, x2, sy + 40, cr, 'r = ' + fmt(r, 0) + ' pm', { side: 'below' });
    particle(ctx, x1, sy, 14, 'p+'); hits.push({ x: x1, y: sy, r: 18, name: 'a proton, charge +e' });
    particle(ctx, x2, sy, like ? 14 : 9, like ? 'p+' : 'e-'); hits.push({ x: x2, y: sy, r: 18, name: like ? 'a second proton, charge +e' : 'an electron, charge −e' });
    text(ctx, '+e', x1, sy - 30, PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, like ? '+e' : '−e', x2, sy - 30, PAL.ink, { size: 20, weight: 600, align: 'center' });
    /* the forces: equal and opposite, outward for like charges, inward for opposite ones; length grows as 1/r^2, held to the room there is */
    const L = Math.min(150, 16 * Math.pow(100 / r, 2) + 26), dir = like ? 1 : -1;
    const roomIn = Math.max(0, (x2 - x1) / 2 - 22);
    const len = like ? L : Math.min(L, roomIn);
    if (len > 12) {
      arrow(ctx, x2 + dir * (like ? 18 : 14), sy, x2 + dir * ((like ? 18 : 14) + len), sy, cF, 4);
      arrow(ctx, x1 - dir * 18, sy, x1 - dir * (18 + len), sy, cF, 4);
    }
    text(ctx, 'F', like ? x2 + 18 + len + 14 : x2 - 14 - len / 2, sy + (like ? 6 : -26), cF, { size: 22, weight: 600, align: like ? 'left' : 'center' });
    topline(ctx, like
      ? `Two charges of the same sign ${fmt(r, 0)} pm apart: V = +${fmt(vr, 2)} × 10⁻¹⁸ J, and the force of ${sciU(Fv)} N pushes them apart.`
      : `Two charges of opposite sign ${fmt(r, 0)} pm apart: V = −${fmt(-vr, 2)} × 10⁻¹⁸ J, and the force of ${sciU(Fv)} N pulls them together.`);
    readout(d.readout,
      `\\kV(\\kr)=\\dfrac{k\\kQa\\kQb}{\\kr}=\\dfrac{${like ? '' : '-'}(8.988\\times10^{9})(1.602\\times10^{-19})^2}{${fmt(r, 0)}\\times10^{-12}}\\ \\text{J}=${sciT(like ? vr * 1e-18 : -Math.abs(vr) * 1e-18)}\\ \\text{J}`,
      `The force is $\\kF=-d\\kV/d\\kr$, minus the slope of the dashed tangent: ${like ? '+' : '−'}${sciU(Fv)} N, ${like ? 'outward, a repulsion' : 'inward, an attraction'}.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 1.8.3: the Bohr atom. Still: the quantum number and the nucleus
   are choices. The orbits n = 1 to 5 stand at one fixed scale, 10 canvas
   units to a Bohr radius, so the largest (25 a0 in hydrogen) fills the
   frame; the chosen one carries the electron, its velocity along the
   orbit and the force toward the nucleus (drawn at one length: their
   sizes are in the labels). The bars split E_n into kinetic and potential
   energy, drawn in proportion to |E_n|.
===================================================================== */
(function () {
  const d = sim('sim-bohr-atom', 640);
  const N = pick(d.controls, { label: 'n', options: [1, 2, 3, 4, 5].map((k) => ({ value: k, label: String(k) })), value: 1, aria: 'the quantum number of the orbit' });
  const ZS = [{ value: 1, label: 'H', name: 'hydrogen' }, { value: 2, label: 'He⁺', name: 'He⁺' }, { value: 3, label: 'Li²⁺', name: 'Li²⁺' }];
  const Z = pick(d.controls, { label: '\\text{nucleus}', options: ZS, value: 1, aria: 'the one-electron atom or ion' });
  const CX = 330, CY = 360, S = 10;
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const n = N.v, z = Z.v, name = ZS.find((q) => q.value === z).name;
    const ce = C('energy'), cr = C('length'), cv = C('velocity'), cF = C('force');
    const rn = (A0 / z) * n * n, vn = (z * QE * QE * KC) / (n * HBAR), En = -RY * z * z / (n * n), Fn = KC * z * QE * QE / Math.pow(rn * 1e-12, 2);
    /* the allowed orbits, faint, and the chosen one */
    for (let m = 1; m <= 5; m++) {
      const rr = (m * m / z) * S;
      ctx.save(); ctx.strokeStyle = m === n ? PAL.ink : alpha(PAL.ink, 0.22); ctx.lineWidth = m === n ? 3 : 1.5; ctx.setLineDash(m === n ? [10, 8] : []);
      ctx.beginPath(); ctx.arc(CX, CY, rr, 0, TAU); ctx.stroke(); ctx.restore();
    }
    particle(ctx, CX, CY, 6, 'p+'); hits.push({ x: CX, y: CY, r: 12, name: `the nucleus, charge +${z}e` });
    /* the electron on the chosen orbit, up and to the right */
    const R = (n * n / z) * S, a = -Math.PI / 4, ex = CX + R * Math.cos(a), ey = CY + R * Math.sin(a);
    /* its velocity, along the orbit, and the force, toward the nucleus */
    arrow(ctx, ex, ey, ex + 70 * Math.cos(a - Math.PI / 2), ey + 70 * Math.sin(a - Math.PI / 2), cv, 4);
    if (R > 34) arrow(ctx, ex, ey, ex - Math.min(70, R - 16) * Math.cos(a), ey - Math.min(70, R - 16) * Math.sin(a), cF, 4);
    particle(ctx, ex, ey, 8, 'e-'); hits.push({ x: ex, y: ey, r: 14, name: 'the electron' });
    const vx = ex + 70 * Math.cos(a - Math.PI / 2), vy = ey + 70 * Math.sin(a - Math.PI / 2);
    text(ctx, 'v = ' + fmt(vn / 1e6, 2) + ' × 10⁶ m/s', vx + 10, vy - 8, cv, { size: 18, weight: 600, bg: PAL.panel });
    text(ctx, 'F = ' + sciU(Fn) + ' N, toward the nucleus', 40, 600, cF, { size: 18, weight: 600 });
    /* the radius */
    if (R > 30) {
      line(ctx, CX, CY, CX - R * Math.cos(0.5), CY + R * Math.sin(0.5), cr, 2, [4, 8]);
    }
    text(ctx, 'r = ' + fmt(rn, rn < 100 ? 1 : 0) + ' pm', CX - Math.max(R, 30) * Math.cos(0.5) - 8, CY + Math.max(R, 30) * Math.sin(0.5) + 20, cr, { size: 19, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, 'the orbits n = 1 to 5 of ' + name + ', to scale', 40, 110, PAL.muted, { size: 17 });
    /* the energy bars, in proportion to |E_n| */
    const B0 = 330, U = 110, bx = [860, 1010, 1160], bw = 90;
    line(ctx, 820, B0, 1300, B0, PAL.ink, 2);
    text(ctx, '0', 808, B0, PAL.muted, { size: 17, align: 'right' });
    const bar = (x, v, label, sub, hollow) => {
      const y0 = B0, y1 = B0 - v * U;
      ctx.save(); ctx.fillStyle = alpha(ce, hollow ? 0.18 : 0.75); ctx.strokeStyle = ce; ctx.lineWidth = 3;
      ctx.fillRect(x, Math.min(y0, y1), bw, Math.abs(y1 - y0)); ctx.strokeRect(x, Math.min(y0, y1), bw, Math.abs(y1 - y0)); ctx.restore();
      text(ctx, label, x + bw / 2, v > 0 ? y1 - 40 : y1 + 26, ce, { size: 20, weight: 600, align: 'center' });
      text(ctx, sub, x + bw / 2, v > 0 ? y1 - 16 : y1 + 50, ce, { size: 16, align: 'center' });
    };
    bar(bx[0], 1, 'kinetic', sciU(-En) + ' J', true);
    bar(bx[1], -2, 'potential', sciU(2 * En) + ' J', true);
    bar(bx[2], -1, 'total Eₙ', sciU(En) + ' J', false);
    topline(ctx, `In ${name} the n = ${n} orbit has a radius of ${fmt(rn, 1)} pm, the electron moves at ${fmt(vn / 1e6, 2)} × 10⁶ m/s, and its energy is ${sciU(En)} J.`);
    readout(d.readout,
      `\\krn=\\dfrac{\\kao}{Z}n^2=\\dfrac{52.9\\ \\text{pm}}{${z}}\\,(${n})^2=${fmt(rn, 1)}\\ \\text{pm}`,
      `$\\kEn=-(2.18\\times10^{-18})\\dfrac{Z^2}{n^2}\\ \\text{J}=-(2.18\\times10^{-18})\\dfrac{${z}^2}{${n}^2}\\ \\text{J}=${sciT(En)}$ J, and $\\kme\\kv\\kr=${n}\\hbar$.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 1.8.4 + 1.8.6 + 1.8.7: the hydrogen ladder. Moving: the electron
   makes its quantum leaps down to the chosen level, one starting level
   after another (n_f + 1 up to 8), and each leap sends a photon flying to
   the spectrum, where its line lands in its real colour. A photon leaving
   is kinematic, so the figure moves (rule 24.1); the transition arrows are
   notation and stand still. Rungs to scale, E_n = -2.18 x 10^-18 J / n^2;
   the strip is logarithmic in wavelength from 80 to 8000 nm, which holds
   every line from Lyman to Pfund for n <= 8.
===================================================================== */
(function () {
  const d = sim('sim-hydrogen-ladder', 780);
  const SERIES = [{ value: 1, label: 'Lyman', name: 'Lyman' }, { value: 2, label: 'Balmer', name: 'Balmer' }, { value: 3, label: 'Paschen', name: 'Paschen' }, { value: 4, label: 'Brackett', name: 'Brackett' }, { value: 5, label: 'Pfund', name: 'Pfund' }];
  const NF = pick(d.controls, { label: 'n_f', options: SERIES.map((s) => ({ value: s.value, label: `${s.label} (${s.value})` })), value: 1, aria: 'the level the electron falls to, which names the series', onInput: () => cy.reset() });
  const NMAX = 8, STEP = 1.1;
  const leaps = () => NMAX - NF.v;
  const cy = cycle(() => leaps() * STEP, 1.6);
  const LAD = { l: 190, r: 560, top: 150, bottom: 520 };
  const ladderY = (n) => (n === Infinity ? LAD.top : LAD.bottom - (LAD.bottom - LAD.top) * (1 - 1 / (n * n)));
  const STRIP = { l: 190, r: 1320, y: 690, h: 40 };
  const LO = Math.log10(80), HI = Math.log10(8000);
  const X = (nm) => STRIP.l + ((Math.log10(nm) - LO) / (HI - LO)) * (STRIP.r - STRIP.l);
  const energy = (n) => -RY / (n * n);
  const lambdaNm = (ni, nf) => (H * CL / (energy(ni) - energy(nf))) * 1e9;
  const ease = (u) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u));
  let hits = []; F.hover(d.stage, () => hits);
  function strip(ctx) {
    const cw = C('wavelength'), y = STRIP.y, h = STRIP.h;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(STRIP.l, y - h / 2, STRIP.r - STRIP.l, h); ctx.restore();
    for (let nm = 380; nm < 780; nm += 4) { ctx.save(); ctx.fillStyle = F.fact(spectral(nm + 2)); ctx.globalAlpha = 0.35; ctx.fillRect(X(nm), y - h / 2, X(nm + 4) - X(nm) + 0.6, h); ctx.restore(); }
    line(ctx, STRIP.l, y + h / 2, STRIP.r, y + h / 2, cw, 2);
    [100, 200, 500, 1000, 2000, 5000].forEach((t) => { line(ctx, X(t), y + h / 2, X(t), y + h / 2 + 8, cw, 2); text(ctx, t >= 1000 ? (t / 1000) + ' µm' : t + ' nm', X(t), y + h / 2 + 24, cw, { size: 17, align: 'center' }); });
    text(ctx, 'ultraviolet', X(170), y - h / 2 - 14, PAL.muted, { size: 15, align: 'center' });
    text(ctx, 'visible', X(560), y - h / 2 - 14, PAL.muted, { size: 15, align: 'center' });
    text(ctx, 'infrared', X(2400), y - h / 2 - 14, PAL.muted, { size: 15, align: 'center' });
    text(ctx, 'wavelength λ, logarithmic', STRIP.r, y + h / 2 + 50, cw, { size: 18, weight: 600, align: 'right' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const nf = NF.v, ser = SERIES.find((s) => s.value === nf), count = leaps();
    const tm = cy.now(), idx = Math.min(count - 1, Math.floor(tm / STEP)), u = Math.min(1, (tm - idx * STEP) / STEP);
    const ni = nf + 1 + idx, ce = C('energy');
    const fall = ease((u - 0.15) / 0.3), fly = ease((u - 0.45) / 0.5);
    strip(ctx);
    /* every line of every series, faint, and the chosen series' landed lines in full */
    for (let f = 1; f <= 5; f++) for (let m = f + 1; m <= NMAX; m++) { const w = lambdaNm(m, f); line(ctx, X(w), STRIP.y - STRIP.h / 2, X(w), STRIP.y + STRIP.h / 2, alpha(lightOf(w), 0.22), 2); }
    for (let j = 0; j <= idx; j++) {
      if (j === idx && fly < 1) continue;
      const w = lambdaNm(nf + 1 + j, nf);
      line(ctx, X(w), STRIP.y - STRIP.h / 2 - 6, X(w), STRIP.y + STRIP.h / 2, lightOf(w), j === idx ? 5 : 3.5);
    }
    /* the series limit */
    const lim = nf * nf * H * CL / RY * 1e9;
    line(ctx, X(lim), STRIP.y - STRIP.h / 2 - 10, X(lim), STRIP.y + STRIP.h / 2 + 4, alpha(C('wavelength'), 0.8), 2, [4, 6]);
    /* the rungs, the ionization limit, and their labels fanned on leaders */
    const ns = [1, 2, 3, 4, 5, 6, 7, 8];
    ns.forEach((m) => line(ctx, LAD.l, ladderY(m), LAD.r, ladderY(m), m === nf ? ce : alpha(ce, 0.7), m === nf ? 5 : 3));
    line(ctx, LAD.l, LAD.top, LAD.r, LAD.top, ce, 2.5, [10, 10]);
    arrow(ctx, LAD.l - 46, LAD.bottom + 6, LAD.l - 46, LAD.top - 30, ce, 4);
    text(ctx, 'E', LAD.l - 46, LAD.top - 48, ce, { size: 24, weight: 600, align: 'center' });
    const slots = []; let last = -Infinity;
    [Infinity, 8, 7, 6, 5, 4, 3, 2, 1].forEach((m) => { const y0 = ladderY(m), y = Math.max(y0, last + 26); slots.push([m, y0, y]); last = y; });
    const LX = 600;
    slots.forEach(([m, y0, y]) => {
      line(ctx, LAD.r + 6, y0, LX - 10, y, alpha(PAL.ink, 0.3), 1.5);
      text(ctx, m === Infinity ? 'n → ∞' : 'n = ' + m, LX, y, PAL.ink, { size: 18, weight: 600, bg: PAL.panel });
      text(ctx, (m === Infinity ? '0' : sciU(energy(m))) + ' J', LX + 82, y, ce, { size: 17, bg: PAL.panel });
    });
    /* the series' transition arrows, notation and still */
    const AX0 = 250, DX = 40;
    for (let j = 0; j < count; j++) {
      const m = nf + 1 + j, x = AX0 + DX * j;
      arrow(ctx, x, ladderY(m), x, ladderY(nf), j === idx ? ce : alpha(ce, 0.3), j === idx ? 4 : 2.5);
    }
    text(ctx, ser.name + ' series', AX0 + DX * (count - 1) / 2, ladderY(nf) + 28, ce, { size: 19, weight: 600, align: 'center', bg: PAL.panel });
    /* the electron at its starting level, then falling */
    const xi = AX0 + DX * idx - 18, y1 = ladderY(ni), y2 = ladderY(nf), ey = y1 + (y2 - y1) * fall;
    particle(ctx, xi, ey, 8, 'e-'); hits.push({ x: xi, y: ey, r: 13, name: 'the electron' });
    /* the photon: a short wave train flying from the arrow to its line on the strip */
    const w = lambdaNm(ni, nf);
    if (u > 0.45 && fly < 1) {
      const x0 = AX0 + DX * idx, yA = (y1 + y2) / 2, x1 = X(w), yB = STRIP.y - STRIP.h / 2 - 8;
      const px = x0 + (x1 - x0) * fly, py = yA + (yB - yA) * fly, dx = x1 - x0, dy = yB - yA, L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L;
      ctx.save(); ctx.strokeStyle = lightOf(w); ctx.lineWidth = 3.5; ctx.beginPath();
      for (let i = 0; i <= 60; i++) { const s = -60 + i, wob = 9 * Math.sin(s * 0.55) * Math.exp(-Math.pow(s / 30 + 1, 2) * 1.2); const x = px + ux * s - uy * wob, y = py + uy * s + ux * wob; if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
      ctx.stroke(); ctx.restore();
      hits.push({ x: px, y: py, r: 18, name: `a photon of ${fmt(w, 1)} nm` });
    }
    if (fly >= 1) text(ctx, fmt(w, w < 1000 ? 1 : 0) + ' nm', X(w), STRIP.y - STRIP.h / 2 - 22, visible(w) ? PAL.ink : C('wavelength'), { size: 17, weight: 600, align: 'center', bg: PAL.panel });
    const nu = RHZ * (1 / (nf * nf) - 1 / (ni * ni)), dE = H * nu;
    topline(ctx, `The electron falls from n = ${ni} to n = ${nf} and the atom emits a photon of ${fmt(w, 1)} nm, ${region(w)}: a line of the ${ser.name} series.`);
    readout(d.readout,
      `\\knu=\\dfrac{Z^2 \\ke^4 \\kme}{8\\epsilon_0^2h^3}\\left(\\dfrac{1}{n_f^2}-\\dfrac{1}{n_i^2}\\right)=(3.29\\times10^{15}\\ \\text{Hz})\\left(\\dfrac{1}{${nf}^2}-\\dfrac{1}{${ni}^2}\\right)=${sciT(nu)}\\ \\text{Hz}`,
      `The photon carries $h\\knu = ${sciT(dE)}$ J, and its wavelength is $\\klambda = c/\\knu$ = ${fmt(w, 1)} nm.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 1.8.5: the electron wave on a circle. Still: the wavelength is
   the whole figure. The orbit is hydrogen's n = 3, r = 9 a0 = 476.3 pm,
   circumference 2992.6 pm. The wave is followed around six laps, each
   faint; the bold curve is their sum divided by six, which keeps the full
   wave only where a whole number of wavelengths fits the circumference.
   The dashed circles on the slider are those wavelengths, 2 pi r / n.
   On the right the orbit unrolled: lap one solid, lap two dashed.
===================================================================== */
(function () {
  const d = sim('sim-orbit-wave', 560);
  const RPM = 9 * A0, CIRC = TAU * RPM, LAPS = 6;
  const specials = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({ at: CIRC / n, label: 'n = ' + n }));
  const L = ctl(d.controls, { label: '\\klambda', cls: 'wavelength', min: 360, max: 3100, step: 0.5, value: +(CIRC / 3).toFixed(1), unit: 'pm', dec: 1, specials, aria: 'the wavelength of the electron wave' });
  const CX = 290, CY = 320, R = 170, AMP = 26;
  const SX0 = 640, SX1 = 1320, SY = 320, SA = 70;
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const lam = L.v, n = CIRC / lam, k = Math.round(n), whole = Math.abs(n - k) < 0.004;
    const cw = C('wavelength'), cr = C('length');
    /* the surviving fraction: |sum of e^(i 2 pi j C / lambda)| / LAPS */
    let re = 0, im = 0; for (let j = 0; j < LAPS; j++) { re += Math.cos(TAU * j * n); im += Math.sin(TAU * j * n); }
    const keep = Math.hypot(re, im) / LAPS;
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(CX, CY, R, 0, TAU); ctx.stroke(); ctx.restore();
    particle(ctx, CX, CY, 8, 'p+'); hits.push({ x: CX, y: CY, r: 12, name: 'the nucleus' });
    line(ctx, CX, CY, CX + R * Math.cos(-0.5), CY + R * Math.sin(-0.5), cr, 2, [4, 8]);
    text(ctx, 'r = 476.3 pm', CX + R * 0.5 * Math.cos(-0.5) + 6, CY + R * 0.5 * Math.sin(-0.5) - 18, cr, { size: 18, weight: 600, bg: PAL.panel });
    const ring = (f, color, w) => {
      ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
      for (let i = 0; i <= 480; i++) { const th = (TAU * i) / 480, rr = R + AMP * f(th); const x = CX + rr * Math.cos(th - Math.PI / 2), y = CY + rr * Math.sin(th - Math.PI / 2); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
      ctx.stroke(); ctx.restore();
    };
    for (let j = 0; j < LAPS; j++) ring((th) => Math.sin(TAU * (th / TAU + j) * n), alpha(cw, 0.22), 2);
    ring((th) => { let s = 0; for (let j = 0; j < LAPS; j++) s += Math.sin(TAU * (th / TAU + j) * n); return s / LAPS; }, cw, 5);
    text(ctx, 'faint: each lap; bold: their sum', CX, CY + R + AMP + 40, PAL.muted, { size: 17, align: 'center' });
    /* the orbit unrolled: one circumference, lap one solid and lap two dashed */
    const Xs = (s) => SX0 + ((SX1 - SX0) * s) / CIRC;
    line(ctx, SX0, SY, SX1, SY, alpha(PAL.ink, 0.4), 2);
    [SX0, SX1].forEach((x) => line(ctx, x, SY - SA - 20, x, SY + SA + 20, PAL.muted, 2));
    const lap = (j, dash, w) => { ctx.save(); ctx.strokeStyle = cw; ctx.lineWidth = w; if (dash) ctx.setLineDash([10, 10]); ctx.beginPath(); for (let i = 0; i <= 500; i++) { const s = (CIRC * i) / 500, x = Xs(s), y = SY - SA * Math.sin((TAU * (s + j * CIRC)) / lam); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); } ctx.stroke(); ctx.restore(); };
    lap(0, false, 4); lap(1, true, 3);
    text(ctx, 'start', SX0, SY + SA + 40, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'once around, 2992.6 pm', SX1, SY + SA + 40, cr, { size: 17, align: 'right' });
    text(ctx, 'the orbit unrolled: first lap solid, second lap dashed', (SX0 + SX1) / 2, SY - SA - 44, PAL.muted, { size: 17, align: 'center' });
    if (lam <= CIRC) hbracket(ctx, Xs(0), Xs(lam), SY + SA + 8, cw, 'λ = ' + fmt(lam, 1) + ' pm', { side: 'below' });
    topline(ctx, whole
      ? `Exactly ${k} wavelength${k > 1 ? 's' : ''} of ${fmt(lam, 1)} pm fit the orbit, every lap lands on the last, and the wave survives.`
      : `The orbit holds ${fmt(n, 2)} wavelengths of ${fmt(lam, 1)} pm; the laps fall out of step and after six of them only ${fmt(100 * keep, 0)}% of the wave is left.`);
    readout(d.readout,
      `2\\pi \\kr = n\\klambda:\\quad 2\\pi\\,(476.3\\ \\text{pm}) = 2992.6\\ \\text{pm} = ${fmt(n, 2)}\\times ${fmt(lam, 1)}\\ \\text{pm}`,
      whole && k === 3 ? 'With $n = 3$ this is the de Broglie wavelength $\\klambda = h/\\kp$ of the electron on the third Bohr orbit, since $\\kme\\kv\\kr = 3\\hbar$.' : '');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
