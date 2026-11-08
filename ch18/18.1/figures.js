/* Figures for section 18.1 Translational Partition Functions of Monotonic Gases. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['18.1'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, legend, label, hbracket, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- constants, SI ---------- */
const H_PL = 6.62607e-34, KB = 1.380649e-23, U = 1.6606e-27, P_BAR = 1e5, V_BOOK = 1e-3;   /* J s; J/K; kg (the book's u); Pa; m³ (the example's 1 L) */
const sci = (v, dg = 2) => { let e = Math.floor(Math.log10(v)), m = v / 10 ** e; if (+m.toFixed(dg) >= 10) { m /= 10; e += 1; } return `${fmt(m, dg)}\\times10^{${e}}`; };
const lenT = (x) => len(x).replace(/ (pm|nm)$/, '\\ \\text{$1}');
const len = (x) => (x < 1e-9 ? `${fmt(x * 1e12, x < 1e-11 ? 2 : 1)} pm` : `${fmt(x * 1e9, 2)} nm`);

/* ---------- Sim: the thermal wavelength beside the space between molecules ----------
   Left, a slice of the gas at 1 bar: nine molecules on a square lattice of spacing d = (kT/p)^(1/3),
   the volume each has to itself, drawn at a fixed 130 units per d, so the scale changes with T. Each
   molecule wears a blur of diameter Λ = h/√(2πmkT) on the same scale (capped at the box). The atoms
   are not to scale. Right, Λ and d against T on log-log axes, T 1 to 10⁴ K (slider 1 to 3000 K),
   length 1 pm to 10 nm (He at 1 K has Λ = 0.87 nm; I₂ at 3000 K has 2.0 pm), the state points at the
   slider's T. Opens on the book's example, I₂ (2 × 127 u) at 300 K: Λ = 6.32 pm, q_trans = 3.95 × 10³⁰
   in 1 L. Still: no time in it. */
