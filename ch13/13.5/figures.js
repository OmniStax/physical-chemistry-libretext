/* Figures for section 13.5 Vibrational Overtones. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['13.5'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, arrow, fmt, legend } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- Figure 13.5.3 + 13.5.4: overtones from a closing ladder ----------
   HCl with the constants Table 13.5.1's anharmonic column follows (recovered from the table: they give every entry
   to 0.5 cm^-1): nu = 2990.9 cm^-1, chi_e nu = 52.8 cm^-1, which opens the figure; the slider is chi_e nu, 0 to 90 cm^-1. Levels
   E_v = nu (v + 1/2) - chi_e nu (v + 1/2)^2; a line 0 -> v sits at v nu - v(v + 1) chi_e nu, which is
   v(v - 1) chi_e nu below v times the fundamental. Top: the harmonic ladder (dashed) beside the anharmonic one
   with its arrows, energy 0 to 18 000 cm^-1 (v = 5 harmonic is 16 450). Bottom: the lines on a wavenumber strip
   2000 to 15 000 cm^-1, the whole multiples of the fundamental as dashed ghosts, the observed values of
   Table 13.5.1 as dots. Still: chi_e is variation, not time. */
(function () {
  const d = sim('sim-overtones', 640);
  const NU = 2990.9, OBS = [2885.9, 5668.0, 8347.0, 10923.1, 13396.5];
  const X = ctl(d.controls, { label: '\\tilde{\\chi}_e\\knut', cls: 'wavenumber', key: 'chi', min: 0, max: 90, step: 0.1, value: 52.8, unit: 'cm⁻¹', dec: 1,
    aria: 'the anharmonicity constant times the harmonic wavenumber', detents: [{ v: 52.8, label: 'HCl' }], snap: true });
  const T = F.select(d.controls, { label: 'transition', options: [
    { value: '1', label: '0 → 1' }, { value: '2', label: '0 → 2' }, { value: '3', label: '0 → 3' }, { value: '4', label: '0 → 4' }, { value: '5', label: '0 → 5' }, { value: 'h', label: '1 → 2' }], value: '2' });
  const hits = [];
  F.hover(d.stage, () => hits);
  const NAMES = ['', 'the fundamental', 'the first overtone', 'the second overtone', 'the third overtone', 'the fourth overtone'];
  function draw() {
    const { ctx } = begin(d.c);
    const xn = X.v, chi = xn / NU, E = (v) => NU * (v + 0.5) - xn * (v + 0.5) ** 2, Eh = (v) => NU * (v + 0.5);
    const line0 = (v) => E(v) - E(0), fund = line0(1);
    const hot = T.value === 'h', sel = hot ? 2 : +T.value, lo = hot ? 1 : 0, nuSel = E(sel) - E(lo), ghost = (sel - lo) * fund, def = ghost - nuSel;
    const ce = C('energy'), cw = C('wavenumber'), ghostC = alpha(PAL.ink, 0.5);
    topline(ctx, hot
      ? `The hot band $1 \\to 2$ lands at ${fmt(nuSel, 1)} cm⁻¹, ${fmt(def, 1)} cm⁻¹ below the fundamental.`
      : sel === 1 ? `The fundamental lands at ${fmt(nuSel, 1)} cm⁻¹; every overtone is measured against it.`
        : `${NAMES[sel][0].toUpperCase() + NAMES[sel].slice(1)} lands at ${fmt(nuSel, 1)} cm⁻¹, ${fmt(def, 1)} cm⁻¹ below ${sel} times the fundamental.`);

    /* the two ladders */
    const box = { l: 150, r: 900, t: 100, b: 400 };
    const ax = axes(ctx, box, [0, 1], [0, 18000], { nx: 0, ny: 6, yl: 'energy (cm⁻¹)', yc: ce });
    const hx = [200, 420], axx = [540, 860];
    hits.length = 0;
    for (let v = 0; v <= 5; v++) {
      line(ctx, hx[0], ax.Y(Eh(v)), hx[1], ax.Y(Eh(v)), ghostC, 3, [10, 10]);
      const on = v === sel || v === lo;
      line(ctx, axx[0], ax.Y(E(v)), axx[1], ax.Y(E(v)), alpha(ce, on ? 1 : 0.6), on ? 5 : 3);
      text(ctx, `v = ${v}`, (hx[1] + axx[0]) / 2, ax.Y(E(v)), PAL.ink, { size: 20, align: 'center', base: 'middle' });
      hits.push({ x: (axx[0] + axx[1]) / 2, y: ax.Y(E(v)), r: 12, name: `anharmonic level v = ${v}: ${fmt(E(v), 1)} cm⁻¹` });
      hits.push({ x: (hx[0] + hx[1]) / 2, y: ax.Y(Eh(v)), r: 12, name: `harmonic level v = ${v}: ${fmt(Eh(v), 1)} cm⁻¹` });
    }
    text(ctx, 'harmonic', (hx[0] + hx[1]) / 2, box.b + 28, PAL.muted, { size: 20, align: 'center' });
    text(ctx, 'anharmonic', (axx[0] + axx[1]) / 2, box.b + 28, ce, { size: 20, align: 'center', weight: 600 });
    /* the arrows: 0 -> v side by side, the hot band last */
    for (let v = 1; v <= 5; v++) {
      const x = axx[0] + 30 + (v - 1) * 46, on = !hot && v === sel;
      arrow(ctx, x, ax.Y(E(0)), x, ax.Y(E(v)), alpha(cw, on ? 1 : 0.35), on ? 5 : 3);
      hits.push({ x, y: ax.Y((E(0) + E(v)) / 2), r: 14, name: `${NAMES[v]}, 0 → ${v}: ${fmt(line0(v), 1)} cm⁻¹` });
    }
    { const x = axx[1] - 34; arrow(ctx, x, ax.Y(E(1)), x, ax.Y(E(2)), alpha(cw, hot ? 1 : 0.35), hot ? 5 : 3);
      hits.push({ x, y: ax.Y((E(1) + E(2)) / 2), r: 14, name: `the hot band 1 → 2: ${fmt(E(2) - E(1), 1)} cm⁻¹` }); }
    legend(ctx, { l: 920, t: 110, r: 1360, b: 400 }, [
      { s: 'line of the anharmonic ladder', color: cw, w: 5 },
      { s: 'whole multiple of the fundamental', color: ghostC, w: 3, dash: [10, 10] },
      { s: 'observed, Table 13.5.1', kind: 'dot', color: PAL.ink },
    ], { corner: 'tl' });

    /* the spectrum strip */
    const sb = { l: 150, r: 1340, t: 480, b: 560 };
    const sx = axes(ctx, sb, [2000, 15000], [0, 1], { nx: 13, ny: 0, xl: 'wavenumber ν̃ (cm⁻¹)', xc: cw });
    for (let v = 1; v <= 5; v++) {
      const g = v * fund, l = line0(v), on = !hot && v === sel;
      line(ctx, sx.X(g), sb.b, sx.X(g), sb.t + 6, ghostC, 3, [10, 10]);
      line(ctx, sx.X(l), sb.b, sx.X(l), sb.t + 6, alpha(cw, on ? 1 : 0.6), on ? 6 : 4);
      dot(ctx, sx.X(OBS[v - 1]), sb.t - 4, PAL.ink, true, 6);
      text(ctx, `0 → ${v}`, sx.X(l), sb.t - 24, alpha(cw, on ? 1 : 0.75), { size: 18, align: 'center', weight: on ? 600 : 400 });
      hits.push({ x: sx.X(l), y: (sb.t + sb.b) / 2, r: 12, name: `0 → ${v}: ${fmt(l, 1)} cm⁻¹` });
      hits.push({ x: sx.X(g), y: (sb.t + sb.b) / 2 + 20, r: 10, name: `${v} × the fundamental: ${fmt(g, 1)} cm⁻¹` });
      hits.push({ x: sx.X(OBS[v - 1]), y: sb.t - 4, r: 10, name: `observed 0 → ${v}: ${fmt(OBS[v - 1], 1)} cm⁻¹` });
    }
    { const l = E(2) - E(1); line(ctx, sx.X(l), sb.b, sx.X(l), sb.t + 30, alpha(cw, hot ? 1 : 0.5), hot ? 6 : 3, [4, 4]);
      hits.push({ x: sx.X(l), y: sb.b - 20, r: 10, name: `hot band 1 → 2: ${fmt(l, 1)} cm⁻¹` }); }
    /* the shortfall of the chosen line, shaded between it and its whole multiple */
    if (def > 0) { ctx.save(); ctx.fillStyle = alpha(cw, 0.18); ctx.fillRect(sx.X(nuSel), sb.t + 6, sx.X(ghost) - sx.X(nuSel), sb.b - sb.t - 6); ctx.restore(); }

    const lo2 = `E_{${lo}}`, hi2 = `E_{${sel}}`;
    tex(d.readout, `\\kEv = \\knut\\left(v + \\tfrac{1}{2}\\right) - \\tilde{\\chi}_e\\knut\\left(v + \\tfrac{1}{2}\\right)^2 \\\\ ${hi2} - ${lo2} = ${fmt(E(sel), 1)} - ${fmt(E(lo), 1)} = ${fmt(nuSel, 1)}\\ \\text{cm}^{-1}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
