/* Figures for section 12.13 Symmetry of Vibrations Describes their Spectroscopic Behavior. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['12.13'] = function (root, F) {
const { el, tex, C, PAL, alpha, ctl, register, begin, line, arrow, text, topline, axes, cycle, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;
const clamp = (x) => Math.max(0, Math.min(1, x));
function readout(host, main, small) { tex(host, main, false, {}); if (small) { const s = el('small', null, small); host.appendChild(s); F.renderMath(s); } }

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

/* ---------- water in the xz plane (as in Section 12.10): x right, z up, y into the page ----------
   Normal modes from a valence force field, largest displacement 1; measured fundamentals (NIST). */
const ATOMS = [{ s: 'O', x: 0, z: 0.0656 }, { s: 'H', x: 0.757, z: -0.5203 }, { s: 'H', x: -0.757, z: -0.5203 }];
const MODES = [
  { key: 'sym', name: 'symmetric stretch', sp: 'A_1', nu: 3657, d: [[0, -0.1005], [-1, 0.7975], [1, 0.7975]] },
  { key: 'bend', name: 'bend', sp: 'A_1', nu: 1595, d: [[0, -0.126], [0.898, 1], [-0.898, 1]] },
  { key: 'asym', name: 'asymmetric stretch', sp: 'B_1', nu: 3756, d: [[-0.126, 0], [1, -0.774], [1, 0.774]] },
];
/* C2v species as their characters under E, C2, σv(xz), σv'(yz) */
const CHI = { A_1: [1, 1, 1, 1], A_2: [1, 1, -1, -1], B_1: [1, -1, 1, -1], B_2: [1, -1, -1, 1] };
const times = (a, b) => { const p = CHI[a].map((x, i) => x * CHI[b][i]); return Object.keys(CHI).find((k) => CHI[k].every((x, i) => x === p[i])); };
function water(ctx, cx, cy, S, disp, fade) {
  const P = ATOMS.map((a, i) => [cx + (a.x + disp[i][0]) * S, cy - (a.z + disp[i][1]) * S]);
  [1, 2].forEach((i) => line(ctx, P[0][0], P[0][1], P[i][0], P[i][1], alpha(PAL.ink, 0.45 * fade), S * 0.11));
  P.forEach((p, i) => { ctx.save(); ctx.globalAlpha = fade; ctx.beginPath(); ctx.arc(p[0], p[1], S * (i ? 0.13 : 0.2), 0, TAU); ctx.fillStyle = F.el(ATOMS[i].s); ctx.fill(); ctx.strokeStyle = alpha(PAL.ink, 0.7); ctx.lineWidth = 2; ctx.stroke(); ctx.restore(); });
  return P;
}

