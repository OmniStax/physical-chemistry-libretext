# Plan: 10.3 BeH₂ is Linear and H₂O is Bent (LibreTexts 13472)

Source: `source.md`; draft from `tools/md2html.py 10.3` (deleted). Status: built 2026-11-08 in the Chapter 10 job, no review stop (config agreed). Emily V. Eames and Mark Tuckerman, CC BY-NC-SA 4.0. Six printed figures (10.3.1–10.3.4 and two printed 10.3.5), one table, two notes, one pulled quote, two numbered equations, Summary (to `summary_html`).

## Sub-concepts (page headers)

1. `opening` **Orbitals over the whole molecule** (ours): LCAO over all atoms, canonical orbitals. Introduces `canonical-orbitals`.
2. `ah-molecules` **AH₂ Molecules** (book's): (10.3.1), (10.3.2), the note "Mixing Amplitudes", χ₁ … χ₆. Introduces `linear-ah2-orbitals`.
3. `beryllium-hydride-is-linear` **Beryllium Hydride (BeH₂) is Linear** (book's, kept whole, rule 3): BeH₂, Figures 10.3.2 + 10.3.3, Walsh diagrams, the note "Walsh Correlation Diagrams", Figures 10.3.1 + 10.3.4, the quote, water's labels, Figure 10.3.5, Table 10.3.1. Introduces `beh2-bonding`, `walsh-diagram`, `frontier-orbitals`, `walsh-rule`, `water-molecular-orbitals`.

## Figures

- `sim-walsh` · Figure 10.3.1 + 10.3.4 · walsh-diagram, walsh-rule, linear-ah2-orbitals, frontier-orbitals · variation by slider: the six levels computed live as the angle changes, filled by the chosen molecule's electrons, with the sum of occupied levels below; the book's still diagram cannot say which molecule bends · arrows: none · still: no time in the idea · slider H–A–H angle 90–180° (angle; detent 104.5° water, circle at 180° linear), choice BeH₂/BH₂/CH₂/NH₂/H₂O · headline: the electron count, whether 3a₁ is occupied, the angle of least occupied energy · graph: Walsh diagram, the occupied sum beneath on the same angle axis, the HOMO drawn beside as signed lobes on the bent molecule · 2D. Model ours (A 2s −21, 2p −11, H −13.6 eV; resonance −5.0, −4.6 cos, H–H −3.0 e^{−1.6(d/R−1)} eV), said in the caption; split by C₂ᵥ symmetry so each level keeps its label. Minima: BeH₂ 180°, BH₂ 130.5°, CH₂–H₂O 95.5° (the book's note: Walsh puts water near 90°). Placed after the Walsh note (no sim inside a note in this book). Labels at both ends (bent at 90°, linear at 180°) spread apart; electrons as arrows at the current angle. 10.3.1's top labels corrected through the row.
- `fig-beh2` · Figure 10.3.2 + 10.3.3 · beh2-bonding · faithful copy (archetype 7), kind `figure`, still, no controls: BeH₂'s MO diagram with each MO drawn beside its level as signed lobes (10.3.2's pairing is the bonding pictures) · standardisation only · readout bond order (4 − 0)/2 = 2. Originals shipped (no credit).
- `sim-water-mo` · Figure 10.3.5 (both printed 10.3.5s, orchestrator) · water-molecular-orbitals · depth: the orbital as a cloud from Table 10.3.1's coefficients, 1b₁ seen standing out of the plane · arrows: none · still · choice of orbital 2a₁ … 2b₂ (text's labels; the readout names the table's) · headline: 1b₁ alone / spreads over three atoms · the MO diagram flat beneath, levels at the table's energies, the chosen one bold · mathematical 3D, `F.space.points` in two sign tones, Slater functions (H ζ 1.24, O ζ 2.275), azimuth free, elevation ±85°, no buttons; flat fallback from the library. Krylov's image withheld (no licence, `withheld`); Officer781's shipped; its licence slip corrected through the row.
- Table 10.3.1 kept as `div.book-table`, with a correction on its labels and units.

Extra simulations: none.

## Exercises

None printed. One AI exercise (config): which of BeH₂, BH₂, CH₂, NH₂, H₂O Walsh's diagram predicts linear (choice; BeH₂ only, checked against the figure's model), tests `walsh-diagram`, `walsh-rule`.

## Derivations

The LCAO simplification (score 1): stays as printed. None built.

## Corrections

(10.3.2)'s equal H coefficients; the note's "2s orbitals" and "H₁ compared to H₂"; χ₁'s reason; χ₆ (3σ_g), χ₂ (bonding, odd, opposite H signs), χ₅ (2σ_u); BeF₂; 2a₁ for 3a₁; the configuration's missing numbers; Table 10.3.1's shifted a₁ labels and units; figure rows: 10.3.1's top labels, 10.3.5's licence. Typos ("garade", "possible", "orientals") left as printed.

## Wanted at chapter level

- variables row, 10.3: `{"sym": "E", "type": "energy", "meaning": "the energy of a molecular orbital of AH₂ or of water", "section": "10.3"}` (the Walsh and water readouts write `\kE`; the text has no E of its own).
