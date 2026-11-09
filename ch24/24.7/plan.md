# Plan: 24.7 Activities of Nonideal Solutions (LibreTexts 14509)

Source: `source.md`; draft from `python3 tools/md2html.py 24.7`. Status: built 2026-11-09. No author, CC BY-NC-SA 4.0. No numbered equations, figures, notes or examples.

## Sub-concepts (page headers)

1. `activity` **Activity** (ours; the opening has no header): introduces `activity`, `activity-coefficient`; uses `fugacity`, `chemical-potential`.
2. `activity-coefficients-for-ionic-solutes` **Activity Coefficients for Ionic Solutes** (book's, its `###` Debeye-Hückel Law kept, and the second voice's "As seen before…" paragraphs, which the book runs on after the broken sentence): introduces `mean-ionic-activity-coefficient`, `debye-huckel-law`, `ionic-strength`; reinforces `activity`, `activity-coefficient`.
3. `raoult-versus-henry` **Raoult versus Henry** (book's): introduces `raoult-activity-convention`, `henry-activity-convention`; uses `raoults-law`, `henrys-law`.
4. `various-concentration-units` **Various concentration units** (book's): reinforces `henrys-law-constant`.
5. `non-volatile-solutes` **Non-volatile solutes** (book's): introduces `osmotic-coefficient`, `solute-activity-from-solvent`; uses `gibbs-duhem-equation`.

## Figures

None (exploration: a Sim of Debye-Hückel was judged and dropped; the exercise serves it).

## Exercises

One AI exercise (config): `a1` (Apply, multi): 0.010 mol/kg MgCl₂ at 298.15 K, ε = 78.54: I = 0.030, γ± = 0.666 with the corrected law (constant 0.509, checked by computation). Tests `ionic-strength`, `debye-huckel-law`, `mean-ionic-activity-coefficient`.

## Derivations

- The ions' Gibbs function G = μ₊ + μ₋ → … → G = μ*₊ + μ*₋ + RT ln m₊m₋ + RT ln γ₊γ₋ (printed block, five displays): **kept printed** (the config's option): each line is one substitution, and the book's words between the lines define μ* and a, which a graph would drop.
- ln γ₂,m from φ: not built (orchestrator). ln a₁ ≈ −x₂: two moves, stays, footnoted.

## Corrections (footnotes)

`c-exponent` (1/(x + y)), `c-dh-sign` (minus sign and |z₊z₋|), `c-25c` (the broken sentence; 0.509, checked by computation), `c-ln-a1` (ln a₁ = ln x₁ ≈ −x₂). As printed: "Debeye", "molaliy", "insuring", "Substituting his", "it impossible"; `\(\mu^*\)` set as maths.

## Wanted at chapter level

None.
