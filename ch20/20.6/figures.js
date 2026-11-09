/* Figures for section 20.6 We Must Always Devise a Reversible Process to Calculate Entropy Changes. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['20.6'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, shade, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

const R = 8.314;
/* x ln x, taken as 0 at x = 0 (its limit) */
const xlnx = (x) => (x <= 0 ? 0 : x * Math.log(x));
/* molar entropy of mixing, J K^-1 mol^-1 (20.6.4) */
const dSmix = (x) => -R * (xlnx(x) + xlnx(1 - x));

/* ---------- Sim: the entropy of mixing (replaces the book's unnumbered "two gases" image) ----------
   Left: the box twice, wall in (A fills the share chi_A of the volume, B the rest, at one pressure) and wall out
   (each gas spread over the whole box). Right: Delta S_bar against chi_A, fixed 0 to 7 J K^-1 mol^-1
   (R ln 2 = 5.76 is the top), with the state point. Still: the slider sets a composition, nothing runs. */
(function () {
  const d = sim('sim-mixing-entropy', 560);
  const X = ctl(d.controls, { label: '\\chi_A', cls: '', min: 0, max: 1, step: 0.01, value: 0.5, unit: '', dec: 2, detents: [0.25, 0.5, 0.75] });
  const N = 48, hits = [];
  F.hover(d.stage, () => hits);
  /* two fixed sets of scattered points in the unit square (a seeded generator, so they never jump) */
  let seed = 7;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  const P1 = Array.from({ length: N }, () => [rnd(), rnd()]);
  const P2 = Array.from({ length: N }, () => [rnd(), rnd()]);
  function draw() {
    const { ctx, W } = begin(d.c);
    const x = X.v, nA = Math.round(x * N), s = dSmix(x);
    topline(ctx, `At $\\chi_A = ${fmt(x, 2)}$ mixing raises the molar entropy by $\\Delta\\kSbar = ${fmt(s, 2)}$ J K⁻¹ mol⁻¹.`);
    const cA = F.cat(0), cB = F.cat(1);
    /* the two boxes */
    const bx = 60, bw = 440, bh = 150, tops = [130, 360];
    const frame = (y) => { ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.strokeRect(bx, y, bw, bh); ctx.restore(); };
    /* wall in: A in the left share x, B in the rest */
    frame(tops[0]);
    const wx = bx + bw * x;
    if (x > 0 && x < 1) line(ctx, wx, tops[0], wx, tops[0] + bh, PAL.ink, 5);
    for (let i = 0; i < N; i++) {
      const isA = i < nA, [u, v] = P1[i];
      const x0 = isA ? bx : wx, w = isA ? wx - bx : bx + bw - wx;
      dot(ctx, x0 + 10 + u * Math.max(0, w - 20), tops[0] + 10 + v * (bh - 20), isA ? cA : cB, true, 7);
    }
    text(ctx, 'wall in', bx, tops[0] - 16, PAL.muted, { size: 20 });
    /* wall out: each gas over the whole box */
    frame(tops[1]);
    for (let i = 0; i < N; i++) {
      const [u, v] = P2[i];
      dot(ctx, bx + 10 + u * (bw - 20), tops[1] + 10 + v * (bh - 20), i < nA ? cA : cB, true, 7);
    }
    text(ctx, 'wall out, mixed', bx, tops[1] - 16, PAL.muted, { size: 20 });
    F.legend(ctx, { l: bx, r: bx + bw, t: tops[1], b: tops[1] + bh }, [{ s: 'gas A', color: cA, kind: 'dot' }, { s: 'gas B', color: cB, kind: 'dot' }], { corner: 'above' });
    /* the graph */
    const box = { l: 640, r: W - 60, t: 120, b: 470 };
    const ax = axes(ctx, box, [0, 1], [0, 7], { nx: 4, ny: 7, xl: 'mole fraction of A, χ_A', yl: 'molar entropy of mixing ΔS̄ (J K⁻¹ mol⁻¹)', yc: C('entropy') });
    shade(ctx, ax, dSmix, 0, 0, 1, C('entropy'), { alpha: 0.08 });
    line(ctx, box.l, ax.Y(R * Math.LN2), box.r, ax.Y(R * Math.LN2), alpha(PAL.ink, 0.35), 2, [10, 10]);
    text(ctx, 'R ln 2', box.r - 6, ax.Y(R * Math.LN2) - 14, PAL.muted, { size: 17, align: 'right' });
    plot(ctx, ax, dSmix, C('entropy'), { w: 5 });
    line(ctx, ax.X(x), ax.Y(s), ax.X(x), box.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
    dot(ctx, ax.X(x), ax.Y(s), C('entropy'), true, 10);
    hits.length = 0;
    hits.push({ x: ax.X(x), y: ax.Y(s), r: 16, name: `χ_A = ${fmt(x, 2)}: ΔS̄ = ${fmt(s, 2)} J K⁻¹ mol⁻¹` });
    hits.push({ x: ax.X(0.5), y: ax.Y(R * Math.LN2), r: 14, name: 'an even mix, R ln 2 = 5.76 J K⁻¹ mol⁻¹' });
    const term = (c) => (c <= 0 ? '0' : `${fmt(c, 2)}\\ln ${fmt(c, 2)}`);
    tex(d.readout, `\\Delta \\kSbar = -R\\left[\\chi_A\\ln \\chi_A + \\chi_B\\ln \\chi_B\\right] \\\\ \\Delta \\kSbar = -(8.314\\ \\text{J K}^{-1}\\text{mol}^{-1})\\left[${term(x)} + ${term(1 - x)}\\right] = ${fmt(s, 2)}\\ \\text{J K}^{-1}\\text{mol}^{-1}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
