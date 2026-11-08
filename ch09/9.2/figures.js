/* Figures for section 9.2 The H₂⁺ Prototypical Species. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.2'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, cycle, register, begin, line, dot, text, topline, axes, plot, shade, fmt } = F;
const HARTREE_EV = 27.2114, A0_PM = 52.918;

/* the other sign of psi: the hue a clear step toward whichever of ink and ground lies farther from it in lightness,
   so the two tones part on either theme whatever hue the wavefunction wears (6.6's helper) */
const lightOf = (c) => { const m = /^#([0-9a-f]{6})$/i.exec(c) ? [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16)) : (c.match(/[\d.]+/g) || [0, 0, 0]).slice(0, 3).map(Number); return (0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2]) / 255; };
const otherSign = (cw) => { const l = lightOf(cw), far = Math.abs(lightOf(PAL.ink) - l) > Math.abs(lightOf(PAL.panel) - l) ? PAL.ink : PAL.panel; return F.mixColor(cw, far, 0.55); };

/* ---------- Figure 9.2.1: the electron over the two protons ----------
   The plane of the two protons, in Bohr radii, protons at (±R/2, 0). The electron's potential energy from (9.2.1),
   V = −e²/4πε₀r_A − e²/4πε₀r_B + e²/4πε₀R, in eV (27.21 eV per hartree). Beneath, its attraction part on one scale,
   darker where it is lower, from 0 to −60 eV (cut there; it falls without bound at each proton). The reader drags the
   electron; R is a slider (book: no numbers; opens on R = 2.0 a₀ = 106 pm, the separation the next sections use).
   x: −5 to 5 a₀, y: −1.9 to 1.9 a₀, one scale. Still: nothing in it moves by itself. */
(function () {
  const d = F.sim(root, 'sim-h2plus-electron', 620);
  const R = ctl(d.controls, { label: '\\kR', cls: 'length', key: 'R', min: 0.8, max: 5, step: 0.05, value: 2, fmt: (v) => `${fmt(v * A0_PM, 0)} pm`, detents: [2], aria: 'the distance between the protons' });
  const X = ctl(d.controls, { label: 'x', cls: 'length', key: 'x', min: -4.5, max: 4.5, step: 0.05, value: 0.3, unit: 'a₀', dec: 2, aria: 'the x coordinate of the electron, in Bohr radii' });
  const Y = ctl(d.controls, { label: 'y', cls: 'length', key: 'y', min: -1.7, max: 1.7, step: 0.05, value: 1.0, unit: 'a₀', dec: 2, aria: 'the y coordinate of the electron, in Bohr radii' });
  const P = F.drag(d, { x: X, y: Y });
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const rr = R.v, cl = C('length'), ce = C('energy');
    const box = { l: 140, r: 1260, t: 110, b: 535 };
    /* the attraction, shaded under the frame */
    const Vatt = (x, y) => -HARTREE_EV * (1 / Math.hypot(x + rr / 2, y) + 1 / Math.hypot(x - rr / 2, y));
    const sx = (box.r - box.l) / 10, cell = 8;
    ctx.save();
    for (let px = box.l; px < box.r; px += cell) for (let py = box.t; py < box.b; py += cell) {
      const x = (px + cell / 2 - box.l) / sx - 5, y = 1.9 - (py + cell / 2 - box.t) / sx;
      const k = Math.min(1, -Vatt(x, y) / 60);
      ctx.fillStyle = alpha(ce, 0.06 + 0.6 * k * k); ctx.fillRect(px, py, cell + 0.5, cell + 0.5);
    }
    ctx.restore();
    const ax = axes(ctx, box, [-5, 5], [-1.9, 1.9], { nx: 10, ny: 0, xl: 'position along the axis (a₀)', yl: '', xc: cl, yc: cl, fx: (v) => fmt(v, 0) });
    const e = [X.v, Y.v], A = { x: ax.X(-rr / 2), y: ax.Y(0) }, B = { x: ax.X(rr / 2), y: ax.Y(0) }, E = { x: ax.X(e[0]), y: ax.Y(e[1]) };
    const ra = Math.hypot(e[0] + rr / 2, e[1]), rb = Math.hypot(e[0] - rr / 2, e[1]);
    line(ctx, A.x, A.y, E.x, E.y, cl, 3);
    line(ctx, B.x, B.y, E.x, E.y, cl, 3);
    line(ctx, A.x, A.y + 34, B.x, B.y + 34, cl, 3);
    line(ctx, A.x, A.y + 26, A.x, A.y + 42, cl, 3); line(ctx, B.x, B.y + 26, B.x, B.y + 42, cl, 3);
    text(ctx, 'R', (A.x + B.x) / 2, A.y + 58, cl, { size: 24, weight: 600, align: 'center', bg: PAL.panel });
    const mid = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });
    const ma = mid(A, E), mb = mid(B, E);
    text(ctx, 'r_A', ma.x - 14, ma.y, cl, { size: 24, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, 'r_B', mb.x + 14, mb.y, cl, { size: 24, weight: 600, align: 'left', bg: PAL.panel });
    hits.push({ x: ma.x, y: ma.y, r: 16, name: `r_A = ${fmt(ra * A0_PM, 0)} pm, from proton A to the electron` });
    hits.push({ x: mb.x, y: mb.y, r: 16, name: `r_B = ${fmt(rb * A0_PM, 0)} pm, from proton B to the electron` });
    hits.push({ x: (A.x + B.x) / 2, y: A.y + 40, r: 16, name: `R = ${fmt(rr * A0_PM, 0)} pm, between the protons` });
    dot(ctx, A.x, A.y, F.el('p+'), true, 13); dot(ctx, B.x, B.y, F.el('p+'), true, 13);
    text(ctx, 'A', A.x, A.y - 30, PAL.ink, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'B', B.x, B.y - 30, PAL.ink, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    hits.push({ x: A.x, y: A.y, r: 16, name: 'proton A' }, { x: B.x, y: B.y, r: 16, name: 'proton B' });
    P.draw(ctx, ax, PAL.ink);
    dot(ctx, E.x, E.y, F.el('e-'), true, 10);
    hits.push({ x: E.x, y: E.y, r: 18, name: 'the electron: drag it' });
    F.legend(ctx, ax, [{ s: 'the electron\'s attraction to both protons', ramp: [alpha(ce, 0.06), alpha(ce, 0.66)], ends: ['0 eV', '−60 eV or lower'] }], { corner: 'above' });
    const va = -HARTREE_EV / ra, vb = -HARTREE_EV / rb, vr = HARTREE_EV / rr;
    const a = +va.toFixed(1), b = +vb.toFixed(1), c = +vr.toFixed(1), V = a + b + c;
    const between = Math.abs(e[0]) < rr / 2 && Math.abs(e[1]) < 0.6;
    topline(ctx, between ? `Between the protons both pull on the electron: its potential energy is ${fmt(V, 1)} eV.`
      : `Here the electron's potential energy is ${fmt(V, 1)} eV.`);
    tex(d.readout, `V = -\\dfrac{\\ke^2}{4\\pi\\epsilon_0\\krA} - \\dfrac{\\ke^2}{4\\pi\\epsilon_0\\krB} + \\dfrac{\\ke^2}{4\\pi\\epsilon_0\\kR} \\\\ V = ${fmt(a, 1)}\\ \\text{eV} ${b < 0 ? '-' : '+'} ${fmt(Math.abs(b), 1)}\\ \\text{eV} + ${fmt(c, 1)}\\ \\text{eV} = ${fmt(V, 1)}\\ \\text{eV}`, false, { values: false });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- Figure 9.2.2 + the note's animation: two orbitals approaching ----------
   Atomic units. The pair is 1s + 1s (as in 9.2.2) or 2p_z + 2p_z (the note), each orbital's lobe toward the other
   atom positive, so the sum puts like signs together. ψ = C(φ_A ± φ_B), C = 1/√(2(1 ± S)); S for 1s is (9.3.9),
   S for the 2p pair is integrated once, at load, in cylindrical coordinates on a grid of R. The transport runs the
   approach: R from 8 to 1 a₀ (1s) or 14 to 2 a₀ (2p) over 5 s. Top: the signed map of ψ in the plane of the nuclei,
   one diverging scale (sign by hue, size by depth), fixed per pair; below: ψ_A, ψ_B (dashed), ψ, and ψ² shaded,
   along the axis. The book's phase rotation is dropped: a stationary state's density does not move. */
(function () {
  const d = F.sim(root, 'sim-orbitals', 740);
  const cy = cycle(() => 5, 1.2);
  const PAIR = F.choice(d.controls, { label: '\\text{orbitals}', key: 'pair', options: [{ value: '1s', label: '1s + 1s' }, { value: '2p', label: '2p_z + 2p_z' }], value: '1s', aria: 'which atomic orbitals combine', onInput: () => cy.reset() });
  const SIGN = F.choice(d.controls, { label: '\\text{combination}', key: 'sign', options: [{ value: '+', label: 'sum' }, { value: '-', label: 'difference' }], value: '+', aria: 'whether the orbitals are added or subtracted' });
  const N1 = 1 / Math.sqrt(Math.PI), N2 = 1 / (4 * Math.sqrt(2 * Math.PI));
  /* phi centred at c on the axis, its positive lobe pointing the way s (+1 or −1) */
  const phi = (pair, c, s) => (x, y) => {
    const dx = x - c, r = Math.hypot(dx, y);
    return pair === '1s' ? N1 * Math.exp(-r) : N2 * s * dx * Math.exp(-r / 2);
  };
  const S1 = (R) => Math.exp(-R) * (1 + R + R * R / 3);
  /* the 2p overlap on a grid of R, integrated over z and the cylinder radius ρ */
  const S2tab = (() => {
    const out = [];
    for (let i = 0; i <= 160; i++) {
      const R = i * 0.1, a = phi('2p', -R / 2, 1), b = phi('2p', R / 2, -1);
      let s = 0; const dz = 0.2, dr = 0.2;
      for (let z = -22; z <= 22; z += dz) for (let rho = dr / 2; rho < 16; rho += dr) s += a(z, rho) * b(z, rho) * 2 * Math.PI * rho * dr * dz;
      out.push(s);
    }
    return out;
  })();
  const S2 = (R) => { const k = Math.min(159.999, R / 0.1), i = Math.floor(k), f = k - i; return S2tab[i] * (1 - f) + S2tab[i + 1] * f; };
  const CFG = { '1s': { R0: 8, R1: 1, X: 7, Y: 2.1, M: 0.62, Y2: 0.8 }, '2p': { R0: 14, R1: 2, X: 14, Y: 4.2, M: 0.085, Y2: 0.11 } };
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const pair = PAIR.value, sg = SIGN.value === '+' ? 1 : -1, g = CFG[pair];
    const k = F.ease ? F.ease.smooth(Math.min(1, cy.now() / 5)) : Math.min(1, cy.now() / 5);
    const R = g.R0 + (g.R1 - g.R0) * k;
    const S = pair === '1s' ? S1(R) : S2(R), Cn = 1 / Math.sqrt(2 * (1 + sg * S));
    const fa = phi(pair, -R / 2, 1), fb = phi(pair, R / 2, -1), psi = (x, y) => Cn * (fa(x, y) + sg * fb(x, y));
    const cw = C('wavefunction'), cn = otherSign(cw), cp = C('probability-density'), cl = C('length');
    /* the map */
    const mb = { l: 140, r: 1260, t: 100, b: 340 };
    const sx = (mb.r - mb.l) / (2 * g.X), ycell = (mb.b - mb.t) / sx / 2, cell = 7;
    ctx.save();
    for (let px = mb.l; px < mb.r; px += cell) for (let py = mb.t; py < mb.b; py += cell) {
      const x = (px + cell / 2 - mb.l) / sx - g.X, y = ycell - (py + cell / 2 - mb.t) / sx;
      const v = psi(x, y) / g.M, a = Math.min(1, Math.abs(v));
      if (a < 0.02) continue;
      ctx.fillStyle = alpha(v > 0 ? cw : cn, 0.85 * Math.pow(a, 0.75)); ctx.fillRect(px, py, cell + 0.5, cell + 0.5);
    }
    ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 1.5; ctx.strokeRect(mb.l, mb.t, mb.r - mb.l, mb.b - mb.t); ctx.restore();
    const XA = mb.l + (g.X - R / 2) * sx, XB = mb.l + (g.X + R / 2) * sx, YM = (mb.t + mb.b) / 2;
    dot(ctx, XA, YM, PAL.ink, true, 7); dot(ctx, XB, YM, PAL.ink, true, 7);
    text(ctx, 'A', XA, mb.t - 16, PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'B', XB, mb.t - 16, PAL.ink, { size: 20, weight: 600, align: 'center' });
    hits.push({ x: XA, y: YM, r: 14, name: 'nucleus A' }, { x: XB, y: YM, r: 14, name: 'nucleus B' });
    hits.push({ x: (XA + XB) / 2, y: YM, r: 18, name: `the midpoint: ψ = ${fmt(psi(0, 0), 3)}` });
    F.legend(ctx, { l: mb.l, r: mb.r, t: mb.t - 60, b: mb.t - 30 }, [{ s: 'ψ in the plane of the nuclei', ramp: [cn, PAL.panel, cw], ends: ['ψ < 0', 'ψ > 0'] }], { corner: 'top', panel: false });
    /* the slice along the axis */
    const box = { l: 140, r: 1260, t: 420, b: 680 };
    const ax = axes(ctx, box, [-g.X, g.X], [-g.Y2, g.Y2], { nx: pair === '1s' ? 7 : 7, ny: 4, xl: 'position along the axis (a₀)', yl: 'ψ and ψ² (atomic units)', xc: cl, yc: cw, fx: (v) => fmt(v, 0) });
    line(ctx, box.l, ax.Y(0), box.r, ax.Y(0), alpha(PAL.ink, 0.3), 2);
    const dens = (x) => psi(x, 0) * psi(x, 0) * (pair === '1s' ? 1 : 10);
    shade(ctx, ax, dens, 0, -g.X, g.X, cp, { alpha: 0.35 });
    plot(ctx, ax, (x) => Cn * fa(x, 0), alpha(cw, 0.7), { w: 3, dash: [10, 10] });
    plot(ctx, ax, (x) => Cn * sg * fb(x, 0), alpha(cw, 0.7), { w: 3, dash: [10, 10] });
    plot(ctx, ax, (x) => psi(x, 0), cw, { w: 5 });
    line(ctx, ax.X(0), box.t, ax.X(0), box.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
    dot(ctx, ax.X(0), ax.Y(psi(0, 0)), cw, true, 9);
    F.legend(ctx, ax, [{ s: 'ψ', color: cw, w: 5 }, { s: 'each atom\'s share', color: alpha(cw, 0.7), w: 3, dash: [10, 10] }, { s: pair === '1s' ? 'ψ²' : 'ψ² × 10', kind: 'swatch', color: alpha(cp, 0.35) }], { corner: 'tr' });
    const mid = psi(0, 0), rho = mid * mid;
    const node = sg < 0;
    topline(ctx, node ? `At $\\kR = ${fmt(R * A0_PM, 0)}$ pm the difference has a node at the midpoint: $\\kpsi = 0$ there.`
      : `At $\\kR = ${fmt(R * A0_PM, 0)}$ pm the sum puts a density of ${fmt(rho, 4)} at the midpoint.`);
    const at = pair === '1s' ? '1s' : '2p';
    const lhs = pair === '1s' ? (sg > 0 ? '\\kpsip' : '\\kpsim') : `\\kpsi_{${sg > 0 ? '+' : '-'}}`;
    const comb = pair === '1s' ? `(\\konesA ${sg > 0 ? '+' : '-'} \\konesB)` : `(${at}_A ${sg > 0 ? '+' : '-'} ${at}_B)`;
    tex(d.readout, `${lhs} = C_{${sg > 0 ? '+' : '-'}}${comb} \\\\ C_{${sg > 0 ? '+' : '-'}} = \\dfrac{1}{\\sqrt{2(1 ${sg > 0 ? '+' : '-'} S)}} = ${fmt(Cn, 3)} \\\\ ${lhs}^2(\\text{midpoint}) = ${fmt(rho, 4)}\\ a_0^{-3}`);
    hits.push({ x: ax.X(0), y: ax.Y(mid), r: 14, name: `ψ at the midpoint, ${fmt(mid, 3)}` });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
