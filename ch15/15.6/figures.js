/* Figures for section 15.6 The Helium-Neon Laser. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['15.6'] = function (root, F) {
const { tex, C, PAL, alpha, register, begin, line, arrow, dot, text, topline, fmt } = F;
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
/* a photon: a short wave packet centred on (x, y) running along the angle a */
function packet(ctx, x, y, a, color, len = 54) {
  const ux = Math.cos(a), uy = Math.sin(a), px = -uy, py = ux;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3.5; ctx.beginPath();
  for (let i = 0; i <= 40; i++) {
    const s = -len / 2 + len * i / 40, env = Math.sin(Math.PI * i / 40), w = 8 * env * Math.sin(2 * Math.PI * 4 * i / 40);
    const X = x + ux * s + px * w, Y = y + uy * s + py * w;
    if (i) ctx.lineTo(X, Y); else ctx.moveTo(X, Y);
  }
  ctx.stroke(); ctx.restore();
}
/* a wavy line from a to b: energy handed over in a collision (no photon) */
function wavy(ctx, x1, y1, x2, y2, color, upto = 1) {
  const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L, n = 60;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.beginPath();
  for (let i = 0; i <= n * upto; i++) { const s = L * i / n, w = 6 * Math.sin(s / 7); const X = x1 + ux * s - uy * w, Y = y1 + uy * s + ux * w; if (i) ctx.lineTo(X, Y); else ctx.moveTo(X, Y); }
  ctx.stroke(); ctx.restore();
}

/* ---------- Figure 15.6.1: helium feeds neon ----------
   Energies in 10^4 cm^-1 on the book's scale. He 2 3S = 15.99 and 2 1S = 16.77, and Ne 5s = 16.67, read off the
   book's figure; the other neon levels follow from the book's three wavelengths: 3p = 5s - 1/632.8 nm = 15.090,
   4s = 3p + 1/1152.3 nm = 15.958, 4p = 5s - 1/3391.3 nm = 16.375. The 3s level and the ground states sit below the
   axis break, off the scale, as the book draws them. Moving: one cycle of the mechanism, 6 s. A discharge
   electron lifts a helium atom (0-1); the helium atom hands its energy to a neon atom in a collision (1-2);
   the neon atom lases to its lower level and the photon leaves (2-3.6); the lower level drains to 3s (3.6-4.6).
   The choice is the line the mirrors are made for. Arrows are notation except the moving atoms and photon. */
