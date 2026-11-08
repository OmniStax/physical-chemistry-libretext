/* Figures for section 14.7 Spin-Spin Coupling Between Chemically Equivalent Protons is Not Observed. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['14.7'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, arrow, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
/* a number for TeX: ASCII minus, no negative zero */
const tn = (v, d = 2) => { const s = v.toFixed(d); return /^-[0.]*$/.test(s) ? s.slice(1) : s; };

/* ---------- Figure (the three Stack Exchange level diagrams folded): two coupled spin-1/2 nuclei ----------
   Hamiltonian (14.7.3) in frequency units with hbar = 1, solved exactly in the product basis:
   E1 = nu + J/4 and E4 = -nu + J/4; the middle block [[d/2 - J/4, J/2], [J/2, -d/2 - J/4]] gives
   E = -J/4 +- C with C = sqrt(d^2 + J^2)/2 (d = nu1 - nu2). The four Delta M_I = +-1 lines and their
   intensities |<f|I_x|i>|^2, scaled so a free spin's line is 1: 1 + s for the two inner lines and 1 - s for the
   outer two, s = J/(2C). Levels: the two outer levels sit a fixed drawn gap above and below the middle pair,
   since nu (hundreds of MHz) dwarfs the hertz the figure is about; the energy axis is broken there.
   Spectrum: frequency offset from nu = (nu1 + nu2)/2, fixed -45 to 45 Hz (the widest line at d = 50 Hz,
   J = 20 Hz is 37 Hz out); intensity fixed 0 to 4.4, two lines of 2 stacking to 4 at equal shifts.
   Lines are drawn with a Lorentzian half-width of 0.6 Hz so that coincident lines add. Opens on the book's
   case, equal shifts, with the chapter's J = 6.1 Hz. */
