# Plan: 2.4 The General Solution is a Superposition of Normal Modes (LibreTexts 13378)

Source: `source.md` (`python3 tools/convert.py 2.4`); draft from `python3 tools/md2html.py 2.4`.
Status: built 2026-11-08 in the Chapter 2 job, without a review stop (config: the chapter in one go).

Two objectives, two numbered figures, sixteen numbered equations (2.4.1–2.4.16; 2.4.6 sits in Exercise
2.4.1's key), one inline exercise (keyed), two notes. Licence CC BY-NC-SA 4.0; author Michael Fowler (page tags).

## Sub-concepts (page headers)

The book's three `<h2>` headers are kept; the opening, which has none, gets one of ours.

1. `product-solution` **The product solution** (ours): u = X(x)T(t) and the two ODEs. Introduces nothing; uses `separation-of-variables`.
2. `spatial-dependence` **Spatial Dependence of the Solution: X(x)** (book's): K < 0, K = −p² (2.4.1) kept as text, then the derivation to X = D sin(nπx/L); the quantum number; Figure 2.4.1. Introduces `string-spatial-solutions`, `quantum-number`.
3. `time-dependence` **Time Dependence of the Solution: T(t)** (book's): the derivation of T(t) and ω_n. Introduces `string-temporal-solutions`.
4. `superposition` **The Principle of Superposition** (book's): u_n (derivation), the linearity note (derivation), Figure 2.4.2, the definition box, the sum over modes (2.4.14–2.4.15), normal modes, fundamental and overtones, ν_n (2.4.16), the Sim. Introduces `linear-differential-equation`, `principle-of-superposition`, `normal-mode`, `normal-mode-expansion`, `fundamental-and-overtones`, `normal-mode-frequency`.

## Figures

- `sim-modes` · Figure 2.4.1 · string-spatial-solutions, quantum-number, normal-mode-frequency, fundamental-and-overtones · flow by animation and variation by slider: the seven modes swing side by side, mode n n times per swing of the fundamental, so "more nodes, faster swing" is seen; the still SVG shows only the two extremes · arrows: none · moving: each mode swings at ω_n, drawn 400 times slower than the string (readout note says so), loop a whole number of fundamental periods · choice n 1–7 (opens on 3), sliders v 100–300 m/s (velocity), L 0.40–1.00 m (length); the book prints no numbers, so the defaults are 200 m/s and 0.50 m · headline: mode n's node count and swing ratio · graph alone: seven strips on one x axis drawn to the string's length, the modes counted as the ticks of a "mode n" axis (seven entity labels would be too many), the picked one in the displacement colour with its nodes dotted, the book's red and blue extremes kept as faint outlines · 2D.
- `sim-pulses` · Figure 2.4.2 · principle-of-superposition, traveling-wave · flow by animation: two pulses run through each other and the string is their sum at every instant · arrows: kinematic (each pulse's travel, riding with it) · moving: pulse 1 right, pulse 2 left, meeting at 2.0 m at 2.5 s · choice pulse 2 same side / opposite side, slider A₂ 0.5–2.0 cm (displacement), detent at A₁ = 1.0 cm; opens on the book's case, equal pulses on one side; the book's wave packets are simplified to bumps so cancelling reads at once · headline: the overlap's height, added or cancelled · graph alone, pulses dashed in referent colours, the string solid, a probe at the meeting point, a three-line legend · 2D. Referents `pulse-1`, `pulse-2`.
- `sim-mode-sum` · Sim (the general solution, 2.4.14–2.4.15, with H_n = 0) · normal-mode-expansion, normal-mode, principle-of-superposition · flow by animation: the string's shape is the sum of three modes each at its own frequency, and comes back only when the slowest has · arrows: none · moving: one loop is one period T₁ of the fundamental · sliders G₁, G₂, G₃ −3–3 mm (displacement), defaults 3, 1.5, 1 · headline: t in units of T₁ and whether the string is back in its starting shape · graph above (the string, its starting shape dashed), the three modes as small strips beneath in `F.cat` colours · 2D.

The originals: 2.4.1 (CC BY-NC, Kaya) and 2.4.2 (ophysics.com, non-profit use, as the brief decides) are kept in `originals` with their captions.

## Exercises

Exercise 2.3.1 (keyed, printed in 2.3, `source_section: "2.3"`, held here because it adds two waves; correction on its key), Exercise 2.4.1 (keyed; two corrections on its key), and two AI exercises with AI solutions: the first three frequencies of a 0.65 m string at 410 m/s (315.4, 630.8, 946.2 Hz), and the nodes of mode 3 and the return time of a sum of modes 1 and 3 (0.20 m, 0.40 m, 5.0 ms). All kind `exercise`, at the end.

## Derivations

- `string-spatial` (2.4.2, 2.4.4, 2.4.5, 2.4.7, 2.4.9, 2.4.10): printed as equations with words between; score 7. Replaces the run from "and Equation 2.4.4b can be" to Equation 2.4.10; Equation 2.4.1 stays in the text before it, as the line the paragraph ends on. The book's slips in the words it replaces (its citations of 2.4.4b, 2.4.5, 2.4.8) are followed correctly.
- `string-temporal` (2.4.11, 2.4.12): printed as equations; replaces the T(t) displays and the words between. The book's chain breaks at the header, so the config's one "normal modes" derivation is three graphs, as 1.8's Bohr derivation is two.
- `normal-mode` (2.4.13): joins X and T; replaces the u = XT display, the G, H sentence and 2.4.13.
- `sum-of-solutions` (the linearity note): a printed proof, one line; replaces the note's display.

## Corrections

"√K terms in Equation 2.4.5" (means 2.4.3); "Equation 2.4.4a/b" (2.2.7, 2.2.8); "the original ansatz (Equation 2.4.1)" (2.2.3); "frequencies nπ/L" (the spatial constant; ω_n = nπv/L); Exercise 2.3.1's key (sin(c₁t) for sin(c₂t), ψ₋'s nodes); Exercise 2.4.1's key (e^{√x x}, √(kx); its citations).

## Wanted at chapter level

- variables row: `{"sym": "G_n", "type": "displacement", "meaning": "the amplitude of the cosine part of the nth normal mode", "unit": "m", "section": "2.4"}`
- symbols row: `{"id": "G_n", "latex": "G_n", "macro": "\\kGn"}` (then the readouts and caption of `sim-mode-sum` can write `\kGn`)
- variables row: `{"sym": "u_n", "type": "displacement", ...}`: the existing 2.4 `u_n` row has no type; it is a displacement like `u`.
