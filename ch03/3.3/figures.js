/* Figures for section 3.3 The Schrödinger Equation is an Eigenvalue Problem. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.3'] = function (root, F) {
const { el, tex, C, PAL, alpha, register, begin, line, topline, axes, plot } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const s = el('small', null, small); host.appendChild(s); F.renderMath(s); } }

/* =====================================================================
   Sim: the operator bench. An operator (the momentum, kinetic-energy or
   position operator of 3.3.9, 3.3.11, 3.3.14) acts on one of the
   section's functions: Example 3.3.1's A sin(ax) and N exp(-ix/hbar),
   Exercise 3.3.1's M exp(-bx). Still: a choice changes the state and the
   curves morph; nothing has a time in it.
   Top: f (wavefunction hue) and Af (operator hue), real parts solid,
   imaginary parts dashed. Bottom: the ratio Af / f, which is one flat
   line exactly when f is an eigenfunction, at the eigenvalue.
   Drawn with hbar = m = 1, A = N = M = 1, a = 2, b = 0.5; the readout is
   written in the book's symbols. x: 0 to pi; top y -4 to 4 (x times
   exp(-ix) reaches -pi at x = pi); ratio y -3 to 3 (KE on sin is 2).
===================================================================== */
(function () {
  const d = sim('sim-operator-bench', 700);
  const O = F.choice(d.controls, { label: '\\text{operator}', options: [{ value: 'p', label: 'p̂ₓ' }, { value: 'ke', label: 'KÊ' }, { value: 'x', label: 'x̂' }], value: 'p', aria: 'the operator' });
  const Fn = F.choice(d.controls, { label: '\\text{function}', options: [{ value: 'sin', label: 'A sin ax' }, { value: 'plane', label: 'N exp(−ix/ħ)' }, { value: 'dec', label: 'M exp(−bx)' }], value: 'plane', aria: 'the function' });
  const A = 2, B = 0.5;
  /* each function and its first and second derivatives, as [re, im] */
  const FN = {
    sin: { f: (x) => [Math.sin(A * x), 0], d1: (x) => [A * Math.cos(A * x), 0], d2: (x) => [-A * A * Math.sin(A * x), 0], tex: 'A\\sin(a\\kx)', name: 'A sin(ax)' },
    plane: { f: (x) => [Math.cos(x), -Math.sin(x)], d1: (x) => [-Math.sin(x), -Math.cos(x)], d2: (x) => [-Math.cos(x), Math.sin(x)], tex: 'Ne^{-i\\kx/\\hbar}', name: 'N exp(−ix/ħ)' },
    dec: { f: (x) => [Math.exp(-B * x), 0], d1: (x) => [-B * Math.exp(-B * x), 0], d2: (x) => [B * B * Math.exp(-B * x), 0], tex: 'Me^{-b\\kx}', name: 'M exp(−bx)' },
  };
  /* the operator on f at x, hbar = m = 1: p = -i d/dx, KE = -(1/2) d2/dx2, x = multiply by x */
  const act = (o, fn, x) => {
    const g = FN[fn];
    if (o === 'p') { const [a, b] = g.d1(x); return [b, -a]; }
    if (o === 'ke') { const [a, b] = g.d2(x); return [-a / 2, -b / 2]; }
    const [a, b] = g.f(x); return [x * a, x * b];
  };
  const OPS = {
    p: { sym: '\\kphat', def: '-i\\hbar\\dfrac{\\partial}{\\partial\\kx}', name: 'the momentum operator' },
    ke: { sym: '\\kKEhat', def: '-\\dfrac{\\hbar^2}{2\\km}\\dfrac{\\partial^2}{\\partial\\kx^2}', name: 'the kinetic energy operator' },
    x: { sym: '\\kxhat', def: '\\kx', name: 'the position operator' },
  };
  /* the result in the book's symbols, and the eigenvalue where there is one */
  const RES = {
    'p sin': ['-i\\hbar aA\\cos(a\\kx)', null], 'p plane': ['-Ne^{-i\\kx/\\hbar}', '-1'], 'p dec': ['ib\\hbar\\,Me^{-b\\kx}', 'ib\\hbar'],
    'ke sin': ['\\dfrac{\\hbar^2a^2}{2\\km}A\\sin(a\\kx)', '\\dfrac{\\hbar^2a^2}{2\\km}'], 'ke plane': ['\\dfrac{1}{2\\km}Ne^{-i\\kx/\\hbar}', '\\dfrac{1}{2\\km}'],
    'ke dec': ['-\\dfrac{\\hbar^2b^2}{2\\km}Me^{-b\\kx}', '-\\dfrac{\\hbar^2b^2}{2\\km}'],
    'x sin': ['\\kx A\\sin(a\\kx)', null], 'x plane': ['\\kx Ne^{-i\\kx/\\hbar}', null], 'x dec': ['\\kx Me^{-b\\kx}', null],
  };
  const ratio = (o, fn, x) => { const [a, b] = act(o, fn, x), [c, e] = FN[fn].f(x), n = c * c + e * e; return n < 1e-9 ? [NaN, NaN] : [(a * c + b * e) / n, (b * c - a * e) / n]; };
  /* a value blended from the previous choices to the current ones */
  const blend = (fun) => O.mix((o) => Fn.mix((fn) => fun(o, fn)));
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const o = O.value, fn = Fn.value, cw = C('wavefunction'), co = C('operator');
    const nonzero = (pick, part) => [0.3, 1.1, 1.9, 2.7].some((x) => Math.abs(pick(x)[part]) > 1e-9);
    const top = { l: 150, r: 1320, t: 130, b: 410 }, bot = { l: 150, r: 1320, t: 480, b: 630 };
    const ax = axes(ctx, top, [0, Math.PI], [-4, 4], { nx: 0, ny: 8, xl: '', yl: 'f and Âf', yc: cw });
    line(ctx, top.l, ax.Y(0), top.r, ax.Y(0), alpha(PAL.ink, 0.35), 2);
    const fIm = nonzero((x) => FN[fn].f(x), 1), aIm = nonzero((x) => act(o, fn, x), 1), aRe = nonzero((x) => act(o, fn, x), 0), fRe = nonzero((x) => FN[fn].f(x), 0);
    if (fIm) plot(ctx, ax, (x) => blend((oo, ff) => FN[ff].f(x)[1]), cw, { w: 3, dash: [10, 10] });
    plot(ctx, ax, (x) => blend((oo, ff) => FN[ff].f(x)[0]), cw, { w: 5 });
    if (aIm) plot(ctx, ax, (x) => blend((oo, ff) => act(oo, ff, x)[1]), co, { w: 3, dash: [10, 10] });
    if (aRe) plot(ctx, ax, (x) => blend((oo, ff) => act(oo, ff, x)[0]), co, { w: 5 });
    const ent = [];
    if (fRe) ent.push({ s: 'f, real', color: cw, w: 5 });
    if (fIm) ent.push({ s: 'f, imaginary', color: cw, w: 3, dash: [10, 10] });
    if (aRe) ent.push({ s: 'Âf, real', color: co, w: 5 });
    if (aIm) ent.push({ s: 'Âf, imaginary', color: co, w: 3, dash: [10, 10] });
    F.legend(ctx, ax, ent, { corner: 'above' });
    /* the ratio Af / f */
    const bx = axes(ctx, bot, [0, Math.PI], [-3, 3], { nx: 4, ny: 6, fx: (v) => (v === 0 ? '0' : Math.abs(v - Math.PI) < 1e-9 ? 'π' : `${(v / Math.PI).toFixed(2).replace(/\.?0+$/, '')}π`), xl: 'position x', yl: 'Âf ÷ f', xc: C('length'), yc: co });
    line(ctx, bot.l, bx.Y(0), bot.r, bx.Y(0), alpha(PAL.ink, 0.35), 2);
    const rRe = nonzero((x) => ratio(o, fn, x), 0), rIm = nonzero((x) => ratio(o, fn, x), 1);
    if (rIm) plot(ctx, bx, (x) => blend((oo, ff) => ratio(oo, ff, x)[1]), co, { w: 3, dash: [10, 10] });
    if (rRe) plot(ctx, bx, (x) => blend((oo, ff) => ratio(oo, ff, x)[0]), co, { w: 5 });
    const [res, k] = RES[`${o} ${fn}`], op = OPS[o], g = FN[fn];
    hits.push({ x: ax.X(0.5), y: ax.Y(FN[fn].f(0.5)[0]), r: 16, name: `the function ${g.name}` });
    hits.push({ x: ax.X(2.2), y: ax.Y(act(o, fn, 2.2)[aRe ? 0 : 1]), r: 16, name: `${op.name} acting on ${g.name}` });
    hits.push({ x: bx.X(1.5), y: bx.Y(Math.max(-3, Math.min(3, ratio(o, fn, 1.5)[rRe ? 0 : 1]))), r: 16, name: k ? 'Âf ÷ f is the same number at every x: the eigenvalue' : 'Âf ÷ f changes with x: no single eigenvalue' });
    topline(ctx, k
      ? `$${op.sym}$ turns $${g.tex}$ into $${k}$ times itself: an eigenfunction with eigenvalue $${k}$.`
      : `$${op.sym}$ turns $${g.tex}$ into $${res}$, which is not a constant times $${g.tex}$.`);
    readout(d.readout,
      `${op.sym}\\,${g.tex} = ${op.def}\\,${g.tex} = ${res} \\\\ ` + (k ? `${op.sym}\\,${g.tex} = k\\,${g.tex} \\\\ k = ${k}` : `${res} \\neq k\\,${g.tex}`),
      'Drawn with $\\hbar = \\km = 1$, $A = N = M = 1$, $a = 2$ and $b = 0.5$.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
