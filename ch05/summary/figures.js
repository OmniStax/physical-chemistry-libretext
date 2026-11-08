/* Figures for the summary of Chapter 5, The Harmonic Oscillator and the Rigid Rotor. Boots against the page's text article.
   Four faithful copies (archetype 7): still, no controls, drawn from the book's own images in the house style. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.summary'] = function (root, F) {
const { C, PAL, alpha, register, begin, line, text, dot } = F;
const sim = (id, H) => F.sim(root, id, H);
const SUB = '₀₁₂₃₄₅₆₇₈₉';

/* ---------- Figure: psi_v and |psi_v|^2 of the oscillator, v = 0 to 3 ----------
   Two panels as the book's: (a) psi_v, (b) |psi_v|^2, each on its level E_v = (v + 1/2)h nu inside the
   parabola V = x^2/2 (x in the scaled coordinate). Curve heights are not to the energy scale. */
(function () {
  const d = sim('fig-ho', 600);
  let hits = []; F.hover(d.stage, () => hits);
  const Hn = [() => 1, (x) => 2 * x, (x) => 4 * x * x - 2, (x) => 8 * x ** 3 - 12 * x];
  const N = [1, 1 / Math.sqrt(2), 1 / Math.sqrt(8), 1 / Math.sqrt(48)];
  const psi = (v) => (x) => N[v] * Hn[v](x) * Math.exp(-x * x / 2) / Math.pow(Math.PI, 0.25);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const cw = C('wavefunction'), cp = C('probability-density'), ce = C('energy'), cl = C('length');
    [['(a)', 140, 'w'], ['(b)', 740, 'p']].forEach(([lab, l, kind]) => {
      const box = { l, r: l + 500, t: 60, b: 520 };
      const ax = F.axes(ctx, box, [-4, 4], [0, 4.4], { nx: 0, ny: 0, xl: '', yl: '' });
      text(ctx, lab, (box.l + box.r) / 2, box.b + 60, PAL.ink, { size: 22, weight: 600, align: 'center' });
      text(ctx, 'x', (box.l + box.r) / 2, box.b + 28, cl, { size: 22, weight: 600, align: 'center' });
      F.plot(ctx, ax, (x) => x * x / 2, alpha(PAL.ink, 0.3), { w: 3 });
      for (let v = 0; v < 4; v++) {
        const e = v + 0.5, f = psi(v);
        line(ctx, ax.X(-4), ax.Y(e), ax.X(4), ax.Y(e), alpha(PAL.ink, 0.45), 2);
        if (kind === 'w') {
          F.plot(ctx, ax, (x) => e + 0.7 * f(x), cw, { w: 4 });
          text(ctx, `ψ${SUB[v]}`, box.l - 12, ax.Y(e), cw, { size: 20, weight: 600, align: 'right' });
          hits.push({ x: ax.X(0.9), y: ax.Y(e), r: 20, name: `ψ${SUB[v]}, with ${v} node${v === 1 ? '' : 's'}` });
        } else {
          F.shade(ctx, ax, (x) => e + 1.1 * f(x) ** 2, e, -4, 4, cp, { alpha: 0.3 });
          F.plot(ctx, ax, (x) => e + 1.1 * f(x) ** 2, cp, { w: 3 });
          text(ctx, `${2 * v + 1}/2 hν`, box.r + 12, ax.Y(e), ce, { size: 17, align: 'left' });
          hits.push({ x: ax.X(0.9), y: ax.Y(e), r: 20, name: `|ψ${SUB[v]}|², at E = ${2 * v + 1}/2 hν` });
        }
      }
    });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- Figure: the rigid rotor, two masses about their centre of mass ----------
   Seen obliquely as in the book: m1 at r1 and m2 at r2 on either side of the centre of mass, r = r1 + r2,
   each on its circle (ellipses here). m1 = m2 r2 / r1 with r2/r1 = 0.6, the book's proportions. */
(function () {
  const d = sim('fig-rotor', 440);
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const cl = C('length'), cm = C('mass'), O = { x: 700, y: 230 }, r1 = 360, r2 = 216, k = 0.32, a = -0.35;
    const P = (r, t) => ({ x: O.x + r * Math.cos(t), y: O.y - k * r * Math.sin(t) });
    [r1, r2].forEach((r) => { ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 2.5; ctx.beginPath(); ctx.ellipse(O.x, O.y, r, k * r, 0, 0, 2 * Math.PI); ctx.stroke(); ctx.restore(); });
    line(ctx, O.x, 30, O.x, O.y, PAL.ink, 2); line(ctx, O.x, O.y, O.x, 420, alpha(PAL.ink, 0.5), 2, [10, 10]);
    const p1 = P(r1, a), p2 = P(r2, a + Math.PI);
    line(ctx, p1.x, p1.y, p2.x, p2.y, PAL.ink, 6);
    dot(ctx, p1.x, p1.y, PAL.muted, true, 34); dot(ctx, p2.x, p2.y, PAL.muted, true, 28); dot(ctx, O.x, O.y, PAL.ink, true, 6);
    text(ctx, 'm₁', p1.x + 48, p1.y + 20, cm, { size: 24, weight: 600 });
    text(ctx, 'm₂', p2.x - 50, p2.y - 20, cm, { size: 24, weight: 600, align: 'right' });
    text(ctx, 'center of mass', O.x - 160, O.y + 120, PAL.ink, { size: 20, align: 'right' });
    F.arrow(ctx, O.x - 150, O.y + 108, O.x - 10, O.y + 6, PAL.ink, 2);
    const yb = 60;
    F.hbracket(ctx, p2.x, O.x, yb + 40, cl, 'r₂');
    F.hbracket(ctx, O.x, p1.x, yb + 40, cl, 'r₁');
    F.hbracket(ctx, p2.x, p1.x, yb, cl, 'r = r₁ + r₂');
    hits.push({ x: p1.x, y: p1.y, r: 34, name: 'mass m₁, at r₁ from the center of mass' }, { x: p2.x, y: p2.y, r: 28, name: 'mass m₂, at r₂ from the center of mass' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- Figure: the rotor's levels and its absorption lines ----------
   The book's image: levels J = 0 to 4, each J -> J + 1 absorption as an arrow labelled with its gap,
   2B, 4B, 6B, 8B, standing over its line on an axis below. Here the levels sit at their true energies,
   J(J + 1)B, so the widening gaps show; the lines below are evenly spaced, 2B apart. */
(function () {
  const d = sim('fig-rotor-levels', 640);
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const ce = C('energy'), l = 260, r = 1240, X = (e) => l + 60 + e * 105, Y = (j) => 470 - j * (j + 1) * 20;
    text(ctx, 'J', l - 40, 30, PAL.ink, { size: 22, weight: 600, align: 'right' });
    for (let j = 0; j <= 4; j++) { line(ctx, l, Y(j), r, Y(j), ce, 4); text(ctx, String(j), l - 40, Y(j), PAL.ink, { size: 20, align: 'right' }); }
    const base = 560;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.strokeRect(l, base - 50, r - l, 50); ctx.restore();
    for (let j = 0; j < 4; j++) {
      const x = X(2 * (j + 1));
      line(ctx, x, base - 50, x, Y(j + 1) + 18, alpha(PAL.ink, 0.6), 2, [10, 10]);
      F.arrow(ctx, x, Y(j + 1) + 40, x, Y(j + 1), PAL.ink, 4);
      line(ctx, x, base - 50, x, base, PAL.ink, 5);
      text(ctx, `ΔE = ${2 * (j + 1)}B`, x - 16, (Y(j) + Y(j + 1)) / 2, ce, { size: 20, weight: 600, align: 'right', bg: PAL.panel });
      text(ctx, `${2 * (j + 1)}B`, x, base + 28, ce, { size: 20, weight: 600, align: 'center' });
      hits.push({ x, y: (Y(j) + Y(j + 1)) / 2, r: 20, name: `the absorption J = ${j} → ${j + 1}, ΔE = ${2 * (j + 1)}B` });
    }
    text(ctx, '0', X(0), base + 28, ce, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'rotational energy levels', 60, 270, ce, { size: 20, weight: 600 });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- Figure: the vector model of angular momentum, l = 2 ----------
   (a) the vector of length sqrt(l(l + 1)) = sqrt 6 drawn to each of its five projections m = +2 ... -2
   on z, with the circle it ends on; (b) the five cones the vector can lie on, seen obliquely: each
   cone's rim at height m with radius sqrt(6 - m^2), its apex at the origin. */
(function () {
  const d = sim('fig-l-vector', 620);
  let hits = []; F.hover(d.stage, () => hits);
  const L = Math.sqrt(6), MS = [2, 1, 0, -1, -2];
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const ca = C('angular-momentum'), s = 100;
    /* (a) */
    const A = { x: 360, y: 300 };
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(A.x, A.y, L * s, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    line(ctx, A.x, A.y + L * s + 20, A.x, A.y - L * s - 30, PAL.ink, 2);
    text(ctx, 'z', A.x + 14, A.y - L * s - 26, PAL.ink, { size: 22, weight: 600 });
    MS.forEach((m) => {
      const y = A.y - m * s, x = A.x + Math.sqrt(6 - m * m) * s;
      if (m) line(ctx, A.x, y, x, y, alpha(PAL.ink, 0.5), 2, [10, 10]);
      F.arrow(ctx, A.x, A.y, x, y, ca, 4);
      text(ctx, m > 0 ? `+${m}` : m < 0 ? `−${-m}` : '0', A.x - 14, y, PAL.ink, { size: 20, align: 'right' });
      hits.push({ x: (A.x + x) / 2, y: (A.y + y) / 2, r: 18, name: `the angular momentum with m = ${m}: length √6, projection ${m}` });
    });
    text(ctx, 'm_l', A.x - 50, A.y - 1.5 * s, PAL.ink, { size: 20, align: 'right' });
    text(ctx, 'a)', A.x - 30, 600, PAL.ink, { size: 22, weight: 600 });
    /* (b) */
    const B = { x: 1030, y: 300 }, k = 0.25;
    line(ctx, B.x, B.y + 280, B.x, B.y - 290, PAL.ink, 2); F.arrow(ctx, B.x, B.y - 260, B.x, B.y - 290, PAL.ink, 2);
    text(ctx, 'z', B.x - 22, B.y - 280, PAL.ink, { size: 22, weight: 600 });
    MS.forEach((m) => {
      const R = Math.sqrt(6 - m * m) * s * 0.95, y = B.y - m * s;
      ctx.save(); ctx.fillStyle = alpha(ca, 0.12); ctx.strokeStyle = alpha(ca, 0.9); ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.moveTo(B.x, B.y); ctx.lineTo(B.x - R, y); ctx.lineTo(B.x + R, y); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.moveTo(B.x - R, y); ctx.lineTo(B.x, B.y); ctx.lineTo(B.x + R, y); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(B.x, y, R, k * R, 0, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
      text(ctx, m > 0 ? `+${m}` : m < 0 ? `−${-m}` : '0', B.x + R + 16, y, PAL.ink, { size: 20 });
      hits.push({ x: B.x + R * 0.7, y, r: 20, name: `the cone for m = ${m}: the vector lies somewhere on it` });
    });
    text(ctx, 'b)', B.x - 40, 600, PAL.ink, { size: 22, weight: 600 });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
