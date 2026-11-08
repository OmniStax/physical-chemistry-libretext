# Config: Physical Chemistry (LibreTexts), Chapter 18

Proposed by the agent after the chapter exploration (2026-11-08). Status:
**agreed** on 2026-11-08: the user asked for Chapter 3 and the chapters after it to be built after accepting Chapter 1's defaults; Chapter 1's choices carry over (book exercises kept, AI solutions for unkeyed ones, AI exercises proposed where a concept would have none), and the loop runs without per-section stops.

| Setting | Value |
|---|---|
| Chapter | 18 Partition Functions and Ideal Gases: landing page 11814, sections 18.1–18.11 (13691–13699, 57614, 57608) all built; no summary page; 18.E (13690) is empty and not built |
| Stray and empty pages | none: every section holds its own text |
| Front matter | the landing page's paragraph is the chapter's `intro/` page (21.1), one block with a header of the agent's; no lead, objectives, exercises or concepts; the page has no thumbnail |
| Summary page | none (the book prints no 18.S); nothing goes to `summary/` |
| Start point | 18.1 |
| Unit of work | one section = one page, never folded |
| Loop | the chapter in one go, without per-section stops |
| Prose | verbatim; 18.9's three-item objectives box ("Goal", "Prerequisites", "Resources you will need") to `objectives` as printed; no section has a "## Summary"; 18.11's uncited References go to `notes`; credits: 18.1, 18.2, 18.4, 18.6, 18.8, 18.10 Tembe's IIT Bombay notes (as the page names them); 18.9 the author tag `tgrubbs` only (no name printed); 18.11 Sterkewolf, Tembe's notes, Sinha; 18.3, 18.5, 18.7 none printed (the book's); the intro the book's |
| Headers | the book's `<h2>` kept; the agent's for the intro, the openings of 18.3, 18.4, 18.7, 18.8, 18.9 and 18.11, and the headerless 18.1, 18.2, 18.5, 18.6 and 18.10 (proposals in `exploration.md`), through the humanizer by the builder |
| Boxed notes | 18.8's "Symmetry Number" kept as a titled note (its self-link pointed at 18.6); 18.8's "Classical Derivation (Optional)" becomes a derivation with that title as its header |
| Embeds | none (18.7.1 is an animated GIF, not an embed) |
| Printed labels | kept as printed: 18.6's "Table 1"; 18.5's exercise "table 18.2" (Table 18.4.1, footnote under the card); 18.2's raw "{\reference{3.24}}" ((18.2.2), linked and footnoted); 18.1's "\ref{times1}" and "\ref{sum1}" both resolve to (18.1.1) |
| Equation numbers | one per display, N.M.K, as the converter numbers them: (18.1.1)–(18.1.3), (18.2.1)–(18.2.2), (18.4.1)–(18.4.6), (18.5.1), (18.6.1)–(18.6.6), (18.7.1)–(18.7.2), (18.8.1)–(18.8.3), (18.9.1)–(18.9.7), (18.10.1)–(18.10.11), (18.11.1)–(18.11.7); 18.3 numbers nothing; every multi-row `align` one number |
| Repeated material | built once where the book first works it and cited after: q_trans (stated 17.5, derived 18.1, used 18.7, 18.11); Q = (q_trans q_vib q_rot q_elec)^N/N! (17.8 and 17.2; restated 18.3, 18.7); q_elec (18.2; 18.3, 18.7); q_vib (18.4; per mode 18.7; 18.11); the vibrational heat capacity (17.4's Einstein function; 18.4 for a diatomic, 18.7 per mode, 18.9 per mole); q_rot (described 18.5, derived 18.6, used 18.11); Θ_rot (18.5; 18.6, 18.8); C_v = (5/2)nR (18.5; 18.11 by equipartition); the Dulong–Petit law (17.4; 18.9); from earlier chapters the 3D box (3.9), the Gaussian integral (13.7), oscillator and rotor levels (5.2, 5.8), rotational populations and J_max (13.2), the tops (13.8), normal coordinates (13.9) and water's modes (12.10), fermions and bosons (8.5), nucleon spin (14.1), the two-spin singlet and triplet (14.7), ⟨E⟩ and C_V from q (17.3, 17.4, 17.8) |
| Figures | as the table in `exploration.md`: the vibrational ladder freezing out beside C̄_V,vib/R, the Cl₂ chart folded into 18.4.1 (still, molecule choice from Table 18.4.1); water's three modes moving with their ladders and factors (18.7.1, moving); H₂'s ortho and para ladders beside C_V,rot/R and N_o/N_p, with and without a catalyst (18.10.1, still); the diatomic C̄_V staircase on a log T axis (18.11.1, still); kept: the HCl rotational chart (18.5), its sentence linking 13.2's `sim-rovib` |
| 3D | none |
| Model data | the book's: Table 18.4.1 (Θ_vib, Θ_rot of eleven diatomics; H₂'s Θ_R = 87.6 K for 18.10), 18.6's Table 1, 18.7.1's wavenumbers, 18.11.1's CO and I₂; no literature values in any figure |
| Extra simulations | two offered: `sim-thermal-wavelength` (18.1, recommended), `sim-rotational-sum` (18.6, offered, not recommended) |
| Derivations | built: the translational partition function (18.1, printed); the vibrational partition function (18.4, printed); the vibrational heat capacity (18.4, printed, one line inserted); the rotational partition function (18.6, printed); the vibrational energy and heat capacity of a polyatomic gas (18.7, hidden, score 8); the spherical top (18.8, half hidden, score 5); the symmetric top (18.8, hidden, score 9); the classical asymmetric top (18.8, printed in its note); the rotational energy of a nonlinear molecule (18.8, hidden, score 6); the exchange parity of the rotational wavefunctions (18.10, printed); the ortho and para partition functions and their ratio (18.10, printed); the average energy per kind of motion (18.11, printed); the rest kept as printed (table in `exploration.md`) |
| Corrections | root rule 13's footnotes, the book's words kept (list in `exploration.md`): chiefly 18.1's Λ and q_trans and "10²⁰", 18.2's 10⁴ K and kT = 0.02 eV, 18.4's table units, NO's ω, N₂'s and HI's Θ_rot, 209.7 cm⁻¹ and the Cl₂ chart, 18.6's 8πI and r², 18.7's q², first C_V and water's Θ, 18.8's signs, T/q_rot and the symmetric top's π, 18.10's Legendre parities, (18.10.9) and (18.10.10), 18.11's sign; those resting on memory (NO's 121 cm⁻¹ level, NO₂'s Θ_vib, the improved q_rot, ¹⁶O₂'s odd J, CO₂ and NO₂ C_V) are checked by the builder first |
| Colour | no new type; temperature (Θ's), wavelength (Λ), heat-capacity, partition-function, energy, mass, length, volume, frequency, wavenumber, angle, angular-momentum, moment-of-inertia, force-constant, wavefunction, amount reused; degeneracies, σ, f_v, N_o, N_p, quantum numbers and counts untyped and in ink; facts: none; conventions: `F.el` for O and H in 18.7.1, and for the molecules' atoms where a figure draws them; referents: `ortho-h2` and `para-h2` (18.10) |
| Symbols | 86 new (68 with macros), 256 variables rows (see `chapter.json`); 58 concepts, 121 edges, 52 forms; 17's q_trans, q_rot, q_vib, q_elec, Q_sys, q_mol and `translational-partition-function` reused, not re-staged |
| Licence | every page CC BY-NC-SA 4.0; 18.10.1 (CC BY-SA 3.0, Gadolinist) under its own licence with credit; 18.11.1 public domain with its credit; the uncredited images under the page's licence |
| `ai` and `built` | `ai` names the model and effort that wrote each part; `built` is the build date |

## Exercise count report and the choice it asks for

- **Inline exercises**: **1 printed** (18.5.1); **1 keyed** (its Answer, an explanation),
  available now.
- **Worked examples**: 7, kept with their solutions (not exercises).
- **18.9's "Exercises"**: **5 printed**; **0 keyed**; **5 unkeyed**, available with AI solutions:
  3 compute (1, 2, 4: from specific heats and molar masses the reader looks up), 1 explain (3: the
  deviations and their causes), 1 prove (5: the limit (18.9.5)).
- **Placement**: 18.5.1 stays in 18.5; the five stay in 18.9. Kind `exercise` for all six (17's
  decision); `source_number` "Exercise 18.5.1", "Exercise 1" … "Exercise 5".
- **18.E**: empty; nothing routed.
- **In all**: 6 cards, 1 keyed, 5 unkeyed.
- **Proposed new: 12**: 18.1 one, 18.2 one, 18.3 one, 18.4 two, 18.5 one, 18.6 one, 18.7 one,
  18.8 one, 18.9 one, 18.10 one, 18.11 one (subjects and computed answers in `exploration.md`).

**The choice** (carried over from Chapter 1): the 5 unkeyed exercises kept with *AI solutions*;
*AI exercises* for the 12 proposed. Every exercise is an item of the Exercises document
(`place: end`).

## Decisions taken by the orchestrator

None yet; the open questions are at the end of the agent's report and in
`exploration.md` (marked *orchestrator*).

## Decisions taken by the orchestrator (2026-11-08)

- **18.9's lab exercises 1–4** (CRC specific-heat data): the AI solutions work the method on approximate CRC values, named in each solution as approximate and from memory, and flagged in `LOG.md` as unchecked.
- **Figure 18.4.1** folds the unnumbered Cl₂ population chart, with eyebrow "Figure 18.4.1" and both images in `originals`.
- **Forms belonging on Chapter 17 concepts** (V/Λ³ on `translational-partition-function`, (18.9.4) on `einstein-heat-capacity`, (18.9.7) on `dulong-petit-law`): Chapter 18's pass moves them into `ch17/book-rows.json`. Chapter 17 is built, so that's safe once its pass is done.
- **Memory-based corrections**: footnoted when they are standard textbook facts (¹⁶O₂ only odd J; NO's ²Π splitting near 121 cm⁻¹) or checked by computation, and flagged in `LOG.md`. The others (NO₂'s bend, the improved polyatomic q_rot terms, the CO₂/NO₂ heat capacities) are footnoted only if the builder can show them from the book's own numbers.
- **Symmetric-top derivation**: the builder checks the integral numerically before building, and corrects the π^{3/2} only if the check confirms it.
- **Staircase figure**: sums H₂'s rotation over all J; nuclear-spin weights stay in 18.10.
- **Extra simulations**: `sim-thermal-wavelength` (18.1) only.
- **Captions** have no fixed length.
