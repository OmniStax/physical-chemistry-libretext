# Plan: 3.3 The Schrödinger Equation is an Eigenvalue Problem (LibreTexts 13393)

Source: `source.md` (`python3 tools/convert.py 3.3`); draft from `python3 tools/md2html.py 3.3`.
Status: built 2026-11-08 in the Chapter 3 job, without a review stop (config: the chapter in one go).

Four objectives, 22 numbered displays (3.3.1–3.3.22), one note, a pulled quote, one worked example,
one inline exercise (keyed, key corrected). Licence CC BY-NC-SA 4.0; Hanson, Harvey, Sweeney and
Zielinski (page tag).

## Sub-concepts (page headers)

The opening runs to the first header and holds two ideas, so it is two blocks of the agent's:

1. `eigenvalue-problems` **Eigenfunctions and eigenvalues**: Âψ = kψ, every measurable an eigenvalue.
   Introduces `observables-as-eigenvalues`; reinforces `eigenfunction`, `eigenvalue`.
2. `hamiltonian` **The Hamiltonian operator**: the operator of the TISE, both Schrödinger equations in
   operator form, the correspondence note, an operator for every observable. Introduces
   `schrodinger-eigenvalue-problem`, `correspondence-principle`, `eigenstate`.
3. `common-operators` **Common Operators** (book's): momentum, position, kinetic energy, angular
   momentum, Hamiltonian, total energy. Introduces `momentum-operator`, `position-operator`,
   `kinetic-energy-operator`, `angular-momentum-operator`.
4. `eigenstates` **Eigenstate, Eigenvalues, Wavefunctions, Measurables, and Observables** (book's):
   superposition, collapse, Example 3.3.1, the operator bench. Introduces `eigenstate-superposition`,
   `wavefunction-collapse`.

## Figures

The book has none.

- `sim-operator-bench` · Sim (the extra the orchestrator picked) · eigenfunction, eigenvalue,
  momentum-operator, kinetic-energy-operator, position-operator · variation by choice: the reader puts
  an operator to a function and sees Âf beside f, and beneath it the ratio Âf ÷ f, a flat line at the
  eigenvalue exactly when f is an eigenfunction, which the algebra of Example 3.3.1 leaves to be
  imagined · arrows: none · still: no time in the idea; a choice morphs the curves · choices operator
  (p̂ₓ, KÊ, x̂) and function (Example 3.3.1's A sin ax and N e^(−ix/ħ), Exercise 3.3.1's M e^(−bx));
  no sliders, since the constants a and b change no verdict · headline: the operator's result and
  whether it is k times f · two graphs stacked, x 0–π (ħ = m = 1, a = 2, b = 0.5, said in the readout
  note), f in the wavefunction hue and Âf in the operator hue, imaginary parts dashed, legend above
  the top frame listing only the parts present · 2D. Opens on p̂ₓ and N e^(−ix/ħ), Example 3.3.1(b):
  eigenvalue −1 (the corrected value).

## Exercises

- `e1` Exercise 3.3.1 (keyed, open, Apply): Me^(−bx) is an eigenstate of both; the key's kinetic-energy
  eigenvalue b² is corrected to −ħ²b²/2m by a note under the card. Tests `momentum-operator`,
  `kinetic-energy-operator`, `eigenstate`.

No AI exercises (config).

## Derivations

None: Example 3.3.1 applies the operators once each (score 1), kept as printed.

## Corrections

Footnotes: "Both time-dependent and time-independent Schrödinger equations are … eigenvalue equations";
"The right hand side of Equation 3.3.6" (3.3.19); "eigenstates of an operator (φ)"; Example 3.3.1(b)
"p_x = −N" (−1); Exercise 3.3.1's key (b² for −ħ²b²/2m). Objective typos, "(and it more commonly)",
"In addition determining", "can be usually be" left as printed.

## Wanted at chapter level

None.
