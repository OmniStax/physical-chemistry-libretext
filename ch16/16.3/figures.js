/* Figures for section 16.3 A Cubic Equation of State. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['16.3'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, shade, legend, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- CO2 by van der Waals, Figure 16.3.2's constants in L, bar and mol ----------
   a = 0.366 m⁶ Pa mol⁻² = 3.66 L² bar mol⁻², b = 42.9 × 10⁻⁶ m³ mol⁻¹ = 0.0429 L/mol;
   T_c = 8a/27Rb = 304.0 K, P_c = a/27b² = 73.7 bar, V̄_c = 3b = 0.129 L/mol. */
const R = 0.08314, A = 3.66, B = 0.0429;
const TC = 8 * A / (27 * R * B), PC = A / (27 * B * B), VC = 3 * B, K0 = 273.15;
const P = (v, T) => R * T / (v - B) - A / (v * v);
const intP = (v1, v2, T) => R * T * Math.log((v2 - B) / (v1 - B)) + A / v2 - A / v1;   /* ∫P dV̄, L bar/mol */
/* the roots of c3 x³ + c2 x² + c1 x + c0, as {re, im}, real ones first and ascending */
function cubic(c3, c2, c1, c0) {
  const a = c2 / c3, b = c1 / c3, c = c0 / c3;
  const p = b - a * a / 3, q = 2 * a * a * a / 27 - a * b / 3 + c, sh = -a / 3;
  const disc = q * q / 4 + p * p * p / 27;
  if (disc <= 0) {
    const r = Math.sqrt(-p / 3), phi = Math.acos(Math.max(-1, Math.min(1, -q / (2 * r * r * r || 1))));
    if (r === 0) return [0, 0, 0].map(() => ({ re: sh, im: 0 }));
    return [0, 1, 2].map((k) => ({ re: 2 * r * Math.cos((phi - 2 * Math.PI * k) / 3) + sh, im: 0 })).sort((x, y) => x.re - y.re);
  }
  const s = Math.sqrt(disc), u = Math.cbrt(-q / 2 + s), w = Math.cbrt(-q / 2 - s);
  return [{ re: u + w + sh, im: 0 }, { re: -(u + w) / 2 + sh, im: Math.sqrt(3) / 2 * (u - w) }, { re: -(u + w) / 2 + sh, im: -Math.sqrt(3) / 2 * (u - w) }];
}
const roots = (p, T) => cubic(p, -(p * B + R * T), A, -A * B);
/* the loop's dip (A′) and peak (B): dP/dV̄ = 0, i.e. RT V̄³ = 2a (V̄ − b)², one root each side of 3b */
function bisect(f, lo, hi) { let flo = f(lo); for (let i = 0; i < 80; i++) { const m = (lo + hi) / 2, fm = f(m); if ((fm > 0) === (flo > 0)) { lo = m; flo = fm; } else hi = m; } return (lo + hi) / 2; }
function spinodal(T) {
  if (T >= TC) return null;
  const g = (v) => R * T * v ** 3 - 2 * A * (v - B) ** 2;
  const vd = bisect(g, B * 1.0001, VC), vp = bisect(g, VC, 50);
  return { vd, pd: P(vd, T), vp, pp: P(vp, T) };
}
/* Maxwell's construction: the pressure at which the two areas between the isotherm and the line are equal */
function maxwell(T) {
  const s = spinodal(T); if (!s || TC - T < 0.05) return null;
  const ends = (ps) => { const r = roots(ps, T).filter((z) => Math.abs(z.im) < 1e-9).map((z) => z.re); return [r[0], r[r.length - 1], r[1]]; };
  const f = (ps) => { const [vl, vg] = ends(ps); return intP(vl, vg, T) - ps * (vg - vl); };
  const ps = bisect(f, Math.max(1e-4, s.pd) + 1e-7, s.pp - 1e-7);
  const [vl, vg, vm] = ends(ps);
  return { ps, vl, vg, vm, s };
}
/* the coexistence curve through the ends of the tie lines, 200 K up to T_c */
const DOME = (() => {
  const L = [], G = [];
  for (let T = 200; T < TC - 0.05; T += T < TC - 4 ? 2 : 0.2) { const m = maxwell(T); if (m) { L.push([m.vl, m.ps]); G.push([m.vg, m.ps]); } }
  return [...L, [VC, PC], ...G.reverse()];
})();
function poly(ctx, ax, pts, color, w, dash) {
  ctx.save(); ctx.beginPath(); ctx.rect(ax.box.l, ax.box.t, ax.box.r - ax.box.l, ax.box.b - ax.box.t); ctx.clip();
  ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash); ctx.beginPath();
  pts.forEach(([x, y], i) => (i ? ctx.lineTo(ax.X(x), ax.Y(y)) : ctx.moveTo(ax.X(x), ax.Y(y)))); ctx.stroke(); ctx.restore();
}
const f3 = (v) => fmt(v, 3), f4 = (v) => fmt(v, 4);

