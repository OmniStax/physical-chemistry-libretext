# Plan: 5.5 The Harmonic Oscillator and Infrared Spectra (LibreTexts 13418)

Source: `source.md` (`python3 tools/convert.py 5.5`); draft from `python3 tools/md2html.py 5.5`.
Status: built 2026-11-08 in the Chapter 5 job, without a review stop (config agreed).

Two objectives, one figure, twelve numbered equations (5.5.1–5.5.12), one worked
example plus one exercise box printed "Example 5.5.2" (kept as a worked example,
Chapter 3's decision), two tables, three exercise boxes, two notes, one pulled
quote. Licence CC BY-NC-SA 4.0; authors Zielinski et al. (page tags).

## Sub-concepts (page headers)

1. `infrared-spectroscopy-in-chemistry` **Infrared spectroscopy in chemistry** (agent's; the exploration proposed "What Infrared Spectra Show", renamed to name the thing): the opening paragraph. Introduces `infrared-spectroscopy`.
2. `ir-spectroscopy` **IR Spectroscopy** (book's): E_v (5.5.1), (5.5.2), the photon condition, derivation (5.5.3)–(5.5.4), the wavenumber note (5.5.5), ν̃_m (5.5.6), Example 5.5.1, Table 5.5.1, Example 5.5.2. Introduces `vibrational-transition-frequency`; reinforces `wavenumber`.
3. `selection-rules-for-ir-transitions` **Selection Rules for IR Transitions** (book's): selection rules, μ_T (5.5.7), forbidden transition, Figure 5.5.1, μ̂ (5.5.8), the Taylor series (5.5.9), (5.5.10), the dipole moment, (5.5.11), the rules note, derivation (5.5.12), O₂ and N₂, the quote, overtones. Introduces `selection-rule`, `transition-moment-integral`, `forbidden-transition`, `dipole-moment-operator`, `dipole-moment`, `ir-selection-rules`, `overtone-transition`.

## Figures

- `sim-transitions` · Figure 5.5.1 · ir-selection-rules, transition-moment-integral, forbidden-transition · variation by choice: the reader picks two levels and sees the product x ψ_v′ ψ_v whose areas cancel unless the levels are neighbours, and picks N₂ to see every transition die with dμ/dx = 0; the still only labels arrows · arrows: symbolic (the transition arrow v → v′, energy colour when allowed, error colour and crossed when forbidden, the book's blue and red) · still: a selection rule has no time in it · choices v (0–4), v′ (the other four), molecule HCl | N₂ · headline: allowed or forbidden and why · ladder beside the graph of ψ_v, ψ_v′ (dashed) and x ψ_v′ ψ_v with positive area dark and negative light; x in units of Q₀ (5.4), so the integral reads √((v+1)/2) Q₀ · 2D. ψ_v drawn as a shape before 5.6 gives its formula (orchestrator). Opens on HCl's fundamental 0 → 1. Original: Kaya's SVG (CC BY-NC).

Extra simulations (offered, not built): the HCl spectrum with its fundamental and overtones just below their harmonic multiples.

## Exercises

- Exercise 5.5.1 (unkeyed) is set in 5.7, where the Hermite recursion it needs is given (config).
- `e2` Exercise 5.5.2 (keyed, open; correction footnote on the key's stray slash).
- `e3` Exercise 5.5.3 (AI solution): 5772 and 8658 cm⁻¹, with the remark that observed overtones fall a little lower.
- `ai1` (AI): Example 5.5.1 for HF, HBr, HI, CO, NO (most common isotopes): λ = 2.41, 3.78, 4.29, 4.66, 5.36 μm, with ω, ν, T, ΔE in the solution's table.
- The box printed "Example 5.5.2" is a worked example in the text, not an exercise.

## Derivations

- `photon-matches-vibration` (score 3, built as the config lists): *Derivation · the photon matches the vibration*, replacing (5.5.3), the adjacent-states sentence and (5.5.4); results (5.5.3), (5.5.4). The lead-in "Transitions … This can be expressed as" and the closing "identical" sentence are kept.
- `ir-selection-rules` (score 6): *Derivations · the IR selection rules*, standing in place of (5.5.12) after "So we can"; it starts from (5.5.10) as a fact, so (5.5.9)–(5.5.11) and their prose, which introduce the dipole moment, stay printed. Facts: (5.5.10), orthogonality (5.4.4), v′ ≠ v, μ_T ≠ 0, Exercise 5.5.1's result (so the exercise keeps its work). Ends dμ/dx ≠ 0 and Δv = ±1 (5.5.12).
- Examples 5.5.1, 5.5.2: never (substitution).

## Corrections

Footnotes: the note's "causes" (matches); "Equation 5.5.3 can be modified" (5.5.4 over hc); Table 5.5.1's frequency column and wavelength units (far IR to 1000 μm); Example 5.5.2's ω = 5.43 × 10¹⁴ and what follows; ψ′_v for ψ_v′; e for −e in (5.5.8); (5.5.9)'s missing 1/2!; (5.5.10)'s missing conjugate; "since there is no dipole moment" (no change in it); the key's stray slash. Left as printed: "induced about", the repeated sentence, "obversed", "call", "Δ = ±1", "hv_photon", "mulit-electron", Example 5.5.1 (b)'s missing unit.

## Wanted at chapter level

None.
