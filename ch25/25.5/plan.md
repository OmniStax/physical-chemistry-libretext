# Plan: 25.5 Electrolytes Solutions are Nonideal at Low Concentrations (LibreTexts 14517)

Source: `source.md`; draft from `python3 tools/md2html.py 25.5`. Status: built 2026-11-09 in the Chapter 25 job (config agreed, no review stop). CC BY-NC-SA 4.0. Equations (25.5.1)–(25.5.18); one worked example (25.5.1, no Solution part, kept whole); three notes; no figures, no objectives, no summary, no credits.

## Sub-concepts (page headers)

1. `opening` **Dissociation and charge** (ours, config's header): introduces `electrolyte-nonideality`, `salt-dissociation`; (25.5.1)–(25.5.2).
2. `thermodynamic-potentials-versus-the-diss` **Thermodynamic potentials versus the dissociation** (book's): introduces `salt-chemical-potential`, `mean-ionic-activity`; (25.5.3) printed; (25.5.4)–(25.5.9) become `drv-salt-activity-ions`; (25.5.10), the definition of a±, the note.
3. `activity-coefficients` **Activity coefficients** (book's): introduces `ionic-activity-coefficients`, `ion-molalities`, `mean-ionic-molality`, `salt-activity-mean-quantities`; reinforces 24.7's `mean-ionic-activity-coefficient`; (25.5.11)–(25.5.16) printed, (25.5.17)–(25.5.18) become `drv-salt-activity-mean`; two notes; Example 25.5.1.
4. `measuring-mean-ionic-activity-coefficien` **Measuring mean ionic activity coefficients** (book's): introduces `mean-ionic-gamma-from-vapor-pressure`; "the sucrose problem" is an `xref` to `24.7-non-volatile-solutes`.

## Figures

None. A Sim for the bookkeeping was judged and dropped in the exploration (nothing varies that the example does not already show).

## Exercises

`a1` (AI, config): CaCl₂ at 0.010 mol/kg with γ± = 0.73: m± = 0.0159 mol/kg, a₂ = 1.56 × 10⁻⁶ (checked by computation). Tests `mean-ionic-molality`, `salt-activity-mean-quantities`.

## Derivations

- `salt-activity-ions` (printed block, (25.5.4)–(25.5.9)): "Derivation · the activity of a salt from its ions"; facts (25.5.3)–(25.5.7); results (25.5.8), (25.5.9). (25.5.6)'s μ₋° is followed by the correct μ₊° with a node note. (25.5.3) stays printed above it, as it introduces the block; the connecting phrases ("To do so, we write", "This implies", "where", "If we substitute…", "Taking the exponent…") are carried by the derivation.
- `salt-activity-mean` (printed, (25.5.17)–(25.5.18), three moves): "Derivation · the activity of a salt from its mean ionic quantities"; facts (25.5.9) with `drv` to the first, the a± definition, (25.5.11), (25.5.12), (25.5.15), (25.5.16). The exploration named one record from (25.5.3) to (25.5.18); it is split in two because the definitions it rests on are printed between, in another block.
- ln γ± from φ: stays (a needed fact is printed nowhere; exploration).

## Corrections

`c-cl-minus` (Cl⁺), `c-integrand` ([φ − 1]m′ for (φ − 1)/m′); the (25.5.6) slip as a node note.

## Wanted at chapter level

- forms row: `{"id": "gamma-pm-nu", "concept": "mean-ionic-activity-coefficient", "section": "25.5", "tex": "γ_{\\pm}^ν = γ_+^{ν+}γ_-^{ν-}"}` (config: the (25.5.16) form on Chapter 24's concept).
