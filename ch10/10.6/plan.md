# Plan: 10.6 Butadiene is Stabilized by a Delocalization Energy (LibreTexts 13475)

Source: `source.md` (`python3 tools/convert.py 10.6`); draft from `python3 tools/md2html.py 10.6` (deleted once built).
Status: built 2026-11-08 in the Chapter 10 job, without a review stop (config agreed).

Two objectives, three numbered figures and one unnumbered image, seventeen numbered displays, one inline exercise (unkeyed), one note, one pulled quote. Delmar Larsen, CC BY-SA 4.0; Kaya's 10.6.2 and 10.6.3 keep their own CC BY-NC (orchestrator).

## Sub-concepts (page headers)

The page prints no `<h2>`; three blocks of ours (exploration's proposals, sentence case):

1. `butadiene-levels` **Butadiene's π levels**: the molecule and its conformers, the trans image, (10.6.1)–(10.6.3) and the approximations, the derivation replacing (10.6.4)–(10.6.11), the connection-matrix sentence, Figures 10.6.1 + 10.6.3, the configuration. Introduces `huckel-determinant`, `butadiene-pi-orbitals`.
2. `delocalization` **Delocalization energy**: the total π energy, the derivation replacing (10.6.12), (10.6.13) and the difference, 0.48β and −35 kJ/mol, the pulled quote, the note on resonance with Figure 10.6.2. Introduces `total-pi-energy`, `delocalization-energy`, `butadiene-delocalization-energy`, `resonance-stabilization`.
3. `pi-orbitals` **The π orbitals**: the derivation replacing (10.6.14)–(10.6.17), the node count against the particle in a box.

## Figures

- `fig-trans-butadiene` · unnumbered image · kept (kind `figure`, eyebrow "Figure"): the structure the section names; cis is not drawn (Exercise 10.6.1 asks about it). No credit in the book.
- `sim-chain` · Figure 10.6.1 + 10.6.3 · butadiene-pi-orbitals, delocalization-energy, nodes-and-energy · variation by choice: chains of 2 to 8 carbons show the levels spreading and each level gaining a node, which the book shows for butadiene alone · arrows: symbolic (spins) · still: a chain length is a state, nothing has a time · select (seven options would wrap) C₂ ethylene … C₈ octatetraene, opening on butadiene (1.618, 0.618; 0.37, 0.60) · headline: E_π and how far it lies below separate double bonds · levels to scale against α on the left, orbital rows on the right (p lobes sized and toned by coefficient, the sine envelope faint), ties between · 2D. Labels: HOMO and LUMO only; node counts and coefficients in hover names (up to eight rows, rule 26.7). Readout E_π, the delocalization energy in β and kJ/mol (β = −75 kJ/mol), the HOMO–LUMO gap. Both originals shipped; 10.6.1's caption mislabels a Hartree–Fock picture as Hückel energies, kept (the energies are Hückel's).
- `fig-10-6-2` · Figure 10.6.2 · kept inside its note.

Extra simulations: none (config).

## Exercises

Exercise 10.6.1 (cis-butadiene; unkeyed), kind `exercise`, at the end, AI solution (open): same connectivity, same determinant and orbitals; cannot see the 2.3 kcal/mol or the twist. AI exercise `a1` (config): the allyl radical, x³ − 2x = 0, levels α ± 1.414β and α, E_π = 3α + 2.83β, delocalization 0.83β ≈ −62 kJ/mol.

## Derivations

- (10.6.4)–(10.6.11): block with words, the cofactor expansion skipped. **Built**: `butadiene-levels`, *Derivation · the π energies of butadiene*, ending at E₁…E₄; the expansion inserted.
- (10.6.12), (10.6.13) and the difference: **Built** separately as `butadiene-delocalization`, *Derivation · the delocalization energy of butadiene*, ending at 0.472β; ethylene's 2(α + β) links 10.5's `ethylene-pi`. The exploration proposed one record for both; two keep the book's prose in its order (the configuration sentence and Figure 10.6.1 sit between them).
- (10.6.14)–(10.6.17), "not demonstrated": score 1 + 4 + 0 = 5. **Built**: `butadiene-orbitals`, *Derivations · the π orbitals of butadiene*, the ratios once, then one node per orbital. Node note: the second orbital printed as ψ₃.

## Corrections

Footnotes: "(CH₂=CH₂)" for a vinyl group; |p_i⟩ in the sum (|p_j⟩); "H_ii − ES_ii = α" (α − E); "Equation 10.6.12 with Equation 10.6.12" (10.6.13); "0.48β" (0.472β); "structure 2a" (no such label). The localized-bond sentence's "(Figure 10.6.1)" becomes a fact of the derivation, written without the wrong citation.

## Wanted at chapter level

None.
