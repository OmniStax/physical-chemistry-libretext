/* Figures for section 23.1 A Phase Diagram Summarizes the Solid-Liquid-Gas Behavior of a Substance. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['23.1'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* a number as TeX in scientific notation, d significant figures */
const sciTex = (v, d) => {
  if (v === 0) return '0';
  const e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e);
  return e === 0 ? fmt(v, d - 1) : `${fmt(m, d - 1)}\\times10^{${e}}`;
};
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const pow10 = (e) => e === 0 ? '1' : '10' + String(e).split('').map((c) => SUP[c]).join('');

/* ---------- Figure 23.1.1: kinds of equilibrium under fluctuations ----------
   The book's schematic G(X), drawn as a monotone cubic through nodes read off the figure, so every
   extremum sits on a node with zero slope and the stretch at C is exactly flat (G' = G'' = 0).
   x: some variable X, 0 to 10; y: G, 0 to 5 (arbitrary units, no ticks: the book's curve is schematic).
   Moving: an overdamped random walk on G (Langevin steps, dx = -G'(x) dt + sqrt(2 kT dt) xi), started
   at A to E. The walk for one cycle is computed from a seeded generator whenever the start or the
   fluctuation size changes, so the picture is a function of the transport's time. */
(function () {
  const d = sim('sim-gibbs-stability', 600);
  const NX = [0, 0.5, 1.5, 2.2, 2.8, 3.6, 4.4, 5.0, 5.8, 6.6, 7.3, 7.8, 8.4, 9.3, 10];
  const NG = [3.5, 3.2, 4.6, 3.6, 3.0, 3.0, 3.0, 2.6, 1.6, 4.0, 2.0, 0.6, 2.2, 2.9, 3.3];
  /* Fritsch-Butland slopes: zero at every local extremum and on flat runs */
  const M = NX.map((_, k) => {
    if (k === 0) return (NG[1] - NG[0]) / (NX[1] - NX[0]);
    const n = NX.length - 1;
    if (k === n) return (NG[n] - NG[n - 1]) / (NX[n] - NX[n - 1]);
    const h0 = NX[k] - NX[k - 1], h1 = NX[k + 1] - NX[k], d0 = (NG[k] - NG[k - 1]) / h0, d1 = (NG[k + 1] - NG[k]) / h1;
    if (d0 * d1 <= 0) return 0;
    return 3 * (h0 + h1) / ((2 * h1 + h0) / d0 + (h1 + 2 * h0) / d1);
  });
  const seg = (x) => { let k = 0; while (k < NX.length - 2 && x > NX[k + 1]) k++; return k; };
  const G = (x) => {
    x = Math.max(0, Math.min(10, x)); const k = seg(x), h = NX[k + 1] - NX[k], t = (x - NX[k]) / h;
    const h00 = 2 * t ** 3 - 3 * t * t + 1, h10 = t ** 3 - 2 * t * t + t, h01 = -2 * t ** 3 + 3 * t * t, h11 = t ** 3 - t * t;
    return h00 * NG[k] + h10 * h * M[k] + h01 * NG[k + 1] + h11 * h * M[k + 1];
  };
  const G1 = (x) => {
    x = Math.max(0, Math.min(10, x)); const k = seg(x), h = NX[k + 1] - NX[k], t = (x - NX[k]) / h;
    return ((6 * t * t - 6 * t) * NG[k] + (3 * t * t - 4 * t + 1) * h * M[k] + (-6 * t * t + 6 * t) * NG[k + 1] + (3 * t * t - 2 * t) * h * M[k + 1]) / h;
  };
  const G2 = (x) => {
    x = Math.max(0, Math.min(10, x)); const k = seg(x), h = NX[k + 1] - NX[k], t = (x - NX[k]) / h;
    return ((12 * t - 6) * NG[k] + (6 * t - 4) * h * M[k] + (-12 * t + 6) * NG[k + 1] + (6 * t - 2) * h * M[k + 1]) / (h * h);
  };
  const START = { A: 7.8, B: 5.8, C: 3.6, D: 1.5, E: 9.3 };
  const KIND = {
    A: 'A, the stable state: the point wobbles about the lowest minimum.',
    B: 'B, a metastable state: the point wobbles in a higher well.',
    C: 'C, an indifferent state: the point wanders along the flat stretch.',
    D: 'D, a labile state: nudged off the peak, the point rolls away.',
    E: 'E, an unstable state: the point rolls downhill at once.',
  };
  const RUN = 6, DT = 1 / 240, N = Math.round(RUN / DT);
  let path = [];
  function walk() {
    const s = S.value;
    let seed = 1234567 + s.charCodeAt(0) * 7919;
    const rnd = () => { seed |= 0; seed = (seed + 0x6D2B79F5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    const gauss = () => Math.sqrt(-2 * Math.log(1 - rnd())) * Math.cos(2 * Math.PI * rnd());
    let x = START[s]; const kT = K.v; path = [x];
    for (let i = 0; i < N; i++) {
      x += -G1(x) * DT + Math.sqrt(2 * kT * DT) * gauss();
      if (x < 0) x = -x; if (x > 10) x = 20 - x;
      path.push(x);
    }
  }
  const cy = F.cycle(() => RUN, 1.2);
  const S = F.choice(d.controls, { label: '\\text{start}', key: 'start', aria: 'the point the state starts from',
    options: ['A', 'B', 'C', 'D', 'E'].map((v) => ({ value: v, label: v })), value: 'B', onInput: () => { walk(); cy.reset(); } });
  const K = ctl(d.controls, { label: '\\text{fluctuation}', cls: 'energy', key: 'kT', min: 0.02, max: 0.3, step: 0.01, value: 0.08, unit: '', dec: 2,
    onInput: () => { walk(); cy.reset(); } });
  walk();
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    const tau = Math.min(cy.now(), RUN), i = Math.min(N, Math.round(tau / DT)), x = path[i];
    topline(ctx, `Started at ${KIND[S.value]}`);
    const box = { l: 110, r: W - 60, t: 120, b: 500 };
    const ax = axes(ctx, box, [0, 10], [0, 5], { nx: 0, ny: 0, xl: 'some variable X', yl: 'Gibbs energy G', yc: C('energy') });
    plot(ctx, ax, G, C('energy'), { w: 5 });
    /* the last second and a half of the path, faint, so a wander or a fall leaves a trace */
    const back = Math.round(1.5 / DT);
    for (let j = Math.max(0, i - back); j < i; j += 4) {
      const a = 0.08 + 0.32 * (j - (i - back)) / back;
      dot(ctx, ax.X(path[j]), ax.Y(G(path[j])), alpha(PAL.ink, Math.max(0.05, a)), true, 5);
    }
    hits.length = 0;
    /* the five starting points, hollow, named once */
    Object.entries(START).forEach(([k, x0]) => {
      dot(ctx, ax.X(x0), ax.Y(G(x0)), PAL.muted, false, 9);
      const up = k === 'D' || k === 'E' || k === 'C';
      text(ctx, k, ax.X(x0), ax.Y(G(x0)) + (up ? -30 : 32), PAL.ink, { size: 24, weight: 600, align: 'center' });
      hits.push({ x: ax.X(x0), y: ax.Y(G(x0)), r: 14, name: KIND[k].split(':')[0] });
    });
    dot(ctx, ax.X(x), ax.Y(G(x)), PAL.ink, true, 12);
    hits.push({ x: ax.X(x), y: ax.Y(G(x)), r: 16, name: `the state now, at X = ${fmt(x, 2)}` });
    const g1 = G1(x), g2 = G2(x), z = (v) => Math.abs(v) < 0.005 ? '0.00' : fmt(v, 2);
    tex(d.readout, `\\dfrac{d\\kG}{dX} = ${z(g1)} \\\\ \\dfrac{d^2\\kG}{dX^2} = ${z(g2)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* ---------- Sim: the phase diagram of water ----------
   x: temperature 200 to 700 K; y: log10 of the pressure in bar, -5 to 3 (10 microbar to 1000 bar).
   Built from the book's numbers: the triple point 273.16 K and 4.58 Torr; sublimation by the integrated
   Clausius-Clapeyron equation with 51 057 J/mol (6006 + 45 051, 23.4); vaporization from 45 051 J/mol at
   the triple point, falling by 28 J/mol per kelvin (the heat capacities of vapor and liquid differ), the
   rate that brings the curve to the critical point near 647 K and 220 bar (from memory, unchecked;
   the model ends at 222.6 bar); melting by the Clapeyron equation with 6006 J/mol and the molar volumes
   of ice and water, 19.65 and 18.02 cm3/mol (densities 0.9167 and 0.9998 g/cm3, from memory, unchecked).
   Still: the reader drags the state point; the sliders hold it, and their dashed circles sit on the curves. */
(function () {
  const d = sim('sim-phase-diagram', 640);
  const R = 8.314, TT = 273.16, PT = 4.58 / 750.062, LPT = Math.log10(PT), TC = 647;
  const HVAP0 = 45051, DCP = -28, HSUB = 51057, HFUS = 6006, VICE = 19.65e-6, VLIQ = 18.02e-6, DVM = VLIQ - VICE;
  const hvap = (T) => HVAP0 + DCP * (T - TT);
  const lnVap = (T) => Math.log(PT) + (HVAP0 - DCP * TT) / R * (1 / TT - 1 / T) + DCP / R * Math.log(T / TT);
  const lnSub = (T) => Math.log(PT) + HSUB / R * (1 / TT - 1 / T);
  const PC = Math.exp(lnVap(TC)), LPC = Math.log10(PC);
  /* the vapor pressure over ice or liquid, bar; null above the critical temperature */
  const peq = (T) => T > TC ? null : Math.exp(T < TT ? lnSub(T) : lnVap(T));
  /* the melting line: P - P_t = (dH/dV) ln(T/T_t), bar; its temperature at a pressure */
  const pMelt = (T) => PT + HFUS / DVM * Math.log(T / TT) / 1e5;
  const tMelt = (P) => TT * Math.exp((P - PT) * 1e5 * DVM / HFUS);
  const bisect = (f, a, b) => { let fa = f(a); for (let i = 0; i < 60; i++) { const m = (a + b) / 2, fm = f(m); if (fa * fm <= 0) b = m; else { a = m; fa = fm; } } return (a + b) / 2; };
  const tVap = (P) => bisect((T) => lnVap(T) - Math.log(P), TT, TC);
  const tSub = (P) => bisect((T) => lnSub(T) - Math.log(P), 150, TT);
  const T = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: 200, max: 700, step: 0.01, value: TT, unit: 'K', dec: 2,
    specials: [
      { at: TT, label: 'triple point' },
      { at: TC, label: 'critical temperature' },
      { at: () => { const P = 10 ** LP.v; return P >= PT && P <= 1000 ? tMelt(P) : null; }, label: 'melting point' },
      { at: () => { const P = 10 ** LP.v; return P < PT ? tSub(P) : P <= PC ? tVap(P) : null; }, label: 'boiling or sublimation point' },
    ] });
  const LP = ctl(d.controls, { label: '\\kP', cls: 'pressure', min: -5, max: 3, step: 0.0001, value: LPT, unit: '',
    fmt: (lg) => fmtP(10 ** lg),
    specials: [
      { at: LPT, label: 'triple point' },
      { at: () => { const p = peq(T.v); return p === null ? null : Math.log10(p); }, label: 'equilibrium vapor pressure' },
      { at: () => (T.v <= TT && T.v >= tMelt(1000) ? Math.log10(pMelt(T.v)) : null), label: 'melting pressure' },
    ] });
  /* a pressure for reading: bar from 0.1 bar up, Torr below, scientific bar below 0.01 Torr */
  function fmtP(P) {
    if (P >= 0.1) return `${fmt(P, P < 10 ? 3 : P < 100 ? 1 : 0)} bar`;
    const torr = P * 750.062;
    if (torr >= 0.01) return `${fmt(torr, torr < 1 ? 3 : torr < 10 ? 2 : 1)} Torr`;
    const e = Math.floor(Math.log10(P)); return `${fmt(P / 10 ** e, 1)}×${pow10(e)} bar`;
  }
  const texP = (P) => fmtP(P).replace(/×10(.*) bar/, (m, s) => `\\times10^{${s.replace(/[⁻⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (c) => ({ '⁻': '-', '⁰': 0, '¹': 1, '²': 2, '³': 3, '⁴': 4, '⁵': 5, '⁶': 6, '⁷': 7, '⁸': 8, '⁹': 9 })[c])}}\\ \\text{bar}`)
    .replace(/ (bar|Torr)$/, '\\ \\text{$1}');
  const P0 = F.drag(d, { x: T, y: LP });
  const hits = [];
  F.hover(d.stage, () => hits);
  /* what holds at (T, P): the phase, or the two or three that coexist */
  function state(t, lp) {
    const P = 10 ** lp;
    if (Math.abs(t - TT) < 0.005 && Math.abs(lp - LPT) < 0.002) return { k: 'triple' };
    const pe = peq(t);
    if (pe !== null && Math.abs(lp - Math.log10(pe)) < 0.002) return { k: t < TT ? 'sub' : 'vap', P };
    if (P >= PT && P <= 1000 && Math.abs(t - tMelt(P)) < 0.005) return { k: 'melt', P };
    if (t > TC && P > PC) return { k: 'fluid', P };
    if (pe === null || P < pe) return { k: 'vapor', P, pe };
    return { k: t < tMelt(P) ? 'solid' : 'liquid', P, pe };
  }
  function draw() {
    const { ctx, W } = begin(d.c);
    const t = T.v, lp = LP.v, st = state(t, lp);
    const NAME = { solid: 'ice', liquid: 'liquid', vapor: 'vapor', fluid: 'a supercritical fluid' };
    const two = { sub: 'ice and vapor coexist', vap: 'liquid and vapor coexist', melt: 'ice and liquid coexist' };
    const where = `At ${fmt(t, t % 1 ? 2 : 0)} K and ${fmtP(10 ** lp)}`;
    topline(ctx, st.k === 'triple' ? 'At the triple point, 273.16 K and 4.58 Torr, ice, liquid and vapor coexist.'
      : two[st.k] ? `${where}, ${two[st.k]}.` : `${where}, water is ${NAME[st.k]}.`);
    const box = { l: 140, r: W - 70, t: 110, b: 540 };
    const ax = axes(ctx, box, [200, 700], [-5, 3], { nx: 5, ny: 8, xl: 'temperature T (K)', yl: 'pressure P (bar)', xc: C('temperature'), yc: C('pressure'),
      fy: (v) => pow10(Math.round(v)) });
    const X = ax.X, Y = ax.Y;
    /* the regions, faintly, so each phase reads as an area */
    const tS0 = tSub(1e-5), tM3 = tMelt(1000);
    const sub = [], vap = [], melt = [];
    for (let k = 0; k <= 80; k++) { const tt = tS0 + (TT - tS0) * k / 80; sub.push([tt, lnSub(tt) / Math.LN10]); }
    for (let k = 0; k <= 160; k++) { const tt = TT + (TC - TT) * k / 160; vap.push([tt, lnVap(tt) / Math.LN10]); }
    for (let k = 0; k <= 60; k++) { const l = LPT + (3 - LPT) * k / 60; melt.push([tMelt(10 ** l), l]); }
    const fill = (pts, color) => { ctx.save(); ctx.beginPath(); pts.forEach(([a, b], k) => (k ? ctx.lineTo(X(a), Y(b)) : ctx.moveTo(X(a), Y(b)))); ctx.closePath(); ctx.fillStyle = alpha(color, 0.1); ctx.fill(); ctx.restore(); };
    fill([[200, -5], ...sub, ...melt, [200, 3]], F.cat(0));
    fill([...melt, [700, 3], [700, LPC], ...vap.slice().reverse()], F.cat(1));
    fill([[tS0, -5], ...sub, ...vap, [700, LPC], [700, -5]], F.cat(2));
    /* the 1 bar line */
    line(ctx, box.l, Y(0), box.r, Y(0), alpha(PAL.ink, 0.45), 2, [10, 10]);
    text(ctx, '1 bar', box.r - 8, Y(0) - 16, PAL.muted, { size: 20, align: 'right' });
    /* the three coexistence curves */
    const stroke = (pts) => { ctx.save(); ctx.strokeStyle = C('pressure'); ctx.lineWidth = 5; ctx.lineJoin = 'round'; ctx.beginPath(); pts.forEach(([a, b], k) => (k ? ctx.lineTo(X(a), Y(b)) : ctx.moveTo(X(a), Y(b)))); ctx.stroke(); ctx.restore(); };
    stroke(sub); stroke(vap); stroke(melt);
    /* the points the text names */
    dot(ctx, X(TT), Y(LPT), C('pressure'), true, 9);
    dot(ctx, X(TC), Y(LPC), C('pressure'), true, 9);
    text(ctx, 'triple point', X(TT) + 18, Y(LPT) + 22, PAL.ink, { size: 20 });
    text(ctx, 'critical point', X(TC) - 14, Y(LPC) - 22, PAL.ink, { size: 20, align: 'right' });
    const tm1 = tMelt(1), tb1 = tVap(1);
    dot(ctx, X(tm1), Y(0), PAL.muted, false, 7); dot(ctx, X(tb1), Y(0), PAL.muted, false, 7);
    text(ctx, 'ice', X(225), Y(1.2), F.cat(0), { size: 24, weight: 600, align: 'center' });
    text(ctx, 'liquid', X(470), Y(1.8), F.cat(1), { size: 24, weight: 600, align: 'center' });
    text(ctx, 'vapor', X(520), Y(-3), F.cat(2), { size: 24, weight: 600, align: 'center' });
    P0.draw(ctx, ax, PAL.ink);
    dot(ctx, X(t), Y(lp), PAL.ink, true, 10);
    hits.length = 0;
    hits.push({ x: X(TT), y: Y(LPT), r: 14, name: 'the triple point, 273.16 K and 4.58 Torr' });
    hits.push({ x: X(TC), y: Y(LPC), r: 14, name: `the critical point, ${TC} K and ${fmt(PC, 0)} bar, where the vaporization curve ends` });
    hits.push({ x: X(tm1), y: Y(0), r: 12, name: `the standard melting point, ${fmt(tm1, 2)} K` });
    hits.push({ x: X(tb1), y: Y(0), r: 12, name: `the standard boiling point in this model, ${fmt(tb1, 1)} K` });
    /* the readout: the comparison that decides the phase, or the slope of the curve the point sits on */
    const Tt = `${fmt(t, 2)}\\ \\text{K}`;
    let r;
    if (st.k === 'triple') r = `\\kT = 273.16\\ \\text{K} \\\\ \\kP = \\kPeq = 4.58\\ \\text{Torr}`;
    else if (st.k === 'sub' || st.k === 'vap' || st.k === 'melt') {
      const dH = st.k === 'sub' ? HSUB : st.k === 'vap' ? hvap(t) : HFUS;
      const dV = st.k === 'melt' ? DVM : R * t / (st.P * 1e5) - (st.k === 'sub' ? VICE : VLIQ);
      const slope = dH / (t * dV) / 1e5;
      const sl = Math.abs(slope) >= 1 ? fmt(slope, 1) : sciTex(slope, 3);
      r = `\\dfrac{d\\kP}{d\\kT} = \\dfrac{\\Delta \\kHenth}{\\kT\\,\\Delta \\kV} \\\\ \\dfrac{d\\kP}{d\\kT} = \\dfrac{${fmt(dH, 0)}\\ \\text{J/mol}}{(${Tt})(${sciTex(dV, 4)}\\ \\text{m}^3\\text{/mol})} = ${sl}\\ \\text{bar/K}`;
    } else if (st.k === 'fluid') r = `\\kT = ${Tt} > \\kTc = ${TC}\\ \\text{K} \\\\ \\kP = ${texP(st.P)} > ${fmt(PC, 0)}\\ \\text{bar}`;
    else if (st.k === 'vapor') r = st.pe === null ? `\\kT = ${Tt} > \\kTc = ${TC}\\ \\text{K}` : `\\kP = ${texP(st.P)} < \\kPeq = ${texP(st.pe)}`;
    else r = `\\kP = ${texP(st.P)} > \\kPeq = ${texP(st.pe)} \\\\ \\kT = ${Tt} ${st.k === 'solid' ? '<' : '>'} T_m = ${fmt(tMelt(st.P), 2)}\\ \\text{K}`;
    tex(d.readout, r);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
