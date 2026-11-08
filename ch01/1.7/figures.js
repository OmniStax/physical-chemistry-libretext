/* Figures for section 1.7 de Broglie Waves can be Experimentally Observed. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.7'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, cycle, line, dot, text, topline, hbracket, vbracket, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- physics, SI ---------- */
const h = 6.62607e-34;
function sciParts(x, dg) {
  let e = Math.floor(Math.log10(x)), m = x / Math.pow(10, e);
  if (+m.toFixed(dg) >= 10) { m /= 10; e += 1; }
  return [fmt(m, dg), e];
}
const sciT = (x, dg = 2) => { const [m, e] = sciParts(x, dg); return e >= 0 && e <= 3 ? fmt(x, Math.max(0, dg - e)) : `${m}\\times10^{${e}}`; };
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sciU = (x, dg = 2) => { const [m, e] = sciParts(x, dg); return e >= 0 && e <= 3 ? fmt(x, Math.max(0, dg - e)) : `${m} × 10${String(e).split('').map((c) => SUP[c]).join('')}`; };

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
   The point: hits landing on the screen pile into bright bands when the beam goes as waves
   (Figure 1.7.2c's blue curve, 1.7.3 right) and into one band behind each slit when it goes as
   classical particles (1.7.3 left). Drawn to scale in units of the slit spacing, d = 120 units
   for every beam, so the picture depends on lambda/d alone; d is the book's for each beam:
   light 2.00 um, electrons 0.150 nm (Example 1.6.1's 38.8 pm on load), neutrons 0.600 nm
   (Example 1.7.1's 181 pm on load). Barrier at x = 330, screen at x = 900 (L = 570 units), each
   slit d/4 wide. As waves: I = I1 + I2 + 2 sqrt(I1 I2) cos(2 pi (r2 - r1) / lambda), each slit with
   its single-slit envelope. As classical particles: straight paths, one Gaussian stripe behind
   each slit. Moving: the waves (or the particles) travel and the hits pile up over a 6 s loop. */
(function () {
  const d = sim('sim-double-slit', 540);
  const KIND = {
    light: { name: 'Light', dd: 2, per: 60, unitT: '\\mu\\text{m}', dT: '2.00\\ \\mu\\text{m}' },
    e: { name: 'Electrons', one: 'electron', m: 9.109383e-31, mT: '9.109\\times10^{-31}', el: 'e-', v: { min: 6.4, max: 7.4, step: 0.001, value: 7.273, unit: '', dec: 2 },
      dd: 0.15, per: 800, dT: '0.150\\ \\text{nm}' },
    n: { name: 'Neutrons', one: 'neutron', m: 1.6749273e-27, mT: '1.675\\times10^{-27}', el: 'n0', v: { min: 2.5, max: 3.5, step: 0.001, value: 3.34, unit: '', dec: 2 },
      dd: 0.6, per: 200, dT: '0.600\\ \\text{nm}' },
  };
  const K = F.select(d.controls, {
    label: '\\text{beam}', value: 'light', aria: 'light, electrons or neutrons',
    options: [{ value: 'light', label: 'light' }, { value: 'e', label: 'electrons' }, { value: 'n', label: 'neutrons' }],
    onInput: (k) => { LAM.show(k === 'light'); V.show(k !== 'light'); if (KIND[k].v) V.range(KIND[k].v); cy.reset(); },
  });
  const M = F.choice(d.controls, {
    label: '\\text{as}', value: 'wave', aria: 'whether the beam travels as waves or as classical particles',
    options: [{ value: 'wave', label: 'waves' }, { value: 'part', label: 'classical particles' }], onInput: () => cy.reset(),
  });
  const LAM = ctl(d.controls, { label: '\\klambda', cls: 'wavelength', key: 'lam', min: 380, max: 700, step: 1, value: 550, unit: 'nm', dec: 0,
    aria: 'wavelength of the light', onInput: () => cy.reset() });
  /* the speed slider runs over the power of ten; its value is shown as the speed itself */
  const V = ctl(d.controls, { label: '\\kv', cls: 'velocity', key: 'logv', min: 6.4, max: 7.4, step: 0.001, value: 7.273, unit: '', dec: 2,
    fmt: (lg) => `${sciU(Math.pow(10, lg))} m/s`, aria: 'speed of the particles in meters per second', onInput: () => cy.reset() });
  V.show(false, { ms: 0 });
  const LOOP = 6, NMAX = 1100, cy = cycle(() => LOOP, 1.2);
  const XB = 330, XS = 900, T0 = 110, B0 = 470, YC = (T0 + B0) / 2, L = XS - XB, D = 120, A = D / 4;
  const y1 = YC - D / 2, y2 = YC + D / 2;
  const HL = XS + 10, HR = XS + 200, GL = 1150, GR = 1340;
  let hits = []; F.hover(d.stage, () => hits);
  let seq = [], seqKey = '';
  /* the intensity at screen height y, as waves (both slits interfering) or as classical particles */
  function pattern(y, lw, wave) {
    if (!wave) { const s = A * 0.7, g = (c) => Math.exp(-((y - c) ** 2) / (2 * s * s)); return g(y1) + g(y2); }
    const r1 = Math.hypot(L, y - y1), r2 = Math.hypot(L, y - y2);
    const env = (r, yy) => { const b = Math.PI * A * ((y - yy) / r) / lw; return b === 0 ? 1 : Math.pow(Math.sin(b) / b, 2); };
    const I1 = env(r1, y1), I2 = env(r2, y2);
    return I1 + I2 + 2 * Math.sqrt(I1 * I2) * Math.cos(2 * Math.PI * (r2 - r1) / lw);
  }
  /* classical particles: fixed lanes and phases, so the stream looks the same each loop */
  const R0 = rng(31), lanes = Array.from({ length: 70 }, () => [R0(), R0()]);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const k = K.value, q = KIND[k], light = k === 'light', wave = M.value === 'wave';
    const v = light ? 0 : Math.pow(10, V.v), lam = light ? LAM.v * 1e-3 : h / (q.m * v) * 1e9;   /* in the spacing's unit: um for light, nm for particles */
    const lw = lam * q.per, ratio = lam / q.dd, t = cy.now();
    const wc = light ? F.fact(spectral(LAM.v)) : C('wavelength');
    const hc = light ? wc : F.el(q.el);
    const ph = ((t * 1.5) % 1) * lw;
    if (wave) {
      /* plane waves reach the barrier; circular waves leave each slit and cross */
      ctx.save(); ctx.beginPath(); ctx.rect(40, T0, XB - 40, B0 - T0); ctx.clip();
      for (let x = XB - lw + ph; x > 40; x -= lw) line(ctx, x, T0, x, B0, alpha(wc, 0.55), 3);
      ctx.restore();
      ctx.save(); ctx.beginPath(); ctx.rect(XB, T0, XS - XB, B0 - T0); ctx.clip();
      ctx.lineWidth = 2; ctx.strokeStyle = alpha(wc, 0.3);
      [y1, y2].forEach((ys) => {
        for (let r = ph; r < L * 1.5; r += lw) { if (r < 1) continue; ctx.beginPath(); ctx.arc(XB, ys, r, -Math.PI / 2, Math.PI / 2); ctx.stroke(); }
      });
      ctx.restore();
      if (lw >= 14 && lw <= 110) { const x2 = XB - lw + ph - lw * Math.ceil((XB - lw + ph - 200) / lw); hbracket(ctx, x2, x2 + lw, T0 - 14, C('wavelength'), 'λ'); }
      hits.push({ x: 180, y: YC, r: 60, name: light ? 'plane light waves' : `plane ${q.one} waves` });
    } else {
      /* classical particles fly in straight lines; only those that meet a slit get through */
      lanes.forEach(([u, p]) => {
        const y = T0 + u * (B0 - T0), x = 40 + ((p + t / 1.6) % 1) * (XS - 40);
        const open = Math.abs(y - y1) < A / 2 || Math.abs(y - y2) < A / 2;
        if (x > XB - 8 && !open) return;
        dot(ctx, x, y, hc, true, 5);
      });
      hits.push({ x: 180, y: YC, r: 60, name: light ? 'particles of light in straight lines' : `${q.one}s in straight lines` });
    }
    /* the barrier and its two slits */
    ctx.save(); ctx.fillStyle = PAL.muted;
    ctx.fillRect(XB - 8, T0, 16, y1 - A / 2 - T0); ctx.fillRect(XB - 8, y1 + A / 2, 16, y2 - y1 - A); ctx.fillRect(XB - 8, y2 + A / 2, 16, B0 - y2 - A / 2);
    ctx.restore();
    vbracket(ctx, XB - 30, y1, y2, C('length'), 'd', -1);
    hits.push({ x: XB, y: y1, r: 12, name: 'the upper slit' }, { x: XB, y: y2, r: 12, name: 'the lower slit' });
    /* the screen and the hits piling up on it */
    line(ctx, XS, T0, XS, B0, PAL.ink, 4);
    const key = `${k}|${wave}|${lw.toFixed(3)}`;
    if (key !== seqKey) {
      seqKey = key; seq = []; const R = rng(7919), top = wave ? 4 : 1.05;
      while (seq.length < NMAX) { const y = T0 + R() * (B0 - T0); if (R() * top < pattern(y, lw, wave)) seq.push([HL + R() * (HR - HL), y]); }
    }
    const n = Math.floor(NMAX * Math.min(1, t / LOOP));
    ctx.save(); ctx.fillStyle = hc;
    for (let i = 0; i < n; i++) { ctx.beginPath(); ctx.arc(seq[i][0], seq[i][1], 3.2, 0, 2 * Math.PI); ctx.fill(); }
    ctx.restore();
    text(ctx, `${n} hits`, (HL + HR) / 2, B0 + 28, PAL.muted, { size: 17, align: 'center' });
    hits.push({ x: (HL + HR) / 2, y: YC, r: 60, name: light ? 'photons absorbed at the screen, one at a time' : `${q.name.toLowerCase()} arriving at the screen, one at a time` });
    /* the intensity the hits follow */
    const top = wave ? 4 : 1.05, IX = (I) => GL + I / top * (GR - GL);
    line(ctx, GL, T0, GL, B0, alpha(PAL.ink, 0.4), 2);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath();
    for (let y = T0; y <= B0; y += 1) { const x = IX(pattern(y, lw, wave)); if (y === T0) ctx.moveTo(x, y); else ctx.lineTo(x, y); }
    ctx.stroke(); ctx.restore();
    text(ctx, 'intensity', (GL + GR) / 2, B0 + 28, PAL.muted, { size: 17, align: 'center' });
    hits.push({ x: (GL + GR) / 2, y: YC, r: 60, name: wave ? 'the intensity of the two interfering waves' : 'what classical particles give: one band behind each slit' });
    /* count the bright bands */
    let bright = 0, prev = -1, rising = false;
    for (let y = T0; y <= B0; y += 1) {
      const I = pattern(y, lw, wave) / top;
      if (prev >= 0) { if (I > prev) rising = true; else if (rising && I < prev) { if (prev > 0.04) bright++; rising = false; } }
      prev = I;
    }
    /* headline and readout */
    const who = light ? 'Light' : q.name;
    const lamT = light ? `${fmt(LAM.v, 0)}\\ \\text{nm}` : `${fmt(lam * 1e3, lam < 0.1 ? 1 : 0)}\\ \\text{pm}`;
    topline(ctx, wave
      ? `${who} of $\\klambda = ${lamT}$ through slits $d = ${q.dT}$ apart: $\\klambda/d = ${fmt(ratio, 2)}$, and the hits pile into ${bright} bright ${bright === 1 ? 'band' : 'bands'}.`
      : `${who} as classical particles: one band of hits behind each slit, and no others.`);
    if (light) tex(d.readout, `\\dfrac{\\klambda}{d} = \\dfrac{${fmt(LAM.v, 0)}\\ \\text{nm}}{2000\\ \\text{nm}} = ${fmt(ratio, 2)}`);
    else tex(d.readout, `\\klambda = \\dfrac{h}{\\km\\kv} = \\dfrac{6.626\\times10^{-34}\\ \\text{J s}}{(${q.mT}\\ \\text{kg})(${sciT(v)}\\ \\text{m/s})} = ${lamT} \\\\ \\dfrac{\\klambda}{d} = \\dfrac{${lamT}}{${q.dT}} = ${fmt(ratio, 2)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
