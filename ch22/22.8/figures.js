/* Figures for section 22.8 Fugacity Measures Nonideality of a Gas. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['22.8'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, topline, axes, plot, legend, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- van der Waals gases: Table 16.2.1 (N2, CH4, C2H6) and Figure 16.3.2 (CO2) ----------
   a in L² bar mol⁻², b in L mol⁻¹, R in L bar K⁻¹ mol⁻¹. */
const R = 0.08314;
const GASES = [
  { key: 'N2', name: 'N₂', a: 1.43, b: 0.03913 },
  { key: 'CH4', name: 'CH₄', a: 2.283, b: 0.04278 },
  { key: 'C2H6', name: 'C₂H₆', a: 5.562, b: 0.0638 },
  { key: 'CO2', name: 'CO₂', a: 3.66, b: 0.0429 },
];
const byKey = (k) => GASES.find((g) => g.key === k);
/* the real roots of P V̄³ − (Pb + RT) V̄² + a V̄ − ab = 0, ascending */
function roots(g, p, T) {
  const c2 = -(p * g.b + R * T) / p, c1 = g.a / p, c0 = -g.a * g.b / p;
  const q0 = c1 - c2 * c2 / 3, q = 2 * c2 * c2 * c2 / 27 - c2 * c1 / 3 + c0, sh = -c2 / 3;
  const disc = q * q / 4 + q0 * q0 * q0 / 27;
  if (disc <= 0) {
    const r = Math.sqrt(-q0 / 3), ph = Math.acos(Math.max(-1, Math.min(1, -q / (2 * r * r * r || 1))));
    return [0, 1, 2].map((k) => 2 * r * Math.cos((ph - 2 * Math.PI * k) / 3) + sh).sort((x, y) => x - y);
  }
  const s = Math.sqrt(disc);
  return [Math.cbrt(-q / 2 + s) + Math.cbrt(-q / 2 - s) + sh];
}
/* ln φ of the root V̄: the closed form of ∫₀^P (Z − 1)/P′ dP′ along a van der Waals isotherm */
const lnPhiAt = (g, p, T, v) => { const Z = p * v / (R * T); return Z - 1 - Math.log(Z - g.b * p / (R * T)) - g.a / (R * T * v); };
const gasRoot = (g, p, T) => { const r = roots(g, p, T); return r[r.length - 1]; };
function bisect(f, lo, hi) { let flo = f(lo); for (let i = 0; i < 80; i++) { const m = (lo + hi) / 2, fm = f(m); if ((fm > 0) === (flo > 0)) { lo = m; flo = fm; } else hi = m; } return (lo + hi) / 2; }
/* Below T_c = 8a/27Rb the gas condenses at the pressure where liquid and vapour have one fugacity (Maxwell's
   construction): between the loop's dip and peak, the pressure at which ln φ of the two outer roots agree. */
function condensation(g, T) {
  const Tc = 8 * g.a / (27 * R * g.b);
  if (T >= Tc - 0.05) return null;
  const P = (v) => R * T / (v - g.b) - g.a / (v * v);
  const k = (v) => R * T * v ** 3 - 2 * g.a * (v - g.b) ** 2, vc = 3 * g.b;
  const pd = P(bisect(k, g.b * 1.0001, vc)), pp = P(bisect(k, vc, 200));
  const f = (p) => { const r = roots(g, p, T); return lnPhiAt(g, p, T, r[r.length - 1]) - lnPhiAt(g, p, T, r[0]); };
  return bisect(f, Math.max(1e-6, pd) + 1e-7, pp - 1e-7);
}
const f3 = (v) => fmt(v, 3);
const f1 = (v) => fmt(v, v < 10 ? 2 : 1);

