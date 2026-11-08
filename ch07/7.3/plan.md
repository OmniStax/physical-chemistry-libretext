# Plan: 7.3 Trial Functions Can Be Linear Combinations of Functions That Also Contain Variational Parameters (LibreTexts 13436)

Source: `source.md` (`python3 tools/convert.py 7.3`); draft from `python3 tools/md2html.py 7.3`.
Status: built 2026-11-08 in the Chapter 7 job, without a review stop (config agreed).

One objective, one equation (7.3.1), one table, two inline exercises (7.3.2 keyed), no figure, no `<h2>`.
Licence CC BY-NC-SA 4.0; credit Theodore Zielinski (tag).

## Sub-concepts (page headers)

The page prints no header; two blocks of the agent's (exploration's proposal, humanized):

1. `sums-of-exponentials` **Orbitals as sums of exponentials**: the opening, (7.3.1), basis functions, ζ_j as an effective charge, Slater's rules named; the Sim. Introduces `sum-of-exponentials-orbital`; reinforces `basis-functions`, `linear-variation-function`, `slater-type-orbital`, `effective-nuclear-charge`.
2. `linear-and-nonlinear` **Linear and nonlinear variation**: the nonlinear and linear methods, the cost of recomputing integrals, Table 7.3.1, Hartree–Fock named. Introduces `nonlinear-variational-method`, `slater-orbital-exponents`; reinforces `linear-variational-method`.

## Figures

- `sim-three-exponentials` · Sim (the config's picked extra simulation) · sum-of-exponentials-orbital, effective-nuclear-charge · variation by slider: the reader weights three exponentials (ζ = 1.0, 2.0, 5.0) and sees the sum's local decay rate −d ln φ/d(r/a₀) fall from the weighted mean of the ζ at the nucleus to the smallest ζ far out, the passage's distance-dependent Z_eff, which the text only states · arrows: none · still: a function of r has no time in it · sliders c₁, c₂, c₃ (untyped, 0–2, detents 0 and 1) and r (length, 0–4 a₀) · headline: the single-exponential ζ the sum decays like at r · graph beside: φ₁ₛ and its three terms on top, the decay rate below on the same r · 2D. Opens on Exercise 7.3.1's equal weights. The three terms wear `F.cat` instance colours (they must be told apart) with a legend; the three ζ levels are faint labelled guides in the lower graph.

## Exercises

- Exercise 7.3.1 (unkeyed, sketch): AI solution (values of the three terms and the sum at r = 0, 0.5, 1, 2, 3 a₀ and the decay rate 2.67 → 1.0), `place: end`.
- Exercise 7.3.2 (keyed): the book's answer, with a correction under the card (ζ₁s ≈ Z − 0.3, not electronegativity; the comparison with 7.3.1 the key skips; 1.24 is hydrogen's molecular value).
- AI exercise `a1` (config): linear against nonlinear parameters and which calculation recomputes its integrals (choice).

## Derivations

None qualify (exploration: score 0).

## Corrections

Footnotes: "hydrogenic spin-orbitals" (spin plays no part); (7.3.1)'s r_j and a_o (marker after the display); Table 7.3.1's F ζ₁s 8.56, checked against Clementi and Raimondi (1963), whose single-zeta exponents the 1s column rounds (F 1s 8.6501), so 8.65 (the one-unit step 7.66 → 8.65 → 9.64 agrees; corrected at the chapter pass, which had cited Hehre, Stewart and Pople); Exercise 7.3.2's key (in the card).

## Wanted at chapter level

None.
