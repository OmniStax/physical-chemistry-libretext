# Exploration: Chapter 12, Group Theory - The Exploitation of Symmetry

Written 2026-11-08 from the converted pages (`python3 tools/convert.py 12`), every
page read in full against its raw HTML, the chapter's 55 images looked at (the two
BMPs converted to look at them). The landing page (11807) prints one paragraph of its
own (symmetry operations and elements, Cotton's definition) and no thumbnail credit:
an **`intro/` page** (root rule 21.1). **12.S** (550567, Crabtree) is the
**`summary/` page** (21.2). **12.9 Generating Operators (13492) has no body** (title
only): not built, and left out of `chapter.json` (Chapter 9's precedent for 9.13 and
9.16). **12.E (13483) has no body**: nothing is routed from it (root rule 9); no other
N.E page of the book holds group-theory exercises (the full-book pass found bodies
only in 19.E and 21.E). The two **12.T** pages are reference tables (below).

The chapter is a patchwork, which shapes everything else:

- **Vallance's lecture notes** (Oxford, "Molecular Symmetry, Group Theory and
  Applications") supply most of 12.2–12.8, 12.10, 12.12, 12.13 and 12.15, carrying
  their own numbering: explicit `\tag{11.1}`–`\tag{11.5}` (12.6), `\tag{24.1}`–
  `\tag{24.5}` (12.10), `\tag{27.5}` (12.13), `\tag{18.2}`, `\tag{19.1}`, `\tag{27.4}`
  and a broken `\text(18.1)` (12.15), labels `21.x`/`22.x`/`23.x` that the converter
  numbers as 12.8.K and 12.15.K, and prose citations "Equation (15.20)", "Equation
  16.1", "Section 9", "Section 18", "(21.3)", "Appendix B", "the next chapter".
- **12.11** and **12.12** are LaRue's worked ammonia pages; **12.13** and the second
  half of **12.15** are an older ChemWiki page on selection rules (Raman,
  fluorescence, phosphorescence); **12.14** is a whole ChemWiki module on SALCs
  (methods 1 and 2, five worked molecules, three problems with solutions, its own
  references and its own table numbers "Table 5/6/7").
- **Repeated material**: 12.15's "Summary of the Steps Involved in Constructing
  Molecular Orbitals" is 12.8's note again, with the same two displays; 12.15's C₂ᵥ
  character table is 12.10's; 12.11's ammonia Γ is 12.12's (with 12.12's error).
  Built once where the book first works it and cited after (precedent): 12.8's
  note and 12.10's table are the originals; the repeats stay printed as the book's
  words and link back.
- **Coordinate conventions differ between pages**: 12.10, 12.13 and 12.15 put water
  in the xz plane (asymmetric stretch B₁); 12.14's character table and its projection
  table put it in the yz plane (asymmetric stretch B₂), but 12.14's text and figures
  then say B₁. Both conventions are valid; 12.14's internal mismatch gets footnotes,
  and the figures say which plane they use.

## Pages

