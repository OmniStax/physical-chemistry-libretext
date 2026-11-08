/* Figures for section 13.6 Electronic Spectra Contain Electronic, Vibrational, and Rotational Information. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['13.6'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, arrow, fmt, vbracket } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- real colours (facts): visible light of one wavelength (1.1's spectral) ---------- */
const hex = (r, g, b) => '#' + [r, g, b].map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')).join('');
function spectral(nm) {
  let r = 0, g = 0, b = 0;
  if (nm < 440) { r = (440 - nm) / 60; b = 1; } else if (nm < 490) { g = (nm - 440) / 50; b = 1; }
  else if (nm < 510) { g = 1; b = (510 - nm) / 20; } else if (nm < 580) { r = (nm - 510) / 70; g = 1; }
  else if (nm < 645) { r = 1; g = (645 - nm) / 65; } else { r = 1; }
  const f = nm < 420 ? 0.3 + 0.7 * (nm - 380) / 40 : nm > 700 ? 0.3 + 0.7 * (780 - nm) / 80 : 1;
  return hex(255 * r * f, 255 * g * f, 255 * b * f);
}

/* ---------- Figure 13.6.1 + 13.6.2: the vibronic bands of I2 ----------
   The book gives no constants; these are literature values for I2 (Huber and Herzberg, from memory, unchecked):
   X state nu''_e = 214.5, chi''_e nu''_e = 0.614 cm^-1, R''_e = 2.666 A; B state T_el = 15 769, nu'_e = 125.7,
   chi'_e nu'_e = 0.764 cm^-1, R'_e = 3.024 A, B'_e = 0.029 cm^-1; reduced mass 63.45 amu. Each well is the Morse
   well of its two constants (depths 18 734 and 5170 cm^-1), so its levels are the book's two-term G(v) exactly and the
   B ladder closes at v' = 81. A band lands at T_el + G'(v') - G''(v''): (26,0) at 18 456 cm^-1, 541.8 nm, the
   0-0 band at 15 725 cm^-1. The energy axis is broken: the B well 15 400 to 21 200 cm^-1 above, the bottom of the
   X well 0 to 1000 cm^-1 below. The strip below is the spectrum 15 500 to 21 000 cm^-1 over its real colours.
   Still: the slider and the choice pick a band; nothing has a clock. */
