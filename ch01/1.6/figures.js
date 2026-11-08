/* Figures for section 1.6 Matter Has Wavelike Properties. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.6'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, hbracket, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- physics, SI ---------- */
const h = 6.62607e-34;
/* a positive number as mantissa and power of ten, the mantissa to dg decimals */
function sciParts(x, dg) {
  let e = Math.floor(Math.log10(x)), m = x / Math.pow(10, e);
  if (+m.toFixed(dg) >= 10) { m /= 10; e += 1; }
  return [fmt(m, dg), e];
}
const sciT = (x, dg = 2) => { const [m, e] = sciParts(x, dg); return e >= 0 && e <= 3 ? fmt(x, Math.max(0, dg - e)) : `${m}\\times10^{${e}}`; };
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sciU = (x, dg = 2) => { const [m, e] = sciParts(x, dg); return e >= 0 && e <= 3 ? fmt(x, Math.max(0, dg - e)) : `${m} × 10${String(e).split('').map((c) => SUP[c]).join('')}`; };
const sciS = (x, dg = 2) => { const [m, e] = sciParts(x, dg); return e === 0 ? m : `${m} × 10^{${String(e).replace('-', '−')}}`; };

/* ---------- Sim: the de Broglie wavelength of four bodies ----------
   The point: the matter wave drawn to scale over a row of atoms 0.1 nm apart (220 units to
   0.1 nm), so the electron's wave visibly matches the spacing and the baseball's vanishes. A
   wavelength under 8 units (about 4 pm) is too fine to draw and the band is shaded instead. Below,
   a slim ruler of lengths, logarithmic from 10^-36 m to 1 m, places the wavelength among a
   nucleus, an atom, visible light and a baseball. Defaults: the electron of Example 1.6.1
   (1000 eV, 1.88 x 10^7 m/s); the proton at the same speed (Exercise 1.6.2); the neutron at
   2.2 km/s (Example 1.7.1's 0.18 nm); the baseball at 44.7 m/s (Exercise 1.6.1). Still: no time. */
