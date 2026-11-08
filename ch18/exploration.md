# Exploration: Chapter 18, Partition Functions and Ideal Gases

Written 2026-11-08 from the converted pages (`python3 tools/fetch.py --media 18`, then
`python3 tools/convert.py 18`), every page read in full and all 6 mirrored images looked at.
The landing page (11814, CC BY-NC-SA, no author tag) prints one paragraph (ideal gases, the
ensemble and the molecular partition function): an **`intro/` page** (root rule 21.1); it has no
thumbnail. **There is no 18.S page**: nothing goes to `summary/`. **18.E (13690) has no body**
(title only): nothing is routed from it (root rule 9). The chapter's exercises are one inline
box (18.5.1, keyed) and 18.9's closing "Exercises" list (five items, unkeyed).

**Where the pages come from.** Nine of the eleven sections credit only
`www.chem.iitb.ac.in/~bltembe/pdfs/ch_3.pdf` (Tembe's IIT Bombay notes, cut into pages; its
equation labels 3.12–3.102 survive in the TeX); 18.3, 18.5 and 18.7 have no credit list; 18.9 is
W. Tandy Grubbs's lab exercise on the Dulong–Petit law (tag `authorname:tgrubbs`, no credit
list); 18.11 adds Zane Sterkewolf (UC Davis) and Sudarson S. Sinha (Tel Aviv). Every page is
CC BY-NC-SA 4.0. The pages are uneven: 18.3 is a short outline, 18.8's equations are garbled in
a dozen places, and 18.7 prints its energy and heat capacity twice, wrong the first time.

