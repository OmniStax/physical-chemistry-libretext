/* Figures for section 16.1 All Dilute Gases Behave Ideally. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['16.1'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, topline, axes, plot, legend, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- constants, SI ---------- */
const KB = 1.380649e-23, RL = 0.08314;          /* J/K; L bar K^-1 mol^-1 */
const MASS = 4.652e-26;                          /* kg: one particle of the gas (the mass of an N2 molecule; no element is drawn) */
/* three significant figures, plain or in powers of ten */
const sig = (v) => { if (!isFinite(v)) return '—'; const e = Math.floor(Math.log10(Math.abs(v) || 1)); return e >= 5 || e < -2 ? `${fmt(v / 10 ** e, 2)}\\times10^{${e}}` : fmt(v, Math.max(0, 2 - e)); };
const gauss = () => { let u = 0; while (!u) u = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * Math.random()); };

/* ---------- unnumbered figure (417799): kicks on the wall add up to a pressure ----------
   Left, the box seen side on, edge a drawn at a fixed 1.9 px/nm (200 nm, the slider's top, is 380 px). The particles
   move at their true speeds (1 m/s = 1 nm/ns) with model time running 0.5 ns per second; vx and vy are drawn from the
   Maxwell-Boltzmann spread, variance kBT/m. Each strike on the right wall hands it 2 m vx, drawn as a brief force arrow.
   Right, the force on that wall over the last 10 ns in units of N kB T / a, the prediction: bars are 0.1 ns bins
   (spiky for a few particles), the solid line the running average since the last change, which settles on 1.
   y fixed 0 to 3; a bin above 3 is cut at the frame. Moving: the particles are the idea. */
