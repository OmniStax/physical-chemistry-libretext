# Plan: 26.11 Thermodynamic Equilibrium Constants Are Expressed in Terms of Activities (LibreTexts 14532)

Source: `source.md`; draft from `python3 tools/md2html.py 26.11`. Status: built 2026-11-09 in the Chapter 26 job. CC BY-NC-SA 4.0. The book sets its formulas as sub/sup prose with a struck "o" for the standard mark; the key lines are set as unnumbered displays (exploration), symbols through the macros.

## Sub-concepts (page headers)

1. `k-in-activities` **Equilibrium constants in activities** (config, sentence case): μ in P and in a, K in activities, a = γc/c°, K = K_γK_c/K_c°. Introduces `activity-equilibrium-constant`.
2. `activities-of-pure-condensed-phases` **activities of pure condensed phases** (book's, lower case as printed): `drv-condensed-activity-pressure` replaces the printed lines from the standard state to ln a′ = (P′ − 1)V̄/RT; the one-cell "S&McQ 1083" table and "Example 26-12" as printed; T_equilibrium lines as printed. Introduces `condensed-activity-pressure`, `condensed-equilibrium-temperature`.

## Figures

None.

## Exercises

`a1` (AI, config): liquid water at 100 bar, V̄ = 18.07 cm³/mol (from memory, said in `exercise_notes`): a = 1.075.

## Derivations

- `condensed-activity-pressure` · Derivation · the activity of a pure solid or liquid under pressure · printed · facts: the standard state, μ = μ° + RT ln a (24.7), (∂μ/∂P)_T = V̄ (23.3), V̄ small and constant; results a = 1, dμ = RT d ln a, ln a′ = (P′ − 1)V̄/RT.
- T_equilibrium = Δ_rH°/Δ_rS°: two moves, stays printed.

## Corrections

None. The book's graphite activity, 1.01 at 100 bar, comes to 1.02 with a remembered density of 2.26 g/cm³; left as printed (config), the density unconfirmed.

## Wanted at chapter level

None.
