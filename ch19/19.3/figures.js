/* Figures for section 19.3 Work and Heat are not State Functions. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['19.3'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, shade, arrow, fmt } = F;

/* ---------- Sim: compression and expansion in steps (the book's six piston and PV images) ----------
   The book's cylinders: compression from 1 L at 1 bar to 0.5 L against 2 bar (nRT = 1 L bar = 100 J); expansion
   from 1 L at 2 bar to 2 L against 1 bar (nRT = 2 L bar). In N steps the external pressure is set to
   P_k = P_i + k (P_f - P_i)/N, the peg is pulled, and the piston shoots to V_k = nRT/P_k (the book's
   "suddenly"); each step adds the rectangle -P_k (V_k - V_{k-1}). N = 1 is the book's one-step path, and as N
   grows the staircase closes on the isotherm, w_rev = -nRT ln(V_f/V_i): 69.3 J against 100 J for the
   compression, -138.6 J against -100 J for the expansion. Moving: the peg pulls are a time. PV plane V 0 to
   2.5 L, P 0 to 2.5 bar, fixed. */
(function () {
  const d = F.sim(root, 'sim-reversible-path', 580);
  const CASES = {
    comp: { Vi: 1, Pi: 1, Pf: 2, nrt: 1 },
    exp: { Vi: 1, Pi: 2, Pf: 1, nrt: 2 },
  };
  let cy;
  const reset = () => cy && cy.reset();
  const K = F.choice(d.controls, { label: '\\text{process}', options: [{ value: 'comp', label: 'compression' }, { value: 'exp', label: 'expansion' }], value: 'comp', aria: 'compress or expand the gas', key: 'process', onInput: reset });
  const N = ctl(d.controls, { label: 'N', cls: '', key: 'steps', min: 1, max: 20, step: 1, value: 1, unit: '', dec: 0, fmt: (v) => `${v} step${v === 1 ? '' : 's'}`, detents: [1, 2, 5, 10, 20], snap: true, aria: 'the number of steps', onInput: reset });
  const stepT = () => Math.min(1.5, Math.max(0.25, 4.5 / N.v));
  cy = F.cycle(() => N.v * stepT(), 1.4);
  const hits = [];
  F.hover(d.stage, () => hits);
  const steps = (c, n) => {
    const out = []; let V = c.Vi;
    for (let k = 1; k <= n; k++) { const P = c.Pi + k * (c.Pf - c.Pi) / n, V2 = c.nrt / P; out.push({ P, Va: V, Vb: V2 }); V = V2; }
    return out;
  };
  function draw() {
    const { ctx } = begin(d.c);
    const c = CASES[K.value], n = N.v, st = steps(c, n), D = stepT(), t = cy.now();
    const cp = C('pressure'), cv = C('volume'), cw = C('work');
    const Vf = c.nrt / c.Pf, wrev = -c.nrt * Math.log(Vf / c.Vi) * 100;
    const wAll = st.reduce((s, x) => s - x.P * (x.Vb - x.Va), 0) * 100;
    /* where the clock stands: step index, and how far that step's piston has moved (a 30 % hold on the peg) */
    const ki = Math.min(n - 1, Math.floor(t / D)), u = Math.min(1, (t - ki * D) / D), done = t >= n * D - 1e-9;
    const mv = done ? 1 : F.ease ? F.ease.out(Math.max(0, (u - 0.3) / 0.7)) : Math.max(0, (u - 0.3) / 0.7);
    const cur = st[ki], Vnow = cur.Va + (cur.Vb - cur.Va) * mv;
    let wSoFar = 0;
    for (let k = 0; k < ki; k++) wSoFar -= st[k].P * (st[k].Vb - st[k].Va);
    wSoFar -= cur.P * (Vnow - cur.Va); wSoFar *= 100;
    const isComp = K.value === 'comp';
    topline(ctx, isComp
      ? `In ${n} step${n === 1 ? '' : 's'} the compression takes $\\kw = ${fmt(wAll, 1)}$ J; reversibly it would take ${fmt(wrev, 1)} J.`
      : `In ${n} step${n === 1 ? '' : 's'} the expansion gives $\\kw = ${fmt(wAll, 1)}$ J; reversibly it would give ${fmt(wrev, 1)} J.`);
    /* the cylinder, 150 units per litre on y = 530 */
    const cx = 230, half = 95, base = 530, s = 150, yV = (v) => base - v * s, yTop = yV(2.3);
    ctx.save(); ctx.fillStyle = alpha(cv, 0.16); ctx.fillRect(cx - half, yV(Vnow), 2 * half, base - yV(Vnow)); ctx.restore();
    line(ctx, cx - half, yTop, cx - half, base, PAL.ink, 3); line(ctx, cx + half, yTop, cx + half, base, PAL.ink, 3); line(ctx, cx - half, base, cx + half, base, PAL.ink, 3);
    const yp = yV(Vnow);
    ctx.save(); ctx.fillStyle = PAL.muted; ctx.fillRect(cx - half + 3, yp - 16, 2 * half - 6, 16); ctx.fillRect(cx - 8, yp - 64, 16, 48); ctx.restore();
    /* the peg, in the wall above the piston while it holds */
    const pegged = !done && u < 0.3;
    if (pegged) { ctx.save(); ctx.fillStyle = PAL.ink; ctx.fillRect(cx + half - 4, yp - 30, 34, 10); ctx.restore(); text(ctx, 'peg', cx + half + 36, yp - 21, PAL.muted, { size: 17 }); }
    arrow(ctx, cx - 50, yp - 100, cx - 50, yp - 22, cp, 4);
    text(ctx, `P_{ext} = ${fmt(cur.P, 2)} bar`, cx - 160, yp - 112, cp, { size: 20, weight: 600 });
    text(ctx, `${fmt(Vnow, 2)} L`, cx, base - 18, cv, { size: 20, weight: 600, align: 'center' });
    hits.length = 0;
    hits.push({ x: cx, y: yp - 8, r: 30, name: `the piston, ${fmt(Vnow, 2)} L, against ${fmt(cur.P, 2)} bar` });
    if (pegged) hits.push({ x: cx + half + 12, y: yp - 25, r: 18, name: 'the peg, about to be pulled' });
    /* the PV plane */
    const box = { l: 590, r: 1330, t: 110, b: 500 };
    const ax = axes(ctx, box, [0, 2.5], [0, 2.5], { nx: 5, ny: 5, xl: 'volume V (L)', yl: 'pressure P (bar)', xc: cv, yc: cp });
    const lo = Math.min(c.Vi, Vf), hi = Math.max(c.Vi, Vf);
    /* the reversible area, faint, under the isotherm */
    shade(ctx, ax, (v) => c.nrt / v, 0, lo, hi, cp, { alpha: 0.08 });
    /* the steps done so far and the one under way */
    ctx.save(); ctx.fillStyle = alpha(cw, 0.4);
    for (let k = 0; k <= ki; k++) {
      const x = st[k], vb = k < ki ? x.Vb : Vnow, a = Math.min(x.Va, vb), b = Math.max(x.Va, vb);
      ctx.fillRect(ax.X(a), ax.Y(x.P), ax.X(b) - ax.X(a), ax.Y(0) - ax.Y(x.P));
    }
    ctx.restore();
    plot(ctx, ax, (v) => c.nrt / v, cp, { w: 3, x: [0.35, 2.5] });
    /* the external pressure, as a staircase so far */
    for (let k = 0; k <= ki; k++) { const x = st[k], vb = k < ki ? x.Vb : Vnow; line(ctx, ax.X(x.Va), ax.Y(x.P), ax.X(vb), ax.Y(x.P), cp, 5); if (k < ki) line(ctx, ax.X(x.Vb), ax.Y(x.P), ax.X(x.Vb), ax.Y(st[k + 1].P), cp, 5); }
    dot(ctx, ax.X(c.Vi), ax.Y(c.Pi), cp, false, 10);
    dot(ctx, ax.X(Vf), ax.Y(c.Pf), cp, done, 10);
    text(ctx, '1', ax.X(c.Vi) + 14, ax.Y(c.Pi) - 14, PAL.ink, { size: 22, weight: 600 });
    text(ctx, '2', ax.X(Vf) + 14, ax.Y(c.Pf) - 14, PAL.ink, { size: 22, weight: 600 });
    text(ctx, 'isotherm', ax.X(2.25), ax.Y(c.nrt / 2.25) - 18, cp, { size: 20, align: 'center' });
    hits.push({ x: ax.X(c.Vi), y: ax.Y(c.Pi), r: 14, name: `state 1: ${fmt(c.Vi, 1)} L, ${fmt(c.Pi, 0)} bar` });
    hits.push({ x: ax.X(Vf), y: ax.Y(c.Pf), r: 14, name: `state 2: ${fmt(Vf, 1)} L, ${fmt(c.Pf, 0)} bar` });
    hits.push({ x: ax.X((lo + hi) / 2), y: ax.Y(c.nrt / ((lo + hi) / 2)) + 30, r: 26, name: `the area under the isotherm, |w_rev| = ${fmt(Math.abs(wrev), 1)} J` });
    const rv = `${fmt(c.nrt, 2)}\\ \\text{L bar}`;
    tex(d.readout, `\\kw = -\\textstyle\\sum \\kPext\\,\\Delta \\kV = ${fmt(wSoFar, 1)}\\ \\text{J} \\\\ \\kw_{\\text{rev}} = -\\knmol\\kR\\kT\\ln\\dfrac{\\kVb}{\\kVa} = -(${rv})\\ln\\dfrac{${fmt(Vf, 1)}\\ \\text{L}}{${fmt(c.Vi, 1)}\\ \\text{L}} = ${fmt(wrev, 1)}\\ \\text{J}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
