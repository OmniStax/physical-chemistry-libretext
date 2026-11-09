# Config: Physical Chemistry (LibreTexts), Chapter 26

Proposed by the agent after the chapter exploration (2026-11-08). Status:
**agreed** on 2026-11-08: the user asked for Chapter 3 and the chapters after it to be built after accepting Chapter 1's defaults; Chapter 1's choices carry over (book exercises kept, AI solutions for unkeyed ones, AI exercises proposed where a concept would have none), and the loop runs without per-section stops.

| Setting | Value |
|---|---|
| Chapter | 26 Chemical Equilibrium: landing page 11822, sections 26.1–26.12 (14522–14533) all built; 26.13 Homework Problems (14520) is the chapter's exercise page and is not built; no summary page |
| Stray and empty pages | 26.13: Chapter 4's uncertainty passage (Zielinski) and Exercise 26.13.1, which is 1.9's card `e3` (not routed again, 25.8's precedent); 26.9 is two paragraphs and still a page (root rule 11) |
| Front matter | none: the landing page prints no text, so no `intro/` page and no `intro` record (Chapters 4, 22, 24, 25's precedent); `ch26/intro/source.md` holds the title alone |
| Summary page | none (no 26.S); nothing goes to `summary/` |
| Start point | 26.1 |
| Unit of work | one section = one page, never folded |
| Loop | the chapter in one go, without per-section stops |
| Prose | verbatim; no objectives and no "## Summary" on any page; credits: none printed and no author tag |
| Headers | the book's `<h2>` kept as printed ("activities of pure condensed phases" lower-case, as printed); the agent's, through the humanizer by the builder, for the untitled openings: 26.1 ("Where a Reaction Ends"), 26.2 ("Equilibrium Constant and Temperature"), 26.3 ("Gibbs Energies of Formation", optionally "Ions in Aqueous Solution"), 26.4 ("Down to the Minimum"), 26.5 ("Which Way a Reaction Goes"), 26.6 ("Standard Conditions Are Not Reaction Conditions"), 26.7, 26.8 ("From Partition Functions to K"), 26.9, 26.10, 26.11 ("Equilibrium Constants in Activities"), 26.12 ("Weak Electrolytes" over the book's `###`) |
| Boxed notes | kept as titled notes: 26.2's "Note", 26.4's "Terminology" and "Think about it", 26.5's "Note"; 26.7's pull-quote as an untitled emphasis note (13.12 precedent) |
| Embeds | none |
| Printed labels | kept as printed: DeVoe's "Eq. 9.2.46", "Sec. 11.3.2", "Sec. 6.2", "Sec. 14.3.3", "Appendix H" in 26.3 with one footnote naming them another text's (25.2's Peverati precedent); 26.4's "Section 26.4" linked to 26.1 with a footnote; 26.11's "S&McQ 1083" and "Example 26-12" (McQuarrie and Simon's) as printed; 26.12's "CH 431/Lecture 17/answer2" left with its exercise as printed |
| Equation numbers | one per display, N.M.K, as the converter numbers them: (26.2.1)–(26.2.2), (26.4.1)–(26.4.2), (26.5.1)–(26.5.2), (26.7.1)–(26.7.3), (26.8.1)–(26.8.6), (26.10.1); 26.3's ten displays keep DeVoe's printed tags (11.8.20)–(11.8.31) (the converter's 4.S rule; see the open question); the rest unnumbered |
| Repeated material | built once where the book first works it and cited after: Δ_rG = Δ_rG° + RT ln Q (26.1; 26.4 cites), K = e^{−Δ_rG°/RT} (26.2; 26.3, 26.4, 26.7 cite), the van 't Hoff equation and its integrated form (26.2; 26.7 cites, its own result being the ln K–1/T line), the equilibrium constant's definition (26.2; 26.4's K_eq = P_B/P_A cites); from earlier chapters 22.2, 22.5–22.8 (fugacity: 22.8, its Sim cited by 26.10), 23.3, 23.5, 17.2, 17.8, 18, 19.11–19.12, 20.6, 21.2, 21.9, 24.1, 24.7–24.8, 25.6 |
| Figures | as the table in `exploration.md`: 411105 (26.1) kept, "= μ" corrected in the row's caption; Figures 26.4.1 + 26.4.2 folded (still: G(ξ) for A ⇌ B as line plus mixing, Δ_rG° and T sliders, minimum ξ_eq); `sim-q-toward-k` (26.5, moving: the state point rolls down G(ξ) of the NH₃ synthesis as Q walks to K); 26.7.1 replaced by `sim-van-t-hoff` (still: ln K against 1/T, Δ_rH° and Δ_rS° sliders, special at Δ_rH° = 0); 26.8's hot-linked Wikimedia image not shipped (cites 26.4's fold) |
| 3D | none |
| Model data | the book's: Δ_rG° = −32.9 kJ/mol (26.6) and Δ_fH°(NH₃) = −45.90 kJ/mol (26.2) for the NH₃ synthesis; 26.8.1's Θ_r, Θ_ν, D₀ table (Θ_ν rows swapped back) with molecular masses from the formulas; 26.12's K's and 1.173; from memory and **unchecked**, flagged in `LOG.md`: water's V̄ 18.07 cm³/mol (one AI exercise), graphite's density 2.26 g/cm³ (only to judge 26.11's 1.01), Δ_fG°(NH₃) −16.45 kJ/mol and HCl's ΔH°/ΔS° (only cross-checks) |
| Extra simulations | one optional: `sim-k-from-q` (26.8, still: the four log-ratios of 26.8.1 and log K_c against T; the electronic factor dominates); others judged and dropped (`exploration.md`) |
| Derivations | built, all printed: the reaction Gibbs energy from Q (26.1, dn_B corrected); the van 't Hoff equation (26.2); K for A ⇌ B + C from the extent (26.2); K in concentrations (26.2, short, score 4; optional); the Gibbs energy of formation of an ion (26.3); μ from q and K_c from partition functions (26.8, two records, `drv` to 23.5); the fugacity coefficient from Z (26.10, three lines corrected); the activity of a condensed phase under pressure (26.11); not built: 26.4's and 26.7's repeats (cite 26.1/26.2), 26.5's one move, 26.11's T_equilibrium, the iterations |
| Corrections | root rule 13's footnotes, the book's words kept (list in `exploration.md`): chiefly 26.1's dn_B; 26.4's "Section 26.4"; 26.6's kJ/(mol K) and O₂; 26.8's subscripts and **Example 26.8.1** (swapped Θ_ν, wrong masses, wrong combination: K_c = 7.2 × 10¹⁵, not 2.26 × 10¹¹); 26.10's chain (dμ, constant volume, the p/RT step, Z/∂p); 26.12's ionic strength line and "about 30%" (≈ 43%); 411105's "= μ" in the row |
| Colour | no new type; energy (Δ_rG, Δ_rG°, Δ_fG°, Δ_rH°, Δ_fH°, μ's, D₀), entropy (Δ_rS, Δ_rS°, S°), amount (ξ, ξ_eq, n), pressure (P's, f, f°, P′), temperature (T, T₁, T₂, T_equilibrium, Θ's), molar-volume (V̄), partition-function (q's) reused; K, Q, ν, c, a, γ, I, N, λ, ρ in ink; facts: none; conventions: none (no atom drawn; `sim-k-from-q`'s bars are categories, not species); referents: none proposed |
| Symbols | 45 new (24 with macros), 171 variables rows (see `chapter.json`); 38 concepts, 71 edges, 38 forms, merged after Chapter 25 |
| Licence | every page CC BY-NC-SA 4.0 except 26.4 and 26.5 (CC BY 4.0 at the source, shared BY-NC-SA) and 26.8 (CC BY-SA 4.0, shared BY-SA); Figures 26.4.1 and 26.4.2 (CC BY-NC 4.0, Ümit Kaya) shipped with credit; 411105 uncredited, under the page's licence; 26.7.1 ("used with permission of Wikipedia") not shipped, credited in `notes` |
| `ai` and `built` | `ai` names the model and effort that wrote each part; `built` is the build date |

## Exercise count report and the choice it asks for

- **Inline exercises**: **1 printed** (26.12's unnumbered box); **0 keyed** (its "answer2" pointer
  leads nowhere printed); **1 unkeyed**, available with an AI solution (compute: γ±² = 0.253 at I = 2.0,
  [H₃O⁺] = 1.99 × 10⁻⁷ mol/L, pH by activity unchanged at 7.00).
- **Example boxes without a solution**: **1 printed** (26.2's unnumbered NH₃ example); **0 keyed**;
  **1 unkeyed**, a question (Chapter 3's decision), AI solution (explain).
- **Inline questions**: **1 printed** (26.12's "Question" table, NaCl and acetic acid); **0 keyed**;
  **1 unkeyed**, a Try It with an AI solution (compute: x = 2.12 × 10⁻³ mol/L).
- **Worked examples**: **1** (26.8.1, with a Solution), kept whole as an example, corrected.
- **26.13 (the exercise page)**: **1 printed** (26.13.1); **0 keyed**; **not routed** (1.9's card `e3`).
- **In all**: **3 cards** from the book; **0 keyed**; **3 unkeyed** (2 compute, 1 explain).
- **Proposed new: 10**, one each on concepts the book leaves untested (subjects and computed answers in
  `exploration.md`): 26.1 (extent), 26.3 (K from Δ_fG°), 26.4 (equilibrium position of A ⇌ B), 26.5 (Q
  against K), 26.6 (Δ_rG > 0 with Δ_rG° < 0), 26.7 (integrated van 't Hoff), 26.8 (the electronic
  factor), 26.9 (log K_f), 26.10 (ln γ from Z), 26.11 (activity of water at 100 bar). Every answer
  *checked by computation*.

**The choice** (carried over from Chapter 1): the 3 unkeyed book items kept with *AI solutions*; *AI
exercises* for the 10 proposed. The exercise and the example-question go to the Exercises document
(`place: end`); 26.12's "Question" stays inline as a Try It (root rule 12).

## Open questions for the orchestrator

Only what Chapters 3–25's decisions do not settle:

1. **DeVoe's printed equation tags in 26.3** ((11.8.20)–(11.8.31), the first page of the book to print
   another text's tags with `\tag`). Proposed: keep them as printed (the converter's 4.S rule; the
   live page shows them; the prose's "Eq. 11.8.23" then resolves on the page), with the footnote on
   DeVoe's other references. Alternative: renumber (26.3.1)–(26.3.10) and link the prose's "Eq. 11.8.2x"
   to them, the same footnote saying so.
2. **Example 26.8.1** is wrong by four orders of magnitude (7.2 × 10¹⁵, not 2.26 × 10¹¹). Proposed: keep
   the example as printed with one footnote under it giving the corrected factors and K_c, and build
   `sim-k-from-q` (if picked) on the corrected numbers.
3. **Media names with an apostrophe**: the two 26.7.1 images were renamed in `media/ch26/` (`vant_Hoff`)
   and the drafts follow; `26.7/source.md` keeps the converter's `van't` name, since changing the
   converter's naming would rename Chapters 12, 20 and 24's media too (`Raoult's_Law…`,
   `…Mscichy,_Grajewo…`, `…Integral,_electronic.JPG`). The images do not ship anyway.

## Decisions taken by the orchestrator

None yet.
