/* Figures for section 16.4 The Law of Corresponding States. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['16.4'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- the book's data ----------
   Table 16.2.1's van der Waals constants (a in L² bar mol⁻², b in L mol⁻¹), and from them the critical
   constants T_c = 8a/27bR and P_c = a/27b² of Section 16.3 (R = 0.083145 L bar K⁻¹ mol⁻¹). */
const R = 0.083145;
const GASES = [
  { name: 'H₂O', a: 5.536, b: 0.03049 },
  { name: 'N₂', a: 1.43, b: 0.03913 },
  { name: 'CH₄', a: 2.283, b: 0.04278 },
  { name: 'C₂H₆', a: 5.562, b: 0.0638 },
].map((g) => ({ ...g, Tc: 8 * g.a / (27 * g.b * R), Pc: g.a / (27 * g.b * g.b) }));

/* The curves of Figure 16.4.1 (Beychok's generalized chart, public domain), read off the book's image
   as [P_r, Z] pairs at each of its reduced temperatures. */
const CHART = {
  '1.0': [[0, 1], [0.25, 0.887], [0.5, 0.77], [0.7, 0.666], [0.8, 0.582], [0.9, 0.468], [0.97, 0.32], [1.0, 0.2], [1.2, 0.235], [1.5, 0.262], [2, 0.331], [2.5, 0.397], [3, 0.46], [3.5, 0.519], [4, 0.567]],
  '1.1': [[0, 1], [0.3, 0.91], [0.5, 0.85], [0.7, 0.782], [1, 0.666], [1.25, 0.556], [1.5, 0.451], [1.7, 0.41], [1.9, 0.397], [2.1, 0.405], [2.5, 0.437], [3, 0.489], [3.5, 0.546], [4, 0.59]],
  '1.2': [[0, 1], [0.5, 0.879], [1, 0.767], [1.5, 0.658], [2, 0.569], [2.25, 0.545], [2.5, 0.537], [2.75, 0.539], [3, 0.555], [3.5, 0.592], [4, 0.63]],
  '1.3': [[0, 1], [0.5, 0.912], [1, 0.833], [1.5, 0.75], [2, 0.684], [2.5, 0.648], [3, 0.645], [3.5, 0.658], [4, 0.685]],
  '1.5': [[0, 1], [0.5, 0.942], [1, 0.895], [1.5, 0.859], [2, 0.829], [2.5, 0.803], [3, 0.794], [3.5, 0.794], [4, 0.802]],
  '2.0': [[0, 1], [0.5, 0.975], [1, 0.961], [1.5, 0.951], [2, 0.948], [2.5, 0.946], [3, 0.945], [3.5, 0.948], [4, 0.952]],
};
const TRS = [1.0, 1.1, 1.2, 1.3, 1.5, 2.0];
const lerpTable = (tab, x) => {
  for (let i = 1; i < tab.length; i++) if (x <= tab[i][0]) { const [x0, y0] = tab[i - 1], [x1, y1] = tab[i]; return y0 + (y1 - y0) * (x - x0) / (x1 - x0); }
  return tab[tab.length - 1][1];
};
/* the chart at any T_r, read between its two nearest curves */
function chartZ(tr, pr) {
  let i = 0; while (i < TRS.length - 2 && tr > TRS[i + 1]) i++;
  const t0 = TRS[i], t1 = TRS[i + 1], k = Math.min(1, Math.max(0, (tr - t0) / (t1 - t0)));
  return (1 - k) * lerpTable(CHART[t0.toFixed(1)], pr) + k * lerpTable(CHART[t1.toFixed(1)], pr);
}

/* ---------- the van der Waals equation in reduced variables, (16.4.2) ----------
   P_r = 8T_r / (3V_r − 1) − 3/V_r², which falls steadily with V_r for T_r ≥ 1, so one root: found by bisection. */
const prOf = (v, tr) => 8 * tr / (3 * v - 1) - 3 / (v * v);
function vrOf(pr, tr) {
  let lo = 1 / 3 + 1e-9, hi = 1e5;
  for (let i = 0; i < 200; i++) { const m = Math.sqrt(lo * hi); if (prOf(m, tr) > pr) lo = m; else hi = m; }
  return (lo + hi) / 2;
}
const zOf = (v, tr) => v / (v - 1 / 3) - 9 / (8 * v * tr);

/* ---------- Figure 16.3.4 + 16.4.1: corresponding states ----------
   Z against pressure for the four gases of Table 16.2.1, each at its own temperature T = T_r T_c.
   A choice switches the axis between pressure in bar (0 to 250 bar: water's P_c is 221 bar) and
   reduced pressure (0 to 4, the chart's range); the curves morph between the two, and in reduced
   pressure all four lie on one curve. The measured chart at the same T_r is dashed beside it, shown
   in reduced pressure only. y: Z 0 to 1.2. Still: nothing here has a time in it. */
