/* Figures for section 17.7 Partition Functions of Indistinguishable Molecules Must Avoid Over Counting States. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['17.7'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- Figure 17.7.1 + 17.7.2: two particles, told apart or identical ----------
   Left, every state of two particles on M evenly spaced levels 0, ε, 2ε, … as a grid: the red particle's level
   across, the blue particle's down, so M = 2 is the book's four arrangements. Each square holds a small ladder
   with the two particles on it and is tinted by its Boltzmann weight e^(−βε(i+j)). Choosing "identical" drains
   the referent colours to ink and slides each square below the diagonal onto its mirror image, where it fades:
   M² states become M(M+1)/2. Right, three bars on one scale: q² (told apart), Q (identical, the true sum) and
   q²/2!. The bar axis follows q² (a zoom, since q² runs from 1 to 144 over the sliders); the bars are the point,
   not their absolute size. Still: the change between the two choices is a morph, with no clock. */
(function () {
  const d = sim('sim-two-particle-states', 600);
  const K = F.choice(d.controls, { label: 'particles', options: [{ value: 'apart', label: 'told apart' }, { value: 'same', label: 'identical' }], value: 'apart' });
  const B = ctl(d.controls, { label: '\\beta\\kepsilon', cls: '', min: 0, max: 3, step: 0.05, value: 1, unit: '', dec: 2, detents: [0, 1] });
  const M = ctl(d.controls, { label: 'levels', cls: '', min: 2, max: 12, step: 1, value: 2, unit: '', dec: 0 });
  const hov = []; F.hover(d.stage, () => hov);
  function sums(m, be) {
    let q = 0, q2 = 0; for (let i = 0; i < m; i++) { q += Math.exp(-be * i); q2 += Math.exp(-2 * be * i); }
    return { q, Qd: q * q, Qi: (q * q + q2) / 2, half: q * q / 2 };
  }
  function draw() {
    const { ctx, W } = begin(d.c);
    const m = Math.round(M.v), be = B.v, k = K.mix((v) => (v === 'same' ? 1 : 0));
    const { q, Qd, Qi, half } = sums(m, be);
    const same = K.value === 'same', nId = m * (m + 1) / 2;
    topline(ctx, same
      ? `Identical: ${nId} states, and $\\kQsys = ${fmt(Qi, 3)}$, between $\\kqmol^2/2! = ${fmt(half, 3)}$ and $\\kqmol^2 = ${fmt(Qd, 3)}$.`
      : `Told apart: ${m * m} states, and $\\kQdist = \\kqmol^2 = ${fmt(Qd, 3)}$.`);
    /* the grid of states */
    const G = 440, gx = 110, gy = 120, s = G / m;
    const red = F.mixColor(F.ref('red'), PAL.ink, k), blue = F.mixColor(F.ref('blue'), PAL.ink, k);
    const tint = C('partition-function');
    text(ctx, 'level of the red particle', gx + G / 2, gy - 30, F.ref('red'), { size: 20, weight: 600, align: 'center' });
    ctx.save(); ctx.translate(gx - 42, gy + G / 2); ctx.rotate(-Math.PI / 2);
    text(ctx, 'level of the blue particle', 0, 0, F.ref('blue'), { size: 20, weight: 600, align: 'center' }); ctx.restore();
    for (let i = 0; i < m; i++) {
      if (m <= 6 || i % 2 === 0) {
        text(ctx, i === 0 ? '0' : i === 1 ? 'ε' : `${i}ε`, gx + (i + 0.5) * s, gy - 8, PAL.muted, { size: 17, align: 'center' });
        text(ctx, i === 0 ? '0' : i === 1 ? 'ε' : `${i}ε`, gx - 10, gy + (i + 0.5) * s, PAL.muted, { size: 17, align: 'right' });
      }
    }
    hov.length = 0;
    const cell = (i, j, a, x, y) => {
      if (!(a > 0.01)) return;
      ctx.save(); ctx.globalAlpha *= a;
      const w = Math.exp(-be * (i + j));
      ctx.fillStyle = alpha(tint, 0.08 + 0.4 * w); ctx.fillRect(x + 2, y + 2, s - 4, s - 4);
      ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 1.5; ctx.strokeRect(x + 2, y + 2, s - 4, s - 4);
      /* a small ladder: m levels, bottom to top, the two particles on theirs */
      const pad = s * 0.16, h = s - 2 * pad, Ly = (n) => y + s - pad - (m === 1 ? 0 : (n / (m - 1)) * h);
      const r = Math.max(3, Math.min(13, s * 0.11));
      if (m <= 8) for (let n = 0; n < m; n++) line(ctx, x + pad, Ly(n), x + s - pad, Ly(n), alpha(PAL.ink, 0.55), m <= 4 ? 2.5 : 1.5);
      const xr = x + s / 2 - (i === j ? r * 1.25 : 0), xb = x + s / 2 + (i === j ? r * 1.25 : 0);
      dot(ctx, xr, Ly(i) - r, red, true, r);
      dot(ctx, xb, Ly(j) - r, blue, true, r);
      ctx.restore();
    };
    for (let j = 0; j < m; j++) for (let i = 0; i < m; i++) {
      const x0 = gx + i * s, y0 = gy + j * s;
      if (i < j) {
        /* below the diagonal: slides onto its mirror (j, i) and fades as the particles become identical */
        const x1 = gx + j * s, y1 = gy + i * s;
        cell(i, j, 1 - k, x0 + (x1 - x0) * k, y0 + (y1 - y0) * k);
        if (!same) hov.push({ x: x0 + s / 2, y: y0 + s / 2, r: s / 2, name: `red on ${i ? i + 'ε' : '0'}, blue on ${j ? j + 'ε' : '0'}: e^(−${i + j}βε) = ${fmt(Math.exp(-be * (i + j)), 3)}` });
      } else {
        cell(i, j, 1, x0, y0);
        hov.push({ x: x0 + s / 2, y: y0 + s / 2, r: s / 2, name: same
          ? (i === j ? `both particles on ${i ? i + 'ε' : '0'}: e^(−${2 * i}βε) = ${fmt(Math.exp(-2 * be * i), 3)}` : `one particle on ${i ? i + 'ε' : '0'}, one on ${j ? j + 'ε' : '0'}: e^(−${i + j}βε) = ${fmt(Math.exp(-be * (i + j)), 3)}`)
          : `red on ${i ? i + 'ε' : '0'}, blue on ${j ? j + 'ε' : '0'}: e^(−${i + j}βε) = ${fmt(Math.exp(-be * (i + j)), 3)}` });
      }
    }
    /* the diagonal, where the two share a level */
    line(ctx, gx, gy, gx + G, gy + G, alpha(PAL.ink, 0.25 + 0.35 * k), 2, [10, 10]);
    /* the three sums on one scale */
    const box = { l: 760, r: W - 60, t: 150, b: 520 };
    const top = F.nice(0, Qd * 1.08, 4);
    const ax = axes(ctx, box, [0, top.hi], [0, 3], { nx: top.n, ny: 0, xl: 'partition function', xc: tint });
    const bars = [[Qd, 'q² (told apart)'], [Qi, 'Q (identical)'], [half, 'q²/2!']];
    bars.forEach(([v, s2], n) => {
      const y = ax.Y(2.5 - n), on = n === 1 ? 1 : 0.55;
      ctx.save(); ctx.fillStyle = alpha(tint, n === 1 ? 0.85 : 0.4); ctx.fillRect(box.l, y - 26, Math.max(2, ax.X(v) - box.l), 52); ctx.restore();
      text(ctx, s2, box.l + 12, y - 44, alpha(PAL.ink, on > 0.9 ? 1 : 0.8), { size: 20, weight: 600 });
      text(ctx, fmt(v, 3), Math.min(ax.X(v) + 10, box.r - 70), y, PAL.ink, { size: 20, bg: PAL.panel });
    });
    const Qtex = m === 2 ? `e^0 + e^{-\\beta\\kepsilon} + e^{-2\\beta\\kepsilon}` : `\\sum_{i \\le j} e^{-\\beta(\\epsilon_i + \\epsilon_j)}`;
    tex(d.readout, `\\kQdist = \\kqmol^2 = (${fmt(q, 3)})^2 = ${fmt(Qd, 3)} \\\\ \\kQsys = ${Qtex} = ${fmt(Qi, 3)} \\\\ \\dfrac{\\kqmol^2}{2!} = ${fmt(half, 3)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
