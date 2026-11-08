# Plan: 4.5 Eigenfunctions of Operators are Orthogonal (LibreTexts 13410)

Source: `source.md`; draft from `python3 tools/md2html.py 4.5`.
Status: built 2026-11-08 in the Chapter 4 job, without a review stop.

Two objectives, one unnumbered plot (Example 4.5.1), seventeen numbered equations, five notes, one example,
one keyed exercise (4.5.2). Licence CC BY-NC-SA 4.0; author Richard Fitzpatrick.

## Sub-concepts (page headers)

1. `opening` **General theorems from the particle in a box** (ours).
2. `hermitian-operators` **Hermitian Operators** (book's): (4.5.1), the derivation of (4.5.2)–(4.5.7), the Orthogonality Theorem box and its Proof (derivation), (4.5.11), Fitzpatrick's proof (derivation), the emphasis note, Example 4.5.1 with its figure. Introduces `real-eigenvalues`, `orthogonality-theorem`.
3. `orthogonality-of-degenerate-eigenstates` **Orthogonality of Degenerate Eigenstates** (book's): (4.5.16), (4.5.17), the derivation after its paragraph, the Gram-Schmidt box and its Proof (derivation). Introduces `overlap-integral`, `orthogonal-eigenstates`, `gram-schmidt-orthogonalization`.

## Figures

- `sim-parity` · Figure (replaces Example 4.5.1's unnumbered, uncredited MATLAB plot, kept in `originals`) · orthogonality-theorem · variation by choice: parity about L/2 made visible with the mirror line and the two halves of the product, which the book's plot of ψ₂ and ψ₃ alone does not show; 3.5.5's figure shows cancelling areas but not parity · arrows: none · still: no time in it · choices m, n ∈ {1, 2, 3, 4}, opening on the book's (2, 3); referents psi-1…psi-4 · headline: the two parities and how the product cancels, by halves or inside each half · ψₘ, ψₙ above, the product below with its areas filled · 2D. The eyebrow reads Figure: a sim that replaces an unnumbered book figure keeps its image as an original and is a Figure (root rule 14, changed in the Chapter 4 pass).

## Exercises

`e2` Exercise 4.5.2, keyed (open, the book's working). `a1` AI exercise (config): ∫ψ₁ψ₃ dx = 0 where parity does not decide (open).

## Derivations (every proof, rule 29.1)

- `real-hermitian` · real eigenvalues ⇒ Hermitian, (4.5.3)–(4.5.7), score 3; the garbled display between 4.5.6 and 4.5.7 noted.
- `orthogonality-theorem` · the Proof box, (4.5.8)–(4.5.10), score 3; ψ-for-φ followed correctly with a note.
- `different-eigenvalues` · Fitzpatrick's proof, (4.5.14)–(4.5.15) and two lines, score 3; "from Equation 4.5.9" noted (it is 4.5.1).
- `degenerate-partner` · (4.5.17) "easily demonstrated (but not here)", score 8: orthogonal, normalized, an eigenstate of a.
- `gram-schmidt` · the second Proof box, bra-ket and integral forms as two nodes; Φ, ψ_A and the stray display noted.
- Example 4.5.1: kept as printed (parity argument, score 0); Exercise 4.5.2: the key is the book's.

## Corrections

Footnotes: Â "operating on φ" in the gloss of (4.5.1); the sine arguments and missing dx of Example 4.5.1; its swapped parities. Left as printed: "which is discuss first", the objective's "obervables".

## Wanted at chapter level

None.
