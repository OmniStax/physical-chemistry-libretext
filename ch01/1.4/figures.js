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
   One lamp, one cloud, one slit, one prism and one screen. The spectrum choice puts the lamp alone,
   the lamp behind a cool cloud, or the hot cloud alone in the beam; the gas choice changes the atoms.
   The screen's colours are laid out below as a strip on a wavelength axis, 350 to 750 nm (ticks every
   50 nm). Hydrogen's lines are Ångström's four (Figure 1.4.4), sodium's the D lines of Table 1.4.1,
   mercury's its five strong visible lines. */
(function () {
  const d = sim('sim-spectra', 640);
  const GASES = {
    hydrogen: { lines: [656.3, 486.1, 434.0, 410.2], glow: 656.3 },
    sodium: { lines: [589.0, 589.6], glow: 589.3 },
    mercury: { lines: [404.7, 435.8, 546.1, 577.0, 579.1], glow: 435.8 },
  };
  const M = F.choice(d.controls, { label: '\\text{spectrum}', key: 'spectrum', aria: 'kind of spectrum',
    options: [{ value: 'continuous', label: 'continuous' }, { value: 'absorption', label: 'absorption' }, { value: 'emission', label: 'emission' }], value: 'absorption' });
  const G = F.choice(d.controls, { label: '\\text{gas}', key: 'gas', aria: 'gas in the cloud',
    options: Object.keys(GASES).map((g) => ({ value: g, label: g })), value: 'hydrogen' });
  const hits = [];
  F.hover(d.stage, () => hits);
  /* where a wavelength lands on the screen: violet is bent most, so it lands lowest */
  const SCR = { x: 1010, t: 90, b: 330 }, PR = { x: 700, y: 210 };
  const yOn = (nm) => SCR.t + (750 - nm) / 370 * (SCR.b - SCR.t);
  function cloud(ctx, x, y, fill) {
    ctx.save(); ctx.fillStyle = fill;
    [[0, 0, 46], [-34, 10, 30], [32, 12, 32], [-14, -26, 30], [18, -24, 28]].forEach(([dx, dy, r]) => { ctx.beginPath(); ctx.arc(x + dx, y + dy, r, 0, 2 * Math.PI); ctx.fill(); });
    ctx.restore();
  }
  function draw() {
    const { ctx, W } = begin(d.c);
    const mode = M.value, gas = GASES[G.value];
    const wC = M.a('continuous'), wA = M.a('absorption'), wE = M.a('emission'), wLamp = wC + wA, wCloud = wA + wE;
    const lines = gas.lines;
    const head = mode === 'continuous' ? 'The lamp alone: every color from red to violet reaches the screen.'
      : mode === 'absorption' ? `Cool ${G.value} in front of the lamp takes out thin dark lines at the wavelengths it absorbs.`
      : `Hot ${G.value} on its own shines only at the same wavelengths, as bright lines on a dark screen.`;
    topline(ctx, head);
    hits.length = 0;
    /* the lamp and its beam to the slit */
    ctx.save(); ctx.globalAlpha = wLamp;
    ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2;
    ctx.fillRect(70, 170, 110, 80); ctx.strokeRect(70, 170, 110, 80);
    ctx.fillStyle = alpha(PAL.muted, 0.18); ctx.fillRect(180, 196, 340, 28);
    ctx.restore();
    if (wLamp > 0.5) text(ctx, 'lamp', 125, 278, PAL.ink, { size: 22, align: 'center' });
    /* the cloud: cool and pale in front of the lamp, glowing on its own */
    if (wCloud > 0.01) {
      ctx.save(); ctx.globalAlpha = wCloud;
      if (wE > 0) { ctx.save(); ctx.globalAlpha = wCloud * wE; ctx.fillStyle = alpha(F.fact(spectral(gas.glow)), 0.18); ctx.fillRect(330, 196, 190, 28); ctx.restore(); }
      ctx.globalAlpha = wCloud * (1 - wE); cloud(ctx, 330, 210, PAL.soft);
      ctx.globalAlpha = wCloud * wE; cloud(ctx, 330, 210, alpha(F.fact(spectral(gas.glow)), 0.6));
      ctx.restore();
      hits.push({ x: 330, y: 210, r: 60, name: `${wE > 0.5 ? 'hot' : 'cool'} ${G.value} gas` });
      if (wCloud > 0.5) text(ctx, `${wE > 0.5 ? 'hot' : 'cool'} ${G.value}`, 330, 296, PAL.ink, { size: 22, align: 'center' });
    }
    /* the slit */
    ctx.save(); ctx.fillStyle = PAL.ink;
    ctx.fillRect(512, 140, 16, 62); ctx.fillRect(512, 218, 16, 62); ctx.restore();
    text(ctx, 'slit', 520, 120, PAL.ink, { size: 22, align: 'center' });
    /* the narrow beam into the prism, and the prism */
    ctx.save(); ctx.fillStyle = alpha(PAL.muted, 0.22 * wLamp + 0.12 * wE); ctx.fillRect(528, 203, 140, 14); ctx.restore();
    ctx.save(); ctx.beginPath(); ctx.moveTo(620, 290); ctx.lineTo(780, 290); ctx.lineTo(700, 130); ctx.closePath();
    ctx.fillStyle = alpha(PAL.muted, 0.18); ctx.fill(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
    text(ctx, 'prism', 700, 322, PAL.ink, { size: 22, align: 'center' });
    /* the fan of colours from the prism to the screen: every colour from the lamp, dimmed where the cloud absorbs;
       the hot cloud's own light only at its lines */
    for (let nm = 390; nm <= 750; nm += 6) {
      ctx.save(); ctx.globalAlpha = 0.25 * wLamp; line(ctx, PR.x + 30, PR.y, SCR.x, yOn(nm), F.fact(spectral(nm)), 3); ctx.restore();
    }
    lines.forEach((nm) => { ctx.save(); ctx.globalAlpha = wE; line(ctx, PR.x + 30, PR.y, SCR.x, yOn(nm), F.fact(spectral(nm)), 3); ctx.restore(); });
    /* the screen, its spectrum running down it */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2;
    ctx.fillRect(SCR.x, SCR.t - 14, 34, SCR.b - SCR.t + 28); ctx.strokeRect(SCR.x, SCR.t - 14, 34, SCR.b - SCR.t + 28);
    ctx.fillStyle = F.fact(NO_LIGHT); ctx.fillRect(SCR.x + 6, SCR.t, 22, SCR.b - SCR.t); ctx.restore();
    for (let nm = 390; nm < 750; nm += 2) { ctx.save(); ctx.globalAlpha = wLamp; ctx.fillStyle = F.fact(spectral(nm + 1)); ctx.fillRect(SCR.x + 6, yOn(nm + 2), 22, yOn(nm) - yOn(nm + 2) + 0.5); ctx.restore(); }
    lines.forEach((nm) => {
      ctx.save(); ctx.globalAlpha = wA; ctx.fillStyle = F.fact(NO_LIGHT); ctx.fillRect(SCR.x + 6, yOn(nm) - 1.5, 22, 3); ctx.restore();
      ctx.save(); ctx.globalAlpha = wE; ctx.fillStyle = F.fact(spectral(nm)); ctx.fillRect(SCR.x + 6, yOn(nm) - 1.5, 22, 3); ctx.restore();
    });
    text(ctx, 'screen', SCR.x + 50, SCR.t + 4, PAL.ink, { size: 22 });
    line(ctx, SCR.x + 17, SCR.b + 16, SCR.x + 17, 410, alpha(PAL.ink, 0.4), 2, [4, 8]);
    /* the screen laid out on a wavelength axis */
    const box = { l: 130, r: W - 90, t: 420, b: 490 };
    const ax = axes(ctx, box, [350, 750], [0, 1], { nx: 8, ny: 0, xl: 'wavelength λ (nm)', xc: C('wavelength') });
    ctx.save(); ctx.fillStyle = F.fact(NO_LIGHT); ctx.fillRect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.restore();
    for (let nm = 380; nm < 750; nm += 2) { ctx.save(); ctx.globalAlpha = wLamp; ctx.fillStyle = F.fact(spectral(nm + 1)); ctx.fillRect(ax.X(nm), box.t, ax.X(nm + 2) - ax.X(nm) + 0.5, box.b - box.t); ctx.restore(); }
    lines.forEach((nm) => {
      const x = ax.X(nm);
      ctx.save(); ctx.globalAlpha = wA; ctx.fillStyle = F.fact(NO_LIGHT); ctx.fillRect(x - 2, box.t, 4, box.b - box.t); ctx.restore();
      ctx.save(); ctx.globalAlpha = wE; ctx.fillStyle = F.fact(spectral(nm)); ctx.fillRect(x - 2, box.t, 4, box.b - box.t); ctx.restore();
      if (mode !== 'continuous') hits.push({ x, y: (box.t + box.b) / 2, r: 10, name: `${G.value} line, ${fmt(nm, 1)} nm` });
    });
    const list = lines.map((nm) => fmt(nm, 1)).join(',\\ ');
    tex(d.readout, mode === 'continuous' ? '\\text{every } \\klambda \\text{ from 380 to 750 nm}'
      : `\\text{${mode === 'absorption' ? 'dark' : 'bright'} lines at } \\klambda = ${list}\\ \\text{nm}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- Figure 1.4.4: the Balmer series on a spectrum strip ----------
   x: wavelength 350 to 700 nm, ticks every 50 nm, so the series limit b = 364.56 nm and H-alpha both sit
   inside. The n2 slider runs 3 to 20 and lights every line up to its own, each at b n2^2/(n2^2 - 4) in its
   real colour; below 390 nm (n2 = 8 onward, "not visible" in Table 1.4.2) a line is drawn dashed in muted ink.
   Ångström's four measured wavelengths stand as hollow marks over the strip. */
(function () {
  const d = sim('sim-balmer', 440);
  const B = 364.56;
  const N = ctl(d.controls, { label: 'n_2', cls: '', min: 3, max: 20, step: 1, value: 3, unit: '', dec: 0, detents: [3, 4, 5, 6], snap: true, aria: 'upper integer n2' });
  const lam = (n) => B * n * n / (n * n - 4);
  const TABLE = { 3: [656, 'red'], 4: [486, 'teal'], 5: [434, 'blue'], 6: [410, 'indigo'], 7: [397, 'violet'], 8: [389, 'not visible'], 9: [383, 'not visible'], 10: [380, 'not visible'] };
  const GREEK = ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ'];
  const TEXG = ['\\alpha', '\\beta', '\\gamma', '\\delta', '\\epsilon', '\\zeta', '\\eta', '\\theta', '\\iota', '\\kappa', '\\lambda', '\\mu', '\\nu', '\\xi', 'o', '\\pi', '\\rho', '\\sigma'];
  const ANGSTROM = [656.21, 486.07, 434.01, 410.12];
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    const n = Math.round(N.v), l = lam(n);
    const row = TABLE[n], seen = row ? row[1] : 'not visible';
    topline(ctx, `$n_2 = ${n}$ gives the $\\text{H}_{${TEXG[n - 3]}}$ line at $\\klambda = ${fmt(l, 1)}\\ \\text{nm}$, ${seen === 'not visible' ? 'in the ultraviolet, not visible' : seen}${row ? ` (Table 1.4.2: ${row[0]} nm)` : ''}.`);
    const box = { l: 110, r: W - 90, t: 250, b: 340 };
    const ax = axes(ctx, box, [350, 700], [0, 1], { nx: 7, ny: 0, xl: 'wavelength λ (nm)', xc: C('wavelength') });
    ctx.save(); ctx.fillStyle = F.fact(NO_LIGHT); ctx.fillRect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.restore();
    hits.length = 0;
    /* the series limit, Example 1.4.1's shortest wavelength */
    const xl = ax.X(B);
    line(ctx, xl, box.t - 70, xl, box.b, alpha(PAL.ink, 0.5), 2, [10, 10]);
    text(ctx, 'series limit 364.6 nm', xl + 8, box.t - 72, PAL.muted, { size: 17 });
    /* Ångström's measurements, hollow marks over the strip */
    ANGSTROM.forEach((a) => {
      const x = ax.X(a);
      ctx.save(); ctx.beginPath(); ctx.moveTo(x, box.t - 4); ctx.lineTo(x - 8, box.t - 20); ctx.lineTo(x + 8, box.t - 20); ctx.closePath();
      ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
      hits.push({ x, y: box.t - 12, r: 12, name: `Ångström’s measurement, ${fmt(a, 2)} nm` });
    });
    /* the lines up to n2, the newest one wider */
    for (let k = 3; k <= n; k++) {
      const lk = lam(k), x = ax.X(lk), w = k === n ? 6 : 3;
      if (visible(lk)) { ctx.save(); ctx.fillStyle = F.fact(spectral(lk)); ctx.fillRect(x - w / 2, box.t, w, box.b - box.t); ctx.restore(); }
      else line(ctx, x, box.t, x, box.b, PAL.muted, w - 1, [6, 6]);
      hits.push({ x, y: (box.t + box.b) / 2, r: 8, name: `H${GREEK[k - 3]}, n₂ = ${k}, ${fmt(lk, 1)} nm` });
    }
    /* the newest line's name, on a row of its own above the strip */
    const x = ax.X(l);
    text(ctx, `H${GREEK[n - 3]}  ${fmt(l, 1)} nm`, Math.min(Math.max(x, box.l + 110), box.r - 110), box.t - 38, PAL.ink, { size: 22, weight: 600, align: 'center' });
    tex(d.readout, `\\klambda = b\\left(\\dfrac{n_2^2}{n_2^2-4}\\right) = (364.56\\ \\text{nm})\\left(\\dfrac{${n * n}}{${n * n}-4}\\right) = ${fmt(l, 1)}\\ \\text{nm}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
