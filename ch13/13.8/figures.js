/* Figures for section 13.8 Rotational Spectra of Polyatomic Molecules. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['13.8'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, text, topline, axes, fmt } = F;

/* ---------- Figure 13.8.1: prolate, spherical and oblate tops ----------
   The top is a uniform spheroid, semi-axis 1 across and c along its unique axis (z here). Its unique moment over
   the other two is rho = I_u / I = 2 / (1 + c^2), so the slider sets rho and the shape follows: c^2 = 2/rho - 1,
   a football (c = 1.7) at rho = 0.5, a sphere at 1, a frisbee (c = 0.45) at 1.66. rho < 1: prolate, the unique axis
   is a; rho > 1: oblate, the unique axis is c. Levels in units of hbar^2/2I, I the moment of the two equal axes:
   E = J(J + 1) + K^2 (1/rho - 1), J = 0 to 3, |K| <= J; y 0 to 24 (J = 3, K = 3 reaches 21 at rho = 0.5).
   Mathematical 3D: the shape is the lesson, so a free orbit; no spin, no zoom. Without WebGL the same layers are
   painted flat from the opening view. Still: rho is variation, not time. */
(function () {
  const d = F.sim(root, 'sim-tops');
  const RHO = ctl(d.controls, { label: 'I_{unique} / I', cls: 'moment-of-inertia', key: 'rho', min: 0.5, max: 1.66, step: 0.01, value: 0.6, dec: 2,
    aria: 'the moment of inertia about the unique axis over the moment about the two equal axes', specials: [{ at: 1, label: 'spherical top' }] });
  const KK = F.choice(d.controls, { label: '|K|', key: 'K', options: [0, 1, 2, 3].map((k) => ({ value: String(k), label: String(k) })), value: '3', aria: 'the quantum number K of the level the readout writes' });
  const S = F.space3d(d, { box: [[-1.8, 1.8], [-1.8, 1.8], [-1.9, 1.9]], h: 460, turn: -0.6, tilt: 0.35, fit: 2.2, spin: 'off', zoom: false });
  const lad = F.makeCanvas(d.stage, 380);
  const hits = [];
  F.hover(d.stage, () => hits, lad);
  function draw() {
    const rho = RHO.v, k = +KK.value, cz = Math.sqrt(Math.max(0.01, 2 / rho - 1)), sph = Math.abs(rho - 1) < 0.005, pro = rho < 1;
    const ci = C('moment-of-inertia'), ce = C('energy');
    const u = pro ? 'a' : 'c', o1 = pro ? 'b' : 'a', o2 = pro ? 'c' : 'b';
    S.set('body', F.space.surface((th, ph) => [Math.sin(th) * Math.cos(ph), Math.sin(th) * Math.sin(ph), cz * Math.cos(th)], [0, Math.PI], [0, 2 * Math.PI], ci, { n: [28, 48], grid: 8, alpha: 0.55 }));
    const L = 1.6, Lz = Math.max(cz + 0.45, 0.9);
    S.set('axes', [
      { k: 'line', pts: [[0, 0, -Lz], [0, 0, Lz]], color: 'ink', w: 3, name: sph ? 'a body axis' : `the unique axis, ${u}` },
      { k: 'line', pts: [[-L, 0, 0], [L, 0, 0]], color: 'muted', w: 2, name: sph ? 'a body axis' : `a body axis, ${o1}` },
      { k: 'line', pts: [[0, -L, 0], [0, L, 0]], color: 'muted', w: 2, name: sph ? 'a body axis' : `a body axis, ${o2}` },
      { k: 'label', s: sph ? 'a' : u, p: [0, 0, Lz + 0.15], color: PAL.ink, cls: 'bare' },
      { k: 'label', s: sph ? 'b' : o1, p: [L + 0.15, 0, 0], color: PAL.muted, cls: 'bare' },
      { k: 'label', s: sph ? 'c' : o2, p: [0, L + 0.15, 0], color: PAL.muted, cls: 'bare' },
    ]);
    S.headline(sph ? 'A spherical top: all three moments equal.' : pro ? `A prolate top: $I_a = ${fmt(rho, 2)}\\,I_b$, a football.` : `An oblate top: $I_c = ${fmt(rho, 2)}\\,I_a$, a frisbee.`);

    /* the ladder */
    const { ctx } = begin(lad);
    const sh = 1 / rho - 1, E = (J, K) => J * (J + 1) + K * K * sh;
    topline(ctx, sph ? 'Every $J$ level is one level, whatever $K$: $(2J + 1)^2$ states.'
      : `Each $J$ splits by $K^2$, ${pro ? 'upward' : 'downward'}: $K = ${k ? '\\pm' + k : 0}$ of $J = 3$ sits at ${fmt(E(3, k), 2)} in units of ħ²/2I.`);
    const box = { l: 150, r: 1340, t: 90, b: 340 };
    const ax = axes(ctx, box, [0, 4], [0, 24], { nx: 0, ny: 4, yl: 'energy (ħ²/2I)', yc: ce });
    hits.length = 0;
    for (let J = 0; J <= 3; J++) {
      const x0 = ax.X(J + 0.1), x1 = ax.X(J + 0.9);
      text(ctx, `J = ${J}`, (x0 + x1) / 2, box.b + 26, PAL.ink, { size: 20, align: 'center' });
      line(ctx, x0, ax.Y(J * (J + 1)), x1, ax.Y(J * (J + 1)), alpha(PAL.ink, 0.35), 2, [10, 10]);
      for (let K = 0; K <= J; K++) {
        const e = E(J, K), on = K === k;
        line(ctx, x0 + 20, ax.Y(e), x1 - 20, ax.Y(e), alpha(ce, on ? 1 : 0.55), on ? 5 : 3);
        hits.push({ x: (x0 + x1) / 2, y: ax.Y(e), r: 10, name: sph ? `J = ${J}: every K from −${J} to ${J}, ${(2 * J + 1) ** 2} states` : `J = ${J}, K = ${K ? '±' + K : 0}: E = ${fmt(e, 2)} ħ²/2I, ${K ? 2 * (2 * J + 1) : 2 * J + 1} states` });
      }
      if (J === 3 && !sph) for (let K = 0; K <= 3; K++) text(ctx, K ? `K = ±${K}` : 'K = 0', x1 - 8, ax.Y(E(3, K)) - 14, K === k ? ce : PAL.muted, { size: 17, align: 'right' });
    }
    text(ctx, 'dashed: the spherical top, J(J + 1)', box.l + 10, box.t - 14, PAL.muted, { size: 17 });
    const Iu = pro ? '\\kIa' : '\\kIc', g = sph ? (2 * 3 + 1) ** 2 : k ? 2 * 7 : 7;
    tex(d.readout, sph
      ? `E(J,K,M) = \\dfrac{\\hbar^2 J(J+1)}{2I} \\\\ E(3,K,M) = 12\\,\\dfrac{\\hbar^2}{2I} \\\\ \\small (2J+1)^2 = ${g}\\ \\text{states}`
      : `E(J,K,M) = \\dfrac{\\hbar^2 J(J+1)}{2I} + \\hbar^2 K^2 \\left( \\dfrac{1}{2${Iu}} - \\dfrac{1}{2I} \\right) \\\\ E(3,${k ? '\\pm' + k : 0},M) = \\dfrac{\\hbar^2}{2I}\\left[12 + ${k * k}\\left(\\dfrac{1}{${fmt(rho, 2)}} - 1\\right)\\right] = ${fmt(E(3, k), 2)}\\,\\dfrac{\\hbar^2}{2I} \\\\ \\small ${k ? '2(2J+1)' : '2J+1'} = ${g}\\ \\text{states}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
