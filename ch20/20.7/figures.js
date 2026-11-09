/* Figures for section 20.7 Thermodynamics Provides Insight into the Conversion of Heat into Work. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['20.7'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, cycle, register, begin, line, dot, text, topline, axes, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- Figure 20.7.1 + 20.7.3: the Carnot cycle ----------
   The book's cycle: a monatomic ideal gas (gamma = 5/3), V_A = 1.2 L and V_B = 2.5 L, P_A = 52 bar, T_c/T_h = 0.70.
   n = 1.25 mol at T_h = 600 K, T_c = 420 K reproduces its corners (C at 4.27 L and 10.2 bar, D at 2.05 L and 21.3 bar).
   PV: V 0 to 8 L, P 0 to 60 bar; T_h at most 650 K (P_A = 56 bar) and T_c at least 300 K, so V_C reaches 8.0 L at
   the extreme ratio 300/650. TS: S - S_A 0 to 10 J/K (the isotherms span nR ln(V_B/V_A) = 7.63 J/K whatever the
   temperatures), T 0 to 700 K. Right: Figure 20.7.3's energy flows, arrow widths in proportion to |q_h|, |q_c|, |w|.
   Moving: the gas runs the four steps in turn (1.4 s each); as a heat pump it runs them backwards. */
(function () {
  const d = sim('sim-carnot-cycle', 600);
  const n = 1.25, R = 8.314, RL = 0.08314, VA = 1.2, VB = 2.5, STEP = 1.4;
  const cy = cycle(() => 4 * STEP, 1.2);
  const Th = ctl(d.controls, { label: '\\kTh', cls: 'temperature', min: 400, max: 650, step: 1, value: 600, unit: 'K', dec: 0, detents: [400, 600],
    onInput: () => { Tc.range({ min: 300, max: Th.v, step: 1 }); cy.reset(); } });
  const Tc = ctl(d.controls, { label: '\\kTc', cls: 'temperature', min: 300, max: 600, step: 1, value: 420, unit: 'K', dec: 0, detents: [300, 420],
    specials: [{ at: () => Th.v, label: 'as hot as the hot side: no work' }], onInput: () => cy.reset() });
  const mode = F.choice(d.controls, { label: '\\text{run as}', options: [{ value: 'engine', label: 'engine' }, { value: 'pump', label: 'heat pump' }], value: 'engine',
    aria: 'run the cycle as a heat engine or backwards as a heat pump', onInput: () => cy.reset() });
  const hits = [];
  F.hover(d.stage, () => hits);
  const L = Math.log(VB / VA), dS = n * R * L;
  /* the state at engine phase u in [0, 4]: volume (L), temperature (K), entropy above S_A (J/K) */
  function state(u, th, tc) {
    const r = Math.pow(th / tc, 1.5), VC = VB * r, VD = VA * r;
    const i = Math.min(3, Math.floor(u)), k = u - i;
    if (i === 0) return { V: VA * Math.pow(VB / VA, k), T: th, S: dS * k };
    if (i === 1) { const T = th + (tc - th) * k; return { V: VB * Math.pow(th / T, 1.5), T, S: dS }; }
    if (i === 2) return { V: VC * Math.pow(VD / VC, k), T: tc, S: dS * (1 - k) };
    const T = tc + (th - tc) * k; return { V: VD * Math.pow(tc / T, 1.5), T, S: 0 };
  }
  const NAMES = ['1 isothermal expansion at T_h', '2 adiabatic cooling', '3 isothermal compression at T_c', '4 adiabatic heating'];
  const NAMES_PUMP = ['isothermal compression at T_h', 'adiabatic compression to T_h', 'isothermal expansion at T_c', 'adiabatic expansion to T_c'];
  /* a thick flow arrow whose dashes run along it while heat or work is passing */
  function flow(ctx, x1, y1, x2, y2, color, w, live, t) {
    const a = Math.atan2(y2 - y1, x2 - x1), hl = Math.max(22, w * 0.9), ex = x2 - hl * Math.cos(a), ey = y2 - hl * Math.sin(a);
    line(ctx, x1, y1, ex, ey, alpha(color, live ? 0.45 : 0.3), w);
    if (live) {
      ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.setLineDash([14, 18]); ctx.lineDashOffset = -t * 60;
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(ex, ey); ctx.stroke(); ctx.restore();
    }
    const hw = w / 2 + 12;
    ctx.save(); ctx.fillStyle = alpha(color, live ? 1 : 0.5); ctx.beginPath(); ctx.moveTo(x2, y2);
    ctx.lineTo(ex - hw * Math.sin(a), ey + hw * Math.cos(a)); ctx.lineTo(ex + hw * Math.sin(a), ey - hw * Math.cos(a)); ctx.closePath(); ctx.fill(); ctx.restore();
  }
  function draw() {
    const { ctx, W } = begin(d.c);
    const th = Th.v, tc = Math.min(Tc.v, th), pump = mode.value === 'pump';
    const tau = Math.min(cy.now(), 4 * STEP), ph = tau / STEP;
    const u = pump ? (ph >= 4 ? 0 : (4 - ph) % 4) : ph % 4;
    const st = state(Math.min(u, 3.9999), th, tc);
    const qh = n * R * th * L, qc = -n * R * tc * L, w = -(qh + qc), eta = 1 - tc / th;
    const step = Math.min(3, Math.floor(ph)), wa = Math.abs(w);
    const engStep = pump ? 3 - step : step;
    if (eta < 1e-9) topline(ctx, `With $\\kTc = \\kTh$ the cycle closes up: it produces no work, however much heat is on hand.`);
    else if (!pump) topline(ctx, `Of $\\kqh = ${fmt(qh, 0)}$ J taken in at $\\kTh$, ${fmt(-w, 0)} J leaves as work and ${fmt(-qc, 0)} J goes to the cold side.`);
    else topline(ctx, `${fmt(wa, 0)} J of work moves ${fmt(-qc, 0)} J out of the cold side, so the warm side receives ${fmt(qh, 0)} J.`);
    hits.length = 0;
    /* ---- PV ---- */
    const pv = axes(ctx, { l: 110, r: 560, t: 110, b: 470 }, [0, 8], [0, 60], { nx: 4, ny: 6, xl: 'volume V (L)', yl: 'pressure P (bar)', xc: C('volume'), yc: C('pressure') });
    const pts = [];
    for (let k = 0; k <= 400; k++) { const s = state(Math.min(k / 100, 3.9999), th, tc); pts.push([pv.X(s.V), pv.Y(n * RL * s.T / s.V)]); }
    ctx.save(); ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath();
    ctx.fillStyle = alpha(C('work'), 0.25); ctx.fill(); ctx.lineWidth = 4; ctx.strokeStyle = PAL.ink; ctx.stroke(); ctx.restore();
    /* the two isotherms in the temperature colour */
    const iso = (a, b, color) => { ctx.save(); ctx.beginPath(); for (let k = a; k <= b; k++) { const [x, y] = pts[k]; k === a ? ctx.moveTo(x, y) : ctx.lineTo(x, y); } ctx.lineWidth = 5; ctx.strokeStyle = color; ctx.stroke(); ctx.restore(); };
    iso(0, 100, C('temperature')); iso(200, 300, C('temperature'));
    const corner = (s, name, dx, dy) => { const x = pv.X(s.V), y = pv.Y(n * RL * s.T / s.V); text(ctx, name, x + dx, y + dy, PAL.ink, { size: 22, weight: 600, align: 'center' }); hits.push({ x, y, r: 14, name: `${name}: ${fmt(s.V, 2)} L, ${fmt(n * RL * s.T / s.V, 1)} bar, ${fmt(s.T, 0)} K` }); };
    corner(state(0, th, tc), 'A', -16, -18); corner(state(1, th, tc), 'B', 18, -14); corner(state(2, th, tc), 'C', 14, -18); corner(state(3, th, tc), 'D', -18, 22);
    text(ctx, (pump ? NAMES_PUMP : NAMES)[engStep], pv.box.r - 4, pv.box.t + 6, PAL.muted, { size: 20, align: 'right' });
    const sx = pv.X(st.V), sy = pv.Y(n * RL * st.T / st.V);
    dot(ctx, sx, sy, PAL.ink, true, 11);
    hits.push({ x: sx, y: sy, r: 16, name: `the gas now: ${fmt(st.V, 2)} L, ${fmt(st.T, 0)} K` });
    /* ---- TS ---- */
    const ts = axes(ctx, { l: 690, r: 960, t: 110, b: 470 }, [0, 10], [0, 700], { nx: 2, ny: 7, xl: 'entropy S − S_A (J/K)', yl: 'temperature T (K)', xc: C('entropy'), yc: C('temperature') });
    const x0 = ts.X(0), x1 = ts.X(dS), yh = ts.Y(th), yc = ts.Y(tc), yb = ts.Y(0);
    ctx.save(); ctx.fillStyle = alpha(C('heat'), 0.16); ctx.fillRect(x0, yc, x1 - x0, yb - yc);
    ctx.fillStyle = alpha(C('work'), 0.25); ctx.fillRect(x0, yh, x1 - x0, yc - yh); ctx.restore();
    line(ctx, x0, yh, x1, yh, C('temperature'), 5); line(ctx, x1, yc, x0, yc, C('temperature'), 5);
    line(ctx, x1, yh, x1, yc, PAL.ink, 4); line(ctx, x0, yc, x0, yh, PAL.ink, 4);
    if (eta > 0.08) text(ctx, 'w', (x0 + x1) / 2, (yh + yc) / 2 + 8, C('work'), { size: 24, weight: 600, align: 'center' });
    text(ctx, '|q_c|', (x0 + x1) / 2, (yc + yb) / 2 + 8, C('heat'), { size: 22, weight: 600, align: 'center' });
    const tsx = ts.X(st.S), tsy = ts.Y(st.T);
    dot(ctx, tsx, tsy, PAL.ink, true, 11);
    hits.push({ x: (x0 + x1) / 2, y: (yh + yc) / 2, r: 30, name: `the work, (T_h − T_c)ΔS = ${fmt(wa, 0)} J` });
    hits.push({ x: (x0 + x1) / 2, y: (yc + yb) / 2, r: 40, name: `the heat at the cold side, T_cΔS = ${fmt(-qc, 0)} J` });
    /* ---- the energy flows (Figure 20.7.3) ---- */
    const cx = 1150, hotY = 150, coldY = 450, eY = 300, er = 46, rw = 220;
    const res = (y, label, tval) => {
      ctx.save(); ctx.fillStyle = alpha(C('temperature'), 0.12); ctx.strokeStyle = C('temperature'); ctx.lineWidth = 3;
      ctx.beginPath(); ctx.roundRect(cx - rw / 2, y - 34, rw, 68, 8); ctx.fill(); ctx.stroke(); ctx.restore();
      text(ctx, `${label}, ${fmt(tval, 0)} K`, cx, y + 8, C('temperature'), { size: 22, weight: 600, align: 'center' });
    };
    res(hotY, 'hot', th); res(coldY, 'cold', tc);
    const wid = (q) => 6 + 46 * Math.abs(q) / 5000;
    const live = (i) => cy.now() < 4 * STEP && engStep === i;
    const tt = performance.now() / 1000;
    const isoLive = (i) => live(i) && eta > 1e-9;
    if (!pump) {
      flow(ctx, cx, hotY + 34, cx, eY - er - 4, C('heat'), wid(qh), isoLive(0), tt);
      if (eta > 1e-9) flow(ctx, cx, eY + er + 4, cx, coldY - 34, C('heat'), wid(qc), isoLive(2), tt);
      if (-w > 1) flow(ctx, cx + er + 4, eY, 1375, eY, C('work'), wid(w), cy.now() < 4 * STEP, tt);
    } else {
      flow(ctx, cx, eY - er - 4, cx, hotY + 34, C('heat'), wid(qh), isoLive(0), tt);
      if (eta > 1e-9) flow(ctx, cx, coldY - 34, cx, eY + er + 4, C('heat'), wid(qc), isoLive(2), tt);
      if (wa > 1) flow(ctx, 1375, eY, cx + er + 4, eY, C('work'), wid(w), cy.now() < 4 * STEP, tt);
    }
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(cx, eY, er, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'gas', cx, eY + 8, PAL.ink, { size: 20, align: 'center' });
    text(ctx, `|q_h| = ${fmt(qh, 0)} J`, cx - 40, (hotY + eY) / 2 + 8, C('heat'), { size: 20, weight: 600, align: 'right' });
    if (eta > 1e-9) text(ctx, `|q_c| = ${fmt(-qc, 0)} J`, cx - 40, (coldY + eY) / 2 + 8, C('heat'), { size: 20, weight: 600, align: 'right' });
    if (Math.abs(w) > 1) text(ctx, `|w| = ${fmt(Math.abs(w), 0)} J`, 1290, eY - wid(w) / 2 - 18, C('work'), { size: 20, weight: 600, align: 'center' });
    hits.push({ x: cx, y: eY, r: er, name: 'the gas, the working substance' });
    if (eta < 1e-9) tex(d.readout, `\\eta = 1 - \\dfrac{\\kTc}{\\kTh} = 1 - \\dfrac{${fmt(tc, 0)}\\ \\text{K}}{${fmt(th, 0)}\\ \\text{K}} = 0`);
    else if (!pump) tex(d.readout, `\\eta = 1 - \\dfrac{\\kTc}{\\kTh} = 1 - \\dfrac{${fmt(tc, 0)}\\ \\text{K}}{${fmt(th, 0)}\\ \\text{K}} = ${fmt(eta, 2)} \\\\ \\kwcycle = -(\\kqh + \\kqc) = -(${fmt(qh, 0)}\\ \\text{J} - ${fmt(-qc, 0)}\\ \\text{J}) = ${fmt(w, 0)}\\ \\text{J}`);
    else tex(d.readout, `-\\kqh = \\kwcycle + \\kqc = ${fmt(wa, 0)}\\ \\text{J} + ${fmt(-qc, 0)}\\ \\text{J} = ${fmt(qh, 0)}\\ \\text{J} \\\\ \\dfrac{-\\kqh}{\\kwcycle} = \\dfrac{\\kTh}{\\kTh - \\kTc} = ${fmt(1 / eta, 2)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