(function () {
  const d = sim('sim-corresponding-states', 640);
  const K = F.choice(d.controls, { label: '\\text{axis}', key: 'axis', options: [{ value: 'bar', label: 'pressure (bar)' }, { value: 'r', label: 'reduced pressure' }], value: 'bar', aria: 'what the horizontal axis measures' });
  const TR = ctl(d.controls, { label: '\\kTr', cls: 'temperature', min: 1.0, max: 2.0, step: 0.01, value: 1.2, unit: '', dec: 2, detents: TRS, snap: true, aria: 'the reduced temperature' });
  const PR = ctl(d.controls, { label: '\\kPr', cls: 'pressure', min: 0.1, max: 4, step: 0.01, value: 1.0, unit: '', dec: 2, specials: [{ at: 1, label: 'the critical pressure' }], aria: 'the reduced pressure of the marked states' });
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const tr = TR.v, pr = PR.v, s = K.mix((v) => (v === 'r' ? 1 : 0)), reduced = K.value === 'r';
    const box = { l: 150, r: 1300, t: 120, b: 530 };
    const xr = reduced ? [0, 4] : [0, 250];
    const ax = axes(ctx, box, xr, [0, 1.2], { nx: reduced ? 8 : 5, ny: 6, xl: reduced ? 'reduced pressure Pᵣ' : 'pressure P (bar)', yl: 'compressibility factor Z', xc: C('pressure'), yc: PAL.ink });
    const Xbar = (p) => box.l + (box.r - box.l) * p / 250, Xr = (p) => box.l + (box.r - box.l) * p / 4;
    const xOf = (g, p) => (1 - s) * Xbar(p * g.Pc) + s * Xr(p);
    line(ctx, box.l, ax.Y(1), box.r, ax.Y(1), alpha(PAL.ink, 0.35), 2, [10, 10]);
    /* the measured chart, dashed, against reduced pressure only */
    const ca = K.a('r');
    if (ca > 0) {
      ctx.save(); ctx.globalAlpha *= ca; ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
      ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.setLineDash([10, 10]); ctx.beginPath();
      for (let i = 0; i <= 200; i++) { const p = 4 * i / 200, x = Xr(p), y = ax.Y(chartZ(tr, p)); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
      ctx.stroke(); ctx.restore();
    }
    /* the four gases, each through the van der Waals equation at T = T_r T_c */
    const zs = [];
    for (let p = 0; p <= 4.0001; p += 0.02) zs.push([p, p < 1e-6 ? 1 : zOf(vrOf(p, tr), tr)]);
    GASES.forEach((g, i) => {
      const col = F.cat(i);
      ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
      ctx.strokeStyle = col; ctx.lineWidth = 4; ctx.lineJoin = 'round'; ctx.beginPath();
      zs.forEach(([p, z], j) => { const x = xOf(g, p), y = ax.Y(z); if (j) ctx.lineTo(x, y); else ctx.moveTo(x, y); });
      ctx.stroke(); ctx.restore();
    });
    /* the marked states: the same P_r for every gas */
    const v = vrOf(pr, tr), z = zOf(v, tr);
    GASES.forEach((g, i) => {
      const x = xOf(g, pr);
      if (x <= box.r + 1) {
        dot(ctx, x, ax.Y(z), F.cat(i), true, 9);
        hits.push({ x, y: ax.Y(z), r: 14, name: `${g.name} at ${fmt(tr * g.Tc, 0)} K and ${fmt(pr * g.Pc, 1)} bar: Z = ${fmt(z, 3)}` });
      }
    });
    if (reduced) {
      const zc = chartZ(tr, pr);
      dot(ctx, Xr(pr), ax.Y(zc), PAL.ink, false, 9);
      hits.push({ x: Xr(pr), y: ax.Y(zc), r: 14, name: `the measured chart at Pᵣ = ${fmt(pr, 2)}: Z = ${fmt(zc, 2)}` });
    }
    const entries = GASES.map((g, i) => ({ s: `${g.name}, ${fmt(tr * g.Tc, 0)} K`, color: F.cat(i), w: 4 }));
    if (reduced) entries.push({ s: 'measured chart', color: PAL.ink, w: 3, dash: [10, 10] });
    F.legend(ctx, ax, entries, { corner: 'br' });
    const lo = Math.min(...GASES.map((g) => pr * g.Pc)), hi = Math.max(...GASES.map((g) => pr * g.Pc));
    topline(ctx, reduced
      ? `At $\\kTr = ${fmt(tr, 2)}$ and $\\kPr = ${fmt(pr, 2)}$ all four gases have $Z = ${fmt(z, 2)}$; the measured chart reads ${fmt(chartZ(tr, pr), 2)}.`
      : `At $\\kTr = ${fmt(tr, 2)}$ and $\\kPr = ${fmt(pr, 2)}$ the four gases share $Z = ${fmt(z, 2)}$ at pressures from ${fmt(lo, 0)} to ${fmt(hi, 0)} bar.`);
    const vs = +v.toFixed(3), t1 = +(vs / (vs - 1 / 3)).toFixed(3), t2 = +(9 / (8 * vs * tr)).toFixed(3);
    tex(d.readout, `Z = \\dfrac{\\kVbarr}{\\kVbarr - \\frac{1}{3}} - \\dfrac{9}{8\\kVbarr\\kTr} \\\\ Z = \\dfrac{${fmt(vs, 3)}}{${fmt(vs, 3)} - \\frac{1}{3}} - \\dfrac{9}{8(${fmt(vs, 3)})(${fmt(tr, 2)})} = ${fmt(t1, 3)} - ${fmt(t2, 3)} = ${fmt(t1 - t2, 3)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
