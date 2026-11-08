# Plan: 14.7 Spin-Spin Coupling Between Chemically Equivalent Protons is Not Observed (LibreTexts 13642)

Source: `source.md`; draft from `python3 tools/md2html.py 14.7` (deleted). Built 2026-11-08 in the Chapter 14
job without a review stop (config agreed). A Chemistry Stack Exchange thread (accepted answer, then two more
answers); shared CC BY-SA 4.0 (orchestrator), the thread's URL in `notes`. Ten numbered displays (14.7.1)–(14.7.10),
the answer's own "(14)" kept as printed; three linked images; no objectives, summary or book exercises.

## Sub-concepts (page headers)

1. `why-no-splitting` **Equivalent hydrogens and splitting** (agent's): the question. Reinforces `equivalent-nuclei-do-not-split`.
2. `finding-the-states` **Finding the states between which transitions occur** (the book's printed line): (14.7.1)–(14.7.4), the I_z actions, the shift operators, Î₁·Î₂, (14), derivation `equivalent-levels`, (14.7.6)–(14.7.8), the state table. Introduces `nuclear-spin-hamiltonian`, `nuclear-spin-operators`, `shift-operators`, `spin-scalar-product`, `two-spin-hamiltonian-matrix`, `two-spin-eigenstates`, `clebsch-gordan-series`.
3. `selection-rules` **Selection rules** (book's): (14.7.9), derivation `nmr-selection` in place of (14.7.10), the transition energies, the pull-quote as an untitled note. Introduces `nmr-transition-hamiltonian`, `nmr-selection-rules`, `equivalent-spins-one-line`.
4. `notes-and-references` **Notes and references** (book's): the answer's notes [1]–[5], kept as printed ([1] uncited; the bold "1982," set plain).
5. `ax-and-a2` **The AX and A₂ cases** (agent's): the second answer's "Note", the AX and A₂ paragraphs, `sim-ab`, the "Advanced: Liouville–von Neumann Equation" note with derivation `coupling-commutes`. Introduces `magnetic-equivalence`, `ax-spin-system`, `a2-spin-system`, `liouville-von-neumann-equation`, `coupling-commutes-with-pulse`.

## Figures

- `sim-ab` · Figure (folds the unnumbered images 344398 LCkBM, 344400 xeaC4, 344399 htKbC; all three in `originals`, their wrong alt texts dropped) · two-spin-eigenstates, nmr-selection-rules, equivalent-spins-one-line, ax-spin-system, a2-spin-system · variation by slider: the reader moves the shift difference and watches the AX doublets lean into a roof and fuse into one line at equal shifts, while the levels still move with J; the three stills show only three fixed cases · arrows: symbolic (the ΔM_I = ±1 transitions, drawn as notation, weighted by intensity, dashed when forbidden) · still: no time in the idea · sliders ν₁ − ν₂ 0–40 Hz (special at 0, A₂) and J 0–20 Hz (special at 0) · headline: the live roof share, or at equal shifts that both lines sit at ν and the singlet is dark · levels on the left (energy axis broken where ν is left out, uncoupled levels dashed), spectrum beside on a fixed −40…40 Hz axis, coincident lines adding · 2D. Levels and intensities computed exactly from (14.7.3) (orchestrator's decision); readout: the matrix with live numbers ((14.7.5) at equal shifts), E₂, E₃, and the two strong transitions. Opens on equal shifts with J = 6.1 Hz (the chapter's trichloroethane coupling; the book gives no J here).

Extra simulations: none built (the config's pulse-and-signal offer was not taken).

## Exercises

No book exercises. Two AI exercises (config): `a1` E₂, E₃ and the two allowed transition energies for ν = 300 MHz, J = 7.0 Hz (computed); `a2` which of the six transitions ΔI = 0, ΔM_I = ±1 allows (choice).

## Derivations

- `equivalent-levels`, "the levels of two equivalent spins", score 9 (exploration): replaces the book's Ĥ-action display, (14.7.5) and the eigenvector display, with the book's "left to the reader" runs worked; facts: Î₁·Î₂ in shift operators, the I_z actions, (14), (14.7.4), 7.2's (7.2.15) and (7.2.14) (`drv` 7.2/secular), orthonormality. Built.
- `nmr-selection`, "the NMR selection rules for two equivalent spins", score 5: the exploration's branch, built as its own record because (14.7.10) stands in another block; it replaces (14.7.10) and links `equivalent-levels` for the eigenstates. The transition-energy display (one substitution) stays printed.
- `coupling-commutes`, "the coupling commutes with the total spin", score 7: replaces the commutator display in the Advanced note; facts link 6.3's commutation relations (`drv` 6.3/lx-ly-commutator).
- (14.7.1) → (14.7.3): two printed moves, stays.

The sentences "Therefore in this basis the Hamiltonian matrix is" and "Finding the eigenvectors … (eigenvalues denoted E_i)" go with the displays the derivation replaces (7.2 precedent).

## Corrections (footnotes)

The answer's own equation numbers "(4)", "(12) to (13)" with "(11)", "equations 10 and 11"; "the diagrams posted in the other answers"; note [4]'s "w′"; the A₂ sentence on exchange symmetry. Spelling ("destabilsed") kept without a note.

## Wanted at chapter level

None.