| Page | id | Licence | Authors (tags) | Headers (`<h2>`, `<h3>`) | Ex | Fig | Img | Tab | Notes | Eq (numbered / displays) |
|---|---|---|---|---|---|---|---|---|---|---|
| intro | 11807 | BY-NC-SA 4.0 | none | none: one paragraph | | | | | | |
| 12.1 The Exploitation of Symmetry Can Help Simplify Numerical Calculations | 13484 | BY 4.0 | Larsen, LaRue | none | | | 1 (Rubik's cube) | | | 4 / 8 |
| 12.2 Symmetry Elements and Operations Define the Point Groups | 13485 | BY 4.0 | Vallance, Larsen, LaRue | Symmetry Elements; Symmetry Operations (h3 Identity, Cₙ, σ, i, Sₙ, Summary); Defining the Coordinate System; Molecular Point Groups (h3 Nonrotational, Single-axis, Dihedral, Cubic, Summary of groups); Symmetry and Physical Properties; Summary | | 5 (12.2.1–12.2.5) | 12 (elements sketch, 10 group icons, flowchart) | 2 | 5 | 0 / 6 |
| 12.3 Symmetry Operations Define Groups | 13486 | BY 4.0 | Vallance | Properties of Groups (h3 Identity, Closure, Reciprocality, Associativity); Group Multiplication | | | 2 (σᵥC₃, C₃σᵥ) | | 1 | 5 / 5 |
| 12.4 Symmetry Operations as Matrices | 13487 | BY 4.0 | Vallance, LaRue | opening; The Identity Operation; The Reflection Operation; The n-fold Rotation Operation; The Inversion operation; C₂ᵥ Point Group; Matrix Representations and Groups | 1 (12.4.1 allyl, worked) | 1 (12.4.1) | 1 (allyl p orbitals) | 1 | | 5 / 13 |
| 12.5 Molecules can be Represented by Reducible Representations | 13488 | BY 4.0 | LaRue | none | | | 1 (NH₃ s basis) | | | 2 / 2 |
| 12.6 Character Tables Summarize the Properties of a Point Group | 13489 | BY-NC-SA 4.0 | LaRue | opening; Similarity Transforms; Character Tables; A simple way to determine the characters | | | | | 1 | 2 + 5 tagged / 7 |
| 12.7 Characters of Irreducible Representations | 13490 | BY-NC-SA 4.0 | Vallance, LaRue | Symbols of irreducible representations; complex characters; Groups and subgroups …; Reduce representations of infinite groups …; The direct product … | | | | 1 | | 2 / 5 |
| 12.8 Using Symmetry to Solve Secular Determinants | 13491 | BY 4.0 | none (Vallance's text) | opening; Secular Equations; Solving for the orbital energies and expansion coefficients | | | 2 (Ψ₁ Ψ₂; Ψ₃ Ψ₄) | | 2 | 20 / 21 |
| 12.9 Generating Operators | 13492 | BY-NC-SA 4.0 | | **empty** | | | | | | |
| 12.10 Molecular Motions … Reducible Reperesentation | 433871 | none | none (Vallance's text) | Determining the Symmetries of Molecular Motions | | | 2 (3N basis; water's modes) | | | 5 tagged / 5 |
| 12.11 Reducible Representations are Comprised of Irreducible Representations | 433848 | none | LaRue | none | | | | 8 | | 0 / 7 |
| 12.12 Normal Modes of Vibrations Describe how Molecules Vibrate | 433954 | none | Vallance | Normal modes of vibration; Molecular degrees of freedom; Symmetry | | | 2 (linear triatomic modes; NH₃) | 2 | | 0 / 0 |
| 12.13 Symmetry of Vibrations Describes their Spectroscopic Behavior | 433991 | none | Vallance, Larsen, LaRue | Vibrational transitions in molecules; Infrared Spectroscopy; Raman Scattering | | | 4 (Morse; level diagram; water + polarized light; Raman levels) | | | 1 tagged / 4 |
| 12.14 Symmetry Adapted Linear Combinations are the Sum over all Basis functions | 433984 | BY 4.0 | Larsen, LaRue | opening; Background; Constructing SALCs (h3 Method 1, h4 Normalization, h3 Method 2); Interpreting SALCs; Applications; Problems; References; Solutions to Practice Problems | 5 (12.14.1, 12.14.2, and three printed "2", "4", "3") | 13 (12.14.1–12.14.13) | 4 (two table images, problem 3, its solution) | 10 | | 8 / 31 |
| 12.15 Molecular Orbitals can be Constructed on the Basis of Symmetry | 433985 | BY 4.0 | Vallance | Bonding in Diatomics; Bonding in Polyatomics; Summary of the Steps …; A more complicated bonding example; A short aside …; Matrix representation, characters and SALCs; Electronic transitions in molecules (h3 Raman, Fluorescence, Phosphorescence, Symmetry) | 1 (printed "Rotation", worked) | | 5 (water axes; water MOs with energies; transition integral as an image; NH₃ + polarized light; water MO diagram) | | | 16 + 3 tagged / 21 |
| summary (12.S) | 550567 | none | Crabtree | Learning Objectives (with "Skill goals") then prose | | | | | | |
| 12.T Character Tables | 433853 | none | | 9 h2 families | | | | 46 | | |
| 12.T Correlation Tables | 433854 | none | | none | | | | 7 | | |

No page prints a Contributors list; credits come from the tags (12.8 and 12.10 have
none: the book's, Larsen as curator; the text is Vallance's, which `notes` may say).
Licences: 12.10–12.13, the summary and the 12.T pages carry no tag and take the book's
BY-NC-SA 4.0. No section has objectives; 12.S opens on a chapter-level "Learning
Objectives" box (below). One closing "## Summary" (12.2, to `summary_html`).

### The intro and summary pages

- **intro**: one paragraph, no header, no maths; one block, header proposed
  "Why Symmetry" (humanizer by the builder). Two external links (ChemWiki
  electronic spectroscopy, IR, Raman) kept as links. No concepts (rule 21.1); the
  paragraph's bold "symmetry operation" is introduced in 12.2, where the book
  defines it with its element.
- **summary (12.S)**: a "Learning Objectives" box ("By the end of this chapter …":
  twelve objectives and seven "skill goals") and four paragraphs that read as an
  introduction (permutation groups promised, never delivered). New: a summary page
  carries no objectives (rule 21.2) and these are the chapter's, not a section's.
  **Proposed**: kept as the summary page's first block, verbatim under the book's
  header, since no table can hold chapter objectives and nothing is invented; the
  prose is the second block (header of the agent's, proposed "Learning the
  Mathematics of Symmetry"). Item "What a symmetry element a" is truncated at the
  source (footnote). *Orchestrator*.

### The 12.T pages (decision)

The book's `RULES.md` already says "The 12.T pages are reference tables and become
sheets". Settled here: two **`table` sheets** of the book (root rule 6: reference data
is a sheet, not a concept), `character-tables` (46 tables in nine families, the
families' one-line definitions as table notes) and `correlation-tables` (7 tables),
read from `ch12/tables/1/` and `/2/source.md` by a small tool of the book's
(`tools/sheets.py`, to write) into `sheets/<id>.json`, `generated_by: "tool"`. Cells
as HTML; a complex pair (ε, ε\*) as two lines of one cell with the brace dropped; the
corrections below as table `notes`. The sections link to the sheet wherever the prose
says "character table" of a named group or "Appendix B" (by footnote, since "Appendix
B" is Vallance's). The tables printed inside the sections (12.6's C₃ᵥ, 12.10's C₂ᵥ,
Table 12.14.1 …) stay in the text as the book prints them. Not built as chapter pages:
a sheet is searchable and reachable from every chapter, which Chapter 13 needs too.

## Per section

- **intro**: above.
- **12.1** No header: blocks proposed "Symmetry and Calculation" (Rubik's cube,
  the point of the chapter) and "Benzene in a Better Basis" (from "In section 10.7 …":
  the 6 × 6 Hückel determinant (12.1.1), its polynomial (12.1.2), the six symmetry
  combinations φ₁…φ₆, the block-diagonal determinant (12.1.3), its factored
  polynomial, the general determinant (12.1.4) and the 36 + 36 integrals).
  Concepts (new): symmetry simplifies calculations, a change of basis leaves the
  roots unchanged, a block-diagonal determinant factors. Uses: secular determinant,
  Hückel x and determinant (10.5–10.6), benzene's π orbitals (10.7), basis functions,
  Hamiltonian matrix element, overlap integral (7.2).
- **12.2** Book headers kept. Concepts (new): symmetry operation, symmetry element,
  identity, n-fold rotation, principal axis, reflection (σᵥ, σₕ, σ_d), inversion,
  improper rotation (with its power rules), proper and improper operations, axes of a
  molecule, point group (Schönflies, Hermann–Mauguin), families of point groups,
  assigning a point group (the flowchart, a skill), which molecules can be polar,
  which can be chiral. Uses: dipole moment (5.5). Notes kept verbatim: Symmetry
  Operations, Note (S₁, S₂), Axis Definitions, Shared Names, Chirality. The stray
  footnote "¹Though the Hermann-Mauguin …" stays where printed; "²" after "chiral" has
  no note at the source.
- **12.3** Book headers kept. Concepts (new): group (four properties, (12.3.1)–
  (12.3.4)), order, Abelian and non-Abelian, class, group multiplication table (C₃ᵥ,
  (12.3.5), an `array` display numbered by the converter). Note "Commuting is not a
  Requirement" kept. "As we discovered in the C₃ᵥ example above" points forward to the
  example below it (as printed).
- **12.4** Opening block proposed "Transformation Matrices". Concepts (new): matrix
  representation (transformation matrix, representative, basis, span), matrices of
  the symmetry operations. Reinforced: group (closure etc. in matrix form), C₂ᵥ
  multiplication table (Table 12.4.1, unnumbered at the source). Example 12.4.1
  (allyl radical, C₂ᵥ in a p basis) kept whole.
- **12.5** No header: one block, proposed "A Reducible Representation of Ammonia".
  Concept (new): reducible representation. "As we will see in the next chapter" is
  the next section (as printed).
- **12.6** Book headers kept; opening block proposed "Representations in Any Basis"
  (one sentence; or folded into Similarity Transforms by the builder, rule 3).
  Concepts (new): similarity transform, character (with its two properties, the note
  "Characters of Representations"), character table, characters by inspection (with
  the cos θ rule). "Proofs … are given in the Appendix" and "Appendix B" point at
  Vallance's appendices: footnotes, the latter linking the character-table sheet.
- **12.7** Book headers kept; the first block's header "Symbols of irreducible
  representations". Concepts (new): irreducible representation (symmetry species and
  Mulliken labels), complex characters in pairs, correlation with a subgroup, direct
  product (with its six rules). It opens mid-argument ("The two one-dimensional
  irreducible representations spanned by s_N and s₁′ are seen to be identical"),
  Vallance's reduction of the NH₃ s basis, which this book never prints: kept as
  printed, a footnote says the argument is not in the book. The bullet "f has the same
  symmetry" is cut off at the source.
- **12.8** Book headers kept; opening block proposed "Integrals That Must Vanish".
  Concepts (new): when an integral must vanish (totally symmetric representation),
  homogeneous equations need a zero determinant, energies from a 2 × 2 secular
  determinant, ammonia's orbitals from its s SALCs, the reduction formula and the
  steps of building molecular orbitals (both from the closing note, which prints the
  reduction formula and the projection operator first). "Recall the secular equations
  for the A₁ orbitals of NH₃ derived in the previous section" refers to Vallance's
  notes; the SALCs φ₁, φ₂ are used before 12.14 defines SALCs (kept; the concept is
  introduced in 12.14, and 12.8's use links forward).
- **12.9**: empty; not built.
- **12.10** One header; it opens "We mentioned above" and closes "We will do this now
  for H₂O" with nothing after it (Vallance's next section is not in the book; footnote).
  Concepts (new): degrees of freedom (bold), the 3N Cartesian basis, the symmetries of
  the vibrations (χ_Vib = χ₃N − χ_Trans − χ_Rot; water 2A₁ + B₁). The C₂ᵥ character
  table printed here is the chapter's first.
- **12.11** No header: one block, proposed "Reducing Ammonia's Motions". Concept
  (new): reducing a representation by table (a skill: NH₃ 3A₁ + A₂ + 4E, Γ_vib = 2A₁ +
  2E). Eight tables kept as `div.book-table` (they are the working, filled in step by
  step; see Figures for the one figure that replaces them). "As we saw in the
  previous section" means 12.12, which comes after (footnote).
- **12.12** Book headers kept. Concepts (new): normal modes of a molecule (bold), the
  number of vibrational modes (3N − 6, 3N − 5). Uses: normal mode (2.4), harmonic
  oscillator (5.1), degrees of freedom (12.10), reducing by table (12.11). The text
  calls the lone pair a "pink sphere" in the NH₃ image.
- **12.13** Book headers kept. Concepts (new): selection rules from symmetry (bold
  "must contain the totally symmetric Γ_ir"), which vibrations are IR active, Raman
  scattering (virtual state), which vibrations are Raman active, polarizability. Uses:
  Morse potential (5.3), transition moment integral, selection rule, IR (5.5),
  dipole moment.
- **12.14** Book headers kept, except "References" and "Solutions to Practice
  Problems", which are apparatus: the references go to the section's `notes`/credits
  (they are the page's sources, with the spectra's Sigma-Aldrich pages), the solutions
  key the three problems. Concepts (new): SALC (bold), the projection operator,
  normalizing a SALC, SALCs of bond stretches (water, the difluorobenzenes). Examples:
  12.14.1 Water, 12.14.2 Difluorobenzene, and three printed with no number but "2",
  "4", "3" (CBr₂H₂, PtCl₄, PF₂H₃) in that order: printed labels stay (precedent), each
  kept whole as an example; the converter warns on each. The last two tables (Table 7
  and 12.14.12) sit outside their example boxes at the source.
- **12.15** Book headers kept. Concepts (new): only orbitals of one symmetry bond,
  molecular orbitals from SALCs (water 3A₁ + 2B₁ + B₂), symmetry of an electronic
  state, which electronic transitions light can drive. Reinforced: reduction formula,
  projection operator, steps (12.8), vanishing-integral rule, direct product. The
  "Rotation" box (the C₂ column of the representative) is an example printed without a
  number: kept as an example box titled "Rotation". The water MO image (57783) sits
  inside the word "ener|gies" at the source; the builder puts it after the paragraph.
  "Section 18" is this page's own first part; "Earlier in the course" is 12.15 itself.
- **summary**: above.

Glossary bolds the converter marks (`{term:…}`) that are terms: indistinguishable
(12.2, emphasis), order, identity, closure, associative law, non-Abelian (12.3),
Identity/Closure/Associativity/Reciprocality list heads (12.4), reducible
representation (12.5), Correlation diagrams (12.7), must include, it must have a
non-zero determinant (12.8, emphasis), Degrees of freedom (12.10), normal modes of
vibration (12.12), must contain the totally symmetric Γ_ir, one-photon (12.13),
Symmetry Adapted Linear Combinations, two (12.14), bonding, antibonding (12.15, both
reinforced). 12.14's tables mark every header cell bold (79 markers): table headers,
not terms. Italic terms are the introducing spans elsewhere (symmetry operation,
symmetry element, principal axis, proper/improper symmetry operations, point groups,
Abelian, class, group multiplication tables, transformation matrices, representative,
matrix representation, basis set, span, similarity transform, character, symmetry
species, virtual state).

## Equation numbers

One number per display (the book's rule), from the converter's `n=`: 12.1 (12.1.1)–
(12.1.4); 12.3 (12.3.1)–(12.3.5); 12.4 (12.4.1)–(12.4.5) ((12.4.3)–(12.4.5) are
R_x, R_y, R_z); 12.5 (12.5.1), (12.5.2); 12.6 (12.6.1), (12.6.2) (the C₃ᵥ table and
x′, y′); 12.7 (12.7.1), (12.7.2); 12.8 (12.8.1)–(12.8.20); 12.14 (12.14.1)–(12.14.8);
12.15 (12.15.1)–(12.15.16). The page's `[ref:…]` all resolve (12.1's
`31`, `poly1`, `33`).

**New: explicit `\tag`s.** Eleven displays carry Vallance's own numbers as `\tag`:
12.6 (11.1)–(11.5), 12.10 (24.1)–(24.5), 12.13 (27.5), 12.15 (18.2), (19.1), (27.4),
plus 12.15's `\text(18.1)` written into the display. The live page prints those
numbers, which collide with Chapter 11's and cite nothing in this book. **Proposed**:
the builder drops the `\tag` and numbers each display N.M.K in page order with the
others (the book's rule, one number per display), so 12.6's become (12.6.1)–(12.6.7)
in order with the two converter-numbered ones, and so on; the plain-text citations
that use Vallance's numbers ("Equation (15.20)", "Equation 16.1", "(21.3)", "Section
9", "Section 18", "Appendix B") stay as printed with a footnote each giving this
book's place. `md2html.py` is left as it is (it keeps a `\tag` it finds, which Chapter
4's summary relies on); the builder edits the draft. *Orchestrator.*

## Exercise count report (root rule 13)

Counted from the converted pages.

- **Inline exercises** (`box-exercise`): none printed.
- **Worked examples**: 7 (12.4.1 allyl; 12.14.1 water, 12.14.2 difluorobenzene,
  "2" CBr₂H₂, "4" PtCl₄, "3" PF₂H₃; 12.15 "Rotation"), all worked in their own text
  with no Solution part: kept whole; not exercises.
- **Problems** (12.14, "## Problems"): **3 printed, 3 keyed** by the page's own
  "Solutions to Practice Problems" list (1: ortho-difluorobenzene's C–H SALCs,
  compute; 2: ammonia's SALCs, compute; 3: draw and rank BeH₂'s MO nodes, a sketch
  keyed by an image). Kind `question` (the book's "Problems" list, Chapter 1's kinds).
  The keys are printed with broken maths (every `\(` lost at the source, "\frac{1}{
  \sqrt{2}} (b_1+b_2)\)"); the cards set them as maths, the book's content kept.
  Key 1's normalization of φ₁(A₁) and φ₂(A₁) is printed 1/2 for four terms (right),
  but its intermediate 1/√2 pairs are the book's; key 2 labels E's two parts E₁, E₂.
- **Prompts in prose** ("Try this for the s orbital basis", 12.6; "As an exercise,
  you should make sure …", 12.10): sentences of the text, kept as printed, not
  exercises.
- **12.E**: empty; nothing routed.
- **Placement**: the three problems test 12.14 (problem 3 also 12.15's orbitals) and
  stay at the end of 12.14.
- **In all**: 3 cards, 3 keyed, 0 unkeyed.
- **Concepts the book leaves untested**: everything but SALCs. **Proposed new: 14**,
  one or two per section where a concept would otherwise have none:
  12.1 one (block-diagonalize butadiene's Hückel determinant with the given
  combinations and read off the roots); 12.2 two (point groups of five named
  molecules by the flowchart; which of them can be polar or chiral); 12.3 one (is
  {E, C₂, σᵥ, σᵥ′} closed? fill a missing row of the C₂ᵥ table); 12.4 one (the matrix
  of S₄ about z, and check S₄² = C₂); 12.5 one (the representative of C₃⁺ in NH₃'s s
  basis and its trace); 12.6 one (characters of the 3N basis of NH₃ by inspection);
  12.7 one (direct products E ⊗ E in C₃ᵥ, reduced); 12.8 one (is ⟨s_N|Ĥ|φ₃⟩ zero by
  symmetry? why); 12.10 one (Γ_vib of CO₂ through D₂ₕ); 12.11 one (reduce CH₃Cl's 3N
  representation in C₃ᵥ by the tabular method); 12.12 one (number of modes of benzene, CO₂,
  HCN); 12.13 one (which of NH₃'s modes are IR and Raman active, with the
  polarization); 12.15 one (allowed one-photon transitions from H₂O's ground state to
  its (1B₂)¹(3A₁)¹ and (1B₂)¹(2B₁)¹ states, with polarization). No new one for
  12.14 (the book's three).

## Figures, in book order (root rules 14, 24, 25, 26, 28)

Rule 14 as rewritten today: a figure starts from the book's and usually replaces it;
motion where the idea moves; a point the reader sees at once; little effort to read;
folds where the book draws one scene several times. The chapter is the most spatial
since Chapter 6: an operation is a motion (a turn, a reflection through a plane, a
passage through a point), so **every operation is animated** (it has a time: the
molecule is carried from before to after) and every scene of a molecule with its
elements is **physical 3D**: atoms in `F.el` colours, honest geometry (H₂O 104.5°,
NH₃ 107°, CH₄ 109.5°, ethane staggered, benzene), elements drawn as house-style
lines and translucent planes, an orbit bounded to the upper hemisphere and ±60° about
the principal axis (no view from beneath a planar molecule's plane; the axis never
end-on unless the operation needs it), no spin button (the operations turn the
molecule; a spin would compete), zoom only for benzene and SF₆. Character tables stay
tables. Normal modes move. A mode's amplitude is exaggerated on a slider (rule 28.4)
with the true scale in the readout.

| Number | Section | What the book shows | Proposed treatment |
|---|---|---|---|
| Rubik's cube (unnumbered) | 12.1 | photo, "Use with permission from Wikipedia" | **Drop**: decoration, and a "used with permission" original is not shipped (precedent). |
| Symmetry elements sketch (unnumbered, 421666) | 12.2 | point, line, plane in red | **Fold into the operations scene below** as its eyebrow-less original; the scene draws each element (point, axis, plane) in the operation's colour. Not a figure of its own. |
| 12.2.1 + 12.2.2 + 12.2.3 + 12.2.4 + 12.2.5 | 12.2 | Otterbein renders: CHFClBr (identity only); H₂O C₂, ethane C₂ and C₃; NH₃, H₂O, benzene planes; benzene and ethane inversion centres; ethane S₆, CH₄ S₄ | **Fold, replace, moving, physical 3D** (motion: the operation carries the molecule; 3D: an arrangement in space, rule 24.8). A choice of operation (E, Cₙ, σ, i, Sₙ) and of molecule among the book's (CHFClBr, H₂O, ethane, NH₃, benzene, CH₄); the element appears (axis, plane, point), the atoms are labelled by number on hover only, and play carries the molecule through the operation: a turn of 360°/n about the axis; a reflection that slides each atom through the plane to its image; an inversion that sends each atom straight through the centre; Sₙ as the turn then the reflection, in two beats. Ghosts of the start stay faint. **Point: after the operation every atom sits where an identical atom was, so the molecule cannot be told from the start; CHFClBr shows that nothing but E does this.** Readout: the operation's name and its power rule (Cₙⁿ = E, σ² = E, i² = E, Sₙⁿ = E or σ) with the live count of applications. Opens on H₂O and C₂ (Figure 12.2.2's left). Eyebrow "Figure 12.2.1 + 12.2.2 + 12.2.3 + 12.2.4 + 12.2.5". |
| 10 point-group icons + flowchart (unnumbered, 17577…17590) | 12.2 | tiny greyscale molecules for C₁, Cᵢ, C_s, C₂, C₃ᵥ, C_∞ᵥ, C₂ₕ, D₃d, D_∞ₕ, T_d, O_h; Vallance's flowchart | **Replace, still, physical 3D + flowchart** (variation: the molecule; the flowchart is the skill). A choice of molecule (the eleven the book draws, plus the five named in the text: CHDFCl, C₂H₂F₂Cl₂, CO₂, SF₆, C₆₀ held to the book's list) shown in 3D with all its symmetry elements, and the flowchart beside it with the path the molecule takes lit, ending on its group. **Point: answering the flowchart's questions in order lands every molecule in exactly one group.** Readout: the group, its order h and its elements counted (e.g. C₃ᵥ: E, 2C₃, 3σᵥ, h = 6). Eyebrow "Figure" (unnumbered at the source), originals: the flowchart only (the icons are unlabelled thumbnails). Still: the reader varies the molecule, nothing has a clock. |
| Table 12.2.1, Table 12.2.2 | 12.2 | operations; common point groups | Kept as `div.book-table`. |
| σᵥC₃ and C₃σᵥ (unnumbered, 61156, 61157) + the C₃ᵥ multiplication table (12.3.5) | 12.3 | NH₃ seen down its axis: numbered H's carried through C₃ then σᵥ, and σᵥ then C₃; the table | **Fold, replace, moving, 3D locked view from above the axis** (kinematic arrows: the operations happen; 3D not needed for the lesson, which is a sequence in the plane: rule 28.2's locked view, NH₃ shaded from the book's viewpoint). Two choices, first and second operation (E, C₃⁺, C₃⁻, σᵥ, σᵥ′, σᵥ″); play applies the first, then the second, the numbered H's moving, then names the single operation that does the same and lights its cell in the multiplication table beside. **Point: the order matters: σᵥC₃ = σᵥ″ but C₃σᵥ = σᵥ′; every product is already in the group.** Readout: the product equation with the live operations. Opens on the book's σᵥ then C₃ order of the first image. Eyebrow "Figure" (unnumbered); originals both images. The multiplication table itself stays printed as the display (12.3.5) too (the figure lights a copy; the reader sees the book's table once in the text and once inside the figure: acceptable since the figure's table is its readout; *orchestrator* may prefer the figure to replace the display). |
| 12.4.1 (Reflection in the xy plane) | 12.4 | a vector reflected in a plane | **Replace, moving, mathematical 3D** (variation: the operation; 3D: a direction out of a plane). A vector u in a frame, a choice of operation (E, σ(xy), σ(xz), C_n about z with n on a detented slider 1–6, i), the matrix beside it with the live entries; play carries u to its image. **Point: a reflection flips only the coordinate normal to the plane, so its matrix is the identity with one −1; a rotation mixes x and y by cos and sin.** Readout: the matrix equation with the live numbers. Free orbit (mathematical 3D). Eyebrow "Figure 12.4.1". |
| allyl p orbitals (Example 12.4.1, 61163) | 12.4 | three p orbitals on a bent chain | **Keep** as the example's image (it is the basis drawing the example reads from); the matrices are the lesson and are printed. |
| NH₃ s basis with its elements (12.5, 61162) | 12.5 | NH₃ from above with σᵥ, σᵥ′, σᵥ″ and C₃± arrows, s₁ s₂ s₃ | **Replace, moving, locked 3D view from above** (the same NH₃ scene as 12.3's, reused): a choice of operation; play moves the labels s₁, s₂, s₃ and the 4 × 4 matrix beside fills with the permutation, its trace boxed. **Point: each matrix is a permutation of the s orbitals, and its trace counts the orbitals that stay put.** Readout: Γ(g) applied to (s_N, s₁, s₂, s₃) and χ(g). Eyebrow "Figure" (unnumbered). The 12.6 character shortcut and 12.10's unshifted-atoms rule link to it. |
| none | 12.6 | the C₃ᵥ character table (display) | **Extra Sim, offered** (below): rotate x and y by θ and watch cos θ appear on the diagonal. |
| 12.8 Ψ₁ Ψ₂, Ψ₃ Ψ₄ (unnumbered, 61169, 61170) | 12.8 | grey spheres sized by coefficient, shaded by sign | **Replace, still, physical 3D** (an arrangement: orbital lobes on NH₃): a choice of orbital Ψ₁…Ψ₄; spheres on N and the three H's sized by |c| and coloured by sign in the house's sign colours, the energy level of each on a ladder beside. **Point: the two A₁ orbitals are the same two SALCs in phase (bonding, low) and out of phase (antibonding, high); the two E orbitals share one energy.** Readout: Ψ with the live coefficients and E. Coefficients: the book's (with the correction below, the figure follows the correct numbers: −29.83 eV and +31.03 eV, c₂/c₁ = 0.710 and −1.035). Eyebrow "Figure" (unnumbered), originals both. |
| 3N basis on H₂O (61173) | 12.10 | xyz axes on each atom | **Fold into the water modes figure below** (its first state). |
| water's modes (61174) + 12.12's linear triatomic (61172) | 12.10, 12.12 | symmetric stretch A₁, asymmetric stretch B₁, bend A₁ (kinematic arrows); CO₂-like stretches and the doubly degenerate bend | **Two figures, moving.** 12.10: **water's normal modes, moving, 2D** (the modes are in the molecular plane; 3D adds no view, rule 28.5): a choice of mode, the atoms oscillating with the mode's displacements (normal coordinates from a valence force field, literature frequencies 3657, 3756, 1595 cm⁻¹ named in the notes), an amplitude slider (exaggeration, true amplitude in the readout), and a strip of the four C₂ᵥ operations under it, each showing whether the mode's arrows go to themselves (+1) or reverse (−1). **Point: each vibration either keeps or reverses its arrows under each operation, and that row of ±1 is its symmetry species.** Readout: the character row and the species (A₁, A₁, B₁). Eyebrow "Figure" (unnumbered), originals both. 12.12: the linear triatomic's modes are **kept** as the book's still (the text does not work them; a moving copy would replay the 12.10 figure). |
| NH₃ (9864) and ammonia's tables | 12.12 | a ball-and-stick NH₃ with a pink lone pair | **Replace, moving, physical 3D**: **ammonia's six modes** (the book's Γ_vib = 2A₁ + 2E: symmetric stretch, umbrella, and the two degenerate pairs of asymmetric stretch and deformation), a choice of mode, one slider for the amplitude and, for an E pair, a slider for the mixing angle of the two partners (the reader sees any mixture is also a mode of the same frequency, which is what degeneracy means), orbit bounded above the H plane. **Point: the A₁ modes keep the C₃ axis; each E pair breaks it, and its two partners blend into each other.** Readout: the mode's species and frequency (literature, NIST: 3337, 950, 3444, 1627 cm⁻¹) with the IR and Raman activity from the character table. The book's image (and its pink lone pair) is kept as the original. Eyebrow "Figure" (unnumbered). |
| Morse potential (27861, Wikipedia, CC BY-SA 3.0) | 12.13 | harmonic and Morse curves with levels | **Cite and link 5.3's Morse figure** (built there); the image is kept here as a faithful image with its credit, since the text points at it ("In the case of the Morse diagram above"). |
| Energy level diagram (9873) | 12.13 | electronic, vibrational, rotational levels with transitions A, B, C | **Faithful copy, still** (a level diagram the text points at by letter in 12.13 and 12.15): redrawn in house style, the three transitions labelled A, B, C. Eyebrow "Figure" (unnumbered); original shipped. |
| water + polarized light (61177) | 12.13 | z-polarized wave exciting the A₁ modes, x-polarized the B₁ | **Replace, moving, 2D**: the 12.10 modes figure's molecule with a polarization choice (x, y, z) and a light wave coming in; the modes of the matching species light and start to move, the others stay still (y: none). **Point: light excites only the vibrations that share the symmetry of its polarization; y-polarized light excites nothing in water.** Readout: Γ(polarization) ⊗ Γ(mode) and whether it contains A₁. Eyebrow "Figure" (unnumbered). The wave is kinematic (moving). |
| Raman levels (436254) | 12.13 | absorbed photon to a virtual state, emitted photon to a different final state | **Replace, moving, 2D**: the photon in rises to the virtual state and the emitted one falls to the final state, photon colours by energy (facts: a real colour where in the visible); a choice of Stokes or anti-Stokes. **Point: the two photons differ by the vibrational quantum left in the molecule.** Eyebrow "Figure"; original shipped. *Orchestrator*: anti-Stokes is not in the book's text; offered as the choice only if wanted, else the figure has none and is a faithful animated copy. |
| 12.14.1 + 12.14.4 (the same image, 9720), 12.14.2, 12.14.3 + Tables 12.14.3, 12.14.4 (images of tables) | 12.14 | water's stretch vectors; the four operations' images of b₁; the projection table; the normalized SALCs | **Fold, replace, moving, 2D** (the operations carry b₁; the projection is a sum the reader builds). A choice of irreducible representation (A₁, A₂, B₁, B₂); play applies E, C₂, σᵥ, σᵥ′ to b₁ in turn, each image weighted by the character and dropped into a running sum; A₂ and B₁ (in this page's yz convention) cancel to zero, A₁ and B₂ build 2(b₁ ± b₂), then normalize. **Point: the projection operator keeps only the symmetries the stretches actually have.** Readout: φ = Σ χ(j) T_j b₁ with the live terms. Eyebrow "Figure 12.14.1 + 12.14.2 + 12.14.3 + 12.14.4"; Tables 12.14.3 and 12.14.4 (images of tables) are **rebuilt as book tables** in the text from the images (their content verbatim) and the images not shipped (an image of a table is not a figure); *orchestrator*. |
| 12.14.5, 12.14.6 | 12.14 | para- and ortho-difluorobenzene with labelled C–H bonds | **Faithful copies, still**, with a correction: 12.14.5 labels all four bonds b₁, which the SALCs read as b₁…b₄. |
| 12.14.7, 12.14.8 | 12.14 | FT-Raman spectra (Sigma-Aldrich catalogue) | **Not shipped** (no licence; catalogue data); the sentence they illustrate stays, and the notes name the source. No replacement: the book's claim (para shows more peaks) is not a pattern we can draw without data. *Orchestrator.* |
| 12.14.9 | 12.14 | an empty xyz frame ("Atomic Orbitals of H₂O") | **Drop**: it holds axes only (decoration); the next figure carries the orbitals. |
| 12.14.10 | 12.14 | water's LCAOs in order of energy, nodes dashed | **Replace, still, physical 3D** (lobes on atoms): the six water orbitals as signed spheres and lobes, a choice of orbital, nodal planes drawn as planes; ordered on an energy ladder. Shares its scene with 12.15's MO figure; built once in 12.15 and **cited** here (repeated material), the book's image kept here as the original of 12.15's figure. |
| 12.14.11, 12.14.12, 12.14.13 | 12.14 | CBr₂H₂, PtCl₄, PF₂H₃ with labelled vectors | **Faithful copies, still** (sketches the examples read from; no motion helps). |
| Problem 3's BeH₂ orbitals and the solution image | 12.14 | four orbitals; their nodes and order | Kept with the card (prompt and key), as images. |
| water axes and elements (61171) | 12.15 | H₂O with C₂, σᵥ, σᵥ′ and x, y, z | **Reuse the 12.2 operations scene** on H₂O with its xyz axes and a choice of the four C₂ᵥ operations, the six basis orbitals drawn (s_H, s_H′, s_O, p_x, p_y, p_z): play applies the operation and the orbitals' images appear with their signs, filling the representative's columns. **Point: each column of a representative is where one basis function goes.** Eyebrow "Figure" (unnumbered). |
| water MOs with energies (57783) + water MO diagram (61176) + 12.14.10 | 12.15 | isosurface pictures with energies; the occupied diagram | **Fold, replace, still, physical 3D**: water's six valence MOs built from the page's SALCs (3A₁, 2B₁, B₂) as signed lobes, an energy ladder with the book's energies (−37.03 … 5.269 eV), electrons filled to 1B₂; a choice of orbital and a choice of excitation (to 3A₁ or 2B₁) that shows the state's symmetry by direct product. **Point: each MO uses only SALCs of its own species, and the excited state's symmetry decides which polarization reaches it.** Readout: the product (B₂ ⊗ A₁ = B₂ …) and the allowed polarization. Eyebrow "Figure"; originals 57783 and 61176. |
| transition moment integral (9878, a 117 × 28 BMP of ⟨ψ_el ψ_vib|μ|ψ_el ψ_vib⟩) | 12.15 | an equation as an image | **Set as a display equation** (unnumbered, the book's maths as printed), the image not shipped; *orchestrator* (new: an equation printed as an image). |
| NH₃ + polarized light (61175) | 12.15 | x, y light and z light on NH₃ | **Faithful copy**, or folded into the 12.13 polarization figure's NH₃ state: proposed fold (one scene: a molecule, a polarization, what lights). |

### What moves in this chapter

Every operation (12.2's scene, 12.3's products, 12.4's vector, 12.5's permutation,
12.14's projection, 12.15's basis), the normal modes (12.10 water, 12.12 ammonia),
light exciting modes (12.13) and the Raman photons. Still: point-group assignment, the
NH₃ orbitals of 12.8 and the water MOs (variation only), the level diagram, the
sketches.

### 3D

Physical 3D: the operations scene (12.2), the point-group finder (12.2), NH₃'s orbitals
(12.8), ammonia's modes (12.12), water's MOs (12.15). Locked view: NH₃ seen down its
axis (12.3, 12.5). Mathematical 3D: the vector and its matrices (12.4). 2D: water's
in-plane modes and their light, the projection, the Raman ladder.

### New simulations proposed (root rule 15)

Only where motion or variation teaches (precedent).

1. **Characters of a rotated pair of axes** (12.6): x and y rotated by θ on a slider
   (specials at 120°, 180°, 90°), the 2 × 2 block with cos θ and sin θ, its trace 2 cos
   θ and the C₃, C₂, C₄ values marked. The reader sees why E's character under C₃ is −1.
2. **Descent in symmetry** (12.7): NH₃ flattened or one H swapped for D (a slider or a
   choice), the point group dropping C₃ᵥ → C_s, the character-table rows correlating
   (E → A′ + A″) on the correlation table. No book figure; the text's correlation
   paragraph is abstract.
3. **Reduction by inner product** (12.11): the reducible row Γ and each irrep row as
   bars over the classes, weighted by class size, the products summed and divided by h,
   for NH₃'s 12, 0, 2; the reader sees the count come out an integer only for the right
   species. Offered only if the orchestrator wants 12.11 to have a figure (its tables
   already show every step).

## Derivation candidates (root rule 29)

| Where | What | Score | Decision |
|---|---|---|---|
| 12.1, (12.1.3) to the factored polynomial | printed as equations: the block-diagonal determinant expands into the product | qualifies as printed (block of equations with words); moves: blocks → product of determinants → two 2 × 2 expanded → (x + 1)²·¾, (x − 1)²·¾ → product; facts imported 1 (determinant of a block-diagonal matrix), unprinted run 3, joins 2: score 6 | **Build**: "Derivation · benzene's roots from the block-diagonal determinant"; ends at the factored form and the roots ±2, ±1, ±1; links 10.7's benzene roots (drv where 10.7 built one). |
| 12.6, (11.1)–(11.5) | printed as equations (Vallance's similarity transform) | qualifies as printed | **Build**: "Derivation · the similarity transform"; the book's row-vector lines (x′ = xC) are followed, a node note says (11.2) writes x′ = Cx for the same coefficients (the transpose). |
| 12.6, 2 cos θ for a rotated pair | prose | 3 moves, score 2 | Stays (extra Sim 1 shows it). |
| 12.8, (12.8.3)–(12.8.6) | printed as equations: matrix form → determinant → quadratic → E± | qualifies as printed | **Build**: "Derivations · the energies of NH₃'s A₁ and E orbitals", with (12.8.15)–(12.8.18) as the second end result (H₃₄ = S₃₄ = 0 reduces E± to H₃₃ and H₄₄); one record, two results. |
| 12.8, (12.8.7)–(12.8.14) | numbers into (12.8.6) and (12.8.9) | substitution | Never a derivation (rule 29.1); stays, with the correction. |
| 12.8, (12.8.1) A⁻¹Ax = A⁻¹b | printed, 2 moves | qualifies as printed but trivial | Stays as printed (2 lines; a derivation adds nothing): *orchestrator* may want it built since 29.1 says every printed block qualifies. |
| 12.10, (24.1)–(24.5) | table arithmetic | counting | Stays. |
| 12.11, the tabular method | a worked procedure | substitution into the reduction formula | Stays (its tables are the steps). |
| 12.12, 3N − 6 | prose | 2 moves | Stays. |
| 12.14, normalization | substitution | | Stays. |
| 12.15, (12.15.5)–(12.15.11) | projection sums | substitution | Stays. |
| 12.15, overlap → same species | prose | 3 moves (Γ₁₂ = Γ₁ ⊗ Γ₂ → must contain A₁g → only if Γ₁ = Γ₂); facts imported 2 (vanishing-integral rule 12.8, direct-product rule 6 of 12.7), unprinted run 3, joins 1: score 6, but 3 moves | Stays (fewer than four moves). |

Three derivations to build.

## Corrections spotted (root rule 13)

The book's words kept; a numbered footnote where each applies.

- **12.1**: "To a fully understand"; "Never the less as Chemist"; "this task is takes
  away"; "an a cube"; "determinnat"; "the the"; "bock diagonal"; "as long as" lacks
  "as"; "{φ⟩}" is {|φ⟩}; the basis is the |2p_z⟩ orbitals though the text before says
  2p_x; (12.1.4)'s last entry H₆₆ − ES₆ is ES₆₆; "section 10.7" links correctly. The
  factored polynomial carries 9/16 against the monic (12.1.2) (the same roots; noted).
  The roots ±2, ±1, ±1 are right (checked).
- **12.2**: the symmetry-elements image's alt text is wrong (no matter: the image is
  folded); "Identify Symmetry" (×2) is Identity; "contain" is contains; "toluene" in
  12.2.4's alt is ethane (the caption is right: "staggard" is staggered); "Molecules
  with no inversion symmetry are said to be centrosymmetric" is backwards: molecules
  **with** a centre of inversion are centrosymmetric; "a plan" is plane; "Molecular
  does not return"; "rotationa groups"; "elements appear along right-to-left
  diagonals" (as printed, Vallance's); "n-fold vertical mirror places" is n vertical
  mirror planes; "all linear centrosymmetric linear molecules"; "Methane, C₄" is CH₄;
  "Icoshedral … 20 faces"; T_d's "6 dihedral mirror planes" right; "cannot have be
  chiral"; Table 12.2.1's header row reads "Symbol Elements | Description | Symbol
  Operator | Symbol" (the last is the operation's description); Table 12.2.2's S_n row
  lists S₂ (which is Cᵢ, as the text says) and leaves C₇h/C₈h out (as printed).
- **12.3**: "a rule for forming combinations g_j"; "they elements"; "C₃rotation".
  Both composition images are right (σᵥC₃ = σᵥ″, C₃σᵥ = σᵥ′, checked against the
  numbered H's); the multiplication table (12.3.5) is consistent with them (checked).
- **12.4**: R_y (12.4.4) prints −sin θ top right and +sin θ bottom left, the clockwise
  (inverse) sense against R_x and R_z's counterclockwise one; "the on that is
  negative"; "Matrix Representation … (the allyl radical)": in Example 12.4.1 σᵥ′
  swaps p₁ and p₃, so both displays' σᵥ′ result is (p₃, p₂, p₁), printed (p₁, p₂, p₃)
  (the matrix is right); "The Inversion operation, I" writes i as I; "The
  representation is then said to span the chosen basis" is the other way round in
  Vallance's own usage (the basis spans the representation), kept with a footnote.
- **12.5**: "understand understand"; "the their motion"; "in the next chapter" is the
  next section; "extract For example" lacks a full stop.
- **12.6**: "so position" is some position; (11.2) writes x′ = Cx while (11.3) uses the
  row form x′ = xC (a node note in the derivation); the C₃ᵥ table's E row lists
  (xy, x² + y²), which is (x² − y², xy) (the 12.T sheet and 12.11 have it right);
  "Section 9" is 12.4; "Appendix B" is the 12.T sheet; "the Appendix" (proofs) is not
  in the book; "preformed".
- **12.7**: opens on an argument the book does not print (above); "f has the same
  symmetry" cut off; "(character +1 or antisymmetric" lacks its parenthesis; "The 1D
  irreducible representation … The 2D …" refer to the missing argument; ε =
  exp(2πi/n) and in (12.7.1) the stars are written `\epsilon*` (ε\*); (12.7.2)'s
  combined E has characters 2, −1, −1, printed 2, −1, 1; "to or more bases" is two;
  "the order of the subgroup must be an integer divisor from" of; "The dimension of
  the product, D_p" then d_p; rule 6 "Only the direct product of a representation with
  itself is or contains the totally symmetric representation" holds for irreducible
  representations; "totally symmetry".
- **12.8**: "cos(x) is an 'even' function … ∫cos x dx = 0" is wrong: an **odd**
  function (sin x) integrates to zero over a symmetric interval, and ∫cos x dx over
  (−∞, ∞) does not converge; "In general integral … any other even function" likewise
  odd; S₁₂ = 0.8167 "eV" is dimensionless; **with the printed integrals (12.8.6) gives
  E = −29.8336 eV and +31.0342 eV, not E₊ = 29.8336 and E₋ = −31.0063 eV**; the book's
  coefficients (12.8.10)–(12.8.14) follow consistently from its wrong roots: with the
  right ones, Ψ₁ = 0.6128φ₁ + 0.4349φ₂ = 0.6128s_N + 0.2511(s₁ + s₂ + s₃) and Ψ₂ =
  1.6209φ₁ − 1.6775φ₂ = 1.6209s_N − 0.9685(s₁ + s₂ + s₃) (computed); "Equation
  (21.3)" is (12.8.3), "(15.20)" and "Equation 16.1" are (12.8.19) and (12.8.20); "the
  previous section" (the NH₃ secular equations) is not in the book; (12.8.19)'s sum is
  over classes C but its characters are written χ(g); "the remaining two SALCs …
  form an orthogonal pair": their E± (12.8.18) prints E₊ = H₃₃ and E₋ = H₄₄, fine.
- **12.10**: "each atom as 3 degrees"; "We mentioned above" and the closing "We will do
  this now for H₂O" (nothing follows); "(Equation (15.20))" is (12.8.19); the image's
  alt text names the bend A₂ (the image itself says A₁: no correction in the text).
- **12.11**: "As we saw in the previous section" (ammonia is worked in 12.12, after);
  Table 12.11.3 is called "the C₃ᵥ character table" but is the C₃ᵥ correlation table;
  "g_c χ_i X_r" against the key's g_e, χ_i, χ_r; "9 is the character of the reducible
  representation" is 12; "to obtains"; "\Gamma" printed raw in prose.
- **12.12**: the ammonia table's σᵥ column: two atoms (N and one H) lie in each σᵥ, so
  "Unmoved Atoms" is 2, not 1, Γ_total is 2, not 1 (as 12.11 prints), and
  Γ_vibrational is 2, not 1; the printed 2A₁ + 2E is right only with 2 (checked: 2A₁ +
  2E = (6, 0, 2)); "The ?'s" is σ's (a lost symbol); "preformed"; "there irreducible";
  "the z-axis pass through the lone pairs"; "The number of transitions is dictated by
  3N-6" is the number of vibrational modes.
- **12.13**: "excited form"; "When an electron is excited … within the electronic state
  … this result in a vibration" confuses electronic and vibrational excitation; "oftne";
  "Ψᵢ\*" fine; "which is derived from the time independent Schrödinger equation" is the
  time-dependent one; μ = αE is the **induced** dipole (Raman's), and "E … described as
  the electronegitivity" is wrong (E is the electric field); "³" has no note; "ot",
  "on vibrational state"; (27.5)'s A₂ entry "sy" is xy.
- **12.14**: "SALCs … composed of the stretching vectors" then "of atomic orbitals"
  (both, as the page goes on); the sentence ending "A" is cut off; the projection
  reference "¹" goes to References 1; Table 12.14.2's Γ_UMA for σᵥ(xz) is 1 and σᵥ′(yz)
  3: water in the yz plane (consistent), so the asymmetric stretch is **B₂**, as
  "Γ_Vibration = 2a₁ + b₂" says, but (12.14.4), Figures 12.14.1 and 12.14.4, and
  "The resulting A₁ and B₁ symmetries" say B₁; the reduction formula writes X for χ;
  "(3N-6) N=3" display; "used of LCAOs"; the ortho-difluorobenzene SALCs (four terms)
  are normalized 1/√2, which is 1/2, and the text then says ortho "has only two"
  stretching modes while listing four SALCs (it means two symmetry species); 12.14.5
  labels all four bonds b₁; "Any separation between two antibonding atomic orbitals
  is a planar node" (as printed); "the p_x orbitals … are degenerate and nonbonding"
  (p_x alone is nonbonding; no degeneracy in C₂ᵥ); Example "2": the C–H stretches are
  examined "first" but tabled second, fine; Table 5's Γ_C-Br σᵥ 2 and σᵥ′ 0 imply the
  Br's in σᵥ (consistent with Table 6); Example "4": "C₄ … used for spherically
  symmetrical molecules" is wrong (PtCl₄ is square planar; C₄ is a subgroup); "E¹ E²"
  are the conjugate pair, not "two rows for E, each singly degenerate" (as printed);
  Example "3": PF₂H₃ has a central **phosphorus**, not carbon; the C_s plane is called
  σₕ; Table 12.14.12 heads its columns with C₂ᵥ's four operations for a C_s molecule;
  "A′ T_j(a₁) … a₁ + a₁" sums to 2a₁; φ₁A′ = (b₁ + b₂)/√2 + a₁ ≠ (b₁ + b₂ + a₁)/√3, and
  the A′ combinations of a three-member A′ set are not fixed by symmetry (as printed);
  `\frac{1}{sqrt{3}}` lacks its backslash; every key of "Solutions to Practice
  Problems" lost its opening `\(`; key 2 names E's parts E₁ and E₂.
- **12.15**: `\text(18.1)` in (12.15)'s first display; "p_X"; the overlap table writes
  D_∞h's species in D₄ₕ-like labels (A₁g, E₁u …: Vallance's), kept; the B₂ projection
  of s_H prints "s_H − s_H′ − s_H = s_H′", which is s_H − s_H′ − s_H + s_H′ = 0; Ψ(B₁)
  (12.15.15) ends "+ c₅p_z", which is c₅p_x (φ₅ = p_x); the "Rotation" box: "transforms
  s_H into s_H′" then the column (0, 1, 0, …) is right; "Equation (15.20)", "Equation
  16.1" are (12.15.1), (12.15.2) here; "Section 18" is this page's Bonding in
  Diatomics; "⁷", "⁸" have no notes; "part C in the energy level diagram shown above"
  is 12.13's diagram (a link); "Which the dot product of yields" (as printed); "the
  volume occupied by the molecule must change" for Raman is loose: the polarizability
  must change (footnote); "For the purposes of Group Theory Raman and Fluorescence are
  indistinguishable" kept; the H₂O excited configurations use valence numbering
  (1A₁ = O 2s), consistent with the page's diagram.
- **summary**: "What a symmetry element a" truncated; "two challenges" are given as
  two paragraphs, as printed.
- **12.T Character Tables** (checked by the orthogonality of every real table, Σ n_C
  χᵢχⱼ = h δᵢⱼ, and by eye for the complex ones): C₃'s ε = exp(2π/3) lacks its i;
  C₅'s "Z" is z; D₆'s second class is **3**C₂′, printed 2C₂′; D₅d's A₂u has −1 under
  2S₁₀³, printed 1; D₈h's B₁u row has 16 entries for 14 classes; T's T row lacks its
  −1 under 3C₂; Tₕ's T_g has 3 under i, printed 1; Oₕ's second class is 8C₃, printed
  8C₂; Cᵢ's "Ag" lacks its subscript; C₂'s "Ry". The remaining real tables pass the
  check.
- **12.T Correlation Tables**: C₄ᵥ B₂ → C₂ᵥ(σ_d) and C₆ᵥ B₂ → C₃ᵥ(σ_d) print A₁′ for
  A₁; C₆ᵥ B₂ → C₃ prints A′ for A.

## Licences of the figures

| Figure | Credit as printed | Proposal |
|---|---|---|
| Rubik's cube | "Use with permission from Wikipedia" | not shipped (dropped as decoration; precedent) |
| 12.2.1–12.2.5 | "Image created via Symmetry @ Otterbein site by Dean Johnston et al." | shipped in `originals` with that credit under the page's CC BY 4.0, as the book publishes them (Chapter 3's decision for uncredited originals); *orchestrator*: the Otterbein site states no licence for its renders |
| 421666, Vallance's screenshots (61156 …, 61177), the flowchart, the icons | none | shipped under the page's licence (Chapter 3's decision) |
| 12.14 JPGs and PNGs | none (ChemWiki student module) | shipped under the page's licence |
| 12.14.7, 12.14.8 | Sigma-Aldrich catalogue spectra | not shipped (no licence) |
| Morse potential (27861) | Wikipedia "Morse-potential.png" (licence to be read from its file page; CC BY-SA 3.0 expected) | shipped under its own licence with credit (10.6's precedent) |
| 57783 water MOs with energies | none (from an outside course page) | shipped under the page's licence; *orchestrator* if a source is wanted |
| 9878 transition integral, 17590 flowchart | BMP files (one named .JPG) | the integral not shipped (set as maths); the flowchart converted to PNG if shipped |

## What is new to OmniStax here

- **Three new types**, merged: `symmetry-operation` (E, Cₙ, σ, i, Sₙ, a group element
  g), `representation` (Γ, the matrix representation, reducible and irreducible
  representations, direct products) and `character` (χ). A character table is the three
  of them on its three axes (columns, rows, cells), which is why each earns a colour;
  `npm run colours:default` dealt them (#914900/#F37F0A, #014F23/#0FEC76,
  #556301/#9DB509) and moved no other type. Irreducible-representation labels (A₁, B₂,
  E, T …) are written plain: they are names of species, wearing the representation
  colour only where the builder marks one as a concept span.
- **Symbols that collide in one chapter**: E (energy, ch1's key) against E the identity
  (`E_op`) and E the species (plain); χ the character (`chi_char`) against χ the
  orbital (`chi`, Chapter 10); h the order (`h_order`) against Planck's h; i the
  inversion (`i_op`); σ the operation (`sigma_op`) and its σᵥ, σᵥ′, σᵥ″, σₕ, σ_d keys;
  p_x, p_y, p_z as orbitals reuse the momentum keys' macros only where they mean
  momentum, so the builder writes the orbitals plain (as Chapter 10 did).
- **Explicit `\tag`s from another text** (proposal above) and prose citations into
  that text.
- **An equation printed as an image** (12.15) and **tables printed as images** (12.14).
- **Reference tables as sheets** for the first time in this book.
- **Mode animations with literature frequencies** (water, ammonia), in the precedent of
  literature data named in the figure's notes.

## The chapter's answer to root rule 23

Symmetry is something you do to a molecule, and the printed page can only show the
before and after. The stunning version lets the reader do it: pick up water, turn it
half a turn and see it land on itself; reflect ammonia and watch the hydrogens trade
places; compose two operations and find the product already waiting in the table;
watch a vibration and see, operation by operation, whether its arrows survive, which
is all a character is. Then the abstraction pays out where the reader can see it: the
same ±1 rows decide which bonds can form, which vibrations light can shake, and which
electronic states a photon can reach. One scene (a molecule, its elements, a choice of
operation) runs through the chapter, from 12.2's first rotation to 12.15's orbitals.

## Tool changes made for this chapter

- `md2html.py` reads a "## Solutions to Practice Problems" list as the key of the
  "## Problems" list before it (item k answers problem k, with any lines under it,
  images included) instead of drafting each solution as a new question; an image
  printed under the last problem goes with that problem's prompt (12.14's BeH₂
  orbitals); a bare "3." item opens a key. Every draft of Chapters 1–11 (106 pages)
  compared in memory against the old script: identical. The converter was not
  changed, so no source.md was reconverted.
