# Exploration: Chapter 16, The Properties of Gases

Written 2026-11-08 from the converted pages (`python3 tools/fetch.py --media 16`, then
`python3 tools/convert.py 16`), every page read in full, the raw HTML checked where the
conversion was in doubt (16.1's image with `src="/"`, the `\nonumber`s and labels of every
page, the inline `![]` images of 16.1, 16.2 and 16.6), and all 15 mirrored images looked at.
The landing page (11811, CC BY-NC-SA, no author tag) prints one paragraph (real gases against
the ideal gas law): an **`intro/` page** (root rule 21.1); its thumbnail credit (Greg L's
animation of gas molecules, Wikipedia) is left out with the thumbnail (Chapter 3's precedent).
**16.S** (550570, Crabtree's course notes, untagged) is the **`summary/` page** (21.2).
**16.E (13655) has no body** (title only): nothing is routed from it (root rule 9), and no
other N.E page holds gas exercises (the full-book pass found bodies only in 19.E and 21.E).
The chapter's only exercises are 16.6's two inline boxes, which stay in 16.6.

**The book turns here from quantum mechanics to gases.** No concept of the book so far names
pressure, volume, an amount of substance or an equation of state; the chapter brings in four
types (below). The pages are a patchwork, each whole: 16.1 is Tuckerman's statistical
mechanics notes (his "Before we discuss ensembles" survives) with LaRue's figures; 16.2 is
Tuckerman and LaRue on van der Waals and Adewumi's PNG 520 notes on Redlich–Kwong (his
equation labels 10.1–10.5 survive as the page's labels); 16.3 is Wikipedia-style text on CO₂
isotherms and Adewumi on roots (tags LaRue, Adewumi); 16.4 is Franzen, LaRue and Larsen;
16.5 is SklogWiki's *Second virial coefficient* with Franzen's calculation (tags SklogWiki,
Franzen; CC BY at the source); 16.6 is the LibreTexts Supplemental *Lennard-Jones Potential*
module (CC BY, with three images labelled "Figure A/B/C" inside the image and a stray
Wikipedia back-link in an answer); 16.7 is untagged.

Repeated material (built once where the book first works it, cited after): the ideal gas
isotherms (16.1.1, drawn again as 16.3.1); the generalized compressibility chart (16.3.4 and
16.4.1, the same Beychok image, the second with its background removed); the van der Waals
equation (16.2, again in molar form in 16.4 and 16.7); the critical constants (worked in
16.3, restated in 16.4); B₂ = b − a/RT (stated in 16.5, derived in 16.7); the hard-sphere
B₂ = 2πσ³/3 (16.5 twice: "Calculation of virial coefficients" and "Hard spheres"). From
earlier chapters: the Boltzmann distribution (13.2), the well depth (5.3, ε here), the dipole
moment (5.5) and polarizability (12.13) behind the attractions, the van der Waals helium dimer
(9.8, a link from 16.6). The Maxwell–Boltzmann distribution that 16.1 quotes ("from our study
of") is Chapter 27's, not built: the fact is stated here with no link.

## Pages

| Page | id | Licence | Authors (tags / page) | Headers (`<h2>`) | Ex | Exr | Fig | Img | Tab | Notes | Eq (numbered / displays) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| intro | 11811 | BY-NC-SA 4.0 | none | none: one paragraph | | | | | | | |
| 16.1 All Dilute Gases Behave Ideally | 13656 | BY-NC-SA 4.0 | Tuckerman, LaRue (list) | opening; Extensive and Intensive Properties in Thermodynamics | | | 2 | 2 (+1 empty, dropped) | | | 11 / 12 |
| 16.2 van der Waals and Redlich-Kwong Equations of State | 13657 | BY-NC-SA 4.0 | Tuckerman, Adewumi, LaRue (list) | opening; The Van der Waals Equation of State; Redlich-Kwong Equation of State | | | 1 | 1 | 1 (a and b, with its CRC footnote) | | 9 / 23 |
| 16.3 A Cubic Equation of State | 13658 | BY-NC-SA 4.0 | LaRue, Adewumi (tags) | Isotherms; Critical Point | | | 4 | | | 1 ("Even today …") | 0 / 7 |
| 16.4 The Law of Corresponding States | 13659 | BY-NC-SA 4.0 | Larsen, LaRue, Franzen (tags) | opening; Compressibility | | | 1 | | | | 2 / 6 |
| 16.5 The Second Virial Coefficient | 13660 | **BY 4.0** | SklogWiki, Franzen (tags) | opening; Introduction; Calculation of virial coefficients; Isihara-Hadwiger Formula; Hard spheres; Van der Waals equation of state; Excluded volume; References; Related reading | | | | | | | 0 / 13 |
| 16.6 The Repulsive Term in the Lennard-Jones Potential | 13661 | **BY 4.0** | none (the book's) | opening; Introduction; The Lennard-Jones Potential (h3: Bonding Potential, Stability and Force of Interactions); References | 3 (3 keyed) | 2 (2 keyed) | 1 | 2 | | | 2 / 4 |
| 16.7 Van der Waals Constants in Terms of Molecular Parameters | 13662 | BY-NC-SA 4.0 | none | none | | | | | | | 4 / 9 |
| summary (16.S) | 550570 | none | Crabtree (tag) | two paragraphs, a figure "7.1", then "Learning Objectives" with "Skill goals" | | | 1 | | | | |
| 16.E | 13655 | BY-NC-SA 4.0 | | **empty** | | | | | | | |

Counts agree with the full-book table (3 examples keyed, 2 exercise boxes keyed, 10 numbered
figures with 16.S's, 1 table, 74 displays counting every `$$`); its "Img" count of 2 missed
the inline images, five in all (417799, 417800, 416021, Figures A and C). No section has objectives or a closing "## Summary". 16.6's "## References" list is
never cited: to `notes` (13.x precedent). 16.5's numbered references are cited in its text
(<sup>[1]</sup>, <sup>[2]</sup>, <sup>[9]</sup>): kept as the page's closing block with its
"Related reading" (9.14, 14.7, 15.7 precedent); the bold volume numbers ({term:47},
{term:39} …) are references, not terms. 16.2's table footnote (Weast, CRC 53rd edition) stays
under the table. Credits as in the table.

### The intro and summary pages

- **intro**: one paragraph, no header; one block, header proposed "Where the Ideal Gas Law
  Breaks" (humanizer by the builder). No concepts (21.1). "it is an very good approximation,
  A “perfect” gas" as printed.
- **summary (16.S)**: two paragraphs, the figure printed as "Figure 7.1" (Davis, Ng and Russ's
  van der Waals isotherms of O₂, made for the course in 2019; kept as the book prints it,
  shipped under the page's licence like Schaller's course figures in 15.1), then the chapter
  "Learning Objectives" box (nine objectives, six skill goals) kept verbatim as a block (12.S–
  15.S precedent). Taught on the built pages: Z (16.1), cubic equations and phase transitions
  (16.2, 16.3), critical constants (16.3), corresponding states (16.4), virial coefficients and
  B₂ (16.5, 16.7), the Lennard-Jones potential (16.6), the van der Waals equation (16.2–16.4),
  compressibility charts (16.3, 16.4), kinds of attraction named (16.6). **Not taught on any
  page**: how intermolecular forces connect quantum properties of isolated molecules to bulk
  properties, dipole moments, polarizabilities and ionization energies as the source of the
  attraction, calculating C₆ from molecular parameters, the square-well potential, phase
  diagrams; "the relationship between the second virial coefficient and compressibility" only
  through 16.7's series. One footnote says so (13.S–15.S precedent).

## Per section

- **16.1** The opening (kinetic derivation, isotherms, Z) has no header: header proposed "Pressure
  from Collisions" up to Figure 16.1.1, then "Isotherms and the Compressibility Factor"
  (humanizer by the builder); the book's header after. Concepts (new): ideal gas; pressure (the
  mechanical definition, type pressure); pressure from wall collisions ((16.1.4), (16.1.7));
  the mean square velocity component ⟨vₓ²⟩ = k_BT/m (stated "from our study of the
  Maxwell–Boltzmann distribution", Chapter 27, so introduced here as a result); the ideal gas
  law ((16.1.9), (16.1.11)); equation of state; isotherm; isochore; an ideal gas never
  condenses; compressibility factor ((16.1.10); the book's "compressibility"); dilute gases
  behave ideally (the title, Figure 16.1.2); system and surroundings (boundary, universe);
  extensive and intensive properties; molar volume; density ρ = N/V. Uses: the Boltzmann
  distribution (13.2). The empty `<img src="/">` before the first image is dropped by the
  converter (a broken duplicate of the thumbnail link that follows it).
- **16.2** The opening paragraph is its own block, header proposed "Two Corrections"; the
  book's headers after. Concepts (new): the van der Waals equation (axiom, an empirical
  adjustment; forms (16.2.1), the product form, and the molar forms of 16.4 and 16.7); the
  hard-sphere potential (u_o); the hard-sphere diameter σ; the van der Waals constant b
  (excluded volume, co-volume, b = (2/3)πσ³N₀); attraction lowers the pressure (F_Net, the
  correction an²/V²); the van der Waals constant a; cubic equations of state; the Redlich–
  Kwong equation (16.2.2); the Redlich–Kwong cubic in Z ((16.2.6)–(16.2.8)); the Redlich–Kwong
  constants ((16.2.3), (16.2.4)); the Redlich–Kwong equation in reduced variables (16.2.9);
  mixing rules. Uses (forward): the criticality conditions (16.3) and the reduced variables
  (16.4), which the page names ("As we recall …", "See Section 16.4"). Table of a and b kept
  as a `div.book-table`: it drives the figures of 16.2, 16.4 and 16.5. "# of molecular
  interactions ∝ P²" (two lines beginning with "#") survive conversion as paragraphs.
- **16.3** Book headers kept. Concepts (new): the van der Waals loop; tie line; Maxwell's
  construction (equal areas); critical point; critical temperature (bold); supercritical
  fluid; the criticality conditions; critical volume (bold); critical pressure; the van der
  Waals critical constants V_c = 3nb, RT_c = 8a/27b, P_c = a/27b²; the roots of a cubic
  equation of state (one, three equal, three); the gas–liquid coexistence region;
  compressibility charts (Standing and Katz). The note "Even today …" kept as a titled note.
  The book writes v̄ as ν̄ in the three cases ("$\bar{\nu} > b$"): set as printed, in ink.
- **16.4** The opening is its own block, header proposed "Scaling by the Critical Point"; the
  book's header after. Concepts (new): reduced variables (bold "reduced state", "reduced
  variables"); the van der Waals equation in reduced variables (16.4.2); the law of
  corresponding states (bold); the critical compressibility of a van der Waals gas, Z = 3/8;
  the compressibility factor in reduced variables; the generalized compressibility chart.
  Reinforces: the critical constants (restated, molar), Z (16.1), the Redlich–Kwong form
  (16.2.9). Argon at 300 K and ethane at 600 K (T_r = 2.0) is the page's worked case.
- **16.5** The opening (two sentences) is its own block with the book's "Introduction" after:
  header proposed "Beyond the Ideal Term" for the opening; the book's headers after,
  "Excluded volume" included. Concepts (new): the virial equation of state (bold, third
  virial coefficient as a term); the intermolecular pair potential Φ₁₂; the Mayer
  f-function; configuration integrals; the second virial coefficient (bold); B₂ of hard
  spheres; the Isihara–Hadwiger formula; B₂ of a van der Waals gas. Uses: the Boltzmann
  factor (13.2), the hard sphere (16.2), the van der Waals equation (16.2).
- **16.6** The opening paragraph (who proposed it, what it accounts for) is its own block,
  header proposed "Two Nonbonding Atoms"; the book's headers after. Concepts (new): the
  Lennard-Jones potential (bold; (16.6.1), (16.6.2), A = 4εσ¹², B = 4εσ⁶); σ; the van der
  Waals radius; kinds of intermolecular attraction (dipole–dipole, dipole–induced dipole,
  London); repulsion and attraction along the curve; forces along the curve (repulsive inside
  r_min, attractive outside, none at it); evaluating the potential (skill, Example 16.6.2).
  ε is 5.3's well depth (`well-depth`, a variables row). Links: 9.8's van der Waals helium
  dimer. Examples 16.6.1–16.6.3 kept with their solutions; exercises below.
- **16.7** No header: two blocks proposed, "From the Equation to B₂" (to B_{2V} = b − a/RT)
  and "From the Molecules to a and b" (from "Using a combination …"). Concepts (new): the
  virial expansion of the van der Waals equation; the dispersion coefficient C₆; the hard
  sphere with an r⁻⁶ attraction (16.7.1); van der Waals constants from molecular parameters
  ((16.7.2)–(16.7.4), corrected below). Reinforces: B₂ = b − a/RT (16.5), b = (2/3)πσ³N₀
  (16.2; "four times the volume of the particle").

## Equation numbers

One number per display, from the converter's `n=`: (16.1.1)–(16.1.11), (16.2.1)–(16.2.9),
(16.4.1)–(16.4.2), (16.6.1)–(16.6.2), (16.7.1)–(16.7.4); 16.3 and 16.5 number nothing (every
display is `\nonumber` or `align*` at the source). The `split` displays of 16.1 are one number
each, as on the live page; 16.7's unstarred two-row `align` (b and a) is one number, (16.7.3),
where the live page numbers each row, so the live page's (16.7.5) is our (16.7.4) (the user's
rule, 2026-11-08). 16.1's labels run 2.1–2.11 out of order ((16.1.10) is labelled 2.11): no
citation uses them. Every `[ref:eq:…]` resolves; the citations by printed label stay as
printed: Example 16.6.2's "equation 2.1" is (16.6.1) (a link), and 16.2's "Equations 10.2a,
10.2b, and 10.3 into Equation 10.4" (correction below).

## Exercise count report (root rule 13)

Counted from the converted pages.

- **Inline exercises** (`box-exercise`): **2 printed** (16.6.1, 16.6.2), both **keyed**
  (Answer parts), **0 unkeyed**; both explanations (name three kinds of attraction; where the
  force is repulsive, attractive, zero). 16.6.2's answer cites "Figure C" (the force panel,
  folded into the Lennard-Jones figure below) and carries a stray Wikipedia back-link inside
  "the" ("t[↑]he"): the builder keeps the words and drops the link. 16.6.1's answer begins
  "From section 2.1" (the Supplemental module's own section; as printed, footnote below). Both
  in 16.6, kind `exercise`, `place: end` (Chapter 1's choice: the Exercises document).
- **Worked examples**: 3 (16.6.1 "The van der Waals Radius", 16.6.2, 16.6.3), all with a
  Solution part; kept in the text.
- **Problem or question lists**: none.
- **16.E**: empty; nothing routed.
- **In all**: 2 cards, 2 keyed, 0 unkeyed.
- **Proposed new: 13**, where a concept would otherwise have none: 16.1 two (the pressure of
  N₂ at 300 K from Nm⟨vₓ²⟩/V and from nRT/V, the same number two ways; sort N, n, V, P, ρ, V̄,
  T into extensive and intensive and say why ρ and V̄ are intensive); 16.2 two (the pressure of
  1.00 mol CH₄ in 0.250 L at 300 K from the van der Waals equation and Table 16.2.1 against the
  ideal value, and which correction wins; the hard-sphere diameter of N₂ from its b, 3.1 Å);
  16.3 two (T_c and P_c of CO₂ from Figure 16.3.2's a and b, 304 K and 73.7 bar; how many real
  roots the cubic has at a pressure inside, below and above the loop, and above T_c); 16.4 two
  (the temperature at which ethane corresponds to argon at 225 K; the van der Waals Z_c = 3/8
  from the critical constants, against the chart's value near 0.27–0.29 read off Figure
  16.4.1); 16.5 two (B₂ of hard spheres of σ = 3.40 Å in cm³/mol; B₂ = b − a/RT of N₂ at
  300 K from Table 16.2.1, its sign and what it says about which force wins); 16.6 two (where
  the Lennard-Jones potential has its minimum, r_min = 2^{1/6}σ, and the depth there; V for Xe
  at r = σ and r = r_min from Example 16.6.1's numbers); 16.7 one (b for argon from σ = 3.40 Å,
  about 49.6 cm³/mol, against its hard-sphere B₂). Every answer checked by computation by the
  builder.

## Figures, in book order (root rules 14, 24, 25, 26, 28)

Rule 14 as rewritten today: a figure starts from the book's and usually replaces it; motion
where the idea moves; a point the reader sees at once; little effort to read; folds where the
book draws one scene several times. The chapter's own numbers: Table 16.2.1's a and b
(H₂O, N₂, CH₄, C₂H₆), Figure 16.3.2's CO₂ constants (a = 0.366 m⁶ Pa mol⁻², b = 42.9 × 10⁻⁶
m³ mol⁻¹, T_c = 304.1 K, P_c = 7.37 MPa), 16.4's critical temperatures of argon (150.72 K) and
ethane (305.4 K), 16.6's ε and σ for Ar (0.997 kJ/mol, 3.40 Å) and Xe (1.77 kJ/mol, 4.10 Å),
and the curves of Figures 16.1.2 (OpenStax) and 16.4.1 (Beychok), which the figures may read
off as the book's data, their sources named. Every figure opens on these; no literature
number is needed. The arrows of the book's drawings are force vectors (symbolic, rule 24.1);
what moves is molecules.

| Image(s) | Section | What the book shows | Proposed treatment |
|---|---|---|---|
| 417799 (unnumbered, LaRue) | 16.1 | red particles, a wall, −Fₓ on the particle and Fₓ on the wall | **Replace, moving, 2D** (`sim-wall-pressure`; flow by animation, variation by slider): particles fly in a box; each one that strikes the right wall flashes the impulse 2mvₓ it hands over; a strip beneath plots the force on the wall against time, spiky for a few particles, and its running average levelling onto Nk_BT/V. Sliders: T, N (a handful to a few hundred), the box edge a. **Point: each bounce gives the wall a kick of 2mvₓ; the kicks from many particles add up to a steady push, the pressure, and it equals Nk_BT/V.** Readout (16.1.7) and (16.1.9) with live numbers, the measured average beside the prediction. Kinematic (molecules move). Particles drawn in one colour as a category (no element named), the force arrow symbolic in `force`. Eyebrow "Figure"; original kept. |
| `src="/"` | 16.1 | empty image | dropped by the converter (a broken image tag at the source). |
| 16.1.1 (61237, Tuckerman) + 16.3.1 (79137, public domain) | 16.1, 16.3 | ideal isotherms T₁ > T₂ > T₃ and isochores ρ₁ > ρ₂ > ρ₃; ideal isotherms for one mole | **Fold, replace, still, 2D** (`sim-ideal-isotherms`, in 16.1; variation by slider): P–V beside P–T, the book's three curves each; sliders T and ρ draw the reader's own isotherm and isochore over them, a state point on each that the reader drags along its curve with PV (the area of the rectangle under the point, shaded) held fixed. **Point: an ideal isotherm is a hyperbola, PV the same at every point, so it never flattens or breaks: there is no liquid; an isochore is a straight line through the origin.** Readout PV = nRT with live numbers. Still (no clock). Eyebrow "Figure 16.1.1 + 16.3.1"; both originals; 16.3's "Figure 16.3.1" links it (Chapter 1's 1.1.5 + 1.2.1 precedent). |
| 16.1.2 (58236, OpenStax, CC BY) | 16.1 | Z against P for N₂, CH₄, H₂, O₂, CO₂ and the ideal gas | **Faithful copy, still, 2D** (standardisation only): the five curves read off the book's figure (OpenStax named in the row), the ideal line, the shaded Z < 1 band, every curve meeting Z = 1 as P → 0; hover names each gas. The y axis reads Z with no unit (the image's "Z (kPa)" is corrected; footnote below). Variation belongs to 16.4's figure, where it teaches. Original kept. |
| 417800 (unnumbered, LaRue) | 16.1 | system, boundary, surroundings | **Kept** as the book draws it (a labelled sketch; nothing moves or varies). |
| 16.2.1 (63561, Tuckerman) | 16.2 | two hard spheres at contact, the excluded sphere of radius σ in cross-section | **Replace, still, 2D** (`sim-excluded-volume`; variation by slider and choice): sphere 1 fixed with its shaded excluded sphere of radius σ; the reader drags sphere 2 around it and its centre stops on the shaded boundary. Choice: the gas of Table 16.2.1, which sets σ from the table's b through b = (2/3)πσ³N₀ (H₂O 2.89, N₂ 3.14, CH₄ 3.24, C₂H₆ 3.70 Å). **Point: no other centre can come within σ of this one, so each pair shuts out a sphere of radius σ, and half of it is charged to each molecule.** Readout: 4πσ³/3 per pair, 2πσ³/3 per molecule, b = (2/3)πσ³N₀ equal to the table's b. 2D: the book draws a cross-section ("shown in cross-section") and the lesson is one radius, so no 3D (rule 28.5). Eyebrow "Figure 16.2.1"; original kept. |
| 416021 (unnumbered, LaRue) | 16.2 | a molecule at the wall, F_Attract and F_Impact | **Replace, moving, 2D** (`sim-wall-attraction`; flow by animation, variation by slider): 16.1's box with attractions on: a molecule heading for the wall is tugged back by the neighbours within range behind it (faint pair lines), so it arrives slower and hits softer. Sliders: the attraction a, and n/V. **Point: a molecule about to strike the wall is pulled back by the molecules behind it, and the number of such pulls grows with the square of the density, so the pressure falls by an²/V².** Readout (16.2.1)'s two terms with live numbers, F_Net = F_Impact − F_Attract. Kinematic. Eyebrow "Figure"; original kept. Its code reuses `sim-wall-pressure`'s box (the builder of 16.2 copies it). |
| Table 16.2.1 | 16.2 | a and b of H₂O, N₂, CH₄, C₂H₆ | Kept as a `div.book-table` with its footnote; its numbers drive 16.2's, 16.4's and 16.5's figures. |
| 16.3.2 (79136, Wikipedia) | 16.3 | van der Waals isotherms of CO₂ at 10, 31, 40, 70 °C, the 10 °C tie line A–B, p_C and V_C | **Replace, still, 2D** (`sim-vdw-isotherms`; variation by slider): the book's four isotherms faint, the reader's in full; slider T from 0 to 80 °C, opening at 10 °C; the Maxwell tie line computed live with its two equal areas shaded and their values; the dashed ideal isotherm at the same T; the coexistence curve traced through the tie-line ends. Special: T = 31 °C (T_c; dashed circle, slight snap): the loop closes to the critical point, marked with p_C and V_C. **Point: below 31 °C the van der Waals isotherm loops, and a flat line drawn so the two shaded areas are equal marks where the gas condenses; warming shrinks the loop until it closes at the critical point, and above it the isotherm approaches the ideal one.** Readout: P_sat, the liquid and vapor molar volumes A and B, the two areas. CO₂'s constants from the caption (T_c = 304.0 K and P_c = 73.7 bar from a and b, as printed). Eyebrow "Figure 16.3.2"; original kept. |
| 16.3.3 (344851, Adewumi) | 16.3 | three isotherms (super-, critical, subcritical), the S-curve, A, A′, B, B′, the dome, v̄ = b | **Replace, still, 2D** (`sim-cubic-roots`; variation by slider): a reduced van der Waals isotherm and a horizontal isobar; sliders T_r and P_r (the isobar); every crossing marked as a root, the book's A, A′, B, B′ labelled on the subcritical curve; an inset complex plane plots the cubic's three roots in V̄_r. Specials: T_r = 1 with P_r = 1 (three equal roots); the loop's dip and peak (two roots meet). **Point: an isobar crosses a subcritical isotherm three times only between the loop's dip and peak; outside that band, and above T_c, it crosses once, and the inset shows the other two roots leaving the real axis as a complex pair; at the critical point all three meet.** Readout: the cubic with live coefficients and its roots, which are liquid, vapor and meaningless. Eyebrow "Figure 16.3.3"; original kept. |
| 16.3.4 (79138, Beychok) = 16.4.1 (79141, the same chart, background removed) | 16.3, 16.4 | Z against P_r at T_r = 1.0–2.0 | **Fold, replace, still, 2D** (`sim-corresponding-states`; variation by slider and choice, a morph): the four gases of Table 16.2.1 at one reduced temperature, each at its own T = T_rT_c (critical constants from a and b, the legend listing each T); a choice of axis, P (bar) or P_r: in bar the four Z curves fan apart, and the switch morphs them onto one curve; the book's measured chart curve for that T_r (read off Figure 16.4.1) dashed beside. Slider T_r with soft detents at the chart's 1.0, 1.1, 1.2, 1.3, 1.5, 2.0. **Point: four different gases, plotted against their own critical points, fall on one curve; the measured chart follows the same shape, though van der Waals's minimum sits too high (its Z_c is 3/8).** Readout: Z = V̄_r/(V̄_r − 1/3) − 9/(8V̄_rT_r) with live numbers. Lives in 16.4 (*orchestrator*, below); 16.3's "Figure 16.3.4" links it with a footnote. Eyebrow "Figure 16.3.4 + 16.4.1"; both originals. |
| none | 16.5 | | **Sim, still, 2D** (`sim-second-virial`; variation by slider and choice): B₂ against T for hard spheres (flat at 2πσ³/3) and for the van der Waals gases of Table 16.2.1 (b − a/RT); slider T marks the reader's temperature on every curve. Special: B₂ = 0 for the chosen gas (T = a/Rb; dashed circle, slight snap), named only as "B₂ = 0" (the book never names the Boyle temperature). **Point: hard spheres alone always make B₂ positive; attraction pulls it negative at low temperature, and it changes sign where a/RT = b.** Readout B₂ = b − a/RT with live numbers. No book figure: a Sim, the second virial coefficient's only picture. |
| Figure A (167668) + 16.6.1 (167669, "Figure B" in the image) + Figure C (167670) | 16.6 | two balls brought together in four panels; the curve with σ and ε; the curve with the repulsive, zero and attractive force regions | **Fold, replace, still, 2D** (`sim-lennard-jones`; variation by slider and drag): two atoms on a line above, the reader drags their separation r; below, V(r) with its r⁻¹² and r⁻⁶ terms dashed (legend), the state point on the curve and a force arrow on the atoms (symbolic) that points apart inside r_min, together outside it and vanishes at it. Sliders ε and σ, opening on Ar (0.997 kJ/mol, 3.40 Å) with soft detents at Xe (1.77, 4.10). Specials on r: σ (V = 0) and r_min (F = 0). **Point: far apart the atoms barely feel each other; brought closer, the r⁻⁶ attraction draws them into the well; past its bottom the r⁻¹² wall shoots up; σ slides the curve sideways and ε sets its depth.** Readout (16.6.1) with live numbers. Still: the book's four panels are positions, which the drag reaches (no clock). Eyebrow "Figure 16.6.1" with the two unnumbered panels as folds; three originals; Exercise 16.6.2's "See Figure C" links it. |
| none | 16.7 | | Offered below (`sim-b2-potential`). |
| "Figure 7.1" (495321) | summary | van der Waals isotherms of O₂ with the coexistence region drawn in red | **Kept** on the summary page as the book prints it (printed label kept). |

**3D**: none. The hard spheres of 16.2.1 are drawn by the book in cross-section; nothing else in
the chapter is an arrangement in space.

### Extra simulations proposed (root rule 15)

Only where motion or variation teaches (precedent). Two survive:

- **`sim-b2-potential` in 16.7** (recommended): the hard sphere with an r⁻⁶ attraction of
  (16.7.1), with σ and C₆ = 4εσ⁶ from 16.6's argon; above, the integrand [e^{−u/kT} − 1]r²
  shaded (the hard core's negative block, the attractive tail's positive one); below, B₂(T)
  computed exactly beside the series result (16.7.2) as corrected. Slider T. The reader sees
  the core give b and the tail give −a/RT, and where the high-temperature series stops
  holding. A Lennard-Jones choice (Ar, Xe) shows the same sign change.
- **A P–V̄–T surface of the van der Waals equation** (offered, not recommended; mathematical
  3D): the isotherms of 16.3 as slices of one surface with the coexistence dome. 16.3's
  temperature slider already sweeps the slices.

Judged and dropped: a Maxwell–Boltzmann speed figure for 16.1 (Chapter 27's); an equation-of-
state chooser comparing ideal, van der Waals and Redlich–Kwong (16.4's figure carries the
comparison that matters).

## Derivation candidates (root rule 29)

| Where | What | Score | Decision |
|---|---|---|---|
| 16.1, (16.1.1) → (16.1.9) | Newton's second law, the elastic reversal Δvₓ = −2vₓ, Δt = 2a/vₓ, the force on the wall, P = ⟨F⟩/A over N particles, ⟨vₓ²⟩ = k_BT/m, a³ = V, Nk_B = nR | printed as a block with words, 9 lines; facts imported 3 (Newton's second law, ⟨vₓ²⟩ from Maxwell–Boltzmann, Nk_B = nR); one line unprinted (Nk_B = nR) | **Build**: "Derivation · the ideal gas law from wall collisions", results (16.1.4), (16.1.7), (16.1.9). *Orchestrator*: the fact R = N₀k_B (so Nk_B = nR) is stated nowhere in the book; carry it with no provenance, or stop at Nk_BT/V and keep the printed second line in the text. |
| 16.1, (16.1.11) and the Z forms | divide by n; ρ | printed, 2 moves | Stays. |
| 16.2, b = (2/3)πσ³N₀ | sphere of radius σ, half per molecule, per mole | prose, 3 moves; imported 1 (volume of a sphere), run 1, joins 0: score 2 | Stays; the figure carries it. |
| 16.2, (16.2.2) → (16.2.5) → (16.2.8) → (16.2.9) | multiply out the Redlich–Kwong equation into a cubic in v̄; define A, B; substitute v̄ = ZRT/P; then (16.2.3), (16.2.4) and P_r, T_r into (16.2.8) | hidden ("we can transform", "we get", "by introducing"); 4 + 3 + 4 moves; imported 2 (Z, 16.1; the reduced variables, 16.4); longest run 4; joins 3: score 9 | **Build**: "Derivations · the Redlich–Kwong cubic", results (16.2.5), (16.2.8), (16.2.9); notes correct (16.2.5)'s missing a and (16.2.3)'s 0.42780. |
| 16.2, criticality → (16.2.3), (16.2.4) | at the critical point the cubic in Z has three equal roots, (Z − Z_c)³ = 0; match coefficients: Z_c = 1/3, A − B − B² = 1/3, AB = 1/27; (B + 1/3)³ = 2/27, B = (2^{1/3} − 1)/3 = 0.086640, A = 1/(27B) = 0.42748; a and b from A and B at T_c, P_c | hidden ("We know what follows at this point"); 7 moves; imported 2 (three equal roots at the critical point, 16.3; the criticality conditions, 16.3); run 7; joins 1: score 10 | **Build**: "Derivation · the Redlich–Kwong constants". *Orchestrator*: the book points at the derivative conditions; the triple-root route uses 16.3's own statement ("three real and equal roots at this special and particular point") and is far shorter. Proposed: the triple root, the derivative conditions cited as the reason it holds. |
| 16.3, the criticality conditions → V_c, T_c, P_c | the two derivative conditions, divide, solve, substitute | printed as blocks with words, 9 lines | **Build**: "Derivations · the van der Waals critical constants", results V_c = 3nb, RT_c = 8a/27b, P_c = a/27b². |
| 16.3, roots of the cubic | prose, no equations | | Stays; `sim-cubic-roots` shows it. |
| 16.4, (16.4.1) → (16.4.2); Z_c = 3/8; Z in reduced variables | substitute P = P_rP_c, V_m = V_rV_c, T = T_rT_c with the critical constants, factor a/27b²; Z_c = P_cV_c/RT_c = 3/8; Z = (3/8)P_rV_r/T_r with P_r from (16.4.2) | hidden ("By substitution", "can also be cast"); 5 + 2 + 3 moves; imported 2 (the critical constants, 16.3, `drv`; Z, 16.1); run 5; joins 2: score 9 | **Build**: "Derivations · the van der Waals equation in reduced variables", results (16.4.2), Z_c = 3/8 and the reduced Z. |
| 16.5, hard-sphere B₂ | ∫₀^σ (−1)r²dr | printed, 2 lines (twice) | Stays (short printed block, 12.8.1 / 15.2 precedent). |
| 16.5, B₂ from Z₂ | needs B₂ = −(Z₂ − Z₁²)/2V, which the book never states | | Stays: building it would invent a fact. |
| 16.6, Example 16.6.2 | substitution into (16.6.1) | | Never (rule 29.1). |
| 16.7, the van der Waals virial series | 1/(1 − x) series, multiply, collect, compare with the virial series | printed as a block with words, 4 lines | **Build**: "Derivation · the second virial coefficient of a van der Waals gas", result B_{2V} = b − a/RT (16.5's statement, linked). |
| 16.7, (16.7.1) → (16.7.2) → (16.7.4) | split (16.5)'s integral at σ: the core gives 2πN₀σ³/3 (16.5's hard-sphere result, `drv`-free, printed); the tail, with e^x ≈ 1 + x for C₆/kTr⁶ small, gives −2πN₀C₆/3kTσ³; factor; name b and a; compare with b − a/RT | hidden ("We can write"); 6 moves; imported 3 (B₂'s integral, 16.5; hard-sphere B₂, 16.5; e^x ≈ 1 + x); run 6; joins 2: score 11 | **Build**: "Derivation · the van der Waals constants from molecular parameters", results (16.7.2), (16.7.3), (16.7.4); the derivation follows the correct mathematics and its notes correct the book's factor of 3 (below). |

Eight derivation records to build (16.1; 16.2 × 2; 16.3; 16.4; 16.7 × 2), five of them hidden
or partly hidden.

## Corrections spotted (root rule 13)

The book's words kept; a numbered footnote where each applies. *Checked by computation* marks a
correction worked here; *from memory, unchecked* one that rests on a literature fact the
builder checks first.

- **intro**: "an very good approximation, A “perfect” gas" (as printed; no footnote).
- **16.1**: "Here, t represents the time interval" (Δt; minor, no footnote); "Before we discuss
  ensembles and how we construct them" (ensembles are not discussed here; Chapter 17 takes
  them up); P = ρRT with ρ = N/V: with a number density the law reads P = ρk_BT (P = ρRT needs
  ρ = n/V); "the ideal gas equation of state can be written in an extensive form" before three
  forms of which the last two are intensive (one footnote with the last); Z "is called the
  compressibility" (it is the compressibility factor, as 16.3 and 16.4 call it); Figure 16.1.2's
  axis "Z (kPa)" (Z has no unit; through the copy, and a footnote on the caption); the
  caption's missing parenthesis in 16.1.1 and "iwht" (as printed).
- **16.2**: "# of molecular interactions ∝ P²" and "P ∝ 1/V" (the number of attracting pairs
  grows as (n/V)², which is what gives an²/V²); (16.2.3)'s 0.42780 against (16.2.9)'s 0.42748
  (Ω_a = 1/[9(2^{1/3} − 1)] = 0.427480; *checked by computation*); (16.2.5)'s coefficient
  "1/T^{0.5}" should read a/T^{0.5} (expanding (16.2.2); *checked by computation*); "by
  introducing Equations 10.2a, 10.2b, and 10.3 into Equation 10.4" (the definitions of A and B
  are (16.2.6) and (16.2.7)); "P_{VDW} = P_{Real} + a(?)" (the book's device, as printed).
  *From memory, unchecked, no footnote planned*: Table 16.2.1's N₂ a = 1.43 L² bar mol⁻²
  (CRC tables give about 1.37–1.41); the builder keeps the book's number unless a check says
  otherwise.
- **16.3**: "hypberbolas" (as printed); Figure 16.3.2's caption "a = 0.366 m⁶ Pa and b = 42.9
  10⁻⁶ m³" (per mole: m⁶ Pa mol⁻², m³ mol⁻¹; through the row's `figure`); "(P_A′ < P < P_B′)"
  for the range across the loop (the figure's dip is A′ and its peak B, so P_A′ < P < P_B, as
  the next sentences use); "Supercritical isotherms ($T > T_c$:" (as printed); Figure 16.3.4 is
  a generalized chart against reduced pressure, the same as 16.4.1, not Standing and Katz's
  natural-gas chart against pressure (footnote at the citation); ν̄ for v̄ (as printed, no
  footnote).
- **16.4**: "Equation vdw means the critical parameters … can be expressed in terms of a and b"
  (the reduced form follows from the critical constants, not the other way round);
  "Peng-Robertson" (Peng–Robinson; *from memory, unchecked*, minor); "difference gases",
  "there critical points", "Law of Corresponding State}s" (as printed).
- **16.5**: "P/rkT" (P/ρkT); "an infinite repulsive wall at a particle radius σ" (σ is the
  diameter, the distance between centres at contact, which 2πσ³/3 needs); the "[9]" cited for
  the hard-sphere integral is Hadwiger's book on convex bodies (as printed).
- **16.6**: σ "is thus referred to as the van der Waals radius. It is equal to one-half of the
  internuclear distance" (σ is the closest distance between centres; the radius is σ/2, as
  Example 16.6.1 computes); Figure 16.6.1's caption "σ/r)^{12}" and "σ/r^6" (the terms are
  (σ/r)¹² and (σ/r)⁶; through the row's `figure`); Example 16.6.2's −0.96 kJ/mol comes from
  rounding 0.85¹² and 0.85⁶ to two places; unrounded it is −0.94 kJ/mol (*checked by
  computation*; footnote); Example 16.6.3 states σ = 4.10 Å and then compares with "4.0
  angstroms"; Exercise 16.6.1's answer "From section 2.1" (the source module's section; this
  page's opening names the three); Figure A's "minimum bonding potential" (as printed).
- **16.7**: (16.7.2)'s bracket [1 − C₆/(3k_BTσ⁶)] and (16.7.3)'s a = 2πN₀²C₆/(9σ³): the tail
  integral ∫_σ^∞ r⁻⁴dr = 1/(3σ³) gives [1 − C₆/(k_BTσ⁶)] and a = 2πN₀²C₆/(3σ³) (*checked by
  computation*: a numerical B₂ for C₆/kTσ⁶ = 0.05 gives 1.9888 against 1.9897 for the
  corrected form and 2.0595 for the printed one); the `\cdot` that ends the series (a TeX slip
  for ⋯, set as printed); "Viral" (as printed); "to simplifying variables" (as printed). The
  forms of `molecular-vdw-constants` are written corrected (*orchestrator*: a form that keeps
  the book's factor would teach a wrong equation on the concept card).
- **summary**: the objectives no built page teaches (one footnote, above); "embodies",
  "attracive" (as printed).

## Licences of the figures

| Figure | Credit as printed | Proposal |
|---|---|---|
| 417799, 417800, 416021 (LaRue) | none per image | shipped under the page's licence |
| 16.1.1, 16.2.1 (Tuckerman screenshots) | none | shipped under the page's licence |
| 16.1.2 | "from Openstax (CC-BY)" | shipped under its own licence with credit |
| 16.3.1 | "(public domain)" | shipped |
| 16.3.2 (Wikipedia) | none printed | shipped under the page's licence (the 16.3 page); *from memory, unchecked*: the Wikimedia original is public domain or CC BY-SA |
| 16.3.3 (Adewumi, PNG 520) | none | shipped under the page's licence |
| 16.3.4, 16.4.1 | "Public domain; Milton Beychok" (16.4.1) | shipped |
| Figures A, 16.6.1, C | none | shipped under the page's licence (CC BY) |
| Summary "Figure 7.1" | "Figure by John Davis, Jamie Ng, and Brendan Russ (2019W)" | shipped under the page's licence with the printed credit (course figure, 15.1's Schaller precedent) |

**Page licences**: 16.5 and 16.6 are tagged CC BY and shared as BY-NC-SA with the rest
(Chapter 1's 1.1 precedent). 16.5's text is SklogWiki's (*from memory, unchecked*: SklogWiki is
CC BY-NC-SA 3.0), compatible with sharing it BY-NC-SA. No page carries Wikipedia text under
its own BY-SA licence as 15.2 did; 16.3's first paragraphs read like Wikipedia's *Van der
Waals equation* but the page credits none, so it stays BY-NC-SA.

## What is new to OmniStax here

- **Four new types**: `pressure` (Pa), `volume` (m³), `molar-volume` (m³/mol), `amount`
  (mol); `npm run colours:default` dealt them colours and kept every existing one. P, P_c,
  P_sat and the pressure terms wear pressure; V, V_c volume; V̄, V_m, v̄, b and B₂ per mole
  molar volume; n amount; T and T_c temperature; σ, r, r_min length; ε, V(r), Φ₁₂, u energy;
  Fₓ and the wall forces force. Untyped and in ink: Z, a (its unit is not one of the types),
  ρ (a number density; no density type), R, k_B, N, N₀, A and B in both senses, C₆, the
  mixing-rule symbols, the configuration integrals. *Orchestrator*: the reduced variables
  P_r, T_r, V_r are dimensionless; they are typed here as the quantity they scale (pressure,
  temperature, volume), so that P and P_r read as one kind; the alternative is ink.
- **Symbols**: 42 new (33 with macros), among them `n_mol` (`\knmol`, since `n` is the
  quantum number with no macro), `b_vdw` (`\kbvdw`), and two keys for σ, `sigma_hs` (the
  hard-sphere diameter, 16.2, 16.5, 16.7) and `sigma_lj` (the Lennard-Jones σ, 16.6), both
  printed σ. Reused where the quantity is the same or the meaning is new in another chapter:
  P (1.1's radiated power), V, T, R (9.1's internuclear distance), a, A, B, k, k_B, N, N₀
  (13.2's population), u, r, r_12, m, F, ρ, Z, x, β, α, S, b_m, a_i, C₆ (12.2's rotation).
  127 variables rows; `redefines` on 16.2's a and A, 16.3–16.7's a, 16.6's V, A and B, and
  16.7's B₂ (per mole, where 16.5's is per molecule). In 16.2, A is the Redlich–Kwong
  parameter; the area in P = F/A is written plain.
