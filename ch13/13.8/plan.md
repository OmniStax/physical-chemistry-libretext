# Plan: 13.8 Rotational Spectra of Polyatomic Molecules (LibreTexts 13671)

Source: `source.md`; draft from `python3 tools/md2html.py 13.8` (deleted after the build).
Status: built 2026-11-08 in the Chapter 13 job, without a review stop (config agreed).

One figure (13.8.1), seven numbered equations (13.8.1–13.8.7), one note. Licence CC BY-NC-SA 4.0; credit Jack Simons.

## Sub-concepts (page headers)

1. `review` **The rigid diatomic rotor** (ours, over the book's note "Quick Review of Diatomic Rotation"): (13.8.1)–(13.8.3). Uses `rigid-rotor`, `reduced-mass`, `rotational-constant`, `moment-of-inertia`; reinforces `rotor-energy-levels`.
2. `rotation-of-polyatomic-molecules` (book's): the inertia tensor, principal moments, (13.8.5), the operators, Euler angles. Introduces `inertia-tensor`, `principal-moments-of-inertia`, `polyatomic-rotational-hamiltonian`, `euler-angles`.
3. `spherical-tops` (book's). Introduces `spherical-top`, `spherical-top-energy-levels`, `rotation-matrix-functions`.
4. `symmetric-tops` (book's): Figure 13.8.1. Introduces `symmetric-top`, `symmetric-top-energy-levels`.
5. `asymmetric-tops` (book's). Introduces `asymmetric-top`.

## Figures

- `sim-tops` · Figure 13.8.1 · spherical-top, symmetric-top, symmetric-top-energy-levels, spherical-top-energy-levels, principal-moments-of-inertia · variation by slider and depth: one spheroid morphs from football through sphere to frisbee as I_unique/I moves, its body axes a, b, c relabelled, while the J ≤ 3 ladder below splits by K² upward (prolate) or downward (oblate) and closes into single levels at the sphere; the book's two still spheroids show neither the continuum of shapes nor the levels · arrows: none · still: no clock · slider I_unique/I 0.5–1.66 (moment-of-inertia), special at 1 (spherical top); choice |K| 0–3 for the readout's level · headline (3D band): the kind of top and the ratio; topline on the ladder: the K = ±k level of J = 3 · 3D scene above, ladder below · mathematical 3D (the shape is the lesson): free orbit, no spin, no zoom, painted flat without WebGL. A uniform spheroid: ρ = 2/(1 + c²). Levels in ħ²/2I. Original shipped with its credit (CC BY-SA 4.0).

Extra simulations: none.

## Exercises

The book sets none. AI exercise (config): `ai1` classify CH₄, CH₃Cl, C₆H₆, H₂O (choice); the solution gives J = 2's degeneracies (25; 5, 10, 10). Tests `spherical-top`, `symmetric-top`, `asymmetric-top`.

## Derivations

Prolate/oblate H_rot from (13.8.5): 3 moves, score 3, below the bar; energies by substitution. None built.

## Corrections

Footnotes: "− −iħ" and "ih" in the operators (`c-components`); J² lacks ħ² and sin²θ (`c-jsq`); "J₂" (`c-j2`); 2I² for 2I (`c-i2`); h², 2I², "2I 2" in the top energies (`c-h`); a K ≠ 0 level holds 2(2J + 1) states (`c-degeneracy`); the matrix elements that lost their kets, with the ¼ (`c-elements`). Left as printed: "in these moments", "an 3 × 3", "degenarate", "J a quantum numbers", "{C n, J,M,K }", 13.8.1's caption in semi-axes.

## Wanted at chapter level

None.
