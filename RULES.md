# Physical Chemistry (LibreTexts): the book's rules

Status: agreed with the user on 2026-11-08 (the exploration's proposals
accepted as written) and used to build Chapter 1; later chapters refine it. What
is true of this book and of no other; the rules for every book are the root
`RULES.md`. A chapter's decisions are in its `config.md`, the colour plan in
`COLOR.md`.

## Source

The book is the LibreTexts page 9054, *Physical Chemistry (LibreTexts)*, on
chem.libretexts.org, a Textbook Map whose chapter plan follows McQuarrie and
Simon. `python3 tools/fetch.py` mirrors it into `source/` (gitignored,
read-only): `tree.json`, `pages/<id>.json` (each page's body rendered for
viewing), `tags/<id>.json` (licence, authors), and with `--media N` the
images of Chapter N in `media/<file id>-<name>`. It writes `modules.json`
(every page with its id, number, title, path and licence) and `toc.md`.

`python3 tools/convert.py 1.4` writes `ch01/1.4/source.md` (`1` for the
whole chapter, `--out DIR` elsewhere) through `tools/lt2md.py`, whose
docstring lists every marker. A source.md is never edited by hand. Its
first line is a comment naming the LibreTexts page id and path, which is the
section's provenance: the publisher page of a section is
`https://chem.libretexts.org/` + that path.

## Structure

book → chapters (33) → sections N.M → `<h2>` headers → boxes. One section
page, one OmniStax page; never folded. A chapter's landing page is
`chNN/intro/`; its N.S summary page, where there is one (Chapters 3–10,
12–17), is `chNN/summary/`; its N.E exercise page is not built (they are
empty or stubs; `exploration.md` says what each holds). The 12.T pages are
reference tables and become sheets. Chapters 32 and 33 are built as
chapters, last. The front and back matter are not pages.

## Apparatus

Objectives (`box-objectives`, with their lead-in sentence) go to the tables.
The book's `<h2>` headers are kept as the sub-concept headers wherever they
divide the section; where a section has none, root rule 3 applies. A
closing "## Summary" goes to `summary_html`. The Contributors and
Attributions list is not text: it is the section's credit. Notes
(`box-note`, `box-emphasis`, `box-definition`) are kept verbatim as
`<div class="note">` with the book's title as `<h3>`. An embedded video is
dropped and named in `notes`; an embedded applet or simulation triggers a
Sim of our own.

Worked examples keep the book's number, *Example N.M.K*, and title; their
parts (Solution, Solution A, Strategy) are the book's.

## Licence and attribution

The book is CC BY-NC-SA 4.0, curated by Delmar Larsen (LibreTexts). Each
page carries its own licence tag (`modules.json`): a section adapted from a
CC BY-SA 4.0 page is shared CC BY-SA 4.0, every other section CC BY-NC-SA
4.0. A figure keeps the credit parenthetical at the end of its caption. The
section's authors are those of its Contributors and Attributions list.

## Types

To be settled in `COLOR.md` with the user; `exploration.md` has the first
proposal. Constants of nature, quantum numbers, counts and labels are
untyped and in ink.

## Formulas

The book's word for them is **Equations**; it prints no key-equations list,
so the chapter's equations table is the agent's extraction of the equations
the section states as results or laws, the book's numbers kept. The
numbers are N.M.K by order of display on the page, one number per display:
a multi-line `align` is one equation with one number (the user's choice,
2026-11-08), so a number can differ from the live page, where MathJax counts
each row of an `align`.

## Exercise kinds

Three, proposed: `exercise` (an inline `box-exercise`, kept inline after the
example it parallels when it is a Try It, otherwise in the Exercises
document; to be settled with the user), `question` (an item of a
"Conceptual Questions" list), `problem` (an item of a "Problems" list).
None of the lists is keyed. A keyed answer comes from the box's Answer
part. Corrections of the book use root rule 13's footnotes.

## Figures

Numbered N.M.K per section as the site prints them; a figure the site
captions without a number is a `figure` row with no number. Images are
copied into `media/chNN/` from `source/media/` under their LibreTexts file
names. Element colours through `F.el`; spectra and hot bodies in their real
colours (facts).

## Tools

`tools/fetch.py` (mirror and `modules.json`), `tools/lt2md.py` and
`tools/convert.py` (source.md), `tools/md2html.py N.M` (a draft
`text.html` and `section.json` from a section's source.md: blocks, maths with
`\tag{N.M.K}`, figures as kept images, notes, examples, tables, exercise
boxes with their book answers; the builder edits the draft and deletes it),
`tools/spans.py` (a first pass of `<span data-concept>` over a text.html, which
the builder then reads), `tools/mergebook.py` (copied from Chemistry 2e for
`ost merge`).

## Exercises and generated content, as chosen for Chapter 1

Unkeyed book exercises are kept with AI solutions; AI exercises are written
where `config.md` names them; every exercise sits at the end of its section
(`place: end`), in the Exercises document.

## Template sections

`ch01/1.1` (a graph sim with a real-colour fact, a still sim with hover
marks, kept photographs and an unnumbered kept image, a folded figure) and
`ch01/intro/` for a chapter's introduction page.
