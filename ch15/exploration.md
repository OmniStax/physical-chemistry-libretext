# Exploration: Chapter 15, Lasers, Laser Spectroscopy, and Photochemistry

Written 2026-11-08 from the converted pages (`python3 tools/fetch.py --media 15`, then
`python3 tools/convert.py 15`), every page read in full, the raw HTML checked where the
conversion was in doubt (15.2's header subscripts, 15.1's `(\Delta S=0\)`, the
`\nonumber`s of 15.1, 15.3, 15.4 and 15.6, the external image sources of 15.1.3 and
15.4.1), and all 23 mirrored images looked at (the SVGs rendered through `sharp`).
The landing page (11810, CC BY, Larsen) prints one paragraph (what a laser is, what the
chapter will do): an **`intro/` page** (root rule 21.1); its thumbnail credit is left out
with the thumbnail (Chapter 3's precedent). **15.S** (550572, Crabtree's course notes,
untagged) is the **`summary/` page** (21.2). **15.E (13646) has no body** (title only):
nothing is routed from it (root rule 9), and no other N.E page holds laser exercises (the
full-book pass found bodies only in 19.E and 21.E).

**Every page holds its own text.** Unlike 9.11, 14.2 and 14.3, no page of this chapter
carries Zielinski's uncertainty passage or any other stray text, and none is empty: all
seven sections are built. The chapter is a patchwork of sources, each page whole:
15.1 is Schaller's photochemistry notes (with Harris and Bertolucci's Jablonski material);
15.2 is Mitofsky and Weideman with Wikipedia's *Einstein coefficients* article pasted in
(the three process paragraphs); 15.3, 15.4 and 15.6 are tagged Newman, Maleki and Neils;
15.5 is the book's (Neils's figures by Kaya); 15.7 is Schaertel's survey with 24
references.

Repeated material (built once where the book first works it, cited after): the Pauli
principle (8.5), spin multiplicity 2S + 1 (8.8), Hund's rule (8.8, 8.10), paramagnetism
(9.10), the Russell–Saunders rule ΔS = 0 (8.11), vibronic transitions and the 0–0 line
(13.6), the Franck–Condon principle, its vertical transition and the displaced-oscillator
overlaps (13.7, `sim-vertical`), line broadening (13.7), the Boltzmann distribution (13.2),
Planck's distribution law (1.2), ΔE = hν (13.1), degeneracy (3.9), standing waves (2.1).
13.11's two-level system is the coherent (amplitude) picture; 15.2's is Einstein's rate
picture of the same two levels: a link, not a rebuild. Each is a link (`class="xref"`,
`drv` from a derivation fact), never a second build.

## Pages

