# Plan: 18.9 Molar Heat Capacities (LibreTexts 13699)

Source: `source.md` (`python3 tools/convert.py 18.9`); draft from `python3 tools/md2html.py 18.9` (deleted once built).
Status: built 2026-11-08 in the Chapter 18 job, without a review stop (config: the chapter in one go).

Three-item objectives box (Goal, Prerequisites, Resources) to `objectives` as printed. Seven numbered displays
(18.9.1)–(18.9.7). No figures, no examples. Credit: Tandy Grubbs (tag `authorname:tgrubbs`). Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

1. `einstein-solid-dulong-petit` **Einstein's solid and the law of Dulong and Petit** (ours, the exploration's,
   sentence case): (18.9.1)–(18.9.7). Introduces `specific-heat-capacity`, `molar-from-specific-heat`,
   `dulong-petit-atomic-weights`. Reinforces `heat-capacity-contributions`, `vibrational-heat-capacity`,
   `vibrational-temperature`, `einstein-solid`, `einstein-heat-capacity`, `einstein-high-temperature-limit`,
   `dulong-petit-law`.
2. `experimental-data` **Experimental Data** (book's). Introduces `solid-cp-equals-cv`.

The book's "Exercises" list goes to the Exercises document.

## Figures

None. A Dulong–Petit data plot was judged and dropped in the exploration (it would answer the lab exercise and needs
CRC data).

## Exercises

- `cq1`–`cq5`: the book's Exercises 1–5, kind `exercise`, unkeyed, AI solutions (config). 1, 2 and 4 work the method
  on approximate specific heats recalled from memory (Li, Na, Al, Fe, Cu, Ag, Ba, Pt, Au, Pb, Be, B, C, Si), named
  as such in each solution (orchestrator's decision); 4 is numeric (R = 8.30 J K⁻¹ mol⁻¹, tol 5%). 3 explains, 5
  proves (18.9.5) by series. Computed: free fit of the ten metals' C_s against 1/M, slope 24.90, intercept 0.015;
  through the origin 25.08.
- `ai1` (AI exercise): Einstein C_V,m at T = Θ_v, 3R(0.9207) = 22.96 J K⁻¹ mol⁻¹ (computed).

## Derivations

None qualify: (18.9.2) → (18.9.4) is one move; the limit (18.9.5) is Exercise 5.

## Corrections

None. As printed: "Θ_v = hv/k" (v for ν), "Alexis Therese Petit", "one degree Kelvin", "Plank's".

## Wanted at chapter level

None.
