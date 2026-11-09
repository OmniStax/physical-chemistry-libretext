/* Figures for section 24.6 Vapor Pressures of Volatile Binary Solutions. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['24.6'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- Figure 24.6.2: one model, two azeotropes ----------
   Boiling at P = 1 bar. Each partial pressure is the section's Margules form with one parameter,
   P1 = x1 P*1 exp(alpha x2^2) and P2 = x2 P*2 exp(alpha x1^2) (alpha = 0 is Raoult). The pure vapor
   pressures follow the integrated Clausius-Clapeyron equation of 23.4 with illustrative liquids:
   component 1 boils at 350 K, component 2 at 365 K, both with dH_vap = 36 kJ/mol (a model, no real pair).
   The liquid (bubble) curve is the T at which P1 + P2 = 1 bar; the vapor (dew) curve is y1 = P1/P at that T.
   Negative alpha lifts the middle to a maximum (the book's left panel), positive sinks it to a minimum
   (its right panel); past about |alpha| = 0.5 the curves touch there, at the azeotrope.
   Opens at alpha = -2, the maximum-boiling panel. */
(function () {
  const R = 8.314, P0 = 1, TB1 = 350, TB2 = 365, DH = 36000;
  const ps = (Tb, T) => P0 * Math.exp(-(DH / R) * (1 / T - 1 / Tb));
  /* the boiling temperature of a liquid of composition x1, by bisection, with its vapor */
  function boil(x, a) {
    const g1 = Math.exp(a * (1 - x) * (1 - x)), g2 = Math.exp(a * x * x);
    let lo = 300, hi = 420, T = 360;
    for (let i = 0; i < 48; i += 1) { T = (lo + hi) / 2; const P = x * g1 * ps(TB1, T) + (1 - x) * g2 * ps(TB2, T); if (P > P0) hi = T; else lo = T; }
    const p1 = x * g1 * ps(TB1, T);
    return { T, y: p1 / P0, p1, g1, s1: ps(TB1, T) };
  }
  function azeotrope(a) {
    let prev = null;
    for (let i = 1; i < 400; i += 1) {
      const x = i / 400, b = boil(x, a), dlt = b.y - x;
      if (prev && prev.d * dlt < 0) {
        let lo = prev.x, hi = x, flo = prev.d;
        for (let k = 0; k < 40; k += 1) { const m = (lo + hi) / 2, dm = boil(m, a).y - m; if (dm * flo > 0) { lo = m; flo = dm; } else hi = m; }
        const xa = (lo + hi) / 2;
        return { x: xa, T: boil(xa, a).T };
      }
      prev = { x, d: dlt };
    }
    return null;
  }

  const d = sim('sim-azeotrope', 640);
  const A = ctl(d.controls, { label: '\\alpha', cls: '', min: -2, max: 2, step: 0.05, value: -2, dec: 2, detents: [0], snap: true });
  const X = ctl(d.controls, { label: '\\kxone', cls: '', min: 0, max: 1, step: 0.01, value: 0.2, dec: 2 });
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    const a = A.v, x = X.v, az = Math.abs(a) > 0.3 ? azeotrope(a) : null;
    topline(ctx, az
      ? `The curves touch at $\\kxone = ${fmt(az.x, 2)}$, a ${a < 0 ? 'maximum' : 'minimum'} boiling point of ${fmt(az.T, 1)} K. There the liquid and its vapor have one composition.`
      : `No azeotrope: at every composition the vapor is richer in component 1, the lower-boiling liquid.`);
    const box = { l: 140, r: W - 140, t: 130, b: 530 };
    const ax = axes(ctx, box, [0, 1], [335, 380], { nx: 5, ny: 9, xl: 'mole fraction of component 1, liquid x₁ or vapor y₁', yl: 'temperature T (K)', yc: C('temperature') });
    /* the dew curve as the path (y1, T) traced over the liquid's composition */
    /* y1 rises with x1 at every alpha on the slider, so the dew curve is T as a function of y1, read off a table */
    const tab = [];
    for (let i = 0; i <= 400; i += 1) { const bb = boil(i / 400, a); tab.push([bb.y, bb.T]); }
    const dew = (yv) => {
      let j = 1; while (j < tab.length - 1 && tab[j][0] < yv) j += 1;
      const [y0, T0] = tab[j - 1], [y1, T1] = tab[j];
      return y1 > y0 ? T0 + ((T1 - T0) * (yv - y0)) / (y1 - y0) : T0;
    };
    plot(ctx, ax, dew, C('temperature'), { w: 4, dash: [10, 10] });
    plot(ctx, ax, (t) => boil(t, a).T, C('temperature'), { w: 5 });
    F.legend(ctx, ax, [{ s: 'liquid (boiling point)', color: C('temperature'), w: 5 }, { s: 'vapor (dew point)', color: C('temperature'), w: 4, dash: [10, 10] }], { corner: a < 0 ? 'br' : 'tr' });
    text(ctx, 'vapor', ax.X(0.5), ax.Y(378), PAL.muted, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'liquid', ax.X(0.5), ax.Y(337), PAL.muted, { size: 20, weight: 600, align: 'center' });
    /* the pure boiling points */
    text(ctx, `${TB1} K`, ax.X(1) + 14, ax.Y(TB1), C('temperature'), { size: 20, weight: 600, align: 'left' });
    text(ctx, `${TB2} K`, ax.X(0) + 14, ax.Y(TB2) + 26, C('temperature'), { size: 20, weight: 600, align: 'left' });
    /* the reader's liquid, its boiling point and the vapor it gives off */
    const b = boil(x, a);
    line(ctx, ax.X(x), ax.Y(b.T), ax.X(b.y), ax.Y(b.T), alpha(PAL.ink, 0.6), 3);
    line(ctx, ax.X(x), ax.Y(b.T), ax.X(x), box.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
    dot(ctx, ax.X(x), ax.Y(b.T), C('temperature'), true, 9);
    dot(ctx, ax.X(b.y), ax.Y(b.T), C('temperature'), false, 9);
    hits.length = 0;
    hits.push({ x: ax.X(x), y: ax.Y(b.T), r: 16, name: `liquid with x₁ = ${fmt(x, 2)}, boiling at ${fmt(b.T, 1)} K` });
    hits.push({ x: ax.X(b.y), y: ax.Y(b.T), r: 16, name: `the vapor it gives off, y₁ = ${fmt(b.y, 2)}` });
    if (az) {
      dot(ctx, ax.X(az.x), ax.Y(az.T), PAL.ink, true, 10);
      F.label(ctx, 'azeotrope', ax.X(az.x), ax.Y(az.T), { side: a < 0 ? 'above' : 'below', size: 20, color: PAL.ink, gap: 26 });
      hits.push({ x: ax.X(az.x), y: ax.Y(az.T), r: 16, name: `azeotrope: x₁ = y₁ = ${fmt(az.x, 2)} at ${fmt(az.T, 1)} K` });
    }
    const f = b.g1, p1 = x * b.s1 * f;
    const lines = [
      `\\kT = ${fmt(b.T, 1)}\\ \\text{K}`,
      `\\kPone = \\kxone\\kPstarone\\kfMar = (${fmt(x, 2)})(${fmt(b.s1, 3)}\\ \\text{bar})(${fmt(f, 3)}) = ${fmt(p1, 3)}\\ \\text{bar}`,
      `y_1 = \\dfrac{\\kPone}{1\\ \\text{bar}} = ${fmt(p1 / P0, 3)}`,
    ];
    if (az) lines.push(`y_1 = \\kxone = ${fmt(az.x, 2)}\\ \\text{at the azeotrope}`);
    tex(d.readout, lines.join(' \\\\ '));
  }
  register(d.fig, { update: () => {}, draw });
})();
};
