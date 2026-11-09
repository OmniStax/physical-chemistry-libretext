/* Figures for section 25.7 Extending Debye-Hückel Theory to Higher Concentrations. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['25.7'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- the book's numbers ----------
   Limiting law and extended equation with A = 0.5085 and B = 0.3281 (a in angstrom), the book's values for
   water at 25 C; Davies with its own 0.5 and 0.30 I. KBr at 25 C: log gamma read off Figure 25.6.2 (Petergans,
   Wikipedia), at I = 0.001, 0.002, 0.005, 0.01, 0.02, 0.05 and 0.1. */
const A = 0.5085, B = 0.3281;
const KBR = [[0.001, -0.0155], [0.002, -0.021], [0.005, -0.032], [0.01, -0.044], [0.02, -0.059], [0.05, -0.085], [0.1, -0.110]];
const lim = (s, zz) => -A * zz * s;
const ext = (s, zz, a) => -A * zz * s / (1 + B * a * s);
const dav = (s, zz) => -0.5 * zz * (s / (1 + s) - 0.30 * s * s);

/* ---------- Figure 25.7.1: three equations for the activity coefficient ----------
   Still. log gamma against sqrt(I), where the limiting law is a straight line. x fixed 0 to 0.7 (I to 0.49 mol/L,
   the book's figure runs to 0.5); y fixed -0.6 to 0 (the 1:1 curves and KBr's points sit in the top half; the
   higher charges plunge out of the frame, which is their point). The I slider moves one marker on each curve. */
(function () {
  const d = sim('sim-activity-coefficients', 600);
  const Z = F.choice(d.controls, { label: '|z_+z_-|', key: 'charges', aria: 'product of the ion charges',
    options: [{ value: '1', label: '1' }, { value: '2', label: '2' }, { value: '3', label: '3' }, { value: '4', label: '4' }], value: '1' });
  const I = ctl(d.controls, { label: '\\kIion', cls: '', key: 'ionic-strength', min: 0, max: 0.49, step: 0.001, value: 0.1, unit: 'mol/L', dec: 3,
    detents: [0.001, 0.01, 0.1], snap: true });
  const a = ctl(d.controls, { label: 'a', cls: 'length', key: 'size', min: 3, max: 9, step: 0.1, value: 3, unit: 'Å', dec: 1, detents: [3, 9], snap: true });
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    const zz = +Z.value, s = Math.sqrt(I.v), av = a.v;
    const cL = F.cat(0), cE = F.cat(1), cD = F.cat(2);
    const yl = lim(s, zz), ye = ext(s, zz, av), yd = dav(s, zz);
    const gl = Math.pow(10, yl), ge = Math.pow(10, ye), gd = Math.pow(10, yd);
    topline(ctx, `At $\\kIion = ${fmt(I.v, 3)}$ mol/L, $\\gamma_\\pm$ is ${fmt(gl, 3)} by the limiting law, ${fmt(ge, 3)} by the extended equation and ${fmt(gd, 3)} by Davies.`);
    const box = { l: 150, r: W - 60, t: 120, b: 500 };
    const ax = axes(ctx, box, [0, 0.7], [-0.6, 0], { nx: 7, ny: 6, xl: 'square root of the ionic strength √I (mol/L)^½', yl: 'log γ±' });
    plot(ctx, ax, (x) => lim(x, zz), cL, { w: 4, dash: [10, 10] });
    plot(ctx, ax, (x) => ext(x, zz, av), cE, { w: 5 });
    plot(ctx, ax, (x) => dav(x, zz), cD, { w: 5 });
    hits.length = 0;
    if (zz === 1) KBR.forEach(([ii, lg]) => {
      dot(ctx, ax.X(Math.sqrt(ii)), ax.Y(lg), PAL.ink, false, 8);
      hits.push({ x: ax.X(Math.sqrt(ii)), y: ax.Y(lg), r: 12, name: `KBr at I = ${ii} mol/L: log γ± = ${fmt(lg, 3)}` });
    });
    line(ctx, ax.X(s), box.t, ax.X(s), box.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    [[yl, cL, 'limiting law'], [ye, cE, 'extended equation'], [yd, cD, 'Davies equation']].forEach(([y, c, n]) => {
      const p = F.pinned(ctx, box, ax.X, ax.Y, s, y, c, '');
      if (!p.out) dot(ctx, p.x, p.y, c, true, 9);
      hits.push({ x: p.x, y: p.y, r: 13, name: `${n}: log γ± = ${fmt(y, 3)}, γ± = ${fmt(Math.pow(10, y), 3)}` });
    });
    const entries = [
      { s: 'limiting law', color: cL, w: 4, dash: [10, 10], f: (x) => lim(x, zz) },
      { s: 'extended equation', color: cE, w: 5, f: (x) => ext(x, zz, av) },
      { s: 'Davies equation', color: cD, w: 5, f: (x) => dav(x, zz) },
    ];
    if (zz === 1) entries.push({ s: 'KBr, measured', kind: 'dot', color: PAL.ink });
    F.legend(ctx, ax, entries, { corner: 'bl', size: 20 });
    tex(d.readout, `\\gamma_\\pm = 10^{-(${A})(${zz})\\sqrt{${fmt(I.v, 3)}}} = ${fmt(gl, 3)} \\\\ \\gamma_\\pm = 10^{-\\frac{(${A})(${zz})\\sqrt{${fmt(I.v, 3)}}}{1 + (${B})(${fmt(av, 1)})\\sqrt{${fmt(I.v, 3)}}}} = ${fmt(ge, 3)} \\\\ f_\\pm = 10^{-0.5(${zz})\\left(\\frac{\\sqrt{${fmt(I.v, 3)}}}{1+\\sqrt{${fmt(I.v, 3)}}} - 0.30(${fmt(I.v, 3)})\\right)} = ${fmt(gd, 3)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
