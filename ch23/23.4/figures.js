/* Figures for section 23.4 The Clausius-Clapeyron Equation. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['23.4'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, select, register, begin, line, dot, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- Figure 23.4.1: seven vapor-pressure curves, and the straight lines they become ----------
   Each liquid is its normal boiling point Tb (P = 760 mmHg) and its enthalpy of vaporization, put through
   the integrated Clausius-Clapeyron equation P = 760 exp[-(dH/R)(1/T - 1/Tb)]. Water (373 K, 40.65 kJ/mol)
   and ethanol (351 K, 39.0 kJ/mol) are the book's numbers (Examples 23.4.1 and 23.4.3); the other five are
   read off the book's own figure, by fitting ln P against 1/T along each printed curve.
   Left: P against T, as the book draws it, with the 1 atm line. Right: ln P against 1000/T, where every
   curve is a straight line of slope -dH/R. The point is that second panel: the exponentials straighten,
   and the steeper line belongs to the larger dH. Opens on Example 23.4.1's water at 363 K, 0.697 atm. */
(function () {
  const R = 8.3145, ATM = 760;
  const LIQ = [
    { value: 'ether', label: 'diethyl ether', Tb: 308, H: 28200 },
    { value: 'bromine', label: 'bromine', Tb: 332, H: 28300 },
    { value: 'ethanol', label: 'ethanol', Tb: 351, H: 39000, T0: 313 },
    { value: 'water', label: 'water', Tb: 373, H: 40650, T0: 363 },
    { value: 'octane', label: 'n-octane', Tb: 399, H: 35700 },
    { value: 'glycol', label: 'ethylene glycol', Tb: 470, H: 56400 },
    { value: 'mercury', label: 'mercury', Tb: 631, H: 58300 },
  ];
  const byId = (v) => LIQ.find((l) => l.value === v) || LIQ[3];
  const P = (l, T) => ATM * Math.exp(-(l.H / R) * (1 / T - 1 / l.Tb));
  const lnLine = (l) => (x) => Math.log(ATM) - (l.H / R / 1000) * (x - 1000 / l.Tb);

  const d = sim('sim-vapor-pressure', 600);
  const pick = select(d.controls, { label: 'liquid', options: LIQ.map((l) => ({ value: l.value, label: l.label })), value: 'water',
    onInput: (v) => { const l = byId(v); T.drive(l.T0 || l.Tb - 20); } });
  const T = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: 200, max: 650, step: 1, value: 363, unit: 'K', dec: 0 });
  const hits = [];
  F.hover(d.stage, () => hits);
  /* mmHg to three significant figures, whole numbers from 100 up */
  const fp = (v) => v >= 100 ? fmt(v, 0) : v >= 10 ? fmt(v, 1) : v >= 1 ? fmt(v, 2) : v.toPrecision(2);

  function draw() {
    const { ctx } = begin(d.c);
    const l = byId(pick.value), t = T.v, p = P(l, t), slope = l.H / R;
    topline(ctx, `The vapor pressure of ${l.label} at $\\kT = ${fmt(t, 0)}$ K is $\\kP = ${fp(p)}$ mmHg. On the right its line falls with slope $-\\kDeltaHvap/\\kR = -${fmt(slope, 0)}$ K.`);
    const L = { l: 120, r: 640, t: 130, b: 500 }, Rb = { l: 820, r: 1340, t: 130, b: 500 };
    const a1 = axes(ctx, L, [150, 700], [0, 1000], { nx: 11, ny: 5, xl: 'temperature T (K)', yl: 'vapor pressure P (mmHg)', xc: C('temperature'), yc: C('pressure') });
    const a2 = axes(ctx, Rb, [1.4, 4.2], [0, 8], { nx: 7, ny: 4, xl: '1000/T (1/K)', yl: 'ln (P/mmHg)', xc: C('temperature'), yc: C('pressure') });
    /* the 1 atm line on both panels */
    line(ctx, L.l, a1.Y(ATM), L.r, a1.Y(ATM), alpha(PAL.ink, 0.4), 2, [10, 10]);
    line(ctx, Rb.l, a2.Y(Math.log(ATM)), Rb.r, a2.Y(Math.log(ATM)), alpha(PAL.ink, 0.4), 2, [10, 10]);
    text(ctx, '1 atm', L.l + 8, a1.Y(ATM) - 16, PAL.muted, { size: 17 });
    text(ctx, '1 atm', Rb.l + 8, a2.Y(Math.log(ATM)) - 16, PAL.muted, { size: 17 });
    hits.length = 0;
    for (const o of LIQ) {
      if (o === l) continue;
      plot(ctx, a1, (x) => P(o, x), alpha(PAL.ink, 0.28), { w: 2 });
      plot(ctx, a2, lnLine(o), alpha(PAL.ink, 0.28), { w: 2 });
      hits.push({ x: a1.X(o.Tb), y: a1.Y(ATM), r: 14, name: `${o.label}: boils at ${o.Tb} K, ΔHvap ${fmt(o.H / 1000, 1)} kJ/mol` });
      hits.push({ x: a2.X(1000 / o.Tb), y: a2.Y(Math.log(ATM)), r: 14, name: `${o.label}: slope −${fmt(o.H / R, 0)} K` });
    }
    plot(ctx, a1, (x) => P(l, x), C('pressure'), { w: 5 });
    plot(ctx, a2, lnLine(l), C('pressure'), { w: 5 });
    /* the normal boiling point, hollow, and the reader's point, filled */
    dot(ctx, a1.X(l.Tb), a1.Y(ATM), C('pressure'), false, 10);
    dot(ctx, a2.X(1000 / l.Tb), a2.Y(Math.log(ATM)), C('pressure'), false, 10);
    hits.push({ x: a1.X(l.Tb), y: a1.Y(ATM), r: 14, name: `${l.label}: normal boiling point, ${l.Tb} K` });
    const q1 = F.pinned(ctx, L, a1.X, a1.Y, t, p, C('pressure'), p > 1000 ? `${fp(p)} mmHg` : undefined);
    const q2 = F.pinned(ctx, Rb, a2.X, a2.Y, 1000 / t, Math.log(p), C('pressure'));
    if (!q1.out) line(ctx, q1.x, q1.y, q1.x, L.b, alpha(C('temperature'), 0.8), 3, [4, 8]);
    hits.push({ x: q1.x, y: q1.y, r: 16, name: `${l.label} at ${fmt(t, 0)} K: ${fp(p)} mmHg` });
    hits.push({ x: q2.x, y: q2.y, r: 16, name: `ln P = ${fmt(Math.log(p), 2)} at 1000/T = ${fmt(1000 / t, 3)} 1/K` });
    /* the chosen liquid's name, on its line in the right panel, below and left of it */
    const xs = Math.min(4.0, Math.max(1.6, 1000 / l.Tb + 0.35)), ys = lnLine(l)(xs);
    if (ys > 0.6 && ys < 7.6) text(ctx, l.label, a2.X(xs) - 14, a2.Y(ys) + 4, C('pressure'), { size: 20, weight: 600, align: 'right' });
    tex(d.readout, `\\ln\\left(\\dfrac{\\kPtwo}{\\kPone}\\right) = -\\dfrac{\\kDeltaHvap}{\\kR}\\left(\\dfrac{1}{\\kTtwo} - \\dfrac{1}{\\kTone}\\right) \\\\ \\ln\\left(\\dfrac{\\kPtwo}{760\\ \\text{mmHg}}\\right) = -\\dfrac{${fmt(l.H, 0)}\\ \\text{J/mol}}{8.3145\\ \\text{J/(mol K)}}\\left(\\dfrac{1}{${fmt(t, 0)}\\ \\text{K}} - \\dfrac{1}{${l.Tb}\\ \\text{K}}\\right) \\\\ \\kPtwo = ${fp(p)}\\ \\text{mmHg} = ${fmt(p / ATM, 3)}\\ \\text{atm}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
