# Plan: 20.1 Energy Does not Determine Spontaneity (LibreTexts 13714)

Source: `source.md`; draft from `python3 tools/md2html.py 20.1`. Built 2026-11-08 (chapter config agreed, no review stop).
No objectives, no summary, no numbered equations or figures, no credits printed. Two unnumbered images, one photograph, one note.

## Sub-concepts (page headers)

1. `opening` **Heat does not pick the direction** (ours): the valve experiments, KNO₃ and KOH. Introduces `spontaneous-process`, `energy-not-spontaneity`.
2. `two-items-left-on-our-wish-list` (book's): the two open problems. Introduces nothing (it speaks of entropy before the chapter defines it, as printed).
3. `entropy-on-a-microscopic-scale` (book's, with its "### Permutations"): n!, n!/(a!b!…), Stirling; the stork note. Introduces `arrangements-count`; reinforces `stirlings-approximation`.
4. `changing-the-box` **Changing the size of the box with the particles in it** (book's): the free expansion, box levels, realizations, W = A!/Πa_j!, S = k ln W. Introduces `free-expansion`, `expansion-more-realizations`, `boltzmann-entropy`, `entropy-additive`, `more-states-drive-spontaneity`; reinforces `distribution-weight`.

## Figures

- `sim-free-expansion` · Sim (replaces the unnumbered CH431_Image92, kept as original) · free-expansion, boltzmann-entropy, more-states-drive-spontaneity · flow by animation, variation by slider: the reader watches molecules spread and never return while W of every split stands beside them, which the still of gas beside vacuum cannot show · arrows: the book's expansion is kinematic, drawn as the molecules' motion · moving: the partition lifts at 1 s and the molecules fly and bounce (positions are functions of time, so the scrubber is exact) · N slider 4–100, detents 10, 50, 100, opening 10 (untyped) · headline: the live split left : right and its W · graph beside: W(n_L)/W(N/2) against n_L/N, fixed 0–1 on both axes, the present split's bar in ink · 2D. Labels: "vacuum" until the partition is gone, the two halves under the box; molecules named by hover.
- `sim-levels-realizations` · Sim (replaces the unnumbered CH431_Wexpansion, kept as original) · expansion-more-realizations, boltzmann-entropy · variation by slider: one slider is the book's "expansion" arrow, and W counts up through every box size, not only the book's two · arrows: the book's "expansion" arrow is the slider; none drawn · still: no time in the idea · box side a/a₀ 1–2 (length), detent at 1.414 where the spacing halves · headline: the spacing and W · the box beside the levels, energy 0–9 fixed, ⟨E⟩ dashed · 2D. Model: equidistant levels n·s, s = (a₀/a)², ⟨E⟩ = 4.5, a realization is a pair of levels adding to 2⟨E⟩ on the grid with both inside ⟨E⟩ ± 2.5: W = 3 at a₀ and 6 at 1.414 a₀, the book's counts. Column labels W₁… only while W ≤ 6, hover names beyond.
- Stork photograph (inside the note): dropped. The page gives a credit (Frank Vassen, via Wikipedia) and no licence, so a free licence cannot be confirmed from the page (orchestrator's decision); `notes` names it.

Extra simulations: none (config).

## Exercises

None printed. One AI exercise (config): `a1`, W for 10 molecules split 5:5 (252), ln W (5.53), Stirling's ln 10! (13.03) against the exact 15.10; tests `arrangements-count`, `stirlings-approximation`.

## Derivations

None qualify: the counting is under four moves, and W_tot = W₁W₂ → S = k ln W is an argument, not a chain (exploration).

## Corrections

Footnote `n3`: "n₂² + n₂²" in the box levels (n₃²). Left as printed: the unclosed "(a", "iis", "thermodynamincs", "forms energy", "W=A!/A!0!0!…", "Thus entropy is very large", the stork note's aside (orchestrator: verbatim).

## Wanted at chapter level

- Anchors for the forms `arrangements-n-factorial`, `arrangements-groups`, `boltzmann-entropy`: `20.1-entropy-on-a-microscopic-scale`, `20.1-entropy-on-a-microscopic-scale`, `20.1-changing-the-box`.
