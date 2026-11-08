/* Figures for section 16.2 van der Waals and Redlich-Kwong Equations of State. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['16.2'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, topline, axes, plot, legend, hbracket, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* Table 16.2.1: a in L² bar/mol², b in L/mol */
const GAS = {
  'H2O': { s: 'H₂O', a: 5.536, b: 0.03049 },
  'N2': { s: 'N₂', a: 1.43, b: 0.03913 },
  'CH4': { s: 'CH₄', a: 2.283, b: 0.04278 },
  'C2H6': { s: 'C₂H₆', a: 5.562, b: 0.0638 },
};
const OPTS = Object.keys(GAS).map((k) => ({ value: k, label: GAS[k].s }));
const N0 = 6.022e23, RL = 0.08314;
/* sigma in Å from b = (2/3) pi sigma^3 N0, b in L/mol */
const sigOf = (b) => Math.cbrt(3 * b * 1e-3 / (2 * Math.PI * N0)) * 1e10;

/* ---------- Figure 16.2.1: the excluded sphere ----------
   A line of separations at 52 px/Å, sphere 1's centre fixed at x = 420. Each sphere is drawn with diameter sigma
   (radius sigma/2); the shaded circle of radius sigma round sphere 1's centre is the volume no other centre can enter.
   The reader drags sphere 2 (or its slider) toward sphere 1; the slider's floor is sigma, so the centre stops on the
   shaded circle. A gas choice sets sigma from Table 16.2.1's b: H2O 2.89, N2 3.14, CH4 3.24, C2H6 3.70 Å.
   Still: a distance of closest approach has no time in it. 2D: the book draws a cross-section. */