/* =====================================================================
   FIGURE (unnumbered): the book's level diagram, redrawn. Still: a faithful copy the
   text points at by letter (B here, C in Section 12.15). Two electronic states, each
   with vibrational levels v0 and v1, each with rotational levels R1 to R3; transitions
   A (rotational), B (vibrational), C (electronic), as the book draws them.
===================================================================== */
(function () {
  const d = sim('fig-levels', 640);
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const ce = C('energy'), l = 230, r = 880;
    const lower = { v0: 585, v1: 470 }, upper = { v0: 205, v1: 95 }, R = [24, 48, 72];
    const levels = (st, tag) => {
      [['v0', 'V₀'], ['v1', 'V₁']].forEach(([k, lab]) => {
        line(ctx, l, st[k], r, st[k], ce, 6);
        text(ctx, lab, l - 20, st[k], PAL.ink, { size: 22, align: 'right' });
        R.forEach((dy, j) => { line(ctx, l, st[k] - dy, r, st[k] - dy, alpha(ce, 0.55), 2); if (tag && k === 'v0') text(ctx, `R${'₁₂₃'[j]}`, l - 20, st[k] - dy, PAL.ink, { size: 17, align: 'right' }); });
      });
    };
    levels(lower, true); levels(upper, false);
    text(ctx, 'E₂', l - 80, lower.v1 - 60, PAL.ink, { size: 22, align: 'center' });
    text(ctx, 'E₁', l - 80, upper.v1 + 40, PAL.ink, { size: 22, align: 'center' });
    arrow(ctx, l - 80, lower.v1 - 90, l - 80, upper.v1 + 70, alpha(PAL.ink, 0.6), 3);
    /* A: rotational steps within v0 */
    const xa = 330; arrow(ctx, xa, lower.v0, xa, lower.v0 - R[0], PAL.ink, 3); arrow(ctx, xa + 30, lower.v0 - R[0], xa + 30, lower.v0 - R[1], PAL.ink, 3);
    /* B: v0 to v1 with rotational change */
    const xb = 500; [0, 1, 2].forEach((j) => arrow(ctx, xb + j * 30, lower.v0, xb + j * 30, lower.v1 - (j ? R[j - 1] : 0), PAL.ink, 3));
    /* C: lower to upper electronic state */
    const xc = 700; [0, 1, 2].forEach((j) => arrow(ctx, xc + j * 30, lower.v0 - (j === 2 ? R[0] : 0), xc + j * 30, j ? upper.v1 - (j - 1) * R[0] : upper.v0, PAL.ink, 3));
    [['A', xa + 15], ['B', xb + 30], ['C', xc + 30]].forEach(([s, x]) => text(ctx, s, x, 622, PAL.ink, { size: 24, weight: 600, align: 'center' }));
    hits.push({ x: xa + 15, y: lower.v0 - 30, r: 34, name: 'A: a rotational transition, within one vibrational level' });
    hits.push({ x: xb + 30, y: (lower.v0 + lower.v1) / 2, r: 50, name: 'B: a vibrational transition, within one electronic state (infrared)' });
    hits.push({ x: xc + 30, y: 360, r: 60, name: 'C: an electronic transition, to another electronic state' });
    /* braces on the right */
    const brace = (x, y1, y2, s) => {
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; const m = (y1 + y2) / 2; ctx.beginPath();
      ctx.moveTo(x, y1); ctx.quadraticCurveTo(x + 14, y1, x + 14, y1 + 14); ctx.lineTo(x + 14, m - 10); ctx.lineTo(x + 26, m); ctx.lineTo(x + 14, m + 10); ctx.lineTo(x + 14, y2 - 14); ctx.quadraticCurveTo(x + 14, y2, x, y2); ctx.stroke(); ctx.restore();
      text(ctx, s, x + 40, m, PAL.ink, { size: 20 });
    };
    brace(r + 20, lower.v0 - 80, lower.v0 - 4, 'rotational levels');
    brace(r + 230, lower.v1 - 80, lower.v0, 'vibrational levels');
    brace(r + 230, upper.v1 - 80, upper.v0 + 4, 'vibrational levels');
    text(ctx, 'electronic states', r + 260, 345, PAL.ink, { size: 20 });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE (unnumbered, the book's water and polarized light): moving. The wave
   arrives (kinematic: light travels), its field oscillates at the molecule, and the
   vibrations whose species matches the polarization grow from rest; the others stay
   still. 2D with an oblique y axis (into the page) so all three polarizations can be
   drawn. Light travels along x for z and y polarization, down along z for x.
===================================================================== */
(function () {
  const d = sim('sim-polarized', 640);
  const POL = { x: 'B_1', y: 'B_2', z: 'A_1' };
  const K = F.choice(d.controls, { label: '\\text{polarization}', options: [{ value: 'x', label: 'x' }, { value: 'y', label: 'y' }, { value: 'z', label: 'z' }], value: 'z', aria: 'the direction the light is polarized along', onInput: () => cy.reset() });
  const cy = cycle(() => 6, 1.2);
  let hits = []; F.hover(d.stage, () => hits);
  const Y = [Math.cos(0.6), -Math.sin(0.6)];   /* the oblique y direction on the canvas */
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const p = K.value, sp = POL[p], cr = C('representation');
    const t = Math.min(cy.now(), 6), f = 1.2, arrive = clamp(t / 1.5), grow = clamp((t - 1.5) / 3);
    const ph = TAU * f * t;
    /* the molecule and its axes */
    const mc = [360, 360], S = 170;
    water(ctx, mc[0], mc[1], S, [[0, 0], [0, 0], [0, 0]], 1);
    const g0 = [110, 590], gl = 70;
    arrow(ctx, g0[0], g0[1], g0[0] + gl, g0[1], PAL.ink, 3); text(ctx, 'x', g0[0] + gl + 14, g0[1], PAL.ink, { size: 20 });
    arrow(ctx, g0[0], g0[1], g0[0], g0[1] - gl, PAL.ink, 3); text(ctx, 'z', g0[0], g0[1] - gl - 16, PAL.ink, { size: 20, align: 'center' });
    arrow(ctx, g0[0], g0[1], g0[0] + Y[0] * gl * 0.75, g0[1] + Y[1] * gl * 0.75, PAL.ink, 3); text(ctx, 'y', g0[0] + Y[0] * gl * 0.75 + 14, g0[1] + Y[1] * gl * 0.75 - 6, PAL.ink, { size: 20 });
    /* the wave: travel direction u (canvas), field direction e (canvas) */
    const u = p === 'x' ? [0, 1] : [1, 0], e = p === 'x' ? [1, 0] : p === 'z' ? [0, -1] : Y;
    const start = p === 'x' ? [mc[0], 60] : [40, mc[1]], end = p === 'x' ? [mc[0], mc[1] - 120] : [mc[0] - 190, mc[1]];
    const len = Math.hypot(end[0] - start[0], end[1] - start[1]) * arrive, amp = 38, lam = 90;
    const wc = alpha(PAL.ink, 0.75);
    ctx.save(); ctx.strokeStyle = wc; ctx.lineWidth = 4; ctx.beginPath();
    for (let s = 0; s <= len; s += 3) { const a = amp * Math.sin(TAU * (s - len) / lam + ph); const x = start[0] + u[0] * s + e[0] * a, y = start[1] + u[1] * s + e[1] * a; if (s) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    ctx.stroke(); ctx.restore();
    hits.push({ x: (start[0] + end[0]) / 2, y: (start[1] + end[1]) / 2, r: 60, name: `light polarized along ${p}, travelling toward the molecule` });
    if (arrive >= 1) {
      const a = 60 * Math.sin(ph), fx = mc[0] - 250, fy = mc[1] - 190;
      if (Math.abs(a) > 4) arrow(ctx, fx, fy, fx + e[0] * a, fy + e[1] * a, PAL.ink, 4);
      text(ctx, `field along ${p}`, fx, fy + 80, PAL.ink, { size: 17, align: 'center' });
    }
    text(ctx, `${p}-polarized light, ${sp.replace('_', '_{') + '}'}`, 360, 600, cr, { size: 22, weight: 600, align: 'center' });
    /* the three vibrations */
    const lines = [];
    MODES.forEach((m, k) => {
      const yc = 140 + k * 190, xc = 900, on = times(sp, m.sp) === 'A_1';
      const s = on ? 0.2 * grow * Math.sin(ph) : 0;
      water(ctx, xc, yc, 110, m.d.map((v) => [v[0] * s, v[1] * s]), on ? 1 : 0.35);
      text(ctx, `${m.name}, ${m.sp.replace('_', '_{')}}`, 1030, yc - 14, on ? cr : alpha(PAL.ink, 0.6), { size: 22, weight: on ? 600 : 400 });
      text(ctx, on ? (grow > 0 ? 'excited' : 'waiting for the light') : 'not excited', 1030, yc + 18, on ? PAL.ink : alpha(PAL.ink, 0.6), { size: 17 });
      hits.push({ x: xc, y: yc, r: 90, name: `water's ${m.name} (${m.sp.replace('_', '')}, ${m.nu} cm⁻¹): ${on ? 'excited' : 'not excited'} by ${p}-polarized light` });
      const prod = times(sp, m.sp);
      lines.push(`\\text{${m.name}:}\\ A_1 \\otimes ${sp} \\otimes ${m.sp} = ${prod}`);
    });
    const hit = MODES.filter((m) => times(sp, m.sp) === 'A_1').map((m) => m.name);
    topline(ctx, p === 'z' ? `$z$-polarized light has $A_1$ symmetry, so it excites the symmetric stretch and the bend.`
      : p === 'x' ? `$x$-polarized light has $B_1$ symmetry, so it excites only the asymmetric stretch.`
      : `$y$-polarized light has $B_2$ symmetry, which no vibration of water shares, so nothing is excited.`);
    readout(d.readout, `\\kGamma(${p}) = ${sp} \\\\ ` + lines.join(' \\\\ '),
      hit.length ? `Only a product that is $A_1$ allows the transition from the ground state.` : `No product is $A_1$, so no transition is allowed.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE (unnumbered, the book's Raman level diagram): moving. The absorbed photon
   rises to the virtual state, then the emitted one falls to v = 1 of the chosen
   vibration (kinematic arrows: photons in and out). Energies in cm^-1 on one axis,
   0 to 26000 (a 450 nm photon is 22200); photon colours are their real colours (facts).
   No anti-Stokes: the text does not discuss it (orchestrator).
===================================================================== */
(function () {
  const d = sim('sim-raman', 620);
  const L = ctl(d.controls, { label: '\\klambda_{\\text{in}}', cls: 'wavelength', min: 450, max: 650, step: 1, value: 532, unit: 'nm', dec: 0, detents: [488, 532, 633], snap: true, aria: "the laser's wavelength", onInput: () => cy.reset() });
  const V = F.choice(d.controls, { label: '\\text{vibration}', options: MODES.map((m) => ({ value: m.key, label: m.name })), value: 'sym', aria: 'the vibration of water the scattering leaves excited', onInput: () => cy.reset() });
  const cy = cycle(() => 3.6, 1.4);
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const m = MODES.find((x) => x.key === V.value), nin = 1e7 / L.v, nout = nin - m.nu, lout = 1e7 / nout;
    const t = Math.min(cy.now(), 3.6), up = clamp(t / 1.5), down = clamp((t - 1.9) / 1.5);
    const box = { l: 200, r: 1300, t: 110, b: 570 };
    const ax = axes(ctx, box, [0, 1], [0, 26000], { nx: 0, ny: 0, yl: 'energy (cm⁻¹)', yc: C('wavenumber') });
    [0, 5000, 10000, 15000, 20000, 25000].forEach((v) => text(ctx, fmt(v, 0), box.l - 12, ax.Y(v), PAL.ink, { size: 17, align: 'right' }));
    const ce = C('energy'), x0 = 330, x1 = 900;
    line(ctx, x0 - 60, ax.Y(0), x1, ax.Y(0), ce, 5);
    line(ctx, x0 - 60, ax.Y(m.nu), x1, ax.Y(m.nu), ce, 5);
    line(ctx, x0 - 60, ax.Y(nin), x1, ax.Y(nin), alpha(ce, 0.8), 4, [6, 10]);
    text(ctx, 'virtual state', x1 + 20, ax.Y(nin), ce, { size: 20 });
    text(ctx, 'final state, v = 1', x1 + 20, ax.Y(m.nu) - 14, ce, { size: 20 });
    text(ctx, 'initial state, v = 0', x1 + 20, ax.Y(0) + 6, ce, { size: 20 });
    const xa = 480, xe = 720, cin = F.fact(spectral(L.v)), cout = F.fact(spectral(lout));
    if (up > 0) arrow(ctx, xa, ax.Y(0), xa, ax.Y(nin * up), cin, 6);
    if (down > 0) arrow(ctx, xe, ax.Y(nin), xe, ax.Y(nin - (nin - m.nu) * down), cout, 6);
    text(ctx, `absorbed photon, ${fmt(L.v, 0)} nm`, xa - 18, ax.Y(nin / 2), cin, { size: 20, weight: 600, align: 'right', bg: PAL.panel });
    if (down > 0) text(ctx, `emitted photon, ${fmt(lout, 0)} nm`, xe + 18, ax.Y((nin + m.nu) / 2), cout, { size: 20, weight: 600, bg: PAL.panel });
    F.vbracket(ctx, x0 - 90, ax.Y(m.nu), ax.Y(0), C('wavenumber'), `${m.nu} cm⁻¹`, 'left');
    hits.push({ x: xa, y: ax.Y(nin / 2), r: 30, name: `the absorbed photon: ${fmt(L.v, 0)} nm, ${fmt(nin, 0)} cm⁻¹` });
    hits.push({ x: xe, y: ax.Y((nin + m.nu) / 2), r: 30, name: `the emitted photon: ${fmt(lout, 0)} nm, ${fmt(nout, 0)} cm⁻¹` });
    hits.push({ x: (x0 + x1) / 2, y: ax.Y(m.nu), r: 20, name: `v = 1 of the ${m.name}, ${m.nu} cm⁻¹ above the ground state` });
    topline(ctx, `A ${fmt(L.v, 0)} nm photon in leaves ${m.nu} cm⁻¹ in the ${m.name}, so the scattered photon comes out at ${fmt(lout, 0)} nm.`);
    readout(d.readout, `\\knut_{\\text{out}} = \\knut_{\\text{in}} - \\knut_{\\text{vib}} \\\\ \\knut_{\\text{out}} = ${fmt(nin, 0)} - ${m.nu} = ${fmt(nout, 0)}\\ \\text{cm}^{-1}`,
      `The scattered photon's wavelength is $\\klambda_{\\text{out}} = ${fmt(lout, 0)}\\ \\text{nm}$.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