(function () {
  const d = sim('sim-vibronic', 800);
  const VP = ctl(d.controls, { label: "v'", cls: '', key: 'vup', min: 0, max: 81, step: 1, value: 26, dec: 0, aria: 'the vibrational quantum number of the upper state',
    detents: [{ v: 26, label: '(26,0)' }], snap: true });
  const VL = F.choice(d.controls, { label: "v''", key: 'vlow', options: [{ value: '0', label: '0' }, { value: '1', label: '1' }, { value: '2', label: '2' }], value: '0', aria: 'the vibrational level of the ground state the band starts from' });
  const hits = [];
  F.hover(d.stage, () => hits);
  const c = 2.99792458e10, h = 6.62607e-34, MU = 63.452 * 1.66054e-27;
  const well = (we, wx, Re, T) => { const De = we * we / (4 * wx), b = 2 * Math.PI * c * we * Math.sqrt(MU / (2 * De * h * c)) * 1e-10;
    return { we, wx, Re, T, De, b, G: (v) => we * (v + 0.5) - wx * (v + 0.5) ** 2, V: (R) => T + De * (1 - Math.exp(-b * (R - Re))) ** 2,
      turn: (E) => { const s = Math.sqrt(Math.min(1, (E - T) / De)); return [Re - Math.log(1 + s) / b, s >= 1 ? 99 : Re - Math.log(1 - s) / b]; } }; };
  const X = well(214.5, 0.614, 2.666, 0), B = well(125.7, 0.764, 3.024, 15769), VMAX = 81, BROT = 0.029;
  const band = (vp, vl) => B.T + B.G(vp) - X.G(vl);
  function draw() {
    const { ctx } = begin(d.c);
    const vp = VP.v, vl = +VL.value, nu = band(vp, vl), lam = 1e7 / nu, conv = B.T + B.De - X.G(vl);
    const ce = C('energy'), cw = C('wavenumber'), cl = C('length');
    topline(ctx, `The band (${vp}, ${vl}) lands at ${fmt(nu, 0)} cm⁻¹, ${fmt(lam, 1)} nm${vp > 0 ? `, ${fmt(B.G(vp) - B.G(vp - 1), 1)} cm⁻¹ from its neighbour (${vp - 1}, ${vl})` : ''}.`);
    hits.length = 0;
    /* the wells, on a broken energy axis */
    const top = { l: 150, r: 780, t: 96, b: 370 }, bot = { l: 150, r: 780, t: 410, b: 530 };
    const aT = axes(ctx, top, [2.3, 4.8], [15400, 21200], { nx: 0, ny: 4, yl: 'energy (cm⁻¹)', yc: ce });
    const aB = axes(ctx, bot, [2.3, 4.8], [0, 1000], { nx: 5, ny: 2, xl: 'internuclear distance R (Å)', xc: cl });
    [top.b + 16, bot.t - 16].forEach((y) => line(ctx, top.l - 12, y + 6, top.l + 12, y - 6, PAL.ink, 2));
    F.plot(ctx, aB, X.V, ce, { w: 5 });
    F.plot(ctx, aT, B.V, ce, { w: 5 });
    text(ctx, 'B³Π', aT.X(4.2), aT.Y(17600), ce, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'X¹Σ⁺', aB.X(3.7), aB.Y(500), ce, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    /* the dissociation limit of B */
    line(ctx, top.l, aT.Y(B.T + B.De), top.r, aT.Y(B.T + B.De), alpha(PAL.ink, 0.4), 2, [10, 10]);
    text(ctx, 'dissociation', top.r - 8, aT.Y(B.T + B.De) - 16, PAL.muted, { size: 17, align: 'right' });
    /* the upper ladder, every level, closing up */
    for (let v = 0; v <= VMAX; v++) {
      const E = B.T + B.G(v), [a, b] = B.turn(E), on = v === vp;
      line(ctx, aT.X(a), aT.Y(E), aT.X(Math.min(4.8, b)), aT.Y(E), alpha(ce, on ? 1 : 0.32), on ? 4 : 1.5);
    }
    /* the lower levels */
    for (let v = 0; v <= 2; v++) {
      const E = X.G(v), [a, b] = X.turn(E), on = v === vl;
      line(ctx, aB.X(a), aB.Y(E), aB.X(b), aB.Y(E), alpha(ce, on ? 1 : 0.45), on ? 4 : 2);
      text(ctx, `v'' = ${v}`, aB.X(b) + 12, aB.Y(E), on ? ce : PAL.muted, { size: 17, base: 'middle' });
      hits.push({ x: aB.X(X.Re), y: aB.Y(E), r: 10, name: `ground-state level v'' = ${v}: ${fmt(E, 1)} cm⁻¹ above the bottom of the X well` });
    }
    /* the transition, straight up from the ground level */
    const Eup = B.T + B.G(vp), [ua] = B.turn(Eup), xa = aB.X(X.Re);
    if (aT.X(ua) > xa) line(ctx, xa, aT.Y(Eup), aT.X(ua), aT.Y(Eup), alpha(ce, 0.8), 2, [4, 8]);
    arrow(ctx, xa, aB.Y(X.G(vl)), xa, aT.Y(Eup), cw, 5);
    text(ctx, `v' = ${vp}`, aT.X(Math.min(4.8, B.turn(Eup)[1])) + 12 > top.r - 80 ? top.r - 6 : aT.X(B.turn(Eup)[1]) + 12, aT.Y(Eup), ce, { size: 20, weight: 600, base: 'middle', align: aT.X(Math.min(4.8, B.turn(Eup)[1])) + 12 > top.r - 80 ? 'right' : 'left', bg: PAL.panel });
    hits.push({ x: xa, y: (aT.Y(Eup) + aB.Y(X.G(vl))) / 2, r: 14, name: `the band (${vp}, ${vl}): ${fmt(nu, 1)} cm⁻¹` });
    hits.push({ x: aT.X(B.Re), y: aT.Y(Eup), r: 10, name: `upper level v' = ${vp}: ${fmt(Eup, 1)} cm⁻¹` });

    /* the magnifier: the rotational levels of the chosen upper level */
    const mg = { l: 880, r: 1150, t: 120, b: 330 }, Jm = 8, ry = (J) => mg.b - (BROT * J * (J + 1)) / (BROT * Jm * (Jm + 1)) * (mg.b - mg.t);
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2; ctx.beginPath(); ctx.roundRect(mg.l - 20, mg.t - 30, mg.r - mg.l + 40, mg.b - mg.t + 60, 8); ctx.stroke(); ctx.restore();
    line(ctx, aT.X(Math.min(4.8, B.turn(Eup)[1])), aT.Y(Eup), mg.l - 20, mg.b, alpha(PAL.ink, 0.3), 2, [4, 8]);
    for (let J = 0; J <= Jm; J++) line(ctx, mg.l + 100, ry(J), mg.r - 70, ry(J), alpha(ce, J ? 0.7 : 1), J ? 2 : 4);
    text(ctx, 'J = 0', mg.r - 60, ry(0), PAL.ink, { size: 17, base: 'middle' });
    text(ctx, `J = ${Jm}`, mg.r - 60, ry(Jm), PAL.ink, { size: 17, base: 'middle' });
    vbracket(ctx, mg.l + 80, ry(0), ry(Jm), ce, `${fmt(BROT * Jm * (Jm + 1), 1)} cm⁻¹`, -1, { size: 17 });
    text(ctx, `rotational levels of v' = ${vp}`, (mg.l + mg.r) / 2, mg.b + 52, PAL.muted, { size: 17, align: 'center' });
    hits.push({ x: (mg.l + mg.r) / 2, y: (mg.t + mg.b) / 2, r: 80, name: `the rotational levels F(J) = B̃J(J + 1) of v' = ${vp}, with B̃ ≈ ${BROT} cm⁻¹: unresolved within each band` });

    /* the spectrum: every band from v'', the continuum past the convergence limit */
    const sb = { l: 150, r: 1340, t: 680, b: 730 };
    const sx = axes(ctx, sb, [15500, 21000], [0, 1], { nx: 11, ny: 0, xl: 'wavenumber ν̃ (cm⁻¹)', xc: cw });
    for (let x = sb.l; x < sb.r; x += 4) { const nm = 1e7 / (15500 + (x - sb.l) / (sb.r - sb.l) * 5500); ctx.save(); ctx.fillStyle = F.fact(spectral(nm)); ctx.globalAlpha = 0.55; ctx.fillRect(x, sb.t - 16, 4.5, 8); ctx.restore(); }
    const cx = Math.min(sb.r, sx.X(conv));
    ctx.save(); ctx.fillStyle = alpha(cw, 0.18); ctx.fillRect(cx, sb.t, sb.r - cx, sb.b - sb.t); ctx.restore();
    line(ctx, cx, sb.t - 4, cx, sb.b, alpha(PAL.ink, 0.6), 2, [10, 10]);
    if (Math.abs(sx.X(nu) - cx) > 200) text(ctx, 'convergence limit', cx - 8, sb.t - 36, PAL.ink, { size: 17, align: 'right' });
    hits.push({ x: cx, y: (sb.t + sb.b) / 2, r: 12, name: `the convergence limit, ${fmt(conv, 0)} cm⁻¹; the spectrum is continuous beyond it` });
    for (let v = 0; v <= VMAX; v++) { const x = sx.X(band(v, vl)); if (x > sb.r) break; line(ctx, x, sb.b, x, sb.t + 8, alpha(cw, v === vp ? 1 : 0.4), v === vp ? 5 : 1.5); }
    { const x = sx.X(nu); text(ctx, `(${vp}, ${vl})`, x, sb.t - 36, cw, { size: 18, weight: 600, align: 'center', bg: PAL.panel }); }
    { const x = sx.X(band(0, vl)); hits.push({ x, y: (sb.t + sb.b) / 2, r: 10, name: `the (0, ${vl}) band: ${fmt(band(0, vl), 1)} cm⁻¹` }); }
    hits.push({ x: sx.X(nu), y: (sb.t + sb.b) / 2, r: 10, name: `the (${vp}, ${vl}) band: ${fmt(nu, 1)} cm⁻¹, ${fmt(lam, 1)} nm` });

    const Gp = B.G(vp), Gl = X.G(vl);
    tex(d.readout, vl === 0
      ? `\\knutobs = \\knutzz + \\knute' v' - \\tilde{\\chi}'_e\\knute' v'(v'+1) \\\\ \\knutobs = ${fmt(band(0, 0), 1)} + (${fmt(B.we, 1)})(${vp}) - (${fmt(B.wx, 3)})(${vp})(${vp + 1}) = ${fmt(nu, 1)}\\ \\text{cm}^{-1}`
      : `\\knutobs = \\kTtel + \\kGvib'(v') - \\kGvib''(v'') \\\\ \\knutobs = ${fmt(B.T, 0)} + ${fmt(Gp, 1)} - ${fmt(Gl, 1)} = ${fmt(nu, 1)}\\ \\text{cm}^{-1}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
