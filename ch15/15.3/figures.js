/* Figures for section 15.3 A Two-Level System Cannot Achieve a Population Inversion. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['15.3'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* a seeded random stream, so the atoms' histories are the same at every visit and the scrubber reaches exact states */
function rng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
/* a photon: a short wave packet centred on (x, y) running along the angle a */
function packet(ctx, x, y, a, color, len = 44) {
  const ux = Math.cos(a), uy = Math.sin(a), px = -uy, py = ux;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.beginPath();
  for (let i = 0; i <= 32; i++) {
    const s = -len / 2 + len * i / 32, env = Math.sin(Math.PI * i / 32), w = 7 * env * Math.sin(2 * Math.PI * 3 * i / 32);
    const X = x + ux * s + px * w, Y = y + uy * s + py * w;
    if (i) ctx.lineTo(X, Y); else ctx.moveTo(X, Y);
  }
  ctx.stroke(); ctx.restore();
}

/* ---------- Figure 15.3.1: two-level atoms under a pump ----------
   Model: (15.2.2) with g1 = g2, so B12 = B21; time in units of 1/A21 and the pump W = B12 rho_nu in units of A21.
   dn2/dt = W(1 - n2) - (W + 1) n2, from n2 = 0 (thermal populations of an optical gap, essentially all below), so
   n2(t) = W/(2W + 1) (1 - exp(-(2W + 1) t)). The strip: 20 atoms run by the same rates (Gillespie, seeded), each
   event drawn as photons in or out. Graph: N1/N and N2/N against t, 0 to 4 time units (the slowest pump,
   W = 0.01, has relaxed by 4); y 0 to 1 with the line N2 = N1 at one half. The point: N2 creeps toward half
   and never passes it, however strong the pump. */
