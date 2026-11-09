/* Figures for section 25.6 The Debye-Hückel Theory. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['25.6'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, shade, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* ---------- the book's numbers ----------
   kappa = B sqrt(I) with B = 3.29 nm^-1 (I in mol/kg), so 1/kappa = 0.304 nm / sqrt(I).
   The limiting law's ln gamma = -|z+z-| e^2 kappa / (8 pi eps_r eps_0 k T); the length e^2/(8 pi eps_r eps_0 k T)
   is fixed by the book's A and B: 2.303 A / B = 2.303 (0.51) / 3.29 nm^-1 = 0.357 nm. */
const BK = 3.29, LEN = 2.303 * 0.51 / BK;

/* a seeded generator, so a setting always replays the same motion and the transport can scrub it */
function rng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

/* ---------- Figure 25.6.1: the ionic atmosphere ----------
   Moving. A slice through the solution 24 nm across (fixed scale, 12 nm from the central cation to each edge).
   Fourteen counter-ions and eight co-ions jiggle by Metropolis steps: the counter-ions' density in the slice
   follows exp(-kappa r), the co-ions' is thinned near the centre by the same factor, and no two ions come
   closer than 0.75 nm. The trajectory is computed once per setting from a fixed seed, so the motion is a
   function of the transport's time. Beside it, the share of the central charge the atmosphere cancels within
   r, 1 - (1 + kappa r) e^(-kappa r), on a fixed 0 to 12 nm axis. The point: the cloud spreads as the
   solution is diluted (1/kappa from 0.96 nm at 0.1 mol/kg to 9.6 nm at 0.001 mol/kg for a 1:1 salt). */
