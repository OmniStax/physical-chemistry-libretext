/* Figures for section 9.10 Molecular Orbital Theory Predicts that Molecular Oxygen is Paramagnetic. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.10'] = function (root, F) {
const { tex, C, PAL, alpha, register, begin, line, dot, text, topline, axes, fmt, arrow } = F;
const sim = (id, H) => F.sim(root, id, H);
const bo = (b) => (b % 1 ? fmt(b, 1) : String(b));

/* =====================================================================
   FIGURE 9.10.1 + 9.10.2: bond length or bond energy against the number of
   valence electrons, the period-2 homonuclear diatomics and their ions.
   Still: each species is a fixed point; the choices pick the quantity and
   the species whose bond order is worked. Top: the quantity, neutral
   molecules filled and joined (Figure 9.10.1), ions hollow (Figure
   9.10.2). Below, on the same x: the bond order (n_b - n_a)/2 of every
   species. Ranges fixed per quantity: length 100 to 280 pm (Li2 267 pm),
   energy 0 to 1000 kJ/mol (N2 942). Data: bond lengths r_e and
   dissociation energies D_0 of the neutrals, N2+ and O2+ from Huber and
   Herzberg (NIST); O2+, O2- and O2 2- lengths as Example 9.10.1 prints
   them; C2 2- from calcium carbide. Be2 has bond order 0: it appears only
   in the bond-order panel. Ion labels ride on hover; the chosen species
   is ringed and named.
===================================================================== */
(function () {
  const d = sim('sim-bond-trends', 700);
  /* [key, label, valence electrons, bonding, antibonding, length pm, energy kJ/mol, ion?] */
  const SP = [
    ['Li2', 'Li₂', 2, 2, 0, 267.3, 101, false],
    ['Be2', 'Be₂', 4, 2, 2, null, null, false],
    ['B2', 'B₂', 6, 4, 2, 159.0, 290, false],
    ['C2', 'C₂', 8, 6, 2, 124.3, 602, false],
    ['N2+', 'N₂⁺', 9, 7, 2, 111.6, 840, true],
    ['N2', 'N₂', 10, 8, 2, 109.8, 942, false],
    ['C2--', 'C₂²⁻', 10, 8, 2, 120, null, true],
    ['O2+', 'O₂⁺', 11, 8, 3, 112.2, 643, true],
    ['O2', 'O₂', 12, 8, 4, 120.7, 494, false],
    ['O2-', 'O₂⁻', 13, 8, 5, 128, 395, true],
    ['O2--', 'O₂²⁻', 14, 8, 6, 149, null, true],
    ['F2', 'F₂', 14, 8, 6, 141.2, 155, false],
  ];
  const NAME = { 2: 'Li₂', 4: 'Be₂', 6: 'B₂', 8: 'C₂', 10: 'N₂', 12: 'O₂', 14: 'F₂' };
  const Q = F.choice(d.controls, { label: '\\text{plot}', key: 'quantity', options: [{ value: 'r', label: 'bond length' }, { value: 'e', label: 'bond energy' }], value: 'r', aria: 'the quantity plotted against the number of valence electrons' });
  const K = F.select(d.controls, { label: '\\text{species}', key: 'species', options: SP.map((s) => ({ value: s[0], label: s[1] })), value: 'O2', aria: 'the molecule or ion whose bond order is worked out' });
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    const isR = Q.value === 'r', col = isR ? C('length') : C('energy'), idx = isR ? 5 : 6;
    const s = SP.find((r) => r[0] === K.value), b = (s[3] - s[4]) / 2, val = s[idx];
    topline(ctx, val == null
      ? `${s[1]} has a bond order of ${bo(b)}${b === 0 ? ', so no bond forms' : `; its ${isR ? 'bond length' : 'bond energy'} is not plotted`}.`
      : `${s[1]} has a bond order of ${bo(b)} and a ${isR ? `bond length of ${fmt(val, val % 1 ? 1 : 0)} pm` : `bond energy of ${fmt(val, 0)} kJ/mol`}.`);
    const fx = (v) => NAME[v] || '';
    const top = { l: 170, r: W - 80, t: 110, b: 410 }, bot = { l: 170, r: W - 80, t: 480, b: 620 };
    const ax = axes(ctx, top, [0, 16], isR ? [100, 280] : [0, 1000], { nx: 8, ny: isR ? 9 : 5, fx, yl: isR ? 'bond length (pm)' : 'bond energy (kJ/mol)', yc: col });
    const bx = axes(ctx, bot, [0, 16], [0, 3], { nx: 8, ny: 3, fx, xl: 'valence electrons', yl: 'bond order' });
    hits.length = 0;
    /* the neutral molecules, joined as the book joins them */
    const neut = SP.filter((r) => !r[7] && r[idx] != null);
    ctx.save(); ctx.strokeStyle = alpha(col, 0.7); ctx.lineWidth = 3; ctx.beginPath();
    neut.forEach((r, i) => { const x = ax.X(r[2]), y = ax.Y(r[idx]); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }); ctx.stroke(); ctx.restore();
    const nb = SP.filter((r) => !r[7]);
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 3; ctx.beginPath();
    nb.forEach((r, i) => { const x = bx.X(r[2]), y = bx.Y((r[3] - r[4]) / 2); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }); ctx.stroke(); ctx.restore();
    SP.forEach((r) => {
      const ord = (r[3] - r[4]) / 2, v = r[idx], conf = `${r[3]} bonding and ${r[4]} antibonding valence electrons`;
      if (v != null) {
        dot(ctx, ax.X(r[2]), ax.Y(v), col, !r[7], r[7] ? 9 : 10);
        hits.push({ x: ax.X(r[2]), y: ax.Y(v), r: 14, name: `${r[1]}: ${isR ? fmt(v, v % 1 ? 1 : 0) + ' pm' : fmt(v, 0) + ' kJ/mol'}, bond order ${bo(ord)}` });
      }
      dot(ctx, bx.X(r[2]), bx.Y(ord), PAL.ink, !r[7], r[7] ? 9 : 8);
      hits.push({ x: bx.X(r[2]), y: bx.Y(ord), r: 14, name: `${r[1]}: ${conf}, bond order ${bo(ord)}` });
    });
    /* the chosen species, ringed in both panels and named */
    const rx = ax.X(s[2]);
    if (val != null) { ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(rx, ax.Y(val), 20, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
      text(ctx, s[1], rx + (s[2] >= 13 ? -28 : 28), ax.Y(val) - 22, PAL.ink, { size: 22, weight: 600, align: s[2] >= 13 ? 'right' : 'left', bg: PAL.panel }); }
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.8); ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(rx, bx.Y(b), 18, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    F.legend(ctx, ax, [{ s: 'neutral molecule', color: col, kind: 'dot' }, { s: 'ion', color: col, kind: 'dot', hollow: true }], { corner: 'tr' });
    tex(d.readout, `\\text{bond order} = \\dfrac{n_b - n_a}{2} \\\\ \\text{bond order of }\\mathrm{${s[1].replace('₂', '_2').replace('⁺', '^+').replace('²⁻', '^{2-}').replace('⁻', '^-')}} = \\dfrac{${s[3]} - ${s[4]}}{2} = ${bo(b)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.10.3: the valence molecular orbitals of O2 and its ions,
   filled. Still: a choice of species (Example 9.10.1's four). Levels are
   schematic, in the order the book gives O2 (sigma_2p below pi_2p), as the
   book prints no energies. Electrons fill by the Aufbau principle,
   Pauli's principle and Hund's rule; they are symbolic half-arrows. Below
   the diagram the two O atoms stand apart by the bond length Example
   9.10.1 gives, at 3 units per pm, so adding an electron to pi* visibly
   stretches the bond. The atoms are drawn in the element colour.
===================================================================== */
(function () {
  const d = sim('sim-o2-ions', 740);
  const SPEC = { 'O2+': { s: 'O₂⁺', t: 'O_2^+', n: 11, r: 112.2 }, O2: { s: 'O₂', t: 'O_2', n: 12, r: 121 }, 'O2-': { s: 'O₂⁻', t: 'O_2^-', n: 13, r: 128 }, 'O2--': { s: 'O₂²⁻', t: 'O_2^{2-}', n: 14, r: 149 } };
  const K = F.choice(d.controls, { label: '\\text{species}', key: 'species', options: Object.keys(SPEC).map((k) => ({ value: k, label: SPEC[k].s })), value: 'O2', aria: 'the oxygen species' });
  /* valence MOs in order of energy; y on the canvas (smaller is higher) */
  const MO = [
    { n: 'σ_{2s}', h: 'σ2s', y: 540, deg: 1, anti: false, from: 's' },
    { n: 'σ*_{2s}', h: 'σ*2s', y: 465, deg: 1, anti: true, from: 's' },
    { n: 'σ_{2p}', h: 'σ2p', y: 345, deg: 1, anti: false, from: 'p' },
    { n: 'π_{2p}', h: 'π2p', y: 295, deg: 2, anti: false, from: 'p' },
    { n: 'π*_{2p}', h: 'π*2p', y: 205, deg: 2, anti: true, from: 'p' },
    { n: 'σ*_{2p}', h: 'σ*2p', y: 135, deg: 1, anti: true, from: 'p' },
  ];
  const AT = { s: 505, p: 250 };
  const hits = [];
  F.hover(d.stage, () => hits);
  /* one electron as a half-arrow standing on the orbital line at (x, y) */
  function electron(ctx, x, y, up) {
    const s = up ? -1 : 1, t = y - 19 + s * 17, b = y - 19 - s * 17;
    line(ctx, x, b, x, t, PAL.ink, 3);
    line(ctx, x, t, x + (up ? -9 : 9), t - s * 11, PAL.ink, 3);
  }
  function level(ctx, x, y, deg, k, w) {
    const gap = 16, tot = deg * w + (deg - 1) * gap, x0 = x - tot / 2;
    const occ = Array(deg).fill(0); for (let i = 0; i < k; i++) occ[i % deg]++;
    for (let i = 0; i < deg; i++) {
      const xa = x0 + i * (w + gap), cx = xa + w / 2;
      line(ctx, xa, y, xa + w, y, PAL.ink, 5);
      if (occ[i] >= 1) electron(ctx, occ[i] === 2 ? cx - 11 : cx, y, true);
      if (occ[i] === 2) electron(ctx, cx + 11, y, false);
    }
    return { l: x0, r: x0 + tot, occ };
  }
  function draw() {
    const { ctx } = begin(d.c);
    const sp = SPEC[K.value];
    let left = sp.n; const occ = MO.map((m) => { const k = Math.min(left, 2 * m.deg); left -= k; return k; });
    let nb = 0, na = 0, unp = 0;
    MO.forEach((m, i) => { if (m.anti) na += occ[i]; else nb += occ[i]; });
    const XL = 300, XM = 700, XR = 1100;
    /* energy axis */
    arrow(ctx, 110, 580, 110, 110, C('energy'), 4);
    text(ctx, 'E', 88, 345, C('energy'), { size: 26, weight: 600, align: 'right' });
    hits.length = 0;
    [['s', '2s', 1], ['p', '2p', 3]].forEach(([k, nm, deg]) => {
      const w = deg === 3 ? 44 : 70;
      const L = level(ctx, XL, AT[k], deg, 0, w), R = level(ctx, XR, AT[k], deg, 0, w);
      text(ctx, nm, L.l - 16, AT[k], PAL.ink, { size: 22, align: 'right', base: 'middle' });
      text(ctx, nm, R.r + 16, AT[k], PAL.ink, { size: 22, base: 'middle' });
      hits.push({ x: XL, y: AT[k], r: 50, name: `the ${nm} orbital${deg > 1 ? 's' : ''} of one O atom` }, { x: XR, y: AT[k], r: 50, name: `the ${nm} orbital${deg > 1 ? 's' : ''} of the other O atom` });
      MO.filter((m) => m.from === k).forEach((m) => {
        const tot = m.deg * 70 + (m.deg - 1) * 16;
        line(ctx, L.r + 8, AT[k], XM - tot / 2 - 8, m.y, alpha(PAL.ink, 0.35), 2, [6, 6]);
        line(ctx, XM + tot / 2 + 8, m.y, R.l - 8, AT[k], alpha(PAL.ink, 0.35), 2, [6, 6]);
      });
    });
    MO.forEach((m, i) => {
      const L = level(ctx, XM, m.y, m.deg, occ[i], 70);
      L.occ.forEach((o) => { if (o === 1) unp++; });
      text(ctx, m.n, L.r + 18, m.y - 4, PAL.ink, { size: 22, base: 'middle', bg: PAL.panel });
      hits.push({ x: XM, y: m.y - 14, r: 50, name: `${m.h}, ${m.anti ? 'antibonding' : 'bonding'}: ${occ[i]} electron${occ[i] === 1 ? '' : 's'}` });
    });
    text(ctx, 'O', XL, 600, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, sp.s, XM, 600, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'O', XR, 600, PAL.ink, { size: 22, weight: 600, align: 'center' });
    /* the bond, to scale: 3 units per pm */
    const half = sp.r * 3 / 2, yb = 670, rad = 26;
    line(ctx, XM - half, yb, XM + half, yb, alpha(PAL.ink, 0.5), 4);
    [-1, 1].forEach((sg) => { ctx.save(); ctx.fillStyle = F.el('O'); ctx.beginPath(); ctx.arc(XM + sg * half, yb, rad, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
      text(ctx, 'O', XM + sg * half, yb, PAL.ink, { size: 20, weight: 600, align: 'center', base: 'middle' }); });
    text(ctx, `${fmt(sp.r, sp.r % 1 ? 1 : 0)} pm`, XM + half + rad + 18, yb, C('length'), { size: 22, weight: 600, base: 'middle' });
    hits.push({ x: XM, y: yb, r: 40, name: `the O–O bond of ${sp.s}, ${fmt(sp.r, sp.r % 1 ? 1 : 0)} pm` });
    const b = (nb - na) / 2;
    topline(ctx, `${sp.s} has ${sp.n} valence electrons, ${occ[4]} of them in π*: ${unp === 0 ? 'none unpaired, so it is not paramagnetic' : unp === 1 ? 'one unpaired, so it is paramagnetic' : 'two unpaired, so it is paramagnetic'}.`);
    tex(d.readout, `\\text{bond order} = \\dfrac{n_b - n_a}{2} \\\\ \\text{bond order of }\\mathrm{${sp.t}} = \\dfrac{${nb} - ${na}}{2} = ${bo(b)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
