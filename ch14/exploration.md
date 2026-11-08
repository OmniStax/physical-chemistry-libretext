# Exploration: Chapter 14, Nuclear Magnetic Resonance Spectroscopy

Written 2026-11-08 from the converted pages (`python3 tools/fetch.py --media 14`, then
`python3 tools/convert.py 14`), every page read in full, the raw HTML checked where the
conversion was in doubt (14.5's `\nonumber`s, 14.7's mixed maths delimiters and its
undefined `\ref`s, 14.7's "Finding the states …" line, 14.9 and 14.E), and all 36 images
looked at. The landing page (11809) prints one paragraph (what NMR is, MRI): an
**`intro/` page** (root rule 21.1). **14.S** (550569, Crabtree's course notes, untagged)
is the **`summary/` page** (21.2). **14.E (13645) has no body** (title only): nothing is
routed from it (root rule 9), and no other N.E page of the book holds NMR exercises (the
full-book pass found bodies only in 19.E and 21.E).

This is the thinnest and most patched chapter so far. Of its nine section pages:

- **Three hold no text of their own.** 14.2 ("Magnetic Moments Interact with Magnetic
  Fields") and 14.3 ("Proton NMR Spectrometers Operate at Frequencies Between 60 MHz and
  750 MHz") both carry Zielinski's uncertainty-principle passage with its Exercise, the
  same text as 9.11 and 19.E, numbered here 14.2.1 and 14.3.1. 14.9 ("Second-Order
  Spectra Can Be Calculated Exactly Using the Variational Method") reads "under
  development" and nothing else. Precedent (9.11, 9.13, 9.16, 12.9): **not built and
  left out of `chapter.json`**; the stray exercise is already 1.9's card `e3` (printed as
  9.11.1 and 19.E.1), so 14.2.1 and 14.3.1 add no card; 1.9's `exercise_notes` should
  name them too in Chapter 14's pass (a Chapter 1 file: *orchestrator*).
- **14.1** is a single paragraph on electron spin (Blinder-style, CC BY-SA), whose only
  nuclear content is "The proton and neutron also have spin ½". Built: it is the book's
  page for its title, thin but real (rule 11).
- **14.4** is two sentences and a two-item list (B_x, B_y), unattributed.
- **14.5** is the opening of Franzen's chemical-shift notes (CC BY-SA): it promises "a
  full treatment of the chemical shift tensor and the relation to the NMR lineshape"
  and stops after the molecular contribution.
- **14.6** is Soderberg's *Organic Chemistry with a Biological Emphasis* section 5.5
  (headers "5.5A/B/C", "Example 5.6"–"5.10" with links to Soderberg's solution manual),
  23 images, the chapter's richest page.
- **14.7** is a Chemistry Stack Exchange thread (tag `source@…/questions/53478`): an
  accepted answer (Hamiltonian, matrix, eigenstates, selection rules, its own notes
  [1]–[5]), then two more answers (a note with a level diagram; the AX/A₂ diagrams; an
  "Advanced" note on the Liouville–von Neumann equation). Its equation citations "(4)",
  "(11)", "(12) to (13)", "10 and 11" are the answer's own numbering, which this page
  does not print.
- **14.8** is a ChemWiki module on the n + 1 rule with three molecules and ten images;
  a find-and-replace has turned "has" into "$H_a$s" five times.

The brief's map of the chapter (spin, moments in a field, Larmor precession, spectrometer
frequencies, shielding, shifts, coupling, equivalence, n + 1, second order solved
variationally) is therefore only partly printed: the Zeeman levels of a nucleus, the
spectrometer frequencies and the AB spectrum have **no page**. What the book does print
that reaches them: ν_L = γB_loc/2π (14.5), "the frequency with which a magnetic moment
precesses about a magnetic field" and ω = −γB₀ (14.7's note [2]), 100 MHz ≈ 2.4 T and
500 MHz ≈ 12 T (14.6's last paragraph), and the general two-spin Hamiltonian (14.7.3)
with ν₁ ≠ ν₂ before 14.7 sets ν₁ = ν₂. The figures below build on exactly those, so the
missing pages' ideas appear where the book's own equations stand, and nothing is
invented in prose.

Repeated material (built once where the book first works it, cited after): electron spin,
s, m_s, α and β (8.4, `sim-esr`, `sim-zeeman`), fermions, bosons and the Pauli principle
(8.5), the singlet and triplet spin functions (8.6), the addition of angular momenta
(8.8, S = s₁ + s₂, …), the linear variational method and secular determinant (7.2,
`secular`), angular-momentum commutation relations (6.3), the Bohr frequency condition
(13.1), selection rules and the transition moment (5.5). Each is a link (`class="xref"`,
`drv` from a derivation fact), never a second build.

## Pages

| Page | id | Licence | Authors (tags / page) | Headers (`<h2>`) | Ex | Exr | Fig | Img | Tab | Notes | Eq (numbered / displays) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| intro | 11809 | BY-NC-SA 4.0 | none (text is Wikipedia's NMR lead) | none: one paragraph | | | | | | | |
| 14.1 Nuclei Have Intrinsic Spin Angular Momenta | 13636 | **BY-SA 4.0** | none | none: one paragraph | | | | | | | 0 / 0 |
| 14.2 Magnetic Moments Interact with Magnetic Fields | 13637 | BY-NC-SA 4.0 | none | **stray**: Zielinski's uncertainty text, "Exercise 14.2.1" as a bold paragraph | | (1) | | | | | 1 / 1 |
| 14.3 Proton NMR Spectrometers Operate at Frequencies Between 60 MHz and 750 MHz | 13638 | BY-NC-SA 4.0 | none | **stray**: the same text, "Exercise 14.3.1" | | (1) | | | | | 1 / 1 |
| 14.4 The Magnetic Field Acting upon Nuclei in Molecules is Shielded | 13639 | BY-NC-SA 4.0 | none | none: one paragraph and a list | | | | | | | 0 / 0 |
| 14.5 Chemical Shifts Depend upon the Chemical Environment of the Nucleus | 13640 | **BY-SA 4.0** | Stefan Franzen | opening; The Chemical Shift; The Local Contribution; The Molecular Contribution | | | | | | | 0 / 5 (all `\nonumber`) |
| 14.6 Spin-Spin Coupling Can Lead to Multiplets in NMR Spectra | 13641 | BY-NC-SA 4.0 | Tim Soderberg (closing credit line) | 5.5A: The source of spin-spin coupling; 5.5B: Coupling constants; 5.5C: Complex coupling | | 5 ("Example 5.6"–"5.10", plain paragraphs, "Solution" links) | | 23 (`<p><img>`) | | | 0 / 0 |
| 14.7 Spin-Spin Coupling Between Chemically Equivalent Protons is Not Observed | 13642 | BY-NC-SA 4.0 (source: Stack Exchange, BY-SA) | Stack Exchange answerers (unnamed) | opening; ("Finding the states between which transitions occur", a paragraph); Selection rules; Notes and references | | | | 3 (linked images, two inside notes) | 1 (a LaTeX `array`) | 2 (untitled "Note"; "Advanced: Liouville–von Neumann Equation") + a pull-quote | 10 / 22 |
| 14.8 The n+1 Rule Applies Only to First-Order Spectra | 13643 | BY-NC-SA 4.0 | none | none | | | | 10 (`<p><img>`, one an image of a table) | | | 0 / 0 |
| 14.9 Second-Order Spectra Can Be Calculated Exactly Using the Variational Method | 13644 | BY-NC-SA 4.0 | none | **empty**: "under development" | | | | | | | |
| summary (14.S) | 550569 | none | Kyle Crabtree (precedent 13.S) | prose, a list of three reasons, then "Learning Objectives" (with "Skill goals") | | | | | | | |
| 14.E | 13645 | BY-NC-SA 4.0 | | **empty** | | | | | | | |

Credits: 14.5 Franzen (tag); 14.6 Soderberg (the page's closing line, which is a credit,
not text); 14.7 the Stack Exchange thread (the tag's URL in `notes`); the summary
Crabtree (13.S's precedent, the same course notes); the rest the book's (Larsen as
curator). No section has objectives or a closing "## Summary". 14.7's "Notes and
references" list is the answer's own footnotes, cited by superscripts [2]–[5] and
carrying physics (the Larmor frequency, the B₁ field): kept as the page's closing block
of the accepted answer, as 9.14 kept its References (its [1] is never cited, kept as
printed).

### The intro and summary pages

- **intro**: one paragraph, no header; one block, header proposed "Nuclei in a Field"
  (humanizer by the builder). No concepts (21.1).
- **summary (14.S)**: a paragraph, a three-item list, a sentence, then a chapter-level
  "Learning Objectives" box ("By the end of this chapter …", nine objectives, six skill
  goals) kept verbatim as a block (12.S, 13.S precedent). Several objectives name what no
  built page teaches: the commutation relations among Î², Î_x, Î_y, Î_z, the spectrometer
  frequency against the field (14.3 is stray), first-order perturbation theory for
  coupled protons, and the Rayleigh–Ritz treatment of second-order spectra (14.9 is
  empty). Kept as printed with one footnote saying so (13.S's Jablonski precedent). The
  paragraph's "NMR spectroscopy, and particularly NMR" (¹H NMR) gets a correction.

## Per section

- **14.1** One block, header proposed "Intrinsic Spin". Concepts (new): the proton and
  neutron have spin ½ and are fermions (`nucleon-spin`, axiom); spin and orbital angular
  momentum compared, the Earth analogy, s and m_s in place of ℓ and m, relativity needed
  for a full theory (`spin-orbital-analogy`, idea). Reinforces: electron spin, s, m_s,
  spin ½, α and β (8.4), fermion, boson, Pauli principle (8.5). Italic "spin",
  "fermions", "bosons" are reinforcements of 8.4/8.5's terms. No figure, no exercise.
- **14.2, 14.3** Not built (stray, above).
- **14.4** One block, header proposed "Shielded and Deshielded Nuclei". Concepts (new):
  the local magnetic field (`local-magnetic-field`, B_y here, B_loc in 14.5), shielded
  and deshielded nuclei (`nuclear-shielding`, `nuclear-deshielding`; the book's italic-free
  "shielded"/"deshielded" are the terms). The list's B_x (external field) names 8.4's
  `magnetic-field`. The last line ends without a full stop (as printed). No figure.
- **14.5** Book headers kept; the opening paragraph is its own block, header proposed
  "Why Shifts Matter". Concepts (new): shielding constant σ, B_loc = (1 − σ)B (a form of
  `local-magnetic-field`), the Larmor frequency ν_L = γB_loc/2π (`larmor-frequency`, which
  14.7's note [2] reinforces with the precession and ω = −γB₀), the chemical shift on
  the δ-scale, σ as three contributions, diamagnetic and paramagnetic parts, the Lamb
  formula, magnetic susceptibility χ, the molecular contribution (∝ 1/r³). Uses: γ
  (8.4's `gyromagnetic-ratio`), the Bohr radius (1.8), the probability density (3.4).
  The displays are all `\nonumber` (unnumbered). Bold "Bohr radius" is a use, not a term.
- **14.6** Book headers kept as printed ("5.5A: …", Soderberg's numbering: printed labels
  stay); the opening paragraph sits under "5.5A". Concepts (new): spin-spin coupling;
  singlet, doublet, triplet, quartet; the splitting diagram (skill); subpeak intensities
  from counting spin arrangements (1:1, 1:2:1, and 1:3:3:1 from the key of Example 5.6);
  the n + 1 rule (bold, empirical); equivalent hydrogens do not split each other; coupling
  through three bonds (and why O–H, N–H protons rarely couple); the coupling constant J
  in Hz with its ³J_a-b notation; J independent of the field; reciprocal coupling
  constants (bold); typical J ranges (sp³, trans, cis, geminal, ortho, meta, aldehyde);
  complex coupling; the doublet of doublets (dd); overlapping subpeaks (td → "quartet",
  2-pentanone's "sextet"); the multiplet; stronger magnets resolve more. Uses: chemical
  shift, shielding and deshielding (14.4–14.5). The five "Example 5.N" items are
  questions with no worked solution (a "Solution" link to Soderberg's manual): they are
  exercises (below), not examples; their images (triclosan, serotonin, Example 5.10's
  dione) go with them. The "Table 4" link (Soderberg's coupling-constant table, outside
  this book) is kept as a link.
- **14.7** Headers: the opening question paragraph is a block, header proposed "Why
  Equivalent Protons Don't Split"; the book's own line "Finding the states between which
  transitions occur" (a heading the page prints as a paragraph) is proposed as the next
  block's header in the book's words; "Selection rules" and "Notes and references" kept;
  the second answer's text after the note (AX, A₂) a block proposed "The AX and A₂
  Cases". The pull-quote "> the two transitions are degenerate …" becomes an untitled
  emphasis note (13.12's precedent). The untitled "Note" and "Advanced: Liouville–von
  Neumann Equation" kept as titled notes. The state table (a LaTeX `array`) stays as
  printed maths. Concepts (new): nuclear spin operators Î_i, Î_iz; the two-spin
  Hamiltonian (14.7.1)/(14.7.3); shift operators (italic "shift operators"/"ladder
  operators"); Î₁·Î₂ in shift operators; the Hamiltonian matrix (14.7.5); the triplet and
  singlet eigenstates with E₁–E₄; the Clebsch–Gordan series (bold) with M_I; the
  transition Hamiltonian Ĥ′ = ω′Îₓ; NMR selection rules ΔI = 0, ΔM_I = ±1; why
  equivalent protons show one line; magnetic against chemical equivalence; the AX and
  A₂ spin systems; the Liouville–von Neumann equation (bold); the coupling commuting with
  the pulsed magnetization. Uses: spin eigenvalues and α, β (8.4), singlet/triplet spin
  functions (8.6), angular momentum addition (8.8), the secular determinant (7.2),
  commutator (3.2) and commutation relations (6.3), selection rule and transition
  moment (5.5), the Larmor frequency (14.5, its note [2] reinforcing).
- **14.8** No header: two blocks proposed, "One Set of Neighbours" (the rule, molecules 1
  and 2) and "Several Sets of Neighbours" (from "To determine the multiplicity of a
  peak … more than one set"), through the humanizer by the builder. Concepts (new): the
  multiplicity of a peak (with Pascal's triangle); coupling to several sets, multiplicities
  multiplying (2 × 2 = 4, a "doublet of a doublet"); predicting a splitting pattern
  (skill, with J_trans > J_cis > J_gem). Reinforces: the n + 1 rule (the page restates it
  in bold-free prose with "Pascal's triangle"), subpeak intensities, the doublet of
  doublets, typical coupling constants. The page's "(see spin coupling)", "(see equivalent
  ligands)" are prose with no link. The title's "first-order spectra" is never defined on
  the page (the term appears in the summary's objectives): no concept is made from a
  title.
- **14.9** Not built (empty).

## Equation numbers

One number per display, from the converter's `n=`. Only 14.7 numbers anything:
(14.7.1) Ĥ, (14.7.2) Ĥ_freq, (14.7.3) Ĥ_freq with ħ = 1, (14.7.4) the equivalent-nuclei Ĥ
(its label `eq:5`), (14.7.5) the matrix (`eq:19`), (14.7.6) I⃗ = I⃗₁ + I⃗₂, (14.7.7) the
Clebsch–Gordan series, (14.7.8) M_I, (14.7.9) Ĥ′, (14.7.10) the selection rules; the
starred aligns are unnumbered, and the shift-operator display prints its own "(14)" on
both rows (the answer's number; the draft sets it once, see Tool changes). The text's
"equation (4)", "(11)", "(12) to (13)", "equations 10 and 11" cite the answer's
numbering: `[ref:eq:10]`/`[ref:eq:11]` name no label on the page (the draft prints the
bare 10 and 11). Each gets a footnote naming the display meant ((4) the Î_iz
eigenvalues; (10)–(11) the shift operators and their inverse; (12)→(13) the two rows of
Î₁·Î₂), and the builder links those displays. 14.5's five displays are `\nonumber`;
14.2/14.3's (14.2.1)/(14.3.1) are not built.

## Exercise count report (root rule 13)

Counted from the converted pages and the solution page the book links.

- **14.6's questions** ("Example 5.6"–"5.10", printed as paragraphs after the text they
  test, each with a "Solution" link to Soderberg's *Chapter 5 Solutions* on
  chem.libretexts.org): **5 printed** (5.6 has parts a and b). The linked page was
  fetched: it answers all five ("E5.6"–"E5.10"), four of them as images (now in
  `media/ch14/`: 6474-image267, 6476-image269, 6478-image271, 6480-image273,
  6482-image275), 5.6b and 5.10 with a sentence. So: **5 keyed through the book's own
  link, 0 unkeyed**, if the linked manual counts as the key (*new; orchestrator*);
  otherwise 5 unkeyed, available with AI solutions (2 explain or predict: 5.7, 5.8;
  3 sketch with a computation: 5.6, 5.9, 5.10). One key is wrong: E5.10 gives a
  "1,2,3,2,1 pentet" for H_b between two CH₂ groups with J_ab ≈ J_bc, where a triplet of
  triplets with equal J gives 1:4:6:4:1 (its tree counts distinct lines without the
  triplets' 1:2:1 weights): a correction under the card. 5.9 checked: H_b at 5.64 ppm ×
  300 MHz = 1692 Hz, ±10.5/2 ± 1.5/2 gives 1698.0, 1696.5, 1687.5, 1686.0 Hz, as the key
  prints (computed). 5.7's prompt names "triclosan" but draws a symmetric bis-phenol
  ether (two OH, two Cl); the key answers the drawn molecule (four signals): a footnote
  on the prompt (*from memory, unchecked*: triclosan is
  5-chloro-2-(2,4-dichlorophenoxy)phenol). 5.8's prompt comes through as "the / 1 /
  H-NMR" (a broken superscript at the source): the builder writes ¹H. Each stays in
  14.6 (it tests 14.6's ideas), kind `exercise`, `place: end`, its printed label
  "Example 5.N" as `source_number` (printed labels stay).
- **14.2.1, 14.3.1**: 2 printed, the stray uncertainty exercise; **routed to 1.9's
  existing card `e3`** (already printed as 9.11.1 and 19.E.1); no new card.
- **Worked examples**: none (the full-book pass's "no example and no exercise" missed
  14.6's questions, printed without boxes).
- **14.E**: empty; nothing routed.
- **In all**: 5 cards in this chapter, 5 keyed by the linked manual (1 key corrected),
  0 unkeyed; or 5 unkeyed if the manual is not taken as the key.
- **Proposed new: 9**, where a concept would otherwise have none:
  14.1 one (which of the electron, proton, neutron and photon are fermions, and the s and
  m_s values of a proton); 14.4 one (shielded or deshielded from given B_x and B_y);
  14.5 two (B_loc and ν_L for given B, σ and γ; δ of a proton 1200 Hz above TMS at
  400 MHz and its offset in Hz at 600 MHz); 14.6 one (the width in ppm of a quartet with
  J = 7 Hz at 100 and 500 MHz, and why it narrows); 14.7 two (E₁–E₄ and the two allowed
  transition energies for given ν and J; which of the six transitions ΔM_I = ±1 allows
  and why the singlet is dark); 14.8 two (the multiplicities and Pascal ratios of
  bromoethane's CH₂ and CH₃; the dd of a vinyl proton from given J_trans and J_gem, its
  four line positions).

## Figures, in book order (root rules 14, 24, 25, 26, 28)

Rule 14 as rewritten today: a figure starts from the book's and usually replaces it;
motion where the idea moves; a point the reader sees at once; little effort to read;
folds where the book draws one scene several times. The book's own numbers first:
1,1,2-trichloroethane (H_a 3.96 ppm, H_b 5.76 ppm, ³J = 6.1 Hz), methyl acrylate (H_c
6.21, H_a 5.95, H_b 5.64 ppm; ³J_ac 17.4, ³J_ab 10.5, ²J_bc 1.5 Hz), 100 MHz ≈ 2.4 T and
500 MHz ≈ 12 T (so γ/2π ≈ 41.7 MHz T⁻¹ from the book's own pair, used in place of the
literature 42.58 MHz T⁻¹; *unchecked literature value named only as the alternative*).
No image carries a number: every eyebrow is "Figure" (with originals) or "Sim". The
spin arrows (←, →, ↑↓) and transition arrows of the book's images are notation
(rule 24.1), never animated.

| Image(s) | Section | What the book shows | Proposed treatment |
|---|---|---|---|
| none | 14.1 | | No figure: the Earth analogy drawn would picture spin as rotation, which 8.4 warns against (rule 24.9). |
| none | 14.4 | | No figure: the two-line definition is carried by 14.5's Sim (B_loc against B). |
| none (Sim) | 14.5 | | **New Sim, moving, mathematical 3D** (`sim-larmor`): two nuclear moments ⟨μ⟩, a reference (TMS) and a shielded proton, **precessing** about the field (a real motion of ⟨μ⟩, 14.7's note [2]; the idea has a time, so it moves and takes the transport), drawn slowed by a stated factor (rule 28.4); the cone in 3D since the motion leaves any plane. Sliders: applied field B (1.4–17.6 T, i.e. 60–750 MHz, detents at the book's 2.4 T and 12 T) and the proton's σ (ppm). Beside the cones, a flat two-level ladder (α, β) whose gap hν_L opens with B (the "levels splitting with B₀" the book's 14.2 never prints, built only from ν_L and 13.1's ΔE = hν). **Point: a nucleus precesses at a rate set by the field it feels; shielding lowers that field and the rate, and the fractional difference, δ in ppm, is the same at every field while the difference in Hz grows with it.** Readout: B_loc = (1 − σ)B, ν_L = γB_loc/2π, δ = (ν − ν₀)/ν₀ × 10⁶ with live numbers and the slow-down factor. Free orbit within ±75° of the horizontal (end-on, the cone collapses); no spin, no zoom. Eyebrow "Sim". |
| 5173 (image058) + 5193 (image078) | 14.6 | 1,1,2-trichloroethane's measured spectrum with insets (H_a doublet 3.96, H_b triplet 5.76); the two splitting trees with 6.1 Hz marked | **Fold, replace, still, 2D** (variation: the magnet): the spectrum computed from the book's δ and J with a spectrometer slider (60–750 MHz, detents 100, 300, 500), a ppm axis on top and Hz-from-TMS below, the insets as live zooms with the 6.1 Hz gaps marked; a choice trichloroethane / methyl acrylate (the book's three δ and three J). **Point: chemical shifts stay put in ppm while the splittings, fixed in Hz, shrink on the ppm scale as the field grows, so a stronger magnet pulls crowded multiplets apart.** Readout: offset (Hz) = δ × ν₀, J (Hz) unchanged, the 12 ppm window in Hz (the book's 1200 and 6000 Hz). First-order lines only; at low field methyl acrylate's multiplets crowd, and the caption points to 14.7's AB figure for what a real spectrum then does. Opens on trichloroethane at 300 MHz (Example 5.9's TMS frequency). Eyebrow "Figure"; originals 5173, 5193. The closing paragraph on 100 vs 500 MHz links it. |
| 5175 (image060) + 5177 (image062) | 14.6 | splitting of H_a by one H_b (aligned / opposed arrows), of H_b by two H_a (four arrangements) | **Fold, replace, still, 2D** (variation: the number of neighbours) (`sim-splitting`): n (0–6) on a slider with detents; the neighbours' spin arrangements listed as the book's arrows, grouped by their net field, the tree splitting once per neighbour, the multiplet heights the row of Pascal's triangle. **Point: every arrangement of the neighbours' spins shifts the signal by its net field; arrangements that shift it equally stack, so n neighbours give n + 1 lines in the ratios 1:1, 1:2:1, 1:3:3:1 …** Readout: n + 1 and the intensity row, line positions δ ± kJ/2. Opens on H_a (n = 1, 3.96 ppm, 6.1 Hz); n = 3 is Example 5.6's quartet (its key's 1:3:3:1). Morphs between n (manim transitions), no clock: still. Eyebrow "Figure"; originals 5175, 5177. |
| 5179 (image064) | 14.6 | ethyl acetate's measured spectrum with insets | **Kept** (measured data the text reads: 1.833, 1.055, 3.915 ppm); the book gives no J for it. |
| 5181, 5183 | 14.6 | equivalent H_a1/H_a2 not split; ethyl acetate's five-bond gap | **Kept** (labelled structures the text points at; nothing moves or varies). 5181 links 14.7. |
| 5185, 5187 | 14.6 | shift and pattern labels on five small molecules | **Kept** ("Below are a few more examples": data, not a scene). |
| 5189, 5191 | 14.6 | triclosan (as drawn), serotonin with arrows | Exercise images (5.7, 5.8): in the prompts. |
| 5195, 5197 | 14.6 | typical ³J/²J/⁴J ranges on fragments | **Kept** (the text reads their numbers); 5197's "ortho-benzylic", "meta-benzylic" mislabel ring hydrogens: footnote at the paragraph. |
| 5199 (image084) | 14.6 | methyl acrylate's measured spectrum, insets, J box | **Kept** (measured; the J box gives the numbers the folds use). |
| 5201, 5207 | 14.6 | measured close-ups of H_c and H_b | **Kept** ("Here is a closer look", "a blow-up of the actual H_b signal"). |
| 5203 (image088) + 5205 (image090) + 5211 (image096) | 14.6 | H_c's dd tree (17.4, 1.5 Hz); H_a's dd tree (17.4, 10.5 Hz); 1,1,3-trichloropropane's H_b, "triplet of doublets becomes a quartet" | **Fold, replace, still, 2D** (variation: two couplings) (`sim-complex`): the tree for n₁ neighbours at J₁ then n₂ at J₂ (n₁ 1–2, n₂ 1–3; J's 0–20 Hz), the larger splitting first; presets H_c, H_a, H_b of methyl acrylate and H_b of 1,1,3-trichloropropane; a **special** at J₂ = J₁ (dashed circle, slight snap) where the subpeaks fuse and the morph shows a td turning into a quartet. **Point: two different couplings split a signal twice, the larger first; as the two J's approach, subpeaks overlap and the pattern looks like plain n + 1.** Readout: line positions and the count (n₁ + 1)(n₂ + 1), or n₁ + n₂ + 1 when equal. Example 5.9's dd and 5.10's quintet are states of it (the exercise keys stay the book's). Eyebrow "Figure"; originals 5203, 5205, 5211. |
| 5209, 5215 | 14.6 | 1,1,3-trichloropropane; Example 5.10's dione | 5209 **kept** (the structure the text names); 5215 in 5.10's prompt. |
| 5213, 5217 | 14.6 | 2-pentanone's and toluene's measured spectra | **Kept** (measured; the text reads the sextet and the overlapping aromatic multiplet). |
| 344398 (LCkBM) + 344400 (xeaC4) + 344399 (htKbC) | 14.7 | equivalent, uncoupled and coupled level sets with their lines; the AX level ladder (Zeeman, then J); the A₂ ladder with the dark singlet | **Fold, replace, still, 2D** (variation: the shift difference) (`sim-ab`): the four levels of two coupled spin-½ nuclei from (14.7.3), solved exactly (the 2×2 block of |α₁β₂⟩, |β₁α₂⟩, the linear variation of 7.2, linked), the ΔM_I = ±1 arrows, and the spectrum below with each line's intensity from |⟨f|Îₓ|i⟩|². Sliders Δν = ν₁ − ν₂ (0–200 Hz) and J (0–20 Hz); specials Δν = 0 (A₂: the outer lines vanish, the singlet goes dark, one line at ν) and J = 0 (no coupling, two lines). **Point: with the shifts far apart each nucleus gives a doublet split by J (AX); as they approach, the inner lines grow and the outer fade (the "roof"), and at equal shifts the doublets collapse into one line although the coupling still moves the levels.** Readout: the Hamiltonian matrix with live numbers (at Δν = 0 it is (14.7.5)), E₁–E₄, the line frequencies; at Δν = 0 E₄↔₂ = E₂↔₁ = ν. Opens on Δν = 0, the book's case. Eyebrow "Figure"; three originals (their auto-written alt texts, "forces and supports acting on a structure", are replaced by the builder). This is where 14.9's empty title is met by the book's own Hamiltonian; *orchestrator* (below). |
| 24857, 24858, 24859 | 14.8 | molecules 1, 2, 3 | **Kept** (the structures the text numbers "1", "2", "3"). |
| 24860 | 14.8 | an image of a 3 × 3 table (geminal/vicinal, coupling occurs) | **Transcribed** as a `div.book-table` (the book's words; an image of text), the image kept as its original. |
| 24861 + 24862, 24863 + 24864, 24865 + 24856 | 14.8 | for H_a, H_b, H_c of molecule 3: the coupling arrows "(n+1) = (1+1) = 2" and the "doublet of a doublet" tree with "peak if coupled to no / only one / both" | **Fold, replace, still, 2D** (variation: which proton) (`sim-vinyl`): a choice H_a / H_b / H_c; the molecule with the chosen proton's two partners joined by the book's (n+1) labels and their kind (cis, trans, gem); its tree split by the larger J first, the three stages labelled as the book labels them. J's from the same vinyl system in 14.6 (17.4, 10.5, 1.5 Hz, methyl acrylate; named in notes). **Point: each vinyl proton has two different neighbours, so each is a doublet of doublets; which coupling splits first follows J_trans > J_cis > J_gem.** Readout: multiplicity 2 × 2 = 4 and the four line offsets. Eyebrow "Figure"; six originals. *Orchestrator:* or cite 14.6's `sim-complex` (the trees are the same machinery; the scene with the molecule and its partners is new). |
| Table (LaTeX array) | 14.7 | states with I and M_I | Kept as printed maths. |

### Extra simulations proposed (root rule 15)

Only where motion or variation teaches (precedent). One survives, offered and not
recommended: **the pulse and the signal** (14.7's Liouville note): a magnetization tipped
into the xy-plane precessing, its free-induction signal traced beside, for A₂ (one
frequency, a clean decay) against AX (two frequencies beating). It shows the note's
claim that the coupling leaves the A₂ signal alone, but the book never teaches pulses or
the FID, so it would teach more than the page does. The Boltzmann excess of "slightly
more than half" (14.6) was judged and dropped: the book gives no number for it.

## Derivation candidates (root rule 29)

| Where | What | Score | Decision |
|---|---|---|---|
| 14.5, B_loc = B + δB = (1 − σ)B | one printed move | 1 move | Stays. |
| 14.5, σ_d ∝ 1/a₀ | "σ_d is inversely proportional to the Bohr radius": ρ = |ψ₁ₛ|², ∫ρ r dr ∝ ⟨1/r⟩ ∝ 1/a₀ | 3 moves; facts imported 2 (ψ₁ₛ, 6.2; the radial integral), unprinted run 3: score 5, but under four moves | Stays as printed. |
| 14.6, n + 1 lines and Pascal ratios | argued in prose by counting arrangements | no equations | Stays; `sim-splitting` shows it. |
| 14.7, (14.7.1) → (14.7.3) | divide by h, ω = 2πν, h = 2πħ, set ħ = 1 | printed, 2 moves | Stays (12.8.1 precedent for short printed blocks). |
| 14.7, (14.7.4) → (14.7.5) → E₁–E₄ → allowed lines | the I_z actions, shift operators, Î₁·Î₂ ("a fair bit of algebraic manipulation"), the shift actions "(14)", Ĥ on the four basis states ("left to the reader"), the matrix, its eigenvectors ("left to the reader"), the selection rules, the two transition energies | printed with words, and hidden runs; facts imported 3 (orthonormal α, β, 8.4; the secular determinant, 7.2; the selection rules from *J. Chem. Educ.* 1982, as the book cites), longest unprinted run 5 (the four Ĥ actions and the matrix), joins 1 (levels with selection rules): score 9 | **Build**: "Derivations · the levels and lines of two equivalent spins", results (14.7.5), E₁–E₄, the ΔM_I = ±1 transitions and E₄↔₂ = E₂↔₁ = ν. The secular-determinant fact links 7.2's `secular` (`drv`). Notes on the cited "(4)", "(11)", "(12)→(13)". |
| 14.7, "one can find that the selection rules are" (14.7.10) | ⟨f|Îₓ|i⟩ for the six pairs with Îₓ = (Î₊ + Î₋)/2 | hidden; 4+ moves, facts imported 1, run 4: score 5 | **Build** inside the record above (a branch ending at (14.7.10)). |
| 14.7, Liouville note: [Î₁χ + Î₂χ, J(Î₁·Î₂)] = 0 | "a bit lengthy but easy to show" | hidden; 5 moves (expand the dot product, commute spins of different nuclei, the cyclic relations [Î_x, Î_y] = iÎ_z, sum, cancel); facts imported 2 (6.3's commutation relations; operators of different nuclei commute), run 5, joins 0: score 7 | **Build**: "Derivation · the coupling commutes with the total spin", in the note. Fact links 6.3's commutation relations. |
| 14.8, multiplicity 2 × 2 = 4 | substitution | | Stays. |

Two derivation records to build, both in 14.7.

## Corrections spotted (root rule 13)

The book's words kept; a numbered footnote where each applies.

- **intro**: none (Wikipedia's lead, accurate).
- **14.1**: none of substance (spin is not literally a daily rotation, but the book says
  "analogous"; no footnote).
- **14.4**: "does not experience the external magnetic field": it experiences that field
  changed by the electrons' induced field (as the next sentence says); a short footnote.
  The list's last line lacks its full stop (as printed, no footnote).
- **14.5**: "exlusivley" (as printed); the opening promises a treatment of the
  chemical-shift tensor and lineshape, and σ_p and the solvent contribution, that the page
  never gives (footnote); "∫_o^∞" for ∫₀^∞ and "|Ψ²|" for |Ψ|² (footnote on the Lamb
  display); the chemical shift's standard is not named (TMS appears only in 14.6); no
  footnote.
- **14.6**: "1,1,2 trichloromethane" (trichloroethane); "These ideas an be"; "taller then";
  "the spectra that we have seen so far (of methyl acetate and para-xylene)" point at
  Soderberg's earlier section, not in this book (footnote); ³J_ab printed 10.5 Hz for
  H_a and 10.4 Hz for H_b (the figure's box says 10.5; footnote); image 5197 labels ring
  hydrogens "ortho-benzylic"/"meta-benzylic" (footnote at the paragraph); Example 5.7's
  "triclosan" is not the molecule drawn (footnote, *from memory, unchecked*); the E5.10
  key's 1:2:3:2:1 (1:4:6:4:1, under the card).
- **14.7**: the citations "(4)", "(11)", "(12) to (13)", "equations 10 and 11" (and the
  printed "(14)") use the Stack Exchange answer's numbering (footnotes mapping each);
  "the diagrams posted in the other answers" are the diagrams below on this page;
  "destabilsed"; note [4]'s "w′" for ω′; the A₂ paragraph's "the spin states are not
  either symmetrical or anti symmetrical to exchange" (they must be one or the other;
  footnote); note [1] is never cited (as printed); the bold "1982," is a reference, not a
  term (the builder writes it plain); the three images' alt texts describe something else
  (the builder writes new alt text; no footnote, since alt text is not the book's prose).
- **14.8**: "$H_a$s" for "has", five times ("1 H_as only one peak", "The peak H_as one
  line", "2 H_as two peaks", "The peak H_as three lines", "The peak H_as two lines"): one
  footnote at the first, cited at the others; "apply the (n+1) Rule independently to each
  other" (to each set); "1H" without its superscript (as printed).
- **summary**: "NMR spectroscopy, and particularly NMR" (¹H NMR); the objectives the
  built pages do not teach (one footnote, as above).

## Licences of the figures

| Figure | Credit as printed | Proposal |
|---|---|---|
| 14.6's 23 images and the five key images | none per image; the page credits Soderberg's book (CC BY-NC-SA, LibreTexts) | shipped under the page's licence |
| 14.7's three images | none; served from i.stack.imgur.com in a Stack Exchange thread (user content CC BY-SA) | shipped under CC BY-SA with the thread named (*orchestrator*: the page, below) |
| 14.8's ten images | none | shipped under the page's licence |

**New, orchestrator:** 14.7 is tagged BY-NC-SA but its text and images are a Stack
Exchange thread, which Stack Exchange licenses CC BY-SA; adding a non-commercial clause
is not allowed, so by the book's rule ("a page adapted from a CC BY-SA page stays BY-SA")
14.7 should be shared **CC BY-SA 4.0**, with the thread's URL (the page's `source@` tag)
in its notes. The landing page's paragraph is Wikipedia's NMR lead (CC BY-SA) on a page
tagged BY-NC-SA: the same reasoning makes the intro page BY-SA. 14.1 and 14.5 are tagged
BY-SA and stay BY-SA.

## What is new to OmniStax here

- **No new type.** The coupling constant J and the Larmor frequency wear `frequency`;
  B, B_loc, B_x, B_y, B₀, B_eff and δB `magnetic-field`; the nuclear spin operators and
  the Hamiltonians `operator`; E₁–E₄ `energy`; I⃗ `angular-momentum`. σ, δ, χ, μ₀, I, M_I
  and counts are untyped and in ink. `colours:default` not run.
- **Symbols**: 42 new (32 with macros); keys of earlier chapters reused for the same
  quantity (s, m_s, l and m_l (the book prints ℓ and m), α_s, β_s, γ, B, ν, ν₀, e, m_e,
  a_0, r, ρ_e, H_op, n, E₁–E₄ with new meanings per section). Collisions avoided with new
  keys: σ_d of 12.2 (`sigma_dia` here), J_c of 13.8 (`J_cc`), I₁/I₂ of 7.1 (ionization
  energies; `I_n1`, `I_n2` here), Ω of 9.14 (`Omega_cs`), σ (`sigma_sh`).
- **48 concepts, 73 edges** (Hasse-reduced against the merged book: 8 redundant edges
  removed before the final merge).
- **Measured spectra** are kept as data photographs; every computed spectrum opens on the
  book's δ and J.
- **External key**: a book page that links its own solution manual (14.6), fetched and
  stored in `media/ch14/` as images.

## The chapter's answer to root rule 23

An NMR spectrum is made of two numbers per proton, a shift and a set of couplings, and the
printed chapter shows the results of both without ever letting them move. The stunning
version lets the reader turn the magnet up and watch the two behave differently: the
shifts hold their places in ppm while every multiplet, fixed in hertz, tightens; add a
neighbour and the line splits into Pascal's next row; slide two couplings together and a
triplet of doublets becomes a quartet; finally slide two shifts together and watch the
roof grow until the doublets fuse into the single line that equivalent protons give,
which is the chapter's one piece of real quantum mechanics made visible. Under all of it,
two cones precess at a rate set by the field each nucleus feels: the only motion in NMR,
and the origin of every number on the axis.

## Tool changes made for this chapter

- `lt2md.py` repairs an inline-maths pair written half TeX and half dollar (14.7, pasted
  from Stack Exchange: "denoted \(E_i$)", "the \(z$-axis", "spin-$1/2\) particles"),
  which otherwise ran from one `\(` to the next `\)` and swallowed prose (the draft showed
  "\(x$-axis … $xy$" as one formula). The pattern is narrow (at most 20 characters, no
  `$`, braces or backslash inside), so the book's `\newcommand` blocks (14524) are not
  touched. Chapters 1–13 reconverted to a scratch folder with the old and new converter:
  all 154 source.md files byte-identical. (The committed `ch01/1.3/source.md` differs from
  both in one place, "*kinetic* *energies*" against "*kinetic energies*": an earlier
  converter change, not this one.)
- `md2html.py`: (1) a starred `align` whose rows print one and the same `\tag` (14.7's
  "(14)" twice) takes the tag once after the environment, since KaTeX's `aligned` refuses
  a `\tag` inside; (2) an en dash written for a minus (14.5's (1 – σ)) becomes "-", and the
  micro sign µ (14.5's µ₀) becomes `\mu`, both of which KaTeX has no metrics for. The
  drafts of Chapters 1–13 (139 pages) were regenerated with the old and new script: 130
  identical; 9 change (1.3, 3.7, 4.6, 5.9, 7.2, 8.7, 8.8, 8.11, 10.5), each only where an
  en dash stood for a minus inside maths, now "-" (built pages are not drafts; nothing
  built changes). With both fixes all 11 Chapter 14 drafts set every maths span under
  KaTeX in strict mode without an error.
- Not a tool change, for builders: 14.6 and 14.8's images come through as `<p><img>` (no
  figure rows; the builder makes them, as in Chapters 12–13); 14.7's linked images as
  `<a><img></a>`; 14.6's "Example 5.N" questions as plain paragraphs (the builder moves
  them to the exercises table).
