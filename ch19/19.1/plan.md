# Plan: 19.1 Overview of Classical Thermodynamics (LibreTexts 47709)

Source: `source.md`; draft from `python3 tools/md2html.py 19.1`. Built 2026-11-09 in the Chapter 19 job (config agreed, no review stop).
Author tag `flemingp` (Patrick Fleming); CC BY-NC-SA 4.0; Figure 19.1.1 CC BY-SA 3.0 with its credit.

## Sub-concepts (page headers)

1. `first-law` **Joule's paddles and the first law** (agent's; the opening has no header): Joule, Figure 19.1.1, the first law, (19.1.1). Introduces `first-law-of-thermodynamics`, `internal-energy-change`, `state-function`, `heat`, `thermodynamic-work`.
2. `heat` **Heat** (book's): endo/exothermic, heat capacity, Example 19.1.1, the partial-derivative note with its two routes. Introduces `endothermic-and-exothermic`, `heat-capacity`, `partial-derivative`, `total-differential`, `pressure-is-a-state-function`.
3. `work` **Work** (book's): Table 3.1.1 (label kept), Example 19.1.2. Introduces `kinds-of-work`.

## Figures

- `fig-19-1-1` · Figure 19.1.1 · photo, kept (both images): the text points at Joule's apparatus; caption and CC BY-SA 3.0 credit as printed.
- `sim-pressure-surface` · Sim (replaces the note's unnumbered surface image, kept as original) · pressure-is-a-state-function, total-differential · depth and variation: the surface p = RT/V over 1–3 L/mol and 200–400 K with the note's two routes on it; the reader sees one route fall and the other climb, yet both end at one height · arrows: none · still: the routes are states, not times · choice route (isothermal first / isochoric first); sliders V₂ (molar-volume, 1–3 L/mol, default 3.0) and T₂ (temperature, 200–400 K, default 400), start fixed at the book's 1.0 L/mol, 200 K, so it opens on −5.47 atm · headline: the pressure after each leg and Δp · graph is the scene · 3D mathematical, free orbit bounded above the V–T floor (pitch 0.12 to π/2; nothing to see from beneath), no buttons; flat fallback by `F.space3d`. Eyebrow "Sim" (unnumbered, root rule 14 as changed 2026-11-09).

## Exercises

`ai1` (AI, compute): heat to warm 250 g of water 20.0 → 80.0 °C, 62.8 kJ; tests `heat-capacity`, `heat`.

## Derivations

- `pressure-differential` · Derivation · the total differential of the pressure · printed block with words: replaces "The partial derivatives of p…" through the substituted dp; four nodes, results (19.1.2), (19.1.3), (19.1.4) and the substituted form. Facts: p = RT/V (16.1), df = Σ(∂f/∂x_i)dx_i (the note, with its dx_i), p a function of V and T.
- The two-route Δp: substitution, stays (footnoted). Examples 19.1.1, 19.1.2: substitution, stay.

## Corrections

`c-w-sign`, `c-heat-capacity`, `c-df` (also the limit's Δ_i), `c-route-one`, `c-example-work` (−1135 J = −1.13 kJ). As printed: "it's ability", "soundings", "form or work", "400,\ K", "p_exp" and "am" (named in c-example-work).

## Wanted at chapter level

None.
