/* Figures for section 10.2 Hybrid Orbitals in Water. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['10.2'] = function (root, F) {
const { tex, C, PAL, ctl, register, begin, fmt } = F;

/* the other sign of psi (6.6's rule): the hue a clear step toward whichever of ink and ground lies farther in lightness */
const lightOf = (c) => { const m = /^#([0-9a-f]{6})$/i.exec(c) ? [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16)) : (c.match(/[\d.]+/g) || [0, 0, 0]).slice(0, 3).map(Number); return (0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2]) / 255; };
const otherSign = (cw) => { const l = lightOf(cw), far = Math.abs(lightOf(PAL.ink) - l) > Math.abs(lightOf(PAL.panel) - l) ? PAL.ink : PAL.panel; return F.mixColor(cw, far, 0.55); };
const rng = (s) => () => { s |= 0; s = (s + 0x6d2b79f5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
const pct = (v) => `${fmt(100 * v, 0)}%`;
const deg = (c) => Math.acos(Math.max(-1, Math.min(1, c))) * 180 / Math.PI;

/* =====================================================================
   FIGURE 10.2.1 + 10.2.2 + 10.2.4: water's four hybrids and its angles.
   Mathematical 3D (root 28.3): the bond angle and the lone pairs out of the
   H-O-H plane are an arrangement in space. Still: no clock.
   One slider, the s character s_b of each O-H hybrid, 0 to 50%. With
   gamma^2 = s/(1 - s), cos(theta) = -gamma^2 (10.2.8) opens the bond angle:
   90 deg at 0 (10.2.1's pure p), 104.5 deg at 20% (water, 10.2.2), 109.5 deg
   at 25% (sp3), 180 deg at 50% (sp, Example 10.2.1). The lone pairs take the
   s that is left, s_l = 1/2 - s_b, so the p characters add to 3 (the
   section's sum rule), and open to their own angle by the same relation:
   115.4 deg for water (the second 10.2.4). Bonding hybrids in the xz plane
   about +z, lone pairs in the yz plane about -z; the four are orthonormal at
   every setting (checked: s_b s_l + ... cos = 0). Orbitals hydrogen-like
   Slater 2s and 2p sharing Slater's effective charge for oxygen, Z = 4.55
   (zeta = Z/2), so chi ~ r e^(-Zr/2)[sqrt(s/3) + sqrt(1 - s) cos(theta_n)]; r in a0, box
   +-2.4 a0; the H atoms at the measured 0.9584 A = 1.811 a0 along the
   bonding hybrids. Orbit free, no buttons; flat without WebGL.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-water');
  const Z = 4.55, B = 2.4, ROH = 1.811, NC = 40000, MAXP = 2200;
  const S = F.space3d(d, { box: [[-B, B], [-B, B], [-B, B]], h: 600, turn: -0.9, tilt: 0.35, fit: 2.6, pitch: [-85 * Math.PI / 180, 85 * Math.PI / 180], spin: 'off', zoom: false });
  const Sb = ctl(d.controls, { label: '\\text{s character of O–H hybrids}', cls: '', key: 's', min: 0, max: 0.5, step: 0.01, value: 0.2, unit: '', fmt: pct,
    specials: [{ at: 0, label: 'pure p, 90°' }, { at: 0.2, label: 'water, 104.5°' }, { at: 0.25, label: 'sp³, 109.5°' }, { at: 0.5, label: 'sp, 180°' }] });
  /* candidates in the hybrid's own frame (n = +z): r from a gamma law of shape 5 and rate Z, so their
     density per volume is r^2 e^(-Z r), the radial part of a Slater 2s or 2p squared; the direction uniform.
     The hybrid's density over that is its angular bracket squared, at most (sqrt(s/3) + sqrt(1 - s))^2, so
     each candidate is kept against its own fixed threshold and the cloud morphs as s moves */
  const rnd = rng(2027), cx = new Float32Array(NC), cy = new Float32Array(NC), cz = new Float32Array(NC), cu = new Float32Array(NC), cr = new Float32Array(NC);
  for (let i = 0; i < NC; i++) {
    let r = 0; for (let k = 0; k < 5; k++) r -= Math.log(1 - rnd()); r /= Z;
    const zc = 2 * rnd() - 1, ph = 2 * Math.PI * rnd(), sc = Math.sqrt(1 - zc * zc);
    cx[i] = r * sc * Math.cos(ph); cy[i] = r * sc * Math.sin(ph); cz[i] = r * zc; cr[i] = r; cu[i] = rnd();
  }
  const amp = (s, i) => Math.sqrt(s / 3) + Math.sqrt(1 - s) * cz[i] / cr[i];
  /* only where the density is at least CUT of its peak, so each cloud shows the orbital's own lobes */
  const CUT = 0.12;
  const memo = new Map();
  function cloud(s) {
    const key = s.toFixed(3); if (memo.has(key)) return memo.get(key);
    const mx = (Math.sqrt(s / 3) + Math.sqrt(1 - s)) ** 2, a = new Float32Array(NC), w = new Float32Array(NC);
    for (let i = 0; i < NC; i++) { const v = amp(s, i); a[i] = v; w[i] = v * v; }
    const out = [];
    for (let i = 0; i < NC && out.length < MAXP; i++) if (cr[i] < B && cu[i] * mx < w[i] && w[i] * (cr[i] * Math.exp(1 - (Z / 2) * cr[i]) * (Z / 2)) ** 2 > CUT * mx) out.push([cx[i], cy[i], cz[i], a[i] >= 0 ? 1 : -1]);
    if (memo.size > 80) memo.clear();
    memo.set(key, out); return out;
  }
  /* rotate +z onto n = (sin t cos f, sin t sin f, cos t): tilt by t in the plane of azimuth f */
  const onto = (t, f) => (p) => {
    const x1 = p[0] * Math.cos(t) + p[2] * Math.sin(t), z1 = -p[0] * Math.sin(t) + p[2] * Math.cos(t);
    return [x1 * Math.cos(f) - p[1] * Math.sin(f), x1 * Math.sin(f) + p[1] * Math.cos(f), z1];
  };
  const leg = F.makeCanvas(d.stage, 56);
  let last = '';
  function draw() {
    const sb = Math.min(0.5, Math.max(0, Sb.v)), sl = 0.5 - sb;
    const g2b = sb / (1 - sb), g2l = sl / (1 - sl), thb = deg(-g2b), thl = deg(-g2l);
    const cw = C('wavefunction'), up = cw, down = otherSign(cw);
    const key = [sb.toFixed(3), up, down, PAL.ink, PAL.panel].join('|');
    if (key !== last) {
      last = key;
      const hb = thb * Math.PI / 360, hl = thl * Math.PI / 360;
      const bond = cloud(sb), lone = cloud(sl);
      const lay = (pts, t, f, what, u, dn) => { const R = onto(t, f), plus = [], minus = []; for (const p of pts) (p[3] > 0 ? plus : minus).push(R(p));
        return [{ k: 'points', pts: plus, color: u, r: 2.4, name: `${what}, where it is positive` }, { k: 'points', pts: minus, color: dn, r: 2.4, name: `${what}, where it is negative` }]; };
      const fu = F.mixColor(PAL.ink, PAL.panel, 0.5), fd = F.mixColor(PAL.ink, PAL.panel, 0.72);
      S.set('axes', F.space.axes([[-B, B], [-B, B], [-B, B]], {}));
      S.set('bonds', [...lay(bond, hb, 0, `an O–H bonding hybrid, ${pct(sb)} s`, up, down), ...lay(bond, -hb, 0, `an O–H bonding hybrid, ${pct(sb)} s`, up, down)]);
      S.set('lone', [...lay(lone, Math.PI - hl, Math.PI / 2, `a lone-pair hybrid, ${pct(sl)} s`, fu, fd), ...lay(lone, Math.PI + hl, Math.PI / 2, `a lone-pair hybrid, ${pct(sl)} s`, fu, fd)]);
      const H = (sg) => [sg * ROH * Math.sin(hb), 0, ROH * Math.cos(hb)];
      S.set('atoms', [
        { k: 'points', pts: [[0, 0, 0]], color: F.el('O'), r: 9, name: 'the oxygen nucleus' },
        { k: 'points', pts: [H(1), H(-1)], color: F.el('H'), r: 8, name: 'a hydrogen nucleus, 95.84 pm from the oxygen' },
        { k: 'line', pts: [H(1), [0, 0, 0], H(-1)], color: 'guide', w: 2 },
      ]);
    }
    S.headline(`With ${pct(sb)} s in each O–H hybrid the bond angle is ${fmt(thb, 1)}°, and the lone pairs, ${pct(sl)} s, are ${fmt(thl, 1)}° apart.`);
    const { ctx, W } = begin(leg);
    F.legend(ctx, { l: 0, t: 0, r: W, b: 56 }, [
      { s: 'O–H hybrid, $\\kchi > 0$', color: up, kind: 'dot' },
      { s: '$\\kchi < 0$', color: down, kind: 'dot' },
      { s: 'lone pairs', color: F.mixColor(PAL.ink, PAL.panel, 0.5), kind: 'dot' },
      { s: 'O', color: F.el('O'), kind: 'dot' },
      { s: 'H', color: F.el('H'), kind: 'dot' },
    ], { corner: 'top', panel: false, row: true });
    tex(d.readout, `\\gamma^2 = \\dfrac{${fmt(sb, 2)}}{${fmt(1 - sb, 2)}} = ${fmt(g2b, 3)} \\\\ \\cos\\ktheta = -\\gamma^2 = ${fmt(-g2b, 3)} \\\\ \\ktheta = ${fmt(thb, 1)}^\\circ \\\\ \\small \\text{lone pairs: } \\cos\\ktheta = -\\dfrac{${fmt(sl, 2)}}{${fmt(1 - sl, 2)}} = ${fmt(-g2l, 3)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
