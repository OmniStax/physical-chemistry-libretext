/* Figures for section 1.5 The Rydberg Formula and the Hydrogen Atomic Spectrum. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.5'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, text, topline, axes, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- real colours (facts) ---------- */
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
const visible = (nm) => nm >= 390 && nm <= 750;

/* ---------- Sim: the Rydberg formula, every series on one axis ----------
   x: wavelength on a logarithmic axis, 80 nm to 10 000 nm, so that the Lyman series (91 to 122 nm) and
   Pfund-alpha (7456 nm) both fit; ticks at 100, 200, 500, 1000, 2000, 5000 and 10 000 nm. The visible band,
   380 to 750 nm, is painted in its real colours over the strip. n1 picks the series; the n2 slider runs from
   n1 + 1 to n1 + 12 and lights the series' lines up to its own, visible ones in their colour and the rest
   in ink; the other four series stand faint behind. The defaults, n1 = 1 and n2 = 2, are Example 1.5.1. */
(function () {
  const d = sim('sim-rydberg', 480);
  const RH = 109737, SPAN = 12;
  const SERIES = [
    { n1: 1, name: 'Lyman', ab: 'Ly' }, { n1: 2, name: 'Balmer', ab: 'H' }, { n1: 3, name: 'Paschen', ab: 'Pa' },
    { n1: 4, name: 'Brackett', ab: 'Br' }, { n1: 5, name: 'Pfund', ab: 'Pf' },
  ];
  const GREEK = ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ'];
  const TEXG = ['\\alpha', '\\beta', '\\gamma', '\\delta', '\\epsilon', '\\zeta', '\\eta', '\\theta', '\\iota', '\\kappa', '\\lambda', '\\mu'];
  const nut = (n1, n2) => RH * (1 / (n1 * n1) - 1 / (n2 * n2));
  const lamNm = (n1, n2) => 1e7 / nut(n1, n2);
  const S1 = F.select(d.controls, { label: 'n_1', key: 'n1', aria: 'lower integer n1, the series',
    options: SERIES.map((s) => ({ value: String(s.n1), label: `${s.n1} ${s.name}` })), value: '1',
    onInput: (v) => N2.range({ min: +v + 1, max: +v + SPAN, step: 1, value: +v + 1, unit: '', dec: 0 }) });
  const N2 = ctl(d.controls, { label: 'n_2', cls: '', min: 2, max: 1 + SPAN, step: 1, value: 2, unit: '', dec: 0, aria: 'upper integer n2' });
  const hits = [];
  F.hover(d.stage, () => hits);
  const L0 = Math.log10(80), L1 = 4;
  /* a wavenumber written as the book writes it, thousands set off by a comma */
  const grouped = (x) => String(Math.round(x)).replace(/\B(?=(\d{3})+(?!\d))/g, '{,}');
  function draw() {
    const { ctx, W } = begin(d.c);
    const n1 = +S1.value, s = SERIES[n1 - 1];
    const n2 = Math.max(n1 + 1, Math.min(n1 + SPAN, Math.round(N2.v)));
    const v = nut(n1, n2), l = lamNm(n1, n2), name = `${s.ab}-${GREEK[n2 - n1 - 1]}`;
    const region = l < 380 ? 'the ultraviolet' : l > 750 ? 'the infrared' : 'the visible';
    topline(ctx, `$\\text{${s.ab}-}${TEXG[n2 - n1 - 1]}$ of the ${s.name} series ($n_1 = ${n1}$, $n_2 = ${n2}$) lies at $\\klambda = ${fmt(l, l < 1000 ? 1 : 0)}\\ \\text{nm}$, in ${region}.`);
    const box = { l: 110, r: W - 90, t: 250, b: 330 };
    const ax = axes(ctx, box, [L0, L1], [0, 1], { nx: 0, ny: 0, xl: 'wavelength λ (nm), logarithmic scale', xc: C('wavelength') });
    const X = (nm) => ax.X(Math.log10(nm));
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.fillRect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.restore();
    [100, 200, 500, 1000, 2000, 5000, 10000].forEach((t) => {
      line(ctx, X(t), box.b, X(t), box.b + 8, PAL.muted, 2);
      text(ctx, t >= 10000 ? '10 000' : String(t), X(t), box.b + 30, PAL.muted, { size: 17, align: 'center' });
    });
    /* the three regions, and the visible band in its own colours */
    for (let nm = 380; nm < 750; nm += 3) { ctx.save(); ctx.fillStyle = F.fact(spectral(nm + 1.5)); ctx.fillRect(X(nm), box.t - 22, X(nm + 3) - X(nm) + 0.5, 14); ctx.restore(); }
    text(ctx, 'ultraviolet', (box.l + X(380)) / 2, box.t - 120, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'visible', (X(380) + X(750)) / 2, box.t - 120, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'infrared', (X(750) + box.r) / 2, box.t - 120, PAL.muted, { size: 17, align: 'center' });
    [380, 750].forEach((b) => line(ctx, X(b), box.t - 132, X(b), box.t - 22, alpha(PAL.ink, 0.3), 2, [4, 8]));
    hits.length = 0;
    /* the other series, faint */
    SERIES.forEach((o) => {
      if (o.n1 === n1) return;
      for (let k = o.n1 + 1; k <= o.n1 + SPAN; k++) {
        const x = X(lamNm(o.n1, k));
        line(ctx, x, box.t + 50, x, box.b, alpha(PAL.muted, 0.45), 2);
        if (k === o.n1 + 1) hits.push({ x, y: box.t + 65, r: 8, name: `${o.ab}-α of the ${o.name} series, ${fmt(lamNm(o.n1, k), 0)} nm` });
      }
    });
    /* the series limit */
    const lim = 1e7 * n1 * n1 / RH, xl = X(lim);
    line(ctx, xl, box.t - 4, xl, box.b, alpha(PAL.ink, 0.5), 2, [10, 10]);
    line(ctx, xl, box.t - 46, xl, box.t, alpha(PAL.ink, 0.5), 2, [10, 10]);
    /* the label stands on the side away from the series' lines, unless the axis ends there */
    const left = xl - box.l > 140;
    text(ctx, `limit ${fmt(lim, lim < 1000 ? 1 : 0)} nm`, left ? xl - 6 : xl + 6, box.t - 34, PAL.muted, { size: 17, align: left ? 'right' : 'left' });
    /* the chosen series, lit up to n2 */
    for (let k = n1 + 1; k <= n2; k++) {
      const lk = lamNm(n1, k), x = X(lk), w = k === n2 ? 6 : 3;
      ctx.save(); ctx.fillStyle = visible(lk) ? F.fact(spectral(lk)) : PAL.ink; ctx.fillRect(x - w / 2, box.t, w, box.b - box.t); ctx.restore();
      hits.push({ x, y: (box.t + box.b) / 2, r: 8, name: `${s.ab}-${GREEK[k - n1 - 1]}, n₂ = ${k}, ${fmt(lk, lk < 1000 ? 1 : 0)} nm` });
    }
    const x = X(l);
    line(ctx, x, box.t - 60, x, box.t - 50, alpha(PAL.ink, 0.4), 2);
    text(ctx, `${name}  ${fmt(l, l < 1000 ? 1 : 0)} nm`, Math.min(Math.max(x, box.l + 100), box.r - 100), box.t - 72, PAL.ink, { size: 22, weight: 600, align: 'center' });
    tex(d.readout, `\\knut = \\dfrac{1}{\\klambda} = R_H\\left(\\dfrac{1}{${n1}^2}-\\dfrac{1}{${n2}^2}\\right) = ${grouped(v)}\\ \\text{cm}^{-1}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