| Page | id | Licence | Authors (tags / page) | Headers (`<h2>`) | Ex | Exr | Fig | Img | Tab | Notes | Eq (numbered / displays) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| intro | 11810 | BY 4.0 | Larsen (tag) | none: one paragraph | | | | | | | |
| 15.1 Electronically Excited Molecules can Relax by a Number of Processes | 13647 | BY-NC-SA 4.0 | Schaller, Wong, Neils (list) | opening; Spin Multiplicity - Singlet and Triplet Excited States; Jablonski Diagrams; Deactivation Processes (h3: Relaxation and Fluorescence, Internal Conversion, Intersystem Crossing, Phosphorescence: …, External Conversion); Absorption and Emission Rates; References | | 2 (2 keyed) | 11 | | 1 | 1 (billiards and Barry Bonds) | 0 / 2 |
| 15.2 The Dynamics of Transitions can be Modeled by Rate Equations | 13648 | BY-NC-SA 4.0 (text partly Wikipedia, BY-SA) | Mitofsky, Weideman, Wikipedia, Neils (list) | The Interaction of Light with Atoms; Einstein Coefficients (h3: Photon absorption, Spontaneous emission, Stimulated emission); The Relationship between A₂₁, B₁₂, and B₂₁ | | | 1 | | | | 14 / 15 (+4 rate laws set as lone inline maths) |
| 15.3 A Two-Level System Cannot Achieve a Population Inversion | 13649 | BY-NC-SA 4.0 | Newman, Maleki, Neils (tags) | Lasing in Two-Level Systems | | | 1 | | | | 1 / 2 |
| 15.4 Population Inversion can be Achieved in a Three-Level System | 13650 | BY-NC-SA 4.0 | Newman, Maleki, Neils (tags) | opening; Lasing in Three-Level Systems; Transition Rates in Three-level Systems (h3: A Ruby Laser, A Copper Vapor Laser); Four-Level Lasers; References | | | 4 | | | | 3 / 5 |
| 15.5 What is Inside a Laser? | 13651 | BY-NC-SA 4.0 | none (the book's) | opening list; The Gain Medium (h3: Solids, Gases, Exciplex Lasers, Liquid Solutions); The Pump Source; The Laser Optical Cavity; Diode Lasers | | | 5 | | 2 | | 0 / 0 |
| 15.6 The Helium-Neon Laser | 13652 | **BY 4.0** | Newman, Maleki, Neils (tags) | none | | | 3 | | 1 | | 0 / 2 (reactions, `\nonumber`) |
| 15.7 Modern Applications of Laser Spectroscopy | 13653 | BY-NC-SA 4.0 | Schaertel (list; Neils edited the references) | A Quick Overview; Conclusion; References | | | | | | | 0 / 0 |
| summary (15.S) | 550572 | none | Crabtree (tag) | paragraph, then "Learning Objectives" with "Skill goals" | | | | | | | |
| 15.E | 13646 | BY-NC-SA 4.0 | | **empty** | | | | | | | |

Counts agree with the full-book table (0 examples, 2 exercise boxes keyed, 25 figures,
4 tables, 26 displays, 1 page with objectives: the summary's). No section has objectives
or a closing "## Summary". The 15.1 and 15.4 "## References" lists are never cited: to
`notes` (13.x precedent). 15.7's references [1]–[24] are cited by number in its prose:
kept as the page's closing block (9.14, 14.7 precedent); [3]'s link points at a GVSU
proxy (`doi-org.ezproxy.gvsu.edu`) while its text prints the DOI (as printed); the bold
volume numbers ({term:48}, {term:4}, {term:10}) are references, not terms (14.7's "1982,"
precedent). Credits as in the table; the summary Crabtree (13.S, 14.S precedent).

### The intro and summary pages

- **intro**: one paragraph, no header; one block, header proposed "Light That Copies
  Itself" (humanizer by the builder). No concepts (21.1). "Lasers provides" as printed.
- **summary (15.S)**: one paragraph, then a chapter "Learning Objectives" box (nine
  objectives, five skill goals) kept verbatim as a block (12.S, 13.S, 14.S precedent).
  Taught on the built pages: Einstein coefficients (15.2), inversion and lasing
  (15.2–15.4), which systems invert (15.3–15.4), a laser's parts (15.5), cw against
  pulsed (15.4–15.5), the rate equations (15.2, 15.4), a laser's efficiency (15.3, 15.6),
  photon energies (15.1's exercises). **Not taught on any page**: spectral and temporal
  resolution, why cw lasers suit high-resolution spectroscopy, why pulsed lasers are used
  in photodissociation, quantum yield, duty cycle, average and peak power. One footnote
  says so (13.S, 14.S precedent).

## Per section

- **15.1** Book headers kept; the opening paragraph (fluorescence against phosphorescence)
  is its own block, header proposed "Two Ways to Give Light Back". The note on billiards
  and Barry Bonds kept as a titled note. Concepts (new): diamagnetism (the book's
  "diamagnetic", paired spins); singlet and triplet excited states (the triplet
  paramagnetic); spin-forbidden transitions (ΔS = 0, weak S–T bands, a 10⁴ longer
  lifetime); fluorescence; phosphorescence; the Jablonski diagram; competing deactivation
  processes (the fastest route wins); vibrational relaxation (collisions, Figure 15.1.7);
  the red shift of fluorescence; absorption and fluorescence spectra (from v″ = 0 up, from
  v′ = 0 down); radiationless transition; internal conversion (bold); intersystem
  crossing; external conversion (bold); the timescales of Table 15.1.1. Uses or
  reinforces: Pauli (8.5), spin multiplicity (8.8), the total spin S, m_s (8.4), Hund's
  rule (8.8, its bold "Hund's rule" and "spin is maximized" are reinforcements, "lower" is
  emphasis), paramagnetism (9.10), the Russell–Saunders ΔS = 0 (8.11), vibronic
  transition, 0–0 (13.6), Franck–Condon principle (13.7), ΔE = hν (13.1), the photon
  (1.3). The two exercises (molar photon energies) test 1.2's E = hν, 13.1's c = λν and
  the wavenumber (1.4): they go to the Exercises document of 15.1 (place end), kind
  `exercise`. The text's `(\Delta S=0\)` is a TeX slip at the source (the opening `\(`
  printed as a bare parenthesis): the builder sets it as maths, ΔS = 0.
- **15.2** Book headers kept, the third header with its subscripts (A₂₁, B₁₂, B₂₁; the
  converter fixed, see Tool changes). Concepts (new): the population of a level (N₁, N₂);
  absorption, spontaneous emission, stimulated emission (bold, "induced emission"); the
  laser (the acronym, whose capital letters the page bolds one by one: one term, not
  five); populations of two levels in thermal equilibrium (N₁ = N₂e^{ΔE/k_BT}, (15.2.5),
  (15.2.6)); no amplification at equilibrium; the Einstein coefficients; the two-level
  rate equation (15.2.2); the Einstein relations (15.2.10), (15.2.11); the rate equation
  in the net upper population (15.2.13); population inversion (15.2.14). Uses: Planck's
  law (1.2), spectral energy density (1.1, ρ_ν here), the Boltzmann distribution (13.2),
  degeneracy (3.9), ΔE = hν (13.1), line broadening and the energy–time uncertainty
  (13.7, 4.6; the "spectral linewidth" link goes to Wikipedia as printed). The four rate
  laws printed as lone `$…$` paragraphs stay unnumbered displays of the text (forms of
  their concepts). Bold "and in phase with" is emphasis.
- **15.3** One book header. Concepts (new): properties of laser light (coherent,
  monochromatic, collimated, efficient); a laser's efficiency; the metastable state;
  stimulated emission must outpace absorption (15.3.1 → N₂ > N₁); pumping; no inversion
  in a two-level system (the title's claim; the page argues it in words and the waterfall
  analogy, and 15.4's opening states it). Reinforces: population inversion (bold here,
  first named in 15.2.14), stimulated emission, the Einstein relations (B₂₁ = B₁₂).
- **15.4** The opening paragraph is its own block, header proposed "Why a Third Level";
  the book's headers after. Concepts (new): the three-level laser; the ruby laser (bold
  "Maiman's ruby laser"); the transitions of a three-level system (the nine events, a–i);
  inversion on the metastable level (the ruby case); gain medium (named here, "is called a
  gain medium"); the steady state of a three-level laser (N_total, (15.4.1)–(15.4.3), the
  condition A₂₁ > A₃₂); the four-level laser. Reinforces: pumping, metastable state,
  population inversion, two levels never invert (the opening). The 15.4.1 photographs:
  below.
- **15.5** The opening list (three parts) is its own block, header proposed "Three
  Parts"; the book's headers after. Concepts (new): parts of a laser; optical cavity
  (output coupler, modes); continuous-wave and pulsed lasers; exciplex laser (with
  excimer); dye laser (tunable, tuning element); diode laser. Reinforces: gain medium
  ("active medium"), pumping (its own header "The Pump Source"), the ruby laser,
  properties of laser light ("always monochromatic … always coherent"), standing waves
  (2.1, the cavity's modes). Tables 15.5.1 and 15.5.2 kept as `div.book-table` with the
  corrections below. The "Laser Radiation Properties" link is kept as a link.
- **15.6** No header: three blocks proposed, "The First Continuous Laser" (the first two
  paragraphs), "Helium Feeds Neon" (from Figure 15.6.1 to Table 15.6.1) and "Inside the
  Tube" (from "In most He-Ne lasers the gas" to the end), through the humanizer by the
  builder. Concepts (new): excitation transfer from helium to neon (the two printed
  reactions as its forms); the helium–neon laser. Reinforces: four-level laser,
  metastable state, optical cavity (high reflector, output coupler), a laser's efficiency
  (0.1 %, 1 mW per watt), the ballast and getters (prose, no concept). The two reaction
  displays stay maths as printed.
- **15.7** Book headers kept. Concepts (new): laser spectroscopy (monochromaticity,
  directionality, coherence put to use); time-resolved laser spectroscopy (short pulses);
  laser-induced breakdown spectroscopy (LIBS); nonlinear spectroscopy. Reinforces:
  properties of laser light (the conclusion's list of nine), continuous-wave and pulsed
  lasers. No figure (none earns one, below). Literature cited only, no data.

## Equation numbers

One number per display, from the converter's `n=`: (15.2.1)–(15.2.14), (15.3.1),
(15.4.1)–(15.4.3). Unnumbered (`\nonumber` at the source): 15.1's two multiplicity sums,
15.2's first display (N₁ = N₂e^{ΔE/k_BT}), 15.3's N₂ > N₁, 15.4's N_total sum and steady-
state line, 15.6's two reactions. The page's `[ref:eq:…]` citations all resolve to these
numbers ((15.2.1), (15.2.4)–(15.2.6), (15.2.8), (15.2.10), (15.2.11), (15.3.1), (15.4.1),
(15.4.3)); the live page agrees (no `align`, so MathJax's row count is the same).

## Exercise count report (root rule 13)

Counted from the converted pages.

- **Inline exercises** (`box-exercise`): **2 printed** (15.1.1, 15.1.2), both
  **keyed** (Answer parts with a method and three values each), **0 unkeyed**; both
  computations (molar energies from λ and from ν̃). Keys checked: 15.1.1 reproduces with
  the constants its method prints (665.0, 251.5, 185.6 kJ/mol); 15.1.2's values (37.14,
  20.27, 11.52) follow CODATA constants rather than the 3.000 × 10⁸ m/s its method shows
  (that gives 37.17, 20.29, 11.53): within 0.1 %, no correction. Both in 15.1, kind
  `exercise`, `place: end` (Chapter 1's choice: the Exercises document).
- **Worked examples**: none.
- **Problem or question lists**: none.
- **15.E**: empty; nothing routed.
- **In all**: 2 cards, 2 keyed, 0 unkeyed.
- **Proposed new: 12**, where a concept would otherwise have none: 15.1 two (order the
  steps of a molecule excited to S₂ by Table 15.1.1's timescales and say which emit;
  why fluorescence is red-shifted and why cold, viscous solvent brightens it); 15.2 two
  (N₂/N₁ for a 2.0 eV gap at 300 K and at 3000 K with g₁ = g₂; A₂₁/B₂₁ at 632.8 nm, and
  B₂₁ from A₂₁ = 6.56 × 10⁶ s⁻¹); 15.3 one (the steady-state N₂/N₁ of a pumped two-level
  system as B₁₂ρ_ν grows against A₂₁, and why it never reaches 1); 15.4 two (N₃/N₂ from
  (15.4.3) for given A₂₁, A₃₂ and ρ_νB₃₂, inverted or not; why a laser lasing to the
  ground state needs a flash lamp where a four-level laser does not); 15.5 two (the role
  of each part of a cavity and what an output coupler's reflectivity trades; why an
  exciplex medium is inverted from the start, and exciplex or excimer for XeCl* and Xe₂*);
  15.6 two (the input power of a 5 mW He–Ne laser at 0.1 %; photons per second in 1 mW at
  632.8 nm); 15.7 one (which laser property each of three applications relies on).

## Figures, in book order (root rules 14, 24, 25, 26, 28)

Rule 14 as rewritten today: a figure starts from the book's and usually replaces it; motion
where the idea moves; a point the reader sees at once; little effort to read; folds where
the book draws one scene several times. The chapter has no measured numbers of its own
except Table 15.1.1's timescales, Tables 15.5.1, 15.5.2 and 15.6.1, the He–Ne
wavelengths (632.8, 1152.3, 3391.3 nm) and the He–Ne figure's energy scale; every figure
opens on those. Photons are drawn in their real colour (fact `spectrum`; infrared lines
drawn as a labelled dark band). Level ladders, spin arrows and the Einstein-coefficient
arrows of the book's diagrams are notation (rule 24.1); what moves is a molecule's state
dropping, a photon travelling, population flowing between levels.

| Image(s) | Section | What the book shows | Proposed treatment |
|---|---|---|---|
| 15.1.1 (73600, public domain, T. Matthews) | 15.1 | spin arrows: singlet ground, singlet excited, triplet excited | **Faithful copy, still, 2D** (standardisation only: symbolic spin arrows, nothing moves or varies). Original shipped. |
| 15.1.2 (73601, Jablonski GIF, credited to Reusch, MSU, no licence) + 15.1.3 (Schaller's PNG served from employees.csbsju.edu, not mirrored) | 15.1 | the partial Jablonski diagram (S₀–S₃, T₁–T₃; absorption, R, ic, isc, F, P); a particle absorbing violet light and emitting blue | **Fold, replace, moving, 2D** (`sim-jablonski`; flow by animation, variation by choice): the book's columns and levels; one molecule at a time lights up its state and fires through the processes, straight arrows with a photon in its real colour, wavy ones without; a clock on a logarithmic scale ticks each step at its Table 15.1.1 time; a tally counts photons out by kind. Choice: where the light lands (S₁, S₂, S₃: violet, deeper UV …); slider: the share of S₁ molecules that cross to T₁ (0–100 %). **Point: wherever the light lands, the molecule slides to the bottom of S₁ within picoseconds; from there it fluoresces within nanoseconds or crosses to T₁ and phosphoresces much later, and either way the light out is redder than the light in** (15.1.3 is that last fact drawn once). Readout: E = hν of the absorbed and emitted photons with live numbers and the elapsed time per step. Kinematic: the state's drop and the photons. Eyebrow "Figure 15.1.2 + 15.1.3". Originals: neither shipped (15.1.2: credit without licence, the 9.8.2 / 12.2 precedent, `notes` credits Reusch; 15.1.3: not reachable, *orchestrator*). |
| 15.1.4 + 15.1.5 + 15.1.8 + 15.1.10 + 15.1.11 (Schaller's PNGs) | 15.1 | one scene drawn five times: ground and excited potential curves with vibrational levels; excitation to a high level; vibrational relaxation and emission; internal conversion where the curves overlap; intersystem crossing onto a triplet curve; phosphorescence | **Fold, replace, moving, 2D** (`sim-relaxation`; flow by animation): the singlet ground, singlet excited and triplet curves; the state dot rises straight up (vertical, 13.7), steps down the vibrational ladder as heat, then leaves by the route chosen. Choice: fluorescence / internal conversion / intersystem crossing and phosphorescence. Slider: how far the excited curves are displaced (bond length in the excited state), which sets how high the vertical excitation lands. **Point: light lifts the molecule straight up onto a high vibrational level; it sheds that vibration as heat, and then gives a photon from the bottom of the curve, slides onto the ground curve where the two meet, or crosses to the triplet curve and emits much later.** Readout: E absorbed, E emitted and the difference lost as heat, with live numbers. Kinematic arrows (the relaxation steps). Eyebrow "Figure 15.1.4 + 15.1.5 + 15.1.8 + 15.1.10 + 15.1.11"; five originals (page licence). Links 13.7's `sim-vertical`. |
| 15.1.6 (399302, Kaya) | 15.1 | identical ladders, absorption arrows from v″ = 0, fluorescence arrows from v′ = 0, and the two spectra (progressions peaking near v = 3) | **Replace, still, 2D** (`sim-mirror`; variation by slider): the two ladders above, the two spectra below on one λ axis, the intensities from the displaced-oscillator overlaps of 13.7 (linked). Slider: the excited state's displacement (0 to the book's drawing, Huang–Rhys S ≈ 0–5); a **special** at zero displacement (dashed circle, slight snap) where only the 0–0 line survives. **Point: absorption climbs from v″ = 0 and fluorescence falls from v′ = 0, so the two spectra meet at the 0–0 line and mirror each other; the farther the excited state's bond shifts, the wider both spread.** Readout: the 0–0 energy and the strongest line in each spectrum. Opens on the drawn spectra (S ≈ 3); the caption's "equal bond length" (which would leave the single 0–0 line) is corrected through the row's `figure` (*orchestrator*: opening state). Eyebrow "Figure 15.1.6"; original kept. |
| 15.1.7 (73611, Schaller) | 15.1 | an excited (red) molecule and a ground (blue) one, before, colliding, after: one vibrational quantum handed over | **Replace, moving, 2D** (`sim-collision`; flow by animation): the two wells side by side, the molecules meet, one quantum drops in the red and appears in the blue; repeated collisions with fresh partners carry the excitation away. No slider (none changes the idea); transport, since the collision is a time. **Point: a collision moves vibrational energy from the excited molecule to its partner, one quantum at a time, until the excited molecule sits at the bottom of its well.** Readout: the red molecule's vibrational level and the energy handed over per collision. Kinematic arrows (the sequence of the book's panels). Eyebrow "Figure 15.1.7"; original kept. |
| 15.1.9 (73609, Schaller) | 15.1 | nitrogen's 2s²2p³: quartet (three parallel) and doublet | **Faithful copy, still, 2D** (orbital boxes, symbolic arrows; Hund's rule is 8.8's, linked). Original shipped. |
| Table 15.1.1 | 15.1 | rates of absorption and emission | Kept as a `div.book-table`; its numbers drive `sim-jablonski`'s clock. |
| 15.2.1 (399463, Kaya) | 15.2 | absorption, spontaneous emission, stimulated emission, before and after | **Replace, moving, 2D** (`sim-einstein`; flow by animation, variation by slider): the book's three lanes, played together: a photon wave packet travels in, the electron rises or falls, photons travel out; spontaneous emission fires at a random moment in a random direction; in the stimulated lane the two outgoing packets travel together crest on crest. Slider: the gap E₂ − E₁ across the visible (photon colour real); the photon must match it. **Point: absorption lifts the atom; spontaneous emission sends a photon off at any moment in any direction; stimulated emission sends a second photon out with the first, same colour, same direction, in step.** Readout: E₂ − E₁ = hν₁₂ with live numbers. Eyebrow "Figure 15.2.1"; original kept (Kaya, own licence). |
| 15.3.1 (400442, Kaya) | 15.3 | a two-level atom: incident photon, stimulated emission, two photons out | **Replace, moving, 2D** (`sim-two-level`; flow by animation, variation by slider): a strip of two-level atoms lit by pump light at the lasing frequency, each pump photon exciting a ground atom or stimulating an excited one with equal chance; below, N₁/N and N₂/N against time from (15.2.2) with g₁ = g₂, starting from the thermal populations, the steady values dashed and the line N₂ = N₁ marked. Slider: the pump's B₁₂ρ_ν in units of A₂₁ (log, 0.01–100, a slider formatter for the ratio). **Point: however hard the pump drives a two-level atom, absorption and stimulated emission keep pace, so the upper population creeps toward half and never passes it.** Readout: (15.3.1)'s two rates with live numbers (stimulated always the smaller) and N₂/N₁. Legend for N₁, N₂. Eyebrow "Figure 15.3.1"; original kept. Links the derivation below. |
| 15.4.1 (left: a copy of Maiman's laser, CC0, Immega, Wikimedia, not mirrored; right: the inside, public domain, DOE, the same photograph as 15.5.1, mirrored as 427015) | 15.4 | photographs | **Kept** (the text points at both: "the outside and inside of a three-level laser"). The left panel needs upload.wikimedia.org (*orchestrator*); the right is 427015. |
| 15.4.2 + 15.4.3 + 15.4.4 (400526, 400525, 400527, Kaya) | 15.4 | the nine events of a three-level system; lasing 2 → 1 (ruby); lasing 3 → 2 (copper vapour) | **Fold, replace, moving, 2D** (`sim-three-level`; flow by animation, variation by slider): the three levels with all nine arrows of 15.4.2; a choice, ruby (2 → 1) or copper vapour (3 → 2), brightens the five or four events the book keeps and dims the rest; arrow widths follow the live rates (population flowing: kinematic); population bars on the levels and N₁, N₂, N₃ against time below (legend). Sliders: the pump rate ρ_ν(ν₁₃)B₁₃ in units of A₂₁ (log); for copper vapour the ratio A₂₁/A₃₂. Specials: pump = A₂₁ for ruby (where N₂ = N₁), A₂₁ = A₃₂ for copper vapour (N₃ = N₂). **Point: pump atoms to a short-lived top level that drains into a long-lived one and they pile up there; once the pump outpaces that level's decay, the populations invert, which two levels never could.** Readout: copper vapour (15.4.3) with live numbers; ruby the derived N₂/N₁ (below). Eyebrow "Figure 15.4.2 + 15.4.3 + 15.4.4"; three originals. |
| 15.5.1 (427015, public domain, DOE) | 15.5 | inside a Maiman laser | The same photograph as 15.4.1's right panel: **cited, not shown twice** (1.2.1 = 1.1.5 precedent); "(Figure 15.5.1)" links 15.4.1, with a footnote. |
| 15.5.2 (402031, Kaya) = 15.6.2 (402428, byte-identical) | 15.5, 15.6 | a He–Ne tube: mirrors, electrodes, battery, beam | **Kept** as printed in 15.5 (an apparatus drawing in perspective; nothing in the text moves or varies on it); 15.6's "figure 15.6.2" cites it (repeated material), with a footnote. |
| 15.5.3 (401739, CC BY-SA 4.0, Zaereth) | 15.5 | photograph of a dye laser in use | **Kept** (the text points at it, the yellow tube); shipped under its own licence with credit (11.4.1 precedent). |
| 15.5.4 (401857, Kaya) | 15.5 | a generic cavity in perspective: high reflector, gain medium, output coupler, pump arrows | **Replace, moving, 2D in a locked view** (`sim-cavity`; flow by animation, variation by slider; rule 28.2: the book draws the block and mirrors in perspective, so `view()`/`face()`, no orbit): photons bounce between the mirrors; each pass through the inverted medium clones photons in step (stimulated emission), excited atoms drop as they do and the pump refills them; at the output coupler a share 1 − R leaves as the beam. Sliders: output coupler reflectivity R (90–99.9 %), pump rate. Graph beside: the light in the cavity against round trips, rising then levelling. **Point: light trapped between the mirrors crosses the inverted medium again and again, gaining stimulated photons in step with it each pass, until the gain per pass just pays for what the output coupler lets out.** Readout: (15.2.13) with live numbers (the inversion falling as ρ_ν grows), and the beam out = (1 − R) × the light in the cavity. Beam red, the book's. Eyebrow "Figure 15.5.4"; original kept. |
| 15.5.5 (402685, Kaya) | 15.5 | a dye laser: argon pump, dye jet, mirrors, tuning element, output | **Replace, still, 2D** (`sim-dye`; variation by slider): the book's layout; slider: the tuning element's setting across rhodamine 6G's 560–635 nm (the book's range); the intracavity and output beams drawn in their real colour; the dye's broad emission band beside, the chosen wavelength marked on it. **Point: the dye can lase anywhere across its broad band, and the tuning element sends only one colour back into it, so turning the element moves the beam's colour.** Readout: λ and the photon energy E = hc/λ with live numbers. Eyebrow "Figure 15.5.5"; original kept. (The broad band, not "several excitation energies" of the pump, is what tunes it: footnote below.) |
| Tables 15.5.1, 15.5.2 | 15.5 | solid and gas gain media | Kept as `div.book-table`, corrected by footnotes (below). |
| 15.6.1 (402427, Kaya) | 15.6 | He and Ne levels on a 10⁴ cm⁻¹ scale; pump arrows; energy transfer; 3391.3, 632.8, 1152.3 nm lines | **Replace, moving, 2D** (`sim-hene`; flow by animation, variation by choice): the book's two ladders on its scale; discharge electrons lift helium to 2³S and 2¹S; collisions hand the energy across (wavy, the transfer moves); neon's 5s and 4s fill, lase down to 4p or 3p, and 3p drains to 3s. Choice: which line the mirrors are made for (632.8 / 1152.3 / 3391.3 nm). **Point: helium stores the discharge's energy in two long-lived states that sit just above neon's 4s and 5s levels; collisions hand it to neon, whose lower levels drain fast, so neon inverts, and the mirrors pick which line lases.** Readout: λ = hc/ΔE for the chosen line with live numbers (and its A from Table 15.6.1 where the table lists it). Atoms He and Ne by `F.el`. Level spacings from the book's wavelengths and its figure's scale; no literature numbers. Eyebrow "Figure 15.6.1"; original kept. |
| 15.6.2 | 15.6 | | Cites 15.5.2 (above). |
| 15.6.3 (106508, "Copyright; author via source") | 15.6 | photograph of a commercial He–Ne tube with its ballast, a meter stick, concave mirrors | **Not shipped** (copyright; the "used with permission" precedent). The text points at it ("Figure 15.6.3 below shows a He-Ne laser with a ballast"): *orchestrator*, a still house-style drawing of the tube labelled as the caption names its parts (bore, ballast, high reflector, output coupler, scale), or no figure and a footnote at the citation. |
| Table 15.6.1 | 15.6 | five Ne lines with A and relative intensity | Kept as a `div.book-table`. |
| none | 15.7 | | No figure: a survey of applications whose one list (nine properties) is text; no idea moves or varies. |

**3D**: none. The cavity's perspective (15.5.4) is a locked view in a 2D figure (rule 28.2);
nothing in the chapter is an arrangement in space.

### Extra simulations proposed (root rule 15)

Only where motion or variation teaches (precedent). Two survive:

- **A four-level choice in `sim-three-level`** (recommended): a fourth level below the
  lasing pair drains at once to the ground state, and the inversion appears at a pump far
  below the ruby's threshold: the reader sees why the book calls four-level lasers more
  efficient and the only continuous ones, which 15.4's last paragraph states with no
  figure.
- **Thermal populations of two levels** (15.2's quick calculation, offered, not
  recommended): ΔE and T sliders and the ratio e^{ΔE/k_BT}, a 1 eV gap leaving one atom in
  10¹⁷ excited. 13.2's Boltzmann figure already shows the factor.

Judged and dropped: a "which laser for which experiment" chooser for 15.7 (the text's list
is the content); a photon-counting duty-cycle figure (the summary names duty cycle, no page
teaches it).

## Derivation candidates (root rule 29)

| Where | What | Score | Decision |
|---|---|---|---|
| 15.1, 2(+½ − ½) + 1 = 1 and 2(+½ + ½) + 1 = 3 | two substitutions | | Stays. |
| 15.2, (15.2.2) → (15.2.11) | equilibrium sets (15.2.2) to zero (15.2.3), solve for ρ_ν (15.2.4), Boltzmann with degeneracies (15.2.5)–(15.2.6), combine (15.2.7)–(15.2.8), equate to Planck's (15.2.1) (15.2.9), match for every T (15.2.10), (15.2.11) | printed with words; facts imported 3 (Planck's law, 1.2; the Boltzmann distribution, 13.2; equilibrium = constant populations), longest unprinted run 1 (matching for all T, which earns a reason), joins 2 (rates with Boltzmann, then with Planck): score 6 | **Build**: "Derivations · the Einstein relations", results (15.2.10) and (15.2.11); replaces the block. |
| 15.2, (15.2.12) → (15.2.13) → (15.2.14) | substitute B₁₂ = (g₂/g₁)B₂₁, factor | printed, 2 moves | Stays (12.8.1, 13.2, 14.7 precedent for short printed blocks); links (15.2.11). |
| 15.3, two levels never invert | promised by 15.2 ("as will be shown in the next section") and by the title, never shown: (15.2.2) at steady state with B₁₂ = B₂₁ (g₁ = g₂), collect N₂, N₂/N₁ = B₁₂ρ_ν/(A₂₁ + B₁₂ρ_ν) < 1, → 1 only as ρ_ν → ∞ | hidden; 5 moves; facts imported 3 ((15.2.2), (15.2.11) with g₁ = g₂, steady state), run 5, joins 0: score 8 | **Build**: "Derivation · why two levels never invert", after the paragraph "Achieving population inversion in a two-level atom …"; the B₁₂ = B₂₁ fact links 15.2's derivation (`drv`). The steady state is the book's own condition (15.2.3; 15.4's "the population of each level will remain constant"). |
| 15.3, (15.3.1) → N₂ > N₁ | one cancellation | 1 move | Stays. |
| 15.4, (15.4.1) → (15.4.3) → A₂₁ > A₃₂ | level 2's rate equation from the four listed terms (unprinted join), rearrange, divide, compare | printed with words, 4 moves; facts imported 1 (steady state), run 1, joins 1: score 3 | **Build** as a printed block of 4 moves (rule 29.1's "every derivation the book prints as a block"; longer than the two-move blocks kept by precedent): "Derivation · inversion between levels 3 and 2", result (15.4.3) and the condition. |
| 15.4, ruby: "This means that N₂ is greater than N₁" | level 3 at steady state with the pump ρ_ν(ν₁₃)B₁₃N₁ (event a of the first list) against A₃₂N₃; level 2 with A₃₂N₃ against A₂₁N₂ (no lasing yet); join, N₂/N₁ = ρ_ν(ν₁₃)B₁₃/A₂₁; inversion when the pump outpaces A₂₁ | hidden; 5 moves; facts imported 1 ((15.2)'s rate terms), run 5, joins 1: score 7 | **Build**: "Derivation · the ruby's inversion", in A Ruby Laser. *Orchestrator*: it ends on a condition (pump rate > A₂₁) the book does not print, though every line uses only the book's terms; it also gives `sim-three-level` its threshold. |
| 15.6, 0.1 % → 1 mW per W | substitution | | Stays. |

Five derivations to build (15.2, 15.3, 15.4 × 2), two of them hidden.

## Corrections spotted (root rule 13)

The book's words kept; a numbered footnote where each applies. *From memory, unchecked*
marks a correction that rests on a literature fact the builder checks before writing.

- **intro**: "Lasers provides" (as printed; no footnote).
- **15.1**: "not attracted or repelled by an external magnetic or electric field" and
  radicals "attracted to an external magnetic or electric field": diamagnetic substances
  are weakly repelled, and the attraction is magnetic only (one footnote); "longer … by a
  factor of roughly 10⁴ seconds" (a factor has no unit); "spin up (s = +1/2)" (the
  quantum number is m_s, 8.4); "the Franck-Condon principle from the previous page"
  (13.7 in this book); Figure 15.1.6's caption, "the equilibrium bond length of the ground
  state is equal to … the excited state": equal bond lengths (and curvatures) would leave
  only the 0–0 line (13.7's overlaps), so the drawn progressions need a displaced excited
  state (correction through the row's `figure`); `(\Delta S=0\)` (a TeX slip, set as
  maths without a footnote); alt texts of 15.1.2, 15.1.4, 15.1.5, 15.1.7, 15.1.9 describe
  something else (the builder writes new alt text; no footnote, 14.7 precedent).
- **15.2**: "multiplied by the number of atoms in that state" (the energy of that state);
  "k_BT is about 140 eV" (about 1/40 eV, 0.026 eV at 300 K, which the e⁴⁰ that follows
  uses); "the number of occupied states decreases exponentially with temperature" (a
  level's population falls exponentially with its energy over k_BT); g₂/g₁ called "the
  number of allowed electrons" in each state (the number of states of each level, its
  degeneracy).
- **15.3**: "As shown in the previous section, B₂₁ = B₁₂" (only when g₁ = g₂, 15.2.11);
  "It can be done but is very energy costly" against the steady state of the rate
  equations (continuous optical pumping brings N₂ at most to N₁, as 15.4 then says; the
  derivation shows it).
- **15.4**: (15.4.1)'s "N₂(t)/dt" (dN₂(t)/dt); "This means that N₂ is greater than N₁"
  (only once the pump outpaces A₂₁; the derivation); the absorption 2 → 3 written with
  B₃₂ (B₂₃, equal only for g₂ = g₃; no footnote, the book's notation); Figure 15.4.4
  labels level 2 "Metastable level" while the text's condition asks level 2 to empty
  faster than level 3 (A₂₁ > A₃₂): one footnote; "Nd:YAG lasers … will be described in
  section 15.6" (15.6 describes only He–Ne). *From memory, unchecked*: the copper vapour
  laser is pumped by a pulsed electric discharge, not a flash lamp; a ruby laser has run
  continuously, so "only four-level lasers can provide a continuous lasing output" (and
  15.5's "the ruby laser … cannot produce a continuous wave") overstates. The builder
  checks both before writing either footnote.
- **15.5**: "laser light is always monochromatic … always coherent" (15.7 says "near
  monochromaticity", and its broadband lasers); "the pump source provides several
  excitation energies" as why a dye laser tunes (the dye's broad vibronic emission band
  does, 15.1); "There is no laser optical cavity, and thus there is no stimulated
  emission" in diode lasers (the crystal's facets are the cavity the next sentence
  describes, and diode lasers lase by stimulated emission; *from memory, unchecked* as a
  literature fact); "KrF* ((249 nm)" (as printed). Table 15.5.1: "Y₃Al₅O₁₅" (YAG is
  Y₃Al₅O₁₂), "Y₃LixFy" (YLF is LiYF₄), the column "Lifetime" lists pulse durations (fs to
  ps), and ruby's "10 ps" disagrees with 15.4's 0.1 ms pulse. Table 15.5.2: "K⁺ 647" (the
  krypton-ion line, Kr⁺; *from memory, unchecked*).
- **15.6**: "W. R. Bennet" (Bennett; *from memory, unchecked*, minor); "as a result of
  electromagnetic pumping" (the discharge the page later describes; minor, no footnote);
  "as shown above in figure 15.6.2" (below; it cites 15.5.2 now, so the citation footnote
  covers it).
- **15.7**: none of substance; [3]'s proxy link as printed.
- **summary**: the objectives no built page teaches (one footnote, above).

## Licences of the figures

| Figure | Credit as printed | Proposal |
|---|---|---|
| Kaya's SVGs: 15.1.6, 15.2.1, 15.3.1, 15.4.2–15.4.4, 15.5.2 (= 15.6.2), 15.5.4, 15.5.5, 15.6.1 | CC BY-NC, Ümit Kaya via LibreTexts | shipped under their own licence with credit; 15.2.1 sits on a page proposed BY-SA (below), the 10.6 precedent (own licence, credit) |
| Schaller's PNGs: 15.1.4, 15.1.5, 15.1.7, 15.1.8, 15.1.9, 15.1.10, 15.1.11 | none per image; the page credits Schaller | shipped under the page's licence |
| 15.1.1 | public domain, Tyler Matthews (Wikimedia) | shipped |
| 15.1.2 | "Bill Reusch, Michigan State University", no licence | **not shipped** (9.8.2, 12.2 precedent); `notes` credits Reusch |
| 15.1.3 | none; hot-linked from employees.csbsju.edu | not reachable from here (proxy refuses the host); folded into `sim-jablonski` with no original (*orchestrator*) |
| 15.4.1 | left CC0, Guy Immega; right the DOE photograph | right shipped (427015, public domain); left not reachable (upload.wikimedia.org refused) (*orchestrator*) |
| 15.5.1 | public domain, US DOE via Wikipedia | the 15.4.1 right panel; cited |
| 15.5.3 | CC BY-SA 4.0, Zaereth | shipped under its own licence with credit (11.4.1 precedent) |
| 15.6.3 | "Copyright; author via source" | **not shipped** |

**Page licences**: 15.2 is tagged BY-NC-SA, but its three process paragraphs are Wikipedia's
*Einstein coefficients* article (credited in its Contributors list), CC BY-SA: by 14.7's
decision (Stack Exchange and Wikipedia text shared under their own licence) **15.2 is
shared CC BY-SA 4.0**. 15.6 and the intro are tagged CC BY and shared as BY-NC-SA with the
rest (Chapter 1's 1.1 and 1.9). The summary is untagged (the book's).

## What is new to OmniStax here

- **No new type.** E₁, E₂, ΔE wear `energy`; ν₁₂ … ν₂₃ `frequency`; ρ_ν and ρ
  `energy-density`; t `time`; T `temperature`; λ `wavelength`. The Einstein coefficients
  A and B, the populations N, the degeneracies g, S and the quantum numbers are untyped and
  in ink. *Orchestrator*: A₂₁ is a first-order rate constant (s⁻¹) and B·ρ_ν one too; a
  `rate-constant` type will be needed by Chapter 28 at the latest, and declaring it now
  would colour this chapter's coefficients. Proposed: wait for Chapter 28, then give the
  Einstein coefficients that type in a pass.
- **Symbols**: 21 new (7 with macros: `\krhonu`, `\knuonetwo`, `\knutwoone`,
  `\knuonethree`, `\knuthreeone`, `\knuthreetwo`, `\knutwothree`); keys of earlier chapters
  reused for the same quantity (n, l, m_l, m_s, s, S, v_qp, dE, T, k_B, rho, E_1, E_2, t,
  h, c, lambda) and N_1, N_2 (10.5's normalization constants) for the level populations,
  a new meaning in another chapter. 56 variables rows.
- **52 concepts, 88 edges** (Hasse-reduced against the merged book: 4 redundant edges
  removed before the merge).
- **The first chapter with images hot-linked from outside LibreTexts** (15.1.3 from
  Schaller's site, 15.4.1 from Wikimedia), which the network here cannot reach.

## The chapter's answer to root rule 23

A laser is a fight between three processes Einstein named, and the printed chapter shows
each as a still before-and-after. The stunning version lets the reader run the fight:
light falls on a molecule and its energy trickles down the Jablonski ladder at the speeds
of Table 15.1.1, coming back redder or not at all; two-level atoms pumped harder and harder
creep toward half excited and stall, because every pump photon that lifts one atom pulls
another down; add a third level and the populations swing past each other at a threshold
the reader can find; put the inverted medium between two mirrors and watch a few
spontaneous photons become a beam that grows until the output coupler's leak balances the
gain; then helium hands its stored energy to neon and the red line of a He–Ne laser
appears. Every number on the way is the book's own: its timescales, its rate equations,
its wavelengths.

## Tool changes made for this chapter

- `lt2md.py`: a header (`h1`–`h4`) that holds `<sub>` or `<sup>` keeps them, where the
  flat text printed "The Relationship between A 21 , B 12 , and B 21" (15.2). Only three
  headers in the whole book have them: 15.2's and 30.10's two "The Exchange Reaction …"
  headers (not converted in the repository yet; a scratch conversion shows them now
  keeping H<sub>A</sub> and D<sub>2</sub>, and 18.11, whose box title has a subscript,
  unchanged). Chapters 1–14 reconverted to a scratch folder with the old and
  new converter: all 166 source.md files byte-identical. (The committed
  `ch01/1.3/source.md` still differs from both in "*kinetic* *energies*", the earlier
  converter change Chapter 14's log names.)
- `md2html.py`: a figure whose image (or one of whose panels) is served from outside
  LibreTexts (15.1.3, 15.4.1) no longer crashes the draft (15.4's panel did: `NoneType`
  has no `group`); the external URL gets no `<img>` and is listed in the row's
  `_external` for the builder. No other page of the book has such a figure: the drafts of
  Chapters 1–14 (150 pages) regenerated with the old and new script in a scratch folder
  are identical. All nine Chapter 15 drafts set every maths span (97 in the text, 2 in the
  exercises) under KaTeX in strict mode without an error.
- Not a tool change, for builders: 15.1.3 and 15.4.1's left panel come through with an
  empty `<img src="">`; 15.4.1's right panel is `427015-800px-Ruby_laser.jpg` (mirrored
  for 15.5.1).
