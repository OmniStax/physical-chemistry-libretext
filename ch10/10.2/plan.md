# Plan: 10.2 Hybrid Orbitals in Water (LibreTexts 13471)

Source: `source.md` (`python3 tools/convert.py 10.2`); draft from `python3 tools/md2html.py 10.2`.
Status: built 2026-11-08 in the Chapter 10 job, without a review stop (config: the chapter in one go).

No objectives, four printed figures (10.2.1, 10.2.2 and two printed 10.2.4) and one image in Example 10.2.1,
eight numbered equations, one note, one worked example, no exercise in the book. Licence CC BY-NC-SA 4.0;
credits Andrew Wolff and Martin (Stackexchange).

## Sub-concepts (page headers)

1. `opening` **Water by valence bond theory** (ours, the exploration's "Water by Valence Bond Theory", sentence case): O's configuration, the p-only bonds (10.2.1), (10.2.2) at 90°, the water figure, the measured 104.45°. Uses `valence-bond-theory`, `hybrid-orbital`.
2. `four-hybrids` **Four hybrids on oxygen** (ours; the opening runs long and turns here to the sp³ set): the sp³ set (unnumbered, 10.1's), the box diagram, VSEPR, 25% s. Reinforces `sp3-hybrids`.
3. `estimating-character` **Estimating Character of Hybrid Orbitals** (book's): spˣ, (10.2.3), the derivation to (10.2.5), (10.2.6), (10.2.7), (10.2.8) and its derivation, Example 10.2.1, water's 20% s. Introduces `spx-notation`, `hybrid-character`, `bond-angle-hybrid-relation`, `water-hybrids`; uses `normalization-condition`.
4. `lone-pairs` **Lone Pairs** (book's): the p sum of 3, 70% p, 115°, the note "Warning". Introduces `hybrid-character-sum`.

## Figures

- `sim-water` · Figure 10.2.1 + 10.2.2 (+ the second printed 10.2.4 in `originals`) · bond-angle-hybrid-relation, hybrid-character-sum, water-hybrids · variation and depth: the bond angle opens as s is poured into the bonding hybrids and the lone pairs swing out of the H–O–H plane, which three still pictures (p axes, the measured geometry, two lone-pair lobes) cannot join · arrows: none · still · one slider, s character of each O–H hybrid 0–50%, untyped, circles at 0 (pure p, 90°, Figure 10.2.1's case), 20% (water), 25% (sp³), 50% (sp, Example 10.2.1); opens on 20%, 104.5° · headline: the bond angle and the lone pairs' s and angle · readout γ² = s/(1 − s), cos θ = −γ² (10.2.8), θ, and the lone pairs' cos θ · mathematical 3D: four hybrid clouds (O–H in the wavefunction hue's two sign tones, lone pairs faint in ink), O and H (`F.el`) with H at the measured 95.84 pm; free orbit, elevation ±85°, no buttons; flat fallback. The lone pairs take s_l = ½ − s_b (the section's p sum of 3) and open by the same relation, 115.4° for water; the four hybrids are orthonormal at every setting. Slater 2s and 2p with Slater's effective charge for O, 4.55, density above an eighth of the peak (as 10.1). The BMP of 10.2.1 ships as `77739-Alevel-porbitals.png`.
  The orchestrator's fold of the second 10.2.4 into this figure is not possible as written: the check refuses a fold number another row carries ("folds 10.2.4, which figure fig-10-2-4 already carries"), and the first 10.2.4 keeps its number by the same decision. So the figure folds 10.2.2 only, keeps the lone-pair GIF among its originals and in its original caption, and the text's lone-pair citation "(Figure 10.2.4)" is a hand link (`a.figref`) to this figure.
- `fig-10-2-4` · the first printed Figure 10.2.4 · photo, kept as printed (carbon's box diagram), with a footnote; the text's "Figure 10.2.3" is a hand link to it.
- `fig-co2` · Example 10.2.1's image · unnumbered figure, kept: the linear molecule the solution reads 180° from.

Extra simulations: none (config).

## Exercises

Example 10.2.1 stays a worked example. One AI exercise (config): `ai1` NH₃'s 106.7°: γ² = −cos 106.7° = 0.2874, N–H s character 0.2874/1.2874 = 22.3%, lone pair 1 − 3(0.2232) = 33.0% (computed). Multi, at the end; tests `bond-angle-hybrid-relation`, `hybrid-character`, `hybrid-character-sum`.

## Derivations

- `normalized-hybrid` · (10.2.4)–(10.2.5) · printed block with words, qualifies · built, three nodes: ⟨χ|χ⟩ = 1 expanded to (10.2.4), N = 1/√(1 + γ²), (10.2.5). It replaces the block from ⟨χ_i|χ_i⟩ = 1 to (10.2.5). The config has it end at (10.2.6) and (10.2.7) as well; those two stay printed in the book's list, so its remarks (γ → 0, γ → 1) are not lost, and the (10.2.7) slip is footnoted there.
- `bond-angle` · (10.2.8) cos θ = −γ² · "it can be proven", hidden, score 3 + 4 + 1 = 8 · built after the paragraph that follows (10.2.8): ⟨χ₁|χ₂⟩ = N²(cos θ + γ²) = 0, its facts from 10.1 ((10.1.10), (10.1.20)).
- Water's γ, 80/20 and 115°: substitution, never a derivation.

## Corrections (footnotes)

The box diagram (cited as 10.2.3, carbon's, its caption's 2p_z); γ = 0.25 for sp³ (γ = 0.577); (10.2.7)'s γ²; "apply Equation 10.2.7" (10.2.8); "0.80%"; the lone pairs' 1/(0.7 − 1); Figure 10.2.1's credit "CC-SA-BY-NC" (through the row). Spelling and grammar slips ("atomic oxygen atom", "VSPER", "and and", "there there", "into to", "This are") are left as printed.

## Wanted at chapter level

None.
