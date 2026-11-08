# Config: Physical Chemistry (LibreTexts), Chapter 10

Proposed by the agent after the chapter exploration (2026-11-08). Status:
**agreed** on 2026-11-08: the user asked for Chapter 3 and the chapters after it to be built after accepting Chapter 1's defaults; Chapter 1's choices carry over (book exercises kept, AI solutions for unkeyed ones, AI exercises proposed where a concept would have none), and the loop runs without per-section stops.

| Setting | Value |
|---|---|
| Chapter | 10 Bonding in Polyatomic Molecules: landing page 11787, sections 10.1–10.7 (13470–13475, 53694), the summary page 10.S (550566); 10.E (13469) is empty and not built |
| Front matter | the landing page's paragraph is the chapter's `intro/` page (root rule 21.1), one block with a header of the agent's; no lead, objectives or exercises; the page prints no thumbnail |
| Summary page | 10.S is the chapter's `summary/` page (root rule 21.2): one paragraph, header of the agent's; one correction (its "ab-initio methods" are Chapter 11's) |
| Start point | 10.1 |
| Unit of work | one section = one page, never folded |
| Loop | the chapter in one go, without per-section stops |
| Empty and stray pages | none: every page holds the text its title promises |
| Prose | verbatim; objectives pulled out (10.1, 10.4, 10.5, 10.6, 10.7, none with a lead-in); the "## Summary" of 10.1, 10.3 and 10.4 to `summary_html`; credits: 10.2 its Contributors list (Andrew Wolff; Martin, Stackexchange), the others the tags' authors (10.1 Tuckerman, 10.3 Eames and Tuckerman, 10.4 Nix, 10.5 Blinder, 10.6 Larsen, 10.7 Reusch, the summary Crabtree); 10.5's and 10.7's zero-width spaces in "Hückel" dropped |
| Headers | the book's `<h2>` headers kept; the agent's for every opening block and for 10.6, which has none, and for 10.7's "Benzene's π Levels" block (proposals in `exploration.md`), put through the humanizer by the builder |
| Boxed notes | kept verbatim as titled notes: 10.1 Are hybrid orbitals Real?; 10.2 Warning; 10.3 Mixing Amplitudes, Walsh Correlation Diagrams (holding Figure 10.3.4); 10.4 Note, Koopmans' Theorem, Differing Ionization Energies; 10.5 Conjugated Systems, Matrix Representation of the Hamiltonian, Limitations of Hückel Theory; 10.6 Delocalization Energy in Valence Bond Theory (holding 10.6.2); 10.7 Structure of Benzene (holding 10.7.2), Hückel's Rule; pulled quotes as printed |
| Embeds | none |
| Printed labels | kept as printed: Figures 10.1.1, 10.1.3–10.1.8 (no 10.1.2); the two printed 10.2.4 and the two printed 10.3.5 (proposal in `exploration.md`, orchestrator); 10.4's uncaptioned table unnumbered; Examples 10.4.1 and 10.4.2 (illustrations with no question) kept as examples |
| Equation numbers | one per display, an `align` included, as the converter's `n=` gives them (72 numbered of 145); borrowed labels (10.4's `5.3.x`, 10.6's `24`–`32`): read numbers from the draft; citations that miss are corrected (list in `exploration.md`) |
| Repeated material | built once where the book first works it and cited after: 10.5's secular equations (10.5.1)–(10.5.6) cite 7.2's derivation; 10.2's unnumbered sp³ set is 10.1's (10.1.25), kept as printed; water's MO diagram is built in 10.3 and reopened in 10.4's spectrum figure; 10.5.2's sp² mixing cites 10.1's hybrids figure |
| Figures | as the table in `exploration.md`: sp, sp², sp³ hybrids as the s share grows (10.1.3 + 10.1.7 + 10.1.8, still 3D); a p orbital rotated in BH₃'s plane (10.1.4 + 10.1.5 + 10.1.6, still); water's hybrids and bond angle against s character (10.2.1 + 10.2.2 + the second 10.2.4, still 3D); the Walsh diagram of AH₂ bending, by electron count (10.3.1 + 10.3.4, still); water's MO diagram with its orbitals as clouds from Table 10.3.1 (the two 10.3.5, still 3D); the analyzer filtering electrons (10.4.1, moving); the Franck–Condon band, vertical against adiabatic (10.4.2 + 10.4.4, still); the spectrum from orbital energies for H₂, N₂, HCl, H₂O (10.4.3 + the example images + 10.4.5–10.4.8, still); ethylene's σ and π frameworks (10.5.1, still 3D); two p orbitals mixed, the energy finding α ± β (10.5.4 + 10.5.5, still); Hückel chains of 2–8 carbons (10.6.1 + 10.6.3, still); ring levels filling to 4n + 2 (10.7.3, moving); faithful copies of 10.3.2 + 10.3.3, 10.5.3, 10.7.4; kept images 10.1.1, the first 10.2.4 (with a footnote), Example 10.2.1's CO₂, 10.5.2, 10.5.6, trans-butadiene, 10.6.2, 10.7.1, 10.7.2; tables kept |
| 3D | four mathematical scenes, point clouds coloured by sign through `F.space.points` (3.9's and 6.6's decision), free orbit, no buttons: the hybrid sets, water's hybrids, water's orbitals, ethylene's frameworks |
| Model data | literature allowed with its source named: H₂ and H₂⁺ constants (Huber–Herzberg) for the Franck–Condon band; the page's own table and figures for the spectra; the Walsh levels from a small extended-Hückel model whose parameters are ours and said in the caption (9.12.4's precedent) |
| Extra simulations | none offered: every moving or varying idea of the brief replaces a book figure |
| Derivations | built: the sp hybrids (10.1); the sp² hybrids (10.1, the skipped solve inserted); the s and p character of a hybrid (10.2); the bond angle from the hybrids, cos θ = −γ² (10.2, "it can be proven", every fact in 10.1); the kinetic energy of a photoelectron (10.4); the π orbitals of ethylene (10.5, citing 7.2's secular determinant); the delocalization energy of butadiene and the π orbitals of butadiene (10.6); the delocalization energy of benzene (10.7); the rest kept as printed or cited (table in `exploration.md`) |
| Corrections | root rule 13's footnotes, the book's words kept (list in `exploration.md`), including 10.1's BH₃ quadrants and hybrid directions; 10.2's γ for sp³, its lone-pair algebra and the carbon box diagram; 10.3's orbital labels (garade, χ₂, χ₅, χ₆, 3a₁) and Table 10.3.1's numbering; 10.4's HCl 3s/3p, H₂O⁺, the figure citations and the 1b₁ "three-centre" claim; 10.5's x = −1; 10.6's "0.48β" and ψ₃ printed twice; 10.7's ψ₂ and ψ₄, Hückel's rule's n and the kJ/kcal heats of hydrogenation; the summary's ab-initio sentence |
| Colour | categories in the chapter: energy, length, angle, wavefunction, operator, frequency; no new type, so no `colours:default` run; coefficients (a_i, b_i, c_i, c_ij, C_g, C_u, N, N_i), γ, the Hückel x, spˣ's x, counts and orbital labels (a₁, b₁, b₂, σ_g …) untyped and in ink; facts: none (no spectrum of light is drawn; the photon-energy slider is an energy); conventions: `F.el` for every atom a figure names (H, Be, B, C, O, F, N, Cl) |
| Symbols | 41 new, 28 typed with macros; χ redefined in 10.3 (an AH₂ MO, `redefines`); Hückel's α, β, x on their own keys (`alpha_H`, `beta_H`, `x_H`); V_ee, V_en, V_nn on `V_eeb`, `V_enb`, `V_nnb`; E₁–E₄ redefined in 10.6 and 10.7 |
| Licence | 10.4 CC BY 4.0 at the source, shared BY-NC-SA; 10.6 CC BY-SA 4.0, shared BY-SA, its two Kaya figures under their own CC BY-NC (orchestrator); every other section CC BY-NC-SA 4.0; the summary untagged, so the book's; uncredited originals ship in `originals` under the page's licence (Chapter 3's decision); not shipped: the second 10.3.5 (Krylov, no licence) and 10.4.8 (a scan); 10.2.1's BMP ships as a PNG |
| `ai` and `built` | `ai` names the model and effort that wrote each part; `built` is the build date |

## Exercise count report and the choice it asks for

- **Inline exercises**: 1 printed box (10.6.1), **1 card**. **0 keyed**. **1
  unkeyed**, available with an AI solution (1 explain or prove: Hückel's
  cis-butadiene; 0 compute; 0 sketch).
- **Worked examples**: 3 (10.2.1 with its Solution; 10.4.1 and 10.4.2,
  illustrations with no question), kept whole; not exercises.
- **Conceptual questions, problems, 10.E**: none printed; 10.E is empty, so
  nothing is routed to the sections.
- **Placement**: 10.6.1 tests 10.6 and stays there.
- **In all**: 1 card, 0 keyed, 1 unkeyed (1 explain or prove).
- **Proposed new**: 7, one per section, where the book leaves a concept untested
  or only qualitatively tested: 10.1 (two sp³ hybrids orthonormal, their angle),
  10.2 (NH₃'s hybrids from its 106.7°), 10.3 (which AH₂ molecules Walsh's diagram
  makes linear), 10.4 (He I photoelectrons from water's 1b₁; the missing 2a₁
  band), 10.5 (ethylene's HOMO–LUMO gap and its wavelength), 10.6 (the allyl
  radical's levels and delocalization energy), 10.7 (cyclobutadiene's levels and
  why it is not aromatic).

**The choice** (carried over from Chapter 1): *AI solutions* for the 1 unkeyed
card; *AI exercises* for the 7 proposed. Every exercise is an item of the Exercises
document (`place: end`).

## Decisions taken by the orchestrator

None yet; the open questions are at the end of the agent's report and in
`exploration.md` (the two duplicated figure numbers, the NC figures on 10.6's
BY-SA page).

## Decisions taken by the orchestrator (2026-11-08)

- **Duplicate figure numbers**: 10.3's two "10.3.5" fold into one figure. In 10.2, the second "10.2.4" folds into the hybrids figure, and the first keeps its printed 10.2.4; the text's "Figure 10.2.3" links to it, with a footnote.
- **10.6's Kaya figures** (CC BY-NC on a CC BY-SA page): shipped under their own licence, with credit.
- **Walsh diagram (10.3)**: our small extended-Hückel model is allowed, its parameters named in the figure's notes, as with literature data in Chapters 8–9.
- **Not shipped**: Anna Krylov's 10.3.5 (no licence) and the scanned spectrum 10.4.8.
- **Captions** have no fixed length.
