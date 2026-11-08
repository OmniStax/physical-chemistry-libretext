# Plan: 8.3 Hartree-Fock Equations are Solved by the Self-Consistent Field Method (LibreTexts 13441)

Source: `source.md`; draft from `python3 tools/md2html.py 8.3`.
Status: built 2026-11-08 in the Chapter 8 job, without a review stop (config: the chapter in one go).

Three objectives, three `<h2>` headers, five numbered displays (8.3.1–8.3.5), three notes (Three Energies;
the untitled ionization-energy box; Shielding and Effective Charges, holding Figure 8.3.2), one pulled quote,
two figures. CC BY-NC-SA 4.0, Theodore Zielinski.

## Sub-concepts (page headers)

1. `hartree-method` **The Hartree method** (ours; the exploration's "One Step beyond Ignoring Repulsion", renamed through the humanizer to name the thing): the opening paragraph. Uses `hartree-approximation`.
2. `unsolvable` **Unsolvable Systems** (book's): V_ne (8.3.1), V_ee, Ĥ (8.3.2), (8.3.3). Reinforces `electron-electron-repulsion`, `multi-electron-hamiltonian`.
3. `hartree-approximation` **The Hartree Approximation** (book's): the product ansatz, the one-electron equations, V_nucleus, the mean field and ρ, the note "Three Energies" ((8.3.4), J_{j,k}), ε_j, the ionization-energy box. Introduces `hartree-approximation`, `hartree-equations`, `mean-field-potential`, `electron-charge-density`, `coulomb-integral`, `hartree-orbital-energy`; uses `expectation-value`, `ionization-energy`.
4. `scf` **The Self-Consistant Field (SCF) Approach to the Variational Method** (book's, as printed): the loop, Figure 8.3.1, the quote, the note with (8.3.5) and Figure 8.3.2, the 3d/4s paragraph. Introduces `self-consistent-field-method`, `screening-model-limits`; uses `hartree-equations`; reinforces `effective-nuclear-charge`.

## Figures

- `sim-scf` · Figure 8.3.1 · self-consistent-field-method, hartree-equations, mean-field-potential, electron-charge-density, hartree-orbital-energy · flow by animation and variation by choice: a real Hartree calculation for helium (radial grid, h = 0.01 bohr to 15 bohr, finite differences) run pass by pass, so the reader watches the density and the orbital energy jump and settle, which the flowchart cannot show · arrows: symbolic (the flowchart's) · moving: one transport step per pass (0.7 s), the book's boxes lit in turn, the potential redrawn, the new density drawn over the old, ε plotted per pass; stops when the density changes by less than 0.001 per bohr · choice of first guess (bare nucleus ζ = 2, hydrogen ζ = 1, ζ = 3), untyped slider for the mixing fraction 0.3–1 · headline: the pass, ε and the change in density · three graphs beside the flowchart (density in and out, the other electron's potential V_el, ε against pass) · 2D. Settles on ε = −0.9178 E_h and E = 2ε − J = −2.8613 E_h (the grid costs the last digit of the Hartree–Fock −0.9180 and −2.8617; Table 8.7.1's −5.72 R_H). The flowchart ships as the original.
- `fig-8-3-2` · Figure 8.3.2 · kept as the book prints it (both panels): schematic curves with no energy scale, so there are no numbers to open a slider on; the note cites it. The exploration's hover names on the element circles are not built (they would need the picture redrawn).

## Exercises

None in the book. One AI exercise (config): `ai1` why the Hartree equations need the loop and what it tests (choice).

## Derivations

ε_j as the sum of the three energies: one display, score 1. Stays.

## Corrections

Footnotes: Hartree's and Fock's dates (1928, 1930); "(Equation 8.3.1)" for the electron–electron term; ρ's sum
without the index i; the sum "j ≠ k" over k in (8.3.4); J_{j,k}'s denominator r − r′; ε_J and the same sum in
the ε_j display; (8.3.5)'s ψ_1p(6). Left as printed (typing): "Self-Consistant", "state-off-the-art", "The sum
over runs over", "that from this approach … involve possess".

## Wanted at chapter level

None.
