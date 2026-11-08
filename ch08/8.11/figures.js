/* Figures for section 8.11 Using Atomic Term Symbols to Interpret Atomic Spectra. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.11'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, arrow, text, topline, axes, plot, fmt } = F;

/* ---------- real colours (facts) ---------- */
const hex = (r, g, b) => '#' + [r, g, b].map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')).join('');
/* the colour of visible light of one wavelength, 380 to 780 nm (1.1's piecewise approximation) */
function spectral(nm) {
  let r = 0, g = 0, b = 0;
  if (nm < 440) { r = (440 - nm) / 60; b = 1; } else if (nm < 490) { g = (nm - 440) / 50; b = 1; }
  else if (nm < 510) { g = 1; b = (510 - nm) / 20; } else if (nm < 580) { r = (nm - 510) / 70; g = 1; }
  else if (nm < 645) { r = 1; g = (645 - nm) / 65; } else { r = 1; }
  const f = nm < 420 ? 0.3 + 0.7 * (nm - 380) / 40 : nm > 700 ? 0.3 + 0.7 * (780 - nm) / 80 : 1;
  return hex(255 * r * f, 255 * g * f, 255 * b * f);
}
/* the dark of a spectrograph's plate, on which emission lines stand */
const DARK = '#111114';

/* =====================================================================
   FIGURE 8.11.1 + 8.11.2: hydrogen's H-alpha line built from five
   transitions. Still: one slider, the line width, and nothing in time.
   Levels to scale within each n (the book's splittings): n = 3 has j = 1/2
   (3S, 3P), 3/2 (3P, 3D) 0.108 cm^-1 higher and 5/2 (3D) 0.036 higher
   again; n = 2 has j = 1/2 (2S, 2P) and 3/2 (2P) 0.364 higher. The gap
   between n = 3 and n = 2 is broken. Each transition is drawn at the x of
   its line on the spectrum below, so the arrows stand over their lines.
   Lines in cm^-1 from the j = 1/2 -> 1/2 line: 5/2->3/2 -0.220,
   3/2->3/2 -0.256, 3/2->1/2 +0.108, 1/2->3/2 -0.364, 1/2->1/2 0. Relative
   strengths g_u A summed over the transitions that share a line, A from the
   NIST Atomic Spectra Database (3d5/2-2p3/2 6.465e7, 3d3/2-2p3/2 1.078e7,
   3d3/2-2p1/2 5.388e7, 3p-2s 2.245e7, 3s1/2-2p3/2 4.21e6, 3s1/2-2p1/2
   2.10e6 s^-1): 1, 0.111, 0.787, 0.022, 0.127. Spectrum frame fixed at
   -0.5 to +0.3 cm^-1 and 0 to 1.15 (sticks at their relative strengths;
   the blend, each line a Gaussian of the chosen full width, scaled to peak
   at 1). Opens on 0.2 cm^-1, near the plate's blur, where the blend shows
   two peaks 0.323 cm^-1 apart; the book's 0.328 is the strong pair's.
   The light is drawn in Halpha's own red (fact, 656.3 nm).
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-h-alpha', 640);
  const W = ctl(d.controls, { label: '\\text{line width}', cls: 'wavenumber', key: 'width', min: 0.01, max: 0.6, step: 0.005, value: 0.2, unit: 'cm⁻¹', dec: 3, aria: 'the width of each line, in reciprocal centimetres' });
  const U3 = [{ j: '1/2', e: 0, s: '^2S_{1/2}, ^2P_{1/2}' }, { j: '3/2', e: 0.108, s: '^2P_{3/2}, ^2D_{3/2}' }, { j: '5/2', e: 0.144, s: '^2D_{5/2}' }];
  const U2 = [{ j: '1/2', e: 0, s: '^2S_{1/2}, ^2P_{1/2}' }, { j: '3/2', e: 0.364, s: '^2P_{3/2}' }];
  const LINES = [
    { u: 2, l: 1, I: 1, name: '3²D₅/₂ → 2²P₃/₂' },
    { u: 1, l: 1, I: 0.111, name: '3²D₃/₂ → 2²P₃/₂' },
    { u: 1, l: 0, I: 0.787, name: '3²D₃/₂ → 2²P₁/₂ and 3²P₃/₂ → 2²S₁/₂' },
    { u: 0, l: 1, I: 0.022, name: '3²S₁/₂ → 2²P₃/₂' },
    { u: 0, l: 0, I: 0.127, name: '3²P₁/₂ → 2²S₁/₂ and 3²S₁/₂ → 2²P₁/₂' },
  ].map((L) => ({ ...L, x: U3[L.u].e - U2[L.l].e }));
  const blendRaw = (x, w) => { const s = w / 2.3548; return LINES.reduce((a, L) => a + L.I * Math.exp(-((x - L.x) ** 2) / (2 * s * s)), 0); };
  const peaksOf = (w) => {
    const out = []; let p = blendRaw(-0.6, w), c = blendRaw(-0.5995, w);
    for (let x = -0.599; x <= 0.4; x += 0.0005) { const n = blendRaw(x + 0.0005, w); if (c > p && c >= n) out.push({ x, y: c }); p = c; c = n; }
    return out;
  };
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const w = W.v, red = F.fact(spectral(656.3)), cw = C('wavenumber');
    const pk = peaksOf(w), top2 = pk.slice().sort((a, b) => b.y - a.y).slice(0, 2).sort((a, b) => a.x - b.x);
    topline(ctx, pk.length === 1 ? `At a width of ${fmt(w, 3)} cm⁻¹ the five lines blur into one.` : pk.length === 2 ? `At a width of ${fmt(w, 3)} cm⁻¹ the five lines blur into a doublet, its peaks ${fmt(top2[1].x - top2[0].x, 3)} cm⁻¹ apart.` : `At a width of ${fmt(w, 3)} cm⁻¹ the line shows ${pk.length} peaks.`);
    const box = { l: 330, r: 1320, t: 470, b: 590 };
    const sx = (box.r - box.l) / 0.8, X = (v) => box.l + (v + 0.5) * sx;
    /* the levels, to scale within each n: 300 units per cm^-1 */
    const s = 300, y3 = 180, y2 = 380;
    const Y3 = (e) => y3 - e * s, Y2 = (e) => y2 - e * s;
    text(ctx, 'n = 3', 40, Y3(0.07), PAL.ink, { size: 22, weight: 600, base: 'middle' });
    text(ctx, 'n = 2', 40, Y2(0.18), PAL.ink, { size: 22, weight: 600, base: 'middle' });
    const lab3 = U3.map((u) => Y3(u.e)); for (let i = 1; i < 3; i++) if (lab3[i - 1] - lab3[i] < 22) lab3[i] = lab3[i - 1] - 22;
    U3.forEach((u, i) => { line(ctx, box.l, Y3(u.e), box.r, Y3(u.e), PAL.ink, 3); text(ctx, u.s, box.l - 12, lab3[i], PAL.ink, { size: 18, align: 'right', base: 'middle' }); hits.push({ x: box.l + 40, y: Y3(u.e), r: 12, name: `n = 3, j = ${u.j}: ${u.e ? fmt(u.e, 3) + ' cm⁻¹ above j = 1/2' : 'the lowest n = 3 level'}` }); });
    U2.forEach((u) => { line(ctx, box.l, Y2(u.e), box.r, Y2(u.e), PAL.ink, 3); text(ctx, u.s, box.l - 12, Y2(u.e), PAL.ink, { size: 18, align: 'right', base: 'middle' }); hits.push({ x: box.l + 40, y: Y2(u.e), r: 12, name: `n = 2, j = ${u.j}: ${u.e ? fmt(u.e, 3) + ' cm⁻¹ above j = 1/2' : 'the lowest n = 2 level'}` }); });
    /* the break in the energy scale between n = 3 and n = 2 */
    const yb = (Y3(0) + Y2(0.364)) / 2;
    [-6, 6].forEach((o) => line(ctx, box.l - 6, yb + o + 5, box.l + 6, yb + o - 5, PAL.muted, 2));
    /* the five transitions over their lines, as wide as they are strong */
    LINES.forEach((L) => {
      const x = X(L.x);
      arrow(ctx, x, Y3(U3[L.u].e), x, Y2(U2[L.l].e) - 2, alpha(red, 0.35 + 0.65 * L.I), 2 + 6 * L.I);
      hits.push({ x, y: (Y3(U3[L.u].e) + Y2(U2[L.l].e)) / 2, r: 14, name: `${L.name}, relative strength ${fmt(L.I, 3)}` });
    });
    /* the spectrum: sticks at their strengths, and the blend at this width */
    const ax = axes(ctx, box, [-0.5, 0.3], [0, 1.15], { nx: 8, ny: 0, xl: 'wavenumber from the 3²S₁/₂ → 2²S₁/₂ line (cm⁻¹)', xc: cw, fx: (v) => fmt(v, 1) });
    const peak = Math.max(...pk.map((p) => p.y));
    LINES.forEach((L) => line(ctx, ax.X(L.x), ax.Y(0), ax.X(L.x), ax.Y(L.I), alpha(red, 0.55), 3));
    plot(ctx, ax, (x) => blendRaw(x, w) / peak, red, { w: 4 });
    if (top2.length === 2) {
      const ya = ax.Y(1.08);
      line(ctx, ax.X(top2[0].x), ya, ax.X(top2[1].x), ya, cw, 2);
      [top2[0].x, top2[1].x].forEach((x) => line(ctx, ax.X(x), ya - 7, ax.X(x), ya + 7, cw, 2));
      text(ctx, `${fmt(top2[1].x - top2[0].x, 3)} cm⁻¹`, ax.X((top2[0].x + top2[1].x) / 2), ya - 14, cw, { size: 18, weight: 600, align: 'center' });
    }
    tex(d.readout, `\\Delta\\knut = 0.364 - 0.036 = 0.328\\ \\text{cm}^{-1} \\\\ ${top2.length === 2 && pk.length === 2 ? `\\Delta\\knut_{\\text{blend}} = ${fmt(top2[1].x - top2[0].x, 3)}\\ \\text{cm}^{-1}` : pk.length > 2 ? `\\text{${pk.length} peaks resolved}` : '\\text{one peak}'}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE (Example 8.11.1's image): sodium's three doublets.
   Still: a choice of pair, which the strip zooms to; nothing in time.
   The six wavelengths are the example's. Levels schematic (energies not to
   scale: 3s 0, 3p 16956 and 16973, 5s 33201, 4d 34549 cm^-1, NIST), the 3p
   pair drawn 14 units apart with its true gap written by it. The strip is
   a dark plate with each line in its own colour (fact); all six span 560
   to 622 nm, a picked pair a 2.4 nm window about its centre (choice.mix
   blends the window). The readout writes the pair's separation in cm^-1
   from its two wavelengths: 17.1, 17.0, 17.3, each the 3p gap of 17.2.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-sodium-doublets', 520);
  const PAIRS = {
    '5s': { lam: [616.07, 615.42], up: '5s', s: '5s → 3p' },
    '3p': { lam: [589.59, 589.00], up: '3p', s: '3p → 3s' },
    '4d': { lam: [568.82, 568.26], up: '4d', s: '4d → 3p' },
  };
  const K = F.choice(d.controls, { label: 'lines', key: 'pair', options: [{ value: 'all', label: 'all six' }, ...Object.keys(PAIRS).map((k) => ({ value: k, label: PAIRS[k].s }))], value: 'all', aria: 'which pair of lines to spread out' });
  const win = (v) => (v === 'all' ? [560, 622] : ((c) => [c - 1.2, c + 1.2])((PAIRS[v].lam[0] + PAIRS[v].lam[1]) / 2));
  const dnu = (l) => (1 / Math.min(...l) - 1 / Math.max(...l)) * 1e7;
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const v = K.value, cw = C('wavenumber'), cl = C('wavelength');
    const lo = K.mix((x) => win(x)[0]), hi = K.mix((x) => win(x)[1]);
    topline(ctx, v === 'all' ? 'Each of sodium\'s lines is doubled by the 17.2 cm⁻¹ split of its 3p level.' : `The ${PAIRS[v].s} lines at ${fmt(Math.min(...PAIRS[v].lam), 2)} and ${fmt(Math.max(...PAIRS[v].lam), 2)} nm are ${fmt(dnu(PAIRS[v].lam), 1)} cm⁻¹ apart.`);
    /* the levels, schematic */
    const Ly = { '3s': 450, p1: 300, p3: 286, '5s': 150, '4d': 130 };
    const seg = (y, x0, x1, s, nm) => { line(ctx, x0, y, x1, y, PAL.ink, 4); text(ctx, s, x0 - 10, y, PAL.ink, { size: 18, align: 'right', base: 'middle' }); hits.push({ x: (x0 + x1) / 2, y, r: 12, name: nm }); };
    seg(Ly['3s'], 160, 620, '3s ^2S_{1/2}', 'the ground level 3s ²S₁/₂');
    seg(Ly.p1, 160, 620, '3p ^2P_{1/2}', '3p ²P₁/₂, 16 956 cm⁻¹ above 3s');
    seg(Ly.p3, 160, 620, '^2P_{3/2}', '3p ²P₃/₂, 17.2 cm⁻¹ above ²P₁/₂');
    seg(Ly['5s'], 220, 330, '5s ^2S_{1/2}', '5s ²S₁/₂, 33 201 cm⁻¹ above 3s');
    seg(Ly['4d'], 380, 490, '4d ^2D', '4d ²D, 34 549 cm⁻¹ above 3s');
    text(ctx, '17.2 cm⁻¹ apart (gap enlarged)', 630, Ly.p3 - 2, PAL.muted, { size: 17, base: 'middle' });
    const tr = [
      { k: '5s', x: 250, from: Ly['5s'], to: Ly.p1, lam: 616.07 }, { k: '5s', x: 290, from: Ly['5s'], to: Ly.p3, lam: 615.42 },
      { k: '4d', x: 410, from: Ly['4d'], to: Ly.p1, lam: 568.82 }, { k: '4d', x: 450, from: Ly['4d'], to: Ly.p3, lam: 568.26 },
      { k: '3p', x: 540, from: Ly.p1, to: Ly['3s'], lam: 589.59 }, { k: '3p', x: 580, from: Ly.p3, to: Ly['3s'], lam: 589.00 },
    ];
    tr.forEach((t) => {
      const on = v === 'all' || v === t.k;
      arrow(ctx, t.x, t.from + 2, t.x, t.to - 2, alpha(F.fact(spectral(t.lam)), on ? 1 : 0.25), on ? 5 : 3);
      hits.push({ x: t.x, y: (t.from + t.to) / 2, r: 14, name: `${PAIRS[t.k].s}: ${fmt(t.lam, 2)} nm` });
    });
    /* the plate: the lines in the window, in their colours */
    const sb = { l: 760, r: 1330, t: 190, b: 330 };
    ctx.save(); ctx.fillStyle = F.fact(DARK); ctx.fillRect(sb.l, sb.t, sb.r - sb.l, sb.b - sb.t); ctx.restore();
    const X = (nm) => sb.l + (nm - lo) / (hi - lo) * (sb.r - sb.l);
    tr.forEach((t) => { const x = X(t.lam); if (x < sb.l - 2 || x > sb.r + 2) return; line(ctx, x, sb.t + 8, x, sb.b - 8, F.fact(spectral(t.lam)), 4); });
    const ax = axes(ctx, { l: sb.l, r: sb.r, t: sb.b, b: sb.b + 1 }, [lo, hi], [0, 1], { nx: 4, ny: 0, xl: 'wavelength λ (nm)', xc: cl, fx: (x) => fmt(x, hi - lo < 10 ? 1 : 0) });
    void ax;
    if (v !== 'all' && K.k > 0.95) {
      const l = PAIRS[v].lam, ya = sb.t - 26, x0 = X(Math.min(...l)), x1 = X(Math.max(...l));
      line(ctx, x0, ya, x1, ya, cw, 2); [x0, x1].forEach((x) => line(ctx, x, ya - 7, x, ya + 7, cw, 2));
      text(ctx, `${fmt(dnu(l), 1)} cm⁻¹`, (x0 + x1) / 2, ya - 14, cw, { size: 20, weight: 600, align: 'center' });
    }
    if (v === 'all') tex(d.readout, '\\Delta\\knut(3p) = \\knut(^2P_{3/2}) - \\knut(^2P_{1/2}) = 17.2\\ \\text{cm}^{-1}');
    else { const l = PAIRS[v].lam, a = Math.min(...l), b = Math.max(...l); tex(d.readout, `\\Delta\\knut = \\dfrac{1}{\\klambda_1} - \\dfrac{1}{\\klambda_2} = \\dfrac{1}{${fmt(a, 2)}\\ \\text{nm}} - \\dfrac{1}{${fmt(b, 2)}\\ \\text{nm}} = ${fmt(dnu(l), 1)}\\ \\text{cm}^{-1}`); }
  }
  register(d.fig, { update: () => {}, draw });
})();
};
