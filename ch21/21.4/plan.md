# Plan: 21.4 The Debye Function is Used to Calculate the Heat Capacity at Low Temperatures (LibreTexts 14481)

Source: `source.md`; draft from `python3 tools/md2html.py 21.4` (deleted once built).
Status: built 2026-11-08 in the Chapter 21 job, without a review stop (config: the chapter in one go).

Two numbered displays (21.4.1)–(21.4.2); no figures. Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers, ours)

1. `debye-t3` **Phonons and the T³ law**: the whole page, the Sim after (21.4.1)'s paragraph. Introduces
   `debye-model`, `debye-t3-law`, `metal-low-temperature-heat-capacity`.

## Figures

- `sim-debye-einstein` · Sim (extra, picked by the orchestrator) · debye-t3-law, debye-model, einstein-model-limits ·
  variation by slider: one T/Θ shows on log–log axes the Debye solid on the T³ line four orders of magnitude above
  the Einstein solid at 0.05 Θ, and both meeting Dulong–Petit near Θ · arrows: none · still: no time in it ·
  slider T/Θ 0.01–2 on a log scale, opening at 0.05 · headline: both fractions of 3R at the reader's T · graph
  alone, Debye bold, Einstein lighter, T³ law dashed, a dashed Dulong–Petit line; legend bottom right · 2D. Ticks
  drawn by hand at the decades (no log axes in figlib). C_P and C_V are one for a solid here; the book writes C_P,
  so the figure does. (21.4.2)'s a is not (21.4.1)'s: written plain a (no macro for `a_el`), b plain.

## Exercises

`ai1` (AI, Apply, multi): C_P = aT³ with 0.10 J/(mol K) at 5.0 K gives 0.80 at 10.0 K, and S(10 K) = C_P/3 =
0.267 J/(mol K) (computed).

## Derivations

None (the page states the law).

## Corrections

None as footnotes. As printed: "(form Equation 21.4.1".

## Wanted at chapter level

None.
