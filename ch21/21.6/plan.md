# Plan: 21.6 Practical Absolute Entropies of Gases Can Be Calculated from Partition Functions (LibreTexts 14483)

Source: `source.md`; draft from `tools/md2html.py 21.6` (deleted). Built 2026-11-09 in the Chapter 21 job
(builder r2), without a review stop (config agreed). No objectives, no figures, no numbered equations
(the config: 21.6 numbers nothing). The page stops mid-argument at the source.

## Sub-concepts (page headers)

1. `ground-states` **The partition function near absolute zero** (ours; the page has no header): the whole
   page and the derivation after its last display. Introduces `partition-function-third-law`; uses
   `entropy-from-partition-function` (20.8), `internal-energy`, `canonical-partition-function`, `third-law`,
   `degeneracy`.

## Figures

None. A Σe^(−E/kT) Sim was judged and dropped in `exploration.md` (17.2's level populations already show it).

## Exercises

- `a1` (AI, `generated_by: "ai"`, number): one mole of a crystal with a doubly degenerate ground level per
  molecule keeps S → R ln 2 = 5.76 J/K as T → 0 (checked: 8.314 × 0.69315 = 5.763). Tests
  `partition-function-third-law`, `degeneracy`.

## Derivations

- `low-t-entropy` "Derivation · the entropy near absolute zero", score 7 (printed + hidden): the printed text
  is kept and the derivation stands after the last printed display, working the unprinted moves (factor
  ne^(−E₁/kT); ln Q; differentiate; the E₁/T terms cancel; the correction terms vanish; S → k_B ln n, 0 for
  n = 1). Facts carry src "21.6" (the book's own printed lines) and "21.2" (a perfect crystal). The δ of the
  book is read as ∂ with a node note. No `drv` links: the facts used are the page's own printed lines.

## Footnotes (corrections)

- `no-conclusion`: the page never reaches the limit (orchestrator's decision).
- `e-n`: E₁ = … = E_m should end in E_n.

## Wanted at chapter level

None.
