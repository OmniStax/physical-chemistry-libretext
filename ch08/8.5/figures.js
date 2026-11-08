/* Figures for section 8.5 Wavefunctions must be Antisymmetric to Interchange of any Two Electrons. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['8.5'] = function (root, F) {
const { tex, C, PAL, alpha, register, begin, line, text, topline, axes } = F;
const sim = (id, H) => F.sim(root, id, H);

/* the sign of psi as a fact, one false-colour scale (3.9's red above zero and blue below), the page's neutral at zero */
const UP = '#c2413a', DOWN = '#2f6ab3';

/* ---------- Sim: exchanging two electrons in a box ----------
   Two particles in a one-dimensional box of length 1 in the box states a and b (3.5: phi_n = sqrt2 sin n pi x).
   psi(x1, x2) is drawn as a signed map over the square, x1 across (electron 1) and x2 up (electron 2), on one
   fixed scale |psi| <= 2.5 (the product's largest value is 2, the antisymmetric combination's about 2.6).
   Swapping the labels turns the map over about its diagonal x1 = x2: each cell is carried along the
   anti-diagonal by a factor s that runs from 1 to -1, so the reader sees the square flip edge-on. The small map
   is |psi|^2 on its own scale (0 to 4), flipped the same way: for the symmetric and antisymmetric combinations
   it comes back identical, for the bare product it does not. Still: the swap is a morph on input, no clock. */
