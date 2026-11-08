/* Figures for section 6.2 The Wavefunctions of a Rigid Rotator are Called Spherical Harmonics. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.2'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, axes, plot, fmt, mixColor } = F;
const sim = (id, H) => F.sim(root, id, H);
const PI = Math.PI;
const signed = (m) => (m > 0 ? `+${m}` : m < 0 ? `−${-m}` : '0');

/* ---------- the real spherical harmonics ----------
   P_l^m(x) by the usual recurrence (no Condon-Shortley phase: the sign
   convention only swaps which tone a lobe wears); the real function is
   P_l^|m|(cos theta) cos(m phi) for m > 0, P_l^|m|(cos theta) sin(|m| phi)
   for m < 0, P_l(cos theta) for m = 0. The figure draws shapes, each scaled
   to its own largest value, so the normalization is left out. */
function legendre(l, m, x) {
  let pmm = 1;
  const s = Math.sqrt(Math.max(0, 1 - x * x));
  for (let i = 1; i <= m; i++) pmm *= (2 * i - 1) * s;
  if (l === m) return pmm;
  let pm1 = x * (2 * m + 1) * pmm;
  if (l === m + 1) return pm1;
  let pl = 0;
  for (let k = m + 2; k <= l; k++) { pl = ((2 * k - 1) * x * pm1 - (k + m - 1) * pmm) / (k - m); pmm = pm1; pm1 = pl; }
  return pl;
}
const Yreal = (l, m) => (t, p) => legendre(l, Math.abs(m), Math.cos(t)) * (m > 0 ? Math.cos(m * p) : m < 0 ? Math.sin(-m * p) : 1);
/* the angles where the function vanishes: the interior roots of P_l^|m|(cos theta) (cones) and the planes of cos or sin */
function nodes(l, m) {
  const am = Math.abs(m), cones = [], N = 2000;
  let prev = legendre(l, am, Math.cos(1e-4));
  for (let i = 1; i <= N; i++) {
    const t = 1e-4 + (PI - 2e-4) * i / N, v = legendre(l, am, Math.cos(t));
    if (v === 0 || (v < 0) !== (prev < 0)) cones.push(t);
    prev = v;
  }
  const planes = [];
  for (let k = 0; k < am; k++) planes.push(m > 0 ? (2 * k + 1) * PI / (2 * am) : k * PI / am);
  return { cones, planes };
}
/* the angular part of Table 6.2.2's real orbitals, where l <= 2 */
const FORMS = {
  '0,0': '1', '1,0': '\\cos\\theta', '1,1': '\\sin\\theta\\cos\\phi', '1,-1': '\\sin\\theta\\sin\\phi',
  '2,0': '3\\cos^2\\theta - 1', '2,1': '\\sin\\theta\\cos\\theta\\cos\\phi', '2,-1': '\\sin\\theta\\cos\\theta\\sin\\phi',
  '2,2': '\\sin^2\\theta\\cos 2\\phi', '2,-2': '\\sin^2\\theta\\sin 2\\phi',
};
const formOf = (l, m) => FORMS[`${l},${m}`] ?? `P_{${l}}^{${Math.abs(m)}}(\\cos\\theta)${m > 0 ? `\\cos ${m}\\phi` : m < 0 ? `\\sin ${-m}\\phi` : ''}`;

