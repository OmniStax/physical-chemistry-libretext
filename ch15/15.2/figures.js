/* Figures for section 15.2 The Dynamics of Transitions can be Modeled by Rate Equations. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['15.2'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

const HC = 1239.84, H_EV = 4.135667e-15;
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
const clamp01 = (k) => Math.max(0, Math.min(1, k));
const smooth = (k) => { k = clamp01(k); return k * k * (3 - 2 * k); };
/* a photon as a wave packet travelling along (ux, uy); its crests ride with it, so two packets at one place are in step */
function packet(ctx, cx, cy, ux, uy, color, wl, len = 90) {
  const nx = -uy, ny = ux, sd = len / 4;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.beginPath();
  for (let s = -len / 2; s <= len / 2; s += 1.5) {
    const a = 12 * Math.exp(-(s * s) / (2 * sd * sd)) * Math.sin(2 * Math.PI * s / wl);
    const x = cx + ux * s + nx * a, y = cy + uy * s + ny * a;
    if (s === -len / 2) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.stroke(); ctx.restore();
}

/* ---------- Figure 15.2.1: absorption, spontaneous emission, stimulated emission ----------
   Three lanes, the book's A, B and C, each a two-level atom at x = 600 to 760 with the gap drawn 40 px per eV.
   Photons travel at 230 px/s, their drawn wavelength a tenth of the real one in nm. A: a photon arrives at 2.5 s and
   lifts the electron. B: the electron, in E2, drops at a moment and sends its photon off in a direction that changes
   with every loop (a fixed sequence, so a scrub replays it). C: a photon arrives at 2.5 s, the electron drops, and
   two packets leave together to the right, crest on crest. The gap 1.65 to 3.10 eV spans the visible; it opens on
   1.96 eV, the He-Ne laser's 633 nm line of 15.6. Moving: 5 s a loop, hold 1 s. */
(function () {
  const d = sim('sim-einstein', 640);
  const GAP = ctl(d.controls, { label: '\\kEtwo - \\kEone', cls: 'energy', key: 'gap', min: 1.65, max: 3.10, step: 0.01, value: 1.96, unit: 'eV', dec: 2, onInput: () => cy.reset() });
  const RUN = 5, V = 230, AX = 680;
  let loops = 0;
  const cy = F.cycle(() => RUN, 1.0);
  const rnd = (n, s) => { const x = Math.sin(n * 127.1 + s * 311.7) * 43758.5453; return x - Math.floor(x); };
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    const gap = GAP.v, nm = HC / gap, col = F.fact(spectral(nm)), wl = nm / 10, t = cy.now(), ink = PAL.ink, ce = C('energy'), el = F.el('e-');
    topline(ctx, `Each photon carries $h\\knuonetwo = \\kEtwo - \\kEone = ${fmt(gap, 2)}$ eV, light of ${fmt(nm, 0)} nm.`);
    hits.length = 0;
    const lanes = [{ y: 220, name: 'A', title: 'absorption' }, { y: 400, name: 'B', title: 'spontaneous emission' }, { y: 580, name: 'C', title: 'stimulated emission' }];
    const g = 40 * gap;
    lanes.forEach((L, i) => {
      const y1 = L.y, y2 = L.y - g;
      if (i) line(ctx, 30, L.y - 150, W - 30, L.y - 150, alpha(ink, 0.15), 2);
      text(ctx, `${L.name}   ${L.title}`, 40, L.y - 118, ink, { size: 22, weight: 600 });
      line(ctx, 600, y1, 760, y1, ce, 4); line(ctx, 600, y2, 760, y2, ce, 4);
      if (i === 0) { text(ctx, 'E₁', 776, y1, ce, { size: 22, weight: 600, base: 'middle' }); text(ctx, 'E₂', 776, y2, ce, { size: 22, weight: 600, base: 'middle' }); }
      hits.push({ x: 680, y: y1, r: 14, name: 'level 1, energy E₁' }, { x: 680, y: y2, r: 14, name: 'level 2, energy E₂' });
      /* the lane's own photons and electron */
      ctx.save(); ctx.beginPath(); ctx.rect(0, L.y - 148, W, 176); ctx.clip();
      let ey = y1;
      if (i === 0) {
        const tA = (AX - 110) / V, k = smooth((t - tA) / 0.4);
        if (t < tA) { const x = 110 + V * t; packet(ctx, x, (y1 + y2) / 2, 1, 0, col, wl); hits.push({ x, y: (y1 + y2) / 2, r: 40, name: 'the incoming photon' }); }
        ey = y1 + (y2 - y1) * k;
      } else if (i === 1) {
        const ts = 0.8 + 1.8 * rnd(loops, 1), th = Math.PI * (2 * rnd(loops, 2) - 1), k = smooth((t - ts) / 0.3);
        ey = y2 + (y1 - y2) * k;
        if (t > ts) {
          const r = 40 + V * (t - ts), ux = Math.cos(th), uy = Math.sin(th) * 0.45, n = Math.hypot(ux, uy), x = AX + r * ux / n, y = (y1 + y2) / 2 + r * uy / n;
          packet(ctx, x, y, ux / n, uy / n, col, wl);
          hits.push({ x, y, r: 40, name: 'the photon emitted spontaneously, in a direction of its own' });
        }
      } else {
        const tC = (AX - 110) / V, k = smooth((t - tC) / 0.3), x = 110 + V * t, ym = (y1 + y2) / 2;
        ey = y2 + (y1 - y2) * k;
        packet(ctx, x, ym, 1, 0, col, wl);
        if (t > tC) { packet(ctx, x, ym + 30, 1, 0, col, wl); hits.push({ x, y: ym + 15, r: 45, name: 'the passing photon and the stimulated one: same colour, same direction, in step' }); }
        else hits.push({ x, y: ym, r: 40, name: 'the passing photon' });
      }
      ctx.restore();
      dot(ctx, AX, ey, el, true, 11);
      hits.push({ x: AX, y: ey, r: 16, name: 'the electron' });
    });
    tex(d.readout, `\\kEtwo - \\kEone = h\\knuonetwo \\\\ \\knuonetwo = \\dfrac{${fmt(gap, 2)}\\ \\text{eV}}{4.136\\times10^{-15}\\ \\text{eV·s}} = ${fmt(gap / H_EV / 1e14, 2)}\\times10^{14}\\ \\text{Hz}`);
  }
  register(d.fig, { update: (dt) => { const was = cy.tau; cy.step(dt, () => 1); if (cy.tau < was) loops++; }, draw });
})();
};
