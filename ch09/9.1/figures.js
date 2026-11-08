/* Figures for section 9.1 The Born-Oppenheimer Approximation Simplifies the Schrödinger Equation for Molecules. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.1'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, cycle, register, begin, line, dot, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;

/* ---------- Example 9.1.1: coupled oscillators with dissimilar masses ----------
   A wall, spring k1, block m1, spring k2, block m2, in units k1 = m1 = 1. The normal modes are the eigenvectors of
   M⁻¹K = [[(k1 + k2)/m1, −k2/m1], [−k2/m2, k2/m2]]. Start from rest with m1 pulled out by 1 and m2 by 1.35, so the
   light block starts a little off its place beside the heavy one. One loop is 1.5 periods of the slow mode, drawn
   over 7 s. Fixed ranges from the slider extremes (checked numerically): |x1| ≤ 1.11, |x2| ≤ 1.78, so the scene
   draws ±1.9 and the graph −2 to 2. The point: as m1/m2 grows, m2 follows m1 and shivers fast about it. */
(function () {
  const d = sim('sim-coupled', 640);
  const MR = ctl(d.controls, { label: '\\kmone/\\kmtwo', cls: 'mass', min: 0, max: Math.log10(2000), step: 0.001, value: Math.log10(1836),
    fmt: (lg) => { const v = Math.pow(10, lg); return Math.abs(v - 1836) < 3 ? '1836' : fmt(v, v < 10 ? 1 : 0); }, detents: [{ v: 0, label: 'equal' }, { v: Math.log10(1836), label: 'proton/electron' }], snap: true,
    aria: 'the ratio of the heavy mass to the light mass', key: 'ratio', onInput: () => cy.reset() });
  const KR = ctl(d.controls, { label: 'k_2/k_1', cls: 'force-constant', min: 0.5, max: 2, step: 0.05, value: 1, dec: 2, detents: [1], snap: true,
    aria: 'the stiffness of the second spring over the first', key: 'springs', onInput: () => cy.reset() });
  const X0 = [1, 1.35], SLOW_TURNS = 1.5, LOOP_S = 7;
  function modes() {
    const r10 = Math.pow(10, MR.v), rho = Math.abs(r10 - 1836) < 3 ? 1836 : r10, m2 = 1 / rho, k2 = KR.v;
    const a = 1 + k2, b = -k2, c = -k2 / m2, e = k2 / m2;
    const tr = a + e, det = a * e - b * c, disc = Math.sqrt(Math.max(0, tr * tr / 4 - det));
    const w2 = [tr / 2 - disc, tr / 2 + disc];                       /* slow, fast */
    const v = w2.map((q) => [1, (a - q) / k2]);                      /* (a − ω²)·1 + b·v₂ = 0 */
    const D = v[0][0] * v[1][1] - v[1][0] * v[0][1];
    const c0 = (X0[0] * v[1][1] - v[1][0] * X0[1]) / D, c1 = (v[0][0] * X0[1] - X0[0] * v[0][1]) / D;
    const w = w2.map(Math.sqrt);
    const x = (t) => [c0 * v[0][0] * Math.cos(w[0] * t) + c1 * v[1][0] * Math.cos(w[1] * t), c0 * v[0][1] * Math.cos(w[0] * t) + c1 * v[1][1] * Math.cos(w[1] * t)];
    return { rho, w, x, P: SLOW_TURNS * TAU / w[0] };
  }
  let M = modes();
  const cy = cycle(() => M.P, 1.2);
  const hits = []; F.hover(d.stage, () => hits);
  function draw() {
    M = modes();
    const { ctx } = begin(d.c);
    const t = cy.now(), [x1, x2] = M.x(t);
    const c1 = F.cat(0), c2 = F.cat(1), ck = C('force-constant');
    /* the scene: 70 units per unit of displacement */
    const S = 70, Y = 190, X1e = 420, X2e = 860, wall = 110;
    const w1 = 130, w2 = 130 - 30 * Math.log10(M.rho);               /* the light block shrinks as it gets lighter */
    F.fixed(ctx, wall - 40, Y - 80, 40, 160);
    const p1 = X1e + S * x1, p2 = X2e + S * x2;
    F.spring(ctx, wall, Y, p1 - w1 / 2, Y, 9, 16, ck, 3);
    F.spring(ctx, p1 + w1 / 2, Y, p2 - w2 / 2, Y, 9, 12, ck, 3);
    F.block(ctx, p1, Y, w1, w1 * 0.8, c1);
    F.block(ctx, p2, Y, w2, w2 * 0.8, c2);
    text(ctx, 'm₁', p1, Y, c1, { size: 24, weight: 600, align: 'center' });
    if (w2 > 60) text(ctx, 'm₂', p2, Y, c2, { size: 22, weight: 600, align: 'center' });
    else text(ctx, 'm₂', p2, Y - w2 * 0.4 - 22, c2, { size: 22, weight: 600, align: 'center' });
    /* rest marks */
    [X1e, X2e].forEach((X) => line(ctx, X, Y + 70, X, Y + 92, alpha(PAL.ink, 0.4), 2));
    hits.length = 0;
    hits.push({ x: p1, y: Y, r: w1 / 2, name: `the heavy block m₁, ${fmt(x1, 2)} from its rest place` });
    hits.push({ x: p2, y: Y, r: Math.max(24, w2 / 2), name: `the light block m₂, ${M.rho >= 10 ? fmt(M.rho, 0) : fmt(M.rho, 1)} times lighter, ${fmt(x2, 2)} from its rest place` });
    hits.push({ x: (wall + p1) / 2, y: Y, r: 24, name: 'the spring k₁ to the wall' });
    hits.push({ x: (p1 + p2) / 2, y: Y, r: 24, name: `the spring k₂ = ${fmt(KR.v, 2)} k₁ between the blocks` });
    /* the graph: both displacements against time, in periods of the slow mode */
    const box = { l: 150, r: 1320, t: 340, b: 590 };
    const ax = axes(ctx, box, [0, SLOW_TURNS], [-2, 2], { nx: 3, ny: 4, xl: 'time t (periods of the slow swing)', yl: 'displacement', xc: C('time'), yc: C('length') });
    line(ctx, box.l, ax.Y(0), box.r, ax.Y(0), alpha(PAL.ink, 0.3), 2);
    const T1 = TAU / M.w[0], upto = t / T1;
    plot(ctx, ax, (s) => M.x(s * T1)[0], c1, { w: 5, x: [0, Math.max(1e-6, upto)] });
    plot(ctx, ax, (s) => M.x(s * T1)[1], c2, { w: 2.5, x: [0, Math.max(1e-6, upto)] });
    dot(ctx, ax.X(upto), ax.Y(x1), c1, true, 8); dot(ctx, ax.X(upto), ax.Y(x2), c2, true, 7);
    F.legend(ctx, ax, [{ s: 'heavy block m₁', color: c1, w: 5 }, { s: 'light block m₂', color: c2, w: 2.5 }], { corner: 'above' });
    const ratio = M.w[1] / M.w[0];
    topline(ctx, `With $\\kmone/\\kmtwo = ${M.rho >= 10 ? fmt(M.rho, 0) : fmt(M.rho, 1)}$ the light block swings ${fmt(ratio, 1)} times for each swing of the heavy one.`);
    tex(d.readout, `\\dfrac{\\omega_{fast}}{\\omega_{slow}} = \\dfrac{${fmt(M.w[1], 3)}\\sqrt{k_1/\\kmone}}{${fmt(M.w[0], 3)}\\sqrt{k_1/\\kmone}} = ${fmt(ratio, 1)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => M.P / LOOP_S), draw });
})();

/* ---------- Figure 9.1.1: H2's potential energy curve as two parts ----------
   V_e(R) for H2 from a Morse fit (D_e = 4.75 eV, R_e = 74.1 pm, a = 0.01945 pm⁻¹ from ω_e = 4401 cm⁻¹; Huber and
   Herzberg via NIST), zero at two separate atoms. The nuclear repulsion is e²/4πε₀R = 1439.96 eV·pm / R, and
   E_e(R) = V_e(R) − repulsion (9.1.6). x: R 0 to 300 pm; y: −40 to 30 eV, fixed, so both large terms show and the
   well, 4.75 eV, reads as the small difference it is. The probe is the slider. Still: no time in it. */
(function () {
  const d = sim('sim-h2-potential', 620);
  const R = ctl(d.controls, { label: '\\kR', cls: 'length', min: 40, max: 300, step: 1, value: 74, unit: 'pm', dec: 0, detents: [{ v: 74, label: 'R₀' }], snap: true, aria: 'the distance between the two nuclei' });
  const DE = 4.75, RE = 74.1, A = 0.01945, K = 1439.96;
  const Ve = (r) => DE * (Math.pow(1 - Math.exp(-A * (r - RE)), 2) - 1);
  const rep = (r) => K / r, Ee = (r) => Ve(r) - rep(r);
  const hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const r = R.v, ce = C('energy'), cl = C('length');
    const box = { l: 150, r: 1320, t: 120, b: 540 };
    const ax = axes(ctx, box, [0, 300], [-40, 30], { nx: 6, ny: 7, xl: 'internuclear distance R (pm)', yl: 'energy (eV)', xc: cl, yc: ce });
    line(ctx, box.l, ax.Y(0), box.r, ax.Y(0), alpha(PAL.ink, 0.35), 2);
    plot(ctx, ax, rep, alpha(ce, 0.75), { w: 3, dash: [10, 10], x: [20, 300] });
    plot(ctx, ax, Ee, alpha(ce, 0.75), { w: 3, dash: [4, 8], x: [20, 300] });
    plot(ctx, ax, Ve, ce, { w: 5, x: [30, 300] });
    /* the probe */
    line(ctx, ax.X(r), box.t, ax.X(r), box.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
    const vr = Ve(r), er = Ee(r), rr = rep(r);
    if (rr <= 30) dot(ctx, ax.X(r), ax.Y(rr), ce, false, 8);
    if (er >= -40) dot(ctx, ax.X(r), ax.Y(er), ce, false, 8);
    dot(ctx, ax.X(r), ax.Y(vr), ce, true, 10);
    /* the bottom of the well */
    if (Math.abs(r - RE) > 6) dot(ctx, ax.X(RE), ax.Y(-DE), PAL.ink, false, 7);
    F.label(ctx, 'R₀ = 74 pm', ax.X(RE) + 10, ax.Y(-DE) + 34, { side: 'right', size: 20, color: cl });
    F.legend(ctx, ax, [
      { s: 'Vₑ, what the nuclei feel', color: ce, w: 5 },
      { s: 'nuclear repulsion', color: alpha(ce, 0.75), w: 3, dash: [10, 10] },
      { s: 'electronic energy Eₑ', color: alpha(ce, 0.75), w: 3, dash: [4, 8] },
    ], { corner: 'tr' });
    hits.length = 0;
    hits.push({ x: ax.X(r), y: ax.Y(vr), r: 16, name: `Vₑ = ${fmt(vr, 2)} eV at R = ${fmt(r, 0)} pm` });
    if (rr <= 30) hits.push({ x: ax.X(r), y: ax.Y(rr), r: 14, name: `the nuclei's repulsion, ${fmt(rr, 2)} eV` });
    if (er >= -40) hits.push({ x: ax.X(r), y: ax.Y(er), r: 14, name: `the electrons' energy Eₑ, ${fmt(er, 2)} eV` });
    hits.push({ x: ax.X(RE), y: ax.Y(-DE), r: 14, name: 'the equilibrium separation R₀, where the crude Born-Oppenheimer approximation takes φₑ' });
    hits.push({ x: ax.X(280), y: ax.Y(0), r: 14, name: 'zero: two hydrogen atoms far apart' });
    const atMin = Math.abs(r - RE) < 1;
    topline(ctx, atMin ? `At $\\kR = \\kRzero = 74$ pm the nuclei sit at the bottom of the well, $\\kVe = ${fmt(vr, 2)}$ eV.`
      : r > 200 ? `At $\\kR = ${fmt(r, 0)}$ pm the two atoms barely interact: $\\kVe = ${fmt(vr, 2)}$ eV.`
        : `At $\\kR = ${fmt(r, 0)}$ pm the nuclei feel $\\kVe = ${fmt(vr, 2)}$ eV.`);
    const a = +er.toFixed(2), b = +rr.toFixed(2);
    tex(d.readout, `\\kVe(\\kR) = \\kEe(\\kR) + \\dfrac{\\ke^2}{4\\pi\\epsilon_0}\\dfrac{Z_AZ_B}{\\kR} \\\\ \\kVe(${fmt(r, 0)}\\ \\text{pm}) = ${fmt(a, 2)}\\ \\text{eV} + ${fmt(b, 2)}\\ \\text{eV} = ${fmt(a + b, 2)}\\ \\text{eV}`, false, { values: false });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- Figure 9.1.2: water's potential energy surface, and a slice through it ----------
   A model of the surface over the two coordinates the book draws, the O-H bond length r (both bonds together) and
   the H-O-H angle θ: E = 2 D_e (1 − e^(−a(r − r_e)))² + ½ k_θ (θ − θ_e)², with D_e = 5.1 eV, a = 22 nm⁻¹,
   r_e = 0.0958 nm, θ_e = 104.5°, k_θ = 4.36 eV/rad² (water's bond energy, stretch and bend constants). Scene
   coordinates: x = (r − 0.075)/0.085, y = (θ − 60°)/90°, z = E/6 eV × 0.8, E capped at 6 eV. Mathematical 3D, free
   orbit bounded above the floor (the surface has nothing to show from beneath); no buttons. The flat canvas below
   draws the slice through the point at fixed θ or fixed r, which is a potential energy curve like Figure 9.1.1. */
(function () {
  const d = F.sim(root, 'sim-water-pes');
  const DE = 5.1, AA = 22, RE = 0.0958, TE = 104.5, KT = 4.36, CAP = 6, ZS = 0.8;
  const E = (r, th) => 2 * DE * Math.pow(1 - Math.exp(-AA * (r - RE)), 2) + 0.5 * KT * Math.pow((th - TE) * Math.PI / 180, 2);
  const xr = (r) => (r - 0.075) / 0.085, yt = (th) => (th - 60) / 90, ze = (e) => Math.min(CAP, e) / CAP * ZS;
  const rOf = (x) => 0.075 + 0.085 * x, tOf = (y) => 60 + 90 * y;
  const S = F.space3d(d, { box: [[0, 1], [0, 1], [0, ZS]], h: 500, turn: -0.7, tilt: 0.55, fit: 1.75, pitch: [0.12, Math.PI / 2], spin: 'off', zoom: false });
  const cut = F.makeCanvas(d.stage, 360);
  const CUT = F.choice(d.controls, { label: '\\text{slice}', options: [{ value: 'r', label: 'along r, θ fixed' }, { value: 't', label: 'along θ, r fixed' }], value: 'r', aria: 'which way the slice runs through the point' });
  const RR = ctl(d.controls, { label: 'r', cls: 'length', min: 0.08, max: 0.155, step: 0.0002, value: 0.0958, unit: 'nm', dec: 4, detents: [{ v: 0.0958, label: 'rₑ' }], snap: true, aria: 'the O-H bond length' });
  const TH = ctl(d.controls, { label: '\\theta', cls: 'angle', min: 65, max: 145, step: 0.5, value: 104.5, unit: '°', dec: 1, detents: [{ v: 104.5, label: 'θₑ' }], snap: true, aria: 'the H-O-H angle' });
  const hits = []; F.hover(d.stage, () => hits, cut);
  function draw() {
    const r = RR.v, th = TH.v, e = E(r, th), along = CUT.value, ce = C('energy'), cl = C('length'), ca = C('angle');
    const f = (x, y) => ze(E(rOf(x), tOf(y)));
    S.set('surface', F.space.graph(f, { x: [0, 1], y: [0, 1] }, ce, { n: 44, grid: 8, alpha: 0.85 }));
    const P = [xr(r), yt(th), ze(e)];
    const path = along === 'r' ? Array.from({ length: 81 }, (_, i) => [i / 80, yt(th), f(i / 80, yt(th)) + 0.004]) : Array.from({ length: 81 }, (_, i) => [xr(r), i / 80, f(xr(r), i / 80) + 0.004]);
    S.set('slice', [{ k: 'line', pts: path, color: 'ink', w: 4, name: along === 'r' ? `the slice at θ = ${fmt(th, 1)}°` : `the slice at r = ${fmt(r, 4)} nm` },
      { k: 'dot', p: P, color: 'ink', r: 9, name: `r = ${fmt(r, 4)} nm, θ = ${fmt(th, 1)}°: E = ${fmt(e, 2)} eV` }]);
    S.set('frame', [
      { k: 'line', pts: [[0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0], [0, 0, 0]], color: 'guide', w: 2 },
      { k: 'line', pts: [[0, 0, 0], [0, 0, ZS]], color: 'guide', w: 2 },
      { k: 'label', s: 'r (nm)', p: [0.5, -0.2, 0], color: cl, cls: 'bare' },
      { k: 'label', s: '0.12', p: [xr(0.12), -0.09, 0], cls: 'tick' }, { k: 'label', s: '0.16', p: [1, -0.09, 0], cls: 'tick' },
      { k: 'label', s: 'θ (°)', p: [-0.24, 0.5, 0], color: ca, cls: 'bare' },
      { k: 'label', s: '60', p: [-0.09, 0.02, 0], cls: 'tick' }, { k: 'label', s: '150', p: [-0.09, 1, 0], cls: 'tick' },
      { k: 'label', s: 'E (eV)', p: [0, 0, ZS + 0.08], color: ce, cls: 'bare' },
      { k: 'dot', p: [xr(RE), yt(TE), 0], color: 'muted', r: 6, name: 'below the lowest point: water\'s shape, 0.0958 nm and 104.5°' },
    ]);
    S.headline(e < 0.005 ? `The point sits at the bottom, water's shape: $r = 0.0958$ nm and $\\theta = 104.5°$.` : `The point sits ${fmt(e, 2)} eV above the bottom, water's shape at $r = 0.0958$ nm and $\\theta = 104.5°$.`);
    /* the slice, flat */
    const { ctx } = begin(cut);
    const box = { l: 150, r: 1320, t: 50, b: 290 };
    hits.length = 0;
    if (along === 'r') {
      const ax = axes(ctx, box, [0.075, 0.16], [0, 6], { nx: 0, ny: 3, xl: 'O-H bond length r (nm)', yl: 'E (eV)', xc: cl, yc: ce });
      [0.08, 0.1, 0.12, 0.14, 0.16].forEach((v) => text(ctx, fmt(v, 2), ax.X(v), box.b + 22, PAL.muted, { size: 17, align: 'center' }));
      plot(ctx, ax, (x) => E(x, th), ce, { w: 5 });
      dot(ctx, ax.X(r), ax.Y(Math.min(6, e)), ce, true, 10);
      hits.push({ x: ax.X(r), y: ax.Y(Math.min(6, e)), r: 16, name: `E = ${fmt(e, 2)} eV at r = ${fmt(r, 4)} nm` });
    } else {
      const ax = axes(ctx, box, [60, 150], [0, 6], { nx: 6, ny: 3, xl: 'H-O-H angle θ (°)', yl: 'E (eV)', xc: ca, yc: ce });
      plot(ctx, ax, (x) => E(r, x), ce, { w: 5 });
      dot(ctx, ax.X(th), ax.Y(Math.min(6, e)), ce, true, 10);
      hits.push({ x: ax.X(th), y: ax.Y(Math.min(6, e)), r: 16, name: `E = ${fmt(e, 2)} eV at θ = ${fmt(th, 1)}°` });
    }
    const s = 2 * DE * Math.pow(1 - Math.exp(-AA * (r - RE)), 2), b = 0.5 * KT * Math.pow((th - TE) * Math.PI / 180, 2);
    const sa = +s.toFixed(2), ba = +b.toFixed(2);
    tex(d.readout, `E(r,\\theta) = 2D_e\\left(1 - e^{-a(r - r_e)}\\right)^2 + \\tfrac{1}{2}k_\\theta(\\theta - \\theta_e)^2 \\\\ E(${fmt(r, 4)}\\ \\text{nm},\\ ${fmt(th, 1)}°) = ${fmt(sa, 2)}\\ \\text{eV} + ${fmt(ba, 2)}\\ \\text{eV} = ${fmt(sa + ba, 2)}\\ \\text{eV}`, false, { values: false });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
