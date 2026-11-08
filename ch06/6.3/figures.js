/* Figures for section 6.3 The Three Components of Angular Momentum Cannot be Measured Simultaneously with Arbitrary Precision. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.3'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, fmt } = F;
const DEG = Math.PI / 180;
const signed = (m) => (m > 0 ? `+${m}` : m < 0 ? `−${-m}` : '0');

/* =====================================================================
   FIGURE 6.3.1: the vector model of orbital angular momentum.
   Mathematical 3D (root 28.3): the book draws the cones in perspective,
   and the lesson is a direction in space. Still: in an eigenstate nothing
   precesses, the cone is the set of equally possible vectors (config).
   Choice l (1, 2, 3; opening on the book's right panel, l = 2) and m_l
   (-l..l, opening on +1); slider for the vector's azimuth on its cone,
   which changes L_x and L_y while |L| and L_z stay. One scale for every
   l, in units of hbar: the box is +-3.6, so l = 3 (|L| = 3.46) fits and
   l = 1 (1.41) is drawn small, as it is. Every allowed m_l has its ring at
   height m_l on the sphere of radius |L|; the chosen one has its cone
   drawn. Free orbit, pitch bound to +-80 degrees so z stays upright; no
   spin, no zoom; flat view from the opening angle without WebGL.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-vector-model');
  const B = 3.6;
  const S = F.space3d(d, { box: [[-B, B], [-B, B], [-B, B]], h: 620, turn: -2.3, tilt: 0.45, fit: 3.1, pitch: [-80 * DEG, 80 * DEG], spin: 'off', zoom: false });
  const mOpts = (l) => Array.from({ length: 2 * l + 1 }, (_, i) => l - i).map((m) => ({ value: String(m), label: signed(m) }));
  const Lc = F.choice(d.controls, { label: 'l', key: 'l', options: [1, 2, 3].map((l) => ({ value: String(l), label: String(l) })), value: '2', aria: 'the angular momentum quantum number l',
    onInput: (v) => { const m = Math.max(-v, Math.min(+v, +M.value)); M.options(mOpts(+v), String(m)); } });
  const M = F.choice(d.controls, { label: 'm_l', key: 'm', options: mOpts(2), value: '1', aria: 'the magnetic quantum number m_l' });
  const PH = ctl(d.controls, { label: '\\kvarphi', cls: 'angle', key: 'phi', min: 0, max: 360, step: 1, value: 130, unit: '°', dec: 0, aria: 'the azimuth of the vector on its cone, in degrees' });
  const ring = (f, n = 96) => Array.from({ length: n + 1 }, (_, i) => f(i / n));
  function draw() {
    const l = +Lc.value, m = Math.max(-l, Math.min(l, +M.value)), ph = PH.v * DEG;
    const L = Math.sqrt(l * (l + 1)), rho = Math.sqrt(L * L - m * m);
    const cl = C('angular-momentum'), ca = C('angle');
    /* the sphere of radius |L| every vector ends on, and one ring per allowed m_l */
    const rows = [];
    for (let j = 0; j <= 24; j++) { const t = Math.PI * j / 24; rows.push(Array.from({ length: 49 }, (_, i) => { const p = 2 * Math.PI * i / 48; return [L * Math.sin(t) * Math.cos(p), L * Math.sin(t) * Math.sin(p), L * Math.cos(t)]; })); }
    const rings = [];
    for (let k = -l; k <= l; k++) {
      const r = Math.sqrt(L * L - k * k), on = k === m;
      rings.push({ k: 'line', pts: ring((u) => [r * Math.cos(2 * Math.PI * u), r * Math.sin(2 * Math.PI * u), k]), color: on ? cl : alpha(cl, 0.4), w: on ? 4 : 2,
        name: `the tips of every vector with m_l = ${signed(k)}: L_z = ${signed(k)}ħ` });
    }
    S.set('sphere', [{ k: 'sheet', rows, color: PAL.soft, alpha: 0.12, name: `the sphere of radius |L| = √${l * (l + 1)} ħ` }, ...rings]);
    S.set('axes', [
      { k: 'line', pts: [[0, 0, -B], [0, 0, B]], color: 'guide', w: 2, name: 'the z axis' },
      { k: 'label', s: '$\\kz$', p: [0, 0, B + 0.2], color: 'muted' },
      { k: 'line', pts: [[-B, 0, 0], [B, 0, 0]], color: alpha(PAL.ink, 0.25), w: 1.5 },
      { k: 'line', pts: [[0, -B, 0], [0, B, 0]], color: alpha(PAL.ink, 0.25), w: 1.5 },
      { k: 'label', s: '$\\kx$', p: [B + 0.2, 0, 0], color: 'muted', cls: 'bare' },
      { k: 'label', s: '$\\ky$', p: [0, B + 0.2, 0], color: 'muted', cls: 'bare' },
    ]);
    /* the chosen cone, its vector, the vector's z component and its shadow in the xy-plane */
    const tip = [rho * Math.cos(ph), rho * Math.sin(ph), m];
    const cone = [];
    for (let j = 0; j <= 8; j++) { const s = j / 8; cone.push(ring((u) => [s * rho * Math.cos(2 * Math.PI * u), s * rho * Math.sin(2 * Math.PI * u), s * m], 64)); }
    const th = Math.acos(m / L), R = 0.9;
    const arc = ring((u) => { const t = th * u; return [R * Math.sin(t) * Math.cos(ph), R * Math.sin(t) * Math.sin(ph), R * Math.cos(t)]; }, 40);
    S.set('vector', [
      { k: 'sheet', rows: cone, color: cl, alpha: 0.16, name: `the cone of equally possible vectors for l = ${l}, m_l = ${signed(m)}` },
      { k: 'arrow', a: [0, 0, 0], b: tip, color: cl, w: 6, name: `one vector of the cone: |L| = ${fmt(L, 2)}ħ, L_z = ${signed(m)}ħ` },
      { k: 'label', s: '$\\kLvec$', p: [tip[0] * 1.12, tip[1] * 1.12, tip[2] + (m >= 0 ? 0.3 : -0.3)], color: cl },
      { k: 'line', pts: [tip, [0, 0, m]], color: alpha(PAL.ink, 0.5), w: 2, dash: [4, 8], name: `the drop to the z axis at L_z = ${signed(m)}ħ` },
      { k: 'line', pts: [[0, 0, 0], [tip[0], tip[1], 0]], color: alpha(cl, 0.6), w: 3, dash: [10, 10], name: `the part in the xy-plane, of length √(L_x² + L_y²) = ${fmt(rho, 2)}ħ` },
      { k: 'line', pts: [tip, [tip[0], tip[1], 0]], color: alpha(PAL.ink, 0.3), w: 1.5, dash: [4, 8] },
      { k: 'dot', p: [0, 0, m], color: cl, r: 7, name: `L_z = ${signed(m)}ħ` },
      { k: 'line', pts: arc, color: ca, w: 3, name: `the angle to the z axis, ${fmt(th / DEG, 1)}°` },
    ]);
    const lx = rho * Math.cos(ph), ly = rho * Math.sin(ph);
    tex(d.readout, `|\\kLvec| = \\sqrt{l(l+1)}\\,\\hbar = \\sqrt{${l * (l + 1)}}\\,\\hbar = ${fmt(L, 3)}\\,\\hbar \\\\ \\kLz = m_l\\hbar = ${m < 0 ? '-' : ''}${Math.abs(m)}\\,\\hbar \\\\ \\kLx^2 + \\kLy^2 = (l(l+1) - m_l^2)\\,\\hbar^2 = ${fmt(lx * lx + ly * ly, 0)}\\,\\hbar^2 \\\\ \\cos\\theta = \\dfrac{m_l}{\\sqrt{l(l+1)}} = ${fmt(m / L, 3)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
