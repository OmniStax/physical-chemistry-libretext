# Plan: 17.1 The Boltzmann Factor is used to Approximate the Fraction of Particles in a Large System (LibreTexts 2405)

Source: `source.md` (`python3 tools/convert.py 17.1`); draft from `python3 tools/md2html.py 17.1` (deleted once built).
Status: built 2026-11-08 in the Chapter 17 job, without a review stop (config: the chapter in one go).

No objectives, summary, figures or examples. Five numbered displays (17.1.1)–(17.1.5); the labels 2.12–2.15 and 17.1 of
the source resolve to them ("Equation 17.1" is (17.1.5)). Credit: Tuckerman. Licence CC BY 4.0 at the source. The two
References are never cited: to `notes`.

## Sub-concepts (page headers)

1. `microscopic-laws` **The Microscopic Laws of Motion** (the book's h3, promoted; the opening sentence at its top):
   positions, velocities (17.1.1), the force field (17.1.2), Newton's second law, initial conditions. Introduces
   `newtons-second-law`, `force-field`, `classical-trajectory`.
2. `ensemble-concept` **The Ensemble Concept (Heuristic Definition)** (book's): the information a trajectory needs,
   (17.1.3)–(17.1.4), the ensemble and its four questions (kept as a list). Introduces `kinetic-temperature`,
   `many-microstates-one-macrostate`, `ensemble`, `ensemble-concept`.
3. `thermal-energy` **Thermal energy** (book's): E_thermal = kT, the Boltzmann constant, the factor (17.1.5), β,
   activation. Introduces `thermal-energy`, `boltzmann-constant`, `thermodynamic-beta`, `boltzmann-factor`,
   `activation-energy`, `activated-processes-boltzmann`.

## Figures

None. `sim-boltzmann-factor` was offered and not picked (config, orchestrator's decisions).

## Exercises

Problems 1–4 (kind `exercise`, `source_number` "Problem N", unkeyed, AI solutions, `open`), all `place: end`.
Problem 5 ("separate arrangements") is held for 17.2. AI exercise `ai1` (number, Apply): the Boltzmann factor of a
50 kJ/mol barrier at 310 K against 300 K, e^(0.6467) = 1.91 (computed).

## Derivations

None qualify: (17.1.3) → (17.1.4) is one move (exploration table).

## Corrections

Footnotes: `c-quad-bytes` (quadruple precision is 128 bits, 16 bytes; about 10¹⁶ GB, ten orders of magnitude,
checked by computation); `c-last-formula` (the 3D box energies of Section 3.9, linked). As printed, no footnote:
"quadrupole", "will be addresses", "its thermal energy of a particle".

## Wanted at chapter level

None.
