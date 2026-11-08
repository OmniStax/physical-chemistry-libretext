# Plan: 3.8 The Uncertainty Principle - Estimating Uncertainties from Wavefunctions (LibreTexts 13399)

Source: `source.md`; draft from `python3 tools/md2html.py 3.8` (deleted once built).
Status: built 2026-11-08 in the Chapter 3 job, without a review stop.

One objective, no figures, nine numbered equations (3.8.1–3.8.9), one worked example, one exercise (unkeyed), one note. Licence CC BY-NC-SA 4.0; authors Hanson, Harvey, Sweeney and Zielinski.

## Sub-concepts (page headers)

The book prints no header; two of ours, as `exploration.md` proposed.

1. `uncertainties-from-expectation-values` **Uncertainties from expectation values**: ΔA (3.8.1), Δx, Δp (3.8.2–3.8.3), the four expectation values (3.8.4–3.8.7), the note. Introduces `quantum-uncertainty`; uses `quantum-expectation-value`, `momentum-operator`, `stationary-state`.
2. `the-uncertainty-principle` **The uncertainty principle**: 3.8.8, Example 3.8.1 (derivation), the closing paragraph. Reinforces `heisenberg-uncertainty-principle`; uses `quantum-uncertainty`.

## Figures

None. The config leaves the extra "uncertainty from a wavefunction" Sim unbuilt.

## Exercises

Exercise 3.8.1 (unkeyed; AI solution): ΔpΔx = ħ√(π²/12 − 1/2) ≈ 0.568ħ for the box's ground state, checked by computation; `number`, unit ħ, 1 % tolerance. No AI exercises (config).

## Derivations

- `example-3-8-1` · *Example 3.8.1 ·* the uncertainties of a Gaussian wavefunction: block, score 4 (two Gaussian integrals, the odd-function rule, one join). Replaces the solution's displays and the words between ("Let's calculate…", "since the integrand is an odd function"); the closing paragraph stays. Inserted lines: the even-function doubling and the table integrals for ⟨x²⟩, the derivative for ⟨p⟩ and ⟨p²⟩. The book's two slips (2a(ax² − 1) for 2a(2ax² − 1); −4ħ²a² for −8ħ²a²) are followed correctly, with the node's `note`.

## Corrections

Only the two derivation notes. "Section 4.6" is right; "coresponding", "a particles", "Heisenburg uncertainly" are left as printed.

## Wanted at chapter level

None. Symbols with no 3.8 variables row (p, x̂, Â, V, Ĥ, E) are written without `\k` macros in the text.
