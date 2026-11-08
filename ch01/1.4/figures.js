/* Figures for section 1.4 The Hydrogen Atomic Spectrum. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.4'] = function (root, F) {
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
/* the dark of a screen no light reaches, the ground an emission spectrum is seen on */
const NO_LIGHT = '#000000';
const visible = (nm) => nm >= 390 && nm <= 750;

/* ---------- Figure 1.4.1: three kinds of spectra ----------
   The book's three panels (lamp; lamp behind a cool cloud; hot cloud alone) become three spectra stacked on
   one wavelength axis, 400 to 700 nm (ticks every 50 nm), so a dark line of the absorption spectrum stands
   straight above the bright line of the emission spectrum at the same wavelength; a short guide joins them
   across the gap. The gas choice fades one gas's lines out and the next one's in. Hydrogen's lines are
   Ångström's four (Figure 1.4.4), sodium's the D lines of Table 1.4.1, mercury's its five strong visible lines. */
(function () {
  const d = sim('sim-spectra', 470);
  const GASES = {
    hydrogen: { lines: [656.3, 486.1, 434.0, 410.2], count: 'four' },
    sodium: { lines: [589.0, 589.6], count: 'two' },
    mercury: { lines: [404.7, 435.8, 546.1, 577.0, 579.1], count: 'five' },
  };
  const G = F.choice(d.controls, { label: '\\text{gas}', key: 'gas', aria: 'gas in the cloud',
    options: Object.keys(GASES).map((g) => ({ value: g, label: g })), value: 'hydrogen' });
  const hits = [];
  F.hover(d.stage, () => hits);
  const ROWS = [
    { name: 'continuous', from: 'lamp alone' },
    { name: 'absorption', from: 'lamp behind cool gas' },
    { name: 'emission', from: 'hot gas alone' },
  ];
  const RH = 72, RG = 26, T0 = 100, L = 330, R = 1340;
  function draw() {
    const { ctx } = begin(d.c);
    const gas = G.value;
    topline(ctx, `${gas[0].toUpperCase() + gas.slice(1)} absorbs and emits light at the same ${GASES[gas].count} wavelengths.`);
    hits.length = 0;
    const box = { l: L, r: R, t: T0, b: T0 + 3 * RH + 2 * RG };
    const ax = axes(ctx, box, [400, 700], [0, 1], { nx: 0, ny: 0, xl: 'wavelength λ (nm)', xc: C('wavelength') });
    /* ticks by hand, so no gridline runs through the gaps between the spectra */
    for (let t = 400; t <= 700; t += 50) {
      line(ctx, ax.X(t), box.b, ax.X(t), box.b + 8, PAL.muted, 2);
      text(ctx, String(t), ax.X(t), box.b + 30, PAL.muted, { size: 17, align: 'center' });
    }
    ROWS.forEach((row, i) => {
      const t = T0 + i * (RH + RG), b = t + RH;
      text(ctx, row.name, 40, t + RH / 2 - 12, PAL.ink, { size: 22 });
      text(ctx, row.from, 40, t + RH / 2 + 16, PAL.muted, { size: 17 });
      ctx.save(); ctx.fillStyle = F.fact(NO_LIGHT); ctx.fillRect(L, t, R - L, RH); ctx.restore();
      if (i < 2) for (let nm = 400; nm < 700; nm += 1) { ctx.save(); ctx.fillStyle = F.fact(spectral(nm + 0.5)); ctx.fillRect(ax.X(nm), t, ax.X(nm + 1) - ax.X(nm) + 0.5, RH); ctx.restore(); }
    });
    const tA = T0 + RH + RG, tE = T0 + 2 * (RH + RG);
    Object.keys(GASES).forEach((g) => {
      const k = G.a(g);
      if (k <= 0.001) return;
      GASES[g].lines.forEach((nm) => {
        const x = ax.X(nm);
        ctx.save(); ctx.globalAlpha = k;
        ctx.fillStyle = F.fact(NO_LIGHT); ctx.fillRect(x - 2, tA, 4, RH);
        ctx.fillStyle = F.fact(spectral(nm)); ctx.fillRect(x - 2, tE, 4, RH);
        ctx.restore();
        line(ctx, x, tA + RH + 4, x, tE - 4, alpha(PAL.ink, 0.4 * k), 2, [4, 6]);
        if (g === gas) {
          hits.push({ x, y: tA + RH / 2, r: 10, name: `dark ${g} line, ${fmt(nm, 1)} nm` });
          hits.push({ x, y: tE + RH / 2, r: 10, name: `bright ${g} line, ${fmt(nm, 1)} nm` });
        }
      });
    });
    const list = GASES[gas].lines.map((nm) => fmt(nm, 1)).join(',\\ ');
    tex(d.readout, `\\text{dark and bright lines at } \\klambda = ${list}\\ \\text{nm}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- Figure 1.4.4: the Balmer series on a spectrum strip ----------
   x: wavelength 350 to 700 nm, ticks every 50 nm, so the series limit b = 364.56 nm and H-alpha both sit
   inside. Every line from n2 = 3 to 40 is drawn, so the crowding toward the limit is there from the start:
   the lines up to the slider's n2 are lit, in their real colour where visible and in muted ink below 390 nm
   (n2 = 8 onward, "not visible" in Table 1.4.2), the rest dim. The current line stands taller and is named. */
(function () {
  const d = sim('sim-balmer', 350);
  const B = 364.56, NMAX = 40;
  const N = ctl(d.controls, { label: 'n_2', cls: '', min: 3, max: 20, step: 1, value: 3, unit: '', dec: 0, detents: [3, 4, 5, 6], snap: true, aria: 'upper integer n2' });
  const lam = (n) => B * n * n / (n * n - 4);
  const TABLE = { 3: [656, 'red'], 4: [486, 'teal'], 5: [434, 'blue'], 6: [410, 'indigo'], 7: [397, 'violet'], 8: [389, 'not visible'], 9: [383, 'not visible'], 10: [380, 'not visible'] };
  const GREEK = ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ'];
  const TEXG = ['\\alpha', '\\beta', '\\gamma', '\\delta', '\\epsilon', '\\zeta', '\\eta', '\\theta', '\\iota', '\\kappa', '\\lambda', '\\mu', '\\nu', '\\xi', 'o', '\\pi', '\\rho', '\\sigma'];
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    const n = Math.round(N.v), l = lam(n);
    const row = TABLE[n], seen = row ? row[1] : 'not visible';
    topline(ctx, `$n_2 = ${n}$ gives the $\\text{H}_{${TEXG[n - 3]}}$ line at $\\klambda = ${fmt(l, 1)}\\ \\text{nm}$, ${seen === 'not visible' ? 'in the ultraviolet, not visible' : seen}${row ? ` (Table 1.4.2: ${row[0]} nm)` : ''}.`);
    const box = { l: 110, r: W - 90, t: 184, b: 264 };
    const ax = axes(ctx, box, [350, 700], [0, 1], { nx: 7, ny: 0, xl: 'wavelength λ (nm)', xc: C('wavelength') });
    ctx.save(); ctx.fillStyle = F.fact(NO_LIGHT); ctx.fillRect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.restore();
    hits.length = 0;
    /* the series limit, Example 1.4.1's shortest wavelength */
    const xl = ax.X(B);
    line(ctx, xl, box.t - 70, xl, box.b, alpha(PAL.ink, 0.5), 2, [10, 10]);
    text(ctx, 'series limit 364.6 nm', xl + 8, box.t - 70, PAL.muted, { size: 17 });
    /* every line, lit up to n2 */
    for (let k = NMAX; k >= 3; k--) {
      const lk = lam(k), x = ax.X(lk), on = k <= n, cur = k === n;
      ctx.save(); ctx.globalAlpha = on ? 1 : 0.3;
      ctx.fillStyle = visible(lk) ? F.fact(spectral(lk)) : PAL.muted;
      const w = cur ? 6 : visible(lk) ? 3 : 2;
      ctx.fillRect(x - w / 2, cur ? box.t - 14 : box.t, w, box.b - box.t + (cur ? 14 : 0));
      ctx.restore();
      if (k <= 20) hits.push({ x, y: (box.t + box.b) / 2, r: 6, name: `H${GREEK[k - 3]}, n₂ = ${k}, ${fmt(lk, 1)} nm` });
    }
    /* the current line's name, over the strip */
    const x = ax.X(l);
    text(ctx, `H${GREEK[n - 3]}  ${fmt(l, 1)} nm`, Math.min(Math.max(x, xl + 100), box.r - 90), box.t - 32, PAL.ink, { size: 22, weight: 600, align: 'center' });
    tex(d.readout, `\\klambda = b\\left(\\dfrac{n_2^2}{n_2^2-4}\\right) = (364.56\\ \\text{nm})\\left(\\dfrac{${n * n}}{${n * n}-4}\\right) = ${fmt(l, 1)}\\ \\text{nm}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