**Repeated material** (built once where the book first works it, cited after; Chapters 3–17
precedent): the translational partition function (stated 17.5, derived 18.1, used 18.7 and
18.11); Q = (q_trans q_vib q_rot q_elec)^N/N! (17.8's factorization and 17.2's N!, stated again
18.3 and 18.7); the electronic partition function (18.2, restated 18.3 and 18.7); the vibrational
partition function (18.4, per mode in 18.7, used 18.11); the vibrational heat capacity (17.4's
Einstein function per oscillator; 18.4 prints it for a diatomic, 18.7 per mode, 18.9 per mole and
for the Einstein solid); the rotational partition function (described 18.5, derived 18.6, used
18.11); Θ_rot (18.5, again 18.6 and per axis 18.8); C_v = (5/2)nR (18.5, again by equipartition
18.11); the Dulong–Petit law (17.4; 18.9 again with Einstein's solid); 3N degrees of freedom
(12.10, 12.12; again 18.7, 18.8, 18.11). From earlier chapters: the 3D box (3.9), the Gaussian
integral (13.7), oscillator levels (5.2), rigid-rotor levels and degeneracy (5.8), the rotational
constant (5.9, 13.2), rotational populations and J_max (13.2, whose `sim-rovib` has T and B̃
sliders), the tops and the inertia tensor (13.8), normal coordinates (13.9) and water's modes
(12.10's `sim-water-modes`), fermions and bosons (8.5), nuclear spin (14.1), the two-spin
singlet and triplet (14.7), ⟨E⟩ and C_V from the partition function (17.3, 17.4, 17.8).

## Pages

| Page | id | Authors (credit list / tags) | Headers (`<h2>`) | Ex | Exr | Fig | Img | Tab | Notes | Eq (numbered / displays) |
|---|---|---|---|---|---|---|---|---|---|---|
| intro | 11814 | none | none: one paragraph | | | | | | | |
| 18.1 Translational Partition Functions of Monotonic Gases | 13691 | Tembe notes | none | 1 (unnumbered "Example") | | | | | | 3 / 16 |
| 18.2 Most Atoms are in the Ground Electronic State | 13692 | Tembe notes | none | 18.2.1 | | | | | | 2 / 7 |
| 18.3 The Energy of a Diatomic/Polyatomic Molecule Can Be Approximated as a Sum of Separate Terms | 13693 | none | opening; Electronic | | | | | | | 0 / 3 |
| 18.4 Most Molecules are in the Ground Vibrational State | 13694 | Tembe notes | opening; Vibrational Heat Capacity; Vibrational Populations | 18.4.1 | | 1 | 1 | 1 (18.4.1) | | 6 / 18 |
| 18.5 Most Molecules are Rotationally Excited at Ordinary Temperatures | 13695 | none | none | | 18.5.1 (keyed) | | 1 | | | 1 / 7 |
| 18.6 Rotational Partition Functions of Diatomic Gases Contain a Symmetry Number | 13696 | Tembe notes | none | 18.6.1 | | | | 1 ("Table 1") | | 6 / 11 |
| 18.7 Vibrational Partition Functions of Polyatomic Molecules … Each Normal Coordinate | 13697 | none | opening; Vibrational Entropy | 1 ("Example NO₂") | | 1 (GIF) | | | | 2 / 19 |
| 18.8 Rotational Partition Functions of Polyatomic Molecules Depend on the Sphar of the Molecule | 13698 | Tembe notes | opening; Spherical Tops; Symmetric Tops; Asymmetric Tops; Thermodynamics Properties | 1 ("Example: Nitrogen Dioxide") | | | | | 2 ("Symmetry Number"; "Classical Derivation (Optional)") | 3 / 46 |
| 18.9 Molar Heat Capacities | 13699 | Grubbs (tag) | objectives box; opening; Experimental Data; Exercises | | | | | | | 7 / 7 |
| 18.10 Ortho and Para Hydrogen | 57614 | Tembe notes | none | | | 1 | | | | 11 / 18 |
| 18.11 The Equipartition Principle | 57608 | Sterkewolf, Tembe notes, Sinha | opening; Translations; Rotations; Vibrations; Heat Capacity; References | 1 ("Example: CO 2 vs. NO 2") | | 1 | | | | 7 / 13 |
| 18.E | 13690 | | **empty** | | | | | | | |

Counts agree with the full-book table: 7 examples (5 with a Solution part; 18.7's and 18.8's
have one too, so 7 of 7 work a solution), 1 exercise box (keyed), 5 problems (18.9's list), 4
numbered figures, 2 unnumbered images, 2 tables, 2 notes, 165 display lines. 18.9 is the only page
with objectives (a `div.box-objectives` inside an `mt-include`, which the converter now reads,
below); its three items are "Goal", "Prerequisites" and "Resources you will need", a lab sheet's
header: to `objectives` as printed. No page closes on "## Summary". 18.11's References are never
cited: to `notes` (16.6 precedent). No embeds.

### The intro page

One paragraph, no header; one block, header proposed "Molecules Far Apart" (humanizer by the
builder). No concepts (21.1).

## Per section

- **18.1** No header: two blocks proposed, "Summing over the States of a Box" (to the Gaussian
  integral) and "The Thermal Wavelength" (from "we get"), the example closing the second. Concepts
  (new): translational levels of a particle in a cube; q_trans = q_x q_y q_z; a sum over close
  levels as an integral; q_x = L/Λ; the thermal de Broglie wavelength Λ (the book's bold "de Broglie
  wavelength", a different length from 1.6's h/p: named "Thermal de Broglie wavelength", 1.6's
  concept untouched); q_trans = V/Λ³; many translational states are accessible. Reinforces: 17.5's
  `translational-partition-function` (18.1 derives what 17.5 states), U = (3/2)nRT (17.1's
  `kinetic-temperature`), the observed energy as an ensemble average (17.3).
- **18.2** No header: one block proposed, "Electronic Levels Far above kT". Concepts (new): the
  electronic partition function; a degenerate level counts g times; most atoms are in the ground
  electronic state.
- **18.3** The opening (degrees of freedom, q and Q, E_tot) is its own block, header proposed "One
  Factor per Kind of Motion"; the book's "Electronic" after. Concepts (new): the partition function
  of a molecular ideal gas; finding a heat capacity from energy levels (the book's four steps,
  a skill). Reinforces: 17.8's factorization and energy separation, degeneracy (3.9), 18.2's q_elec.
- **18.4** The opening (q_vib, Θ_vib, Table 18.4.1, Example 18.4.1) is its own block, header
  proposed "Summing the Vibrational Ladder"; the book's headers after. Concepts (new): the geometric
  series; the vibrational partition function ((18.4.2), (18.4.3)); the vibrational temperature;
  what sets Θ_vib (bond strength, mass); the molar heat capacity C̄_V; ∂/∂T = −kβ²∂/∂β ((18.4.4));
  the vibrational heat capacity ((18.4.5), corrected below); vibrational populations ((18.4.6));
  most molecules are in v = 0. Table 18.4.1 is the chapter's data (Θ_vib, Θ_rot of eleven
  diatomics), used by the figures of 18.4, 18.5 and 18.11.
- **18.5** No header: two blocks proposed, "Rotational Levels and Their Degeneracy" (to the
  exercise box) and "Rotation's Share of the Heat Capacity" (from "The rotational constant B is
  directly linked"). Concepts (new): the rotational partition function (described here with its
  2J + 1 and the change of variables; its formulas printed in 18.6); the rotational temperature;
  when the rotational sum becomes an integral (T ≫ Θ_rot); rotation contributes R to a diatomic's
  molar C_v; C = C_trans + C_rot (+ C_vib); C_v = (3/2)nR and (5/2)nR; most molecules are
  rotationally excited. Reinforces: rotor degeneracy (5.8), I = μr² (5.8), reduced mass (5.2),
  rotational populations (13.2). The inline exercise 18.5.1 tests the integral's validity.
- **18.6** No header: two blocks proposed, "Summing the Rotational Levels" (to (18.6.4)) and
  "Correcting for Symmetry" (from "For a homonuclear diatomic molecule"). Concepts (new): the
  symmetry number; q_rot = kT/σB̃ = T/σΘ_rot. Reinforces: Θ_rot (Table 1 of rotational
  temperatures, kept as printed), rotational constant (5.9).
- **18.7** The opening (Q, q_trans, q_elec, normal modes, q_vib, E_vib, C_V) is its own block,
  header proposed "Independent Normal Modes"; the book's "Vibrational Entropy" after, the example
  closing it. Concepts (new): q_vib as a product over the normal modes ((18.7.2)); the vibrational
  energy and heat capacity of a polyatomic gas; vibrational entropy and conformations (idea).
  Reinforces: 13.9's separable vibrational Hamiltonian ((18.7.1)) and normal coordinates, 12.12's
  3N − 5 / 3N − 6, Θ_vib per mode, q_elec with only the ground state (−D_e).
- **18.8** The opening (degrees of freedom, centre of mass, inertia products, the eigenproblem,
  tops by Θ) is its own block, header proposed "Principal Axes and Three Kinds of Top"; the book's
  headers after. 18.8's "Symmetric Tops" opens with a sentence that defines ω and L of the
  opening's energy (misplaced on the page, kept where printed). Concepts (new): the centre of mass;
  q_rot of a spherical top; of a symmetric top (corrected); of an asymmetric top ((18.8.1),
  (18.8.3)); E_rot = (3/2)RT and C̄_V = (3/2)R. Reinforces: 13.8's inertia tensor, principal
  moments, tops and Euler angles, the symmetry number (the note's σ = 1 for HCN, 2 for CO₂).
  The note "Symmetry Number" kept as a titled note (its link fixed, below); the note "Classical
  Derivation (Optional)" becomes a derivation (below). The improved q_rot "(with no derivation)"
  stays as printed.
- **18.9** Objectives to the tables; the opening its own block, header proposed "Einstein's Solid
  and the Law of Dulong and Petit"; the book's "Experimental Data" after; "Exercises" to the
  Exercises document. Concepts (new): specific heat capacity; C_sM = C_V,m ≈ 25 J K⁻¹ mol⁻¹; atomic
  weights from Dulong and Petit (idea); C_p ≈ C_v for simple solids (idea). Reinforces: C =
  C_trans + C_vib + C_rot (18.5's, (18.9.1)), the vibrational heat capacity ((18.9.2), 18.4's per
  mole), Θ_v ((18.9.3)), 17.4's Einstein solid, Einstein heat capacity ((18.9.4)), its high-T limit
  ((18.9.5), (18.9.6)) and the Dulong–Petit law.
- **18.10** No header: three blocks proposed, "Nuclear Spins and Exchange" (to the triplet),
  "Even and Odd Rotational Levels" (to (18.10.10)) and "A Mixture That Cannot Equilibrate" (from "A
  good experimental verification"). Concepts (new): ortho and para hydrogen (the book's bold
  "ortho"/"para" sit in its aside on disubstituted benzene: the terms are the hydrogen ones); the
  exchange symmetry of H₂'s nuclei; the exchange parity (−1)^J of the rotational wavefunctions;
  q_ortho and q_para; N_o/N_p and its limits 3 and 0; the frozen 3:1 mixture ((18.10.11)); the
  rotational states of ¹⁶O₂. Reinforces: fermions and bosons (8.5), nucleon spin (14.1), the
  two-spin singlet and triplet (14.7), spherical harmonics and associated Legendre functions (5.8).
- **18.11** The opening is its own block, header proposed "Half of kT per Quadratic Term"; the
  book's headers after; References to `notes`. Concepts (new): the equipartition theorem (the book's
  four names as terms); ⟨E_trans⟩ = (3/2)k_BT; ⟨E_rot⟩ = k_BT; ⟨E_vib⟩ and its high-T limit k_BT;
  frozen-out degrees of freedom (bold); the heat capacity by equipartition; a diatomic's (3/2)R →
  (5/2)R → (7/2)R steps. Reinforces: 18.1's Λ, 18.6's q_rot, 18.4's q_vib, 17.8's ⟨ε⟩ from q,
  C_V (17.4), degrees of freedom (12.10).

## Equation numbers

One number per display, from the converter's `n=`: (18.1.1)–(18.1.3), (18.2.1)–(18.2.2),
(18.4.1)–(18.4.6), (18.5.1), (18.6.1)–(18.6.6), (18.7.1)–(18.7.2), (18.8.1)–(18.8.3),
(18.9.1)–(18.9.7), (18.10.1)–(18.10.11), (18.11.1)–(18.11.7); 18.3 numbers nothing. 18.1's
two-row `align` (q_trans = q_xq_yq_z = ΣΣΣ, labels `times1` and `sum1`) is one number, (18.1.1),
so the book's "Equation \ref{times1}" and "\ref{sum1}" both cite it; 18.4's (18.4.4) and (18.4.5),
18.10's (18.10.2) and (18.10.5) likewise. Unlabelled numbered displays: 18.5's C_v align (18.5.1)
and 18.9's (18.9.1). Every `[ref:eq:…]` resolves on its page. **Printed labels kept as printed**
(precedent), each with a footnote or link where it misleads: 18.2's "{\reference{3.24}}" (the
page shows the raw macro; it means (18.2.2): an `xref`, footnote); 18.5's exercise "Look at table
18.2" (Table 18.4.1, which carries Θ_rot; footnote under the card); 18.6's "Table 1" (its own table,
kept); 18.6 cites (18.6.3) "Equation 3.13" before printing it (fine); 18.8's note links "previously"
to 18.8 itself (page 13698; the symmetry number is 18.6's, page 13696: the builder's `xref` points
there, footnote).

