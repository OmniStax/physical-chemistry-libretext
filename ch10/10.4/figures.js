/* Figures for section 10.4 Photoelectron Spectroscopy. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['10.4'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* a seeded generator, so the same electrons fly on every load */
const rng = (s) => () => { s |= 0; s = (s + 0x6d2b79f5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
const poisson = (S, v) => { let p = Math.exp(-S); for (let k = 1; k <= v; k++) p *= S / k; return p; };
/* a band: its adiabatic ionization energy, vibrational spacing (eV) and Poisson parameter S of the
   displaced-oscillator progression (long for a bonding orbital, short for a nonbonding one), its weight */
const peaks = (b, n = 24) => Array.from({ length: n }, (_, v) => ({ v, E: b.ad + v * b.w, p: b.I * poisson(b.S, v) }));
const vertical = (b) => peaks(b).reduce((a, q) => (q.p > a.p ? q : a)).E;

/* =====================================================================
   FIGURE 10.4.1: the analyzer as a filter for kinetic energy.
   Moving (the book's dashed electron path is a kinematic arrow, rule
   24.1): photons cross from the lamp to the sample, electrons rise from
   the sample into a hemispherical analyzer and follow Kepler ellipses in
   its field: entering at the mean radius R0 with kinetic energy KE, an
   electron turns through 180 deg to radius R0 k/(2 - k), k = KE / pass
   energy; it reaches the exit slit only when k is close to 1, and
   otherwise strikes a wall. The sample is water, the lamp helium (He I,
   21.22 eV, named in the caption); water's bands from the page's table
   (12.6, 14.7, 18.5 eV), each spread into its vibrational progression
   (our parameters: 1b1 adiabatic 12.62 eV, spacing 0.40 eV, S 0.2;
   3a1 13.75, 0.125, 8; 1b2 17.20, 0.18, 7.4). The slider is the pass
   energy, 0.5 to 10 eV, opening on 8.60 eV, where 1b1's electrons pass.
   Below, the counts the detector has recorded at each pass energy the
   reader has visited, over the full spectrum drawn faint and dashed.
   The flight is drawn slowly (about 0.9 s through the analyzer); real
   electrons take some tens of nanoseconds.
===================================================================== */
(function () {
  const d = sim('sim-analyzer', 850);
  const HV = 21.22;
  const BANDS = [
    { lab: '1b₁', ad: 12.62, w: 0.40, S: 0.2, I: 1.0 },
    { lab: '3a₁', ad: 13.75, w: 0.125, S: 8, I: 0.8 },
    { lab: '1b₂', ad: 17.20, w: 0.18, S: 7.4, I: 0.6 },
  ];
  BANDS.forEach((b) => { b.vert = vertical(b); b.ke = HV - b.vert; });
  const cy = F.cycle(() => Infinity, 0);
  const EP = ctl(d.controls, { label: 'E_{\\text{pass}}', cls: 'energy', key: 'pass', min: 0.5, max: 10, step: 0.02, value: +(HV - BANDS[0].vert).toFixed(2), unit: 'eV', dec: 2,
    aria: 'the pass energy of the analyzer in electronvolts', specials: BANDS.map((b) => ({ at: +b.ke.toFixed(2), label: `electrons from ${b.lab}` })) });
  const SIG = 0.09;   /* the analyzer's resolution, eV */
  const ALL = BANDS.flatMap((b) => peaks(b).map((q) => ({ ke: HV - q.E, p: q.p, b })));
  const rate = (E) => ALL.reduce((a, q) => a + q.p * Math.exp(-(((q.ke - E) / SIG) ** 2) / 2), 0);
  const RMAX = Math.max(...Array.from({ length: 951 }, (_, i) => rate(0.5 + i * 0.01)));
  /* the electrons: the i-th leaves at i x 0.09 s, its kinetic energy drawn from the bands */
  const DT = 0.09, cum = []; let tot = 0; ALL.forEach((q) => { tot += q.p; cum.push(tot); });
  const keOf = (i) => { const r = rng(4100 + i), u = r() * tot; const k = cum.findIndex((c) => c >= u); const g = Math.sqrt(-2 * Math.log(r() + 1e-9)) * Math.cos(2 * Math.PI * r()); return ALL[k].ke + 0.03 * g; };
  const visited = new Map();
  const hits = []; F.hover(d.stage, () => hits);
  const O = { x: 900, y: 400 }, R0 = 200, RI = 140, RO = 260, SL = 14;
  const SAMPLE = { x: O.x - R0, y: 520 }, LAMP = { x: 250, y: 520 }, DET = { x: O.x + R0, y: 490 };
  const V = 520;   /* drawn speed, units per second */
  /* where electron of energy ke is after travelling s units, and whether it is still flying */
  function at(ke, s) {
    const s1 = SAMPLE.y - O.y;
    if (s < s1) return { x: SAMPLE.x, y: SAMPLE.y - s, live: true };
    let rest = s - s1;
    const k = ke / EP.v, r2 = k < 1.98 ? R0 * k / (2 - k) : 1e6;
    const r = (ph) => 2 * R0 * r2 / ((R0 + r2) + (r2 - R0) * Math.cos(ph));
    let ph = 0;
    while (ph < Math.PI) {
      const rr = r(ph), dph = 0.01, step = Math.hypot(rr * dph, r(ph + dph) - rr);
      if (rr < RI + 4 || rr > RO - 4) return { x: O.x - rr * Math.cos(ph), y: O.y - rr * Math.sin(ph), live: false, hit: true, sAt: s - rest };
      if (rest < step) { const p = ph + dph * rest / step, q = r(p); return { x: O.x - q * Math.cos(p), y: O.y - q * Math.sin(p), live: true }; }
      rest -= step; ph += dph;
    }
    if (Math.abs(r2 - R0) > SL) return { x: O.x + r2, y: O.y, live: false, hit: true, sAt: s - rest };
    if (rest < DET.y - O.y) return { x: O.x + r2, y: O.y + rest, live: true };
    return { x: DET.x, y: DET.y, live: false, hit: false };
  }
  function draw() {
    const { ctx, W } = begin(d.c);
    const t0 = cy.now(), t = Number.isFinite(t0) ? t0 : 3;
    const ce = C('energy'), E = EP.v;
    const near = BANDS.reduce((a, b) => (Math.abs(b.ke - E) < Math.abs(a.ke - E) ? b : a));
    const pass = rate(E) / RMAX > 0.03;
    topline(ctx, pass ? `At a pass energy of ${fmt(E, 2)} eV, electrons from ${near.lab} reach the detector; all others strike the walls.`
      : `No electrons have ${fmt(E, 2)} eV of kinetic energy, so none reach the detector.`);
    hits.length = 0;
    /* the analyzer: two hemispheres, their gap the electrons' road */
    ctx.save(); ctx.lineWidth = 6; ctx.strokeStyle = PAL.ink;
    ctx.beginPath(); ctx.arc(O.x, O.y, RI, Math.PI, 2 * Math.PI); ctx.stroke();
    ctx.beginPath(); ctx.arc(O.x, O.y, RO, Math.PI, 2 * Math.PI); ctx.stroke(); ctx.restore();
    line(ctx, O.x - RO, O.y, O.x - R0 - SL, O.y, PAL.ink, 6); line(ctx, O.x - R0 + SL, O.y, O.x - RI, O.y, PAL.ink, 6);
    line(ctx, O.x + RI, O.y, O.x + R0 - SL, O.y, PAL.ink, 6); line(ctx, O.x + R0 + SL, O.y, O.x + RO, O.y, PAL.ink, 6);
    text(ctx, 'hemispherical analyzer', O.x, O.y - RO - 18, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'entrance slit', O.x - R0 - 24, O.y + 26, PAL.muted, { size: 17, align: 'right' });
    text(ctx, 'exit slit', O.x + R0 + 22, O.y + 26, PAL.muted, { size: 17 });
    hits.push({ x: O.x, y: O.y - R0, r: 60, name: `the analyzer: its field bends electrons of ${fmt(E, 2)} eV round the middle of the gap` });
    /* sample, lamp, detector */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.strokeRect(SAMPLE.x - 40, SAMPLE.y - 10, 80, 40); ctx.restore();
    text(ctx, 'water vapour', SAMPLE.x, SAMPLE.y + 56, PAL.ink, { size: 18, align: 'center' });
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.15); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.roundRect(LAMP.x - 70, LAMP.y - 30, 110, 60, 10); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'He lamp, 21.22 eV', LAMP.x - 15, LAMP.y + 56, PAL.ink, { size: 18, align: 'center' });
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.strokeRect(DET.x - 30, DET.y - 6, 60, 40); ctx.restore();
    text(ctx, 'detector', DET.x + 42, DET.y + 18, PAL.ink, { size: 18, base: 'middle' });
    hits.push({ x: SAMPLE.x, y: SAMPLE.y + 10, r: 40, name: 'the sample, water vapour' }, { x: LAMP.x, y: LAMP.y, r: 50, name: 'a helium lamp: photons of 21.22 eV' }, { x: DET.x, y: DET.y + 14, r: 34, name: 'the detector, which counts the electrons that pass' });
    /* photons, wavy, crossing to the sample */
    for (let i = 0; i < 4; i++) {
      const f = ((t * 0.9 + i / 4) % 1), x0 = LAMP.x + 45 + f * (SAMPLE.x - 50 - LAMP.x - 45);
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 2.5; ctx.beginPath();
      for (let k = 0; k <= 30; k++) { const x = x0 + k * 2, y = LAMP.y + 8 * Math.sin(k * 0.8); if (k) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
      ctx.stroke(); ctx.restore();
    }
    /* electrons */
    const LIFE = 2.2;
    const i1 = Math.floor(t / DT), i0 = Math.max(0, Math.floor((t - LIFE) / DT));
    for (let i = i0; i <= i1; i++) {
      const age = t - i * DT; if (age < 0) continue;
      const ke = keOf(i), p = at(ke, age * V);
      if (!p.live && p.hit) {
        /* it struck a wall (age * V - p.sAt) / V seconds ago: fade over 0.35 s */
        const k = 1 - Math.min(1, (age * V - p.sAt) / V / 0.35); if (k <= 0) continue;
        ctx.save(); ctx.globalAlpha = k; dot(ctx, p.x, p.y, F.el('e-'), true, 5); ctx.restore(); continue;
      }
      if (!p.live) continue;
      dot(ctx, p.x, p.y, F.el('e-'), true, 6);
    }
    hits.push({ x: SAMPLE.x, y: O.y + 70, r: 30, name: 'photoelectrons rising into the analyzer' });
    /* the spectrum recorded so far */
    const box = { l: 150, r: W - 90, t: 680, b: 790 };
    const ax = axes(ctx, box, [0, 10], [0, 1.1], { nx: 10, ny: 0, xl: 'kinetic energy KE (eV)', xc: ce, yl: 'counts' });
    F.plot(ctx, ax, (x) => rate(x) / RMAX, alpha(PAL.ink, 0.35), { w: 2, dash: [10, 10] });
    const bin = Math.round(E / 0.05);
    const grow = Number.isFinite(t0) ? Math.min(1, t0 / 1.5) : 1;
    visited.set(bin, Math.max(visited.get(bin) || 0, grow));
    const bw = Math.max(2, ax.X(0.05) - ax.X(0));
    visited.forEach((g, b) => {
      const x = b * 0.05, h = rate(x) / RMAX * g;
      ctx.save(); ctx.fillStyle = b === bin ? ce : alpha(ce, 0.6); ctx.fillRect(ax.X(x) - bw / 2, ax.Y(h), bw, ax.Y(0) - ax.Y(h)); ctx.restore();
    });
    line(ctx, ax.X(E), box.t, ax.X(E), box.b, alpha(ce, 0.9), 3, [4, 8]);
    BANDS.forEach((b) => text(ctx, b.lab, ax.X(b.ke), ax.Y(rate(b.ke) / RMAX) - 14, PAL.ink, { size: 18, align: 'center', bg: PAL.panel }));
    tex(d.readout, `\\kKE = h\\knu - \\kIE \\\\ \\kKE = ${fmt(HV, 2)}\\ \\text{eV} - ${fmt(near.vert, 2)}\\ \\text{eV} = ${fmt(near.ke, 2)}\\ \\text{eV}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 10.4.2 + 10.4.4: vertical against adiabatic ionization.
   Still: the slider is how much longer the ion's bond is; nothing has a
   time. H2 and H2+ as harmonic oscillators with Huber and Herzberg's
   constants: H2 R_e 74.14 pm, omega_e 4401.2 cm-1; H2+ R_e 105.2 pm,
   omega_e 2321.7 cm-1; adiabatic ionization energy 15.43 eV; reduced mass
   0.50391 u. The Franck-Condon factors |<0''|v'>|^2 are computed on a
   grid from the two sets of Hermite functions. Energy axis broken: the
   ion's panel 15.0 to 18.6 eV above the neutral's -0.4 to 2.2 eV, one
   scale (62 units per eV) in both; R 30 to 200 pm. The sticks on the
   right share the ion's energy axis. Slider DeltaR 0 to 45 pm, opening on
   H2's 31.1 pm. With the frequencies of the two oscillators different,
   DeltaR = 0 still leaves a weak v' = 2 stick (about 5 %).
===================================================================== */
(function () {
  const d = sim('sim-franck', 690);
  const DR = ctl(d.controls, { label: '\\Delta \\kR', cls: 'length', key: 'dR', min: 0, max: 45, step: 0.1, value: 31.1, unit: 'pm', dec: 1,
    aria: 'how much longer the bond of the ion is than that of the neutral, in picometres', specials: [{ at: 31.1, label: 'H₂ to H₂⁺' }, { at: 0, label: 'no change' }] });
  const HB = 1.054571817e-34, MU = 0.50391 * 1.66053907e-27, CM = 2 * Math.PI * 2.99792458e10;
  const W0 = 4401.2, W1 = 2321.7, RE0 = 74.14, IEAD = 15.426;
  const al = (wn) => MU * CM * wn / HB * 1e-24;   /* pm^-2 */
  const A0 = al(W0), A1 = al(W1), HW0 = W0 * 1.23984e-4, HW1 = W1 * 1.23984e-4;
  function herm(alp, x0, v, xs) {
    const s = Math.pow(alp, 0.25), out = [];
    xs.forEach((x) => {
      const y = Math.sqrt(alp) * (x - x0); let p0 = Math.pow(Math.PI, -0.25) * Math.exp(-y * y / 2), p1 = Math.SQRT2 * y * p0;
      if (v === 0) { out.push(s * p0); return; }
      for (let k = 1; k < v; k++) { const p2 = Math.sqrt(2 / (k + 1)) * y * p1 - Math.sqrt(k / (k + 1)) * p0; p0 = p1; p1 = p2; }
      out.push(s * p1);
    });
    return out;
  }
  const XS = Array.from({ length: 1601 }, (_, i) => -100 + i * 0.25), DX = 0.25;
  const fcOf = (dR) => { const g = herm(A0, RE0, 0, XS.map((x) => x + RE0)); return Array.from({ length: 14 }, (_, v) => { const h = herm(A1, RE0 + dR, v, XS.map((x) => x + RE0)); let s = 0; for (let i = 0; i < XS.length; i++) s += g[i] * h[i]; s *= DX; return s * s; }); };
  const hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits.length = 0;
    const dR = DR.v, RE1 = RE0 + dR, fc = fcOf(dR), vmax = fc.indexOf(Math.max(...fc));
    const ce = C('energy'), cl = C('length');
    const ivert = IEAD + vmax * HW1;
    topline(ctx, vmax === 0 ? 'The band has one main peak, and the vertical and adiabatic ionization energies are equal.'
      : `The tallest peak is v′ = ${vmax}, ${fmt(ivert - IEAD, 2)} eV above the adiabatic ionization energy.`);
    const S = 62, top = { l: 140, r: 760, t: 110, b: 110 + 4 * S }, bot = { l: 140, r: 760, t: 400, b: 400 + 3 * S };
    const axT = axes(ctx, top, [30, 200], [15, 19], { nx: 0, ny: 4, yl: 'energy (eV)', yc: ce });
    const axB = axes(ctx, bot, [30, 200], [-0.5, 2.5], { nx: 0, ny: 3 });
    [50, 100, 150, 200].forEach((r) => text(ctx, `${r}`, axB.X(r), bot.b + 24, cl, { size: 17, align: 'center' }));
    text(ctx, 'bond length R (pm)', (bot.l + bot.r) / 2, bot.b + 52, cl, { size: 20, align: 'center' });
    /* the break in the energy axis */
    [top.b + 22, bot.t - 22].forEach((y) => line(ctx, top.l - 12, y + 6, top.l + 12, y - 6, PAL.ink, 2));
    const pot = (ax, alp, hw, Re, E0, lo, hi) => F.plot(ctx, ax, (R) => E0 - hw / 2 + 0.5 * hw * alp * (R - Re) ** 2, ce, { w: 4, x: [lo, hi] });
    pot(axB, A0, HW0, RE0, 0, 30, 200);
    pot(axT, A1, HW1, RE1, IEAD, 30, 200);
    text(ctx, 'H₂', axB.X(125), axB.Y(1.9), PAL.ink, { size: 22, weight: 600 });
    text(ctx, 'H₂⁺', axT.X(42), axT.Y(17.7), PAL.ink, { size: 22, weight: 600 });
    /* levels: the neutral's, and the ion's, each between its turning points; an ion level as strong as its FC factor */
    for (let v = 0; v < 4; v++) { const E = v * HW0, x = Math.sqrt((2 * v + 1) / A0); if (E > 2.1) break; line(ctx, axB.X(RE0 - x), axB.Y(E), axB.X(RE0 + x), axB.Y(E), alpha(ce, v ? 0.45 : 1), v ? 2 : 3); }
    const fmax = Math.max(...fc);
    for (let v = 0; v < 13; v++) {
      const E = IEAD + v * HW1, x = Math.sqrt((2 * v + 1) / A1); if (E > 18.9) break;
      line(ctx, axT.X(RE1 - x), axT.Y(E), axT.X(RE1 + x), axT.Y(E), alpha(ce, 0.25 + 0.75 * fc[v] / fmax), 2 + 3 * fc[v] / fmax);
      hits.push({ x: axT.X(RE1), y: axT.Y(E), r: 8, name: `ion level v′ = ${v}: ${fmt(E, 2)} eV, Franck–Condon factor ${fmt(fc[v], 3)}` });
    }
    /* the neutral's v'' = 0 density, and the strip of bond lengths it projects straight up */
    const sd = 1 / Math.sqrt(2 * A0), w = 2 * sd;
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.08); ctx.fillRect(axB.X(RE0 - w), top.t, axB.X(RE0 + w) - axB.X(RE0 - w), bot.b - top.t); ctx.restore();
    ctx.save(); ctx.fillStyle = alpha(ce, 0.35); ctx.beginPath(); ctx.moveTo(axB.X(RE0 - 3 * sd), axB.Y(0));
    for (let k = -3; k <= 3.001; k += 0.1) ctx.lineTo(axB.X(RE0 + k * sd), axB.Y(0) - 46 * Math.exp(-k * k / 2));
    ctx.lineTo(axB.X(RE0 + 3 * sd), axB.Y(0)); ctx.closePath(); ctx.fill(); ctx.restore();
    hits.push({ x: axB.X(RE0), y: axB.Y(0) - 20, r: 24, name: "the neutral's lowest vibrational level, v″ = 0, and where its bond length is found" });
    /* arrows: vertical straight up, adiabatic to v' = 0 */
    F.arrow(ctx, axB.X(RE0) - 6, axB.Y(0), axB.X(RE0) - 6, axT.Y(ivert), ce, 4);
    F.arrow(ctx, axB.X(RE0) + 6, axB.Y(0), axT.X(RE1), axT.Y(IEAD), alpha(ce, 0.6), 3);
    text(ctx, 'vertical', axB.X(RE0) - 16, top.b + 22, ce, { size: 18, weight: 600, align: 'right', bg: PAL.panel });
    if (dR > 6) text(ctx, 'adiabatic', axB.X(RE0) + 20, top.b + 22, alpha(ce, 0.9), { size: 18, weight: 600, bg: PAL.panel });
    /* the band, sideways */
    const sb = { l: 880, r: 1320, t: top.t, b: top.b };
    line(ctx, sb.l, sb.t, sb.l, sb.b, PAL.ink, 2);
    text(ctx, 'photoelectron band', sb.l + 12, sb.t + 4, PAL.ink, { size: 18 });
    text(ctx, 'intensity →', sb.r, sb.b + 24, PAL.muted, { size: 17, align: 'right' });
    for (let v = 0; v < 13; v++) {
      const E = IEAD + v * HW1; if (E > 18.9) break;
      const L = (sb.r - sb.l - 140) * fc[v] / fmax;
      if (L > 1) line(ctx, sb.l, axT.Y(E), sb.l + L, axT.Y(E), ce, 5);
    }
    text(ctx, `vertical, ${fmt(ivert, 2)} eV`, sb.l + (sb.r - sb.l - 140) + 10, axT.Y(ivert) - (vmax === 0 ? 14 : 0), ce, { size: 17, base: 'middle', bg: PAL.panel });
    if (vmax > 0) text(ctx, `adiabatic, ${fmt(IEAD, 2)} eV`, sb.l + (sb.r - sb.l - 140) * fc[0] / fmax + 10, axT.Y(IEAD) + 4, alpha(ce, 0.9), { size: 17, base: 'middle', bg: PAL.panel });
    tex(d.readout, `\\kIE_{\\text{vertical}} - \\kIE_{\\text{adiabatic}} = ${fmt(ivert, 2)}\\ \\text{eV} - ${fmt(IEAD, 2)}\\ \\text{eV} = ${fmt(ivert - IEAD, 2)}\\ \\text{eV}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 10.4.3 + 10.4.5 + 10.4.6 + 10.4.7 + 10.4.8 (and the images of
   Examples 10.4.1 and 10.4.2): the spectrum is the orbital diagram turned
   on its side. Still: photon energy and molecule are chosen; no time.
   Left, the occupied valence levels at their orbital energies epsilon_j;
   right, the photoelectron spectrum drawn sideways, ionization energy
   down the same scale (IE = -epsilon), intensity to the right. The
   photon energy is a line across both: an orbital below it (IE > h nu)
   cannot be ionized and gives no band. Data: water's measured and
   Hartree-Fock energies from the page's table; H2, N2 and HCl bands read
   off the page's spectra (Kaya), their deep bands N2 2sigma_g 37.3 eV and
   HCl's Cl 3s orbital 25.8 eV from Siegbahn's ESCA measurements; for
   these three the levels stand at minus the measured vertical energies
   (Koopmans' theorem as the book applies it). Vibrational progressions:
   our displaced-oscillator parameters (adiabatic energy, spacing, S),
   long for bonding orbitals, short for nonbonding ones. Axis 8 to 45 eV,
   one scale for every molecule. Photon energy 10 to 45 eV (the book's
   UPS range), specials He I 21.22 eV and He II 40.81 eV.
===================================================================== */
(function () {
  const d = sim('sim-pes', 700);
  const MOL = {
    H2: { name: 'H₂', bands: [{ lab: '1σ_g', ad: 15.43, w: 0.27, S: 2.0, I: 1, kind: 'bonding' }] },
    N2: { name: 'N₂', bands: [
      { lab: '3σ_g', ad: 15.58, w: 0.27, S: 0.12, I: 1, kind: 'weakly bonding' }, { lab: '1π_u', ad: 16.69, w: 0.23, S: 1.1, I: 1.6, kind: 'bonding' },
      { lab: '2σ_u', ad: 18.75, w: 0.29, S: 0.15, I: 0.5, kind: 'weakly antibonding' }, { lab: '2σ_g', ad: 37.3, w: 0.25, S: 0.5, I: 0.4, kind: 'bonding' }] },
    HCl: { name: 'HCl', bands: [
      { lab: '1π', ad: 12.74, w: 0.32, S: 0.08, I: 1.6, kind: 'nonbonding' }, { lab: '3σ', ad: 16.25, w: 0.16, S: 2.3, I: 1, kind: 'bonding' },
      { lab: '2σ', ad: 25.8, w: 0.2, S: 0.5, I: 0.3, kind: 'nonbonding, Cl 3s' }] },
    H2O: { name: 'H₂O', bands: [
      { lab: '1b₁', ad: 12.62, w: 0.40, S: 0.2, I: 1, kind: 'nonbonding', hf: 13.8 }, { lab: '3a₁', ad: 13.75, w: 0.125, S: 8, I: 0.8, kind: 'bonding', hf: 15.9 },
      { lab: '1b₂', ad: 17.2, w: 0.18, S: 7.4, I: 0.6, kind: 'bonding', hf: 19.5 }, { lab: '2a₁', ad: 32.0, w: 0.3, S: 0.8, I: 0.3, kind: 'bonding', hf: 36.7 }] },
  };
  Object.values(MOL).forEach((m) => m.bands.forEach((b) => { b.vert = vertical(b); b.eps = -(b.hf ?? b.vert); }));
  const K = F.choice(d.controls, { label: '\\text{molecule}', options: Object.entries(MOL).map(([value, m]) => ({ value, label: m.name })), value: 'H2O', aria: 'the molecule', key: 'molecule' });
  const HV = ctl(d.controls, { label: 'h\\knu', cls: 'energy', key: 'hv', min: 10, max: 45, step: 0.01, value: 21.22, unit: 'eV', dec: 2,
    aria: 'the photon energy in electronvolts', specials: [{ at: 21.22, label: 'He I' }, { at: 40.81, label: 'He II' }] });
  const hits = []; F.hover(d.stage, () => hits);
  const uni = (s) => s.replace('_', '');
  function draw() {
    const { ctx } = begin(d.c);
    hits.length = 0;
    const m = MOL[K.value], hv = HV.v, ce = C('energy');
    const Y0 = 110, Y1 = 660, Y = (ie) => Y0 + (ie - 8) * (Y1 - Y0) / 37;
    const reach = m.bands.filter((b) => b.vert < hv), n = m.bands.length;
    topline(ctx, `${m.name}: photons of ${fmt(hv, 2)} eV reach ${reach.length} of its ${n} occupied valence orbitals, so the spectrum has ${reach.length} band${reach.length === 1 ? '' : 's'}.`);
    /* the shared energy axis: orbital energy on the left, ionization energy on the right */
    const ladder = { l: 150, r: 520 }, spec = { l: 800, r: 1300 };
    line(ctx, ladder.l, Y0, ladder.l, Y1, PAL.ink, 2); line(ctx, spec.l, Y0, spec.l, Y1, PAL.ink, 2);
    [10, 20, 30, 40].forEach((v) => {
      line(ctx, ladder.l - 8, Y(v), ladder.l, Y(v), PAL.ink, 2); text(ctx, `−${v}`, ladder.l - 12, Y(v), ce, { size: 17, align: 'right', base: 'middle' });
      line(ctx, spec.l - 8, Y(v), spec.l, Y(v), PAL.ink, 2); text(ctx, `${v}`, spec.l - 12, Y(v), ce, { size: 17, align: 'right', base: 'middle' });
    });
    text(ctx, 'orbital energy ε (eV)', ladder.l - 10, Y0 - 30, ce, { size: 18 });
    text(ctx, 'ionization energy IE (eV)', spec.l - 10, Y0 - 30, ce, { size: 18 });
    /* the photon energy, and the region it cannot reach */
    const yh = Y(Math.min(hv, 45));
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.06); ctx.fillRect(ladder.l, yh, spec.r - ladder.l, Y1 - yh); ctx.restore();
    line(ctx, ladder.l, yh, spec.r, yh, ce, 3, [10, 10]);
    text(ctx, `hν = ${fmt(hv, 2)} eV`, spec.r, yh + 22, ce, { size: 18, weight: 600, align: 'right', bg: PAL.panel });
    if (hv < 44) text(ctx, 'out of reach', (ladder.r + spec.l) / 2, Math.min(Y1 - 12, yh + 26), PAL.muted, { size: 17, align: 'center' });
    /* the bands' shared intensity scale */
    const shape = (b, ie) => peaks(b).reduce((a, q) => a + q.p * Math.exp(-(((q.E - ie) / 0.06) ** 2) / 2), 0);
    const SMAX = Math.max(...m.bands.map((b) => Math.max(...peaks(b).map((q) => shape(b, q.E)))));
    m.bands.forEach((b) => {
      const ok = b.vert < hv, yl = Y(-b.eps), yv = Y(b.vert);
      line(ctx, ladder.l + 60, yl, ladder.l + 200, yl, ok ? ce : alpha(ce, 0.35), 5);
      [0, 1].forEach((k) => { const ex = ladder.l + 118 + 24 * k; F.arrow(ctx, ex, k ? yl - 11 : yl + 11, ex, k ? yl + 11 : yl - 11, ok ? PAL.ink : alpha(PAL.ink, 0.35), 2); });
      text(ctx, b.lab, ladder.l + 212, yl, ok ? PAL.ink : PAL.muted, { size: 19, base: 'middle', bg: PAL.panel });
      hits.push({ x: ladder.l + 130, y: yl, r: 16, name: `${uni(b.lab)}, ${b.kind}: ε = ${fmt(b.eps, 1).replace('-', '−')} eV${b.hf ? ' (Hartree–Fock)' : ''}` });
      line(ctx, ladder.l + 260, yl, spec.l - 4, yv, alpha(PAL.ink, ok ? 0.35 : 0.15), 2, [6, 6]);
      if (!ok) return;
      ctx.save(); ctx.beginPath(); ctx.moveTo(spec.l, Y(b.ad - 0.4));
      for (let ie = b.ad - 0.4; ie <= b.ad + 24 * b.w; ie += 0.01) ctx.lineTo(spec.l + 380 * shape(b, ie) / SMAX, Y(ie));
      ctx.lineTo(spec.l, Y(b.ad + 24 * b.w)); ctx.closePath(); ctx.fillStyle = alpha(ce, 0.3); ctx.fill(); ctx.strokeStyle = ce; ctx.lineWidth = 2.5; ctx.stroke(); ctx.restore();
      hits.push({ x: spec.l + 60, y: yv, r: 20, name: `the ${uni(b.lab)} band: ${fmt(b.vert, 2)} eV at its tallest peak; electrons of ${fmt(hv - b.vert, 2)} eV` });
    });
    /* the kinetic energy of the HOMO's electrons: the gap between its band and the photon line */
    const homo = m.bands[0];
    if (homo.vert < hv) F.vbracket(ctx, spec.r - 60, Y(homo.vert), yh, ce, `KE = ${fmt(hv - homo.vert, 2)} eV`, 1);
    const l3 = homo.hf ? `\\small \\kIj = ${fmt(homo.vert, 1)}\\ \\text{eV (measured)} \\approx -\\kepsj = ${fmt(homo.hf, 1)}\\ \\text{eV (Hartree–Fock)}` : `\\small \\kIj = -\\kepsj = ${fmt(homo.vert, 2)}\\ \\text{eV}`;
    const l2 = homo.vert < hv ? `\\kKE = ${fmt(hv, 2)}\\ \\text{eV} - ${fmt(homo.vert, 2)}\\ \\text{eV} = ${fmt(hv - homo.vert, 2)}\\ \\text{eV}` : `h\\knu = ${fmt(hv, 2)}\\ \\text{eV} < \\kIE = ${fmt(homo.vert, 2)}\\ \\text{eV}`;
    tex(d.readout, `\\kKE = h\\knu - \\kIE \\\\ ${l2} \\\\ ${l3}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
