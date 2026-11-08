# Plan: 9.8 Molecular-Orbital Theory Does not Predict a Stable Diatomic Helium Molecule (LibreTexts 13460)

Source: `source.md`; draft from `python3 tools/md2html.py 9.8` (deleted once built).
Status: built 2026-11-08 in the Chapter 9 job, without a review stop.

One objective, two numbered figures and two example images, four numbered displays and three unnumbered, one table, one worked example, one note, one keyed exercise. Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

The book's three `<h2>` headers are kept.

1. `bond-order` **Bond Order**: (9.8.1), (9.8.2), Figure 9.8.1, H₂⁺, Table 9.8.1, He₂⁺, Example 9.8.1 (its tail kept inside). Introduces `bond-order`, `bond-order-and-stability`.
2. `the-helium-dimer` **The Helium Dimer**: (9.8.3), (9.8.4) (9.4's (9.4.10) printed again; cited, not rebuilt), the pulled quote, the van der Waals note with Figure 9.8.2. Introduces `helium-dimer-instability`, `antibonding-destabilization`, `van-der-waals-helium-dimer`.
3. `conclusion` **Conclusion**: kept in the text (config).

## Figures

- `sim-1s-diagram` · Figure 9.8.1 (+ Example 9.8.1's two images in originals) · bond-order, antibonding-destabilization, helium-dimer-instability · variation by choice and standardisation: one 1s diagram filled as H₂⁺, H₂, He₂²⁺, He₂⁺ and He₂, drawn to H₂⁺'s orbital shifts at 132 pm (ΔE₊ = −0.065, ΔE₋ = +0.211 E_h from 9.4's closed forms), so the reader sees σ* rise 3.3 times as far as σ falls · arrows: symbolic (spins; the two shift brackets) · still · choice of species, opening on H₂⁺ (part a) · headline: bond order and the electrons' net shift · 2D. Readout (9.8.1) with numbers and the net shift n_b ΔE₊ + n_a ΔE₋. H₂²⁻ (Exercise 9.8.1) is not a choice.
- `sim-he2-potential` · Figure 9.8.2 · van-der-waals-helium-dimer · variation by choice and a computed result: the LM2M2 potential (Aziz and Slaman 1991) solved in the figure (Numerov, bisection on the node count): ⁴He₂ bound by 1.31 mK, turning point 14.1 Å, ⟨R⟩ = 51.9 Å, 81 % of the density beyond the turning point; ³He⁴He holds no level · arrows: none · still · choice ⁴He₂ / ³He⁴He · headline: binding, well depth and the share beyond the turning point · graph alone, log R 2–500 Å as the book's, V in K, |u|² on its own scale, the forbidden region shaded · 2D. The book's plot is not shipped (orchestrator: licence not stated); the row's `withheld` names its source.

## Exercises

Exercise 9.8.1 (H₂²⁻, keyed), kind `exercise`, at the end. No AI exercises (config).

## Derivations

(9.8.4) cites 9.4's derivation (score 0 here); the bond-order lines are substitutions.

## Corrections

"He₂²⁺ … three valence electrons" (He₂⁺); He₂'s configuration "(σ*₁ₛ)¹" (²); the binding energy 4.6 × 10⁻⁵ kJ/mol (measured 1.1 mK ≈ 9 × 10⁻⁶; LM2M2 1.3 mK) and "5,000 times weaker" (about 4 × 10⁷). The note's 5,200 pm agrees with the measured 52 Å and stays; the table's 5,500 pm stays. "(E_H." and "existance" left as printed.

## Wanted at chapter level

None.
