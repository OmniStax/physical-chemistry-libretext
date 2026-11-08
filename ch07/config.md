# Config: Physical Chemistry (LibreTexts), Chapter 7

Proposed by the agent after the chapter exploration (2026-11-08). Status:
**agreed** on 2026-11-08: the user asked for Chapter 3 and the chapters after it to be built after accepting Chapter 1's defaults; Chapter 1's choices carry over (book exercises kept, AI solutions for unkeyed ones, AI exercises proposed where a concept would have none), and the loop runs without per-section stops.

| Setting | Value |
|---|---|
| Chapter | 7 Approximation Methods: landing page 11784, sections 7.1–7.4 (13434, 13435, 13436, 13437), the summary page 7.S (550558); 7.E (13433) is empty and not built |
| Front matter | the landing page's paragraph is the chapter's `intro/` page (root rule 21.1), one block with a header of the agent's; no lead, objectives or exercises; it prints no thumbnail |
| Summary page | 7.S is the chapter's `summary/` page (root rule 21.2), built like 6.S: an opening block (header of the agent's) and the book's two `<h2>`; one numbered display (7.S.1); its citation of 5.S's Taylor expansion links 5.S's (5.S.1); corrections as listed (the ⟨φ₁\|Ĥ\|φ₁⟩ slips, "normalized" for orthonormal, n for n + 1 roots) |
| Start point | 7.1 |
| Unit of work | one section = one page, never folded |
| Loop | the chapter in one go, without per-section stops |
| Prose | verbatim; objectives pulled out (all four sections, no lead-in sentences); no section summary; no Contributors list on any page: the credits are the tags' authors (7.1, 7.3 Theodore Zielinski; 7.2 Claire Vallance; 7.4 Delmar Larsen; the summary Kyle Crabtree; the intro the book's) |
| Headers | the book's `<h2>` headers kept; the agent's for every opening block (7.1, 7.2, 7.4, intro, summary) and for 7.3, which has none (proposals in `exploration.md`), put through the humanizer by the builder; 7.4's bold sub-headers ("Last term…", "First term…") as `<h3>`, Example 7.4.2's "Energy" and "Wavefunction" as its parts |
| Boxed notes | kept verbatim as titled notes: the five of 7.2 (Linear Variational Basis Functions; Orthonormality of Basis Functions; Hermitian Operators; Properties of Determinants; Expanding Determinants) and 7.4's "Perturbation Theory Does not always Work"; pulled quotes as the book prints them (7.1 one, 7.4 four) |
| Printed labels | kept as printed: Examples 7.4.1A and 7.4.1B, the lone Exercise 7.4.3, the two figures printed "Figure 7.4.1" (each citation linked to the figure it means; a note says the book numbers two); a note where a label misleads |
| Equation numbers | one per display, an `align` included, as the converter's `n=` gives them (the labels lag the numbers on every page: read numbers from the draft); citations that miss are corrected (list in `exploration.md`); 7.2's (7.2.3) cites 7.1's (7.1.7) |
| Repeated material | built once where the book first works it and cited after: 7.2's restatement of E_trial (7.2.3) cites 7.1's; 7.3's basis functions and Slater orbitals reinforce 7.2's concepts |
| Figures | as the table in `exploration.md`, all still and 2D: the shielding of helium's second electron with Z_eff(r) (7.1.1), faithful copies of the three flowcharts (7.1.2; 7.2.2 with its differences from 7.1.2 marked; the second 7.4.1), E_trial(ζ) with its minimum above the true energy and the orbital beside it (7.1.3), the two-function landscape and its repelling levels (7.2.1), the box levels under a perturbation, first order against exact (7.4.1), the oscillator's ground state mixing under x³ or x⁴ (7.4.2); tables kept |
| 3D | none |
| Extra simulations | offered, not built unless picked: an orbital from three exponentials (7.3, recommended), a Gaussian trial function for hydrogen (7.2, not recommended) |
| Derivations | built: helium without electron repulsion (7.1); the variational energy of a linear trial function, the secular equations, Example 7.2.1 (7.2); matching powers of λ, the first-order energy correction, the first-order wavefunction correction, Example 7.4.1B (7.4); the rest kept as printed (table in `exploration.md`) |
| Corrections | root rule 13's footnotes, the book's words kept (list in `exploration.md`), including (7.1.5)'s stray Ĥ, ζ in (7.1.9)'s Hamiltonian, h for h² in (7.1.10), Example 7.2.1's Solution, the real-coefficient assumption of (7.2.10)–(7.2.11), (7.2.14)'s indices, "Example 7.2.1" for Equation 7.2.1, Figure 7.2.1's false dips, Table 7.3.1's F exponent (to verify), the λ headers, Example 7.4.2's m = 5, ħ for ħ², and the keys of 7.1.1, 7.3.2 and 7.4.3 |
| Colour | categories in the chapter: energy, wavefunction, operator, length, mass, charge, angle, frequency; no new type, so `colours:default` was not rerun; effective charges, exponents, coefficients and λ untyped and in ink; referents: electrons 1 and 2 of 7.1.1 where the figure must tell them apart |
| Symbols | 33 new: typed with macros (\kIone, \kItwo, \kEtrue, \kEtrial, \khone, \khtwo, \kPsitot, \kpsiela, \kpsielb, \kEna, \kEnb, \kpsitrial, \kpsitrue, \kvarphiorb, \kphij, \kHij, \kvarphions, \kHzerohat, \kHonehat, \kEnzero, \kEnone, \kEni, \kVo); untyped without one (ζ, Z_eff, a_i, a_j, S_ij, c_j, ζ_j, c_{m,n}, ε, and λ as `lambda_pt`, a new key since `lambda` is the wavelength's); α means the orbital exponent in 7.2 and √(kμ/ħ²) in 7.4 (the 7.4 row marked `redefines`) |
| Licence | every section CC BY-NC-SA 4.0; the intro tagged BY-NC-SA, the summary untagged, so the book's; uncredited originals (7.1.2, 7.1.3, 7.2.2) ship in `originals` under the page's licence (Chapter 3's decision); every credited original ships with its credit |
| `ai` and `built` | `ai` names the model and effort that wrote each part; `built` is the build date |

## Exercise count report and the choice it asks for

- **Inline exercises**: 4 printed (7.1.1, 7.3.1, 7.3.2, 7.4.3), **4 cards**.
  **3 keyed**, available now (7.1.1, 7.3.2, 7.4.3; 7.1.1's Solution stops at
  ζ = 27/16, and a correction under the card gives the energy and percent
  error the text prints after it); **1 unkeyed**, available with an AI
  solution (0 explain or prove, 0 compute, 1 sketch: 7.3.1).
- **Worked examples**: 5 (7.2.1, 7.2.2, 7.4.1A, 7.4.1B, 7.4.2), kept whole;
  7.2.1 and 7.4.1B built as derivations; not exercises.
- **Conceptual questions, problems, 7.E**: none printed; 7.E is empty.
- **Placement**: every question tests its own section; nothing held or moved.
- **Proposed new**: 7, where the book leaves a concept untested: two in 7.1
  (E_trial at ζ = 2 and ζ = 1 against the true energy; the independent-electron
  energy and why it is no bound), two in 7.2 (a numerical 2 × 2 secular
  problem with its coefficients; the characteristic equation with S₁₂ ≠ 0),
  one in 7.3 (linear against nonlinear parameters), two in 7.4 (the tilted
  box's first-order shift, V₀/2; which oscillator states x³ mixes into the
  ground state).

**The choice** (carried over from Chapter 1): the 3 keyed cards kept as
printed, with corrections where a key is wrong or short; *AI solutions* for
the 1 unkeyed; *AI exercises* for the 7 proposed. Every exercise is an item of
the Exercises document (`place: end`).

## Decisions taken by the orchestrator

None yet; the open questions are at the end of the agent's report and in
`exploration.md` (marked "orchestrator").

## Decisions taken by the orchestrator (2026-11-08)

- **Two figures printed "Figure 7.4.1"**: the perturbation Sim keeps the number 7.4.1. The flowchart is a faithful copy shown unnumbered (eyebrow "Figure"), with a correction footnote saying the book prints it as a second Figure 7.4.1; each citation links by hand to the figure its sentence means.
- **7.4.1 replacement**: the book's perturbations only (constant, half-box); the tilted box is dropped, since the book doesn't use it.
- **⟨n⁰|n¹⟩ = 0**: a node note, not a fact.
- **Fluorine's ζ₁s (Table 7.3.1)**: the builder checks 8.56 against the Hehre–Stewart–Pople set and writes a correction only if the book's value is wrong.
- **Shielding figure**: the readout uses the charge enclosed inside r, reusing 6.5's enclosed fraction.
- **Example 7.2.1's derivation** stops at the quadratic, as the book does.
- **Extra simulations**: the 7.3 three-exponential orbital Sim only.
- **Forms** carry the corrected maths where the book's is wrong, as in Chapter 6.
- **Captions** have no fixed length.
