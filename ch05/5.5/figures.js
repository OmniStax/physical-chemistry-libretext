/* Figures for section 5.5 The Harmonic Oscillator and Infrared Spectra. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.5'] = function (root, F) {
const { tex, C, PAL, alpha, register, begin, line, arrow, text, topline, axes, plot, shade, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const SUB = '₀₁₂₃₄₅₆₇₈₉';
const sub = (k) => String(k).split('').map((c) => SUB[+c]).join('');
/* the normalized oscillator wavefunctions with x in units of Q₀ = √(ħ/μω), by the stable recurrence
   ψ₀ = π^(−1/4) e^(−x²/2), ψ_{n+1} = √(2/(n+1)) x ψ_n − √(n/(n+1)) ψ_{n−1} */
function psi(n, x) {
  let a = Math.pow(Math.PI, -0.25) * Math.exp(-x * x / 2), b = 0;
  for (let k = 0; k < n; k++) { const c = Math.sqrt(2 / (k + 1)) * x * a - Math.sqrt(k / (k + 1)) * b; b = a; a = c; }
  return a;
}
/* ∫ f dx over [−8, 8] by the midpoint rule */
const integral = (f) => { let s = 0; const N = 3200, h = 16 / N; for (let i = 0; i < N; i++) s += f(-8 + (i + 0.5) * h) * h; return s; };

