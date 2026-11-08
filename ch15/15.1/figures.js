/* Figures for section 15.1 Electronically Excited Molecules can Relax by a Number of Processes. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['15.1'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, arrow, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- light: hc = 1240 eV nm, and the colour of a photon ---------- */
const HC = 1239.84;
const nmOf = (eV) => HC / eV;
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
/* a photon in its real colour; ultraviolet and infrared, which the eye does not see, in muted ink */
const photonColor = (nm) => (nm < 380 || nm > 780 ? PAL.muted : F.fact(spectral(nm)));
const bandOf = (nm) => (nm < 380 ? ' (ultraviolet)' : nm > 780 ? ' (infrared)' : '');
const clamp01 = (k) => Math.max(0, Math.min(1, k));
const smooth = (k) => { k = clamp01(k); return k * k * (3 - 2 * k); };

/* a wavy arrow, the book's mark of a radiationless step, drawn to fraction k of its length */
function wavy(ctx, x1, y1, x2, y2, color, k = 1, w = 3) {
  const L = Math.hypot(x2 - x1, y2 - y1) * clamp01(k); if (L < 6) return;
  const ux = (x2 - x1) / Math.hypot(x2 - x1, y2 - y1), uy = (y2 - y1) / Math.hypot(x2 - x1, y2 - y1), nx = -uy, ny = ux;
  const head = Math.min(16, L * 0.5), body = L - head;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
  for (let s = 0; s <= body; s += 1.5) {
    const a = 5 * Math.sin(2 * Math.PI * s / 16) * Math.min(1, s / 6, (body - s) / 6 + 0.2);
    const x = x1 + ux * s + nx * a, y = y1 + uy * s + ny * a;
    if (s === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.stroke(); ctx.restore();
  arrow(ctx, x1 + ux * body, y1 + uy * body, x1 + ux * L, y1 + uy * L, color, w);
}
/* a photon as a short wave packet travelling along (ux, uy), centred at (cx, cy) */
function packet(ctx, cx, cy, ux, uy, color, wl = 22, len = 70) {
  const nx = -uy, ny = ux, sd = len / 4;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.beginPath();
  for (let s = -len / 2; s <= len / 2; s += 1.5) {
    const a = 11 * Math.exp(-(s * s) / (2 * sd * sd)) * Math.sin(2 * Math.PI * (s + cx * ux + cy * uy) / wl);
    const x = cx + ux * s + nx * a, y = cy + uy * s + ny * a;
    if (s === -len / 2) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.stroke(); ctx.restore();
}
/* a power of ten as a canvas label */
const pow10 = (k) => (k === 0 ? '1' : k === 1 ? '10' : `10^{${k < 0 ? '−' + -k : k}}`);
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const supPow = (t) => { const k = Math.round(Math.log10(t)); return k === 0 ? '1' : '10' + String(k).split('').map((c) => SUP[c]).join(''); };

/* ---------- Figure 15.1.1: spins in the ground and excited states (faithful copy) ---------- */
(function () {
  const d = sim('fig-15-1-1', 440);
  const hits = [];
  F.hover(d.stage, () => hits);
  const panels = [
    { x: 260, s: ['Singlet ground', 'state'], lo: ['u', 'd'], hi: [], name: 'singlet ground state: both electrons in the lower orbital, spins paired' },
    { x: 700, s: ['Singlet excited', 'state'], lo: ['u'], hi: ['d'], name: 'singlet excited state: one electron promoted, its spin still opposite its partner\'s' },
    { x: 1140, s: ['Triplet excited', 'state'], lo: ['u'], hi: ['u'], name: 'triplet excited state: the promoted electron\'s spin parallel to its partner\'s' },
  ];
  function draw() {
    const { ctx } = begin(d.c);
    const ink = PAL.ink, lo = 320, hi = 170;
    hits.length = 0;
    panels.forEach((p) => {
      line(ctx, p.x - 110, lo, p.x + 110, lo, ink, 4);
      if (p.hi.length) line(ctx, p.x - 110, hi, p.x + 110, hi, ink, 4);
      const spin = (sp, x, y) => (sp === 'u' ? arrow(ctx, x, y - 4, x, y - 120, ink, 4) : arrow(ctx, x, y - 120, x, y - 4, ink, 4));
      if (p.lo.length === 2) { spin('u', p.x - 30, lo); spin('d', p.x + 30, lo); }
      else { spin(p.lo[0], p.x, lo); spin(p.hi[0], p.x, hi); }
      text(ctx, p.s[0], p.x, lo + 46, ink, { size: 24, align: 'center' });
      text(ctx, p.s[1], p.x, lo + 78, ink, { size: 24, align: 'center' });
      hits.push({ x: p.x, y: (lo + hi) / 2 - 20, r: 110, name: p.name });
    });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- Figure 15.1.2 + 15.1.3: the Jablonski diagram, one molecule at a time ----------
   Energies in eV on y (y = 560 - 86 E): S0 0, S1 2.75, S2 3.55, S3 4.30; T1 2.25, T2 3.10, T3 3.95; vibrational
   levels 0.18 eV apart, v = 0 to 4 drawn. Light lifts the molecule from S0 v = 0 to v = 2 of the chosen state: 399 nm
   (violet) into S1, 317 and 266 nm (ultraviolet) into S2 and S3. Fluorescence leaves S1 v = 0 for S0 v = 1, 482 nm
   (blue): the book's Figure 15.1.3, violet in and blue out. Phosphorescence leaves T1 v = 0 for S0 v = 1, 599 nm.
   Moving: each loop is one molecule; its steps play one after another and the clock along the bottom, a log scale
   from 10^-15 to 10^2 s, shows the time since absorption at Table 15.1.1's typical values. Molecule j crosses to T1
   when floor((j + 1) p) > floor(j p), so the tally of photons out keeps the share p exactly. */
(function () {
  const d = sim('sim-jablonski', 680);
  const VIB = 0.18, S = [0, 2.75, 3.55, 4.30], T = [null, 2.25, 3.10, 3.95];
  let done = 0;
  const restart = () => { done = 0; cy.reset(); };
  const LAND = F.choice(d.controls, { label: '\\text{light lands in}', key: 'land', options: [{ value: '1', label: '$S_1$' }, { value: '2', label: '$S_2$' }, { value: '3', label: '$S_3$' }], value: '1', onInput: restart });
  const P = ctl(d.controls, { label: 'S_1 \\to T_1', cls: '', key: 'share', min: 0, max: 100, step: 5, value: 25, unit: '%', dec: 0, aria: 'the share of molecules in S1 that cross to T1', onInput: restart });
  const crosses = (j, p) => Math.floor((j + 1) * p + 1e-9) > Math.floor(j * p + 1e-9);
  const Y = (E) => 560 - 86 * E;
  const XS = [230, 560], XT = [700, 960];
  /* the steps of molecule j: what it does, how long it plays (s) and the model time when it ends (s) */
  function stepsOf(n, cross) {
    const up = S[n] + 2 * VIB, st = [];
    st.push({ k: 'abs', dur: 1.3, t: 1e-15, a: [300, Y(0)], b: [300, Y(up)], nm: nmOf(up) });
    st.push({ k: 'vr', dur: 0.8, t: 1e-12, a: [340, Y(up)], b: [370, Y(S[n])], n });
    if (n > 1) {
      st.push({ k: 'ic', dur: 0.8, t: 1e-11, a: [390, Y(S[n])], b: [430, Y(S[1] + 3 * VIB)], n });
      st.push({ k: 'vr', dur: 0.7, t: 3e-11, a: [440, Y(S[1] + 3 * VIB)], b: [460, Y(S[1])], n: 1 });
    }
    if (!cross) {
      st.push({ k: 'fl', dur: 1.6, t: 1e-8, a: [490, Y(S[1])], b: [490, Y(VIB)], nm: nmOf(S[1] - VIB) });
      st.push({ k: 'vr0', dur: 0.7, t: 1e-8, a: [520, Y(VIB)], b: [535, Y(0)] });
    } else {
      st.push({ k: 'isc', dur: 1.1, t: 1e-8, a: [540, Y(S[1])], b: [740, Y(T[1] + 2 * VIB)] });
      st.push({ k: 'vr', dur: 0.7, t: 2e-8, a: [760, Y(T[1] + 2 * VIB)], b: [780, Y(T[1])], n: 0 });
      st.push({ k: 'ph', dur: 2.0, t: 1, a: [800, Y(T[1])], b: [545, Y(VIB)], nm: nmOf(T[1] - VIB) });
      st.push({ k: 'vr0', dur: 0.7, t: 1, a: [530, Y(VIB)], b: [520, Y(0)] });
    }
    return st;
  }
  const route = () => stepsOf(+LAND.value, crosses(done, P.v / 100));
  const total = (st) => st.reduce((s, x) => s + x.dur, 0);
  const cy = F.cycle(() => total(route()), 1.2);
  const hits = [];
  F.hover(d.stage, () => hits);
  /* the clock, a log scale of the time since absorption */
  const CK = { l: 230, r: 1300, y: 632, lo: -15, hi: 2 };
  const CX = (t) => CK.l + (CK.r - CK.l) * (Math.log10(t) - CK.lo) / (CK.hi - CK.lo);
  function draw() {
    const { ctx } = begin(d.c);
    const n = +LAND.value, p = P.v / 100, cross = crosses(done, p), st = stepsOf(n, cross), tau = cy.now(), ink = PAL.ink;
    /* where the play is: the current step and how far into it */
    let i = 0, t0 = 0; while (i < st.length - 1 && tau >= t0 + st[i].dur) { t0 += st[i].dur; i++; }
    const k = clamp01((tau - t0) / st[i].dur), cur = st[i];
    const prevT = i === 0 ? 1e-16 : st[i - 1].t;
    const radiative = cur.k === 'fl' || cur.k === 'ph';
    /* a radiative step waits in its state first, then drops; its model time runs during the wait */
    const wait = cur.k === 'fl' ? 0.45 : cur.k === 'ph' ? 0.55 : 0, kd = radiative ? clamp01((k - wait) / (1 - wait)) : k;
    const kt = radiative ? clamp01(k / wait) : k;
    const tNow = Math.pow(10, Math.log10(prevT) + (Math.log10(cur.t) - Math.log10(prevT)) * kt);
    const absNm = st[0].nm, emit = st.find((s) => s.k === 'fl' || s.k === 'ph'), emitted = emit && st.indexOf(emit) < i || (emit === cur && kd >= 1);
    const sub = (m) => ['₀', '₁', '₂', '₃'][m];
    const heads = {
      abs: `Absorption: in about 10⁻¹⁵ s the molecule takes in a ${fmt(absNm, 0)} nm photon${bandOf(absNm)} and lands on a high vibrational level of S${sub(n)}.`,
      vr: cur.n === 0 ? 'Vibrational relaxation brings the molecule to the bottom of T₁.' : `Vibrational relaxation: within about 10⁻¹² s collisions carry off the extra vibration, and the molecule sits at the bottom of S${sub(cur.n || 1)}.`,
      ic: `Internal conversion: the molecule slides from S${sub(n)} into a high vibrational level of S₁ without emitting.`,
      fl: `Fluorescence: after about 10⁻⁸ s in S₁ the molecule emits a ${fmt(nmOf(S[1] - VIB), 0)} nm photon, redder than the ${fmt(absNm, 0)} nm photon it absorbed.`,
      isc: 'Intersystem crossing: the molecule slides from S₁ onto the triplet T₁ without emitting.',
      ph: `Phosphorescence: the spin-forbidden drop from T₁ waits about a second, then gives a ${fmt(nmOf(T[1] - VIB), 0)} nm photon.`,
      vr0: 'Back in S₀, the last of the vibration goes out as heat.',
    };
    topline(ctx, heads[cur.k]);
    hits.length = 0;
    /* the levels: bold v = 0, thin vibrational levels above it */
    const levels = (E, xs, name) => {
      for (let v = 3; v >= 0; v--) line(ctx, xs[0], Y(E + v * VIB), xs[1], Y(E + v * VIB), v ? alpha(ink, 0.3) : ink, v ? 2 : 4);
      hits.push({ x: (xs[0] + xs[1]) / 2, y: Y(E + 2 * VIB), r: 40, name });
    };
    S.forEach((E, m) => { levels(E, XS, m ? `S${sub(m)}, an excited singlet state, with its vibrational levels` : 'S₀, the singlet ground state, with its vibrational levels'); text(ctx, `S${sub(m)}`, XS[0] - 16, Y(E) + 2, ink, { size: 24, weight: 600, align: 'right', base: 'middle' }); });
    T.forEach((E, m) => { if (E === null) return; levels(E, XT, `T${sub(m)}, an excited triplet state, with its vibrational levels`); text(ctx, `T${sub(m)}`, XT[1] + 16, Y(E) + 2, ink, { size: 24, weight: 600, align: 'left', base: 'middle' }); });
    /* the steps so far, then the current one growing */
    const mark = (s, kk, faded) => {
      const c = s.nm ? photonColor(s.nm) : alpha(ink, 0.7), col = faded ? alpha(c, 0.45) : c;
      const kk2 = s.k === 'fl' || s.k === 'ph' ? (faded ? 1 : kd) : kk;
      if (s.k === 'abs') { const ka = clamp01((kk - 0.45) / 0.55); if (ka > 0) arrow(ctx, s.a[0], s.a[1], s.a[0], s.a[1] + (s.b[1] - s.a[1]) * smooth(ka), col, 5); }
      else if (s.nm) { if (kk2 > 0) arrow(ctx, s.a[0], s.a[1], s.a[0] + (s.b[0] - s.a[0]) * smooth(kk2), s.a[1] + (s.b[1] - s.a[1]) * smooth(kk2), col, 5); }
      else wavy(ctx, s.a[0], s.a[1], s.b[0], s.b[1], col, smooth(kk), 3);
    };
    st.slice(0, i).forEach((s) => mark(s, 1, true));
    mark(cur, k, false);
    /* the photons: the one absorbed flies in from the left, the one emitted flies out */
    if (cur.k === 'abs' && k < 0.5) {
      const x = 60 + (st[0].a[0] - 60) * (k / 0.5);
      packet(ctx, x, Y(1.0), 1, 0, photonColor(absNm), 20);
      hits.push({ x, y: Y(1.0), r: 30, name: `the photon absorbed, ${fmt(absNm, 0)} nm` });
    }
    if (radiative && kd > 0.6) {
      const q = (kd - 0.6) / 0.4, sx = (cur.a[0] + cur.b[0]) / 2, sy = (cur.a[1] + cur.b[1]) / 2, dir = cur.k === 'fl' ? -1 : 1;
      const x = sx + dir * (40 + 380 * q);
      packet(ctx, x, sy, dir, 0, photonColor(cur.nm), 26);
      hits.push({ x, y: sy, r: 30, name: `the photon emitted, ${fmt(cur.nm, 0)} nm` });
    }
    /* the molecule's state */
    let mx, my;
    if (cur.k === 'abs') { const ka = smooth((k - 0.45) / 0.55); mx = cur.a[0]; my = cur.a[1] + (cur.b[1] - cur.a[1]) * ka; }
    else { const kk = cur.nm ? smooth(kd) : smooth(k); mx = cur.a[0] + (cur.b[0] - cur.a[0]) * kk; my = cur.a[1] + (cur.b[1] - cur.a[1]) * kk; }
    dot(ctx, mx, my, ink, true, 10);
    hits.push({ x: mx, y: my, r: 16, name: 'the molecule, at its present energy' });
    /* the tally of photons out, over the molecules played since the last change */
    const pDone = Math.floor(done * p + 1e-9), fDone = done - pDone;
    const fl = fDone + (emitted && !cross ? 1 : 0), ph = pDone + (emitted && cross ? 1 : 0);
    const tx = 1030;
    text(ctx, 'photons out', tx, 150, ink, { size: 22, weight: 600 });
    packet(ctx, tx + 30, 196, 1, 0, photonColor(nmOf(S[1] - VIB)), 26, 56);
    text(ctx, `fluorescence  ${fl}`, tx + 74, 196, ink, { size: 22, base: 'middle' });
    packet(ctx, tx + 30, 240, 1, 0, photonColor(nmOf(T[1] - VIB)), 26, 56);
    text(ctx, `phosphorescence  ${ph}`, tx + 74, 240, ink, { size: 22, base: 'middle' });
    hits.push({ x: tx + 120, y: 218, r: 60, name: 'photons given back so far, by kind' });
    /* the clock */
    const ct = C('time');
    line(ctx, CK.l, CK.y, CK.r, CK.y, alpha(ink, 0.5), 2);
    for (let e = CK.lo; e <= CK.hi; e++) {
      const x = CK.l + (CK.r - CK.l) * (e - CK.lo) / (CK.hi - CK.lo);
      line(ctx, x, CK.y - 6, x, CK.y + 6, alpha(ink, 0.5), 2);
      if ((e - CK.lo) % 3 === 0 || e === CK.hi) text(ctx, pow10(e), x, CK.y + 30, ink, { size: 17, align: 'center' });
    }
    text(ctx, 'time since absorption (s), log scale', CK.l, CK.y - 26, ct, { size: 20, weight: 600, align: 'left' });
    const tx0 = CX(Math.max(1e-15, tNow));
    st.slice(0, i).forEach((s) => dot(ctx, CX(s.t), CK.y, alpha(ct, 0.5), true, 6));
    dot(ctx, tx0, CK.y, ct, true, 10);
    hits.push({ x: tx0, y: CK.y, r: 16, name: `about ${supPow(tNow)} s since the photon was absorbed` });
    /* the readout: the energy of each photon from its wavelength */
    const lines = [`\\kE = \\dfrac{hc}{\\klambda}`, `{\\kE}_{\\text{in}} = \\dfrac{1240\\ \\text{eV·nm}}{${fmt(absNm, 0)}\\ \\text{nm}} = ${fmt(HC / absNm, 2)}\\ \\text{eV}`];
    if (emitted) lines.push(`{\\kE}_{\\text{out}} = \\dfrac{1240\\ \\text{eV·nm}}{${fmt(emit.nm, 0)}\\ \\text{nm}} = ${fmt(HC / emit.nm, 2)}\\ \\text{eV}`);
    tex(d.readout, lines.join(' \\\\ '));
  }
  register(d.fig, { update: (dt) => { const was = cy.tau; cy.step(dt, () => 1); if (cy.tau < was) done++; }, draw });
})();

/* ---------- Figures 15.1.4, 15.1.5, 15.1.8, 15.1.10, 15.1.11: the potential curves, one route at a time ----------
   x: nuclear coordinate, dimensionless (the oscillator length), -4.5 to 7.5; y: energy 0 to 4.4 eV. Harmonic wells of
   one vibrational quantum, 0.20 eV: S0 = 0.1 x^2, S1 = 2.6 + 0.1 (x - d)^2, T1 = 2.4 + 0.1 (x - d - 0.8)^2, levels at
   (v + 1/2) 0.20 eV above each bottom between their turning points. S1's v = 0 (2.7 eV) lies level with S0's v = 13 and
   T1's v = 1, so internal conversion and intersystem crossing are sideways slides. The vertical excitation from S0 v = 0
   lands on the S1 level nearest the curve above x = 0, v' = round(d^2/2 - 1/2); emission from the bottom of a well
   lands on the S0 level nearest the curve below it. Opens on d = 2: absorption 3.00 eV (413 nm), fluorescence 2.20 eV
   (564 nm). Moving: the state climbs, steps down as heat, and leaves by the chosen route. */
(function () {
  const d = sim('sim-relaxation', 660);
  const W = 0.2, G1 = 2.6, GT = 2.4;
  const ROUTE = F.choice(d.controls, { label: '\\text{way back}', key: 'route', options: [{ value: 'fl', label: 'fluorescence' }, { value: 'ic', label: 'internal conversion' }, { value: 'isc', label: 'intersystem crossing' }], value: 'fl', onInput: () => cy.reset() });
  const D = ctl(d.controls, { label: '\\text{bond shift}', cls: '', key: 'shift', min: 0, max: 3, step: 0.05, value: 2, dec: 2,
    aria: 'how far the excited-state curves are shifted to longer bonds', specials: [{ at: 0, label: 'no shift' }], onInput: () => cy.reset() });
  const V0 = (x) => 0.5 * W * x * x;
  const nearest = (h) => Math.max(0, Math.round(h / W - 0.5));
  function plan() {
    const dd = D.v, dT = dd + 0.8, r = ROUTE.value, st = [];
    const vp = nearest(0.5 * W * dd * dd), Eup = G1 + (vp + 0.5) * W;
    st.push({ k: 'abs', dur: 1.0, a: [0, W / 2], b: [0, Eup], E: Eup - W / 2 });
    let x = 0;
    for (let v = vp; v > 0; v--) { st.push({ k: 'vr', dur: 0.4, a: [x, G1 + (v + 0.5) * W], b: [dd, G1 + (v - 0.5) * W] }); x = dd; }
    if (vp === 0) st.push({ k: 'rest', dur: 0.4, a: [0, G1 + W / 2], b: [dd, G1 + W / 2] });
    let E0 = G1 + W / 2, xc = dd, emitted = 0;
    if (r === 'isc') {
      st.push({ k: 'isc', dur: 0.8, a: [dd, E0], b: [dT, E0] });
      st.push({ k: 'vrT', dur: 0.5, a: [dT, E0], b: [dT, GT + W / 2] });
      st.push({ k: 'wait', dur: 1.0, a: [dT, GT + W / 2], b: [dT, GT + W / 2] });
      E0 = GT + W / 2; xc = dT;
    }
    let vlow;
    if (r === 'ic') {
      vlow = Math.round((G1 + W / 2) / W - 0.5);
      st.push({ k: 'ic', dur: 0.8, a: [dd, E0], b: [0, (vlow + 0.5) * W] });
    } else {
      vlow = nearest(V0(xc));
      emitted = E0 - (vlow + 0.5) * W;
      st.push({ k: r === 'fl' ? 'fl' : 'ph', dur: 1.0, a: [xc, E0], b: [xc, (vlow + 0.5) * W], E: emitted });
    }
    x = r === 'ic' ? 0 : xc;
    const per = Math.min(0.4, 2.4 / Math.max(1, vlow));
    for (let v = vlow; v > 0; v--) { st.push({ k: 'vr0', dur: per, a: [x, (v + 0.5) * W], b: [0, (v - 0.5) * W] }); x = 0; }
    return { st, vp, Eup, absE: Eup - W / 2, emitted, dT };
  }
  const total = () => plan().st.reduce((s, x) => s + x.dur, 0);
  const cy = F.cycle(total, 1.2);
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const dd = D.v, { st, absE, emitted, dT } = plan(), tau = cy.now(), ce = C('energy'), ink = PAL.ink, r = ROUTE.value;
    let i = 0, t0 = 0; while (i < st.length - 1 && tau >= t0 + st[i].dur) { t0 += st[i].dur; i++; }
    const k = clamp01((tau - t0) / st[i].dur), cur = st[i];
    const absNm = nmOf(absE), emNm = emitted > 0 ? nmOf(emitted) : 0;
    const heads = {
      abs: `Light lifts the molecule straight up, at fixed bond length, onto a vibrational level of the excited state: ${fmt(absE, 2)} eV, ${fmt(absNm, 0)} nm${bandOf(absNm)}.`,
      vr: 'Vibrational relaxation: the molecule steps down the excited state\'s ladder, giving its vibration away as heat.',
      rest: 'With no shift the molecule lands on the lowest level and has no vibration to lose.',
      isc: 'Intersystem crossing: where the singlet and triplet levels meet, the molecule slides onto the triplet curve.',
      vrT: 'It relaxes to the bottom of the triplet curve.',
      wait: 'The spin-forbidden drop to the singlet ground state is slow: seconds, or longer.',
      ic: 'Internal conversion: S₁\'s lowest level lies level with a high level of S₀, and the molecule slides across without a photon.',
      fl: `Fluorescence from the bottom of S₁: ${fmt(emitted, 2)} eV, ${fmt(emNm, 0)} nm${bandOf(emNm)}, against ${fmt(absE, 2)} eV absorbed.`,
      ph: `Phosphorescence from the bottom of T₁: ${fmt(emitted, 2)} eV, ${fmt(emNm, 0)} nm${bandOf(emNm)}.`,
      vr0: r === 'ic' ? 'The molecule keeps dropping one vibrational level at a time: all the energy it absorbed ends as heat.' : 'The rest of the vibration goes out as heat.',
    };
    topline(ctx, heads[cur.k]);
    const box = { l: 150, r: 1300, t: 120, b: 560 };
    const ax0 = axes(ctx, box, [0, 14], [0, 4], { nx: 0, ny: 4, xl: 'nuclear separation', xc: C('length'), yl: 'energy (eV)', yc: ce });
    /* the axes run 0 to 14; the wells are drawn in x from -6 to 8, shifted by 6 so no gridline marks x = 0 */
    const ax = { ...ax0, X: (x) => ax0.X(x + 6) }, sh = (f) => (x) => f(x - 6);
    const V1 = (x) => G1 + 0.5 * W * (x - dd) ** 2, VT = (x) => GT + 0.5 * W * (x - dT) ** 2;
    const ladder = (E0, xc, n, a) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); for (let v = 0; v < n; v++) { const h = (v + 0.5) * W, e = E0 + h; if (e > 4) break; const s = Math.sqrt(2 * h / W); line(ctx, ax.X(xc - s), ax.Y(e), ax.X(xc + s), ax.Y(e), alpha(ce, a), 2); } ctx.restore(); };
    ladder(0, 0, 16, 0.2); ladder(G1, dd, 9, 0.4);
    if (r === 'isc') ladder(GT, dT, 10, 0.4);
    F.plot(ctx, ax0, sh(V0), ce, { w: 4 });
    F.plot(ctx, ax0, sh(V1), ce, { w: 4 });
    if (r === 'isc') F.plot(ctx, ax0, sh(VT), alpha(ce, 0.75), { w: 4, dash: [10, 10] });
    text(ctx, 'singlet ground state S₀', ax.X(-3.2) - 14, ax.Y(V0(-3.2)), ce, { size: 20, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, 'singlet excited state S₁', ax.X(dd - 3.4) - 14, ax.Y(V1(dd - 3.4)), ce, { size: 20, weight: 600, align: 'right', bg: PAL.panel });
    if (r === 'isc') text(ctx, 'triplet T₁', ax.X(dT + 2.2) + 14, ax.Y(VT(dT + 2.2)) + 10, ce, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    hits.length = 0;
    hits.push({ x: ax.X(0), y: ax.Y(0.1), r: 20, name: 'S₀, v = 0: where every molecule starts' });
    hits.push({ x: ax.X(dd), y: ax.Y(G1 + 0.1), r: 18, name: 'S₁, v′ = 0: the bottom of the excited state' });
    if (r === 'isc') hits.push({ x: ax.X(dT), y: ax.Y(GT + 0.1), r: 18, name: 'T₁, v = 0: the bottom of the triplet' });
    /* the steps so far, faded, and the current one */
    const P = (p) => [ax.X(p[0]), ax.Y(p[1])];
    const mark = (s, kk, faded) => {
      const [x1, y1] = P(s.a), [x2, y2] = P(s.b);
      if (s.k === 'rest' || s.k === 'wait') return;
      if (s.E) {
        const c = photonColor(nmOf(s.E)), col = faded ? alpha(c, 0.45) : c;
        if (kk > 0) arrow(ctx, x1, y1, x1 + (x2 - x1) * smooth(kk), y1 + (y2 - y1) * smooth(kk), col, 5);
      } else wavy(ctx, x1, y1, x2, y2, faded ? alpha(ink, 0.35) : alpha(ink, 0.8), smooth(kk), 2.5);
    };
    st.slice(0, i).forEach((s) => mark(s, 1, true));
    mark(cur, k, false);
    if (cur.k === 'fl' || cur.k === 'ph') {
      if (k > 0.6) {
        const [x1, y1] = P(cur.a), [, y2] = P(cur.b), q = (k - 0.6) / 0.4, x = x1 + 40 + 300 * q;
        packet(ctx, x, (y1 + y2) / 2, 1, 0, photonColor(emNm), 24);
      }
    }
    if (cur.k === 'abs' && k < 0.4) packet(ctx, ax.X(0) - 330 + 300 * (k / 0.4), ax.Y(1.4), 1, 0, photonColor(absNm), 20);
    const kk = cur.k === 'abs' || cur.E ? smooth(k) : smooth(k);
    const [mx, my] = P([cur.a[0] + (cur.b[0] - cur.a[0]) * kk, cur.a[1] + (cur.b[1] - cur.a[1]) * kk]);
    dot(ctx, mx, my, ink, true, 10);
    hits.push({ x: mx, y: my, r: 16, name: 'the molecule, at its energy and bond length' });
    const em = r === 'ic' ? `{\\kE}_{\\text{em}} = 0` : `{\\kE}_{\\text{em}} = \\dfrac{1240\\ \\text{eV·nm}}{${fmt(emNm, 0)}\\ \\text{nm}} = ${fmt(emitted, 2)}\\ \\text{eV}`;
    tex(d.readout, `{\\kE}_{\\text{abs}} = \\dfrac{hc}{\\klambda} = \\dfrac{1240\\ \\text{eV·nm}}{${fmt(absNm, 0)}\\ \\text{nm}} = ${fmt(absE, 2)}\\ \\text{eV} \\\\ ${em} \\\\ {\\kE}_{\\text{heat}} = {\\kE}_{\\text{abs}} - {\\kE}_{\\text{em}} = ${fmt(absE - emitted, 2)}\\ \\text{eV}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* ---------- Figure 15.1.6: absorption and fluorescence mirror each other ----------
   The 0-0 gap 2.40 eV (517 nm), one vibrational quantum 0.16 eV in both states. The intensity of the line to level v
   is the displaced-oscillator overlap of 13.7, e^(-S) S^v / v!, with S = shift^2 / 2. Top: the two ladders, absorption
   arrows from v'' = 0 up and fluorescence arrows from v' = 0 down, each as strong as its line. Below: both spectra on
   one wavelength axis, 340 to 900 nm, absorption up and fluorescence down, each line in the colour of its light.
   Still: the shift is variation. Opens on a shift of 2.5 (S = 3.1), the book's drawing, whose progressions peak near
   v = 3; at zero shift only the 0-0 line is left. */
(function () {
  const d = sim('sim-mirror', 690);
  const E00 = 2.4, W = 0.16, NV = 7;
  const D = ctl(d.controls, { label: '\\text{bond shift}', cls: '', key: 'shift', min: 0, max: 3, step: 0.05, value: 2.5, dec: 2,
    aria: 'how far the excited state\'s bond is shifted from the ground state\'s', specials: [{ at: 0, label: 'equal bond lengths' }] });
  const fact = (n) => (n < 2 ? 1 : n * fact(n - 1));
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const sh = D.v, S = sh * sh / 2, ink = PAL.ink;
    const P = Array.from({ length: NV }, (_, v) => Math.exp(-S) * S ** v / fact(v)), pm = Math.max(...P), vm = P.indexOf(pm);
    const abs = (v) => nmOf(E00 + v * W), flu = (v) => nmOf(E00 - v * W);
    topline(ctx, vm === 0 ? 'With equal bond lengths only the 0 → 0 line is left, and absorption and fluorescence fall on the same wavelength.'
      : `The strongest lines are absorption 0 → ${vm} at ${fmt(abs(vm), 0)} nm and fluorescence 0 → ${vm} at ${fmt(flu(vm), 0)} nm, either side of the 0 → 0 line at ${fmt(nmOf(E00), 0)} nm.`);
    hits.length = 0;
    /* the ladders */
    const gy = (v) => 332 - 14 * v, ey = (v) => 190 - 14 * v;
    [[300, 620], [800, 1120]].forEach(([l, r]) => {
      for (let v = 0; v < 6; v++) { line(ctx, l, gy(v), r, gy(v), v ? alpha(ink, 0.35) : ink, v ? 2 : 4); line(ctx, l, ey(v), r, ey(v), v ? alpha(ink, 0.35) : ink, v ? 2 : 4); }
    });
    text(ctx, 'v″ = 0', 286, gy(0), ink, { size: 18, align: 'right', base: 'middle' });
    text(ctx, 'v′ = 0', 286, ey(0), ink, { size: 18, align: 'right', base: 'middle' });
    text(ctx, 'absorption', 460, 360, ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'fluorescence', 960, 360, ink, { size: 20, weight: 600, align: 'center' });
    for (let v = 0; v < 6; v++) {
      const ka = P[v] / pm;
      if (ka > 0.02) {
        const xa = 330 + 52 * v, xf = 830 + 52 * v;
        arrow(ctx, xa, gy(0), xa, ey(v), alpha(photonColor(abs(v)), 0.25 + 0.75 * ka), 1.5 + 4 * ka);
        arrow(ctx, xf, ey(0), xf, gy(v), alpha(photonColor(flu(v)), 0.25 + 0.75 * ka), 1.5 + 4 * ka);
      }
    }
    hits.push({ x: 460, y: 270, r: 70, name: 'absorption: from v″ = 0 to each level of the excited state' });
    hits.push({ x: 960, y: 270, r: 70, name: 'fluorescence: from v′ = 0 to each level of the ground state' });
    /* the spectra */
    const box = { l: 150, r: 1300, t: 400, b: 620 };
    const ax = axes(ctx, box, [340, 900], [-1.1, 1.1], { nx: 7, ny: 0, xl: 'wavelength λ (nm)', xc: C('wavelength'), yl: 'intensity', yc: ink });
    line(ctx, box.l, ax.Y(0), box.r, ax.Y(0), alpha(ink, 0.5), 2);
    text(ctx, 'absorption ↑', box.l + 14, ax.Y(0.85), ink, { size: 18, align: 'left' });
    text(ctx, 'fluorescence ↓', box.r - 14, ax.Y(-0.85), ink, { size: 18, align: 'right' });
    for (let v = 0; v < NV; v++) {
      const h = P[v] / pm, la = abs(v), lf = flu(v);
      if (la >= 340) { line(ctx, ax.X(la), ax.Y(0), ax.X(la), ax.Y(h), photonColor(la), v === vm ? 7 : 5); hits.push({ x: ax.X(la), y: ax.Y(h / 2), r: 12, name: `absorption 0 → ${v}: ${fmt(la, 0)} nm, relative intensity ${fmt(h, 2)}` }); }
      if (lf <= 900) { line(ctx, ax.X(lf), ax.Y(0), ax.X(lf), ax.Y(-h), photonColor(lf), v === vm ? 7 : 5); hits.push({ x: ax.X(lf), y: ax.Y(-h / 2), r: 12, name: `fluorescence 0 → ${v}: ${fmt(lf, 0)} nm, relative intensity ${fmt(h, 2)}` }); }
    }
    text(ctx, '0 → 0', ax.X(nmOf(E00)), ax.Y(P[0] / pm) - 16, ink, { size: 17, align: 'center', bg: PAL.panel });
    tex(d.readout, `{\\kE}_{\\text{abs}} = {\\kE}_{0\\to0} + v'(0.16\\ \\text{eV}) = 2.40 + ${vm}(0.16) = ${fmt(E00 + vm * W, 2)}\\ \\text{eV} \\\\ {\\kE}_{\\text{fl}} = {\\kE}_{0\\to0} - v''(0.16\\ \\text{eV}) = 2.40 - ${vm}(0.16) = ${fmt(E00 - vm * W, 2)}\\ \\text{eV}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- Figure 15.1.7: a collision hands over one quantum ----------
   Top: the excited molecule's well (left) and its partner's (right), levels 0.18 eV apart, v = 0 to 5. Below: the two
   molecules as vibrating dumbbells, the amplitude growing with v. The excited molecule starts at v = 4; four fresh
   partners in turn come in, collide and leave with one quantum each. Moving: 1.4 s per collision, hold 1.2 s. */
(function () {
  const d = sim('sim-collision', 600);
  const HV = 0.18, V0 = 4, PER = 1.4;
  const cy = F.cycle(() => V0 * PER, 1.2);
  const hits = [];
  F.hover(d.stage, () => hits);
  function dumbbell(ctx, x, y, amp, color, phase) {
    const half = 34 + amp * Math.sin(phase);
    line(ctx, x - half, y, x + half, y, PAL.ink, 4);
    dot(ctx, x - half, y, color, true, 18); dot(ctx, x + half, y, color, true, 18);
  }
  function well(ctx, cx, base, color, v, name) {
    const s = 26, top = base - 5.5 * 36;
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 4; ctx.beginPath();
    let first = true;
    for (let u = -3.4; u <= 3.4; u += 0.05) { const X = cx + s * 2.2 * u, Y = base - 36 * (u * u / 2); if (Y < top) continue; if (first) { ctx.moveTo(X, Y); first = false; } else ctx.lineTo(X, Y); }
    ctx.stroke(); ctx.restore();
    for (let n = 0; n < 6; n++) { const h = n + 0.5, a = Math.sqrt(2 * h) * s * 2.2; line(ctx, cx - a, base - 36 * h, cx + a, base - 36 * h, alpha(color, 0.45), 2); }
    dot(ctx, cx, base - 36 * (v + 0.5), color, true, 10);
    hits.push({ x: cx, y: base - 36 * (v + 0.5), r: 16, name: `${name}, now at v = ${v}` });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), done = Math.min(V0, Math.floor(tau / PER + 1e-9)), k = tau / PER - done, ink = PAL.ink;
    const cA = F.cat(0), cB = F.cat(1);
    /* phase of the current collision: in (0 to 0.45), contact (0.45 to 0.6), out (0.6 to 1) */
    const inPlay = done < V0, hit = inPlay && k >= 0.5;
    const vA = V0 - done - (hit ? 1 : 0), vB = hit ? 1 : 0;
    topline(ctx, !inPlay ? 'After four collisions the excited molecule sits at $v = 0$, the bottom of its well; its vibration has gone into its partners.'
      : `Collision ${done + 1} of ${V0}: ${hit ? `the excited molecule drops from $v = ${vA + 1}$ to $v = ${vA}$ and the partner takes the quantum away` : `a fresh partner at $v = 0$ comes in to meet the excited molecule at $v = ${vA}$`}.`);
    hits.length = 0;
    well(ctx, 380, 330, cA, Math.max(0, vA), 'the excited molecule\'s vibrational levels');
    if (inPlay) well(ctx, 1000, 330, cB, vB, 'the partner\'s vibrational levels');
    text(ctx, 'excited molecule', 380, 370, cA, { size: 20, weight: 600, align: 'center' });
    if (inPlay) text(ctx, 'partner', 1000, 370, cB, { size: 20, weight: 600, align: 'center' });
    if (inPlay && k > 0.45 && k < 0.85) {
      const q = smooth((k - 0.45) / 0.3);
      const y0 = 330 - 36 * (vA + 1.5);
      F.arrow(ctx, 470, y0, 470 + (900 - 470) * q, 330 - 36 * 1.5 + (y0 - (330 - 36 * 1.5)) * (1 - q), alpha(ink, 0.7), 3);
      text(ctx, `one quantum, ${fmt(HV, 2)} eV`, 685, Math.min(y0, 330 - 36 * 1.5) - 22, ink, { size: 18, align: 'center', bg: PAL.panel });
    }
    /* the molecules meeting */
    const y = 500, ph = tau * 2 * Math.PI * 2.2;
    dumbbell(ctx, 560, y, 6 * Math.sqrt(Math.max(0, vA) + 0.5), cA, ph);
    hits.push({ x: 560, y, r: 60, name: 'the excited molecule, vibrating' });
    if (inPlay) {
      const xB = k < 0.45 ? 1450 - (1450 - 700) * smooth(k / 0.45) : k < 0.6 ? 700 : 700 + (1500 - 700) * smooth((k - 0.6) / 0.4);
      dumbbell(ctx, xB, y, 6 * Math.sqrt(vB + 0.5), cB, ph * 1.1);
      if (xB < 1400) hits.push({ x: xB, y, r: 60, name: `a partner molecule, at v = ${vB}` });
    }
    const v = Math.max(0, vA);
    tex(d.readout, `\\kE = \\left(v+\\tfrac{1}{2}\\right)h\\knu \\\\ \\kE = \\left(${v}+\\tfrac{1}{2}\\right)(${fmt(HV, 2)}\\ \\text{eV}) = ${fmt((v + 0.5) * HV, 2)}\\ \\text{eV}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* ---------- Figure 15.1.9: nitrogen's quartet and doublet (faithful copy) ---------- */
(function () {
  const d = sim('fig-15-1-9', 360);
  const hits = [];
  F.hover(d.stage, () => hits);
  const sides = [
    { x0: 160, p: ['u', 'u', 'u'], name: 'the quartet: three unpaired electrons with parallel spins, the more stable state' },
    { x0: 800, p: ['u', 'u', 'd'], name: 'the doublet: one spin turned the other way, the less stable state' },
  ];
  function draw() {
    const { ctx } = begin(d.c);
    const ink = PAL.ink, yp = 130, ys = 270;
    hits.length = 0;
    const spin = (sp, x, y) => (sp === 'u' ? arrow(ctx, x, y + 34, x, y - 40, ink, 4) : arrow(ctx, x, y - 40, x, y + 34, ink, 4));
    sides.forEach((s) => {
      text(ctx, '2p', s.x0, yp, ink, { size: 24, align: 'right', base: 'middle' });
      text(ctx, '2s', s.x0 + 70, ys, ink, { size: 24, align: 'right', base: 'middle' });
      for (let i = 0; i < 3; i++) { const x = s.x0 + 80 + i * 130; line(ctx, x - 45, yp, x + 45, yp, ink, 4); spin(s.p[i], x, yp); }
      const x = s.x0 + 140; line(ctx, x - 45, ys, x + 45, ys, ink, 4); spin('u', x - 12, ys); spin('d', x + 12, ys);
      hits.push({ x: s.x0 + 210, y: yp, r: 130, name: s.name });
      hits.push({ x, y: ys, r: 40, name: 'the filled 2s orbital, spins paired' });
    });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
