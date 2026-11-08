# Plan: 5.7 Hermite Polynomials are either Even or Odd Functions (LibreTexts 13421)

Source: `source.md` (`python3 tools/convert.py 5`); draft from `python3 tools/md2html.py 5.7`.
Status: built 2026-11-08 in the Chapter 5 job, without a review stop (config agreed). Licence CC BY-SA 4.0 (the page's tag).

Two objectives, one numbered figure (six panels) and a cited, unprinted Figure 5.7.2, five numbered equations
(5.7.1–5.7.5), two worked examples, one table, two notes, no exercise of its own.

## Sub-concepts (page headers)

1. `opening` **Hermite's polynomials** (agent's header): the history, Figure 5.7.1, the note "Generating Formula" (5.7.1). Introduces `hermite-recurrence`; uses `hermite-polynomials`.
2. `hermite-polynomials-are-symmetric` **Hermite Polynomials are Symmetric** (book's): even, odd, Figure 5.7.2, the product rules, Table 5.7.1, (5.7.2). Introduces `even-function`, `odd-function`, `parity-product-rules`, `hermite-parity`.
3. `integration-over-symmetric-functions` **Integration over Symmetric Functions** (book's): the derivation, Example 5.7.1. Introduces `symmetric-interval-integrals`.
4. `hermite-polynomials-are-orthogonal` **Hermite Polynomials are Orthogonal** (book's): (5.7.4), (5.7.5), Example 5.7.2. Introduces `hermite-orthogonality`; reinforces `orthogonality`.
5. `concluding` **Concluding** (book's). Reinforces `symmetric-interval-integrals`, `parity-product-rules`.

## Figures

- `sim-parity` · Figure 5.7.1 · hermite-parity, hermite-polynomials · variation by choice: H_n beside its mirror image H_n(−x), so parity is seen as two curves that coincide or flip, which six separate panels do not show · arrows: none · still: a polynomial has no time · choice n 0–7, opening on 3 · headline: H_n is even/odd and what its mirror image does · graph alone, y range per n (the book scales each panel too) · 2D. Colours: two `F.cat` instances (H_n and its mirror), no type.
- `sim-parity-integral` · Figure 5.7.2 (the book cites it and prints none; orchestrator: it carries the number, a correction note says the book's is missing) · even-function, odd-function, parity-product-rules, symmetric-interval-integrals · variation by choice and slider: the book's x², cos x, x³, sin x, x³ + 1 multiplied in pairs, the product's two halves over [−a, a] shaded and added in the readout · arrows: none · still · dropdowns f and g (x³, cos x on load), slider a 0.5–2 · headline: the product's parity and what its halves do · two graphs stacked · 2D.

## Exercises

- `e1` Exercise 5.5.1, held here from 5.5 (it needs the recurrence relation), AI solution; tests `ir-selection-rules`, `hermite-recurrence`.
- `a1` (AI): H₂–H₄ from the recurrence, H₃(1) = −4, H₄(1) = −20. `a2` (AI): which of three integrals vanishes by parity (only ∫ψ₀xψ₂). Both at the end.

## Derivations

- `symmetric-integrals` · *Derivations · integrals over a symmetric interval* · score 3 (exploration) but built as the config says: it replaces the three displays (5.7.3) and the even and odd reductions; three nodes, results (5.7.3), 2∫₀ᵃ f and 0.
- Kept as printed: (5.7.2) parity (never derived), (5.7.4)–(5.7.5) ("will not be proved"), Examples 5.7.1 and 5.7.2.

## Corrections

Figure 5.7.2 missing; "ff" twice; the weight e^{−x²/2} of (5.7.4)–(5.7.5) for e^{−x²}; Example 5.7.2's integral without its weight. Example 5.7.1's `\color{red}` on the weight is dropped (no fixed colour in the text).

## Wanted at chapter level

None.
