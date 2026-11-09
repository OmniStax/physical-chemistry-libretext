# Plan: 25.7 Extending Debye-Hückel Theory to Higher Concentrations (LibreTexts 14519)

Source: `source.md`; draft from `python3 tools/md2html.py 25.7`. Status: built 2026-11-09 in the Chapter 25 job (config agreed, no review stop). CC BY-SA 4.0 (shared BY-SA). One numbered equation (25.7.1, the repeat of (25.6.1)); Figure 25.7.1; no examples, notes, objectives, summary or credits.

## Sub-concepts (page headers)

1. `opening` **Where the theory fails** (ours, config's header in sentence case): introduces `debye-huckel-assumptions`, `bjerrum-length`; the link to the limiting law is an `xref` to `25.6-ionic-strength`.
2. `extended-debye-h-ckel-equation` **Extended Debye-Hückel Equation** (book's): reinforces 25.6's `extended-debye-huckel-equation`, `distance-of-closest-approach`; "\ (A\)" written $A$.
3. `davis-equation` **Davis Equation** (book's, as printed): introduces `davies-equation`; the stray caption line kept; Figure 25.7.1.
4. `pitzer-equations` **Pitzer Equations** (book's): introduces `pitzer-equations`; the empty paragraph deleted.
5. `specific-ion-interaction-theory` **Specific ion interaction theory** (book's): introduces `specific-ion-interaction-theory`.

## Figures

- `sim-activity-coefficients` · Figure 25.7.1 · extended-debye-huckel-equation, davies-equation, debye-huckel-assumptions · variation by slider and choice: the reader sees the three equations leave √I = 0 on one slope and separate, the ion size lift the extended curve and higher charges plunge, which the book's single Davies plot cannot show · arrows: none · still: no time in it · choice |z₊z₋| 1–4; I slider 0–0.49 mol/L (untyped, detents 0.001, 0.01, 0.1, default 0.100: the exercise's 0.690 / 0.754 / 0.785 on load); a slider 3–9 Å (length, the book's 3 and 9 as detents) · headline: the three γ± at the live I · graph alone: log γ± against √I, fixed 0–0.7 by −0.6–0 (higher charges leave the frame, markers pinned), KBr's points from Figure 25.6.2 shown for |z₊z₋| = 1; curves in `F.cat` colours, limiting law dashed; legend · 2D. Original kept (CC BY-SA 4.0, PChemiker); its "Semi-log" caption corrected in a figure footnote.

Extra simulations: none.

## Exercises

`a1` (AI): 0.10 M NaCl by the three equations, 0.690, 0.754, 0.785, and which to trust (checked by computation).

## Derivations

None qualify (Davies → DH is one move; Pitzer and SIT print no chain).

## Corrections

`c-mu-ionic` (μ for I), `c-fig-semilog` (figure footnote). "Davis", "ε and b", "Mg²⁺SO²⁻4" as printed.

## Wanted at chapter level

None.
