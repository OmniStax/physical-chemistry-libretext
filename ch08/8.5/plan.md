# Plan: 8.5 Wavefunctions must be Antisymmetric to Interchange of any Two Electrons (LibreTexts 13443)

Source: `source.md`; draft from `python3 tools/md2html.py 8.5` (deleted).
Status: built 2026-11-08 in the Chapter 8 job, without a review stop (config: the chapter in one go).

Two objectives, one numbered figure, nine numbered displays, four exercise boxes (8.5.1, 8.5.2, 8.5.4,
8.5.5; no 8.5.3), one note, two pulled quotes. Licence CC BY-NC-SA 4.0; credit Theodore Zielinski (tag).

## Sub-concepts (page headers)

1. `opening` **Indistinguishable electrons** (ours; the exploration's "Which Electron Is Which?" is a question, which the humanizer rules out): indistinguishability, helium's equation, the product of spin-orbitals, the unphysical labels. Introduces `indistinguishable-particles`, `spin-orbital`.
2. `exchange-operator` **The Exchange Operator** (book's): the guide statement, e^{iφ}, (8.5.1)–(8.5.4) as a derivation, P̂₁₂ (8.5.5), the note "Bosons and femions" with (8.5.6). Introduces `exchange-phase`, `exchange-operator`, `permutation-symmetry`, `boson`, `fermion`, `antisymmetry-principle`.
3. `pauli-exclusion` **The Pauli’s Exclusion Principle** (book's): ψ⁻ (8.5.7), ψ⁺ (8.5.8), the pulled quote, (8.5.9), ψ⁻ = 0, the Sim, Figure 8.5.1, the closing quote. Introduces `two-electron-antisymmetric-combination`, `pauli-exclusion-principle`.

## Figures

- `sim-exchange` · Sim · exchange-operator, permutation-symmetry, two-electron-antisymmetric-combination, pauli-exclusion-principle · variation by choice: two electrons in a box (3.5's states), ψ(x₁, x₂) as a signed map over the square and |ψ|² beside it; swapping the labels turns the map over about its diagonal, which the reader would otherwise have to imagine · arrows: none · still: the swap is a morph on input (the square flips edge-on about x₁ = x₂), no clock · choices n_a, n_b (1–4), function (product, symmetric, antisymmetric), labels (x₁, x₂ / swapped); opens on n_a = 1, n_b = 2, antisymmetric · headline: what the state shows (sign flips, |ψ|² unchanged; zero everywhere when n_a = n_b) · |ψ|² map beside · 2D. Facts: the sign colours of 3.9 (#c2413a, #2f6ab3). Referents electron 1 and electron 2 on the axis titles.
- `fig-8-5-1` · Figure 8.5.1 · pauli-exclusion-principle · faithful copy (archetype 7), kind `figure`, still: the two rows of beryllium's boxes, struck out and ticked; the book's orange and blue arrows drawn in ink (their colours carry nothing) · standardisation only. Caption kept, corrected through the row. Original shipped (no credit; width 463).

Extra simulations: none.

## Exercises

All `place: end`. Exercise 8.5.5 keyed (`source`, open). Exercises 8.5.1, 8.5.2, 8.5.4 unkeyed, AI solutions (open; 8.5.2 cites the derivation). No AI exercises (config).

## Derivations

- `exchange-phase` · (8.5.1)–(8.5.4) · equations with words, qualifies · built, five nodes ending at e^{iφ} = ±1; (8.5.3) is a side result (a check), so the graph has two ends. Notes: (8.5.2)'s left side printed ψ(r₁, r₂); (8.5.3)'s conjugate on the wrong factor. Euler's formula cited from 2.3. The words between the displays became facts and reasons; "which is true only if φ = 0 or an integer multiple of π" is the last node's reason.
- ψ⁻ = 0 (Pauli): score 2, stays.

## Corrections

Helium's equation (∇₁² twice, the potential's sign); "atoms 1 and 2"; the second one-electron equation's φ_a; the permuted function ψ(r₁, r₂) in prose; (8.5.5) and the note's two displays (±ψ(r₂, r₁)); "asymmetric"; "|φ^{−i}⟩ = 0" and its condition; "|φ_b(r₁)⟩ = φ_a(r₂)⟩"; Figure 8.5.1's broken caption (through the row). Typos left as printed ("femions", "Moveover", "electon", "wavefucntion", "constructs", the objectives' "wavelengths" and "Interprete").

## Wanted at chapter level

None.
