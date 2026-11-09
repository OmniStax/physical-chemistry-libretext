# Plan: 26.2 An Equilibrium Constant is a Function of Temperature Only (LibreTexts 14523)

Source: `source.md`; draft from `python3 tools/md2html.py 26.2`. Status: built 2026-11-08, no review stop (config agreed). CC BY-NC-SA 4.0; no credits printed. Displays (26.2.1)–(26.2.2).

## Sub-concepts (page headers)

The untitled opening is split in two at the note:

1. `equilibrium-constant` **The equilibrium constant** (agent's): Δ_rG = 0, Δ_rG° = −RT ln K, K in pressures, the Note. Introduces `equilibrium-constant`, `standard-gibbs-equilibrium-constant`.
2. `temperature` **Equilibrium constant and temperature** (config's header, sentence case): ∂ln K/∂T and the derivation `van-t-hoff`. Introduces `van-t-hoff-equation`, `integrated-van-t-hoff`.
3. `le-chatelier-s-principle` **Le Chatelier's Principle** (book's): A ⇌ B + C, the derivation `dissociation-extent`. Introduces `k-temperature-only`, `dissociation-extent-pressure`, `le-chateliers-principle`.
4. `concentration` **Concentration** (book's): (26.2.1)–(26.2.2). Introduces `molarity`, `concentration-equilibrium-constant`.

## Figures

None (the van 't Hoff Sim is 26.7's; a compression Sim was judged and dropped in the exploration).

## Exercises

`q1`: the book's unnumbered NH₃ example, which prints no solution, moved out of the text into the Exercises document as a `question` (Chapter 3's decision) with an AI solution: products, reactants, reactants, unaffected, products (2NH₃ ⇌ N₂ + 3H₂ is endothermic, Δ_rH° = +91.80 kJ/mol), and K = x_{N₂}x_{H₂}³(P/P°)²/x_{NH₃}². The exploration's first "right, left, right, unaffected, left" (corrected there in the chapter pass) read the volume and temperature rows as for the synthesis; the decomposition the book writes shifts to the reactants on compression and to the products on heating.

## Derivations

- `van-t-hoff` ("Derivations ·", two results): ln K = −Δ_rG°/RT, Gibbs–Helmholtz (22.7, drv `22.7/gibbs-helmholtz`) → (∂ln K/∂T)_P = Δ_rH°/RT²; then with Δ_rH° constant → the integrated form. Replaces the book's displays from "Starting with Gibbs energy" to the integrated form; the book's "\Delta rG" markup is set right.
- `dissociation-extent`: K = P_BP_C/P_A, the amounts in ξ, Dalton (24.1) → K = Pξ_eq²/(1 − ξ_eq²); the line the book prints as "P_B [ξ/1+ξ] P" (its "=" lost) follows the correct maths.
- K in concentrations (score 4): not built (orchestrator).

## Footnotes

None.

## Wanted at chapter level

None.
