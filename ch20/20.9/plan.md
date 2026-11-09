# Plan: 20.9 The Statistical Definition of Entropy is Analogous to the Thermodynamic Definition (LibreTexts 13723)

Source: `source.md`; draft from `python3 tools/md2html.py 20.9` (deleted once built).
Status: built 2026-11-09 in the Chapter 20 job, without a review stop.

No objectives, summary, figures or credit. Displays (20.9.1)–(20.9.3).

## Sub-concepts (page headers)

1. `two-views` **Two views of one law** (ours): the opening paragraph.
2. `statistical-to-heat` **From the statistical entropy to heat** (ours): the repeat of 20.8's chain, kept printed, its "Combining Equations 20.9.1 and 20.9.2" linked to 20.8's derivation (xref); then the derivation.
3. `why-they-agree` **Why they agree** (ours): the closing paragraphs and bullets. Introduces `statistical-thermodynamic-entropy` ("Both definitions describe the same underlying concept").

## Figures

None.

## Exercises

None printed. AI exercise `ai1` (open, Understand): why Σdp_j = 0, and why ΣE_jdp_j is heat and Σp_jdE_j work.

## Derivations

- `thermodynamic-entropy` (hidden, score 7, built per config): "Derivation · the thermodynamic entropy from the statistical one". Replaces "We can differentiate this equation" through (20.9.3). Nodes: dS = −k_BΣln p_j dp_j; Σ ln p_j dp_j = −δq_rev/k_BT (inserted: ln p_j = −βE_j − ln Q, Σ ln Q dp_j = 0, ΣE_jdp_j = δq_rev); (20.9.3). First fact `drv: 20.8/entropy-probabilities`. E_j, Q and β are written plain (no variables rows in 20.9).

## Corrections

`c-systems` (a_j counts systems, not microstates). As printed: "Sterling's", "dropping the subscript".

## Wanted at chapter level

Optional, for colour in the derivation: variables rows in 20.9 for `E_j` (energy, "the energy of state j of a system"), `Q_sys` (partition-function, "the canonical partition function of a system"); with them the derivation's E_j and Q can be set as `\kEj`, `\kQsys`.
