/* Figures for section 14.6 Spin-Spin Coupling Can Lead to Multiplets in NMR Spectra. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['14.6'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, arrow, text, topline, axes, plot, fmt } = F;

/* ---------- shared: first-order multiplets ---------- */
const binom = (n, k) => { let r = 1; for (let i = 1; i <= k; i++) r = r * (n - k + i) / i; return r; };
/* the lines of a proton coupled to sets [{n, J}], in Hz from its centre, intensities summing to 1, larger J first as listed */
function lines(sets) {
  let out = [{ x: 0, h: 1 }];
  sets.forEach(({ n, J }) => {
    const next = [];
    out.forEach((l) => { for (let k = 0; k <= n; k++) next.push({ x: l.x + (k - n / 2) * J, h: l.h * binom(n, k) / 2 ** n }); });
    out = next;
  });
  /* lines that land together are one subpeak */
  const merged = [];
  out.sort((a, b) => a.x - b.x).forEach((l) => { const m = merged.find((q) => Math.abs(q.x - l.x) < 0.02); if (m) m.h += l.h; else merged.push({ ...l }); });
  return merged;
}
const NAMES = ['singlet', 'doublet', 'triplet', 'quartet', 'quintet', 'sextet', 'septet'];
/* a Lorentzian line shape of half-width w */
const lor = (x, x0, w) => (w * w) / ((x - x0) * (x - x0) + w * w);

