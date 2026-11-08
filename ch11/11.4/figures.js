/* Figures for section 11.4 Orbital Polarization and Diffuse Terms in Basis Sets. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.4'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, shade, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* the other sign of psi: the wavefunction hue a clear step toward whichever of ink and ground lies farther
   from it in lightness, so the two tones part on either theme (6.6's and 10.1's rule) */
const lightOf = (c) => { const m = /^#([0-9a-f]{6})$/i.exec(c) ? [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16)) : (c.match(/[\d.]+/g) || [0, 0, 0]).slice(0, 3).map(Number); return (0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2]) / 255; };
const otherSign = (cw) => { const l = lightOf(cw), far = Math.abs(lightOf(PAL.ink) - l) > Math.abs(lightOf(PAL.panel) - l) ? PAL.ink : PAL.panel; return F.mixColor(cw, far, 0.55); };
/* midpoint rule on [a, b] */
const quad = (f, a, b, n = 2000) => { const h = (b - a) / n; let s = 0; for (let i = 0; i < n; i++) s += f(a + (i + 0.5) * h); return s * h; };
const signed = (v, dec = 2) => `${v < 0 ? '-' : '+'} ${fmt(Math.abs(v), dec)}`;

/* ---------- Figure 11.4.1: a polarization function bends a valence orbital ----------
   Still: a stationary function. A cross-section through the nucleus, in a0, x across and the valence
   function's axis up; psi = c1 phi1 + c2 phi2 with c1 = sqrt(1 - c2^2), which keeps psi normalized since
   the two functions are orthogonal by symmetry. Valence functions are Slater orbitals with Table 11.3.1's
   exponents (carbon 2p_z, zeta = 1.72; hydrogen 1s, zeta = 1.24); polarization functions are single
   normalized Gaussian primitives, as the text says, with the exponents of 6-31G* on carbon (d, 0.8) and
   6-31G** on hydrogen (p, 1.1), from Hariharan and Pople (1973), who added them to the 6-31G of Hehre,
   Ditchfield and Pople (1972); recalled, not checked against the paper. The density's centre is <x> = 2 c1 c2 <phi1|x|phi2>, the radial integral
   computed once. Signs in the house's diverging pair; the main map and the two parts share one scale.
   Opens on the book's p + d, c2 = 0.30. */
(function () {
  const d = sim('sim-polarization', 690);
  const PAIRS = {
    pd: { atom: 'C', name: 'carbon', z: 1.72, a: 0.8, l1: '2p_z', l2: 'd_{xz}', l2t: 'd_xz', yl: 'z (a₀)' },
    sp: { atom: 'H', name: 'hydrogen', z: 1.24, a: 1.1, l1: '1s', l2: 'p_x', l2t: 'p_x', yl: 'y (a₀)' },
  };
  { const g = PAIRS.pd, N1 = Math.sqrt(Math.pow(g.z, 5) / Math.PI), N2 = Math.pow(2 * g.a / Math.PI, 0.75) * 4 * g.a;
    g.f1 = (x, y) => N1 * y * Math.exp(-g.z * Math.hypot(x, y)); g.f2 = (x, y) => N2 * x * y * Math.exp(-g.a * (x * x + y * y));
    g.I = N1 * N2 * (4 * Math.PI / 15) * quad((r) => Math.pow(r, 6) * Math.exp(-g.z * r - g.a * r * r), 0, 30); }
  { const g = PAIRS.sp, N1 = Math.sqrt(Math.pow(g.z, 3) / Math.PI), N2 = Math.pow(2 * g.a / Math.PI, 0.75) * Math.sqrt(4 * g.a);
    g.f1 = (x, y) => N1 * Math.exp(-g.z * Math.hypot(x, y)); g.f2 = (x, y) => N2 * x * Math.exp(-g.a * (x * x + y * y));
    g.I = N1 * N2 * (4 * Math.PI / 3) * quad((r) => Math.pow(r, 4) * Math.exp(-g.z * r - g.a * r * r), 0, 30); }
  const K = F.choice(d.controls, { label: '\\text{pair}', options: [{ value: 'pd', label: 'p + d (carbon)' }, { value: 'sp', label: 's + p (hydrogen)' }], value: 'pd', aria: 'the valence function and its polarization function', key: 'pair' });
  const W = ctl(d.controls, { label: 'c_2', cls: '', key: 'c2', min: -0.5, max: 0.5, step: 0.01, value: 0.3, unit: '', dec: 2, specials: [{ at: 0, label: 'no polarization function' }] });
  const hits = [];
  F.hover(d.stage, () => hits);
  const X = 4, Y = 3;
  /* paint f over the window [-X, X] x [-Y, Y] into box; M is the shared scale */
  function paint(ctx, b, f, M, cp, cn) {
    const sx = (b.r - b.l) / (2 * X), cell = 6;
    ctx.save();
    for (let px = b.l; px < b.r; px += cell) for (let py = b.t; py < b.b; py += cell) {
      const x = (px + cell / 2 - b.l) / sx - X, y = Y - (py + cell / 2 - b.t) / sx;
      const v = f(x, y) / M, a = Math.min(1, Math.abs(v));
      if (a < 0.01) continue;
      ctx.globalAlpha = 0.85 * Math.pow(a, 0.75); ctx.fillStyle = v > 0 ? cp : cn; ctx.fillRect(px, py, cell + 0.5, cell + 0.5);
    }
    ctx.restore();
  }
  function nucleus(ctx, x, y, sym, r) {
    ctx.save(); ctx.beginPath(); ctx.arc(x, y, r, 0, 2 * Math.PI); ctx.fillStyle = F.el(sym); ctx.fill(); ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const g = PAIRS[K.value], c2 = W.v, c1 = Math.sqrt(1 - c2 * c2), sx = 2 * c1 * c2 * g.I;
    const psi = (x, y) => c1 * g.f1(x, y) + c2 * g.f2(x, y);
    const cw = C('wavefunction'), cn = otherSign(cw), cl = C('length');
    let M = 0; for (let x = -X; x <= X; x += 0.1) for (let y = -Y; y <= Y; y += 0.1) M = Math.max(M, Math.abs(psi(x, y)));
    topline(ctx, Math.abs(c2) < 0.005 ? `With $c_2 = 0$ the density is centred on the ${g.name} nucleus.`
      : `With $c_2 = ${fmt(c2, 2)}$ of $${g.l2}$ mixed in, the density's centre moves ${fmt(Math.abs(sx), 2)} a₀ off the ${g.name} nucleus, toward ${sx > 0 ? '+' : '−'}x.`);
    /* the sum */
    const box = { l: 150, r: 790, t: 120, b: 600 };
    paint(ctx, box, psi, M, cw, cn);
    const ax = axes(ctx, box, [-X, X], [-Y, Y], { nx: 8, ny: 6, xl: 'x (a₀)', yl: g.yl, xc: cl, yc: cl });
    F.legend(ctx, { l: box.l, r: box.r, t: box.t - 52, b: box.t - 12 }, [{ s: `ψ = c₁ ${g.l1} + c₂ ${g.l2}`, ramp: [cn, PAL.panel, cw], ends: ['ψ < 0', 'ψ > 0'] }], { corner: 'top', panel: false });
    const X0 = ax.X(0), Y0 = ax.Y(0), XC = ax.X(sx);
    nucleus(ctx, X0, Y0, g.atom, 9);
    hits.length = 0;
    hits.push({ x: X0, y: Y0, r: 14, name: `the ${g.name} nucleus` });
    if (Math.abs(c2) >= 0.005) {
      line(ctx, XC, Y0 - 26, XC, Y0 + 26, cl, 4); line(ctx, XC - 12, Y0, XC + 12, Y0, cl, 4);
      F.hbracket(ctx, Math.min(X0, XC), Math.max(X0, XC), Y0 + 40, cl);
      text(ctx, `⟨x⟩ = ${fmt(sx, 2)} a₀`, (X0 + XC) / 2, Y0 + 78, cl, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
      hits.push({ x: XC, y: Y0, r: 16, name: `the centre of the density, ⟨x⟩ = ${fmt(sx, 2)} a₀` });
    }
    /* the two parts at their weights, on the same scale */
    const parts = [
      { b: { l: 960, r: 1280, t: 150, b: 390 }, f: (x, y) => c1 * g.f1(x, y), s: `valence ${g.l1} × ${fmt(c1, 2)}`, n: `the valence function ${g.l1.replace('_', '')} at weight ${fmt(c1, 2)}` },
      { b: { l: 960, r: 1280, t: 440, b: 680 }, f: (x, y) => c2 * g.f2(x, y), s: `polarization ${g.l2} × ${fmt(c2, 2)}`, n: `the polarization function ${g.l2t} at weight ${fmt(c2, 2)}` },
    ];
    for (const p of parts) {
      paint(ctx, p.b, p.f, M, cw, cn);
      ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 1.5; ctx.strokeRect(p.b.l, p.b.t, p.b.r - p.b.l, p.b.b - p.b.t); ctx.restore();
      text(ctx, p.s, p.b.l, p.b.t - 18, PAL.ink, { size: 20, weight: 600 });
      nucleus(ctx, (p.b.l + p.b.r) / 2, (p.b.t + p.b.b) / 2, g.atom, 6);
      hits.push({ x: (p.b.l + p.b.r) / 2, y: (p.b.t + p.b.b) / 2, r: 110, name: p.n });
    }
    tex(d.readout, `\\kpsi = c_1\\phi_{${g.l1}} + c_2\\phi_{${g.l2}} \\\\ \\kpsi = ${fmt(c1, 2)}\\,\\phi_{${g.l1}} ${signed(c2)}\\,\\phi_{${g.l2}} \\\\ \\langle\\kx\\rangle = 2c_1c_2\\langle\\phi_{${g.l1}}|\\kx|\\phi_{${g.l2}}\\rangle = 2(${fmt(c1, 2)})(${fmt(c2, 2)})(${fmt(g.I, 3)}\\,\\kao) = ${fmt(sx, 2)}\\,\\kao`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- Sim: a diffuse function's tail ----------
   Still. Hydrogen's 1s Slater function (zeta = 1.24) and one normalized diffuse s Gaussian
   (2 alpha / pi)^(3/4) e^(-alpha r^2); psi = N (phi_1s + c phi_diff), N from their overlap, computed by
   quadrature each frame. Graph: the radial density 4 pi r^2 psi^2 on r 0 to 15 a0, 0 to 0.8 per a0
   (phi_1s alone peaks at 4 zeta e^-2 = 0.67). The 1s alone is dashed; the share of the electron beyond
   5 a0 is shaded under the bold curve. alpha 0.01 to 0.30, opening on 0.036, hydrogen's diffuse exponent
   in 6-311++G (the 6-311G of Krishnan et al., 1980, with the diffuse functions of Clark et al., 1983, and
   Frisch, Pople and Binkley, 1984; recalled, not checked against the papers); c 0 to 1.5, opening on 1. */
(function () {
  const d = sim('sim-diffuse', 560);
  const A = ctl(d.controls, { label: '\\alpha', cls: '', key: 'alpha', min: 0.01, max: 0.3, step: 0.001, value: 0.036, unit: '', dec: 3, detents: [{ v: 0.036, label: '6-311++G' }], snap: true });
  const Cw = ctl(d.controls, { label: 'c', cls: '', key: 'c', min: 0, max: 1.5, step: 0.01, value: 1, unit: '', dec: 2, specials: [{ at: 0, label: 'no diffuse function' }] });
  const hits = [];
  F.hover(d.stage, () => hits);
  const z = 1.24, N1 = Math.sqrt(z * z * z / Math.PI);
  const p1 = (r) => 4 * z * z * z * r * r * Math.exp(-2 * z * r);
  const RC = 5;
  function draw() {
    const { ctx } = begin(d.c);
    const a = A.v, c = Cw.v, N2 = Math.pow(2 * a / Math.PI, 0.75);
    const S = 4 * Math.PI * N1 * N2 * quad((r) => r * r * Math.exp(-z * r - a * r * r), 0, 60);
    const N = 1 / Math.sqrt(1 + c * c + 2 * c * S);
    const P = (r) => { const v = N * (N1 * Math.exp(-z * r) + c * N2 * Math.exp(-a * r * r)); return 4 * Math.PI * r * r * v * v; };
    const far = quad(P, RC, 80, 3000), far1 = quad(p1, RC, 80, 400);
    const pct = (f) => (100 * f >= 10 ? fmt(100 * f, 0) : 100 * f >= 0.1 ? fmt(100 * f, 1) : 'under 0.1');
    const cp = C('probability-density'), cl = C('length');
    topline(ctx, c < 0.005 ? `The 1s function alone leaves ${pct(far1)}% of the electron beyond $5\\,\\kao$.`
      : `With $\\alpha = ${fmt(a, 3)}$, ${pct(far)}% of the electron lies beyond $5\\,\\kao$; the 1s function alone leaves ${pct(far1)}%.`);
    const box = { l: 150, r: 1340, t: 150, b: 470 };
    const ax = axes(ctx, box, [0, 15], [0, 0.8], { nx: 5, ny: 4, xl: 'distance from the nucleus r (a₀)', yl: 'radial density 4πr²ψ² (1/a₀)', xc: cl, yc: cp });
    shade(ctx, ax, P, 0, RC, 15, cp, { alpha: 0.3 });
    plot(ctx, ax, p1, alpha(PAL.ink, 0.55), { w: 3, dash: [10, 10] });
    plot(ctx, ax, P, cp, { w: 5 });
    line(ctx, ax.X(RC), box.b, ax.X(RC), box.t + 40, alpha(PAL.ink, 0.35), 2, [4, 8]);
    text(ctx, `beyond 5 a₀: ${pct(far)}%`, ax.X(RC) + 14, box.t + 40, cp, { size: 20, weight: 600 });
    F.legend(ctx, ax, [{ s: '1s alone', color: alpha(PAL.ink, 0.55), w: 3, dash: [10, 10] }, { s: 'with the diffuse function', color: cp, w: 5 }], { corner: 'tr' });
    hits.length = 0;
    hits.push({ x: ax.X(1 / z), y: ax.Y(4 * z * Math.exp(-2)), r: 16, name: 'hydrogen 1s, ζ = 1.24, alone' });
    const rp = 1 / Math.sqrt(2 * a);
    if (c > 0.005 && rp < 15) hits.push({ x: ax.X(rp), y: ax.Y(Math.min(0.8, P(rp))), r: 16, name: `the diffuse function's part, centred near r = 1/√(2α) = ${fmt(rp, 1)} a₀` });
    hits.push({ x: ax.X(10), y: ax.Y(0.02), r: 30, name: `${pct(far)}% of the electron lies beyond 5 a₀` });
    tex(d.readout, `\\ket{\\kpsi} = N\\bigl(\\ket{\\phi_{1s}} + c\\ket{\\phi_{\\text{diff}}}\\bigr) \\\\ \\ket{\\kpsi} = ${fmt(N, 2)}\\bigl(\\ket{\\phi_{1s}} + ${fmt(c, 2)}\\ket{\\phi_{\\text{diff}}}\\bigr) \\\\ \\phi_{\\text{diff}} = ${fmt(N2, 3)}\\,e^{-${fmt(a, 3)}\\kr^2}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
