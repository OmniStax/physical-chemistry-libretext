# Exploration: Chapter 13, Molecular Spectroscopy

Written 2026-11-08 from the converted pages (`python3 tools/fetch.py --media 13`, then
`python3 tools/convert.py 13`), every page read in full, the raw HTML checked where the
conversion was in doubt (13.2's figure numbers, 13.9's figure caption, the `\nonumber`s),
and the chapter's 39 images looked at where a treatment depends on them. The landing
page (11808) prints one paragraph of its own (what spectroscopy is, light as a
"stepping stone") and a thumbnail credit for an image the page does not show: an
**`intro/` page** (root rule 21.1), the credit left out with the thumbnail (Chapters 1
and 3). **13.S** (550568, Crabtree) is the **`summary/` page** (21.2). **13.E (50949)
has no body** (title only): nothing is routed from it (root rule 9), and no other N.E
page of the book holds spectroscopy exercises (the full-book pass found bodies only in
19.E and 21.E). Every section page holds its own text; none is empty or stray.

The chapter is a patchwork again, and much of it repeats earlier chapters:

- **Sources**: 13.1 is Harvey's *Analytical Chemistry* 10.1 (its "Figure 10.2/10.3" file
  names, its stray reference marker "²"); 13.2, 13.3 and 13.5 are ChemWiki student
  modules (with their own reference lists); 13.4 is copied from an Indian course wiki
  (its only credit is the URL "202.141.40.218/wiki/index.php…r_Spectroscopy"); 13.6
  ends on an iodine lab handout ("In this experiment you will characterize…"); 13.7 is
  Franzen's NCSU notes (the S = ½, 1, 2 figures); 13.8 is Simons' *Quantum Mechanics in
  Chemistry* (its asymmetric-top matrix elements lost their kets at the source); 13.11
  is Wikipedia plus a two-level lecture; 13.12, 13.13 and 13.14 are ChemWiki modules.
