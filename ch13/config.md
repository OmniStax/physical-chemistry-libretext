# Config: Physical Chemistry (LibreTexts), Chapter 13

Proposed by the agent after the chapter exploration (2026-11-08). Status:
**agreed** on 2026-11-08: the user asked for Chapter 3 and the chapters after it to be built after accepting Chapter 1's defaults; Chapter 1's choices carry over (book exercises kept, AI solutions for unkeyed ones, AI exercises proposed where a concept would have none), and the loop runs without per-section stops.

| Setting | Value |
|---|---|
| Chapter | 13 Molecular Spectroscopy: landing page 11808, sections 13.1–13.14 (2398, 2402, 2416, 13667, 2401, 2399, 13670–13677), summary 13.S (550568); 13.E (50949) is empty and not built |
| Front matter | the landing page's paragraph is the chapter's `intro/` page (root rule 21.1), one block with a header of the agent's; no lead, objectives, exercises or concepts; the thumbnail credit left out with the thumbnail |
| Summary page | 13.S is the chapter's `summary/` page (21.2), no lead, objectives, exercises or coverage; its paragraph first, then its chapter-level "Learning Objectives" box (with "Skill goals") kept verbatim as a block (12.S's precedent); a footnote that the Jablonski diagram it names is not drawn in this book |
| Start point | 13.1 |
| Unit of work | one section = one page, never folded |
| Loop | the chapter in one go, without per-section stops |
| Empty and stray pages | 13.E empty; none of the sections is empty or holds another page's text |
| Prose | verbatim; 13.7's objectives (two, no lead-in) to the tables; the "## References" lists of 13.3, 13.5, 13.7 and 13.14 and 13.4's Contributors URL to the section's `notes`; credits from the tags (13.1, 13.2, 13.5 Larsen; 13.7 "lowers"; 13.8 Simons; 13.11 Wikipedia; the summary Crabtree; the rest the book's); 13.11's "{\displaystyle …}" residue dropped |
| Headers | the book's `<h2>`/`<h3>` kept; the agent's for the intro, the opening blocks of 13.1, 13.2, 13.3, 13.6, 13.10, 13.11, 13.12, 13.1's closing block, 13.4 and 13.13 (proposals in `exploration.md`), through the humanizer by the builder |
| Boxed notes | kept verbatim as titled notes (13.2 two, 13.3 one, 13.5 one, 13.6 one with its spectrum, 13.7 three, 13.8 one); 13.12's pull-quote as an untitled emphasis note |
| Embeds | none |
| Printed labels | kept as printed: 13.2's two "Figure 13.2.3" (the fold keeps 13.2.1 + 13.2.3; "Figure 13.2.2" citations link to it, footnoted); "Table 13.10.2" (the first table); 13.13's unnumbered "Example: Evaluating vibrational transitions …" |
| Equation numbers | one per display, N.M.K, as the converter numbers them (`\nonumber` displays unnumbered); no explicit `\tag`s in this chapter |
| Repeated material | built once where the book first works it and cited after: 13.5.2 is 5.3.2's files (link `sim-taylor`, not shipped again); 13.5.1 kept as an image and linked to 5.3's `sim-morse`; 13.10.1 and 13.10.2 kept as images and linked to 12.10's `sim-water-modes` (footnote on the xz/yz planes); 13.13's example links 5.5's `ir-selection-rules`; 13.7's vertical transition links 10.4's `sim-franck`; 13.8's review note links 5.8–5.9; 13.4.1's rotor links 5.9's `sim-stretch` as the idea's first appearance |
| Figures | as the table in `exploration.md`: the travelling EM wave (13.1.1, moving, mathematical 3D); the spectrum with one photon in four units (13.1.2, still); the rovibrational spectrum built line by line from the ladders (13.2.1 + 13.2.3 folded, moving); the branches with B̃₁ < B̃₀ (13.3.1, still); the spinning non-rigid rotor (13.4.1, moving) and its sagging ladder and spectrum (13.4.2, still); overtones from a closing ladder (13.5.3 + 13.5.4, still); the vibronic wells, bands and convergence (13.6.1 + 13.6.2, still); the vertical transition and the packet set swinging (13.7.1, moving); the Franck–Condon progression against S (13.7.2–13.7.8 folded, still); the spheroid and the top's K ladder (13.8.1, still, mathematical 3D); the six CH₂ motions (13.9.1, moving, physical 3D); CO's normal coordinate (13.9.2, moving); PtCl₄²⁻'s nine modes (13.10.3, moving, physical 3D); the driven two-level system (13.11's two images folded, moving); kept: 13.5.1, 13.10.1, 13.10.2, the iodine spectrum, 13.14's water; not shipped: 13.3.2 and 13.9.1's GIFs ("with permission"); tables kept |
| 3D | mathematical: the 13.1.1 wave (orbit off the end-on views) and 13.8.1's spheroid (free orbit); physical: 13.9.1's CH₂ (orbit in front of the backbone) and 13.10.3's PtCl₄²⁻ (above the plane, ±70° below for the out-of-plane modes); no spin, no zoom anywhere |
| Model data | the book's numbers first (HCl ν̃₀ 2885.9, B̃ 10.4, D̃ 0.0004 cm⁻¹; Table 13.5.1's constants 2990.9 and 52.8 cm⁻¹ recovered from its own column; 13.7's 8000 and 1000 cm⁻¹ and S values; water's 3657, 3756, 1595 cm⁻¹); literature where the book has none, named in the figure's notes and flagged unchecked in `LOG.md`: HCl's α ≈ 0.31 cm⁻¹ (13.3.1) and I₂'s X and B constants (13.6) from Huber–Herzberg |
| Extra simulations | two offered (rule 15; orchestrator): a dipole during a vibration (13.14), the rotor's transition integrand (13.12) |
| Derivations | built: the R-, P- and Q-branch lines (13.2, printed); the most populated level J_max (13.2, score 6); the branch lines with B̃₁ ≠ B̃₀ (13.3, printed); the non-rigid rotor's levels (13.4, printed); the vibronic band and ν̃₀₀ (13.6, score 6); S₀₀ and S₀₁ (13.7, printed); the polyatomic vibrational energy (13.9, printed); the amplitude equations, c₂ and P₁₂ (13.11, scores 7); the rigid rotor's selection rules (13.12, printed); 13.13's chain links 5.5's; the rest kept as printed (table in `exploration.md`) |
| Corrections | root rule 13's footnotes, the book's words kept (list in `exploration.md`): chiefly 13.7's S₀₁ prefactor (√(α/2)) and the S-ratio note (I₁/I₀ = S), 13.11's c₂ and P₁₂, 13.12's missing x and (J + |M|), 13.6's v′ in (13.6.4), 13.3's backward spacing claims, 13.2's R/P wording and Q-branch reason, 13.8's I², lost kets and matrix elements, 13.10's ν numbering and "equivalent" stretches, 13.14's "two symmetric stretches" |
| Colour | one new type merged, `electric-field`, and `colours:default` rerun; also energy, wavenumber, frequency, wavelength, length, displacement, force, force-constant, mass, moment-of-inertia, angular-momentum, dipole-moment, operator, wavefunction, magnetic-field, angle, representation; quantum numbers (v, J, K, M), populations, amplitudes c_n, probabilities, S₀₀, S, χ̃_e and counts untyped and in ink; conventions: `F.el` for every atom; facts: photon and visible-band colours (13.1.2, 13.6, 13.7) |
| Symbols | 67 new (58 with macros), 188 variables rows (see `chapter.json`); 76 concepts, 126 edges; keys of earlier chapters reused where the quantity is the same (B_t, mu, J, v_q, nu_tilde, R_e, alpha, mu_T, Y_JM, H_v, N_v) |
| Licence | 13.1, 13.2, 13.5, 13.6 CC BY 4.0 pages shared as the book's BY-NC-SA 4.0; **13.11 and 13.12 CC BY-SA 4.0, kept BY-SA**; the rest BY-NC-SA; the summary untagged (the book's); figures as `exploration.md`'s licence table |
| `ai` and `built` | `ai` names the model and effort that wrote each part; `built` is the build date |

