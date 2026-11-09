# Plan: 21.1 Entropy Increases with Increasing Temperature (LibreTexts 14476)

Source: `source.md` (`python3 tools/convert.py 21.1`); draft from `python3 tools/md2html.py 21.1` (deleted once built).
Status: built 2026-11-08 in the Chapter 21 job, without a review stop (config: the chapter in one go).

One objective; no numbered displays, figures or summary; Example 21.1.1 printed with no solution. No credits
printed. Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

1. `entropy-versus-temperature` **Entropy versus temperature** (book's `<h2>`, covering the page, with its `<h3>`
   "Entropy and heat capacity" kept). Introduces `fundamental-equation-u`, `natural-variables-u`,
   `entropy-change-constant-volume`, `entropy-increases-with-temperature`, `fundamental-equation-h`,
   `entropy-change-constant-pressure`. Uses the first law, entropy, U, C_V, H, C_P.

## Figures

None in the book; none proposed.

## Exercises

- `e1` Example 21.1.1 (unkeyed; five steps, no solution), kind `exercise`, open, AI solution (dS = (C_V/T)dT +
  (1/T)[(∂U/∂V)_T + P]dV), Analyze. Removed from the text (Chapter 3's decision for unsolved examples).
- Problem 1 of 21.E (unkeyed; ΔS = nC̄_P ln(293.15/343.15) = −131.8 J/K, computed): **held out**, see Wanted. The
  ready record is in the scratchpad (`e2-held.json`) and below.

## Derivations

Four, all printed (the config's three, with the constant-pressure block split at the book's own paragraph on the
natural variables of H, so that paragraph stands between them and nothing is shown twice):
- `fundamental-equation-u` "the fundamental equation for U": facts the first law (19.1), δq_rev = TdS (20.2),
  δw_rev = −PdV (19.2). Replaces the four displays and the sentences between them; the inequality stays printed.
- `entropy-change-constant-volume`: two nodes (dV = 0; C_V = (∂U/∂T)_V, 17.4.1). Replaces "At constant volume"
  through the integral.
- `fundamental-equation-h`: H = U + PV (19.8), the product rule, dU (drv). Node note: the book's "+ VP" is V dP.
- `entropy-change-constant-pressure`: two nodes; the inserted line dH = TdS at constant P carries the note on the
  book's repeated "dH = TdS + VdP"; C_P = (∂H/∂T)_P (19.9).
The book's "C_P = dH/dT" and "(dU/dT)_V" are replaced by the facts' partial derivatives (no footnote).

## Corrections

None as footnotes (the two garbled lines live in derivations, as node notes). As printed: "This equality".

## Wanted at chapter level

- **Problem 1 of 21.E** (routed here by the config) cannot pass `checkSources`: its text is only in
  `ch21/exercises/source.md`, which no built section owns, and `source_section` must name a built section. Either
  the checker reads a chapter's `exercises/source.md` for `source_section: "21.E"` (tool change), or the
  orchestrator decides another route. Record to add once allowed (kind exercise, Apply, place end, cite
  `entropy-versus-temperature`, concept `entropy-change-constant-pressure`):
  `source_id` "Liquid water has a nearly constant molar heat capacity", `source_number` "Problem 1", answer number
  −131.8 J/K, `generated_by: "ai"`, solution n = 200./18.015 = 11.10 mol, ΔS = nC̄_P ln(T₂/T₁) =
  (11.10)(75.4) ln(293.15/343.15) = −131.8 J/K.