(function () {
  const d = sim('sim-thermal-wavelength', 600);
  const GAS = {
    He: { m: 4.003, el: ['He'], s: 'He', name: 'helium atom' },
    H2: { m: 2.016, el: ['H', 'H'], s: 'H₂', name: 'H₂ molecule' },
    N2: { m: 28.01, el: ['N', 'N'], s: 'N₂', name: 'N₂ molecule' },
    Ar: { m: 39.95, el: ['Ar'], s: 'Ar', name: 'argon atom' },
    I2: { m: 254, el: ['I', 'I'], s: 'I₂', name: 'I₂ molecule' },
  };
  const g = F.choice(d.controls, { label: 'gas', options: Object.keys(GAS).map((k) => ({ value: k, label: GAS[k].s })), value: 'I2' });
  const t = ctl(d.controls, { label: '\\kT', cls: 'temperature', min: 0, max: Math.log10(3000), step: 0.001, value: Math.log10(300), unit: '',
    fmt: (lg) => `${fmt(10 ** lg, 10 ** lg < 10 ? 1 : 0)} K`, detents: [{ v: Math.log10(300), label: '300 K' }] });
  const lam = (m, T) => H_PL / Math.sqrt(2 * Math.PI * m * KB * T);
  const gap = (T) => Math.cbrt(KB * T / P_BAR);
  const hov = []; F.hover(d.stage, () => hov);
  function draw() {
    const { ctx, W } = begin(d.c);
    const G = GAS[g.value], m = G.m * U, T = 10 ** t.v, L = lam(m, T), D = gap(T);
    const qV = V_BOOK / L ** 3, qN = (KB * T / P_BAR) / L ** 3;
    const r = L / D;
    topline(ctx, r < 1
      ? `At ${fmt(T, T < 10 ? 1 : 0)} K, $\\kLambdath$ of ${G.s} is ${len(L)}, about 1/${fmt(1 / r, 1 / r < 10 ? 1 : 0)} of the ${len(D)} between molecules at 1 bar.`
      : `At ${fmt(T, T < 10 ? 1 : 0)} K, $\\kLambdath$ of ${G.s} is ${len(L)}, ${fmt(r, 1)} times the ${len(D)} between molecules at 1 bar.`);
    hov.length = 0;
    /* the slice of gas */
    const x0 = 80, y0 = 110, S = 390, cell = S / 3;
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 2; ctx.strokeRect(x0, y0, S, S); ctx.restore();
    const rad = Math.min(0.5 * r * cell, 1.5 * S);
    ctx.save(); ctx.beginPath(); ctx.rect(x0, y0, S, S); ctx.clip();
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
      const cx = x0 + cell * (i + 0.5), cy = y0 + cell * (j + 0.5);
      if (rad > 1.5) {
        ctx.fillStyle = alpha(C('wavelength'), 0.22); ctx.beginPath(); ctx.arc(cx, cy, rad, 0, 2 * Math.PI); ctx.fill();
        ctx.strokeStyle = alpha(C('wavelength'), 0.8); ctx.lineWidth = 2; ctx.stroke();
      }
    }
    ctx.restore();
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
      const cx = x0 + cell * (i + 0.5), cy = y0 + cell * (j + 0.5);
      if (G.el.length === 1) dot(ctx, cx, cy, F.el(G.el[0]), true, 7);
      else { dot(ctx, cx - 5, cy, F.el(G.el[0]), true, 6); dot(ctx, cx + 5, cy, F.el(G.el[1]), true, 6); }
    }
    const mx = x0 + cell * 1.5, my = y0 + cell * 1.5;
    if (rad < 0.5 * cell) label(ctx, `Λ = ${len(L)}`, mx, my - Math.max(rad, 8), { side: 'above', color: C('wavelength'), gap: 26, size: 20 });
    else text(ctx, `Λ = ${len(L)}`, mx, y0 + 30, C('wavelength'), { size: 20, align: 'center', bg: PAL.panel });
    hbracket(ctx, x0 + cell * 0.5, x0 + cell * 1.5, y0 + S + 24, PAL.ink, `d = ${len(D)}`, { side: 'below' });
    hov.push({ x: mx, y: my, r: 14, name: `a ${G.name} (the atoms are not drawn to scale)` });
    if (rad > 1.5) hov.push({ x: mx + Math.min(rad, cell) * 0.7, y: my - Math.min(rad, cell) * 0.7, r: 12, name: `a blur one thermal wavelength across, ${len(L)}` });
    /* Λ and d against T */
    const box = { l: 660, r: W - 50, t: 120, b: 500 };
    const DEC = ['1', '10', '100', '1000', '10⁴'], LEN = ['1 pm', '10 pm', '100 pm', '1 nm', '10 nm'];
    const ax = axes(ctx, box, [0, 4], [-12, -8], { nx: 4, ny: 4, fx: (v) => DEC[Math.round(v)], fy: (v) => LEN[Math.round(v + 12)],
      xl: 'temperature T (K)', yl: 'length', xc: C('temperature'), yc: PAL.ink });
    plot(ctx, ax, (x) => Math.log10(gap(10 ** x)), PAL.muted, { w: 4, dash: [10, 10] });
    plot(ctx, ax, (x) => Math.log10(lam(m, 10 ** x)), C('wavelength'), { w: 5 });
    const xT = ax.X(t.v);
    line(ctx, xT, box.t, xT, box.b, alpha(C('temperature'), 0.7), 3, [4, 8]);
    const yL = ax.Y(Math.log10(L)), yD = ax.Y(Math.log10(D));
    dot(ctx, xT, yL, C('wavelength'), true, 10); dot(ctx, xT, yD, PAL.muted, true, 9);
    hov.push({ x: xT, y: yL, r: 14, name: `Λ = ${len(L)} at ${fmt(T, 0)} K` }, { x: xT, y: yD, r: 14, name: `d = ${len(D)} at ${fmt(T, 0)} K and 1 bar` });
    legend(ctx, ax, [{ s: `Λ of ${G.s}`, color: C('wavelength'), w: 5 }, { s: 'spacing d at 1 bar', color: PAL.muted, w: 4, dash: [10, 10] }], { corner: 'tr' });
    tex(d.readout, `\\kLambdath = \\dfrac{h}{\\sqrt{2\\pi\\km k\\kT}} = ${lenT(L)} \\\\ \\kqtrans = \\dfrac{\\kV}{\\kLambdath^3} = \\dfrac{1\\ \\text{L}}{(${lenT(L)})^3} = ${sci(qV)} \\\\ \\dfrac{\\kqtrans}{N} = \\dfrac{k\\kT/p}{\\kLambdath^3} = ${qN >= 100 ? sci(qN) : fmt(qN, 2)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
