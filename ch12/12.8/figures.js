/* Figures for section 12.8 Using Symmetry to Solve Secular Determinants. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['12.8'] = function (root, F) {
const { tex, C, PAL, alpha, register, line, text, fmt } = F;

/* the other sign of psi: the wavefunction hue a clear step toward whichever of ink and ground lies farther
   from it in lightness, so the two tones part on either theme (6.6's and 10.1's rule) */
const lightOf = (c) => { const m = /^#([0-9a-f]{6})$/i.exec(c) ? [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16)) : (c.match(/[\d.]+/g) || [0, 0, 0]).slice(0, 3).map(Number); return (0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2]) / 255; };
const otherSign = (cw) => { const l = lightOf(cw), far = Math.abs(lightOf(PAL.ink) - l) > Math.abs(lightOf(PAL.panel) - l) ? PAL.ink : PAL.panel; return F.mixColor(cw, far, 0.55); };

/* ---------- Figure (the book's two images of Psi1 Psi2 and Psi3 Psi4, unnumbered): NH3's s orbitals ----------
   Physical 3D (root 28.3): the lobes sit on the nuclei of a real NH3 (N-H 1.012 A, HNH 106.7 deg), N on
   the C3 axis above the plane of the hydrogens. Still: a choice of orbital, nothing has a time.
   Coefficients on (s_N, s1, s2, s3): Psi1 and Psi2 from the book's integrals (12.8.7) with the roots
   recomputed (the book's (12.8.8) is wrong, footnoted): E = -29.8336 eV, Psi1 = 0.6128 sN + 0.2511 (s1 + s2 + s3);
   E = +31.0342 eV, Psi2 = 1.6209 sN - 0.9685 (s1 + s2 + s3); Psi3 = phi3 = (2 s1 - s2 - s3)/sqrt6 and
   Psi4 = phi4 = (s2 - s3)/sqrt2 at H33 = H44 = -9.2892 eV. A sphere's radius is 0.5 sqrt|c| A, so its
   cross-section goes as |c|; its colour is the sign. The nuclei are small balls in F.el colours inside.
   Orbit bounded above the plane of the hydrogens and +-60 deg about the axis (config); no buttons.
   Beneath, the four levels on one energy axis, the chosen one lit. */
(function () {
  const d = F.sim(root, 'sim-nh3-orbitals');
  const r6 = Math.sqrt(6), r2 = Math.sqrt(2);
  const ORB = {
    1: { c: [0.6128, 0.2511, 0.2511, 0.2511], E: -29.8336, sp: 'A_1', say: '$\\Psi_1$: $s_N$ and the hydrogen orbitals in phase, a bonding orbital.' },
    2: { c: [1.6209, -0.9685, -0.9685, -0.9685], E: 31.0342, sp: 'A_1', say: '$\\Psi_2$: the same two SALCs out of phase, an antibonding orbital.' },
    3: { c: [0, 2 / r6, -1 / r6, -1 / r6], E: -9.2892, sp: 'E', say: '$\\Psi_3$: no share of $s_N$; one of the degenerate pair of $E$.' },
    4: { c: [0, 0, 1 / r2, -1 / r2], E: -9.2892, sp: 'E', say: '$\\Psi_4$: no share of $s_N$; the other orbital of the pair, at the same energy.' },
  };
  const K = F.choice(d.controls, { label: '\\text{orbital}', aria: 'the molecular orbital', key: 'orbital', value: '1',
    options: [1, 2, 3, 4].map((i) => ({ value: String(i), label: `$\\Psi_${i}$` })) });
  const v = F.view3d(d.stage, { h: 440, dist: 7, tilt: 0.55, pitch: [0.12, 1.45], yaw: [-Math.PI / 3, Math.PI / 3], spin: 'off', zoom: false });
  const g = v.part(0);
  /* geometry, in A, y up: N on the axis, the hydrogens 0.940 A from it and 0.381 A below N; H1 toward the reader */
  const S = 1.6, rho = 0.940 * S, hN = 0.381 * S, y0 = 0.15;
  const N = [0, y0 + hN * 0.6, 0];
  const H = [0, 1, 2].map((i) => { const a = Math.PI / 2 + i * 2 * Math.PI / 3; return [rho * Math.cos(a), y0 - hN * 0.4, rho * Math.sin(a)]; });
  const ladder = F.makeCanvas(d.stage, 250);
  function draw() {
    const o = ORB[K.value], up = C('wavefunction'), down = otherSign(up), ce = C('energy');
    v.clear();
    H.forEach((p) => F.mesh.stick(g, N, p, 0.04, PAL.muted));
    const nuc = [N, ...H], names = ['s_N', 's₁', 's₂', 's₃'];
    nuc.forEach((p, i) => {
      v.pickable(F.mesh.sphere(g, p, i ? 0.07 : 0.1, F.el(i ? 'H' : 'N')), i ? `hydrogen ${i}` : 'nitrogen');
      const c = o.c[i];
      if (Math.abs(c) < 1e-6) return;
      const m = F.mesh.sphere(g, p, 0.5 * Math.sqrt(Math.abs(c)) * S, c > 0 ? up : down, { transparent: true, opacity: 0.62 });
      v.pickable(m, `${names[i]} with coefficient ${fmt(c, 4)}`);
    });
    v.headline(o.say);
    /* the ladder: energy -40 to +40 eV across, the four levels */
    const { ctx, W } = F.begin(ladder);
    const L = 170, R = W - 120, X = (e) => L + (e + 40) / 80 * (R - L), yb = 150;
    line(ctx, L, yb, R, yb, alpha(PAL.ink, 0.6), 2);
    for (let e = -40; e <= 40; e += 20) { line(ctx, X(e), yb, X(e), yb + 8, alpha(PAL.ink, 0.6), 2); text(ctx, fmt(e, 0), X(e), yb + 34, PAL.muted, { size: 17, align: 'center' }); }
    text(ctx, 'orbital energy E (eV)', (L + R) / 2, yb + 72, ce, { size: 20, weight: 600, align: 'center' });
    const lv = [[1, -29.8336, 0], [3, -9.2892, -24], [4, -9.2892, 24], [2, 31.0342, 0]];
    lv.forEach(([i, e, dx]) => {
      const on = String(i) === K.value, x = X(e) + dx, col = on ? ce : alpha(PAL.ink, 0.35);
      line(ctx, x, yb - 64, x, yb - 8, col, on ? 6 : 3);
      text(ctx, `Ψ_${i}`, x, yb - 82, on ? ce : PAL.muted, { size: 26, weight: on ? 600 : 400, align: 'center' });
    });
    F.legend(ctx, { l: 0, t: 0, r: W, b: 40 }, [
      { s: 'coefficient > 0', color: up, kind: 'dot' },
      { s: 'coefficient < 0', color: down, kind: 'dot' },
    ], { corner: 'top', panel: false, row: true });
    const [cN, c1, c2, c3] = o.c.map((x) => fmt(Math.abs(x), 4)), sg = (x) => (x < 0 ? '-' : '+');
    let psi;
    if (K.value === '1' || K.value === '2') psi = `${o.c[0] < 0 ? '-' : ''}${cN}\\,\\ksN ${sg(o.c[1])} ${c1}\\,(s_1 + s_2 + s_3)`;
    else if (K.value === '3') psi = `${c1}\\,s_1 - ${c2}\\,(s_2 + s_3)`;
    else psi = `${c2}\\,s_2 - ${c3}\\,s_3`;
    tex(d.readout, `\\kPsi_${K.value} = ${psi} \\\\ \\kE = ${fmt(o.E, 4)}\\ \\text{eV}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
