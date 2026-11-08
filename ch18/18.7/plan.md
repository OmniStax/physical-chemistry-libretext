# Plan: 18.7 Vibrational Partition Functions of Polyatomic Molecules Include the Partition Function for Each Normal Coordinate (LibreTexts 13697)

Source: `source.md`; draft from `python3 tools/md2html.py 18.7` (deleted after the build).
Status: built 2026-11-08 in the Chapter 18 job, without a review stop. No credit list; CC BY-NC-SA 4.0.

Two numbered equations (18.7.1), (18.7.2), Figure 18.7.1 (animated GIF), one unnumbered example (NO₂).

## Sub-concepts (page headers)

1. `independent-normal-modes` **Independent normal modes** (agent's): Q, q_trans, q_elec, the normal modes, the first printing of q_vib, E_vib, C_V,vib. Introduces `polyatomic-vibrational-partition-function`.
2. `vibrational-entropy` **Vibrational Entropy** (book's): (18.7.1), Figure 18.7.1, ε_vib, ν_i, (18.7.2), the derivation, the NO₂ example. Introduces `vibrational-entropy-conformations`, `polyatomic-vibrational-thermal-energy`, `polyatomic-vibrational-heat-capacity` (introduced at the correct second printing, which the derivation works).

## Figures

- `sim-water-mode-factors` · Figure 18.7.1 · polyatomic-vibrational-partition-function, vibrational-temperature · flow by animation and variation by slider: the three modes move (the GIF's own motion, the oxygen moving too) and under each its ladder fills as T rises, which the GIF cannot show · arrows: none; the motion is drawn as motion (kinematic, so moving) · moving: each molecule oscillates at a drawn frequency in proportion to its wavenumber, its swing growing as √(2⟨v⟩ + 1) · slider T (log, 300–10 000 K, opens on 300 K, detent there) · headline: kT/hc in cm⁻¹ against the rungs of 1595 to 3756 cm⁻¹ · three columns: mode above, its ladder v = 0–3 on one common energy scale (the bend's rungs closest) with population bars and a kT band, Θ_vib and the factor under it; readout q_vib = Π 1/(1 − e^(−Θ/T)) and the product with live numbers (levels from the zero point, as the example) · 2D: every motion is in the molecular plane. Mode shapes from 12.10's `sim-water-modes`; wavenumbers the caption's, Θ = 1.4388 cm K × ν̃ (5261, 5404, 2295 K). Labels: mode names, v numbers on the first ladder only, kT once; atoms and levels by hover. Conventions O, H. Caption correction `c-fig` (5160 → 5261 K, 5360 → 5404 K) through the row's `figure`.

Extra simulations: none (config).

## Exercises

`a1` AI: water's q_vib at 1000 K from Θ = 5261, 5404, 2295 K with zero-point reference: 1.123 (checked; the caption's printed Θ give 1.124).

## Derivations

- `polyatomic-vibration` · *Derivation · vibrational energy and heat capacity of a polyatomic gas* · hidden, score 8 · replaces the second printing's ⟨E_vib⟩ and C̄_V displays (the lone "and" between them is left out, named in `notes`); two nodes: ⟨E_vib⟩ from (18.7.2) and NkT²∂ln q/∂T (17.8), then C̄_V from (17.4.1). Every line checked by differentiation.

## Corrections

`c-q2` ([q]² → q^N), `c-hnu` (hν → hν_i), `c-cv` (the first C_V,vib), `c-h` ((18.7.1)'s kinetic term), `c-fig` (caption). As printed: "{g_i}", "take out results", the caption's mode order. NO₂'s Θ_vib (memory only) not footnoted (orchestrator's rule); the example's 1.0035 (1.00357 to five places) left as rounding.

## Wanted at chapter level

None.
