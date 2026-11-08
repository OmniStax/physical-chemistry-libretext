# Log: Physical Chemistry (LibreTexts)

## Pass 0 · 2026-11-08 · full-book exploration

Mirrored the LibreTexts book (page 9054, 379 pages) through the site's API
with `tools/fetch.py`; wrote `tools/lt2md.py` and `tools/convert.py`;
converted every page to scratch for the counts and Chapter 1 into `ch01/`.
Wrote `exploration.md`, a draft `RULES.md`, `ch01/exploration.md` and a
proposed `ch01/config.md`. Nothing is built; `book.json`, `COLOR.md` and the
types wait on the user's answers to the open questions in `exploration.md`
and the Chapter 1 config list.

## Pass 1 · 2026-11-08 · Chapter 1 built

The user accepted the exploration's proposals and asked for Chapter 1 in
one go. Prep: `book.json` (identity, highlights, 14 types, 41 symbols, 39
concepts, 41 edges, colours), `ch01/chapter.json`, images in `media/ch01/`.
1.1 and the intro were built by hand as the template; 1.2–1.9 by four
parallel builders from drafts made by `tools/md2html.py`, then a chapter
pass applied their wanted rows (variables for V and E in 1.3, ν and E in
1.4, p and E in 1.8; 1.8's V marked as a new meaning), repaired a link the
draft tool split at a parenthesis, and taught the draft tool to keep such
links and to write `\ce{}` as `\mathrm{}` (the app's KaTeX has no mhchem).

Result: 9 sections and the intro; 17 interactive figures (5 moving), 5 kept photographs and 2 kept images, 4
derivations (de Broglie in 1.6; force balance, Bohr orbits and the Rydberg
equation from the Bohr model in 1.8); 17 book exercises (11 keyed, 6 with AI
solutions: Exercise 1.2.1 and 1.3's five Conceptual Questions) and 6 new AI
exercises; 15 AI-marked corrections of the book's
slips. `check:content`: no errors, two warnings for the book's own citations
of Figures 1.2.3 and 1.7.0, which do not exist and carry corrections.

Known gaps: the derivation graphs and mid-motion frames were not screenshot
by the builders; the equation numbers follow the page's labelled displays and
were not checked one by one against the live page.

## Pass 2 · 2026-11-08 · Chapter 2 prepared

Prep only, no section built. Fetched Chapter 2's images (`fetch.py --media 2`,
14 into `media/ch02/`), converted the landing page, 2.1–2.5 and the empty
2.E; wrote `ch02/exploration.md`, `ch02/config.md` (agreed on Chapter 1's
terms), `ch02/chapter.json` (5 sections, the intro, 61 variables) and merged
`ch02/book-rows.json`: 2 new types (displacement, time), 29 symbols, 39
concepts, 49 edges. `npm run colours:default` was rerun for the new types;
it reassigned the hues of the existing types too, Chapter 1's included.
Drafts made for 2.1–2.5.

Tool fixes: `lt2md.py` takes a figure's own caption rather than its first
panel's (Figure 2.5.1 had come out unnumbered) and keeps panel captions,
numbers each row of an unstarred `align` as MathJax does, and drops U+00A0
in displays; `md2html.py` takes its numbers from the converter, sets
displays inside list items, and tags an align row by row. Chapter 1 was not
reconverted; under the row rule its two-row aligns would take two numbers.

Exercises: 4 inline, all keyed; 6 AI exercises proposed. `check:content`:
no errors.
