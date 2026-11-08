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

## Pass 3 · 2026-11-08 · Chapter 1 figures reworked; Chapter 2 built

After the user found Chapter 1's figures generic and too close to the book,
root rule 14 was rewritten (with rule 25 and the figure guide's §1) and all
17 figures were reworked by four builders: one point visible at once,
captions of two sentences, clutter cut, motion added where the idea moves
(the ramp and stairs, the Coulomb charges, the orbit wave). Before and after
screenshots were sent to the user.

Chapter 2 was built from the Pass 2 prep by four builders: the intro and
2.1–2.5; 12 interactive figures (10 moving, two of them 3D membranes), 13
derivations, 4 book exercises and 6 AI exercises, about 26 corrections.
Chapter pass: the builders' wanted rows (G_n; k_x, k_y, k_z, A, X, Y, T, p, q
in 2.5), `colours:default` rerun after the two new types (it moved some of
Chapter 1's colours), the © Dan Russell GIFs of Figure 2.5.1 removed from
`media/` (credited in 2.5's notes), the membranes' colour bands refined.
`check:content`: no errors, no warnings.

Known gaps: Chapter 1's equation numbers predate the converter's
per-row numbering of `align` and may be off by one on 1.1, 1.2, 1.4, 1.5
and 1.8. Library gaps the builders hit: no per-vertex colour in
`F.space3d`, no legend helper, no value formatter on `ctl`, no dash in
`plot`, and a fact repeated in a derivation when `then` restates it.

## Pass 4 · 2026-11-08 · Chapter 3 prepared

Prep only, no section built. Fetched Chapter 3's images (15, into
`media/ch03/`, the summary page's three included), converted the landing
page, 3.1–3.9, the summary page 3.S (to `ch03/summary/`) and the empty 3.E;
wrote `ch03/exploration.md`, `ch03/config.md` (agreed on Chapter 1's terms),
`ch03/chapter.json` (9 sections, the intro and summary records, 147
variables) and merged `ch03/book-rows.json`: 3 new types (wavefunction,
probability density, operator), 42 symbols, 61 concepts, 92 edges.
`npm run colours:default` was rerun for the new types; it moved the hues of
ten existing types, energy among them. Drafts made for the intro, 3.1–3.9
and the summary.

Tool fixes: `fetch.py --media` also takes the N.S, N.E and N.T pages'
images; `lt2md.py` drops a `\label` in inline maths and keeps a box's
printed label where it names the other kind (3.6's "Example 3.6.1" in an
exercise box, 3.7's "Exercise 3.7.2" in an example box); `md2html.py`
drafts `N.intro` and `N.summary`, rewrites `\cancelto`, `\op`, `\mbox` and ∆
for KaTeX, sets an irregular table's spans, and keeps exercise ids unique.
Chapters 1 and 2 reconvert to the same bytes.

Exercises: 14 distinct questions, 8 keyed, 6 for AI solutions, 6 AI
exercises proposed; three held for 3.5 and one merged into 3.4.
`check:content`: no errors, no warnings.
