# Plan: Chapter 3 summary, The Schrödinger Equation and a Particle in a Box (Summary) (LibreTexts 550563)

Source: `source.md` (`python3 tools/convert.py 3`); draft from `python3 tools/md2html.py 3.summary`.
Status: built 2026-11-08 in the Chapter 3 job, as `exploration.md`'s "The summary page (3.S)" says:
a page like a section with no lead, objectives, exercises or coverage (root rule 21.2).

## Blocks

1. `particle-in-a-box` **Particle in a box** (the book's `###` header): Ĥ, the boundary conditions, the
   well, the general solution, Eₙ, ψₙ, the two-panel figure.
2. `particle-in-a-3d-box` **Particle in a 3D box** (the book's `###` header): ψ and E of the 3D box, the
   cube's degeneracy, the level figure.

Displays stay unnumbered, as the page prints them. The chain H → general solution → Eₙ → ψₙ restates
3.5's derivation and is kept as printed. Dirac notation through KaTeX's `\ket` and `\braket`.

## Figures

Three faithful copies (archetype 7), `kind: "figure"`, unnumbered (eyebrow "Figure": the book's hand
numbers 1.1–1.3 would read as Chapter 1's), still, no controls, the book's captions, originals shipped
(no credit given; `notes` says so):

- `fig-well` · the infinite well: walls V(x) = ∞, V = 0 between x = 0 and L · standardisation only.
- `fig-pib-wfns` · (a) ψₙ and (b) |ψₙ|², n = 1–4, each on a dashed line at Eₙ = n²h²/8mL²; ψ stroked in
  the wavefunction hue, |ψ|² filled in the probability-density hue (the chapter's convention).
- `fig-cube-levels` · the cube's levels 3–19 with their states and degeneracies; draws (3,1,1), (1,3,1),
  (1,1,3) where the book's image prints (3,1,1) three times (a correction row naming the figure). The
  image's alt text (a cartoon cat) is dropped.

## Corrections

Ĥ = −(ħ/2m)∂²/∂x² for −(ħ²/2m); the rearranged equation (ħ/2m)∂²ψ − Eψ = 0 for (ħ²/2m)∂²ψ + Eψ = 0;
the (3,1,1) triple in Figure 1.3's image.

## Wanted at chapter level

- Variables rows for the summary page if the build wants them (the text writes `\kpsi`, `\kE`, `\km`,
  `\kL`, `\kx`, `\ky`, `\kz`, `\kLx`, `\kLy`, `\kLz`, `\kEnnn` with the meanings 3.5 and 3.9 give them;
  the content check passes without them).
