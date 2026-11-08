/* Figures for section 6.7 The Helium Atom Cannot Be Solved Exactly. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.7'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, text, topline, axes, dot, fmt } = F;

/* e^2 / 4 pi eps0 a0, the energy of two unit charges one Bohr radius apart: 27.211 eV = 4.3597e-18 J */
const HARTREE_EV = 27.211386, HARTREE_J = 4.3597447e-18, A0_PM = 52.917721;

/* =====================================================================
   FIGURE 6.7.1: helium's nucleus and its two electrons.
   Still: the positions are the idea, and nothing in it has a time. The
   reader drags either electron in the plane (each held by two sliders, x
   and y in units of a0, -3 to 3 and -2 to 2), the nucleus fixed at the
   origin. Left: the plane on one scale, 110 units per a0, r1 and r2 solid
   from the nucleus, r12 dashed between the electrons (hover names).
   Right: a bar each for V1, V2 (in the colours of their electrons) and V12
   (energy), on a fixed scale of -120 to +60 eV; a bar past the frame is
   cut at its edge and its number still printed. Opens with electron 1 at
   (-1.4, 0.6) a0 and electron 2 at (1.0, 1.2) a0; the book gives no
   numbers. Each electron is labelled, since the reader must tell them
   apart; the labels follow only the reader's drag.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-helium', 600);
  const sl = (label, key, min, max, value, aria) => ctl(d.controls, { label, cls: 'length', key, min, max, step: 0.05, value, unit: 'a₀', dec: 2, aria });
  const X1 = sl('x_1', 'x1', -3, 3, -1.4, 'the x coordinate of electron 1, in Bohr radii');
  const Y1 = sl('y_1', 'y1', -2, 2, 0.6, 'the y coordinate of electron 1, in Bohr radii');
  const X2 = sl('x_2', 'x2', -3, 3, 1.0, 'the x coordinate of electron 2, in Bohr radii');
  const Y2 = sl('y_2', 'y2', -2, 2, 1.2, 'the y coordinate of electron 2, in Bohr radii');
  const P1 = F.drag(d, { x: X1, y: Y1 }), P2 = F.drag(d, { x: X2, y: Y2 });
  let hits = []; F.hover(d.stage, () => hits);
  const ev = (v) => (Number.isFinite(v) ? `${v > 0 ? '+' : v < 0 ? '−' : ''}${fmt(Math.abs(v), 1)} eV` : (v > 0 ? '+∞' : '−∞'));
  const evT = (v) => (Number.isFinite(v) ? `${fmt(v, 1)}` : (v > 0 ? '+\\infty' : '-\\infty'));
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const c1 = F.ref('electron-1'), c2 = F.ref('electron-2'), cl = C('length'), ce = C('energy');
    const box = { l: 70, r: 730, t: 120, b: 560 };
    const ax = axes(ctx, box, [-3, 3], [-2, 2], { nx: 6, ny: 4, xl: 'x (a₀)', yl: 'y (a₀)', xc: cl, yc: cl, fx: (v) => (v === 3 ? '' : fmt(v, 0)), fy: (v) => fmt(v, 0) });
    const e1 = [X1.v, Y1.v], e2 = [X2.v, Y2.v];
    const r1 = Math.hypot(...e1), r2 = Math.hypot(...e2), r12 = Math.hypot(e1[0] - e2[0], e1[1] - e2[1]);
    const V1 = -2 * HARTREE_EV / r1, V2 = -2 * HARTREE_EV / r2, V12 = HARTREE_EV / r12;
    const O = { x: ax.X(0), y: ax.Y(0) }, p1 = { x: ax.X(e1[0]), y: ax.Y(e1[1]) }, p2 = { x: ax.X(e2[0]), y: ax.Y(e2[1]) };
    line(ctx, O.x, O.y, p1.x, p1.y, cl, 3);
    line(ctx, O.x, O.y, p2.x, p2.y, cl, 3);
    line(ctx, p1.x, p1.y, p2.x, p2.y, cl, 3, [10, 10]);
    const mid = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });
    [[mid(O, p1), `r₁ = ${fmt(r1, 2)} a₀, from the nucleus to electron 1`], [mid(O, p2), `r₂ = ${fmt(r2, 2)} a₀, from the nucleus to electron 2`], [mid(p1, p2), `r₁₂ = ${fmt(r12, 2)} a₀, between the electrons`]]
      .forEach(([m, name]) => hits.push({ x: m.x, y: m.y, r: 16, name }));
    dot(ctx, O.x, O.y, F.el('He'), true, 15);
    hits.push({ x: O.x, y: O.y, r: 16, name: 'the helium nucleus, charge +2e, at the origin' });
    P1.draw(ctx, ax, c1); P2.draw(ctx, ax, c2);
    /* the body is the electron's convention colour (root 7.2); a ring in each referent's colour tells the two apart */
    dot(ctx, p1.x, p1.y, F.el('e-'), true, 10); dot(ctx, p2.x, p2.y, F.el('e-'), true, 10);
    for (const [p, c] of [[p1, c1], [p2, c2]]) { ctx.save(); ctx.strokeStyle = c; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(p.x, p.y, 17, 0, 2 * Math.PI); ctx.stroke(); ctx.restore(); }
    hits.push({ x: p1.x, y: p1.y, r: 18, name: 'electron 1: drag it' }, { x: p2.x, y: p2.y, r: 18, name: 'electron 2: drag it' });
    F.label(ctx, 'electron 1', p1.x, p1.y, { side: p1.y < p2.y ? 'above' : 'below', size: 20, color: c1, gap: 20 });
    F.label(ctx, 'electron 2', p2.x, p2.y, { side: p1.y < p2.y ? 'below' : 'above', size: 20, color: c2, gap: 20 });
    /* the bars: -120 to +60 eV */
    const bb = { l: 900, r: 1320, t: 120, b: 560 };
    const bx = axes(ctx, bb, [0, 3], [-120, 60], { nx: 0, ny: 6, yl: 'energy (eV)', yc: ce, fy: (v) => fmt(v, 0) });
    const y0 = bx.Y(0);
    line(ctx, bb.l, y0, bb.r, y0, alpha(PAL.ink, 0.5), 2);
    [[V1, c1, 'V₁', 'V_1, the attraction of electron 1 to the nucleus'], [V2, c2, 'V₂', 'V_2, the attraction of electron 2 to the nucleus'], [V12, ce, 'V₁₂', 'V_12, the repulsion between the electrons']].forEach(([v, col, s, name], i) => {
      const cx = bx.X(i + 0.5), w = 80, yv = Number.isFinite(v) ? Math.min(bb.b, Math.max(bb.t, bx.Y(v))) : (v > 0 ? bb.t : bb.b);
      ctx.save(); ctx.fillStyle = alpha(col, 0.75); ctx.fillRect(cx - w / 2, Math.min(y0, yv), w, Math.abs(yv - y0)); ctx.restore();
      text(ctx, s, cx, v < 0 ? y0 - 18 : y0 + 26, col, { size: 22, weight: 600, align: 'center' });
      text(ctx, ev(v), cx, v < 0 ? Math.min(bb.b - 8, yv + 24) : Math.max(bb.t + 16, yv - 12), PAL.ink, { size: 17, align: 'center', bg: PAL.panel });
      hits.push({ x: cx, y: (y0 + yv) / 2, r: 40, name: `${name}: ${ev(v)}` });
    });
    topline(ctx, `The electrons are $${fmt(r12, 2)}\\,a_0$ apart, so their repulsion $\\kVab$ is ${ev(V12)}.`);
    const J = (v) => (Number.isFinite(v) ? `${fmt(v * HARTREE_J / HARTREE_EV * 1e18, 2)} \\times 10^{-18}\\text{ J}` : evT(v));
    tex(d.readout, `\\kVa = -\\dfrac{2\\ke^2}{4\\pi\\epsilon_0 \\kra} = -\\dfrac{2\\ke^2}{4\\pi\\epsilon_0 (${fmt(r1 * A0_PM, 1)}\\text{ pm})} = ${J(V1)} = ${evT(V1)}\\text{ eV} \\\\ \\kVb = -\\dfrac{2\\ke^2}{4\\pi\\epsilon_0 \\krb} = -\\dfrac{2\\ke^2}{4\\pi\\epsilon_0 (${fmt(r2 * A0_PM, 1)}\\text{ pm})} = ${J(V2)} = ${evT(V2)}\\text{ eV} \\\\ \\kVab = \\dfrac{\\ke^2}{4\\pi\\epsilon_0 \\krab} = \\dfrac{\\ke^2}{4\\pi\\epsilon_0 (${fmt(r12 * A0_PM, 1)}\\text{ pm})} = ${J(V12)} = ${evT(V12)}\\text{ eV}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
