# Plan: 19.13 The Temperature Dependence of ΔH (LibreTexts 13711)

Source: `source.md` (`python3 tools/convert.py 19.13`); draft from `python3 tools/md2html.py 19.13`.
Status: built 2026-11-08 in the Chapter 19 job, without a review stop (config agreed).

No objectives, no figures, five numbered equations (19.13.1–19.13.5), Table 19.13.1, two worked
examples (19.13.1, 19.13.2, the second with its own C_p table). Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

The page has no header; two blocks of ours:

1. `kirchhoffs-law` **Kirchhoff's law**: dH = C_p dT, (19.13.1), (19.13.2), the empirical fit
   (19.13.3), the derivation of (19.13.4)–(19.13.5), Table 19.13.1, Example 19.13.1. Introduces
   `kirchhoffs-law`, `heat-capacity-empirical-fit`, `enthalpy-change-from-fit`.
2. `reaction-enthalpies` **Reaction enthalpies at other temperatures**: the reaction form,
   Example 19.13.2. Reinforces `kirchhoffs-law`.

## Figures

None (a Kirchhoff plot was judged and dropped in the exploration: the examples are substitutions).

## Exercises

`a1` (AI, compute): 1 mol N₂ from 298 to 400 K with Table 19.13.1, ΔH = 3.01 kJ (checked: 2915.2 +
134.2 − 42.8 = 3006.6 J).

## Derivations

- `enthalpy-from-fit` (printed with words, 3 moves): *Derivation · enthalpy change from the
  empirical heat capacity*, replacing "(19.13.4) Solving the definite integral yields (19.13.5)"
  after the lead-in "After combining Equations 19.13.3 and 19.13.1, …"; facts (19.13.1) with the
  corrected limits (node note) and (19.13.3); results (19.13.4), (19.13.5). (19.13.1)–(19.13.3)
  stay printed, since the text names them.
- Examples 19.13.1, 19.13.2: substitutions, stay (footnoted).

## Corrections

`limits` ((19.13.1)'s ∫ from T₂); `cite-fit` (second "Equation 19.13.1" means 19.13.3);
`lead-numbers` (a = 22.14 vs 22.13; terms 293.5 and 79.7, total 2143.6 J/mol, checked); `dT`
(ΔC_p ΔT for ΔC_p dT); `per-mole` (Example 19.13.2: −47.81 kJ/mol per NH₃, −95.63 kJ as written,
checked). "−46110 + J/mol" left as printed.

## Wanted at chapter level

- forms row `kirchhoff-integral` (concept `kirchhoffs-law`, 19.13): its latex copies the book's
  slip `\int_{T_2}^{T_2}`; set it to `\Delta H = \int_{T_1}^{T_2} C_p\, dT`.