(function () {
  const d = sim('sim-ionic-atmosphere', 640);
  const RUN = 8, FR = 240, HALF = 12, NC = 14, NO = 8, HARD = 0.75;
  const cy = F.cycle(() => RUN, 0.6);
  let traj = null;
  const reset = () => { traj = null; cy.reset(); };
  const S = F.choice(d.controls, { label: '\\text{salt}', key: 'salt', aria: 'type of salt',
    options: [{ value: '1', label: '1:1 (NaCl)' }, { value: '2', label: '2:2 (ZnSO₄)' }], value: '1', onInput: reset });
  const M = ctl(d.controls, { label: 'm', cls: '', key: 'molality', min: -3, max: -1, step: 0.01, value: -2, unit: '', dec: 0,
    fmt: (lg) => `${fmt(Math.pow(10, lg), lg < -2.005 ? 4 : 3)} mol/kg`, detents: [-3, -2, -1], snap: true, onInput: reset });
  const hits = [];
  F.hover(d.stage, () => hits);
  const state = () => { const z = +S.value, m = Math.pow(10, M.v), I = 0.5 * (m * z * z + m * z * z), k = BK * Math.sqrt(I); return { z, m, I, k }; };
  /* the trajectory: frames of [x, y] in nm, counter-ions first */
  function build(k) {
    const R = rng(Math.round(k * 1e5) + 7), n = NC + NO;
    const w = (i, x, y) => { const e = Math.exp(-k * Math.hypot(x, y)); return i < NC ? e + 0.03 : 1 - 0.85 * e; };
    const ok = (p, i, x, y) => {
      if (Math.abs(x) > HALF - 0.4 || Math.abs(y) > HALF - 0.4 || Math.hypot(x, y) < HARD) return false;
      for (let j = 0; j < p.length; j++) if (j !== i && p[j] && Math.hypot(p[j][0] - x, p[j][1] - y) < HARD) return false;
      return true;
    };
    const p = new Array(n).fill(null);
    for (let i = 0; i < n; i++) {
      for (let tries = 0; tries < 20000; tries++) {
        const x = (2 * R() - 1) * HALF, y = (2 * R() - 1) * HALF;
        if (R() * 1.03 < w(i, x, y) && ok(p, i, x, y)) { p[i] = [x, y]; break; }
      }
      if (!p[i]) p[i] = [HALF - 1 - i * 0.8, -HALF + 1];
    }
    const frames = [p.map((q) => q.slice())];
    const step = Math.min(0.9, 0.25 + 0.35 / k);
    for (let f = 1; f < FR; f++) {
      for (let i = 0; i < n; i++) {
        const [x, y] = p[i], nx = x + (2 * R() - 1) * step, ny = y + (2 * R() - 1) * step;
        if (ok(p, i, nx, ny) && R() < w(i, nx, ny) / w(i, x, y)) p[i] = [nx, ny];
      }
      frames.push(p.map((q) => q.slice()));
    }
    return frames;
  }
  function draw() {
    const { ctx, W } = begin(d.c);
    const { z, m, I, k } = state(), deb = 1 / k, lng = -z * z * LEN * k, g = Math.exp(lng);
    if (!traj) traj = build(k);
    const ion = z === 1 ? { cat: 'Na', an: 'Cl', catN: 'Na⁺', anN: 'Cl⁻' } : { cat: 'Zn', an: 'S', catN: 'Zn²⁺', anN: 'SO₄²⁻' };
    const salt = z === 1 ? 'NaCl' : 'ZnSO₄';
    topline(ctx, `In ${fmt(m, m < 0.00995 ? 4 : 3)} mol/kg ${salt} the atmosphere's size is $1/\\kappa = ${fmt(deb, deb < 1 ? 2 : 1)}$ nm and $\\gamma_\\pm = ${fmt(g, 3)}$.`);
    /* the slice */
    const cx = 330, cyy = 360, PX = 250 / HALF, fr = { l: cx - 250, r: cx + 250, t: cyy - 250, b: cyy + 250 };
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2; ctx.strokeRect(fr.l, fr.t, fr.r - fr.l, fr.b - fr.t); ctx.restore();
    /* the circle of radius 1/kappa, clipped to the slice */
    ctx.save(); ctx.beginPath(); ctx.rect(fr.l, fr.t, fr.r - fr.l, fr.b - fr.t); ctx.clip();
    ctx.strokeStyle = C('length'); ctx.lineWidth = 3; ctx.setLineDash([10, 10]); ctx.beginPath(); ctx.arc(cx, cyy, deb * PX, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    /* the ions, between the two frames either side of the clock */
    const t = Math.min(cy.now(), RUN) / RUN * (FR - 1), i0 = Math.floor(t), i1 = Math.min(FR - 1, i0 + 1), fk = t - i0;
    const A = traj[i0], Bf = traj[i1], R9 = 8;
    hits.length = 0;
    for (let i = 0; i < A.length; i++) {
      const x = A[i][0] + (Bf[i][0] - A[i][0]) * fk, y = A[i][1] + (Bf[i][1] - A[i][1]) * fk, X = cx + x * PX, Y = cyy - y * PX;
      const counter = i < NC;
      dot(ctx, X, Y, F.el(counter ? ion.an : ion.cat), true, R9);
      hits.push({ x: X, y: Y, r: 11, name: counter ? `${ion.anN}, of the atmosphere` : `${ion.catN}` });
    }
    dot(ctx, cx, cyy, F.el(ion.cat), true, 13);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(cx, cyy, 13, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    hits.push({ x: cx, y: cyy, r: 16, name: `the central ion, ${ion.catN}` });
    /* the radius label, inside the slice where the circle fits, else at its edge */
    const rl = Math.min(deb * PX, 235), ang = -Math.PI / 4;
    text(ctx, `1/κ = ${fmt(deb, deb < 1 ? 2 : 1)} nm`, Math.min(cx + rl * Math.cos(ang) + 14, fr.r - 150), Math.max(cyy + rl * Math.sin(ang) - 10, fr.t + 30), C('length'), { size: 22, weight: 600, bg: true });
    /* scale bar */
    const sx = fr.l + 20, sy = fr.b - 24;
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.fillRect(sx - 8, sy - 30, 5 * PX + 16, 46); ctx.restore();
    line(ctx, sx, sy, sx + 5 * PX, sy, PAL.ink, 4);
    text(ctx, '5 nm', sx + 2.5 * PX, sy - 10, PAL.ink, { size: 20, align: 'center' });
    F.legend(ctx, { l: fr.l, r: fr.r, t: fr.b + 8, b: fr.b + 58 }, [
      { s: `${ion.catN} cation`, kind: 'swatch', color: F.el(ion.cat) },
      { s: `${ion.anN} anion`, kind: 'swatch', color: F.el(ion.an) },
    ], { corner: 'br', row: true, size: 20, panel: false });
    /* the graph: share of the central charge cancelled within r (y fixed 0 to 1, x fixed 0 to 12 nm) */
    const box = { l: 720, r: W - 50, t: 130, b: 540 };
    const ax = axes(ctx, box, [0, HALF], [0, 1], { nx: 6, ny: 4, xl: 'distance from the central ion r (nm)', yl: 'share of its charge cancelled', xc: C('length') });
    const Q = (r) => 1 - (1 + k * r) * Math.exp(-k * r);
    shade(ctx, ax, Q, 0, 0, HALF, C('length'), { alpha: 0.12 });
    plot(ctx, ax, Q, PAL.ink, { w: 5 });
    if (deb <= HALF) {
      line(ctx, ax.X(deb), ax.Y(Q(deb)), ax.X(deb), box.b, alpha(C('length'), 0.9), 3, [4, 8]);
      dot(ctx, ax.X(deb), ax.Y(Q(deb)), C('length'), true, 10);
      hits.push({ x: ax.X(deb), y: ax.Y(Q(deb)), r: 14, name: `r = 1/κ: ${fmt(100 * Q(deb), 0)}% of the central charge cancelled` });
    }
    const half = 1.678 / k;
    if (half <= HALF) hits.push({ x: ax.X(half), y: ax.Y(0.5), r: 14, name: `half the central charge is cancelled within ${fmt(half, 1)} nm` });
    const zz = z * z;
    tex(d.readout, `\\kIion = \\tfrac{1}{2}\\sum m_i z_i^2 = \\tfrac{1}{2}\\left(${fmt(m, 4)}\\cdot ${z}^2 + ${fmt(m, 4)}\\cdot ${z}^2\\right) = ${fmt(I, 4)}\\ \\text{mol/kg} \\\\ \\kappa = (3.29\\ \\text{nm}^{-1})\\sqrt{${fmt(I, 4)}} = ${fmt(k, 3)}\\ \\text{nm}^{-1} \\\\ \\ln\\gamma_\\pm = -\\dfrac{|\\kqplus\\kqminus|\\,\\kappa}{8\\pi\\varepsilon_r\\varepsilon_0 k\\kT} = -${zz}\\,(0.357\\ \\text{nm})(${fmt(k, 3)}\\ \\text{nm}^{-1}) = ${fmt(lng, 3)}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
