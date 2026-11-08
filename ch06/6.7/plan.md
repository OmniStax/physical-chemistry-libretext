# Plan: 6.7 The Helium Atom Cannot Be Solved Exactly (LibreTexts 13432)

Source: `source.md` (`python3 tools/convert.py 6.7`); draft from `python3 tools/md2html.py 6.7`.
Status: built 2026-11-08 in the Chapter 6 job, without a review stop (config: the chapter in one go).

Three objectives, one numbered figure (replaced), nine numbered equations (6.7.1–6.7.9), one note,
two inline exercises (one keyed). Licence CC BY-NC-SA 4.0.

## Sub-concepts (page headers)

The book's two `<h2>` headers are kept; the section opens on the first.

1. `multi-electron-hamiltonians` **Multi-electron Hamiltonians**: Figure 6.7.1, (6.7.1)–(6.7.7). Introduces `multi-electron-hamiltonian`, `electron-electron-repulsion`; uses `hamiltonian-operator`, `coulomb-potential`, `kinetic-energy-operator`, `potential-energy-operator`.
2. `multi-electron-wavefunctions` **Multi-electron Wavefunctions and the Orbital Approximation**: the multi-electron wavefunction, p(V), the normalization, the note (6.7.8)–(6.7.9). Introduces `multi-electron-wavefunction`, `multi-electron-not-separable`, `orbital-approximation`.

## Figures

- `sim-helium` · Figure 6.7.1 · electron-electron-repulsion, multi-electron-hamiltonian, multi-electron-not-separable · variation by drag: V₁ and V₂ each follow one electron while V₁₂ answers either, which is the reason the equation does not separate; the book's GIF shows positions only · arrows: none · still: positions are the idea, nothing has a time · four sliders x₁, y₁, x₂, y₂ in a₀ (length), each pair a drag point (`F.drag`); opens at (−1.4, 0.6) and (1.0, 1.2) a₀ (the book gives no numbers) · headline: r₁₂ and V₁₂ live · graph beside: the plane on one scale left (110 units per a₀), bars V₁, V₂, V₁₂ right on a fixed −120 to +60 eV scale, cut at the frame with the number still printed · 2D. Referents electron 1 and electron 2 (config): the electrons' labels and their V bars wear the referent colours, V₁₂ the energy colour; the bodies are `F.el('e-')`, the nucleus `F.el('He')`. The electrons are labelled although they move, because they move only under the reader's drag and must be told apart; r₁, r₂, r₁₂ carry hover names. Readout (6.7.3)–(6.7.5) with r in pm and V in J and eV, one per line.

## Exercises

Exercise 6.7.1 (unkeyed: AI solution, open), Exercise 6.7.2 (keyed, open, the book's answer with three corrections under the card: the i ≠ j double count, the sign of the expanded attraction terms, the B⁺ title). Both at the end.

## Derivations

None: the Hamiltonians are written down (exploration, score 0).

## Corrections (footnotes)

(6.7.7)'s sum over i ≠ j counts each pair twice; "(Equation 6.7.1)" for (6.7.2); ∫|ψ|²dτ = n; the key of 6.7.2 (three notes). Typos ("Hamilitonian", "we we", "with n electron") are left as printed.

## Wanted at chapter level

- variables `ref` (6.7): `r_1` → `ref: "electron-1"`, `r_2` → `ref: "electron-2"`, `V_1` → `ref: "electron-1"`, `V_2` → `ref: "electron-2"` (the quantities of the two referents, root 7.3).
- form anchors: `helium-hamiltonian`, `multi-electron-hamiltonian`, `electron-repulsion` → `anchor: "6.7-multi-electron-hamiltonians"`; `orbital-approximation`, `orbital-energy-sum` → `anchor: "6.7-multi-electron-wavefunctions"`.
