/* Figures for section 15.5 What is Inside a Laser? Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['15.5'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, topline, axes, plot, fmt } = F;
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
const frac = (x) => x - Math.floor(x);

/* ---------- Figure 15.5.4: light building up between the mirrors ----------
   Model, one number per round trip: the light in the cavity I (in units of the saturation level I_s, where the
   gain has fallen to half its unsaturated value) grows by R G per round trip, where the gain medium's gain per
   round trip G = G0/(1 + I) falls as the light uses up the inversion and the output coupler keeps R of it:
   I(k+1) = R G0 I(k)/(1 + I(k)), from one spontaneous photon's worth, I(0) = 1e-4. It levels at I = R G0 - 1,
   where R G = 1, the gain per pass paying for what the coupler lets out; below R G0 = 1 it dies away.
   The beam out is (1 - R) I. Sliders: R 90 to 99.9 %, the pump's gain G0 1.00 to 1.50 (special: G0 = 1/R,
   threshold). Scene: the book's cavity in its perspective, locked (rule 28.2). Graph: I against round trips,
   0 to 150, y 0 to 0.5 (R G0 - 1 at most 0.4985). Beam red, as the book draws it. */
(function () {
  const d = sim('sim-cavity', 640);
  const K = 150;
  const cy = F.cycle(() => K, 1.2);
  const R = ctl(d.controls, { label: 'R', cls: '', key: 'R', min: 90, max: 99.9, step: 0.1, value: 95, unit: '%', dec: 1, onInput: () => { G0.mark(sp()); run(); cy.reset(); } });
  const sp = () => [{ at: () => Math.min(1.5, 100 / R.v), label: 'threshold, R G₀ = 1' }];
  const G0 = ctl(d.controls, { label: 'G_0', cls: '', key: 'G0', min: 1, max: 1.5, step: 0.005, value: 1.25, unit: '', dec: 3, specials: sp(), onInput: () => { run(); cy.reset(); } });
  const hits = [];
  F.hover(d.stage, () => hits);
  let I = [];
  function run() { const r = R.v / 100, g = G0.v; I = [1e-4]; for (let k = 0; k < K; k++) { const x = I[k]; I.push(r * g * x / (1 + x)); } }
  run();
  const BEAM = '#e8302a';
  /* the book's viewpoint: the axis running from upper left to lower right, seen a little from above */
  const S = 100, V = F.view({ yaw: -0.42, pitch: 0.3, dist: 2400, cx: 600, cy: 215 });
  function draw() {
    const { ctx, W } = begin(d.c);
    const tau = Math.min(cy.now(), K), k = Math.floor(tau), r = R.v / 100, g = G0.v;
    const Ik = I[k], G = g / (1 + Ik), RG = r * G, beam = F.fact(BEAM);
    const below = r * g < 1;
    topline(ctx, below ? `With $R\\,G_0 = ${fmt(r * g, 3)} < 1$ each round trip loses light, and no beam builds up.`
      : `Round trip ${k}: the light grows ${fmt(RG, 3)}-fold per round trip${Math.abs(RG - 1) < 0.002 ? ', so it holds steady' : ''}.`);
    /* the cavity in the book's perspective: x along the axis, y up, z toward the reader, 100 px a unit at the centre */
    const u = (x, y, z) => V.P([x * S, y * S, z * S]);
    const ctr = (x) => u(x, 0, 0);
    const box = (x0, x1, h, w) => [[x0, -h, -w], [x1, -h, -w], [x1, h, -w], [x0, h, -w], [x0, -h, w], [x1, -h, w], [x1, h, w], [x0, h, w]];
    const disc = (x, rad, n = 40) => Array.from({ length: n }, (_, i) => { const a = 2 * Math.PI * i / n; return u(x, rad * Math.sin(a), rad * Math.cos(a)); });
    const fill = (pts, c, a) => { ctx.save(); ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); ctx.fillStyle = alpha(c, a); ctx.fill(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.stroke(); ctx.restore(); };
    /* the pump: arrows rising into the medium from below (symbolic) */
    for (let i = 0; i < 5; i++) { const x = -2.4 + 1.2 * i, a = u(x, -2.4, 1.2), b = u(x, -1.1, 1.2); arrow(ctx, a[0], a[1], b[0], b[1], alpha(PAL.ink, 0.6), 4); }
    /* the high reflector, behind the medium */
    fill(disc(-5, 1.25), PAL.soft, 1); fill(disc(-5.15, 1.25), PAL.muted, 0.25);
    /* the axis inside, and the light running along it */
    const A = ctr(-5), B = ctr(5);
    line(ctx, A[0], A[1], B[0], B[1], alpha(beam, 0.25 + 0.6 * Math.min(1, Ik / 0.3)), 3 + 10 * Math.min(1, Ik / 0.3));
    /* the gain medium: a block whose tint is the gain left in it */
    const bx = box(-3.2, 3.2, 0.85, 0.85);
    const Pts = bx.map((p) => u(...p));
    [[0, 1, 2, 3], [0, 3, 7, 4], [0, 1, 5, 4]].forEach((f) => fill(f.map((i) => Pts[i]), PAL.soft, 0.5));
    /* photons: as many as the light in the cavity, each running to and fro between the mirrors */
    const nph = Ik < 1e-3 ? (Ik > 1e-5 ? 1 : 0) : Math.min(46, Math.max(2, Math.round(46 * Ik / 0.4)));
    for (let j = 0; j < nph; j++) {
      const s = frac(tau + j / Math.max(1, nph) * 0.999 + 0.37 * j), x = -5 + 10 * (s < 0.5 ? 2 * s : 2 - 2 * s);
      const yy = 0.32 * Math.sin(7.1 * j), zz = 0.32 * Math.cos(5.3 * j), p = u(x, yy, zz);
      dot(ctx, p[0], p[1], beam, true, 6);
    }
    [[4, 5, 6, 7], [1, 2, 6, 5], [3, 2, 6, 7]].forEach((f) => fill(f.map((i) => Pts[i]), F.cat(0), 0.08 + 0.32 * Math.max(0, Math.min(1, (G - 1) / 0.5))));
    /* the output coupler, and the beam it lets out */
    fill(disc(5, 1.25), PAL.soft, 0.75);
    const out = (1 - r) * Ik, Cc = ctr(5.2), D = ctr(7.3);
    if (out > 1e-5) line(ctx, Cc[0], Cc[1], D[0], D[1], alpha(beam, Math.min(1, 0.3 + 30 * out)), 2 + Math.min(14, 300 * out));
    /* names */
    const lab = (s, p, dy, al = 'center') => text(ctx, s, p[0], p[1] + dy, PAL.ink, { size: 20, align: al });
    lab('high reflector', u(-5, 1.25, 0), -30); lab('gain medium', u(0, 0.85, -0.85), -26); lab(`output coupler, R = ${fmt(R.v, 1)}%`, u(5, 1.25, 0), -30);
    lab('pump', u(-3.6, -2.4, 1.2), 0, 'right'); lab('beam', D, -24);
    hits.length = 0;
    hits.push({ x: ctr(0)[0], y: ctr(0)[1], r: 70, name: `gain medium: gain per round trip G = ${fmt(G, 3)}` });
    hits.push({ x: ctr(5)[0], y: ctr(5)[1], r: 50, name: `output coupler: keeps ${fmt(R.v, 1)}% of the light, lets ${fmt(100 - R.v, 1)}% out` });
    hits.push({ x: ctr(-5)[0], y: ctr(-5)[1], r: 50, name: 'high reflector: keeps all of the light' });
    /* the light in the cavity against round trips */
    const gb = { l: 150, r: W - 70, t: 400, b: 580 };
    const ax = axes(ctx, gb, [0, K], [0, 0.5], { nx: 6, ny: 2, xl: 'round trips', yl: 'light inside (Iₛ)' });
    const f = (x) => { const i = Math.floor(x), q = x - i; return i >= K ? I[K] : I[i] * (1 - q) + I[i + 1] * q; };
    if (!below) line(ctx, gb.l, ax.Y(r * g - 1), gb.r, ax.Y(r * g - 1), alpha(PAL.ink, 0.4), 2, [10, 10]);
    plot(ctx, ax, f, beam, { w: 5, x: [0, Math.max(1e-6, tau)] });
    dot(ctx, ax.X(tau), ax.Y(f(tau)), beam, true, 9);
    hits.push({ x: ax.X(tau), y: ax.Y(f(tau)), r: 14, name: `light inside: ${fmt(f(tau), 3)} Iₛ` });
    tex(d.readout, `G = \\dfrac{G_0}{1 + I/I_s} = \\dfrac{${fmt(g, 3)}}{1 + ${fmt(Ik, 3)}} = ${fmt(G, 3)} \\\\ R\\,G = ${fmt(r, 3)} \\times ${fmt(G, 3)} = ${fmt(RG, 3)} \\\\ \\text{beam out} = (1 - R)\\,I = ${fmt(1 - r, 3)} \\times ${fmt(Ik, 3)}\\,I_s = ${fmt(out, 4)}\\,I_s`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 25), draw });
})();

