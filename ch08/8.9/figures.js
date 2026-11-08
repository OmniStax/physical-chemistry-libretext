/* Figures for section 8.9 The Allowed Values of J - the Total Angular Momentum Quantum Number. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.9'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, fmt } = F;
const DEG = Math.PI / 180;
/* a half-integer or integer as the book writes it: 1/2, 3/2, 1 */
const q = (x) => (Math.abs(x % 1) > 1e-9 ? `${Math.round(2 * x)}/2` : String(Math.round(x)));
const qs = (x) => (x > 0 ? '+' : x < 0 ? '−' : '') + q(Math.abs(x));
const qt = (x) => (Math.abs(x % 1) > 1e-9 ? `\\tfrac{${Math.round(2 * Math.abs(x))}}{2}` : String(Math.round(Math.abs(x))));
const qts = (x) => (x < 0 ? '-' : x > 0 ? '+' : '') + qt(x);
const mag = (x) => Math.sqrt(x * (x + 1));
const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const mul = (a, k) => [a[0] * k, a[1] * k, a[2] * k];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const unit = (a) => { const n = Math.hypot(...a) || 1; return mul(a, 1 / n); };

/* =====================================================================
   FIGURE 8.9.1 + 8.9.2: L and S coupled to J.
   Mathematical 3D (root 28.3): the book draws the cones in perspective and
   the lesson is how three vectors stand in space. Still: in a state of
   definite J and m_J nothing precesses; the cones are the sets of equally
   possible directions (6.3.1's decision). Choices L (0-3), S (1/2, 1, 3/2),
   J from |L - S| to L + S and m_J from +J to -J; one slider, chi, turns L
   and S together round J, so the reader sees that with J fixed neither has
   a fixed direction. Opens on Figure 8.9.2's case, L = 1, S = 1/2, J = 3/2,
   m_J = +1/2. The scene is scaled
   per choice of L and S so the longest J they allow reaches 4.2 of the box's 5
   (the readout gives the true lengths). J's azimuth is held at 30 degrees: turning J about z is
   6.3.1's figure. Free orbit, pitch bound to +-80 degrees so z stays
   upright; no spin, no zoom; flat from the opening view without WebGL.
   S is drawn from the tip of L so the triangle J = L + S reads at once.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-ls-coupling');
  const B = 5;
  const S3 = F.space3d(d, { box: [[-B, B], [-B, B], [-B, B]], h: 640, turn: -2.2, tilt: 0.38, fit: 3.4, pitch: [-80 * DEG, 80 * DEG], spin: 'off', zoom: false });
  const jList = (L, S) => { const out = []; for (let j = L + S; j >= Math.abs(L - S) - 1e-9; j -= 1) out.push(j); return out; };
  const mList = (j) => { const out = []; for (let m = j; m >= -j - 1e-9; m -= 1) out.push(m); return out; };
  const jOpts = (L, S) => jList(L, S).map((j) => ({ value: String(j), label: q(j) }));
  const mOpts = (j) => mList(j).map((m) => ({ value: String(m), label: qs(m) }));
  const fixJ = () => { const L = +Lc.value, S = +Sc.value, js = jList(L, S), j = js.includes(+Jc.value) ? +Jc.value : js[0]; Jc.options(jOpts(L, S), String(j)); fixM(); };
  const fixM = () => { const j = +Jc.value, m = Math.max(-j, Math.min(j, +Mc.value)), ms = mList(j); const near = ms.reduce((a, b) => (Math.abs(b - m) < Math.abs(a - m) ? b : a), ms[0]); Mc.options(mOpts(j), String(near)); };
  const Lc = F.choice(d.controls, { label: 'L', key: 'L', options: [0, 1, 2, 3].map((l) => ({ value: String(l), label: String(l) })), value: '1', aria: 'the total orbital angular momentum quantum number L', onInput: fixJ });
  const Sc = F.choice(d.controls, { label: 'S', key: 'S', options: [0.5, 1, 1.5].map((s) => ({ value: String(s), label: q(s) })), value: '0.5', aria: 'the total spin quantum number S', onInput: fixJ });
  const Jc = F.choice(d.controls, { label: 'J', key: 'J', options: jOpts(1, 0.5), value: '1.5', aria: 'the total angular momentum quantum number J', onInput: fixM });
  const Mc = F.select(d.controls, { label: 'm_J', key: 'mJ', options: mOpts(1.5), value: '0.5', aria: 'the projection quantum number m_J' });
  const CH = ctl(d.controls, { label: 'χ', cls: 'angle', key: 'chi', min: 0, max: 360, step: 1, value: 40, unit: '°', dec: 0, aria: 'the angle of L and S round J, in degrees' });
  const ring = (f, n = 96) => Array.from({ length: n + 1 }, (_, i) => f(i / n));
  function draw() {
    const L = +Lc.value, S = +Sc.value, J = +Jc.value, mJ = +Mc.value, chi = CH.v * DEG;
    const u = 4.2 / mag(L + S);                      /* the scene's scale: the longest J this L and S allow reaches 4.2 */
    const aL = mag(L) * u, aS = mag(S) * u, aJ = mag(J) * u, zJ = mJ * u;
    const cl = C('angular-momentum'), ca = C('angle');
    /* J on its cone about z: polar angle from m_J, azimuth held at 30 degrees */
    const thJ = Math.acos(zJ / aJ), ph = 30 * DEG;
    const jh = [Math.sin(thJ) * Math.cos(ph), Math.sin(thJ) * Math.sin(ph), Math.cos(thJ)];
    const Jt = mul(jh, aJ);
    /* two unit vectors square to J, for the cone of L about J */
    const e1 = unit(Math.abs(jh[2]) > 0.95 ? cross(jh, [1, 0, 0]) : cross([0, 0, 1], jh)), e2 = cross(jh, e1);
    /* the angle between L and J: |S|^2 = |L|^2 + |J|^2 - 2|L||J| cos a */
    const cosA = aL > 0 ? Math.max(-1, Math.min(1, (aJ * aJ + aL * aL - aS * aS) / (2 * aJ * aL))) : 1, sinA = Math.sqrt(1 - cosA * cosA);
    const Lof = (t) => add(mul(jh, aL * cosA), mul(add(mul(e1, Math.cos(t)), mul(e2, Math.sin(t))), aL * sinA));
    const Lt = Lof(chi);
    const rJ = aJ * Math.sin(thJ);
    S3.set('axes', [
      { k: 'line', pts: [[0, 0, -B], [0, 0, B]], color: 'guide', w: 2, name: 'the z axis' },
      { k: 'label', s: '$\\kz$', p: [0, 0, B + 0.25], color: 'muted' },
      { k: 'line', pts: [[-B, 0, 0], [B, 0, 0]], color: alpha(PAL.ink, 0.22), w: 1.5 },
      { k: 'line', pts: [[0, -B, 0], [0, B, 0]], color: alpha(PAL.ink, 0.22), w: 1.5 },
    ]);
    /* J's cone of equally possible directions about z, its ring at J_z = m_J hbar */
    const coneJ = [];
    for (let j = 0; j <= 8; j++) { const s = j / 8; coneJ.push(ring((w) => [s * rJ * Math.cos(2 * Math.PI * w), s * rJ * Math.sin(2 * Math.PI * w), s * zJ], 64)); }
    S3.set('jcone', [
      { k: 'sheet', rows: coneJ, color: cl, alpha: 0.08, name: `the cone of directions J can take with m_J = ${qs(mJ)}` },
      { k: 'line', pts: ring((w) => [rJ * Math.cos(2 * Math.PI * w), rJ * Math.sin(2 * Math.PI * w), zJ]), color: alpha(cl, 0.45), w: 2, name: `J_z = ${qs(mJ)}ħ all round this ring` },
      { k: 'line', pts: [Jt, [0, 0, zJ]], color: alpha(PAL.ink, 0.45), w: 2, dash: [4, 8], name: `the drop to the z axis at J_z = ${qs(mJ)}ħ` },
      { k: 'dot', p: [0, 0, zJ], color: cl, r: 6, name: `J_z = ${qs(mJ)}ħ` },
    ]);
    /* L's cone about J, which S's tip shares: the tip of L runs round this ring as chi turns */
    const marks = [];
    if (aL > 0 && sinA > 1e-6) {
      const coneL = [];
      for (let j = 0; j <= 8; j++) { const s = j / 8; coneL.push(ring((w) => mul(Lof(2 * Math.PI * w), s), 64)); }
      marks.push({ k: 'sheet', rows: coneL, color: cl, alpha: 0.13, name: 'the cone of directions L can take with J fixed' });
      marks.push({ k: 'line', pts: ring((w) => Lof(2 * Math.PI * w)), color: alpha(cl, 0.6), w: 2.5, name: 'every place the tip of L can be, with S closing the triangle to J' });
      const R = Math.min(1.3, 0.45 * aL), arc = ring((w) => { const t = Math.acos(cosA) * w; return add(mul(jh, R * Math.cos(t)), mul(add(mul(e1, Math.cos(chi)), mul(e2, Math.sin(chi))), R * Math.sin(t))); }, 30);
      marks.push({ k: 'line', pts: arc, color: ca, w: 3, name: `the angle between L and J, ${fmt(Math.acos(cosA) / DEG, 1)}°` });
    }
    marks.push({ k: 'arrow', a: [0, 0, 0], b: Jt, color: cl, w: 7, name: `J: |J| = ${fmt(mag(J), 3)}ħ` });
    marks.push({ k: 'label', s: '$\\kJvec$', p: mul(Jt, 1 + 0.35 / aJ), color: cl });
    if (aL > 0) {
      marks.push({ k: 'arrow', a: [0, 0, 0], b: Lt, color: alpha(cl, 0.85), w: 4.5, name: `L: |L| = ${fmt(mag(L), 3)}ħ` });
      marks.push({ k: 'label', s: '$\\kLvec$', p: mul(Lt, 0.55), color: cl });
    }
    marks.push({ k: 'arrow', a: Lt, b: Jt, color: alpha(cl, 0.85), w: 4.5, name: `S, from the tip of L to the tip of J: |S| = ${fmt(mag(S), 3)}ħ` });
    marks.push({ k: 'label', s: '$\\kSvec$', p: add(mul(add(Lt, Jt), 0.5), mul(unit(add(add(Lt, Jt), mul(jh, -aJ))), -0.35)), color: cl });
    S3.set('vectors', marks);
    const js = jList(L, S).slice().reverse().map(q).join(', ');
    tex(d.readout, `|\\kJvec| = \\hbar\\sqrt{J(J+1)} = \\sqrt{${fmt(J * (J + 1), 2)}}\\,\\hbar = ${fmt(mag(J), 3)}\\,\\hbar \\\\ \\kJz = m_J\\hbar = ${qts(mJ)}\\,\\hbar \\\\ J = |L - S|, \\ldots, L + S = ${js}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
