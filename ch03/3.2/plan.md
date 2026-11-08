# Plan: 3.2 Linear Operators in Quantum Mechanics (LibreTexts 13392)

Source: `source.md` (`python3 tools/convert.py 3.2`); draft from `python3 tools/md2html.py 3.2`.
Status: built 2026-11-08 in the Chapter 3 job, without a review stop (config: the chapter in one go).

Two objectives, seven numbered displays (3.2.1–3.2.7), one definition box, one worked example, one
inline exercise (keyed), a pulled quote. Licence CC BY-NC-SA 4.0; author S. M. Blinder (page tag).

## Sub-concepts (page headers)

1. `operators` **Operators** (agent's; the opening before the book's first header): the bracket of the
   TISE, Ĥ, Ĥψ = Eψ. Introduces `operator`, `hamiltonian-operator`, `eigenvalue-equation`,
   `eigenfunction`, `eigenvalue`; uses `time-independent-schrodinger-equation`.
2. `fundamental-properties` **Fundamental Properties of Operators** (book's): the seven rules, the
   commutator box. Introduces `operator-algebra`, `commutator`.
3. `linear-operators` **Linear Operators** (book's): conditions A and B, Example 3.2.1. Introduces
   `linear-operator`.
4. `hermitian-operators` **Hermitian Operators** (book's): the box Hamiltonian, the derivation, the
   definition, the postulate and its pulled quote. Introduces `hermitian-operator`,
   `hamiltonian-is-hermitian`, `hermitian-observables`.

## Figures

None in the book, none built: the section is operator algebra with no quantity that varies or moves
(rule 24.3), and 3.3's operator bench shows operators acting on functions.

## Exercises

- `e1` Exercise 3.2.1 (keyed, open, Apply): the square root is not linear. Tests `linear-operator`.
- `a1` AI (choice, Apply): [x̂, d/dx]f = −f. Tests `commutator`, `operator-algebra`.
- `a2` AI (choice, Analyze): d/dx is not Hermitian on functions that vanish at the walls; −iħ d/dx is.
  Tests `hermitian-operator`.

## Derivations

- `hamiltonian-hermitian` (printed block, score 3: integration by parts twice, one skipped line):
  replaces "Consider the integral" display through "It follows therefore that" and its display; five
  nodes, (3.2.7) kept as its number; the second integration by parts, printed as a right-hand side
  only, gets its full line and a note. The box Hamiltonian display stays in the text as the fact.
- Example 3.2.1, Exercise 3.2.1: kept as printed (a check of a definition, score 1).

## Corrections

Footnotes: "(in 1D)" over a 3D equation; "both conditions in Equation 3.2.6" (3.2.5 and 3.2.6);
"specific times of matrices" (types). Derivation note: the second integration's printed line.
Objective typo and "To confirm is an operator", "The most operators" left as printed.

## Wanted at chapter level

None.
