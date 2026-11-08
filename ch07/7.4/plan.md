# Plan: 7.4 Perturbation Theory Expresses the Solutions in Terms of Solved Problems (LibreTexts 13437)

Source: `source.md` (`python3 tools/convert.py 7.4`); draft from `python3 tools/md2html.py 7.4`.
Status: built 2026-11-08 in the Chapter 7 job, without a review stop (config agreed).

Two objectives, 28 numbered displays, three figures (two printed "Figure 7.4.1"), examples 7.4.1A, 7.4.1B, 7.4.2,
one inline exercise (7.4.3, keyed), one note, four pulled quotes. Licence CC BY-NC-SA 4.0; credit Delmar Larsen (tag).

## Sub-concepts (page headers)

The book's four `<h2>` are kept, "(λ=1)" and "(λ=2)" as printed with a correction note; its opening divides into two blocks of the agent's:

1. `perturbation-theory` **Solvable and perturbation parts**: perturbation theory, Figure 7.4.1, (7.4.1)–(7.4.4), the pulled quote. Introduces `perturbation-theory`.
2. `power-series` **Power series in λ**: *expand*, λ, (7.4.5), (7.4.6), the derivation `powers-of-lambda` in place of (7.4.7)–(7.4.9), (7.4.10). Introduces `perturbation-expansion`, `order-by-order-equations`.
3. `zero-order-terms` **Zero-Order Terms (λ=0)** (book's): (7.4.11).
4. `first-order-expression-of-energy` **First-Order Expression of Energy (λ=1)** (book's): (7.4.12), the derivation `first-order-energy`, the quote, (7.4.18), Examples 7.4.1A and 7.4.1B (its solution the derivation `example-7-4-1b`). Introduces `first-order-energy-correction`.
5. `first-order-expression-of-wavefunction` **First-Order Expression of Wavefunction (λ=1)** (book's): the derivation `first-order-wavefunction`, (7.4.26), (7.4.27), complete basis set, Figure 7.4.2, the bullets, the quote, Example 7.4.2 (its "Energy" and "Wavefunction" as `<h4>` parts). Introduces `first-order-wavefunction-correction`.
6. `second-order-terms` **Second-Order Terms (λ=2)** (book's): the flowchart (unnumbered), the note. Introduces `perturbation-series-breakdown`.

## Figures

- `sim-box-levels` · Figure 7.4.1 · perturbation-theory, first-order-energy-correction · variation by slider: the reader raises V_o and sees each level shift by its first-order amount beside the exact level (diagonalized in 40 box states), the two agreeing exactly for a constant shift and parting for the half-box step once V_o nears the level spacing; the book's picture has no numbers and no exact column · arrows: symbolic (which level becomes which), drawn as dashed connectors · still: no time in it · choice perturbation (whole box, Example 7.4.1A; left half, Example 7.4.1B; the tilt dropped by the orchestrator), slider V_o (energy, 0–12 h²/8mL², default 2), choice n (1–4) for the |ψ_n⁰|² drawn on its level · headline: level n's first-order and exact energies · box beside the three columns of levels, one energy axis 0–30 · 2D. Original shipped with its caption.
- `sim-oscillator-mixing` · Figure 7.4.2 · first-order-wavefunction-correction · variation by slider: the weights c_{m,0} for m = 1–8 as bars, zero ones hollow, and ψ₀⁰ + Σc_mψ_m⁰ in the perturbed well; the book draws lines to every level and cannot show that only two mix · arrows: none (the book's lines are symbolic and become the bars) · still · choice εx³ (Example 7.4.2) / γx⁴ (Exercise 7.4.3), slider strength (untyped, 0–0.2 in hν α³ᐟ² or hν α², default 0.15) · headline: which m mix in and what happens to the energy · well beside bars · 2D. Readout writes |0⟩ ≈ |0⁰⟩ + Σc_{m,0}|m⁰⟩ with the numbers and E₀ ≈ ½hν + E¹. Original shipped.
- `fig-perturbation-flowchart` · the second printed "Figure 7.4.1" · kept as the book prints it (kind `figure`, eyebrow "Figure", orchestrator's decision), a correction note on its caption; the JPG has a white ground and reads in both themes. Its two citations link to it; "energies (Figure 7.4.1)" links to `sim-box-levels`.

Library: nothing missing. The legend's sample-and-name rows were used; the ctl `fmt` shows the strength with its unit for the chosen perturbation.

## Exercises

- Exercise 7.4.3 (keyed, `open`): the book's answer, its title set in the prompt; corrections in the card (−ħ/2m in the question; the key's x^{2π}, 2^{m+1}, a for α, n⁰ and E_r⁰; the result 3γ/4α² stands).
- AI `a1`: a tilted floor V_o x/L, E_n¹ = V_o/2 (number, 0.5). The config lists it; the orchestrator dropped the tilt from the figure only. The brief counts six AI exercises for the chapter against the config's seven: this one is the candidate to drop if the six is meant.
- AI `a2`: which states εx³ mixes into the ground state (only 1 and 3; choice).

## Derivations

- `powers-of-lambda` (printed as equations with words): *Derivation · the perturbed Schrödinger equation in powers of λ*, replacing (7.4.7)–(7.4.9) and the words between them, after "…Equation 7.4.2 in"; three nodes, results (7.4.7), (7.4.8), (7.4.9). The exploration proposed ending at (7.4.11) and (7.4.12); those two (and the coloured regrouping (7.4.10)) are printed after prose under their own headers, so they stay as printed (rule 29.2), and the "We're now ready to match…" paragraph follows the derivation.
- `first-order-energy` (printed as equations with words): *Derivation · the first-order energy correction*, replacing (7.4.13)–(7.4.17) and their words; results (7.4.13), (7.4.16), (7.4.17); facts (7.4.12), (7.4.14), (7.4.15). Notes: "Equation 7.4.6 can be simplified" (7.4.13) and (7.4.16)'s bracket; the cancellation is by (7.4.14), not orthogonality. (7.4.18) stays printed after its prose.
- `first-order-wavefunction` (printed as equations with words): *Derivation · the first-order wavefunction correction*, replacing (7.4.19)–(7.4.25) with the two bold sub-headers, whose content becomes nodes ("the last term", "the first term", the latter's note correcting "right side" to left); results (7.4.19), (7.4.22), (7.4.24), (7.4.25); completeness from 4.3; ⟨n⁰|n¹⟩ = 0 as a step reason and node note, not a fact (orchestrator). (7.4.26), (7.4.27) stay printed after prose.
- `example-7-4-1b` (score 5): *Example 7.4.1B ·*, replacing its solution's displays; facts (7.4.17) linking `first-order-energy`, ψ_n (3.5.16) linking `3.5/pib-normalization`, the step potential with its zero half, the antiderivative of sin²; note on "a" for L and the missing V = 0.
- Stay as printed: Example 7.4.1A (score 1), Example 7.4.2 (score 3, corrected).

## Corrections

Footnotes: (7.4.5)'s missing i = 0; "Equations 7.4.5, 7.4.5, and 7.4.8"; λ = 1 as "the truncation" (covers the headers); "first order energies (Equation 7.4.12)"; Example 7.4.1B's potential; "see Example 7.4.3"; Example 7.4.2's −ħ/2m, k = 1, 2, 3, and m = 5; the flowchart's duplicate number; Exercise 7.4.3 (two, in the card). In derivation notes: "Equation 7.4.6", (7.4.16)'s bracket, the orthogonality reason, "First term on right side", ⟨n⁰|n¹⟩ = 0, the antiderivative's a, the step's missing zero. Left as printed: H⁰ and H^o for one operator, "Hamilonian", "infiinitely", "pertubtiation", "Hamitonian", "first six"/"original five" (consistent: five excited states).

## Wanted at chapter level

None.
