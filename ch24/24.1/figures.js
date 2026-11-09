/* Figures for section 24.1 A Mixture is a Combination of Two or More Substances. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['24.1'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, select, register, begin, line, dot, text, topline, axes, plot, shade, legend, label, hbracket, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- Sim (the book's second "Figure 24.1.1"): the pressure-composition diagram of an ideal pair ----------
   Constant T. Liquid line (24.1.4): P = P2 - x1 (P2 - P1), straight. Vapor line (24.1.6): P = P1 P2 / (P1 + (P2 - P1) y1).
   x axis: the mole fraction of component 1, chi_1 for the liquid and y_1 for the vapor, as the book plots them.
   Pairs: the book's plotted figure, toluene (1, 0.24 bar) and benzene (2, 0.66 bar); the text's 50 and 25 Torr;
   24.4's water (1, 384 Torr) and ethanol (2, 945 Torr) at 75 C. Inside the gap the state splits along the tie-line:
   liquid chi_1 = (P2 - P)/(P2 - P1), vapor y_1 = chi_1 P1 / P, and the lever rule gives the amounts.
   Opens on benzene-toluene at overall x1 = 0.5 and 0.40 bar, inside the gap (0.352 to 0.450 bar). */
(function () {
  const PAIRS = [
    { value: 'bt', label: 'benzene and toluene', P1: 0.24, P2: 0.66, unit: 'bar', dec: 3, top: 0.8, ny: 4, n1: 'toluene', n2: 'benzene', r: { min: 0.15, max: 0.75, step: 0.005, value: 0.4 } },
    { value: 'torr', label: '50 and 25 Torr', P1: 50, P2: 25, unit: 'Torr', dec: 1, top: 60, ny: 6, n1: 'component 1', n2: 'component 2', r: { min: 15, max: 58, step: 0.5, value: 35 } },
    { value: 'we', label: 'water and ethanol', P1: 384, P2: 945, unit: 'Torr', dec: 0, top: 1200, ny: 6, n1: 'water', n2: 'ethanol', r: { min: 250, max: 990, step: 5, value: 600 } },
  ];
  const byId = (v) => PAIRS.find((p) => p.value === v) || PAIRS[0];
  const bubble = (p) => (x) => p.P2 - x * (p.P2 - p.P1);
  const dew = (p) => (y) => (p.P1 * p.P2) / (p.P1 + (p.P2 - p.P1) * y);

  const d = sim('sim-pxy', 620);
  const pick = select(d.controls, { label: 'pair', options: PAIRS.map((p) => ({ value: p.value, label: p.label })), value: 'bt',
    onInput: (v) => { const p = byId(v); P.range({ ...p.r, unit: p.unit, dec: p.dec }); } });
  const Z = ctl(d.controls, { label: '\\text{overall } x_1', cls: '', min: 0, max: 1, step: 0.01, value: 0.5, unit: '', dec: 2 });
  const P = ctl(d.controls, { label: '\\kP', cls: 'pressure', ...PAIRS[0].r, unit: 'bar', dec: 3 });
  const hits = [];
  F.hover(d.stage, () => hits);

  function draw() {
    const { ctx } = begin(d.c);
    const p = byId(pick.value), z = Z.v, pr = P.v, u = p.unit, f = (v) => fmt(v, p.dec);
    const Pb = bubble(p)(z), Pd = dew(p)(z);
    const inGap = pr < Pb && pr > Pd;
    const chi = (p.P2 - pr) / (p.P2 - p.P1), y = chi * p.P1 / pr;
    if (inGap) topline(ctx, `At $\\kP = ${f(pr)}$ ${u} the mixture splits into a liquid with $\\kchione = ${fmt(chi, 2)}$ and a vapor with $y_1 = ${fmt(y, 2)}$.`);
    else if (pr >= Pb) topline(ctx, `At $\\kP = ${f(pr)}$ ${u}, above the liquid line, the mixture is one liquid.`);
    else topline(ctx, `At $\\kP = ${f(pr)}$ ${u}, below the vapor line, the mixture is all vapor.`);
    const B = { l: 150, r: 1250, t: 130, b: 530 };
    const a = axes(ctx, B, [0, 1], [0, p.top], { nx: 5, ny: p.ny, xl: 'mole fraction of component 1 (χ₁ in the liquid, y₁ in the vapor)', yl: `pressure P (${u})`, yc: C('pressure') });
    shade(ctx, a, bubble(p), dew(p), 0, 1, PAL.ink, { alpha: 0.08 });
    plot(ctx, a, bubble(p), C('pressure'), { w: 5 });
    plot(ctx, a, dew(p), C('pressure'), { w: 4, dash: [10, 10] });
    /* the pure components at the two ends */
    text(ctx, `pure ${p.n2}`, B.l + 14, B.t + 22, PAL.muted, { size: 18, align: 'left' });
    text(ctx, `pure ${p.n1}`, B.r - 14, B.t + 22, PAL.muted, { size: 18, align: 'right' });
    /* the two one-phase regions, named where they are widest */
    const xm = p.P1 > p.P2 ? 0.25 : 0.75;
    text(ctx, 'liquid', a.X(xm), a.Y(Math.min(p.top * 0.95, bubble(p)(xm) + 0.18 * p.top)), PAL.muted, { size: 20, align: 'center' });
    const vx = a.X(1 - xm), vy = a.Y(dew(p)(1 - xm) * 0.45);
    text(ctx, 'vapor', vx, vy, PAL.muted, { size: 20, align: 'center' });
    hits.length = 0;
    const X = a.X(z), Yp = a.Y(pr);
    line(ctx, X, Yp, X, B.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
    if (inGap) {
      const xl = a.X(chi), xv = a.X(y);
      line(ctx, xl, Yp, xv, Yp, PAL.ink, 3);
      dot(ctx, xl, Yp, C('pressure'), true, 10);
      dot(ctx, xv, Yp, C('pressure'), false, 10);
      label(ctx, `liquid, χ₁ = ${fmt(chi, 2)}`, xl, Yp, { side: chi > y ? 'right' : 'left', size: 19, gap: 22 });
      label(ctx, `vapor, y₁ = ${fmt(y, 2)}`, xv, Yp, { side: chi > y ? 'left' : 'right', size: 19, gap: 22 });
      hits.push({ x: xl, y: Yp, r: 16, name: `liquid end of the tie-line: χ₁ = ${fmt(chi, 3)}` }, { x: xv, y: Yp, r: 16, name: `vapor end of the tie-line: y₁ = ${fmt(y, 3)}` });
    }
    dot(ctx, X, Yp, PAL.ink, true, 8);
    hits.push({ x: X, y: Yp, r: 14, name: `overall composition x₁ = ${fmt(z, 2)} at ${f(pr)} ${u}` });
    legend(ctx, a, [{ s: 'liquid line (24.1.4)', color: C('pressure'), w: 5, f: bubble(p) }, { s: 'vapor line (24.1.6)', color: C('pressure'), w: 4, dash: [10, 10], f: dew(p) }, { s: 'liquid + vapor', color: alpha(PAL.ink, 0.15), kind: 'swatch' }], { avoid: [{ l: X - 20, r: X + 20, t: Yp - 20, b: Yp + 20 }, { l: B.l, r: B.l + 260, t: B.t, b: B.t + 44 }, { l: B.r - 260, r: B.r, t: B.t, b: B.t + 44 }, { l: vx - 50, r: vx + 50, t: vy - 20, b: vy + 20 }] });
    const U = `\\ \\text{${u}}`;
    if (inGap) {
      const x2 = 1 - chi, y2 = 1 - y, xa = 1 - z;
      tex(d.readout, `\\kPtotal = \\kPcirctwo - \\kchione(\\kPcirctwo - \\kPcircone) \\\\ ${f(pr)}${U} = ${f(p.P2)}${U} - ${fmt(chi, 3)}\\,(${f(p.P2)} - ${f(p.P1)})${U} \\\\ y_1 = \\dfrac{${fmt(chi, 3)} \\times ${f(p.P1)}${U}}{${f(pr)}${U}} = ${fmt(y, 3)} \\\\ \\dfrac{\\knliq}{\\kngas} = \\dfrac{${fmt(y2, 3)} - ${fmt(xa, 3)}}{${fmt(xa, 3)} - ${fmt(x2, 3)}} = ${fmt((y2 - xa) / (xa - x2), 2)}`);
    } else if (pr >= Pb) {
      tex(d.readout, `\\kPtotal = \\kPcirctwo - \\kchione(\\kPcirctwo - \\kPcircone) \\\\ \\kPtotal = ${f(p.P2)}${U} - ${fmt(z, 2)}\\,(${f(p.P2)} - ${f(p.P1)})${U} = ${f(Pb)}${U} \\\\ \\kP = ${f(pr)}${U} \\geq ${f(Pb)}${U}`);
    } else {
      tex(d.readout, `\\kPtotal = \\dfrac{\\kPcircone\\kPcirctwo}{\\kPcircone + (\\kPcirctwo - \\kPcircone)y_1} \\\\ \\kPtotal = \\dfrac{${f(p.P1)} \\times ${f(p.P2)}}{${f(p.P1)} + (${f(p.P2)} - ${f(p.P1)}) \\times ${fmt(z, 2)}}${U} = ${f(Pd)}${U} \\\\ \\kP = ${f(pr)}${U} \\leq ${f(Pd)}${U}`);
    }
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- Sim (the book's dead lever-rule image): the temperature-composition lens, the lever and distillation ----------
   Constant P = 1 bar, an ideal pair. Each pure vapor pressure from the integrated Clausius-Clapeyron equation (23.4),
   P_i(T) = exp[-(dH_i/R)(1/T - 1/Tb_i)] bar, with illustrative values: component 1 boils at 353 K (30.8 kJ/mol),
   component 2 at 384 K (33.2 kJ/mol), so 1 is the more volatile and sits on the left (x2 = 0).
   Raoult and Dalton at 1 bar: liquid x2 = (1 - P1)/(P2 - P1), vapor y2 = x2 P2. Lever rule (the book's):
   n_liq/n_gas = (y2 - x_all)/(x_all - x2). Distillation stages: boil the liquid at its bubble point, condense the
   vapor, boil again; the staircase walks to the left. T axis 345-390 K holds the lens (353-384 K). */
(function () {
  const R = 8.3145, TB1 = 353, H1 = 30800, TB2 = 384, H2 = 33200;
  const p1 = (T) => Math.exp(-(H1 / R) * (1 / T - 1 / TB1)), p2 = (T) => Math.exp(-(H2 / R) * (1 / T - 1 / TB2));
  const xLiq = (T) => (1 - p1(T)) / (p2(T) - p1(T));
  const yVap = (T) => xLiq(T) * p2(T);
  /* bubble and dew temperatures by bisection: xLiq and yVap both rise from 0 at 353 K to 1 at 384 K */
  const solve = (g, v) => { let lo = TB1, hi = TB2; for (let i = 0; i < 50; i++) { const m = (lo + hi) / 2; if (g(m) < v) lo = m; else hi = m; } return (lo + hi) / 2; };
  const Tbub = (x) => solve(xLiq, x), Tdew = (y) => solve(yVap, y);

  const d = sim('sim-txy-lever', 620);
  const XA = ctl(d.controls, { label: '\\kxall', cls: '', min: 0.02, max: 0.98, step: 0.01, value: 0.5, unit: '', dec: 2 });
  const T = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: 348, max: 388, step: 0.5, value: 370, unit: 'K', dec: 1 });
  const N = ctl(d.controls, { label: '\\text{stages}', cls: '', min: 0, max: 5, step: 1, value: 0, unit: '', dec: 0, detents: [0, 1, 2, 3, 4, 5] });
  const hits = [];
  F.hover(d.stage, () => hits);

  function draw() {
    const { ctx } = begin(d.c);
    const xa = XA.v, t = T.v, n = Math.round(N.v);
    const tb = Tbub(xa), td = Tdew(xa), inLens = t > tb && t < td;
    const x2 = xLiq(t), y2 = yVap(t), ratio = (y2 - xa) / (xa - x2);
    if (inLens) topline(ctx, `At $\\kT = ${fmt(t, 1)}$ K the liquid has $\\kxtwo = ${fmt(x2, 2)}$ and the vapor $y_2 = ${fmt(y2, 2)}$, in the ratio $\\knliq/\\kngas = ${fmt(ratio, 2)}$.`);
    else if (t <= tb) topline(ctx, `At $\\kT = ${fmt(t, 1)}$ K, below its boiling point, the mixture is one liquid.`);
    else topline(ctx, `At $\\kT = ${fmt(t, 1)}$ K, above its dew point, the mixture is all vapor.`);
    const B = { l: 150, r: 1250, t: 130, b: 530 };
    const a = axes(ctx, B, [0, 1], [345, 390], { nx: 5, ny: 9, xl: 'mole fraction of component 2 (x₂ in the liquid, y₂ in the vapor)', yl: 'temperature T (K)', yc: C('temperature') });
    shade(ctx, a, Tdew, Tbub, 0, 1, PAL.ink, { alpha: 0.08 });
    plot(ctx, a, Tbub, C('temperature'), { w: 5 });
    plot(ctx, a, Tdew, C('temperature'), { w: 4, dash: [10, 10] });
    text(ctx, 'vapor', a.X(0.3), a.Y(386), PAL.muted, { size: 20, align: 'center' });
    text(ctx, 'liquid', a.X(0.7), a.Y(350), PAL.muted, { size: 20, align: 'center' });
    text(ctx, 'component 1 boils at 353 K', a.X(0) + 14, a.Y(345) - 18, PAL.muted, { size: 17, align: 'left' });
    text(ctx, 'component 2 boils at 384 K', a.X(1) - 14, a.Y(388) + 4, PAL.muted, { size: 17, align: 'right' });
    hits.length = 0;
    /* the isopleth and the isotherm */
    line(ctx, a.X(xa), B.t, a.X(xa), B.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
    line(ctx, B.l, a.Y(t), B.r, a.Y(t), alpha(C('temperature'), 0.5), 2, [4, 8]);
    hits.push({ x: a.X(xa), y: a.Y(t), r: 14, name: `isopleth x_all = ${fmt(xa, 2)} meets the isotherm T = ${fmt(t, 1)} K` });
    /* the distillation staircase from the liquid of overall composition */
    let x = xa, last = xa;
    for (let i = 0; i < n; i++) {
      const Tb = Tbub(x), yv = yVap(Tb), Tn = Tbub(yv);
      line(ctx, a.X(x), a.Y(Tb), a.X(yv), a.Y(Tb), PAL.muted, 3);
      line(ctx, a.X(yv), a.Y(Tb), a.X(yv), a.Y(Tn), PAL.muted, 3);
      dot(ctx, a.X(yv), a.Y(Tn), PAL.muted, true, 6);
      hits.push({ x: a.X(yv), y: a.Y(Tb), r: 12, name: `stage ${i + 1}: vapor y₂ = ${fmt(yv, 3)} at ${fmt(Tb, 1)} K, condensed` });
      x = yv; last = yv;
    }
    if (inLens) {
      const X1 = a.X(y2), X2 = a.X(x2), Xa = a.X(xa), Yt = a.Y(t);
      line(ctx, X1, Yt, X2, Yt, PAL.ink, 3);
      hbracket(ctx, X1, Xa, Yt - 26, C('amount'), 'liquid');
      hbracket(ctx, Xa, X2, Yt + 26, C('amount'), 'vapor', { side: 'below' });
      dot(ctx, X2, Yt, C('temperature'), true, 10);
      dot(ctx, X1, Yt, C('temperature'), false, 10);
      hits.push({ x: X2, y: Yt, r: 16, name: `liquid: x₂ = ${fmt(x2, 3)}` }, { x: X1, y: Yt, r: 16, name: `vapor: y₂ = ${fmt(y2, 3)}` });
    }
    dot(ctx, a.X(xa), a.Y(t), PAL.ink, true, 8);
    legend(ctx, a, [{ s: 'boiling (liquid) line', color: C('temperature'), w: 5, f: Tbub }, { s: 'dew (vapor) line', color: C('temperature'), w: 4, dash: [10, 10], f: Tdew }], { corner: 'tl' });
    const lines = [];
    if (inLens) lines.push(`\\dfrac{\\knliq}{\\kngas} = \\dfrac{y_2 - \\kxall}{\\kxall - \\kxtwo}`, `\\dfrac{\\knliq}{\\kngas} = \\dfrac{${fmt(y2, 3)} - ${fmt(xa, 3)}}{${fmt(xa, 3)} - ${fmt(x2, 3)}} = ${fmt(ratio, 2)}`);
    else if (t <= tb) lines.push(`\\kT = ${fmt(t, 1)}\\ \\text{K} \\leq T_{boil} = ${fmt(tb, 1)}\\ \\text{K}`);
    else lines.push(`\\kT = ${fmt(t, 1)}\\ \\text{K} \\geq T_{dew} = ${fmt(td, 1)}\\ \\text{K}`);
    if (n > 0) lines.push(`y_2^{(${n})} = ${fmt(last, 3)}`);
    tex(d.readout, lines.join(' \\\\ '));
  }
  register(d.fig, { update: () => {}, draw });
})();
};
