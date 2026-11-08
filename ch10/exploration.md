# Exploration: Chapter 10, Bonding in Polyatomic Molecules

Written 2026-11-08 from the converted pages (`python3 tools/convert.py 10`), every
page read in full, the chapter's 44 images looked at (the GIFs flattened on white,
the SVGs rendered through sharp, the BMP through Pillow). The landing page (11787)
prints one paragraph of its own and no thumbnail credit, so the chapter has an
**`intro/` page** (root rule 21.1). 10.S (550566) is a real summary page, one
paragraph by Kyle Crabtree, routed to `summary/`. **10.E (13469) has no body**
(`exercises/source.md` holds only its title): nothing is routed from it (root
rule 9). Every section page holds the text its title promises (checked against
Chapter 9's empty and stray pages): none is empty, none is a transclusion.

The chapter has three movements, each in another author's voice. 10.1–10.2
(Tuckerman; Wolff) are valence bond theory: H₂'s two-electron wavefunctions, then
s and p mixed into sp, sp² and sp³ hybrids, then water's hybrids read off its bond
angle through cos θ = −γ². 10.3–10.4 (Eames and Tuckerman; Nix) are molecular
orbitals over the whole molecule: the six orbitals of a linear AH₂, BeH₂, a Walsh
diagram bending it, water's orbitals with their C₂ᵥ labels, and photoelectron
spectra as the experiment that decides between the two pictures (water's lone
pairs are not identical). 10.5–10.7 (Blinder; Larsen; Reusch) are Hückel theory:
ethylene's 2 × 2 secular determinant, butadiene's 4 × 4 and its delocalization
energy, benzene's ring and Hückel's 4n + 2 rule.

What moves: electrons flying through a hemispherical analyzer (10.4.1's
apparatus, the only kinematic arrows of the chapter) and π electrons dropping one
by one into a ring's levels until a shell closes (10.7). What varies: the s share
of a hybrid (its lobe fattens and the set's angle opens from 90° to 180°), a
bond angle (Walsh's levels follow it), the photon energy and the molecule of a
photoelectron spectrum, the bond-length change on ionization (the vibrational
progression lengthens), the mixing of two p orbitals (the energy finds α ± β),
the length of a conjugated chain (levels fill, nodes appear).

## Pages

| Page | LibreTexts id | Licence | Authors (tags) | Headers (`<h2>`) | Ex | Exr | Fig | Img | Tab | Notes | Eq (numbered / displays) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| intro | 11787 | BY-NC-SA 4.0 | none | none: one paragraph | | | | | | | |
| 10.1 Hybrid Orbitals Account for Molecular Shape | 13470 | BY-NC-SA 4.0 | Mark Tuckerman | Review of Diatomics; Hybridization; sp, sp², sp³ Hybrid Orbitals; Summary | 0 | 0 | 7 (printed 10.1.1, 10.1.3–10.1.8; no 10.1.2) | 0 | 0 | 1 (Are hybrid orbitals Real?) | 25 / 42 |
| 10.2 Hybrid Orbitals in Water | 13471 | BY-NC-SA 4.0 | Andrew Wolff; Martin (Stackexchange) (Contributors list) | Estimating Character of Hybrid Orbitals; Lone Pairs | 1 | 0 | 4 (printed 10.2.1, 10.2.2, 10.2.4, 10.2.4) | 1 (in Example 10.2.1) | 0 | 1 (Warning) | 8 / 23 |
| 10.3 BeH₂ is Linear and H₂O is Bent | 13472 | BY-NC-SA 4.0 | Emily V. Eames, Mark Tuckerman | AH₂ Molecules; BeH₂ is Linear; Summary | 0 | 0 | 6 (printed 10.3.1–10.3.4, 10.3.5, 10.3.5) | 0 | 1 | 2 (Mixing Amplitudes; Walsh Correlation Diagrams, holding 10.3.4), one pulled quote | 2 / 9 |
| 10.4 Photoelectron Spectroscopy | 13473 | **BY 4.0** | Roger Nix | Hydrogen Chloride; Water; Summary | 2 (illustrations, no question) | 0 | 8 | 2 (in the examples) | 1 (no caption) | 3 (Note; Koopmans' Theorem; Differing Ionization Energies) | 7 / 8 |
| 10.5 The pi-Electron Approximation (Hückel Theory) | 13474 | BY-NC-SA 4.0 | Seymour Blinder | Ethylene | 0 | 0 | 6 (10.5.6 two parts) | 0 | 0 | 3 (Conjugated Systems; Matrix Representation of the Hamiltonian; Limitations of Hückel Theory), two pulled quotes | 11 / 36 |
| 10.6 Butadiene is Stabilized by a Delocalization Energy | 13475 | **BY-SA 4.0** | Delmar Larsen | none | 0 | 1 | 3 | 1 (trans-butadiene) | 0 | 1 (Delocalization Energy in Valence Bond Theory, holding 10.6.2), one pulled quote | 17 / 22 |
| 10.7 Benzene and Aromaticity | 53694 | BY-NC-SA 4.0 | William Reusch | Aromaticity | 0 | 0 | 4 (10.7.1 two parts) | 0 | 0 | 2 (Structure of Benzene, holding 10.7.2; Hückel's Rule) | 2 / 5 |
| summary (10.S) | 550566 | untagged (the book's) | Kyle Crabtree | none: one paragraph | | | | | | | 0 / 0 |
| 10.E | 13469 | | | empty | | | | | | | |

Objectives: 10.1 (one), 10.4 (one), 10.5 (one), 10.6 (two), 10.7 (two); none with
a lead-in sentence; 10.2 and 10.3 have none. Closing "## Summary" in 10.1, 10.3 and
10.4 (to `summary_html`). Credits: only 10.2 prints a Contributors list (Andrew
Wolff, Martin via Stackexchange); elsewhere the tag's authors (above), the
summary Crabtree, the intro the book's. Displays: 145, of which 72 numbered.

Opening blocks before the first `<h2>` need a header of the agent's (root rule 3),
proposed below and put through the humanizer by the builder; 10.6 has no `<h2>`
and is divided by the agent.

### The intro page

`intro/source.md`: one paragraph (the molecular orbital extended to polyatomic
molecules, the symmetry of the nuclear framework). One block, header proposed
"From Diatomics to Polyatomics". No correction.

### The summary page (10.S)

`summary/source.md`, named by `chapter.json`'s `summary` record: one paragraph, no
header, no maths. One block, header proposed "Bonding in Polyatomic Molecules in
Brief". It names hybridization and Hückel theory (10.1, 10.5) and links them; it
also says "We've discussed brute-force ab-initio methods … and the tradeoffs
inherent in calculations", which this chapter does not (that is Chapter 11): one
correction footnote.

### Per section

- **10.1** Opening (proposed "Two Theories of the Bond"): valence bond against
  molecular orbital theory. Review of Diatomics: H₂'s potential (10.1.1), the
  separated limit, ψ_u and ψ_g, their spin functions (10.1.2), the nodal plane of
  ψ_u ((10.1.3) and the substitution giving 0), F₂ (Figure 10.1.1, its Lewis
  structure; F's configuration), HF (10.1.4). Hybridization: BeH₂ (steric number
  2), promotion, the two unequal VB bonds (10.1.5), Pauling, the general χ.
  sp Hybrid Orbitals: (10.1.6)–(10.1.18), the orthonormality conditions solved for
  the two sp hybrids, Figure 10.1.3, the BeH₂ bonds (10.1.19). sp² Hybrid Orbitals:
  BH₃, Figure 10.1.4, the p_y rotations (Figures 10.1.5, 10.1.6, (10.1.20),
  (10.1.21)), the trial set (10.1.22), the conditions (10.1.23), the sp² hybrids
  (10.1.24), Figure 10.1.7. sp³ Hybrid Orbitals: CH₄ (10.1.25), Figure 10.1.8, the
  energy argument for four bonds. The note "Are hybrid orbitals Real?". Summary.
  Concepts (new): valence bond theory, valence-bond wavefunctions of H₂, promotion
  of an electron, hybrid orbital, orthonormality of hybrid orbitals, sp, sp², sp³
  hybrid orbitals, hybridization is an interpretation. Reinforced: two-electron
  spin functions and antisymmetry (8.5, 8.6), gerade and ungerade (9.6), Pauli
  (8.5), p orbital shape (6.6), hydrogen degeneracy (6.2), normalization and
  orthogonality (3.5), steric number (general chemistry; not a concept here).
- **10.2** Opening (proposed "Water by Valence Bond Theory"): O's configuration,
  the two p-only bonds (10.2.1), (10.2.2) and their 90°, Figure 10.2.1, the
  measured 104.45° (Figure 10.2.2), the sp³ set (repeated from 10.1, unnumbered),
  the box diagram printed "Figure 10.2.4" and cited as 10.2.3, the VSEPR argument,
  the lone-pair figure (the second "10.2.4"), 25% s against water's angle.
  Estimating Character of Hybrid Orbitals: spˣ, the list of schemes, (10.2.3)
  |χ⟩ = N(p + γs), the normalization (10.2.4) to (10.2.5), the p and s characters
  (10.2.6), (10.2.7), "it can be proven" cos θ = −γ² (10.2.8), Example 10.2.1
  (CO₂, keyed, with a ball-and-stick image), water's 20% s / 80% p. Lone Pairs:
  0.8 + 0.8 + x + x = 3, 30% s, 115°, the note "Warning". Concepts (new): spˣ
  notation, s and p character of a hybrid, bond angle and hybrid composition,
  hybrids share out the s and p orbitals, hybrids of water. Reinforced: hybrid
  orbital and sp³ hybrids (10.1), normalization (3.5).
- **10.3** Opening (proposed "Orbitals over the Whole Molecule"): canonical,
  delocalized orbitals. AH₂ Molecules: the six-orbital LCAO (10.3.1), the linear
  simplification (10.3.2), the note "Mixing Amplitudes", Figure 10.3.1, χ₁ … χ₆
  with their labels. Beryllium Hydride is Linear: Be's configuration, Figure
  10.3.2, Figure 10.3.3 (bond order 2), Walsh diagrams, the note "Walsh
  Correlation Diagrams" (Figure 10.3.4, HOMO and LUMO first spelled out here,
  Walsh's rule), the pulled quote of the rule, water: symmetry labels (the first
  Figure 10.3.5, Wikipedia's MO diagram), the four mixed orbitals, the HOMO 1b₁,
  the configuration, the second Figure 10.3.5 (Anna Krylov's orbital pictures),
  Table 10.3.1 (energies and LCAO coefficients), the lone pairs not identical.
  Summary. Concepts (new): canonical molecular orbitals, molecular orbitals of a
  linear AH₂ molecule, bonding in BeH₂, Walsh diagram, HOMO and LUMO, Walsh's
  rule, molecular orbitals of water. Reinforced: LCAO-MO (9.2), MO symmetry labels
  and g/u (9.6), nonbonding orbital (9.12), number of MOs (9.2), bond order (9.8),
  hybrids of water (10.2).
- **10.4** Opening (proposed "Photoionization"): PES, XPS, UPS, E = hν (10.4.1),
  the instrument (Figure 10.4.1), A + photon → A⁺ + e⁻ (10.4.2), energy balance
  (10.4.3), KE = hν − [E(A⁺) − E(A)] (10.4.4), KE = hν − IE (10.4.5), IE = hν − KE
  (10.4.6), the note relating it to the photoelectric effect, Figure 10.4.2,
  Koopmans' theorem (10.4.7), Figure 10.4.3, the note "Koopmans' Theorem",
  adiabatic and vertical ionization, Figure 10.4.4, the note "Differing Ionization
  Energies", Examples 10.4.1 (H₂) and 10.4.2 (N₂), each an MO diagram with its
  spectrum and no question. Hydrogen Chloride: Figure 10.4.5, the seven points,
  Figure 10.4.6. Water: the configuration, Koopmans for 1b₁ and 3a₁, Figure 10.4.7,
  the uncaptioned table of Hartree–Fock and measured energies, Figure 10.4.8 (a
  scanned spectrum), three bands against VB's two, the 3-centre orbitals. Summary.
  Concepts (new): photoelectron spectroscopy, vertical ionization energy,
  adiabatic ionization energy, kinetic energy of a photoelectron, photoelectron
  bands as orbital energies, vibrational structure of a band, photoelectron
  spectrum of water. Reinforced: photoelectric effect and Einstein's equation,
  work function (1.3), photon energy (1.2), ionization energy (7.1), Koopmans'
  theorem and the frozen-orbital approximation (8.7), potential energy curve
  (9.1), vibrational levels (5.2), nonbonding orbitals and HCl (9.12), water's
  MOs (10.3).
- **10.5** Opening (proposed "Conjugation and π Electrons"): conjugated chains,
  Hückel 1931, ethylene's sp² σ framework (Figure 10.5.1), σ–π separability, the
  note "Conjugated Systems". Ethylene: Figure 10.5.2, hybrids against atomic
  orbitals, Figure 10.5.3, the pulled quote, the LCAO (10.5.1), the secular
  equations (10.5.2)–(10.5.6) (7.2's, repeated), Hückel's four assumptions, the
  note on the Hamiltonian matrix, (10.5.7)–(10.5.9), x² − 1 = 0, E = α ∓ β,
  Figure 10.5.4, the coefficients (10.5.10), (10.5.11), N = 1/√2, Figure 10.5.5,
  the HOMO/LUMO quote, Figure 10.5.6 (two computed images), the note "Limitations
  of Hückel Theory". Concepts (new): conjugated system, sigma–pi separability,
  Coulomb integral α, resonance integral β, Hückel approximation, Hückel variable
  x, π orbitals of ethylene, HOMO–LUMO gap. Reinforced: sp² hybrids (10.1), π
  orbital (9.7), LCAO, secular equations and determinant, matrix element (7.2),
  overlap integral (4.5), HOMO and LUMO (10.3).
- **10.6** No `<h2>`. Proposed blocks: "Butadiene's π Levels" (the molecule and
  its conformers, the trans image, (10.6.1)–(10.6.11), the connection matrix,
  x⁴ − 3x² + 1 = 0, Figure 10.6.1), "Delocalization Energy" ((10.6.12), (10.6.13),
  0.48β, −35 kJ/mol, the pulled quote, the note on resonance with Figure 10.6.2)
  and "The π Orbitals" ((10.6.14)–(10.6.17), Figure 10.6.3, the node count,
  Exercise 10.6.1). Concepts (new): writing a Hückel determinant (skill), π
  orbitals of butadiene, total π-electron energy, delocalization energy,
  delocalization energy of butadiene, resonance in valence bond theory.
  Reinforced: Hückel approximation and x (10.5), π orbitals of ethylene (10.5),
  more nodes, higher energy (3.5), particle in a box (3.5).
- **10.7** Opening (proposed "Rings of Carbon"): CₙHₙ, Figure 10.7.1 (benzene and
  cyclobutadiene), the note "Structure of Benzene" (Kekulé, Figure 10.7.2, 140 pm).
  A block of the agent's from "Aromatic systems provide …" (proposed "Benzene's π
  Levels"): (10.7.1) and its roots, the six energies, Figure 10.7.3, the printed
  wavefunctions, π₁²π₂²π₃², (10.7.2), the delocalization energy 2β, −152 kJ/mol.
  Aromaticity: 4n + 2, the note "Hückel's Rule", the heats of hydrogenation,
  Figure 10.7.4. Concepts (new): Kekulé structures of benzene, π orbitals of
  benzene, delocalization energy of benzene, Hückel's rule. Reinforced: Hückel
  determinant (10.6), delocalization energy (10.6), degeneracy (3.9), closed shell
  (8.8), resonance (10.6).

## Equation numbers

One number per display, an `align` included, as the converter's `n=` gives them:
72 numbered displays of 145 (10.1 25, 10.2 8, 10.3 2, 10.4 7, 10.5 11, 10.6 17,
10.7 2); `align*`, `\nonumber` displays and 10.2's repeated sp³ set are unnumbered.
Labels are borrowed in places (10.4's `5.3.1`–`5.3.5` print (10.4.1)–(10.4.5);
10.6's `24`–`32` print (10.6.4)–(10.6.13)); the builder reads numbers from the
draft. Citations that miss (corrections): 10.1 "Insert Equation (10.1.17) into
(10.1.16)" (a₁ = b₁ goes into (10.1.14)); 10.2 "apply Equation (10.2.7) to water"
for the angle (10.2.8); 10.6 "Comparing Equation (10.6.12) with Equation
(10.6.12)" ((10.6.13)); 10.7 "For benzene this is 2β (Equation 10.7.2)" (the
unnumbered display after it).

## Exercise count report (root rule 13)

Counted from the converted pages.

- **Inline exercise boxes**: 1 printed (10.6.1: Hückel for cis-butadiene, and
  whether it describes the cis–trans isomerization), 1 card. **0 keyed**. **1
  unkeyed**, available with an AI solution: explain (Hückel uses only the
  connectivity, so cis and trans get the same levels and orbitals, and it cannot
  see the 2.3 kcal/mol between them or the rotation barrier). 0 compute, 0 sketch.
- **Worked examples**: 3 (10.2.1, keyed with a Solution; 10.4.1 and 10.4.2,
  illustrations with an MO diagram and a spectrum and no question, kept as printed
  like 9.1.1), kept whole; not exercises.
- **Conceptual questions, problems, 10.E**: none printed; 10.E is empty, so
  nothing is routed (root rule 9).
- **Placement (root rule 12)**: 10.6.1 tests 10.6 (the Hückel determinant of
  butadiene) and stays there.
- **Totals**: 1 card, 0 keyed, 1 unkeyed (1 explain).
- **Concepts the book leaves untested** (every section but 10.6; 10.6's one
  question is qualitative): **proposed new: 7**, one per section: 10.1 (show that
  two of the sp³ hybrids (10.1.25) are orthonormal and find the angle between
  their directions, 109.47°); 10.2 (NH₃'s 106.7° angle: the N–H hybrids' s
  character, 22.3%, and the lone pair's, 33.0%, by the sum rule); 10.3 (which of
  BeH₂, BH₂, CH₂, NH₂, H₂O Walsh's AH₂ diagram predicts linear, by electron count);
  10.4 (He I photons, 21.22 eV, on water: the kinetic energy of 1b₁ electrons, 8.6
  eV, and why the 2a₁ band at 32.2 eV is missing); 10.5 (ethylene's HOMO–LUMO gap
  2|β| with β = −75 kJ/mol, and the photon wavelength it implies); 10.6 (the allyl
  radical: x³ − 2x = 0, levels α + √2β, α, α − √2β, E_π = 3α + 2.83β and its
  delocalization energy 0.83β); 10.7 (cyclobutadiene: levels α + 2β, α, α, α − 2β,
  E_π = 4α + 4β, zero delocalization energy and two unpaired electrons, so not
  aromatic).

## Figures, in book order (root rules 14, 24, 25, 26, 28)

The point named is what the reader should see before reading anything. Rule 14 as
rewritten today: a figure starts from the book's and usually replaces it; motion
where the idea moves; a point seen at once; little effort to read; folds where the
book draws one scene several times. Sign of a wavefunction in the house's
diverging sign colours (the book's red/blue, orange/teal and the like are not
facts); atoms through `F.el`.

| Number | Section | What the book shows | Proposed treatment |
|---|---|---|---|
| 10.1.1 | 10.1 | PNG (no credit): F₂'s Lewis structure | **Keep, still**: a structure the text points at; nothing varies. |
| 10.1.3 + 10.1.7 + 10.1.8 | 10.1 | JPGs (no credit; the Averill–Eldredge figures): 2s + 2p → sp; 2s + 2p_x + 2p_y → sp²; 2s + three 2p → sp³, each with "hybrids shown together" | **Fold, replace, still, mathematical 3D** (lobes and the angles between them are an arrangement in space, rules 24.8 and 28.3): a choice of set (sp, sp², sp³) and a slider for the s share of one hybrid, from pure p to the set's value (dashed specials at ½, ⅓, ¼); the selected hybrid as a point cloud coloured by sign (`F.space.points` with per-vertex colour, 3.9's and 6.6's decision), the set's other hybrids drawn faint at their directions, the nucleus marked. **Point: adding s to p swells one lobe and shrinks the other, so a hybrid points one way; the set's equivalent hybrids point to the ends of a line, the corners of a triangle or of a tetrahedron, 180°, 120°, 109.5° apart.** Readout the hybrid as a sum ((10.1.18), (10.1.24), (10.1.25)) with live coefficients and its s character. Hydrogen-like 2s and 2p with one exponent (said in the caption). Free orbit, no buttons. Eyebrow "Figure 10.1.3 + 10.1.7 + 10.1.8"; originals shipped. |
| 10.1.4 + 10.1.5 + 10.1.6 | 10.1 | PNGs (no credit): BH₃ on x–y axes; p_y rotated by −30°; −p_y rotated by +30° | **Fold, replace, still, 2D** (variation: the angle): BH₃'s frame with a p orbital in the plane, a slider for its rotation (−90° to 90°, specials at ∓30°) and a choice of starting lobe (p_y, −p_y); the rotated orbital drawn with its two components, p_x and p_y, scaled by sin and cos. **Point: a p orbital turned in the plane is a mix of p_x and p_y with weights cos θ and sin θ, which is how the sp² hybrids are aimed.** Readout (10.1.20)/(10.1.21) with the live angle. The H positions as printed (second and third quadrants) with a footnote (below). Eyebrow "Figure 10.1.4 + 10.1.5 + 10.1.6". |
| 10.2.1 + 10.2.2 + the second 10.2.4 | 10.2 | BMP (CC BY-NC-SA; Nick Greeves, ChemTube3D): three p orbitals on perpendicular axes; PNG (CC BY-SA 3.0, Booyabazooka): water's 104.45° and 0.9584 Å; GIF (no credit): water with its two lone-pair lobes | **Fold, replace, still, mathematical 3D** (an angle and lone pairs out of the plane: rule 24.8): water's O with its four hybrids as clouds, the two H atoms (`F.el`) on the bonding pair, a slider for the bonding hybrids' s character (0 to 50%, specials at 0 (pure p, 90°, 10.2.1's case), 20% (water), 25% (sp³) and 50% (sp, Example 10.2.1's CO₂)); the bond angle opens by cos θ = −γ², the lone-pair hybrids take what s is left (p characters add to 3) and swing to their own angle. **Point: more s character opens the angle; water's 104.5° means 20% s in each O–H hybrid, and the s left over goes to the lone pairs, which spread to about 115°.** Readout cos θ = −γ², the s and p characters of both pairs, the lone-pair angle. Opens on 104.45°. Free orbit, no buttons. Eyebrow "Figure 10.2.1 + 10.2.2 + 10.2.4" (the second 10.2.4; orchestrator, below); the BMP shipped as a PNG with its credit. |
| the first 10.2.4 (cited as 10.2.3) | 10.2 | GIF (no credit): a box diagram, 2s²2p² → four half-filled sp³ | **Keep, still**, as printed: it is carbon's diagram (two 2p electrons, four singly filled hybrids), not oxygen's 2s²2p⁴, and its caption ("leave the 2s and 2p_z … for the two lone pairs") describes the unhybridized model: a footnote (9.12.13's precedent). |
| Example 10.2.1's image | 10.2 | PNG (no credit; Wikipedia, public domain): CO₂ ball and stick | **Keep, still**, inside the example: the linear molecule the solution reads its 180° from. |
| 10.3.1 + 10.3.4 | 10.3 | GIF (no credit): the six orbitals of linear AH₂ with lobe pictures and labels; GIF (public domain): Walsh's AH₂ diagram, 90° to 180° | **Fold, replace, still, 2D** (variation: the angle; no clock, so no transport): a Walsh diagram computed live by a small extended-Hückel model of AH₂ (parameters ours and named, 9.12.4's precedent), the H–A–H angle on a slider (90°–180°), each level's orbital drawn beside it as signed lobes that reshape as the molecule bends, and a choice of molecule by valence electrons (BeH₂ 4, BH₂ 5, CH₂ 6, NH₂ 7, H₂O 8) filling the levels; the sum of occupied energies drawn against the angle with its minimum marked. **Point: bending sinks one orbital (linear 1π_u, bent 3a₁) steeply; with four electrons it stays empty and BeH₂ is straight, with eight it fills and water bends.** Readout the HOMO and the total of the occupied energies at the current angle. Opens on H₂O at 104.5°; at 180° the six levels are 10.3.1's. Eyebrow "Figure 10.3.1 + 10.3.4"; 10.3.1's labels corrected through the row (below). |
| 10.3.2 + 10.3.3 | 10.3 | PNGs (no credit): the two H combinations matched with Be's 2s and 2p_z; BeH₂'s MO diagram, filled, with lobe pictures | **Fold, faithful copy, still**, in the house level-diagram style: the pairings drawn beside the levels they make (one scene drawn twice); nothing varies that 10.3.1 + 10.3.4 does not already. Originals shipped. |
| 10.3.5 (first) + 10.3.5 (second) | 10.3 | PNG (CC BY-SA 3.0, Officer781 via Wikipedia): water's MO diagram from O's AOs and H₂'s σ, σ*; PNG ("Image from Anna Krylov (USC)", no licence): nine computed orbitals of water | **Fold, replace, still**: the MO diagram flat (house style, symmetry colours as labels), and beside it the chosen orbital as a mathematical 3D point cloud built from Table 10.3.1's LCAO coefficients (O 2s, 2p and H 1s functions), a choice of orbital (1a₁ … 2b₂ in the table's labels, with the figure's labels beside). **Point: orbitals mix only within one symmetry label; 1b₁ has no partner and stays a pure O p orbital out of the plane, while the a₁ and b₂ orbitals spread over all three atoms.** Readout the orbital's coefficients and energy. Free orbit, no buttons. The Krylov original is not shipped (no licence); Officer781's shipped with its credit. The two printed 10.3.5s become one figure (orchestrator, below). |
| Table 10.3.1 | 10.3 | energies and LCAO coefficients | Kept as `div.book-table`; footnote on its labels (below). |
| 10.4.1 | 10.4 | SVG (CC BY 4.0, Kaya): He lamp, sample, hemispherical analyzer, slits, detector, pumps | **Replace, moving** (the dashed electron path is a kinematic arrow, rule 24.1, so the floor is moving): photons leave the lamp, electrons leave the sample at KE = hν − IE and fly through the analyzer's field; a slider for the analyzer's pass energy bends their paths, and only electrons of that energy reach the exit slit; the count builds against pass energy below. **Point: the analyzer is a filter for kinetic energy; sweeping it lets each group of electrons through in turn, and their counts are the spectrum.** Readout KE = hν − IE for the group passing. 2D. Originals shipped. |
| 10.4.2 + 10.4.4 | 10.4 | SVGs (CC BY 4.0, Kaya): H₂ and H₂⁺ potential curves with the 15.4 eV vertical arrow and the band drawn sideways; harmonic neutral and ion curves, vertical and adiabatic arrows | **Fold, replace, still, 2D** (variation): the neutral's and the ion's potential curves with their levels, a slider for how much longer the ion's bond is, the neutral's v″ = 0 density projected straight up onto the ion's levels, and the resulting band drawn sideways as sticks (Franck–Condon overlaps computed in the figure); vertical (tallest stick) and adiabatic (v′ = 0) ionization energies marked. **Point: the more the bond lengthens on ionization, the longer the vibrational progression and the farther the vertical energy sits above the adiabatic one; with no change there is one peak and the two coincide.** Readout IE(vertical) − IE(adiabatic). Opens on H₂ (R 74 → 106 pm; Huber–Herzberg constants named). Eyebrow "Figure 10.4.2 + 10.4.4". |
| 10.4.3 + Example 10.4.1's and 10.4.2's images + 10.4.5 + 10.4.6 + 10.4.7 + 10.4.8 | 10.4 | SVGs (CC BY 4.0, Kaya): Koopmans' ladder; H₂'s and N₂'s MO diagram beside its spectrum; HCl's diagram; HCl's spectrum; water's diagram; JPG (no credit, a scanned spectrum, mislabelled "1b_u"): water's spectrum | **Fold, replace, still, 2D** (variation: photon energy and molecule; the scene the book draws four times): the occupied MO ladder of the chosen molecule (H₂, N₂, HCl, H₂O) on the left, the spectrum on the right sharing its energy axis, a slider for the photon energy (10–45 eV, specials at He I 21.22 and He II 40.8 eV). Each orbital whose ionization energy is below hν adds its band at IE = −ε (Koopmans), with its vibrational progression long for bonding and short for nonbonding orbitals; water's two lone pairs appear as two bands, the VB picture's prediction drawn dashed for comparison. **Point: the spectrum is the orbital diagram turned on its side: one band per occupied orbital, and only those the photon can reach.** Readout I_j = −ε_j for the band under the cursor, and the Hartree–Fock against measured values from the page's table for water. Data: the page's table; N₂, H₂, HCl ionization energies from the figures (named). The scan 10.4.8 is not shipped (scans not shipped); the Kaya SVGs ship in `originals`. Eyebrow "Figure 10.4.3 + 10.4.5 + 10.4.6 + 10.4.7 + 10.4.8". |
| table (no caption) | 10.4 | Hartree–Fock and measured energies of water | Kept as `div.book-table`, unnumbered. |
| 10.5.1 | 10.5 | SVG (CC BY-NC, Kaya): (a) ethylene's σ framework from sp² and H 1s; (b) the π bond from 2p_z | **Replace, still, mathematical 3D** (a plane and what lies above and below it): ethylene's nuclei (`F.el`) with a choice of framework, σ (the five bonds' densities in the plane) or π (the 2p_z pair's cloud above and below), coloured by sign. **Point: the σ bonds lie in the molecular plane and the π electrons above and below it, on the σ framework's nodal plane, which is why the two can be treated apart.** Free orbit, no buttons. |
| 10.5.2 | 10.5 | SVG (CC BY-NC, Kaya): 2s + 2p_x + 2p_y → three sp², 2p_z unchanged | **Keep, still**: the mixing itself is 10.1's figure, cited. |
| 10.5.3 | 10.5 | SVG (CC BY-NC, Kaya): σ and π levels of ethylene | **Faithful copy, still**, house level-diagram style. |
| 10.5.4 + 10.5.5 | 10.5 | SVGs (CC BY-NC, Kaya): α, π₁ (filled) and π₂; π and π* with coefficients ±0.707, 0 and 1 node | **Fold, replace, still, 2D** (variation): a slider turns the mixing of the two p orbitals, ψ = cos t φ₁ + sin t φ₂, from in phase through one alone to out of phase; the two lobes are drawn with their sizes and signs, and the energy ⟨E⟩ = α + β sin 2t is traced against t with α ± β marked as specials. **Point: of all mixtures of the two p orbitals the in-phase one has the lowest energy, α + β, and the out-of-phase one, with a node, the highest, α − β: these are Hückel's two orbitals.** Readout ⟨E⟩ with the live coefficients (α, β left as symbols with β's typical −75 kJ/mol). Eyebrow "Figure 10.5.4 + 10.5.5". |
| 10.5.6 | 10.5 | PNGs (no credit; Wikipedia, Ben Mills, public domain): computed HOMO and LUMO of ethylene | **Keep, still**: computed pictures the text points at. |
| trans-butadiene | 10.6 | PNG (no credit; Wikipedia, public domain) | **Keep, still**: the structure the section names. cis is not drawn (Exercise 10.6.1 asks for it). |
| 10.6.1 + 10.6.3 | 10.6 | PNG (public domain, Ben Mills): computed π orbitals with the filled ladder; SVG (CC BY-NC, Kaya): Hückel levels with coefficients and the sine envelope, 0–3 nodes | **Fold, replace, still, 2D** (variation by choice: a chain is a discrete state): a choice of chain length (ethylene, allyl, butadiene, pentadienyl, hexatriene … 2 to 8 carbons), the Hückel levels α + 2β cos(kπ/(n + 1)) with one π electron per carbon filled, and beside each level its orbital as p lobes on the carbons, sized and signed by the coefficients, the sine envelope drawn through them. **Point: each level up adds one node and the coefficients follow a particle-in-a-box sine; filling the lower half gives a π energy below that of n/2 separate double bonds, the delocalization energy.** Readout E_π, the delocalization energy in β and in kJ/mol (β = −75 kJ/mol), and the HOMO–LUMO gap. Opens on butadiene (1.618, 0.618; 0.37, 0.60). Eyebrow "Figure 10.6.1 + 10.6.3"; originals shipped. |
| 10.6.2 | 10.6 | SVG (CC BY-NC, Kaya): four resonance structures of butadiene | **Keep, still**, inside its note. |
| 10.7.1 | 10.7 | PNGs (public domain; Benjah-bmm27, Edgar181): space-filling benzene and cyclobutadiene | **Keep, still**: the text points at them. |
| 10.7.2 | 10.7 | PNG (no credit): Kekulé's two structures | **Keep, still**, inside its note. |
| 10.7.3 | 10.7 | PNG (CC BY-NC-SA 4.0, Nick Greeves, ChemTube3D): benzene's six π orbitals, the two degenerate pairs | **Replace, moving** (the filling is a sequence; each step a state the transport reaches exactly, 9.7.4's precedent): a choice of ring (C₃ to C₈, opening on benzene) whose Hückel levels α + 2β cos(2πk/n) sit at the corners of the ring polygon inscribed in a circle (the Frost circle), each level's orbital beside it as signed lobes on the ring; the transport drops π electrons in one by one (Aufbau, Pauli, Hund), and the readout flags each closed shell. **Point: a ring's levels come in degenerate pairs above a single lowest one, so shells close at 2, 6, 10 … electrons: Hückel's 4n + 2 rule, with benzene's six filling three bonding orbitals.** Readout E_π and the delocalization energy against isolated double bonds. Eyebrow "Figure 10.7.3"; original shipped. |
| 10.7.4 | 10.7 | GIF (CC BY-NC-SA 4.0, William Reusch): heats of hydrogenation, kcal/mol | **Faithful copy, still**, house style with the book's kcal/mol numbers (28.6, 55.4, 49.8, 85.8): a ladder the reader reads, nothing varies. Original shipped. |

### What moves in this chapter

Electrons through the analyzer (10.4.1) and π electrons filling a ring's levels
(10.7.3). Everything else answers sliders and choices and is still: the hybrids,
the rotated p orbital, water's angle, the Walsh diagram, the Franck–Condon band,
the spectrum from orbital energies, the mixing of two p orbitals, the chain.

### 3D

Four mathematical scenes, point clouds coloured by sign (3.9's and 6.6's
decision) through `F.space.points` (per-vertex colour), free orbit, no buttons:
the sp, sp², sp³ hybrids (10.1.3 fold), water's four hybrids and its bond angle
(10.2 fold), water's orbitals from Table 10.3.1 (10.3.5 fold), ethylene's σ and π
frameworks (10.5.1). Nothing is physical 3D.

### New simulations proposed (root rule 15)

None beyond the replacements: the brief's moving ideas (hybrid mixing, the Walsh
bend, a spectrum from orbital energies, chain and ring levels, delocalization
energy) all replace a book figure above. Considered and not offered: a cis/trans
butadiene choice (it answers Exercise 10.6.1), a free-electron model beside Hückel
(10.5 names it once, nothing to hang it on), a He I / He II comparison (the photon
slider does it).

## Derivation candidates (root rule 29)

Score = facts imported from outside the section's method + the longest run of moves
the book does not print + joins of independent lines. A block the book prints as
equations with words qualifies whatever its score.

| Where | What | Printed? | Score | Decision |
|---|---|---|---|---|
| 10.1, (10.1.3) → ψ_u = 0 | the node of ψ_u | two lines, a substitution | 0 | Stays. |
| 10.1, (10.1.6)–(10.1.18) | the sp hybrids from normality and orthogonality | block with words | qualifies | **Build**: *Derivation · the sp hybrid orbitals*, ending at (10.1.18); facts the orthonormal 2s and 2p_z, the equal-s assumption. Node notes: "insert (10.1.17) into (10.1.16)" ((10.1.14)); b₁ = −b₂ needs (10.1.13) as well as (10.1.16). |
| 10.1, (10.1.20)–(10.1.24) | the rotated p orbitals and the sp² coefficients | rotations printed; "carrying out the algebra" skipped | qualifies (printed block), and the skipped solve scores 1 + 5 + 2 = 8 | **Build** one record: *Derivation · the sp² hybrid orbitals*, from the rotations (10.1.20), (10.1.21) through the conditions (10.1.23) to (10.1.24); the skipped lines inserted (a = 1/√3, b = √2/√3, c = 1/√3, d = 2/√6). Node note: (10.1.22) names a, b, c and not d. |
| 10.1, (10.1.25) | the sp³ set | stated | – | Stays (no work printed or hidden that is announced). |
| 10.2, (10.2.3)–(10.2.7) | normalizing N(p + γs), the characters | block with words | qualifies | **Build**: *Derivations · the s and p character of a hybrid*, ending at (10.2.5), (10.2.6), (10.2.7). Node note: (10.2.7) squares γ² for γ. |
| 10.2, (10.2.8) cos θ = −γ² | "using some simple trigonometric relationships, it can be proven" | hidden | 3 (a p orbital along a direction as a combination of p_x, p_y, p_z (10.1.20); ⟨p_a|p_b⟩ = cos θ from orthonormal p's; the hybrids' orthogonality (10.1.10)) + 4 + 1 = 8 | **Build** after the paragraph: *Derivation · the bond angle from the hybrids*: ⟨χ₁|χ₂⟩ = N²(cos θ + γ²) = 0. Every fact is in 10.1, so nothing is invented. |
| 10.2, water's γ, 80/20, 115° | numbers into (10.2.6)–(10.2.8) | substitution | 0 | Never a derivation; corrections (below). |
| 10.3 | the LCAO simplification | prose | 1 | Stays. |
| 10.4, (10.4.2)–(10.4.6) | KE = hν − IE from energy conservation | block with words | qualifies | **Build**: *Derivation · the kinetic energy of a photoelectron*, ending at (10.4.5) and (10.4.6); facts E = hν (1.2), a free electron's energy is kinetic. |
| 10.5, (10.5.1)–(10.5.6) | the 2 × 2 secular equations and determinant | block with words | qualifies | Not rebuilt: 7.2 builds them (`7.2/secular`); the text cites it (repeated material). |
| 10.5, (10.5.7)–(10.5.11), N = 1/√2 | Hückel's ethylene: x, x² − 1 = 0, E = α ∓ β, c₁ = ±c₂, the normalization | block with words | qualifies | **Build**: *Derivations · the π orbitals of ethylene*, ending at the energies and (10.5.10), (10.5.11); the secular determinant links 7.2's (`drv`). Node notes: "the higher energy molecular orbital (x = −1)" (x = +1); the kets missing their bars. |
| 10.6, (10.6.3)–(10.6.13) | butadiene's determinant, x⁴ − 3x² + 1 = 0, the energies, E_π, the delocalization energy | block with words; the expansion skipped | qualifies | **Build** one record: *Derivation · the delocalization energy of butadiene*, the cofactor expansion inserted, ending at 0.472β; ethylene's 2(α + β) links 10.5's derivation. Node notes: "H_ii − ES_ii = α" (α − E), "0.48β" (0.472β), "(10.6.12) with (10.6.12)". |
| 10.6, (10.6.14)–(10.6.17) | the coefficients, "not demonstrated" | hidden | 1 (normalization) + 4 + 0 = 5, four moves per orbital | **Build**: *Derivations · the π orbitals of butadiene*, one node per orbital (each x into the secular equations, the ratios, the normalization); kept separate from the energies' record since its ends differ. Node note: the second orbital printed as ψ₃. |
| 10.7, (10.7.1) and its roots, (10.7.2), ΔE = 2β | benzene's determinant, roots, E_tot, the delocalization energy | roots stated; the rest a printed align | 1 + 4 + 0 = 5 for the roots, the rest printed | **Build** one record: *Derivation · the delocalization energy of benzene*, the expansion (x² − 4)(x² − 1)² = 0 inserted, ending at 2β; ethylene's 2(α + β) links 10.5's. |
| 10.7, the six printed wavefunctions | stated | – | – | Stay as printed, with corrections (ψ₂ and ψ₄ are not solutions). |

Built: 9 records (10.1 ×2, 10.2 ×2, 10.4, 10.5, 10.6 ×2, 10.7).

## Corrections spotted (root rule 13)

- **intro**: none.
- **summary**: "We've discussed brute-force ab-initio methods … tradeoffs inherent in
  calculations" (Chapter 11, not this chapter).
- **10.1**: "noramlization"; "The example considered above of H₂O" (water has not
  come up; it is 10.2's); (10.1.2) prints ψ_{1s}{B} for ψ_{1s}^{B}; (10.1.4) a
  stray ")" and no normalization constant; "combine the into"; "Insert Equation
  (10.1.17) into (10.1.16)" ((10.1.14)); (10.1.22) "the coefficients a, b, and c"
  (and d); "promote one of the 2s orbitals" (electrons); "cos α sin β" set as
  italic letters ((10.1.20)'s identity); BH₃: "the remaining hydrogen atoms would
  be in the 3rd and 4th quadrants" (Figure 10.1.4 draws them in the 2nd and 3rd),
  and the hybrids (10.1.24) point at 180° and ±60°, not at Figure 10.1.4's H atoms
  at 0° and ±120° (the p terms' signs reversed would); the summary's "valecies",
  "2 sand 2patomic".
- **10.2**: "atomic oxygen atom"; Figure 10.2.1's credit "CC-SA-BY-NC" (BY-NC-SA)
  and "perpendicular axis"; the first printed "Figure 10.2.4" is cited as 10.2.3,
  shows carbon's 2s²2p² box diagram, and its caption gives the lone pairs "2s and
  2p_z" (2s and 2p_x in the p-only model); "VSPER"; "and and"; "So there there";
  "For a pure sp³ hybrid, γ would be 0.25" (γ² = 1/3, γ = 0.577; 25% is its s
  character); "substituting … into to get"; "constitute atomic orbitals"; (10.2.7)
  squares (γ²/√(1 + γ²)) (γ); "it related"; "apply Equation (10.2.7) to water"
  ((10.2.8)); "= 0.80%" (0.80, 80%); "This are not"; the lone pairs' "−γ² =
  1/(0.7 − 1) = −0.42" (γ² = 1/0.7 − 1 = 0.43; the 115° is right).
- **10.3**: "possible 2p", "molecule orbitals"; (10.3.2) and "the two coefficients
  … are the same by symmetry" hold only for the σ_g orbitals: with 2p_z the H
  coefficients have opposite signs; the note's "how quickly the 2s orbitals"
  (decay) and "the relative magnitude of H₁ compared to H₂" (of A's and H's
  orbitals); χ₁ "purely bonding because the 2s orbital is positive near the A
  nucleus, but becomes negative …"; "garade" (×2), "ungarede"; χ₆ "denoted as 2σ_u
  … also even" (3σ_g, gerade, as its form shows); χ₂ "a bonding orbital … This is
  purely antibonding" (bonding) and printed with equal H coefficients; χ₅ "we denote
  this as 2σ_g" (3σ_u, antibonding; also printed with the bonding sign pattern);
  "from X" (A); Figure 10.3.1's top label 2σ_g (3σ_g); "Consider the BeF₂ molecule"
  (BeH₂); "with is no", "free orientals", "promote and electron"; "The next lowest
  orbital (2a₁) … a lobe pointing away from the two hydrogens" (3a₁); the
  configuration "(a₁)²(b₂)²(a₁)²(b₁)²" (1a₁²2a₁²1b₂²3a₁²1b₁², as 10.4 prints it);
  Table 10.3.1 leaves out O's 1s, so its 1a₁, 2a₁, 3a₁ are the figure's 2a₁, 3a₁,
  4a₁, and its energies (eV) carry no unit; two figures printed 10.3.5.
- **10.4**: "UPS using", "exam"; "provide some of the molecular orbitals detailed
  and specific quantitative information" (garbled); Example 10.4.1 "antibonding
  2σ_u*" (1σ_u*) and "ejecting from a range of stimulated vibrational energy
  levels" (the ion is left in a range of levels); Example 10.4.2 "Both 3σ_g and 2σ_u
  are weakly bonding and antibonding" (3σ_g weakly bonding, 2σ_u weakly antibonding)
  and "The 1σ_g orbital is not resolved" (2σ_g; 1σ_g is a core orbital); HCl: "the
  Cl 2s and 2p atomic orbitals" and "Cl 2p" ×3 (3s, 3p), "the 3σ* orbital" (4σ), "1p
  (or 1π) … the 3s bonding" (1π, 3σ), Figure 10.4.5's caption "interacts molecular
  orbitals strongly"; water: "the electronic configuration of the H₂O⁺ molecule"
  (H₂O), "As explained above, the deviations … orbital relaxation" (named here for
  the first time), "We tern", "in Figure 10.4.6" (10.4.8), "expected for the
  molecular orbitals in Figure 10.4.8" (10.4.7), "line valence bond theory", "bare"
  (bear), "the 2a₁ 1b₁ and 3a₁ … all have contributions from all three atoms" (1b₁
  is on O alone; 1b₂ does); Figure 10.4.8's label "1b_u" (1b₁) and "axes is";
  "ionzation" (×3), "photoelecton"; "The vertical ionzation energy is always greater
  than the adiabatic" (never less; equal when the geometry does not change).
- **10.5**: "hydrocarbones"; "the σ-bonding framework and the the σ-bonding
  framework" (π); the atomic-orbital expansion "a₁|2s⟩ + a₁|2p_x⟩ + a₁|2p_y⟩ +
  a₄|1s_a⟩" (a₁, a₂, a₃) and "|sp²₁⟩ = b₁… where {c_i}" ({b_i}); "Either describe";
  "(Figure 10.5.1; left) … (Figure 10.5.2; right)" (10.5.1(a), 10.5.1(b)); "often
  call"; "(i ≠ i)" (i ≠ j); "E = α −± 1 × β"; "For the higher energy molecular
  orbital (x = −1)" (x = +1); (10.5.10), (10.5.11) "N₁(φ₁⟩", "ψ₂⟩" (kets); Figure
  10.5.5's "Schemetic"; Figure 10.5.6's caption "(|\psi_1 \rangle\)" (broken maths:
  the builder sets it); the page's hidden MathML copy (dropped by the converter,
  below). Objectives hold a zero-width space in "Hü​ckel" (as in 3.5, 5.9, 8.6; the
  builder drops it).
- **10.6**: "two vinyl groups (CH₂=CH₂)" (CH₂=CH–); "can occupy either a cis or
  trans conformers"; |ψ_i⟩ = Σ c_ij|p_i⟩ (|p_j⟩); "H_ii − ES_ii = α" and "H_ij −
  ES_ij = β" (α − E and β; S_ij = 0 off the diagonal); "two localized double bond",
  "ethlyene", "(Figure 10.6.1)" for the valence-bond structure (10.6.2);
  "Comparing Equation (10.6.12) with Equation (10.6.12)" ((10.6.13)); "0.48β"
  (0.472β); "structure 2a dominates" (no structure is labelled 2a: the upper left);
  (10.6.15) labelled ψ₃ (ψ₂); "The solving"; "This is view three-dimensionally";
  Figure 10.6.1's caption "energies from Hückel theory" for a Hartree–Fock picture.
- **10.7**: "the general formula of CₙHₙ … you are most familiar with" (kept);
  Figure 10.7.1's credit link "Benjah-bmm27[ and ](…) Edgar181" (garbled); the
  note's "As discussed previously, that such a valence bond perspective results in
  a delocalization energy within a molecular orbital approach" (garbled); ψ₂ and ψ₄
  as printed are not solutions of (10.7.1) (½(φ₂ + φ₃ − φ₅ − φ₆) and ½(φ₂ − φ₃ +
  φ₅ − φ₆) are); "isolated p orbitals"; "extra stable for with"; "(Equation 10.7.2)"
  for 2β (the unnumbered display after it); the note "Hückel's Rule": "(4n+2)π
  electrons with n = 2, 6, 10" (4n + 2 = 2, 6, 10 for n = 0, 1, 2); the heats of
  hydrogenation in kJ/mol are the figure's kcal/mol values misconverted: 11.9, 23.9,
  35.9 kJ/mol (28.6, 57.2, 85.8 kcal/mol = 120, 239, 359 kJ/mol), "about 8.1 kJ
  mol⁻¹" (1.8 kcal/mol, 7.5 kJ/mol), "15 kJ mol-1" (36 kcal/mol, about 150 kJ/mol,
  agreeing with the −152 kJ/mol above); Figure 10.7.4's credit "William Resuch".

## Licences of the figures

Pages: 10.4 CC BY 4.0 at the source, shared BY-NC-SA; **10.6 CC BY-SA 4.0, shared
BY-SA** (the book's rule); every other section CC BY-NC-SA 4.0; the summary
untagged (the book's). Figures with credits: Ümit Kaya via LibreTexts CC BY 4.0
(10.4.1–10.4.7, the two example images) and CC BY-NC (10.5.1–10.5.5, 10.6.2, 10.6.3);
Nick Greeves, ChemTube3D, CC BY-NC-SA (10.2.1, printed "CC-SA-BY-NC"; 10.7.3, 4.0);
Booyabazooka CC BY-SA 3.0 (10.2.2); Officer781 via Wikipedia CC BY-SA 3.0 (the first
10.3.5); public domain (10.3.4; 10.6.1, Ben Mills; 10.7.1, Benjah-bmm27 and
Edgar181); William Reusch CC BY-NC-SA 4.0 (10.7.4). No credit (shipped under the
page's licence with `notes` saying the book gives none, Chapter 3's decision):
10.1.1, 10.1.3–10.1.8, the two 10.2.4s, Example 10.2.1's CO₂, 10.3.1–10.3.3, 10.5.6,
trans-butadiene, 10.7.2. On 10.6, the two Kaya figures are CC BY-NC on a BY-SA page:
they ship under their own licence and credit (orchestrator, below). **Not shipped**:
the second 10.3.5 ("Image from Anna Krylov (USC)", no licence) and 10.4.8 (a
scanned published spectrum, no credit: scans not shipped). 10.2.1 is a BMP and
ships converted to PNG.

## What is new to OmniStax here

- **Hidden markup in the source**: 10.5's page carries a MathML copy pasted from
  Wikipedia inside a `display:none` span, invisible on the live page, whose broken
  annotation the converter printed as "Ψ = 1 2 ( ϕ 1 + ϕ 2 ) \psi ={\dfrac …".
  Fixed in `tools/lt2md.py` (below).
- **Two figures printed with one number on one page** (10.2: two "10.2.4", the
  text citing 10.2.3 and 10.2.4; 10.3: two "10.3.5", both cited as 10.3.5).
  Proposed: 10.3's two fold into one Figure 10.3.5; 10.2's second folds into the
  hybrids figure (it is the "Figure 10.2.4" the text cites), and the first keeps its
  printed 10.2.4 with the text's "Figure 10.2.3" linking to it and a footnote
  (orchestrator).
- **A figure that draws another atom than its text** (the first 10.2.4, carbon's
  box diagram for oxygen): kept as printed with a footnote (9.12.13's precedent).
- **An NC figure on a BY-SA page** (10.6.2, 10.6.3): each image under its own
  licence (Example 9.1.1's precedent for an image's own licence); stated for the
  orchestrator.
- No new type: every quantity is energy, length, angle, wavefunction or operator;
  enthalpy (ΔH_hyd) is typed energy. 41 new symbols, 28 typed with macros.
  χ is a hybrid in 10.1–10.2 and an AH₂ molecular orbital in 10.3 (`redefines`);
  the Hückel α, β and x get their own keys (`alpha_H`, `beta_H`, `x_H`) beside the
  untyped α, β, x of other chapters; the book's V_ee, V_en, V_nn get keys of their
  own (`V_eeb`, `V_enb`, `V_nnb`) since `V_ee` prints V_{electron-electron}; E₁,
  E₂, E₃, E₄ are each ethylene's, butadiene's and benzene's levels in turn
  (`redefines` in 10.6 and 10.7).

## The chapter's answer to root rule 23

Molecular shape is usually taught as a list of labels: sp, sp², sp³, linear,
trigonal, tetrahedral. Here it should arrive as something the reader adjusts.
Pour s into a p orbital and one lobe swells: a direction appears, and three or four
such orbitals push apart to 120° or 109.5° (10.1). Slide water's s character and
its bond angle opens; at 20% s it lands on the measured 104.5°, and the lone pairs
take what is left (10.2). Bend an AH₂ molecule and watch one orbital fall: empty in
BeH₂, which stays straight, full in water, which bends (10.3). Turn up the photon
energy and the orbital diagram tips on its side into a spectrum, band by band;
water's lone pairs come out as two bands, not one, and the hybrid picture loses
(10.4). Then the π electrons: two p orbitals mixed in every proportion find α ± β
(10.5); a chain grows, its levels fill and gain nodes like a particle in a box, and
the electrons settle lower than separate double bonds would (10.6); close the chain
into a ring and electrons dropped in one by one close a shell only at 2, 6, 10:
benzene's six (10.7). The thread: every shape and every extra stability in the
chapter is an orbital energy moving as the geometry or the electron count changes.

## Tool changes made for this chapter

- `tools/lt2md.py`: `convert()` drops every element styled `display:none` before
  converting, as the live page hides it (10.5's hidden MathML and its broken
  annotation). Chapters 1–9 reconverted to a scratch folder: all 101 source.md files
  byte-identical (no page of Chapters 1–9 has such an element; the other four in the
  book are in 11.2, 12.13, 13.11 and 18.10, whose chapters are not converted yet).
  `tools/md2html.py` unchanged. Every maths string of the 9 Chapter 10 drafts, rows
  included, renders in KaTeX (673 strings, 0 errors).
