# Plan: 17.8 Partition Functions can be Decomposed into Partition Functions of Each Degree of Freedom (LibreTexts 57665)

Source: `source.md`; draft from `python3 tools/md2html.py 17.8` (deleted after the build).
Status: built 2026-11-08 in the Chapter 17 job, without a review stop. LaRue; CC BY 4.0 at the source.

Four numbered equations (17.8.1)–(17.8.4), no figure, no exercises in the book.

## Sub-concepts (page headers)

1. `molecule-energy` **The energy of one molecule** (agent's): (17.8.1)–(17.8.4), ⟨ε⟩ and π_i. Introduces `average-molecular-energy`, `independent-molecule-energy`.
2. `degrees-of-freedom` **One factor per degree of freedom** (agent's): the energy and q by degree of freedom, q_vib, ⟨ε_vib⟩. Introduces `molecular-energy-separation`, `partition-function-factorization`, `degree-of-freedom-partition-function`.

## Figures

None (the exploration dropped a four-ladder figure; 17.2's fold sets the spacings side by side).

## Exercises

Two AI exercises (config): q from given factors (7.56 × 10³¹); ⟨ε_vib⟩ = hν/(e^{βhν} − 1) for a 12 kJ/mol ladder at 300 K, 0.0985 kJ/mol (checked).

## Derivations

- `independent-energy` · "Derivation · the average energy of independent molecules": the printed split (17.8.3) replaced; result (17.8.3). (17.8.4) stays printed (it states ⟨E⟩ = N⟨ε⟩ as the definition of ⟨ε⟩, not a derived line), so the record has one result, not the two the exploration named. (17.8.2) links to 17.3's derivation as `17.3/average-energy` (warning until 17.3 is built; the orchestrator should check the id).
- q = q_trans q_rot q_vib q_elec stays (under four moves).

## Corrections

`c-compare` ("(17.8.2) with (17.8.2)": (17.8.3) with (17.8.4)); `c-pi` (the π_i display's left side); `c-t` (∂/∂t is ∂/∂T). "follows the same is related to" as printed.

## Wanted at chapter level

None.
