/* Figures for section 4.1 The Wavefunction Specifies the State of a System. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.1'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, shade, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* =====================================================================
   FIGURE 4.1.1: the density forgets the ripple. Still: no time in the idea.
   A choice of the book's two kinds of good wavefunction. A peak: the
   normalized Gaussian psi = (pi w^2)^(-1/4) exp(-(x - x0)^2 / 2w^2), sliders
   x0 and w. An oscillating wave: psi = N e^(ikx), N = 0.6 (it cannot be
   normalized over all space, so N is a fixed scale), slider k with detents
   at 2 and 4, the book's two periods. Top: Re psi stroked, Im psi dashed
   for the wave; below, |psi|^2 filled. Units are arbitrary; x on [-5, 5],
   psi on [-1.5, 1.5] (the narrowest peak, w = 0.3, rises to 1.37), the
   density on [0, 2] (that peak's 1.88). Opens on the book's first panel,
   a narrow peak to the left of centre.
===================================================================== */
(function () {
  const d = sim('sim-density', 660);
  const S = F.choice(d.controls, { label: '\\kpsi', options: [{ value: 'peak', label: 'peak' }, { value: 'wave', label: 'oscillating' }],
    value: 'peak', aria: 'the kind of wavefunction', onInput: () => vis() });
  const X0 = ctl(d.controls, { label: 'x_0', cls: 'length', min: -3.5, max: 3.5, step: 0.05, value: -2, unit: '', dec: 2, detents: [-2, 2], aria: 'the centre of the peak', key: 'x0' });
  const Wd = ctl(d.controls, { label: 'w', cls: 'length', min: 0.3, max: 1.5, step: 0.01, value: 0.4, unit: '', dec: 2, aria: 'the width of the peak', key: 'w' });
  const K = ctl(d.controls, { label: '\\kk', cls: 'wavenumber', min: 0.5, max: 5, step: 0.05, value: 2, unit: '', dec: 2, detents: [2, 4], snap: true, aria: 'the wavenumber' });
  const N = 0.6;
  function vis() { const p = S.value === 'peak'; X0.show(p); Wd.show(p); K.show(!p); }
  K.show(false);
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const peak = S.value === 'peak', cw = C('wavefunction'), cp = C('probability-density'), cl = C('length');
    const x0 = X0.v, w = Wd.v, k = K.v, A = Math.pow(Math.PI * w * w, -0.25);
    const re = peak ? (x) => A * Math.exp(-((x - x0) ** 2) / (2 * w * w)) : (x) => N * Math.cos(k * x);
    const im = (x) => N * Math.sin(k * x);
    const dens = peak ? (x) => re(x) ** 2 : () => N * N;
    const top = { l: 170, r: 1250, t: 120, b: 340 };
    const ax = axes(ctx, top, [-5, 5], [-2, 2], { nice: true, nx: 10, ny: 4, xl: '', yl: peak ? 'ψ' : 'Re ψ, Im ψ', yc: cw });
    line(ctx, top.l, ax.Y(0), top.r, ax.Y(0), alpha(PAL.ink, 0.3), 2);
    if (!peak) plot(ctx, ax, im, cw, { w: 3, dash: [10, 10] });
    plot(ctx, ax, re, cw, { w: 5 });
    if (!peak) F.legend(ctx, ax, [{ s: 'real part', color: cw, w: 5 }, { s: 'imaginary part', color: cw, w: 3, dash: [10, 10] }], { corner: 'above' });
    const bot = { l: 170, r: 1250, t: 420, b: 580 };
    const bx = axes(ctx, bot, [-5, 5], [0, 2], { nice: true, nx: 10, ny: 2, xl: 'position x', yl: 'P = |ψ|²', xc: cl, yc: cp });
    shade(ctx, bx, dens, 0, -5, 5, cp, { alpha: 0.35 });
    plot(ctx, bx, dens, cp, { w: 4 });
    if (peak) {
      line(ctx, bx.X(x0), bot.t, bx.X(x0), bot.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
      hits.push({ x: ax.X(x0), y: ax.Y(A), r: 18, name: `ψ, a peak at x = ${fmt(x0, 2)}` });
      hits.push({ x: bx.X(x0), y: bx.Y(Math.min(2, A * A)), r: 18, name: `|ψ|², peaked at the same place, x = ${fmt(x0, 2)}` });
      topline(ctx, `A peak of width $w = ${fmt(w, 2)}$ at $x_0 = ${fmt(x0, 2)}$ gives a density peaked at the same place.`);
      tex(d.readout, `\\kPd(\\kx) = |\\kpsi(\\kx)|^2 \\\\ \\kPd(x_0) = (${fmt(A, 2)})^2 = ${fmt(A * A, 2)}`);
    } else {
      hits.push({ x: ax.X(0), y: ax.Y(N), r: 16, name: `the real part of ψ, which repeats every 2π/k = ${fmt(2 * Math.PI / k, 2)}` });
      hits.push({ x: bx.X(2.5), y: bx.Y(N * N), r: 18, name: `|ψ|² = N² = ${fmt(N * N, 2)} at every x` });
      text(ctx, 'the same at every x', bx.X(2.5), bx.Y(N * N) - 22, cp, { size: 20, weight: 600, align: 'center' });
      topline(ctx, `At $\\kk = ${fmt(k, 2)}$ the real part repeats every $2\\pi/\\kk = ${fmt(2 * Math.PI / k, 2)}$, and $|\\kpsi|^2$ is flat.`);
      tex(d.readout, `\\kPd(\\kx) = |Ne^{i\\kk\\kx}|^2 = N^2 \\\\ \\kPd(\\kx) = (${fmt(N, 2)})^2 = ${fmt(N * N, 2)}`);
    }
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURES 4.1.2 + 4.1.3 + 4.1.4: which test a curve fails, and where.
   Still: a probe slider, no time in the idea. Five curves on x in [-3, 3],
   every bad one failing at x = 0 so the probe's detent finds it: one that
   goes to infinity (4.1.2, 0.3 e^(-x^2/3) / |x|), one that folds back on
   itself (4.1.3, the curve x(s) = s - 1.6 s e^(-s^2), y(s) = 0.9 s e^(-s^2/6),
   three values where it folds), one with a jump (4.1.4 left, 0.9 to 0.4),
   one with a corner (4.1.4 right, 1.1 e^(-1.2|x|), slopes +1.32 and -1.32),
   and an acceptable one, (1 + 0.6x) e^(-x^2/2). The probe is a vertical line;
   every value the curve takes there is a dot, and at a corner the two
   slopes are drawn. y on [-1.2, 2.2]; the infinite curve leaves the box.
   Opens on 4.1.2 with the probe at the bad place.
===================================================================== */
(function () {
  const d = sim('sim-invalid', 640);
  const S = F.select(d.controls, { label: '\\kpsi', options: [
    { value: 'inf', label: 'goes to infinity' }, { value: 'multi', label: 'folds back' }, { value: 'jump', label: 'jumps' },
    { value: 'kink', label: 'has a corner' }, { value: 'ok', label: 'acceptable' }], value: 'inf', aria: 'the curve to test' });
  const P = ctl(d.controls, { label: '\\kx', cls: 'length', min: -2.8, max: 2.8, step: 0.01, value: 0, unit: '', dec: 2, detents: [0], snap: true, aria: 'the position of the probe' });
  let hits = []; F.hover(d.stage, () => hits);
  const xs = (s) => s - 1.6 * s * Math.exp(-s * s), ys = (s) => 0.9 * s * Math.exp(-s * s / 6);
  const f = {
    inf: (x) => 0.3 * Math.exp(-x * x / 3) / Math.abs(x),
    jump: (x) => (x < 0 ? 0.9 : 0.4) * Math.exp(-x * x / 2),
    kink: (x) => 1.1 * Math.exp(-1.2 * Math.abs(x)),
    ok: (x) => (1 + 0.6 * x) * Math.exp(-x * x / 2),
  };
  /* every value the folded curve takes at x: the roots of x(s) = x, found on a fine grid in s */
  function multiAt(x) {
    const out = []; let s0 = -3.6, g0 = xs(s0) - x;
    for (let s = -3.6 + 0.002; s <= 3.6; s += 0.002) { const g = xs(s) - x; if (g0 === 0 || g0 * g < 0) out.push(ys(s - 0.001)); s0 = s; g0 = g; }
    return out;
  }
  const at0 = (x) => Math.abs(x) < 0.02;
  const yes = '\\checkmark', no = '\\times', na = '\\text{–}';
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const v = S.value, x = P.v, cw = C('wavefunction'), cl = C('length');
    const box = { l: 170, r: 1250, t: 120, b: 520 };
    const ax = axes(ctx, box, [-3, 3], [-1, 2], { nice: true, nx: 6, ny: 3, xl: 'position x', yl: 'ψ(x)', xc: cl, yc: cw });
    line(ctx, box.l, ax.Y(0), box.r, ax.Y(0), alpha(PAL.ink, 0.3), 2);
    /* the curve */
    if (v === 'multi') {
      ctx.save(); ctx.strokeStyle = cw; ctx.lineWidth = 5; ctx.lineJoin = 'round'; ctx.beginPath();
      for (let s = -3.4, i = 0; s <= 3.4; s += 0.01, i++) { const X = ax.X(xs(s)), Y = ax.Y(ys(s)); if (i) ctx.lineTo(X, Y); else ctx.moveTo(X, Y); }
      ctx.stroke(); ctx.restore();
    } else if (v === 'jump') {
      plot(ctx, ax, [{ f: f.jump, x: [-3, 0], ends: '-)' }, { f: f.jump, x: [0, 3], ends: '[-' }], cw, { w: 5 });
    } else if (v === 'inf') {
      plot(ctx, ax, f.inf, cw, { w: 5, poles: [0] });
    } else {
      plot(ctx, ax, f[v], cw, { w: 5 });
    }
    /* the probe */
    line(ctx, ax.X(x), box.t, ax.X(x), box.b, alpha(cl, 0.7), 3, [4, 8]);
    let vals = [], fin = yes, single = yes, cont = yes, der = yes, valTex;
    if (v === 'multi') {
      vals = multiAt(x);
      if (vals.length > 1) single = no;
    } else if (v === 'inf' && at0(x)) {
      fin = no; single = na; cont = na; der = na;
    } else if (v === 'jump' && at0(x)) {
      vals = [0.9, 0.4]; cont = no; der = no;
    } else {
      vals = [f[v](x)];
      if (v === 'kink' && at0(x)) der = no;
    }
    vals.forEach((y, i) => {
      const hollow = v === 'jump' && at0(x) && i === 0;
      dot(ctx, ax.X(x), ax.Y(y), cw, !hollow, 10);
      hits.push({ x: ax.X(x), y: ax.Y(y), r: 14, name: `ψ = ${fmt(y, 2)} at x = ${fmt(x, 2)}` });
    });
    if (v === 'kink' && at0(x)) {
      const s = 1.32, y = 1.1, run = 0.6;
      line(ctx, ax.X(-run), ax.Y(y - s * run), ax.X(0), ax.Y(y), PAL.ink, 3, [10, 10]);
      line(ctx, ax.X(0), ax.Y(y), ax.X(run), ax.Y(y - s * run), PAL.ink, 3, [10, 10]);
      text(ctx, 'two slopes, +1.32 and −1.32', ax.X(0.25), ax.Y(1.7), PAL.ink, { size: 20, base: 'middle' });
    }
    if (v === 'inf' && at0(x)) text(ctx, 'ψ → ∞', ax.X(0) + 16, box.t + 30, cw, { size: 22, weight: 600 });
    if (v === 'jump' && at0(x)) text(ctx, 'two values, 0.9 and 0.4', ax.X(0) + 18, ax.Y(0.65), PAL.ink, { size: 20, base: 'middle' });
    if (v === 'multi' && vals.length > 1) text(ctx, `${vals.length} values at one x`, ax.X(x) + 18, box.t + 30, PAL.ink, { size: 20 });
    hits.push({ x: ax.X(x), y: box.b - 20, r: 16, name: `the probe at x = ${fmt(x, 2)}` });
    const fails = [fin, single, cont, der].some((c) => c === no);
    topline(ctx, fails ? `At $\\kx = ${fmt(x, 2)}$ this curve breaks a rule for a wavefunction.` : `At $\\kx = ${fmt(x, 2)}$ this curve passes every test.`);
    if (v === 'inf' && at0(x)) valTex = `\\kpsi(${fmt(x, 2)}) = \\infty`;
    else if (vals.length > 1) valTex = `\\kpsi(${fmt(x, 2)}) \\in \\{${vals.map((y) => fmt(y, 2)).join(',\\ ')}\\}`;
    else valTex = `\\kpsi(${fmt(x, 2)}) = ${fmt(vals[0], 2)}`;
    tex(d.readout, `${valTex} \\\\ \\text{single-valued } ${single} \\quad \\text{continuous } ${cont} \\quad \\text{finite } ${fin} \\quad \\text{first derivative } ${der}`, false, { values: false });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
