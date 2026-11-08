# Plan: 3.4 Wavefunctions Have a Probabilistic Interpretation (LibreTexts 13394)

Source: `source.md` (`python3 tools/convert.py 3.4`); draft from `python3 tools/md2html.py 3.4`.
Status: built 2026-11-08 in the Chapter 3 job, without a review stop (config: the chapter in one go).

Two objectives, no book figure, four numbered equations (3.4.1–3.4.4), one note, one pulled quote, two
"Example" boxes with no solution (set as exercises). Licence CC BY-NC-SA 4.0; authors Hanson, Harvey,
Sweeney and Zielinski (page tags).

## Sub-concepts (page headers)

The page has no `<h2>`; three of ours (root rule 3), as the exploration proposed:

1. `born-interpretation` **The Born interpretation**: Ψ*Ψ (3.4.1), Born's reading, the pulled quote. Introduces `square-of-the-modulus`, `probability-density`, `born-interpretation`.
2. `probability-in-a-region` **Probability in a region**: (3.4.2), the detections Sim, (3.4.3), the volume elements, (3.4.4). Introduces `position-probability`, `volume-element`.
3. `well-behaved` **Well-behaved wavefunctions**: the note, quantization, the grade-distribution analogy. Introduces `well-behaved-wavefunction`; reinforces `energy-quantization`.

## Figures

- `sim-detections` · Sim (config: the recommended extra, picked by the orchestrator) · born-interpretation, probability-density, position-probability · flow by animation: single detections land one at a time and only their pile-up has the shape of |ψ|², which the still curve of a density cannot show; the region's counted fraction approaches the integral of Equation 3.4.2 · arrows: none · moving: the detections arrive with count N_max (t/T)², N_max = 2000, T = 6 s, from a fixed seed so every time has one state · choice of state ψ₁, ψ₂, ψ₃ (opens on ψ₂, whose node at L/2 stays empty), sliders a and b (length, in units of L, detents at quarters; default the left quarter) · headline: the count so far and where no dot lands · scene above (the walls and the dots on a strip), graph below (the histogram as a density, |ψ|² stroked in the probability-density hue, the region shaded in both), a two-entry legend above the graph · 2D. The states are Chapter 2's string modes, so the Sim leans on nothing 3.5 has not yet derived; the caption calls the system a particle held between two walls.

No photograph or unnumbered image.

## Exercises

- `e1` Example 3.4.1 (no solution here) is word for word the second Exercise 3.6.1, which prints a Solution: one card, keyed by that Solution (`generated_by: source`), with a correction on its dropped conjugate. Tests `square-of-the-modulus`, `probability-density`, `stationary-state`.
- `e2` Example 3.4.2: unkeyed, AI solution (explain). The prompt's missing ψ is corrected. Tests `born-interpretation`, `volume-element`.

No AI exercises (config names none for 3.4).

## Derivations

None qualify: the section states the interpretation and its integrals; nothing is worked.

## Corrections

Footnotes: "the probability amplitude P(x,t)" (it is the density); the 1D label P(x ∈ [a,b]) kept on the volume integrals (3.4.3) and (3.4.4); Example 3.4.2's eψ*(r₀)(r₀)dτ; the card solution's missing conjugate. Left as printed: "should be both finite", "is in the feature", "can be is expanded" (grammar, meaning clear) and the objective's "from a wavefunctions" (objectives are not text). The spherical element's raw θ is set as `\theta`.

## Wanted at chapter level

None.
