# Plan: 10.7 Benzene and Aromaticity (LibreTexts 53694)

Source: `source.md` (`python3 tools/convert.py 10.7`); draft from `python3 tools/md2html.py 10.7` (deleted once built).
Status: built 2026-11-08 in the Chapter 10 job, without a review stop (config agreed).

Two objectives, four numbered figures, two numbered displays, no example, no exercise, two notes. William Reusch, CC BY-NC-SA 4.0. The objectives' zero-width spaces in "Hückel" are dropped (config), as is the one in the text's "Hückel theory".

## Sub-concepts (page headers)

1. `rings-of-carbon` **Rings of carbon** (ours; exploration proposed "Rings of Carbon"): CₙHₙ, Figure 10.7.1, the note "Structure of Benzene" with Figure 10.7.2. Introduces `benzene-structure`.
2. `benzene-levels` **Benzene's π levels** (ours; exploration proposed "Benzene's π Levels"): (10.7.1), its roots and the six energies as printed, Figure 10.7.3, the printed wavefunctions, the configuration, the derivation replacing (10.7.2) and the ΔE display, −152 kJ/mol. Introduces `benzene-pi-orbitals`, `benzene-delocalization-energy`.
3. `aromaticity` **Aromaticity** (book's): 4n + 2, the note "Hückel's Rule", the heats of hydrogenation, Figure 10.7.4. Introduces `huckel-rule`.

## Figures

- `fig-10-7-1` · Figure 10.7.1 · kept: the text points at both models. The garbled credit link set as "Benjah-bmm27 and Edgar181". No widths (a photo row takes one; the figure has two images).
- `fig-10-7-2` · Figure 10.7.2 · kept inside its note (no credit in the book).
- `sim-ring` · Figure 10.7.3 · benzene-pi-orbitals, huckel-rule, degeneracy · flow and variation: π electrons drop in one at a time and the reader sees shells close only at 2, 6, 10, across rings C₃ to C₈, where the book shows benzene's six orbitals once · arrows: symbolic (spins); the drop is the motion · moving: the filling is a sequence (9.7.4's precedent), 0.5 s an electron, 1.4 s hold, each state reached by the transport · select of the ring (six options would wrap), opening on benzene · headline: which orbital the current electron enters, then closed or open shell and 4n + 2 · Frost's circle on the left (levels at the corners of the inscribed polygon, α dashed), each orbital seen from above to the right as a ring of dots sized by |c| and toned by sign, degenerate pairs side by side · 2D. Readout E_π so far, the delocalization energy against isolated double bonds, closed or open shell. Benzene's pair orbitals drawn as the true solutions (cos and sin), not the printed ψ₂, ψ₄. Original shipped.
- `fig-10-7-4` · Figure 10.7.4 · benzene-delocalization-energy · faithful copy (archetype 7), kind `figure`, still: the book's kcal/mol (28.6, 55.4, 49.8, 85.8) as energy drops to cyclohexane, each ring drawn · standardisation only. Original shipped.

Extra simulations: none (config).

## Exercises

None printed. One AI exercise (config): `a1`, cyclobutadiene's determinant x⁴ − 4x² = 0, levels α + 2β, α, α, α − 2β, E_π = 4α + 4β (part a: 4), two unpaired electrons (part b: 2), zero delocalization energy, not aromatic.

## Derivations

- (10.7.1) roots stated (score 1 + 4 + 0 = 5) and the printed align (10.7.2) with ΔE: **Built** one record, `benzene-delocalization`, *Derivation · the delocalization energy of benzene*: the expansion x⁶ − 6x⁴ + 9x² − 4 = (x² − 4)(x² − 1)² inserted, the energies, (10.7.2), ΔE = 2β; ethylene's 2(α + β) links 10.5's `ethylene-pi`. It stands where the book prints (10.7.2), after the configuration paragraph; (10.7.1), the roots and the energy list stay printed, as the book states them in prose first.
- The six printed wavefunctions: stated, kept with a correction.

## Corrections

Footnotes: ψ₂ and ψ₄ are not solutions; "(Equation 10.7.2)" for 2β; the note's "n = 2, 6, 10" (4n + 2 = 2, 6, 10); the kJ/mol heats misconverted from the figure's kcal/mol (two notes). Kept without notes: "extra stable for with", "isolated p orbitals", the garbled "As discussed previously, that such…", the figure credit's "Resuch".

## Wanted at chapter level

None.