(function () {
  const d = sim('sim-wall-pressure', 600);
  const N = ctl(d.controls, { label: 'N', cls: '', min: 1, max: 200, step: 1, value: 20, unit: '', dec: 0, onInput: reset });
  const T = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: 100, max: 600, step: 10, value: 300, unit: 'K', dec: 0, onInput: reset });
  const A = ctl(d.controls, { label: '\\ka', cls: 'length', min: 50, max: 200, step: 5, value: 100, unit: 'nm', dec: 0, onInput: reset });
  const cy = cycle(() => Infinity, 0);
  const RATE = 0.5, BIN = 0.1, WIN = 10, K = 1.9, BX = 80, BY = 160;
  let ps = [], bins = [], cur = 0, curT = 0, totJ = 0, totT = 0, hits = 0, kicks = [];
  const hov = []; F.hover(d.stage, () => hov);
  function reset() {
    const s = Math.sqrt(KB * T.v / MASS), a = A.v;
    ps = []; for (let i = 0; i < N.v; i++) ps.push({ x: Math.random() * a, y: Math.random() * a, vx: gauss() * s, vy: gauss() * s });
    bins = []; cur = 0; curT = 0; totJ = 0; totT = 0; hits = 0; kicks = []; cy.reset();
  }
  function step(dtReal) {
    const dt = dtReal * RATE, a = A.v; if (!(dt > 0)) return;
    for (const p of ps) {
      p.x += p.vx * dt; p.y += p.vy * dt;
      while (p.x < 0 || p.x > a) {
        if (p.x > a) { p.x = 2 * a - p.x; const J = 2 * MASS * Math.abs(p.vx); cur += J; totJ += J; hits++; kicks.push({ y: p.y, J, life: 0.5 }); p.vx = -Math.abs(p.vx); }
        else { p.x = -p.x; p.vx = Math.abs(p.vx); }
      }
      while (p.y < 0 || p.y > a) { if (p.y > a) { p.y = 2 * a - p.y; p.vy = -Math.abs(p.vy); } else { p.y = -p.y; p.vy = Math.abs(p.vy); } }
    }
    curT += dt; totT += dt;
    while (curT >= BIN) {
      curT -= BIN;
      bins.push({ f: cur / (BIN * 1e-9), avg: totJ / (totT * 1e-9) }); cur = 0;
      if (bins.length > WIN / BIN) bins.shift();
    }
    kicks.forEach((k) => { k.life -= dtReal; }); kicks = kicks.filter((k) => k.life > 0);
  }
  reset();
  function draw() {
    const { ctx, W } = begin(d.c);
    const a = A.v, t = T.v, n = N.v;
    const Fpred = n * KB * t / (a * 1e-9);                 /* N: the average force on one wall */
    const Ppred = Fpred / (a * 1e-9) ** 2;                 /* Pa */
    const Pmeas = totT > 0 ? totJ / (totT * 1e-9) / (a * 1e-9) ** 2 : NaN;
    topline(ctx, totT > 0.5 ? `${hits} kicks in ${fmt(totT, 1)} ns average to $\\kP = ${sig(Pmeas)}$ Pa, against $Nk_B\\kT/\\kV = ${sig(Ppred)}$ Pa.` : `Each strike hands the right wall a kick of $2\\km\\kvx$.`);
    /* the box */
    const S = a * K, x0 = BX + (380 - S) / 2, y0 = BY + (380 - S) / 2;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.strokeRect(x0, y0, S, S); ctx.restore();
    line(ctx, x0 + S, y0, x0 + S, y0 + S, C('force'), 6);
    text(ctx, `a = ${fmt(a, 0)} nm`, x0 + S / 2, y0 + S + 30, C('length'), { size: 20, weight: 600, align: 'center' });
    const col = F.cat(0);
    for (const p of ps) dot(ctx, x0 + p.x * K, y0 + S - p.y * K, col, true, n > 100 ? 5 : 7);
    /* kicks: an arrow on the wall, length from 2 m vx (a typical kick, 2 m sqrt(kBT/m), is 34 px), fading */
    const typ = 2 * MASS * Math.sqrt(KB * t / MASS);
    for (const k of kicks) {
      const L = Math.min(90, 34 * k.J / typ), y = y0 + S - k.y * K;
      ctx.save(); ctx.globalAlpha = Math.max(0, k.life / 0.5); arrow(ctx, x0 + S + 4, y, x0 + S + 4 + L, y, C('force'), 4); ctx.restore();
    }
    hov.length = 0;
    hov.push({ x: x0 + S, y: y0 + S / 2, r: 18, name: 'the right wall, which takes a kick of 2mvₓ at every strike' });
    if (ps[0]) hov.push({ x: x0 + ps[0].x * K, y: y0 + S - ps[0].y * K, r: 12, name: `a gas particle, mass ${fmt(MASS * 1e26, 2)} × 10⁻²⁶ kg` });
    /* the force on the wall against time */
    const box = { l: 640, r: W - 60, t: 150, b: 470 };
    const ax = axes(ctx, box, [-WIN, 0], [0, 3], { nx: 5, ny: 3, xl: 'time before now (ns)', yl: 'force on the right wall ÷ Nk_BT/a', xc: PAL.ink, yc: C('force') });
    const off = bins.length * BIN;
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    ctx.fillStyle = alpha(C('force'), 0.35);
    bins.forEach((b, i) => { const x = ax.X(-off + i * BIN), w = ax.X(-off + (i + 1) * BIN) - x, y = ax.Y(Math.min(3.2, b.f / Fpred)); ctx.fillRect(x, y, Math.max(1, w - 0.5), box.b - y); });
    ctx.restore();
    line(ctx, box.l, ax.Y(1), box.r, ax.Y(1), alpha(PAL.ink, 0.6), 3, [10, 10]);
    text(ctx, 'prediction, Nk_BT/a', box.l + 10, ax.Y(1) - 16, alpha(PAL.ink, 0.8), { size: 17 });
    if (bins.length > 1) {
      ctx.save(); ctx.strokeStyle = C('force'); ctx.lineWidth = 5; ctx.beginPath();
      bins.forEach((b, i) => { const x = ax.X(-off + (i + 0.5) * BIN), y = ax.Y(Math.min(3, b.avg / Fpred)); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); });
      ctx.stroke(); ctx.restore();
    }
    legend(ctx, ax, [{ s: 'force in each 0.1 ns', kind: 'swatch', color: alpha(C('force'), 0.35) }, { s: 'running average', color: C('force'), w: 5 }], { corner: 'tr' });
    tex(d.readout, `\\kP = \\dfrac{N\\km\\langle\\kvx^2\\rangle}{\\ka^3} = \\dfrac{Nk_B\\kT}{\\kV} \\\\ \\kP = \\dfrac{(${n})(1.381\\times10^{-23}\\ \\text{J/K})(${fmt(t, 0)}\\ \\text{K})}{(${fmt(a, 0)}\\ \\text{nm})^3} = ${sig(Ppred)}\\ \\text{Pa}`);
  }
  register(d.fig, { update: (dt) => { cy.step(dt, () => 1); step(Math.min(dt, 0.05)); }, draw });
})();

/* ---------- Figure 16.1.1 + 16.3.1: isotherms and isochores of one mole of ideal gas ----------
   Left, P against V: x 0 to 40 L, y 0 to 10 bar (600 K at the slider's 5 L gives 9.98 bar). The book's family as three
   faint isotherms, 200, 400 and 600 K; the reader's isotherm solid, with the state point the reader drags along it and
   the rectangle under it, area PV = nRT, beside a dashed twin at another volume on the same curve.
   Right, P against T: x 0 to 600 K, same y; faint isochores at 5, 10 and 20 L; the reader's through the origin.
   Still: nothing here has a time in it. */
