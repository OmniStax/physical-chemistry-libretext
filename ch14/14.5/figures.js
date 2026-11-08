/* Figures for section 14.5 Chemical Shifts Depend upon the Chemical Environment of the Nucleus. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['14.5'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, fmt } = F;
const DEG = Math.PI / 180, TAU = 2 * Math.PI;

/* =====================================================================
   SIM: Larmor precession of a standard and a shielded proton.
   Mathematical 3D (root 28.3): a magnetic moment precessing about the field
   leaves any plane, so the cone is drawn in space; z is the field B.
   Moving: the moments precess (14.7's note [2]: the Larmor frequency is the
   frequency with which a moment precesses about the field), so the figure
   runs a steady clock (no period, no scrubber).
   Model: gamma/2pi = 41.67 MHz/T, the book's own pair 100 MHz ~ 2.4 T
   (14.6). The proton's nu = (gamma/2pi)(1 - sigma)B; the standard's
   nu_0 = (gamma/2pi)(1 - sigma_0)B with sigma_0 = 30 ppm, a standard chosen
   for the drawing (the book names none here), so sigma 18 to 30 ppm puts the
   proton at delta 0 to 12 ppm. Opens on sigma = 26.04 ppm, delta = 3.96 ppm
   (H_a of 1,1,2-trichloroethane, 14.6), at 2.4 T (100 MHz).
   Drawn (rule 28.4): the standard turns 0.15 times a second per 2.4 T,
   about 6.7 x 10^8 times slower than the real precession; the proton's lead
   over it is drawn 10^5 times larger than it is, so a few ppm can be seen.
   Below the scene, a flat strip: the proton on the delta-scale (ppm, fixed)
   above its offset nu - nu_0 in hertz (0 to 9000 Hz, the 12 ppm window at
   750 MHz), both running right to left as spectra do. The ppm mark stays put
   while the hertz mark moves with B: the point of the figure.
   Orbit: free yaw, pitch within +-75 degrees of the horizontal (end on, the
   cones collapse); no spin, no zoom; flat fallback from the opening view.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-larmor');
  const S = F.space3d(d, { box: [[-2.7, 2.7], [-1.4, 1.4], [-0.3, 2.6]], h: 520, turn: -0.3, tilt: 0.3, fit: 2.5,
    pitch: [-75 * DEG, 75 * DEG], spin: 'off', zoom: false });
  const strip = F.makeCanvas(d.stage, 250);
  const cy = F.cycle(() => Infinity, 0);
  const B = ctl(d.controls, { label: '\\kB', cls: 'magnetic-field', key: 'B', min: 1.4, max: 17.6, step: 0.05, value: 2.4, unit: 'T', dec: 2,
    detents: [{ v: 2.4, label: '100 MHz' }, { v: 7.2, label: '300 MHz' }, { v: 12, label: '500 MHz' }], snap: true, aria: 'the applied magnetic field in tesla' });
  const SG = ctl(d.controls, { label: '\\sigma', cls: '', key: 'sigma', min: 18, max: 30, step: 0.01, value: 26.04, unit: 'ppm', dec: 2,
    aria: "the proton's shielding constant in parts per million" });
  const G = 41.6667, SIG0 = 30, LEAD = 1e5, BASE = 0.15;   /* MHz/T; ppm; how much larger the lead is drawn; drawn turns per second at 2.4 T */
  const TH = 38 * DEG, L = 1.55, X0 = -1.45, X1 = 1.45;    /* the cone's half-angle, the moment's drawn length, the two axes' x */
  let ph0 = 0, ph1 = 0, last = null;
  const ring = (f, n = 64) => Array.from({ length: n + 1 }, (_, i) => f(i / n));
  const cone = (x) => { const rows = []; for (let j = 0; j <= 5; j++) { const s = j / 5, r = s * L * Math.sin(TH), z = s * L * Math.cos(TH); rows.push(ring((u) => [x + r * Math.cos(TAU * u), r * Math.sin(TAU * u), z], 48)); } return rows; };
  const tip = (x, a) => [x + L * Math.sin(TH) * Math.cos(a), L * Math.sin(TH) * Math.sin(a), L * Math.cos(TH)];
  /* the model, in MHz and Hz */
  const model = () => {
    const b = B.v, s = SG.v * 1e-6, s0 = SIG0 * 1e-6;
    const nu = G * b * (1 - s), nu0 = G * b * (1 - s0);
    const dHz = (nu - nu0) * 1e6, delta = (nu - nu0) / nu0 * 1e6;
    return { b, nu, nu0, dHz, delta, bloc: b * (1 - s) };
  };
  function update(dt) {
    cy.step(dt, () => 1);
    const m = model(), f0 = BASE * m.b / 2.4, f1 = f0 * (1 + LEAD * m.delta * 1e-6);
    ph0 = (ph0 + TAU * f0 * dt) % TAU; ph1 = (ph1 + TAU * f1 * dt) % TAU;
  }
  function drawStrip(m) {
    const { ctx, W } = begin(strip);
    const l = 150, r = W - 90, yP = 70, yH = 175;
    /* both scales run right to left, as a spectrum's do */
    const XP = (v) => r - (r - l) * v / 12, XH = (v) => r - (r - l) * v / 9000;
    const cf = C('frequency');
    line(ctx, l, yP, r, yP, PAL.ink, 2);
    for (let v = 0; v <= 12; v += 2) { line(ctx, XP(v), yP, XP(v), yP + 8, PAL.ink, 2); text(ctx, String(v), XP(v), yP + 30, PAL.muted, { size: 17, align: 'center' }); }
    text(ctx, 'δ (ppm)', l - 20, yP + 6, PAL.ink, { size: 20, align: 'right' });
    line(ctx, l, yH, r, yH, cf, 2);
    for (let v = 0; v <= 9000; v += 1500) { line(ctx, XH(v), yH, XH(v), yH + 8, cf, 2); text(ctx, String(v), XH(v), yH + 30, PAL.muted, { size: 17, align: 'center' }); }
    text(ctx, 'ν − ν₀ (Hz)', l - 20, yH + 6, cf, { size: 20, align: 'right' });
    /* the 12 ppm window in hertz at this field */
    const win = 12 * m.nu0;
    ctx.save(); ctx.fillStyle = alpha(cf, 0.12); ctx.fillRect(XH(Math.min(9000, win)), yH - 26, XH(0) - XH(Math.min(9000, win)), 26); ctx.restore();
    { const xw = XH(Math.min(9000, win)), left = xw - 12 > l + 300; text(ctx, `12 ppm = ${fmt(win, 0)} Hz at ${fmt(m.nu0, 1)} MHz`, left ? xw - 12 : xw + 12, yH - 13, cf, { size: 17, align: left ? 'right' : 'left' }); }
    /* the proton on both scales, joined */
    const xp = XP(m.delta), xh = XH(Math.max(0, m.dHz));
    line(ctx, xp, yP, xh, yH, alpha(PAL.ink, 0.4), 2, [4, 8]);
    dot(ctx, xp, yP, PAL.ink, true, 10);
    dot(ctx, xh, yH, cf, true, 10);
    text(ctx, `${fmt(m.delta, 2)} ppm`, xp, yP - 22, PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, `${fmt(m.dHz, 0)} Hz`, xh, yH + 58, cf, { size: 20, weight: 600, align: 'center' });
  }
  function draw() {
    const m = model();
    const cB = C('magnetic-field'), cm = C('magnetic-moment');
    const sig = [m.b, SG.v, cB, cm, PAL.ink].join('|');
    if (sig !== last) {
      last = sig;
      S.set('field', [
        { k: 'arrow', a: [0, 0, -0.2], b: [0, 0, 2.3], color: cB, w: 5, name: `the applied field B, ${fmt(m.b, 2)} T` },
        { k: 'label', s: '$\\kB$', p: [0, 0, 2.55], color: cB },
        { k: 'line', pts: [[X0, 0, 0], [X0, 0, 2.1]], color: alpha(cB, 0.55), w: 2, name: 'the axis the standard precesses about, along B' },
        { k: 'line', pts: [[X1, 0, 0], [X1, 0, 2.1]], color: alpha(cB, 0.55), w: 2, name: "the axis the proton precesses about, along B" },
      ]);
      S.set('cones', [
        { k: 'sheet', rows: cone(X0), color: PAL.soft, alpha: 0.14, name: `the standard's cone: its moment precesses at ν₀ = ${fmt(m.nu0, 4)} MHz` },
        { k: 'sheet', rows: cone(X1), color: PAL.soft, alpha: 0.14, name: `the proton's cone: its moment precesses at ν = ${fmt(m.nu, 4)} MHz` },
        { k: 'line', pts: ring((u) => tip(X0, TAU * u)), color: alpha(PAL.ink, 0.3), w: 2 },
        { k: 'line', pts: ring((u) => tip(X1, TAU * u)), color: alpha(PAL.ink, 0.3), w: 2 },
        { k: 'label', s: 'standard', p: [X0, 0, -0.3] },
        { k: 'label', s: 'proton', p: [X1, 0, -0.3] },
      ]);
    }
    /* the two moments now, each with the arc it swept in the last moment */
    const trail = (x, a) => ring((u) => tip(x, a + 0.9 * u), 16);   /* omega = -gamma B: the moments turn clockwise seen from above */
    S.set('moments', [
      { k: 'line', pts: trail(X0, -ph0), color: alpha(cm, 0.4), w: 3 },
      { k: 'line', pts: trail(X1, -ph1), color: alpha(cm, 0.4), w: 3 },
      { k: 'arrow', a: [X0, 0, 0], b: tip(X0, -ph0), color: cm, w: 5, name: "the standard's magnetic moment" },
      { k: 'arrow', a: [X1, 0, 0], b: tip(X1, -ph1), color: cm, w: 5, name: "the proton's magnetic moment" },
      { k: 'dot', p: [X0, 0, 0], color: PAL.ink, r: 6, name: 'the standard nucleus' },
      { k: 'dot', p: [X1, 0, 0], color: PAL.ink, r: 6, name: 'the proton' },
    ]);
    S.headline(`At ${fmt(m.b, 2)} T the proton precesses ${fmt(m.dHz, 0)} Hz faster than the standard: δ = ${fmt(m.delta, 2)} ppm.`);
    drawStrip(m);
    const sl = SG.v;
    tex(d.readout, `\\kBloc = (1 - \\sigma)\\kB = (1 - ${fmt(sl, 2)}\\times10^{-6})(${fmt(m.b, 2)}\\ \\text{T}) = ${fmt(m.bloc, 8)}\\ \\text{T}`
      + ` \\\\ \\knuL = \\dfrac{\\gamma \\kBloc}{2\\pi} = (${fmt(G, 4)}\\ \\text{MHz/T})(${fmt(m.bloc, 8)}\\ \\text{T}) = ${fmt(m.nu, 6)}\\ \\text{MHz}`
      + ` \\\\ \\delta = \\dfrac{\\knu - \\knuo}{\\knuo}\\times10^6 = \\dfrac{${fmt(m.dHz, 1)}\\ \\text{Hz}}{${fmt(m.nu0, 6)}\\ \\text{MHz}}\\times10^6 = ${fmt(m.delta, 2)}\\ \\text{ppm}`
      + ` \\\\ \\small\\text{drawn }${fmt(m.nu0 * 1e6 / (BASE * m.b / 2.4) / 1e8, 1)}\\times10^{8}\\text{ times slower; the proton's lead drawn }10^{5}\\text{ times larger}`);
  }
  register(d.fig, { update, draw });
})();
};