## Exercise count report (root rule 13)

Counted from the converted pages.

- **Inline exercises**: **1 printed** (18.5.1, "When do we need to actually work out the (discrete)
  summation …"), **1 keyed** (its Answer part, an explanation), available now. Its answer names
  He beside H₂ (He has no rotation: footnote under the card).
- **Worked examples**: 7, all with a worked solution (kept, never exercises).
- **18.9's "Exercises"**: **5 printed**; **0 keyed**; **5 unkeyed**, available with AI solutions:
  **3 compute** (1: C_sM against 3R in percent for a table of elements; 2: the slope of C_s against
  1/M; 4: R from that plot and its percent error), **1 explain** (3: which elements deviate and
  why, bonding and atomic weight), **1 prove** (5: the limit (18.9.5) by series expansion). Items
  1–4 ask the reader to look data up in the CRC Handbook: an AI solution has to work a stated data
  set (*orchestrator*, below).
- **Placement**: all five stay in 18.9 (Dulong–Petit and the limit, which 18.9 restates; the law
  itself is 17.4's, so `exercise_concepts` name 17.4's `dulong-petit-law` and
  `einstein-high-temperature-limit` with 18.9's `specific-heat-capacity` and
  `molar-from-specific-heat`). 18.5.1 stays in 18.5. **Kind**: `exercise` for all six (Chapter
  17's decision for its "Problems"; `source_number` "Exercise 18.5.1" and "Exercise 1" … "Exercise
  5").
- **18.E**: empty; nothing routed.
- **In all**: 6 cards, 1 keyed, 5 unkeyed.
- **Proposed new: 12**, where a concept would otherwise have none (every answer computed here):
  18.1 one (Ar at 298.15 K in 1 L: Λ = 16.0 pm, q_trans = 2.44 × 10²⁹, and at 1 bar q_trans/N ≈
  1.0 × 10⁷); 18.2 one (the NO term at 1000 K with the 40 000 cm⁻¹ state taken as printed in
  wavenumbers: E₂/kT = 57.6, so the second term is g₂ × 1.0 × 10⁻²⁵); 18.3 one (which factor of Q
  depends on V, so P = NkT/V for any ideal molecular gas: explain); 18.4 two (Cl₂ at 300 K from
  Table 18.4.1's Θ_vib = 805 K: q_vib = 1.073, f₀ = 0.932, f₁ = 0.064, C̄_V,vib = 0.567R = 4.71 J
  K⁻¹ mol⁻¹; N₂ at 1000 K: q_vib = 1.035, f₀ = 0.966); 18.5 one (the most populated level of N₂ at
  300 K from Θ_rot = 2.88 K: J = 7, J_max = 6.72; 13.2's AI exercise already did HCl); 18.6 one
  (q_rot of N₂ at 300 K, σ = 2: 52.1; of HCl, σ = 1: 19.7 with Table 1's 15.2 K); 18.7 one (water's
  q_vib at 1000 K from the caption's three Θ_vib, zero at the ground level: 1.124); 18.8 one (NO₂'s
  q_rot at 600 K from its 300 K value through T^{3/2}: 2238 × 2^{3/2} = 6330); 18.9 one (the Einstein
  C_V,m at T = Θ_v: 0.921 × 3R = 22.96 J K⁻¹ mol⁻¹); 18.10 one (N_o/N_p at 77 K and 300 K with Θ_R =
  87.6 K: 0.920 and 2.987); 18.11 one (water's C̄_V by equipartition: 3R = 24.9 J K⁻¹ mol⁻¹ with
  vibrations frozen, 6R = 49.9 with all three modes active).

## Figures, in book order (root rules 14, 24, 25, 26, 28)

Rule 14 as rewritten today: a figure starts from the book's and usually replaces it; motion where
the idea moves; a point the reader sees at once; little effort to read; folds where the book draws
one scene several times. The chapter's own numbers: Table 18.4.1's Θ_vib and Θ_rot of eleven
diatomics, 18.6's Table 1, 18.7.1's water modes (3656.7, 3755.8, 1594.8 cm⁻¹ and the printed Θ),
18.11.1's CO (2.8 K, 3103 K) and I₂ (308 K), and the H₂ Θ_R = 87.6 K of Table 18.4.1. No literature
number is needed in any figure. The book's arrows: none in the plots; the water GIF's motion is
kinematic (it moves), which sets that figure's floor at the moving tier.

| Image(s) | Section | What the book shows | Proposed treatment |
|---|---|---|---|
| 18.4.1 (79365, no credit) + the unnumbered "vibrational population of Cl₂ at 300 K" (420081, no credit) | 18.4 | a schematic Ĉ_V against T (no numbers) rising from 0 to a plateau; a bar chart f_v for v = 0–5, f₀ ≈ 0.98 | **Fold, replace, still, 2D** (`sim-vibrational-freeze`; variation by slider and choice): left, the ladder v = 0–5 with each level's f_v as a bar (the book's chart turned upright); right, C̄_V,vib/R against T/Θ_vib (log axis 0.05–5) with the state point riding it. Choice: a molecule of Table 18.4.1 (11), opening on Cl₂; slider T (log, 10–10 000 K) opening at 300 K, detent at T = Θ_vib. **Point: until T nears Θ_vib nearly every molecule sits in v = 0 and vibration adds nothing to C_V; around T ≈ 0.2–1 Θ_vib the ladder fills and the contribution climbs to R; at 300 K Cl₂, Na₂ and K₂ are already partly on, H₂, N₂ and CO not at all.** Readout f_v = (1 − e^(−Θ/T))e^(−vΘ/T) (f₀, f₁ live), q_vib and C̄_V,vib/R with live numbers. Eyebrow "Figure 18.4.1"; both images in `originals`, the bar chart's caption corrected (its f₀ ≈ 0.98 is not Table 18.4.1's Θ_vib = 805 K, which gives 0.932; footnote). *Orchestrator*: an unnumbered image folded into a numbered figure is new. Distinct from 17.4's `sim-einstein-solid` (a solid, five metals; here the table's molecules). |
| unnumbered "normalized rotational population of HCl at room temperature" (411207, no credit) | 18.5 | bars P(J) for J = 0–12, peak 0.19 at J = 3 | **Kept** as printed (it agrees with Θ_rot = 15.02 K at 298–300 K, checked by computation); its sentence links 13.2's `sim-rovib`, whose T and B̃ sliders move the peak J_max (the brief: link, not rebuild). |
| 18.7.1 (9669, animated GIF, 4 frames, no credit) | 18.7 | water's three modes moving, the O atom still; caption gives ν̃ and Θ_vib | **Replace, moving, 2D** (`sim-water-mode-factors`; flow by animation and variation): the three modes move with the oxygen moving too (12.10's `sim-water-modes` shapes and its NIST frequencies, the same as the caption's wavenumbers); under each mode its ladder with v = 0, 1, 2 populated and its factor 1/(1 − e^(−Θ_i/T)); slider T (log, 300–10 000 K, opening 300 K). **Point: water's vibration is three independent oscillators; each has its own Θ_vib, all far above room temperature, so every factor is 1.000… and q_vib, their product, is 1.0005 at 300 K; only near 2000 K does the bend wake first.** Readout q_vib = Π factors with live numbers. Moving: the modes are motion (the GIF's own clock; kinematic). 2D: every motion is in the molecular plane (12.10's argument). Eyebrow "Figure 18.7.1"; the GIF in `originals`; caption's Θ for the two stretches corrected (footnote). |
| 18.10.1 (79368, "CC-SA-BY 3.0; Gadolinist") | 18.10 | rotational heat capacity of H₂ against T, 0–330 K: equilibrium (peak ≈ 2.1R near 50 K), para, ortho and 3:1 curves, T_b marked | **Replace, still, 2D** (`sim-ortho-para`; variation by slider and choice): left, H₂'s rotational ladder J = 0–6, even levels para (weight 1) and odd levels ortho (weight 3), referents `ortho-h2` and `para-h2` in their colours with populations as bars; right, C_V,rot/R against T (0–330 K) with all four curves computed from Table 18.4.1's Θ_R = 87.6 K (they reproduce the image: equilibrium peak 2.07R at 50 K, para peak 1.47R at 170 K, checked by computation), the state point on the selected curve; below, N_o/N_p against T rising from 0 to 3. Slider T (opening 100 K); choice "with catalyst (equilibrium)" / "without (frozen 3:1)". **Point: at equilibrium the ortho fraction falls to zero as T drops, and the shifting balance gives the big low-T peak; cooled without a catalyst the gas keeps 3:1 and follows the 3:1 curve, which is what the experiments showed.** Readout N_o/N_p = 3Σ_odd/Σ_even and C_V/R with live numbers. Eyebrow "Figure 18.10.1"; original kept (its curves' colours are the image's own, no facts). Caption footnote: the image has no "Exp" curve (the text says the 3:1 curve). |
| 18.11.1 (79512, "Public domain; PD-Self") | 18.11 | idealized C̄_V of a diatomic against T: 3/2 → 5/2 → 7/2 with T_rot and T_vib marked | **Replace, still, 2D** (`sim-diatomic-heat-capacity`; variation by slider and choice): C̄_V/R against T on a log axis (1–10 000 K), the curve stacked as translation (3/2), rotation (summed over J) and vibration (18.4's function) bands, Θ_rot and Θ_vib marked; choice a diatomic of Table 18.4.1 plus I₂ (Θ_vib 308 K from the caption), opening on CO (the caption's example); slider T with the state point and a dashed line at 300 K. **Point: each step switches on near its own characteristic temperature, three decades apart, so at room temperature nearly every diatomic sits on (5/2)R and only the heavy, weakly bound ones climb toward (7/2)R.** Readout C̄_V = (3/2)R + C_rot + C_vib with live numbers. Log axis argued: the book's linear axis is schematic, real Θ_rot and Θ_vib are 10³ apart. Rotation summed over all J with weight 2J + 1 (H₂'s nuclear-spin case is 18.10's figure; said in `notes`). No condensation drawn (the ideal gas of 18.1). Eyebrow "Figure 18.11.1"; original kept. |

