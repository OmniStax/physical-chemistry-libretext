# Plan: 16.2 van der Waals and Redlich-Kwong Equations of State (LibreTexts 13657)

Source: `source.md`; draft from `python3 tools/md2html.py 16.2` (deleted once built).
Status: built 2026-11-08 in the Chapter 16 job, without a review stop (config: the chapter in one go).

No objectives or summary. Nine numbered displays (16.2.1)–(16.2.9), one numbered figure, one inline image, one table
with the book's footnote (Weast) kept under it. Credits: Tuckerman, Adewumi, LaRue. Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

1. `two-corrections` **Two corrections** (ours, the exploration's, sentence case): the opening paragraph. Uses
   `ideal-gas-law`, `equation-of-state`.
2. `van-der-waals-equation` **The Van der Waals Equation of State** (book's): (16.2.1), the excluded volume, the
   attraction at the wall, Table 16.2.1. Introduces `van-der-waals-equation`, `hard-sphere-potential`,
   `hard-sphere-diameter`, `excluded-volume`, `attraction-lowers-pressure`, `vdw-attraction-constant`.
3. `redlich-kwong-equation` **Redlich-Kwong Equation of State** (book's): (16.2.2)–(16.2.9), mixing rules. Introduces
   `cubic-equation-of-state`, `redlich-kwong-equation`, `rk-cubic-in-z`, `rk-constants`, `rk-corresponding-states`,
   `mixing-rules`.

## Figures

- `sim-excluded-volume` · Figure 16.2.1 · hard-sphere-diameter, excluded-volume · variation by drag and choice: the
  reader pushes sphere 2 at sphere 1 and its centre stops on the shaded circle of radius σ; a gas choice sets σ from
  Table 16.2.1's b (H₂O 2.89, N₂ 3.14, CH₄ 3.24, C₂H₆ 3.70 Å) · arrows: none · still: a distance of closest approach has
  no time in it · gas (choice), r (length, σ to 9 Å, the floor moving with σ, a special at contact) · headline: the
  separation, or at contact the 4πσ³/3 shut out per pair · scene alone · 2D (the book draws a cross-section; rule 28.5).
- `sim-wall-attraction` · Figure (unnumbered image 416021) · attraction-lowers-pressure, vdw-attraction-constant,
  van-der-waals-equation · flow by animation and variation: molecules near the wall are joined to the neighbours behind
  them and pulled back, and the graph beside shows the pressure falling below the repulsive term by a(n/V)² · arrows:
  kinematic (molecules move); the pull and kick arrows are force (symbolic) · moving, a continuous run with the
  transport · gas (choice, since Table 16.2.1 gives a and b in pairs; the exploration's a slider is this choice), n/V
  (untyped, 0.2–5 mol/L, default 2) at 300 K · headline: the pressure the pull takes off · graph beside (P against n/V,
  0–200 bar: ideal and repulsive term dashed, (16.2.1) solid, the gap marked) · 2D. Code from `sim-wall-pressure`'s box.
- Table 16.2.1 kept as a `div.book-table` with its footnote.

## Exercises

None printed. AI exercises (config: two): `a1` (multi, Apply) 1.00 mol CH₄ in 0.250 L at 300 K, 83.8 bar from van der
Waals against 99.8 bar ideal, and which correction wins; `a2` (number, Apply) σ of N₂ from b, 3.14 Å. Computed.

## Derivations

- `rk-constants` (hidden, score 10; the triple-root route, orchestrator): stands after (16.2.4); eight nodes,
  (Z − Z_c)³ = 0 matched against (16.2.8) to Z_c = 1/3, AB = 1/27, A − B − B² = 1/3, B = 0.086640, A = 0.42748, then
  (16.2.4) and (16.2.3); the last node's note corrects 0.42780.
- `rk-cubic` (hidden, score 9): stands after the paragraph closing (16.2.9); five nodes, results (16.2.5) (note on the
  missing a), (16.2.8), A and B in reduced variables, (16.2.9). Links to `rk-constants` through its facts' `drv`.
- b = (2/3)πσ³N₀ (score 2) stays printed; the figure carries it.

## Corrections

Footnotes: "# of molecular interactions ∝ P²" (`c-p-squared`); 0.42780 (`c-042780`); the missing a in (16.2.5)
(`c-a-missing`); "Equations 16.2.3, 16.2.4, and 16.2.5 into Equation 16.2.8" (`c-eq-refs`). As printed: "a(?)",
"Let's first look first", "eqution". Table 16.2.1's N₂ a = 1.43 kept (no check available here; no footnote).

## Wanted at chapter level

None.