/* =====================================================================
   FIGURE 5.5.1: which transitions a harmonic oscillator absorbs on. Still:
   a selection rule has no time in it. Left, the ladder v = 0 to 4 in its
   well, with the arrow from v to v′ (symbolic: notation for a transition,
   not a path), in the energy colour where the transition is allowed and in
   the error colour, crossed, where it is forbidden, as the book draws them
   in blue and red. Right, ψ_v and ψ_v′ and their product with the
   displacement, x ψ_v′ ψ_v, its area above the axis filled dark and below
   light: the second integral of Equation 5.5.10. Choices v (0–4), v′ (the
   other four levels) and the molecule, HCl (dμ/dx ≠ 0) or N₂ (dμ/dx = 0).
   x in units of Q₀ = √(ħ/μω), −5 to 5; ψ and x ψ ψ in units of Q₀^(−1/2)
   and Q₀⁰, both within −1 to 1 for these levels. Opens on the fundamental
   of HCl, 0 → 1.
===================================================================== */
(function () {
  const d = sim('sim-transitions', 640);
  const lv = [0, 1, 2, 3, 4];
  const opt = (k) => ({ value: String(k), label: String(k) });
  const others = (v) => lv.filter((k) => k !== v).map(opt);
  const V = F.choice(d.controls, { label: 'v', options: lv.map(opt), value: '0', aria: 'the initial level', key: 'v',
    onInput: () => { const v = +V.value; Vp.options(others(v), String(v === 4 ? 3 : v + 1)); } });
  const Vp = F.choice(d.controls, { label: "v'", options: others(0), value: '1', aria: 'the final level', key: 'vp' });
  const Mol = F.choice(d.controls, { label: '\\text{molecule}', options: [{ value: 'HCl', label: 'HCl' }, { value: 'N2', label: 'N₂' }], value: 'HCl', aria: 'the molecule', key: 'mol' });
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const v = +V.value, vp = +Vp.value, polar = Mol.value === 'HCl';
    const cw = C('wavefunction'), cd = C('dipole-moment'), ce = C('energy'), cl = C('length');
    const f = (x) => x * psi(vp, x) * psi(v, x);
    const I = integral(f), near = Math.abs(vp - v) === 1, allowed = near && polar;
    const absorb = vp > v;
    topline(ctx, !polar
      ? `N₂'s dipole moment does not change as it stretches, so $\\kmuT = 0$ for $${v} \\rightarrow ${vp}$ and for every other pair.`
      : near ? `The areas do not cancel, so $${v} \\rightarrow ${vp}$ is allowed: ${absorb ? 'a photon of energy' : 'it emits a photon of energy'} $\\hbar\\komega$${absorb ? ' is absorbed' : ''}.`
        : `The areas above and below the axis cancel, so $${v} \\rightarrow ${vp}$ is forbidden.`);
    /* the ladder */
    const lb = { l: 80, r: 430, t: 120, b: 560 };
    const la = axes(ctx, lb, [-3.6, 3.6], [0, 5.2], { nx: 0, ny: 0, xl: '', yl: 'energy', yc: ce });
    plot(ctx, la, (x) => x * x / 2, PAL.ink, { w: 3 });
    for (const k of lv) {
      const E = k + 0.5, q = Math.sqrt(2 * E), y = la.Y(E), on = k === v || k === vp;
      line(ctx, la.X(-q), y, la.X(q), y, on ? ce : alpha(ce, 0.45), on ? 4 : 2);
      text(ctx, `v = ${k}`, la.X(Math.min(q, 3.4)) + 10, y, on ? PAL.ink : PAL.muted, { size: 17, base: 'middle' });
      hits.push({ x: la.X(0), y, r: 14, name: `level v = ${k}, E = ${2 * k + 1}ħω/2` });
    }
    const ax0 = la.X(-0.4), y1 = la.Y(v + 0.5), y2 = la.Y(vp + 0.5);
    const col = allowed ? ce : PAL.bad;
    arrow(ctx, ax0, y1, ax0, y2, col, 5);
    if (!allowed) { const ym = (y1 + y2) / 2, s = 16; line(ctx, ax0 - s, ym - s, ax0 + s, ym + s, PAL.bad, 4); line(ctx, ax0 - s, ym + s, ax0 + s, ym - s, PAL.bad, 4); }
    hits.push({ x: ax0, y: (y1 + y2) / 2, r: 20, name: `the transition ${v} → ${vp}, ${allowed ? 'allowed' : 'forbidden'}` });
    /* the integrand of the second integral */
    const gb = { l: 560, r: 1340, t: 120, b: 560 };
    const ax = axes(ctx, gb, [-5, 5], [-1, 1], { nx: 4, ny: 4, xl: 'displacement x / Q₀', yl: '', xc: cl });
    shade(ctx, ax, (x) => Math.max(0, f(x)), 0, -5, 5, cd, { alpha: 0.5 });
    shade(ctx, ax, (x) => Math.min(0, f(x)), 0, -5, 5, cd, { alpha: 0.18 });
    plot(ctx, ax, (x) => psi(v, x), alpha(cw, 0.8), { w: 3 });
    plot(ctx, ax, (x) => psi(vp, x), alpha(cw, 0.8), { w: 3, dash: [10, 10] });
    plot(ctx, ax, f, cd, { w: 5 });
    F.legend(ctx, ax, [
      { s: `ψ${sub(v)}`, color: alpha(cw, 0.8), w: 3 },
      { s: `ψ${sub(vp)}`, color: alpha(cw, 0.8), w: 3, dash: [10, 10] },
      { s: `x ψ${sub(vp)} ψ${sub(v)}`, color: cd, w: 5 },
    ], { corner: 'above' });
    hits.push({ x: ax.X(0.8), y: ax.Y(f(0.8)), r: 16, name: `x ψ${sub(vp)} ψ${sub(v)}, whose area is the second integral of Equation 5.5.10` });
    const Iv = Math.abs(I) < 5e-4 ? 0 : I;
    const lines = [`\\kmuT = \\left.\\dfrac{d\\kmud}{d\\kx}\\right|_{0}\\int \\kx\\,\\kpsi^*_{${vp}}\\kpsi_{${v}}\\,d\\kx`];
    if (polar) lines.push(`\\int \\kx\\,\\kpsi^*_{${vp}}\\kpsi_{${v}}\\,d\\kx = ${fmt(Iv, 3)}\\,\\kQzero`);
    else lines.push(`\\left.\\dfrac{d\\kmud}{d\\kx}\\right|_{0} = 0`);
    lines.push(allowed ? `\\kmuT \\neq 0` : `\\kmuT = 0`);
    tex(d.readout, lines.join(' \\\\ '));
  }
  register(d.fig, { update: () => {}, draw });
})();
};