(function () {
  const d = sim('sim-excluded-volume', 560);
  const G = F.choice(d.controls, { label: '\\text{gas}', options: OPTS, value: 'H2O', onInput: () => { const s = sigOf(GAS[G.value].b); R.range({ min: +s.toFixed(2), max: 9, step: 0.01 }); R.mark([{ at: () => +sigOf(GAS[G.value].b).toFixed(2), label: 'contact' }]); } });
  const s0 = +sigOf(GAS.H2O.b).toFixed(2);
  const R = ctl(d.controls, { label: 'r', cls: 'length', min: s0, max: 9, step: 0.01, value: 6, unit: 'Å', dec: 2, specials: [{ at: () => +sigOf(GAS[G.value].b).toFixed(2), label: 'contact' }] });
  const K = 52, CX = 420, CY = 310;
  const ax = { box: { l: CX, r: CX + 9 * K, t: CY - 40, b: CY + 40 }, xr: [0, 9], yr: [-1, 1], X: (x) => CX + x * K, Y: (y) => CY - y * 40 };
  const P2 = F.drag(d, { x: R, y: 0 });
  const hov = []; F.hover(d.stage, () => hov);
  function draw() {
    const { ctx } = begin(d.c);
    const g = GAS[G.value], s = sigOf(g.b), r = Math.max(R.v, s), pair = 4 / 3 * Math.PI * s ** 3;
    const touching = r - s < 0.005;
    topline(ctx, touching ? `At contact the centres of two ${g.s} molecules are $\\ksigmahs = ${fmt(s, 2)}$ Å apart: the pair shuts out ${fmt(pair, 0)} Å³, half of it charged to each.`
      : `Sphere 2's centre is ${fmt(r, 2)} Å away; it can come no closer than $\\ksigmahs = ${fmt(s, 2)}$ Å.`);
    /* the excluded sphere, in cross-section */
    ctx.save(); ctx.fillStyle = alpha(C('volume'), 0.16); ctx.beginPath(); ctx.arc(CX, CY, s * K, 0, 2 * Math.PI); ctx.fill();
    ctx.strokeStyle = alpha(C('volume'), 0.85); ctx.lineWidth = 3; ctx.setLineDash([10, 10]); ctx.stroke(); ctx.restore();
    text(ctx, 'excluded sphere', CX, CY - s * K - 22, C('volume'), { size: 20, weight: 600, align: 'center' });
    /* the two spheres */
    const body = alpha(F.cat(0), 0.55), x2 = CX + r * K;
    ctx.save(); ctx.fillStyle = body; ctx.strokeStyle = F.cat(0); ctx.lineWidth = 3;
    [[CX, CY], [x2, CY]].forEach(([x, y]) => { ctx.beginPath(); ctx.arc(x, y, s * K / 2, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); });
    ctx.restore();
    dot(ctx, CX, CY, PAL.ink, true, 5);
    text(ctx, '1', CX, CY - 28, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, '2', x2, CY - 28, PAL.ink, { size: 22, weight: 600, align: 'center' });
    /* the separation of the centres */
    hbracket(ctx, CX, x2, CY + s * K + 30, C('length'), touching ? `σ = ${fmt(s, 2)} Å` : `r = ${fmt(r, 2)} Å`);
    P2.draw(ctx, ax, C('length'));
    hov.length = 0;
    hov.push({ x: CX, y: CY, r: s * K / 2, name: `sphere 1, a ${g.s} molecule of diameter ${fmt(s, 2)} Å` });
    hov.push({ x: x2, y: CY, r: s * K / 2, name: `sphere 2, a ${g.s} molecule; drag it` });
    hov.push({ x: CX, y: CY - s * K + 10, r: 14, name: `the excluded sphere, radius σ: ${fmt(pair, 1)} Å³ per pair` });
    tex(d.readout, `\\kbvdw = \\dfrac{2}{3}\\pi\\ksigmahs^3 N_0 \\\\ \\kbvdw = \\dfrac{2}{3}\\pi(${fmt(s, 2)}\\ \\text{Å})^3(6.022\\times10^{23}\\ \\text{mol}^{-1}) = ${g.b}\\ \\text{L/mol}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- unnumbered figure (416021): attraction at the wall ----------
   Left, a box of gas at 300 K seen side on, round(8 n/V) molecules drawn (2 to 40). A molecule within 90 px of the
   right wall and moving toward it is joined by faint lines to the molecules within 120 px behind it; each pull slows
   it in proportion to a, and an arrow on it (force) points back. Its kick on the wall is drawn when it strikes.
   Right, P against n/V at 300 K: x 0 to 5 mol/L, y 0 to 200 bar (C2H6's repulsive term at 5 mol/L is 183 bar):
   the ideal line dashed, the repulsive term nRT/(V - nb) dashed, (16.2.1) solid, and the gap a(n/V)² bracketed at the
   reader's density. Moving: the molecules and their pulls are the idea. A gas choice, not an a slider, since Table
   16.2.1 gives a and b in pairs. */
(function () {
  const d = sim('sim-wall-attraction', 600);
  const G = F.choice(d.controls, { label: '\\text{gas}', options: OPTS, value: 'H2O', onInput: () => {} });
  const Cn = ctl(d.controls, { label: '\\knmol/\\kV', cls: '', min: 0.2, max: 5, step: 0.1, value: 2, unit: 'mol/L', dec: 1, onInput: reset });
  const cy = cycle(() => Infinity, 0);
  const T = 300, BX = 70, BY = 170, S = 370, ZONE = 90, REACH = 120, SP = 150;
  let ps = [], kicks = [];
  const hov = []; F.hover(d.stage, () => hov);
  const gauss = () => { let u = 0; while (!u) u = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * Math.random()); };
  function reset() {
    const n = Math.max(2, Math.round(8 * Cn.v)); ps = [];
    for (let i = 0; i < n; i++) { const vx = gauss() * SP; ps.push({ x: Math.random() * S, y: Math.random() * S, vx, vy: gauss() * SP, v0: Math.abs(vx) || SP, pull: 0, nb: [] }); }
    kicks = [];
  }
  function step(dt) {
    const a = GAS[G.value].a;
    for (const p of ps) {
      p.nb = []; p.pull = 0;
      if (p.vx > 0 && S - p.x < ZONE) {
        for (const q of ps) if (q !== p && q.x < p.x && Math.hypot(q.x - p.x, q.y - p.y) < REACH) p.nb.push(q);
        p.pull = a * p.nb.length;
        p.vx = Math.max(0.5 * p.v0, p.vx - 9 * p.pull * dt);
      }
      p.x += p.vx * dt; p.y += p.vy * dt;
      if (p.x > S) { p.x = 2 * S - p.x; kicks.push({ y: p.y, v: p.vx, life: 0.5 }); p.vx = -p.v0; }
      if (p.x < 0) { p.x = -p.x; p.vx = p.v0 = Math.abs(p.vx); }
      if (p.y < 0) { p.y = -p.y; p.vy = Math.abs(p.vy); }
      if (p.y > S) { p.y = 2 * S - p.y; p.vy = -Math.abs(p.vy); }
    }
    kicks.forEach((k) => { k.life -= dt; }); kicks = kicks.filter((k) => k.life > 0);
  }
  reset();
  function draw() {
    const { ctx, W } = begin(d.c);
    const g = GAS[G.value], c = Cn.v;
    const rep = c * RL * T / (1 - c * g.b), att = g.a * c * c, P = rep - att, ideal = c * RL * T;
    topline(ctx, `At $\\knmol/\\kV = ${fmt(c, 1)}$ mol/L the pull of the neighbours takes ${fmt(att, 1)} bar off the ${fmt(rep, 1)} bar the impacts alone would give ${g.s}.`);
    /* the box */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.strokeRect(BX, BY, S, S); ctx.restore();
    line(ctx, BX + S, BY, BX + S, BY + S, C('force'), 6);
    const col = F.cat(0);
    for (const p of ps) for (const q of p.nb) line(ctx, BX + p.x, BY + S - p.y, BX + q.x, BY + S - q.y, alpha(C('force'), 0.35), 2);
    for (const p of ps) {
      dot(ctx, BX + p.x, BY + S - p.y, col, true, 7);
      if (p.pull > 0) arrow(ctx, BX + p.x - 9, BY + S - p.y, BX + p.x - 9 - Math.min(70, 3.5 * p.pull), BY + S - p.y, C('force'), 3);
    }
    for (const k of kicks) { ctx.save(); ctx.globalAlpha = Math.max(0, k.life / 0.5); arrow(ctx, BX + S + 4, BY + S - k.y, BX + S + 4 + Math.min(80, 0.22 * k.v), BY + S - k.y, C('force'), 4); ctx.restore(); }
    hov.length = 0;
    const pulled = ps.find((p) => p.pull > 0);
    if (pulled) hov.push({ x: BX + pulled.x, y: BY + S - pulled.y, r: 14, name: `a molecule near the wall, pulled back by ${pulled.nb.length} neighbours` });
    hov.push({ x: BX + S, y: BY + S / 2, r: 18, name: 'the wall, which feels the impacts' });
    /* the graph */
    const box = { l: 620, r: W - 50, t: 150, b: 490 };
    const ax = axes(ctx, box, [0, 5], [0, 200], { nx: 5, ny: 4, xl: 'n/V (mol/L)', yl: 'pressure P (bar)', xc: PAL.ink, yc: C('pressure') });
    const fRep = (x) => x * RL * T / (1 - x * g.b), fP = (x) => fRep(x) - g.a * x * x;
    plot(ctx, ax, (x) => x * RL * T, alpha(PAL.ink, 0.55), { w: 3, dash: [10, 10] });
    plot(ctx, ax, fRep, alpha(C('pressure'), 0.6), { w: 3, dash: [10, 10] });
    plot(ctx, ax, fP, C('pressure'), { w: 5 });
    line(ctx, ax.X(c), ax.Y(rep), ax.X(c), ax.Y(P), C('pressure'), 3, [4, 8]);
    text(ctx, 'an²/V²', ax.X(c) + (c > 3 ? -10 : 10), ax.Y((rep + P) / 2), C('pressure'), { size: 20, weight: 600, bg: PAL.panel, align: c > 3 ? 'right' : 'left' });
    dot(ctx, ax.X(c), ax.Y(P), C('pressure'), true, 9);
    dot(ctx, ax.X(c), ax.Y(rep), C('pressure'), false, 8);
    legend(ctx, ax, [{ s: 'ideal, nRT/V', color: alpha(PAL.ink, 0.55), w: 3, dash: [10, 10] }, { s: 'impacts alone, nRT/(V − nb)', color: alpha(C('pressure'), 0.6), w: 3, dash: [10, 10] }, { s: 'van der Waals', color: C('pressure'), w: 5 }], { corner: 'tl' });
    hov.push({ x: ax.X(c), y: ax.Y(ideal), r: 12, name: `the ideal gas at this density: ${fmt(ideal, 1)} bar` });
    tex(d.readout, `\\kP = \\dfrac{\\kR\\kT}{\\kV/\\knmol - \\kbvdw} - \\ka\\left(\\dfrac{\\knmol}{\\kV}\\right)^2 \\\\ \\kP = \\dfrac{(0.08314)(300\\ \\text{K})}{${fmt(1 / c, 3)} - ${g.b}} - (${g.a})(${fmt(c, 1)})^2 = ${fmt(rep, 1)} - ${fmt(att, 1)} = ${fmt(P, 1)}\\ \\text{bar}`);
  }
  register(d.fig, { update: (dt) => { cy.step(dt, () => 1); step(Math.min(dt, 0.05)); }, draw });
})();
};