(function () {
  const d = sim('sim-hene', 620);
  const T = 6;
  const cy = F.cycle(() => T, 1.2);
  const LINES = {
    '632.8': { nm: 632.8, up: '5s', lo: '3p', he: '21S', A: '6.56\\times10^{6}' },
    '1152.3': { nm: 1152.3, up: '4s', lo: '3p', he: '23S' },
    '3391.3': { nm: 3391.3, up: '5s', lo: '4p', he: '21S' },
  };
  const K = F.choice(d.controls, { label: '\\text{mirrors made for}', key: 'line', value: '632.8', aria: 'the line the mirrors are made for',
    options: Object.keys(LINES).map((k) => ({ value: k, label: `${k} nm` })), onInput: () => cy.reset() });
  const hits = [];
  F.hover(d.stage, () => hits);
  const E = { '23S': 15.99, '21S': 16.77, '5s': 16.67, '4s': 15.958, '4p': 16.375, '3p': 15.090 };
  const ease = (k) => { const q = Math.max(0, Math.min(1, k)); return q * q * (3 - 2 * q); };
  function draw() {
    const { ctx, W } = begin(d.c);
    const t = Math.min(cy.now(), T), Ln = LINES[K.value], vis = Ln.nm < 700;
    const pc = vis ? F.fact(spectral(Ln.nm)) : alpha(PAL.ink, 0.75);
    topline(ctx, `Helium hands its energy to neon's ${Ln.up} level, which lases to ${Ln.lo} at ${Ln.nm} nm${vis ? ', red light' : ', in the infrared'}.`);
    /* the energy axis: 14 to 17.5 in 10^4 cm^-1, broken below 14 */
    const Y = (e) => 470 - (e - 14) * 100, yG = 575, y3s = 540, ax0 = 120;
    line(ctx, ax0, Y(17.6), ax0, 498, PAL.ink, 2); line(ctx, ax0, 518, ax0, yG, PAL.ink, 2);
    line(ctx, ax0 - 8, 498, ax0 + 8, 504, PAL.ink, 2); line(ctx, ax0 - 8, 512, ax0 + 8, 518, PAL.ink, 2);
    for (let e = 14; e <= 17; e++) { line(ctx, ax0 - 8, Y(e), ax0, Y(e), PAL.ink, 2); text(ctx, String(e), ax0 - 14, Y(e), PAL.ink, { size: 17, align: 'right' }); }
    text(ctx, 'energy (10⁴ cm⁻¹)', ax0 - 4, Y(17.6) - 26, C('energy'), { size: 20, weight: 600, align: 'left' });
    /* the levels */
    const lev = (x0, x1, y, name, c = PAL.ink, w = 4) => { line(ctx, x0, y, x1, y, c, w); text(ctx, name, x1 + 12, y, PAL.ink, { size: 20 }); };
    const hx0 = 200, hx1 = 320, nx0 = 470, nx1 = 590, lx0 = 760, lx1 = 880;
    lev(hx0, hx1, Y(E['21S']), '2¹S'); lev(hx0, hx1, Y(E['23S']), '2³S'); lev(hx0, hx1, yG, '');
    lev(nx0, nx1, Y(E['5s']), '5s'); lev(nx0, nx1, Y(E['4s']), '4s');
    lev(lx0, lx1, Y(E['4p']), '4p'); lev(lx0, lx1, Y(E['3p']), '3p'); lev(lx0, lx1, y3s, '3s'); lev(nx0, lx1, yG, '');
    text(ctx, 'helium', (hx0 + hx1) / 2, yG + 26, F.el('He'), { size: 22, weight: 600, align: 'center' });
    text(ctx, 'neon', (nx0 + lx1) / 2, yG + 26, F.el('Ne'), { size: 22, weight: 600, align: 'center' });
    /* the three lines, the chosen one bold */
    const xs = { '5s': nx1, '4s': nx1 }, xe = lx0;
    Object.entries(LINES).forEach(([k, L]) => {
      const on = k === K.value, a = [xs[L.up], Y(E[L.up])], b = [xe, Y(E[L.lo])];
      if (on) arrow(ctx, a[0], a[1], b[0], b[1], vis ? pc : PAL.ink, 4);
      else line(ctx, a[0], a[1], b[0], b[1], alpha(PAL.ink, 0.3), 2, [10, 10]);
      const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
      text(ctx, `${L.nm}`, mx + 6, my - 16, on ? (vis ? pc : PAL.ink) : PAL.muted, { size: 17, weight: on ? 600 : 400, align: 'center' });
    });
    /* the story */
    const hxU = Y(E[Ln.he]), hxm = (hx0 + hx1) / 2, nxm = (nx0 + nx1) / 2, lxm = (lx0 + lx1) / 2;
    /* 0-1: a discharge electron strikes helium, which rises */
    if (t < 1) { const k = ease(t / 0.5); dot(ctx, 40 + (hxm - 60) * k, yG - 30, F.el('e-'), true, 7); }
    const heUp = t >= 0.5 && t < 2, heY = t < 0.5 ? yG : t < 1 ? yG + (hxU - yG) * ease((t - 0.5) / 0.5) : t < 2 ? hxU : yG;
    if (t >= 0.5 && t < 1) arrow(ctx, hxm - 26, yG - 4, hxm - 26, heY + 4, alpha(PAL.ink, 0.6), 4);
    dot(ctx, hxm, heY, F.el('He'), true, 12);
    /* 1-2: the collision hands the energy across, without light */
    const nUp = Y(E[Ln.up]);
    if (t >= 1 && t < 2.2) wavy(ctx, hx1 + 6, hxU, nx0 - 6, nUp, alpha(PAL.ink, 0.7), Math.min(1, (t - 1) / 0.8));
    else line(ctx, hx1 + 6, hxU, nx0 - 6, nUp, alpha(PAL.ink, 0.18), 2, [4, 8]);
    /* the neon atom: ground, upper level, lower level, 3s */
    const nLo = Y(E[Ln.lo]);
    let nx = nxm, ny = yG;
    if (t >= 1.8 && t < 2.4) { nx = nxm; ny = nUp; }
    else if (t >= 2.4 && t < 3.2) { const k = ease((t - 2.4) / 0.8); nx = nxm + (lxm - nxm) * k; ny = nUp + (nLo - nUp) * k; }
    else if (t >= 3.2 && t < 3.6) { nx = lxm; ny = nLo; }
    else if (t >= 3.6) { const k = ease((t - 3.6) / 1); nx = lxm; ny = nLo + (y3s - nLo) * k; }
    if (t >= 3.6) arrow(ctx, lxm + 30, nLo + 4, lxm + 30, y3s - 6, alpha(PAL.ink, 0.6), 3);
    dot(ctx, nx, ny, F.el('Ne'), true, 12);
    /* the photon leaves toward the mirrors */
    if (t >= 2.6) { const k = Math.min(1, (t - 2.6) / 1.6); packet(ctx, lx1 + 60 + 340 * k, Y(16.0), 0, pc); }
    const mx0 = 1000, mx1 = 1340, my = Y(16.0);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2;
    ctx.fillRect(mx0 - 6, my - 50, 12, 100); ctx.strokeRect(mx0 - 6, my - 50, 12, 100); ctx.fillRect(mx1 - 6, my - 50, 12, 100); ctx.strokeRect(mx1 - 6, my - 50, 12, 100); ctx.restore();
    line(ctx, mx0 + 8, my, mx1 - 8, my, alpha(vis ? pc : PAL.ink, 0.35), 8);
    text(ctx, `mirrors for ${Ln.nm} nm`, (mx0 + mx1) / 2, my + 74, PAL.ink, { size: 20, align: 'center' });
    if (!vis) text(ctx, 'infrared', (mx0 + mx1) / 2, my - 72, PAL.muted, { size: 20, align: 'center' });
    hits.length = 0;
    hits.push({ x: hxm, y: heY, r: 18, name: 'a helium atom' }, { x: nx, y: ny, r: 18, name: 'a neon atom' },
      { x: (hx1 + nx0) / 2, y: (hxU + nUp) / 2, r: 30, name: 'energy handed over in a collision' },
      { x: hxm, y: Y(E['21S']), r: 20, name: 'He 2¹S, metastable' }, { x: hxm, y: Y(E['23S']), r: 20, name: 'He 2³S, metastable' });
    const dnu = 1e7 / Ln.nm / 1e4;
    tex(d.readout, `\\klambda = \\dfrac{hc}{\\kdE} = \\dfrac{1}{\\Delta\\tilde{\\nu}} = \\dfrac{1}{${fmt(dnu, 4)}\\times10^{4}\\ \\text{cm}^{-1}} = ${Ln.nm}\\ \\text{nm}${Ln.A ? ` \\\\ A = ${Ln.A}\\ \\text{s}^{-1}\\ \\text{(Table 15.6.1)}` : ''}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
