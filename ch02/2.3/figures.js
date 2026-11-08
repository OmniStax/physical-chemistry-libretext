/* Figures for section 2.3 Oscillatory Solutions to Differential Equations. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['2.3'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, fmt, vbracket } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- Figure 2.3.1: the far end picks the allowed p ----------
   Still: the separation constant K is the one slider, and nothing in the idea moves in time.
   The spatial factor X(x) starts from X(0) = 0 on a string of length L = 1 m. For K > 0 it is
   A(e^{qx} - e^{-qx}) with q = sqrt(K) and only grows; at K = 0 it is a straight line; for
   K = -p^2 < 0 it is c2 sin(px). Each curve is drawn at the size that makes its largest value on
   [0, L] one, so the shape changes smoothly through K = 0. The far end must land on zero; it does
   only at p = n pi / L, the dashed circles on the slider (K = -(n pi)^2 m^-2), and landing there
   brings the nodes in. Below, a strip of p from 0 to 10.5 rad/m holds the ladder n pi / L with the
   live p on it.
   x: 0 to 1.2 m (the string ends at L = 1 m); y: -1.3 to 1.3 in units of the curve's largest value. */
(function () {
  const d = sim('sim-shooting', 620);
  const L = 1, NMAX = 3;
  const rungs = Array.from({ length: NMAX }, (_, i) => -Math.pow((i + 1) * Math.PI / L, 2));
  const Kc = ctl(d.controls, { label: 'K', cls: '', min: -100, max: 20, step: 0.1, value: -25, unit: 'm⁻²', dec: 1, aria: 'the separation constant K',
    specials: rungs.map((k, i) => ({ at: k, label: 'n = ' + (i + 1) })) });
  const land = F.tween(d, 0); let landedOn = 0;
  let hits = []; F.hover(d.stage, () => hits);
  /* X(x) up to its constant, the same family on both sides of K = 0 */
  const raw = (K, x) => K < -1e-9 ? Math.sin(Math.sqrt(-K) * x) / Math.sqrt(-K) : K > 1e-9 ? Math.sinh(Math.sqrt(K) * x) / Math.sqrt(K) : x;
  function draw() {
    const { ctx, W } = begin(d.c);
    hits = [];
    const K = Kc.v, p = K < 0 ? Math.sqrt(-K) : 0;
    const n = rungs.findIndex((r) => Math.abs(K - r) < 1e-6) + 1;
    if (n && landedOn !== n) { landedOn = n; land.set(0); land.to(1, 700); }
    if (!n && landedOn) { landedOn = 0; land.set(0); }
    let big = 0; for (let i = 0; i <= 400; i++) big = Math.max(big, Math.abs(raw(K, L * i / 400)));
    const X = (x) => raw(K, x) / big, XL = n ? 0 : X(L);
    const box = { l: 140, r: W - 120, t: 112, b: 400 };
    const ax = axes(ctx, box, [0, 1.2], [-1.3, 1.3], { nx: 6, ny: 0, fx: (v) => fmt(v, 1), xl: 'position x (m)', yl: 'X(x)', xc: C('length') });
    line(ctx, ax.X(0), ax.Y(0), ax.X(1.2), ax.Y(0), alpha(PAL.ink, 0.35), 2);
    /* the end at x = L, where the string is held */
    line(ctx, ax.X(L), box.t, ax.X(L), box.b, alpha(PAL.ink, 0.3), 2, [4, 8]);
    plot(ctx, ax, X, PAL.ink, { w: 5, x: [0, L] });
    dot(ctx, ax.X(0), ax.Y(0), PAL.ink, true, 10);
    hits.push({ x: ax.X(0), y: ax.Y(0), r: 14, name: 'the end held at x = 0, where X(0) = 0' });
    const k = n ? land.v : 0;
    if (!n && Math.abs(XL) > 0.015) {
      const yl = ax.Y(Math.max(-1.3, Math.min(1.3, XL)));
      vbracket(ctx, ax.X(L) + 26, Math.min(yl, ax.Y(0)), Math.max(yl, ax.Y(0)), alpha(PAL.ink, 0.6), 'misses', 1);
      dot(ctx, ax.X(L), yl, PAL.ink, true, 9);
      hits.push({ x: ax.X(L), y: yl, r: 14, name: `the curve at x = L, ${fmt(XL, 2)} of its largest value away from zero` });
    }
    /* the target: hollow until the curve lands on it */
    dot(ctx, ax.X(L), ax.Y(0), PAL.ink, false, 12);
    if (n) dot(ctx, ax.X(L), ax.Y(0), PAL.ink, true, 4 + 6 * k);
    hits.push({ x: ax.X(L), y: ax.Y(0), r: 16, name: 'the end held at x = L, where X(L) must be zero' });
    /* the nodes between, once the curve lands */
    for (let j = 1; j < n; j++) {
      const xn = j * L / n;
      dot(ctx, ax.X(xn), ax.Y(0), PAL.ink, true, 8 * k);
      hits.push({ x: ax.X(xn), y: ax.Y(0), r: 12, name: `a node at x = ${fmt(xn, 2)} m` });
    }
    /* the ladder of allowed p */
    const sy = 548, sx = (q) => box.l + (box.r - box.l) * q / 10.5;
    line(ctx, sx(0), sy, sx(10.5), sy, alpha(PAL.ink, 0.5), 2);
    text(ctx, 'p (rad/m)', box.l - 20, sy, C('wavenumber'), { size: 20, weight: 600, align: 'right' });
    for (let i = 0; i <= 10; i += 2) text(ctx, String(i), sx(i), sy + 26, PAL.muted, { size: 17, align: 'center' });
    for (let i = 1; i <= NMAX; i++) {
      const q = i * Math.PI / L;
      line(ctx, sx(q), sy - 14, sx(q), sy + 14, i === n ? C('wavenumber') : alpha(PAL.ink, 0.55), 3);
      text(ctx, `n = ${i}`, sx(q), sy - 32, i === n ? C('wavenumber') : PAL.muted, { size: 17, align: 'center', weight: i === n ? 600 : 400 });
      hits.push({ x: sx(q), y: sy, r: 14, name: `p = ${i}π/L = ${fmt(q, 2)} rad/m, an allowed value` });
    }
    if (K < 0) {
      dot(ctx, sx(Math.min(10.5, p)), sy, C('wavenumber'), true, 10);
      hits.push({ x: sx(p), y: sy, r: 14, name: `the live p = ${fmt(p, 2)} rad/m` });
    } else text(ctx, 'no real p for K ≥ 0', sx(0) + 8, sy + 54, PAL.muted, { size: 17 });
    const Ks = fmt(K, n ? 2 : 1);
    if (n) topline(ctx, `At $K = ${Ks}\\ \\text{m}^{-2}$, $\\kpn = ${n === 1 ? '' : n}\\pi/\\kL$ and the curve lands on zero at the far end${n > 1 ? `, with ${n - 1} node${n > 2 ? 's' : ''} between` : ''}.`);
    else if (K < -1e-9) topline(ctx, `At $K = ${Ks}\\ \\text{m}^{-2}$, $\\kpn\\kL/\\pi = ${fmt(p * L / Math.PI, 2)}$ and the curve misses zero at the far end.`);
    else if (K > 1e-9) topline(ctx, `At $K = ${Ks}\\ \\text{m}^{-2}$ the curve only grows and never comes back to zero.`);
    else topline(ctx, 'At $K = 0$ the curve is a straight line, which is zero at both ends only if it is zero everywhere.');
    if (K < -1e-9) {
      const s = n ? '0' : fmt(Math.sin(p * L), 2);
      tex(d.readout, `K = -\\kpn^2 = ${Ks}\\ \\text{m}^{-2} \\\\ X(\\kL) = c_2 \\sin(\\kpn\\kL) = c_2 \\sin(${fmt(p * L / Math.PI, 2)}\\pi) = ${s === '0' || s === '0.00' || s === '-0.00' ? '0' : s + '\\,c_2'}`);
    } else if (K > 1e-9) {
      const q = Math.sqrt(K) * L;
      tex(d.readout, `X(\\kL) = A\\left(e^{\\sqrt{K}\\kL} - e^{-\\sqrt{K}\\kL}\\right) \\\\ X(\\kL) = A\\left(e^{${fmt(q, 2)}} - e^{-${fmt(q, 2)}}\\right) = ${fmt(Math.exp(q) - Math.exp(-q), 2)}\\,A`);
    } else tex(d.readout, `X(\\kx) = b\\kx \\\\ X(\\kL) = b\\kL`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
