/* Figures for section 9.15 Molecular Term Symbols Designate Symmetry. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.15'] = function (root, F) {
const { tex, C, PAL, alpha, register, begin, line, dot, text, topline } = F;
const sim = (id, H) => F.sim(root, id, H);
/* the other sign of psi: the hue a clear step toward whichever of ink and ground lies farther from it in lightness,
   so the two tones part on either theme whatever hue the wavefunction wears (6.6's helper) */
const lightOf = (c) => { const m = /^#([0-9a-f]{6})$/i.exec(c) ? [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16)) : (c.match(/[\d.]+/g) || [0, 0, 0]).slice(0, 3).map(Number); return (0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2]) / 255; };
const otherSign = (cw) => { const l = lightOf(cw), far = Math.abs(lightOf(PAL.ink) - l) > Math.abs(lightOf(PAL.panel) - l) ? PAL.ink : PAL.panel; return F.mixColor(cw, far, 0.55); };

/* =====================================================================
   FIGURE (the unnumbered pi-orbital drawings beside the parity paragraph
   and in Example 9.15.2): inversion and reflection of a molecular orbital.
   Still: a stationary orbital has no time in it; the choices are the idea.
   Orbital choice sigma_g, sigma_u*, pi_u, pi_g*, built from two 1s or two
   2p functions on nuclei 2.4 a0 apart (psi = phiA +- phiB, unnormalized:
   only its sign is read). Inversion: the side view, the plane of the two
   nuclei; a point P in the upper left and its image -P through the center
   are marked with their signs. Reflection: the end-on view down the axis
   at nucleus A, where the mirror plane through both nuclei is the dashed
   vertical line; a sigma orbital is one round cross-section, a pi pair two
   (lobes along the mirror: unchanged, +; across it: sign flips, -). The
   shading is psi's sign in two tones of the wavefunction hue, its
   strength |psi|.
===================================================================== */
(function () {
  const d = sim('sim-parity', 560);
  const ORB = {
    sg: { s: 'σ_g', t: '\\sigma_g', p: false, sg: 1, h: 'bonding σ' },
    su: { s: 'σ*_u', t: '\\sigma^*_u', p: false, sg: -1, h: 'antibonding σ*' },
    pu: { s: 'π_u', t: '\\pi_u', p: true, sg: 1, h: 'bonding π' },
    pg: { s: 'π*_g', t: '\\pi^*_g', p: true, sg: -1, h: 'antibonding π*' },
  };
  const K = F.choice(d.controls, { label: '\\text{orbital}', key: 'orbital', options: Object.keys(ORB).map((k) => ({ value: k, label: `$${ORB[k].t}$` })), value: 'pg', aria: 'the molecular orbital' });
  const OP = F.choice(d.controls, { label: '\\text{operation}', key: 'operation', options: [{ value: 'i', label: 'inversion' }, { value: 'r', label: 'reflection' }], value: 'i', aria: 'the symmetry operation' });
  const hits = [];
  F.hover(d.stage, () => hits);
  const R = 1.2;  /* half the internuclear distance, a0 */
  const s1 = (x, y, x0) => Math.exp(-1.3 * Math.hypot(x - x0, y));
  const p1 = (x, y, x0) => y * Math.exp(-1.3 * Math.hypot(x - x0, y));
  const psi = (o, x, y) => o.p ? p1(x, y, -R) + o.sg * p1(x, y, R) : s1(x, y, -R) + o.sg * s1(x, y, R);
  /* shade a function over a box: cells of 8 units, sign by tone, strength by alpha */
  function field(ctx, f, box, sc, cx, cy, fmax) {
    const cp = alpha(C('wavefunction'), 0.75), cm = alpha(otherSign(C('wavefunction')), 0.75), st = 6;
    for (let X = box.l; X < box.r; X += st) for (let Yc = box.t; Yc < box.b; Yc += st) {
      const v = f((X + st / 2 - cx) / sc, -(Yc + st / 2 - cy) / sc), a = Math.min(1, Math.abs(v) / fmax);
      if (a < 0.15) continue;
      ctx.fillStyle = v > 0 ? cp : cm; ctx.fillRect(X - 0.5, Yc - 0.5, st + 1, st + 1);
    }
  }
  const sgn = (v) => (v >= 0 ? '+' : '−');
  function draw() {
    const { ctx } = begin(d.c);
    const o = ORB[K.value], inv = OP.value === 'i';
    const cp = C('wavefunction'), cm = otherSign(cp);
    hits.length = 0;
    if (inv) {
      const cx = 700, cy = 300, sc = 90, box = { l: 230, r: 1170, t: 110, b: 490 };
      const fmax = o.p ? 0.3 : 0.9;
      ctx.save(); field(ctx, (x, y) => psi(o, x, y), box, sc, cx, cy, fmax); ctx.restore();
      line(ctx, box.l, cy, box.r, cy, alpha(PAL.ink, 0.35), 2);
      const lobes = o.p ? [[-R, 0.8], [-R, -0.8], [R, 0.8], [R, -0.8]] : o.sg > 0 ? [[0, 0.75]] : [[-R - 0.6, 0], [R + 0.6, 0]];
      lobes.forEach(([x, y]) => text(ctx, sgn(psi(o, x, y)), cx + x * sc + (o.p ? 44 : 0), cy - y * sc, PAL.ink, { size: 30, weight: 600, align: 'center', base: 'middle' }));
      [-1, 1].forEach((k) => { dot(ctx, cx + k * R * sc, cy, PAL.ink, true, 7); text(ctx, k < 0 ? 'A' : 'B', cx + k * R * sc, cy + 30, PAL.ink, { size: 22, weight: 600, align: 'center' }); });
      hits.push({ x: cx - R * sc, y: cy, r: 14, name: 'nucleus A' }, { x: cx + R * sc, y: cy, r: 14, name: 'nucleus B' });
      const P = o.p ? [-R - 0.2, 0.9] : [-R - 0.5, 0.4];
      const v1 = psi(o, P[0], P[1]), v2 = psi(o, -P[0], -P[1]);
      const x1 = cx + P[0] * sc, y1 = cy - P[1] * sc, x2 = cx - P[0] * sc, y2 = cy + P[1] * sc;
      line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.6), 3, [10, 10]);
      dot(ctx, cx, cy, PAL.ink, false, 6);
      dot(ctx, x1, y1, PAL.ink, true, 9); dot(ctx, x2, y2, PAL.ink, false, 9);
      text(ctx, `P: ${sgn(v1)}`, x1 - 18, y1 - 20, PAL.ink, { size: 22, weight: 600, align: 'right', bg: PAL.panel });
      text(ctx, `−P: ${sgn(v2)}`, x2 + 18, y2 + 24, PAL.ink, { size: 22, weight: 600, bg: PAL.panel });
      hits.push({ x: x1, y: y1, r: 14, name: `the point P, where ψ is ${v1 > 0 ? 'positive' : 'negative'}` }, { x: x2, y: y2, r: 14, name: `its image through the center, −P, where ψ is ${v2 > 0 ? 'positive' : 'negative'}` }, { x: cx, y: cy, r: 10, name: 'the center of the molecule' });
      const g = v1 * v2 > 0;
      topline(ctx, `Through the center, the phase at P comes back ${g ? 'the same' : 'with the opposite sign'}: ${o.h} is ${g ? 'gerade, g' : 'ungerade, u'}.`);
      tex(d.readout, `\\kpsi(-\\mathbf{r}) = ${g ? '+' : '-'}\\kpsi(\\mathbf{r}) \\\\ ${o.t}:\\ ${g ? 'g' : 'u'}`);
    } else {
      /* end-on cross-sections at nucleus A, the axis pointing at the reader */
      const cy = 330, sc = 80, rad = 165;
      const panels = o.p ? [{ cx: 440, ax: 'v' }, { cx: 960, ax: 'h' }] : [{ cx: 700, ax: null }];
      const signs = [];
      panels.forEach((pn) => {
        const box = { l: pn.cx - rad, r: pn.cx + rad, t: cy - rad, b: cy + rad };
        const f = pn.ax === null ? (u, v) => Math.exp(-Math.hypot(u, v) * 1.1) : pn.ax === 'v' ? (u, v) => v * Math.exp(-Math.hypot(u, v) * 1.1) : (u, v) => u * Math.exp(-Math.hypot(u, v) * 1.1);
        ctx.save(); ctx.beginPath(); ctx.arc(pn.cx, cy, rad, 0, 2 * Math.PI); ctx.clip(); field(ctx, f, box, sc, pn.cx, cy, pn.ax ? 0.33 : 0.9); ctx.restore();
        line(ctx, pn.cx, cy - rad - 10, pn.cx, cy + rad + 10, alpha(PAL.ink, 0.7), 3, [10, 10]);
        dot(ctx, pn.cx, cy, PAL.ink, true, 7);
        const sym = pn.ax !== 'h';
        (pn.ax === 'v' ? [[0, 0.9], [0, -0.9]] : pn.ax === 'h' ? [[0.9, 0], [-0.9, 0]] : []).forEach(([u, v]) => text(ctx, sgn(f(u, v)), pn.cx + u * sc + (pn.ax === 'v' ? 40 : 0), cy - v * sc + (pn.ax === 'h' ? 40 : 0), PAL.ink, { size: 30, weight: 600, align: 'center', base: 'middle' }));
        signs.push(sym);
        const P = pn.ax === 'v' ? [-0.5, 0.9] : pn.ax === 'h' ? [-0.9, 0.5] : [-0.7, 0.6];
        const v1 = f(P[0], P[1]), v2 = f(-P[0], P[1]);
        const x1 = pn.cx + P[0] * sc, y1 = cy - P[1] * sc, x2 = pn.cx - P[0] * sc;
        line(ctx, x1, y1, x2, y1, alpha(PAL.ink, 0.45), 2, [4, 8]);
        dot(ctx, x1, y1, PAL.ink, true, 8); dot(ctx, x2, y1, PAL.ink, false, 8);
        text(ctx, `${sgn(v1)} → ${sgn(v2)}`, pn.cx, cy + rad + 40, PAL.ink, { size: 24, weight: 600, align: 'center' });
        text(ctx, pn.ax === null ? o.s : pn.ax === 'v' ? `${o.s}, lobes in the plane` : `${o.s}, lobes across it`, pn.cx, cy - rad - 26, PAL.ink, { size: 22, align: 'center' });
        hits.push({ x: pn.cx, y: cy, r: rad, name: `${o.s} seen down the axis: reflection in the dashed plane ${sym ? 'leaves it unchanged, +' : 'changes its sign, −'}` });
      });
      if (o.p) {
        topline(ctx, 'Reflected in a plane through both nuclei, one orbital of the π pair keeps its sign (+) and the other changes it (−).');
        tex(d.readout, `\\hat{\\sigma}_v\\,${o.t}^{(a)} = +${o.t}^{(a)} \\\\ \\hat{\\sigma}_v\\,${o.t}^{(b)} = -${o.t}^{(b)}`);
      } else {
        topline(ctx, `Seen down the axis, ${o.s} is round, so reflection in any plane through both nuclei leaves it unchanged (+).`);
        tex(d.readout, `\\hat{\\sigma}_v\\,${o.t} = +${o.t}`);
      }
    }
    F.legend(ctx, { l: 1180, r: 1390, t: 100, b: 200 }, [{ s: 'ψ > 0', color: cp, kind: 'swatch' }, { s: 'ψ < 0', color: cm, kind: 'swatch' }], { corner: 'tr' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE (Example 9.15.3's microstate pictures and charts): O2's two pi*
   electrons, counted into the M_L x M_S chart and peeled into terms.
   Moving: the procedure is a sequence of steps, so the steps are the
   clock (8.8's Example 8.8.12 precedent). The two orbitals of the pi pair
   carry lambda = +1 and -1; two electrons in four spin-orbitals give
   C(4, 2) = 6 microstates, drawn as a strip of small diagrams that appear
   row by row as the chart fills (0.6 s a row). Then each term is taken in
   1.8 s: the highest M_L row left and, in it, the highest M_S; Lambda =
   |M_L| and S; the cells M_L = +-Lambda (0 alone for Sigma) by M_S = -S..S
   are outlined in the term's colour (F.cat, one per term) and lose one
   microstate each at 60 % of the step. A Delta term takes M_L = +-2 only,
   which is where the book's second chart goes wrong. Choice: O2's pi_g*^2
   or B2's pi_u^2; parity (g)(g) or (u)(u) = g either way; the triplet Sigma
   is - (its spatial part changes sign on reflection), the singlet +.
===================================================================== */
(function () {
  const d = sim('sim-o2-terms', 640);
  const CONF = { O2: { s: 'O₂', orb: 'π*_g', par: 'g', t: '\\pi_g^{*2}' }, B2: { s: 'B₂', orb: 'π_u', par: 'u', t: '\\pi_u^{2}' } };
  const SO = [{ l: 1, s: 0.5 }, { l: 1, s: -0.5 }, { l: -1, s: 0.5 }, { l: -1, s: -0.5 }];
  const MICRO = []; for (let i = 0; i < 4; i++) for (let j = i + 1; j < 4; j++) MICRO.push([SO[i], SO[j]]);
  const ML = (u) => u[0].l + u[1].l, MS = (u) => u[0].s + u[1].s;
  const ROWS = [2, 0, -2], COLS = [-1, 0, 1], key = (m, s) => `${m}|${s}`;
  const count0 = new Map(); ROWS.forEach((m) => COLS.forEach((s) => count0.set(key(m, s), MICRO.filter((u) => ML(u) === m && MS(u) === s).length)));
  const TERMS = [], AFTER = [];
  { const cnt = new Map(count0);
    for (;;) {
      let L = null, S = null;
      for (const m of ROWS) { if (m < 0) break; const got = COLS.filter((s) => s >= 0 && cnt.get(key(m, s)) > 0); if (got.length) { L = m; S = Math.max(...got); break; } }
      if (L === null) break;
      ROWS.forEach((m) => COLS.forEach((s) => { if ((Math.abs(m) === L) && Math.abs(s) <= S) cnt.set(key(m, s), cnt.get(key(m, s)) - 1); }));
      TERMS.push({ L, S }); AFTER.push(new Map(cnt));
    } }
  const FILL = 0.6, PEEL = 1.8, T = ROWS.length * FILL + 0.4 + TERMS.length * PEEL;
  const cy = F.cycle(() => T, 2);
  const K = F.choice(d.controls, { label: '\\text{molecule}', key: 'molecule', options: [{ value: 'O2', label: 'O₂: $\\pi_g^{*2}$' }, { value: 'B2', label: 'B₂: $\\pi_u^{2}$' }], value: 'O2', aria: 'the molecule whose two open-shell π electrons are counted', onInput: () => cy.reset() });
  const hits = [];
  F.hover(d.stage, () => hits);
  const LET = ['Σ', 'Π', 'Δ'];
  const refl = (t) => (t.L ? '' : t.S === 1 ? '−' : '+');
  const termPlain = (t, p) => `${t.S === 1 ? '³' : '¹'}${LET[t.L]}_${p}${t.L ? '' : '^' + refl(t)}`;
  const termTex = (t) => `^{${2 * t.S + 1}}\\${['Sigma', 'Pi', 'Delta'][t.L]}_g${t.L ? '' : '^' + (t.S === 1 ? '-' : '+')}`;
  const why = (t, c) => t.L === 2 ? `both electrons in one orbital: (${c.par})(${c.par}) = g; no reflection label`
    : t.S === 1 ? `one electron in each orbital; odd on reflection: −` : `the last microstate; even on reflection: +`;
  const sgn = (x) => (x > 0 ? '+' : x < 0 ? '−' : '') + Math.abs(x);
  const arrowE = (ctx, x, y, up, a) => { const s = up ? -1 : 1, t = y - 14 + s * 13, b = y - 14 - s * 13; line(ctx, x, b, x, t, alpha(PAL.ink, a), 3); line(ctx, x, t, x + (up ? -7 : 7), t - s * 8, alpha(PAL.ink, a), 3); };
  let last = '';
  function draw() {
    const { ctx } = begin(d.c);
    const c = CONF[K.value], tau = cy.now();
    const fillEnd = ROWS.length * FILL + 0.4;
    const shown = Math.min(ROWS.length, Math.floor(tau / FILL) + 1);
    const pk = tau < fillEnd ? -1 : Math.min(TERMS.length - 1, Math.floor((tau - fillEnd) / PEEL));
    const u = pk < 0 ? 0 : Math.min(1, (tau - fillEnd - pk * PEEL) / PEEL);
    const done = pk < 0 ? 0 : u >= 0.6 ? pk + 1 : pk;
    const counts = done ? AFTER[done - 1] : count0;
    hits.length = 0;
    if (pk < 0) { const m = ROWS[shown - 1], n = COLS.reduce((a, s) => a + count0.get(key(m, s)), 0); topline(ctx, `$M_L = ${m}$: ${n} microstate${n === 1 ? '' : 's'} of ${c.s}'s two ${c.orb} electrons.`); }
    else { const t = TERMS[pk]; topline(ctx, `The top row left has $M_L = ${t.L}$ and $M_S$ up to ${t.S}: the term ${termPlain(t, 'g')} takes ${t.L ? 2 * (2 * t.S + 1) : 2 * t.S + 1} microstate${t.L || t.S ? 's' : ''}.`); }
    /* the six microstates, each a pair of orbital lines (lambda = +1 left, -1 right) */
    MICRO.forEach((m, i) => {
      const row = ROWS.indexOf(ML(m)), a = row < shown ? 1 : 0.12, x = 120 + i * 200, y = 150;
      line(ctx, x, y, x + 60, y, alpha(PAL.ink, a), 4); line(ctx, x + 84, y, x + 144, y, alpha(PAL.ink, a), 4);
      text(ctx, '+1', x + 30, y + 22, alpha(PAL.muted, a), { size: 17, align: 'center' }); text(ctx, '−1', x + 114, y + 22, alpha(PAL.muted, a), { size: 17, align: 'center' });
      const on = { 1: [], '-1': [] }; m.forEach((e) => on[e.l].push(e.s > 0));
      [[1, x + 30], [-1, x + 114]].forEach(([l, xc]) => { const es = on[l]; es.forEach((up, k) => arrowE(ctx, es.length === 2 ? xc - 9 + 18 * k : xc, y, up, a)); });
      hits.push({ x: x + 72, y: y - 10, r: 50, name: `a microstate: M_L = ${sgn(ML(m)) || 0}, M_S = ${sgn(MS(m)) || 0}` });
    });
    /* the chart */
    const ch = 70, cw = 130, x0 = 230, y0 = 290, W = COLS.length * cw;
    text(ctx, 'M_S', x0 + W / 2, y0 - 50, PAL.ink, { size: 26, weight: 600, align: 'center' });
    text(ctx, 'M_L', x0 - 80, y0 - 16, PAL.ink, { size: 26, weight: 600, align: 'center' });
    COLS.forEach((s, j) => text(ctx, sgn(s) || '0', x0 + (j + 0.5) * cw, y0 - 16, PAL.ink, { size: 24, align: 'center' }));
    line(ctx, x0, y0 - 2, x0 + W, y0 - 2, alpha(PAL.ink, 0.5), 2);
    line(ctx, x0 - 4, y0, x0 - 4, y0 + ROWS.length * ch, alpha(PAL.ink, 0.5), 2);
    ROWS.forEach((m, i) => {
      if (i >= shown) return;
      const k = pk < 0 && i === shown - 1 ? Math.min(1, (tau - i * FILL) / 0.3) : 1, y = y0 + (i + 0.5) * ch;
      text(ctx, sgn(m) || '0', x0 - 80, y, alpha(PAL.ink, k), { size: 24, align: 'center', base: 'middle' });
      COLS.forEach((s, j) => {
        const n = counts.get(key(m, s)), x = x0 + (j + 0.5) * cw;
        text(ctx, String(n), x, y, alpha(n ? PAL.ink : PAL.muted, k * (n ? 1 : 0.6)), { size: 28, weight: n ? 600 : 400, align: 'center', base: 'middle' });
        hits.push({ x, y, r: 30, name: `M_L = ${sgn(m) || 0}, M_S = ${sgn(s) || 0}: ${count0.get(key(m, s))} microstate${count0.get(key(m, s)) === 1 ? '' : 's'}${done ? `, ${n} left` : ''}` });
      });
    });
    if (pk >= 0 && u < 0.97) {
      const t = TERMS[pk], col = F.cat(pk), kk = Math.min(1, u / 0.25);
      const rows = t.L ? [ROWS.indexOf(t.L), ROWS.indexOf(-t.L)] : [ROWS.indexOf(0)];
      const jL = COLS.indexOf(-t.S), jR = COLS.indexOf(t.S);
      rows.forEach((ri) => {
        ctx.save(); ctx.globalAlpha = kk; ctx.fillStyle = alpha(col, 0.14); ctx.strokeStyle = col; ctx.lineWidth = 4; ctx.beginPath();
        ctx.roundRect(x0 + jL * cw + 6, y0 + ri * ch + 4, (jR - jL + 1) * cw - 12, ch - 8, 8); ctx.fill(); ctx.stroke(); ctx.restore();
        if (u < 0.6) for (let j = jL; j <= jR; j++) text(ctx, '−1', x0 + (j + 0.5) * cw + 36, y0 + (ri + 0.5) * ch - 12, alpha(col, kk), { size: 18, weight: 600, align: 'center', base: 'middle' });
      });
    }
    /* the terms taken so far */
    const tx = x0 + W + 90;
    text(ctx, `terms of ${c.s}`, tx, y0 - 16, PAL.ink, { size: 26, weight: 600 });
    TERMS.forEach((t, i) => {
      if (i > pk) return;
      const k = i < pk ? 1 : Math.min(1, u / 0.25), y = y0 + 30 + i * 70;
      text(ctx, termPlain(t, 'g'), tx, y, alpha(F.cat(i), k), { size: 32, weight: 600, base: 'middle' });
      text(ctx, why(t, c), tx + 90, y, alpha(PAL.ink, k), { size: 20, base: 'middle' });
      hits.push({ x: tx + 24, y, r: 24, name: `the term ${termPlain(t, 'g')}` });
    });
    const parts = TERMS.slice(0, done).map((t) => `${t.L ? 2 * (2 * t.S + 1) : 2 * t.S + 1}\\,(${termTex(t)})`);
    const left = [...counts.values()].reduce((a, b) => a + b, 0);
    const s = `N = \\binom{4}{2} = 6 \\\\ 6 = ${[...parts, ...(left || !parts.length ? [`${left}\\ \\text{left}`] : [])].join(' + ')}`;
    if (s !== last) { last = s; tex(d.readout, s); }
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
