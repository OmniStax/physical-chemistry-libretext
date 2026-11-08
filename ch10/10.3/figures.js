/* Figures for section 10.3 BeH₂ is Linear and H₂O is Bent. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['10.3'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* the other sign of a wavefunction: its hue a clear step toward whichever of ink and ground lies farther
   from it in lightness (6.6's helper), so the two signs part on either theme */
const lightOf = (c) => { const m = /^#([0-9a-f]{6})$/i.exec(c) ? [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16)) : (c.match(/[\d.]+/g) || [0, 0, 0]).slice(0, 3).map(Number); return (0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2]) / 255; };
const otherSign = (cw) => { const l = lightOf(cw), far = Math.abs(lightOf(PAL.ink) - l) > Math.abs(lightOf(PAL.panel) - l) ? PAL.ink : PAL.panel; return F.mixColor(cw, far, 0.55); };
/* a signed coefficient in TeX */
const sg = (v, d = 3) => (v < 0 ? `- ${fmt(-v, d)}` : `+ ${fmt(v, d)}`);
const minus = (s) => String(s).replace(/^-/, '−');

/* eigenvalues and eigenvectors of a small real symmetric matrix (cyclic Jacobi); vectors are columns,
   sorted by ascending value */
function eig(A) {
  const n = A.length, a = A.map((r) => r.slice()), V = a.map((_, i) => a.map((__, j) => (i === j ? 1 : 0)));
  for (let sweep = 0; sweep < 60; sweep++) {
    let off = 0; for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) off += a[i][j] * a[i][j];
    if (off < 1e-20) break;
    for (let p = 0; p < n; p++) for (let q = p + 1; q < n; q++) {
      if (Math.abs(a[p][q]) < 1e-14) continue;
      const th = (a[q][q] - a[p][p]) / (2 * a[p][q]), t = Math.sign(th || 1) / (Math.abs(th) + Math.sqrt(th * th + 1)), c = 1 / Math.sqrt(t * t + 1), s = t * c;
      for (let k = 0; k < n; k++) { const kp = a[k][p], kq = a[k][q]; a[k][p] = c * kp - s * kq; a[k][q] = s * kp + c * kq; }
      for (let k = 0; k < n; k++) { const pk = a[p][k], qk = a[q][k]; a[p][k] = c * pk - s * qk; a[q][k] = s * pk + c * qk; }
      for (let k = 0; k < n; k++) { const vp = V[k][p], vq = V[k][q]; V[k][p] = c * vp - s * vq; V[k][q] = s * vp + c * vq; }
    }
  }
  const idx = a.map((_, i) => i).sort((i, j) => a[i][i] - a[j][j]);
  return idx.map((i) => ({ e: a[i][i], v: V.map((r) => r[i]) }));
}

