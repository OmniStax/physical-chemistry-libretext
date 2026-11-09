# Plan: 19.3 Work and Heat are not State Functions (LibreTexts 13701)

Built 2026-11-09. CC BY-NC-SA 4.0.

## Sub-concepts

1. `path-functions` **Heat and work are path functions** (book's). Introduces `path-function`.
2. `reversible-versus-irreversible` **Reversible versus irreversible** (book's, with its "### Isothermal Expansion"). Introduces `reversible-process`, `reversible-isothermal-work`, `reversible-work-extremes`.

## Figures

- `sim-reversible-path` · Sim (folds the six unnumbered piston and PV images, all kept as originals) · reversible-process, reversible-work-extremes, reversible-isothermal-work · flow by animation and variation: the peg pulls play, the piston shoots to each balance and the staircase of work fills, and more steps close it on the isotherm · arrows: P_ext symbolic; the piston's jump is motion (the book's "suddenly"), so moving · moving: one loop is the N peg pulls (4.5 s / N per step, clamped 0.25–1.5 s) · choice compression (1 L, 1 bar → 0.5 L vs 2 bar) / expansion (1 L, 2 bar → 2 L vs 1 bar); slider N steps (untyped, 1–20, detents 1, 2, 5, 10, 20) · headline: the work in N steps against the reversible work (100 J vs 69.3 J; −100 J vs −138.6 J) · cylinder beside the PV plane · 2D. Unnumbered, so eyebrow "Sim".

## Exercises

`ai1` (AI, compute): 1.00 mol at 300 K, 10.0 → 5.0 L: reversible +1.73 kJ, one step at the final pressure +2.49 kJ. `ai2` (AI, explain as choice): why the one-step path needs more work. Tests `reversible-isothermal-work`, `constant-pressure-work`, `reversible-work-extremes`, `path-function`.

## Derivations

- `reversible-isothermal-work` · Derivation · the work of a reversible isothermal compression · replaces the printed three-step display; facts w = −∫P_ext dV (19.2), P_ext = P (the note), the ideal gas law (16.1), T constant; note on the missing dV. The irreversible line is (19.2.2), kept as printed.

## Corrections

`c-expansion-sign` (work done by the system), `c-expand` ("compress" in the expansion), `c-equal-work` (69.3 J vs 138.6 J). As printed: "Path Functons", the integrals without dV in the irreversible lines.

## Wanted at chapter level

- `reversible-isothermal-work` concept: `type` should be `work`, not `energy` (it is w).
