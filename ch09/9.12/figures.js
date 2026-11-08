/* Figures for section 9.12 Molecular-Orbital Theory Also Applies to Heteronuclear Diatomic Molecules. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.12'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, text, topline, fmt, arrow } = F;
const sim = (id, H) => F.sim(root, id, H);

/* =====================================================================
   FIGURE 9.12.4: the skewed energy-level diagram of a molecule AB.
   Still: the slider moves B's atomic orbitals below A's by Delta, and
   every pair of interacting orbitals is solved as a two-orbital LCAO
   (7.2's secular equations, overlap neglected): E = (aA + aB)/2 -+
   sqrt((Delta/2)^2 + beta^2), with the bonding orbital's share on B
   c_B^2 = (1 + (Delta/2)/sqrt((Delta/2)^2 + beta^2))/2. The model's
   numbers are ours: A's s at -20 eV and p at -8 eV, beta 3 eV for the s
   pair, 3.5 eV for p sigma and 1.8 eV for p pi. Delta 0 to 5 eV, opening
   at 3 eV, the book's moderate skew; 0 is a homonuclear diagram. E axis
   fixed -28 to -2 eV. A and B are told apart by F.cat(0) and F.cat(1);
   each molecular level wears the blend of the two by its share, and a
   bar beside it gives the share. No electrons: the book's diagram has
   none.
===================================================================== */
(function () {
  const d = sim('sim-skewed', 640);
  const DL = ctl(d.controls, { label: '\\Delta', cls: 'energy', key: 'gap', min: 0, max: 5, step: 0.1, value: 3, unit: 'eV', dec: 1,
    detents: [{ v: 0, label: 'A = B' }], snap: true, aria: 'how far the orbitals of B lie below those of A, in electronvolts' });
  const A = { s: -20, p: -8 }, BETA = { s: 3, sp: 3.5, pp: 1.8 };
  const Y = (E) => 600 - (E + 28) * (490 / 26);
  const XA = 280, XM = 700, XB = 1120;
  const hits = [];
  F.hover(d.stage, () => hits);
  function pair(aA, aB, beta) {
    const m = (aA + aB) / 2, h = (aA - aB) / 2, r = Math.sqrt(h * h + beta * beta);
    const cB = (1 + h / r) / 2;
    return { lo: m - r, hi: m + r, cBlo: cB, cBhi: 1 - cB };
  }
  function draw() {
    const { ctx } = begin(d.c);
    const D = DL.v, cA = F.cat(0), cBc = F.cat(1);
    const B = { s: A.s - D, p: A.p - D };
    const ps = pair(A.s, B.s, BETA.s), pp = pair(A.p, B.p, BETA.sp), pi = pair(A.p, B.p, BETA.pp);
    const MO = [
      { n: 'σ', E: ps.lo, cB: ps.cBlo, deg: 1, from: 's', h: 'the bonding σ orbital from the s orbitals' },
      { n: 'σ*', E: ps.hi, cB: ps.cBhi, deg: 1, from: 's', h: 'the antibonding σ* orbital from the s orbitals' },
      { n: 'σ', E: pp.lo, cB: pp.cBlo, deg: 1, from: 'p', h: 'the bonding σ orbital from the p orbitals' },
      { n: 'π', E: pi.lo, cB: pi.cBlo, deg: 2, from: 'p', h: 'the bonding π pair' },
      { n: 'π*', E: pi.hi, cB: pi.cBhi, deg: 2, from: 'p', h: 'the antibonding π* pair' },
      { n: 'σ*', E: pp.hi, cB: pp.cBhi, deg: 1, from: 'p', h: 'the antibonding σ* orbital from the p orbitals' },
    ];
    topline(ctx, D < 0.05 ? 'With A and B alike, each bonding orbital is shared equally between them.'
      : `B's orbitals lie ${fmt(D, 1)} eV below A's: the bonding σ orbital from the p orbitals is ${fmt(100 * pp.cBlo, 0)}% on B.`);
    arrow(ctx, 110, 610, 110, 100, C('energy'), 4);
    text(ctx, 'E', 88, 355, C('energy'), { size: 26, weight: 600, align: 'right' });
    hits.length = 0;
    /* atomic levels */
    const atom = (x, E, deg, col, side, who) => {
      const w = deg === 3 ? 40 : 70, gap = 12, tot = deg * w + (deg - 1) * gap, x0 = x - tot / 2;
      for (let i = 0; i < deg; i++) line(ctx, x0 + i * (w + gap), Y(E), x0 + i * (w + gap) + w, Y(E), col, 5);
      text(ctx, deg === 3 ? 'p' : 's', side < 0 ? x0 - 16 : x0 + tot + 16, Y(E), col, { size: 24, align: side < 0 ? 'right' : 'left', base: 'middle' });
      hits.push({ x, y: Y(E), r: 50, name: `the ${deg === 3 ? 'p' : 's'} orbital${deg === 3 ? 's' : ''} of atom ${who}, ${fmt(E, 1)} eV` });
      return { l: x0, r: x0 + tot };
    };
    const As = atom(XA, A.s, 1, cA, -1, 'A'), Ap = atom(XA, A.p, 3, cA, -1, 'A');
    const Bs = atom(XB, B.s, 1, cBc, 1, 'B'), Bp = atom(XB, B.p, 3, cBc, 1, 'B');
    const ends = { s: [As, Bs, A.s, B.s], p: [Ap, Bp, A.p, B.p] };
    MO.forEach((m) => {
      const [La, Lb, Ea, Eb] = ends[m.from], w = 64, gap = 12, tot = m.deg * w + (m.deg - 1) * gap, x0 = XM - tot / 2, y = Y(m.E);
      line(ctx, La.r + 8, Y(Ea), x0 - 8, y, alpha(cA, 0.45), 2, [6, 6]);
      line(ctx, x0 + tot + 8, y, Lb.l - 8, Y(Eb), alpha(cBc, 0.45), 2, [6, 6]);
      const col = F.mixColor(cA, cBc, m.cB);
      for (let i = 0; i < m.deg; i++) line(ctx, x0 + i * (w + gap), y, x0 + i * (w + gap) + w, y, col, 6);
      text(ctx, m.n, x0 - 18, y, PAL.ink, { size: 22, align: 'right', base: 'middle', bg: PAL.panel });
      /* the share on A and on B */
      const bx = XM + (m.deg === 2 ? 200 : 90), bw = 90, bh = 12;
      ctx.save(); ctx.fillStyle = cA; ctx.fillRect(bx, y - bh / 2, bw * (1 - m.cB), bh); ctx.fillStyle = cBc; ctx.fillRect(bx + bw * (1 - m.cB), y - bh / 2, bw * m.cB, bh); ctx.restore();
      hits.push({ x: XM, y, r: 44, name: `${m.h}: ${fmt(m.E, 1)} eV, ${fmt(100 * (1 - m.cB), 0)}% on A and ${fmt(100 * m.cB, 0)}% on B` });
    });
    text(ctx, 'A', XA, 626, cA, { size: 24, weight: 600, align: 'center' });
    text(ctx, 'AB', XM, 626, PAL.ink, { size: 24, weight: 600, align: 'center' });
    text(ctx, 'B', XB, 626, cBc, { size: 24, weight: 600, align: 'center' });
    F.legend(ctx, { l: 900, r: 1380, t: 96, b: 200 }, [{ s: 'share on A', color: cA, kind: 'swatch' }, { s: 'share on B', color: cBc, kind: 'swatch' }], { corner: 'tr' });
    const m = (A.p + B.p) / 2;
    tex(d.readout, `\\kE_{\\sigma} = \\dfrac{\\alpha_A + \\alpha_B}{2} - \\sqrt{\\left(\\dfrac{\\Delta}{2}\\right)^2 + \\beta^2} \\\\ \\kE_{\\sigma} = ${fmt(m, 2)} - \\sqrt{(${fmt(D / 2, 2)})^2 + (${fmt(BETA.sp, 1)})^2}\\ \\text{eV} = ${fmt(pp.lo, 2)}\\ \\text{eV}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
