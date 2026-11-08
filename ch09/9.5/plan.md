# Plan: 9.5 Bonding and Antibonding Orbitals (LibreTexts 13456)

Source: `source.md`; draft from `python3 tools/md2html.py 9.5` (deleted once built).
Status: built 2026-11-08 in the Chapter 9 job, without a review stop (config: the chapter in one go).

One objective (kept as printed, its "H⁺" corrected in the text), two figures, eleven numbered displays (9.5.1–9.5.11) and one unnumbered, one note, two pulled quotes. No book exercise. Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

The opening has no header of the book's and divides in two; the book's one `<h2>` is kept.

1. `sum-and-difference` **Sum and difference**: (9.5.1), σ₁ₛ and σ*₁ₛ as sum and difference, Figure 9.5.1, cylindrical symmetry, (9.5.2), (9.5.3), the nodal plane, bonding and antibonding, the pulled quote. Introduces `sigma-orbital`, `antibonding-node`.
2. `energy-level-diagram` **The energy-level diagram**: stabilized and destabilized, Figure 9.5.2, the second pulled quote. Introduces `bonding-stabilization`, `mo-energy-level-diagram`.
3. `beyond-1s` **Expanding Beyond the 1s Orbital Basis Set** (book's): 134 pm and 1.8 eV, (9.5.4)–(9.5.10), the steps note, (9.5.11). Introduces `extended-lcao-basis`; uses the secular equations and linear variational energy, which 7.2 builds as derivations (not rebuilt, config).

## Figures

- `sim-sigma-clouds` · Figure 9.5.1 · sigma-orbital, antibonding-node, bonding-molecular-orbital, antibonding-molecular-orbital · depth and variation: the reader turns the cloud and sees σ₁ₛ round about the axis and σ*₁ₛ cut by a plane, which the book's lobe drawings only assert; R moves the nuclei and the axis slices of ψ and ψ² (the book's panels a–d) follow · arrows: none · still: a stationary state has no time · choice σ₁ₛ / σ*₁ₛ; slider R 53–212 pm (length), opening at 106 pm = 2a₀, H₂⁺'s exact bond length (S = 0.586, the normalization 0.561 of Example 9.3.1) · headline: ψ² at the midpoint · graph below: ψ beside ψ² along the axis, the two scaled 1s functions dashed · mathematical 3D (config): 3500 points sampled from |ψ|², two tones of the wavefunction hue by sign, the nodal plane of σ* a faint disc, protons in their convention colour; free azimuth, elevation ±85°, no buttons; flat fallback from the library. Readout (9.5.2) or (9.5.3) with S from (9.3.9) and the normalization.
- `sim-h2-diagram` · Figure 9.5.2 · mo-energy-level-diagram, bonding-stabilization · standardisation only (faithful copy, config): H₂'s diagram in the house level style, the first the book draws · arrows: symbolic (electron spins) · still, no controls · headline none · 2D. The book's lobe sketches are left out: Figure 9.5.1 draws the orbitals. Readout H₂'s configuration (σ₁ₛ)².

Extra simulations: none (config's offers are for other sections).

## Exercises

None printed. One AI exercise (config): `ai1`, the six-orbital basis (9.5.11): how many MOs, how many σ, how many with the midplane node (6, 6, 3); Analyze; tests extended-lcao-basis, sigma-orbital, antibonding-node.

## Derivations

(9.5.4)–(9.5.10) qualify but are 7.2's `linear-energy` and `secular` derivations repeated: not rebuilt, the text names the linear variational method (config). Score of nothing else reaches the bar.

## Corrections

"H⁺" for H₂⁺; 134 pm against the 132 pm the 1s formulas give (9.4's numbers); (9.5.5)'s first-line indices; the steps note's N(N − 1)/2. The objective keeps its printed "H⁺"; typos and "check here" (no link) are left as printed. The broken `\(c_{ij\})` is set as maths.

## Wanted at chapter level

None.
