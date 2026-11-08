# Plan: 9.7 Molecular Orbitals Can Be Ordered According to Their Energies (LibreTexts 13459)

Source: `source.md`; draft from `python3 tools/md2html.py 9.7` (deleted once built).
Status: built 2026-11-08 in the Chapter 9 job, without a review stop.

No objectives; seven numbered figures and two example images, folded into three figures; five numbered displays; two worked examples; two keyed exercises. Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

1. `valence-orbitals` **Valence orbitals** (agent's; exploration proposed "Valence Orbitals First"): the opening paragraph. Introduces `valence-molecular-orbitals`.
2. `ns-orbitals` **Molecular Orbitals Formed from ns Orbitals** (book's): M₂ of the alkali and alkaline-earth metals, Figure 9.7.1, Example 9.7.1 (part C kept inside it). Introduces `homonuclear-diatomic-molecule`, `filling-mo-diagram` (Example 9.7.1's strategy B).
3. `np-orbitals` **Molecular Orbitals Formed from n p Orbitals** (book's): (9.7.1)–(9.7.5), Figures 9.7.2 and 9.7.3. Introduces `p-sigma-orbitals`, `pi-orbital`.
4. `energies` **Energies for Homonuclear Diatomic Molecules** (book's): the four key points, Figures 9.7.4–9.7.6, F₂, the s–p mixing paragraph, Example 9.7.2 (its tail kept inside). Introduces `mo-diagram-rules`, `period-2-mo-order`.
5. `ns-with-np` **Molecular Orbitals Formed from ns with n p Orbitals** (book's): Figure 9.7.7, cited (folded into the p-orbital figure).

## Figures

- `sim-ns-diagram` · Figure 9.7.1 (+ Example 9.7.1's image in originals) · homonuclear-diatomic-molecule, filling-mo-diagram · variation by choice: one diagram filled as M₂ (alkali), Na₂⁻ and M₂ (alkaline earth), which the book draws three times · arrows: symbolic (spins) · still · choice of species, opening on the alkali M₂ (part a) · headline: valence electrons and bond order · 2D. Readout configuration and bond order. Ca₂⁺ (Exercise 9.7.1) is not a choice. Caption correction through the row ("nonbonding").
- `sim-p-clouds` · Figure 9.7.2 + 9.7.3 + 9.7.7 · p-sigma-orbitals, pi-orbital, antibonding-node · depth: head-on against side-on lobes and the planes of the nodes are arrangements in space the book's flat lobe drawings flatten · arrows: none · still · choices: pair (np_z + np_z, np_x + np_x, ns + np_z) and combination (bonding, antibonding), with the book's signs (difference bonds for p_z, sum for p_x and for s + p_z) · headline: one sentence on what the lobes do · mathematical 3D (config): 4000 points from |ψ|² of Slater-type s and p functions (schematic, one exponent, nuclei 4 apart), two tones of the wavefunction hue; nodal planes x = 0 (π) and z = 0 (homonuclear antibonding) faint ink; the s–p antibonding node is curved and not drawn; free azimuth, elevation ±85°, no buttons. np_y is np_x turned a quarter turn, as the text says: not a separate choice. Readout the combination with the book's equation and its σ/π, bonding/antibonding (σ*_np_z written with its star, against the printed slip). Without an R slider: overlap is the text's, the choices carry the point.
- `sim-period2` · Figure 9.7.4 + 9.7.5 + 9.7.6 (+ Example 9.7.2's image in originals) · period-2-mo-order, filling-mo-diagram, mo-diagram-rules · flow and variation: electrons drop in one by one by Aufbau, Pauli and Hund, and between N₂ and O₂ σ₂ₚ glides from above the π pair to below it · arrows: symbolic (spins), the drop is the motion · moving: the filling is a sequence, 0.42 s an electron, 1.2 s hold (8.8's precedent) · select Li₂ … F₂ and S₂, opening on O₂ (Figure 9.7.5b) · headline: which orbital the current electron enters, then bond order and unpaired electrons · 2D, schematic heights (the book prints no energies). Readout configuration so far, bond order, unpaired electrons. Caption correction through the row (9.7.5a is F₂).

## Exercises

Exercise 9.7.1 (Ca₂⁺, keyed) and Exercise 9.7.2 (O₂²⁻, keyed), kind `exercise`, at the end, `generated_by: source`. No AI exercises (config).

## Derivations

None qualify: (9.7.1)–(9.7.5) are definitions, the bond orders substitutions.

## Corrections

The antibonding orbital named σ_np_z = np_z(A) − np_z(B) (and (9.7.3)'s missing star); σ₂ₚ "higher than the degenerate π*" (π); "higher than the σ_3p_z orbitals" (π₂ₚ pair); Example 9.7.2's "Figures 9.7.6 and 9.7.7" (9.7.5 and 9.7.6); Figure 9.7.1's caption "nonbonding" and Figure 9.7.5's caption "C₂ … F atom" through the figure rows. The stray (9.7.1) and the glossary fragment after "pi star (π*) orbital" are kept as printed; garbled σ* markup is set as σ*.

## Wanted at chapter level

None.
