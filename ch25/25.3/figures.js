/* Figures for section 25.3 Colligative Properties Depend only on Number Density. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['25.3'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- water, the book's numbers (Chapter 23) ---------- */
const R = 8.314, M1 = 0.018015;            /* J/(mol K); kg/mol */
const TM = 273.15, HF = 6006;              /* melting point (K), molar enthalpy of fusion (J/mol) */
const TB = 373.15, HV = 40650;             /* boiling point (K), molar enthalpy of vaporization (J/mol) */
const KF = R * TM * TM * M1 / HF;          /* 1.86 K kg/mol */
const KB = R * TB * TB * M1 / HV;          /* 0.513 K kg/mol */

/* ---------- Sim: the chemical potentials near the two transitions ----------
   Each panel draws the solvent's chemical potential less the pure liquid's, mu - mu*, so the pure liquid
   is the flat dashed line at 0 and only the book's Delta H / T slopes matter: the solid's line is
   Delta_fus H (T / Tm* - 1), the vapor's Delta_vap H (1 - T / Tb*). The solution's line sits R T* x2 below
   the pure liquid's, with x2 = M1 m (the derivation's ln a1 = ln x1 ~ -x2 and x2 ~ M1 m), so its crossings
   fall exactly at Tm* - Kf m and Tb* + Kb m, the numbers the readout prints.
   Both panels span 8 K so the two shifts compare by eye; y is fixed at -150 to 100 J/mol from m = 2
   (the solution line then sits at -82 J/mol near the melting point and -112 J/mol near boiling). */
(function () {
  const d = sim('sim-colligative-mu', 600);
  const m = ctl(d.controls, { label: '\\km', cls: '', min: 0, max: 2, step: 0.01, value: 1, unit: 'mol/kg', dec: 2,
    detents: [0.5, 1, 1.5], snap: true });
  const hits = [];
  F.hover(d.stage, () => hits);
  function panel(ctx, box, xr, T0, f, other, yl, sign, K, mv) {
    const ax = axes(ctx, box, xr, [-150, 100], { nx: 8, ny: 5, xl: 'temperature T (K)', yl, xc: C('temperature'), yc: C('energy') });
    const drop = -R * T0 * M1 * mv, T1 = T0 + sign * K * mv;
    plot(ctx, ax, () => 0, alpha(PAL.ink, 0.55), { w: 3, dash: [10, 10] });
    plot(ctx, ax, f, PAL.ink, { w: 4 });
    plot(ctx, ax, () => drop, C('energy'), { w: 5 });
    /* the pure solvent's transition, and the solution's */
    line(ctx, ax.X(T0), ax.Y(0), ax.X(T0), box.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
    dot(ctx, ax.X(T0), ax.Y(0), C('temperature'), false, 10);
    if (mv > 0) {
      line(ctx, ax.X(T1), ax.Y(drop), ax.X(T1), box.b, alpha(C('temperature'), 0.8), 3, [4, 8]);
      dot(ctx, ax.X(T1), ax.Y(drop), C('temperature'), true, 10);
      if (Math.abs(ax.X(T1) - ax.X(T0)) > 10) F.hbracket(ctx, ax.X(Math.min(T0, T1)), ax.X(Math.max(T0, T1)), box.b - 26, C('temperature'), `${fmt(K * mv, 2)} K`, { side: 'above' });
    }
    text(ctx, other, (box.l + box.r) / 2, box.t - 16, PAL.ink, { size: 22, align: 'center' });
    return { ax, drop, T1 };
  }
  function draw() {
    const { ctx, W } = begin(d.c);
    const mv = m.v, dTf = KF * mv, dTb = KB * mv;
    topline(ctx, mv < 0.005 ? 'Pure water melts at 273.15 K and boils at 373.15 K.'
      : `At $\\km = ${fmt(mv, 2)}$ mol/kg water melts ${fmt(dTf, 2)} K lower and boils ${fmt(dTb, 2)} K higher.`);
    F.legend(ctx, { l: 130, r: W - 60, t: 84, b: 124 }, [
      { s: 'pure liquid', color: alpha(PAL.ink, 0.55), w: 3, dash: [10, 10] },
      { s: 'solution', color: C('energy'), w: 5 },
      { s: 'solid or vapor', color: PAL.ink, w: 4 },
    ], { corner: 'top', row: true, panel: false });
    const L = panel(ctx, { l: 150, r: 660, t: 180, b: 500 }, [267, 275], TM, (T) => HF * (T / TM - 1), 'melting: solid and liquid', 'μ − μ* (J/mol)', -1, KF, mv);
    const B = panel(ctx, { l: 800, r: W - 70, t: 180, b: 500 }, [371, 379], TB, (T) => HV * (1 - T / TB), 'boiling: liquid and vapor', '', 1, KB, mv);
    text(ctx, 'solid', L.ax.X(274.4), L.ax.Y(HF * (274.4 / TM - 1)) - 20, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'vapor', B.ax.X(372.4), B.ax.Y(Math.min(95, HV * (1 - 372.4 / TB))) - 4, PAL.ink, { size: 20, align: 'right' });
    hits.length = 0;
    hits.push({ x: L.ax.X(TM), y: L.ax.Y(0), r: 14, name: 'pure water melts at 273.15 K' });
    hits.push({ x: B.ax.X(TB), y: B.ax.Y(0), r: 14, name: 'pure water boils at 373.15 K' });
    if (mv > 0) {
      hits.push({ x: L.ax.X(L.T1), y: L.ax.Y(L.drop), r: 14, name: `the solution melts at ${fmt(L.T1, 2)} K` });
      hits.push({ x: B.ax.X(B.T1), y: B.ax.Y(B.drop), r: 14, name: `the solution boils at ${fmt(B.T1, 2)} K` });
    }
    tex(d.readout, `\\kDeltaT = K_f\\km \\\\ \\kDeltaT = (${fmt(KF, 2)}\\ \\text{K kg/mol})(${fmt(mv, 2)}\\ \\text{mol/kg}) = ${fmt(dTf, 2)}\\ \\text{K} \\\\ T_b - T_b^* = K_b\\km = (${fmt(KB, 3)}\\ \\text{K kg/mol})(${fmt(mv, 2)}\\ \\text{mol/kg}) = ${fmt(dTb, 2)}\\ \\text{K}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
