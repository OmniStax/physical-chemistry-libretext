/* Figures for section 10.7 Benzene and Aromaticity. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['10.7'] = function (root, F) {
const { tex, C, PAL, alpha, register, begin, line, text, arrow, topline, fmt } = F;

const lightOf = (c) => { const m = /^#([0-9a-f]{6})$/i.exec(c) ? [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16)) : (c.match(/[\d.]+/g) || [0, 0, 0]).slice(0, 3).map(Number); return (0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2]) / 255; };
const otherSign = (cw) => { const l = lightOf(cw), far = Math.abs(lightOf(PAL.ink) - l) > Math.abs(lightOf(PAL.panel) - l) ? PAL.ink : PAL.panel; return F.mixColor(cw, far, 0.55); };

/* =====================================================================
   FIGURE 10.7.3: a ring's pi levels filling, electron by electron.
   Moving: the filling is a sequence (9.7.4's precedent): an electron every
   0.5 s drops onto its level, then a 1.4 s hold. Select of the ring, C3H3
   to C8H8 (a row of six would wrap), opening on benzene. The Hückel levels
   of a ring of n carbons are E = alpha + 2 beta cos(2 pi k/n), k = 0..n-1:
   drawn at the corners of the ring polygon inscribed in a circle of radius
   2|beta| centred on alpha, one corner down (Frost's circle), so degenerate
   pairs sit side by side. One pi electron per carbon (the neutral CnHn),
   filled lowest first, one to each of a degenerate pair before either pairs
   (Aufbau, Pauli, Hund). Beside each level, its orbital seen from above as
   a small ring of dots, sized by |c| and toned by the sign of the upper
   lobe: k = 0 all alike, a pair cos and sin of 2 pi k m/n (benzene's psi_2
   and psi_3 as the correct solutions), k = n/2 alternating. Readout: the
   electrons so far, E_pi = N alpha + S beta, the delocalization energy
   against isolated double bonds, and whether the shell is closed.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-ring', 700);
  const NAMES = { 3: 'C₃H₃', 4: 'C₄H₄, cyclobutadiene', 5: 'C₅H₅', 6: 'C₆H₆, benzene', 7: 'C₇H₇', 8: 'C₈H₈, cyclooctatetraene' };
  const STEP = 0.5;
  const K = F.select(d.controls, { label: '\\text{ring}', key: 'ring', options: [3, 4, 5, 6, 7, 8].map((n) => ({ value: String(n), label: NAMES[n] })), value: '6', aria: 'the number of carbons in the ring', onInput: () => cy.reset() });
  const cy = F.cycle(() => +K.value * STEP + 0.4, 1.4);
  const hits = [];
  F.hover(d.stage, () => hits);
  /* the ring's orbitals, lowest first: {m: the beta coefficient, ang: corner angle, c: coefficients} */
  function orbitals(n) {
    const out = [];
    for (let k = 0; k < n; k++) {
      const kk = k <= n / 2 ? k : k - n;
      const m = 2 * Math.cos(2 * Math.PI * k / n);
      const c = Array.from({ length: n }, (_, j) => {
        if (k === 0) return 1 / Math.sqrt(n);
        if (2 * k === n) return (j % 2 ? -1 : 1) / Math.sqrt(n);
        return Math.sqrt(2 / n) * (kk > 0 ? Math.cos(2 * Math.PI * k * j / n) : Math.sin(2 * Math.PI * Math.abs(kk) * j / n));
      });
      out.push({ k, kk, m, c, ang: -Math.PI / 2 + 2 * Math.PI * k / n });
    }
    out.sort((a, b) => b.m - a.m || b.kk - a.kk);
    return out;
  }
  /* the electrons in order: [orbital index, 'u' | 'd'], with Hund's rule over degenerate pairs */
  function sequence(orbs, N) {
    const groups = [];
    orbs.forEach((o, i) => { const g = groups.find((q) => Math.abs(orbs[q[0]].m - o.m) < 1e-9); if (g) g.push(i); else groups.push([i]); });
    const seq = []; let left = N;
    for (const g of groups) {
      const take = Math.min(left, 2 * g.length); left -= take;
      for (let i = 0; i < take; i++) seq.push([g[i % g.length], i < g.length ? 'u' : 'd']);
      if (!left) break;
    }
    return { seq, groups };
  }
  function draw() {
    const { ctx } = begin(d.c);
    const n = +K.value, cw = C('wavefunction'), neg = otherSign(cw), cE = C('energy'), ee = F.el('e-');
    const orbs = orbitals(n), { seq, groups } = sequence(orbs, n);
    const t = cy.now();
    const shown = Number.isFinite(t) ? Math.min(seq.length, Math.floor(t / STEP) + 1) : seq.length;
    const kLast = Number.isFinite(t) ? Math.min(1, (t - (shown - 1) * STEP) / 0.3) : 1;
    const occ = orbs.map(() => '');
    seq.slice(0, shown).forEach(([i, s]) => { occ[i] += s; });
    const lastI = shown ? seq[shown - 1][0] : -1;
    /* the Frost circle: centre (330, 380) at alpha, radius 230 = 2|beta| */
    const cx = 330, cyy = 380, R = 230, sb = R / 2;
    arrow(ctx, 70, 660, 70, 110, cE, 4);
    text(ctx, 'E', 46, 380, cE, { size: 30, weight: 600, align: 'center', base: 'middle' });
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.25); ctx.lineWidth = 2; ctx.setLineDash([6, 8]); ctx.beginPath(); ctx.arc(cx, cyy, R, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 2.5; ctx.beginPath();
    for (let k = 0; k <= n; k++) { const a = Math.PI / 2 + 2 * Math.PI * k / n, x = cx + R * Math.cos(a), y = cyy + R * Math.sin(a); if (k === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y); }
    ctx.stroke(); ctx.restore();
    line(ctx, 100, cyy, 1360, cyy, alpha(PAL.ink, 0.35), 2, [10, 10]);
    text(ctx, 'α, an isolated p orbital', 1360, cyy - 14, PAL.muted, { size: 18, align: 'right' });
    hits.length = 0;
    /* levels on the corners; each orbital's picture to the right, a pair side by side */
    const groupOf = (i) => groups.findIndex((g) => g.includes(i));
    orbs.forEach((o, i) => {
      const a = Math.PI / 2 + 2 * Math.PI * o.k / n, x = cx + R * Math.cos(a), y = cyy + o.m * sb;
      line(ctx, x - 38, y, x + 38, y, PAL.ink, 4);
      const s = occ[i], isLast = i === lastI;
      [...s].forEach((sp, j) => {
        const dx = s.length === 2 ? (j ? 9 : -9) : 0, last = j === s.length - 1 && isLast, drop = last ? (1 - kLast) * 40 : 0, col = last ? alpha(ee, kLast) : ee;
        if (sp === 'u') arrow(ctx, x + dx, y + 14 - drop, x + dx, y - 22 - drop, col, 3); else arrow(ctx, x + dx, y - 22 - drop, x + dx, y + 14 - drop, col, 3);
      });
      /* the orbital from above */
      const g = groups[groupOf(i)], pos = g.indexOf(i), px = 760 + pos * 220 + (g.length === 1 ? 110 : 0), py = y, rr = 34;
      if (pos === 0) line(ctx, Math.max(x, 2 * cx - x) + 44, y, px - rr - 22, py, alpha(PAL.ink, 0.2), 1.5, [4, 8]);
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 1.5; ctx.beginPath();
      for (let j = 0; j <= n; j++) { const b = -Math.PI / 2 + 2 * Math.PI * j / n, qx = px + rr * Math.cos(b), qy = py + rr * Math.sin(b); if (j === 0) ctx.moveTo(qx, qy); else ctx.lineTo(qx, qy); }
      ctx.stroke(); ctx.restore();
      o.c.forEach((c, j) => {
        const b = -Math.PI / 2 + 2 * Math.PI * j / n, qx = px + rr * Math.cos(b), qy = py + rr * Math.sin(b), r = 13 * Math.abs(c) * Math.sqrt(n / 2);
        if (r < 1) return;
        ctx.save(); ctx.fillStyle = c >= 0 ? cw : neg; ctx.globalAlpha = 0.9; ctx.beginPath(); ctx.arc(qx, qy, r, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
      });
      const nm = `ψ${i + 1}: E = α ${o.m >= 0 ? '+' : '−'} ${fmt(Math.abs(o.m), 3)}β, ${o.m > 1e-9 ? 'bonding' : o.m < -1e-9 ? 'antibonding' : 'nonbonding'}, ${s.length ? s.length + ' electron' + (s.length > 1 ? 's' : '') : 'empty'}`;
      hits.push({ x, y: y - 6, r: 38, name: nm });
      hits.push({ x: px, y: py, r: rr + 14, name: `${nm}; seen from above, each dot the upper lobe of a carbon's p orbital, sized by its coefficient` });
    });
    /* the counts so far */
    const N = shown;
    const S = orbs.reduce((acc, o, i) => acc + occ[i].length * o.m, 0);
    const loc = 2 * Math.floor(N / 2), del = Math.abs(S - loc) < 1e-9 ? 0 : S - loc;
    const closed = groups.every((g) => { const e = g.reduce((a, i) => a + occ[i].length, 0); return e === 0 || e === 2 * g.length; });
    const unp = occ.filter((s) => s === 'u').length;
    const done = shown === seq.length && kLast >= 1;
    if (!done) topline(ctx, `Electron ${N} of ${n} goes into $\\psi_{${lastI + 1}}$${closed ? ', closing a shell' : ''}.`);
    else topline(ctx, closed ? `${NAMES[n].split(',')[0]}: ${n} π electrons fill every bonding orbital, a closed shell${(n - 2) % 4 === 0 ? `, 4n + 2 with n = ${(n - 2) / 4}` : ''}.`
      : `${NAMES[n].split(',')[0]}: ${n} π electrons leave ${unp} unpaired in a degenerate pair, an open shell.`);
    const sTex = (v) => (Math.abs(v) < 1e-9 ? '0' : String(Number(v.toFixed(3))));
    tex(d.readout, `\\kEpi = ${N}\\kalphaH + ${sTex(S)}\\kbetaH \\\\ \\kEpi - \\text{(${Math.floor(N / 2)} double bond${Math.floor(N / 2) === 1 ? '' : 's'}${N % 2 ? ' + one p electron' : ''})} = ${sTex(del)}\\kbetaH \\\\ \\small \\text{${N} electrons: ${closed ? 'closed shell' : 'open shell'}}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 10.7.4: heats of hydrogenation, a faithful copy (archetype 7) in
   the house style with the book's kcal/mol: cyclohexene 28.6,
   1,3-cyclohexadiene 55.4, benzene 49.8, the hypothetical cyclohexatriene
   85.8, all measured down to cyclohexane. Still, no controls. Levels are
   ink bars at their energies (4.5 px per kcal/mol), each drop an energy
   arrow to cyclohexane with its value; each ring drawn as a hexagon with its
   double bonds (benzene with its circle).
===================================================================== */
(function () {
  const d = F.sim(root, 'fig-10-7-4', 560);
  const hits = [];
  F.hover(d.stage, () => hits);
  function ring(ctx, x, y, r, doubles, circle, col) {
    const P = Array.from({ length: 6 }, (_, k) => [x + r * Math.cos(Math.PI / 6 + k * Math.PI / 3), y + r * Math.sin(Math.PI / 6 + k * Math.PI / 3)]);
    for (let k = 0; k < 6; k++) line(ctx, P[k][0], P[k][1], P[(k + 1) % 6][0], P[(k + 1) % 6][1], col, 3);
    doubles.forEach((k) => {
      const a = P[k], b = P[(k + 1) % 6], m = 0.78, ix = (p) => [x + (p[0] - x) * m, y + (p[1] - y) * m];
      const A = ix(a), B2 = ix(b); line(ctx, A[0] + (B2[0] - A[0]) * 0.12, A[1] + (B2[1] - A[1]) * 0.12, B2[0] - (B2[0] - A[0]) * 0.12, B2[1] - (B2[1] - A[1]) * 0.12, col, 3);
    });
    if (circle) { ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(x, y, r * 0.55, 0, 2 * Math.PI); ctx.stroke(); ctx.restore(); }
  }
  function draw() {
    const { ctx } = begin(d.c);
    const cE = C('energy'), y0 = 500, s = 4.5, Y = (v) => y0 - v * s;
    arrow(ctx, 90, 520, 90, 60, cE, 4);
    text(ctx, 'energy', 110, 50, cE, { size: 22, base: 'middle', weight: 600 });
    line(ctx, 120, y0, 1340, y0, PAL.ink, 4);
    text(ctx, 'cyclohexane', 1340, y0 + 30, PAL.ink, { size: 22, align: 'right' });
    const L = [
      { v: 55.4, name: '1,3-cyclohexadiene', x: 250, d: [0, 2], c: false },
      { v: 49.8, name: 'benzene', x: 600, d: [], c: true },
      { v: 28.6, name: 'cyclohexene', x: 900, d: [0], c: false },
      { v: 85.8, name: '“cyclohexatriene” (hypothetical)', x: 1180, d: [0, 2, 4], c: false },
    ];
    hits.length = 0;
    L.forEach((l, i) => {
      const y = Y(l.v), rx = l.x;
      line(ctx, rx - 30, y, rx + 160, y, PAL.ink, 3);
      ring(ctx, rx + 100, y - 48, 34, l.d, l.c, PAL.ink);
      arrow(ctx, rx, y + 4, rx, y0 - 4, cE, 4);
      text(ctx, `${fmt(l.v, 1)} kcal/mol`, rx + 12, (y + y0) / 2, cE, { size: 22, base: 'middle', weight: 600 });
      if (i === 3) text(ctx, l.name, rx - 40, y, PAL.ink, { size: 20, align: 'right', base: 'middle' });
      else text(ctx, l.name, rx + 100, y + 26, PAL.ink, { size: 20, align: 'center' });
      hits.push({ x: rx, y: (y + y0) / 2, r: 30, name: `${l.name}: ${fmt(l.v, 1)} kcal/mol released on hydrogenation to cyclohexane` });
    });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
