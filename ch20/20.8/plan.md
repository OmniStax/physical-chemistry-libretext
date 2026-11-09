# Plan: 20.8 Entropy Can Be Expressed in Terms of a Partition Function (LibreTexts 13722)

Source: `source.md`; draft from `python3 tools/md2html.py 20.8` (deleted once built).
Status: built 2026-11-09 in the Chapter 20 job, without a review stop.

No objectives, summary or figures. Displays (20.8.1)–(20.8.4). Credit: author tag LaRue.

## Sub-concepts (page headers)

1. `counting-to-probabilities` **From counting to probabilities** (ours): opening, (20.8.1), W, derivation 1. Introduces `entropy-from-probabilities` (in the derivation) and `entropy-from-partition-function` (the opening's "calculate the entropy of a system once its Q is known").
2. `probabilities-to-q` **From probabilities to Q** (ours): "If all the p_j are zero…", (20.8.3), derivation 2.

## Figures

None. `sim-two-level-entropy` not built (config).

## Exercises

None printed. AI exercise `ai1` (number, Apply): two-level system at kT = ε, S/k = 0.582 = 0.269 + 0.313 (computed).

## Derivations

- `entropy-probabilities` (printed, 10 moves): S_ensemble = k ln W → Stirling → a_j = p_jA → (20.8.2). Facts: (20.8.1), W (17.2), Stirling (17.2), Σa_j = A, p_j = a_j/A, Σp_j = 1, S_system = S_ensemble/A.
- `entropy-partition` (printed): (20.8.2) (`drv` to the first) with (20.8.3), βk = 1/T, U (17.3), Σp_j = 1 → (20.8.4). Two records rather than one so that 20.9 links the first. Corrected in the node's `note`: the sign of the first term of the book's third line.

## Corrections

The sign, in the derivation note. As printed: "formulism", "Sterling's approximation", "except for the for one".

## Wanted at chapter level

None.
