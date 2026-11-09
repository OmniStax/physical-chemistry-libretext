/* Figures for section 19.1 Overview of Classical Thermodynamics. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['19.1'] = function (root, F) {
const { tex, C, alpha, ctl, register, fmt } = F;

/* ---------- Sim: the pressure surface and the note's two routes ----------
   p = RT/V for one mole of ideal gas, R = 0.08206 L atm K^-1 mol^-1, over the book's ranges V 1.0 to 3.0 L/mol
   and T 200 to 400 K. Scene coordinates: x = (V - 1)/2, y = (T - 200)/200, z = p / 35 atm x 0.8 (p peaks at
   32.8 atm at 1.0 L/mol and 400 K). The start is the book's (1.0 L/mol, 200 K); the end opens on the book's
   (3.0 L/mol, 400 K), where both routes give -5.47 atm. The chosen route is drawn in ink on the sheet, the other
   faint. Mathematical 3D (the surface is the point); free orbit bounded above the V-T floor, which has nothing
   to show from beneath; no buttons. Without WebGL the library paints the same layers from the opening view. */
(function () {
  const d = F.sim(root, 'sim-pressure-surface');
  const R = 0.08206, V1 = 1.0, T1 = 200, ZS = 0.8, PMAX = 35;
  const p = (V, T) => R * T / V;
  const X = (V) => (V - 1) / 2, Y = (T) => (T - 200) / 200, Z = (P) => P / PMAX * ZS;
  const S = F.space3d(d, { box: [[0, 1], [0, 1], [0, ZS]], h: 520, turn: -0.75, tilt: 0.5, fit: 1.8, pitch: [0.12, Math.PI / 2], spin: 'off', zoom: false });
  const ROUTE = F.choice(d.controls, { label: '\\text{route}', options: [{ value: 'iso', label: 'isothermal first' }, { value: 'cho', label: 'isochoric first' }], value: 'iso', aria: 'which leg the gas takes first', key: 'route' });
  const V2 = ctl(d.controls, { label: '\\kVb', cls: 'molar-volume', min: 1, max: 3, step: 0.1, value: 3, unit: 'L/mol', dec: 1, detents: [3], snap: true, aria: 'the final molar volume' });
  const T2 = ctl(d.controls, { label: '\\kTtwo', cls: 'temperature', min: 200, max: 400, step: 10, value: 400, unit: 'K', dec: 0, detents: [400], snap: true, aria: 'the final temperature' });
  /* a leg on the sheet, lifted a hair so it is not buried in it */
  const iso = (T, Va, Vb) => Array.from({ length: 41 }, (_, i) => { const V = Va + (Vb - Va) * i / 40; return [X(V), Y(T), Z(p(V, T)) + 0.006]; });
  const cho = (V, Ta, Tb) => Array.from({ length: 41 }, (_, i) => { const T = Ta + (Tb - Ta) * i / 40; return [X(V), Y(T), Z(p(V, T)) + 0.006]; });
  function draw() {
    const v2 = V2.v, t2 = T2.v, first = ROUTE.value, cp = C('pressure');
    const p0 = p(V1, T1), pe = p(v2, t2);
    /* route iso: isotherm at T1 to V2, then isochore at V2; route cho: isochore at V1 to T2, then isotherm at T2 */
    const mid = first === 'iso' ? p(v2, T1) : p(V1, t2);
    const a = +(mid - p0).toFixed(2), b = +(pe - mid).toFixed(2);
    S.set('surface', F.space.graph((x, y) => Z(p(1 + 2 * x, 200 + 200 * y)), { x: [0, 1], y: [0, 1] }, cp, { n: 40, grid: 8, alpha: 0.7 }));
    const legsIso = [iso(T1, V1, v2), cho(v2, T1, t2)], legsCho = [cho(V1, T1, t2), iso(t2, V1, v2)];
    const on = first === 'iso' ? legsIso : legsCho, off = first === 'iso' ? legsCho : legsIso;
    const nameIso = `isotherm at ${fmt(T1, 0)} K`, nameCho = (V) => `isochore at ${fmt(V, 1)} L/mol`;
    S.set('route', [
      { k: 'line', pts: off[0], color: 'guide', w: 3, name: 'the other route' },
      { k: 'line', pts: off[1], color: 'guide', w: 3, name: 'the other route' },
      { k: 'line', pts: on[0], color: 'ink', w: 6, name: first === 'iso' ? `first leg, the ${nameIso}` : `first leg, the ${nameCho(V1)}` },
      { k: 'line', pts: on[1], color: 'ink', w: 6, name: first === 'iso' ? `second leg, the ${nameCho(v2)}` : `second leg, the isotherm at ${fmt(t2, 0)} K` },
      { k: 'dot', p: [X(V1), Y(T1), Z(p0)], color: 'ink', r: 9, name: `start: 1.0 L/mol, 200 K, p = ${fmt(p0, 2)} atm` },
      { k: 'dot', p: on[0][40], color: 'muted', r: 7, name: `after the first leg, p = ${fmt(mid, 2)} atm` },
      { k: 'dot', p: [X(v2), Y(t2), Z(pe)], color: cp, r: 10, name: `end: ${fmt(v2, 1)} L/mol, ${fmt(t2, 0)} K, p = ${fmt(pe, 2)} atm` },
    ]);
    S.set('frame', [
      { k: 'line', pts: [[0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0], [0, 0, 0]], color: 'guide', w: 2 },
      { k: 'line', pts: [[0, 0, 0], [0, 0, ZS]], color: 'guide', w: 2 },
      { k: 'label', s: 'V (L/mol)', p: [0.5, -0.24, 0], color: C('molar-volume'), cls: 'bare' },
      { k: 'label', s: '1', p: [0, -0.09, 0], cls: 'tick' }, { k: 'label', s: '2', p: [0.5, -0.09, 0], cls: 'tick' }, { k: 'label', s: '3', p: [1, -0.09, 0], cls: 'tick' },
      { k: 'label', s: 'T (K)', p: [1.27, 0.5, 0], color: C('temperature'), cls: 'bare' },
      { k: 'label', s: '200', p: [1.1, 0, 0], cls: 'tick' }, { k: 'label', s: '300', p: [1.1, 0.5, 0], cls: 'tick' }, { k: 'label', s: '400', p: [1.1, 1, 0], cls: 'tick' },
      { k: 'label', s: 'p (atm)', p: [0, 0, ZS + 0.08], color: cp, cls: 'bare' },
    ]);
    const dp = +(a + b).toFixed(2);
    const way = first === 'iso' ? 'Isothermal first' : 'Isochoric first';
    S.headline(Math.abs(a) < 0.005 && Math.abs(b) < 0.005 ? 'The end state is the start, so $\\Delta \\kppress = 0$.'
      : `${way}, $\\kppress$ goes from ${fmt(p0, 2)} to ${fmt(mid, 2)} atm and then to ${fmt(pe, 2)} atm: $\\Delta \\kppress = ${fmt(dp, 2)}$ atm.`);
    const l1 = first === 'iso' ? `\\int_{\\kVa}^{\\kVb}\\left(-\\dfrac{\\kR\\kTone}{\\kV^2}\\right)d\\kV` : `\\int_{\\kTone}^{\\kTtwo}\\dfrac{\\kR}{\\kVa}\\,d\\kT`;
    const l2 = first === 'iso' ? `\\int_{\\kTone}^{\\kTtwo}\\dfrac{\\kR}{\\kVb}\\,d\\kT` : `\\int_{\\kVa}^{\\kVb}\\left(-\\dfrac{\\kR\\kTtwo}{\\kV^2}\\right)d\\kV`;
    const sg = (x) => (x < 0 ? `(${fmt(x, 2)}\\ \\text{atm})` : `${fmt(x, 2)}\\ \\text{atm}`);
    tex(d.readout, `\\Delta \\kppress = ${l1} + ${l2} \\\\ \\Delta \\kppress = ${sg(a)} + ${sg(b)} = ${fmt(dp, 2)}\\ \\text{atm}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
