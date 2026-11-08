/* Figures for section 10.6 Butadiene is Stabilized by a Delocalization Energy. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['10.6'] = function (root, F) {
const { tex, C, PAL, alpha, register, begin, line, text, arrow, topline, fmt } = F;

const lightOf = (c) => { const m = /^#([0-9a-f]{6})$/i.exec(c) ? [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16)) : (c.match(/[\d.]+/g) || [0, 0, 0]).slice(0, 3).map(Number); return (0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2]) / 255; };
const otherSign = (cw) => { const l = lightOf(cw), far = Math.abs(lightOf(PAL.ink) - l) > Math.abs(lightOf(PAL.panel) - l) ? PAL.ink : PAL.panel; return F.mixColor(cw, far, 0.55); };

/* =====================================================================
   FIGURE 10.6.1 + 10.6.3: Hückel chains of 2 to 8 carbons.
   Still, 2D: a chain length is a discrete state (a select, since seven
   options would wrap), nothing has a time. For a chain of n carbons the
   Hückel levels are E_k = alpha + 2 beta cos(k pi/(n+1)), k = 1..n, and
   orbital k has coefficients sqrt(2/(n+1)) sin(j k pi/(n+1)) on carbon j:
   butadiene gives 1.618, 0.618 and 0.37, 0.60, the book's numbers, with the
   book's signs. Left: the levels to scale against alpha (dashed), filled
   with one pi electron per carbon (Aufbau, Pauli), spins in the electron
   convention. Right: one row per orbital, highest at the top, the p lobes
   on the carbons sized by |c| and toned by sign, the sine envelope through
   them faint; faint ties join each level to its row. Labels: HOMO and LUMO
   only; node counts and coefficients are hover names (up to eight rows).
   Opens on butadiene (Figure 10.6.3). Energies in units of beta; the
   readout's kJ/mol use beta = -75 kJ/mol (the text's estimate).
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-chain', 720);
  const NAMES = { 2: 'ethylene', 3: 'allyl', 4: 'butadiene', 5: 'pentadienyl', 6: 'hexatriene', 7: 'heptatrienyl', 8: 'octatetraene' };
  const K = F.select(d.controls, { label: '\\text{chain}', key: 'chain', options: [2, 3, 4, 5, 6, 7, 8].map((n) => ({ value: String(n), label: `C${'₂₃₄₅₆₇₈'[n - 2]}, ${NAMES[n]}` })), value: '4', aria: 'the number of carbons in the conjugated chain' });
  const hits = [];
  F.hover(d.stage, () => hits);
  function lobe(ctx, x, y, dir, L, fill) {
    if (L < 2) return;
    const w = L * 0.42;
    ctx.save(); ctx.beginPath(); ctx.moveTo(x, y);
    ctx.bezierCurveTo(x - w * 1.3, y + dir * L * 0.35, x - w, y + dir * L, x, y + dir * L);
    ctx.bezierCurveTo(x + w, y + dir * L, x + w * 1.3, y + dir * L * 0.35, x, y);
    ctx.fillStyle = fill; ctx.globalAlpha = 0.85; ctx.fill(); ctx.globalAlpha = 1; ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 1.5; ctx.stroke(); ctx.restore();
  }
  const spins = (ctx, x, y, n, col) => {
    if (n >= 1) arrow(ctx, x - (n === 2 ? 9 : 0), y + 14, x - (n === 2 ? 9 : 0), y - 22, col, 3);
    if (n === 2) arrow(ctx, x + 9, y - 22, x + 9, y + 14, col, 3);
  };
  function draw() {
    const { ctx } = begin(d.c);
    const n = +K.value, cw = C('wavefunction'), neg = otherSign(cw), cE = C('energy'), ee = F.el('e-');
    /* levels, lowest first: k = 1..n, x_k = 2cos(k pi/(n+1)), E = alpha + x_k beta */
    const lv = [];
    for (let k = 1; k <= n; k++) lv.push({ k, m: 2 * Math.cos(k * Math.PI / (n + 1)), c: Array.from({ length: n }, (_, j) => Math.sqrt(2 / (n + 1)) * Math.sin((j + 1) * k * Math.PI / (n + 1))) });
    const occ = lv.map((_, i) => Math.max(0, Math.min(2, n - 2 * i)));
    const homo = occ.reduce((a, o, i) => (o > 0 ? i : a), 0), lumo = homo + 1 < n ? homo + 1 : -1;
    const sumM = lv.reduce((a, l, i) => a + occ[i] * l.m, 0), loc = 2 * Math.floor(n / 2), del = Math.abs(sumM - loc) < 1e-9 ? 0 : sumM - loc;
    const gap = lv[homo].m - (lv[homo + 1] ? lv[homo + 1].m : lv[homo].m);
    const Name = NAMES[n][0].toUpperCase() + NAMES[n].slice(1);
    topline(ctx, n === 2 ? 'Ethylene: 2 π electrons in one double bond, $\\kEpi = 2\\kalphaH + 2\\kbetaH$.'
      : `${Name}: ${n} π electrons, $\\kEpi = ${n}\\kalphaH + ${fmt(sumM, 3)}\\kbetaH$, lower by $${fmt(del, 3)}\\kbetaH$ than ${n % 2 ? `${(n - 1) / 2} double bond${n > 3 ? 's' : ''} and a lone p electron` : `${n / 2} separate double bonds`}.`);
    /* the ladder: alpha at y = 390, 140 px per beta, lower energy lower (beta < 0) */
    const xl = 300, ya = 400, s = 135, Y = (m) => ya + m * s;
    arrow(ctx, 110, 680, 110, 100, cE, 4);
    text(ctx, 'E', 84, 390, cE, { size: 30, weight: 600, align: 'center', base: 'middle' });
    line(ctx, 160, ya, 440, ya, alpha(PAL.ink, 0.4), 2, [10, 10]);
    text(ctx, 'α', 150, ya, PAL.muted, { size: 24, align: 'right', base: 'middle' });
    /* rows on the right, highest energy at the top */
    const top = 120, bot = 690, rowH = (bot - top) / n, x0 = 640, x1 = 1250, dx = (x1 - x0) / (n + 1);
    hits.length = 0;
    lv.forEach((l, i) => {
      const y = Y(l.m), yr = top + (n - 1 - i + 0.5) * rowH;
      line(ctx, xl - 70, y, xl + 70, y, PAL.ink, 4);
      spins(ctx, xl, y, occ[i], ee);
      line(ctx, xl + 80, y, x0 - 40, yr, alpha(PAL.ink, 0.25), 2, [4, 8]);
      line(ctx, x0 - 20, yr, x1 + 20, yr, alpha(PAL.ink, 0.25), 1.5);
      const amp = Math.min(rowH * 0.42, 70) / Math.sqrt(2 / (n + 1));
      /* the sine envelope */
      ctx.save(); ctx.strokeStyle = alpha(cw, 0.45); ctx.lineWidth = 2; ctx.beginPath();
      for (let t = 0; t <= 1.0001; t += 0.01) { const xx = x0 + t * (n + 1) * dx, yy = yr - amp * Math.sqrt(2 / (n + 1)) * Math.sin(t * (n + 1) * l.k * Math.PI / (n + 1)); if (t === 0) ctx.moveTo(xx, yy); else ctx.lineTo(xx, yy); }
      ctx.stroke(); ctx.restore();
      l.c.forEach((c, j) => {
        const x = x0 + (j + 1) * dx, L = amp * Math.abs(c);
        lobe(ctx, x, yr, -1, L, c >= 0 ? cw : neg); lobe(ctx, x, yr, 1, L, c >= 0 ? neg : cw);
        ctx.save(); ctx.fillStyle = F.el('C'); ctx.beginPath(); ctx.arc(x, yr, 5, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
      });
      if (i === homo || i === lumo) text(ctx, i === homo ? 'HOMO' : 'LUMO', x1 + 40, yr, PAL.muted, { size: 20, base: 'middle' });
      const nodes = l.k - 1;
      hits.push({ x: xl, y, r: 40, name: `ψ${l.k}: E = α ${l.m >= 0 ? '+' : '−'} ${fmt(Math.abs(l.m), 3)}β, ${occ[i] ? occ[i] + ' electron' + (occ[i] > 1 ? 's' : '') : 'empty'}` });
      hits.push({ x: (x0 + x1) / 2, y: yr, r: Math.min(rowH / 2, 60), name: `ψ${l.k}, ${nodes} node${nodes === 1 ? '' : 's'}: coefficients ${l.c.map((c) => fmt(c, 2)).join(', ')}` });
    });
    const parts = lv.map((l, i) => (occ[i] ? `${occ[i] === 2 ? '2' : ''}(\\kalphaH ${l.m >= 0 ? '+' : '-'} ${fmt(Math.abs(l.m), 3)}\\kbetaH)` : '')).filter(Boolean);
    const locTex = n % 2 ? `${(n - 1) / 2} \\times 2(\\kalphaH + \\kbetaH) + \\kalphaH` : `${n / 2} \\times 2(\\kalphaH + \\kbetaH)`;
    tex(d.readout, `\\kEpi = ${parts.join(' + ')} = ${n}\\kalphaH + ${fmt(sumM, 3)}\\kbetaH \\\\ \\kEpi - \\big(${locTex}\\big) = ${fmt(del, 3)}\\kbetaH \\approx ${fmt(-75 * del || 0, 0)}\\ \\text{kJ/mol} \\\\ \\text{HOMO–LUMO gap} = ${fmt(gap, 3)}\\,|\\kbetaH|`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
