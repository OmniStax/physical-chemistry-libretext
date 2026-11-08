/* Figures for section 12.3 Symmetry Operations Define Groups. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['12.3'] = function (root, F) {
const { tex, C, PAL, alpha, register, begin, line, dot, text, topline, arrow } = F;

/* ---------- the operations of C3v on NH3, as permutations of the three H sites ----------
   Seen from above the C3 axis, the H sites 0, 1, 2 stand at 90°, 210° and 330°, anticlockwise.
   C3+ carries the atom on site k to site k + 1 (anticlockwise), C3- to k - 1. sigma_v holds the
   plane through site 0, sigma_v' the one through site 2 and sigma_v'' the one through site 1: the
   naming that gives the book's table (12.3.5), which the script checks on load. */
const OPS = ['E', 'C3p', 'C3m', 's', 'sp', 'spp'];
const PERM = { E: [0, 1, 2], C3p: [1, 2, 0], C3m: [2, 0, 1], s: [0, 2, 1], sp: [1, 0, 2], spp: [2, 1, 0] };
const SITE = { s: 0, sp: 2, spp: 1 };
const NAME = { E: 'E', C3p: 'C₃⁺', C3m: 'C₃⁻', s: 'σᵥ', sp: 'σᵥ′', spp: 'σᵥ″' };
const TEXOF = { E: '\\kEop', C3p: '\\kCthree^{+}', C3m: '\\kCthree^{-}', s: '\\ksigmav', sp: '\\ksigmavp', spp: '\\ksigmavpp' };
const LONG = { E: 'the identity E', C3p: 'the anticlockwise rotation C₃⁺', C3m: 'the clockwise rotation C₃⁻', s: 'the reflection σᵥ', sp: 'the reflection σᵥ′', spp: 'the reflection σᵥ″' };
/* B after A: the atom on site k goes to PERM[A][k], then on to PERM[B] of that */
const prod = (B, A) => OPS.find((g) => [0, 1, 2].every((k) => PERM[g][k] === PERM[B][PERM[A][k]]));
/* the book's table, rows the second operation, columns the first */
const BOOK = {
  E: ['E', 'C3p', 'C3m', 's', 'sp', 'spp'], C3p: ['C3p', 'C3m', 'E', 'sp', 'spp', 's'], C3m: ['C3m', 'E', 'C3p', 'spp', 's', 'sp'],
  s: ['s', 'spp', 'sp', 'E', 'C3m', 'C3p'], sp: ['sp', 's', 'spp', 'C3p', 'E', 'C3m'], spp: ['spp', 'sp', 's', 'C3m', 'C3p', 'E'],
};
OPS.forEach((B) => OPS.forEach((A, j) => { if (prod(B, A) !== BOOK[B][j]) console.warn(`12.3: ${B}·${A} is not the book's ${BOOK[B][j]}`); }));

/* ---------- Figure: two operations in sequence on NH3 ----------
   NH3 from above its C3 axis, tilted 20° so the N stands visibly over the H plane (a locked view, root 28.2).
   Moving: the first operation carries the numbered H atoms (a turn about the axis, or a slide straight through
   the mirror plane), then the second, then the single operation that does both is named and its cell lit in
   the multiplication table beside. The cell of the reverse order is ringed. */
