# Plan: 4.2 Quantum Operators Represent Classical Variables (LibreTexts 13407)

Source: `source.md` (`python3 tools/convert.py 4.2`); draft from `python3 tools/md2html.py 4.2`.
Status: built 2026-11-08 in the Chapter 4 job, without a review stop (config: the chapter in one go).

Two objectives, no figure, six numbered equations (4.2.1–4.2.6), two notes (Postulate II; The
Hamiltonian Operator), Table 4.2.1, no exercise. Licence CC BY-NC-SA 4.0; the book names no author
(`notes` says so).

## Sub-concepts (page headers)

The page has no `<h2>`; two of ours (root rule 3):

1. `observables-and-operators` **An operator for every observable**: the observable, Q(x, p) → Q(x̂, p̂), Postulate II. Introduces `observable`, `operator-postulate` (the bold "Correspondence Principle" marks `operator-postulate`, not 3.3's `correspondence-principle`, per config).
2. `common-operators` **Common operators**: (4.2.1)–(4.2.6), the Hamiltonian note, the other terms of a Hamiltonian, Table 4.2.1. Introduces `potential-energy-operator`.

## Figures

None: the section is a list of operators, and the config proposes no Sim for it. Table 4.2.1 kept as a `div.book-table`, its line breaks kept.

## Exercises

None printed. Two AI exercises (config): `a1` the Hamiltonian of a particle on a spring, V = ½kx² (tests `operator-postulate`, `hamiltonian-operator`, `potential-energy-operator`); `a2` L̂_z from L_z = xp_y − yp_x, checked against the table (tests `operator-postulate`, `angular-momentum-operator`, `momentum-operator`). Both `open`, AI solutions.

## Derivations

None qualify: the operators are stated.

## Corrections

Footnotes: (4.2.4) introduced among the kinetic energy operators "in three dimensions" (it is the momentum operator); Table 4.2.1's d/dx for partial derivatives. Left as printed: "comes from the his formulation", the objective's "exist".

## Wanted at chapter level

None.