/* ---------- Figure 15.5.5: tuning a dye laser ----------
   Still: the colour is a setting, not a time. The book's layout drawn flat: an argon-ion pump (514.5 nm, the
   Ar+ line of Table 15.5.2) focused on the dye jet; the cavity runs from the rear mirror through the jet to the
   tuning element (a grating turned to send one wavelength back) and the output coupler. Inset: rhodamine 6G's
   gain band over the book's 560 to 635 nm, drawn as a smooth bump in its own colours (its shape is schematic;
   the book gives only the range), the chosen wavelength marked. The grating's angle is Littrow's for 1800
   lines/mm, sin theta = lambda/(2d), an illustrative grating. */
(function () {
  const d = sim('sim-dye', 560);
  const L = ctl(d.controls, { label: '\\klambda', cls: 'wavelength', key: 'lambda', min: 560, max: 635, step: 0.5, value: 590, unit: 'nm', dec: 1 });
  const hits = [];
  F.hover(d.stage, () => hits);
  const h = 6.626e-34, c = 2.998e8, eV = 1.602e-19, PUMP = 514.5;
  /* the colour of a rhodamine 6G solution (a fact) */
  const DYE = '#f0641e';
  const band = (nm) => (nm < 545 || nm > 650 ? 0 : Math.pow(Math.cos(Math.PI * (nm - 597.5) / 105), 2));
  function draw() {
    const { ctx, W } = begin(d.c);
    const lam = L.v, col = F.fact(spectral(lam)), pc = F.fact(spectral(PUMP));
    const E = h * c / (lam * 1e-9), th = Math.asin(lam * 1800e-6 / 2);
    topline(ctx, `The grating sends only $\\klambda = ${fmt(lam, 1)}$ nm back through the dye, so the beam comes out in that colour.`);
    /* the cavity axis */
    const y = 250, xRear = 110, xJet = 330, xG = 640, xOC = 820, xEnd = 960;
    line(ctx, xRear, y, xG, y, col, 6);
    line(ctx, xOC, y, xEnd, y, col, 8);
    line(ctx, xG, y, xOC, y, col, 6);
    /* the rear mirror and the output coupler */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2;
    ctx.fillRect(xRear - 18, y - 60, 18, 120); ctx.strokeRect(xRear - 18, y - 60, 18, 120);
    ctx.globalAlpha = 0.75; ctx.fillRect(xOC, y - 55, 14, 110); ctx.globalAlpha = 1; ctx.strokeRect(xOC, y - 55, 14, 110); ctx.restore();
    /* the dye jet: a sheet of dye crossing the axis */
    ctx.save(); ctx.fillStyle = alpha(F.fact(DYE), 0.6); ctx.beginPath(); ctx.moveTo(xJet - 10, y - 90); ctx.lineTo(xJet + 10, y - 90); ctx.lineTo(xJet + 16, y + 90); ctx.lineTo(xJet - 16, y + 90); ctx.closePath(); ctx.fill(); ctx.restore();
    /* the pump: the argon laser's beam focused onto the jet from below */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.fillRect(60, 440, 150, 60); ctx.strokeRect(60, 440, 150, 60); ctx.restore();
    line(ctx, 210, 470, 470, 470, pc, 5); line(ctx, 470, 470, xJet + 4, y + 6, pc, 5);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.translate(478, 474); ctx.rotate(-0.6); ctx.fillRect(-8, -40, 16, 80); ctx.strokeRect(-8, -40, 16, 80); ctx.restore();
    /* the tuning element: a grating turned to the wavelength it sends back */
    ctx.save(); ctx.translate(xG, y); ctx.rotate(th - 0.55); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.fillRect(-8, -62, 16, 124); ctx.strokeRect(-8, -62, 16, 124);
    for (let i = -56; i <= 56; i += 8) line(ctx, -8, i, -14, i + 4, PAL.ink, 1.5);
    ctx.restore();
    const lab = (s, x, yy, al = 'center') => text(ctx, s, x, yy, PAL.ink, { size: 20, align: al });
    lab('rear mirror', xRear - 8, y - 84); lab('dye jet', xJet, y - 112); lab('tuning element', xG, y - 96); lab('output coupler', xOC + 8, y + 84);
    lab('argon-ion pump', 135, 520); lab(`${fmt(th * 180 / Math.PI, 1)}°`, xG + 44, y + 70, 'left');
    text(ctx, `${fmt(lam, 1)} nm`, xEnd, y - 26, col, { size: 22, weight: 600, align: 'right' });
    text(ctx, '514.5 nm', 340, 492, pc, { size: 20, weight: 600 });
    /* the dye's gain band, with the chosen wavelength on it */
    const ib = { l: 1010, r: W - 40, t: 120, b: 400 };
    const ax = axes(ctx, ib, [540, 660], [0, 1.1], { nx: 4, ny: 0, xl: 'wavelength λ (nm)', yl: 'gain of rhodamine 6G', xc: C('wavelength') });
    for (let nm = 545; nm < 650; nm += 1) { const x0 = ax.X(nm), x1 = ax.X(nm + 1), yy = ax.Y(band(nm + 0.5)); ctx.save(); ctx.fillStyle = F.fact(spectral(nm + 0.5)); ctx.globalAlpha = 0.85; ctx.fillRect(x0, yy, x1 - x0 + 0.5, ib.b - yy); ctx.restore(); }
    plot(ctx, ax, band, PAL.ink, { w: 3, x: [545, 650] });
    line(ctx, ax.X(lam), ib.b, ax.X(lam), ax.Y(band(lam)) - 16, PAL.ink, 3);
    dot(ctx, ax.X(lam), ax.Y(band(lam)), col, true, 10);
    hits.length = 0;
    hits.push({ x: xJet, y, r: 30, name: 'the dye jet, the gain medium' }, { x: xG, y, r: 40, name: `the grating, turned ${fmt(th * 180 / Math.PI, 1)}°` },
      { x: ax.X(lam), y: ax.Y(band(lam)), r: 16, name: `the lasing wavelength, ${fmt(lam, 1)} nm` });
    tex(d.readout, `\\kE = \\dfrac{hc}{\\klambda} = \\dfrac{(6.626\\times10^{-34}\\ \\text{J·s})(2.998\\times10^{8}\\ \\text{m/s})}{${fmt(lam, 1)}\\times10^{-9}\\ \\text{m}} = ${fmt(E * 1e19, 3)}\\times10^{-19}\\ \\text{J} = ${fmt(E / eV, 3)}\\ \\text{eV}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
