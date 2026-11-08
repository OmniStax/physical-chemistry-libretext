# Plan: 8.7 Hartree-Fock Calculations Give Good Agreement with Experimental Data (LibreTexts 13445)

Source: `source.md`; draft from `python3 tools/md2html.py 8.7` (deleted).
Status: built 2026-11-08 in the Chapter 8 job, without a review stop (config: the chapter in one go).

Three objectives, one numbered figure (8.7.2; there is no 8.7.1), nine numbered displays, two examples
(8.7.1 a stub, kept), one table, two notes, a closing Summary (to `summary_html`). Licence CC BY-NC-SA 4.0;
credit Theodore Zielinski (tag).

## Sub-concepts (page headers)

1. `opening` **The Hartree–Fock equations** (ours; the exploration's "From Hartree to Hartree–Fock" names the activity): the Hartree method's flaw, (8.7.1)–(8.7.3), the HF equations (8.7.4), the four terms, (8.7.5), the exchange term. Introduces `hartree-fock-method`, `hartree-fock-equations`, `exchange-integral`.
2. `fock-operator` **The Fock operator** (ours; the opening is long and divides at the recast): (8.7.6), (8.7.7), the note "Exchange Energy", Example 8.7.1, the average field, the HF wavefunctions and energy, SCF. Introduces `fock-operator`, `exchange-interaction`, `hartree-fock-energy`.
3. `hartree-fock-energy` **Hartree-Fock Energy** (book's): ε_i as a derivation, occupied and virtual orbitals, Table 8.7.1. Introduces `hartree-fock-orbital-energy`, `virtual-orbital`.
4. `koopmans-theorem` **Koopmans' Theorem** (book's): the frozen-orbital model, (8.7.8), (8.7.9), correlation, Example 8.7.2 (a derivation), the advanced note with Figure 8.7.2. Introduces `koopmans-theorem`, `frozen-orbital-approximation`, `exchange-hole`.

## Figures

- `sim-exchange-hole` · Figure 8.7.2 · exchange-hole, hartree-fock-method · variation by choice: the density of the other electrons around one at r = 0 for Hartree or Hartree–Fock and the same or the opposite spin; the hole is the uniform electron gas's, 1 − 9[(sin x − x cos x)/x³]², x = k_F r (Slater 1951, named in `notes`), shaded, and its missing charge integrated in the readout (1.00 electron) · arrows: none · still: the curve bends between choices · choices method, other electrons; opens on Hartree–Fock, same spin (the book's panel B) · headline: who is kept away · graph alone, x 0–8, y 0–1.2 · 2D. Original shipped (no credit).

## Exercises

The book prints none. Two AI exercises (config), `place: end`: `a1` Koopmans for neon (ε₂p = −0.850 Eₕ given: 23.13 eV, 7.3% above 21.56 eV), tests koopmans-theorem, frozen-orbital-approximation, ionization-energy; `a2` the energy Hartree–Fock misses in Table 8.7.1 (helium 0.08 R_H, 1.09 eV, 1.38%; argon 0.148%), tests hartree-fock-energy, electron-correlation.

## Derivations

- `hf-orbital-energy` · the unnumbered ε_i align · block, qualifies · built, one node from h_eφ_i = ε_iφ_i to ε_i = ⟨φ_i|T + V|φ_i⟩ + Σ_j[J_ij − K_ij]; normalization stated as a fact.
- `example-8-7-2` · Example 8.7.2 · block with words, qualifies · built as *Example 8.7.2 ·*, one node; the ε_{N+1} fact links `hf-orbital-energy`; note on the first E_N (sum over i only) and the unstated vanishing of the j = N + 1 term. The example keeps its first and last sentences.
- (8.7.7) expanded: one move, stays.

## Corrections

(8.7.3)'s 1/√N; (8.7.4)'s conjugate on ψ_i in the exchange integrand (repeated in the fourth-term display); (8.7.5) equating a function with J_{j,k} and its r − r'. Example 8.7.2's first E_N goes in the derivation's note. Left as printed: "Hatree-Fock", "required to generated", "the the", "φ₁ through f_N", "highest occupied molecular orbital", "one of its most celebrated failures", the caption's "for from", the objectives.

## Wanted at chapter level

None.
