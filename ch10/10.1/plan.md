# Plan: 10.1 Hybrid Orbitals Account for Molecular Shape (LibreTexts 13470)

Source: `source.md` (`python3 tools/convert.py 10.1`); draft from `python3 tools/md2html.py 10.1`.
Status: built 2026-11-08 in the Chapter 10 job, without a review stop (config: the chapter in one go).

One objective, seven printed figures (10.1.1, 10.1.3–10.1.8; no 10.1.2), 25 numbered equations, one note,
a closing Summary (to `summary_html`), no exercise in the book. Licence CC BY-NC-SA 4.0 (Mark Tuckerman).

## Sub-concepts (page headers)

The book's four `<h2>` headers are kept; the opening, which has none, gets ours.

1. `opening` **Two theories of the bond** (ours, the exploration's "Two Theories of the Bond", humanized, sentence case): VB against MO theory. Introduces `valence-bond-theory`; uses `molecular-orbital`.
2. `review-of-diatomics` **Review of Diatomics**: H₂'s potential (10.1.1), ψ_u and ψ_g with spins (10.1.2), the node (10.1.3), F₂ (Figure 10.1.1), HF (10.1.4). Introduces `vb-wavefunctions-h2`; uses `pauli-exclusion-principle`; reinforces `gerade-ungerade`, `antibonding-molecular-orbital`.
3. `hybridization` **Hybridization**: BeH₂, promotion, (10.1.5), Pauling, the general χ. Introduces `electron-promotion`, `hybrid-orbital`; uses `degeneracy`.
4. `sp` **$sp$ Hybrid Orbitals**: (10.1.6)–(10.1.10) as printed, the derivation (10.1.11)–(10.1.18), the hybrids figure, (10.1.19). Introduces `hybrid-orthonormality`, `sp-hybrids`.
5. `sp2` **$sp^2$ Hybrid Orbitals**: BH₃, the rotated-p figure, (10.1.20)–(10.1.23) as printed, the derivation ending at (10.1.24). Introduces `sp2-hybrids`.
6. `sp3` **$sp^3$ Hybrid Orbitals**: CH₄ (10.1.25), the energy argument, the note "Are hybrid orbitals Real?". Introduces `sp3-hybrids`, `hybridization-as-interpretation`.

## Figures

- `fig-10-1-1` · Figure 10.1.1 · photo, kept: F₂'s Lewis structure, which the text points at; nothing varies.
- `sim-hybrids` · Figure 10.1.3 + 10.1.7 + 10.1.8 · hybrid-orbital, sp-hybrids, sp2-hybrids, sp3-hybrids · variation and depth: the reader adds s to a p orbital and sees one lobe swell into a direction, and turns the set to see the line, triangle and tetrahedron, which the three still JPGs only assert · arrows: none · still: an orbital has no time · choice set (sp, sp², sp³), slider s character 0–50%, untyped, dashed circles at 25, 33 and 50%; picking a set puts the slider on its value · headline: the set's count and angle when s is the set's, else χ₁'s and its partners' s · readout χ₁ as a sum with live coefficients, its s character · mathematical 3D: point clouds in two sign tones of the wavefunction hue for χ₁, the set's partners faint in ink at the set's own s, the nucleus; free orbit, elevation ±85°, no buttons (config); flat fallback. Clouds sample the density of Slater 2s and 2p sharing one exponent (ζ = ½) and keep the region above an eighth of the peak. The config's hydrogen 2s was tried first: its inner part is larger than the lobe and the picture read as a ball, so the nodeless Slater form is used and the caption says so. Directions are the book's (10.1.18), (10.1.24), (10.1.25), so sp²'s χ₁ points along −x. Labels: axes only; the clouds carry hover names.
- `sim-rotate` · Figure 10.1.4 + 10.1.5 + 10.1.6 · hybrid-orbital, sp2-hybrids · variation: the turn angle moves the orbital and the weights of 2p_y and 2p_x change before the reader's eyes, which the two still turns of ±30° cannot show · arrows: the x and y axes, symbolic · still · choice start (2p_y, −2p_y), slider turn −90° to 90° (angle), circles at −30° and +30° (the book's two turns), opening on 2p_y at −30° (Figure 10.1.5) · headline: the turned orbital as a mix with live weights · readout (10.1.20)/(10.1.21) with the live angle · 2D: Figure 10.1.4's frame with B and the three H atoms (`F.el`) where the book draws them (0°, 120°, 240°; the text's quadrants footnoted), the turned orbital as two signed lobes, and on the right "= w₁ × 2p_y + w₂ × 2p_x" drawn at their weights.

Extra simulations: none (config).

## Exercises

None printed. One AI exercise (config): `ai1` two of methane's sp³ hybrids (10.1.25): ⟨χ₁|χ₁⟩ = 1, ⟨χ₁|χ₂⟩ = 0, the angle between (1,1,1) and (−1,−1,1), arccos(−1/3) = 109.47° (computed). Multi, at the end; tests `sp3-hybrids`, `hybrid-orthonormality`.

## Derivations

- `sp-hybrids` · (10.1.11)–(10.1.18) · printed block with words, qualifies · built, eleven nodes from (10.1.6)–(10.1.10) and the equal-s assumption to the two hybrids (10.1.18). (10.1.14) is (10.1.11) reprinted and gets no node of its own. Inserted: why b₁ = −b₂ (b₂ = b₁ would make b₁² = −a₁²) and the sign choice in a₁ = b₁. Node note: "insert (10.1.17) into (10.1.16)" means (10.1.11)/(10.1.14). Replaces the text from after "Substituting 10.1.6 into 10.1.8 results in" to (10.1.18); the words between are the derivation's facts.
- `sp2-hybrids` · "carrying out the algebra" to (10.1.24) · skipped solve, score 1 + 5 + 2 = 8 · built, twelve nodes from (10.1.20)–(10.1.23) to (10.1.24): χ₂, χ₃ in p_x, p_y; c² + d² = 1; d² = 2c²; c = 1/√3; d = 2/√6; b = √2 a; a = 1/√3; b = √2/√3; the three hybrids. Stands after "Carrying out the algebra, we obtain the following sp² hybrid orbitals:" in place of the printed (10.1.24); the rotations, the trial set and the conditions stay printed.
- (10.1.3) → ψ_u = 0 stays (score 0); (10.1.25) stays (stated).

## Corrections (footnotes)

ψ_{1s}{B} in (10.1.2); (10.1.4)'s stray parenthesis and missing constant; "The example considered above of H₂O"; the 3rd and 4th quadrants (Figure 10.1.4 draws the 2nd and 3rd); a, b and c (and d); the hybrids of (10.1.24) at 180° and ±60°, not at the H atoms; "promote one of the 2s orbitals" (electrons); the summary's "2 sand 2patomic". In the derivation: (10.1.17) into (10.1.16). The sine identity's "cos α sin β", printed as italic letters, is set with \cos and \sin. Spelling and grammar slips ("noramlization", "combine the into", "valecies") are left as printed.

## Wanted at chapter level

None. (ψ for an atomic orbital, ψ_2s, ψ_2p_z, is left in plain \psi since the section has no variables row for it.)
