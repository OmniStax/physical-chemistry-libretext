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
   turns it six times, and the readout says so (rule 28.4). The spiral is
   the point and fills the left two thirds; the frequency it radiates at is
   traced beside it as the electron falls, with no preview of the curve.
   x: 0 to 4 x 10^-11 s (the slider's largest orbit, 70 pm, falls in
   3.6 x 10^-11 s); y: 0 to 40 x 10^15 Hz, the curve leaving the box near
   the end, where it diverges.
===================================================================== */
(function () {
  const d = sim('sim-death-spiral', 620);
  const R0 = ctl(d.controls, { label: '\\kr_0', cls: 'length', min: 40, max: 70, step: 0.1, value: 52.9, unit: 'pm', dec: 1, detents: [{ v: 52.9, label: 'a₀' }], snap: true, aria: 'the radius of the orbit the electron starts on', onInput: () => cy.reset() });
  const LOOP = 5, TURNS = 6;
  const cy = cycle(() => LOOP, 1.2);
  const CX = 420, CY = 360, S = 3.4;                 /* canvas units per pm: the largest starting orbit, 70 pm, is 238 units */
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
    /* the starting orbit, faint */
    ctx.save(); ctx.strokeStyle = alpha(cr, 0.35); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(CX, CY, r0 * S, 0, TAU); ctx.stroke(); ctx.restore();
    hits.push({ x: CX + r0 * S, y: CY, r: 14, name: `the starting orbit, r₀ = ${fmt(r0, 1)} pm` });
    /* the path so far, solid */
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.55); ctx.lineWidth = 2.5; ctx.beginPath();
    const N = Math.max(2, Math.ceil(500 * k));
    for (let i = 0; i <= N; i++) { const q = (k * i) / N, rr = radiusAt(r0, q) * S, a = angleAt(q); const x = CX + rr * Math.cos(a), y = CY + rr * Math.sin(a); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    ctx.stroke(); ctx.restore();
    /* the nucleus */
    particle(ctx, CX, CY, 13, 'p+'); hits.push({ x: CX, y: CY, r: 17, name: 'the nucleus, a proton' });
    text(ctx, 'nucleus', CX, CY + 40, PAL.muted, { size: 17, align: 'center', bg: PAL.panel });
    /* the electron */
    if (!done) {
      const a = angleAt(k), x = CX + r * S * Math.cos(a), y = CY + r * S * Math.sin(a);
      particle(ctx, x, y, 10, 'e-'); hits.push({ x, y, r: 15, name: `the electron, ${fmt(r, 1)} pm from the nucleus` });
      if (k < 0.05) text(ctx, 'electron', x + 18, y - 18, PAL.muted, { size: 17 });
    }
    /* the frequency against time, traced as it happens */
    const box = { l: 880, r: 1330, t: 150, b: 520 };
    const ax = axes(ctx, box, [0, 4], [0, 40], { nx: 4, ny: 4, xl: 'time t (10⁻¹¹ s)', yl: 'frequency ν (10¹⁵ Hz)', xc: PAL.ink, yc: cf });
    const fOf = (ts) => { const q = (ts * 1e-11) / T; return q >= 1 ? NaN : freq(radiusAt(r0, q)) / 1e15; };
    if (k > 0) plot(ctx, ax, fOf, cf, { w: 5, x: [0, Math.min(4, t / 1e-11 * 0.9999)] });
    const xT = ax.X(T / 1e-11);
    line(ctx, xT, box.t, xT, box.b, alpha(PAL.ink, 0.4), 2, [10, 10]);
    hits.push({ x: xT, y: (box.t + box.b) / 2, r: 12, name: `the electron reaches the nucleus at ${fmt(T / 1e-11, 2)} × 10⁻¹¹ s` });
    const fNow = done ? Infinity : freq(r) / 1e15;
    if (!done && fNow <= 40) dot(ctx, ax.X(t / 1e-11), ax.Y(fNow), cf, true, 9);
    /* the headline and the readout */
    topline(ctx, done
      ? `The electron hit the nucleus ${fmt(T / 1e-11, 2)} × 10⁻¹¹ s after it started.`
      : `After ${fmt(t / 1e-11, 2)} × 10⁻¹¹ s the electron is ${fmt(r, 1)} pm out and circles ${fmt(fNow, 2)} × 10¹⁵ times a second.`);
    const rr = Math.max(r, 4), v = speed(rr), f = freq(rr);
    readout(d.readout,
      `\\knu = \\dfrac{\\kv}{2\\pi \\kr} = \\dfrac{${fmt(v / 1e6, 2)}\\times10^{6}\\ \\text{m/s}}{2\\pi\\,(${fmt(rr, 1)}\\times10^{-12}\\ \\text{m})} = ${fmt(f / 1e15, 2)}\\times10^{15}\\ \\text{Hz}`,
      `From $\\kr_0 = ${fmt(r0, 1)}$ pm the fall takes $${sciT(T)}$ s, and the electron circles about ${fmt(2 * freq(r0) * T / 1000, 0)} thousand times on the way; the drawing shows six.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 1.8.2: the Coulomb potential, both signs. Moving: the second
   charge is let go at r0 and slides down the curve, so the force as minus
   the slope is seen, not drawn as a tangent. A proton is held at the left
   end of the graph's own r axis and the second particle sits at r, so the
   scene and the curve share one scale. The motion is r'' = s / r^2 from
   rest in model units, integrated once per start and stretched over the
   loop: its shape is Coulomb's, its clock is not. It stops where the
   charge leaves the graph, 400 pm, or meets the 30 pm floor.
   x: r from 0 to 400 pm; y: V from -8 to 8 x 10^-18 J (k e^2 / 30 pm is
   7.69 x 10^-18 J).
===================================================================== */
(function () {
  const d = sim('sim-coulomb', 680);
  const P = F.choice(d.controls, { label: '\\text{charges}', options: [{ value: 'like', label: 'same sign (p⁺, p⁺)' }, { value: 'opposite', label: 'opposite signs (p⁺, e⁻)' }], value: 'like', aria: 'the signs of the two charges', onInput: () => cy.reset() });
  const R = ctl(d.controls, { label: '\\kr_0', cls: 'length', min: 40, max: 360, step: 1, value: 100, unit: 'pm', dec: 0, aria: 'the separation the second charge starts from', onInput: () => cy.reset() });
  const LOOP = 4, RMIN = 30, RMAX = 400;
  const cy = cycle(() => LOOP, 1.2);
  let memo = new Map();
  /* r(t) from rest at r0 under r'' = s / r^2 (model units), sampled until the charge leaves [RMIN, RMAX] */
  function path(r0, s) {
    const key = r0 + ':' + s; if (memo.has(key)) return memo.get(key);
    if (memo.size > 60) memo = new Map();
    const ts = [0], rs = [r0]; let r = r0, v = 0, t = 0;
    for (let i = 0; i < 40000 && r > RMIN && r < RMAX; i++) {
      const dt = 0.002 * Math.sqrt(r * r * r);
      v += (s / (r * r)) * dt; r += v * dt; t += dt; ts.push(t); rs.push(Math.max(RMIN, Math.min(RMAX, r)));
    }
    const p = { ts, rs, end: t }; memo.set(key, p); return p;
  }
  function rAt(p, u) {
    if (p.end === 0) return p.rs[0];
    const t = u * p.end; let lo = 0, hi = p.ts.length - 1;
    while (hi - lo > 1) { const m = (lo + hi) >> 1; if (p.ts[m] <= t) lo = m; else hi = m; }
    const f = (t - p.ts[lo]) / Math.max(1e-12, p.ts[hi] - p.ts[lo]);
    return p.rs[lo] + (p.rs[hi] - p.rs[lo]) * Math.min(1, Math.max(0, f));
  }
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const like = P.value === 'like', s = P.mix((v) => (v === 'like' ? 1 : -1)), r0 = R.v;
    const u = Math.min(1, cy.now() / LOOP), r = Math.round(rAt(path(r0, like ? 1 : -1), u));
    const ce = C('energy'), cr = C('length'), cF = C('force');
    const V = (x) => (KC * QE * QE * s / (x * 1e-12)) / 1e-18;             /* 10^-18 J */
    const box = { l: 170, r: 1320, t: 300, b: 610 };
    const ax = axes(ctx, box, [0, 400], [-8, 8], { nx: 8, ny: 4, xl: 'separation r (pm)', yl: 'potential energy V (10⁻¹⁸ J)', xc: cr, yc: ce });
    line(ctx, box.l, ax.Y(0), box.r, ax.Y(0), alpha(PAL.ink, 0.4), 2);
    plot(ctx, ax, V, ce, { w: 5, x: [12, 400] });
    /* the curve's name sits on the empty side of the zero line, off the path the charge rides */
    text(ctx, (like ? 'repulsive' : 'attractive') + ' potential', ax.X(330), ax.Y(0) + (like ? 30 : -30), ce, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    const vr = V(r), Fv = KC * QE * QE / Math.pow(r * 1e-12, 2);         /* N, the magnitude */
    /* where it was let go, hollow, and where it is now, filled */
    if (Math.abs(r - r0) > 3) dot(ctx, ax.X(r0), ax.Y(V(r0)), ce, false, 10);
    const py = Math.max(box.t, Math.min(box.b, ax.Y(vr)));
    line(ctx, ax.X(r), py, ax.X(r), ax.Y(0), alpha(PAL.ink, 0.4), 2, [4, 8]);
    dot(ctx, ax.X(r), py, ce, true, 11);
    hits.push({ x: ax.X(r0), y: ax.Y(V(r0)), r: 12, name: `let go here, at ${fmt(r0, 0)} pm` });
    /* the two charges on the r axis, above the graph */
    const sy = 160, x1 = ax.X(0), x2 = ax.X(r);
    hbracket(ctx, x1, x2, sy + 42, cr, 'r = ' + fmt(r, 0) + ' pm', { side: 'below' });
    particle(ctx, x1, sy, 14, 'p+'); hits.push({ x: x1, y: sy, r: 18, name: 'a proton, held in place, charge +e' });
    particle(ctx, x2, sy, like ? 14 : 9, like ? 'p+' : 'e-'); hits.push({ x: x2, y: sy, r: 18, name: like ? 'a second proton, charge +e' : 'an electron, charge −e' });
    text(ctx, '+e', x1, sy - 32, PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, like ? '+e' : '−e', x2, sy - 32, PAL.ink, { size: 20, weight: 600, align: 'center' });
    /* the force on the moving charge: outward for like charges, inward for opposite ones; length grows as 1/r^2, held to the room there is */
    const L = Math.min(150, 16 * Math.pow(100 / r, 2) + 26);
    const len = like ? Math.min(L, box.r + 40 - x2 - 40) : Math.min(L, Math.max(0, x2 - x1 - 40));
    if (len > 12) {
      const a0 = like ? x2 + 18 : x2 - 14, a1 = like ? a0 + len : a0 - len;
      arrow(ctx, a0, sy, a1, sy, cF, 4);
      text(ctx, 'F', a1 + (like ? 12 : -12), sy, cF, { size: 22, weight: 600, align: like ? 'left' : 'right' });
      hits.push({ x: (a0 + a1) / 2, y: sy, r: 14, name: `the force on the ${like ? 'second proton' : 'electron'}, ${sciU(Fv)} N` });
    }
    topline(ctx, like
      ? `Same sign, ${fmt(r, 0)} pm apart: V = +${fmt(vr, 2)} × 10⁻¹⁸ J, and the charges push apart.`
      : `Opposite signs, ${fmt(r, 0)} pm apart: V = −${fmt(-vr, 2)} × 10⁻¹⁸ J, and the charges pull together.`);
    readout(d.readout,
      `\\kV(\\kr)=\\dfrac{k\\kQa\\kQb}{\\kr}=\\dfrac{${like ? '' : '-'}(8.988\\times10^{9})(1.602\\times10^{-19})^2}{${fmt(r, 0)}\\times10^{-12}}\\ \\text{J}=${sciT((like ? 1 : -1) * Math.abs(vr) * 1e-18)}\\ \\text{J}`,
      `The force on the moving charge is $\\kF=-d\\kV/d\\kr=${like ? '+' : '-'}${sciT(Fv)}$ N, ${like ? 'outward' : 'inward'}.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 1.8.3: the Bohr atom of hydrogen. Still: n is a choice. The
   orbits n = 1 to 5 are drawn to one scale, and that scale is chosen so
   the picked orbit is always RT units across; picking another n zooms
   (the scale eases on a log, so the orbits grow or shrink as n^2 while
   the reader looks). A scale bar gives the zoom. The velocity arrow is
   drawn in proportion to v (150 units at n = 1, so 1/n); the force arrow
   is notation at one length, its size in its hover name. No energy bars:
   E_n is in the readout.
===================================================================== */
(function () {
  const d = sim('sim-bohr-atom', 640);
  const N = F.choice(d.controls, { label: 'n', options: [1, 2, 3, 4, 5].map((k) => ({ value: String(k), label: String(k) })), value: '1', aria: 'the quantum number of the orbit', ms: 900 });
  const CX = 700, CY = 370, RT = 220;
  const BARS = [5, 10, 20, 50, 100, 200, 500, 1000, 2000];
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const n = +N.value;
    const S = Math.exp(N.mix((v) => Math.log(RT / (A0 * (+v) * (+v)))));      /* canvas units per pm, eased on a log */
    const cr = C('length'), cv = C('velocity'), cF = C('force');
    const rn = A0 * n * n, vn = (QE * QE * KC) / (n * HBAR), En = -RY / (n * n), Fn = KC * QE * QE / Math.pow(rn * 1e-12, 2);
    /* the allowed orbits; the picked one bold in the length hue; clipped below the headline band while the zoom runs */
    ctx.save(); ctx.beginPath(); ctx.rect(0, 100, 1400, 600); ctx.clip();
    for (let m = 1; m <= 5; m++) {
      const rr = A0 * m * m * S; if (rr > 900) continue;
      ctx.save(); ctx.strokeStyle = m === n ? cr : alpha(PAL.ink, 0.25); ctx.lineWidth = m === n ? 4 : 2;
      ctx.beginPath(); ctx.arc(CX, CY, rr, 0, TAU); ctx.stroke(); ctx.restore();
      if (rr > 28 && CY - rr - 24 > 100) text(ctx, 'n = ' + m, CX, CY - rr - 24, m === n ? cr : PAL.muted, { size: m === n ? 20 : 17, weight: m === n ? 600 : 400, align: 'center', bg: PAL.panel });
      hits.push({ x: CX - rr, y: CY, r: 10, name: `the n = ${m} orbit, ${fmt(A0 * m * m, 1)} pm` });
    }
    ctx.restore();
    particle(ctx, CX, CY, 7, 'p+'); hits.push({ x: CX, y: CY, r: 12, name: 'the nucleus, a proton, charge +e' });
    /* the radius, dashed, down and to the left */
    const R = rn * S, ra = 2.5;
    line(ctx, CX, CY, CX + R * Math.cos(ra), CY + R * Math.sin(ra), cr, 2.5, [6, 8]);
    text(ctx, 'r', CX + R * 0.55 * Math.cos(ra) - 4, CY + R * 0.55 * Math.sin(ra) + 26, cr, { size: 24, weight: 600, align: 'center', bg: PAL.panel });
    /* the electron, up and to the right, its velocity along the orbit and the force toward the nucleus */
    const a = -Math.PI / 4, ex = CX + R * Math.cos(a), ey = CY + R * Math.sin(a);
    const vl = 150 * vn / ((QE * QE * KC) / HBAR);
    const vx = ex + vl * Math.cos(a - Math.PI / 2), vy = ey + vl * Math.sin(a - Math.PI / 2);
    arrow(ctx, ex, ey, vx, vy, cv, 5);
    text(ctx, 'v', vx + 14, vy - 6, cv, { size: 24, weight: 600, bg: PAL.panel });
    hits.push({ x: (ex + vx) / 2, y: (ey + vy) / 2, r: 14, name: `the velocity, ${fmt(vn / 1e6, 2)} × 10⁶ m/s` });
    const fl = Math.min(70, R - 20);
    if (fl > 20) {
      const fx = ex - fl * Math.cos(a), fy = ey - fl * Math.sin(a);
      arrow(ctx, ex, ey, fx, fy, cF, 4);
      text(ctx, 'F', (ex + fx) / 2 + 14, (ey + fy) / 2 + 20, cF, { size: 22, weight: 600, bg: PAL.panel });
      hits.push({ x: (ex + fx) / 2, y: (ey + fy) / 2, r: 14, name: `the Coulomb force, ${sciU(Fn)} N, toward the nucleus` });
    }
    particle(ctx, ex, ey, 9, 'e-'); hits.push({ x: ex, y: ey, r: 14, name: 'the electron' });
    /* the scale bar, which shows the zoom */
    const bar = BARS.find((b) => b * S >= 80) ?? BARS[BARS.length - 1], bl = bar * S, bx = 1300, by = 600;
    line(ctx, bx - bl, by, bx, by, PAL.ink, 3);
    line(ctx, bx - bl, by - 8, bx - bl, by + 8, PAL.ink, 3); line(ctx, bx, by - 8, bx, by + 8, PAL.ink, 3);
    text(ctx, bar + ' pm', bx - bl / 2, by - 22, PAL.ink, { size: 18, align: 'center' });
    topline(ctx, `On the n = ${n} orbit the electron is ${fmt(rn, 1)} pm from the nucleus and moves at ${fmt(vn / 1e6, 2)} × 10⁶ m/s.`);
    readout(d.readout,
      `\\krn=\\kao n^2=(52.9\\ \\text{pm})(${n})^2=${fmt(rn, 1)}\\ \\text{pm} \\\\ \\kEn=-\\dfrac{2.18\\times10^{-18}\\ \\text{J}}{n^2}=-\\dfrac{2.18\\times10^{-18}\\ \\text{J}}{${n}^2}=${sciT(En)}\\ \\text{J}`,
      `Its angular momentum is $\\kme\\kv\\kr=${n}\\hbar$.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 1.8.4 + 1.8.6 + 1.8.7: the hydrogen ladder. Moving: the electron
   makes its quantum leaps down to the chosen level, one starting level
   after another (n_f + 1 up to 8), and each leap sends a photon flying to
   the spectrum, where its line lands in its real colour. A photon leaving
   is kinematic, so the figure moves (rule 24.1); the transition arrows are
   notation and stand still. Rungs to scale, E_n = -2.18 x 10^-18 J / n^2.
   Only rungs with room for a name are named (1, 2, 3 and the limit); the
   rest carry hover names. The strip is logarithmic in wavelength from 80
   to 8000 nm, which holds every line from Lyman to Pfund for n <= 8, and
   shows only the chosen series' lines as they land.
===================================================================== */
(function () {
  const d = sim('sim-hydrogen-ladder', 740);
  const SERIES = [{ value: 1, label: 'Lyman', name: 'Lyman' }, { value: 2, label: 'Balmer', name: 'Balmer' }, { value: 3, label: 'Paschen', name: 'Paschen' }, { value: 4, label: 'Brackett', name: 'Brackett' }, { value: 5, label: 'Pfund', name: 'Pfund' }];
  const NF = pick(d.controls, { label: 'n_f', options: SERIES.map((s) => ({ value: s.value, label: `${s.label} (${s.value})` })), value: 1, aria: 'the level the electron falls to, which names the series', onInput: () => cy.reset() });
  const NMAX = 8, STEP = 1.1;
  const leaps = () => NMAX - NF.v;
  const cy = cycle(() => leaps() * STEP, 1.6);
  const LAD = { l: 220, r: 900, top: 130, bottom: 470 };
  const ladderY = (n) => (n === Infinity ? LAD.top : LAD.bottom - (LAD.bottom - LAD.top) * (1 - 1 / (n * n)));
  const STRIP = { l: 120, r: 1340, y: 620, h: 56 };
  const LO = Math.log10(80), HI = Math.log10(8000);
  const X = (nm) => STRIP.l + ((Math.log10(nm) - LO) / (HI - LO)) * (STRIP.r - STRIP.l);
  const energy = (n) => -RY / (n * n);
  const lambdaNm = (ni, nf) => (H * CL / (energy(ni) - energy(nf))) * 1e9;
  const ease = (u) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u));
  let hits = []; F.hover(d.stage, () => hits);
  function strip(ctx) {
    const cw = C('wavelength'), y = STRIP.y, h = STRIP.h;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(STRIP.l, y - h / 2, STRIP.r - STRIP.l, h); ctx.restore();
    for (let nm = 380; nm < 780; nm += 4) { ctx.save(); ctx.fillStyle = F.fact(spectral(nm + 2)); ctx.globalAlpha = 0.3; ctx.fillRect(X(nm), y - h / 2, X(nm + 4) - X(nm) + 0.6, h); ctx.restore(); }
    line(ctx, STRIP.l, y + h / 2, STRIP.r, y + h / 2, cw, 2);
    [100, 200, 500, 1000, 2000, 5000].forEach((t) => { line(ctx, X(t), y + h / 2, X(t), y + h / 2 + 8, cw, 2); text(ctx, t >= 1000 ? (t / 1000) + ' µm' : t + ' nm', X(t), y + h / 2 + 24, cw, { size: 17, align: 'center' }); });
    text(ctx, 'ultraviolet', X(150), y + h / 2 + 56, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'visible', X(550), y + h / 2 + 56, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'infrared', X(1500), y + h / 2 + 56, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'wavelength λ (log scale)', STRIP.r, y + h / 2 + 56, cw, { size: 18, weight: 600, align: 'right' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const nf = NF.v, ser = SERIES.find((s) => s.value === nf), count = leaps();
    const tm = cy.now(), idx = Math.min(count - 1, Math.floor(tm / STEP)), u = Math.min(1, (tm - idx * STEP) / STEP);
    const ni = nf + 1 + idx, ce = C('energy');
    const fall = ease((u - 0.15) / 0.3), fly = ease((u - 0.45) / 0.5);
    strip(ctx);
    /* the chosen series' lines that have landed */
    for (let j = 0; j <= idx; j++) {
      if (j === idx && fly < 1) continue;
      const w = lambdaNm(nf + 1 + j, nf);
      line(ctx, X(w), STRIP.y - STRIP.h / 2 - 6, X(w), STRIP.y + STRIP.h / 2, lightOf(w), j === idx ? 6 : 4);
      hits.push({ x: X(w), y: STRIP.y, r: 8, name: `${ser.name} line, n = ${nf + 1 + j} to ${nf}, ${fmt(w, w < 1000 ? 1 : 0)} nm` });
    }
    /* the series limit */
    const lim = nf * nf * H * CL / RY * 1e9;
    line(ctx, X(lim), STRIP.y - STRIP.h / 2 - 10, X(lim), STRIP.y + STRIP.h / 2, alpha(C('wavelength'), 0.8), 2, [4, 6]);
    hits.push({ x: X(lim), y: STRIP.y, r: 8, name: `the ${ser.name} series limit, ${fmt(lim, 1)} nm` });
    /* the rungs and the ionization limit; names only where a rung has room */
    for (let m = 1; m <= NMAX; m++) {
      line(ctx, LAD.l, ladderY(m), LAD.r, ladderY(m), m === nf ? ce : alpha(ce, 0.6), m === nf ? 5 : 2.5);
      hits.push({ x: LAD.r - 30, y: ladderY(m), r: 7, name: `n = ${m}, E = ${sciU(energy(m))} J` });
    }
    line(ctx, LAD.l, LAD.top, LAD.r, LAD.top, ce, 2.5, [10, 10]);
    hits.push({ x: LAD.r - 30, y: LAD.top, r: 7, name: 'n → ∞, the ionization limit, E = 0' });
    let last = Infinity;
    [1, 2, 3, 4, 5, 6, 7, 8].forEach((m) => { const y = ladderY(m); if (last - y >= 26 && y - LAD.top >= 26) { text(ctx, 'n = ' + m, LAD.r + 16, y, m === nf ? ce : PAL.ink, { size: 19, weight: 600, base: 'middle' }); last = y; } });
    text(ctx, 'n → ∞, E = 0', LAD.r + 16, LAD.top, PAL.ink, { size: 19, weight: 600, base: 'middle' });
    text(ctx, sciU(energy(1)) + ' J', LAD.r + 90, ladderY(1), ce, { size: 17, base: 'middle' });
    arrow(ctx, LAD.l - 40, LAD.bottom + 6, LAD.l - 40, LAD.top - 24, ce, 4);
    text(ctx, 'E', LAD.l - 40, LAD.top - 42, ce, { size: 24, weight: 600, align: 'center' });
    /* the series' transition arrows, notation and still */
    const AX0 = 320, DX = (LAD.r - 60 - AX0) / Math.max(1, NMAX - 2);
    for (let j = 0; j < count; j++) {
      const m = nf + 1 + j, x = AX0 + DX * j;
      arrow(ctx, x, ladderY(m), x, ladderY(nf), j === idx ? ce : alpha(ce, 0.3), j === idx ? 5 : 2.5);
    }
    text(ctx, ser.name + ' series', AX0 + DX * (count - 1) / 2, ladderY(nf) + 30, ce, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    /* the electron at its starting level, then falling */
    const xi = AX0 + DX * idx - 20, y1 = ladderY(ni), y2 = ladderY(nf), ey = y1 + (y2 - y1) * fall;
    particle(ctx, xi, ey, 9, 'e-'); hits.push({ x: xi, y: ey, r: 14, name: 'the electron' });
    /* the photon: a short wave train flying from the arrow to its line on the strip */
    const w = lambdaNm(ni, nf);
    if (u > 0.45 && fly < 1) {
      const x0 = AX0 + DX * idx, yA = (y1 + y2) / 2, x1 = X(w), yB = STRIP.y - STRIP.h / 2 - 8;
      const px = x0 + (x1 - x0) * fly, py = yA + (yB - yA) * fly, dx = x1 - x0, dy = yB - yA, L = Math.hypot(dx, dy) || 1, ux = dx / L, uy = dy / L;
      ctx.save(); ctx.strokeStyle = lightOf(w); ctx.lineWidth = 4; ctx.beginPath();
      for (let i = 0; i <= 70; i++) { const s = -70 + i, wob = 11 * Math.sin(s * 0.55) * Math.exp(-Math.pow(s / 35 + 1, 2) * 1.2); const x = px + ux * s - uy * wob, y = py + uy * s + ux * wob; if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
      ctx.stroke(); ctx.restore();
      hits.push({ x: px, y: py, r: 18, name: `a photon of ${fmt(w, 1)} nm` });
    }
    if (fly >= 1) text(ctx, fmt(w, w < 1000 ? 1 : 0) + ' nm', X(w), STRIP.y - STRIP.h / 2 - 22, visible(w) ? PAL.ink : C('wavelength'), { size: 18, weight: 600, align: 'center', bg: PAL.panel });
    const nu = RHZ * (1 / (nf * nf) - 1 / (ni * ni)), dE = H * nu;
    topline(ctx, `The electron falls from n = ${ni} to n = ${nf} and gives off a ${fmt(w, 1)} nm photon ${region(w)}.`);
    readout(d.readout,
      `\\knu=\\dfrac{Z^2 \\ke^4 \\kme}{8\\epsilon_0^2h^3}\\left(\\dfrac{1}{n_f^2}-\\dfrac{1}{n_i^2}\\right)=(3.29\\times10^{15}\\ \\text{Hz})\\left(\\dfrac{1}{${nf}^2}-\\dfrac{1}{${ni}^2}\\right)=${sciT(nu)}\\ \\text{Hz}`,
      `The photon carries $h\\knu = ${sciT(dE)}$ J, and its wavelength is $\\klambda = c/\\knu$ = ${fmt(w, 1)} nm.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 1.8.5: the electron wave on a circle. Moving: the wave is sent
   round hydrogen's n = 3 orbit (r = 9 a0 = 476.3 pm, circumference
   2992.6 pm) lap after lap, six laps in a loop, and the bold ring is the
   average of the laps that have passed each point so far. At a whole
   number of wavelengths every lap lands on the last and the ring keeps
   its full height; between them the ring flattens lap by lap. The
   current lap is drawn faint ahead of the sum. The slider does not
   restart the loop, so dragging shows the sum change as it builds.
   The dashed circles on the slider are 2 pi r / n.
===================================================================== */
(function () {
  const d = sim('sim-orbit-wave', 620);
  const RPM = 9 * A0, CIRC = TAU * RPM, LAPS = 6, PER = 0.8;
  const specials = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({ at: CIRC / n, label: 'n = ' + n }));
  const L = ctl(d.controls, { label: '\\klambda', cls: 'wavelength', min: 360, max: 3100, step: 0.5, value: +(CIRC / 3).toFixed(1), unit: 'pm', dec: 1, specials, aria: 'the wavelength of the electron wave' });
  const cy = cycle(() => LAPS * PER, 1.4);
  const CX = 700, CY = 345, R = 215, AMP = 42;
  let hits = []; F.hover(d.stage, () => hits);
  const P = (th, f) => { const rr = R + AMP * f; return [CX + rr * Math.cos(th - Math.PI / 2), CY + rr * Math.sin(th - Math.PI / 2)]; };
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const lam = L.v, n = CIRC / lam, k = Math.round(n), whole = Math.abs(n - k) < 0.004;
    const u = Math.min(LAPS, cy.now() / PER), done = Math.min(LAPS, Math.floor(u + 1e-9)), head = u - done;
    const cw = C('wavelength');
    const wave = (th, j) => Math.sin(TAU * (th / TAU + j) * n);
    /* the surviving fraction after the laps completed: |sum of e^(i 2 pi j n)| / laps */
    let re = 0, im = 0; for (let j = 0; j < done; j++) { re += Math.cos(TAU * j * n); im += Math.sin(TAU * j * n); }
    const keep = done ? Math.hypot(re, im) / done : 1;
    /* the orbit and the nucleus */
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(CX, CY, R, 0, TAU); ctx.stroke(); ctx.restore();
    particle(ctx, CX, CY, 9, 'p+'); hits.push({ x: CX, y: CY, r: 13, name: 'the nucleus' });
    hits.push({ x: CX, y: CY - R, r: 12, name: 'the n = 3 orbit, r = 476.3 pm, once around 2992.6 pm' });
    /* the lap under way, faint, from the start to its head */
    if (done < LAPS) {
      ctx.save(); ctx.strokeStyle = alpha(cw, 0.35); ctx.lineWidth = 2.5; ctx.beginPath();
      const M = Math.max(2, Math.ceil(480 * head));
      for (let i = 0; i <= M; i++) { const th = (TAU * head * i) / M, [x, y] = P(th, wave(th, done)); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
      ctx.stroke(); ctx.restore();
    }
    /* the sum: at each point the mean of the laps that have passed it */
    ctx.save(); ctx.strokeStyle = cw; ctx.lineWidth = 5; ctx.lineJoin = 'round'; ctx.beginPath();
    for (let i = 0; i <= 600; i++) {
      const th = (TAU * i) / 600, c = Math.min(LAPS, done + (th / TAU <= head ? 1 : 0));
      let s = 0; for (let j = 0; j < c; j++) s += wave(th, j);
      const [x, y] = P(th, c ? s / c : 0); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y);
    }
    ctx.stroke(); ctx.restore();
    hits.push({ x: CX + R + AMP, y: CY, r: 16, name: 'the sum of the laps so far' });
    /* the head of the wave */
    if (done < LAPS) { const th = TAU * head, [x, y] = P(th, wave(th, done)); dot(ctx, x, y, cw, true, 9); hits.push({ x, y, r: 14, name: `the front of the wave, lap ${done + 1}` }); }
    topline(ctx, whole
      ? `Exactly ${k} wavelength${k > 1 ? 's' : ''} of ${fmt(lam, 1)} pm fit the orbit, so every lap lands on the last and the wave survives.`
      : done === 0
        ? `The orbit holds ${fmt(n, 2)} wavelengths of ${fmt(lam, 1)} pm, and the wave is on its first lap.`
        : `The orbit holds ${fmt(n, 2)} wavelengths of ${fmt(lam, 1)} pm; after ${done} lap${done > 1 ? 's' : ''} ${fmt(100 * keep, 0)}% of the wave is left.`);
    readout(d.readout,
      `2\\pi \\kr = n\\klambda \\\\ 2\\pi\\,(476.3\\ \\text{pm}) = 2992.6\\ \\text{pm} = ${fmt(n, 2)}\\times ${fmt(lam, 1)}\\ \\text{pm}`,
      whole && k === 3 ? 'With $n = 3$ this is the de Broglie wavelength $\\klambda = h/\\kp$ of the electron on the third Bohr orbit, since $\\kme\\kv\\kr = 3\\hbar$.' : '');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
