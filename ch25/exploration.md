# Exploration: Chapter 25, Solutions II - Nonvolatile Solutes

Written 2026-11-08 from the converted pages (`python3 tools/fetch.py --media 25`, then
`python3 tools/convert.py 25`), every page read in full and the 6 mirrored images looked at (5
rendered; the SVG of Figure 25.6.1 read from its alt text and the Wikimedia original's description).
The landing page (11821) prints **no text** (only the site's list of sections): no `intro/` page and
no `intro` record (Chapters 4 and 22's precedent); its `intro/source.md` is kept as converted, empty.
**There is no 25.S and no 25.E page.** **25.8 "Homework Problems" (14512)**, recorded in
`modules.json` as a section, is the chapter's exercise page in all but name: it holds a stray copy of
Chapter 4's uncertainty-principle passage (Zielinski's *Quantum States of Atoms and Molecules*, the
same passage 19.E holds) and one problem, **Exercise 25.8.1** (a baseball and an electron at 91.3
mph). It is converted to `ch25/25.8/source.md` and **not built**; its one problem is already 1.9's
card `e3` (19.E.1 was the same), so it is **not routed again** (root rule 9; 19.E's precedent).

**Where the pages come from.** No page prints a Contributors list and no page carries an author tag.
The pages are splices: 25.1 is a short paragraph (it repeats the closing footnote of 25.2); 25.2 is
Peverati's *Live Textbook of Physical Chemistry* §14.1, still printing **his labels** (`eq:14.1.1`…,
"chapter 11", "Equation 11.4.2", "Equation 13.1.1", "chapter 10", all linked to Peverati's book) and
its footnote; 25.3 and 25.4 are Rudolf Winter's CH431 notes (no labels: their displays number
nothing); 25.5 is the same notes with `Eq1`–`Eq18` labels; 25.6's opening is Winter's, its middle a
Wikipedia excerpt ((25.6.1), A and B, Figure 25.6.2) and its note "Importance for Colloids"
Winter's again; 25.7 is Wikipedia's "Debye–Hückel equation" and "Davies equation" articles (its
Figure 25.7.1, and "Davis Equation" as a header), and the page is CC BY-SA 4.0.

**Repeated material** (built once where the book first works it, cited after; Chapter 24 was prepared
at the same time and merged first, and this chapter reuses its concepts): Chapter 24's
24.7 ("Activities of Nonideal Solutions") already states the **activity** a_B = γ m_B/m° and
μ = μ° + RT ln a, the **activity coefficient**, the **mean activity coefficient** γ± = √(γ₊γ₋) and its
general form, a **Debye–Hückel law** (in a wrong form, with |z₊ + z₋| and no minus sign), the
**ionic strength** I = ½(m₊z₊² + m₋z₋²)/m°, the solute standard state on Henry's scale, the
**sucrose** example with a₁ = P₁/P₁*, ln a₁ = ln x₁ ≈ −x₂ and the **osmotic coefficient** φ
(ln a₁ ≈ −x₂φ); 24.4 has **Raoult's law** and μ = μ* + RT ln x; 24.2 the Gibbs–Duhem equation; 24.8
the standard states of activities. So 25.2's whole chain ((25.2.1)–(25.2.9)) restates 24's activity
and Raoult concepts in mole-fraction form, 25.3 and 25.4's "ln a₁ ln x₁ ≈ −x₂" is 24.7's, 25.5's
γ± and "the Gibbs-Duhem trick we did for the sucrose problem" point back to 24.7, and 25.6's I and
DH law were first stated (briefly) in 24.7. From earlier chapters, all merged: the chemical potential
(22.5), dG with μ dn (22.5's `fundamental-equations-composition`), (∂G/∂P)_T = V (22.4's
`gibbs-first-derivatives`), the Gibbs–Helmholtz equation (22.7), the standard state of a gas (22.6),
fugacity and μ from fugacity (22.8), the enthalpy of fusion (19.8) and of vaporization (23.4), equal
chemical potentials in two phases (23.3), the Clausius–Clapeyron integration (23.4), the ideal gas law
and molar volume (16.1), the Boltzmann factor (17).

## Pages

| Page | id | Licence | Headers (`<h2>`, deeper in brackets) | Ex | Exr | Fig | Img | Tab | Notes | Eq (numbered / displays) |
|---|---|---|---|---|---|---|---|---|---|---|
| landing | 11821 | BY-NC-SA | none, no text | | | | | | | |
| 25.1 Standard State of Nonvolatile Solutions | 14513 | BY-NC-SA | none (one paragraph) | | | | | | | 0 / 0 |
| 25.2 The Activities of Nonvolatile Solutes | 14514 | BY-NC-SA | none | | | 1 (25.2.1) | | | Peverati's footnote 1 (a list item with `$^1$` and a numbered paragraph) | 9 / 9 |
| 25.3 Colligative Properties Depend only on Number Density | 14515 | BY-NC-SA | Melting Point Depression | | | | | | | 0 / 9 |
| 25.4 Osmotic Pressure can Determine Molecular Masses | 14516 | BY-NC-SA | Determining Molar Masses | | | 1 (25.4.1) | | | 1 ("Purity analysis") | 0 / 12 |
| 25.5 Electrolytes Solutions are Nonideal at Low Concentrations | 14517 | BY-NC-SA | Thermodynamic potentials versus the dissociation; Activity coefficients; Measuring mean ionic activity coefficients | 1 (25.5.1, worked inline, no Solution part) | | | | | 3 ("Note" ×3, one carrying three displays) | 18 / 24 |
| 25.6 The Debye-Hückel Theory | 14518 | BY-NC-SA | Ionic Strength | | | 3 (25.6.1–25.6.3) | | | 3 ("Note"; untitled emphasis; "Importance for Colloids", carrying Figure 25.6.3 and the gold-citrate equation) | 1 / 11 |
| 25.7 Extending Debye-Hückel Theory to Higher Concentrations | 14519 | **CC BY-SA 4.0** | Extended Debye-Hückel Equation; Davis Equation; Pitzer Equations; Specific ion interaction theory | | | 1 (25.7.1) | | | | 1 / 6 |
| 25.8 Homework Problems | 14512 | BY-NC-SA | none: stray Chapter 4 passage + **Exercise 25.8.1** (bold paragraph, no box) | | | | | | | 1 / 1 |

Counts agree with the full-book table (1 example, 0 keyed; no exercise box; 6 figures; no table; no
objectives). Displays: 69 in 25.1–25.7 plus 25.8's one. No objectives, no "## Summary", no embed,
no video. 25.7 is CC BY-SA 4.0 at the source and is shared BY-SA (`modules.json`, the book's rule).

## Per section

- **25.1** One paragraph, one block; header proposed "The Infinite-Dilution Standard State" (root
  rule 3, through the humanizer). Concepts (new): the standard state of a solute as a hypothetical
  1 mol/L solution with infinite-dilution properties, so the activity coefficient carries all the
  nonideal behaviour. Its last sentence about IUPAC repeats 25.2's footnote. Reuses 24.7/24.8's
  activity and activity coefficient.
- **25.2** No header: two blocks proposed, "Activity from the Chemical Potential" (to (25.2.3)) and
  "Activity Coefficients from Vapor Pressure" (from (25.2.4)). Peverati's footnote: the list item
  ("As we already discussed in chapter 10, …$^1$") and its numbered note go to the page as the book's
  closing paragraph with its footnote (builder's choice of `<aside>`); it is not an AI footnote.
  Concepts: (25.2.1) μ = μ° + RT ln a and (25.2.7) a_i = γ_i x_i are forms of 24.7's **activity** and
  **activity coefficient**; (25.2.5) of 24.4's ideal-solution chemical potential; (25.2.2) of 22.8's
  μ from fugacity; (25.2.3) of 23.3's equal chemical potentials. New: **the activity coefficient from
  the vapor** (γ_i = P_i/(x_iP_i*) = P_i/P_i^R, (25.2.9); γ > 1 for a positive deviation, < 1 for a
  negative one; P_i = a_iP_i*, (25.2.8)); the standard state of a component in solution is the pure
  component at the solution's T and P, a_i = 1 (24.8's, reused). Printed links: "chapter 11",
  "Equation 11.4.2", "Equation 13.1.1", "chapter 10" are Peverati's numbers (see *orchestrator* below).
- **25.3** Opening block before "Melting Point Depression": header proposed "Counting Particles".
  Concepts (new): **colligative property** (bold-less, defined in the first sentence; its three
  instances listed); **freezing-point depression** (the chain to −x₂ ≈ Δ_fus H̄₁(−ΔT)/(RT_m*²) and
  ΔT = K_f m; the book says "melting point depression"); the **cryoscopic constant** K_f (named
  only "K_f … for the solvent"); the solvent's ∂ln a₁/∂T = Δ_fus H̄₁/(RT²) at the freezing point
  (the route to activities by integration); **molar mass from the freezing point** (skill: ΔT →
  molality → M); **boiling-point elevation** ("quite similar", no equation printed). The two
  assumptions (Raoult in the liquid, no solid solubility) belong to the freezing-point concept's
  statement. Reuses 22.7's Gibbs–Helmholtz, 23.3's equal chemical potentials, 19.8's Δ_fus H, 24's
  ln a₁ ≈ −x₂.
- **25.4** Opening block: header proposed "Osmotic Pressure"; "Determining Molar Masses" kept.
  Concepts (new): **semipermeable membrane**; **osmosis**; **osmotic pressure** Π (type pressure);
  the osmotic equilibrium μ*(T, P) = μ*(T, P + Π) + RT ln a₁ giving ΠV̄₁* = −RT ln a₁; **Π = RTc**
  (with RTx₂ = ΠV̄₁* as a form); **reverse osmosis** (≈ 30 bar on sea water); **osmometry** (to about
  8000 Da) and the polymer's **molar-mass distribution** measured by size exclusion with UV, LALLS
  and viscometry (one idea); **purity from the melting curve** (the note: DSC). Reuses 22.4's
  (∂G/∂P)_T = V as (∂μ*/∂P) = V̄₁*.
- **25.5** Opening block: header proposed "Dissociation and Charge"; the three `<h2>` kept. Concepts
  (new): electrolyte nonideality from the r⁻¹ Coulomb interaction (idea); the salt's **dissociation
  stoichiometry** ν₊, ν₋, z₊, z₋ and **charge neutrality** ν₊z₊ + ν₋z₋ = 0; μ₂ = ν₊μ₊ + ν₋μ₋ with its
  standard state and a₂ = a₊^ν₊ a₋^ν₋ (one result); the **mean ionic activity** a±^ν ≡ a₂, ν = ν₊ + ν₋;
  the **single-ion activity coefficients** a₊ = γ₊m₊, a₋ = γ₋m₋ (not measurable separately: the
  note); the ion molalities m₊ = ν₊m, m₋ = ν₋m; the **mean ionic molality** m±^ν = m₊^ν₊ m₋^ν₋; the
  **mean ionic activity coefficient** γ±^ν = γ₊^ν₊ γ₋^ν₋ (24.7's `mean-ionic-activity-coefficient`, in
  its general form: reused, (25.5.16) a form of it); a₂ = a±^ν = γ±^ν m±^ν (result); γ± measured from the solvent's
  vapor through the osmotic coefficient (result, formula corrected below). Example 25.5.1 (Al₂(SO₄)₃,
  a = 108 m⁵ γ±⁵) kept whole as an example; checked: (2m)²(3m)³ = 108 m⁵.
- **25.6** Opening block: header proposed "The Ionic Atmosphere"; "Ionic Strength" kept. Concepts
  (new): the **ionic atmosphere** (idea); the **Debye length** 1/κ (type length; the book's word is
  "Debye-length", see corrections); **ionic strength** I = ½Σm_iz_i² (24.7's `ionic-strength`, reused; the sum a form of it);
  κ² = constant · I with constant = 2000e²N_A/(ε_rε₀kT); the limiting law in terms of the
  atmosphere, ln γ± = −|q₊q₋|κ/(8πε_rε₀kT), ln γ± ∝ √m (`ln-gamma-debye-length`; 24.7's
  `debye-huckel-law` is the law itself, reused); (25.6.1) with A and B and the **distance of closest
  approach** a₀ (the book calls (25.6.1) the "Debye limiting law"; it is the extended form, see
  corrections); keeping I constant by a spectator ion (idea, Cu²⁺/Zn²⁺); **colloid** and its
  stabilisation by a charged atmosphere, destroyed by added salt (idea, the note); metastable is
  23.1's. Constants e, N_A, k, ε₀ untyped; ε_r untyped.
- **25.7** Headers kept ("Davis Equation" as printed). The opening (to "Several approaches have been
  proposed") is a block: header proposed "Where the Theory Fails". Concepts (new): the
  **Debye–Hückel assumptions** and why they fail (idea, the five bold items); the **Bjerrum length**
  (definition); the **extended Debye–Hückel equation** (−log γ = A|z₊z₋|√I/(1 + Ba√I), a the
  effective hydrated diameter, 3 Å and 9 Å, A = 0.5085, B = 0.3281); the **Davies equation**; the
  **Pitzer equations**; **specific ion interaction theory**. (25.7.1) repeats (25.6.1): the number
  stays, the concept is 25.6's. "Plot of activity coefficients calculated using the Davies equation."
  is a stray caption line before Figure 25.7.1: kept as printed (or folded into the figure by the
  builder). The draft carries an empty `<br>` paragraph between the two Pitzer displays: delete it.

## Equation numbers

One number per display, from the converter's `n=`: (25.2.1)–(25.2.9) (Peverati's labels 14.1.1–
14.1.9); (25.5.1)–(25.5.18) (`Eq1`–`Eq18`; the unlabelled definition a±^ν ≡ … after (25.5.10) and
the note's three displays number nothing); (25.6.1) (`DH`); (25.7.1) (the repeat of `DH`). 25.1, 25.3
and 25.4 number nothing (Winter's pages carry no labels; 23.1's precedent). Every `[ref:eq:…]`
resolves on its page. Printed labels kept as printed: Peverati's "chapter 11", "Equation 11.4.2",
"Equation 13.1.1", "chapter 10" in 25.2 (see *orchestrator*); 25.5's "the sucrose problem" (24.7, an
in-book link); 25.7's "Debye–Hückel limiting law" link to page 14518 (in-book `xref` to 25.6).

## Exercise count report (root rule 13)

Counted from the converted pages.

- **Inline exercises**: **0 printed** (no exercise box in 25.1–25.7).
- **Worked examples**: **1** (25.5.1 Aluminum Sulfate), worked inline with no Solution part, kept
  whole as an example (not an exercise; Chapter 3's decision covers examples printed *without* any
  working, which this is not).
- **25.8 (the chapter's exercise page)**: **1 printed** (25.8.1), **0 keyed**, **1 unkeyed**; **not
  routed**: it tests 1.9's uncertainty principle and is already 1.9's card `e3` (19.E.1 precedent).
- **In all**: **0 cards** for Chapter 25 from the book.
- **Proposed new: 9** (every concept of the chapter would otherwise have none; answers computed here
  from the book's own numbers or Chapter 23's water data):
  - **25.1** one (explain): why the solute's standard state is a hypothetical 1 mol/L solution with
    infinite-dilution properties, and what γ then measures.
  - **25.2** one (compute): x_i = 0.40, P_i* = 100 Torr, measured P_i = 52 Torr → P_i^R = 40 Torr,
    γ_i = 1.30 (a positive deviation), a_i = 0.52.
  - **25.3** two (compute): K_f of water from the book's Δ_fus H = 6006 J/mol and T_m* = 273.15 K:
    K_f = RT_m*²M₁/Δ_fus H = 1.86 K kg/mol, and K_b from 40.65 kJ/mol at 373.15 K = 0.513 K kg/mol
    (the boiling-point analogue the book calls "quite similar"; explain the step); a molar mass:
    1.00 g of solute in 50.0 g of water freezes 0.207 K lower → m = 0.111 mol/kg, M = 180 g/mol.
    *Checked by computation.*
  - **25.4** one (compute): 2.00 g of a protein in 100 mL of water at 298.15 K, Π = 7.4 Torr →
    c = 0.398 mol/m³, M ≈ 5.0 × 10⁴ g/mol (beyond freezing-point reach, the section's point).
    *Checked by computation.*
  - **25.5** one (compute): CaCl₂ at m = 0.010 mol/kg with γ± = 0.73: ν = 3, m± = 4^{1/3}m =
    0.0159 mol/kg, a₂ = (γ±m±)³ = 4γ±³m³ = 1.56 × 10⁻⁶. *Checked by computation.*
  - **25.6** two (compute): I of 0.010 m CaCl₂ + 0.020 m NaCl = 0.050 mol/kg and 1/κ = 0.304 nm/√I =
    1.36 nm (from the book's B = 3.29 nm⁻¹); the limiting law for 0.0010 m ZnSO₄ (I = 0.0040,
    |z₊z₋| = 4): log γ± = −0.51 · 4 · √0.0040 = −0.129, γ± = 0.74. *Checked by computation.*
  - **25.7** one (compute, compare): 0.10 M NaCl by the limiting law (γ± = 0.690), the extended
    equation with a = 3 Å and the book's A = 0.5085, B = 0.3281 (0.754) and Davies (0.785): which
    to trust and why. *Checked by computation.*

## Figures, in book order (root rules 14, 24, 25, 26, 28)

Rule 14 as rewritten: a figure starts from the book's and usually replaces it; motion where the idea
moves; a point the reader sees at once; little effort to read; folds where the book draws one scene
several times. The chapter's own numbers: water at sea water's ≈ 30 bar (25.4); A = 0.51, B = 3.29
nm⁻¹ (25.6) and A = 0.5085, B = 0.3281 Å⁻¹, a = 3 Å and 9 Å (25.7); Davies' 0.5 and 0.30 (25.7);
KBr's points read off Figure 25.6.2; Chapter 23's water data (Δ_fus H 6006 J/mol, Δ_vap H 40.65
kJ/mol at 373 K). Arrows: Figure 25.4.1's solvent-flow arrows are **kinematic** (solvent flowing
through the membrane), so 25.4.1's floor is the moving tier; its piston arrow is a force, symbolic.

| Image | Section | What the book shows | Proposed treatment |
|---|---|---|---|
| 25.2.1 (424149, Peverati's, no credit) | 25.2 | two P–x panels, γ > 1 and 0 < γ < 1, the Raoult line dotted, P_i above or below P_i^R at x_i ("Roult's Law" in the image) | **Kept** as printed. The variation (a deviation bending the curve, γ read at a composition) is Chapter 24's P–x Sim (24.5/24.6, built there: repeated material); this page cites it. If Chapter 24 builds no such Sim, the builder may fold the two panels into one still with a deviation slider and an x_i slider, readout γ_i = P_i/P_i^R (25.2.9). |
| 25.4.1 (125804, general chemistry's U-tube, no credit) | 25.4 | three U-tubes: (a) start, levels equal, flow arrows; (b) equilibrium, the head Π; (c) a piston applying Π reverses the flow | **Replace, moving, 2D** ("Figure 25.4.1", the three panels one scene in time; kinematic arrows). Solvent particles cross the membrane both ways, more into the solution; the right column rises until its head balances; slider glucose concentration c (mol/L, soft detents), slider applied pressure on the right arm with a special at Π (dashed circle: flow stops; above it, reverse osmosis). **Point: the solution side rises until the extra pressure equals Π = cRT; push harder than Π and water flows back out.** Readout Π = cRT and h = Π/(ρg) with live numbers, plus the sea-water case (≈ 30 bar, the book's) as a detent. Exaggeration: none needed at mM concentrations (1 mM glucose at 298 K gives 0.025 bar, a 25 cm head). Transport (a time). Original kept. |
| 25.6.1 (424173, Roland1952, CC BY-SA 3.0, SVG) | 25.6 | an idealised 1:1 solution: ions with overlapping clouds of opposite charge | **Replace, moving, 2D** ("Figure 25.6.1"; motion: the atmosphere is a time average of ions in thermal motion). A central cation; cations and anions (CPK colours via `F.el`, Na and Cl) jiggle by Boltzmann-weighted Monte Carlo steps around it, anions crowding in; a dashed circle at 1/κ; beside, the net charge density against r. Slider I (log, 10⁻⁴–0.1 mol/kg); choice 1:1 / 2:2 (charge). **Point: the atmosphere spreads as the solution is diluted: 1/κ = 0.304 nm/√I, 30 nm at 10⁻⁴ and 1 nm at 0.1.** Readout κ² = constant · I with the book's 3.29 nm⁻¹, 1/κ, and ln γ± = −\|q₊q₋\|κ/(8πε_rε₀kT) live. Original kept (BY-SA 3.0, credit). |
| 25.6.2 (424174, Petergans, Public Domain) | 25.6 | log γ± of KBr at 25 °C (points) and the limiting law (line) against an axis labelled "Ionic strength /M" | **Kept** as printed; its axis is √I (the line's slope is the book's −0.51 only against √I): corrected in the row's caption, no marker. Its points open the 25.7 figure below (cited there). |
| 25.6.3 (78365, Larryisgood, CC BY-SA 3.0) | 25.6 | a gold nanoparticle with a layer of adsorbed cations and a diffuse cloud of mixed ions | **Kept** as printed (inside the colloid note; nothing varies that the text discusses). Its caption ("Potential difference as a function of distance …") describes a plot the image does not show: corrected in the row's caption, no marker; the alt's "red electrons" are anions (the builder writes a true alt). |
| 25.7.1 (424175, PChemiker, CC BY-SA 4.0) | 25.7 | γ (f) against I for \|z\| = 1, 2, 3 by Davies with 0.3 I (black) and 0.2 I (blue); captioned "Semi-log plot" though both axes are linear | **Replace, still, 2D** ("Figure 25.7.1"; variation). log γ± against √I, where the limiting law is a straight line: the limiting law, the extended equation (slider a, 3–9 Å, the book's two values as detents) and Davies (0.30 I, the book's), with KBr's points from Figure 25.6.2 (source named); choice \|z₊z₋\| = 1, 2, 3 (or 4). Slider I moves a marker on all three. **Point: all three leave √I = 0 on the same slope; the limiting law falls away first, the ion size bends the extended curve back, and Davies turns up at high I; higher charges fall far faster.** Readout the three equations with the live I and their γ±. Original kept (BY-SA 4.0, credit). |

**3D**: none. The ionic atmosphere is spherically symmetric and a slice shows it whole (rule 28.5).

### Extra simulations proposed (root rule 15)

- **`sim-colligative-mu` in 25.3** (recommended; still, 2D; the brief's μ(T) lines; no book figure,
  so a Sim): μ of solid solvent, pure liquid and gas against T near the freezing and boiling points,
  as lines of slope −S̄ (23.2's picture), and the solution's liquid line drawn RT ln x₁ below the pure
  one. Slider x₂ (or molality, 0–2 mol/kg). Water from the book's numbers (Δ_fus H 6006 J/mol at
  273.15 K, Δ_vap H 40.65 kJ/mol at 373.15 K, Chapter 23); the absolute S̄ of the liquid is not the
  book's: the figure draws μ relative to the pure liquid's at each T so only the book's ΔH/T slopes
  matter. Two panels, one at each transition, sharing the slider. **Point: lowering the liquid's
  line moves its crossing with the solid line down and with the gas line up, and the freezing
  point moves 3.6 times as far as the boiling point (K_f/K_b = 1.86/0.513).** Readout
  ΔT = K_f m and x₂ ≈ Δ_fus H̄₁ΔT/(RT_m*²) live.

Judged and dropped: a Sim of 25.2's P–x deviations (Chapter 24's); a 3D atmosphere (a slice says it);
a separate DH limiting-law Sim in 25.6 (the 25.7 figure carries the limiting law, and 25.6.2 stays);
a DSC purity curve for 25.4's note (no equation printed); a Sim for 25.5's bookkeeping (no variation:
the example says it).

## Derivation candidates (root rule 29)

| Where | What | Score | Decision |
|---|---|---|---|
| 25.2, (25.2.2) + (25.2.3) → subtract → (25.2.4) → Raoult → (25.2.5) → (25.2.6), (25.2.7) | printed block with words | printed | **Build unless Chapter 24 builds the same chain** (μ = μ* + RT ln x from the vapor, 24.4): "Derivation · the chemical potential of a component in solution"; facts 22.8's μ from fugacity, 23.3's equal chemical potentials, 24.4's Raoult's law. If 24 has it, it stays printed and cites. |
| 25.2, (25.2.8) + Raoult → (25.2.9) | 1 move | | Stays. |
| 25.3, μ₁ˢ = μ₁^sln → −Δμ₁/RT = ln a₁ → Gibbs–Helmholtz → ∂ln a₁/∂T → ln a₁ ≈ −x₂ → integrate → −x₂ ≈ Δ_fus H(−ΔT)/(RT_m*²) → ΔT = K_f m | printed block, 9 displays with words | printed | **Build**: "Derivation · the freezing-point depression"; facts 23.3's equal chemical potentials, 22.7's Gibbs–Helmholtz, 24's ln a₁ = ln x₁ ≈ −x₂; the broken lines ("∂[ln a₁", "ln a₁ ln x₁ ≈ −x₂") follow the correct mathematics with notes; one line inserted for x₂ ≈ M₁m to reach ΔT = K_f m (K_f = RT_m*²M₁/Δ_fus H̄₁, which the book skips). |
| 25.4, μ*(T, P) = μ^sln(T, P + Π, a₁) → … → ΠV̄₁* = −RT ln a₁ → RTx₂ = ΠV̄₁* → x₂ ≈ n₂/n₁ → Π = RTc | printed block, 11 displays with words | printed | **Build**: "Derivation · the osmotic pressure of a dilute solution"; facts 22.4's (∂G/∂P)_T = V, 24's ln a₁ ≈ −x₂, V̄₁* incompressible (a condition the book uses silently: inserted as a fact of the derivation with no place, 'a given'); one line inserted (V ≈ n₁V̄₁*, so n₂/(n₁V̄₁*) = c); "the partial versus x₁" corrected to n₁ in a note. `drv` to 25.3's for the shared ln a₁ ≈ −x₂ step. |
| 25.5, (25.5.3)–(25.5.9) → ν, a± → (25.5.17) → (25.5.18) | printed block with words, 14 displays | printed | **Build**: "Derivation · the activity of a salt from its ions"; facts (25.5.1)–(25.5.2) dissociation, the definitions (25.5.10), (25.5.11)–(25.5.16) as facts of this section; (25.5.6)'s μ₋° followed by the correct μ₊° with a note. |
| 25.5, ln γ± = φ − 1 + ∫(φ − 1)… from Gibbs–Duhem ("the same Gibbs-Duhem trick") | hidden: ≥ 5 moves; facts 3 (Gibbs–Duhem 24.2, φ, (25.5.18)) + unprinted run 5 + joins 1 = 9 | 9 | **Stays** (fails rule 29.3): the molal osmotic coefficient of an electrolyte (ln a₁ = −νmM₁φ) that the steps need is printed nowhere in the book (24.7's φ is ln a₁ ≈ −x₂φ), so the derivation would invent a fact; 24.7's `solute-activity-from-solvent` already states the nonelectrolyte form. The printed integrand is corrected by a footnote. |
| 25.6, the Debye–Hückel theory itself (Poisson–Boltzmann, linearised, κ, the atmosphere's potential at the ion) | hidden: "We can only scratch the surface"; facts ≥ 4 (Poisson's equation, the Boltzmann factor, Coulomb's law, charge neutrality) + run ≥ 6 = ≥ 10 | ≥ 10 | **Stays**: Poisson's equation and the charging step are stated nowhere in the book; building it would invent the facts (rule 29.3). The book prints results only. |
| 25.6, (25.6.1) → limiting law as Ba₀√I → 0 | prose, 1 move | | Stays (the emphasis note says it). |
| 25.7, Davies → DH at low I; Pitzer's two displays; SIT | 1 move / no chain | | Stay. |
| 25.5.1 | a substitution | never | Stays (an example). |

Four derivation records to build (25.3, 25.4, 25.5, and 25.2 unless Chapter 24 owns the chain).

## Corrections spotted (root rule 13)

The book's words kept; a numbered footnote where each applies. *Checked by computation* marks a
correction worked here; *from memory, unchecked* one the builder checks first.

- **25.2**: none of substance; Peverati's chapter and equation numbers (*orchestrator*); "the pure
  element" for μ_i* (the pure component; as printed). Stray U+FE0E after "the globe." (25.1 and 25.2's
  footnote): the builder drops the invisible character.
- **25.3**: "ln a₁ ln x₁ ≈ −x₂" has lost its "=" (ln a₁ = ln x₁ ≈ −x₂; footnote; the same line in
  25.4); "∂ [ln a₁" has a stray bracket (no footnote: markup); "Melting point depression" uses ΔT for
  T_m* − T_m (as printed, defined by the last approximation); "Raoult Law" (as printed).
- **25.4**: "Taking the partial versus x₁" (with respect to n₁, giving the molar volume; footnote);
  "(∂G/∂P)_{T,x} = V" then "(∂μ*/∂P)_{T,x_j} = V̄₁*" (as printed); "its melting point in depressed",
  "The polymers is dissolved" (as printed). The 30 bar for sea water: about 1.1 mol/L of ions gives
  27 bar by Π = cRT (*checked by computation*; no footnote, "about").
- **25.5**: "Na⁺ and Cl⁺" (Cl⁻; footnote); (25.5.6) μ₊ = μ₋° + RT ln a₊ (μ₊°; footnote, the derivation
  follows the correct line); the vapor-pressure formula ln γ± = φ − 1 + ∫₀^m [φ − 1] m′ dm′ (the
  integrand is (φ − 1)/m′; footnote, *checked against the book's own 24.7*, which prints
  ln γ₂,m = φ − 1 + ∫₀^m (φ − 1)/m′ dm′); "doing these vapor pressure
  measurements in pretty tedious" (as printed); "{term:2}" bold digits in the note and the example
  are the book's emphasis (kept).
- **25.6**: "1/κ is a measure for the size of this cloud and κ is the Debye-length" (1/κ is the
  Debye length, κ its inverse; footnote), and so "The Debye length and … ln γ± are proportional:
  ln γ± ∝ κ" (ln γ± is proportional to κ, the inverse Debye length; same footnote); "makes is
  possible", "as sufficiently dilute" (as printed); (25.6.1) is called the "Debye limiting law" but
  carries the denominator 1 + Ba₀√I of the extended form, and writes z_j² (one ion's) for the mean
  coefficient's |z₊z₋| (footnote; 25.7 prints the mean form); A's unit "mol^{−1}/2dm^{3/2}" is
  mol^{−1/2} dm^{3/2} (footnote with the previous); the emphasis note's "the mean activity coefficient
  is proportional to the square root of the ionic strength" (its logarithm is; footnote). The book's
  constant 2000e²N_A/(ε_rε₀kT) gives κ = 3.29 nm⁻¹ √I and A = 0.510 for water at 298 K with ε_r =
  78.5 (*checked by computation*; ε_r *from memory, unchecked*, used only for this check). Figure
  25.6.2's axis (√I) and 25.6.3's caption: row corrections, no marker. The colloid note's gold-citrate
  equation balances (atoms and charge, *checked*); "the wavelength of the visible reason", "3--" (as
  printed).
- **25.7**: "z is the integer charge of the ion μ is the ionic strength" (I is the ionic strength;
  footnote); "\ (A\)" is broken markup for A (the builder writes $A$, no footnote); "Davis Equation"
  header for Davies (as printed); "ε and b are interaction coefficients" (b appears in no equation;
  as printed); "Mg²⁺SO²⁻4" (as printed). Figure 25.7.1's "Semi-log plot" (both axes linear): row
  correction, no marker. The Davies claim "about 2% … for 0.1 M": Davies gives γ± = 0.785 for 1:1
  at I = 0.1 (*checked by computation*); NaCl's measured 0.778 (*from memory, unchecked*), within 1%:
  as printed.

## Licences of the figures

| Figure | Credit as printed | Proposal |
|---|---|---|
| 25.2.1, 25.4.1 | none | under the page's licence (BY-NC-SA) |
| 25.6.1 | CC BY-SA 3.0 unported; Roland1952 via Wikipedia | shipped with credit |
| 25.6.2 | Public Domain; Petergans via Wikipedia | shipped with credit |
| 25.6.3 | "CC-SA-BY-3.0; Larryisgood" | shipped under CC BY-SA 3.0 with credit |
| 25.7.1 | CC BY-SA 4.0; PChemiker via Wikipedia | shipped with credit |

**Page licences**: every page CC BY-NC-SA 4.0 except 25.7, CC BY-SA 4.0 (shared BY-SA).

## What is new to OmniStax here

- **No new type.** Π is pressure; ΔT, T_m*, T_m temperature; every μ and Δ_fus H̄₁ energy; V̄₁*
  molar-volume; n₁, n₂ amount; V volume; e, q₊, q₋ charge; the Debye length (1/κ), a₀ and a length
  (κ's own row is in ink: it is an inverse length). Molality m, molarity c, mole fraction x, ionic
  strength I, activities and activity coefficients, φ, ν, z, K_f, ε_r stay untyped, as Chapter 24
  left them. `colours:default` not run.
- **Reconciled with Chapter 24** (merged before this chapter): 24.7's `activity`, `activity-coefficient`,
  `mean-ionic-activity-coefficient`, `ionic-strength`, `debye-huckel-law`, `osmotic-coefficient`,
  `solute-activity-from-solvent`, `raoult-activity-convention`, `henry-activity-convention` and 24.1's
  `raoults-law` are reused, not duplicated (Chapter 25's own versions of the mean ionic activity
  coefficient, the ionic strength and the limiting law were withdrawn before the merge). The forms 25.5
  and 25.6 print for those concepts (γ±^ν = γ₊^ν₊γ₋^ν₋ (25.5.16); I = ½Σm_iz_i²) are left to the
  builders of 25.5 and 25.6 to add with `ost add forms` (they stage on Chapter 24's concepts). 25.6's
  κ form of the law is its own result, `ln-gamma-debye-length`; (25.6.1) and 25.7's extended equation
  are one concept, `extended-debye-huckel-equation`, introduced in 25.6.
- **Symbols**: 41 new keys, 19 with macros (`\kPi`, `\kDeltaT`, `\kTmstar`, `\kDeltafusHone`,
  `\kVbaronestar`, `\kmustar`, `\kmusln`, `\kmuones`, `\kmuonesln`, `\kmuoneliqstar`, `\kDeltamuone`,
  `\kmuivapor`, `\kmuistd`, `\kPiR`, `\kmutwostd`, `\kmuplusstd`, `\kmuminusstd`, `\kqplus`,
  `\kqminus`); the untyped (K_f, ν₊, ν₋, a±, m±, κ as `kappa_D`, z_i, z_j, ε_r, f±, the Pitzer and SIT
  symbols) without. Reused from Chapter 24: x_1, x_2, x_i, mu_std, mu_star_i, mu_sln_i, P_star_i,
  gamma_i, gamma_pm, gamma_plus, gamma_minus, a_plus, a_minus, m_plus, m_minus, z_plus, z_minus,
  mu_plus, mu_minus, mu_2, I_ion, phi_osm; from earlier: mu, R, T, P, P_i, P_std, G, V, a, a_1, a_2,
  a_i, m, m_i, c, nu, n_1, n_2, T_m, a_0, A, B, e, N_A, k_B, epsilon_0, gamma. `a` is the activity in
  25.2 and the hydrated diameter in 25.7 (`redefines`). 112 variables rows.
- **38 concepts, 59 edges** (Hasse-checked against the merged book with Chapter 24: one redundant edge,
  osmotic equilibrium → (∂G/∂P)_T = V, removed), **41 forms**.

## The chapter's answer to root rule 23

The chapter is about counting: a dissolved particle lowers the solvent's chemical potential by
RT ln x₁ whatever it is, and a charged one drags a cloud with it. The stunning version shows both. In
25.3 the reader slides the amount of solute and watches the solution's μ line sink under the pure
liquid's, pulling the freezing point down 1.86 K per molal and the boiling point up only 0.51 K. In
25.4 water creeps through a membrane into a sugar solution until the column stands Π = cRT high, and
a piston pushed past that pressure squeezes fresh water out, as at 30 bar for the sea. In 25.6 the
ions around a central ion jiggle and crowd, and diluting the solution swells the cloud from 1 nm to
30 nm while ln γ± shrinks with it. In 25.7 the limiting law, the extended equation and Davies leave
the origin on one slope and part as the ionic strength grows, KBr's measured points deciding between
them.

## Tool changes made for this chapter

None. `tools/lt2md.py` and `tools/md2html.py` read every page of the chapter without a change, so
no reconversion was needed. Drafts made for 25.1–25.7 (145 maths spans set by KaTeX in strict mode
without an error). Notes for builders: md2html sets 25.6's `\ce{2n AuCl4(aq)^{-} …}` as `\mathrm{2n
AuCl_{4}…}`, which loses the spaces between coefficient and formula ("2nAuCl₄"): write `2n\,` by
hand; 25.7's "\ (A\)" comes through as text; 25.7's `<p><br></p>` between the Pitzer displays is an
empty paragraph to delete; 25.5.1 is an example (`ex-25-5-1`) with no parts; 25.2's footnote is a
list item followed by a numbered paragraph.
