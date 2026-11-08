# Plan: Chapter 12 summary page (12.S, LibreTexts 550567, Crabtree)

Built 2026-11-08 like 3.S: no lead, objectives, exercises or coverage.

1. `learning-objectives` **Learning Objectives** (the book's box title): the chapter-level objectives and "Skill goals", verbatim (orchestrator's decision), concept spans on what the chapter defines. Correction: "What a symmetry element a" breaks off.
2. `mathematics-of-symmetry` **The mathematics of symmetry** (ours; the exploration's "Learning the Mathematics of Symmetry" without the gerund): the four paragraphs, verbatim.

No figures. Licence: untagged, the book's BY-NC-SA 4.0.

## Sheets (`tools/sheets.py`)

`sheets/character-tables.json` (46 tables) and `sheets/correlation-tables.json` (7) from `ch12/tables/1/` and `/2/source.md`,
`generated_by: "tool"`, source `{module, section: "12.T"}`. A table per group, titled by the group; columns as printed
(function columns `linear`, `quadratic`); a braced complex pair becomes two lines of one cell; `A"` inside maths becomes
`A''` (KaTeX). Character tables carry their family's definition as the first note; corrections follow as notes
(`--check` runs the orthogonality test and reproduces the exploration's list: D₆, D₈h, D₅d fail; C₃, T, Tₕ, Oₕ, Cᵢ, C₂, C₅
by eye), plus two the exploration missed: D₈h's last row printed E₁u (is E₃u) and D∞h's S/D/π for Σ/Δ/Π.

## Wanted at chapter level

Book-level rows for `book.json` `sheets` (not written by this builder):

    {"id": "character-tables", "title": "Character Tables", "kind": "table", "file": "sheets/character-tables.json"}
    {"id": "correlation-tables", "title": "Correlation Tables", "kind": "table", "file": "sheets/correlation-tables.json"}