**3D**: none. The tops of 18.8 are an arrangement in space, but 13.8 already draws them; 18.8's
lesson is the integral, not the shape. Water's modes are planar.

### Extra simulations proposed (root rule 15)

Only where motion or variation teaches (precedent). Two survive:

- **`sim-thermal-wavelength` in 18.1** (recommended; variation, still): a box of gas at the
  book's 1 L with a few dozen molecules, each drawn with a haze of width Λ, and the mean spacing
  (V/N)^{1/3} marked; choice of gas (He, H₂, N₂, Ar, I₂, the book's example), sliders T (log, 1–3000
  K) and pressure. **Point: at room temperature Λ is 16 pm (Ar) to 71 pm (H₂) against about 3 nm between
  molecules at 1 bar, so q_trans/N is 10⁵–10⁷ and the states far outnumber the molecules; only at a few
  kelvin for H₂ or He do the hazes touch.** Readout Λ = h/√(2πmkT), q_trans = V/Λ³ and q_trans/N.
- **`sim-rotational-sum` in 18.6** (offered, not recommended over 13.2's sim): bars (2J + 1)
  e^(−J(J+1)Θ_rot/T) against J with the integral's smooth curve; molecule choice from Table 1;
  slider T. The reader sees the sum and T/Θ_rot agree for T ≫ Θ_rot and part near T ≈ Θ_rot (H₂ at
  300 K: Σ = 3.78 against 3.42), which is 18.5.1's question. Judged weaker: 13.2's `sim-rovib`
  already varies the populations; the new view is only the area against the bars.

Judged and dropped: a sum-to-integral figure for 18.1's q_x (the thermal-wavelength Sim's readout
carries L/Λ, and q_x has 10⁹ terms, too many to draw); an electronic ladder for 18.2 (17.2's
`sim-level-populations` already switches the electronic ladder on with T; 18.2 cites it); a 3D top
for 18.8 (13.8); a Dulong–Petit data plot for 18.9 (it would answer the lab exercise and needs CRC
data).

