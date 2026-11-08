/* Figures for section 1.7 de Broglie Waves can be Experimentally Observed. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.7'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, cycle, line, text, topline, hbracket, vbracket, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- physics, SI ---------- */
const h = 6.62607e-34;
function sciParts(x, dg) {
  let e = Math.floor(Math.log10(x)), m = x / Math.pow(10, e);
  if (+m.toFixed(dg) >= 10) { m /= 10; e += 1; }
  return [fmt(m, dg), e];
}
const sciT = (x, dg = 2) => { const [m, e] = sciParts(x, dg); return e >= 0 && e <= 3 ? fmt(x, Math.max(0, dg - e)) : `${m}\\times10^{${e}}`; };

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
/* a seeded random sequence, so the same settings land the same hits */
function rng(seed) { let s = seed >>> 0; return () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

/* ---------- Figure 1.7.1 + 1.7.2 + 1.7.3: the double slit ----------
   Drawn to scale in units of the slit spacing: the largest spacing each choice reaches is 180 units,
   and the wavelength is drawn at the same scale, so the picture depends only on lambda/d. The
   barrier stands at x = 360, the screen at x = 880 (L = 520 units), each slit a quarter of the
   spacing wide. Intensity on the screen: I = I1 + I2 + 2 sqrt(I1 I2) cos(2 pi (r2 - r1) / lambda)
   with each slit's own single-slit envelope; the dashed curve is I1 + I2. Moving: the waves travel
   and the hits, drawn from I, pile up over the 6 s loop. Defaults: light 550 nm through 2.00 um;
   electrons of Example 1.6.1 (1000 eV) through 0.15 nm; neutrons of Example 1.7.1 (0.18 nm)
   through 0.60 nm. */
(function () {
  const d = sim('sim-double-slit', 570);
  const KIND = {
    light: { name: 'Light', d: { min: 1, max: 5, step: 0.01, value: 2, unit: 'μm', dec: 2 }, per: 36, unitT: '\\mu\\text{m}' },
    e: { name: 'Electrons', one: 'electron', m: 9.109383e-31, mT: '9.109\\times10^{-31}', el: 'e-', v: { min: 6, max: 7.4, step: 0.001, value: 7.273, unit: '', dec: 2 },
      d: { min: 0.1, max: 0.6, step: 0.005, value: 0.15, unit: 'nm', dec: 3 }, per: 300, unitT: '\\text{nm}' },
    n: { name: 'Neutrons', one: 'neutron', m: 1.6749273e-27, mT: '1.675\\times10^{-27}', el: 'n0', v: { min: 2.8, max: 4, step: 0.01, value: 3.34, unit: '', dec: 2 },
      d: { min: 0.1, max: 1, step: 0.005, value: 0.6, unit: 'nm', dec: 3 }, per: 180, unitT: '\\text{nm}' },
  };
  const K = F.choice(d.controls, {
    label: '\\text{wave}', value: 'light', aria: 'light, electrons or neutrons',
    options: [{ value: 'light', label: 'light' }, { value: 'e', label: 'electrons' }, { value: 'n', label: 'neutrons' }],
    onInput: (k) => {
      const q = KIND[k];
      LAM.show(k === 'light'); V.show(k !== 'light');
      if (q.v) V.range(q.v);
      S.range(q.d); cy.reset();
    },
  });
  const LAM = ctl(d.controls, { label: '\\klambda', cls: 'wavelength', key: 'lam', min: 380, max: 700, step: 1, value: 550, unit: 'nm', dec: 0,
    aria: 'wavelength of the light', onInput: () => cy.reset() });
  const V = ctl(d.controls, { label: '\\log_{10}(\\kv/\\text{m s}^{-1})', cls: 'velocity', key: 'logv', min: 6, max: 7.4, step: 0.001, value: 7.273, unit: '', dec: 2,
    aria: 'speed of the particles, as a power of ten in meters per second', onInput: () => cy.reset() });
  const S = ctl(d.controls, { label: 'd', cls: 'length', key: 'd', min: 1, max: 5, step: 0.01, value: 2, unit: 'μm', dec: 2,
    aria: 'spacing of the two slits', onInput: () => cy.reset() });
  V.show(false, { ms: 0 });
  const LOOP = 6, NMAX = 900, cy = cycle(() => LOOP, 1.2);
  const XB = 360, XS = 880, T0 = 122, B0 = 470, YC = (T0 + B0) / 2, L = XS - XB;
  const GL = 990, GR = 1330;
  let hits = []; F.hover(d.stage, () => hits);
  let seq = [], seqKey = '';
  /* the two single-slit patterns and their sum with interference, at screen height y */
  function pattern(y, D, lw) {
    const a = D / 4, y1 = YC - D / 2, y2 = YC + D / 2;
    const r1 = Math.hypot(L, y - y1), r2 = Math.hypot(L, y - y2);
    const env = (r, yy) => { const b = Math.PI * a * ((y - yy) / r) / lw; return b === 0 ? 1 : Math.pow(Math.sin(b) / b, 2); };
    const I1 = env(r1, y1), I2 = env(r2, y2);
    return { both: I1 + I2 + 2 * Math.sqrt(I1 * I2) * Math.cos(2 * Math.PI * (r2 - r1) / lw), apart: I1 + I2 };
  }
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const k = K.value, q = KIND[k], light = k === 'light';
    const v = light ? 0 : Math.pow(10, V.v), lam = light ? LAM.v * 1e-3 : h / (q.m * v) * 1e9;   /* in the spacing's unit: um for light, nm for particles */
    const dd = S.v, D = dd * q.per, lw = lam * q.per, ratio = lam / dd, t = cy.now();
    const wc = light ? F.fact(spectral(LAM.v)) : C('wavelength');
    const hc = light ? wc : F.el(q.el);
    /* incoming plane waves, travelling right */
    const ph = ((t * 1.5) % 1) * lw;
    ctx.save(); ctx.beginPath(); ctx.rect(40, T0, XB - 40, B0 - T0); ctx.clip();
    for (let x = XB - lw + ph; x > 40; x -= lw) line(ctx, x, T0, x, B0, alpha(wc, 0.7), 3);
    ctx.restore();
    text(ctx, light ? 'plane light waves' : `plane ${q.one} waves`, 200, B0 + 26, PAL.muted, { size: 17, align: 'center' });
    if (lw >= 14) { const x2 = XB - lw + ph - lw * Math.ceil((XB - lw + ph - 220) / lw); hbracket(ctx, x2, x2 + lw, T0 - 14, C('wavelength'), 'λ'); }
    /* circular waves from each slit, crossing on the way to the screen */
    const y1 = YC - D / 2, y2 = YC + D / 2, a = D / 4;
    ctx.save(); ctx.beginPath(); ctx.rect(XB, T0, XS - XB, B0 - T0); ctx.clip();
    ctx.lineWidth = 2.5; ctx.strokeStyle = alpha(wc, 0.45);
    [y1, y2].forEach((ys) => {
      for (let r = ph; r < L * 1.5; r += lw) { if (r < 1) continue; ctx.beginPath(); ctx.arc(XB, ys, r, -Math.PI / 2, Math.PI / 2); ctx.stroke(); }
    });
    ctx.restore();
    /* the barrier and its two slits */
    ctx.save(); ctx.fillStyle = PAL.muted;
    ctx.fillRect(XB - 8, T0, 16, y1 - a / 2 - T0); ctx.fillRect(XB - 8, y1 + a / 2, 16, y2 - y1 - a); ctx.fillRect(XB - 8, y2 + a / 2, 16, B0 - y2 - a / 2);
    ctx.restore();
    vbracket(ctx, XB + 30, y1, y2, C('length'), 'd', 1);
    hits.push({ x: XB, y: y1, r: 12, name: 'the upper slit' }, { x: XB, y: y2, r: 12, name: 'the lower slit' });
    text(ctx, 'two slits', XB, B0 + 26, PAL.muted, { size: 17, align: 'center' });
    /* the screen and the hits piling up on it */
    line(ctx, XS, T0, XS, B0, PAL.ink, 4);
    text(ctx, 'screen', XS, T0 - 14, PAL.muted, { size: 17, align: 'center' });
    const key = `${k}|${lw.toFixed(3)}|${D.toFixed(3)}`;
    if (key !== seqKey) {
      seqKey = key; seq = []; const R = rng(7919);
      while (seq.length < NMAX) { const y = T0 + R() * (B0 - T0); if (R() * 4 < pattern(y, D, lw).both) seq.push([XS + 14 + R() * 52, y]); }
    }
    const n = Math.floor(NMAX * Math.min(1, t / LOOP));
    ctx.save(); ctx.fillStyle = hc;
    for (let i = 0; i < n; i++) { ctx.beginPath(); ctx.arc(seq[i][0], seq[i][1], 2.6, 0, 2 * Math.PI); ctx.fill(); }
    ctx.restore();
    text(ctx, `${n} hits`, XS + 42, B0 + 26, PAL.muted, { size: 17, align: 'center' });
    hits.push({ x: XS + 40, y: YC, r: 30, name: light ? 'photons absorbed at the screen, one at a time' : `${q.name.toLowerCase()} arriving at the screen, one at a time` });
    /* the intensity along the screen: both slits (solid), and the two single slits added (dashed) */
    const IX = (I) => GL + I / 4 * (GR - GL);
    line(ctx, GL, T0, GL, B0, PAL.ink, 2);
    let bright = 0, prev = -1, rising = false;
    const path = (f, dash, col, w) => {
      ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash); ctx.beginPath();
      for (let y = T0; y <= B0; y += 1) { const x = IX(f(y)); if (y === T0) ctx.moveTo(x, y); else ctx.lineTo(x, y); }
      ctx.stroke(); ctx.restore();
    };
    for (let y = T0; y <= B0; y += 1) {
      const I = pattern(y, D, lw).both;
      if (prev >= 0) { if (I > prev) rising = true; else if (rising && I < prev) { if (prev > 0.08) bright++; rising = false; } }
      prev = I;
    }
    path((y) => pattern(y, D, lw).apart, [10, 10], PAL.muted, 3);
    path((y) => pattern(y, D, lw).both, null, PAL.ink, 4);
    text(ctx, 'both slits', IX(4) - 4, T0 - 14, PAL.ink, { size: 18, weight: 600, align: 'right' });
    text(ctx, 'one slit at a time, added', IX(2) + 8, B0 + 26, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'intensity', (GL + GR) / 2, B0 + 58, PAL.muted, { size: 17, align: 'center' });
    hits.push({ x: IX(4), y: YC, r: 18, name: 'both slits open: the waves interfere' });
    /* headline and readout */
    const who = light ? 'Light' : q.name;
    const lamT = light ? `${fmt(LAM.v, 0)}\\ \\text{nm}` : `${fmt(lam * 1e3, lam < 0.1 ? 1 : 0)}\\ \\text{pm}`;
    const dT = `${fmt(dd, light ? 2 : 3)}\\ ${q.unitT}`;
    topline(ctx, `${who} of $\\klambda = ${lamT}$ through slits $${dT}$ apart: $\\klambda/d = ${fmt(ratio, 2)}$, and ${bright} bright ${bright === 1 ? 'band falls' : 'bands fall'} on the screen.`);
    if (light) tex(d.readout, `\\dfrac{\\klambda}{d} = \\dfrac{${fmt(LAM.v, 0)}\\ \\text{nm}}{${fmt(dd * 1000, 0)}\\ \\text{nm}} = ${fmt(ratio, 2)}`);
    else tex(d.readout, `\\klambda = \\dfrac{h}{\\km\\kv} = \\dfrac{6.626\\times10^{-34}\\ \\text{J s}}{(${q.mT}\\ \\text{kg})(${sciT(v)}\\ \\text{m/s})} = ${lamT},\\qquad \\dfrac{\\klambda}{d} = ${fmt(ratio, 2)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
