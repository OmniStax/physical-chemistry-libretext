# Plan: 13.9 Normal Modes in Polyatomic Molecules (LibreTexts 13672)

Source: `source.md`; draft from `python3 tools/md2html.py 13.9` (deleted). Built 2026-11-08 in the Chapter 13 job,
without a review stop (config agreed). Licence BY-NC-SA 4.0; no tagged authors (the book's).

## Sub-concepts (page headers)

1. `normal-modes-and-symmetry` **Normal modes and their symmetry** (ours; the opening has no header). Reinforces `molecular-normal-modes`.
2. `degrees-of-freedom` **Degrees of Freedom** (book's): the three kinds, Table 13.9.1, Example 13.9.1, the six motions and Figure 13.9.1. Introduces `vibrational-motion-types`; reinforces `degrees-of-freedom`, `vibrational-mode-count`.
3. `normal-modes` **Normal Modes** (book's): (13.9.1), (13.9.2) kept printed; (13.9.3)–(13.9.5) and the unnumbered ψ display, with their connecting phrases, become the derivation. Introduces `polyatomic-harmonic-potential`, `normal-coordinates`, `separable-vibrational-hamiltonian`, `polyatomic-vibrational-energy`.
4. `normal-coordinate-co` **Pictorial description of normal coordinates using CO** (book's): Figure 13.9.2.

## Figures

- `sim-ch2-modes` · Figure 13.9.1 · vibrational-motion-types · flow by animation and depth: the six named motions move, and wagging and twisting leave the plane, which the book's GIF table (not shipped, `withheld`) shows only as six separate loops · arrows: none · moving: the hydrogens oscillate, one drawn rate for all six · select motion (six options) · headline (the stage's): the motion, in or out of the plane, stretch or bend · readout Q_j(t) = A sin(2πν_j t) with the live Q_j/A · physical 3D: CH₂ with its two backbone carbons (F.el C, H; the backbone translucent), orbit ±75° in yaw, pitch −0.3 to 1.3 rad (look along the plane, never through the backbone), no spin, no zoom, flat painted fallback. Carbon and backbone held still (simplification in the code comment). No frequencies drawn: the six run at one rate.
- `sim-co-normal` · Figure 13.9.2 · normal-coordinates · flow by animation: the two atoms swing in the mass ratio about a fixed centre of mass and their displacements add to q, traced against time · arrows: none (brackets for Δr) · moving: three periods a loop · slider A (length) 2–25 pm, default 15 pm, detent 4.8 pm (ground-state turning point, from ħ/μω with ν̃ = 2143 cm⁻¹) · headline: q and the two displacements · scene above, graph below (q solid, Δr(C), Δr(O) dashed, legend above) · 2D. r₀ = 112.8 pm. The book's image kept as original (width 370).

Extra simulations: none (config).

## Exercises

`ai1` (AI, numeric multi): rotational and vibrational counts of C₂H₂ (2, 7) and H₂CO (3, 6). Tests `degrees-of-freedom`, `vibrational-mode-count`.

## Derivations

`vibrational-energy` · "Derivation · the vibrational energy of a polyatomic molecule" (printed block; exploration: built). Four nodes: (13.9.3) from Ĥ = T + ΔV and (13.9.2); (13.9.4) as a sum of one-mode operators; the product wavefunction (fact: the book's sentence on products and sums, `drv` 3.9/box3d); (13.9.5) from the oscillator levels (5.2.3). Notes: μ_i for μ_j in (13.9.3); (13.9.4)'s nested sum; ψ_vib's missing argument list; N_vin.

## Footnotes

`c-swapped` (translational/rotational swapped); `c-caption` (figure, "is equation to").

## Wanted at chapter level

None.
