# Plan: 22.2 Gibbs Energy Determines the Direction of Spontaneity at Constant Pressure and Temperature (LibreTexts 14489)

Source: `source.md`; draft from `tools/md2html.py 22.2` (deleted). Built 2026-11-08 in the Chapter 22 job.

No objectives, no numbered equations, one unnumbered example (NH₃ + HCl, id `ex-nh4cl`), two notes kept as printed, a closing "## Summary" (table, Note list, last sentence) moved to `summary_html` with the book's macros.

## Sub-concepts (page headers)

1. `gibbs-energy` **Gibbs energy at constant pressure** (ours): G's definition, dG ≤ 0, ΔG = ΔH − TΔS ≤ 0, coupling, the emphasis note on equilibrium. Introduces `gibbs-energy`, `gibbs-criterion`, `coupled-processes`.
2. `direction-of-the-spontaneous-change` **Direction of the spontaneous change** (book's): the example; `sim-gibbs-sign`. Introduces `spontaneity-temperature`.
3. `meaning-of-the-term` **Meaning of the ΔG term** (book's): the non-PV-work derivation and the Note. Introduces `gibbs-maximum-non-pv-work`.
4. `natural-variables-of-g` **Natural variables of G** (book's). Introduces `gibbs-fundamental-equation`.

## Figures

- `sim-gibbs-sign` · Sim · gibbs-criterion, spontaneity-temperature · variation by slider: the reader drags T along the book's NH₃ + HCl line and sees ΔG cross zero at T = ΔH/ΔS = 618 K, and flipping the signs of ΔH and ΔS gives the other three cases, which the book only states in words · arrows: none · still: ΔG(T) has no time in it · sliders T (0–1000 K, 298 K, dashed special at ΔH/ΔS when it lies in range), ΔH (−300 to 300 kJ, −176.2, detent 0), ΔS (−0.5 to 0.5 kJ/K, −0.285, detent 0) · headline: T, ΔG and which direction is spontaneous · graph alone, y fixed at ±300 kJ (the extremes clip), the spontaneous region between the line and zero shaded · 2D. Readout: ΔG = ΔH − TΔS with the numbers, and T = ΔH/ΔS when the signs agree. Opens at −91.3 kJ (the book prints −91.21 from rounded inputs; not footnoted, per the exploration).

## Exercises

No book exercise. AI exercise `a1` (config): ΔG at 400 K = −62.2 kJ, and the crossover 618 K; tests `spontaneity-temperature`, `gibbs-criterion`.

## Derivations

- `gibbs-criterion`, hidden (score 5): **built** after the paragraph that ends on ΔG ≤ 0; the book's two displays stay printed. Facts: Clausius (20.4), first law (19.1), δw = −PdV (19.2), G = U + PV − TS, constant T and P.
- `gibbs-non-pv-work`, printed: **built**, replacing the displays and the connecting words; its first node's `note` corrects the book's −PdV.
- G's definition align and the natural-variables align stay as printed.

## Corrections

The −PdV slip, as the derivation's node note (the line lives in the derivation). "is as equilibrium", "does not occur spontaneous", "0<sup>o</sup>C" kept as printed.

## Wanted at chapter level

- variables row: `{"sym": "q", "section": "22.2", "concept": "heat", "meaning": "the heat exchanged, written δq for a small amount"}`.
- variables rows for the summary's other work: `{"sym": "x", "section": "22.2", "meaning": "the generalized force of a kind of work other than volume work"}` and `{"sym": "X", "section": "22.2", "meaning": "the generalized displacement of that work"}` (written plain `xdX` meanwhile).