(function () {
  const d = sim('sim-exchange', 640);
  const opts = [1, 2, 3, 4].map((k) => ({ value: String(k), label: String(k) }));
  const NA = F.choice(d.controls, { label: 'n_a', options: opts, value: '1', aria: 'the box state a', key: 'na' });
  const NB = F.choice(d.controls, { label: 'n_b', options: opts, value: '2', aria: 'the box state b', key: 'nb' });
  const K = F.choice(d.controls, { label: '\\text{function}', key: 'combo', value: 'anti', aria: 'the two-electron function', options: [
    { value: 'prod', label: 'product' }, { value: 'sym', label: 'symmetric' }, { value: 'anti', label: 'antisymmetric' }] });
  const S = F.choice(d.controls, { label: '\\text{labels}', key: 'swap', value: '12', aria: 'the order of the electron labels', options: [
    { value: '12', label: '$x_1, x_2$' }, { value: '21', label: '$x_2, x_1$ (swapped)' }] });
  const hits = [];
  F.hover(d.stage, () => hits);
  const G = 48, R2 = Math.SQRT2, VMAX = 2.5, DMAX = 4;
  const phi = (n, x) => R2 * Math.sin(n * Math.PI * x);
  const xs = Array.from({ length: G }, (_, i) => (i + 0.5) / G);
  /* the flip: a point of the unit square kept along the diagonal and scaled by s across it */
  const flip = (u, v, s) => { const a = (u + v - 1) / 2, b = (u - v) / 2; return [0.5 + a + s * b, 0.5 + a - s * b]; };
  function map(ctx, ax, val, lut, s) {
    for (let i = 0; i < G; i++) for (let j = 0; j < G; j++) {
      const c = lut(val[i][j]), u0 = i / G, u1 = (i + 1) / G, v0 = j / G, v1 = (j + 1) / G;
      const P = [flip(u0, v0, s), flip(u1, v0, s), flip(u1, v1, s), flip(u0, v1, s)];
      ctx.beginPath(); P.forEach(([u, v], k) => (k ? ctx.lineTo(ax.X(u), ax.Y(v)) : ctx.moveTo(ax.X(u), ax.Y(v)))); ctx.closePath();
      ctx.fillStyle = c; ctx.strokeStyle = c; ctx.lineWidth = 0.8; ctx.fill(); ctx.stroke();
    }
  }
  function draw() {
    const { ctx } = begin(d.c);
    const na = +NA.value, nb = +NB.value, same = na === nb, kind = K.value, swapped = S.value === '21';
    const cs = 1 / Math.sqrt(same ? 4 : 2);
    const c1 = K.mix((v) => (v === 'prod' ? 1 : v === 'sym' ? cs : 1 / R2)), c2 = K.mix((v) => (v === 'prod' ? 0 : v === 'sym' ? cs : -1 / R2));
    const A = xs.map((x) => NA.mix((v) => phi(+v, x))), B = xs.map((x) => NB.mix((v) => phi(+v, x)));
    const val = xs.map((_, i) => xs.map((_, j) => c1 * A[i] * B[j] + c2 * A[j] * B[i]));
    const s = S.mix((v) => (v === '12' ? 1 : -1));
    const rest = F.mixColor(PAL.panel, PAL.ink, 0.08);
    const sc = [[-1, F.fact(DOWN)], [0, rest], [1, F.fact(UP)]], dc = [[0, rest], [1, C('probability-density')]];
    const L1 = Array.from({ length: 65 }, (_, k) => F.space.tint(sc, -1 + k / 32)), L2 = Array.from({ length: 65 }, (_, k) => F.space.tint(dc, k / 64));
    const lutS = (v) => L1[Math.round(32 + 32 * Math.max(-1, Math.min(1, v / VMAX)))];
    const lutD = (v) => L2[Math.round(64 * Math.min(1, (v * v) / DMAX))];
    const e1 = F.ref('electron-1'), e2 = F.ref('electron-2');
    /* headline: what the reader should see in this state */
    const zero = kind === 'anti' && same;
    let head;
    if (zero) head = `With both electrons in state ${na}, $\\kpsiminus$ is zero everywhere.`;
    else if (kind === 'anti') head = swapped ? 'Swapped, every value of $\\kpsiminus$ changes sign, and $|\\kpsi|^2$ is unchanged.' : '$\\kpsiminus$ changes sign across the diagonal and is zero on it.';
    else if (kind === 'sym' || same) head = swapped ? 'Swapped, $\\kpsi$ is unchanged: it is its own mirror image in the diagonal.' : 'The symmetric function is its own mirror image in the diagonal.';
    else head = swapped ? 'Swapped, the product is a different function, and $|\\kpsi|^2$ changes with it.' : `The product puts electron 1 in state ${na} and electron 2 in state ${nb}.`;
    topline(ctx, head);
    const box = { l: 170, r: 610, t: 110, b: 550 };
    map(ctx, { X: (u) => box.l + u * (box.r - box.l), Y: (v) => box.b - v * (box.b - box.t) }, val, lutS, s);
    const ax = axes(ctx, box, [0, 1], [0, 1], { nx: 2, ny: 2, xl: 'x₁, electron 1 (box lengths)', yl: 'x₂, electron 2', xc: e1, yc: e2 });
    line(ctx, ax.X(0), ax.Y(0), ax.X(1), ax.Y(1), alpha(PAL.ink, 0.5), 2, [10, 10]);
    text(ctx, 'x₁ = x₂', ax.X(0.93), ax.Y(0.98) - 14, PAL.muted, { size: 17, align: 'right' });
    /* |psi|^2 */
    const sb = { l: 790, r: 1050, t: 150, b: 410 };
    map(ctx, { X: (u) => sb.l + u * (sb.r - sb.l), Y: (v) => sb.b - v * (sb.b - sb.t) }, val, lutD, s);
    const ax2 = axes(ctx, sb, [0, 1], [0, 1], { nx: 1, ny: 1, xl: 'x₁', yl: 'x₂', xc: e1, yc: e2 });
    line(ctx, ax2.X(0), ax2.Y(0), ax2.X(1), ax2.Y(1), alpha(PAL.ink, 0.4), 2, [10, 10]);
    text(ctx, 'probability density |ψ|²', (sb.l + sb.r) / 2 + 20, sb.t - 46, C('probability-density'), { size: 20, weight: 600, align: 'center' });
    F.legend(ctx, { l: 740, r: 1390, t: 470, b: 560 }, [
      { s: 'ψ > 0', color: F.fact(UP), kind: 'swatch' },
      { s: 'ψ < 0', color: F.fact(DOWN), kind: 'swatch' },
      { s: 'ψ = 0', color: rest, kind: 'swatch' },
    ], { corner: 'top', row: true, panel: false });
    hits.length = 0;
    hits.push({ x: ax.X(0.5), y: ax.Y(0.5), r: 26, name: 'the diagonal x₁ = x₂, where both electrons are at one place' });
    hits.push({ x: (box.l + box.r) / 2, y: box.t + 40, r: 60, name: swapped ? 'ψ(x₂, x₁), the function with the labels swapped' : 'ψ(x₁, x₂)' });
    hits.push({ x: (sb.l + sb.r) / 2, y: (sb.t + sb.b) / 2, r: 110, name: '|ψ|², what a measurement could see' });
    /* readout: the function with the live states, and what the exchange operator does to it */
    const fa = (x) => `\\varphi_{${na}}(${x})`, fb = (x) => `\\varphi_{${nb}}(${x})`;
    let r;
    if (kind === 'anti') r = zero ? `\\kpsiminus = \\tfrac{1}{\\sqrt{2}}[${fa('x_1')}${fb('x_2')} - ${fa('x_2')}${fb('x_1')}] = 0`
      : `\\kpsiminus = \\tfrac{1}{\\sqrt{2}}[${fa('x_1')}${fb('x_2')} - ${fa('x_2')}${fb('x_1')}] \\\\ \\kPonetwo\\kpsiminus = -\\kpsiminus`;
    else if (kind === 'sym') r = same ? `\\kpsiplus = ${fa('x_1')}${fa('x_2')} \\\\ \\kPonetwo\\kpsiplus = +\\kpsiplus`
      : `\\kpsiplus = \\tfrac{1}{\\sqrt{2}}[${fa('x_1')}${fb('x_2')} + ${fa('x_2')}${fb('x_1')}] \\\\ \\kPonetwo\\kpsiplus = +\\kpsiplus`;
    else r = same ? `\\kpsi = ${fa('x_1')}${fa('x_2')} \\\\ \\kPonetwo\\kpsi = +\\kpsi`
      : `\\kpsi = ${fa('x_1')}${fb('x_2')} \\\\ \\kPonetwo\\kpsi = ${fa('x_2')}${fb('x_1')} \\neq \\pm\\kpsi`;
    tex(d.readout, r);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* ---------- Figure 8.5.1: beryllium's 1s and 2s, wrong and right ----------
   A faithful copy of the book's two rows of boxes: a 2s pair with parallel spins, struck out, over the
   pair with opposite spins. The spin arrows are notation, symbolic and still. */
(function () {
  const d = sim('fig-8-5-1', 420);
  const hits = [];
  F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const ink = PAL.ink, rows = [{ y: 150, two: ['u', 'u'], ok: false }, { y: 330, two: ['u', 'd'], ok: true }];
    const slots = [{ x: 300, name: '1s' }, { x: 470, name: '2s' }, { x: 660 }, { x: 800, name: '2p' }, { x: 940 }];
    hits.length = 0;
    rows.forEach((row) => {
      const y = row.y;
      slots.forEach((sl, i) => {
        line(ctx, sl.x - 60, y, sl.x + 60, y, ink, 4);
        if (sl.name) text(ctx, sl.name, sl.x, y + 40, ink, { size: 26, align: 'center' });
        const spins = i === 0 ? ['u', 'd'] : i === 1 ? row.two : [];
        spins.forEach((sp, k) => {
          const x = sl.x + (k ? 16 : -16);
          if (sp === 'u') F.arrow(ctx, x, y - 6, x, y - 76, ink, 4); else F.arrow(ctx, x, y - 76, x, y - 6, ink, 4);
        });
      });
      if (row.ok) {
        ctx.save(); ctx.strokeStyle = ink; ctx.lineWidth = 9; ctx.lineCap = 'round'; ctx.beginPath();
        ctx.moveTo(110, y - 40); ctx.lineTo(140, y - 10); ctx.lineTo(195, y - 85); ctx.stroke(); ctx.restore();
      } else {
        line(ctx, 110, y - 85, 190, y - 5, PAL.bad, 9); line(ctx, 190, y - 85, 110, y - 5, PAL.bad, 9);
      }
      hits.push({ x: 470, y: y - 40, r: 50, name: row.ok ? '2s holds one α and one β electron: allowed' : 'two α electrons in 2s would share all four quantum numbers: forbidden' });
    });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
