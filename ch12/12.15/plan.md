# Plan: 12.15 Molecular Orbitals can be Constructed on the Basis of Symmetry (LibreTexts 433985)

Source: `source.md`; draft from `python3 tools/md2html.py 12.15` (deleted). Status: built 2026-11-08 in the
Chapter 12 job. Licence CC BY 4.0 (Vallance; the electronic-transitions half from an older ChemWiki page).
Twenty numbered displays (12.15.1–12.15.20): Vallance's `\text(18.1)`, `\tag{18.2}`, `\tag{19.1}`, `\tag{27.4}` and
the converter's 22.x/23.x renumbered in page order (orchestrator's decision); the C₂ᵥ character table display and
the transition integral (an image at the source, set as maths) stay unnumbered.

## Sub-concepts (page headers, all the book's)

1. `bonding-in-diatomics`: overlap integral (12.15.1), the diatomic table (12.15.2). Introduces `same-symmetry-bonding`.
2. `bonding-in-polyatomics`: the procedure, (12.15.3). Introduces `mo-from-salcs`.
3. `steps` Summary of the Steps…: 12.8's note printed again (repeated material; its displays numbered here, its Vallance citations footnoted to 12.8.19/12.8.20). The draft had moved it to `summary_html`; it is the book's text block, restored.
4. `water-example`: water's basis and its transformations (12.15.6), `sim-water-basis`.
5. `matrix-aside` with the example "Rotation" (printed label kept, `ex-rotation`).
6. `matrix-characters-salcs`: matrices, reduction, projections, SALCs, MO forms; `sim-water-mos` after the paragraph the book's image sat inside.
7. `electronic-transitions` (h3 Raman, Fluorescence, Phosphorescence, Symmetry). Introduces `electronic-state-symmetry`, `electronic-selection-symmetry`.

## Figures

- `sim-water-basis` · Figure (unnumbered, original 61171) · symmetry-operation, matrix-representation, character · motion (the operation carries molecule and orbital) and depth (orbitals out of the plane) · arrows: none · moving: 2.0 s of motion, 0.5 s for the column to fill, 1.4 s hold · choices: operation (E, C₂, σᵥ(xz), σᵥ′(yz)), basis orbital (six) · headline: "C₂ carries s_H onto s_H′" · beside: a 2D canvas under the scene with Γ(g), the chosen column filling, diagonal boxed, χ · physical 3D (F.space3d, flat fallback built in), water in the xz plane, yaw ±60° about C₂, pitch −9° to 50°, no spin or zoom. Opens on C₂ and s_H, the book's "Rotation" example. Not shared code with 12.2's scene (built by another builder at the same time).
- `sim-water-mos` · Figure (unnumbered, originals 57783 + 61176, folded) · mo-from-salcs, electronic-state-symmetry, electronic-selection-symmetry · variation (orbital, state) and depth · still · select: orbital (6); choice: state (ground, (1B₂)¹(3A₁)¹, (1B₂)¹(2B₁)¹) · headline: the orbital's kind and species · beside: a schematic ladder (spacing schematic as in the book's diagram, the book's energies printed), electrons, the excitation arrow labelled with its polarization or "no single photon", a sign legend · physical 3D, same bound. Orbital shapes are the SALCs of the orbital's species with signs as the book's isosurfaces show; sizes schematic (the page gives no coefficients). 12.14.10 stays in 12.14 as the book's image.
- `fig-nh3-light` · unnumbered image (61175) kept as the book prints it (the text points at it, "see figure below left/right"); caption ours. Exploration proposed folding it into 12.13's polarization figure; not done, since 12.13 is another builder's.
- The transition moment integral image (9878) is set as maths and not shipped; 61176's later position becomes a figref to `sim-water-mos`.

## Exercises

One AI exercise (config): which polarization drives ground-state water to (1B₁)¹(3A₁)¹ (choice; x), worked from the
C₂ᵥ table. The book's own two transitions are worked in the text, so the exercise takes the third configuration.

## Derivations

Overlap → same species: 3 moves, stays (exploration). The projection sums are substitutions.

## Corrections (footnotes)

Vallance's Equation (15.20) ×2 and 16.1, Section 18; the B₂ projection line of s_H; Ψ(B₁)'s c₅p_z; "part C" is
12.13's diagram; Raman's "volume" (polarizability); notes 7 and 8 not printed.

## Wanted at chapter level

None.
