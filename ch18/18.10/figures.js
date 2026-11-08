/* Figures for section 18.10 Ortho and Para Hydrogen. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['18.10'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, legend, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- Figure 18.10.1: ortho and para hydrogen ----------
   H2's rotational levels with Theta_R = 87.6 K (Table 18.4.1). Para takes the even J (spin weight 1), ortho the odd J
   (weight 3). For a set of levels, x_J = J(J+1)Theta_R/T and C_V/R = <x^2> - <x>^2 over the Boltzmann weights.
   Equilibrium (catalyst): every level in one distribution, weights 1 and 3, so C_V/R is the variance over all J
   (peak 2.07 at 50 K). Para alone: even J (peak 1.47 near 170 K). Ortho alone: odd J. Frozen 3:1: 3/4 ortho + 1/4 para.
   Left, the ladder J = 0 to 5 drawn to scale in J(J+1), each level in its referent's colour with a bar of the fraction
   of all molecules in it. Right, C_V/R against T, x 0 to 330 K (the book's axis), y 0 to 2.2; below, N_o/N_p against
   T, y 0 to 3.2, the equilibrium curve and the frozen 3. Slider T 10 to 330 K, opening at 100 K; a choice of catalyst.
   Still: no time in it. */
(function () {
  const d = sim('sim-ortho-para', 660);
  const TH = 87.6, JMAX = 40;
  const T = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: 10, max: 330, step: 1, value: 100, unit: 'K', dec: 0,
    detents: [{ v: 77, label: '77 K' }, { v: 300, label: '300 K' }] });
  const cat = F.choice(d.controls, { label: '\\text{catalyst}', aria: 'whether ortho and para hydrogen can interconvert', value: 'eq',
    options: [{ value: 'eq', label: 'with catalyst' }, { value: 'frozen', label: 'without' }] });
  /* the Boltzmann sum over a parity: q (with weight g), <x>, <x^2> */
  const sums = (par, t) => { let q = 0, m = 0, m2 = 0; for (let J = par; J < JMAX; J += 2) { const x = J * (J + 1) * TH / t, w = (2 * J + 1) * Math.exp(-x); q += w; m += x * w; m2 += x * x * w; } return { q, m, m2 }; };
  const cvOf = (s) => s.m2 / s.q - (s.m / s.q) ** 2;
  const para = (t) => cvOf(sums(0, t)), ortho = (t) => cvOf(sums(1, t));
  const frozen = (t) => 0.75 * ortho(t) + 0.25 * para(t);
  const equil = (t) => { const e = sums(0, t), o = sums(1, t), q = e.q + 3 * o.q, m = (e.m + 3 * o.m) / q, m2 = (e.m2 + 3 * o.m2) / q; return m2 - m * m; };
  const ratio = (t) => 3 * sums(1, t).q / sums(0, t).q;
  const hov = []; F.hover(d.stage, () => hov);
  function draw() {
    const { ctx, W } = begin(d.c);
    const t = T.v, eqm = cat.value === 'eq', e = sums(0, t), o = sums(1, t), r = eqm ? 3 * o.q / e.q : 3;
    const fo = r / (1 + r), cv = eqm ? equil(t) : frozen(t);
    const ORTHO = F.ref('ortho-h2'), PARA = F.ref('para-h2');
    topline(ctx, eqm ? `At ${fmt(t, 0)} K and in equilibrium, ${fmt(100 * fo, 0)}% of the molecules are ortho.` : `Cooled without a catalyst, the gas stays 75% ortho at ${fmt(t, 0)} K.`);
    hov.length = 0;
    /* the ladder: levels to scale in J(J+1), J = 0 to 5 */
    const xl = 130, xr = 440, y0 = 600, k = 11.5;
    text(ctx, 'rotational levels of H₂', (xl + xr) / 2, 140, PAL.ink, { size: 20, align: 'center' });
    for (let J = 0; J <= 5; J++) {
      const y = y0 - J * (J + 1) * k, odd = J % 2 === 1, col = odd ? ORTHO : PARA;
      const pop = odd ? fo * (2 * J + 1) * Math.exp(-J * (J + 1) * TH / t) / o.q : (1 - fo) * (2 * J + 1) * Math.exp(-J * (J + 1) * TH / t) / e.q;
      line(ctx, xl, y, xr, y, col, 3);
      text(ctx, `J = ${J}`, xl - 16, y + 6, PAL.muted, { size: 17, align: 'right' });
      if (pop > 0.002) { ctx.save(); ctx.fillStyle = alpha(col, 0.55); ctx.fillRect(xl, y - 12, (xr - xl) * pop, 10); ctx.restore(); }
      hov.push({ x: (xl + xr) / 2, y: y - 4, r: 14, name: `J = ${J}, ${odd ? 'ortho (nuclear spin triplet, weight 3)' : 'para (nuclear spin singlet, weight 1)'}: ${fmt(100 * pop, 1)}% of the molecules` });
    }
    legend(ctx, { l: xl, r: xr, t: 152, b: 240 }, [{ s: 'ortho, odd J', color: ORTHO, w: 3 }, { s: 'para, even J', color: PARA, w: 3 }], { corner: 'tl' });
    /* heat capacity against T */
    const box = { l: 620, r: W - 50, t: 120, b: 380 };
    const ax = axes(ctx, box, [0, 330], [0, 2.2], { nx: 0, ny: 0, yl: 'C_{V}/R', yc: C('heat-capacity') });
    [0, 0.5, 1, 1.5, 2].forEach((v) => text(ctx, fmt(v, 1), box.l - 12, ax.Y(v) + 6, PAL.muted, { size: 17, align: 'right' }));
    plot(ctx, ax, para, PARA, { w: 3, x: [10, 330] });
    plot(ctx, ax, ortho, ORTHO, { w: 3, x: [10, 330] });
    plot(ctx, ax, equil, C('heat-capacity'), { w: eqm ? 5 : 3, x: [10, 330] });
    plot(ctx, ax, frozen, C('heat-capacity'), { w: eqm ? 3 : 5, x: [10, 330], dash: [10, 10] });
    line(ctx, ax.X(t), ax.Y(cv), ax.X(t), box.b, alpha(C('temperature'), 0.8), 3, [4, 8]);
    dot(ctx, ax.X(t), ax.Y(cv), C('heat-capacity'), true, 10);
    hov.push({ x: ax.X(50.5), y: ax.Y(2.069), r: 14, name: 'the equilibrium peak: 2.07R near 50 K' });
    legend(ctx, ax, [{ s: 'equilibrium', color: C('heat-capacity'), w: 5 }, { s: '3:1', color: C('heat-capacity'), w: 3, dash: [10, 10] }, { s: 'ortho', color: ORTHO, w: 3 }, { s: 'para', color: PARA, w: 3 }], { corner: 'tr' });
    /* the ratio against T */
    const b2 = { l: 620, r: W - 50, t: 450, b: 590 };
    const a2 = axes(ctx, b2, [0, 330], [0, 3.2], { nx: 0, ny: 0, xl: 'T (K)', xc: C('temperature'), yl: 'N_{o}/N_{p}' });
    [0, 1, 2, 3].forEach((v) => text(ctx, fmt(v, 0), b2.l - 12, a2.Y(v) + 6, PAL.muted, { size: 17, align: 'right' }));
    [0, 50, 100, 150, 200, 250, 300].forEach((v) => text(ctx, fmt(v, 0), a2.X(v), b2.b + 26, PAL.muted, { size: 17, align: 'center' }));
    plot(ctx, a2, ratio, PAL.ink, { w: eqm ? 4 : 2, x: [10, 330] });
    line(ctx, b2.l, a2.Y(3), b2.r, a2.Y(3), alpha(PAL.ink, eqm ? 0.45 : 0.9), eqm ? 2 : 4, [10, 10]);
    line(ctx, a2.X(t), a2.Y(r), a2.X(t), b2.b, alpha(C('temperature'), 0.8), 3, [4, 8]);
    dot(ctx, a2.X(t), a2.Y(r), PAL.ink, true, 9);
    hov.push({ x: a2.X(t), y: a2.Y(r), r: 14, name: eqm ? `the equilibrium ratio at ${fmt(t, 0)} K` : 'the ratio frozen at its high-temperature value, 3' });
    if (eqm) tex(d.readout, `\\dfrac{N_{o}}{N_{p}} = \\dfrac{3\\sum_{J\\,\\text{odd}}(2J+1)e^{-J(J+1)\\kThetaR/\\kT}}{\\sum_{J\\,\\text{even}}(2J+1)e^{-J(J+1)\\kThetaR/\\kT}} = \\dfrac{3(${fmt(o.q, 3)})}{${fmt(e.q, 3)}} = ${fmt(r, 3)} \\\\ \\kCVrotnu = ${fmt(cv, 3)}\\,\\kR`);
    else tex(d.readout, `\\dfrac{N_{o}}{N_{p}} = 3 \\\\ \\kCVrotnu = \\dfrac{3}{4}(${fmt(ortho(t), 3)}\\,\\kR) + \\dfrac{1}{4}(${fmt(para(t), 3)}\\,\\kR) = ${fmt(cv, 3)}\\,\\kR`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
