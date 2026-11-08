# Plan: 18.8 Rotational Partition Functions of Polyatomic Molecules Depend on the Sphar of the Molecule (LibreTexts 13698)

Source: `source.md`; draft from `python3 tools/md2html.py 18.8` (deleted after the build).
Status: built 2026-11-08 in the Chapter 18 job, without a review stop. Tembe's IIT Bombay notes; CC BY-NC-SA 4.0.

Three numbered equations (18.8.1)–(18.8.3), two notes, the NO₂ example, no figure.

## Sub-concepts (page headers)

1. `principal-axes` **Principal axes and three kinds of top** (agent's): degrees of freedom, centre of mass, inertia products, the eigenproblem, the rotor energy, Θ_rot,i, the tops. Introduces `center-of-mass`.
2. `spherical-tops` **Spherical Tops** (book's): E_J, g_J, the derivation. Introduces `spherical-top-partition-function`.
3. `symmetric-tops` **Symmetric Tops** (book's; its first sentence on ω and L kept where printed): ε_JK, B̃, Ã, the derivation. Introduces `symmetric-top-partition-function`.
4. `asymmetric-tops` **Asymmetric Tops** (book's): the prose route, the note "Symmetry Number" (its self-link now an xref to 18.6's `symmetry-correction`), (18.8.1), the note "Classical Derivation (Optional)" holding its first paragraph and the derivation, Θ_A, Θ_B, Θ_C, (18.8.3), the NO₂ example. Introduces `asymmetric-top-partition-function`.
5. `thermodynamics-properties` **Thermodynamics Properties** (book's): the derivation, the improved q_rot. Introduces `nonlinear-rotational-energy`.

## Figures

None (exploration: 13.8 draws the tops; the lesson here is the integral).

## Exercises

`a1` AI: NO₂'s q_rot at 600 K from 2238 at 300 K through T^{3/2}: 6330 (checked).

## Derivations

- `spherical-top` · *Derivation · the rotational partition function of a spherical top* · half hidden, score 5 · replaces the sum, the condition, the integral and the result with their connecting words; J(J + 1) ≈ J² and (2J + 1)² ≈ 4J² and the Gaussian moment inserted; checked against the summed series (1776.9 against 1772.5 at Θ/T = 0.01). Note: signs, Θ ≫ T, dJ, T/q_rot.
- `symmetric-top` · *Derivation · the rotational partition function of a symmetric top* · hidden, score 9 · checked numerically first (summed series 398.7 against 396.3 for the 8π² form, against 71.2 for the printed 8π), so the correction stands; K outer, J from |K|; result with 8π². Note on the printed double sum and 8π.
- `asymmetric-classical` · *Derivation · the classical rotational partition function of an asymmetric top* · printed in the note · H completed in p_θ (node 0), then the five integrations and σ to (18.8.1) (node 1). (18.8.2), the p_θ factor, is now a step's line and its cap, not a numbered display. The printed (18.8.1) above the note stays (the prose route ends on it and the text cites it twice); the derivation's last node carries the same number.
- `rotational-energy` · *Derivation · the rotational energy and heat capacity of a nonlinear molecule* · hidden, score 6 · replaces E_rot = (3/2)RT and C̄_V = (3/2)R (the "and:" between them left out, named in `notes`).
- Kept: (18.8.1) → (18.8.3) (two moves).

## Corrections

`c-com` (= 0), `c-beta` (β_o), `c-eig` (the second eigen-equation's sign of γI_yz, found in building), `c-hbar`, `c-gj`, `c-eh` (e^{−H/kT}), `c-ln` (T³), `c-115` (11.5 K), `c-sub` (cubes and 0.590 K; 2238). In derivation notes: the spherical top's signs, Θ ≫ T, dJ, T/q_rot; the symmetric top's sum and 8π; the note's H and H/kT lines. As printed: "Sphar", "principle", "there Euler angles". The improved q_rot's "2/I_C" twice and "I_C/I_BI_B" rest on memory only and are not footnoted (orchestrator's rule).

## Wanted at chapter level

None.
