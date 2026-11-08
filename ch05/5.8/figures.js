/* Figures for section 5.8 The Energy Levels of a Rigid Rotor. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['5.8'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, text, topline, dot, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const DEG = Math.PI / 180;
const SUB = '₀₁₂₃₄₅₆₇₈₉', sub = (k) => String(k).split('').map((c) => SUB[+c]).join('');
const signed = (m) => (m > 0 ? `+${m}` : m < 0 ? `−${-m}` : '0');

/* =====================================================================
   FIGURE 5.8.1 + 5.8.4: the rotor's orientation as a point on a sphere.
   Mathematical 3D (root 28.3): the book draws both figures in perspective,
   and the lesson is a direction in space. Still: the angles are the
   reader's, not a motion. Sliders theta (0 to 180 deg, default 50) and
   phi (0 to 360 deg, default 40). The sphere of radius r0 = 1 is a faint
   shell with its equator and a few meridians; the internuclear axis runs
   from the origin to the point; theta's arc from z, phi's in the xy-plane,
   the drop line to the plane. Free orbit, no ground; no spin, no zoom.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-sphere');
  const B = 1.25;
  const S = F.space3d(d, { box: [[-B, B], [-B, B], [-B, B]], h: 560, turn: -0.7, tilt: 0.38, fit: 3.3, spin: 'off', zoom: false });
  const TH = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 0, max: 180, step: 1, value: 50, unit: '°', dec: 0, aria: 'the polar angle theta in degrees' });
  const PH = ctl(d.controls, { label: '\\kvarphi', cls: 'angle', key: 'phi', min: 0, max: 360, step: 1, value: 40, unit: '°', dec: 0, aria: 'the azimuthal angle phi in degrees' });
  const ring = (f, n = 96) => Array.from({ length: n + 1 }, (_, i) => f(i / n));
  const shell = () => {
    const rows = [];
    for (let j = 0; j <= 24; j++) { const t = Math.PI * j / 24; rows.push(Array.from({ length: 49 }, (_, i) => { const p = 2 * Math.PI * i / 48; return [Math.sin(t) * Math.cos(p), Math.sin(t) * Math.sin(p), Math.cos(t)]; })); }
    return rows;
  };
  const SHELL = shell();
  function draw() {
    const th = TH.v * DEG, ph = PH.v * DEG, ca = C('angle'), cl = C('length');
    const P = [Math.sin(th) * Math.cos(ph), Math.sin(th) * Math.sin(ph), Math.cos(th)];
    const foot = [P[0], P[1], 0];
    const grid = [
      ...[0, 1, 2, 3, 4, 5].map((k) => ({ k: 'line', pts: ring((u) => { const t = Math.PI * u, p = k * Math.PI / 6; return [Math.sin(t) * Math.cos(p), Math.sin(t) * Math.sin(p), Math.cos(t)]; }), color: alpha(PAL.ink, 0.14), w: 1.5 })),
      { k: 'line', pts: ring((u) => [Math.cos(2 * Math.PI * u), Math.sin(2 * Math.PI * u), 0]), color: alpha(PAL.ink, 0.35), w: 2, name: 'the equator, θ = 90°' },
    ];
    S.set('shell', [{ k: 'sheet', rows: SHELL, color: PAL.soft, alpha: 0.18, name: `the sphere of radius r₀ that the rotor's axis sweeps` }, ...grid]);
    S.set('axes', F.space.axes([[-B, B], [-B, B], [-B, B]], { ticks: 0 }));
    const R = 0.34;
    const thArc = ring((u) => { const t = th * u; return [R * Math.sin(t) * Math.cos(ph), R * Math.sin(t) * Math.sin(ph), R * Math.cos(t)]; }, 40);
    const phArc = ring((u) => { const p = ph * u; return [R * Math.cos(p), R * Math.sin(p), 0]; }, 60);
    const mid = (a) => a[Math.floor(a.length / 2)];
    const out = (p, k) => [p[0] * k, p[1] * k, p[2] * k];
    S.set('point', [
      { k: 'line', pts: [[0, 0, 0], foot], color: alpha(PAL.ink, 0.5), w: 2, dash: [10, 10] },
      { k: 'line', pts: [P, foot], color: alpha(PAL.ink, 0.5), w: 2, dash: [4, 8], name: 'the drop line from the point to the xy-plane' },
      { k: 'arrow', a: [0, 0, 0], b: P, color: cl, w: 5, name: 'the internuclear axis, of fixed length r₀' },
      { k: 'dot', p: P, color: cl, r: 9, name: `the point (r₀, θ = ${fmt(TH.v, 0)}°, φ = ${fmt(PH.v, 0)}°)` },
      { k: 'label', s: '$\\krzero$', p: out(P, 0.55).map((v, i) => v + (i === 2 ? 0.08 : 0)), color: cl },
      ...(th > 2 * DEG ? [{ k: 'line', pts: thArc, color: ca, w: 4, name: 'θ, measured from the z axis' }, { k: 'label', s: '$\\ktheta$', p: out(mid(thArc), 1.45), color: ca }] : []),
      ...(ph > 2 * DEG && th > 2 * DEG && th < 178 * DEG ? [{ k: 'line', pts: phArc, color: ca, w: 4, name: 'φ, measured from the x axis in the xy-plane' }, { k: 'label', s: '$\\kvarphi$', p: out(mid(phArc), 1.45), color: ca }] : []),
    ]);
    const c = (v) => fmt(Math.abs(v) < 5e-3 ? 0 : v, 2);
    tex(d.readout, `\\kx = \\krzero \\sin\\ktheta \\cos\\kvarphi = ${c(P[0])}\\,\\krzero \\\\ \\ky = \\krzero \\sin\\ktheta \\sin\\kvarphi = ${c(P[1])}\\,\\krzero \\\\ \\kz = \\krzero \\cos\\ktheta = ${c(P[2])}\\,\\krzero`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 5.8.2: the rotor's levels E_J = J(J + 1) hbar^2/2I, J = 0 to 5,
   in units of hbar^2/2I (0, 2, 6, 12, 20, 30), each with its 2J + 1 states
   as dots along the level. Still. Choice J (0 to 4) lights one level, its
   states and the gap above it, 2(J + 1). y from 0 to 32, fixed. The other
   gaps are written small at the right so the growth reads at once.
===================================================================== */
(function () {
  const d = sim('sim-rotor-levels', 620);
  const J = F.choice(d.controls, { label: 'J', options: [0, 1, 2, 3, 4].map((k) => ({ value: String(k), label: String(k) })), value: '2', aria: 'the rotational quantum number J', key: 'J' });
  let hits = []; F.hover(d.stage, () => hits);
  const E = (j) => j * (j + 1);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const js = +J.value, ce = C('energy');
    const box = { l: 230, r: 1010, t: 110, b: 560 };
    const ax = F.axes(ctx, box, [0, 1], [0, 32], { nx: 0, ny: 0, xl: '', yl: 'energy (ħ²/2I)', yc: ce });
    for (let j = 0; j <= 5; j++) {
      const y = ax.Y(E(j)), on = j === js, w = on ? 6 : 3, col = on ? ce : alpha(ce, 0.55);
      line(ctx, box.l + 20, y, box.r - 20, y, col, w);
      text(ctx, `J = ${j}`, box.l - 16, y, on ? ce : PAL.muted, { size: on ? 22 : 17, weight: on ? 600 : 400, align: 'right' });
      text(ctx, String(E(j)), box.l + 6, y - 18, on ? ce : PAL.muted, { size: 17, align: 'left' });
      const n = 2 * j + 1, span = Math.min(box.r - box.l - 120, n * 70);
      for (let k = 0; k < n; k++) {
        const m = j - k, x = (box.l + box.r) / 2 + (n === 1 ? 0 : (k / (n - 1) - 0.5) * span);
        dot(ctx, x, y, on ? PAL.ink : alpha(PAL.ink, 0.45), true, on ? 8 : 5);
        hits.push({ x, y, r: 14, name: `the state J = ${j}, m_J = ${signed(m)}` });
        if (on && (k === 0 || k === n - 1) && n > 1) text(ctx, `m_J = ${signed(m)}`, x, y + 26, PAL.ink, { size: 17, align: 'center' });
        if (on && n === 1) text(ctx, 'm_J = 0', x, y - 22, PAL.ink, { size: 17, align: 'center' });
      }
      if (j < 5) {
        const y2 = ax.Y(E(j + 1));
        if (on) F.vbracket(ctx, box.r + 20, y2, y, ce, `ΔE = ${2 * (j + 1)} ħ²/2I`, 1);
        else text(ctx, `${2 * (j + 1)}`, box.r + 30, (y + y2) / 2, PAL.muted, { size: 17, align: 'left' });
      }
    }
    topline(ctx, `$J = ${js}$: ${2 * js + 1} state${js ? 's' : ''} at $${E(js)}\\,\\hbar^2/2\\kI$, and the next level is $${2 * (js + 1)}\\,\\hbar^2/2\\kI$ higher.`);
    tex(d.readout, `\\kE = J(J + 1)\\dfrac{\\hbar^2}{2\\kI} = ${js}(${js + 1})\\dfrac{\\hbar^2}{2\\kI} = ${E(js)}\\,\\dfrac{\\hbar^2}{2\\kI} \\\\ 2J + 1 = ${2 * js + 1} \\\\ \\kE_{${js + 1}} - \\kE_{${js}} = 2(J + 1)\\dfrac{\\hbar^2}{2\\kI} = ${2 * (js + 1)}\\,\\dfrac{\\hbar^2}{2\\kI}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 5.8.3: |Y_J^mJ|^2 as a polar plot against theta, J <= 2 (Table
   5.8.1; Chapter 6 owns the orbitals). Two views (archetype 10): 2D, the
   book's polar plot in a plane containing z (z up here), the distance from
   the centre |Y|^2 at angle theta; 3D, the same curve turned about z, a
   surface of revolution, since |Y|^2 does not depend on phi (mathematical
   3D, free orbit, mounted on the first switch). Choice (J, |mJ|), opening
   on the book's (1, 0); slider theta (0 to 180 deg, default 45) marks one
   direction and reads |Y|^2 there. One scale for every state: 0.4 per 280
   units, so |Y_0^0|^2 = 1/4pi is the small circle it is.
===================================================================== */
(function () {
  const d = sim('sim-ylm', 600);
  const STATES = {
    '00': { J: 0, m: 0, f: () => 1 / (4 * Math.PI), y: '\\dfrac{1}{4\\pi}' },
    '10': { J: 1, m: 0, f: (t) => 3 / (4 * Math.PI) * Math.cos(t) ** 2, y: '\\dfrac{3}{4\\pi}\\cos^2\\ktheta' },
    '11': { J: 1, m: 1, f: (t) => 3 / (8 * Math.PI) * Math.sin(t) ** 2, y: '\\dfrac{3}{8\\pi}\\sin^2\\ktheta' },
    '20': { J: 2, m: 0, f: (t) => 5 / (16 * Math.PI) * (3 * Math.cos(t) ** 2 - 1) ** 2, y: '\\dfrac{5}{16\\pi}(3\\cos^2\\ktheta - 1)^2' },
    '21': { J: 2, m: 1, f: (t) => 15 / (8 * Math.PI) * (Math.sin(t) * Math.cos(t)) ** 2, y: '\\dfrac{15}{8\\pi}\\sin^2\\ktheta\\cos^2\\ktheta' },
    '22': { J: 2, m: 2, f: (t) => 15 / (32 * Math.PI) * Math.sin(t) ** 4, y: '\\dfrac{15}{32\\pi}\\sin^4\\ktheta' },
  };
  const ST = F.select(d.controls, { label: '(J, m_J)', options: [['00', '(0, 0)'], ['10', '(1, 0)'], ['11', '(1, ±1)'], ['20', '(2, 0)'], ['21', '(2, ±1)'], ['22', '(2, ±2)']].map(([value, label]) => ({ value, label })), value: '10', aria: 'the state J and m_J', key: 'state' });
  const TH = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 0, max: 180, step: 1, value: 45, unit: '°', dec: 0, aria: 'the angle theta from the z axis in degrees' });
  const VIEW = F.choice(d.controls, { label: '\\text{view}', options: [{ value: '2d', label: '2D' }, { value: '3d', label: '3D' }], value: '2d', aria: 'a flat polar plot or the surface turned about z', key: 'view', onInput: () => show() });
  let hits = []; F.hover(d.stage, () => hits);
  let S = null, host = null;
  function show() {
    const three = VIEW.value === '3d';
    if (three && !S) {
      host = document.createElement('div'); d.stage.appendChild(host);
      S = F.space3d({ stage: host, fig: d.fig }, { box: [[-0.42, 0.42], [-0.42, 0.42], [-0.42, 0.42]], h: 600, turn: -0.7, tilt: 0.3, fit: 3.4, spin: 'off', zoom: false });
    }
    d.c.style.display = three ? 'none' : '';
    if (host) host.style.display = three ? '' : 'none';
    draw();
  }
  const K = 280 / 0.4;
  function draw() {
    const s = STATES[ST.value], th = TH.v * DEG, cp = C('probability-density'), ca = C('angle'), v = s.f(th);
    const sym = `|Y_{${s.J}}^{${s.m ? '\\pm' + s.m : '0'}}|^2`;
    if (VIEW.value === '3d' && S) {
      const rows = [];
      for (let j = 0; j <= 60; j++) { const t = Math.PI * j / 60, r = s.f(t); rows.push(Array.from({ length: 65 }, (_, i) => { const p = 2 * Math.PI * i / 64; return [r * Math.sin(t) * Math.cos(p), r * Math.sin(t) * Math.sin(p), r * Math.cos(t)]; })); }
      S.set('surf', [{ k: 'sheet', rows, color: cp, alpha: 0.85, name: `the surface |Y|² for J = ${s.J}, |m_J| = ${s.m}` }]);
      S.set('axes', F.space.axes([[-0.42, 0.42], [-0.42, 0.42], [-0.42, 0.42]], { ticks: 0 }));
      const P = [v * Math.sin(th), 0, v * Math.cos(th)], far = [0.42 * Math.sin(th), 0, 0.42 * Math.cos(th)];
      S.set('ray', [{ k: 'line', pts: [[0, 0, 0], far], color: ca, w: 3, dash: [10, 10], name: `the direction θ = ${fmt(TH.v, 0)}° in the xz-plane` }, { k: 'dot', p: P, color: cp, r: 8, name: `|Y|² = ${fmt(v, 3)} at θ = ${fmt(TH.v, 0)}°` }]);
    } else {
      const { ctx } = begin(d.c);
      hits = [];
      const O = { x: 700, y: 320 };
      [0.1, 0.2, 0.3, 0.4].forEach((r) => {
        ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.12); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(O.x, O.y, r * K, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
        text(ctx, fmt(r, 1), O.x + r * K * Math.cos(-0.35) + 6, O.y - r * K * Math.sin(-0.35) + 4, PAL.muted, { size: 17 });
      });
      line(ctx, O.x, O.y + 300, O.x, O.y - 300, PAL.muted, 2); F.arrow(ctx, O.x, O.y - 280, O.x, O.y - 300, PAL.muted, 2);
      text(ctx, 'z', O.x + 18, O.y - 292, PAL.ink, { size: 22, weight: 600 });
      line(ctx, O.x - 300, O.y, O.x + 300, O.y, alpha(PAL.ink, 0.35), 2, [10, 10]);
      text(ctx, 'xy-plane', O.x + 300, O.y + 22, PAL.muted, { size: 17, align: 'right' });
      const pts = [];
      for (let i = 0; i <= 360; i++) { const a = 2 * Math.PI * i / 360, t = a <= Math.PI ? a : 2 * Math.PI - a, r = s.f(t) * K, sx = a <= Math.PI ? 1 : -1; pts.push([O.x + sx * r * Math.sin(t), O.y - r * Math.cos(t)]); }
      ctx.save(); ctx.fillStyle = alpha(cp, 0.22); ctx.strokeStyle = cp; ctx.lineWidth = 5; ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
      const ex = O.x + 300 * Math.sin(th), ey = O.y - 300 * Math.cos(th), px = O.x + v * K * Math.sin(th), py = O.y - v * K * Math.cos(th);
      line(ctx, O.x, O.y, ex, ey, ca, 3, [10, 10]);
      if (th > 0.03) F.angleArc(ctx, { x: O.x, y: O.y }, 70, Math.PI / 2, Math.PI / 2 - th, '', null, ca);
      text(ctx, 'θ', O.x + 92 * Math.sin(th / 2), O.y - 92 * Math.cos(th / 2), ca, { size: 24, weight: 600, align: 'center' });
      dot(ctx, px, py, cp, true, 9);
      hits.push({ x: px, y: py, r: 16, name: `|Y|² = ${fmt(v, 3)} at θ = ${fmt(TH.v, 0)}°` });
      hits.push({ x: O.x + 200, y: O.y, r: 18, name: 'the xy-plane, θ = 90°' });
      F.legend(ctx, { l: 60, t: 60, r: 1340, b: 600 }, [{ s: '|Y|², distance from the center', color: cp, w: 5 }], { corner: 'tl' });
    }
    tex(d.readout, `${sym} = ${s.y} \\\\ ${sym} = ${fmt(v, 3)} \\text{ at } \\ktheta = ${fmt(TH.v, 0)}^\\circ`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