(function () {
  const d = sim('sim-de-broglie', 520);
  const BODY = {
    e: { name: 'electron', an: 'An', m: 9.109383e-31, mT: '9.109\\times10^{-31}', lo: 2, hi: 7.5, v0: 7.273 },
    p: { name: 'proton', an: 'A', m: 1.672622e-27, mT: '1.673\\times10^{-27}', lo: 2, hi: 7.5, v0: 7.273 },
    n: { name: 'neutron', an: 'A', m: 1.6749273e-27, mT: '1.675\\times10^{-27}', lo: 2, hi: 7.5, v0: 3.34 },
    b: { name: 'baseball', an: 'A', m: 0.11, mT: '0.11', lo: 0, hi: 2, v0: 1.65 },
  };
  const K = F.choice(d.controls, {
    label: '\\text{particle}', value: 'e', aria: 'which particle',
    options: [{ value: 'e', label: 'electron' }, { value: 'p', label: 'proton' }, { value: 'n', label: 'neutron' }, { value: 'b', label: 'baseball' }],
    onInput: (k) => { const b = BODY[k]; V.range({ min: b.lo, max: b.hi, step: 0.001, value: b.v0, unit: '', dec: 2 }); },
  });
  /* the slider runs over the power of ten; its value is shown as the speed itself */
  const V = ctl(d.controls, { label: '\\kv', cls: 'velocity', key: 'logv', min: 2, max: 7.5, step: 0.001, value: 7.273, unit: '', dec: 2,
    fmt: (lg) => `${sciU(Math.pow(10, lg))} m/s`, aria: 'speed of the particle in meters per second' });
  let hits = []; F.hover(d.stage, () => hits);
  const X0 = 60, X1 = 1340, Y = 210, AMP = 70, GAP = 220, U = GAP / 1e-10;   /* the wave panel: units per meter */
  const RX0 = 110, RX1 = 1290, RY = 430;                                     /* the ruler */
  const Xr = (lg) => RX0 + (lg + 36) / 36 * (RX1 - RX0);
  const pow = (e) => (e === 0 ? '1 m' : `10^{${String(e).replace('-', '−')}}`);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const b = BODY[K.value], v = Math.pow(10, V.v), lam = h / (b.m * v), cw = C('wavelength');
    /* the row of atoms */
    for (let x = X0 + 90; x < X1; x += GAP) {
      ctx.save(); ctx.beginPath(); ctx.arc(x, Y, 58, 0, 2 * Math.PI); ctx.fillStyle = alpha(PAL.ink, 0.07); ctx.fill();
      ctx.lineWidth = 2; ctx.strokeStyle = PAL.rule; ctx.stroke(); ctx.restore();
      hits.push({ x, y: Y, r: 58, name: 'an atom of a solid, 0.1 nm from its neighbors' });
    }
    hbracket(ctx, X0 + 90, X0 + 90 + GAP, Y + AMP + 30, PAL.muted, '0.1 nm', { side: 'below' });
    /* the matter wave, or a shaded band where it is too fine to draw */
    const lu = lam * U;
    if (lu >= 8) {
      ctx.save(); ctx.strokeStyle = cw; ctx.lineWidth = 5; ctx.beginPath();
      const st = Math.max(0.5, Math.min(3, lu / 24));
      for (let x = X0; x <= X1; x += st) { const y = Y - AMP * Math.sin(2 * Math.PI * (x - X0) / lu); if (x === X0) ctx.moveTo(x, y); else ctx.lineTo(x, y); }
      ctx.stroke(); ctx.restore();
      if (lu >= 40 && lu <= X1 - X0) hbracket(ctx, X0, X0 + lu, Y - AMP - 18, cw, 'λ');
    } else {
      ctx.save(); ctx.fillStyle = alpha(cw, 0.25); ctx.fillRect(X0, Y - AMP, X1 - X0, 2 * AMP); ctx.restore();
      text(ctx, `${sciS(1e-10 / lam, 1)} waves in each 0.1 nm`, (X0 + X1) / 2, Y - AMP - 22, cw, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    }
    hits.push({ x: (X0 + X1) / 2, y: Y - AMP, r: 30, name: `the ${b.name}'s matter wave, λ = ${sciS(lam)} m` });
    /* the ruler of lengths */
    line(ctx, RX0, RY, RX1, RY, alpha(PAL.ink, 0.6), 2);
    for (let lg = -36; lg <= 0; lg++) {
      const x = Xr(lg), major = lg % 6 === 0;
      line(ctx, x, RY - (major ? 7 : 4), x, RY + (major ? 7 : 4), alpha(PAL.ink, 0.6), 2);
      if (major) text(ctx, pow(lg), x, RY + 28, PAL.muted, { size: 17, align: 'center' });
    }
    [[1e-15, 'nucleus'], [1e-10, 'atom'], [5e-7, 'light'], [7.4e-2, 'baseball']].forEach(([L, name]) => {
      const x = Xr(Math.log10(L));
      line(ctx, x, RY - 26, x, RY, alpha(PAL.ink, 0.4), 2, [4, 8]);
      text(ctx, name, x, RY - 36, PAL.muted, { size: 17, align: 'center' });
      hits.push({ x, y: RY - 26, r: 16, name: `${name === 'light' ? 'visible light' : name}, about ${sciS(L, 1)} m` });
    });
    const xl = Xr(Math.log10(lam));
    dot(ctx, xl, RY, cw, true, 11);
    text(ctx, 'λ', xl, RY + 56, cw, { size: 24, weight: 600, align: 'center', bg: PAL.panel });
    hits.push({ x: xl, y: RY, r: 16, name: `the ${b.name}'s wavelength, ${sciS(lam)} m` });
    /* the headline: the wavelength against the spacing of atoms */
    const r = lam / 1e-10;
    const cmp = r < 0.01 ? `$${sciT(1 / r, 1)}$ times shorter than the gap between atoms`
      : r > 100 ? `$${sciT(r, 1)}$ times the gap between atoms`
        : `${fmt(r, r >= 10 ? 0 : 2)} times the 0.1 nm gap between atoms`;
    topline(ctx, `${b.an} ${b.name} at $\\kv = ${sciT(v)}\\ \\text{m/s}$ has $\\klambda = ${sciT(lam)}\\ \\text{m}$, ${cmp}.`);
    tex(d.readout, `\\klambda = \\dfrac{h}{\\km\\kv} = \\dfrac{6.626\\times10^{-34}\\ \\text{J s}}{(${b.mT}\\ \\text{kg})(${sciT(v)}\\ \\text{m/s})} = ${sciT(lam)}\\ \\text{m}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
