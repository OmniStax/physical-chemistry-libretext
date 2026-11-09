/* Figures for section 20.3 Unlike heat, Entropy is a State Function. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['20.3'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

const R = 8.314, CV = 1.5 * R, V1 = 10;   /* one mole of a monatomic ideal gas, starting at 10 L */

/* ---------- Figure 20.3.1: one change of state, two paths ----------
   PV plane: V 0 to 60 L, P 0 to 500 kPa (fixed: V2 reaches 50 L, and 600 K at 10 L is 499 kPa). Isotherm A from
   (V1, T1) to (V2, T1); adiabat B (gamma = 5/3) from (V1, T1) to (V2, T2); isochore C from T2 back up to T1 at V2.
   Bars beside: the reversible heat along A and along B + C (0 to 9000 J), and the entropy change along each
   (0 to 15 J/K; R ln 5 = 13.4). Still: the sliders set the change of state; nothing here runs in time. The point is
   the pair of bars: unequal heats, equal entropy changes. */
(function () {
  const d = sim('sim-entropy-two-paths', 620);
  const RV = ctl(d.controls, { label: '\\kVb/\\kVa', cls: 'volume', min: 1.2, max: 5, step: 0.05, value: 2, unit: '', dec: 2, key: 'ratio' });
  const T1 = ctl(d.controls, { label: '\\kTone', cls: 'temperature', min: 200, max: 600, step: 1, value: 298, unit: 'K', dec: 0 });
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    const r = RV.v, t1 = T1.v, V2 = V1 * r, t2 = t1 * Math.pow(r, -2 / 3);
    const qA = R * t1 * Math.log(r), qBC = CV * (t1 - t2), dS = R * Math.log(r);
    topline(ctx, `Along A the gas takes in $\\kqrevA = ${fmt(qA, 0)}$ J, along B + C only $\\kqrevBC = ${fmt(qBC, 0)}$ J, and $\\Delta\\kSent = ${fmt(dS, 2)}$ J/K both ways.`);
    const ax = axes(ctx, { l: 140, r: 820, t: 130, b: 520 }, [0, 60], [0, 500], { nx: 6, ny: 5, xl: 'volume V (L)', yl: 'pressure P (kPa)', xc: C('volume'), yc: C('pressure') });
    const PA = (v) => R * t1 / v, P1 = PA(V1), PB = (v) => P1 * Math.pow(V1 / v, 5 / 3);
    const cA = F.cat(0), cB = F.cat(1);
    plot(ctx, ax, PB, cB, { w: 5, x: [V1, V2] });
    line(ctx, ax.X(V2), ax.Y(PB(V2)), ax.X(V2), ax.Y(PA(V2)), cB, 5);
    plot(ctx, ax, PA, cA, { w: 5, x: [V1, V2] });
    /* which way each path runs */
    const head = (x0, y0, x1, y1, c) => { const a = Math.atan2(y1 - y0, x1 - x0), L = 18;
      ctx.save(); ctx.fillStyle = c; ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x1 - L * Math.cos(a - 0.45), y1 - L * Math.sin(a - 0.45));
      ctx.lineTo(x1 - L * Math.cos(a + 0.45), y1 - L * Math.sin(a + 0.45)); ctx.closePath(); ctx.fill(); ctx.restore(); };
    const vm = Math.sqrt(V1 * V2);
    head(ax.X(vm * 0.97), ax.Y(PA(vm * 0.97)), ax.X(vm), ax.Y(PA(vm)), cA);
    head(ax.X(vm * 0.97), ax.Y(PB(vm * 0.97)), ax.X(vm), ax.Y(PB(vm)), cB);
    const ym = (PB(V2) + PA(V2)) / 2;
    head(ax.X(V2), ax.Y(ym - 5), ax.X(V2), ax.Y(ym), cB);
    dot(ctx, ax.X(V1), ax.Y(P1), PAL.ink, false, 10);
    dot(ctx, ax.X(V2), ax.Y(PA(V2)), PAL.ink, true, 10);
    dot(ctx, ax.X(V2), ax.Y(PB(V2)), cB, true, 7);
    text(ctx, 'A', ax.X(vm) + 14, ax.Y(PA(vm)) - 18, cA, { size: 24, weight: 600 });
    text(ctx, 'B', ax.X(vm) - 22, ax.Y(PB(vm)) + 26, cB, { size: 24, weight: 600 });
    text(ctx, 'C', ax.X(V2) + 14, ax.Y(ym), cB, { size: 24, weight: 600, base: 'middle' });
    hits.length = 0;
    hits.push({ x: ax.X(V1), y: ax.Y(P1), r: 16, name: `the start: ${fmt(V1, 0)} L at ${fmt(t1, 0)} K` });
    hits.push({ x: ax.X(V2), y: ax.Y(PA(V2)), r: 16, name: `the end: ${fmt(V2, 1)} L at ${fmt(t1, 0)} K` });
    hits.push({ x: ax.X(V2), y: ax.Y(PB(V2)), r: 14, name: `the end of the adiabat, at T₂ = ${fmt(t2, 1)} K` });
    hits.push({ x: ax.X(vm), y: ax.Y(PA(vm)), r: 16, name: 'path A, the isotherm' });
    hits.push({ x: ax.X(vm), y: ax.Y(PB(vm)), r: 16, name: 'path B, the adiabat' });
    hits.push({ x: ax.X(V2), y: ax.Y(ym), r: 16, name: 'path C, the isochore' });
    /* the bars: heat, then entropy change */
    const bars = (box, max, ny, yl, yc, vals, unit, dec) => {
      const a = axes(ctx, box, [0, 1], [0, max], { nx: 0, ny, yl, yc });
      vals.forEach(([v, c, name], i) => {
        const x = a.X(i ? 0.7 : 0.3), w = 70, y = a.Y(v);
        ctx.save(); ctx.fillStyle = alpha(c, 0.85); ctx.fillRect(x - w / 2, y, w, a.Y(0) - y); ctx.restore();
        text(ctx, `${fmt(v, dec)} ${unit}`, x, y - 12, c, { size: 20, weight: 600, align: 'center' });
        hits.push({ x, y: (y + a.Y(0)) / 2, r: 30, name });
      });
      text(ctx, 'A', a.X(0.3), a.Y(0) + 26, cA, { size: 22, weight: 600, align: 'center' });
      text(ctx, 'B + C', a.X(0.7), a.Y(0) + 26, cB, { size: 22, weight: 600, align: 'center' });
    };
    bars({ l: 1000, r: W - 40, t: 140, b: 300 }, 9000, 3, 'heat q (J)', C('heat'),
      [[qA, cA, 'heat taken along A'], [qBC, cB, 'heat taken along B + C']], 'J', 0);
    bars({ l: 1000, r: W - 40, t: 380, b: 520 }, 15, 3, 'ΔS (J/K)', C('entropy'),
      [[dS, cA, 'entropy change along A'], [dS, cB, 'entropy change along B + C']], 'J/K', 2);
    tex(d.readout, `\\Delta\\kSA = \\dfrac{\\kqrevA}{\\kTone} = \\dfrac{${fmt(qA, 0)}\\ \\text{J}}{${fmt(t1, 0)}\\ \\text{K}} = ${fmt(dS, 2)}\\ \\text{J/K} \\\\ \\Delta\\kSBC = \\kCv\\ln\\dfrac{\\kTone}{\\kTtwo} = (12.47\\ \\text{J/K})\\ln\\dfrac{${fmt(t1, 0)}\\ \\text{K}}{${fmt(t2, 1)}\\ \\text{K}} = ${fmt(dS, 2)}\\ \\text{J/K}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
