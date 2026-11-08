# Plan: 17.3 The Average Ensemble Energy is Equal to the Observed Energy of a System (LibreTexts 13682)

Source: `source.md` (`python3 tools/convert.py 17.3`); draft from `python3 tools/md2html.py 17.3` (deleted once built).
Status: built 2026-11-08 in the Chapter 17 job, without a review stop (config: the chapter in one go).

No objectives, summary, figures or exercises in the book. Four numbered displays (17.3.1)–(17.3.4); two untitled
emphasis notes, kept as printed. Credit: LaRue. Licence CC BY 4.0 at the source.

## Sub-concepts (page headers)

The page has no `<h2>`; two blocks of ours (the exploration's, sentence case after both humanizer passes):

1. `average-over-states` **The average over states**: P_i = n_i/N, (17.3.1), the average (17.3.2), the note on
   expectation values (its LibreTexts link made an `xref` to 3.7). Introduces `average-ensemble-energy`; reinforces
   `boltzmann-probability`.
2. `energy-from-ln-q` **The energy from ln Q**: the derivation, then "Replacing 1/kT with β…" and the notation note.
   Introduces `average-energy-from-q` (the block is its span: the book names it only in the displays the derivation
   carries).

## Figures

None. `sim-average-energy` was offered and not picked (config, orchestrator's decisions).

## Exercises

None printed. AI exercise `ai1` (number, Apply): ⟨E⟩ of a two-level system from −∂ln Q/∂β, ε/(e^(βε) + 1),
0.269ε at kT = ε (computed).

## Derivations

- `average-energy` (printed block with words, 8 lines, built per config): "Derivations · the average energy from the
  partition function". Replaces "Equation 17.3.2 can be solved…" through ⟨E⟩ = −∂ln Q/∂β. Six nodes: (17.3.3),
  (17.3.4), ⟨E⟩ = kT²∂ln Q/∂T, Q in β, ∂ln Q/∂β, ⟨E⟩ = −∂ln Q/∂β. Facts: (17.3.1), (17.3.2), Q's definition, β = 1/kT
  (17.1). The chain-rule moves carry a reason.

## Corrections

Footnotes: `c-constant-pressure` (the canonical ensemble fixes N, V, T); `c-molecular-q` ((17.3.1)'s denominator for
a fraction of molecules is q). As printed: "This is the directly obtained".

## Wanted at chapter level

None.