/* =====================================================================
   FIGURE 6.2.1: the pyramid of real spherical harmonics, l = 0 to 5.
   Mathematical 3D, still (an angular function has no time in it). Two
   stages: above, the book's pyramid as a locked view (36 small surfaces
   r = |Y|, row l of 2l + 1, from the book's own viewpoint, no orbit: 36
   meshes in one orbiting scene would turn as one board, which shows less
   than one surface turned alone); below, the chosen (l, m) enlarged in a free
   orbit with its nodal cones and planes drawn faint. Each surface is two
   sheets, r = max(Y, 0) and r = max(-Y, 0), in two tones of the wavefunction
   hue, so the sign reads at once and each part has its hover name. Every
   surface is scaled to its own greatest value. Choices l (0 to 5) and m
   (-l to l), opening on (2, 1). No buttons; flat fallback from the library.
===================================================================== */
(function () {
  const d = sim('sim-harmonics');
  const top = document.createElement('div'), big = document.createElement('div');
  d.stage.appendChild(top); d.stage.appendChild(big);
  const PB = [[-0.6, 0.6], [-6.6, 5.6], [-5.6, 0.5]];
  const P = F.space3d({ stage: top, fig: d.fig }, { box: PB, h: 380, turn: -PI / 2, tilt: 0.18, fit: 2.9, locked: true });
  const BB = [[-1.15, 1.15], [-1.15, 1.15], [-1.15, 1.15]];
  const S = F.space3d({ stage: big, fig: d.fig }, { box: BB, h: 520, turn: -2.2, tilt: 0.35, fit: 2.2, spin: 'off', zoom: false });
  const Lc = F.choice(d.controls, { label: 'l', key: 'l', options: [0, 1, 2, 3, 4, 5].map((k) => ({ value: String(k), label: String(k) })), value: '2', aria: 'the angular momentum quantum number l', onInput: () => fixM() });
  const mOpts = (l) => Array.from({ length: 2 * l + 1 }, (_, i) => i - l).map((m) => ({ value: String(m), label: signed(m) }));
  const Mc = F.choice(d.controls, { label: 'm_l', key: 'm', options: mOpts(2), value: '1', aria: 'the magnetic quantum number m_l' });
  function fixM() { const l = +Lc.value; Mc.options(mOpts(l), String(Math.max(-l, Math.min(l, +Mc.value)))); }
  /* the two sheets of one surface, centred at c, greatest radius R */
  function surface(l, m, c, R, nt, np, pos, neg, name) {
    const f = Yreal(l, m);
    let mx = 0;
    for (let j = 0; j <= nt; j++) for (let i = 0; i <= np; i++) mx = Math.max(mx, Math.abs(f(PI * j / nt, 2 * PI * i / np)));
    const rowsOf = (sg) => Array.from({ length: nt + 1 }, (_, j) => {
      const t = PI * j / nt;
      return Array.from({ length: np + 1 }, (_, i) => {
        const p = 2 * PI * i / np, r = R * Math.max(0, sg * f(t, p)) / mx;
        return [c[0] + r * Math.sin(t) * Math.cos(p), c[1] + r * Math.sin(t) * Math.sin(p), c[2] + r * Math.cos(t)];
      });
    });
    const out = [{ k: 'sheet', rows: rowsOf(1), color: pos, alpha: 0.95, name: `${name}: where it is positive` }];
    if (l > 0) out.push({ k: 'sheet', rows: rowsOf(-1), color: neg, alpha: 0.95, name: `${name}: where it is negative` });
    return out;
  }
  const at = (l, m) => [0, m * 1.0, -l * 1.08];   /* the pyramid stands in the yz-plane, square to the locked view */
  let lastP = '';
  function draw() {
    const l = +Lc.value, m = Math.max(-l, Math.min(l, +Mc.value)), cw = C('wavefunction');
    const pos = cw, neg = mixColor(cw, PAL.panel, 0.6);
    /* the pyramid, rebuilt only when a colour or the choice changes */
    const sig = `${pos}|${neg}|${l},${m}|${PAL.ink}`;
    if (sig !== lastP) {
      lastP = sig;
      const marks = [];
      for (let L = 0; L <= 5; L++) {
        for (let M = -L; M <= L; M++) marks.push(...surface(L, M, at(L, M), 0.42, 14, 22, pos, neg, `the spherical harmonic l = ${L}, m_l = ${signed(M)}`));
        marks.push({ k: 'label', s: `l = ${L}`, p: [0, -6.3, -L * 1.08], color: PAL.muted, cls: 'tick' });
      }
      const c = at(l, m), ring = Array.from({ length: 49 }, (_, i) => { const a = 2 * PI * i / 48; return [0.5, c[1] + 0.52 * Math.cos(a), c[2] + 0.52 * Math.sin(a)]; });
      marks.push({ k: 'line', pts: ring, color: PAL.ink, w: 3, name: `the one enlarged below, l = ${l}, m_l = ${signed(m)}` });
      P.set('pyramid', marks);
    }
    /* the enlarged one */
    const { cones, planes } = nodes(l, m), R = 1.0, guide = alpha(PAL.ink, 0.12);
    S.set('surface', surface(l, m, [0, 0, 0], R, 48, 72, pos, neg, `the spherical harmonic l = ${l}, m_l = ${signed(m)}`));
    const nodal = [];
    cones.forEach((t) => {
      const rows = [0, 1].map((k) => Array.from({ length: 49 }, (_, i) => { const p = 2 * PI * i / 48, r = 1.1 * k; return [r * Math.sin(t) * Math.cos(p), r * Math.sin(t) * Math.sin(p), r * Math.cos(t)]; }));
      nodal.push({ k: 'sheet', rows, color: guide, alpha: 0.12, name: Math.abs(t - PI / 2) < 0.01 ? 'a nodal plane, the xy-plane, θ = 90°' : `a nodal cone, θ = ${fmt(t * 180 / PI, 1)}°` });
    });
    planes.forEach((p) => {
      const u = [Math.cos(p), Math.sin(p), 0];
      const rows = [-1.1, 1.1].map((s) => [-1.1, 1.1].map((z) => [s * u[0], s * u[1], z]));
      nodal.push({ k: 'sheet', rows, color: guide, alpha: 0.12, name: `a nodal plane through z, φ = ${fmt(p * 180 / PI, 0)}°` });
    });
    S.set('nodes', nodal);
    S.set('axes', F.space.axes(BB, { ticks: 0 }));
    const eq = cones.some((t) => Math.abs(t - PI / 2) < 0.01), nc = cones.length - (eq ? 1 : 0), np = planes.length;
    const NUM = ['no', 'one', 'two', 'three', 'four', 'five'];
    const parts = [...(nc ? [`${NUM[nc]} nodal cone${nc > 1 ? 's' : ''} about z`] : []), ...(eq ? ['a nodal plane in the xy-plane'] : []), ...(np ? [`${NUM[np]} nodal plane${np > 1 ? 's' : ''} through z`] : [])];
    const said = parts.length ? parts.length === 1 ? parts[0] : `${parts.slice(0, -1).join(', ')} and ${parts[parts.length - 1]}` : 'no angular node: the same value in every direction';
    S.headline(`$l = ${l}$, $m_l = ${signed(m)}$: ${said}`);
    tex(d.readout, `\\kYlm(\\theta, \\phi) \\propto ${formOf(l, m)} \\\\ \\text{angular nodes} = l = ${l} = (l - |m_l|) + |m_l| = ${l - Math.abs(m)} + ${Math.abs(m)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- the real hydrogen orbitals of Table 6.2.2, Z = 1, lengths in a0 ---------- */
const E = Math.exp, SQ = Math.sqrt;
const ORB = {
  '1s': { n: 1, l: 0, f: (x, y, z, r) => E(-r) / SQ(PI), tex: '\\dfrac{1}{\\sqrt{\\pi}}\\left(\\dfrac{Z}{\\kao}\\right)^{3/2}e^{-Z\\kr/\\kao}' },
  '2s': { n: 2, l: 0, f: (x, y, z, r) => (2 - r) * E(-r / 2) / SQ(32 * PI), tex: '\\dfrac{1}{\\sqrt{32\\pi}}\\left(\\dfrac{Z}{\\kao}\\right)^{3/2}\\left(2 - \\dfrac{Z\\kr}{\\kao}\\right)e^{-Z\\kr/2\\kao}', nodes: [2] },
  '2px': { n: 2, l: 1, f: (x, y, z, r) => x * E(-r / 2) / SQ(32 * PI), tex: '\\dfrac{1}{\\sqrt{32\\pi}}\\left(\\dfrac{Z}{\\kao}\\right)^{5/2}\\kr e^{-Z\\kr/2\\kao}\\sin\\theta\\cos\\phi', lab: '2p_x' },
  '2py': { n: 2, l: 1, f: (x, y, z, r) => y * E(-r / 2) / SQ(32 * PI), tex: '\\dfrac{1}{\\sqrt{32\\pi}}\\left(\\dfrac{Z}{\\kao}\\right)^{5/2}\\kr e^{-Z\\kr/2\\kao}\\sin\\theta\\sin\\phi', lab: '2p_y' },
  '3s': { n: 3, l: 0, f: (x, y, z, r) => (27 - 18 * r + 2 * r * r) * E(-r / 3) / (81 * SQ(3 * PI)), tex: '\\dfrac{1}{81\\sqrt{3\\pi}}\\left(\\dfrac{Z}{\\kao}\\right)^{3/2}\\left(27 - 18\\dfrac{Z\\kr}{\\kao} + 2\\dfrac{Z^2\\kr^2}{\\kao^2}\\right)e^{-Z\\kr/3\\kao}', nodes: [(18 - SQ(108)) / 4, (18 + SQ(108)) / 4] },
  '3px': { n: 3, l: 1, f: (x, y, z, r) => SQ(2) / (81 * SQ(PI)) * x * (6 - r) * E(-r / 3), tex: '\\dfrac{\\sqrt{2}}{81\\sqrt{\\pi}}\\left(\\dfrac{Z}{\\kao}\\right)^{5/2}\\kr\\left(6 - \\dfrac{Z\\kr}{\\kao}\\right)e^{-Z\\kr/3\\kao}\\sin\\theta\\cos\\phi', nodes: [6], lab: '3p_x' },
  '3py': { n: 3, l: 1, f: (x, y, z, r) => SQ(2) / (81 * SQ(PI)) * y * (6 - r) * E(-r / 3), tex: '\\dfrac{\\sqrt{2}}{81\\sqrt{\\pi}}\\left(\\dfrac{Z}{\\kao}\\right)^{5/2}\\kr\\left(6 - \\dfrac{Z\\kr}{\\kao}\\right)e^{-Z\\kr/3\\kao}\\sin\\theta\\sin\\phi', nodes: [6], lab: '3p_y' },
  '3dz2': { n: 3, l: 2, f: (x, y, z, r) => (3 * z * z - r * r) * E(-r / 3) / (81 * SQ(6 * PI)), tex: '\\dfrac{1}{81\\sqrt{6\\pi}}\\left(\\dfrac{Z}{\\kao}\\right)^{7/2}\\kr^2e^{-Z\\kr/3\\kao}\\left(3\\cos^2\\theta - 1\\right)', lab: '3d_{z^2}' },
  '3dx2y2': { n: 3, l: 2, f: (x, y, z, r) => (x * x - y * y) * E(-r / 3) / (81 * SQ(2 * PI)), tex: '\\dfrac{1}{81\\sqrt{2\\pi}}\\left(\\dfrac{Z}{\\kao}\\right)^{7/2}\\kr^2e^{-Z\\kr/3\\kao}\\sin^2\\theta\\cos 2\\phi', lab: '3d_{x^2-y^2}' },
  '3dxy': { n: 3, l: 2, f: (x, y, z, r) => 2 * x * y * E(-r / 3) / (81 * SQ(2 * PI)), tex: '\\dfrac{1}{81\\sqrt{2\\pi}}\\left(\\dfrac{Z}{\\kao}\\right)^{7/2}\\kr^2e^{-Z\\kr/3\\kao}\\sin^2\\theta\\sin 2\\phi', lab: '3d_{xy}' },
};
const labOf = (k) => ORB[k].lab ?? k;
const plainLab = (k) => labOf(k).replace(/_\{?([^}]*)\}?/, (_, s) => s.replace('^2', '²'));

/* =====================================================================
   FIGURE 6.2.2: |psi|^2 in the xy-plane, two orbitals side by side.
   Still, 2D: the slice through the nucleus is the book's own view and the
   clearer one. A false-colour map on one scale with its legend (root 7.1):
   each panel's |psi|^2 as a fraction of its greatest value in the plane,
   viridis stops (facts), with contour lines at 0.1, 0.3, 0.5, 0.7, 0.9.
   Two selects, opening on the book's 2p_x and 3p_x. The orbitals listed are
   those of Table 6.2.2 that are not zero everywhere in the plane. Window
   +-6, 14, 25 a0 for n = 1, 2, 3, so each orbital fills its panel; the
   ticks say the size. The radial node of 3p_x (r = 6 a0) is the dark ring
   inside its lobes.
===================================================================== */
(function () {
  const d = sim('sim-contour', 790);
  const opts = Object.keys(ORB).map((k) => ({ value: k, label: plainLab(k) }));
  const A = F.select(d.controls, { label: '\\text{left}', key: 'left', options: opts, value: '2px', aria: 'the orbital on the left' });
  const B = F.select(d.controls, { label: '\\text{right}', key: 'right', options: opts, value: '3px', aria: 'the orbital on the right' });
  const RAMP = ['#440154', '#3b528b', '#21918c', '#5ec962', '#fde725'];
  const ramp = (v) => { const k = Math.max(0, Math.min(1, v)) * (RAMP.length - 1), i = Math.min(RAMP.length - 2, Math.floor(k)); return mixColor(F.fact(RAMP[i]), F.fact(RAMP[i + 1]), k - i); };
  const WIN = { 1: 6, 2: 14, 3: 25 }, NG = 120, LEVELS = [0.02, 0.1, 0.3, 0.5, 0.7, 0.9];
  let hits = []; F.hover(d.stage, () => hits);
  const cache = {};
  function grid(k) {
    if (cache[k]) return cache[k];
    const o = ORB[k], w = WIN[o.n], g = [];
    let mx = 0;
    for (let j = 0; j <= NG; j++) { const row = []; for (let i = 0; i <= NG; i++) { const x = -w + 2 * w * i / NG, y = -w + 2 * w * j / NG, r = Math.hypot(x, y), v = o.f(x, y, 0, r) ** 2; row.push(v); mx = Math.max(mx, v); } g.push(row); }
    return (cache[k] = { g: g.map((row) => row.map((v) => v / mx)), w, mx });
  }
  function panel(ctx, k, box) {
    const { g, w, mx } = grid(k);
    const ax = axes(ctx, box, [-w, w], [-w, w], { nx: 4, ny: 4, xl: 'x (a₀)', yl: 'y (a₀)', xc: C('length'), yc: C('length') });
    const cw = (box.r - box.l) / NG, ch = (box.b - box.t) / NG;
    for (let j = 0; j < NG; j++) for (let i = 0; i < NG; i++) {
      const v = (g[j][i] + g[j][i + 1] + g[j + 1][i] + g[j + 1][i + 1]) / 4;
      ctx.fillStyle = ramp(v); ctx.fillRect(Math.floor(box.l + i * cw), Math.floor(box.b - (j + 1) * ch), Math.ceil(cw) + 1, Math.ceil(ch) + 1);
    }
    const ink = alpha(F.fact('#ffffff'), 0.75);
    LEVELS.forEach((c) => {
      F.space.contours((s, t) => { const i = Math.min(NG, Math.round(s * NG)), j = Math.min(NG, Math.round(t * NG)); return g[j][i]; }, c, NG).forEach((run) => {
        ctx.save(); ctx.strokeStyle = ink; ctx.lineWidth = 1.6; ctx.beginPath();
        run.forEach(([s, t], i) => { const x = box.l + s * (box.r - box.l), y = box.b - t * (box.b - box.t); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); });
        ctx.stroke(); ctx.restore();
      });
    });
    /* the radial nodes, dashed circles where the density is zero */
    (ORB[k].nodes ?? []).forEach((rn) => {
      const cx = ax.X(0), cy = ax.Y(0), rx = ax.X(rn) - cx;
      ctx.save(); ctx.strokeStyle = alpha(F.fact('#ffffff'), 0.9); ctx.lineWidth = 2.5; ctx.setLineDash([10, 10]); ctx.beginPath(); ctx.arc(cx, cy, rx, 0, 2 * PI); ctx.stroke(); ctx.restore();
      hits.push({ x: cx + rx * Math.SQRT1_2, y: cy - rx * Math.SQRT1_2, r: 16, name: `a radial node of ${plainLab(k)}, the circle r = ${fmt(rn, 2)} a₀` });
    });
    text(ctx, `$\\kpsi_{${labOf(k)}}$`, (box.l + box.r) / 2, box.t - 40, PAL.ink, { size: 24, align: 'center', tex: true });
    hits.push({ x: (box.l + box.r) / 2, y: (box.t + box.b) / 2, r: (box.r - box.l) / 2, name: `|ψ|² of ${plainLab(k)} in the xy-plane; its greatest value is ${fmt(mx * 1e3, 3)} × 10⁻³ a₀⁻³` });
    return ax;
  }
  const nodeLine = (k) => {
    const o = ORB[k], nr = o.n - o.l - 1;
    const at = (o.nodes ?? []).map((r) => `${fmt(r, 2)}\\,\\kao`).join(',\\ ');
    return `n - l - 1 = ${o.n} - ${o.l} - 1 = ${nr}${nr ? `: \\kr = ${at}` : ''}`;
  };
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    panel(ctx, A.value, { l: 130, r: 630, t: 110, b: 610 });
    panel(ctx, B.value, { l: 850, r: 1350, t: 110, b: 610 });
    F.legend(ctx, { l: 130, r: 1350, t: 690, b: 780 }, [{ ramp: RAMP.map((h) => F.fact(h)), ends: ['0', '1'], s: '|ψ|² as a fraction of its greatest value in the plane' }], { corner: 'top', panel: false });
    tex(d.readout, `\\kpsi_{${labOf(A.value)}} = ${ORB[A.value].tex} \\\\ ${nodeLine(A.value)} \\\\ \\kpsi_{${labOf(B.value)}} = ${ORB[B.value].tex} \\\\ ${nodeLine(B.value)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 6.2.3 + 6.2.4 + 6.2.5 + 6.2.6: R, R^2 and r^2 R^2 on one r axis.
   Still with a morph: a choice of orbital (Table 6.4.1's six), opening on
   2s, the orbital Figure 6.2.6 shows; changing it bends each curve into the
   next, so the radial nodes slide in as n grows. r from 0 to 25 a0, fixed,
   so the orbitals are seen to grow with n. The y ranges follow the
   orbital (the zoom this plan line names): 3d's R is a fiftieth of 1s's, and
   on one fixed scale it would be a flat line. A probe slider r (0 to 25 a0,
   default the 2s node at 2 a0, the radial nodes as specials) reads the
   three curves. Book's 4 pi r^2 R^2 is 4 pi too large: drawn here r^2 R^2,
   the probability per unit r of finding the electron in the shell (a
   correction through the row). Nodes dashed through all three graphs.
===================================================================== */
(function () {
  const d = sim('sim-radial', 860);
  const RAD = {
    '1s': { n: 1, l: 0, f: (r) => 2 * E(-r), nodes: [], tex: '2\\left(\\dfrac{Z}{\\kao}\\right)^{3/2}e^{-\\krho}' },
    '2s': { n: 2, l: 0, f: (r) => (2 - r) * E(-r / 2) / (2 * SQ(2)), nodes: [2], tex: '\\dfrac{1}{2\\sqrt{2}}\\left(\\dfrac{Z}{\\kao}\\right)^{3/2}(2 - \\krho)e^{-\\krho/2}' },
    '2p': { n: 2, l: 1, f: (r) => r * E(-r / 2) / (2 * SQ(6)), nodes: [], tex: '\\dfrac{1}{2\\sqrt{6}}\\left(\\dfrac{Z}{\\kao}\\right)^{3/2}\\krho e^{-\\krho/2}' },
    '3s': { n: 3, l: 0, f: (r) => 2 / (81 * SQ(3)) * (27 - 18 * r + 2 * r * r) * E(-r / 3), nodes: [(18 - SQ(108)) / 4, (18 + SQ(108)) / 4], tex: '\\dfrac{2}{81\\sqrt{3}}\\left(\\dfrac{Z}{\\kao}\\right)^{3/2}(27 - 18\\krho + 2\\krho^2)e^{-\\krho/3}' },
    '3p': { n: 3, l: 1, f: (r) => 4 / (81 * SQ(6)) * (6 * r - r * r) * E(-r / 3), nodes: [6], tex: '\\dfrac{4}{81\\sqrt{6}}\\left(\\dfrac{Z}{\\kao}\\right)^{3/2}(6\\krho - \\krho^2)e^{-\\krho/3}' },
    '3d': { n: 3, l: 2, f: (r) => 4 / (81 * SQ(30)) * r * r * E(-r / 3), nodes: [], tex: '\\dfrac{4}{81\\sqrt{30}}\\left(\\dfrac{Z}{\\kao}\\right)^{3/2}\\krho^2e^{-\\krho/3}' },
  };
  /* y ranges per orbital, from their extremes on 0 to 25 a0 */
  Object.values(RAD).forEach((o) => {
    let lo = 0, hi = 0, h2 = 0, hp = 0;
    for (let i = 0; i <= 2500; i++) { const r = i / 100, v = o.f(r); lo = Math.min(lo, v); hi = Math.max(hi, v); h2 = Math.max(h2, v * v); hp = Math.max(hp, r * r * v * v); }
    o.yR = [lo < -1e-9 ? lo * 1.25 - 0.06 * hi : 0, hi * 1.12]; o.y2 = [0, h2 * 1.12]; o.yP = [0, hp * 1.15];
  });
  const K = F.choice(d.controls, { label: '\\text{orbital}', key: 'orbital', options: Object.keys(RAD).map((k) => ({ value: k, label: k })), value: '2s', aria: 'the orbital' });
  const Rp = ctl(d.controls, { label: '\\kr', cls: 'length', key: 'r', min: 0, max: 25, step: 0.01, value: 2, unit: 'a₀', dec: 2,
    specials: [0, 1].map((i) => ({ at: () => RAD[K.value].nodes[i] ?? null, label: 'a radial node' })), aria: 'the probe distance r in Bohr radii' });
  let hits = []; F.hover(d.stage, () => hits);
  const sci = (v) => (Math.abs(v) < 5e-5 ? '0.000' : Math.abs(v) >= 0.01 ? fmt(v, 3) : `${fmt(v / 10 ** Math.floor(Math.log10(Math.abs(v))), 2)} \\times 10^{${Math.floor(Math.log10(Math.abs(v)))}}`);
  function draw() {
    const { ctx, W } = begin(d.c);
    hits = [];
    const o = RAD[K.value], r = Rp.v, cw = C('wavefunction'), cp = C('probability-density'), cl = C('length');
    const fR = (k) => RAD[k].f, f2 = (k) => (x) => RAD[k].f(x) ** 2, fP = (k) => (x) => x * x * RAD[k].f(x) ** 2;
    const rangeOf = (key) => K.mix((k) => RAD[k][key]);
    const L = 170, Rr = W - 70;
    const boxes = [{ l: L, r: Rr, t: 70, b: 245 }, { l: L, r: Rr, t: 335, b: 510 }, { l: L, r: Rr, t: 600, b: 775 }];
    const ax1 = axes(ctx, boxes[0], [0, 25], rangeOf('yR'), { nx: 5, ny: 3, nice: true, xl: '', yl: 'R (a₀^{−3/2})', yc: cw });
    const ax2 = axes(ctx, boxes[1], [0, 25], rangeOf('y2'), { nx: 5, ny: 3, nice: true, xl: '', yl: 'R² (a₀^{−3})', yc: cp });
    const ax3 = axes(ctx, boxes[2], [0, 25], rangeOf('yP'), { nx: 5, ny: 3, nice: true, xl: 'distance r (a₀)', yl: 'r²R² (a₀^{−1})', xc: cl, yc: cp });
    line(ctx, ax1.X(0), ax1.Y(0), ax1.X(25), ax1.Y(0), alpha(PAL.ink, 0.3), 2);
    /* the radial nodes, through all three */
    o.nodes.forEach((rn) => {
      const x = ax1.X(rn);
      boxes.forEach((b) => line(ctx, x, b.t, x, b.b, alpha(PAL.ink, 0.35), 2, [10, 10]));
      hits.push({ x, y: (boxes[0].b + boxes[1].t) / 2, r: 18, name: `a radial node at r = ${fmt(rn, 2)} a₀, where all three curves are zero` });
    });
    K.curve(ctx, fR, 0, 25, ax1.X, ax1.Y, cw, 5, 400);
    K.curve(ctx, f2, 0, 25, ax2.X, ax2.Y, cp, 5, 400);
    K.curve(ctx, fP, 0, 25, ax3.X, ax3.Y, cp, 5, 400);
    /* the probe */
    const vR = o.f(r), v2 = vR * vR, vP = r * r * v2, x = ax1.X(r);
    boxes.forEach((b) => line(ctx, x, b.t, x, b.b, alpha(cl, 0.8), 3, [4, 8]));
    if (K.k >= 1) {
      [[ax1, vR, cw], [ax2, v2, cp], [ax3, vP, cp]].forEach(([ax, v, c]) => {
        const y = Math.max(ax.box.t, Math.min(ax.box.b, ax.Y(v)));
        dot(ctx, x, y, c, true, 9);
      });
    }
    const nr = o.n - o.l - 1;
    topline(ctx, nr === 0 ? `${K.value}: no radial node; $n - l - 1 = 0$.` : `${K.value}: ${nr === 1 ? 'one radial node' : 'two radial nodes'}, at ${o.nodes.map((v) => `$${fmt(v, 2)}\\,\\kao$`).join(' and ')}.`);
    tex(d.readout, `\\kRf(\\kr) = ${o.tex} = ${sci(vR)}\\ \\kao^{-3/2} \\\\ \\kRf(\\kr)^2 = ${sci(v2)}\\ \\kao^{-3} \\\\ \\kr^2\\kRf(\\kr)^2 = (${fmt(r, 2)}\\,\\kao)^2(${sci(v2)}\\ \\kao^{-3}) = ${sci(vP)}\\ \\kao^{-1}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
