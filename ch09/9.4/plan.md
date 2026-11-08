# Plan: 9.4 Chemical Bond Stability (LibreTexts 13455)

Source: `source.md`; draft from `python3 tools/md2html.py 9.4`.
Status: built 2026-11-08 in the Chapter 9 job, without a review stop.

Two objectives (no lead-in), thirteen numbered displays (9.4.1–9.4.13), two figures (9.4.2, 9.4.3; no 9.4.1),
two definition notes, three exercises (one keyed). Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

1. `opening` **The energy of H₂⁺** (ours, the exploration's, sentence case): (9.4.1)–(9.4.11), Exercises
   9.4.1–9.4.2's material, the two notes. Introduces `h2plus-lcao-energy`, `h2plus-coulomb-integral`,
   `h2plus-exchange-integral`, `h2plus-energy-curve`, `h2plus-bond-stability`.
2. `the-coulomb-and-exchange-integrals` **The Coulomb and Exchange Integrals** (book's): (9.4.12), (9.4.13),
   Figure 9.4.2 + 9.4.3, the meaning of J and K. Introduces `overlap-charge-density`.

## Figures

- `sim-energy` · Figure 9.4.2 + 9.4.3 (both originals shipped; 9.4.3's caption corrected through the row) · h2plus-coulomb-integral, h2plus-exchange-integral, h2plus-energy-curve, h2plus-bond-stability · motion: the curves are traced by the approach itself, so the reader watches J and K deepen and only ΔE₊ find a well · arrows: none · moving: R from 6 to 0.8 a₀ over 7 s · choice bonding/antibonding (the scene's density and the bold curve) · headline: ΔE at R in eV, and whether the molecule holds · scene above (the two protons and ψ² on the axis), two graphs below: 1/R, J, K, S; ΔE₊ and ΔE₋ with the minimum (132 pm, −1.76 eV) marked once passed · 2D. J(R), K(R): the closed forms (Pauling; McQuarrie and Simon), named in `notes`.

## Exercises

Exercise 9.4.1 (keyed; key's ket sign corrected), 9.4.2 (unkeyed, AI solution; its "Equation 9.2.1" corrected
to 9.4.10 in the prompt), 9.4.3 (unkeyed, AI solution). One AI exercise (config): ΔE₊ and ΔE₋ at R = 2a₀ from
S, J, K (−0.054, +0.338 hartree).

## Derivations

- `drv-energy` · *Derivation · the energy of H₂⁺* · qualifies (printed block with words) · replaces the
  display (9.4.10) after "Using the expressions … produces:"; facts (9.4.7), (9.4.8), (9.4.9), which stay
  printed with their notes, since Exercise 9.4.1 retraces (9.4.2)–(9.4.3) and the bullets explain each term
  of (9.4.8) and (9.4.9). One node, four moves, ending at (9.4.10). The exploration's wider record (through
  H_AA and H_AB) would have printed (9.4.8) and (9.4.9) twice.

## Corrections

The J definition box (attraction to proton B, not electron–electron repulsion); φ_{1a_A}, φ_{1a_B}; "less
than 100 pm" and "134 pm" (81 pm and 132 pm with the curves of Figure 9.4.2); Exercise 9.4.1's key; Exercise
9.4.2's equation number; Figure 9.4.3's caption. Objectives' "intermolecular" left as printed (no marker
place in an objective).

## Wanted at chapter level

None.
