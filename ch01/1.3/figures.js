/* Figures for section 1.3 Photoelectric Effect Explained with Quantum Hypothesis. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.3'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, cycle, register, begin, line, dot, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- physics, the constants of Example 1.3.1 ---------- */
const h = 6.63e-34, c = 3.00e8, EV = 1.6e-19;
/* Table 1.3.1, with calcium from Example 1.3.1 first since the example is the default state */
const METALS = [
  ['Ca', 'Calcium (Ca)', 2.71], ['Li', 'Lithium (Li)', 2.93], ['Be', 'Beryllium (Be)', 4.98], ['B', 'Boron (B)', 4.45], ['C', 'Carbon (C)', 5.0],
  ['Na', 'Sodium (Na)', 2.36], ['Al', 'Aluminum (Al)', 4.20], ['Si', 'Silicon (Si)', 4.85], ['K', 'Potassium (K)', 2.3], ['Fe', 'Iron (Fe)', 4.67],
  ['Co', 'Cobalt (Co)', 4.89], ['Cu', 'Copper (Cu)', 4.7], ['Ga', 'Gallium (Ga)', 4.32], ['Ge', 'Germanium (Ge)', 5.0], ['As', 'Arsenic (As)', 3.75],
  ['Se', 'Selenium (Se)', 5.9], ['Ag', 'Silver (Ag)', 4.72], ['Sn', 'Tin (Sn)', 4.42], ['Cs', 'Cesium (Cs)', 1.95], ['Au', 'Gold (Au)', 5.17],
  ['Hg', 'Mercury (Hg), liquid', 4.47], ['Bi', 'Bismuth (Bi)', 4.34],
];
const PHI = Object.fromEntries(METALS.map(([s, , p]) => [s, p]));
const NAME = Object.fromEntries(METALS.map(([s, n]) => [s, n.replace(/ \(.*$/, '').toLowerCase()]));

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
/* light outside the eye's range has no colour of its own and is drawn muted */
const lightColour = (nm) => (nm >= 380 && nm <= 780 ? F.fact(spectral(nm)) : PAL.muted);

/* ---------- Figure 1.3.1 + 1.3.2 + 1.3.3 + 1.3.4: the photoelectric bench ----------
   Scene (left): a lamp over the tube lights the cathode's face; photons fly in at a rate set by the intensity
   (0.4 per second per percent, 40/s at full); each one with h nu > Phi ejects one electron with KE = u (h nu - Phi),
   u uniform on (0.02, 1], since an electron from deeper in the metal loses some energy on the way out. An
   electron crosses the gap at a canvas speed k sqrt(KE / eV), k = 420 px/s, and the retarding voltage V
   decelerates it uniformly, a = k^2 V / (2 D) over the gap D, so it just reaches the collector when KE = eV;
   the slower ones turn back. Each electron trails a streak 0.15 s of its motion long, so speed reads at a glance.
   Graph (right): the greatest KE against nu, 0 to 15 x 10^14 Hz by 0 to 5 eV (Cs at 15 x 10^14 Hz gives 4.27 eV),
   with the visible band in its real colours along the frequency axis. */
(function () {
  const d = sim('sim-photoelectric', 640);
  const metal = F.select(d.controls, { label: '\\text{cathode}', options: METALS.map(([s, n]) => ({ value: s, label: n })), value: 'Ca', aria: 'the element the cathode is made of' });
  const kemax = () => h * NU.v * 1e14 / EV - PHI[metal.value];
  const NU = ctl(d.controls, { label: '\\knu', cls: 'frequency', min: 3, max: 15, step: 0.001, value: 7.143, unit: '× 10¹⁴ Hz', dec: 2,
    specials: [{ at: () => PHI[metal.value] * EV / h / 1e14, label: 'threshold frequency' }] });
  const I = ctl(d.controls, { label: '\\text{intensity}', cls: '', min: 0, max: 100, step: 1, value: 50, unit: '%', dec: 0 });
  const V = ctl(d.controls, { label: 'V', cls: 'potential', min: 0, max: 5, step: 0.01, value: 0, unit: 'V', dec: 2,
    specials: [{ at: () => { const k = kemax(); return k > 0 ? k : null; }, label: 'stopping voltage' }] });
  const hits = [];
  F.hover(d.stage, () => hits);

  /* the bench, in canvas units */
  const CX = 150, AX = 770, TOP = 236, BOT = 506, GAP = AX - CX, K = 420, LAMP = { x: 470, y: 160 };
  const photons = [], electrons = [];
  let due = 0;
  function step(dt) {
    const nm = c / (NU.v * 1e14) * 1e9;
    due += dt * 0.4 * I.v;
    while (due >= 1) {
      due -= 1;
      const ty = TOP + 14 + Math.random() * (BOT - TOP - 28);
      photons.push({ t: 0, x0: LAMP.x, y0: LAMP.y + 20, x1: CX + 12, y1: ty, nm });
    }
    for (let i = photons.length - 1; i >= 0; i--) {
      const p = photons[i], L = Math.hypot(p.x1 - p.x0, p.y1 - p.y0);
      p.t += dt * 700 / L;
      if (p.t >= 1) {
        photons.splice(i, 1);
        const ke = h * c / (p.nm * 1e-9) / EV - PHI[metal.value];
        if (ke > 0) electrons.push({ x: 0, y: p.y1, u: K * Math.sqrt(ke * (0.02 + 0.98 * Math.random())) });
      }
    }
    const a = K * K * V.v / (2 * GAP);
    for (let i = electrons.length - 1; i >= 0; i--) {
      const e = electrons[i];
      e.u -= a * dt; e.x += e.u * dt;
      if (e.x >= GAP - 26 || e.x < 0) electrons.splice(i, 1);
    }
  }
  const wavelet = (ctx, x, y, ang, col) => {
    ctx.save(); ctx.translate(x, y); ctx.rotate(ang); ctx.strokeStyle = col; ctx.lineWidth = 3; ctx.beginPath();
    for (let s = -18; s <= 18; s += 2) { const yy = 6 * Math.sin(s / 3) * Math.cos(s / 24 * Math.PI / 1.5); if (s === -18) ctx.moveTo(s, yy); else ctx.lineTo(s, yy); }
    ctx.stroke(); ctx.restore();
  };
  const cy = cycle(() => Infinity, 0);
  function draw() {
    const { ctx } = begin(d.c);
    const nu = NU.v, nm = c / (nu * 1e14) * 1e9, hv = h * nu * 1e14 / EV, phi = PHI[metal.value], ke = hv - phi, sym = metal.value;
    const nu0 = phi * EV / h / 1e14, rate = ke > 0 ? 0.4 * I.v : 0, got = ke > 0 ? rate * Math.max(0, 1 - V.v / ke) : 0;
    const light = lightColour(nm), eC = F.el('e-');
    hits.length = 0;
    topline(ctx, ke > 0
      ? `Light of $\\klambda = ${fmt(nm, 0)}$ nm on ${NAME[sym]}: each photon brings $h\\knu = ${fmt(hv, 2)}$ eV, and electrons leave with up to $\\kKE = ${fmt(ke, 2)}$ eV.`
      : `Light of $\\klambda = ${fmt(nm, 0)}$ nm on ${NAME[sym]}: each photon brings $h\\knu = ${fmt(hv, 2)}$ eV, less than $\\kPhi = ${fmt(phi, 2)}$ eV, so no electron leaves.`);
    /* the tube */
    ctx.save(); ctx.lineWidth = 2; ctx.strokeStyle = PAL.rule; ctx.beginPath(); ctx.roundRect(CX - 60, TOP - 30, GAP + 120, BOT - TOP + 60, 36); ctx.stroke(); ctx.restore();
    /* the beam, its strength the intensity */
    ctx.save(); ctx.globalAlpha = 0.05 + 0.2 * I.v / 100; ctx.fillStyle = light; ctx.beginPath();
    ctx.moveTo(LAMP.x - 20, LAMP.y + 16); ctx.lineTo(CX + 12, TOP); ctx.lineTo(CX + 12, BOT); ctx.lineTo(LAMP.x + 20, LAMP.y + 16); ctx.closePath(); ctx.fill(); ctx.restore();
    /* the plates */
    ctx.save(); ctx.fillStyle = PAL.muted; ctx.fillRect(CX - 12, TOP, 24, BOT - TOP); ctx.fillRect(AX - 12, TOP, 24, BOT - TOP); ctx.restore();
    text(ctx, `${sym} cathode`, CX, BOT + 54, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'collector', AX, BOT + 54, PAL.ink, { size: 20, align: 'center' });
    text(ctx, `${fmt(got, 0)} electrons/s arrive`, AX, BOT + 80, PAL.muted, { size: 17, align: 'center' });
    hits.push({ x: CX, y: (TOP + BOT) / 2, r: 24, name: `${NAME[sym]} cathode, Φ = ${fmt(phi, 2)} eV` });
    hits.push({ x: AX, y: (TOP + BOT) / 2, r: 24, name: `collector, ${fmt(V.v, 2)} V below the cathode` });
    /* the lamp */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.roundRect(LAMP.x - 40, LAMP.y - 24, 80, 40, 8); ctx.fill(); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.fillStyle = light; ctx.globalAlpha = 0.3 + 0.7 * I.v / 100; ctx.fillRect(LAMP.x - 30, LAMP.y + 2, 60, 9); ctx.restore();
    text(ctx, 'lamp', LAMP.x + 56, LAMP.y - 4, PAL.ink, { size: 20 });
    /* photons, then electrons with a streak as long as their speed */
    photons.forEach((p) => { const x = p.x0 + (p.x1 - p.x0) * p.t, y = p.y0 + (p.y1 - p.y0) * p.t; wavelet(ctx, x, y, Math.atan2(p.y1 - p.y0, p.x1 - p.x0), lightColour(p.nm)); });
    electrons.forEach((e) => {
      const x = CX + 14 + e.x, len = Math.min(110, Math.abs(e.u) * 0.15), tail = e.u > 0 ? Math.min(len, e.x) : -len;
      line(ctx, x - tail, e.y, x, e.y, alpha(eC, 0.35), 8);
      dot(ctx, x, e.y, eC, true, 8);
    });
    /* the two kinds, named once */
    wavelet(ctx, 60, 610, 0, light); text(ctx, 'photon', 88, 610, PAL.ink, { size: 20 });
    dot(ctx, 220, 610, eC, true, 8); text(ctx, 'electron', 240, 610, PAL.ink, { size: 20 });

    /* the greatest kinetic energy against frequency */
    const ba = { l: 920, r: 1330, t: 236, b: 506 };
    const ga = axes(ctx, ba, [0, 15], [0, 5], { nx: 5, ny: 5, xl: 'frequency ν (10¹⁴ Hz)', yl: 'greatest KE (eV)', xc: C('frequency'), yc: C('energy') });
    /* visible light along the frequency axis, in its own colours */
    for (let f = c / 780e-9 / 1e14; f < c / 380e-9 / 1e14; f += 0.05) {
      ctx.save(); ctx.fillStyle = F.fact(spectral(c / (f * 1e14) * 1e9)); ctx.fillRect(ga.X(f), ba.b - 10, ga.X(f + 0.05) - ga.X(f) + 0.5, 10); ctx.restore();
    }
    hits.push({ x: ga.X(5.8), y: ba.b - 5, r: 14, name: 'visible light, 380 to 780 nm' });
    plot(ctx, ga, [{ f: () => 0, x: [0, Math.min(nu0, 15)], ends: '--' }, { f: (x) => h * x * 1e14 / EV - phi, x: [Math.min(nu0, 15), 15], ends: '--' }], C('energy'), { w: 5 });
    if (nu0 <= 15) {
      line(ctx, ga.X(nu0), ba.b - 10, ga.X(nu0), ba.b - 50, alpha(C('frequency'), 0.8), 3, [4, 8]);
      text(ctx, 'ν₀', ga.X(nu0), ba.b - 66, C('frequency'), { size: 22, weight: 600, align: 'center' });
    }
    if (V.v > 0) {
      const y = ga.Y(Math.min(V.v, 5));
      line(ctx, ba.l, y, ba.r, y, alpha(C('potential'), 0.8), 3, [10, 10]);
      text(ctx, 'eV', ba.r + 10, y, C('potential'), { size: 20, weight: 600 });
    }
    dot(ctx, ga.X(nu), ga.Y(Math.max(0, Math.min(ke, 5))), C('energy'), true, 10);
    tex(d.readout, ke > 0
      ? `\\kKE = h\\knu - \\kPhi = ${fmt(hv, 2)}\\ \\text{eV} - ${fmt(phi, 2)}\\ \\text{eV} = ${fmt(ke, 2)}\\ \\text{eV} \\\\ \\ke\\kVstop = \\kKE \\Rightarrow \\kVstop = ${fmt(ke, 2)}\\ \\text{V}`
      : `h\\knu = ${fmt(hv, 2)}\\ \\text{eV} < \\kPhi = ${fmt(phi, 2)}\\ \\text{eV} \\\\ \\knu < \\knuo = ${fmt(nu0, 2)}\\times10^{14}\\ \\text{Hz}`);
  }
  register(d.fig, { update: (dt) => { cy.step(dt, () => 1); step(Math.min(dt, 0.05)); }, draw });
})();
};
