/* Figures for section 16.5 The Second Virial Coefficient. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['16.5'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* Table 16.2.1's van der Waals constants: a in L² bar mol⁻², b in L mol⁻¹; R in L bar K⁻¹ mol⁻¹ */
const R = 0.08314;
const GASES = [
  { key: 'H2O', name: 'H₂O', a: 5.536, b: 0.03049 },
  { key: 'N2', name: 'N₂', a: 1.43, b: 0.03913 },
  { key: 'CH4', name: 'CH₄', a: 2.283, b: 0.04278 },
  { key: 'C2H6', name: 'C₂H₆', a: 5.562, b: 0.0638 },
];
const byKey = (k) => GASES.find((g) => g.key === k);
/* B₂ = b − a/RT, in cm³/mol */
const b2 = (g, T) => 1000 * (g.b - g.a / (R * T));
const zeroT = (g) => g.a / (R * g.b);

/* ---------- Sim: B₂ against temperature ----------
   x: T 100 to 2500 K (water's B₂ = 0 sits at 2180 K); y: B₂ −300 to 100 cm³/mol, fixed.
   The chosen gas is drawn in the B₂ colour, the other three faint behind it, and the hard-sphere value
   b (the flat line B₂ would keep with no attraction) dashed. The slider T marks the reader's temperature;
   its dashed circle is where b = a/RT and B₂ crosses zero. Still: no time in it. */
(function () {
  const d = sim('sim-second-virial', 600);
  const G = F.choice(d.controls, { label: '\\text{gas}', key: 'gas', options: GASES.map((g) => ({ value: g.key, label: g.name })), value: 'N2', aria: 'the gas of Table 16.2.1' });
  const T = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: 100, max: 2500, step: 5, value: 300, unit: 'K', dec: 0,
    specials: [{ at: () => zeroT(byKey(G.value)), label: 'B₂ = 0' }], aria: 'the temperature of the gas' });
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const g = byKey(G.value), t = T.v, cv = C('volume');
    const box = { l: 160, r: 1300, t: 120, b: 500 };
    const ax = axes(ctx, box, [100, 2500], [-300, 100], { nx: 6, ny: 4, xl: 'temperature T (K)', yl: 'second virial coefficient B₂ (cm³/mol)', xc: C('temperature'), yc: cv });
    line(ctx, box.l, ax.Y(0), box.r, ax.Y(0), alpha(PAL.ink, 0.4), 2);
    GASES.forEach((h) => { if (h !== g) plot(ctx, ax, (x) => b2(h, x), alpha(PAL.ink, 0.22), { w: 3 }); });
    GASES.forEach((h) => { if (h !== g) { const x = 2420, y = b2(h, x); hits.push({ x: ax.X(x), y: ax.Y(y), r: 16, name: `${h.name}: B₂ = b − a/RT` }); } });
    /* the hard-sphere value b, and the curve the attraction pulls below it */
    const bb = 1000 * g.b;
    plot(ctx, ax, () => bb, alpha(cv, 0.8), { w: 3, dash: [10, 10] });
    text(ctx, `hard spheres alone, b = ${fmt(bb, 1)} cm³/mol`, box.r - 10, ax.Y(bb) - 16, cv, { size: 20, align: 'right' });
    plot(ctx, ax, (x) => b2(g, x), cv, { w: 5 });
    const tz = zeroT(g);
    if (tz <= 2500) { dot(ctx, ax.X(tz), ax.Y(0), PAL.ink, false, 9); hits.push({ x: ax.X(tz), y: ax.Y(0), r: 14, name: `B₂ = 0 at ${fmt(tz, 0)} K, where b = a/RT` }); }
    const y = b2(g, t), p = F.pinned(ctx, box, ax.X, ax.Y, t, y, cv);
    line(ctx, ax.X(t), box.b, ax.X(t), Math.max(box.t, Math.min(box.b, ax.Y(y))), alpha(C('temperature'), 0.8), 3, [4, 8]);
    hits.push({ x: p.x, y: p.y, r: 16, name: `${g.name} at ${fmt(t, 0)} K: B₂ = ${fmt(y, 1)} cm³/mol` });
    const bt = +bb.toFixed(1), at = +(1000 * g.a / (R * t)).toFixed(1), sum = bt - at;
    topline(ctx, Math.abs(sum) < 0.05
      ? `At $\\kT = ${fmt(t, 0)}$ K the excluded volume and the attraction of ${g.name} cancel, and $\\kBtwo = 0$.`
      : sum > 0
        ? `At $\\kT = ${fmt(t, 0)}$ K, ${g.name} has $\\kBtwo = ${fmt(sum, 1)}$ cm³/mol: the excluded volume outweighs the attraction.`
        : `At $\\kT = ${fmt(t, 0)}$ K, ${g.name} has $\\kBtwo = ${fmt(sum, 1)}$ cm³/mol: the attraction outweighs the excluded volume.`);
    tex(d.readout, `\\kBtwo(\\kT) = \\kbvdw - \\dfrac{a}{R\\kT} \\\\ \\kBtwo = ${fmt(bt, 1)}\\ \\text{cm}^3\\text{/mol} - \\dfrac{${g.a}\\ \\text{L}^2\\,\\text{bar mol}^{-2}}{(0.08314\\ \\text{L bar K}^{-1}\\text{mol}^{-1})(${fmt(t, 0)}\\ \\text{K})} = ${fmt(bt, 1)} - ${fmt(at, 1)} = ${fmt(sum, 1)}\\ \\text{cm}^3\\text{/mol}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
