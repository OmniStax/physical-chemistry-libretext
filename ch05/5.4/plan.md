# Plan: 5.4 The Harmonic Oscillator Energy Levels (LibreTexts 13419)

Source: `source.md` (`python3 tools/convert.py 5.4`); draft from `python3 tools/md2html.py 5.4`.
Status: built 2026-11-08 in the Chapter 5 job, without a review stop (config agreed).

No objectives, no `<h2>`, one figure, six numbered equations (5.4.1–5.4.6),
one exercise box (keyed, held for 5.6), one pulled quote. Licence CC BY-NC-SA 4.0;
authors Zielinski et al. (page tags).

## Sub-concepts (page headers)

The page prints no header; four blocks of the agent's (root rule 3):

1. `quantized-energies` **Quantized energies**: the classical oscillator, Figure 5.4.1, E_v (5.4.1), P (5.4.2), ⟨Q⟩ = 0, zero-point motion. Introduces `oscillator-zero-averages`; reinforces `oscillator-energy-levels`, `zero-point-energy`.
2. `spread-of-the-displacement` **The spread of the displacement**: the rms deviation and momentum. Introduces `root-mean-square-displacement`.
3. `orthonormal-set` **An orthonormal set**: (5.4.3), (5.4.4). Introduces `oscillator-orthonormality`.
4. `classical-limit` **The classical limit**: the forbidden region, the zero-point energy, Q₀ (5.4.5), the pulled quote, ω (5.4.6). Introduces `classically-forbidden-region`, `oscillator-zero-point-energy`, `classical-displacement-limit`.

The exploration proposed three blocks; the orthonormality paragraphs are a separate idea from the rms spread, so they are a block of their own.

## Figures

- `sim-ladder` · Figure 5.4.1 · oscillator-energy-levels, oscillator-zero-point-energy, classical-displacement-limit · variation by slider: the reader changes k and μ and sees the rungs re-space while staying even, and the bottom rung stay ħω/2 off the floor; the still shows one unnamed case · arrows: none · still: an energy level has no time in it · sliders k 100–2000 N/m (force-constant, detents HCl 481, H₂ 575), μ 0.5–20 amu (mass, detents H₂ 0.504, HCl 0.980, D₂ 1.007) · headline: ħω in numbers, and the lowest rung ħω/2 above the floor · graph alone: parabola, rungs between their turning points, the ±Q₀ drops, brackets ħω/2 and ħω; rung labels v = … only while rungs are 24 px apart (hover names always) · 2D. Axes fixed, Q ±60 pm, E 0–40 × 10⁻²⁰ J. Opens on HCl (k = 481 N/m, Example 5.5.2's number; μ = 0.980 amu, 5.2). Original: Kaya's SVG (CC BY-NC).

Extra simulations: none.

## Exercises

- Exercise 5.4.1 (keyed) is held for 5.6, which draws ψ_v and introduces the correspondence principle (config).
- `ai1` (AI): E₀ and Q₀ for H₂ and D₂ with k = 575 N/m: 4.37 × 10⁻²⁰ J, 12.3 pm; 3.09 × 10⁻²⁰ J, 10.4 pm.
- `ai2` (AI): the v = 1 classical limit is √3 Q₀ (1.732).

## Derivations

None qualify: (5.4.5) is one move from the zero-point energy and ½kQ².

## Corrections

One footnote: "given by Equation 5.4.1 which is ω = √(k/μ)" (that is 5.4.6). Left as printed: "(see also root-mean-square displacement)" (stray link text), the key's "most it's time" (now in 5.6).

## Wanted at chapter level

None.