(function () {
  const d = sim('sim-two-level', 660);
  const T = 4, NA = 20, FLASH = 0.09;
  const cy = F.cycle(() => T, 1.2);
  const lgW = ctl(d.controls, { label: 'B_{12}\\krhonu', cls: '', key: 'pump', min: -2, max: 2, step: 0.01, value: Math.log10(3), unit: '',
    fmt: (lg) => `${fmt(10 ** lg, 10 ** lg < 0.1 ? 2 : 1)} A₂₁`, onInput: () => { build(); cy.reset(); } });
  const hits = [];
  F.hover(d.stage, () => hits);
  let atoms = [];
  /* each atom's history: event times, kinds (abs, stim, spont), and its state after each event */
  function build() {
    const W = 10 ** lgW.v, r = rng(1503);
    atoms = [];
    for (let i = 0; i < NA; i++) {
      const ev = []; let t = 0, up = false;
      for (;;) {
        const rate = up ? W + 1 : W;
        t += -Math.log(1 - r()) / rate;
        if (t > T) break;
        let kind = 'abs';
        if (up) kind = r() < W / (W + 1) ? 'stim' : 'spont';
        up = !up;
        ev.push({ t, kind, up, a: r() });
        if (ev.length > 4000) break;
      }
      atoms.push(ev);
    }
  }
  build();
  const upAt = (ev, t) => { let lo = 0, hi = ev.length; while (lo < hi) { const m = (lo + hi) >> 1; if (ev[m].t <= t) lo = m + 1; else hi = m; } return lo ? ev[lo - 1].up : false; };
  function draw() {
    const { ctx, W: CW } = begin(d.c);
    const W = 10 ** lgW.v, t = Math.min(cy.now(), T), k = 2 * W + 1, ninf = W / k;
    const n2 = (s) => ninf * (1 - Math.exp(-k * s)), n1 = (s) => 1 - n2(s);
    const cPh = C('frequency'), c1 = F.cat(0), c2 = F.cat(1);
    topline(ctx, `With $B_{12}\\krhonu = ${fmt(W, W < 0.1 ? 2 : 1)}\\,A_{21}$ the upper level heads for ${fmt(100 * ninf, 1)}% of the atoms, short of half.`);
    /* the strip of atoms: two levels each, the electron on the one it occupies */
    const x0 = 180, x1 = CW - 90, yU = 138, yL = 212, step = (x1 - x0) / (NA - 1);
    const thin = Math.max(1, Math.ceil(W / 6));
    let above = 0;
    text(ctx, 'upper', x0 - 70, yU, PAL.muted, { size: 20, align: 'right' });
    text(ctx, 'ground', x0 - 70, yL, PAL.muted, { size: 20, align: 'right' });
    atoms.forEach((ev, i) => {
      const x = x0 + i * step, up = upAt(ev, t);
      if (up) above++;
      line(ctx, x - 20, yU, x + 20, yU, alpha(PAL.ink, 0.55), 3);
      line(ctx, x - 20, yL, x + 20, yL, alpha(PAL.ink, 0.55), 3);
      dot(ctx, x, up ? yU : yL, up ? c2 : c1, true, 10);
      /* the photons of the events near now: a pump photon falls in before an absorption or a stimulated emission,
         two photons leave together after a stimulated one, one leaves in any direction after a spontaneous one */
      let lo = 0, hi = ev.length; while (lo < hi) { const m = (lo + hi) >> 1; if (ev[m].t < t - FLASH) lo = m + 1; else hi = m; }
      for (let j = lo; j < ev.length && ev[j].t <= t + FLASH; j++) {
        if (j % thin) continue;
        const e = ev[j], u = (t - e.t) / FLASH;
        if (e.kind !== 'spont' && u < 0) packet(ctx, x - 20 + 90 * u, yU - 42, 0, cPh);
        if (u >= 0 && u <= 1) {
          if (e.kind === 'stim') { packet(ctx, x + 20 + 90 * u, yU - 34, 0, cPh); packet(ctx, x + 20 + 90 * u, yU - 50, 0, cPh); }
          if (e.kind === 'spont') { const a = -Math.PI * (0.15 + 0.7 * e.a); packet(ctx, x + Math.cos(a) * 70 * u, yU + Math.sin(a) * 70 * u - 10, a, alpha(cPh, 0.8)); }
        }
      }
    });
    hits.length = 0;
    hits.push({ x: x0, y: yU, r: 20, name: 'an atom in the upper level' }, { x: x0, y: yL, r: 20, name: 'an atom in the ground level' });
    /* the populations */
    const box = { l: 150, r: CW - 70, t: 300, b: 590 };
    const ax = axes(ctx, box, [0, T], [0, 1], { nx: 4, ny: 4, xl: 'time t (units of 1/A₂₁)', yl: 'share of the atoms', xc: C('time') });
    line(ctx, box.l, ax.Y(0.5), box.r, ax.Y(0.5), alpha(PAL.ink, 0.45), 3, [10, 10]);
    text(ctx, 'N₂ = N₁', box.l + 12, ax.Y(0.5) - 18, PAL.muted, { size: 20 });
    if (ninf < 0.46) line(ctx, box.l, ax.Y(ninf), box.r, ax.Y(ninf), alpha(c2, 0.6), 2, [4, 8]);
    plot(ctx, ax, n1, c1, { w: 5, x: [0, Math.max(1e-6, t)] });
    plot(ctx, ax, n2, c2, { w: 5, x: [0, Math.max(1e-6, t)] });
    dot(ctx, ax.X(t), ax.Y(n2(t)), c2, true, 9);
    dot(ctx, ax.X(t), ax.Y(above / NA), c2, false, 9);
    F.legend(ctx, ax, [{ s: 'N₁/N, ground', color: c1, w: 5 }, { s: 'N₂/N, upper', color: c2, w: 5 }, { s: 'atoms of the strip above', color: c2, kind: 'dot', hollow: true }], { corner: 'above' });
    hits.push({ x: ax.X(t), y: ax.Y(n2(t)), r: 14, name: `N₂/N = ${fmt(n2(t), 3)}` });
    hits.push({ x: box.l + 60, y: ax.Y(0.5), r: 14, name: 'half the atoms in each level, N₂ = N₁' });
    const a = n1(t), b = n2(t);
    tex(d.readout, `B_{12}\\krhonu(\\knuonetwo)N_1 = ${fmt(W, W < 0.1 ? 2 : 1)}\\,A_{21} \\times ${fmt(a, 3)}N = ${fmt(W * a, 3)}\\,A_{21}N \\\\ B_{21}\\krhonu(\\knutwoone)N_2 = ${fmt(W, W < 0.1 ? 2 : 1)}\\,A_{21} \\times ${fmt(b, 3)}N = ${fmt(W * b, 3)}\\,A_{21}N \\\\ \\dfrac{N_2}{N_1} \\to \\dfrac{B_{12}\\krhonu}{A_{21} + B_{12}\\krhonu} = ${fmt(W / (1 + W), 3)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.8), draw });
})();
};