(function () {
  const d = sim('sim-ab', 640);
  const dv = ctl(d.controls, { label: '\\knuone - \\knutwo', cls: 'frequency', key: 'dnu', min: 0, max: 50, step: 0.5, value: 0, unit: 'Hz', dec: 1,
    specials: [{ at: 0, label: 'equal shifts, A₂' }] });
  const Jc = ctl(d.controls, { label: '\\kJcc', cls: 'frequency', key: 'J', min: 0, max: 20, step: 0.1, value: 6.1, unit: 'Hz', dec: 1,
    specials: [{ at: 0, label: 'no coupling' }] });
  const hits = [];
  F.hover(d.stage, () => hits);
  const HW = 0.6, lor = (x) => 1 / (1 + (x / HW) * (x / HW));
  function draw() {
    const { ctx, W } = begin(d.c);
    const D = dv.v, J = Jc.v, Cc = 0.5 * Math.sqrt(D * D + J * J);
    const s = Cc > 1e-9 ? J / (2 * Cc) : 0;
    const E1 = J / 4, E4 = J / 4, Ep = -J / 4 + Cc, Em = -J / 4 - Cc;
    /* the four allowed lines, offsets from nu, with intensities */
    const lines = [
      { f: -J / 2 + Cc, I: 1 + s, from: 4, to: 2, name: '|4⟩ → |2⟩' },
      { f: J / 2 - Cc, I: 1 + s, from: 2, to: 1, name: '|2⟩ → |1⟩' },
      { f: -J / 2 - Cc, I: 1 - s, from: 4, to: 3, name: '|4⟩ → |3⟩' },
      { f: J / 2 + Cc, I: 1 - s, from: 3, to: 1, name: '|3⟩ → |1⟩' },
    ];
    const eq = D < 0.25, free = J < 0.05;
    let head;
    if (eq && free) head = 'With equal shifts and no coupling all four levels give one line at $\\knu$.';
    else if (eq) head = `Both allowed lines fall at $\\knu$. The singlet $|3\\rangle$ sits ${fmt(3 * J / 4, 2)} Hz lower, and no line reaches it.`;
    else if (free) head = `Without coupling each nucleus gives one line, ${fmt(D, 1)} Hz apart.`;
    else head = `The two inner lines carry ${fmt(50 * (1 + s), 0)}% of the intensity and the two outer lines ${fmt(50 * (1 - s), 0)}%.`;
    topline(ctx, head);

    /* ---- the levels ---- */
    const y0 = 345, G = 190, k = 3, xa = 70, x0 = 150, x1 = 400;
    const Y = { 1: y0 - G - k * E1, 2: y0 - k * Ep, 3: y0 - k * Em, 4: y0 + G - k * E4 };
    const ghost = { 1: y0 - G, 2: y0 - k * D / 2, 3: y0 + k * D / 2, 4: y0 + G };
    /* the energy axis, broken where nu is left out */
    const ink = PAL.ink, en = C('energy');
    line(ctx, xa, 560, xa, y0 - G - 70, alpha(en, 0.8), 3);
    arrow(ctx, xa, y0 - G - 40, xa, y0 - G - 80, alpha(en, 0.8), 3);
    for (const yb of [y0 - G / 2, y0 + G / 2]) {
      line(ctx, xa - 12, yb - 4, xa + 12, yb - 12, en, 3); line(ctx, xa - 12, yb + 8, xa + 12, yb, en, 3); }
    text(ctx, 'E/h', xa, y0 - G - 96, en, { size: 22, weight: 600, align: 'center' });
    /* the levels without coupling, dashed */
    if (!free) for (const i of [1, 2, 3, 4]) line(ctx, x0, ghost[i], x1, ghost[i], alpha(ink, 0.35), 2, [10, 10]);
    for (const i of [1, 2, 3, 4]) line(ctx, x0, Y[i], x1, Y[i], en, 5);
    /* level names */
    const names = { 1: '|1⟩  αα', 2: eq ? '|2⟩  triplet' : '|2⟩', 3: eq ? '|3⟩  singlet' : '|3⟩', 4: '|4⟩  ββ' };
    if (Math.abs(Y[3] - Y[2]) < 26) {
      text(ctx, '|2⟩, |3⟩', x1 + 14, (Y[2] + Y[3]) / 2 + 7, ink, { size: 22 });
    } else for (const i of [2, 3]) text(ctx, names[i], x1 + 14, Y[i] + 7, ink, { size: 22 });
    for (const i of [1, 4]) text(ctx, names[i], x1 + 14, Y[i] + 7, ink, { size: 22 });
    /* the allowed transitions: notation arrows, as strong as their line */
    const ax0 = x0 + 40, step = 58;
    lines.forEach((L, i) => {
      const x = ax0 + i * step, yA = Y[L.from], yB = Y[L.to], col = F.cat(i);
      if (L.I < 0.02) line(ctx, x, yA, x, yB, alpha(col, 0.45), 2, [4, 8]);
      else arrow(ctx, x, yA, x, yB + 2, alpha(col, 0.35 + 0.65 * L.I / 2), 2 + 2.5 * L.I);
      hits.push({ x, y: (yA + yB) / 2, r: 18, name: `${L.name}: ν ${L.f < 0 ? '−' : '+'} ${fmt(Math.abs(L.f), 2)} Hz, intensity ${fmt(L.I, 2)}` });
    });

    /* ---- the spectrum ---- */
    const box = { l: 700, r: W - 60, t: 130, b: 530 };
    const ax = axes(ctx, box, [-45, 45], [0, 4.4], { nx: 6, ny: 4, xl: 'frequency − ν (Hz)', yl: 'intensity', xc: C('frequency'), fy: (v) => fmt(v, 1) });
    const S = (x) => lines.reduce((a, L) => a + L.I * lor(x - L.f), 0);
    plot(ctx, ax, S, ink, { w: 3 });
    /* where each line sits, in its arrow's colour, under the axis */
    lines.forEach((L, i) => {
      if (L.I < 0.02) return;
      const x = ax.X(L.f);
      line(ctx, x, box.b + 4, x, box.b + 16, F.cat(i), 5);
      hits.push({ x, y: ax.Y(S(L.f)), r: 14, name: `${L.name}, intensity ${fmt(L.I, 2)}` });
    });

    const m = `\\mathbf{H} = \\begin{pmatrix} \\knu + ${tn(J / 4)} & 0 & 0 & 0 \\\\ 0 & ${tn(D / 2 - J / 4)} & ${tn(J / 2)} & 0 \\\\ 0 & ${tn(J / 2)} & ${tn(-D / 2 - J / 4)} & 0 \\\\ 0 & 0 & 0 & -\\knu + ${tn(J / 4)} \\end{pmatrix}\\ \\text{Hz}`;
    const r = `-\\dfrac{\\kJcc}{4} \\pm \\tfrac{1}{2}\\sqrt{(\\knuone - \\knutwo)^2 + \\kJcc^2}`;
    const nuPlus = (v) => Math.abs(v) < 0.005 ? '\\knu' : `\\knu ${v < 0 ? '-' : '+'} ${tn(Math.abs(v))}\\ \\text{Hz}`;
    tex(d.readout, `${m} \\\\ \\kEtwo = ${r.replace('\\pm', '+')} = ${tn(Ep)}\\ \\text{Hz} \\\\ \\kEthree = ${r.replace('\\pm', '-')} = ${tn(Em)}\\ \\text{Hz} \\\\ E_{2\\leftrightarrow1} = \\kEone - \\kEtwo = ${nuPlus(lines[1].f)} \\\\ E_{4\\leftrightarrow2} = \\kEtwo - \\kEfour = ${nuPlus(lines[0].f)}`);
  }
  /* the hover list is rebuilt each frame */
  const drawAll = () => { hits.length = 0; draw(); };
  register(d.fig, { update: () => {}, draw: drawAll });
})();
};
