/* Figures for section 8.6 Antisymmetric Wavefunctions can be Represented by Slater Determinants. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.6'] = function (root, F) {
const { tex, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);

/* a spin arrow on a level, notation (symbolic, still): up for alpha, down for beta */
function spin(ctx, x, y, up, color, len, w) {
  if (up) F.arrow(ctx, x, y + len * 0.35, x, y - len * 0.65, color, w); else F.arrow(ctx, x, y - len * 0.65, x, y + len * 0.35, color, w);
}

/* ---------- Figure 8.6.1 + 8.6.2: helium's stick diagrams beside their determinants ----------
   The book draws one stick diagram five times (the ground state and the four microstates of 1s1 2s1). Here
   the chosen state is drawn large on the left; on the right, the four excited-state functions of (8.6.6),
   each written with the stick diagrams of the determinants it is made of. The point: configurations 2 and 3
   are psi_2 and psi_4 alone, 1 and 4 occur only together, in psi_1 and psi_3. Still: a choice redraws. */
(function () {
  const d = sim('sim-helium-configurations', 540);
  const ST = F.choice(d.controls, { label: '\\text{state}', key: 'state', value: 'g', aria: 'the state of helium', options: [
    { value: 'g', label: '$1s^2$' }, { value: '1', label: '1' }, { value: '2', label: '2' }, { value: '3', label: '3' }, { value: '4', label: '4' }] });
  /* the spins on 1s and 2s of each configuration of Figure 8.6.2 (true = alpha, up) */
  const CONF = { 1: [true, false], 2: [true, true], 3: [false, false], 4: [false, true] };
  const DET = { 1: '\\phi_a', 2: '\\phi_b', 3: '\\phi_d', 4: '\\phi_c' };
  const FUNCS = [
    { name: 'ψ₁', parts: [['', 1], ['−', 4]], over: true },
    { name: 'ψ₂', parts: [['', 2]] },
    { name: 'ψ₃', parts: [['', 1], ['+', 4]], over: true },
    { name: 'ψ₄', parts: [['', 3]] },
  ];
  const hits = [];
  F.hover(d.stage, () => hits);
  /* a small stick diagram of 1s and 2s, its centre at (x, y) */
  function mini(ctx, x, y, c, color) {
    const [s1, s2] = CONF[c];
    line(ctx, x - 26, y + 26, x + 26, y + 26, color, 3); line(ctx, x - 26, y - 20, x + 26, y - 20, color, 3);
    spin(ctx, x, y + 26, s1, color, 30, 3); spin(ctx, x, y - 20, s2, color, 30, 3);
  }
  function draw() {
    const { ctx } = begin(d.c);
    const v = ST.value, ink = PAL.ink, cw = C('wavefunction');
    const head = {
      g: 'Both electrons in 1s with opposite spins: one determinant, a spatial part times a spin part.',
      1: 'Configuration 1 is the determinant $|\\phi_a\\rangle$, which occurs only together with configuration 4.',
      2: 'Configuration 2, both spins up, is $\\psi_2$ by itself.',
      3: 'Configuration 3, both spins down, is $\\psi_4$ by itself.',
      4: 'Configuration 4 is the determinant $|\\phi_c\\rangle$, which occurs only together with configuration 1.',
    }[v];
    topline(ctx, head);
    /* the chosen state, large */
    const lv = { '1s': 450, '2s': 310, '2p': 170 }, x0 = 190;
    Object.entries(lv).forEach(([n, y]) => text(ctx, n, 120, y, ink, { size: 26, align: 'center', base: 'middle' }));
    line(ctx, x0, lv['1s'], x0 + 120, lv['1s'], ink, 5); line(ctx, x0, lv['2s'], x0 + 120, lv['2s'], ink, 5);
    [0, 1, 2].forEach((k) => line(ctx, x0 + k * 150, lv['2p'], x0 + 120 + k * 150, lv['2p'], ink, 5));
    const cx = x0 + 60;
    if (v === 'g') { spin(ctx, cx - 14, lv['1s'], true, ink, 90, 4); spin(ctx, cx + 14, lv['1s'], false, ink, 90, 4); }
    else { const [s1, s2] = CONF[v]; spin(ctx, cx, lv['1s'], s1, ink, 90, 4); spin(ctx, cx, lv['2s'], s2, ink, 90, 4); }
    text(ctx, v === 'g' ? 'ground state, 1s²' : `configuration ${v} of 1s¹2s¹`, 330, 520, PAL.muted, { size: 20, align: 'center' });
    hits.length = 0;
    hits.push({ x: cx, y: v === 'g' ? lv['1s'] : (lv['1s'] + lv['2s']) / 2, r: 70, name: v === 'g' ? 'two electrons in 1s, spins α and β' : `configuration ${v}: 1s ${CONF[v][0] ? 'α' : 'β'}, 2s ${CONF[v][1] ? 'α' : 'β'}` });
    /* the four functions of the excited configuration, each built from the diagrams of its determinants */
    const L = 760, R = 1370, top = 100, rowH = 104;
    FUNCS.forEach((f, i) => {
      const y = top + i * rowH + rowH / 2, on = v !== 'g' && f.parts.some((p) => String(p[1]) === v);
      const a = v === 'g' ? 0.35 : on ? 1 : 0.3;
      F.faded(ctx, a, [0, 0], () => {
        ctx.save(); ctx.strokeStyle = on ? cw : alpha(ink, 0.35); ctx.lineWidth = on ? 3 : 1.5; ctx.beginPath(); ctx.roundRect(L, y - rowH / 2 + 8, R - L, rowH - 16, 8); ctx.stroke(); ctx.restore();
        text(ctx, `${f.name} =`, L + 24, y, on ? cw : ink, { size: 24, weight: 600, base: 'middle' });
        let x = L + 150;
        if (f.over) { text(ctx, '(', x, y, ink, { size: 30, base: 'middle' }); x += 30; }
        f.parts.forEach(([sg, c]) => {
          if (sg) { text(ctx, sg, x + 6, y, ink, { size: 28, base: 'middle' }); x += 40; }
          mini(ctx, x + 34, y, c, String(c) === v ? cw : ink);
          text(ctx, String(c), x + 70, y + 26, PAL.muted, { size: 17, align: 'center' });
          x += 100;
        });
        if (f.over) text(ctx, ') / √2', x, y, ink, { size: 26, base: 'middle' });
      });
      hits.push({ x: (L + R) / 2, y, r: 46, name: f.over ? `${f.name}: configurations 1 and 4 combined` : `${f.name}: configuration ${f.parts[0][1]} alone` });
    });
    text(ctx, 'the four functions of 1s¹2s¹ (Equation 8.6.6)', (L + R) / 2, top - 12, PAL.muted, { size: 17, align: 'center' });
    /* readout: the determinant of this state, then the functions it enters */
    const so = (o, s, n) => `\\kvarphi${o}(${n})\\k${s}s(${n})`;
    const vm = (c1, c2) => `\\begin{vmatrix} ${so(c1[0], c1[1], 1)} & ${so(c2[0], c2[1], 1)} \\\\ ${so(c1[0], c1[1], 2)} & ${so(c2[0], c2[1], 2)} \\end{vmatrix}`;
    let r;
    if (v === 'g') r = `\\kpsi(\\kra, \\krb) = \\tfrac{1}{\\sqrt{2}}${vm(['ons', 'alpha'], ['ons', 'beta'])} \\\\ \\kpsi(\\kra, \\krb) = \\tfrac{1}{\\sqrt{2}}\\kvarphions(1)\\kvarphions(2)[\\kalphas(1)\\kbetas(2) - \\kalphas(2)\\kbetas(1)]`;
    else {
      const [s1, s2] = CONF[v], sp = (u) => (u ? 'alpha' : 'beta');
      r = `|${DET[v]}\\rangle = \\tfrac{1}{\\sqrt{2}}${vm(['ons', sp(s1)], ['twos', sp(s2)])} \\\\ `;
      r += v === '2' ? '|\\psi_2\\rangle = |\\phi_b\\rangle' : v === '3' ? '|\\psi_4\\rangle = |\\phi_d\\rangle'
        : '|\\psi_1\\rangle = \\tfrac{1}{\\sqrt{2}}(|\\phi_a\\rangle - |\\phi_c\\rangle) \\\\ |\\psi_3\\rangle = \\tfrac{1}{\\sqrt{2}}(|\\phi_a\\rangle + |\\phi_c\\rangle)';
    }
    tex(d.readout, r);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- Sim: the determinant at work ----------
   Three electrons in a one-dimensional box of length 1, with fixed spins alpha, beta, alpha, and three
   spin-orbitals built from the box states of 3.5 (phi_n = sqrt2 sin n pi x): phi_1 alpha, phi_1 beta and, in the
   third column, phi_2 alpha (lithium's pattern) or phi_1 alpha again. Each entry is phi_n(x_i) when the spins of
   row and column agree and 0 when they do not. psi = det / sqrt6 is drawn as a bar on a fixed scale of +-2
   (the largest |psi| the sliders reach is about 1.6). Exchanging electrons 1 and 2 exchanges their position and
   spin: on the strip the two labels trade places, in the matrix the two rows slide past each other. Still. */
(function () {
  const d = sim('sim-determinant', 600);
  const X1 = ctl(d.controls, { label: 'x_1', cls: 'length', key: 'x1', min: 0, max: 1, step: 0.01, value: 0.25, unit: 'L', dec: 2 });
  const X2 = ctl(d.controls, { label: 'x_2', cls: 'length', key: 'x2', min: 0, max: 1, step: 0.01, value: 0.5, unit: 'L', dec: 2 });
  const X3 = ctl(d.controls, { label: 'x_3', cls: 'length', key: 'x3', min: 0, max: 1, step: 0.01, value: 0.8, unit: 'L', dec: 2,
    specials: [{ at: () => X1.v, label: 'x₃ = x₁' }] });
  const ORD = F.choice(d.controls, { label: '\\text{order}', key: 'order', value: '123', aria: 'the order of the electrons', options: [
    { value: '123', label: '$\\kpsi(1, 2, 3)$' }, { value: '213', label: '$\\kpsi(2, 1, 3)$' }] });
  const COL = F.choice(d.controls, { label: '\\text{column 3}', key: 'col3', value: '2', aria: 'the third spin-orbital', options: [
    { value: '2', label: '$\\varphi_2\\alpha$' }, { value: '1', label: '$\\varphi_1\\alpha$' }] });
  const hits = [];
  F.hover(d.stage, () => hits);
  const phi = (n, x) => Math.SQRT2 * Math.sin(n * Math.PI * x);
  const det3 = (m) => m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) - m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) + m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]);
  const num = (v) => (Math.abs(v) < 0.005 ? '0' : fmt(v, 2));
  function draw() {
    const { ctx } = begin(d.c);
    const ink = PAL.ink, cw = C('wavefunction'), cl = C('length');
    const xs = [X1.v, X2.v, X3.v], spins = [true, false, true], n3 = +COL.value;
    const cols = [{ n: 1, a: true, s: 'φ₁α' }, { n: 1, a: false, s: 'φ₁β' }, { n: n3, a: true, s: n3 === 2 ? 'φ₂α' : 'φ₁α' }];
    const swapped = ORD.value === '213', k = ORD.mix((v) => (v === '123' ? 0 : 1));
    /* electron label i (1-based) sits on the particle order[i-1] */
    const order = swapped ? [1, 0, 2] : [0, 1, 2];
    const rowOf = (p) => cols.map((c) => (spins[p] === c.a ? phi(c.n, xs[p]) : 0));
    const M = order.map(rowOf), psi = det3(M) / Math.sqrt(6);
    const sameSpot = Math.abs(xs[0] - xs[2]) < 0.005;
    let head;
    if (n3 === 1) head = 'With $\\varphi_1\\alpha$ in two columns the determinant is zero, wherever the electrons are.';
    else if (sameSpot) head = 'Electrons 1 and 3, both α, at one point: two rows are equal, so $\\kpsi = 0$.';
    else if (swapped) head = `Exchanging electrons 1 and 2 swaps two rows, and $\\kpsi$ changes sign: ${num(psi)}.`;
    else head = `For this arrangement $\\kpsi = ${num(psi)}$; exchange two electrons to change its sign.`;
    topline(ctx, head);
    /* the box, its two spatial states faint, the electrons on its floor */
    const bx = (x) => 200 + x * 1000, y0 = 210, amp = 42;
    line(ctx, bx(0), 100, bx(0), y0 + 20, ink, 4); line(ctx, bx(1), 100, bx(1), y0 + 20, ink, 4); line(ctx, bx(0), y0, bx(1), y0, alpha(ink, 0.35), 2);
    [1, 2].forEach((n) => {
      ctx.save(); ctx.strokeStyle = alpha(cw, 0.35); ctx.lineWidth = 3; ctx.beginPath();
      for (let i = 0; i <= 200; i++) { const x = i / 200, X = bx(x), Y = y0 - amp * phi(n, x); if (i) ctx.lineTo(X, Y); else ctx.moveTo(X, Y); }
      ctx.stroke(); ctx.restore();
    });
    text(ctx, 'φ₁', bx(0.5) + 10, y0 - amp * Math.SQRT2 - 10, alpha(cw, 0.8), { size: 20 });
    text(ctx, 'φ₂', bx(0.25) + 14, y0 - amp * Math.SQRT2 + 4, alpha(cw, 0.8), { size: 20 });
    hits.length = 0;
    xs.forEach((x, p) => {
      dot(ctx, bx(x), y0, F.el('e-'), true, 13);
      spin(ctx, bx(x) + 28, y0, spins[p], ink, 34, 3);
      hits.push({ x: bx(x), y: y0, r: 18, name: `an electron at x = ${fmt(x, 2)} L, spin ${spins[p] ? 'α' : 'β'}` });
    });
    /* the labels: during an exchange, labels 1 and 2 slide between the two particles */
    [0, 1, 2].forEach((lab) => {
      const from = lab === 2 ? 2 : lab, to = lab === 2 ? 2 : 1 - lab, p = lab === 2 ? xs[2] : xs[from] + (xs[to] - xs[from]) * k;
      text(ctx, String(lab + 1), bx(p), y0 + 46, ink, { size: 22, weight: 600, align: 'center' });
    });
    text(ctx, 'position x (box lengths L)', bx(0.5), y0 + 82, cl, { size: 20, align: 'center' });
    /* the matrix, one row per electron label; during an exchange rows 1 and 2 slide past each other */
    const mx = 470, cwid = 170, my = 360, rh = 52;
    cols.forEach((c, j) => text(ctx, c.s, mx + cwid * (j + 0.5), my - 22, cw, { size: 22, weight: 600, align: 'center' }));
    const rowsAt = [0, 1, 2].map((p) => {
      const slotA = p, slotB = p === 2 ? 2 : 1 - p;   /* particle p's row: its slot before and after the exchange */
      return slotA + (slotB - slotA) * k;
    });
    [0, 1, 2].forEach((p) => {
      const y = my + rh * (rowsAt[p] + 0.5), row = rowOf(p);
      row.forEach((v, j) => text(ctx, num(v), mx + cwid * (j + 0.5), y, Math.abs(v) < 0.005 ? PAL.muted : ink, { size: 22, align: 'center', base: 'middle' }));
    });
    [0, 1, 2].forEach((i) => text(ctx, `electron ${i + 1} (${spins[order[i]] ? 'α' : 'β'})`, mx - 20, my + rh * (i + 0.5), ink, { size: 20, align: 'right', base: 'middle' }));
    line(ctx, mx, my, mx, my + 3 * rh, ink, 3); line(ctx, mx + 3 * cwid, my, mx + 3 * cwid, my + 3 * rh, ink, 3);
    /* psi as a bar */
    const zx = 1180, zy = my + 1.5 * rh, sc = 70, top = zy - psi * sc;
    line(ctx, zx - 50, zy, zx + 50, zy, alpha(ink, 0.5), 2);
    ctx.save(); ctx.fillStyle = alpha(cw, 0.8); ctx.fillRect(zx - 28, Math.min(zy, top), 56, Math.abs(top - zy)); ctx.restore();
    text(ctx, `ψ = ${num(psi)}`, zx, Math.max(zy, top) + 30, cw, { size: 22, weight: 600, align: 'center' });
    hits.push({ x: zx, y: zy, r: 40, name: 'the value of the determinant divided by √6' });
    const vm = `\\begin{vmatrix} ${M.map((row) => row.map(num).join(' & ')).join(' \\\\ ')} \\end{vmatrix}`;
    tex(d.readout, `\\kpsi(${swapped ? '2, 1, 3' : '1, 2, 3'}) = \\tfrac{1}{\\sqrt{6}}${vm} = ${num(psi)}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
