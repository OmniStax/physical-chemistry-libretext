/* Figures for section 21.4 The Debye Function is Used to Calculate the Heat Capacity at Low Temperatures. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['21.4'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, legend, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- Sim: the Debye and Einstein solids at low temperature ----------
   x: log10(T/Θ) from −2 to 0.5; y: log10(C_P/3R) from −8 to 0.5, both solids with the same characteristic
   temperature Θ. The point is the gap at low T: at T = 0.05 Θ the Debye solid keeps 9.7 × 10⁻³ of 3R, on the
   T³ line, while the Einstein solid keeps 8 × 10⁻⁷. For a solid at these temperatures C_P and C_V are one. */
(function () {
  const d = sim('sim-debye-einstein', 600);
  const sci = (v) => { const e = Math.floor(Math.log10(v)); return e >= -1 ? fmt(v, e >= 0 ? 2 : 3) : `${fmt(v / 10 ** e, 1)}\\times10^{${e}}`; };
  const sciTxt = (v) => { const e = Math.floor(Math.log10(v)); const sup = (n) => String(n).replace(/-/g, '⁻').replace(/\d/g, (c) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[+c]); return e >= -1 ? fmt(v, e >= 0 ? 2 : 3) : `${fmt(v / 10 ** e, 1)} × 10${sup(e)}`; };
  const U = ctl(d.controls, { label: '\\kT/\\Theta', cls: 'temperature', min: Math.log10(0.05) - 0.7, max: Math.log10(2), step: 0.005, value: Math.log10(0.05), key: 'temperature',
    fmt: (lg) => fmt(10 ** lg, 10 ** lg < 0.1 ? 3 : 2) });
  /* the Debye heat capacity as a fraction of 3R, 3u³∫₀^{1/u} x⁴eˣ/(eˣ − 1)² dx, tabulated once on a log grid */
  const debyeAt = (u) => {
    const xd = Math.min(1 / u, 80), n = 600, h = xd / n;
    const f = (x) => x < 1e-8 ? 0 : x * x * x * x * Math.exp(-x) / Math.pow(1 - Math.exp(-x), 2);
    let s = f(0) + f(xd);
    for (let i = 1; i < n; i++) s += (i % 2 ? 4 : 2) * f(i * h);
    return 3 * u * u * u * s * h / 3;
  };
  const G0 = -2.2, G1 = 0.6, NG = 560, tab = [];
  for (let i = 0; i <= NG; i++) tab.push(debyeAt(10 ** (G0 + (G1 - G0) * i / NG)));
  const debye = (u) => { const g = (Math.log10(u) - G0) / (G1 - G0) * NG, i = Math.max(0, Math.min(NG - 1, Math.floor(g))), k = g - i; return tab[i] * Math.pow(tab[i + 1] / tab[i], k); };
  const einstein = (u) => { const x = 1 / u, e = Math.exp(-x); return x * x * e / ((1 - e) * (1 - e)); };
  const LAW = 4 * Math.pow(Math.PI, 4) / 5;
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    const lg = U.v, u = 10 ** lg, cd = debye(u), ce = einstein(u), cl = LAW * u * u * u;
    const us = fmt(u, u < 0.1 ? 3 : 2);
    topline(ctx, `At $\\kT = ${us}\\,\\Theta$ the Debye solid keeps $${sci(cd)}$ of $3R$, the Einstein solid $${sci(ce)}$.`);
    const box = { l: 190, r: W - 70, t: 120, b: 500 };
    const ax = axes(ctx, box, [-2, 0.5], [-8, 0.5], { nx: 0, ny: 0, xl: 'temperature T/Θ', yl: 'heat capacity C_P/3R', xc: C('temperature'), yc: C('heat-capacity') });
    const sup = (n) => String(n).replace(/-/g, '⁻').replace(/\d/g, (c) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[+c]);
    [-2, -1, 0].forEach((v) => { if (v > -2) line(ctx, ax.X(v), box.t, ax.X(v), box.b, PAL.rule, 1.5); text(ctx, ['0.01', '0.1', '1'][v + 2], ax.X(v), box.b + 26, PAL.muted, { size: 17, align: 'center' }); });
    [-8, -6, -4, -2, 0].forEach((v) => { if (v > -8) line(ctx, box.l, ax.Y(v), box.r, ax.Y(v), PAL.rule, 1.5); text(ctx, v === 0 ? '1' : `10${sup(v)}`, box.l - 14, ax.Y(v), PAL.muted, { size: 17, align: 'right' }); });
    /* the classical value both solids reach */
    line(ctx, box.l, ax.Y(0), box.r, ax.Y(0), alpha(PAL.ink, 0.45), 2, [4, 8]);
    text(ctx, 'Dulong–Petit, 3R', box.l + 14, ax.Y(0) - 16, alpha(PAL.ink, 0.7), { size: 17 });
    const L = (f) => (x) => { const v = f(10 ** x); return v > 0 ? Math.log10(v) : NaN; };
    plot(ctx, ax, L((uu) => LAW * uu * uu * uu), C('heat-capacity'), { w: 3, dash: [10, 10], x: [-2, Math.log10(Math.pow(1 / LAW * 3, 1 / 3))] });
    plot(ctx, ax, L(einstein), alpha(C('heat-capacity'), 0.6), { w: 4, x: [-1.4, 0.5] });
    plot(ctx, ax, L(debye), C('heat-capacity'), { w: 5, x: [-2, 0.5] });
    /* the reader's temperature */
    line(ctx, ax.X(lg), ax.Y(Math.log10(cd)), ax.X(lg), box.b, alpha(C('temperature'), 0.8), 3, [4, 8]);
    dot(ctx, ax.X(lg), ax.Y(Math.log10(cd)), C('heat-capacity'), true, 10);
    if (Math.log10(ce) > -8) dot(ctx, ax.X(lg), ax.Y(Math.log10(ce)), alpha(C('heat-capacity'), 0.6), false, 9);
    legend(ctx, ax, [{ s: 'Debye solid', color: C('heat-capacity'), w: 5 }, { s: 'Einstein solid', color: alpha(C('heat-capacity'), 0.6), w: 4 }, { s: 'T³ law', color: C('heat-capacity'), w: 3, dash: [10, 10] }], { corner: 'br' });
    hits.length = 0;
    hits.push({ x: ax.X(lg), y: ax.Y(Math.log10(cd)), r: 16, name: `Debye solid at T = ${us} Θ: ${sciTxt(cd)} of 3R` });
    if (Math.log10(ce) > -8) hits.push({ x: ax.X(lg), y: ax.Y(Math.log10(ce)), r: 16, name: `Einstein solid at T = ${us} Θ: ${sciTxt(ce)} of 3R` });
    hits.push({ x: ax.X(-1.7), y: ax.Y(Math.log10(LAW * Math.pow(10, -5.1))), r: 14, name: 'the T³ law, C_P/3R = (4π⁴/5)(T/Θ)³' });
    tex(d.readout, `\\dfrac{\\kCP}{3R} = ${sci(cd)}\\ \\text{(Debye)} \\\\ \\dfrac{\\kCP}{3R} = ${sci(ce)}\\ \\text{(Einstein)} \\\\ \\dfrac{4\\pi^4}{5}\\left(\\dfrac{\\kT}{\\Theta}\\right)^3 = 77.9\\times(${us})^3 = ${sci(cl)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