(function () {
  const d = sim('sim-ideal-isotherms', 560);
  const T = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: 100, max: 600, step: 1, value: 300, unit: 'K', dec: 0, detents: [200, 400, 600] });
  const V = ctl(d.controls, { label: '\\kV', cls: 'volume', min: 5, max: 40, step: 0.1, value: 10, unit: 'L', dec: 1, detents: [5, 10, 20] });
  const P = (v, t) => RL * t / v;
  const dL = F.drag(d, { x: V, y: (v) => P(v, T.v) });
  const dR = F.drag(d, { x: T, y: (t) => P(V.v, t) });
  const hov = []; F.hover(d.stage, () => hov);
  function draw() {
    const { ctx, W } = begin(d.c);
    const t = T.v, v = V.v, p = P(v, t), pv = p * v;
    topline(ctx, `At $\\kT = ${fmt(t, 0)}$ K and $\\kV = ${fmt(v, 1)}$ L, $\\kP = ${fmt(p, 2)}$ bar, and $\\kP\\kV = ${fmt(pv, 1)}$ L bar at every point of this isotherm.`);
    const bl = { l: 120, r: 640, t: 110, b: 470 }, br = { l: 820, r: W - 50, t: 110, b: 470 };
    const axL = axes(ctx, bl, [0, 40], [0, 10], { nx: 4, ny: 5, xl: 'volume V (L)', yl: 'pressure P (bar)', xc: C('volume'), yc: C('pressure') });
    const axR = axes(ctx, br, [0, 600], [0, 10], { nx: 6, ny: 5, xl: 'temperature T (K)', yl: 'pressure P (bar)', xc: C('temperature'), yc: C('pressure') });
    const faint = alpha(PAL.ink, 0.3);
    [200, 400, 600].forEach((tt) => { plot(ctx, axL, (x) => P(x, tt), faint, { w: 3, x: [2, 40] }); text(ctx, `${tt} K`, axL.X(40) - 4, axL.Y(P(40, tt)) - 14, alpha(C('temperature'), 0.75), { size: 17, align: 'right' }); });
    [5, 10, 20].forEach((vv) => { plot(ctx, axR, (x) => P(vv, x), faint, { w: 3 }); const xe = Math.min(600, 10 * vv / RL); text(ctx, `${vv} L`, axR.X(xe) + (xe < 600 ? 10 : -4), axR.Y(P(vv, xe)) + (xe < 600 ? 4 : -14), alpha(C('volume'), 0.75), { size: 17, align: xe < 600 ? 'left' : 'right' }); });
    /* the rectangle PV under the point, and its twin on the same isotherm */
    const v2 = v < 20 ? Math.min(40, 2.5 * v) : v / 2.5, p2 = P(v2, t);
    ctx.save(); ctx.fillStyle = alpha(C('energy'), 0.18); ctx.fillRect(axL.X(0), axL.Y(p), axL.X(v) - axL.X(0), axL.Y(0) - axL.Y(p)); ctx.restore();
    ctx.save(); ctx.strokeStyle = alpha(C('energy'), 0.8); ctx.lineWidth = 2; ctx.setLineDash([10, 10]); ctx.strokeRect(axL.X(0), axL.Y(p2), axL.X(v2) - axL.X(0), axL.Y(0) - axL.Y(p2)); ctx.restore();
    plot(ctx, axL, (x) => P(x, t), C('pressure'), { w: 5, x: [2, 40] });
    plot(ctx, axR, (x) => P(v, x), C('pressure'), { w: 5 });
    const lx = axL.X(Math.min(v, v2) / 2), ly = axL.Y(Math.min(p, p2) / 2);
    text(ctx, `${fmt(pv, 1)} L bar`, lx, ly, C('energy'), { size: 20, weight: 600, align: 'center', bg: true });
    dL.draw(ctx, axL, C('pressure'));
    dR.draw(ctx, axR, C('pressure'));
    hov.length = 0;
    hov.push({ x: axL.X(v2), y: axL.Y(p2), r: 16, name: `the same isotherm at ${fmt(v2, 1)} L: ${fmt(p2, 2)} bar × ${fmt(v2, 1)} L = ${fmt(pv, 1)} L bar` });
    hov.push({ x: axR.X(0), y: axR.Y(0), r: 16, name: 'every isochore of an ideal gas starts at the origin' });
    tex(d.readout, `\\kP\\kV = \\knmol\\kR\\kT \\\\ (${fmt(p, 2)}\\ \\text{bar})(${fmt(v, 1)}\\ \\text{L}) = (1\\ \\text{mol})(0.08314\\ \\text{L bar K}^{-1}\\text{mol}^{-1})(${fmt(t, 0)}\\ \\text{K}) = ${fmt(pv, 1)}\\ \\text{L bar}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- Figure 16.1.2: Z against P for five gases (faithful copy) ----------
   The curves are read off the book's OpenStax figure at its points (P in atm, Z), joined by a Catmull-Rom spline;
   x 0 to 1000 atm, y 0 to 2 as the book draws it. The axis reads Z with no unit (the image's "Z (kPa)" is corrected
   in the row's footnote). The shaded band is Z < 1. Still, no controls. */
(function () {
  const d = sim('fig-16-1-2', 560);
  const G = [
    { s: 'N₂', p: [[0, 1], [50, 0.95], [100, 0.93], [150, 0.94], [200, 0.97], [250, 1.03], [300, 1.12], [400, 1.3], [500, 1.47], [600, 1.64], [700, 1.81], [820, 1.98]] },
    { s: 'CH₄', p: [[0, 1], [50, 0.88], [100, 0.76], [150, 0.67], [175, 0.65], [200, 0.66], [250, 0.74], [300, 0.84], [400, 1.03], [500, 1.24], [600, 1.45], [700, 1.65], [870, 1.95]] },
    { s: 'H₂', p: [[0, 1], [500, 1.36], [980, 1.71]] },
    { s: 'O₂', p: [[0, 1], [50, 0.88], [100, 0.82], [150, 0.78], [200, 0.77], [250, 0.78], [300, 0.82], [400, 0.95], [500, 1.12], [600, 1.28], [750, 1.48]] },
    { s: 'CO₂', p: [[0, 1], [25, 0.75], [50, 0.5], [75, 0.4], [95, 0.38], [150, 0.43], [200, 0.5], [300, 0.66], [400, 0.82], [500, 0.98], [600, 1.14], [700, 1.3], [800, 1.45], [910, 1.62]] },
  ];
  /* Catmull-Rom through the read points */
  const spline = (pts) => (x) => {
    if (x < pts[0][0] || x > pts[pts.length - 1][0]) return NaN;
    let i = 0; while (i < pts.length - 2 && x > pts[i + 1][0]) i++;
    const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(pts.length - 1, i + 2)];
    const u = (x - p1[0]) / (p2[0] - p1[0]), m1 = (p2[1] - p0[1]) / (p2[0] - p0[0]) * (p2[0] - p1[0]), m2 = (p3[1] - p1[1]) / (p3[0] - p1[0]) * (p2[0] - p1[0]);
    const u2 = u * u, u3 = u2 * u;
    return (2 * u3 - 3 * u2 + 1) * p1[1] + (u3 - 2 * u2 + u) * m1 + (-2 * u3 + 3 * u2) * p2[1] + (u3 - u2) * m2;
  };
  G.forEach((g) => { g.f = spline(g.p); g.min = g.p.reduce((m, q) => (q[1] < m[1] ? q : m), [0, 9]); });
  const hov = []; F.hover(d.stage, () => hov);
  function draw() {
    const { ctx } = begin(d.c);
    const box = { l: 130, r: 1080, t: 70, b: 470 };
    const ax = axes(ctx, box, [0, 1000], [0, 2], { nx: 5, ny: 4, xl: 'pressure P (atm)', yl: 'Z', xc: C('pressure'), yc: PAL.ink });
    ctx.save(); ctx.fillStyle = alpha(PAL.soft, 0.8); ctx.fillRect(ax.X(0), ax.Y(1), ax.X(1000) - ax.X(0), ax.Y(0) - ax.Y(1)); ctx.restore();
    line(ctx, ax.X(0), ax.Y(1), ax.X(1000), ax.Y(1), PAL.ink, 3);
    text(ctx, 'ideal gas', ax.X(990), ax.Y(1) - 16, PAL.ink, { size: 17, align: 'right' });
    G.forEach((g, i) => plot(ctx, ax, g.f, F.cat(i), { w: 5 }));
    legend(ctx, { l: 1100, r: 1380, t: 130, b: 400 }, G.map((g, i) => ({ s: g.s, color: F.cat(i), w: 5 })), { corner: 'tl', panel: false });
    hov.length = 0;
    G.forEach((g, i) => { if (g.min[1] < 1) hov.push({ x: ax.X(g.min[0]), y: ax.Y(g.min[1]), r: 18, name: `${g.s}: Z falls to ${fmt(g.min[1], 2)} near ${g.min[0]} atm` }); });
    hov.push({ x: ax.X(0), y: ax.Y(1), r: 18, name: 'every gas starts at Z = 1 as the pressure goes to zero' });
    tex(d.readout, `Z = \\dfrac{\\kP\\kV}{\\knmol\\kR\\kT}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
