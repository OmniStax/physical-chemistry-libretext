# Plan: 4.3 Observable Quantities Must Be Eigenvalues of Quantum Mechanical Operators (LibreTexts 13408)

Source: `source.md` (`python3 tools/convert.py 4.3`); draft from `python3 tools/md2html.py 4.3`.
Status: built 2026-11-08 in the Chapter 4 job, without a review stop (config: the chapter in one go).

Two objectives, one numbered figure (4.3.1) and two unnumbered images in a note, eleven numbered
equations (4.3.1–4.3.11), three notes (Postulates III and IV; Collapsing the Wavefunction), one worked
example, no exercise. Licence CC BY-NC-SA 4.0; authors Richard Fitzpatrick and Wikiversity.

## Sub-concepts (page headers)

The book's two `<h2>` are kept; the opening gets one of ours:

1. `eigenvalue-equations` **Eigenvalue equations**: Ĥ (4.3.1), Ĥψ = Eψ (4.3.2), eigenvalue equation, eigenfunction, eigenvalue, Postulate III (4.3.3), eigenstates (4.3.4), the derivation of zero variance. Introduces `eigenstate-zero-variance`.
2. `expectation-values` **Expectation Values** (book's): (4.3.5)–(4.3.8), Postulate IV, the variance derivation ending in (4.3.9), Figure 4.3.1, Example 4.3.1. Introduces `expectation-value-unnormalized`, `variance`.
3. `expanding-the-wavefunction` **Expanding the Wavefunction** (book's): complete set, ψ = Σcᵢφᵢ, (4.3.10), (4.3.11), Σ|cᵢ|² = 1, the expansion derivations, the expansion Sim, the collapse note with its figure. Introduces `complete-set`, `expansion-coefficients`, `expansion-normalization`.

## Figures

- `sim-sigma` · Figure 4.3.1 · variance, quantum-uncertainty · variation by slider and choice: the share of measurements in each one-σ band is read off the density, and switching to the box's states shows the shares are the normal curve's only for a normal curve · arrows: none · still · choice normal / box ψ₁ / box ψ₂ (Example 4.3.1's states), slider σₓ (length, detent 1) for the normal curve · headline: the share within ±σ of ⟨x⟩ · graph alone, ⟨x⟩ and σ bracket in the length hue · 2D. Opens on the book's normal curve (34.1, 13.6, 2.1 %). Original shipped, CC BY 2.5, credit corrected by a figure footnote.
- `sim-expansion` · Sim (config: the orchestrator picked "a state built from eigenstates") · complete-set, expansion-coefficients, expansion-normalization · variation by slider: the partial sum closes in on the state as terms are added and the bars of |cᵢ|² fill toward 1 · arrows: none · still: the number of terms is the variable · choice tent / lopsided lump, slider N (1–20, opens on 3) · headline: the share of the state the first N terms carry · state and partial sum left, bars right · 2D.
- `sim-collapse` · Figure (the note's two unnumbered images, folded, both in `originals`) · wavefunction-collapse, eigenstate · flow by animation: three systems prepared alike are measured one after another; the spread density collapses onto a different place each time while a position eigenstate gives the same x every time · arrows: the book's process arrows are symbolic, dropped · moving: three measurements of 2 s each, held 1.2 s; the three results of the spread state are fixed draws (−1.20, 0.70, 0.15) so each time has one state · choice spread / position eigenstate · headline: which measurement fired and where · graph, results strip below · 2D, not 3D (config: the book's surfaces are perspective for a one-axis lesson).

## Exercises

None printed. Two AI exercises (config): `a1` Ψ = √(1/3)ψ₁ + √(2/3)ψ₂ in a box, the probabilities of E₁ and E₂ and ⟨E⟩ = 3E₁ (`multi`, computed); `a2` e^{ikx} is an eigenstate of p̂ₓ with zero variance (`open`).

## Derivations

- `eigenstate-spread` · *an eigenstate has no spread* · score 5 · built, replacing the three unnumbered blocks (their linking phrases are carried by the facts).
- `variance` · *the variance as ⟨x²⟩ − ⟨x⟩²* · score 7 · built, replacing the display; (4.3.9) on the result.
- `example-4-3-1-a`, `-b`, `-c` · *Example 4.3.1* · score 7 · built as three records, one under each of the book's Solution a–c headers so the book's lead-in sentences stay; (b) and (c) name Examples 3.7.3 and 3.7.2 in `source` (orchestrator). (b)'s sign and (c)'s K̂ corrected in node notes.
- `expansion` · *Derivations · the expansion coefficients* · scores 6 and 7 · built after the paragraph that completes it, two results: (4.3.11) and Σ|cᵢ|² = 1.

## Corrections

Footnotes: ⟨ψ|a|ψ⟩ for ⟨ψ|Â|ψ⟩ in (4.3.7) and (4.3.8); "Equations 4.3.8 and 4.3.10" twice; "complete orthonormal set of eigenvalues"; Figure 4.3.1's credit (figure note). In derivation notes: Example 4.3.1 (b) 2iħπ/L², (c) K̂. Left as printed (grammar, meaning clear): "The expectation of value A", "where used", "can be expand", "to specifies", "may in quantized values", "If you wavefunction", "wavefuction", "functionals".

## Wanted at chapter level

None.