## Exercise count report and the choice it asks for

- **Inline exercises** (`box-exercise`): 3 printed; **0 keyed**; 3 unkeyed, available
  with AI solutions (2 compute: 13.1.1, 13.5.1; 1 explain: 13.5.2). Each stays in its
  own section.
- **Worked examples**: 3 (13.1.1 with its Solution; 13.9.1; 13.13's unnumbered one),
  kept whole; not exercises.
- **13.E**: empty, nothing routed; no other page holds this chapter's exercises.
- **In all**: 3 cards, 0 keyed, 3 unkeyed.
- **Proposed new: 14**, where the book leaves its concepts untested: 13.1 one, 13.2 two,
  13.3 one, 13.4 one, 13.6 one, 13.7 one, 13.8 one, 13.9 one, 13.10 one, 13.11 one,
  13.12 one, 13.13 one, 13.14 one (subjects in `exploration.md`); none for 13.5 (the
  book's two).

**The choice** (carried over from Chapter 1): the 3 unkeyed exercises kept with *AI
solutions*; *AI exercises* for the 14 proposed. Every exercise is an item of the
Exercises document (`place: end`).

## Decisions taken by the orchestrator

None yet; the open questions are at the end of the agent's report and in
`exploration.md` (marked *Orchestrator*).

## Decisions taken by the orchestrator (2026-11-08)

- **13.2's figure numbers**: one folded "Figure 13.2.1 + 13.2.3", with a footnote on the duplicate 13.2.3 and the missing 13.2.2. The three short R/P/Q blocks stay printed (12.8.1 precedent); the derivations the exploration scored at or above the bar are built.
- **Water's plane**: 13.10 and 13.14 link 12.10's `sim-water-modes`, with a footnote that 12.10 puts water in the xz plane where these sections use yz, so the labels B₁ and B₂ swap.
- **13.4.1**: link 5.9's stretching-rotor figure and keep the book's public-domain GIF as a photo. The second 13.4 figure (rigid against non-rigid ladder) is built.
- **13.11**: first-order curve only; no exact Rabi curve, since the book doesn't give it.
- **Extra simulations**: the dipole oscillating during a vibration (13.14) only.
- **Literature values from memory** (HCl α, I₂'s X and B constants) are named in the figures' notes and flagged in `LOG.md` as unchecked.
- **13.S's objective on Jablonski diagrams**: kept verbatim, with a footnote that the chapter doesn't cover them.
- **Captions** have no fixed length.
