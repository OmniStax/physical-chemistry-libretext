# Exploration: Chapter 17, Boltzmann Factor and Partition Functions

Written 2026-11-08 from the converted pages (`python3 tools/fetch.py --media 17`, then
`python3 tools/convert.py 17`), every page read in full and all 10 mirrored images looked at
(the four SVGs rendered to check their content). The landing page (11813, CC BY-NC-SA, no
author tag) prints one paragraph (what statistical mechanics connects): an **`intro/` page**
(root rule 21.1); it has no thumbnail. **17.S** (550571, Crabtree's course notes, untagged) is
the **`summary/` page** (21.2). **17.E (13678) has no body** (title only): nothing is routed
from it (root rule 9). The chapter's exercises are the two "Problems" lists closing 17.1 and
17.2, ten items, none keyed; 17.1's fifth asks about 17.2's "separate arrangements" and is
held for 17.2 (root rule 12, below).

**The book turns here from gases to statistical mechanics.** No concept of the book so far
names an ensemble, a partition function, a heat capacity or the Boltzmann factor as such:
13.2 states the Boltzmann distribution as an axiom (`boltzmann-distribution`) and 15.2 the
two-level population ratio; 17.2 derives the distribution (below, *orchestrator*). The pages
are a patchwork, each whole: 17.1 is Tuckerman's notes (his "Let us again return to the
connection between temperature and kinetic energy" survives, and the thermal-energy block
speaks of "the states given by the last formula", a particle-in-a-box formula on the page it
was cut from) followed by a UC Davis student module with its References and Problems; 17.2 is
the same student module with LaRue's Lagrange-multiplier derivation, Wikiversity's level
diagrams and its own References and Problems; 17.3, 17.6 and 17.8 are LaRue's; 17.4 is a
student module on Dulong–Petit and Einstein (Ümit Kaya's SVGs, two old ChemWiki GIFs);
17.5 is LaRue's sums followed by Tuckerman's classical piston and phase-space argument
(undefined here: the phase-space point x, 𝓔(x), C_N); 17.7 is Larsen's.

Repeated material (built once where the book first works it, cited after, Chapters 3–16
precedent): β = 1/kT (stated 17.1, restated 17.2, 17.3); the partition function as a sum over
states (17.2, restated 17.3, 17.5, 17.7, 17.8); Q = q^N (stated 17.2, derived 17.6); Q =
q^N/N! (stated in words 17.2, as an equation 17.5, explained 17.7, used 17.8); ⟨E⟩ from ln Q
(derived 17.3, used 17.4, 17.5, 17.8); (3/2)NkT as the energy of N particles (17.1's
(17.1.3), derived again for the ideal gas as (17.5.7)); the pressure from ln Q (derived 17.5
by sums, again by Tuckerman's phase-space integral as (17.5.5)); P = NkT/V (twice in 17.5,
and 16.1's ideal gas law); Dulong–Petit's 3R and Einstein's high-temperature 3nR (17.4). From
earlier chapters: the 3D box (3.9), the expectation value (3.7, linked from 17.3), the
oscillator levels (5.2) and frequency ν = (1/2π)√(κ/μ) (5.1; (17.4.6) restates it), degrees of
freedom (12.10), the Boltzmann distribution (13.2), ⟨vₓ²⟩ = k_BT/m and the ideal gas law
(16.1), pressure (16.1), indistinguishable particles (8.5, `indistinguishable-particles`,
reused by 17.7).

## Pages

| Page | id | Licence | Authors (tags) | Headers (`<h2>`) | Ex | Exr | Fig | Img | Tab | Notes | Eq (numbered / displays) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| intro | 11813 | BY-NC-SA 4.0 | none | none: one paragraph | | | | | | | |
| 17.1 The Boltzmann Factor is used to Approximate the Fraction of Particles in a Large System | 2405 | **BY 4.0** | Tuckerman | opening (one sentence, then an h3 "The Microscopic Laws of Motion"); The Ensemble Concept (Heuristic Definition); Thermal energy; References; Problems | | | | | | | 5 / 8 |
| 17.2 The Boltzmann Distribution represents a Thermally Equilibrated Distribution | 13680 | **BY 4.0** | LaRue | opening; The Boltzmann Distribution; Application of Stirling's Approximation; Partition Function; References; Problems | | | 2 | | | 1 (+ a blockquote) | 4 / 30 |
| 17.3 The Average Ensemble Energy is Equal to the Observed Energy of a System | 13682 | **BY 4.0** | LaRue | none | | | | | | 2 (untitled emphasis) | 4 / 12 |
| 17.4 Heat Capacity at Constant Volume is the Change in Internal Energy with Temperature | 13683 | BY-NC-SA 4.0 | LaRue | opening; Dulong-Petit Law on the Heat Capacities of Solids; Einstein's Theory on the Heat Capacities of Solids | | | 5 | | | | 6 / 8 |
| 17.5 Pressure can be Expressed in Terms of the Canonical Partition Function | 13684 | BY-NC-SA 4.0 | LaRue, Tuckerman, Franzen | opening; Gas Compressed by a Piston; Ideal Gas in the Canonical Ensemble | | | 1 | | | | 8 / 26 |
| 17.6 The Partition Function of Distinguishable, Independent Molecules is the Product of the Molecular Partition Functions | 13685 | **BY 4.0** | LaRue | none | | | | | | | 0 / 7 |
| 17.7 Partition Functions of Indistinguishable Molecules Must Avoid Over Counting States | 13689 | **BY 4.0** | Larsen, LaRue | none | | | 2 | | | 1 ("Note") | 4 / 5 |
| 17.8 Partition Functions can be Decomposed into Partition Functions of Each Degree of Freedom | 57665 | **BY 4.0** | LaRue | none | | | | | | | 4 / 10 |
| summary (17.S) | 550571 | none | Crabtree | two paragraphs, then "Learning Objectives" with "Skill goals" | | | | | | | |
| 17.E | 13678 | BY-NC-SA 4.0 | | **empty** | | | | | | | |

Counts agree with the full-book table (no example, no exercise box, 10 problems, 10 numbered
figures, no table; 106 display lines against its 104, the difference being the two
constraint displays set inside 17.2's list). No section has objectives or a closing "##
Summary". The References of 17.1 and 17.2 are never cited: to `notes` (16.6 precedent). 17.2's
"See this video for more information" is a hyperlink in a sentence, not an embed: the sentence
is kept with its link. Credits as in the table; 17.5's three names are its tags.

### The intro and summary pages

- **intro**: one paragraph, no header; one block, header proposed "From Atoms to
  Thermodynamics" (humanizer by the builder). No concepts (21.1). 17.1's first sentence
  repeats its first sentence (both kept, each where the book prints it).
- **summary (17.S)**: two paragraphs, then the chapter "Learning Objectives" (eight
  objectives, six skill goals) kept verbatim as a block (12.S–16.S precedent; the drafter puts
  the objectives in `objectives` and the "Skill goals" in a second block, as it did for the
  earlier summaries: the builder joins them). Taught on the built pages: the weight of a
  configuration (17.2), the Boltzmann distribution from the weights (17.2), q and its meaning
  (17.2), q against Q and when Q follows from q (17.2, 17.6, 17.7), the degrees of freedom
  (17.8), ⟨E⟩, C_V and P from partition functions (17.3–17.5). **Not taught on any page**: the
  principle of equal *a priori* probabilities (17.2 never states it), Bose–Einstein and
  Fermi–Dirac statistics, entropy from the partition function, simple diatomic models for
  state populations (Chapter 18's), and temperatures and number densities from spectral
  intensities (13.2's rotational populations come nearest). One footnote says so (13.S–16.S
  precedent). The summary's "time average" against 17.1's ensemble average stays as printed.

## Per section

- **17.1** The opening sentence and the h3 "The Microscopic Laws of Motion" come before any
  `<h2>`: one block whose header is the book's h3 promoted (root rule 3; proposed), the
  opening sentence at its top; the book's headers after. Concepts (new): Newton's second law
  (axiom, (17.1.2)'s force field beside it); force field; trajectories from initial conditions;
  temperature and kinetic energy ((17.1.3), (17.1.4); the ideal gas's (17.5.7) is a form of it);
  many microscopic states, one macroscopic state; ensemble (italic); the ensemble concept
  (italic); thermal energy E_thermal = kT; the Boltzmann constant; the Boltzmann factor
  ((17.1.5)); β = 1/kT; activation energy; activated processes follow the Boltzmann factor.
  Uses: the classical state (4.1), ⟨vₓ²⟩ (16.1), the 3D box (3.9, "the last formula", footnote
  below). The four questions it asks of ensembles ("addressed in the sections ahead") stay a
  list. Problems: five, four stay (below).
- **17.2** The opening (two paragraphs: arrangements, the canonical ensemble) is its own block,
  header proposed "Counting Arrangements"; the book's headers after. Concepts (new): the
  canonical ensemble; occupation number a_j; the weight W = A!/Πa_j!; the ensemble average
  ((17.2.1), P_j = ⟨a_j⟩/A); the method of the most probable distribution; the constraints
  ((17.2.2), (17.2.3)); the method of Lagrange multipliers; Stirling's approximation; the
  probability of a state, P_j = e^(−βe_j)/Σe^(−βe_k) (`boltzmann-probability`, derived);
  lower states hold more molecules (the note and the blockquote); the molecular partition
  function q; q counts accessible states; the canonical partition function Q; Q = q^N for
  distinguishable independent molecules; Q = q^N/N! for indistinguishable ones (stated in
  words here, the book's first statement; *orchestrator*, below). The note "Boltzmann
  Distribution" kept as a titled note; the blockquote "It must always be remembered …" kept
  as the book's quotation block. Problems: five, plus 17.1's fifth.
- **17.3** No header: two blocks proposed, "The Average over States" (to the definition of Q)
  and "The Energy from ln Q" (from "We can take the derivative"). Concepts (new): the average
  ensemble energy ((17.3.2), (17.3.3)); the average energy from the partition function (kT²
  ∂ln Q/∂T and −∂ln Q/∂β). The two emphasis notes kept (untitled, as printed); the first links
  3.7's expectation values (the LibreTexts link resolves to 3.7, the builder's `xref`).
  Reinforces: the Boltzmann probability ((17.3.1) is one of its forms), β, Q.
- **17.4** The opening is its own block, header proposed "Heat Capacity from ln Q"; the book's
  headers after. Concepts (new): internal energy U; the heat capacity at constant volume
  ((17.4.1)); the heat capacity from the partition function ((17.4.3)); the Dulong–Petit law
  (axiom, its display tagged "(Dulong-Petit Law)", kept); heat capacities fall toward zero at
  low temperature (axiom); the Einstein model of a solid; the Einstein temperature (bold);
  the Einstein heat capacity (corrected form, below); its high- and low-temperature limits
  ((17.4.4), (17.4.5)); stiff, light solids have low heat capacities (diamond, (17.4.6) is 5.1's
  ν); where the Einstein model falls short (lead below 15 K, Debye named).
- **17.5** The opening runs from ⟨P⟩ to the ideal gas law: two blocks proposed, "Pressure as
  an Average" (to ⟨P⟩ = kT ∂ln Q/∂V) and "The Ideal Gas Law" (from "We can use this result");
  the book's headers after. Concepts (new): the pressure of a state P_i = −(∂E_i/∂V)_N; the
  pressure from the partition function; the translational partition function (stated, derived
  in 18.1; *orchestrator*); the gas constant R = N_Ak (Nk = nR); pressure as the energy change
  with volume ((17.5.1)–(17.5.3), P = −dE/dV); the classical canonical partition function; the
  canonical partition function of an ideal gas. Reinforces: the ideal gas law (16.1; derived
  twice here), Q = q^N/N!, (3/2)NkT ((17.5.7)), pressure (16.1). Tuckerman's x, 𝓔(x) and C_N
  are not defined in this book: variables rows give them the meanings the page implies.
- **17.6** No header: one block proposed, "Molecules Told Apart by Their Sites". Concepts (new):
  energies of independent molecules add; distinguishable molecules. Reinforces (derives): Q =
  ∏q_i = q^N (17.2's). No numbered display.
- **17.7** No header: two blocks proposed, "Two Particles on Two Levels" (to Figure 17.7.2 and
  (17.7.3)) and "Dividing by N!" (from "and this is not equal"). Concepts (new): two particles on
  two levels ((17.7.2), (17.7.3)); when dividing by N! works (the note; corrected, below).
  Reinforces: indistinguishable particles (8.5), Q = q^N/N! ((17.7.4) and the last display are
  its forms). The note kept as a titled note.
- **17.8** No header: two blocks proposed, "The Energy of One Molecule" (to π_i) and "One
  Factor per Degree of Freedom". Concepts (new): the average energy of a molecule ⟨ε⟩; the
  average energy of independent molecules ((17.8.3), (17.8.4)); the energy of a molecule by
  degree of freedom; the molecular partition function as a product; the partition function of
  a degree of freedom (q_vib, ⟨ε_vib⟩). π_i is a form of the Boltzmann probability.

## Equation numbers

One number per display, from the converter's `n=`: (17.1.1)–(17.1.5), (17.2.1)–(17.2.4),
(17.3.1)–(17.3.4), (17.4.1)–(17.4.6), (17.5.1)–(17.5.8), (17.7.1)–(17.7.4), (17.8.1)–(17.8.4);
17.6 numbers nothing. 17.4's four-row `align` is one number, (17.4.3), as on the live page
(every row `\nonumber`, the environment labelled once); 17.5's (17.5.5) likewise. 17.1's labels
run 2.12–2.15 then 17.1 (Tuckerman's and the student module's own); every `[ref:eq:…]`
resolves ("Equation 17.1" in 17.1 is (17.1.5)). Printed labels stay as printed: 17.2's Problem
4 "derive equation (17.9)" (the source module's number; footnote below) and 17.4's "(Dulong-Petit
Law)" tag. 17.8's "compare Equation (17.8.2) with Equation (17.8.2)" resolves twice to the same
number (correction below).

## Exercise count report (root rule 13)

Counted from the converted pages.

- **Inline exercises**: none printed. **Worked examples**: none.
- **Problems** (17.1, 17.2): **10 printed**; **0 keyed**; **10 unkeyed**, available with AI
  solutions: **6 explain** (17.1's 1–5, 17.2's 5), **2 prove** (17.2's 1, the constant e^α =
  1/Σe^(−βe_j); 17.2's 4, Q = q_iq_j… from e^(a+b) = e^a e^b), **2 compute** (17.2's 2 and
  3, ⟨E⟩ of two and of N levels).
- **Placement**: 17.1's 1–4 stay in 17.1 (temperature and average energy, the Boltzmann
  factor, extra energy, activation processes). **17.1's 5** ("What do 'separate arrangements'
  mean?") tests 17.2's opening and is **held for 17.2**; both pages' `exercise_notes` say so.
  17.2's five stay in 17.2 (Problem 2 tests (17.2.1) with the distribution, which 17.2
  introduces; Problem 4 tests Q = q^N, stated in 17.2). So 17.1 holds 4, 17.2 holds 6.
- **Kind**: `question`, as 12.14's "Practice Problems" were (*orchestrator*: its label
  "Conceptual Question" fits 17.1's but not 17.2's 1–4; a `problem` kind would be a book row).
- **17.E**: empty; nothing routed.
- **In all**: 10 cards, 0 keyed, 10 unkeyed.
- **Proposed new: 12**, where a concept would otherwise have none (every answer checked by
  computation here): 17.1 one (the Boltzmann factor of a 50 kJ/mol barrier at 310 K against
  300 K: about 1.91 times larger); 17.2 one (the population of the first vibrational level
  against the ground at 300 K for 17.2.1's 12 kJ/mol spacing: e^(−4.81) = 0.0081); 17.3 one
  (⟨E⟩ of a two-level system from −∂ln Q/∂β, ε/(e^(βε) + 1), its limits 0 and ε/2, and 0.269ε
  at kT = ε); 17.4 two (C_V/3R of an Einstein solid at T = Θ_E/2, Θ_E and 2Θ_E: 0.724, 0.921,
  0.979, with 3R = 24.94 J mol⁻¹ K⁻¹ against the book's 2.49 × 10⁴ J kmol⁻¹ K⁻¹; why diamond's
  heat capacity is low at room temperature, from (17.4.6) and Θ_E); 17.5 two (the pressure of
  one mole in 22.4 L at 273.15 K from kT ∂ln Q/∂V, 1.014 × 10⁵ Pa; the equation of state from
  Q ∝ (V − Nb)^N/N!, P = NkT/(V − Nb)); 17.6 one (Q of a crystal of three distinguishable
  two-level molecules at βε = 1: q = 1.368, Q = q³ = 2.559); 17.7 two (the states of two
  indistinguishable particles on three levels 0, ε, 2ε: 6 against q² = 9 and q²/2 = 4.5 at high
  T; why q²/N! fails for N = 2 on two levels); 17.8 two (q from given factors; ⟨ε_vib⟩ =
  hν/(e^(βhν) − 1) for a 12 kJ/mol ladder at 300 K, 0.0985 kJ/mol).

## Figures, in book order (root rules 14, 24, 25, 26, 28)

Rule 14 as rewritten today: a figure starts from the book's and usually replaces it; motion
where the idea moves; a point the reader sees at once; little effort to read; folds where the
book draws one scene several times. The chapter's own numbers: 17.2.1's spacings (rotational
0.012, vibrational 12, electronic 120 kJ/mol) and k_BT ≈ 2.5 kJ/mol at 300 K; 17.4.2's three
panels; 17.4.3's Einstein and classical curves; 17.4.4's measured points for Pb, Ag, Zn, Cu and
Al (read off the image, its source the figure itself, which prints no credit); 17.7's two
levels 0 and ε. No literature number is needed. The arrows of the book's drawings are
label pointers (17.4.1), a double arrow marking an energy height (17.4.2) and an axis (17.5.1):
symbolic or none, so nothing sets a moving floor except the extra exchange Sim.

| Image(s) | Section | What the book shows | Proposed treatment |
|---|---|---|---|
| 17.2.1 (79139, Mysterioso, CC BY-SA 3.0) + 17.2.2 (79140, same) | 17.2 | three ladders (rotational, vibrational, electronic) with their spacings and grey dots at one temperature; one ladder at T₁ = 0 K, T₂ > 0 and T₃ > T₂ | **Fold, replace, still, 2D** (`sim-level-populations`; variation by slider): the three ladders side by side at the book's spacings, each drawn on its own energy scale with ΔE and ΔE/k_BT written under it; each level's population a bar of length P_j; slider T on a log scale from 1 K to 20 000 K, opening at 300 K (k_BT = 2.49 kJ/mol), with a special at 0 K (every molecule in the ground level, q = 1). **Point: a level is populated only when k_BT is not small beside its spacing; at 300 K the rotational ladder is spread over hundreds of levels, the vibrational sits almost wholly in its ground level (0.8 % above), the electronic entirely; warming switches each ladder on at its own temperature, and q under each ladder counts the levels within reach.** Readout P_j = e^(−βe_j)/q and q for each ladder with live numbers. The book's dots are schematic (its vibrational panel shows 1 of 8 excited, where the spacing gives 0.8 %): the figure shows the computed fractions, the original kept. Eyebrow "Figure 17.2.1 + 17.2.2"; both originals; 17.2.2's citation links it. The rotational ladder is evenly spaced and non-degenerate as the book draws it (13.2's real rotor levels are Chapter 18's). |
| 17.4.1 (125478, OpenStax, "CC BY-SA 4.0") | 17.4 | atoms on six springs each, "Atoms" and "Ideal springs" pointed at | **Kept** as the book draws it: a labelled sketch of the model (pointer arrows, nothing moves or varies in the text's use of it); the six degrees of freedom it names are counted in the readout of the Einstein figure. |
| 17.4.2 (346369, Kaya, CC BY-NC 4.0) + 17.4.3 (346394, same) + 17.4.4 (9841, no credit) | 17.4 | seven oscillators on a vibrational ladder at "Θ_E = 1.0, 4.0, 10" with a shaded height; C_V against "Einstein Temperature" 0–12 with the classical line 3Nk_B; C_V of Pb, Ag, Zn, Cu, Al against "Einstein Temperature" 0–2.5 with a curve | **Fold, replace, still, 2D** (`sim-einstein-solid`; variation by slider): left, a vibrational ladder of oscillators with Boltzmann populations and a band of height k_BT (the book's pink shading); right, C_V/3Nk against T/Θ_E with the Dulong–Petit line, the Einstein curve computed, the state point riding it, and 17.4.4's measured points (each metal in `F.el` colours, hover names). Slider T/Θ_E with soft detents at the book's three panels, read on 17.4.3's own axis as T/Θ_E = 0.125, 0.5, 1.25 (correction below). **Point: when k_BT is small beside the quantum hν, almost no oscillator can take up energy and C_V falls toward zero; once k_BT is comparable to hν the oscillators climb the ladder and C_V approaches 3Nk, Dulong and Petit's value; five metals, each scaled by its own Θ_E, follow the one curve.** Readout (17.4.3)'s Einstein form with live numbers, C_V/3Nk and the fraction excited. Axis "heat capacity / 10⁴ J K⁻¹ kmol⁻¹" (17.4.4's "J/K*mol" corrected, footnote). Eyebrow "Figure 17.4.2 + 17.4.3 + 17.4.4"; three originals. |
| 17.4.5 (9842, no credit) | 17.4 | lead's measured C_V against T (K) to 30 K, with an "Einstein" dashed curve | **Kept** as printed: a data plot whose Einstein curve rests on a Θ_E for lead the book never prints; the text's reading of it ("deviates from approximately 15 K") is the reader's comparison by eye. |
| 17.5.1 (61536, Tuckerman) | 17.5 | a box of particles, a piston of area A pushed in along z by dz | **Replace, still, 2D** (`sim-piston-levels`; variation by drag and slider): the box with its piston beside a ladder of the box's levels E_n ∝ 1/L² (3.5's 1D box, the book's "quantum states"), each level's Boltzmann population a bar; the reader drags the piston in by dz and every level climbs, the occupied ones taking the energy dE; slider T. **Point: pushing the piston in raises every state's energy, so each state pushes back with P_i = −∂E_i/∂V; weighting those pushes by the Boltzmann populations gives the pressure, and for the box it lands on kT/L.** Readout F = dE/dz, P = −dE/dV and ⟨P⟩ = kT ∂ln Q/∂V with live numbers. Still: the drag is the motion and there is no clock. Eyebrow "Figure 17.5.1"; original kept. The particles of the book's drawing stay as the box's contents (one category, untyped). |
| 17.7.1 (419541, Larsen, CC BY 4.0) + 17.7.2 (419542, same) | 17.7 | two coloured balls on levels 0 and ε in four arrangements; two black balls in the same four, the middle two indistinguishable | **Fold, replace, still, 2D** (`sim-two-particle-states`; variation by choice and slider, a morph): the four arrangements; a choice "told apart / identical": switching to identical drains the balls' referent colours (`F.ref`, red and blue as the book draws them) to one and slides the two middle states into one. Sliders βε and the number of levels M (2 opens on the book, up to about 12). **Point: colour the particles and the two middle states differ, so Q = q²; erase the colour and they are one state, so Q falls short of q²; with more levels the particles rarely share one, and q²/2! closes on the true count.** Readout Q (distinguishable) = q², Q (identical) and q²/2 with live numbers. Eyebrow "Figure 17.7.1 + 17.7.2"; both originals. |

**3D**: none. The spring lattice of 17.4.1 is the only arrangement in space, and its lesson
(six degrees of freedom per atom) is a count, carried in the Einstein figure's readout.

### Extra simulations proposed (root rule 15)

Only where motion or variation teaches (precedent). Four survive:

- **`sim-boltzmann-factor` in 17.1** (recommended; variation): e^(−E/kT) against E with an
  activation barrier E_a marked and the fraction above it shaded; slider T (and E_a). The
  reader sees the curve flatten as T rises and the factor at the barrier grow far faster than
  T: 300 to 310 K nearly doubles it for 50 kJ/mol.
- **`sim-quanta-exchange` in 17.2** (recommended; moving, the chapter's one clock): A
  oscillators share a fixed number of quanta; at each tick two oscillators chosen at random
  pass one quantum; beside them a histogram of a_j, the number of oscillators holding j
  quanta, and ln W of the present distribution. Sliders A (a handful to a few hundred) and
  E_total. The histogram settles onto the exponential a_j ∝ e^(−βe_j) and ln W climbs to its
  maximum and stays: the most probable distribution emerging from random exchange under
  17.2's two constraints, with β read off the settled slope. Kinematic (quanta move).
- **`sim-average-energy` in 17.3** (recommended; variation): ⟨E⟩ against T for a two-level
  system (17.7's levels) and for an evenly spaced ladder, a choice; the populations beside.
  The two-level ⟨E⟩ levels off at ε/2, the ladder's climbs without end along kT.
- **`sim-schottky` in 17.4** (recommended; variation): C_V of the two-level system against
  kT/ε, a peak at kT ≈ 0.417ε (C_V/k = 0.439), set beside the Einstein curve's plateau. Slider
  T. The reader sees that a ladder that ends cannot keep absorbing heat.

Judged and dropped: a product-table of two molecules' states for 17.6 (the 17.7 figure carries
the counting); a four-ladder degrees-of-freedom figure for 17.8 (17.2's fold already sets the
rotational, vibrational and electronic spacings side by side; 17.8 cites it); a vibrating
spring lattice in 3D for 17.4.1 (no idea of the text moves in it).

## Derivation candidates (root rule 29)

| Where | What | Score | Decision |
|---|---|---|---|
| 17.1, (17.1.3) → (17.1.4) | solve for T | printed, 1 move | Stays. |
| 17.2, W → ln W → Lagrange → P_j | W = A!/Πa_j!; Stirling; Σa_j = A cancels; ∂ln W/∂a_j = −ln(a_j/A); the multipliers; a_j/A = e^α e^(−βe_j); normalize | printed as a block with words, about 14 lines; imported 2 (Stirling, Lagrange's method, both stated in the section) | **Build**: "Derivation · the Boltzmann distribution", results ln W = A ln A − Σa_j ln a_j, the stationarity condition, (17.2.4) corrected and P_j. Notes correct the slips (below). β = 1/kT is asserted ("We will show"), not derived: a fact with provenance 17.1. |
| 17.2, Q = Σe^(−β(e_i+e_j+…)) → q_iq_j… → q^N | the exponential of a sum | prose "We can rewrite", 2 moves | Stays (built in 17.6). |
| 17.3, ⟨E⟩ = Σ E_iP_i → kT²∂ln Q/∂T and −∂ln Q/∂β | substitute (17.3.1); differentiate ln Q in T and in β; compare | printed as a block with words, 8 lines | **Build**: "Derivations · the average energy from the partition function", two results. |
| 17.4, (17.4.3) | C_V = ∂U/∂T = (∂U/∂β)(∂β/∂T); U = −∂ln Q/∂β (17.4.2, from 17.3, `drv`); ∂β/∂T = −1/kT² (unprinted) | printed block, 4 lines, one inserted | **Build**: "Derivation · the heat capacity from the partition function", result (17.4.3). |
| 17.4, Einstein C_V and its limits | q_vib = Σe^(−(v+½)hν/kT) as a geometric series; Q = q^{3N} for 3N distinguishable oscillators; ⟨E⟩ = −∂ln Q/∂β; C_V = ∂⟨E⟩/∂T; Θ_E = hν/k; e^x ≈ 1 + x and e^x ≫ 1 | hidden (stated, no steps); about 8 moves; imported 5 (oscillator levels 5.2, the geometric series, Q = q^N 17.2/17.6, ⟨E⟩ from Q 17.3, e^x ≈ 1 + x); run 6; joins 1: score 12 | **Build**: "Derivations · the Einstein heat capacity", results the Einstein form (corrected), (17.4.4), (17.4.5). Follows the correct mathematics; the zero-point term drops out of C_V (a reason). |
| 17.4, Dulong–Petit | six degrees of freedom × ½kT, per mole | prose, 2 moves | Stays. |
| 17.5, ⟨P⟩ = ΣP_iP_i → kT ∂ln Q/∂V | P_i = −∂E_i/∂V; ∂Q/∂V; divide | printed as a block with words, 7 lines | **Build**: "Derivation · the pressure from the partition function". |
| 17.5, ln Q = N ln q − ln N! → P = NkT/V = nRT/V | log rules, one V-term, differentiate, Nk = nR | printed as a block with words, 5 lines | **Build**: "Derivation · the ideal gas law from the partition function", result P = NkT/V (16.1's law, its form linked). |
| 17.5, piston (17.5.1)–(17.5.3) | F = dE/dz, P = F/A, A dz = −dV | printed, 3 moves | Stays. |
| 17.5, (17.5.5) | Tuckerman's phase-space average to kT ∂ln Q/∂V | printed align, 4 lines, but its x, 𝓔(x) and C_N are undefined in the book and its result is the derivation just built | Stays as printed, cited to the built pressure derivation (repeated material, precedent). |
| 17.5, Q of the ideal gas → (17.5.7) | factor the momentum integrals; the Gaussian ∫e^(−βp²/2m)dp = (2πm/β)^{1/2}; ln Q; −∂/∂β | "immediately", "which gives": 5 moves; imported 3 (the Gaussian integral, ⟨E⟩ from Q 17.3, Nk = nR); run 3; joins 0: score 6 | **Build**: "Derivation · the energy of an ideal gas", results the ideal-gas Q and (17.5.7). (17.5.8) is the ideal-gas-law derivation's result: cited, not rebuilt. |
| 17.6, E_l = Σε → Q = ∏q_i → q^N | printed, 5 lines | | **Build**: "Derivation · the partition function of distinguishable molecules", result Q = q^N (17.2's form, linked); notes correct the indices. |
| 17.7, (17.7.2), (17.7.3) | count the states | substitution, 2 lines | Stays (the figure carries it). |
| 17.8, (17.8.3) | Q = q^N/N!, ln Q = N ln q − ln N!, the T-derivative, the sum | printed split, 3 lines, with words | **Build**: "Derivations · the average energy of independent molecules", results (17.8.3), (17.8.4); facts linked to 17.3's derivation (`drv`). |
| 17.8, q = q_trans q_rot q_vib q_elec | the exponential of a sum factors | prose, 3 moves; imported 1 (17.6, `drv`); run 3: score 4 but under four moves | Stays. |

Nine derivation records to build (17.2; 17.3; 17.4 × 2; 17.5 × 3; 17.6; 17.8), one hidden
(Einstein, score 12) and one mostly hidden (the ideal gas energy, score 6).

## Corrections spotted (root rule 13)

The book's words kept; a numbered footnote where each applies. *Checked by computation* marks a
correction worked here; *from memory, unchecked* one that rests on a literature fact the
builder checks first.

- **intro**: none.
- **17.1**: "quadrupole precision … about 128 bytes" (quadruple precision is 128 bits, 16
  bytes, so the totals are about 10¹⁶ GB and ten orders of magnitude; *checked by
  computation*, the bit count a standard fact); "These questions will be addresses" (as
  printed); "the states given by the last formula" (the 3D box energies of 3.9, absent from
  this page; footnote with a link); "For a random particle, its thermal energy of a particle"
  (as printed).
- **17.2**: "The sum of the probabilities of each separate arrangement equals the total number
  of separate arrangements" (as printed, no footnote); "the probability p_j … is exponentially
  proportional to the energy" (falls exponentially with it; footnote); "Σ_j(∂ln W/∂a_j) = 0"
  (each term carries da_j); "(∂A!/∂a_j) − Σ_i(∂ln a_i/∂a_j) = 0" (∂ln A!/∂a_j − Σ_i ∂ln a_i!/∂a_j);
  "ln W = ln A! − Σ ln a_j! a ≈ … − Σa_j" (the last term is +Σa_j, which is why it cancels
  against −A); "∂(A ln A)/∂a_j = … − ∂A/∂a_j = ln A − 1" and "∂(a_i ln a_i)/∂a_j = … −
  ∂a_i/∂a_j = ln a_j + 1" (both +: d(x ln x)/dx = ln x + 1, giving ln A + 1, and the printed
  next line only follows with the + signs; *checked by computation*); (17.2.4) "a_j/A = e^a
  Σ_j e^(−βe_j)" (a_j/A = e^α e^(−βe_j); summing it over j gives the "1" the next line uses);
  "This determines a" (α); "We will show that β … is 1/kT" (not shown in this chapter); Figure
  17.2.1's caption repeats 17.2.2's and its "CC SA-BY 3.0" (as printed); "places a very
  important role" (as printed); Problem 4's "equation (17.9)" (the source module's number;
  the property of the exponential gives this page's Q = q_iq_jq_k…; footnote under the card,
  *orchestrator* to confirm the reading).
- **17.3**: "the canonical ensemble (constant temperature and constant pressure)" (constant N,
  V and T, as 17.2 says); (17.3.1) divides by Q a sum over one molecule's states (17.2's q;
  footnote); "This is the directly obtained" (as printed).
- **17.4**: "Each atom has an energy of ½kT" (each degree of freedom carries ½kT, so 3kT per
  atom and 3R per mole, which is what 6R/2 counts); the Einstein display's third "=" (C_V =
  3Nk(Θ_E/T)² e^(Θ_E/T)/(e^(Θ_E/T) − 1)², one product, not two equal lines; *checked by
  computation* against (17.4.4) and (17.4.5)); "θ_E = hv/k" (ν; as printed in the text, the
  form corrected); Figure 17.4.2's caption and panel labels ("As the Einstein temperature
  increases, the greater the probability …"): it is T/Θ_E that rises across the panels, and a
  higher Θ_E means fewer excited oscillators, as the diamond paragraph says (through the row's
  `figure`); Figure 17.4.3's axis: its curve is the Einstein function with the axis stretched
  eightfold (it reaches 0.30 of 3Nk_B at 2 and 0.69 at 4, where the function of T/Θ_E reaches
  0.304 at 0.25 and 0.724 at 0.5; *checked by computation*), and its caption's "above 10
  Einstein Temperatures" is above T ≈ 1.25Θ_E (C_V within 5 % of 3Nk); Figure 17.4.4's axis
  "10^4 J/K*mol" (10⁴ J K⁻¹ kmol⁻¹, as the text's 2.49 × 10⁴ J kmol⁻¹ K⁻¹; its curve sits a
  little right of the Einstein function, 1.6 against 1.80 at 0.5: noted for the builder, the
  points kept as read); "As the temperature increases or decreases, the Einstein temperature
  increases or decreases likewise" (Θ_E = hν/k is a constant of the solid); "Alexis Thèrèse
  Petit" (as printed).
- **17.5**: "In a few steps we can show that the temperature can be expressed" (the pressure);
  "Q(N,V,β" and "Q(N, V, T" without their closing parenthesis (as printed); the ln Q line's
  "−(3N/2)ln(2πm/h²β)" (+; N ln q contributes +(3N/2)ln(…); the pressure is unaffected;
  *checked by computation*); (17.5.5)'s first integral without dx (as printed); "Avagadro's"
  (as printed); OpenStax "CC BY-SA 4.0" on 17.4.1 (*from memory, unchecked*: OpenStax is CC
  BY 4.0; shipped under the printed licence either way).
- **17.6**: "Q = Σ_i e^(−βE_l)" (the sum runs over l); "Σ_j e^(−βε_i^b) Σ_k e^(−βε_i^c)" (ε_j^b,
  ε_k^c); "We will see in the next chapter" (the next section, 17.7).
- **17.7**: the note's "the N! factor is only applicable for large N" (it holds when the
  particles rarely share a state, many accessible states per particle; for two particles on M
  levels q²/2 approaches the true count as M grows, *checked by computation*); "indescernable",
  "exited" in 17.7.2's caption (as printed).
- **17.8**: "If we compare Equation (17.8.2) with Equation (17.8.2)" ((17.8.3) with (17.8.4));
  "The probability that a particle is in state i, π_i, is given by: ⟨ε⟩ = …" (π_i = …);
  "∂ln q_vib/∂t" (T); "follows the same is related to" (as printed).
- **summary**: the objectives no built page teaches (one footnote, above).

## Licences of the figures

| Figure | Credit as printed | Proposal |
|---|---|---|
| 17.2.1, 17.2.2 | "CC SA-BY 3.0; Mysterioso via Wikiversity" | shipped under their own licence (CC BY-SA 3.0) with credit |
| 17.4.1 | "CC BY-SA 4.0; OpenStax" | shipped with the printed credit |
| 17.4.2, 17.4.3 | "CC BY-NC 4.0; Ümit Kaya via LibreTexts" | shipped under their own licence with credit |
| 17.4.4, 17.4.5 | none (ChemWiki GIFs) | shipped under the page's licence (BY-NC-SA) |
| 17.5.1 (Tuckerman screenshot) | none | shipped under the page's licence |
| 17.7.1, 17.7.2 | "CC BY 4.0; Delmar Larsen via LibreTexts" | shipped with credit |

**Page licences**: 17.1, 17.2, 17.3, 17.6, 17.7 and 17.8 are tagged CC BY and shared BY-NC-SA
with the rest (Chapter 1's 1.1 precedent); the summary is untagged (the book's).

## What is new to OmniStax here

- **Two new types**: `heat-capacity` (J/K; C_V, the Einstein heat capacity) and
  `partition-function` (dimensionless; Q, q, q_trans, q_rot, q_vib, q_elec,
  Q_distinguishable). `npm run colours:default` dealt both colours and kept every existing
  one. *Orchestrator*: the partition function is the chapter's (and Chapter 18's) central
  quantity, so it is typed to be recognised across prose and equations; the alternative is
  ink, like 16's Z. Untyped and in ink: probabilities (P_j, P_i, π_i, p_i, p_N), W, W_N, a_j,
  A, M, β, k, k_B, R, N, N_A, C_N, n_i, α, x.
- **Symbols**: 45 new (34 with macros, every macro on a typed symbol), among them `Q_sys`
  (`\kQsys`) and `q_mol` (`\kqmol`), since `Q` and `q` are lengths of Chapters 5–13, and
  `P_i_press` (`\kPipress`) for 17.5's pressure of state i beside its probability P_i. The
  bold vectors of 17.1 and 17.5 have their own keys (`r_i_vec`, `v_i_vec`, `p_i_vec`, `F_i`).
  Reused: E, E_i, E_l, E_tot, E_1, E_2, eps_i, epsilon, T, V, P, N, k, k_B, beta, alpha, A, a_j,
  M, m, m_i, t, h, nu, mu, n_mol, R, x, z, F, Z. 131 variables rows; `redefines` on 17.5's A
  (the piston area) and x (a phase-space point).
- **58 concepts, 88 edges** (Hasse-reduced against the merged book: 5 redundant edges removed
  before the merge), 56 forms. 8.5's `indistinguishable-particles` is reused rather than
  duplicated. *Orchestrator*: (1) Q = q^N and Q = q^N/N! are introduced in 17.2, where the
  book first states them (root rule 6), and derived in 17.6 and 17.7; the first rests on
  `distinguishable-particles` (17.6), a forward edge (16.2 precedent); the alternative is to
  introduce them in 17.6 and 17.7. (2) 13.2's `boltzmann-distribution` is an axiom and 17.2's
  `boltzmann-probability` its derivation; they are one law in two concepts with no edge
  (Chapter 13 owns the axiom; an edge or a merge is Chapter 13's row). (3) `translational-
  partition-function` and the keys `q_trans`, `q_rot`, `q_vib`, `q_elec` are merged here;
  Chapter 18 reuses them (18.1 derives what 17.5 states).

## The chapter's answer to root rule 23

The chapter's picture is grey dots on a ladder. The stunning version lets the reader set the
dots moving: quanta passed at random between a few dozen oscillators pile up into an
exponential while ln W climbs to its peak and stays there, the most probable distribution
found by chance; a temperature slider sweeps three ladders and switches the rotational,
vibrational and electronic levels on at their own temperatures, q counting the levels in
reach; a barrier fills as the Boltzmann factor grows; ⟨E⟩ of two levels stalls at ε/2 and its
heat capacity rises and falls while Einstein's solid climbs to Dulong and Petit's 3R with five
real metals on the curve; a piston squeezes a box and every level rises, the push of each state
weighted into the pressure; and two coloured balls lose their colour and a state disappears.
Every number is the book's: 17.2.1's spacings and k_BT at 300 K, 17.4's panels and measured
points, 17.7's two levels.

## Tool changes made for this chapter

None. The converter handles every page with no warning; `md2html.py` drafts all ten pages
(319 maths spans, every one set by KaTeX in strict mode without an error, `e^\dfrac{…}{…}` of
(17.4.5) included). Notes for builders: 17.1's h3 opens its first block (the drafter leaves
"TODO header" above it); 17.4's "(Dulong-Petit Law)" is a named `\tag` the drafter keeps; the
summary's objectives land in `objectives` and its "Skill goals" in a second block, as in
12.S–16.S; the References of 17.1 and 17.2 come through as blocks (to `notes`).
