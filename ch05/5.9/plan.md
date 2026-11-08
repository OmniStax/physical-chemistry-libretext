# Plan: 5.9 The Rigid Rotator is a Model for a Rotating Diatomic Molecule (LibreTexts 13423)

Source: `source.md`; draft from `python3 tools/md2html.py 5.9`.
Status: built 2026-11-08 in the Chapter 5 job, without a review stop. Licence CC BY-NC-SA 4.0.

Three objectives, five figures, 12 numbered equations, two worked examples (5.9.1 and the exercise box printed
Example 5.9.6, kept as an example), five exercises, one table, one note.

## Sub-concepts (page headers)

1. `opening` **Rotation in space** (agent's header): the rigid-rotor model, Figure 5.9.1 + 5.9.2. Introduces `molecular-rotations`.
2. `introduction-to-microwave-spectroscopy` (book's): (5.9.1)–(5.9.6). Introduces `microwave-spectroscopy`, `rotational-selection-rules`.
3. `microwave-transition-energies` (book's): the line-position derivation, (5.9.10)–(5.9.12), Figure 5.9.3 + 5.9.4, Table 5.9.1, Examples 5.9.1 and 5.9.6, the note with Figure 5.9.5. Introduces `rotational-transition-energies`, `rotational-constant`, `rotational-line-spacing`, `centrifugal-stretching`, `bond-length-from-spectrum`.

## Figures

- `sim-rotations` · Figure 5.9.1 + 5.9.2 · molecular-rotations · physical 3D: the turns are an arrangement in space; choice object (chair, CO) and axis (x, y, z); the object turns once in 5 s and holds · arrows: none (the turn's arc is the angle drawn) · moving: a rotation has time in it · readout the angle turned and the count of independent rotations (3 or 2) · orbit bounded from just above level to 70° above, never from beneath; no buttons; flat fallback from the library. Built with `F.space3d` faces and lit points (boxes for the chair, element-coloured balls for C and O) rather than `F.mesh`, for a smaller scene.
- `sim-spectrum` · Figure 5.9.3 + 5.9.4 · rotational-transition-energies, rotational-line-spacing, rotational-constant · variation by slider: the ladder's J → J + 1 arrows stand at their line positions, predicted lines at 2B(J + 1) with Table 5.9.1's γ_max heights beside the measured lines as hollow dots · arrows: symbolic · still · slider r₀ 1.00–1.30 Å, opening on CO's 1.131 Å (detent) · headline 2B/h · ladder above, spectrum below · 2D. No temperature slider (rule 26.5).
- `sim-stretch` · Figure 5.9.5 (orchestrator: a new figure on Table 5.9.1's numbers) · centrifugal-stretching · motion: CO turns steadily, faster with J; the bond's stretch beyond r(J = 0) drawn ×1000 (rule 28.4, stated in the readout); B_J/h from each line against J beside it · moving: the rotation · dropdown J 0–9 (line J → J + 1), opening on 4 · readout B_J/h and r · 2D.

## Exercises

Keyed (book): 5.9.3 (key's unit of B̃ corrected), 5.9.5. AI solutions: 5.9.1, 5.9.2, 5.9.4. AI exercise `a1`: the J = 0 → 1 line of ¹³C¹⁶O at the same bond length, 110,189 MHz. All at the end. Example 5.9.6 stays a worked example (Chapter 3's decision).

## Derivations

- `line-positions` · *Derivation · the rotational line positions* · score 5 · replaces (5.9.7)–(5.9.9), the paragraph between them and E = 2B(J_i + 1); results (5.9.8), (5.9.9) and 2B(J_i + 1). (5.9.10)–(5.9.12) stay printed with the paragraph that introduces B.
- Kept: (5.9.1)–(5.9.3) ("a bit of mathematical effort"), Examples 5.9.1 and 5.9.6.

## Corrections

|μ_T|² in (5.9.3); "distance (R)"; "6 → 6"; "Equation 5.9.12 predicts" (5.9.9 is the line formula); Example 5.9.1's "1 au" and 1.899 (1.888) × 10⁻¹⁰ m; Example 5.9.6's spacing for the first line and isotopic masses, and its "/12 amu"; Exercise 5.9.3's s/m; Figure 5.9.2's axis and Figure 5.9.5's animation through their rows. The objectives' typos stay as printed.

## Wanted at chapter level

None (B stays plain, as the orchestrator decided).
