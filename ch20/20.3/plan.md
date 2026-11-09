# Plan: 20.3 Unlike heat, Entropy is a State Function (LibreTexts 13717)

Source: `source.md`; draft from `python3 tools/md2html.py 20.3`. Built 2026-11-08. One numbered figure (20.3.1), one numbered equation (20.3.1), no credits.

## Sub-concepts (page headers)

1. `circular-integrals` **Circular integrals** (book's): ∮dS = ∮dH = ∮dU = 0; the three paths and their heats; Figure 20.3.1. Introduces `cycle-integral-zero`.
2. `entropy-along-two-paths` **Entropy along the two paths** (ours, from "First, consider the combined paths"): ΔS_{B+C} (20.3.1), ΔS_A, entropy is a state function. Introduces `heating-entropy-change`, `isothermal-entropy-change`, `entropy-state-function`.

## Figures

- `sim-entropy-two-paths` · Figure 20.3.1 · isothermal-entropy-change, heating-entropy-change, entropy-state-function · variation by slider: the reader changes the expansion and the isotherm's temperature and sees the two heats move apart while the two entropy bars stay level, which the book's unlabelled PV sketch cannot show · arrows: symbolic (direction heads on the paths) · still: the change of state has no clock · V₂/V₁ 1.2–5 (volume, opening 2), T₁ 200–600 K (temperature, opening 298) · headline: q_rev,A, q_rev,B+C and ΔS · PV plane left (0–60 L, 0–500 kPa fixed), bars right (q 0–9000 J, ΔS 0–15 J/K fixed) · 2D. One mole of a monatomic gas from 10 L (the book prints no numbers). Paths A and B + C in `F.cat(0)`, `F.cat(1)`, labelled A, B, C on the curves; states named by hover.

## Exercises

None printed. One AI exercise (config): `a1`, V tripled at 298.15 K: ΔS_A 9.13 J/K, q_rev,A 2723 J, T₂ 143.3 K, q_rev,C 1931 J; tests `isothermal-entropy-change`, `entropy-state-function`.

## Derivations

- `two-paths` · *Derivation · the entropy change along the two paths* (hidden, score 6: imported 2, the adiabat relation and q_rev,B = 0; run 3; joins 1), after the paragraph that completes it: ΔS_{B+C} = ∫C_v/T dT = C_v ln(T₁/T₂) = nR ln(V₂/V₁) (20.3.1) through the adiabat relation of 19.6 (`drv` 19.6/adiabat-temperature-volume), ΔS_A = q_rev,A/T, and ΔS_A = ΔS_{B+C}. The printed displays stay.

## Corrections

Footnote `qrec`: "q_{rec,A}" (q_rev,A). Left as printed: "(Notice sign in Equation 20.3.1 is positive)". "Section 19-6" links 19.6's adiabat block (19.6 is mid-build; the id `cooling-reversible-adiabat` is taken from its current text).

## Wanted at chapter level

- Anchors for the forms `cycle-integral-s/u/h` (`20.3-circular-integrals`), `isothermal-entropy-change`, `heating-entropy-change` (`20.3-entropy-along-two-paths`).