- **Repeated material** (built once where the book first works it, cited after, the
  repeats kept as the book's words and linked: the precedent of Chapters 6, 11, 12):
  the harmonic oscillator and its levels (5.1–5.2), the Morse potential and anharmonic
  levels (5.3: Figure 13.5.2 is the **same two SVG files** as Figure 5.3.2), the IR
  selection rule with the Hermite recurrence (5.5's derivation `ir-selection-rules`,
  which 13.13's unnumbered example works again), the rigid rotor, its spectrum and
  centrifugal stretching (5.8–5.9, `line-positions`), the Born–Oppenheimer
  approximation and potential curves (9.1), vertical transitions and Franck–Condon
  bands in photoionization (10.4's `sim-franck`), time-independent perturbation theory
  (7.4), degrees of freedom, normal modes, Γ_vib and IR/Raman activity by symmetry
  (12.10–12.13, water's modes figure `sim-water-modes`), the C₂ᵥ character table
  (12.10). Each is a link (`class="xref"` / `"figref"`, `drv` from a derivation fact),
  never a second build; what is new in this chapter is named under each section.
- **Water's plane changes again**: 13.10 and 13.14 put water in the yz plane (the
  asymmetric stretch is b₂, as 12.14's tables), while 12.10's built figure and 12.13,
  12.15 use xz (B₁). Both are valid; the 13.10 citation of 12.10's figure needs a
  footnote saying which plane each uses. *Orchestrator* (below).
- **Lower-case species**: 13.10 and 13.14 write a₁, b₂ (Γ_vib = 2a₁ + b₂) where
  Chapter 12 writes A₁, B₂. Kept as printed (they are the book's words); no correction.

## Pages

| Page | id | Licence | Authors (tags) | Headers (`<h2>`, `<h3>`) | Ex | Exr | Fig | Img | Tab | Notes | Eq (numbered / displays) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| intro | 11808 | BY-NC-SA 4.0 | none | none: one paragraph and a thumbnail credit | | | | | | | |
| 13.1 The Electromagnetic Spectrum | 2398 | BY 4.0 | Larsen (text: Harvey) | opening; Electromagnetic Radiation; Other Units | 1 (13.1.1, Solution) | 1 (13.1.1) | 2 | | 1 | | 0 / 7 |
| 13.2 Rotations Accompany Vibrational Transitions | 2402 | BY 4.0 | Larsen | opening; Selection Rules (h3 R-branch, P-branch, Q-branch) | | | 3 (13.2.1, "13.2.3" twice) | | | 2 | 4 / 15 |
| 13.3 Unequal Spacings in Vibration-Rotation Spectra | 2416 | BY-NC-SA 4.0 | none | opening; Vibration-Rotation Interaction (h3 Decrease in Spacing…, Increasing in Spacing…); References | | | 2 | | | 1 | 0 / 9 |
| 13.4 Unequal Spacings in Pure Rotational Spectra | 13667 | BY-NC-SA 4.0 | none (credit: a course-wiki URL) | none; Contributors | | | 2 | | | | 12 / 12 |
| 13.5 Vibrational Overtones | 2401 | BY 4.0 | Larsen | opening; Anharmonicity; Overtones; References | | 2 (13.5.1, 13.5.2) | 4 | | 1 | 1 | 2 / 6 |
| 13.6 Electronic Spectra Contain Electronic, Vibrational, and Rotational Information | 2399 | BY 4.0 | none | opening; Electron Transitions are not Purely Electronic | | | 2 | 1 (iodine spectrum, in a note) | | 1 | 4 / 6 |
| 13.7 The Franck-Condon Principle | 13670 | BY-NC-SA 4.0 | "lowers" | objectives; opening; S₀₀ Transition…; S₀₁ Transition…; Franck-Condon Progressions; References | | | 8 | | | 3 | 5 / 19 |
| 13.8 Rotational Spectra of Polyatomic Molecules | 13671 | BY-NC-SA 4.0 | Simons | review note; Rotation of Polyatomic Molecules; Spherical Tops; Symmetric Tops; Asymmetric Tops | | | 1 | | | 1 | 7 / 36 |
| 13.9 Normal Modes in Polyatomic Molecules | 13672 | BY-NC-SA 4.0 | none | opening; Degrees of Freedom; Normal Modes; Pictorial description of normal coordinates using CO | 1 (13.9.1, worked) | | 2 (13.9.1 is a table of six GIFs, 13.9.2) | | 1 (+ the GIF table) | | 5 / 8 |
| 13.10 Irreducible Representation of Point Groups | 13673 | BY-NC-SA 4.0 | none | opening; Symmetry of normal modes | | | 3 | | 1 ("Table 13.10.2") | | 0 / 1 |
| 13.11 Time-Dependent Perturbation Theory | 13674 | **BY-SA 4.0** | Wikipedia | opening; Two-Level System (h3 Transition Probability) | | | | 2 (two-level ladder; P(t) curve) | | | 1 / 17 |
| 13.12 The Selection Rule for the Rigid Rotor | 13675 | **BY-SA 4.0** | none | opening (with a pull-quote); Rotational transitions | | | | | | | 0 / 8 |
| 13.13 The Harmonic Oscillator Selection Rule | 13676 | BY-NC-SA 4.0 | none | none | 1 (unnumbered "Example: Evaluating vibrational transitions…", worked) | | | | | | 0 / 5 |
| 13.14 Group Theory Determines Infrared Activity | 13677 | BY-NC-SA 4.0 | none | Determining if a Normal Modes is IR or Raman Active (h3 Character Table); References | | | | 1 (water's bond arrows) | 2 (unnumbered) | | 3 / 6 |
| summary (13.S) | 550568 | none | Crabtree | prose, then "Learning Objectives" (with "Skill goals") | | | | | | | |
| 13.E | 50949 | BY-NC-SA 4.0 | | **empty** | | | | | | | |

Credits come from the tags (Larsen on 13.1, 13.2, 13.5; "lowers" on 13.7, Simons on
13.8, Wikipedia on 13.11, Crabtree on the summary); 13.3, 13.4, 13.6, 13.9, 13.10,
13.12–13.14 carry none and take the book's (Larsen as curator), and 13.4's
Contributors list (a bare URL) goes to its `notes`. Licences: 13.1, 13.2, 13.5, 13.6 BY
4.0 (shared as the book's BY-NC-SA, as a BY page may be); **13.11 and 13.12 are BY-SA
4.0** and stay BY-SA (the book's rule); the rest BY-NC-SA; the summary untagged (the
book's). Objectives: 13.7 only (`box-objectives`, two items, no lead-in). No section
closes on a "## Summary". The four "## References" lists (13.3, 13.5, 13.7, 13.14) are
apparatus: they go to the section's `notes`/credits, as 12.14's did.

### The intro and summary pages

- **intro**: one paragraph, no header, no maths; one block, header proposed "Light as
  a Probe" (humanizer by the builder). No concepts (rule 21.1); "spectroscopy" is
  defined here in bold-free prose and used throughout.
- **summary (13.S)**: a paragraph, then a chapter-level "Learning Objectives" box ("By
  the end of this chapter …": nine objectives and six "skill goals"). Precedent 12.S:
  the box is kept verbatim as the page's first block (`notes`-free, no objectives
  table). The paragraph and several objectives describe Crabtree's course, not this
  chapter: Jablonski diagrams, the nuclear Hamiltonian's dependence on the electronic
  one and "zero-point vibrational energy" on a Jablonski diagram are never taught in
  13.1–13.14. Kept as printed (the book's words); a footnote says the Jablonski diagram
  is not drawn in this book. *New, small: orchestrator may prefer no footnote.*

## Per section

- **13.1** Book headers kept; the opening paragraph is its own block (header proposed
  "Spectroscopy and Molecules"), and the last three paragraphs after Table 13.1.1
  ("Electromagnetic spectrum provides clearly information …", the ΔE = hν display, the
  four frequency bullets) form a block proposed "Regions and Molecular Motions" (rule
  3: the ideas change there). Concepts (new): electromagnetic radiation (oscillating
  perpendicular fields, wave and particle), the oscillating electric field A_t = A_e
  sin(2πνt + φ) and its magnetic partner, plane polarization, the electromagnetic
  spectrum (bold), λ = c/ν, the Bohr frequency condition ΔE = E_u − E_l = hν, the two
  classes of spectroscopy (Table 13.1.1), regions matched to molecular motions
  (microwave rotation, IR vibration, UV/visible electronic). Uses: amplitude, phase
  constant (2.1), wavenumber (1.4, bold here again), photon (1.3). Example 13.1.1
  (sodium D line) kept whole; Exercise 13.1.1 (Balmer 656.3 nm) unkeyed.
- **13.2** Book headers kept; opening block proposed "Rotational Fine Structure". The
  two notes kept (the untitled emphasis on B's units; "Advanced Concept: Occupations
  (Peak Intensities)"). Concepts (new): rovibrational spectrum (bold), the rotational
  term F(J) = BJ(J + 1) in frequency or wavenumbers, the rovibrational term S(v, J) =
  G(v) + F(J), the rovibrational selection rules (Δv = +1 from v = 0, ΔJ = ±1; bold
  list heads), the R, P and Q branches with their line positions (13.2.2)–(13.2.4),
  the zero gap of 4B, rotational populations N_J/N₀ = (2J + 1)e^(−E_r/kT) and J_max,
  the Boltzmann distribution (its first use in the book: the note says "using the
  Boltzmann distribution"; introduced here as an axiom, Chapter 17 reinforces).
  Uses: oscillator levels and frequency (5.2), reduced mass (5.2, (13.2.1)), rigid rotor
  levels, rotational constant and selection rules (5.8–5.9), moment of inertia,
  degeneracy 2J + 1 (5.8). The `{eq:reduced mass}` citation resolves.
- **13.3** Book headers kept except "References" (to notes); opening block proposed
  "Real Bands Are Uneven". Note "Note" kept. Concepts (new): vibration–rotation
  interaction (B̃_v falls with v; italic "rotational-vibrational coupling"), the R and P
  lines with B̃₁ ≠ B̃₀ (two printed chains), the R lines crowding and the P lines
  spreading. "centrifugal distortion" (italic) is introduced in 13.4, where the book
  works it; here it is a forward use. Uses: rotational constant, anharmonicity and the
  Morse potential (5.3, linked for "bond length increases with v").
- **13.4** No header: one block proposed "The Non-Rigid Rotor", or two (the derivation;
  "Consequently, on applying the selection rule …" proposed "Lines That Draw Together")
  at the builder's call. Concepts (new): centrifugal force F_c = μr_cω² = L²/μr_c³
  (the page links an external Tatum page, kept as a link), the non-rigid rotator, its
  levels F(J) = B̃J(J + 1) − D̃J²(J + 1)² (13.4.10), the centrifugal distortion constant
  D̃ (13.4.12) and B̃ (13.4.11), the shrinking line spacing. Uses: Hooke's law and force
  constant (5.1), L = ħ√J(J + 1) (5.8), centrifugal stretching (5.9, reinforced).
  Three displays carry `\color{red}` (the book's emphasis): the builder drops the
  colour (the type colours take over).
- **13.5** Book headers kept except "References". Note "Anharmonic Oscillator Selection
  Rules" kept. Concepts (new): hot bands (13.5.3's caption; also 13.6's note and
  13.14), the anharmonic selection rule (Δv any, overtone strength falling fast), the
  overtone positions below whole multiples of the fundamental (Table 13.5.1). Bold
  "anharmonicity constant", "the fundamental", "overtones": reinforced (5.3, 5.5).
  Uses: Taylor expansion of the potential and the cubic term (5.3), anharmonic levels
  (5.3), overtone transition (5.5). Exercises 13.5.1, 13.5.2 unkeyed.
- **13.6** Book header kept; opening block proposed "Electronic Bands". Note "Iodine"
  kept with its spectrum. Concepts (new): vibronic transitions (italic "vibronic"), the
  electronic term T̃_el (ν̃_el), the total energy of a diatomic (13.6.1)–(13.6.2), the
  band wavenumber from v″ = 0 (13.6.4), the 0–0 transition ν̃₀₀, bands, lines, band
  heads and the band system (italic, in the note), the convergence limit and
  dissociation from D₀′ (bold "bond dissociation occurs", "the zero point energy").
  Uses: Born–Oppenheimer (9.1), potential curve, anharmonic levels (5.3), non-rigid
  rotor (13.4), dissociation energy and well depth (5.3), zero-point energy (5.4), hot
  bands (13.5).
- **13.7** Book headers kept except "References"; objectives (two, no lead-in) to the
  tables. Three notes kept (two `box-definition`: "The Classical Condon approximation",
  "The Quantum Franck-Condon Principle"; one untitled emphasis on S). Concepts (new):
  Franck–Condon principle (bold), Condon approximation, vertical transition (bold;
  "discussed before in the context of photoelectron spectroscopy": a link to 10.4),
  the Franck–Condon factor (|⟨ψ_nuc,f|ψ_nuc,i⟩|² times the electronic moment, (13.7.1)),
  the displaced-oscillator overlaps S₀₀ and S₀₁, the Gaussian integral (bold), the
  Franck–Condon progression and how its shape reads the displacement, homogeneous and
  inhomogeneous broadening, bond order and the sign of the displacement. Uses:
  Born–Oppenheimer wavefunction (9.1), transition moment integral (5.5), oscillator
  wavefunctions and Hermite polynomials (5.6), overlap integral (4.5), bond order (9.x),
  vertical and adiabatic ionization (10.4). "see here for a review on harmonic oscillator
  wavefunctions" has no link at the source: a link to 5.6 by footnote.
- **13.8** Book headers kept; the opening "Quick Review of Diatomic Rotation" is a note
  (kept, the repeated rotor equations linked to 5.8–5.9). Concepts (new): the inertia
  tensor, principal moments I_a < I_b < I_c and body axes, the rotational Hamiltonian
  H_rot = J_a²/2I_a + J_b²/2I_b + J_c²/2I_c (13.8.5), Euler angles (bold), the spherical
  top and its (2J + 1)²-fold levels, symmetric tops (oblate and prolate, bold) and their
  K-dependent levels, the |J, M, K⟩ rotation-matrix functions, the asymmetric top
  (bold) solved by diagonalizing H_rot in that basis. Uses: moment of inertia, angular
  momentum, rotor levels and degeneracy (5.8), spherical coordinates.
- **13.9** Book headers kept. Concepts (new): the six kinds of vibrational motion
  (bold: symmetric and asymmetric stretching, wagging, twisting, scissoring, rocking),
  normal coordinates (bold, also "normal modes"), the harmonic potential of a
  polyatomic in normal coordinates (13.9.1)–(13.9.2), the separated vibrational
  Hamiltonian (13.9.3)–(13.9.4), the product wavefunction, the vibrational energy as a
  sum of oscillators (13.9.5), the CO normal coordinate. Reinforced: degrees of freedom
  (bold Translational, Rotational, Vibrational; Table 13.9.1), 3N − 6 / 3N − 5 (12.10,
  12.12). Example 13.9.1 (ethane against CO₂) kept whole. Figure 13.9.1 is printed as a
  table of six GIFs with its caption as an italic paragraph (the converter keeps a
  table): the builder makes it the figure row.
- **13.10** Book header kept; opening block proposed "Modes Belong to Species". Concepts
  (new): every normal coordinate (and its vibrational wavefunctions) belongs to an
  irreducible representation of the point group; assigning a mode's species by its ±1
  row (a skill). Uses: point group, character table (12.6, 12.10's C₂ᵥ table is cited:
  13.10's table is a different one, the modes' rows), Γ_vib (12.10). The PtCl₄²⁻ modes
  (D₄h) are the chapter's own.
- **13.11** Book headers kept; opening block proposed "Perturbations That Change in
  Time". Concepts (new): time-dependent perturbation theory (Dirac), the amplitudes
  c_n(t) (bold) and their equations, the two-level system, the first-order amplitude
  c₂(t), the transition probability P₁₂(t) and its line shape (peaked at resonance,
  height ∝ t², width 4π/t), the resonance condition ω ≈ ω₀, the breakdown at P ~ 1
  (reinforces 7.4's breakdown). Uses: time-dependent Schrödinger equation, stationary
  states (3.1, 4.4), perturbation theory (7.4), orthonormality, Euler's formula (2.3).
  A Wikipedia residue "{\displaystyle |j\rangle }" sits in the prose before $|j\rangle$:
  the builder drops the residue (it is markup, not the book's words; a note in `notes`).
- **13.12** Book header kept; opening block proposed "What a Selection Rule Says". The
  pull-quote "> The selection rule is a statement of when μ_z is non-zero." repeats the
  sentence before it: kept as an untitled emphasis note (the page shows it as a call-out).
  Concepts (new): gross and specific selection rules (bold), the transition dipole as
  the light–molecule coupling (E₀ cos ωt), the Legendre recurrence used, the rigid
  rotor's ΔJ = ±1, ΔM = 0 and the need for a permanent dipole worked from the
  spherical harmonics. Reinforced: selection rule, transition moment integral (5.5),
  rotational selection rules (5.9), one-electron rules Δl = ±1 (8.11).
- **13.13** No header: one block proposed "Why Δv = ±1", plus the unnumbered example
  kept as an example box titled as printed ("Example: Evaluating vibrational transitions
  using a transition moment integral"; printed labels stay). Nothing new: the section
  reinforces selection rules, the transition moment integral, the Hermite recurrence
  and the IR rule (5.5, 5.7); the example's chain is 5.5's derivation and is linked to it.
- **13.14** Book headers kept except "References". Concepts (new): the stretch analysis
  (Γ_stretch from the bonds, Γ_bend = Γ_vib − Γ_stretch; a skill), IR activity needing a
  changing dipole worked through M(v → v′) (13.14.1)–(13.14.2) and Raman through α
  (13.14.3). Reinforced: symmetry selection rule, IR and Raman activity by symmetry
  (12.13), Γ_tot from unmoved atoms and Γ_vib (12.10–12.12), hot bands (13.5).

Glossary bolds the converter marks (`{term:…}`) that are terms: amplitude, frequency,
phase angle, electromagnetic spectrum, wavelength, wavenumber (13.1); rovibrational
spectra, vibrations, rotations, Vibrational/Rotational Transition Selection Rules (13.2);
anharmonicity constant, the fundamental, overtones (13.5); bond dissociation occurs,
the zero point energy (13.6); Franck-Condon Principle, rapid electronic excitation,
vertical transition, Gaussian integral (13.7); largest, Euler angles, oblate and prolate
symmetrical top, asymmetric top, not (13.8); Translational, Rotational, Vibrational, the
six mode names, normal coordinates, normal modes (13.9); static, time-independent
Hamiltonian, amplitudes (13.11); selection rule, zero, gross selection rule, specific
selection rule (13.12); transition moment integral, not, hot (13.14). Not terms (emphasis
or markup): "of angular momentum", "conservation of energy" (13.2), "largest", "not"
(13.8), "zero" (13.12), years and "DOI:" in reference lists, every bold header cell of
13.5's, 13.10's and 13.14's tables, "Figure 13.9.1:" in its caption paragraph.

## Equation numbers

One number per display (the book's rule), from the converter's `n=`; the many displays
with `\nonumber` stay unnumbered. 13.2 (13.2.1)–(13.2.4) (μ, then the R, P, Q aligns);
13.4 (13.4.1)–(13.4.12) (every display numbered; its `eq:19` and `eq:20` name the one
align (13.4.8)); 13.5 (13.5.1), (13.5.2); 13.6 (13.6.1)–(13.6.4); 13.7 (13.7.1)–(13.7.5);
13.8 (13.8.1)–(13.8.7); 13.9 (13.9.1)–(13.9.5) (its `eq:1`–`eq:3` name the one align
(13.9.1)); 13.11 (13.11.1); 13.14 (13.14.1)–(13.14.3); 13.1, 13.3, 13.10, 13.12, 13.13 none.
Every `[ref:…]` resolves on its page. No explicit `\tag`s (unlike Chapter 12).

## Exercise count report (root rule 13)

Counted from the converted pages.

- **Inline exercises** (`box-exercise`): **3 printed, 0 keyed, 3 unkeyed**: 13.1.1 (the
  frequency and wavenumber of the 656.3 nm Balmer line, compute), 13.5.1 (ν̃ and χ̃_e of
  HCl from 2885.9 and 5668.1 cm⁻¹, compute), 13.5.2 (the Taylor series terms with a test
  number and why terms past the second matter little, explain). All three stay where
  printed: each tests its own section (13.5.2's Taylor series is 5.3's, but the question
  asks about 13.5's claim that the anharmonic terms are small; held in 13.5).
- **Worked examples**: 3 (13.1.1 with a Solution part; 13.9.1 worked in its text; 13.13's
  unnumbered example worked in its text), kept whole; not exercises.
- **Prompts in prose**: 13.7's S₀₁ "(not shown and to be demonstrated in a homework
  exercises)" and "You can show that if we let z = …"; 13.6's note "In this experiment
  you will characterize …" (the lab handout). Sentences of the text, kept as printed;
  13.7's skipped S₀₁ steps are filled by the derivation below.
- **13.E**: empty; nothing routed.
- **In all**: 3 cards, 0 keyed, 3 unkeyed (2 compute, 1 explain); with AI solutions
  under Chapter 1's choice. 13.1.1: ν = 4.57 × 10¹⁴ s⁻¹, ν̃ = 1.524 × 10⁴ cm⁻¹ (computed).
  13.5.1: from ν̃₀→₁ = ν̃ − 2χ̃_eν̃ and ν̃₀→₂ = 2ν̃ − 6χ̃_eν̃, χ̃_eν̃ = 51.85 cm⁻¹, ν̃ =
  2989.6 cm⁻¹, χ̃_e = 0.0173 (computed).
- **Concepts the book leaves untested**: almost all. **Proposed new: 14**, one per
  section where a concept would otherwise have none (13.5 has the book's two), none
  repeating Chapter 12's proposals:
  13.1 one (the region and molecular motion for photons of 2.0, 2000 and 40 000 cm⁻¹,
  with each one's λ, ν and E); 13.2 two (HCl's R(0) and P(1) from ν̃₀ = 2885.9 cm⁻¹
  and B̃ = 10.4 cm⁻¹, the zero gap; J_max of HCl at 298 K); 13.3 one (R(5)−R(4) and
  P(5)−P(4) spacings with B̃₀ and B̃₁ given, which branch crowds); 13.4 one (the shift
  of the J = 20 level of HCl by D̃ = 0.0004 cm⁻¹ against B̃J(J + 1)); 13.6 one (ν̃₀₀ from
  given constants of two states); 13.7 one (S₀₀ and |S₀₀|² for given α and
  displacement, and which band is strongest); 13.8 one (classify CH₄, CH₃Cl, C₆H₆, H₂O
  as tops; the degeneracy of J = 2 of a spherical and a symmetric top); 13.9 one (the
  translational, rotational and vibrational counts of C₂H₂ and H₂CO); 13.10 one (the
  species of water's three modes from their ±1 rows in the yz convention); 13.11 one
  (the time of the first maximum of P₁₂ at a given detuning; the height at resonance
  after t); 13.12 one (which of J = 1 → 0, 2, 3 and M changes are allowed for
  z-polarized light, and why HCl but not N₂ has a microwave spectrum); 13.13 one
  (whether v = 0 → 2 is allowed in the harmonic oscillator, using the recurrence);
  13.14 one (the IR- and Raman-active modes of formaldehyde, C₂ᵥ, Γ_vib = 3a₁ + b₁ +
  2b₂).

## Figures, in book order (root rules 14, 24, 25, 26, 28)

Rule 14 as rewritten today: a figure starts from the book's and usually replaces it;
motion where the idea moves; a point the reader sees at once; little effort to read;
folds where the book draws one scene several times. The chapter's ideas are ladders
turned into spectra: the figures build each spectrum from its levels, with the book's
numbers where it gives them (HCl: ν̃₀ = 2885.9 cm⁻¹ from Table 13.5.1, B̃ = 10.4 cm⁻¹
and D̃ = 0.0004 cm⁻¹ from 13.4; 13.7's 8000 cm⁻¹ gap, 1000 cm⁻¹ mode and S = 0.1, ½,
1, 2; water's 3657, 3756, 1595 cm⁻¹ from 13.14). Photons drawn in their real colour
where they are visible (facts, `"spectrum"`); atoms in `F.el`.

| Number | Section | What the book shows | Proposed treatment |
|---|---|---|---|
| 13.1.1 | 13.1 | Harvey's plane-polarized wave: E in red, B in blue, A and λ marked | **Replace, moving, mathematical 3D** (a wave with two perpendicular parts, rule 28.3's own example; it moves: the wave travels). E (electric-field type) and B (magnetic-field type) oscillate in perpendicular planes along the propagation axis; sliders ν (or λ) and A_e, a probe point on the axis whose field value follows A_t = A_e sin(2πνt + φ). **Point: the two fields are perpendicular to each other and to the direction of travel, in step, and λ is the distance between successive maxima.** Readout: A_t at the probe with live t, λ = c/ν. Free orbit bounded off end-on views (the planes would collapse); no spin, no zoom. Eyebrow "Figure 13.1.1". |
| 13.1.2 | 13.1 | the spectrum (modified from Zedh), regions and the transitions behind them, a visible inset | **Replace, still, 2D** (variation: one photon in four units). A log axis from γ-rays to radio with the region bands and their transition (nuclear, inner electrons, valence electrons, molecular vibration, rotation, electron and nuclear spin), the visible band in its real colours (fact: spectrum); a slider moves one photon along it and the readout writes λ, ν, ν̃ and E = hν together. **Point: one photon has one place on the spectrum, and that place names the molecular motion it can drive.** Opens on the sodium D line, 589 nm (Example 13.1.1); a detent at 656.3 nm (Exercise 13.1.1). Still: nothing has a clock. Eyebrow "Figure 13.1.2"; original kept. |
| Table 13.1.1 | 13.1 | techniques by energy exchange | Kept as `div.book-table`. |
| 13.2.1 + "13.2.3" + "13.2.3" | 13.2 | a parabola with rotational levels on two vibrational levels; the P/Q/R arrows on the J ladders with 2B and 4B marked; an ideal spectrum, P lines purple, R red, Q dotted | **Fold, replace, moving, 2D.** The two J ladders (v = 0 and v = 1) with the arrows of the allowed transitions; play builds the spectrum **line by line**: each arrow fires and drops a line at ν̃₀ + 2B̃(J + 1) (R) or ν̃₀ − 2B̃J (P), its height the lower level's population (2J + 1)e^(−B̃J(J+1)hc/kT). Sliders T and B̃ (detents: HCl's 10.4 cm⁻¹); a choice "Q branch: forbidden / allowed (NO)" that draws the Q line at ν̃₀. **Point: the spectrum is the ladder read sideways: lines 2B̃ apart, a 4B̃ gap where the forbidden Q line would stand, and an envelope set by the populations, peaking at J_max.** Readout: the line equations with the live J and the population ratio; J_max marked (a special on T). Motion argued: the build is a directed sequence (rule 25) in which each line is seen to come from one arrow; at rest the whole spectrum shows. Eyebrow "Figure 13.2.1 + 13.2.3"; the citations "Figure 13.2.2" (×3) link to it with a footnote (the book prints no 13.2.2 and two 13.2.3s). Opens on HCl at 298 K. *Orchestrator: the duplicate numbering.* |
| 13.3.1 | 13.3 | OpenStax's HCl absorption spectrum (CC BY; H³⁵Cl/H³⁷Cl doublets) | **Replace, still, 2D** (variation): the 13.2 spectrum scene with B̃₁ < B̃₀ on a slider (or α = B̃₀ − B̃₁), computed lines from the two printed chains, R lines crowding and P lines spreading, a band head appearing at large α; the rigid-rotor positions as hollow ghosts. **Point: a smaller B̃ in the upper level pulls the R lines together and pushes the P lines apart.** Readout: ν̃_R and ν̃_P with the live J. HCl: B̃₀ = 10.4 cm⁻¹ (the book), α ≈ 0.31 cm⁻¹ (literature, Huber–Herzberg, from memory, unchecked; flagged in LOG). The measured spectrum kept as the original (its credit). Eyebrow "Figure 13.3.1". |
| 13.3.2 | 13.3 | animated GIF of an anharmonic oscillator (Wikipedia, "used with permission") | **Not shipped** (precedent: "used with permission" originals). Not cited by number in the text; the paragraph on bond length growing with v links 5.3's `sim-morse` (HCl vibrating between the turning points of each level). No new figure. |
| 13.4.1 | 13.4 | animated GIF: two weights on pistons spinning (public domain, Cleonis) | **Replace, moving, 2D**: the non-rigid rotor of the derivation, two masses on a spring turning (it moves: rotation), a J slider (0–20); the spring stretches by r_c − r_e = L²/kμr_e³ drawn exaggerated on a slider with the true stretch in the readout (rule 28.4), and an energy bar split into the kinetic L²/2μr_c² and the stored ½k(r_c − r_e)². **Point: the faster it turns, the more the bond stretches, and the stretch both stores energy and lowers the rotational energy, so the levels sag below BJ(J + 1).** Readout: (13.4.5) with the live numbers; HCl's B̃ and k (k from ν̃₀ and μ). Eyebrow "Figure 13.4.1"; the GIF kept as original (public domain). 5.9's `sim-stretch` (CO, ×1000) is linked as the first appearance of the idea. *Orchestrator: or cite 5.9's figure and keep the GIF as a kept image.* |
| 13.4.2 | 13.4 | rigid (dashed) and non-rigid (solid) levels and transitions; the two spectra | **Replace, still, 2D** (variation): the two ladders side by side, F(J) = B̃J(J + 1) dashed and B̃J(J + 1) − D̃J²(J + 1)² solid, the ΔJ = +1 arrows and the two spectra below (rigid hollow, non-rigid filled); a D̃ exaggeration slider (true D̃ = 0.0004 cm⁻¹ for HCl, drawn ×10³ by default, factor in the readout) and J_max of the ladder. **Point: the levels sag more with J, so the lines close in at high J.** Readout: the line position 2B̃(J + 1) − 4D̃(J + 1)³ with the live J (the step the book leaves to "on applying the selection rule"; checked). Eyebrow "Figure 13.4.2". |
| 13.5.1 | 13.5 | Somoza's Morse curve (CC BY-SA 3.0): harmonic green, anharmonic blue | **Kept** as the book prints it (the text reads its colours, "in green", "in blue"), with its credit; the paragraph links 5.3's `sim-morse` (built there). |
| 13.5.2 | 13.5 | Kaya's two SVGs: cubic and quartic corrections (CC BY-NC) | **The same files as Figure 5.3.2**: not rebuilt; the number links 5.3's `sim-taylor` and a note says the book prints the same plots in both sections (Chapter 6's precedent). Not shipped again. |
| 13.5.3 + 13.5.4 (+ Table 13.5.1) | 13.5 | a level diagram with the fundamental, overtones and hot bands; harmonic against anharmonic level spacing | **Fold, replace, still, 2D** (variation: anharmonicity). Two ladders side by side, harmonic (even) and anharmonic (compressing), with the arrows 0→1 … 0→5 and the hot 1→2; under them a wavenumber strip with each transition's line, the harmonic multiples as hollow ghosts, the observed values of Table 13.5.1 as ticks; a χ̃_e slider (0 to 0.03) and a choice of transition. **Point: as the levels close up, each overtone falls further below a whole multiple of the fundamental.** Readout: ν̃(0→v) = vν̃ − v(v + 1)χ̃_eν̃ with the live v, against the table. Opens on HCl with ν̃ = 2990.9 cm⁻¹ and χ̃_eν̃ = 52.8 cm⁻¹, the constants Table 13.5.1's "Anharmonic" column follows (recovered from the table itself: they reproduce every entry to 0.5 cm⁻¹). Intensities not drawn (the book gives none). Eyebrow "Figure 13.5.3 + 13.5.4". |
| Table 13.5.1 | 13.5 | HCl fundamental and overtones | Kept as `div.book-table`; the figure reads it. |
| 13.6.1 + 13.6.2 | 13.6 | OpenStax's three kinds of levels (CC BY 3.0); two wells with vibrational levels (CC BY 4.0) | **Fold, replace, still, 2D** (variation). Two Morse wells, ground X and excited B, their vibrational levels, and a magnifier on one level showing its rotational levels (13.6.1's point: three scales); a choice of lower level v″ = 0, 1, 2 (hot bands) and a slider v′; the vertical arrow and its band on a wavenumber strip below, the progression closing up to the convergence limit with the continuum beyond. **Point: an electronic band is the vibrational ladder of the upper well read from v″ = 0; its lines crowd toward the dissociation limit, past which the spectrum is continuous.** Readout: (13.6.4) corrected (v′ in place of v″) with the live v′, and ν̃₀₀. Numbers: I₂'s X and B states (literature, Huber–Herzberg via NIST, from memory, unchecked: T_e ≈ 15 769 cm⁻¹, ν̃′_e ≈ 125.7, χ̃′_eν̃′_e ≈ 0.76, ν̃″_e ≈ 214.5, χ̃″_eν̃″_e ≈ 0.61 cm⁻¹), so the strip lands on the note's 500–650 nm band system with (26,0) labelled. Eyebrow "Figure 13.6.1 + 13.6.2". |
| iodine spectrum (unnumbered, 125628) | 13.6 note | extinction against wavelength, bands, (26,0), hot bands, convergence | **Kept** with the note as printed (the text reads it: "(26,0) band labelled", "shown very approximately"), unnumbered; uncredited, shipped under the page's licence (Chapter 3's decision). The folded figure above reproduces its band positions. |
| 13.7.1 | 13.7 | Somoza's Franck–Condon diagram (CC BY-SA 3.0): two wells, absorption (blue) and fluorescence (green) arrows, wavefunctions | **Replace, moving, 2D** (the idea has a time in it: the nuclei do not move during the jump, then they do). Two displaced harmonic wells with their wavefunctions; play fires the photon, the ground packet is lifted **vertically** onto the upper well unchanged, then swings between the upper well's turning points (a displaced Gaussian, exact for a harmonic well); a choice absorption / emission (from v′ = 0 down, the arrow shorter); a displacement slider. **Point: the electron jumps at fixed nuclear positions; afterwards the nuclei find themselves away from the new equilibrium and start to vibrate.** Readout: the vertical energy and |S₀₀|² = e^(−α(R_e−Q_e)²/2) live. Eyebrow "Figure 13.7.1"; original kept with its credit. |
| 13.7.2 … 13.7.8 | 13.7 | Franzen's wells for S = 1, ½, 2 and their stick spectra dressed with Gaussians; the four spectra overlaid | **Fold, replace, still, 2D** (variation: the displacement). The wells with the ground v = 0 function and the upper levels, and below them the stick spectrum with |S₀ᵥ′|² = e^(−S)Sᵛ′/v′! and its Gaussian dressing; S on a slider with detents at the book's 0.1, ½, 1, 2. **Point: a small displacement leaves the 0–0 band strongest; a large one moves the maximum to higher v′ and spreads the band, with the area unchanged.** Readout: S₀₀ and the intensity ratio I₁/I₀ = S live. The book's model: 8000 cm⁻¹ gap, 1000 cm⁻¹ mode. Eyebrow "Figure 13.7.2 + 13.7.3 + 13.7.4 + 13.7.5 + 13.7.6 + 13.7.7 + 13.7.8"; seven originals (uncredited, the page's licence). Still: S is variation, not time. 10.4's `sim-franck` (photoionization) is linked from "discussed before … photoelectron spectroscopy". |
| 13.8.1 | 13.8 | Ag2gaeh's oblate and prolate spheroids (CC BY-SA 4.0) | **Replace, still, mathematical 3D** (an arrangement in space, the inertia ellipsoid; variation by slider). A spheroid whose unique axis moment is a slider from prolate (football) through sphere to oblate (frisbee), the axes a, b, c labelled; beside it the E(J, K) ladder for J ≤ 3, splitting by K as the shape leaves the sphere. **Point: equal moments give a spherical top whose levels ignore K; one unequal moment splits each J by K², upward for prolate and downward for oblate.** Readout: the prolate or oblate energy with the live I's and the degeneracy (2J + 1)² or 2(2J + 1). Free orbit (mathematical 3D), no spin, no zoom. Eyebrow "Figure 13.8.1"; original shipped under its own licence (11.4.1's precedent). |
| 13.9.1 (six GIFs) | 13.9 | Wikipedia's animated CH₂-like modes, "with permission" | **Replace, moving, physical 3D** (the modes move; wagging and twisting leave the plane). A CH₂ group on a backbone stub, a choice of the six motions, an amplitude slider (exaggerated, rule 28.4). **Point: the six names are six patterns of the same three atoms: two stretch the bonds, four bend them in or out of the plane.** Readout: the motion's name, stretch or bend, in-plane or out-of-plane. Orbit bounded to the half-space in front of the backbone (no view through it); no spin. Eyebrow "Figure 13.9.1"; the GIFs not shipped (precedent), `notes` names the source. |
| 13.9.2 | 13.9 | CO with Δr(C), Δr(O) and r = r₀ + q | **Replace, moving, 2D** (a vibration has a time). CO vibrating about its fixed centre of mass, the two displacements drawn in the mass ratio, the normal coordinate q = Δr(C) + Δr(O) traced against time beside. **Point: both atoms move at one frequency in opposite directions, and their displacements add to the one coordinate the mode is described by.** Readout: q with the live displacements. Eyebrow "Figure 13.9.2". |
| 13.10.1, 13.10.2 | 13.10 | water's three modes; C₂ acting on the two stretches | **Cite 12.10's `sim-water-modes`** (water's modes and their characters, moving, built there); the two images **kept** here (the text reads them: "The figure below shows…", "gives the following transformation"), uncredited, the page's licence; a footnote on the planes (12.10 xz, B₁; this page yz, b₂). *Orchestrator: or build a yz copy.* |
| Table 13.10.2 | 13.10 | the modes' characters (printed as "Table 13.10.2", the first table) | Kept as printed with its number. |
| 13.10.3 | 13.10 | PtCl₄²⁻'s nine modes with arrows and D₄h labels | **Replace, moving, physical 3D** (kinematic arrows: the modes move; a₂u and b₂u leave the plane). A choice of the nine modes (a₁g, b₁g, b₂g, a₂u, b₂u, e_u stretch ×2, e_u bend ×2), an amplitude slider (exaggerated). **Point: three species stretch the bonds and the rest bend them; the two out-of-plane bends are the ones a flat drawing hides.** Readout: species, stretch or bend, and IR (a₂u, e_u) or Raman (a₁g, b₁g, b₂g) activity from the D₄h table (b₂u silent). Mode shapes from symmetry; the two e_u pairs drawn as pure stretch and pure bend (a stated simplification in the notes). Orbit above the molecular plane and ±70° below it for the out-of-plane modes. Eyebrow "Figure 13.10.3"; original kept. |
| two-level ladder + P(t) curve (unnumbered, 79089, 79090) | 13.11 | \|1⟩, \|2⟩ with a pink arrow; a sinc² curve labelled t at ω − ω₀ = 1 | **Fold, replace, moving, 2D** (populations change in time). The two levels with population bars |c₁|², |c₂|²; play runs t and the bars exchange per the first-order P₁₂(t) (corrected formula), with the exact two-level (Rabi) result dashed beside it so the reader sees where first order overshoots; sliders detuning ω − ω₀ and coupling |H₂₁|/ħ; a graph below of P₁₂ against ω − ω₀ at the current t, narrowing (4π/t) and growing (t²) as time runs. **Point: light near resonance moves population into the upper state and back, and only near ω = ω₀ does much move.** Readout: P₁₂ with the live numbers. Eyebrow "Figure" (unnumbered); originals both. The Rabi curve is the standard two-level result, not in the book: *orchestrator* (it shows the book's own remark that P₁₂ cannot exceed 1). |
| water's bond arrows (unnumbered, 9696) | 13.14 | H₂O with double-headed arrows on the bonds | **Kept** as the sketch the stretch analysis reads ("as depicted below"); the reader is linked to 12.14's projection figure for what the arrows become. |
| Tables (two, unnumbered) | 13.14 | Γ_tot by unmoved atoms; Γ_stretch | Kept as `div.book-table`, as printed. |

### Extra simulations proposed (root rule 15)

Only where motion or variation teaches (precedent); none is built until picked.

1. **A dipole during a vibration** (13.14; the brief's "IR active or not"): a choice of
   N₂, HCl, CO₂'s three modes and water's three, the molecule vibrating with point
   charges on its atoms (a model named in the notes), its dipole arrow and a μ(t) trace
   beside. The reader sees μ oscillate (IR active) or stay put (N₂, CO₂'s symmetric
   stretch), which is the condition dμ/dQ ≠ 0 of (13.14.1)–(13.14.2) made visible. The
   book has no figure for the section's central claim; proposed as a Sim.
2. **The rotor's transition integrand** (13.12): J and J′ (and M) chosen, the product
   P_J′ x P_J over −1 ≤ x ≤ 1 shaded by sign, its area zero unless J′ = J ± 1: the
   rotor's counterpart of 5.5's `sim-transitions`.

## Derivation candidates (root rule 29)

| Where | What | Score | Decision |
|---|---|---|---|
| 13.2, (13.2.2)–(13.2.4) | the R, P and Q line energies, printed as aligns | qualifies as printed; 2, 2 and 1 moves | **Build** one record, "Derivations · the R-, P- and Q-branch lines", three results with their numbers; the energy difference fact links 5.9's `line-positions` (`drv`). A node note fixes R's first line, whose J and J′ are the upper and lower labels the other way round from the text. *Orchestrator: precedent (12.8.1) kept a 2-move printed block as printed; the three together carry five moves.* |
| 13.2, J_max | "by differentiation, we obtain": N_J/N₀ → d/dJ = 0 → (2J + 1)² = 2kT/hB → J_max | hidden; 5 moves (write E_r = hBJ(J + 1), product and chain rule, set to zero, divide out the exponential, solve); facts imported 1 (F(J) = BJ(J + 1)), unprinted run 4, joins 1: score 6 | **Build**: "Derivation · the most populated rotational level". |
| 13.3, ν̃_R and ν̃_P | printed as equation chains | qualifies as printed; 2 and 1 moves | **Build**: "Derivations · the branch lines with B̃₁ ≠ B̃₀", two results; facts: Ẽ_v,J (the section's), the selection rule. |
| 13.4, (13.4.1)–(13.4.12) | printed as equations: F_c → force balance → Δr → E_r → binomial → F(J), B̃, D̃ | qualifies as printed | **Build**: "Derivation · the levels of a non-rigid rotor", ending at (13.4.10) with (13.4.11), (13.4.12); facts: L = ħ√J(J + 1) (5.8), Hooke's law (5.1), the binomial approximation (13.4.7, the book's). A node note fixes (13.4.8)'s "k^{2μ2}" (k²μ²). |
| 13.5, overtone positions | the table's harmonic and anharmonic columns from E_v | substitution, 2 moves | Stays (the figure shows it). |
| 13.6, (13.6.2) → (13.6.4) → ν̃₀₀ | "can be used with … to get" | hidden; 5 moves (G′(v′), G″(0), subtract, expand (v′ + ½)², collect); facts imported 1 (anharmonic levels, 5.3), unprinted run 4, joins 1 (two wells): score 6 | **Build**: "Derivations · the wavenumber of a vibronic band", results (13.6.4) and ν̃₀₀; a node note gives v′ for the printed v″ in (13.6.4). |
| 13.7, (13.7.2)–(13.7.4) → S₀₀; S₀₁ | printed as equations; S₀₁'s steps "not shown" | qualifies as printed; S₀₁ adds a hidden run of 3 (shift, odd part vanishes by 5.7, Gaussian integral) | **Build**: "Derivations · the overlaps S₀₀ and S₀₁"; notes fix the lower limit ∞ → −∞, the exponent's −RR_e (−2RR_e), ∫e^{z²} (e^{−z²}), the misplaced square in S₀₁'s exponent and S₀₁'s prefactor √(α²/2) (√(α/2)). Facts link 5.7's `symmetric-integrals` (`drv`). |
| 13.7, (13.7.1) | separating ψ_total into nuclear overlap × electronic moment | printed, 1 move | Stays. |
| 13.8, prolate/oblate H_rot from (13.8.5) | prose: set I_b = I_c, use J_b² + J_c² = J² − J_a² | 3 moves, score 3 | Stays. |
| 13.8, energies | substitution of eigenvalues | | Stays. |
| 13.9, (13.9.1)–(13.9.5) | ΔV expanded → diagonal in normal coordinates → separated Ĥ → product ψ → E_vib | printed block with words; facts imported 4 (Taylor expansion 5.3, the normal-coordinate theorem, oscillator levels 5.2, separability as in 3.9), joins 1 | **Build**: "Derivation · the vibrational energy of a polyatomic molecule"; notes fix (13.9.4)'s nested sum, ψ_vib's missing "(Q₁, …)", N_vin, μ_i/Q_i indices. Facts link 3.9's `box3d` for separability (`drv`). |
| 13.11, ∂c_n/∂t | "Plugging into the Schrödinger equation … chain rule … resolving the identity" | 4 moves; facts imported 3 (TDSE 3.1, the stationary phase 4.4, orthonormality 3.5), unprinted run 3, joins 1: score 7 | **Build** with the next as one record: "Derivations · the amplitude equations and the transition probability". |
| 13.11, c₂(t) and P₁₂(t) | "can be simplified to" | 6 moves (H₁ = V cos ωt, Euler, drop the far-off-resonance term, integrate, factor e^{iΔt/2}, sine); facts imported 2 (Euler 2.3, ω ≈ ω₀ the book's), unprinted run 5: score 7 | **Build** (same record, results ∂c_n/∂t, c₂, P₁₂); notes: the integrand's t (t′), the extra t in the denominator, the factor (the book's own peak height |H₁₂t/2ħ|² fixes it: P₁₂ = |H₂₁|² sin²[(ω − ω₀)t/2]/ħ²(ω − ω₀)²). Fact "stationary state" links 4.4's `stationary-state` (`drv`). |
| 13.12, the rotor selection rule | printed as equations | qualifies as printed | **Build**: "Derivation · the selection rules of the rigid rotor", results ΔM = 0 and ΔJ = ±1; notes restore the missing x (μ_z = μ cos θ) in the integrand, the recurrence's (J + |M|), Y's conjugate, the "I" exponent. |
| 13.13, the example | printed chain (Hermite recurrence) | the same chain as 5.5 | **Not rebuilt**: the example stays printed (with its corrections) and links 5.5's `ir-selection-rules` (repeated material). |
| 13.14, (13.14.1) → (13.14.2) | μ constant → orthogonality → zero | 2 moves | Stays. |
| 13.14, Γ_vib, Γ_bend | table arithmetic | | Stays. |

Nine derivation records to build (13.2 two, 13.3, 13.4, 13.6, 13.7, 13.9, 13.11, 13.12);
eight if the orchestrator keeps 13.2's three short aligns as printed.

## Corrections spotted (root rule 13)

The book's words kept; a numbered footnote where each applies.

- **13.1**: the marker "²" after "direction of propagation" has no note (Harvey's
  reference); "form hydrogen"; "Another unit useful unit"; "the the"; the frequency
  bullets give no unit (Hz); "Electromagnetic spectrum provides clearly information …"
  and "if the molecules absorbs" (as printed).
- **13.2**: the page prints two "Figure 13.2.3" and no 13.2.2, and cites "Figure 13.2.2"
  three times (the second and third figures); "the rotational quantum number in the
  ground state is one more than … in the excited state" (R) and "one less" (P) are
  backwards (R: J′ = J″ + 1); "(i.e. J" = 0 and J' = 0, but ν₀ ≠ 0" lacks its parenthesis;
  "S(J) represents the energy of a rigid rotor" is F(J); "Most diatomics, such as O₂,
  have a small moment of inertia and thus very small angular momentum and yield no
  Q-branch" gives the wrong reason: a Q branch needs electronic orbital angular
  momentum about the axis (NO's ²Π), which a Σ state lacks whatever its moment of
  inertia, and O₂, being homonuclear, has no infrared spectrum at all; "thermal distribution of electrons" is of molecules; "the population of
  the Jth upper level … lower state N₀" (levels of one vibrational state); "the the zero
  gap"; R's first align line labels J and J′ the other way round.
- **13.3**: "R_e² is the bond length" (R_e is); "B̃ ∝ R_e² (inversely proportional)"
  notation; "Experimentally … the P branch has closer spaces … while R branch has
  further spaces" and "R region is on the left and P region is on the right" contradict
  the section's own result and the figure (R crowds, at higher frequency, on the right);
  "ν̃_R = ν̃ −(smaller …)" in the P paragraph is ν̃_P; the P heading "with Decreasing J"
  and "increase as J decreases": the P spacing grows with **increasing** J (toward lower
  wavenumber) (checked: P(J) − P(J + 1) = B̃₁ + B̃₀ − (B̃₁ − B̃₀)(2J + 1)); "J. Chem. Ed.
  2007, 84, 1064 … ed084p1062" (page mismatch, reference list).
- **13.4**: "Let r_e is"; "Hook's law"; (13.4.8)'s "k^{2μ2}" is k²μ²; "centrifugal stretching
  constant D̃ is not only measures"; "cm^{-1}" inside (13.4.10) (a unit in the equation,
  kept). The rest checked: (13.4.11) B̃ = ħ/4πμr_e²c and (13.4.12) D̃ = ħ³/4πkμ²r_e⁶c are
  right.
- **13.5**: "the first term in the expansion is ignored since the derivative … is zero"
  refers to the linear term the printed (13.5.1) already omits; "V(x)" for V(R) and
  "V(x₀) = 0, r = R − R₀" against R_e; "gives by the following energies"; "Fundamental
  … transition of Δv = ±1" fine; "The fundamental transitions, v = ±1" is Δv; "ΔV = any
  number" is Δv; "the energy of the overtone transition will be approximately v times
  the fundamental" fine; "occuring"; Exercise 13.5.1's overtone 5668.1 against the
  table's 5668.0 (both kept); Table 13.5.1's headers "ṽ_obs Harmonic", "ṽ_obs Anharmonic"
  are calculated, not observed; its anharmonic column uses ν̃ = 2990.9, χ̃_eν̃ = 52.8 cm⁻¹
  (checked), which the page never states.
- **13.6**: "Molecules can also undergo changes in electronic transitions during
  microwave and infrared absorptions" (electronic transitions need visible or UV
  light, as the next sentence says); "potential energy cure"; "rotational or
  transitional terms" (translational); "G(n)" for G(v); the ′/″ convention: the page
  labels state 2 with ′ and state 1 with ″ and then writes ν̃_obs = Ẽ″(v″) − Ẽ′(v′), the
  lower minus the upper; (13.6.4)'s last two terms are in v′, printed v″; "vibratonal";
  "v′ = 0 vibrational state" for the lower state's v″ = 0; 13.6.1's caption uses n and l
  for v and J (OpenStax's letters, kept); "X¹Σ⁺" (X¹Σg⁺) and "B³Π" (B³Π₀u⁺) as printed.
- **13.7**: "The v′ quantum numbers refer to the ground state and the v … excited state"
  against the figure's v = 0 → v′ = 2 and the later S₀₁ (v′ for the excited state);
  "a give region"; "_{i→f}" has lost its P; "vierical"; "spectroscoy"; (13.7.2)'s lower
  limit ∞; (13.7.3)'s "−RR_e" (−2RR_e); (13.7.4)'s ∫e^{z²} (e^{−z²}); S₀₁'s exponent
  "{R − ½(R_e + Q_e)²}" (the square outside the brace) and missing dR; **S₀₁ =
  √(α/2)(R_e − Q_e)e^{−α(R_e−Q_e)²/4}, printed √(α²/2)** (computed); "higher light
  vibrational levels"; "In this first place"; "is much large"; the emphasis note: **S is
  the ratio of the v = 1 to the v = 0 intensity; v = 2 to v = 1 is S/2** (Poisson
  progression, I_v ∝ e^{−S}Sᵛ/v!); S is never defined (the dimensionless displacement,
  S = α(R_e − Q_e)²/2: footnote); "This change in vibration is maintained during a state
  termed the rapid electronic excitation" and "The resulting Coulombic forces produce an
  equilibrium … termed a turning point" (as printed, muddled; footnote only on "turning
  point", which is where the vertical line meets the upper curve); the three bullets
  after "when the bond order is less in the excited state" list promotions that
  **raise** the bond order (non-bonding → bonding …): the reverse of the claim
  (footnote); "Samoza" (Somoza).
- **13.8**: "in these moments"; "typically reflected in an 3 × 3"; J_a and J_b's
  "− −iħ"; J_c's "ih" (ħ); "J_2" (J²); E = ħ²J(J + 1)/2I², printed with I² (2I) twice and
  "2I 2" once; "h²" for ħ² in the top energies; "degenarate"; "J a quantum numbers" (the
  J_a quantum number K); the three matrix-element lines lost their kets at the source
  ("⟨ j, ⟩ = …"): a footnote gives them as Simons prints them, ⟨J,M,K|J_a²|J,M,K⟩ =
  ⟨J,M,K|J_b²|J,M,K⟩ = ½ħ²[J(J + 1) − K²], ⟨J,M,K|J_c²|J,M,K⟩ = ħ²K², and the ΔK = ±2
  elements ±¼ħ²√[J(J + 1) − K(K ± 1)]√[J(J + 1) − (K ± 1)(K ± 2)] of J_a² and −J_b²
  (the ¼ checked from J_a = (J₊ + J₋)/2); "{C n, J,M,K }" (C_{n,J,M,K}); 13.8.1's caption
  "oblate if c < a" uses the spheroid's semi-axes, not the moments (kept; the figure says
  which).
- **13.9**: "orientation in space (its translational degrees of freedom) nor its center
  of mass (its rotational …)" swaps the two; "ignore"; (13.9.4) nests the potential sum
  inside the j sum and mixes μ_i, Q_i; "ψ_vib = Q₁, Q₂, …" lacks ψ_vib(…) ; N_vin;
  "Symmetricical"; "($N = 3$ and" lacks its parenthesis; 13.9.2's caption "is equation to"
  (equal to); Figure 13.9.1 is printed as a table with a paragraph caption.
- **13.10**: "an irreducible representation of the point the molecule" (point group);
  "The two stretching modes are equivalent in symmetry and energy" is wrong (a₁ and b₂,
  3657 and 3756 cm⁻¹); the ν numbering: the page says ν₂ is the asymmetric stretch and ν₃
  the bend, but the usual convention (and its own table: ν₂ = a₁, ν₃ = b₂) has ν₂ the
  bend and ν₃ the asymmetric stretch; "(Figure 13.10.2)" for PtCl₄²⁻ is 13.10.3; the
  first table is printed "Table 13.10.2"; 13.10.3's caption "A₁g" (a₁g) as printed.
- **13.11**: "(e.g., such oscillations …)" fine; "{\displaystyle |j\rangle }" (markup
  residue, dropped); (13.11.1)'s e^{iω₀t} under ∫dt′ (t′); "the matrix elements of the
  permutation" (perturbation); "Probability of particle at n = 2" heads an amplitude;
  the c₂ formula has an extra t in the denominator and a factor 2 too many (computed;
  the page's own "height |H₁₂t/2ħ|²" agrees with the corrected form); the curve image is
  labelled t but plots the line shape against ω − ω₀ at t = 1 (its peak 0.25 = 1/4 is
  sin²(x/2)/x² at 0).
- **13.12**: "how the probability of transitioning … cannot be zero" (can be non-zero);
  "Notice that m must be non-zero" (μ, the permanent dipole); "x = cos q" (θ);
  "e^{I(M−M′)φ}" (i); "The integral over f" (φ); "P_J^{|M]}"; the integrand lacks the x
  that μ_z = μ cos θ brings; the recurrence's second coefficient is (J + |M|), printed
  (J − |M|) twice; Y_{J′}^{M′} lacks its conjugate; "As stated above in the section on
  electronic transitions" (no such section on this page; Δl = ±1 is 8.11's).
- **13.13**: the integrand's H_{v+1} … H_{v+1} (H_{v′} … H_v); "μ is the dipole moment, so
  we pull it out of the integral" then expands it in x (as printed: footnote that μ
  depends on x); "e^(−αx²/2)"; "the principal quantum number, n, … Particle in a Box"
  (n is not a principal quantum number there; minor, footnote).
- **13.14**: "If a Normal Modes"; "the integral in Equation (13.14.1) will equal zero" is
  (13.14.2)'s; "|φ(v = ≠ 0)⟩"; "α must be nonzero" (must change during the vibration,
  as the next paragraph says); "**The two symmetric stretches v1 and v2 occur at 3756
  and 3657**": 3657 cm⁻¹ is the symmetric stretch and 3756 the asymmetric (ν₃), and the
  bend 1595 cm⁻¹; "PtCl4⁻" (PtCl₄²⁻); "deducted"; "Publocations"; the DOI "ed083p1393"
  against p 1383 (reference list). Γ_tot, the reduction 3a₁ + a₂ + 2b₁ + 3b₂, Γ_vib = 2a₁
  + b₂, Γ_stretch = a₁ + b₂ and Γ_bend = a₁ checked right.
- **summary**: the Jablonski-diagram objectives (above).

## Licences of the figures

| Figure | Credit as printed | Proposal |
|---|---|---|
| 13.1.1, 13.1.2 | Harvey (13.1.2 "modified from Zedh") | shipped as originals under the page's licence (13.1.2 from a Wikimedia original: CC BY-SA expected) |
| 13.2.1, the two 13.2.3s, 13.4.2, 13.5.3, 13.5.4, 13.7.2–13.7.8, 13.9.2, 13.10.1–13.10.3, the 13.11 images, 13.14's water, the iodine spectrum | none | shipped under the page's licence (Chapter 3's decision) |
| 13.3.1, 13.6.1 | OpenStax (CC BY / "CC-SA") | shipped with credit |
| 13.3.2 | "used with permission from Wikipedia" | not shipped |
| 13.4.1 | public domain, Cleonis | shipped (original of the rotor figure) |
| 13.5.1, 13.7.1 | Somoza, CC BY-SA 3.0 | shipped under their own licence with credit (10.6's precedent) |
| 13.5.2 | Kaya, CC BY-NC | already 5.3.2's; not shipped again |
| 13.8.1 | Ag2gaeh, CC BY-SA 4.0 | shipped under its own licence with credit |
| 13.9.1 (six GIFs) | Wikipedia, "with permission from copyright holder" | not shipped (precedent) |
| 13.6.2 | CC BY 4.0 LibreTexts | shipped with credit |

## What is new to OmniStax here

- **One new type, `electric-field`** (label "electric field"): the oscillating field of
  13.1 (A_t, A_e), the light's field E₀ cos ωt of 13.12, and 12.13's E_field once
  Chapter 12's pass sets it; it pairs with the existing `magnetic-field` in the wave
  figure. Merged; `colours:default` run.
- **The Boltzmann distribution enters the book** here (13.2's note), as an axiom with
  13.2's span; Chapter 17 reinforces it.
- **Rovibrational terms in wavenumbers** written with the existing types: F(J), G(v),
  S(v, J), ν̃_R, ν̃_P, T̃_el, ν̃₀₀ wear `wavenumber`; B̃, B̃_v and D̃ wear the rotational
  constant's `energy` (5.9 typed B̃ by its concept), so a line formula mixes two hues
  where the book mixes two units.
- **Symbols that collide in this chapter**: J (rotational quantum number, untyped) and
  J_a, J_b, J_c, J² (angular-momentum components and square, typed); F (force, Chapter
  4's key) against F(J) the rotational term (`F_rot`); S(v, J) (`S_term`) against S₀₀
  (`S_00`) and S the displacement (`S`); K the top's quantum number reuses Chapter 2's `K`
  key with its own meaning; c_n reuses 5.6's key as the amplitude (`redefines` within
  the chapter only where needed); ν₀ is the band origin (1.3's threshold key `nu_0`, a
  new meaning); α is 13.7's oscillator constant and 13.14's polarizability (`alpha`,
  `alpha_pol`).
- **The chapter's figures are mostly ladders made into spectra**, built line by line or
  by slider. 3D only where the lesson is spatial: the 13.1.1 wave and 13.8.1's spheroid
  (mathematical), the CH₂ and PtCl₄²⁻ modes (physical).

## The chapter's answer to root rule 23

A spectrum is a ladder read sideways, and the printed page shows both but never the
reading. The stunning version makes every line come from somewhere the reader can
point to: fire the R(3) arrow on the J ladders and its line lands 2B̃ from its
neighbour; warm the gas and the envelope slides to higher J; let B̃ shrink in the upper
level and the R lines pile into a head while the P lines spread. The same move works
at every scale: overtones falling short of whole multiples as the anharmonic ladder
closes up, an electronic band climbing the upper well's ladder to its continuum, a
Franck–Condon envelope reshaping as the upper well slides over, and finally light
itself driving a population across a two-level gap, which is where every one of these
lines comes from.

## Tool changes made for this chapter

- `md2html.py` braces an exponent written as a bare `\left( … \right)` (13.2's
  e^\left(−E_r/kT\right) in the occupations note), which MathJax reads and KaTeX
  refuses. Every draft of Chapters 1–12 (262 files) regenerated in a scratch folder
  with the old and the new script: identical; only 13.2's draft changes. The converter
  was not changed, so no source.md was reconverted. With it, all 16 Chapter 13 drafts
  set every maths span under KaTeX (with mhchem) without an error.
- Not a tool change but for builders: 13.9's Figure 13.9.1 comes through as a table of
  six images and a bold-italic caption paragraph, and 13.6, 13.11, 13.14's unnumbered
  images as `<p><img>`; the builder makes the figure rows (as in Chapter 12).