/* =====================================================================
   FIGURE 10.3.1 + 10.3.4: a Walsh diagram computed live.
   Still: the angle is a slider and nothing has a time in it. A small
   Hückel-type model of AH2 whose numbers are ours (named in the caption):
   A's 2s at -21 eV and 2p at -11 eV, H 1s at -13.6 eV; A-H resonance
   -5.0 eV for 2s and -4.6 eV times the direction cosine for each 2p;
   H-H resonance -3.0 exp(-1.6 (d/R - 1)) eV, d the H...H distance. The
   molecule lies in the yz plane, the C2 axis along z. By symmetry the
   matrix splits: a1 (2s, 2pz, H1 + H2), b2 (2py, H1 - H2), b1 (2px
   alone). The levels keep their labels at every angle: 2a1, 1b2, 3a1,
   1b1, 4a1, 2b2, which at 180 deg become 2sigma_g, 1sigma_u, 1pi_u (two),
   3sigma_g, 2sigma_u. Angle 90 to 180 deg (Walsh's range), opening on
   water at 104.5 deg. The model puts the lowest sum of occupied levels at
   180 deg for 4 electrons, 130.5 deg for 5 and 95.5 deg for 6 to 8 (the
   book's note: Walsh's method puts water near 90 deg). E axis -28 to -4
   eV; the lower graph is the sum of occupied levels less its value at
   180 deg, -4 to +4 eV for every molecule.
===================================================================== */
(function () {
  const d = sim('sim-walsh', 760);
  const MOL = [
    { value: 'BeH2', label: 'BeH₂', A: 'Be', n: 4 }, { value: 'BH2', label: 'BH₂', A: 'B', n: 5 }, { value: 'CH2', label: 'CH₂', A: 'C', n: 6 },
    { value: 'NH2', label: 'NH₂', A: 'N', n: 7 }, { value: 'H2O', label: 'H₂O', A: 'O', n: 8 },
  ];
  const K = F.choice(d.controls, { label: '\\text{molecule}', options: MOL.map((m) => ({ value: m.value, label: m.label })), value: 'H2O', aria: 'the molecule, by its number of valence electrons', key: 'molecule' });
  const TH = ctl(d.controls, { label: '\\text{H–A–H}', cls: 'angle', key: 'angle', min: 90, max: 180, step: 0.5, value: 104.5, unit: '°', dec: 1,
    detents: [{ v: 104.5, label: 'water' }], snap: true, aria: 'the H–A–H bond angle in degrees', specials: [{ at: 180, label: 'linear' }] });
  const aS = -21, aP = -11, aH = -13.6, bS = -5.0, bP = -4.6;
  const bHH = (th) => -3.0 * Math.exp(-1.6 * (2 * Math.sin(th / 2) - 1));
  const BENT = { a1: ['2a_1', '3a_1', '4a_1'], b2: ['1b_2', '2b_2'], b1: ['1b_1'] };
  const LIN = { '2a_1': '2\\sigma_g', '3a_1': '1\\pi_u', '4a_1': '3\\sigma_g', '1b_2': '1\\sigma_u', '2b_2': '2\\sigma_u', '1b_1': '1\\pi_u' };
  const UNI = { '2a_1': '2a₁', '3a_1': '3a₁', '4a_1': '4a₁', '1b_2': '1b₂', '2b_2': '2b₂', '1b_1': '1b₁', '2\\sigma_g': '2σ_g', '1\\sigma_u': '1σ_u', '1\\pi_u': '1π_u', '3\\sigma_g': '3σ_g', '2\\sigma_u': '2σ_u' };
  /* the six levels at angle th (radians), each with its label and its coefficients on [s, px, py, pz, H1, H2] */
  function levels(th) {
    const s = Math.sin(th / 2), c = Math.cos(th / 2), r2 = Math.SQRT2, h = bHH(th);
    /* a1: s, pz, (H1 + H2)/sqrt2 ; H1, H2 at (0, +-s, -c) */
    const a1 = eig([[aS, 0, r2 * bS], [0, aP, -r2 * bP * c], [r2 * bS, -r2 * bP * c, aH + h]]);
    const b2 = eig([[aP, r2 * bP * s], [r2 * bP * s, aH - h]]);
    const out = [];
    a1.forEach((q, i) => { const k = q.v[2] / r2; out.push({ id: BENT.a1[i], e: q.e, c: [q.v[0], 0, 0, q.v[1], k, k] }); });
    b2.forEach((q, i) => { const k = q.v[1] / r2; out.push({ id: BENT.b2[i], e: q.e, c: [0, 0, q.v[0], 0, k, -k] }); });
    out.push({ id: '1b_1', e: aP, c: [0, 1, 0, 0, 0, 0] });
    return out.sort((p, q) => p.e - q.e);
  }
  const occOf = (n) => { let left = n; return [0, 1, 2, 3, 4, 5].map(() => { const k = Math.min(2, left); left -= k; return k; }); };
  const sumOcc = (n, th) => { const L = levels(th), o = occOf(n); return L.reduce((a, l, i) => a + o[i] * l.e, 0); };
  /* the angle of least occupied energy, by a fine scan, per molecule */
  const best = {};
  MOL.forEach((m) => { let bt = 180, bE = Infinity; for (let t = 90; t <= 180.001; t += 0.5) { const E = sumOcc(m.n, t * Math.PI / 180); if (E < bE - 1e-9) { bE = E; bt = t; } } best[m.value] = bt; });
  const hits = [];
  F.hover(d.stage, () => hits);
  /* labels at one end, pushed apart to a least spacing */
  function spread(ys, gap) {
    const o = ys.map((y, i) => ({ y, i })).sort((p, q) => p.y - q.y);
    for (let k = 1; k < o.length; k++) if (o[k].y - o[k - 1].y < gap) o[k].y = o[k - 1].y + gap;
    const out = []; o.forEach((p) => { out[p.i] = p.y; }); return out;
  }
  function draw() {
    const { ctx } = begin(d.c);
    const mol = MOL.find((m) => m.value === K.value), deg = TH.v, th = deg * Math.PI / 180, lin = deg >= 179.75;
    const ce = C('energy'), ca = C('angle'), cw = C('wavefunction'), cw2 = otherSign(cw);
    const occ = occOf(mol.n), L = levels(th);
    const homoI = occ.reduce((a, k, i) => (k ? i : a), 0), homo = L[homoI];
    const name = (id) => (lin ? LIN[id] : id);
    const bt = best[mol.value];
    topline(ctx, bt >= 179.75 ? `${mol.label}, ${mol.n} valence electrons: 3a₁ stays empty and the occupied levels sum lowest at 180°, so ${mol.label} is linear.`
      : `${mol.label}, ${mol.n} valence electrons: 3a₁ is occupied and the occupied levels sum lowest at ${fmt(bt, 1)}°, so ${mol.label} is bent.`);
    hits.length = 0;
    /* the Walsh diagram */
    const box = { l: 170, r: 820, t: 120, b: 470 };
    const ax = axes(ctx, box, [70, 180], [-28, -4], { nx: 0, ny: 6, yl: 'orbital energy (eV)', yc: ce });
    [90, 120, 150, 180].forEach((t) => text(ctx, `${t}°`, ax.X(t), box.b + 24, ca, { size: 17, align: 'center' }));
    const ids = levels(Math.PI / 2).map((l) => l.id);
    ids.forEach((id) => {
      const f = (t) => levels(t * Math.PI / 180).find((l) => l.id === id).e;
      const filled = L.findIndex((l) => l.id === id) <= homoI && occ[L.findIndex((l) => l.id === id)] > 0;
      plot(ctx, ax, f, filled ? ce : alpha(ce, 0.5), filled ? { w: 5, x: [90, 180] } : { w: 3, x: [90, 180], dash: [10, 10] });
    });
    /* end labels: bent at 90 deg, linear at 180 deg */
    const at90 = levels(Math.PI / 2), at180 = levels(Math.PI);
    const yl = spread(at90.map((l) => ax.Y(l.e)), 22);
    at90.forEach((l, i) => text(ctx, UNI[l.id], ax.X(88), yl[i], PAL.ink, { size: 20, align: 'right', base: 'middle' }));
    const linL = []; at180.forEach((l) => { const s = LIN[l.id]; if (!linL.some((q) => q.s === s)) linL.push({ s, e: l.e }); });
    const yr = spread(linL.map((q) => ax.Y(q.e)), 22);
    linL.forEach((q, i) => text(ctx, UNI[q.s], box.r + 12, yr[i], PAL.ink, { size: 20, base: 'middle' }));
    /* the current angle, its levels and their electrons */
    line(ctx, ax.X(deg), box.t, ax.X(deg), box.b, alpha(ca, 0.8), 3, [4, 8]);
    L.forEach((l, i) => {
      const x = ax.X(deg), y = ax.Y(l.e);
      dot(ctx, x, y, ce, occ[i] > 0, 7);
      for (let k = 0; k < occ[i]; k++) {
        const ex = x + 16 + 12 * k, up = k === 0;
        F.arrow(ctx, ex, up ? y + 11 : y - 11, ex, up ? y - 11 : y + 11, PAL.ink, 2);
      }
      hits.push({ x, y, r: 12, name: `${UNI[name(l.id)]}: ${minus(fmt(l.e, 2))} eV, ${occ[i] === 2 ? 'two electrons' : occ[i] === 1 ? 'one electron' : 'empty'}` });
    });
    F.legend(ctx, box, [{ s: 'occupied', color: ce, w: 5 }, { s: 'empty', color: alpha(ce, 0.5), w: 3, dash: [10, 10] }], { corner: 'br' });
    /* the sum of occupied levels against the angle */
    const b2x = { l: 170, r: 820, t: 545, b: 705 };
    const ref = sumOcc(mol.n, Math.PI);
    const ax2 = axes(ctx, b2x, [70, 180], [-4, 4], { nx: 0, ny: 4, yl: 'ΔE_occ (eV)', yc: ce });
    line(ctx, ax2.X(90), ax2.Y(0), b2x.r, ax2.Y(0), alpha(PAL.ink, 0.35), 2, [10, 10]);
    plot(ctx, ax2, (t) => sumOcc(mol.n, t * Math.PI / 180) - ref, ce, { w: 5, x: [90, 180] });
    const yb = ax2.Y(sumOcc(mol.n, bt * Math.PI / 180) - ref);
    dot(ctx, ax2.X(bt), yb, ce, false, 10);
    text(ctx, `lowest, ${fmt(bt, 1)}°`, Math.min(ax2.X(bt), b2x.r - 60), yb + (bt > 170 ? -28 : 30), ca, { size: 18, weight: 600, align: 'center', bg: PAL.panel });
    const yc = ax2.Y(sumOcc(mol.n, th) - ref);
    dot(ctx, ax2.X(deg), yc, ce, true, 8);
    line(ctx, ax2.X(deg), b2x.t, ax2.X(deg), b2x.b, alpha(ca, 0.8), 3, [4, 8]);
    hits.push({ x: ax2.X(bt), y: yb, r: 14, name: `the lowest sum of occupied levels, at ${fmt(bt, 1)}°` });
    /* the molecule at this angle with its HOMO */
    const cx = 1130, cy = 250, R = 150, s = Math.sin(th / 2), c = Math.cos(th / 2);
    const H1 = [cx + R * s, cy + R * c], H2 = [cx - R * s, cy + R * c];
    text(ctx, `HOMO: ${UNI[name(homo.id)]}`, cx, 112, PAL.ink, { size: 22, weight: 600, align: 'center' });
    const [cs, cpx, cpy, cpz, ch1, ch2] = homo.c;
    const big = Math.max(...homo.c.map(Math.abs));
    const col = (v) => (v >= 0 ? cw : cw2);
    const blob = (x, y, rr, v) => { if (Math.abs(v) < 0.04 * big) return; ctx.save(); ctx.globalAlpha = 0.55; ctx.fillStyle = col(v); ctx.beginPath(); ctx.arc(x, y, rr, 0, 2 * Math.PI); ctx.fill(); ctx.restore(); };
    const lobe = (ux, uy, v) => {   /* a p orbital along (ux, uy) on the page, coefficient v: its + lobe toward (ux, uy) when v > 0 */
      if (Math.abs(v) < 0.04 * big) return;
      const Lx = 30 + 70 * Math.abs(v) / big, w = 16 + 26 * Math.abs(v) / big;
      [1, -1].forEach((sgn) => {
        ctx.save(); ctx.globalAlpha = 0.55; ctx.fillStyle = col(v * sgn); ctx.translate(cx + sgn * ux * Lx * 0.55, cy + sgn * uy * Lx * 0.55); ctx.rotate(Math.atan2(uy, ux));
        ctx.beginPath(); ctx.ellipse(0, 0, Lx * 0.55, w, 0, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
      });
    };
    /* the page's y runs down, the molecule's z up: pz points up the page, away from the H atoms */
    blob(cx, cy, 20 + 60 * Math.abs(cs) / big, cs);
    lobe(0, -1, cpz); lobe(1, 0, cpy);
    if (Math.abs(cpx) > 0.04 * big) {   /* px stands out of the page: its near lobe face on, the far one a ring behind */
      ctx.save(); ctx.globalAlpha = 0.55; ctx.strokeStyle = col(-cpx); ctx.lineWidth = 8; ctx.beginPath(); ctx.arc(cx, cy, 64, 0, 2 * Math.PI); ctx.stroke();
      ctx.fillStyle = col(cpx); ctx.beginPath(); ctx.arc(cx, cy, 56, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
    }
    blob(H1[0], H1[1], 14 + 46 * Math.abs(ch1) / big, ch1);
    blob(H2[0], H2[1], 14 + 46 * Math.abs(ch2) / big, ch2);
    line(ctx, cx, cy, H1[0], H1[1], alpha(PAL.ink, 0.6), 3); line(ctx, cx, cy, H2[0], H2[1], alpha(PAL.ink, 0.6), 3);
    dot(ctx, cx, cy, F.el(mol.A), true, 16); dot(ctx, H1[0], H1[1], F.el('H'), true, 11); dot(ctx, H2[0], H2[1], F.el('H'), true, 11);
    text(ctx, mol.A, cx + 26, cy - 22, PAL.ink, { size: 20, weight: 600, bg: PAL.panel });
    F.angleArc(ctx, { x: cx, y: cy }, 44, Math.PI / 2 - th / 2, Math.PI / 2 + th / 2, `${fmt(deg, 1)}°`);
    hits.push({ x: cx, y: cy, r: 40, name: `atom ${mol.A}${Math.abs(cpx) > 0.04 * big ? ', with its 2p_x orbital standing out of the page' : ''}` }, { x: H1[0], y: H1[1], r: 30, name: 'a hydrogen atom' }, { x: H2[0], y: H2[1], r: 30, name: 'a hydrogen atom' });
    F.legend(ctx, { l: 900, r: 1380, t: 470, b: 560 }, [{ s: 'ψ > 0', color: cw, kind: 'swatch' }, { s: 'ψ < 0', color: cw2, kind: 'swatch' }], { corner: 'top', panel: false, row: true });
    /* readout: the sum of the occupied levels */
    const terms = L.map((l, i) => ({ l, k: occ[i] })).filter((q) => q.k);
    const sym = terms.map((q) => `${q.k === 2 ? 2 : ''}\\kE_{${name(q.l.id)}}`).join(' + ');
    const num = terms.map((q) => `${q.k === 2 ? 2 : ''}(${fmt(q.l.e, 2)})`).join(' + ');
    const tot = terms.reduce((a, q) => a + q.k * q.l.e, 0);
    tex(d.readout, `\\kE_{\\text{occ}} = ${sym} \\\\ \\kE_{\\text{occ}} = ${num} = ${fmt(tot, 2)}\\ \\text{eV}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 10.3.2 + 10.3.3: BeH2's molecular orbital diagram, a faithful
   copy in the house style. Still, no controls: the book draws one scene
   twice (the pairing, then the diagram), and nothing varies that the
   Walsh figure does not already vary. Be's 2s and 2p on the left, the two
   H 1s combinations on the right, the six MOs between them, filled with
   BeH2's four valence electrons; each MO drawn beside its level as signed
   lobes along H-Be-H, as the book's pictures do. Heights are the book's
   picture, not a scale.
===================================================================== */
(function () {
  const d = sim('fig-beh2', 600);
  const hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits.length = 0;
    const ce = C('energy'), cw = C('wavefunction'), cw2 = otherSign(cw);
    const XB = 200, XM = 470, XH = 740, Y = { s: 380, p: 250, h: 330, g1: 500, u1: 440, pi: 270, g3: 140, u2: 80 };
    F.arrow(ctx, 70, 560, 70, 50, ce, 4); text(ctx, 'E', 52, 300, ce, { size: 26, weight: 600, align: 'right' });
    const lev = (x, y, w = 80) => line(ctx, x - w / 2, y, x + w / 2, y, ce, 5);
    const pair = (x, y, n = 2) => { for (let k = 0; k < n; k++) { const ex = x - 8 + 16 * k, up = k === 0; F.arrow(ctx, ex, up ? y + 14 : y - 14, ex, up ? y - 14 : y + 14, PAL.ink, 2); } };
    const dash = (x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.45), 2, [6, 6]);
    /* Be */
    lev(XB, Y.s); text(ctx, '2s', XB - 52, Y.s, PAL.ink, { size: 22, align: 'right', base: 'middle' });
    [-1, 0, 1].forEach((k) => line(ctx, XB - 50 + 36 * (k + 1), Y.p, XB - 24 + 36 * (k + 1), Y.p, ce, 5));
    text(ctx, '2p', XB - 60, Y.p, PAL.ink, { size: 22, align: 'right', base: 'middle' });
    /* H combinations: no overlap, so both at the H 1s energy */
    line(ctx, XH - 40, Y.h - 8, XH + 40, Y.h - 8, ce, 5); line(ctx, XH - 40, Y.h + 8, XH + 40, Y.h + 8, ce, 5);
    pair(XH, Y.h - 8, 1); pair(XH + 22, Y.h + 8, 1);
    text(ctx, '1s combinations', XH + 52, Y.h, PAL.ink, { size: 20, base: 'middle' });
    /* MOs */
    const MO = [
      { y: Y.g1, n: 2, lab: '2σ_g', kind: 'bonding', from: [[XB, Y.s], [XH, Y.h]], pic: [['s', 1], ['h', 1, 1]] },
      { y: Y.u1, n: 2, lab: '1σ_u', kind: 'bonding', from: [[XB + 36, Y.p], [XH, Y.h]], pic: [['pz', 1], ['h', -1, 1]] },
      { y: Y.pi, n: 0, lab: '1π_u', kind: 'nonbonding', deg: 2, from: [[XB + 36, Y.p]], pic: [['px', 1]] },
      { y: Y.g3, n: 0, lab: '3σ_g', kind: 'antibonding', from: [[XB, Y.s], [XH, Y.h]], pic: [['s', 1], ['h', -1, -1]] },
      { y: Y.u2, n: 0, lab: '2σ_u', kind: 'antibonding', from: [[XB + 36, Y.p], [XH, Y.h]], pic: [['pz', 1], ['h', 1, -1]] },
    ];
    MO.forEach((m) => {
      if (m.deg) { line(ctx, XM - 50, m.y, XM - 6, m.y, ce, 5); line(ctx, XM + 6, m.y, XM + 50, m.y, ce, 5); } else lev(XM, m.y);
      m.from.forEach(([x, y]) => (x < XM ? dash(x + 44, y, XM - 50, m.y) : dash(XM + 50, m.y, x - 44, y)));
      if (m.n) pair(XM, m.y, m.n);
      text(ctx, m.lab, XM - 64, m.y, PAL.ink, { size: 20, align: 'right', base: 'middle', bg: PAL.panel });
      /* the picture: H - Be - H along x, 130 units long */
      const px0 = 1060, py = m.y, half = 70;
      m.pic.forEach((q) => {
        ctx.save(); ctx.globalAlpha = 0.6;
        if (q[0] === 's') { ctx.fillStyle = cw; ctx.beginPath(); ctx.arc(px0, py, 28, 0, 2 * Math.PI); ctx.fill(); }
        if (q[0] === 'h') { [[-1, q[1]], [1, q[2]]].forEach(([side, sgn]) => { ctx.fillStyle = sgn > 0 ? cw : cw2; ctx.beginPath(); ctx.arc(px0 + side * half, py, 22, 0, 2 * Math.PI); ctx.fill(); }); }
        if (q[0] === 'pz') { [[-1, cw2], [1, cw]].forEach(([side, col]) => { ctx.fillStyle = col; ctx.beginPath(); ctx.ellipse(px0 + side * 24, py, 24, 16, 0, 0, 2 * Math.PI); ctx.fill(); }); }
        if (q[0] === 'px') {
          [[-1, cw2], [1, cw]].forEach(([side, col]) => { ctx.fillStyle = col; ctx.beginPath(); ctx.ellipse(px0, py + side * 22, 14, 22, 0, 0, 2 * Math.PI); ctx.fill(); });
          ctx.fillStyle = cw; ctx.beginPath(); ctx.arc(px0 + 190, py, 22, 0, 2 * Math.PI); ctx.fill();
          ctx.strokeStyle = cw2; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(px0 + 190, py, 26, 0, 2 * Math.PI); ctx.stroke();
        }
        ctx.restore();
      });
      const atoms = (x0) => { line(ctx, x0 - half, py, x0 + half, py, alpha(PAL.ink, 0.6), 2); dot(ctx, x0 - half, py, F.el('H'), true, 6); dot(ctx, x0 + half, py, F.el('H'), true, 6); dot(ctx, x0, py, F.el('Be'), true, 8); };
      atoms(px0); if (m.pic[0][0] === 'px') atoms(px0 + 190);
      hits.push({ x: XM, y: m.y, r: 30, name: `${m.lab}, ${m.kind}${m.deg ? ', two orbitals: Be 2p_x and 2p_y alone' : ''}${m.n ? ', two electrons' : ', empty'}` });
      hits.push({ x: px0, y: py, r: 60, name: `${m.lab} drawn along H–Be–H` });
    });
    text(ctx, 'Be', XB, 585, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'HBeH', XM, 585, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'H atoms', XH, 585, PAL.ink, { size: 22, weight: 600, align: 'center' });
    F.legend(ctx, { l: 1140, r: 1390, t: 470, b: 590 }, [{ s: 'ψ > 0', color: cw, kind: 'swatch' }, { s: 'ψ < 0', color: cw2, kind: 'swatch' }], { corner: 'br' });
    tex(d.readout, `\\text{bond order} = \\dfrac{\\text{bonding} - \\text{antibonding}}{2} \\\\ \\text{bond order} = \\dfrac{4 - 0}{2} = 2`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 10.3.5 (both printed 10.3.5s): water's orbitals as clouds, with
   the MO diagram beneath. Mathematical 3D (root 28.3): the orbitals fill
   space, and 1b1 stands out of the molecule's plane. Still: a choice of
   orbital. Each cloud is 4000 points drawn from |chi|^2 of Table 10.3.1's
   LCAO: H 1s Slater functions (zeta 1.24 / a0) and O 2s, 2p Slater
   functions (zeta 2.275 / a0), O at the origin, the H atoms in the yz
   plane at 0.958 A and 104.5 deg, the C2 axis along z with the H atoms
   below (so pz's + lobe points away from them, as the table's signs
   ask). Points coloured by the sign of chi. Labels are the text's and
   the figure's (2a1 ... 2b2); the table numbers its a1 rows one lower,
   which the readout names. The diagram below places the MOs at the
   table's energies (eV); the atomic levels (O 2s, O 2p, the two H
   combinations) are drawn where the diagram's lines need them, without a
   scale. Orbit: azimuth free, elevation -85 to 85 deg; no buttons.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-water-mo');
  const BX = 4.2;
  const S = F.space3d(d, { box: [[-BX, BX], [-BX, BX], [-BX, BX]], h: 520, turn: -2.6, tilt: 0.35, fit: 2.6, pitch: [-85 * Math.PI / 180, 85 * Math.PI / 180], spin: 'off', zoom: false });
  const dia = F.makeCanvas(d.stage, 330);
  /* Table 10.3.1: [s(H1), s(O), px, py, pz, s(H2)], energy, the table's label */
  const ORB = [
    { id: '2a1', lab: '2a_1', t: '1a_1', E: -40.032, c: [0.315, 0.884, 0, 0, -0.143, 0.315] },
    { id: '1b2', lab: '1b_2', t: '1b_2', E: -19.113, c: [-0.473, 0, 0, -0.743, 0, 0.473] },
    { id: '3a1', lab: '3a_1', t: '2a_1', E: -14.467, c: [-0.309, 0.354, 0, 0, 0.827, -0.309] },
    { id: '1b1', lab: '1b_1', t: '1b_1', E: -12.191, c: [0, 0, -1, 0, 0, 0] },
    { id: '4a1', lab: '4a_1', t: '3a_1', E: 5.44, c: [-0.553, 0.306, 0, 0, -0.544, 0.553] },
    { id: '2b2', lab: '2b_2', t: '2b_2', E: 6.728, c: [0.525, 0, 0, -0.669, 0, -0.525] },
  ];
  const UNI = { '2a1': '2a₁', '1b2': '1b₂', '3a1': '3a₁', '1b1': '1b₁', '4a1': '4a₁', '2b2': '2b₂' };
  const K = F.choice(d.controls, { label: '\\text{orbital}', options: ORB.map((o) => ({ value: o.id, label: `$${o.lab}$` })), value: '1b1', aria: 'the molecular orbital of water drawn', key: 'orbital' });
  const RB = 0.958 / 0.529177, HALF = 104.5 / 2 * Math.PI / 180;
  const H1 = [0, RB * Math.sin(HALF), -RB * Math.cos(HALF)], H2 = [0, -RB * Math.sin(HALF), -RB * Math.cos(HALF)];
  const ZH = 1.24, ZO = 2.275;
  const h1s = (p, q) => { const r = Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]); return Math.exp(-ZH * r); };
  const NS = Math.pow(ZH, 1.5), NO = Math.pow(2 * ZO, 2.5) / Math.sqrt(24);
  function chi(o, p) {
    const r = Math.hypot(p[0], p[1], p[2]), eo = NO * Math.exp(-ZO * r);
    return NS * (o.c[0] * h1s(p, H1) + o.c[5] * h1s(p, H2)) + eo * (o.c[1] * r * 0.5 + o.c[2] * p[0] + o.c[3] * p[1] + o.c[4] * p[2]);
  }
  /* a seeded generator, so a cloud is the same on every load */
  const rng = (s) => () => { s |= 0; s = (s + 0x6d2b79f5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const made = new Map();
  function cloud(o) {
    if (made.has(o.id)) return made.get(o.id);
    const rnd = rng(1030 + o.id.charCodeAt(0) * 7 + o.id.charCodeAt(1));
    let mx = 0; for (let i = 0; i < 20000; i++) { const p = [BX * (2 * rnd() - 1), BX * (2 * rnd() - 1), BX * (2 * rnd() - 1)], v = chi(o, p); mx = Math.max(mx, v * v); }
    [[0, 0, 0.3], [0, 0, -0.3], [0.3, 0, 0], [0, 0.3, 0], H1, H2].forEach((p) => { const v = chi(o, p); mx = Math.max(mx, v * v); });
    mx *= 1.3;
    const plus = [], neg = [];
    for (let n = 0; n < 4e6 && plus.length + neg.length < 4000; n++) {
      const p = [BX * (2 * rnd() - 1), BX * (2 * rnd() - 1), BX * (2 * rnd() - 1)], v = chi(o, p);
      if (rnd() * mx < v * v) (v >= 0 ? plus : neg).push(p);
    }
    const got = { plus, neg }; made.set(o.id, got); return got;
  }
  const hits = []; F.hover(d.stage, () => hits, dia);
  let last = '';
  function draw() {
    const o = ORB.find((q) => q.id === K.value);
    const cw = C('wavefunction'), up = cw, down = otherSign(cw);
    const key = [o.id, up, down, PAL.ink, F.el('O'), F.el('H')].join('|');
    if (key !== last) {
      last = key;
      const { plus, neg } = cloud(o);
      S.set('cloud', [
        { k: 'points', pts: plus, color: up, r: 3, name: `${UNI[o.id]} where χ > 0` },
        { k: 'points', pts: neg, color: down, r: 3, name: `${UNI[o.id]} where χ < 0` },
      ]);
      S.set('atoms', [
        { k: 'line', pts: [[0, 0, 0], H1], color: 'guide', w: 3 }, { k: 'line', pts: [[0, 0, 0], H2], color: 'guide', w: 3 },
        { k: 'points', pts: [[0, 0, 0]], color: F.el('O'), r: 16, name: 'the oxygen atom' },
        { k: 'points', pts: [H1, H2], color: F.el('H'), r: 11, name: 'a hydrogen atom' },
        { k: 'label', s: 'O', p: [0, 0, 0.7], color: PAL.ink, cls: 'bare' },
      ]);
    }
    S.headline(o.id === '1b1' ? '1b₁ has no partner of its symmetry: it stays an oxygen p orbital, out of the plane.' : `${UNI[o.id]} spreads over all three atoms.`);
    /* the diagram */
    const { ctx } = begin(dia);
    hits.length = 0;
    const ce = C('energy');
    const Y = (E) => 300 - (E + 42) * (270 / 52);
    const XO = 260, XM = 700, XH = 1140;
    const AO = { s: { x: XO, E: -32.4, lab: '2s' }, p: { x: XO, E: -15.9, lab: '2p' }, sg: { x: XH, E: -13.6, lab: 'σ (a₁)' }, su: { x: XH, E: -13.6, lab: 'σ* (b₂)' } };
    F.arrow(ctx, 70, 315, 70, 20, ce, 4); text(ctx, 'E', 52, 160, ce, { size: 24, weight: 600, align: 'right' });
    line(ctx, XO - 40, Y(AO.s.E), XO + 40, Y(AO.s.E), ce, 4); text(ctx, 'O 2s', XO - 52, Y(AO.s.E), PAL.ink, { size: 18, align: 'right', base: 'middle' });
    line(ctx, XO - 40, Y(AO.p.E), XO + 40, Y(AO.p.E), ce, 4); text(ctx, 'O 2p', XO - 52, Y(AO.p.E), PAL.ink, { size: 18, align: 'right', base: 'middle' });
    line(ctx, XH - 40, Y(-13.6) - 5, XH + 40, Y(-13.6) - 5, ce, 4); line(ctx, XH - 40, Y(-13.6) + 5, XH + 40, Y(-13.6) + 5, ce, 4);
    text(ctx, 'H₂: σ (a₁), σ* (b₂)', XH + 52, Y(-13.6), PAL.ink, { size: 18, base: 'middle' });
    ORB.forEach((q, i) => {
      const y = Y(q.E), sel = q.id === o.id, w = 90;
      const from = [];
      if (q.c[1]) from.push([XO, Y(AO.s.E)]);
      if (q.c[2] || q.c[3] || q.c[4]) from.push([XO, Y(AO.p.E)]);
      if (q.c[0]) from.push([XH, Y(-13.6)]);
      from.forEach(([x, yy]) => line(ctx, x < XM ? x + 44 : XM + w / 2 + 4, x < XM ? yy : y, x < XM ? XM - w / 2 - 4 : x - 44, x < XM ? y : yy, alpha(PAL.ink, sel ? 0.7 : 0.3), sel ? 3 : 2, [6, 6]));
      line(ctx, XM - w / 2, y, XM + w / 2, y, sel ? ce : alpha(ce, 0.55), sel ? 7 : 4);
      if (i < 4) { F.arrow(ctx, XM - 8, y + 11, XM - 8, y - 11, PAL.ink, 2); F.arrow(ctx, XM + 8, y - 11, XM + 8, y + 11, PAL.ink, 2); }
      text(ctx, UNI[q.id], XM + w / 2 + 14 + (i === 5 ? 48 : 0), y, sel ? PAL.ink : PAL.muted, { size: 19, weight: sel ? 600 : 400, base: 'middle', bg: PAL.panel });
      hits.push({ x: XM, y, r: 16, name: `${UNI[q.id]}: ${minus(fmt(q.E, 3))} eV${i < 4 ? ', two electrons' : ', empty'}` });
    });
    const terms = [['1s', 'H_1', 0], ['2s', 'O', 1], ['2p_x', 'O', 2], ['2p_y', 'O', 3], ['2p_z', 'O', 4], ['1s', 'H_2', 5]].filter((t) => o.c[t[2]]);
    const sum = terms.map((t, i) => { const v = o.c[t[2]]; const s = sg(v); return `${i === 0 ? s.replace(/^\+ /, '') : s}\\,|${t[0]}\\rangle_{${t[1]}}`; }).join(' ');
    tex(d.readout, `|\\kchi_{${o.lab}}\\rangle = ${sum} \\\\ \\kE_{${o.lab}} = ${fmt(o.E, 3)}\\ \\text{eV} \\\\ \\small \\text{Table 10.3.1 lists it as } ${o.t}`, false, { values: false });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