## Derivation candidates (root rule 29)

| Where | What | Score | Decision |
|---|---|---|---|
| 18.1, levels → (18.1.1) → integral → Gaussian → q_x = L/Λ → (18.1.3) | printed as a block of equations with words, about 10 lines | printed | **Build**: "Derivation · the translational partition function", results q_x = L/Λ, Λ and (18.1.3) corrected; facts: the 3D box (3.9), the Gaussian integral (13.7), q as a product (17.8's derivation, `drv`). The result links 17.5's stated form. |
| 18.1, Example (I₂) | substitution | never | Stays. |
| 18.2, (18.2.1) → (18.2.2) | set E₁ = 0 | 1 move | Stays. |
| 18.4, E_v → series → (18.4.2) → (18.4.3) | printed block with words, 6 lines | printed | **Build**: "Derivation · the vibrational partition function", results (18.4.2), (18.4.3); facts oscillator levels (5.2), the geometric series. 17.4's Einstein derivation sums the same series (link both ways). |
| 18.4, (18.4.4) → (18.4.5) | ∂/∂T in β; C̄_V = −kβ²∂⟨ε_vib⟩/∂β; ⟨ε_vib⟩ = −∂ln q_vib/∂β (unprinted); differentiate; Θ_vib | printed block, garbled; one line inserted | **Build**: "Derivation · the vibrational heat capacity", result (18.4.5) corrected (its first line is C̄_V, not q_vib). ⟨ε⟩ from q links 17.8's derivation (`drv`); the function is 17.4's Einstein one per oscillator (cited). |
| 18.4, (18.4.6) | substitute (18.4.2) into f_v | 2 moves | Stays. |
| 18.5, C_v = (3/2)nR + nR | printed align, 2 moves | | Stays. |
| 18.6, (18.6.3) → integral → (18.6.4) → (18.6.5) → (18.6.6) | printed block with words, 5 lines | printed | **Build**: "Derivation · the rotational partition function", results (18.6.4), (18.6.6); facts rigid-rotor levels and 2J + 1 (5.8), the sum as an integral (18.1). |
| 18.7, q_vib = Π → ⟨E_vib⟩ → C̄_V | "we can take out results from previous sections": hidden; ln of a product is a sum, −∂/∂β per mode, ∂/∂T; about 6 moves; imported 3 (17.8's factorization, 17.3's ⟨E⟩, 18.4's per-mode results); run 4; joins 1: score 8 | hidden | **Build**: "Derivations · vibrational energy and heat capacity of a polyatomic gas", after the second (correct) printing; the first block's errors footnoted. |
| 18.8, spherical top | sum → T ≫ Θ → integral of (2J + 1)²e^(−J(J+1)Θ/T); J(J + 1) ≈ J², (2J + 1)² ≈ 4J², ∫x²e^(−ax²) = √π/4a^{3/2} unprinted; 5 moves; imported 2 (the Gaussian moment, the symmetry number 18.6); run 3; joins 0: score 5 | half printed, garbled | **Build**: "Derivation · the rotational partition function of a spherical top", result corrected (T/Θ_rot, not T/q_rot); notes on the printed signs. |
| 18.8, symmetric top | double sum to integrals over K (Gaussian) and J; hidden ("can be converted to an integral and the result is"); about 6 moves; imported 3; run 5; joins 1: score 9 | hidden | **Build**: "Derivation · the rotational partition function of a symmetric top", result corrected (8π², not 8π: the printed form is π^{3/2} too small, checked by computation). The builder checks the integral numerically first. |
| 18.8, asymmetric top (note "Classical Derivation (Optional)") | H in Euler angles; q as a 6-fold integral; complete the squares; three Gaussians; angles 8π²; σ | printed block with words in a note, about 12 lines | **Build**: "Derivation · the classical rotational partition function of an asymmetric top", result (18.8.1); the note's equations are replaced by it (rule 29.2), its title kept as the note's header; notes correct the typos (sin²ψ, 2kT). The prose route above the note (∫∫∫ dL's and 8π²/σh³) is kept and the derivation stands after it. |
| 18.8, (18.8.1) → (18.8.3) | substitute Θ_A, Θ_B, Θ_C | 2 moves | Stays. |
| 18.8, E_rot = (3/2)RT, C̄_V = (3/2)R | ln q_rot = (3/2)ln T + const; kT²∂/∂T; per mole; ∂/∂T: 4 moves; imported 2 (⟨E⟩ from q 17.8, N_Ak = R); run 4; joins 0: score 6 | hidden | **Build**: "Derivation · the rotational energy of a nonlinear molecule". |
| 18.9, (18.9.2) → (18.9.4) | times three | 1 move | Stays. |
| 18.9, limit (18.9.5) | the book leaves it to Exercise 5 | | Stays (an exercise; 17.4's built limit derivation cited). |
| 18.10, (18.10.3) → (18.10.5) → (−1)^J | θ → π − θ, φ → φ + π; P_l^{|m|} parity; e^{imφ} parity; the product (unprinted) | printed block with words | **Build**: "Derivation · the exchange parity of the rotational wavefunctions", result ψ_r → (−1)^J ψ_r (the book's (18.10.5) repeats (18.10.3); corrected in a note). |
| 18.10, pairing → (18.10.6)–(18.10.10) | singlet with even J, triplet with odd; the ratio; its limits | printed block with words | **Build**: "Derivations · the ortho and para partition functions and their ratio", results (18.10.6), (18.10.7), (18.10.9) and the limits 3 and 0 ((18.10.10) corrected: e^(−6Θ_R/T)). |
| 18.10, C_V from ⟨E⟩ | 2 moves | | Stays (the sign of ⟨E⟩ footnoted). |
| 18.11, ⟨E_trans⟩, ⟨E_rot⟩, ⟨E_vib⟩ | three printed short chains (2, 1 and 5 lines), one move each inserted (Λ ∝ β^{1/2}; q_rot = 1/σβB̃) | printed | **Build**: "Derivations · the average energy per kind of motion", results (3/2)k_BT, k_BT, (18.11.5) and (18.11.7); the trans line's sign corrected. |

Twelve derivation records to build (18.1; 18.4 × 2; 18.6; 18.7; 18.8 × 4; 18.10 × 2; 18.11), three
hidden (18.7 score 8, the symmetric top 9, the nonlinear rotational energy 6) and one half hidden
(the spherical top, 5).

## Corrections spotted (root rule 13)

The book's words kept; a numbered footnote where each applies. *Checked by computation* marks a
correction worked here; *from memory, unchecked* one that rests on a literature fact the builder
checks first.

- **18.1**: Λ = h/√(2π8mkT) and q_trans = (√(2π8mkT)/h)^{3/2}V (Λ = h/√(2πmkT), q_trans =
  (2πmkT/h²)^{3/2}V; the book's own q_x line and the example use the right Λ; *checked by
  computation*); the q_x integrals without dn_x (as printed); "∫_o" (as printed); "about 10²⁰ for 1
  cm³" (10²⁴–10²⁶ for light to medium molecules at 300 K: H₂ 2.8 × 10²⁴, N₂ 1.4 × 10²⁶; *checked by
  computation*); "The via Equation" (as printed); the I₂ example's numbers check (Λ = 6.326 pm, q =
  3.95 × 10³⁰). "Monotonic" in the title (as printed).
- **18.2**: "40,000 cm⁻¹ … E₂/kT = 10⁴ K/T" (40 000 cm⁻¹ is 5.76 × 10⁴ K, so at 1000 K the term is
  e^(−57.6), not e^(−10); the conclusion holds the more strongly; *checked by computation*); NO's
  first excited level (*from memory, unchecked*: NO's ground term is a doublet whose upper
  component lies only 121 cm⁻¹ up, the textbook exception to q_elec = g₁; footnote only after the
  builder checks); Example 18.2.1: "e₀" (1), "T = 0.02 eV" (kT = 0.0259 eV at 300 K, so the term is
  e^(−193), not e^(−200); conclusion unchanged; *checked by computation*); "{\reference{3.24}}"
  ((18.2.2)).
- **18.3**: E_tot printed as a product (a sum, as the sentence says); "molecular idea gas" (as
  printed).
- **18.4**: "If the zero of energy scale is at hν/2kT" (hν/2); Table 18.4.1's "Bond Length (pm)"
  (the values are in Å: 0.7474 Å = 74.74 pm); its "dynes/cm" (the values are 10⁵ dyn/cm, mdyn/Å);
  NO's ω = 190 cm⁻¹ (Θ_vib = 2719 K needs 1890 cm⁻¹; *checked by computation*); N₂'s Θ_rot 2.99 K
  (B̃ = 2.001 cm⁻¹ gives 2.88 K, as 18.6's Table 1 prints; *checked*); HI's 9.06 K (6.46 cm⁻¹ gives
  9.29 K; *checked*); Example 18.4.1's kT/hc = 209.7 cm⁻¹ (208.5 cm⁻¹ at 300 K, so q_vib = 1.556,
  not 1.561; the same 209.7 in Example 18.6.1; *checked*); (18.4.5)'s first line labelled q_vib
  (C̄_V) and its "hc ν", "hv ν̃" (as printed; the derivation follows the correct mathematics);
  "R" as the high-T limit of a per-molecule k (molar); Figure 18.4.1's caption says T/Θ is plotted
  where the image's axis is T (as printed, the figure plots T/Θ_vib); the Cl₂ population chart (f₀ ≈
  0.98 against 0.932 from Θ_vib = 805 K; *checked by computation*).
- **18.5**: "c … in units of cm⁻¹" (cm s⁻¹); "g(J) = J(J + 1)" (the variable X = J(J + 1), whose
  derivative is 2J + 1); "Θ_rot = hb/k = ħ²/2Ik_b" (hcB̃/k; as printed in the text); "the moment
  ⟨ε⟩ … is simply equal to NkT" (the energy of N molecules); exercise 18.5.1's "table 18.2" and
  "He" (under the card).
- **18.6**: E_j = J(J + 1)h²/8πI (8π²I); (18.6.2) Θ_rot = r²/8π²Ik (h²); the integral's
  "R^{−B̃J(J+1)/kT}" (e) and q_rot = kT/B̃ with kT in cm⁻¹ (kT/hcB̃, as the example does); "j=0"
  index (as printed).
- **18.7**: Q = [q]²/N! (q^N); E_vib = Σ(v_i + ½)hν (hν_i); the first C_V,vib "(Θ/2)² + e/(1 − e)²"
  (the second printing's (Θ/T)²e/(1 − e)² is right; *checked by computation*); "{g_i}" (as printed);
  (18.7.1)'s "h²/2μ_i ∂/∂q_i²" (−ħ²/2μ_i ∂²/∂q_i²); 18.7.1's caption: 3656.7 cm⁻¹ is 5261 K, not 5160
  K, and 3755.8 cm⁻¹ is 5404 K, not 5360 K (*checked by computation*; the bend's 2290 K agrees); the
  caption's order (symmetric, asymmetric, bend) against the image's (antisymmetric, symmetric,
  scissoring) (as printed); "take out results" (as printed); NO₂'s Θ_vib "1900, 1980, 2330 K" (*from
  memory, unchecked*: the bend is near 750 cm⁻¹, about 1080 K; the example's arithmetic is right for
  its numbers).
- **18.8**: "Sphar" in the title (as printed); Σm_ix_i = Σm_iy_i = Σm_iz_i (= 0); "β_o" (β_i);
  "hbar²" in Θ_rot,i (ħ²); g_J = (2J + 1²) ((2J + 1)²); the exponents' missing minus signs (e^(−…))
  in four places; "Θ_rot ≫ T" (T ≫ Θ_rot); the integral without dJ; q_rot = …(T/q_rot)^{3/2}
  (T/Θ_rot); the symmetric top's double sum ("(2J + 1)" twice, "e^{Ã − B̃)K²/kT}") and its result
  (8π², not 8π, in both brackets: as printed it is π^{3/2} too small; *checked by computation*);
  the asymmetric top's e^{H/kT} (e^{−H/kT}); (18.8.1) agrees with the standard form (√π/σ)Π(8π²I_ikT/
  h²)^{1/2} (*checked by computation*: π²(8π)^{3/2} = √π(8π²)^{3/2}), no correction; the note's
  H/kT lines ("sin^ψ", "2KT", "I_c") (as printed in the derivation's notes); ln q_rot = ½ln(πT/…)
  (T³); NO₂ example: "111.5 K" (11.5 K, as its substitution uses), the substitution's "(22.55 K)"
  and "300 K" uncubed, and its result 2242.4 (2238 from the printed formula and 11.5, 0.624, 0.590
  K; *checked by computation*); the improved q_rot's "2/I_C" twice and "I_C/I_BI_B" (*from memory,
  unchecked*: 2/I_A + 2/I_B + 2/I_C − I_A/I_BI_C − I_B/I_AI_C − I_C/I_AI_B); the note's
  self-link.
- **18.9**: "Θ_v = hv/k" (ν; as printed in the text); "Alexis Therese Petit" (as printed); "one
  degree Kelvin" (as printed).
- **18.10**: (18.10.2)'s "(1 − x²)^{|m/2}" and "dx^{m|}" (|m|/2, dx^{|m|}); (18.10.3)'s "(−1)^′" and
  "(−1)^{l−|m|||}" ((−1)^l, (−1)^{l−|m|}); (18.10.5) repeats (18.10.3) where the conclusion is ψ_r
  → (−1)^l ψ_r (*checked by computation* from (18.10.3) and (18.10.4)); "ψ_r, ψ_m" (ψ_r ψ_ν,s);
  (18.10.8)'s "j=0.2.4", "Θ_k", "j=1,3,5,n" (as printed, the derivation corrects); (18.10.9)'s
  numerator over "j = 1, 2, 3 …" and denominator "Σ_{j=0} 2(2J + 1)" (odd J; even J, weight 1);
  (18.10.10)'s "5e^(−5Θ_n/T)" (5e^(−6Θ_R/T); *checked by computation*); "⟨E⟩ = ∂ln q/∂β" (−);
  the figure's caption "The curve marked Exp" (the image has none; the text's "purple curve marked
  3:1"); "This in indeed" (as printed); ¹⁶O₂ "only even rotational states" (*from memory,
  unchecked*: ¹⁶O₂'s electronic ground state is antisymmetric, so only odd rotational levels
  occur; footnote only after the builder checks).
- **18.11**: "−(3/Λ)∂Λ/∂β" (+; the result (3/2)k_BT follows only with +; *checked by
  computation*); "derivative of the translational partition" for rotations and vibrations (rotational,
  vibrational; as printed); "½kB" twice (k_B); the example's "mo'⁻¹" (as printed) and its measured
  30.1 and 29.5 J K⁻¹ mol⁻¹ (*from memory, unchecked*: C_V,m of CO₂ and NO₂ near 298 K are about 28.8
  and 28.9; not footnoted unless the builder confirms).

## Licences of the figures

| Figure | Credit as printed | Proposal |
|---|---|---|
| 18.4.1, the Cl₂ chart, the HCl chart, 18.7.1 | none | shipped under the page's licence (BY-NC-SA) |
| 18.10.1 | "CC-SA-BY 3.0; Gadolinist" | shipped under its own licence (CC BY-SA 3.0) with credit |
| 18.11.1 | "Public domain; PD-Self" | shipped as public domain with the credit |

**Page licences**: every page CC BY-NC-SA 4.0.

## What is new to OmniStax here

- **No new type.** Θ_vib, Θ_rot and their kin are `temperature`; Λ is `wavelength`; every C is
  `heat-capacity`; the q's and Q `partition-function` (17's). Untyped and in ink: g (all
  degeneracies), σ (symmetry number), f_v, N_o, N_p, x, X, a, K, J, v, l, m, the direction cosines
  and η's index, Legendre polynomials, normal coordinates q_i, f and α (counts).
