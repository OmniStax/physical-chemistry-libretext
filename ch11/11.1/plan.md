# Plan: 11.1 Overview of Quantum Calculations (LibreTexts 165359)

Source: `source.md` (`python3 tools/convert.py 11.1`); draft from `python3 tools/md2html.py 11.1` (deleted once built).
Status: built 2026-11-08 in the Chapter 11 job, without a review stop (config: the chapter in one go).

No objectives, no figures, seven numbered displays (11.1.1–11.1.7) of sixteen, one worked example (11.1.1, worked in
its text), one note. Theodore Zielinski, CC BY-NC-SA 4.0. The first half repeats 8.5 and 8.6 (config: built there,
cited here). A zero-width space before "A linear combination" is dropped.

## Sub-concepts (page headers)

1. `multielectron-electronic-wavefunctions` **Multielectron Electronic Wavefunctions** (book's): the permutation
   argument (11.1.1)–(11.1.2), the double permutation (linked to 8.5's `exchange-phase` derivation, `xref` on the
   book's words "the double permutation"), the helium product (11.1.3)–(11.1.4) and its antisymmetric combination
   (linked to 8.6's `opening`), the H₂ determinant (the word "determinant" links 8.6's `sim-determinant`), χ, the
   N-electron determinant (11.1.5). Introduces nothing; reinforces `exchange-phase`,
   `two-electron-antisymmetric-combination`, `slater-determinant`, `spin-orbital`.
2. `hartree-fock-limit` **The Hartree–Fock limit** (ours, the exploration's proposal in sentence case): from "In a
   modern *ab initio*…": (11.1.6), (11.1.7) and its bra-ket form ("as was described previously" links 7.2's `secular`),
   the limit, the note "Hartree-Fock Calculations", Example 11.1.1. Introduces `ab-initio-calculation`,
   `mo-basis-expansion`, `hartree-fock-limit`, `restricted-hartree-fock`, `carbon-monoxide-orbitals`.

## Figures

None (exploration: the page prints none, and its repeated half has its figures in 8.5 and 8.6). Extra simulations:
none (config).

## Exercises

None printed. One AI exercise (config): `a1`, multi, numeric: CH₃'s α electrons (5), spatial orbitals in an
unrestricted determinant (9) and a restricted one (5), and which of CO's occupied orbitals, counted from the lowest,
holds the electrons donated to iron (7, the 5σ). Tests `restricted-hartree-fock`, `carbon-monoxide-orbitals`.

## Derivations

(11.1.1)–(11.1.2) and the helium combination: cited, not built (8.5's `exchange-phase`, 8.6); (11.1.6)–(11.1.7):
a statement, the working is 7.2's `secular`. None built.

## Corrections

Footnotes as `exploration.md` lists: r_l; ψ(r₁, r₂) for the exchanged function; the unnumbered relation's
arguments; (11.1.2)'s stray conjugate; "elections"; "Equation 8.6.4"; the Det shorthand (spins twice, "1s" for σ₁ₛ);
"multe-electrom"; (11.1.5)'s second column; (11.1.6)'s swapped letters; "The the … by using"; the bra-ket
denominator; Example 11.1.1's "ls", 1s–4s for 1σ–4σ, "the plane of the molecule", "1π … 2π", 2_{sC}/2_{pC},
C_kj, and "five lowest" (seven). Markers after a display stand at the end of the next sentence (10.5's precedent);
(11.1.5)'s note stands before it, after "is then".

## Wanted at chapter level

None.