(function () {
  const d = F.sim(root, 'sim-c3v-product', 600);
  const T1 = [0.3, 1.9], T2 = [2.5, 4.1], RUN = 4.6;
  const cy = F.cycle(() => RUN, 1.6);
  const opts = OPS.map((g) => ({ value: g, label: `$${TEXOF[g]}$` }));
  const A = F.choice(d.controls, { label: 'first', options: opts, value: 'C3p', aria: 'the operation applied first', key: 'first', onInput: () => cy.reset() });
  const B = F.choice(d.controls, { label: 'then', options: opts, value: 's', aria: 'the operation applied second', key: 'second', onInput: () => cy.reset() });
  const hits = [];
  F.hover(d.stage, () => hits);
  const cx = 360, cy0 = 350, S = 175, TILT = 0.35, R = 0.94, ZN = 0.38;
  const ang = (k) => (90 + 120 * k) * Math.PI / 180;
  const P = ([x, y, z]) => [cx + S * x, cy0 - S * (y * Math.cos(TILT) + z * Math.sin(TILT))];
  const smooth = (k) => k * k * (3 - 2 * k);
  /* where the atom that sits on site k lands under g, part way (q from 0 to 1) */
  function move(g, k, q) {
    const a0 = ang(k);
    if (g === 'C3p' || g === 'C3m') { const a = a0 + (g === 'C3p' ? 1 : -1) * q * 2 * Math.PI / 3; return [R * Math.cos(a), R * Math.sin(a), 0]; }
    if (g === 'E') return [R * Math.cos(a0), R * Math.sin(a0), 0];
    const n = ang(SITE[g]) + Math.PI / 2, ux = Math.cos(n), uy = Math.sin(n);   /* the plane's normal */
    const x = R * Math.cos(a0), y = R * Math.sin(a0), dn = x * ux + y * uy;
    return [x - 2 * q * dn * ux, y - 2 * q * dn * uy, 0];
  }
  function draw() {
    const { ctx, W } = begin(d.c);
    const t = cy.now(), a = A.value, b = B.value, ab = prod(b, a);
    const q1 = smooth(Math.max(0, Math.min(1, (t - T1[0]) / (T1[1] - T1[0])))), q2 = smooth(Math.max(0, Math.min(1, (t - T2[0]) / (T2[1] - T2[0]))));
    const done = t >= T2[1];
    const active = t < T1[1] ? a : b, qa = t < T1[1] ? q1 : q2;
    topline(ctx, done ? `$${TEXOF[b]}$ after $${TEXOF[a]}$ leaves the atoms as $${TEXOF[ab]}$ alone does.` : t < T1[1] ? `First $${TEXOF[a]}$ …` : `… then $${TEXOF[b]}$.`);
    hits.length = 0;
    /* the mirror planes, seen edge on, and the C3 axis end on */
    ['s', 'sp', 'spp'].forEach((g) => {
      const th = ang(SITE[g]), e = [1.3 * Math.cos(th), 1.3 * Math.sin(th), 0], f = [-1.25 * Math.cos(th), -1.25 * Math.sin(th), 0];
      const lit = active === g && qa > 0 && qa < 1 || done && ab === g;
      const [x1, y1] = P(e), [x2, y2] = P(f);
      line(ctx, x2, y2, x1, y1, lit ? C('symmetry-operation') : alpha(C('symmetry-operation'), 0.45), lit ? 5 : 3, [10, 8]);
      const [lx, ly] = P([-1.4 * Math.cos(th), -1.4 * Math.sin(th), 0]);
      text(ctx, NAME[g], lx, ly + 8, C('symmetry-operation'), { size: 24, weight: 600, align: 'center', bg: PAL.panel });
      hits.push({ x: (x1 + x2) / 2 * 0.3 + x1 * 0.7, y: (y1 + y2) / 2 * 0.3 + y1 * 0.7, r: 26, name: `the mirror plane of ${NAME[g]}, seen edge on` });
    });
    /* the rotation, while one is applied: an arc about the axis */
    if ((active === 'C3p' || active === 'C3m') && qa > 0 && qa < 1 && !done) {
      const s = active === 'C3p' ? 1 : -1, a0 = 30 * Math.PI / 180, pts = [];
      for (let i = 0; i <= 24; i++) { const th = a0 + s * (i / 24) * (2 * Math.PI / 3) * Math.max(0.15, qa); pts.push(P([1.22 * Math.cos(th), 1.22 * Math.sin(th), 0])); }
      ctx.save(); ctx.strokeStyle = C('symmetry-operation'); ctx.lineWidth = 4; ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke(); ctx.restore();
      const [xa, ya] = pts[pts.length - 2], [xb, yb] = pts[pts.length - 1]; arrow(ctx, xa, ya, xb, yb, C('symmetry-operation'), 4);
    }
    /* the atoms: each H keeps its number; a ghost marks each site */
    const sites = [0, 1, 2].map((k) => move('E', k, 0));
    sites.forEach((p) => { const [x, y] = P(p); dot(ctx, x, y, alpha(PAL.ink, 0.25), false, 30); });
    const atoms = [0, 1, 2].map((k) => {
      let p;
      if (t < T1[1]) p = move(a, k, q1);
      else { const k1 = PERM[a][k]; p = move(b, k1, q2); }
      return { n: k + 1, p };
    });
    const N = [0, 0, ZN], all = [...atoms.map((o) => ({ ...o, el: 'H', r: 26 })), { el: 'N', p: N, r: 40 }];
    all.sort((u, v) => (u.p[1] * Math.sin(TILT) - u.p[2] * Math.cos(TILT)) < (v.p[1] * Math.sin(TILT) - v.p[2] * Math.cos(TILT)) ? 1 : -1);
    const [nx, ny] = P(N);
    atoms.forEach((o) => { const [x, y] = P(o.p); line(ctx, nx, ny, x, y, PAL.muted, 6); });
    all.forEach((o) => {
      const [x, y] = P(o.p); dot(ctx, x, y, F.el(o.el), true, o.r);
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(x, y, o.r, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
      hits.push({ x, y, r: o.r, name: o.el === 'N' ? 'the nitrogen atom, on the C₃ axis' : `hydrogen atom ${o.n}` });
    });
    atoms.forEach((o) => {
      const r = Math.hypot(o.p[0], o.p[1]) || 1, [x, y] = P([o.p[0] * (1 + 0.5 / r), o.p[1] * (1 + 0.5 / r), 0]);
      text(ctx, String(o.n), x, y + 8, PAL.ink, { size: 24, weight: 600, align: 'center', bg: PAL.panel });
    });
    /* the multiplication table: the first operation along the top, the second down the side */
    const tl = 790, tt = 150, cw = 82, ch = 56;
    text(ctx, 'first', tl + cw * 3.5, tt - 44, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'then', tl - 6, tt + ch * 0.62, PAL.muted, { size: 17, align: 'right' });
    const col = OPS.indexOf(a), row = OPS.indexOf(b), rcol = OPS.indexOf(b), rrow = OPS.indexOf(a);
    if (done) {
      ctx.save(); ctx.fillStyle = alpha(C('symmetry-operation'), 0.22); ctx.fillRect(tl + cw * (col + 1), tt + ch * (row + 1), cw, ch); ctx.restore();
      ctx.save(); ctx.strokeStyle = alpha(C('symmetry-operation'), 0.8); ctx.lineWidth = 2; ctx.setLineDash([6, 6]); ctx.strokeRect(tl + cw * (rcol + 1) + 3, tt + ch * (rrow + 1) + 3, cw - 6, ch - 6); ctx.restore();
    }
    for (let i = 2; i <= 6; i++) {
      line(ctx, tl + i * cw, tt + ch, tl + i * cw, tt + 7 * ch, alpha(PAL.ink, 0.12), 1);
      line(ctx, tl + cw, tt + i * ch, tl + 7 * cw, tt + i * ch, alpha(PAL.ink, 0.12), 1);
    }
    line(ctx, tl + cw, tt, tl + cw, tt + 7 * ch, alpha(PAL.ink, 0.7), 2.5);
    line(ctx, tl, tt + ch, tl + 7 * cw, tt + ch, alpha(PAL.ink, 0.7), 2.5);
    text(ctx, 'C₃ᵥ', tl + cw / 2, tt + ch * 0.62, PAL.ink, { size: 22, weight: 600, align: 'center' });
    OPS.forEach((g, j) => {
      const on = g === a;
      text(ctx, NAME[g], tl + cw * (j + 1.5), tt + ch * 0.62, on ? C('symmetry-operation') : PAL.ink, { size: 22, weight: on ? 700 : 400, align: 'center' });
    });
    OPS.forEach((g, i) => {
      const on = g === b;
      text(ctx, NAME[g], tl + cw / 2, tt + ch * (i + 1.62), on ? C('symmetry-operation') : PAL.ink, { size: 22, weight: on ? 700 : 400, align: 'center' });
      OPS.forEach((h, j) => {
        const lit = done && i === row && j === col;
        text(ctx, NAME[prod(g, h)], tl + cw * (j + 1.5), tt + ch * (i + 1.62), lit ? C('symmetry-operation') : alpha(PAL.ink, 0.75), { size: 20, weight: lit ? 700 : 400, align: 'center' });
      });
    });
    hits.push({ x: tl + cw * (col + 1.5), y: tt + ch * (row + 1.5), r: 26, name: `${NAME[b]} after ${NAME[a]} is ${NAME[ab]}` });
    const ba = prod(a, b);
    tex(d.readout, `${TEXOF[b]}\\,${TEXOF[a]} = ${TEXOF[ab]} \\\\ \\small ${TEXOF[a]}\\,${TEXOF[b]} = ${TEXOF[ba]}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