/* ---------- Figure 16.3.2: CO2 isotherms, the tie line and the critical point ----------
   x: molar volume 0.04 to 0.40 L/mol (the book's 0.7 to 3.5 × 10⁻⁴ m³ inside it); y: 20 to 120 bar, so the 10 °C loop
   (46 to 59 bar) reads; hotter isotherms leave through the top at small volumes. The book's 10, 31, 40 and 70 °C
   isotherms faint; the reader's solid, with the ideal isotherm at the same T dashed, the tie line at P_sat and the two
   equal areas shaded, the coexistence curve dashed. T_c = 30.9 °C is a special on the slider. Still. */
(function () {
  const d = sim('sim-vdw-isotherms', 600);
  const Tm = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: 0, max: 80, step: 1, value: 10, unit: '°C', dec: 0, detents: [10, 40, 70], specials: [{ at: +(TC - K0).toFixed(2), label: 'critical temperature' }] });
  const hov = []; F.hover(d.stage, () => hov);
  function draw() {
    const { ctx, W } = begin(d.c);
    const tc = Tm.v, T = tc + K0, m = maxwell(T), crit = Math.abs(T - TC) < 0.05;
    const box = { l: 130, r: W - 60, t: 115, b: 500 };
    const ax = axes(ctx, box, [0.04, 0.4], [20, 120], { nx: 9, ny: 5, xl: 'molar volume V̄ (L/mol)', yl: 'pressure P (bar)', xc: C('molar-volume'), yc: C('pressure') });
    const faint = alpha(PAL.ink, 0.25);
    [[10, 0], [31, 0.112], [40, 0.3], [70, 0.22]].forEach(([t, at]) => { plot(ctx, ax, (v) => P(v, t + K0), faint, { w: 3, x: [0.045, 0.4] }); if (at) text(ctx, `${t} °C`, ax.X(at), ax.Y(P(at, t + K0)) - 16, alpha(C('temperature'), 0.75), { size: 17, align: 'center' }); });
    poly(ctx, ax, DOME, alpha(PAL.ink, 0.5), 2, [4, 8]);
    plot(ctx, ax, (v) => R * T / v, alpha(PAL.ink, 0.55), { w: 3, dash: [10, 10], x: [0.045, 0.4] });
    hov.length = 0;
    let head;
    if (m) {
      shade(ctx, ax, (v) => m.ps, (v) => P(v, T), m.vl, m.vm, C('energy'), { alpha: 0.3 });
      shade(ctx, ax, (v) => P(v, T), (v) => m.ps, m.vm, m.vg, C('energy'), { alpha: 0.3 });
      const area = intP(m.vm, m.vg, T) - m.ps * (m.vg - m.vm);   /* L bar/mol; × 100 = J/mol */
      line(ctx, ax.X(m.vl), ax.Y(m.ps), ax.X(m.vg), ax.Y(m.ps), C('pressure'), 3, [10, 10]);
      plot(ctx, ax, (v) => P(v, T), C('pressure'), { w: 5, x: [0.045, 0.4] });
      dot(ctx, ax.X(m.vl), ax.Y(m.ps), C('pressure'), true, 9); dot(ctx, ax.X(m.vg), ax.Y(m.ps), C('pressure'), true, 9);
      text(ctx, 'A', ax.X(m.vl) - 14, ax.Y(m.ps) + 22, PAL.ink, { size: 22, weight: 600, align: 'right' });
      text(ctx, 'B', ax.X(m.vg) + 12, ax.Y(m.ps) + 22, PAL.ink, { size: 22, weight: 600 });
      hov.push({ x: ax.X((m.vl + m.vm) / 2), y: ax.Y(m.ps) + 12, r: 22, name: `area below the tie line: ${fmt(100 * area, 0)} J/mol` });
      hov.push({ x: ax.X((m.vm + m.vg) / 2), y: ax.Y(m.ps) - 12, r: 22, name: `area above the tie line: ${fmt(100 * area, 0)} J/mol` });
      hov.push({ x: ax.X(m.vl), y: ax.Y(m.ps), r: 14, name: `A: all liquid, ${f3(m.vl)} L/mol` });
      hov.push({ x: ax.X(m.vg), y: ax.Y(m.ps), r: 14, name: `B: all vapor, ${f3(m.vg)} L/mol` });
      head = `At ${tc} °C the two shaded areas, ${fmt(100 * area, 0)} J/mol each, put the tie line at $\\kPsat = ${fmt(m.ps, 1)}$ bar, from liquid at A to vapor at B.`;
      tex(d.readout, `\\kP = \\dfrac{\\kR\\kT}{\\kVbar-\\kbvdw}-\\dfrac{\\ka}{\\kVbar^2} \\\\ \\kPsat = \\dfrac{\\kR(${fmt(T, 2)}\\ \\text{K})}{${f3(m.vg)}\\ \\text{L/mol}-\\kbvdw}-\\dfrac{\\ka}{(${f3(m.vg)}\\ \\text{L/mol})^2} = ${fmt(m.ps, 1)}\\ \\text{bar}`);
    } else {
      plot(ctx, ax, (v) => P(v, T), C('pressure'), { w: 5, x: [0.045, 0.4] });
      if (crit) {
        line(ctx, box.l, ax.Y(PC), ax.X(VC), ax.Y(PC), alpha(PAL.ink, 0.5), 2, [4, 8]);
        line(ctx, ax.X(VC), ax.Y(PC), ax.X(VC), box.b, alpha(PAL.ink, 0.5), 2, [4, 8]);
        dot(ctx, ax.X(VC), ax.Y(PC), C('pressure'), true, 10);
        text(ctx, 'critical point', ax.X(VC) + 16, ax.Y(PC) - 22, PAL.ink, { size: 20, weight: 600, bg: PAL.panel });
        hov.push({ x: ax.X(VC), y: ax.Y(PC), r: 16, name: `the critical point: ${fmt(PC, 1)} bar, ${f3(VC)} L/mol` });
        head = `At ${fmt(TC - K0, 1)} °C the loop has closed to the critical point, $\\kPc = ${fmt(PC, 1)}$ bar at $\\kVbar = 3\\kbvdw = ${f3(VC)}$ L/mol.`;
        tex(d.readout, `\\kP = \\dfrac{\\kR\\kT}{\\kVbar-\\kbvdw}-\\dfrac{\\ka}{\\kVbar^2} \\\\ \\kPc = \\dfrac{\\ka}{27\\kbvdw^2} = ${fmt(PC, 1)}\\ \\text{bar}`);
      } else {
        head = `At ${tc} °C, above the critical temperature, the isotherm has no loop and no tie line.`;
        tex(d.readout, `\\kP = \\dfrac{\\kR\\kT}{\\kVbar-\\kbvdw}-\\dfrac{\\ka}{\\kVbar^2} \\\\ \\kT > \\kTc = \\dfrac{8\\ka}{27\\kR\\kbvdw} = ${fmt(TC, 1)}\\ \\text{K}`);
      }
    }
    topline(ctx, head);
    legend(ctx, ax, [{ s: `van der Waals, ${tc} °C`, color: C('pressure'), w: 5 }, { s: 'ideal gas, same T', color: alpha(PAL.ink, 0.55), w: 3, dash: [10, 10] }, { s: 'coexistence curve', color: alpha(PAL.ink, 0.5), w: 2, dash: [4, 8] }], { corner: 'tr' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- Figure 16.3.3: the roots of the cubic ----------
   The van der Waals isotherm of CO2 cut by an isobar. x: molar volume 0.04 to 0.40 L/mol, y: 0 to 120 bar; a root
   beyond 0.40 L/mol (a low-pressure vapor) is pinned at the right edge. Inset: the three roots of
   P V̄³ − (Pb + RT) V̄² + a V̄ − ab = 0 in the complex plane, Re 0 to 0.6 and Im −0.25 to 0.25 L/mol, about one scale.
   Specials on P: the loop's dip A′ and peak B (two roots meet) and, at T_c, the critical pressure (three meet). Still. */
(function () {
  const d = sim('sim-cubic-roots', 620);
  const Tm = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: 0, max: 60, step: 1, value: 10, unit: '°C', dec: 0, specials: [{ at: +(TC - K0).toFixed(2), label: 'critical temperature' }],
    onInput: () => Pm.mark(spec()) });
  const near = (x) => (x !== null && x >= 10 && x <= 110 ? +x.toFixed(2) : null);
  const spec = () => [{ at: () => { const s = spinodal(Tm.v + K0); return near(s ? s.pd : null); }, label: 'A′, the dip' }, { at: () => { const s = spinodal(Tm.v + K0); return near(s ? s.pp : null); }, label: 'B, the peak' },
    { at: () => (Math.abs(Tm.v + K0 - TC) < 0.05 ? +PC.toFixed(2) : null), label: 'critical pressure' }];
  const Pm = ctl(d.controls, { label: '\\kP', cls: 'pressure', min: 10, max: 110, step: 0.1, value: 50, unit: 'bar', dec: 1, specials: spec() });
  const hov = []; F.hover(d.stage, () => hov);
  function draw() {
    const { ctx, W } = begin(d.c);
    const T = Tm.v + K0, p = Pm.v, s = spinodal(T), rs = roots(p, T), real = rs.filter((z) => Math.abs(z.im) < 1e-7).map((z) => z.re).sort((x, y) => x - y);
    const box = { l: 130, r: 880, t: 110, b: 520 };
    const ax = axes(ctx, box, [0.04, 0.4], [0, 120], { nx: 9, ny: 6, xl: 'molar volume V̄ (L/mol)', yl: 'pressure P (bar)', xc: C('molar-volume'), yc: C('pressure') });
    poly(ctx, ax, DOME, alpha(PAL.ink, 0.45), 2, [4, 8]);
    plot(ctx, ax, (v) => P(v, T), C('temperature'), { w: 5, x: [0.0435, 0.4] });
    line(ctx, box.l, ax.Y(p), box.r, ax.Y(p), C('pressure'), 3, [10, 10]);
    text(ctx, `isobar, ${fmt(p, 1)} bar`, box.r - 6, ax.Y(p) - 16, C('pressure'), { size: 17, align: 'right', bg: PAL.panel });
    line(ctx, ax.X(B), box.t, ax.X(B), box.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    text(ctx, 'V̄ = b', ax.X(B) + 6, box.b - 16, alpha(PAL.ink, 0.7), { size: 17 });
    hov.length = 0;
    if (s) {
      [[s.vd, s.pd, 'A′'], [s.vp, s.pp, 'B']].forEach(([v, pp, n]) => { if (pp > 0 && pp < 120) { dot(ctx, ax.X(v), ax.Y(pp), C('temperature'), false, 7); text(ctx, n, ax.X(v), ax.Y(pp) + (n === 'B' ? -24 : 26), PAL.ink, { size: 20, weight: 600, align: 'center' }); hov.push({ x: ax.X(v), y: ax.Y(pp), r: 14, name: `${n === 'B' ? 'the loop’s peak B' : 'the loop’s dip A′'}: ${fmt(pp, 1)} bar` }); } });
    }
    const names = real.length === 3 ? ['liquid', 'meaningless', 'vapor'] : [real[0] < VC ? 'liquid' : T > TC ? 'fluid' : 'vapor'];
    real.forEach((v, i) => {
      const nm = names[i], mid = nm === 'meaningless';
      const q = F.pinned(ctx, box, ax.X, ax.Y, v, p, mid ? alpha(PAL.ink, 0.6) : C('molar-volume'));
      if (!q.out) dot(ctx, q.x, q.y, mid ? alpha(PAL.ink, 0.6) : C('molar-volume'), !mid, 10);
      const lx = q.out ? q.x - 8 : nm === 'liquid' && real.length === 3 ? q.x - 16 : q.x, ly = mid ? q.y - 30 : nm === 'liquid' && real.length === 3 ? q.y - 24 : q.y + 30;
      text(ctx, nm, lx, ly, mid ? alpha(PAL.ink, 0.7) : C('molar-volume'), { size: 17, align: q.out || (nm === 'liquid' && real.length === 3) ? 'right' : 'center', bg: PAL.panel });
      hov.push({ x: q.x, y: q.y, r: 14, name: `${nm} root, V̄ = ${f4(v)} L/mol` });
    });
    /* the inset: the three roots in the complex plane */
    const ib = { l: 990, r: W - 40, t: 200, b: 470 };
    const ai = axes(ctx, ib, [0, 0.6], [-0.25, 0.25], { nx: 3, ny: 2, xl: 'Re V̄ (L/mol)', yl: 'Im V̄', xc: C('molar-volume'), yc: C('molar-volume') });
    line(ctx, ib.l, ai.Y(0), ib.r, ai.Y(0), alpha(PAL.ink, 0.5), 2);
    text(ctx, 'roots of the cubic', (ib.l + ib.r) / 2, ib.t - 56, PAL.ink, { size: 17, align: 'center' });
    rs.forEach((z) => { const q = F.pinned(ctx, ib, ai.X, ai.Y, z.re, z.im, C('molar-volume')); if (!q.out) dot(ctx, q.x, q.y, C('molar-volume'), Math.abs(z.im) < 1e-7, 8); });
    const cpx = rs.filter((z) => Math.abs(z.im) >= 1e-7);
    if (cpx.length) hov.push({ x: ai.X(cpx[0].re), y: ai.Y(cpx[0].im), r: 14, name: `a complex pair, ${f4(cpx[0].re)} ± ${f4(Math.abs(cpx[0].im))}i L/mol` });
    const crit = Math.abs(T - TC) < 0.05 && Math.abs(p - PC) < 0.06;
    topline(ctx, crit ? `At the critical point the three roots meet at $\\kVbar = 3\\kbvdw = ${f3(VC)}$ L/mol.`
      : real.length === 3 ? `At ${Tm.v} °C and ${fmt(p, 1)} bar the isobar cuts the isotherm three times: liquid, a meaningless middle root, and vapor.`
      : `At ${Tm.v} °C and ${fmt(p, 1)} bar the isobar cuts the isotherm once; the other two roots are a complex pair.`);
    const rl = real.length === 3 ? `\\kVbar = ${f4(real[0])},\\ ${f4(real[1])},\\ ${f4(real[2])}\\ \\text{L/mol}` : `\\kVbar = ${f4(real[0])},\\ ${f4(cpx[0] ? cpx[0].re : real[0])} \\pm ${f4(cpx[0] ? Math.abs(cpx[0].im) : 0)}i\\ \\text{L/mol}`;
    tex(d.readout, `\\kP\\kVbar^3 - (\\kP\\kbvdw + \\kR\\kT)\\kVbar^2 + \\ka\\kVbar - \\ka\\kbvdw = 0 \\\\ ${fmt(p, 1)}\\kVbar^3 - ${fmt(p * B + R * T, 3)}\\kVbar^2 + 3.66\\kVbar - 0.157 = 0 \\\\ ${rl}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
