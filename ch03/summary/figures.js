/* Figures for the summary of Chapter 3, The Schrödinger Equation and a Particle in a Box. Boots against the page's text article.
   Three faithful copies (archetype 7): still, no controls, drawn from the book's own images. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.summary'] = function (root, F) {
const { C, PAL, alpha, register, begin, line, text, axes, plot, shade } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- Figure: the infinite well ----------
   V = 0 between x = 0 and x = L, infinite walls either side. */
(function () {
  const d = sim('fig-well', 380);
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c), ce = C('energy');
    hits = [];
    const x0 = 430, x1 = 970, top = 60, base = 300, wall = 150;
    [[x0 - wall, x0], [x1, x1 + wall]].forEach(([a, b], i) => {
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.12); ctx.fillRect(a, top, b - a, base - top); ctx.restore();
      for (let y = top + 18; y < base; y += 22) line(ctx, a, y + 14, a + 18, y - 4, alpha(PAL.ink, 0.25), 2);
      line(ctx, i ? a : b, top, i ? a : b, base, PAL.ink, 4);
      text(ctx, 'V(x) = ∞', (a + b) / 2, top + 70, ce, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
      hits.push({ x: (a + b) / 2, y: (top + base) / 2, r: 60, name: 'an impenetrable wall, where the potential energy is infinite' });
    });
    line(ctx, x0, base, x1, base, PAL.ink, 4);
    text(ctx, 'V = 0', (x0 + x1) / 2, base - 30, ce, { size: 22, weight: 600, align: 'center' });
    line(ctx, x0 - wall - 40, base + 40, x1 + wall + 50, base + 40, alpha(PAL.ink, 0.6), 2);
    F.arrow(ctx, x1 + wall + 20, base + 40, x1 + wall + 60, base + 40, alpha(PAL.ink, 0.6), 2);
    text(ctx, 'x', x1 + wall + 80, base + 40, C('length'), { size: 22, weight: 600, align: 'center', base: 'middle' });
    [[x0, '0'], [x1, 'L']].forEach(([x, s]) => { line(ctx, x, base + 32, x, base + 48, PAL.ink, 2); text(ctx, s, x, base + 70, s === 'L' ? C('length') : PAL.ink, { size: 22, weight: s === 'L' ? 600 : 400, align: 'center' }); });
    hits.push({ x: (x0 + x1) / 2, y: base - 60, r: 60, name: 'inside the box, where the potential energy is zero' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- Figure: psi_n and |psi_n|^2 of the 1D box, n = 1 to 4 ----------
   Two panels as the book's: (a) psi_n, (b) |psi_n|^2, each drawn on a dashed line at E_n = n^2 h^2/8mL^2,
   x from 0 to L. The curves' heights are not to the energy scale. */
(function () {
  const d = sim('fig-pib-wfns', 560);
  const NS = [1, 2, 3, 4];
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c), cw = C('wavefunction'), cp = C('probability-density');
    hits = [];
    [['(a)', 100, 'ψ'], ['(b)', 690, 'p']].forEach(([lab, l, kind]) => {
      const box = { l, r: l + 520, t: 70, b: 480 };
      const ax = axes(ctx, box, [0, 1], [0, 19], { nx: 4, ny: 0, fx: (v) => (v === 0 ? '0' : v === 1 ? 'L' : `${v}L`), xl: 'x', xc: C('length'), yl: '' });
      text(ctx, lab, l, 46, PAL.ink, { size: 22, weight: 600 });
      NS.forEach((n) => {
        const e = n * n;
        line(ctx, ax.X(0), ax.Y(e), ax.X(1), ax.Y(e), alpha(PAL.ink, 0.45), 2, [10, 10]);
        if (kind === 'p') text(ctx, `${e === 1 ? '' : e}h²/8mL²`, ax.X(1) + 10, ax.Y(e), C('energy'), { size: 17, base: 'middle' });
        if (kind === 'ψ') {
          plot(ctx, ax, (x) => e + 1.4 * Math.sin(n * Math.PI * x), cw, { w: 4 });
          hits.push({ x: ax.X(0.5 / n), y: ax.Y(e + 1.4), r: 18, name: `ψ${'₁₂₃₄'[n - 1]}, with ${n - 1} node${n === 2 ? '' : 's'}` });
        } else {
          shade(ctx, ax, (x) => e + 2.2 * Math.sin(n * Math.PI * x) ** 2, e, 0, 1, cp, { alpha: 0.3 });
          plot(ctx, ax, (x) => e + 2.2 * Math.sin(n * Math.PI * x) ** 2, cp, { w: 3 });
          hits.push({ x: ax.X(0.5 / n), y: ax.Y(e + 2.2), r: 18, name: `|ψ${'₁₂₃₄'[n - 1]}|², with ${n - 1} node${n === 2 ? '' : 's'}` });
        }
        if (kind === 'ψ') text(ctx, `n = ${n}`, box.l - 12, ax.Y(e), PAL.ink, { size: 17, align: 'right', base: 'middle' });
      });
    });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- Figure: the levels of a particle in a cube and their degeneracies ----------
   The book's ladder: n_x^2 + n_y^2 + n_z^2 from 3 to 19 on the left, a rung per level, the states and the
   degree of degeneracy beside it. The book's image prints (3,1,1) three times; the states are drawn here. */
(function () {
  const d = sim('fig-cube-levels', 640);
  const LEVELS = [
    [3, ['(1,1,1)']], [6, ['(2,1,1)', '(1,2,1)', '(1,1,2)']], [9, ['(2,2,1)', '(2,1,2)', '(1,2,2)']],
    [11, ['(3,1,1)', '(1,3,1)', '(1,1,3)']], [12, ['(2,2,2)']], [14, ['(3,2,1)', '(3,1,2)', '(2,3,1)', '(1,3,2)', '(1,2,3)', '(2,1,3)']],
    [17, ['(3,2,2)', '(2,3,2)', '(2,2,3)']], [18, ['(4,1,1)', '(1,4,1)', '(1,1,4)']], [19, ['(3,3,1)', '(3,1,3)', '(1,3,3)']],
  ];
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c), ce = C('energy');
    hits = [];
    const Y = (e) => 610 - e * 28, ax = 250;
    line(ctx, ax, 600, ax, 50, PAL.ink, 3); line(ctx, ax, 610, 1300, 610, PAL.ink, 3);
    text(ctx, 'n_x^2 + n_y^2 + n_z^2', ax - 20, 30, PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, '(n_x, n_y, n_z)', 640, 30, PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'degeneracy', 1200, 30, PAL.ink, { size: 20, weight: 600, align: 'center' });
    LEVELS.forEach(([e, ss]) => {
      const y = Y(e);
      text(ctx, String(e), ax - 30, y, PAL.ink, { size: 20, align: 'right', base: 'middle' });
      line(ctx, ax + 40, y, ax + 200, y, ce, 5);
      text(ctx, ss.join('  '), ax + 230, y, PAL.ink, { size: 18, base: 'middle' });
      text(ctx, String(ss.length), 1200, y, PAL.ink, { size: 20, weight: 600, align: 'center', base: 'middle' });
      hits.push({ x: ax + 120, y, r: 14, name: `E = ${e}h²/8mL², degree of degeneracy ${ss.length}` });
    });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
