# Config: Physical Chemistry (LibreTexts), Chapter 25

Proposed by the agent after the chapter exploration (2026-11-08). Status:
**agreed** on 2026-11-08: the user asked for Chapter 3 and the chapters after it to be built after accepting Chapter 1's defaults; Chapter 1's choices carry over (book exercises kept, AI solutions for unkeyed ones, AI exercises proposed where a concept would have none), and the loop runs without per-section stops.

| Setting | Value |
|---|---|
| Chapter | 25 Solutions II - Nonvolatile Solutes: landing page 11821, sections 25.1–25.7 (14513–14519) all built; 25.8 Homework Problems (14512) is the chapter's exercise page and is not built; no summary page |
| Stray and empty pages | 25.8: its passage is Chapter 4's uncertainty principle (Zielinski; not built, as 19.E); its one problem, Exercise 25.8.1, is already 1.9's card `e3` (not routed again); 25.1 is a single paragraph and still a page (root rule 11) |
| Front matter | none: the landing page prints no text, so there is no `intro/` page and `chapter.json` has no `intro` record (Chapters 4, 22 and 24's precedent); `ch25/intro/source.md` holds the title alone |
| Summary page | none (the book prints no 25.S); nothing goes to `summary/` |
| Start point | 25.1 |
| Unit of work | one section = one page, never folded |
| Loop | the chapter in one go, without per-section stops |
| Prose | verbatim; no objectives and no "## Summary" on any page; credits: none printed and no author tag (the book's) |
| Headers | the book's `<h2>` kept ("Davis Equation" as printed); the agent's, through the humanizer by the builder, for the untitled openings: 25.1 ("The Infinite-Dilution Standard State"), 25.2's two blocks ("Activity from the Chemical Potential", "Activity Coefficients from Vapor Pressure"), 25.3 ("Counting Particles"), 25.4 ("Osmotic Pressure"), 25.5 ("Dissociation and Charge"), 25.6 ("The Ionic Atmosphere"), 25.7 ("Where the Theory Fails") |
| Boxed notes | kept as titled notes: 25.4's "Purity analysis", 25.5's three "Note"s, 25.6's "Note" and "Importance for Colloids" (holding Figure 25.6.3 and the gold–citrate equation); 25.6's untitled emphasis note kept untitled; 25.2's Peverati footnote kept as the book's closing paragraph with its numbered note (the book's, not an AI footnote) |
| Embeds | none |
| Printed labels | kept as printed: Peverati's "chapter 11", "Equation 11.4.2", "Equation 13.1.1", "chapter 10" in 25.2 (see the open question); "Davis Equation"; 25.5's "the sucrose problem" as an in-book link to 24.7; 25.7's link to the limiting law as an in-book `xref` to 25.6 |
| Equation numbers | one per display, N.M.K, as the converter numbers them: (25.2.1)–(25.2.9), (25.5.1)–(25.5.18), (25.6.1), (25.7.1); 25.1, 25.3 and 25.4 number nothing (no labels at the source, 23.1's precedent); unlabelled displays elsewhere stay unnumbered |
| Repeated material | built once where the book first works it and cited after: from Chapter 24, activity and μ = μ° + RT ln a, the activity coefficient, a_i = γ_ix_i, Raoult's law and μ = μ* + RT ln x (24.1, 24.4), ln a₁ = ln x₁ ≈ −x₂, the osmotic coefficient, the Gibbs–Duhem equation (24.2), the standard states of activities (24.8), and, where Chapter 24 makes them concepts, the mean ionic activity coefficient, the ionic strength and the Debye–Hückel limiting law (24.7 states them first; 25.5–25.6 work them: see the open question); from earlier chapters, the chemical potential (22.5), (∂G/∂P)_T = V (22.4), Gibbs–Helmholtz (22.7), μ from fugacity (22.8), equal chemical potentials (23.3), Δ_fus H (19.8), Δ_vap H (23.4), mole fraction (20.6), the standard state (19.12), DSC (19.10), the Coulomb potential (1.8); (25.7.1) repeats (25.6.1), its number kept, its concept 25.6's |
| Figures | as the table in `exploration.md`: 25.4.1 replaced (moving: solvent crossing the membrane until the head is Π = cRT; concentration and applied-pressure sliders, a special at Π); 25.6.1 replaced (moving: ions jiggling round a central ion, the 1/κ circle; ionic-strength slider, 1:1 / 2:2 choice); 25.7.1 replaced (still: log γ± against √I by the limiting law, the extended equation with an ion-size slider and Davies, KBr's points from 25.6.2; charge choice, I slider); kept: 25.2.1 (Chapter 24's P–x Sim carries its variation), 25.6.2 (axis corrected to √I in the row's caption), 25.6.3 (caption corrected in the row) |
| 3D | none |
| Model data | the book's: A = 0.51, B = 3.29 nm⁻¹ (25.6); A = 0.5085, B = 0.3281 Å⁻¹, a = 3 and 9 Å, Davies' 0.5 and 0.30 (25.7); ≈ 30 bar for sea water (25.4); KBr's points read off Figure 25.6.2 (Petergans, Wikipedia; source named in the figure's notes); water's Δ_fus H 6006 J/mol and Δ_vap H 40.65 kJ/mol (Chapter 23) for the Sim; glucose concentrations and 298 K for 25.4.1 are the figure's own settings, not data; ε_r = 78.5 for water *from memory, unchecked*, used only to check the book's constant (in `LOG.md`) |
| Extra simulations | one recommended: `sim-colligative-mu` (25.3, still: μ(T) of solid, pure liquid, solution and gas, a solute slider moving the freezing point down 1.86 K and the boiling point up 0.51 K per molal); others judged and dropped (`exploration.md`) |
| Derivations | built, all printed: the freezing-point depression (25.3; two broken lines corrected, the x₂ → m line inserted); the osmotic pressure of a dilute solution (25.4; "versus x₁" corrected, V ≈ n₁V̄₁* inserted); the activity of a salt from its ions (25.5; (25.5.6)'s μ₋° corrected); the chemical potential of a component in solution (25.2) only if Chapter 24 does not build the same chain; not built: the γ± from φ relation (a needed fact is printed nowhere) and the Debye–Hückel theory itself (its facts are printed nowhere) |
| Corrections | root rule 13's footnotes, the book's words kept (list in `exploration.md`): chiefly 25.3/25.4's lost "=" in ln a₁ = ln x₁ ≈ −x₂; 25.4's "versus x₁"; 25.5's Cl⁺, (25.5.6)'s μ₋°, the integrand of ln γ± (*from memory, unchecked*: confirm before writing); 25.6's κ named the Debye length, (25.6.1) named the limiting law with z_j², A's unit, γ± "proportional to √I"; 25.7's μ for the ionic strength; Figure 25.6.2's axis, 25.6.3's caption and 25.7.1's "Semi-log" in the rows |
| Colour | no new type; pressure (Π, P_i, P_i*, P_i^R), temperature (T, T_m, T_m*, ΔT), energy (every μ, Δ_fus H̄₁), molar-volume (V̄₁*), amount (n₁, n₂), volume, charge (e, q₊, q₋), length (1/κ as the Debye length, a₀, a) reused; molality, molarity, mole fraction, ionic strength, activities, activity and osmotic coefficients, ν, z, K_f, ε_r in ink (they take a concentration type if Chapter 24 adds one); facts: the gold colloid's wine red only if a figure draws it (none proposed); conventions: Na and Cl through `F.el` in Figure 25.6.1; referents: none proposed |
| Symbols | 62 new (26 with macros: the typed ones), 112 variables rows (see `chapter.json`); 40 concepts, 55 edges, 43 forms (before reconciling with Chapter 24: see the open question) |
| Licence | every page CC BY-NC-SA 4.0 except 25.7 (CC BY-SA 4.0, shared BY-SA); Figures 25.6.1 (CC BY-SA 3.0, Roland1952), 25.6.2 (Public Domain, Petergans), 25.6.3 (CC BY-SA 3.0, Larryisgood), 25.7.1 (CC BY-SA 4.0, PChemiker) shipped with their credits; 25.2.1 and 25.4.1, uncredited, under the page's licence |
| `ai` and `built` | `ai` names the model and effort that wrote each part; `built` is the build date |

## Exercise count report and the choice it asks for

- **Inline exercises**: **0 printed** (no exercise box in 25.1–25.7).
- **Worked examples**: **1** (25.5.1 Aluminum Sulfate), worked inline with no Solution part, kept
  whole as an example (not an exercise).
- **25.8 (the exercise page)**: **1 printed** (25.8.1); **0 keyed**; **1 unkeyed**; **not routed**: it
  is 1.9's card `e3` already (19.E.1's precedent).
- **In all**: **0 cards** from the book for this chapter.
- **Proposed new: 9**, every concept of the chapter otherwise having none (subjects and computed answers
  in `exploration.md`): 25.1 one (explain: the hypothetical infinite-dilution standard state); 25.2 one
  (γ_i = 1.30 from a partial pressure); 25.3 two (K_f = 1.86 and K_b = 0.513 K kg/mol for water from the
  book's heats; a molar mass of 180 g/mol from a depression of 0.207 K); 25.4 one (a protein's molar
  mass ≈ 5.0 × 10⁴ g/mol from Π = 7.4 Torr); 25.5 one (CaCl₂: m± = 0.0159 mol/kg, a₂ = 1.56 × 10⁻⁶);
  25.6 two (I = 0.050 mol/kg and 1/κ = 1.36 nm for a mixture; γ± = 0.74 for 0.0010 m ZnSO₄ by the
  limiting law); 25.7 one (0.10 M NaCl: 0.690, 0.754, 0.785 by the three equations). Every answer
  *checked by computation*.

**The choice** (carried over from Chapter 1): no unkeyed book exercise to solve; *AI exercises* for the
9 proposed. Every exercise is an item of the Exercises document (`place: end`).

## Open questions for the orchestrator

Only what Chapters 3–23's decisions do not settle:

1. **25.8 "Homework Problems"** is recorded in `modules.json` as a section, not as an N.E page (the
   first such page in the book; 26.13 is another). Proposed: treat it as the chapter's exercise page,
   leave it out of `chapter.json`, and keep its converted `source.md` where the converter writes it
   (`ch25/25.8/`); `fetch.py` could later file "Homework Problems" pages as exercises.
2. **Peverati's cross-references in 25.2** ("chapter 11", "Equation 11.4.2", "Equation 13.1.1",
   "chapter 10") name chapters and equations of another LibreTexts book and link there. Proposed: keep
   the words as printed and point each link at this book's equivalent (22.8's μ from fugacity, 24.1's
   Raoult's law, Chapter 26), with one footnote saying the numbers are another text's.
3. **Ownership with Chapter 24**: 24.7 first states the mean activity coefficient, the ionic strength,
   the Debye–Hückel law and the osmotic coefficient; 25.5–25.6 define and work them. Proposed: whichever
   concepts Chapter 24 has merged stay its own and Chapter 25 reuses them (its rows, forms and edges
   repointed), as rule 6 asks ("where the book first does"). See `LOG.md` for what was reconciled.
