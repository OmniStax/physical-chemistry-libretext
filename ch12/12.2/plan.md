# Plan: 12.2 Symmetry Elements and Operations Define the Point Groups (LibreTexts 13485)

Source: `source.md`; draft from `python3 tools/md2html.py 12.2` (deleted once built).
Status: built 2026-11-08 in the Chapter 12 job, without a review stop (config: the chapter in one go).

Five `<h2>` headers (kept, with their `<h3>`s), five numbered figures, twelve unnumbered images, two tables, five
notes, six unnumbered displays, a closing "## Summary" (to `summary_html`). Licence CC BY 4.0, shared as the book's
BY-NC-SA 4.0; credit Vallance, Larsen, LaRue.

## Sub-concepts (page headers)

1. `symmetry-elements` **Symmetry Elements**: introduces `symmetry-operation`, `symmetry-element`.
2. `symmetry-operations` **Symmetry Operations** (E, Cₙ, σ, i, Sₙ, Table 12.2.1, the two notes): introduces `identity-operation`, `proper-rotation`, `principal-axis`, `reflection-operation`, `inversion-operation`, `improper-rotation`, `proper-improper-operations`; reinforces `symmetry-operation`.
3. `defining-the-coordinate-system` **Defining the Coordinate System** (the Axis Definitions note and the list): introduces `molecular-axis-convention`; uses `principal-axis`.
4. `molecular-point-groups` **Molecular Point Groups** (the families, Table 12.2.2, the flowchart, the Hermann–Mauguin note "¹" kept where printed): introduces `point-group`, `point-group-families`, `assigning-point-group`; uses `symmetry-element`.
5. `symmetry-and-physical-properties` **Symmetry and Physical Properties** (the Chirality note; "²" after "chiral" has no note at the source and stays): introduces `polarity-from-symmetry`, `chirality-from-symmetry`; uses `dipole-moment`, `point-group`.

Operation symbols through the macros where they name operations or elements (`\kEop`, `\kCn`, `\kCtwo`, `\kCthree`, `\ksigmaop`, `\ksigmav`, `\ksigmah`, `\ksigmad`, `\kiop`, `\kSn`); point-group names (C₁, Cₙᵥ, T_d, …) stay plain, as the Shared Names note warns they are a different thing. The draft's flattened nested lists (the Sₙ relationships, item 3 of the axis conventions) are rebuilt as nested lists, as the source prints them.

## Figures

- `sim-operations` · Figure 12.2.1 + 12.2.2 + 12.2.3 + 12.2.4 + 12.2.5 (folded; the Otterbein renders withheld per the orchestrator, `withheld` says why; the symmetry-elements sketch 421666 is the one original, with the five book captions as its caption) · `symmetry-operation`, `symmetry-element`, `identity-operation`, `proper-rotation`, `reflection-operation`, `inversion-operation`, `improper-rotation` · value add: motion (the operation carries the molecule; the book shows only the element) and 3D (an arrangement in space, rule 24.8) · arrows: none drawn; the motion itself is the operation · moving: play applies the operation once, then again until every atom is back where it began (Cₙ n times, σ and i twice, Sₙ n times), each application 0.7–1.4 s with a 0.45 s pause on the ghosts; a turn about the axis, a reflection sliding each atom straight through the plane, an inversion sending each straight through the centre, Sₙ as the turn then the reflection · choices: molecule (dropdown: water, ammonia, staggered ethane, benzene, methane, CHFClBr; the book's) and operation (segmented, the molecule's own: water C₂, σᵥ, σᵥ′, E; ammonia C₃, σᵥ, E; ethane C₃, C₂, σ_d, i, S₆, E; benzene C₆, C₂, σ_h, σᵥ, σ_d, i, S₆, E; methane C₃, C₂, σ_d, S₄, E; CHFClBr E, and C₃, σ, i about its own C–H bond and C, H, F plane) · headline: what one application did ("After each turn, every atom of water stands where an identical atom stood."; for CHFClBr "After one rotation by 120° about the C–H bond, a fluorine atom stands where a chlorine atom stood, so this is not a symmetry operation of CHFClBr.") · scene alone · physical 3D through `F.space3d` (atoms as lit balls in `F.el` colours, bonds in muted, the element in the operation colour: an axis line labelled with the operation, a translucent square plane, a point), principal axis up; orbit bounded from just above the xy plane to 75° above it and ±60° in yaw (no view from beneath benzene's ring); no spin, no zoom (benzene fits the frame). Flat fallback: `F.space3d` paints the same layers. Hover names for every atom, numbered by element ("hydrogen atom 2 of water"); ghosts of the start stay faint. Readout: the operation's live power and what it equals ("C₆² = C₃", "S₆³ = i", "σᵥ² = E") over the power rule (Cₙⁿ = E, σ² = E, i² = E, Sₙⁿ = E). Opens on water and C₂ (Figure 12.2.2's left). Placed after the Symmetry Operations note, before the five operations it folds.
- `sim-point-group` · Figure (unnumbered; original: the flowchart 17590, converted from BMP to `media/ch12/17590-Sym1.png`) · `assigning-point-group`, `point-group`, `point-group-families` · value add: variation (the molecule) and 3D (the elements the answers turn on) · arrows: none · still: choosing a molecule is not a time · choice: molecule (dropdown: CHDFCl, C₂H₂F₂Cl₂ (anti), CH₂ClF, H₂O₂, NH₃, HCl, trans-N₂H₂, staggered ethane, CO₂, CH₄, SF₆: the book's examples and the molecules its eleven thumbnails show; C₆₀ left out) · headline: the elements its answers turn on · 3D scene above, the flowchart redrawn below on its own canvas (the book's questions, Y/N on every branch, the molecule's path in ink, the rest faint, its group ringed); readout the group, its operations by class and its order h ("C₃ᵥ: E, 2C₃, 3σᵥ, h = 6") · physical 3D, orbit as above; only the elements the flowchart asks about are drawn (rule 26.7: SF₆'s 48 operations would bury the molecule). Replaces the flowchart image where the text says "the flowchart shown below".
- The ten point-group thumbnails (17577–17588) · dropped: unlabelled greyscale renders beside each family, replaced by the finder's molecules; `notes` says so.

Library notes: `F.space3d` dots stand in for atom meshes (lit balls, radii in canvas units); a `select` with `picker.options` swaps the operation list per molecule.

## Exercises

- `a1` (AI, Apply, open): point groups of BF₃ (D₃h), CH₂Cl₂ (C₂ᵥ), benzene (D₆h), CHCl₃ (C₃ᵥ), trans-CHCl=CHCl (C₂h) by the flowchart. Tests `assigning-point-group`, `point-group`.
- `a2` (AI, Analyze, choice): of the same five, which can be polar (CH₂Cl₂, CHCl₃) and which chiral (none). Tests `polarity-from-symmetry`, `chirality-from-symmetry`.

## Derivations

None: the power rules are stated, the rest is prose.

## Corrections

Footnotes: "Molecules with no inversion symmetry are said to be centrosymmetric" (backwards); "all of the operators commute (Abelian)" under the single-axis groups (C₃ᵥ and the other Cₙᵥ, n ≥ 3, do not commute); "Methane, C₄" (CH₄). Kept without notes: "Identify Symmetry", "contain", "staggard" (in the withheld captions), "a plan", "Molecular does not return", "rotationa", "n-fold vertical mirror places", "all linear centrosymmetric linear molecules", "Icoshedral", "cannot have be chiral", Table 12.2.1's header row, the S₂ entry of Table 12.2.2.

## Wanted at chapter level

None.
