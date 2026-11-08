/* Figures for section 9.8 Molecular-Orbital Theory Does not Predict a Stable Diatomic Helium Molecule. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.8'] = function (root, F) {
const { tex, C, PAL, alpha, register, begin, line, text, arrow, topline, axes, shade, fmt, dot } = F;

/* ---------- the level-diagram style of 9.7: ink bars, faint dashed ties, electrons in their convention colour ---------- */
const BAR = 130;
const bar = (ctx, x, y, w = BAR) => line(ctx, x - w / 2, y, x + w / 2, y, PAL.ink, 4);
const tie = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.35), 2, [4, 8]);
function spins(ctx, x, y, s, col) {
  const L = 44;
  [...s].forEach((t, i) => {
    const dx = s.length === 2 ? (i ? 13 : -13) : 0;
    if (t === 'u') arrow(ctx, x + dx, y + 4, x + dx, y - L, col, 4); else arrow(ctx, x + dx, y - L, x + dx, y + 4, col, 4);
  });
}

/* =====================================================================
   FIGURE 9.8.1 + Example 9.8.1's two diagrams: the 1s diagram filled.
   Still: a choice of species, nothing in the idea has a time. H2+ (part
   (a), opening), H2, He2(2+) (the example), He2+ (part (b)) and He2 (part
   (c)). Unlike the book's symmetric sketch, the levels stand at H2+'s
   orbital shifts from 9.4's closed forms at R = 2.49 a0 = 132 pm, the
   minimum of Delta E+: Delta E+ = -0.0648 E_h and Delta E- = +0.2108 E_h,
   drawn at 900 units per hartree, so sigma*_1s rises 3.3 times as far as
   sigma_1s falls. The atoms' 1s levels at the sides hold what each atom
   or ion brings. Exercise 9.8.1's H2(2-) is not a choice: it would show
   the answer. Readout: the bond order (9.8.1), and the electrons' net
   shift counted with those two numbers, which is why He2 does not hold.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-1s-diagram', 520);
  const DP = -0.0648, DM = 0.2108, PX = 900;
  const SP = {
    h2p: { label: 'H₂⁺', t: 'H_2^+', L: ['u', ''], aL: ['H', 'H⁺'], b: 'u', a: '' },
    h2: { label: 'H₂', t: 'H_2', L: ['u', 'u'], aL: ['H', 'H'], b: 'ud', a: '' },
    he22: { label: 'He₂²⁺', t: 'He_2^{2+}', L: ['u', 'u'], aL: ['He⁺', 'He⁺'], b: 'ud', a: '' },
    he2p: { label: 'He₂⁺', t: 'He_2^+', L: ['ud', 'u'], aL: ['He', 'He⁺'], b: 'ud', a: 'u' },
    he2: { label: 'He₂', t: 'He_2', L: ['ud', 'ud'], aL: ['He', 'He'], b: 'ud', a: 'ud' },
  };
  const K = F.choice(d.controls, { label: '\\text{species}', key: 'species', options: Object.entries(SP).map(([value, s]) => ({ value, label: s.label })), value: 'h2p', aria: 'the species whose electrons fill the 1s diagram' });
  const hits = [];
  F.hover(d.stage, () => hits);
  const half = (n) => (n % 2 ? `${n}/2` : String(n / 2));
  const halfTex = (n) => (n % 2 ? `\\tfrac{${n}}{2}` : String(n / 2));
  function draw() {
    const { ctx } = begin(d.c);
    const s = SP[K.value], ee = F.el('e-'), ce = C('energy');
    const xL = 320, xM = 700, xR = 1080, y0 = 330, yB = y0 - DP * PX, yX = y0 - DM * PX;
    const nb = s.b.length, na = s.a.length, net = nb * DP + na * DM;
    topline(ctx, `$\\mathrm{${s.t}}$: bond order ${half(nb - na)}; its electrons ${net < 0 ? 'lose' : 'gain'} ${fmt(Math.abs(net), 3)} $E_h$ against the separated atoms.`);
    arrow(ctx, 120, 470, 120, 110, ce, 4);
    text(ctx, 'E', 94, 290, ce, { size: 30, weight: 600, align: 'center', base: 'middle' });
    bar(ctx, xL, y0); bar(ctx, xR, y0); bar(ctx, xM, yB); bar(ctx, xM, yX);
    tie(ctx, xL + BAR / 2, y0, xM - BAR / 2, yB); tie(ctx, xL + BAR / 2, y0, xM - BAR / 2, yX);
    tie(ctx, xR - BAR / 2, y0, xM + BAR / 2, yB); tie(ctx, xR - BAR / 2, y0, xM + BAR / 2, yX);
    /* the two shifts, bracketed from the 1s level */
    const bx = xM + 110;
    line(ctx, xM + BAR / 2 + 6, y0, bx + 10, y0, alpha(PAL.ink, 0.35), 2, [4, 8]);
    arrow(ctx, bx, y0, bx, yB, ce, 3); arrow(ctx, bx, y0, bx, yX, ce, 3);
    text(ctx, `ΔE₊ = ${fmt(DP, 3)} E_h`, bx + 14, yB + 26, ce, { size: 22, weight: 600, base: 'middle', bg: PAL.panel });
    text(ctx, `ΔE₋ = +${fmt(DM, 3)} E_h`, bx + 14, (y0 + yX) / 2, ce, { size: 22, weight: 600, base: 'middle', bg: PAL.panel });
    spins(ctx, xL, y0, s.L[0], ee); spins(ctx, xR, y0, s.L[1], ee); spins(ctx, xM - 50, yB, s.b, ee); spins(ctx, xM - 50, yX, s.a, ee);
    const lab = (t, x, y) => text(ctx, t, x, y + 36, PAL.ink, { size: 30, align: 'center' });
    lab('1s', xL, y0); lab('1s', xR, y0); lab('σ_{1s}', xM - 10, yB); lab('σ*_{1s}', xM - 10, yX);
    text(ctx, s.aL[0], xL, 480, PAL.muted, { size: 26, align: 'center' });
    text(ctx, s.aL[1], xR, 480, PAL.muted, { size: 26, align: 'center' });
    text(ctx, s.label, xM, 480, PAL.muted, { size: 26, align: 'center' });
    hits.length = 0;
    hits.push({ x: xM - 50, y: yB - 20, r: 32, name: `the bonding orbital σ1s: ${nb} electron${nb === 1 ? '' : 's'}` });
    hits.push({ x: xM - 50, y: yX - 20, r: 32, name: `the antibonding orbital σ*1s: ${na ? na + ' electron' + (na === 1 ? '' : 's') : 'empty'}` });
    hits.push({ x: xL, y: y0 - 20, r: 32, name: `the 1s orbital of ${s.aL[0]}` });
    hits.push({ x: xR, y: y0 - 20, r: 32, name: `the 1s orbital of ${s.aL[1]}` });
    const sgn = (v) => (v < 0 ? `-${fmt(-v, 3)}` : `+${fmt(v, 3)}`);
    tex(d.readout, `\\text{bond order} = \\dfrac{${nb} - ${na}}{2} = ${halfTex(nb - na)} \\\\ \\small ${nb}\\,\\Delta E_+ + ${na}\\,\\Delta E_- = ${nb}(${fmt(DP, 3)}) + ${na}(${fmt(DM, 3)}) = ${sgn(net)}\\ E_h`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.8.2: the He2 van der Waals potential and its one bound state.
   Still: a choice of isotopes, nothing in the idea has a time. The book's
   plot (INSPIRE, after Przybytek 2010; licence not stated) is not
   shipped; this figure solves the same problem on the LM2M2 potential of
   Aziz and Slaman (J. Chem. Phys. 94, 8047, 1991): eps/k = 10.97 K,
   rm = 2.9695 A, its well, damped dispersion and small bump, in kelvin
   and angstroms. The radial equation u'' = (m/hbar^2)(V - E)u, hbar^2/u k
   = 48.508 K A^2, is integrated by Numerov from 1.3 A (u = 0) to 800 A in
   0.01 A steps; the bound energy is bisected on the node count (50
   halvings). For 4He2 (mu = 2.0013 u) this gives E = -1.31 mK, the outer
   turning point 14.1 A, <R> = 51.9 A and 81 % of the density beyond the
   turning point (LM2M2's published -1.31 mK and 52 A; measured: 1.1 mK,
   52 A, Grisenti et al. 2000). 3He4He (mu = 1.7200 u) has no node at
   E -> 0, so no bound state. Frame: R on a log axis 2 to 500 A, as the
   book's; V from -12 to 12 K on the left; |u|^2 scaled to a peak of 10 on
   the same box, its own name at the right. The density beyond the
   turning point is shaded.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-he2-potential', 560);
  const EPS = 10.97, RM = 2.9695, AS = 1.89635353e5, AL = 10.70203539, BE = -1.90740649;
  const C6 = 1.34687065, C8 = 0.41308398, C10 = 0.17060159, DD = 1.4088, AA = 0.0026, X1 = 1.003535949, X2 = 1.454790369;
  const V = (R) => {
    const x = R / RM, Fd = x < DD ? Math.exp(-((DD / x - 1) ** 2)) : 1;
    const va = x >= X1 && x <= X2 ? AA * (Math.sin(2 * Math.PI * (x - X1) / (X2 - X1) - Math.PI / 2) + 1) : 0;
    return EPS * (AS * Math.exp(-AL * x + BE * x * x) - Fd * (C6 / x ** 6 + C8 / x ** 8 + C10 / x ** 10) + va);
  };
  const HB = 48.508, H = 0.01, R0 = 1.3, RMAX = 800, N = Math.round((RMAX - R0) / H);
  const RG = new Float64Array(N + 1), VG = new Float64Array(N + 1);
  for (let i = 0; i <= N; i++) { RG[i] = R0 + i * H; VG[i] = V(RG[i]); }
  /* the solution at energy E (K) for reduced mass mu (u): its nodes, and the values if asked */
  function shoot(E, mu, y) {
    const c = H * H / 12, kf = 2 * mu / HB;
    let y0 = 0, y1 = 1e-20, n = 0;
    if (y) { y[0] = 0; y[1] = y1; }
    for (let i = 1; i < N; i++) {
      const km = (E - VG[i - 1]) * kf, k0 = (E - VG[i]) * kf, kp = (E - VG[i + 1]) * kf;
      const y2 = (2 * y1 * (1 - 5 * c * k0) - y0 * (1 + c * km)) / (1 + c * kp);
      if (y2 * y1 < 0) n++;
      if (y) y[i + 1] = y2;
      if (Math.abs(y2) > 1e250) { if (y) for (let j = i + 2; j <= N; j++) y[j] = 0; break; }
      y0 = y1; y1 = y2;
    }
    return n;
  }
  function solve(mu) {
    if (shoot(-1e-9, mu) === 0) return null;
    let lo = -1, hi = -1e-9;
    for (let it = 0; it < 50; it++) { const m = (lo + hi) / 2; if (shoot(m, mu) >= 1) hi = m; else lo = m; }
    const E = lo, y = new Float64Array(N + 1); shoot(E, mu, y);
    let it = N; while (it > 0 && VG[it] >= E) it--;
    while (it < N && VG[it] < E) it++;
    /* the outer turning point is the last R where V < E; the tail is cut where |u| is least beyond it */
    let iT = N; for (let i = N; i > 0; i--) if (VG[i] < E) { iT = i; break; }
    let cut = iT, best = Infinity; for (let i = iT; i <= N; i++) { const a = Math.abs(y[i]); if (a > 0 && a < best) { best = a; cut = i; } }
    const w = new Float64Array(N + 1); let tot = 0;
    for (let i = 0; i < cut; i++) { w[i] = y[i] * y[i]; tot += w[i] * H; }
    let mean = 0, out = 0, peak = 0;
    for (let i = 0; i < cut; i++) { w[i] /= tot; mean += w[i] * RG[i] * H; if (i > iT) out += w[i] * H; peak = Math.max(peak, w[i]); }
    return { E, Rt: RG[iT], mean, out, w, peak };
  }
  const ISO = { 44: { label: '⁴He₂', t: '{}^4\\mathrm{He}_2', mu: 4.002602 / 2 }, 34: { label: '³He⁴He', t: '{}^3\\mathrm{He}{}^4\\mathrm{He}', mu: (3.01602932 * 4.002602) / (3.01602932 + 4.002602) } };
  const got = {};
  const K = F.choice(d.controls, { label: '\\text{isotopes}', key: 'isotopes', options: [{ value: '44', label: '⁴He₂' }, { value: '34', label: '³He⁴He' }], value: '44', aria: 'the pair of helium isotopes' });
  const hits = [];
  F.hover(d.stage, () => hits);
  const L0 = Math.log10(2), L1 = Math.log10(500);
  function draw() {
    const { ctx } = begin(d.c);
    const iso = ISO[K.value];
    if (!(K.value in got)) got[K.value] = solve(iso.mu);
    const s = got[K.value], ce = C('energy'), cl = C('length'), cp = C('probability-density');
    const box = { l: 150, r: 1210, t: 110, b: 470 };
    const ax = axes(ctx, box, [L0, L1], [-12, 12], { nx: 0, ny: 6, xl: 'distance between the atoms R (Å)', xc: cl, yl: 'potential energy V (K)', yc: ce });
    const X = (R) => ax.X(Math.log10(R));
    [2, 5, 10, 20, 50, 100, 200, 500].forEach((r) => { line(ctx, X(r), box.b, X(r), box.b + 8, PAL.ink, 2); text(ctx, String(r), X(r), box.b + 30, PAL.ink, { size: 17, align: 'center' }); });
    line(ctx, box.l, ax.Y(0), box.r, ax.Y(0), alpha(PAL.ink, 0.35), 2);
    hits.length = 0;
    if (s) {
      /* |u|^2 on its own scale, peak at 10 */
      const k = 10 / s.peak, at = (R) => { const i = Math.round((R - R0) / H); return i >= 0 && i <= N ? s.w[i] * k : 0; };
      const f = (lg) => at(10 ** lg);
      shade(ctx, ax, f, 0, Math.log10(s.Rt), L1, cp, { alpha: 0.22 });
      F.plot(ctx, ax, f, cp, { w: 4, x: [L0, L1] });
      text(ctx, '|ψ|² (arbitrary units)', X(30), ax.Y(f(Math.log10(30))) - 22, cp, { size: 22, weight: 600 });
      line(ctx, X(s.Rt), ax.Y(0), X(s.Rt), box.b, alpha(PAL.ink, 0.45), 2, [4, 8]);
      text(ctx, 'turning point', X(s.Rt) + 8, ax.Y(-9), PAL.ink, { size: 20 });
      dot(ctx, X(s.mean), ax.Y(0), cl, true, 9);
      text(ctx, '⟨R⟩', X(s.mean), ax.Y(0) + 30, cl, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
      hits.push({ x: X(s.Rt), y: ax.Y(-6), r: 16, name: `the classical turning point, R = ${fmt(s.Rt, 1)} Å, where V equals the bound energy` });
      hits.push({ x: X(s.mean), y: ax.Y(0), r: 16, name: `the mean separation ⟨R⟩ = ${fmt(s.mean, 1)} Å` });
      hits.push({ x: X(100), y: ax.Y(f(2)), r: 30, name: `${fmt(100 * s.out, 0)} % of the probability lies beyond the turning point` });
      line(ctx, box.l, ax.Y(s.E), box.r, ax.Y(s.E), alpha(ce, 0.9), 3, [10, 10]);
    }
    F.plot(ctx, ax, (lg) => V(10 ** lg), ce, { w: 5, x: [L0, L1] });
    text(ctx, 'V(R)', X(2.65), ax.Y(9), ce, { size: 22, weight: 600 });
    hits.push({ x: X(RM), y: ax.Y(-EPS), r: 16, name: `the bottom of the well, −${fmt(EPS, 2)} K at ${fmt(RM, 2)} Å` });
    if (s) {
      topline(ctx, `$${iso.t}$ is bound by ${fmt(-s.E * 1e3, 2)} mK in a well ${fmt(EPS, 0)} K deep; ${fmt(100 * s.out, 0)}% of its density lies beyond the turning point.`);
      tex(d.readout, `E = -${fmt(-s.E * 1e3, 2)}\\ \\text{mK} = -${fmt(-s.E * 8.314462e-3 * 1e5, 2)} \\times 10^{-5}\\ \\text{kJ/mol} \\\\ \\kR_{\\text{t}} = ${fmt(s.Rt, 1)}\\ \\text{Å} \\\\ \\langle \\kR \\rangle = ${fmt(s.mean, 1)}\\ \\text{Å} \\\\ \\small P(\\kR > \\kR_{\\text{t}}) = ${fmt(s.out, 2)}`);
    } else {
      topline(ctx, `$${iso.t}$ is lighter, and the same ${fmt(EPS, 0)} K well holds no bound level.`);
      tex(d.readout, `\\mu = ${fmt(iso.mu, 3)}\\ \\text{u}: \\ \\text{no bound level} \\\\ \\small \\mu(^4\\mathrm{He}_2) = ${fmt(ISO[44].mu, 3)}\\ \\text{u}`);
    }
  }
  register(d.fig, { update: () => {}, draw });
})();
};