/* =====================================================================
   FIGURE (5173 + 5193 folded): the spectrum against the magnet.
   Still: the spectrum at one field has no time in it; the slider is the
   spectrometer frequency nu_0 (60 to 750 MHz, detents at the book's 100,
   300 and 500 MHz), opening on 300 MHz, the frequency the book's insets
   correspond to (6.1 Hz = 0.020 ppm) and Example 5.9's TMS frequency.
   Choice: 1,1,2-trichloroethane (H_a 3.96 ppm, 2H, doublet; H_b 5.76 ppm,
   1H, triplet; J = 6.1 Hz) or methyl acrylate (H_c 6.21, H_a 5.95, H_b
   5.64 ppm; J_ac 17.4, J_ab 10.5, J_bc 1.5 Hz). First-order lines only; the
   methyl ester's singlet is left out since the text gives no shift for it.
   Top: one enlargement per signal, each a fixed 0.3 ppm wide, so a splitting
   fixed in Hz shrinks on it as nu_0 grows; its largest J is bracketed.
   Bottom: the whole spectrum, 10 to 0 ppm, lines as sticks. Both axes run
   right to left, as the book's do. Lorentzian half-width 0.6 Hz.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-spectrum', 640);
  const MOL = {
    tce: { name: '1,1,2-trichloroethane', sig: [
      { lab: 'H_b', d: 5.76, H: 1, sets: [{ n: 2, J: 6.1 }] },
      { lab: 'H_a', d: 3.96, H: 2, sets: [{ n: 1, J: 6.1 }] }] },
    ma: { name: 'methyl acrylate', sig: [
      { lab: 'H_c', d: 6.21, H: 1, sets: [{ n: 1, J: 17.4 }, { n: 1, J: 1.5 }] },
      { lab: 'H_a', d: 5.95, H: 1, sets: [{ n: 1, J: 17.4 }, { n: 1, J: 10.5 }] },
      { lab: 'H_b', d: 5.64, H: 1, sets: [{ n: 1, J: 10.5 }, { n: 1, J: 1.5 }] }] },
  };
  const K = F.choice(d.controls, { label: '\\text{molecule}', key: 'mol', options: [{ value: 'tce', label: '1,1,2-trichloroethane' }, { value: 'ma', label: 'methyl acrylate' }], value: 'tce', aria: 'the molecule whose spectrum is drawn' });
  const NU = ctl(d.controls, { label: '\\knuo', cls: 'frequency', key: 'nu0', min: 60, max: 750, step: 1, value: 300, unit: 'MHz', dec: 0,
    detents: [100, 300, 500], snap: true, aria: 'the spectrometer frequency in megahertz' });
  const hits = [];
  F.hover(d.stage, () => hits);
  const W0 = 0.6, HALF = 0.15;
  function draw() {
    const { ctx, W } = begin(d.c);
    const m = MOL[K.value], nu0 = NU.v, cf = C('frequency');
    /* every line of the molecule, in ppm, its height in protons */
    const all = [];
    m.sig.forEach((s) => lines(s.sets).forEach((l) => all.push({ p: s.d + l.x / nu0, h: l.h * s.H, s })));
    const J0 = m.sig[0].sets[0].J;
    topline(ctx, `At $\\knuo = ${fmt(nu0, 0)}$ MHz a ${fmt(J0, 1)} Hz splitting spans ${fmt(J0 / nu0, 3)} ppm; the shifts stay where they are.`);
    hits.length = 0;
    /* the enlargements */
    const n = m.sig.length, gap = 60, l0 = 110, r0 = W - 50, w = (r0 - l0 - gap * (n - 1)) / n;
    m.sig.forEach((s, i) => {
      const box = { l: l0 + i * (w + gap), r: l0 + i * (w + gap) + w, t: 130, b: 300 };
      const ax = axes(ctx, box, [-(s.d + HALF), -(s.d - HALF)], [0, 1.15], { nx: 3, ny: 0, nice: true, fx: (v) => fmt(-v, 2) });
      const spec = (x) => { const p = -x; let y = 0; all.forEach((l) => { y += l.h * lor(p * nu0, l.p * nu0, W0); }); return y / (s.H * Math.max(...lines(s.sets).map((q) => q.h))); };
      plot(ctx, ax, spec, PAL.ink, { w: 3 });
      text(ctx, `${s.lab}  ${fmt(s.d, 2)} ppm`, (box.l + box.r) / 2, box.t - 50, PAL.ink, { size: 22, weight: 600, align: 'center' });
      /* the largest coupling of this signal, bracketed between two of its lines */
      const ls = lines(s.sets), J = s.sets[0].J, sub = s.sets.slice(1).reduce((a, q) => a + q.n * q.J / 2, 0);
      const pa = s.d + (-s.sets[0].n * J / 2 - sub) / nu0, pb = pa + J / nu0;
      const xa = ax.X(-pb), xb = ax.X(-pa);
      if (Math.abs(xb - xa) > 6 && xa > box.l && xb < box.r) F.hbracket(ctx, xa, xb, box.t + 8, cf, `${fmt(J, 1)} Hz`, { side: 'above' });
      hits.push({ x: (box.l + box.r) / 2, y: (box.t + box.b) / 2, r: 60, name: `${s.lab} of ${m.name}, ${NAMES[ls.length] || ls.length + ' lines'} at ${fmt(s.d, 2)} ppm, ${fmt(s.d * nu0, 0)} Hz from the standard` });
    });
    /* the whole spectrum */
    const box = { l: 110, r: W - 50, t: 380, b: 560 };
    const ax = axes(ctx, box, [-10, 0], [0, 1.15], { nx: 10, ny: 0, fx: (v) => fmt(-v, 0), xl: 'δ (ppm)' });
    const top = Math.max(...all.map((l) => l.h));
    const bins = new Map();
    all.forEach((l) => { const x = Math.round(ax.X(-l.p)); bins.set(x, (bins.get(x) || 0) + l.h); });
    const bmax = Math.max(...bins.values());
    bins.forEach((h, x) => line(ctx, x, box.b, x, box.b - (box.b - box.t) * 0.95 * h / bmax, PAL.ink, 2));
    /* the 12 ppm window in Hz along the bottom */
    text(ctx, `12 ppm = ${fmt(12 * nu0, 0)} Hz at ${fmt(nu0, 0)} MHz`, box.l, box.b + 66, cf, { size: 20, weight: 600, align: 'left' });
    void top;
    const s0 = m.sig[m.sig.length - 1];
    tex(d.readout, `\\knu - \\knuo = \\delta \\times \\knuo = ${fmt(s0.d, 2)}\\ \\text{ppm} \\times ${fmt(nu0, 0)}\\ \\text{MHz} = ${fmt(s0.d * nu0, 0)}\\ \\text{Hz}`
      + ` \\\\ \\dfrac{\\kJcc}{\\knuo} = \\dfrac{${fmt(J0, 1)}\\ \\text{Hz}}{${fmt(nu0, 0)}\\ \\text{MHz}} = ${fmt(J0 / nu0, 3)}\\ \\text{ppm}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE (5175 + 5177 folded): splitting by n equivalent neighbours.
   Still with a morph: n is a discrete state, so a choice (0 to 6); the
   change crossfades. Opens on n = 1, H_a of 1,1,2-trichloroethane split by
   H_b (J = 6.1 Hz); n = 2 is the book's H_b, n = 3 Example 5.6's quartet.
   Top: the splitting tree, one level per neighbour. Middle: under each
   subpeak every arrangement of the neighbours' spins that puts it there,
   the book's arrows (right: with B_0, deshielding, so downfield, the left of
   a spectrum; left: against B_0). Bottom: the multiplet, heights the row of
   Pascal's triangle. Scale fixed at 28 units per Hz (6 x 6.1 Hz fits).
   The arrows are notation (rule 24.1), in ink.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-splitting', 940);
  const N = F.choice(d.controls, { label: 'n', key: 'n', options: [0, 1, 2, 3, 4, 5, 6].map((v) => ({ value: String(v), label: String(v) })), value: '1', aria: 'the number of neighbouring hydrogens' });
  const J = 6.1, CX = 760;
  const pxOf = (n) => (n <= 1 ? 40 : 1000 / (n * J));   /* units per Hz: the widest multiplet fills 1000 units */
  const hits = [];
  F.hover(d.stage, () => hits);
  function scene(ctx, n, a) {
    const PX = pxOf(n), xs = (k, lev) => CX + (k - lev / 2) * J * PX;     /* the k-th branch after lev splittings, from the left */
    const ink = alpha(PAL.ink, a);
    /* the tree */
    const t0 = 110, lh = n ? Math.min(80, 200 / n) : 0;
    line(ctx, CX, t0 - 20, CX, t0, ink, 3);
    for (let lev = 1; lev <= n; lev++) {
      const y = t0 + (lev - 1) * lh;
      for (let k = 0; k < lev; k++) {
        const x = xs(k, lev - 1);
        line(ctx, x - J * PX / 2, y, x + J * PX / 2, y, ink, 3);
        line(ctx, x - J * PX / 2, y, x - J * PX / 2, y + lh, ink, 3);
        line(ctx, x + J * PX / 2, y, x + J * PX / 2, y + lh, ink, 3);
      }
    }
    if (!n) line(ctx, CX, t0, CX, t0 + 40, ink, 3);
    /* the arrangements under each subpeak: column j has n - j spins with B0 (right) and j against (left) */
    const rowH = n <= 4 ? 22 : 17, aw = Math.min(34, (J * PX - 24) / Math.max(n, 1) - 6), y0 = t0 + n * lh + 34;
    for (let j = 0; j <= n; j++) {
      const x = xs(j, n), rows = [];
      for (let mask = 0; mask < 2 ** n; mask++) { let c = 0; for (let b = 0; b < n; b++) if (mask >> b & 1) c++; if (c === j) rows.push(mask); }
      rows.forEach((mask, r) => {
        const y = y0 + r * rowH, w = n * (aw + 6) - 6, x1 = x - w / 2;
        for (let b = 0; b < n; b++) {
          const ax0 = x1 + b * (aw + 6), right = !(mask >> b & 1);
          if (right) arrow(ctx, ax0, y, ax0 + aw, y, ink, 3); else arrow(ctx, ax0 + aw, y, ax0, y, ink, 3);
        }
      });
    }
    /* the multiplet */
    const base = 870, hmax = 130, top = binom(n, Math.floor(n / 2));
    ctx.save(); ctx.strokeStyle = ink; ctx.lineWidth = 3; ctx.beginPath();
    for (let X = CX - 600; X <= CX + 600; X += 1) {
      let y = 0; for (let k = 0; k <= n; k++) y += binom(n, k) / top * lor(X, xs(k, n), 5);
      const Y = base - hmax * y; if (X === CX - 600) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
    }
    ctx.stroke(); ctx.restore();
    for (let k = 0; k <= n; k++) text(ctx, String(binom(n, k)), xs(k, n), base - hmax * binom(n, k) / top - 26, ink, { size: 20, weight: 600, align: 'center' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const n = +N.value, from = +N.from, k = N.k;
    const row = Array.from({ length: n + 1 }, (_, j) => binom(n, j));
    topline(ctx, n === 0 ? 'No neighbours: the signal stays a singlet.'
      : `${n} neighbour${n > 1 ? 's' : ''}: ${2 ** n} arrangements of ${n > 1 ? 'their spins' : 'its spin'} fall into ${n + 1} groups, a ${NAMES[n]} in the ratio ${row.join(':')}.`);
    /* the field the spins line up with */
    const cB = C('magnetic-field');
    arrow(ctx, 50, 430, 190, 430, cB, 5);
    text(ctx, 'B₀', 50, 400, cB, { size: 24, weight: 600 });
    text(ctx, '→ with B₀', 50, 480, PAL.muted, { size: 17 });
    text(ctx, '← against B₀', 50, 506, PAL.muted, { size: 17 });
    if (k < 1 && from !== n) scene(ctx, from, 1 - k);
    scene(ctx, n, k < 1 && from !== n ? k : 1);
    /* the spacing */
    if (n > 0) {
      const xa = 760 + (0 - n / 2) * J * pxOf(n), xb = xa + J * pxOf(n);
      F.hbracket(ctx, xa, xb, 896, C('frequency'), `J = ${fmt(J, 1)} Hz`, { side: 'below' });
    }
    hits.length = 0;
    for (let j = 0; j <= n; j++) hits.push({ x: 760 + (j - n / 2) * J * pxOf(n), y: 800, r: 40, name: `${row[j]} arrangement${row[j] > 1 ? 's' : ''} with ${n - j} spin${n - j === 1 ? '' : 's'} with B₀ and ${j} against` });
    tex(d.readout, `n + 1 = ${n} + 1 = ${n + 1}\\ \\text{subpeaks} \\\\ ${row.join(' : ')} \\\\ \\kJcc = ${fmt(J, 1)}\\ \\text{Hz}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE (5203 + 5205 + 5211 folded): two couplings.
   Still: a choice of proton (methyl acrylate's H_c, H_a, H_b with the
   book's J's; 1,1,3-trichloropropane's H_b, split by two H_a and one H_c,
   whose two J's the book calls very close and does not print: 6.5 and
   6.0 Hz here, inside its 6-8 Hz for neighbouring sp3 carbons). Sliders
   J1 (the first splitting) and J2 (0 to 20 Hz), a special circle on J2 at
   J1 where the subpeaks fall together. The tree splits n1 times by J1, then
   n2 times by J2; the multiplet below on a fixed axis of -30 to 30 Hz from
   the centre (20 units per Hz), Lorentzian half-width 0.35 Hz.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-complex', 700);
  const P = {
    hc: { lab: 'H_c of methyl acrylate', n1: 1, n2: 1, J1: 17.4, J2: 1.5, j1: 'J_{ac}', j2: 'J_{bc}' },
    ha: { lab: 'H_a of methyl acrylate', n1: 1, n2: 1, J1: 17.4, J2: 10.5, j1: 'J_{ac}', j2: 'J_{ab}' },
    hb: { lab: 'H_b of methyl acrylate', n1: 1, n2: 1, J1: 10.5, J2: 1.5, j1: 'J_{ab}', j2: 'J_{bc}' },
    tcp: { lab: 'H_b of 1,1,3-trichloropropane', n1: 2, n2: 1, J1: 6.5, J2: 6.0, j1: 'J_{ab}', j2: 'J_{bc}' },
  };
  const K = F.choice(d.controls, { label: '\\text{proton}', key: 'proton', options: [
    { value: 'hc', label: '$\\mathrm{H_c}$' }, { value: 'ha', label: '$\\mathrm{H_a}$' }, { value: 'hb', label: '$\\mathrm{H_b}$' }, { value: 'tcp', label: '$\\mathrm{H_b}$ of trichloropropane' }],
    value: 'hc', aria: 'the proton whose signal is split', onInput: (v) => { J1.set(P[v].J1); J2.set(P[v].J2); } });
  const J1 = ctl(d.controls, { label: '\\kJcc_{1}', cls: 'frequency', key: 'J1', min: 0, max: 20, step: 0.1, value: 17.4, unit: 'Hz', dec: 1, aria: 'the first coupling constant in hertz' });
  const J2 = ctl(d.controls, { label: '\\kJcc_{2}', cls: 'frequency', key: 'J2', min: 0, max: 20, step: 0.1, value: 1.5, unit: 'Hz', dec: 1, aria: 'the second coupling constant in hertz',
    specials: [{ at: () => J1.v, label: 'J₂ = J₁' }] });
  const PX = 20, CX = 700;
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const p = P[K.value], j1 = J1.v, j2 = J2.v, cf = C('frequency');
    const ls = lines([{ n: p.n1, J: j1 }, { n: p.n2, J: j2 }]);
    const full = (p.n1 + 1) * (p.n2 + 1), seen = ls.length;
    const eq = Math.abs(j1 - j2) < 0.05;
    topline(ctx, eq ? `With $\\kJcc_{1} = \\kJcc_{2}$ the ${full} lines of ${p.lab} fall on ${seen} subpeaks: it looks like a ${NAMES[seen - 1] || seen + '-line multiplet'}.`
      : `${p.lab}: split ${p.n1 === 1 ? 'into a doublet' : 'into a triplet'} by $${fmt(j1, 1)}\\ \\text{Hz}$, then each line into a doublet by $${fmt(j2, 1)}\\ \\text{Hz}$: ${seen} lines.`);
    /* the tree */
    const X = (hz) => CX + hz * PX, t0 = 150, lh = 64;
    line(ctx, CX, t0 - 20, CX, t0, PAL.ink, 3);
    let nodes = [0], y = t0;
    const levels = [...Array(p.n1).fill(j1), ...Array(p.n2).fill(j2)];
    levels.forEach((J, i) => {
      const next = [];
      nodes.forEach((x) => {
        line(ctx, X(x - J / 2), y, X(x + J / 2), y, PAL.ink, 3);
        line(ctx, X(x - J / 2), y, X(x - J / 2), y + lh, PAL.ink, 3);
        line(ctx, X(x + J / 2), y, X(x + J / 2), y + lh, PAL.ink, 3);
        next.push(x - J / 2, x + J / 2);
      });
      /* the first branch of each stage carries its J */
      if (i === 0 || i === p.n1) {
        if (J * PX > 8) F.hbracket(ctx, X(nodes[0] - J / 2), X(nodes[0] + J / 2), y + lh / 2, cf);
        text(ctx, `${i === 0 ? p.j1 : p.j2} = ${fmt(J, 1)} Hz`, X(Math.max(...next)) + 30, y + lh / 2, cf, { size: 22, weight: 600, base: 'middle' });
      }
      nodes = [...new Set(next.map((v) => +v.toFixed(3)))].sort((a, b) => a - b); y += lh;
    });
    /* the multiplet */
    const box = { l: 100, r: 1300, t: t0 + levels.length * lh + 40, b: 610 };
    const ax = axes(ctx, box, [-30, 30], [0, 1.15], { nx: 6, ny: 0, xl: 'distance from the centre (Hz)', xc: cf, fx: (v) => fmt(-v, 0) });
    const hmax = Math.max(...ls.map((l) => l.h));
    const spec = (x) => { let s = 0; ls.forEach((l) => { s += l.h / hmax * lor(-x, l.x, 0.35); }); return s; };
    plot(ctx, ax, spec, PAL.ink, { w: 3 });
    hits.length = 0;
    ls.forEach((l) => hits.push({ x: ax.X(-l.x), y: box.t + 30, r: 14, name: `a subpeak ${fmt(-l.x, 2)} Hz from the centre, ${fmt(l.h * full, 0)} of the ${full} lines` }));
    const lineTex = eq ? `n_1 + n_2 + 1 = ${p.n1} + ${p.n2} + 1 = ${p.n1 + p.n2 + 1}\\ \\text{subpeaks}` : `(n_1 + 1)(n_2 + 1) = ${p.n1 + 1} \\times ${p.n2 + 1} = ${full}\\ \\text{lines}`;
    tex(d.readout, `${lineTex} \\\\ \\kJcc_{1} = ${fmt(j1, 1)}\\ \\text{Hz} \\\\ \\kJcc_{2} = ${fmt(j2, 1)}\\ \\text{Hz}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
