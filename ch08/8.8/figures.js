/* Figures for section 8.8 Term Symbols Gives a Detailed Description of an Electron Configuration. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.8'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, text, topline, fmt } = F;
const DEG = Math.PI / 180;
const half = (x) => (Math.abs(x % 1) > 1e-9 ? `${Math.round(2 * x)}/2` : String(Math.round(x)));
const SUP = { 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶' };
const LETTER = 'SPDFGHIKLM';

/* =====================================================================
   FIGURE 8.8.1 (the third the book prints under that number, with its two
   hand-drawn sketches): two spins and their resultant.
   Mathematical 3D (root 28.3): the book draws the spins as vectors on cones
   in perspective, and the lesson is how two directions in space add.
   Still: in a state of definite S and S_z nothing precesses (6.3.1's
   decision). Each spin has length sqrt(3)/2 hbar and S_z = +-1/2 hbar, so it
   lies on a cone of half-angle 54.7 degrees. The choice is the pair's
   state: alpha-alpha and beta-beta put both spins on one cone 90 degrees
   apart round z, so their x and y parts add to 1 and S = sqrt(2) hbar with
   S_z = +-hbar; the triplet with S_z = 0 puts them on opposite cones with
   their x and y parts in line (S = sqrt(2) hbar in the xy-plane); the
   singlet puts them on opposite cones with their x and y parts opposed, and
   they cancel. The slider phi turns the pair about z: S_x and S_y change,
   S_z and |S| do not. One scale, units of hbar, box +-1.6. The two spins
   are referents (spin-1, spin-2) so the reader tells them apart; S wears
   the angular-momentum colour. Free orbit, pitch +-80 degrees, no buttons,
   flat fallback from the opening view.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-spin-pair');
  const B = 1.6, a = Math.sqrt(3) / 2, r = Math.SQRT1_2;
  const S3 = F.space3d(d, { box: [[-B, B], [-B, B], [-B, B]], h: 600, turn: -2.2, tilt: 0.3, fit: 3.6, pitch: [-80 * DEG, 80 * DEG], spin: 'off', zoom: false });
  const STATES = {
    aa: { z: [0.5, 0.5], dp: [45, -45], S: 1, lab: 'αα' },
    t0: { z: [0.5, -0.5], dp: [0, 0], S: 1, lab: 'αβ + βα' },
    bb: { z: [-0.5, -0.5], dp: [45, -45], S: 1, lab: 'ββ' },
    s: { z: [0.5, -0.5], dp: [0, 180], S: 0, lab: 'αβ − βα' },
  };
  const K = F.choice(d.controls, { label: 'spins', key: 'pair', options: [
    { value: 'aa', label: 'αα' }, { value: 't0', label: 'αβ + βα' }, { value: 'bb', label: 'ββ' }, { value: 's', label: 'αβ − βα' }], value: 'aa', aria: 'the state of the pair of spins' });
  const PH = ctl(d.controls, { label: '\\kvarphi', cls: 'angle', key: 'phi', min: 0, max: 360, step: 1, value: 30, unit: '°', dec: 0, aria: 'the turn of the pair about z, in degrees' });
  const ring = (f, n = 72) => Array.from({ length: n + 1 }, (_, i) => f(i / n));
  const cone = (z, R, n = 6) => { const rows = []; for (let j = 0; j <= n; j++) { const s = j / n; rows.push(ring((u) => [s * R * Math.cos(2 * Math.PI * u), s * R * Math.sin(2 * Math.PI * u), s * z], 48)); } return rows; };
  const sgn = (x) => (x > 0 ? '+' : x < 0 ? '-' : '');
  function draw() {
    const st = STATES[K.value], ph = PH.v * DEG;
    const cl = C('angular-momentum'), c1 = F.ref('spin-1'), c2 = F.ref('spin-2');
    const sv = [0, 1].map((i) => { const p = ph + st.dp[i] * DEG; return [r * Math.cos(p), r * Math.sin(p), st.z[i]]; });
    const Sv = [sv[0][0] + sv[1][0], sv[0][1] + sv[1][1], sv[0][2] + sv[1][2]];
    const Sz = st.z[0] + st.z[1], Smag = Math.sqrt(st.S * (st.S + 1));
    S3.set('axes', [
      { k: 'line', pts: [[0, 0, -B], [0, 0, B]], color: 'guide', w: 2, name: 'the z axis, the direction S_z is measured along' },
      { k: 'label', s: '$\\kz$', p: [0, 0, B + 0.12], color: 'muted' },
      { k: 'line', pts: [[-B, 0, 0], [B, 0, 0]], color: alpha(PAL.ink, 0.22), w: 1.5 },
      { k: 'line', pts: [[0, -B, 0], [0, B, 0]], color: alpha(PAL.ink, 0.22), w: 1.5 },
    ]);
    /* the two cones a single spin can lie on, m_s = +1/2 and -1/2 */
    S3.set('cones', [
      { k: 'sheet', rows: cone(0.5, r), color: PAL.soft, alpha: 0.14, name: 'the cone of a spin with m_s = +½: length √3/2 ħ, S_z = +½ħ' },
      { k: 'sheet', rows: cone(-0.5, r), color: PAL.soft, alpha: 0.14, name: 'the cone of a spin with m_s = −½: length √3/2 ħ, S_z = −½ħ' },
      { k: 'line', pts: ring((u) => [r * Math.cos(2 * Math.PI * u), r * Math.sin(2 * Math.PI * u), 0.5]), color: alpha(PAL.ink, 0.35), w: 2 },
      { k: 'line', pts: ring((u) => [r * Math.cos(2 * Math.PI * u), r * Math.sin(2 * Math.PI * u), -0.5]), color: alpha(PAL.ink, 0.35), w: 2 },
    ]);
    const marks = [];
    /* the resultant's ring: every S with this S_z and |S| */
    if (st.S > 0) {
      const R = Math.sqrt(Smag * Smag - Sz * Sz);
      marks.push({ k: 'line', pts: ring((u) => [R * Math.cos(2 * Math.PI * u), R * Math.sin(2 * Math.PI * u), Sz]), color: alpha(cl, 0.5), w: 2.5, name: `every direction S can take with S_z = ${Sz > 0 ? '+ħ' : Sz < 0 ? '−ħ' : '0'}` });
    }
    marks.push({ k: 'arrow', a: [0, 0, 0], b: sv[0], color: c1, w: 5, name: `the first electron's spin: m_s = ${st.z[0] > 0 ? '+½' : '−½'}` });
    marks.push({ k: 'arrow', a: [0, 0, 0], b: sv[1], color: c2, w: 5, name: `the second electron's spin: m_s = ${st.z[1] > 0 ? '+½' : '−½'}` });
    marks.push({ k: 'label', s: '$\\vec{s}_1$', p: [sv[0][0] * 1.25, sv[0][1] * 1.25, sv[0][2] * 1.25], color: c1 });
    marks.push({ k: 'label', s: '$\\vec{s}_2$', p: [sv[1][0] * 1.25, sv[1][1] * 1.25, sv[1][2] * 1.25], color: c2 });
    /* the second spin moved to the tip of the first, so the sum reads as a triangle */
    marks.push({ k: 'line', pts: [sv[0], Sv], color: alpha(c2, 0.6), w: 2.5, dash: [8, 8] });
    if (st.S > 0) {
      marks.push({ k: 'arrow', a: [0, 0, 0], b: Sv, color: cl, w: 7, name: `the resultant S: |S| = √2 ħ = 1.414ħ, S_z = ${Sz > 0 ? '+ħ' : Sz < 0 ? '−ħ' : '0'}` });
      const n = Math.hypot(...Sv);
      marks.push({ k: 'label', s: '$\\kSvec$', p: Sv.map((x) => x * (1 + 0.18 / n)), color: cl });
      if (Sz !== 0) marks.push({ k: 'line', pts: [Sv, [0, 0, Sz]], color: alpha(PAL.ink, 0.45), w: 2, dash: [4, 8] });
    } else {
      marks.push({ k: 'dot', p: [0, 0, 0], color: cl, r: 7, name: 'the resultant S is zero: the two spins cancel' });
    }
    S3.set('spins', marks);
    const ms = st.z.map((z) => (z > 0 ? '+\\tfrac{1}{2}' : '-\\tfrac{1}{2}'));
    tex(d.readout, `|\\kSvec| = \\hbar\\sqrt{S(S+1)} = ${st.S ? '\\sqrt{2}\\,\\hbar' : '0'} \\\\ \\kSz = (m_{s1} + m_{s2})\\hbar = (${ms[0]} ${ms[1]})\\hbar = ${Sz === 0 ? '0' : sgn(Sz) + '\\hbar'}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE (Example 8.8.12's microstate pictures and charts): counting the
   microstates of a configuration and peeling its terms off the chart.
   Moving: the procedure is a sequence of steps, so the steps are the clock.
   Choice of configuration: d2 (the example, opening), p2, p3, d3. Every
   microstate is enumerated (each set of n spin-orbitals m_l, m_s) and
   counted into the cell (M_l, M_s). The chart fills a row at a time, top
   down, 0.45 s a row; then each term is taken in 1.6 s: the highest M_l
   row left, and in it the highest M_s left, name L and S; the rectangle
   |M_l| <= L, |M_s| <= S is outlined in the term's colour (F.cat, one per
   term, since the terms are instances told apart), and at 60 % of the step
   every cell in it loses one. The reached states include every chart the
   book prints for d2. The readout writes N = C(2(2l+1), n) and the sum of
   the terms' (2L+1)(2S+1) taken so far plus what is left, true at every
   step. Hover names list each cell's microstates.
===================================================================== */
(function () {
  const d = F.sim(root, 'sim-microstates', 720);
  const CONF = { d2: { l: 2, n: 2, s: 'd²' }, p2: { l: 1, n: 2, s: 'p²' }, p3: { l: 1, n: 3, s: 'p³' }, d3: { l: 2, n: 3, s: 'd³' } };
  /* every microstate of l^n, the chart of counts, and the terms in the order they are peeled */
  function build(key) {
    const { l, n } = CONF[key], so = [];
    for (let m = l; m >= -l; m--) { so.push({ m, s: 0.5 }); so.push({ m, s: -0.5 }); }
    const micro = [];
    const pick = (start, chosen) => { if (chosen.length === n) { micro.push(chosen.slice()); return; } for (let i = start; i < so.length; i++) { chosen.push(so[i]); pick(i + 1, chosen); chosen.pop(); } };
    pick(0, []);
    const ML = Math.max(...micro.map((u) => u.reduce((a, o) => a + o.m, 0))), MS = n / 2;
    const rows = [], cols = [];
    for (let M = ML; M >= -ML; M--) rows.push(M);
    for (let s = -MS; s <= MS + 1e-9; s += 1) cols.push(s);
    const key2 = (M, S) => `${M}|${S}`;
    const cell = new Map();
    micro.forEach((u) => { const M = u.reduce((a, o) => a + o.m, 0), S = u.reduce((a, o) => a + o.s, 0), k = key2(M, S); if (!cell.has(k)) cell.set(k, []); cell.get(k).push(u); });
    const count0 = new Map(); rows.forEach((M) => cols.forEach((S) => count0.set(key2(M, S), (cell.get(key2(M, S)) || []).length)));
    const terms = [], after = [];
    const cnt = new Map(count0);
    for (;;) {
      let L = null, S = null;
      for (const M of rows) { if (M < 0) break; const got = cols.filter((s) => s >= 0 && cnt.get(key2(M, s)) > 0); if (got.length) { L = M; S = Math.max(...got); break; } }
      if (L === null) break;
      rows.forEach((M) => cols.forEach((s) => { if (Math.abs(M) <= L && Math.abs(s) <= S + 1e-9) cnt.set(key2(M, s), cnt.get(key2(M, s)) - 1); }));
      terms.push({ L, S }); after.push(new Map(cnt));
    }
    return { conf: CONF[key], micro, rows, cols, cell, count0, terms, after, key2 };
  }
  let G = build('d2');
  const FILL = 0.45, PEEL = 1.6, T = () => G.rows.length * FILL + 0.3 + G.terms.length * PEEL;
  const cy = F.cycle(T, 2);
  const K = F.choice(d.controls, { label: '\\text{configuration}', key: 'conf', options: Object.keys(CONF).map((k) => ({ value: k, label: CONF[k].s })), value: 'd2', aria: 'the configuration whose microstates are counted', onInput: (v) => { G = build(v); cy.reset(); } });
  const hits = [];
  F.hover(d.stage, () => hits);
  const binom = (a, b) => { let r = 1; for (let i = 1; i <= b; i++) r = r * (a - b + i) / i; return Math.round(r); };
  const ms = (o) => `${o.m > 0 ? '+' : o.m < 0 ? '−' : ''}${Math.abs(o.m)}${o.s > 0 ? '↑' : '↓'}`;
  const sgn = (x) => (x > 0 ? '+' : x < 0 ? '−' : '') + half(Math.abs(x));
  const termTxt = (t) => `^${2 * t.S + 1}${LETTER[t.L]}`;
  const termPlain = (t) => `${SUP[2 * t.S + 1]}${LETTER[t.L]}`;
  const Js = (t) => { const out = []; for (let j = t.L + t.S; j >= Math.abs(t.L - t.S) - 1e-9; j -= 1) out.push(half(j)); return out; };
  let lastTex = '';
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), R = G.rows.length, Cn = G.cols.length;
    const fillEnd = R * FILL + 0.3;
    const shown = Math.min(R, Math.floor(tau / FILL) + 1);
    const pk = tau < fillEnd ? -1 : Math.min(G.terms.length - 1, Math.floor((tau - fillEnd) / PEEL));
    const u = pk < 0 ? 0 : Math.min(1, (tau - fillEnd - pk * PEEL) / PEEL);
    const done = pk < 0 ? 0 : u >= 0.6 ? pk + 1 : pk;           /* terms whose microstates are already taken */
    const counts = done ? G.after[done - 1] : G.count0;
    const total = G.micro.length;
    /* the headline */
    if (pk < 0) { const M = G.rows[shown - 1]; const row = G.cols.reduce((a, s) => a + G.count0.get(G.key2(M, s)), 0); topline(ctx, `$M_l = ${M < 0 ? '-' : ''}${Math.abs(M)}$: ${row} microstate${row === 1 ? '' : 's'}, ${G.cols.map((s) => G.count0.get(G.key2(M, s))).join(', ')} across $M_s$.`); }
    else { const t = G.terms[pk]; topline(ctx, `The top row left has $M_l = ${t.L}$ and $M_s$ up to ${sgn(t.S)}: the term ${termPlain(t)} takes ${(2 * t.L + 1) * (2 * t.S + 1)} microstates.`); }
    /* the chart */
    const ch = Math.min(52, 540 / R), cw = 140, x0 = 210, y0 = 160, W = Cn * cw;
    text(ctx, 'M_s', x0 + W / 2, y0 - 52, PAL.ink, { size: 26, weight: 600, align: 'center' });
    text(ctx, 'M_l', x0 - 80, y0 - 18, PAL.ink, { size: 26, weight: 600, align: 'center' });
    G.cols.forEach((s, j) => text(ctx, sgn(s), x0 + (j + 0.5) * cw, y0 - 18, PAL.ink, { size: 24, align: 'center' }));
    line(ctx, x0, y0 - 2, x0 + W, y0 - 2, alpha(PAL.ink, 0.5), 2);
    line(ctx, x0 - 4, y0, x0 - 4, y0 + R * ch, alpha(PAL.ink, 0.5), 2);
    hits.length = 0;
    G.rows.forEach((M, i) => {
      if (i >= shown) return;
      const k = pk < 0 && i === shown - 1 ? Math.min(1, (tau - i * FILL) / 0.3) : 1;
      const y = y0 + (i + 0.5) * ch;
      text(ctx, (M < 0 ? '−' : '') + Math.abs(M), x0 - 80, y, alpha(PAL.ink, k), { size: 24, align: 'center', base: 'middle' });
      G.cols.forEach((s, j) => {
        const c = counts.get(G.key2(M, s)), x = x0 + (j + 0.5) * cw;
        text(ctx, String(c), x, y, alpha(c ? PAL.ink : PAL.muted, k * (c ? 1 : 0.6)), { size: 28, weight: c ? 600 : 400, align: 'center', base: 'middle' });
        const list = G.cell.get(G.key2(M, s)) || [];
        hits.push({ x, y, r: Math.min(ch, cw) / 2, name: `M_l = ${M}, M_s = ${sgn(s)}: ${list.length} microstate${list.length === 1 ? '' : 's'}${list.length ? ': ' + list.slice(0, 8).map((m) => '(' + m.map(ms).join(' ') + ')').join(' ') + (list.length > 8 ? ' …' : '') : ''}${done ? `; ${c} left` : ''}` });
      });
    });
    /* the rectangle the current term claims */
    if (pk >= 0 && u < 0.97) {
      const t = G.terms[pk], col = F.cat(pk), kk = Math.min(1, u / 0.25);
      const iTop = G.rows.indexOf(t.L), iBot = G.rows.indexOf(-t.L), jL = G.cols.findIndex((s) => Math.abs(s + t.S) < 1e-9), jR = G.cols.findIndex((s) => Math.abs(s - t.S) < 1e-9);
      const bx = x0 + jL * cw + 6, by = y0 + iTop * ch + 3, bw = (jR - jL + 1) * cw - 12, bh = (iBot - iTop + 1) * ch - 6;
      ctx.save(); ctx.globalAlpha = kk; ctx.fillStyle = alpha(col, 0.14); ctx.strokeStyle = col; ctx.lineWidth = 4; ctx.beginPath(); ctx.roundRect(bx, by, bw, bh, 8); ctx.fill(); ctx.stroke(); ctx.restore();
      if (u < 0.6) G.rows.forEach((M, i) => { if (Math.abs(M) > t.L) return; G.cols.forEach((s, j) => { if (Math.abs(s) > t.S + 1e-9) return; text(ctx, '−1', x0 + (j + 0.5) * cw + 38, y0 + (i + 0.5) * ch - 10, alpha(col, kk), { size: 18, weight: 600, align: 'center', base: 'middle' }); }); });
    }
    /* the terms taken so far, with their levels */
    const tx = x0 + W + 90;
    text(ctx, `terms of ${G.conf.s}`, tx, y0 - 18, PAL.ink, { size: 26, weight: 600 });
    G.terms.forEach((t, i) => {
      if (i > pk) return;
      const k = i < pk ? 1 : Math.min(1, u / 0.25), y = y0 + 26 + i * 54;
      text(ctx, termPlain(t), tx, y, alpha(F.cat(i), k), { size: 32, weight: 600, base: 'middle' });
      text(ctx, `L = ${t.L}, S = ${half(t.S)}: ${(2 * t.L + 1) * (2 * t.S + 1)} microstates; J = ${Js(t).join(', ')}`, tx + 64, y, alpha(PAL.ink, k), { size: 22, base: 'middle' });
      hits.push({ x: tx + 20, y, r: 20, name: `the term ${termPlain(t)}, levels ${Js(t).map((j) => termPlain(t) + '_' + j).join(', ')}` });
    });
    /* the readout: N, and how the terms taken so far share it */
    const parts = G.terms.slice(0, done).map((t) => `${(2 * t.L + 1) * (2 * t.S + 1)}\\,(${termTxt(t).replace(/\^(\d)/, '^{$1}')})`);
    const left = [...counts.values()].reduce((a, b) => a + b, 0);
    const s = `N = \\binom{2(2l+1)}{n} = \\binom{${2 * (2 * G.conf.l + 1)}}{${G.conf.n}} = ${total} \\\\ ${total} = ${[...parts, ...(left || !parts.length ? [`${left}\\ \\text{left}`] : [])].join(' + ')}`;
    if (s !== lastTex) { lastTex = s; tex(d.readout, s); }
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
