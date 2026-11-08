# Plan: 16.6 The Repulsive Term in the Lennard-Jones Potential (LibreTexts 13661)

Source: `source.md`; draft from `python3 tools/md2html.py 16.6` (deleted after the build).
Status: built 2026-11-08 in the Chapter 16 job, without a review stop.

Two equations (16.6.1)–(16.6.2), one numbered figure and two unnumbered ones (Figures A and C, labels inside the images), three worked examples, two inline exercises (keyed). CC BY 4.0 at the source, shared BY-NC-SA.

## Sub-concepts (page headers)

1. `two-nonbonding-atoms` **Two nonbonding atoms** (agent's, for the opening paragraph). Introduces `lennard-jones-potential`, `intermolecular-attractions`.
2. `introduction` **Introduction** (book's): the rubber balls. Introduces `lj-repulsion-and-attraction`.
3. `the-lennard-jones-potential` **The Lennard-Jones Potential** (book's, with its h3s Bonding Potential and Stability and Force of Interactions): (16.6.1), (16.6.2), the figure, Examples 16.6.1–16.6.3. Introduces `lj-sigma`, `van-der-waals-radius`, `evaluating-lj-potential`, `lj-forces`.

The uncited "References" list goes to `notes`.

## Figures

- `sim-lennard-jones` · Figure 16.6.1 (Figures A and C folded in as originals; they carry no number) · lennard-jones-potential, lj-sigma, van-der-waals-radius, lj-repulsion-and-attraction, lj-forces · variation by slider and drag: two atoms drawn with radius σ/2 on the graph's own r scale (they touch at r = σ) above V(r) with its r⁻¹² and r⁻⁶ terms dashed; the reader drags the state point and the force arrows flip at r_min, which three still panels can only suggest · arrows: symbolic (the force on each atom, −dV/dr) · still: Figure A's four panels are positions, reached by the drag · sliders ε 0.5–2.0 kJ/mol (energy), σ 3.0–4.2 Å (length), detents at argon (0.997, 3.40) and xenon (1.77, 4.10); r 2.8–11 Å (length), dragged on the curve, specials σ and r_min = 2^{1/6}σ; opens on Example 16.6.2 (Ar at 4.0 Å) · headline: r against r_min, attract or repel · scene above graph, legend for the three curves, σ, r_min and ε marked · 2D. Atoms are generic (no `F.el`): the sliders reach states that are neither gas.

## Exercises

Exercises 16.6.1 (Remember) and 16.6.2 (Understand), keyed, open answers from the book; 16.6.2's "See Figure C" links the folded figure and its stray back-link is dropped; 16.6.1's "From section 2.1" carries a correction under its card. Two AI exercises (config): r_min = 2^{1/6}σ and V(r_min) = −ε, argon's r_min 3.82 Å; xenon's r_min 4.60 Å and V there −1.77 kJ/mol. Both checked by computation.

## Derivations

None: Example 16.6.2 substitutes numbers (rule 29.1).

## Corrections

`c-vdw-radius` (σ called the van der Waals radius); `c-caption` (Figure 16.6.1's "σ/r)^{12}" and "σ/r^6", through the figure row); `c-rounding` (Example 16.6.2: −0.94 kJ/mol unrounded); `c-410` (Example 16.6.3's 4.0 against 4.10 Å); `c-section-2-1` (Exercise 16.6.1's answer). "equation 2.1" kept as printed (no equation anchors to link).

## Wanted at chapter level

None.