/* ---------- Sim: the fugacity coefficient against pressure ----------
   x: P 0 to 500 bar; y: φ 0.4 to 1.2, fixed (N₂ at 1000 K reaches 1.16 at 500 bar; the dips of C₂H₆ and CO₂
   near room temperature leave through the floor). The ideal gas φ = 1 dashed. Below T_c the gas line stops at
   the condensation pressure, a filled dot. The P slider's point reads f = φP. Still: no time in it.
   Opens on N₂ at 298.15 K and 100 bar: φ = 0.940, f = 94.0 bar. */
(function () {
  const d = sim('sim-fugacity-coefficient', 600);
  const G = F.choice(d.controls, { label: '\\text{gas}', key: 'gas', options: GASES.map((g) => ({ value: g.key, label: g.name })), value: 'N2', aria: 'the gas' });
  const T = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: 150, max: 1000, step: 0.05, value: 298.15, unit: 'K', dec: 0,
    detents: [{ v: 298.15, label: '25 °C' }], aria: 'the temperature of the gas' });
  const Pc = ctl(d.controls, { label: '\\kP', cls: 'pressure', min: 1, max: 500, step: 1, value: 100, unit: 'bar', dec: 0, aria: 'the pressure of the gas' });
  const hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx, W } = begin(d.c);
    const g = byKey(G.value), t = T.v, ps = condensation(g, t);
    const end = ps === null ? 500 : Math.min(500, ps);
    const phi = (p) => (p > end + 1e-9 ? NaN : Math.exp(lnPhiAt(g, p, t, gasRoot(g, p, t))));
    const box = { l: 130, r: W - 60, t: 115, b: 500 };
    const ax = axes(ctx, box, [0, 500], [0.4, 1.2], { nx: 5, ny: 8, xl: 'pressure P (bar)', yl: 'fugacity coefficient φ', xc: C('pressure') });
    line(ctx, ax.X(0), ax.Y(1), ax.X(500), ax.Y(1), alpha(PAL.ink, 0.45), 3, [10, 10]);
    plot(ctx, ax, phi, PAL.ink, { w: 5, x: [0.01, end] });
    hits.length = 0;
    const gone = ps !== null && Pc.v > ps;
    const p = gone ? ps : Pc.v, ph = phi(p), fug = ph * p;
    if (ps !== null && ps <= 500) {
      dot(ctx, ax.X(ps), ax.Y(phi(ps)), PAL.ink, true, 10);
      hits.push({ x: ax.X(ps), y: ax.Y(phi(ps)), r: 16, name: `${g.name} condenses at ${f1(ps)} bar, where φ = ${f3(phi(ps))}` });
    }
    if (!gone) {
      line(ctx, ax.X(p), ax.Y(ph), ax.X(p), box.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
      dot(ctx, ax.X(p), ax.Y(ph), C('pressure'), true, 9);
      hits.push({ x: ax.X(p), y: ax.Y(ph), r: 16, name: `${fmt(p, 0)} bar: φ = ${f3(ph)}, f = ${f1(fug)} bar` });
    }
    legend(ctx, ax, [{ s: `${g.name} as a van der Waals gas`, color: PAL.ink, w: 5, f: phi }, { s: 'ideal gas', color: alpha(PAL.ink, 0.45), w: 3, dash: [10, 10] }]);
    const tk = fmt(t, Math.abs(t - 298.15) < 0.01 ? 2 : 0);
    topline(ctx, gone
      ? `${g.name} at ${tk} K condenses at ${f1(ps)} bar, where $\\phi = ${f3(ph)}$; above that pressure no gas is left.`
      : `${g.name} at ${tk} K and ${fmt(p, 0)} bar: $\\phi = ${f3(ph)}$, so the fugacity is ${f1(fug)} bar.`);
    tex(d.readout, `\\phi = \\dfrac{\\kf}{\\kP} = \\dfrac{${f1(fug)}\\ \\text{bar}}{${gone ? f1(p) : fmt(p, 0)}\\ \\text{bar}} = ${f3(ph)} \\\\ \\ln\\phi = \\int_0^{\\kP} \\dfrac{Z-1}{P'}\\,dP' = ${fmt(Math.log(ph), 4)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
