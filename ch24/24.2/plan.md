# Plan: 24.2 The Gibbs-Duhem Equation Relates Chemical Potential and Composition at Equilibrium (LibreTexts 14504)

Source: `source.md`; draft deleted. Built 2026-11-09, Chapter 24 job. Three labelled equations
(24.2.1)–(24.2.3), one pull-quote, no figures, no exercises. Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

1. `gibbs-duhem-relation` **The Gibbs-Duhem relation** (ours): (24.2.1) stated, the derivation of (24.2.2) and (24.2.1). Introduces `gibbs-duhem-equation`.
2. `gibbs-duhem-for-binary-systems` (book's): the binary derivation; the pull-quote kept as an untitled note (13.12 precedent). Introduces `gibbs-duhem-binary`.
3. `gibbs-duhem-in-the-ideal-case` (book's): the ideal-case derivation. Introduces `ideal-solution-chemical-potential`, `raoult-both-components`.

## Figures

None (a chain of equations; the derivations are its figures).

## Exercises

One AI exercise (config): χ_A = 0.30, dμ_B = +12 J/mol → dμ_A = −28 J/mol (checked); tests gibbs-duhem-binary; at the end, `source_id` the binary header.

## Derivations

- `gibbs-duhem` · printed block, replaced; fact G = Σn_iμ_i links `24.1/scaling`; node note on "Vdp − sdT" · built.
- `gibbs-duhem-binary` · printed block, replaced (two nodes: the book's short route from (24.2.1) and its route from G) · built.
- `raoult-both` · printed block, replaced; the book's dropped dχ_B and sign followed by the correct line with node notes (rule 29.3, no footnote since the lines live in the derivation) · built.

## Wanted at chapter level

- A macro for `mu_B` (μ_B, J/mol, chemical-potential), so dμ_B wears the colour dμ_A (`\kmuA`) wears: symbols row `{"key": "mu_B", "tex": "\\mu_B", "macro": "\\kmuB"}`. The text and derivations write `\mu_B` plain until then.
