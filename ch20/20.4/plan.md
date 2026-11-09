# Plan: 20.4 The Second Law of Thermodynamics (LibreTexts 13718)

Source: `source.md`; draft from `python3 tools/md2html.py 20.4`. Built 2026-11-08. Two unnumbered images, one note, no numbered equations, no credits.

## Sub-concepts (page headers, both the book's)

1. `spontaneity-of-an-isolated-system` **Spontaneity of an isolated system**: the isolated-system note; two blocks; dS = dU_A(1/T_A − 1/T_B); ΔS of two identical blocks; dS ≥ 0. Introduces `isolated-system`, `heat-flow-entropy-production`, `two-block-entropy-change`, `second-law`.
2. `entropy-exchange-of-an-open-system` **Entropy exchange of an open system**: dS = dS_prod + dS_exchange; the three cases; Clausius inequality. Introduces `entropy-production-exchange`, `clausius-inequality`.

## Figures

- `sim-two-blocks` · Sim (folds the unnumbered "Isolated_System" sketch and "Entropy" graph, both kept as originals; orchestrator) · heat-flow-entropy-production, two-block-entropy-change, second-law · flow by animation, variation by slider: heat is seen crossing the contact as fast as the temperature gap allows while the two blocks' entropies move apart and their sum climbs and stops, which the two stills show only separately · arrows: the book's q arrow is kinematic, drawn as chevrons drifting from the hotter block · moving: T(t) relaxes with τ = 1 s over 6 s · T_A, T_B 250–600 K (temperature, opening 400 K and 300 K), each with a dashed circle where it equals the other; C_V fixed at 10.0 J/K · headline: the two live temperatures and the entropy gained · scene above, two graphs below: T against t (200–600 K fixed) and ΔS of A, of B and of the pair (range follows the sliders, a named zoom: the pair's 0.206 J/K would be flat on a range fixed for the extremes) · 2D. Blocks outlined in `F.cat(0)`, `F.cat(1)` and filled by temperature; legend on the entropy graph.

## Exercises

None printed. One AI exercise (config): `a1`, blocks of 10.0 J/K at 400 K and 300 K: 350 K, −1.335 J/K for the hot block, 0.206 J/K for the pair; tests `two-block-entropy-change`, `second-law`.

## Derivations

Two records where the exploration proposed one, since the printed block and the hidden result sit apart in the text (one host cannot stand in both places):
- `heat-flow` · *Derivation · the entropy produced as heat flows between the blocks* (printed, replaces "so: … Thus we get"): facts dS = δq_rev/T (20.2), dU_A = δq_A + 0, the one-path argument, dU_A = −dU_B; results T dS = dU_A, dS = dU_A(1/T_A − 1/T_B). Node note: the book's "this makes q a state function" (q stays a path function).
- `two-blocks` · *Derivation · the entropy change of two identical blocks* (hidden "we can, in fact, derive", score 8): T_f = (T_A + T_B)/2, ΔS = C_V ln(T_f/T_A) + C_V ln(T_f/T_B) = C_V ln[(T_A + T_B)²/4T_AT_B]; node note the correction.

## Corrections

Footnote `square` (marker after the lead-in, the display stays as printed): T_A² + T_B² for (T_A + T_B)², checked: 400 K and 300 K give −0.652 C_V printed against +0.0206 C_V. The "q a state function" sentence lies in the replaced run; its correction is the node note. The S(t) image's "bat silhouette" alt is the site's and goes with the folded image.

## Wanted at chapter level

- A variables row for 20.4: `T_f` · temperature · K · the common final temperature of the two blocks (with a macro, e.g. `\kTf`), used plain in the `two-blocks` derivation.
- A variables row for 20.4 `S_tot` · entropy · J/K · the total entropy change of the system (the book's "dS_tot"), set plain in the text.
- Anchors for the forms `heat-flow-entropy-production`, `two-block-entropy-change`, `second-law-isolated` (`20.4-spontaneity-of-an-isolated-system`), `entropy-production-exchange`, `clausius-inequality` (`20.4-entropy-exchange-of-an-open-system`).
