# Plan: 6.4 Hydrogen Atomic Orbitals Depend upon Three Quantum Numbers (LibreTexts 13429)

Source: `source.md` (`python3 tools/convert.py 6.4`); draft from `python3 tools/md2html.py 6.4`.
Status: built 2026-11-08 in the Chapter 6 job, without a review stop (config: the chapter in one go).

One objective, no figure, one table (captioned "Table 6.4.3", cited as 6.4.1; label kept as printed),
four numbered equations (6.4.1–6.4.4) and one unnumbered display (E_n), one note (Bohr Theory vs.
Schrödinger Theory), six exercise boxes and an empty seventh (dropped by the draft tool). No summary.
Licence CC BY-NC-SA 4.0; credit Hanson, Harvey, Sweeney, Zielinski.

## Sub-concepts (page headers)

1. `orbitals-and-quantum-numbers` **Orbitals and their quantum numbers** (ours, the exploration's proposal in
   sentence case): ψ = RY (6.4.1), |ψ|² dτ, the three names, their allowed values, the letter codes, n²
   orbitals. All of it is 6.2's (`hydrogen-wavefunctions`, the three quantum numbers, `hydrogen-quantum-number-rules`,
   `orbital-letter-codes`, `hydrogen-degeneracy`): reinforced here, introduced nothing.
2. `radial-part-of-the-wavefunction` **Radial Part of the Wavefunction** (book's): (6.4.2)–(6.4.4), the
   table. Introduces `radial-asymptotic-behavior`, `associated-laguerre-polynomials`, `hydrogen-radial-functions`.
3. `energy-levels` **Energy levels and the Bohr model** (ours): the energy from n ≥ l + 1 and the note.
   Introduces `hydrogen-energy-levels`, `bohr-versus-schrodinger`; reinforces `bohr-energy-levels`.

## Figures

None in the book; none built. Extra simulations: the hydrogen ladder was offered and not picked (config:
1.8 has one).

## Exercises

- `e1` Exercise 6.4.1 (keyed, open; correction under the card: Y* and the δ factors).
- `e2` Exercise 6.4.2 (keyed, open, with the book's Desmos image; correction: e^{−r/na₀}, r ≥ 0).
- `e3` Exercise 6.4.3 (unkeyed, AI solution: l = 0 gives zero angular momentum; Bohr's mvr = nħ cannot).
- `a1` AI (config): E₁ and E₂ with μ (−13.594, −3.3985 eV) and E₁ with m_e (−13.601 eV), the 0.054% shift
  Exercise 6.1.1 predicts; tolerances 0.02% (the point is the difference) and 5% on the percentage.
- Exercises 6.4.4–6.4.6 print Exercises 6.2.2–6.2.4 again: they are cards in 6.2 (another builder) and are
  left out here; `notes` and `exercise_notes` say so. The empty last box is left out (`notes`).

All `place: end`.

## Derivations

None qualify (exploration: the asymptotic form, the Laguerre series and its truncation are asserted).

## Corrections

The θ-equation's "azimuthal angle Θ"; (6.4.2) exp(−r/n a₀); (6.4.3) summed over r; "Equation 6.4.1" twice
for the radial equation (the live page's label of "Equation 6.1.14"; it is 6.1's Equation 6.1.13); "Table
6.4.1" for the table captioned 6.4.3; R₃₁ and R₃₂ (checked by normalizing: the corrected forms integrate
to 1); the keys of 6.4.1 and 6.4.2. Not marked: "L_n , _l(r)", the stray parenthesis in √((l(l + 1)) ħ.

## Wanted at chapter level

None.
