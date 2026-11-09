# Plan: 26.1 Equilibrium Results when Gibbs Energy is Minimized (LibreTexts 14522)

Source: `source.md`; draft from `python3 tools/md2html.py 26.1`. Status: built 2026-11-08 in the Chapter 26 job, without a review stop (config agreed). Licence CC BY-NC-SA 4.0; no credits printed. No objectives, no summary, no numbered displays.

## Sub-concepts (page headers)

1. `opening` **Where a reaction ends** (agent's, config): solution vs gas reactions, kinetics vs equilibrium. Introduces nothing.
2. `extent-of-reaction` **Extent of reaction** (book's): introduces `extent-of-reaction`.
3. `measuring` **Measuring ξ** (book's): introduces `measuring-extent`.
4. `thermodynamic-potentials` **Thermodynamic Potentials** (book's): dG = Σμdn, the derivation `reaction-gibbs-slope`, the kept image. Introduces `reaction-gibbs-energy`, `gibbs-minimum-equilibrium`.
5. `gas-reactions` **Gas Reactions** (book's): μ of an ideal gas, the derivation `reaction-gibbs-quotient`, Q and Q_P. Introduces `reaction-gibbs-quotient`, `reaction-quotient`, `standard-reaction-gibbs-energy`.

## Figures

- `fig-gibbs-energy` · unnumbered image 411105 · kept as the book prints it (kind `figure`, eyebrow "Figure"): the first sketch of G against ξ; its interactive form is 26.4's fold. Its "Slope = dG/dξ = μ" is Δ_rG: correction `c-slope` (marker after the caption, since a footnote's `figure` field needs a figure with an original caption); the alt rewritten true.

Extra simulations: none.

## Exercises

`a1` (AI exercise, config): extent for N₂ + 3H₂ → 2NH₃ from 1.00/3.00 mol with 0.40 mol NH₃ formed: ξ = 0.20, n(N₂) = 0.80, n(H₂) = 2.40 mol (computed). Tests `extent-of-reaction`.

## Derivations

- `reaction-gibbs-slope` (printed, lines with words): dG = Σμ_i dn_i (22.5) with dn_i = ∓v_i dξ → (∂G/∂ξ)_{T,P} = −Σv_rμ_r + Σv_pμ_p = Δ_rG. Replaces the displays from dG = [ … ]dξ to (∂G/∂ξ) = Δ_rG and the dn list; note corrects dn_B = −v_A dξ to −v_B dξ.
- `reaction-gibbs-quotient` (printed): starts from the slope result (drv), μ_i = μ_i° + RT ln(P_i/P_i°) (22.7) → Δ_rG = Δ_rG° + RT ln Q. Replaces the three displays after "We can then split up the Δ_rG expression in two parts". The config named one derivation for 26.1; it is two records because the book's chain spans two blocks.

## Footnotes

`c-slope` (the image's slope label). "the react ion" and "thermodynamics.." kept as printed.

## Wanted at chapter level

None.