- **Symbols**: 86 new (68 with macros, every macro on a typed symbol), among them `Lambda_th`
  (`\kLambdath`, since `Lambda` is 9.14's term symbol), `q_el` beside 17's `q_elec` (18.2 prints
  both spellings), `C_v` beside `C_V` (18.5 and 18.11 print the lower case), `sigma_sym` (σ), `I_A`
  … (18.8's capital subscripts beside 13.8's I_a), `q_i_nc` (18.7's normal coordinates, since `q_i`
  is 17.6's), `M_part` and `M_molar` (since `M` is a quantum number). Reused: q_trans, q_rot,
  q_vib, q_elec, Q_sys, q_mol (17's keys, not re-staged), E_v, E_J, B_t, I_mom, mu, J, K, k, k_B, h,
  hbar, c, T, V, N, R, n_mol, U, beta, theta, phi, I_xx, I_xy, alpha_s, beta_s, m_l, l and others.
  256 variables rows; `redefines` on 18.6's x and 18.11's x and k (the force constant).
- **58 concepts, 121 edges** (Hasse-reduced against the merged book: 13 redundant edges removed
  before the merge), 52 forms. Reused rather than duplicated: 17.5's
  `translational-partition-function`, 17.8's `partition-function-factorization`, 13.9's
  `separable-vibrational-hamiltonian` and `polyatomic-vibrational-energy`, 12.12's
  `vibrational-mode-count`, 13.8's tops, 13.2's `rotational-populations`, 14.7's
  `two-spin-eigenstates`, 17.4's Einstein and Dulong–Petit concepts. *Orchestrator*: forms that
  belong on Chapter 17's concepts (q_trans = V/Λ³ on `translational-partition-function`, (18.9.4) on
  `einstein-heat-capacity`, (18.9.7) on `dulong-petit-law`) would stage into `ch17/book-rows.json`,
  outside this prep's files: they stand here on Chapter 18 concepts (`translational-q-volume`,
  `molar-from-specific-heat`; (18.9.4) is a variables row naming `einstein-heat-capacity`).

## The chapter's answer to root rule 23

The chapter is where the levels of Chapters 3–13 turn into the heat capacity of a bottle of gas,
and the book shows it in two schematic curves. The stunning version lets the reader warm a gas
and watch each kind of motion wake: the thermal wavelength of an iodine molecule shrinks to a
speck beside the space between molecules; a diatomic's vibrational ladder sits empty above v = 0
until the temperature nears Θ_vib, then fills while its heat capacity climbs to R; water's three
modes move, each with its own nearly idle ladder; H₂'s even and odd rotational levels split into
para and ortho and the ratio climbs from 0 to 3, with and without a catalyst; and the full
staircase of C̄_V, from (3/2)R to (7/2)R, plotted for real molecules over five decades of
temperature, shows why air at room temperature has (5/2)R. Every number is the book's: Table
18.4.1, Table 1, 18.7.1's wavenumbers, 18.11.1's CO and I₂.

## Tool changes made for this chapter

- `tools/lt2md.py`: 18.9 prints its objectives in a `div.box-objectives` (inside an
  `mt-include`) titled by a `p.box-legend`; the converter read only `section` boxes, so the
  objectives came out as a paragraph "Learning Objectives" and a plain list. A `div.box-objectives`
  is now read as the objectives box and its legend dropped. Only objectives boxes are read from a
  div: the div exercise boxes of 9.11, 14.2 and 14.3 come through as before. Chapters 1–17
  reconverted to a scratch folder: 197 source files, 196 byte-identical; the one difference, 1.3's
  "*kinetic energies*" against the committed "*kinetic* *energies*", comes from an earlier converter
  change (the committed copy predates it; the converter before this change gives the same output),
  not from this one.
- `tools/md2html.py`: (1) a `## Exercises` header (18.9's list) is now read like "Problems",
  as exercises of the list; no page of Chapters 1–17 has that header. (2) An unbraced `\ce X`
  (18.10's `$\ce H_2$`, which MathJax's mhchem reads as `\ce{H}` then `_2`) becomes `\mathrm{X}`;
  KaTeX refused it. No page of Chapters 1–17 writes `\ce` without a brace.
- Drafts for all twelve pages (intro, 18.1–18.11): 461 maths spans in the text drafts and 12 in the
  section drafts, every one set by KaTeX 0.16 in strict mode without an error. Notes for builders:
  the drafter leaves "TODO header" above the openings of 18.1, 18.2, 18.3, 18.4, 18.10 and 18.11;
  18.2's "{\reference{3.24}}" comes through as text; 18.9's objectives land in `objectives` and its
  list in `exercises` (kind `question` in the draft: change to `exercise`); 18.11's References come
  through as a block (to `notes`).
