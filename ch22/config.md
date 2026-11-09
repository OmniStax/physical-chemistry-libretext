# Config: Physical Chemistry (LibreTexts), Chapter 22

Proposed by the agent after the chapter exploration (2026-11-08). Status:
**agreed** on 2026-11-08: the user asked for Chapter 3 and the chapters after it to be built after accepting Chapter 1's defaults; Chapter 1's choices carry over (book exercises kept, AI solutions for unkeyed ones, AI exercises proposed where a concept would have none), and the loop runs without per-section stops.

| Setting | Value |
|---|---|
| Chapter | 22 Helmholtz and Gibbs Energies: landing page 11818, sections 22.1–22.8 (14488–14495) all built; no summary page; no 22.E page |
| Stray and empty pages | none: every section holds its own text (22.6 is one paragraph and stays a page, root rule 11) |
| Front matter | none: the landing page prints no text (only the site's list of sections), so there is no `intro/` page and `chapter.json` has no `intro` record (Chapter 4's precedent) |
| Summary page | none; 22.2's closing "## Summary" goes to its `summary_html` |
| Start point | 22.1 |
| Unit of work | one section = one page, never folded |
| Loop | the chapter in one go, without per-section stops |
| Prose | verbatim; no objectives on any page; 22.2's Summary (its table, Note list and closing sentence) to `summary_html`; 22.5's References to `notes`, its superscript citations kept; credits: 22.3 the author tag `flemingp` only (18.9's precedent), 22.5 Andreana Rosnik, 22.8 Jerry LaRue and Michael Adewumi (tags), the other five none (the book's) |
| Headers | the book's `<h2>` and `<h3>` kept; the agent's for the openings of 22.1, 22.2, 22.3, 22.5 and 22.7 and the headerless 22.4, 22.6 and 22.8 (two blocks) (proposals in `exploration.md`), through the humanizer by the builder |
| Boxed notes | 22.2's emphasis box and "Note", 22.7's emphasis box on H(0), kept as notes the way the book prints them |
| Embeds | none |
| Printed labels | kept as printed: 22.3's "Table 6.2.1" (Table 22.3.1: `xref`, footnote) and "Chapter 4" (footnote); 22.4's "As we showed above" (`xref` to 22.3); 22.5's "Equation three" and "in step 2"; 22.7's "Fig. 22.7 in the book" (McQuarrie and Simon's; footnote) |
| Equation numbers | one per display, N.M.K, as the converter numbers them: (22.1.1), (22.3.1)–(22.3.8), (22.4.1)–(22.4.2), (22.5.1)–(22.5.6), (22.7.1)–(22.7.3), (22.8.1); 22.2 and 22.6 number nothing; every multi-row `align` one number |
| Repeated material | built once where the book first works it and cited after: dU = TdS − PdV and dH = TdS + VdP (21.1; restated 22.3, 22.5), dA (22.1; 22.5), dG (22.2; 22.4, 22.5, 22.8), the Maxwell relations (22.3's table; A's and G's worked in 22.5, G's used in 22.4), (∂G/∂T)_P = −S (21.3 for Ḡ; 22.4 with (∂G/∂P)_T = V; 22.5), (∂H/∂P)_T for an ideal gas (22.4; Exercise 22.5.4), H(T) and S(T) from heat capacities (19.9, 21.5; restated 22.7), Δ_trs S = Δ_trs H/T_trs (21.3; 22.7), the natural-variables table (22.2's summary; 22.5), the Clausius inequality (20.4; 22.1), the entropy of mixing (20.6; 22.1's example), inexact differentials (19.4; 22.5) |
| Figures | the book prints none; three Sims, all still and 2D (table in `exploration.md`): `sim-gibbs-sign` (22.2, recommended), `sim-fugacity-coefficient` (22.8, recommended), `sim-gibbs-temperature` (22.7, offered: needs literature data) |
| 3D | none |
| Model data | the book's: 22.2's ΔH = −176.2 kJ and ΔS = −0.285 kJ K⁻¹; 16.2's Table 1 van der Waals constants (N₂, CH₄, C₂H₆) and 16.3.2's CO₂; benzene's transition data for `sim-gibbs-temperature` only if it is built (literature, named in the caption, flagged in `LOG.md`) |
| Extra simulations | the three above are the chapter's only figures; nothing further offered |
| Derivations | built: the Helmholtz criterion (22.1, printed, one line inserted); the Gibbs criterion (22.2, hidden, score 5); ΔG as the maximum non-PV work (22.2, printed, sign noted); the Maxwell relations from U and H (22.3, printed); Example 22.3.1 (22.3, printed, target corrected); the pressure dependence of the enthalpy (22.4, printed, −V noted); the Maxwell relations from A and G (22.5, printed and hidden, score 4); the Gibbs–Helmholtz equation (22.7, printed); the rest kept as printed (table in `exploration.md`) |
| Corrections | root rule 13's footnotes, the book's words kept (list in `exploration.md`): chiefly 22.2's −PdV, 22.3's dw, dV and Example 22.3.1's (∂V/∂T)_p and lost T, 22.4's −V, 22.5's "+" in the cross derivative, 22.8's "0 = μ̄° + RT ln f/P°"; 22.8's "1905" (from memory, unchecked) only after the builder checks |
| Colour | no new type; energy (U, H, A, G, μ, Ḡ), entropy, heat, work, heat-capacity, pressure (P, p, f, P°), temperature, volume, amount reused; α, κ_T, κ, φ, y₁, y₂ and R untyped and in ink; facts: none; conventions: none; referents: none |
| Symbols | 21 new (17 with macros), 84 variables rows (see `chapter.json`); 41 concepts, 67 edges, 43 forms; 21.1's `fundamental-equation-u`, `natural-variables-u`, `fundamental-equation-h` and 19.4's `exact-and-inexact-differentials` reused, not duplicated |
| Licence | every page CC BY-NC-SA 4.0; no images |
| `ai` and `built` | `ai` names the model and effort that wrote each part; `built` is the build date |

## Exercise count report and the choice it asks for

- **Inline exercises (22.5)**: **6 printed**; **4 keyed**, available now (22.5.1, 22.5.2,
  22.5.3, 22.5.4: three explanations and one result with its reason); **2 unkeyed**, available with AI
  solutions, both **prove**: the unnumbered "What does Equation three mean for the heat capacity?"
  (printed answer the placeholder "answer") and 22.5.5 (the Clapeyron equation; printed answer "See
  the third outside link", which the page does not print).
- **Worked examples**: 3, kept with their reasoning (not exercises).
- **Placement**: 22.5.3 → 22.3, 22.5.4 → 22.4, 22.5.5 → 23.3 (held for Chapter 23); 22.5.1,
  22.5.2 and the unnumbered one stay in 22.5. Kind `exercise` for all; `source_number` "Exercise
  22.5.1" … "Exercise 22.5.5" and "Exercise".
- **22.E**: no such page; nothing else routed.
- **In all, in Chapter 22**: 5 cards, 4 keyed, 1 unkeyed (22.5.5 counted with 23.3).
- **Proposed new: 9**: 22.1 one, 22.2 one, 22.3 one, 22.4 one, 22.6 one, 22.7 two, 22.8 one
  (subjects and computed answers in `exploration.md`).

**The choice** (carried over from Chapter 1): the unkeyed exercises kept with *AI solutions*; *AI
exercises* for the 9 proposed. Every exercise is an item of the Exercises document (`place: end`).

## Decisions taken by the orchestrator

None yet; the open questions are at the end of the agent's report and in `exploration.md`.

## Decisions taken by the orchestrator (2026-11-09)

- **No intro page, summary or exercises page** (none at the source).
- **Sims**: `sim-gibbs-sign` (22.2) and `sim-fugacity-coefficient` (22.8). `sim-gibbs-temperature` is not built, since it would need benzene data from memory.
- **22.5.5's key** ("See the third outside link", with no link printed): counted as unkeyed, with an AI solution and a footnote on the pointer. It is routed to 23.3.
- **μ, Ḡ and μ̄** are typed `energy`; no new type.
- **21.3's `gibbs-temperature-derivative`**: Chapter 22's pass adds its edge from 22.2's `gibbs-energy`.
- **Lewis's fugacity date**: no footnote, since the date can't be checked here.
- **Captions** have no fixed length.