- **65 concepts, 100 edges** (Hasse-reduced against the merged book: 2 redundant edges removed
  before the merge), 63 forms. The forms of the Redlich–Kwong constants and of the molecular
  van der Waals constants are written as corrected.

## The chapter's answer to root rule 23

A gas is molecules hitting a wall, and the printed chapter shows it as six red dots and an
arrow. The stunning version starts there: the reader watches particles fly and the kicks on
the wall blur into a steady pressure that lands on Nk_BT/V; turns the attraction on and
watches the molecules nearest the wall get tugged back; drags a temperature slider through
CO₂'s isotherms and sees the van der Waals loop appear, the equal areas fix the tie line, and
the loop close at 31 °C; moves an isobar and watches two roots of the cubic collide and leave
for the complex plane; switches four gases from bar to reduced pressure and watches their
curves fall onto one; cools a gas through B₂ = 0; pushes two argon atoms together down the
Lennard-Jones well and up its wall. Every number on the way is the book's: Table 16.2.1, the
CO₂ constants of Figure 16.3.2, the argon and xenon parameters of 16.6, and the curves of its
own charts.

## Tool changes made for this chapter

None. The converter handles every page; its one warning (16.1's `<img src="/">`) is a broken
tag at the source, dropped as it should be. `md2html.py` drafts all nine pages; every maths
span of the drafts (309 in the text, 12 in the drafts' JSON) sets under KaTeX in strict mode
without an error. Notes for builders: the inline `![]` images (417800, 416021, Figures A and C)
come through as `<p><img>` (Chapter 4's precedent), not figure rows; 16.6's exercise answer
carries the stray "t[↑]he" link; 16.2's "#" lines are paragraphs.
