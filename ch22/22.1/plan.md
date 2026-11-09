# Plan: 22.1 Helmholtz Energy (LibreTexts 14488)

Source: `source.md`; draft from `tools/md2html.py 22.1` (deleted). Built 2026-11-08 in the Chapter 22 job (config agreed, no review stop).

No objectives, no figures, one labelled equation (22.1.1), one worked example (22.1.1), no exercises in the book. Licence CC BY-NC-SA 4.0; no credits printed.

## Sub-concepts (page headers)

1. `constant-volume-and-temperature` **Constant volume and temperature** (ours; the book has no header for its opening): the Clausius argument at constant V, the definition of A, the criterion; Example 22.1.1. Introduces `helmholtz-energy`, `helmholtz-criterion`, `helmholtz-energy-of-mixing`, `helmholtz-maximum-work`.
2. `natural-variables-of-a` **Natural variables of A** (book's). Introduces `natural-variables`, `helmholtz-fundamental-equation`.

## Figures

None: the book prints none and the exploration proposes no Sim here.

## Exercises

No book exercise. AI exercise `a1` (config): ΔA_molar of an equimolar ideal mixture at 298.15 K, RT ln ½ = −1718 J/mol; tests `helmholtz-energy-of-mixing`, `helmholtz-criterion`.

## Derivations

- `helmholtz-criterion`, printed block (book's displays from dU ≤ TdS to dA ≤ 0): **built**, replacing the displays and the words between them. Facts: Clausius inequality (20.4), first law (19.1), δw = 0 at constant V (inserted line), A ≡ U − TS. Result (22.1.1) keeps its number; the last node ends on dA = dU − TdS ≤ 0. The book's bold "Helmholtz energy, A" now stands in the derivation's fact card; the next paragraph carries the concept span.
- Example 22.1.1 (two moves each) and the natural-variables align (two moves): stay as printed.

## Corrections

None.

## Wanted at chapter level

- variables row: `{"sym": "q", "section": "22.1", "concept": "heat", "meaning": "the heat exchanged, written δq for a small amount"}` (δq is written plain until it lands; then `\kq` can replace `q` in the text and the derivation).
- variables row: `{"sym": "Delta_U", "section": "22.1", "concept": "internal-energy", "meaning": "the change in internal energy of the process"}` (the text writes `\Delta \kU`, which already colours).
