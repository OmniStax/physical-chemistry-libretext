/* Figures for section 9.6 A Simple Molecular-Orbital Treatment of H2 Places Both Electrons in a Bonding Orbital. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.6'] = function (root, F) {
const { tex, C, PAL, register, begin, line, text, arrow } = F;

/* =====================================================================
   FIGURE 9.6.1: four configurations on one ladder of five orbital
   energies, a faithful copy in the house level style. Still and without
   controls: four states side by side is already the clearest view, and
   nothing in the section varies on them. The energies are schematic, at
   the book's heights (eps1 low, eps2 and eps3 close, eps4 and eps5 above).
   Levels in ink; the energy names in the energy hue; electrons as arrows
   in the electron's convention colour, up for alpha and down for beta.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-configurations', 560);
  const hits = [];
  F.hover(d.stage, () => hits);
  const Y = [470, 330, 260, 175, 90];                         /* eps1 .. eps5 */
  /* each column: per level, the spins as a string of u and d */
  const COLS = [
    { h: 'a)', s: ['ud', 'ud', '', '', ''], name: 'the closed-shell ground configuration, ψ₁²ψ₂²' },
    { h: 'b)', s: ['ud', 'u', '', '', ''], name: 'the open-shell radical, ψ₁²ψ₂¹' },
    { h: 'c)', s: ['ud', 'u', 'd', '', ''], name: 'an excited singlet, ψ₁²ψ₂¹ψ₃¹ with the two spins opposite' },
    { h: 'd)', s: ['ud', 'u', 'u', '', ''], name: 'an excited triplet, ψ₁²ψ₂¹ψ₃¹ with the two spins parallel' },
  ];
  function draw() {
    const { ctx } = begin(d.c);
    const ce = C('energy'), ee = F.el('e-'), w = 150, L = 50;
    hits.length = 0;
    Y.forEach((y, i) => text(ctx, `ε_${i + 1}`, 150, y, ce, { size: 30, weight: 600, align: 'center', base: 'middle' }));
    COLS.forEach((c, j) => {
      const x = 360 + j * 260;
      text(ctx, c.h, x, 40, PAL.ink, { size: 28, align: 'center' });
      Y.forEach((y, i) => {
        line(ctx, x - w / 2, y, x + w / 2, y, PAL.ink, 4);
        const sp = c.s[i];
        [...sp].forEach((t, k) => {
          const dx = sp.length === 2 ? (k ? 16 : -16) : 0;
          if (t === 'u') arrow(ctx, x + dx, y + 4, x + dx, y - L, ee, 4); else arrow(ctx, x + dx, y - L, x + dx, y + 4, ee, 4);
        });
      });
      hits.push({ x, y: 280, r: 120, name: c.name });
    });
    tex(d.readout, `\\text{a) } \\psi_1^2\\psi_2^2 \\\\ \\text{b) } \\psi_1^2\\psi_2^1 \\\\ \\text{c), d) } \\psi_1^2\\psi_2^1\\psi_3^1`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
