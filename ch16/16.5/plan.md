# Plan: 16.5 The Second Virial Coefficient (LibreTexts 13660)

Source: `source.md`; draft from `python3 tools/md2html.py 16.5` (deleted after the build).
Status: built 2026-11-08 in the Chapter 16 job, without a review stop.

No numbered equations or figures, no exercises in the book. SklogWiki and Franzen; CC BY 4.0 at the source, shared BY-NC-SA.

## Sub-concepts (page headers)

1. `virial-coefficients` **Virial coefficients** (agent's, for the two-sentence opening).
2. `introduction` **Introduction**: the virial equation, B₂ as an integral, the Mayer f-function. Introduces `virial-equation-of-state`, `second-virial-coefficient`, `intermolecular-pair-potential`, `mayer-f-function`.
3. `calculation-of-virial-coefficients` **Calculation of virial coefficients**: configuration integrals, B₂ for monatomic particles, the hard sphere. Introduces `configuration-integral`.
4. `isihara-hadwiger-formula` **Isihara-Hadwiger Formula**. Introduces `isihara-hadwiger-formula`.
5. `hard-spheres` **Hard spheres**. Introduces `hard-sphere-b2`.
6. `van-der-waals-equation-of-state` **Van der Waals equation of state**: B₂ = b − a/RT and the Sim. Introduces `vdw-second-virial`.
7. `excluded-volume` **Excluded volume**.
8. `references`, `related-reading`: the book's numbered references (cited in the text as [1], [2], [9]) and its reading list, kept as closing blocks (9.14 precedent).

## Figures

- `sim-second-virial` · Sim · second-virial-coefficient, vdw-second-virial, hard-sphere-b2 · variation by slider and choice: B₂ = b − a/RT against T for a gas of Table 16.2.1, the hard-sphere value b dashed above it, so the reader sees attraction pull B₂ below b and through zero, which the one printed formula does not show · arrows: none · still: no time in it · choice gas (H₂O, N₂, CH₄, C₂H₆; opens on N₂); slider T 100–2500 K (temperature), opening at 300 K, special where B₂ = 0 (T = a/Rb, named only "B₂ = 0") · headline: B₂ at T and which of excluded volume and attraction wins · graph alone, the other three gases faint · 2D.

## Exercises

Two AI exercises (config): hard-sphere B₂ per mole for σ = 3.40 Å (49.6 cm³/mol); B₂ of N₂ at 300 K (−18.2 cm³/mol) and its sign. Both checked by computation.

## Derivations

Hard-sphere B₂: a printed two-line block, kept (12.8.1 precedent). B₂ from Z₂: the book never states the link; not built.

## Corrections

`c-rho` ("P/rkT"); `c-diameter` ("an infinite repulsive wall at a particle radius σ").

## Wanted at chapter level

None.
