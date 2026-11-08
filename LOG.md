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

## Pass 5 · 2026-11-08 · Chapter 4 prepared

Prep only, no section built. Fetched Chapter 4's images (13, into
`media/ch04/`), converted 4.1–4.6, the landing page (no text: the chapter
gets no `intro/` page), the summary page 4.S (to `ch04/summary/`) and the
empty 4.E; wrote `ch04/exploration.md`, `ch04/config.md` (agreed on Chapter
1's terms), `ch04/chapter.json` (6 sections, the summary record, 80
variables) and merged `ch04/book-rows.json`: no new type, 21 symbols, 23
concepts, 43 edges. Drafts made for 4.1–4.6 and the summary.

Tool fixes: `lt2md.py` keeps a letter in a box number (Example 4.6.2A) and
gives a display with its own `\tag` no number (4.S); `md2html.py` keeps each
panel's alt text, writes `\braket{a}{b}` as `\braket{a|b}`, drops inline
`\nonumber` and lower-cases lettered ids. Chapters 1–3 reconvert to the same
bytes; 3.S's built page still has the two-argument `\braket`.

Exercises: 5 questions (Example 4.6.2A among them), 3 keyed, 2 for AI
solutions, 7 AI exercises proposed. `check:content`: no errors; one warning,
the stored colours stale against the pages built since.

## Pass 6 · 2026-11-08 · Chapter 3 built and its chapter pass

Chapter 3 was built by parallel builders from the Pass 4 prep: the intro,
3.1–3.9 and the summary page. 15 figures: 12 interactive (4 moving: the free
wave, the detections, the turning phase, the two momentum waves; 1 3D: the
point cloud of the 3D box) and the summary's 3 faithful copies; 13
derivations; 14 book exercises (8 keyed, 6 with AI solutions) and 6 AI
exercises, all `exercise` kind in the Exercises document; 43 AI-marked
corrections.

Chapter pass: the wanted rows (3.7's `p` for the readout of the standing
waves; the symbol `V_box`, latex V, with a 3.9 row marked `redefines`, no
macro, since an untyped macro sets plain ink and carries no hover data);
"standard deviation" added to the terms of 3.8's `quantum-uncertainty`;
"observable" taken off 3.3's `observables-as-eigenvalues`; 3.S's
`\braket{\kpsi}{\kpsi}` written `\braket{\kpsi|\kpsi}` (the only `\braket`
in the chapter); no bare `\k` script found; `colours:default` rerun.
`check:content`: no errors, no warnings. Every figure screenshot in light,
3.5, 3.9 and the summary in dark; no console or KaTeX error on any page,
derivations included.

Known gaps: the `observable` concept stays in 4.2, though the book first
defines it in 3.3 ("A physical observable is anything that can be
measured"); moving it means changing `ch04/book-rows.json` (the concept and
its edge to 4.1's `classical-state`), left to the orchestrator. Summary
pages cannot hold variables rows (the checker accepts only a chapter's
sections), so 3.S takes 3.9's meanings. The fact schema has no field that
links a fact to an earlier derivation (rule 29.5), so `box3d`'s facts from
(3.5.10) and (3.5.16) cite the numbers only. The probability density's
light hue (#013E1A) stands 0.122 from ink in OKLab, just over the 0.12
target, and reads near black on the light ground.

## Pass 7 · 2026-11-08 · Chapter 5 prepared

Prep only, no section built. Fetched Chapter 5's images (42, into
`media/ch05/`, the summary page's five included), converted the landing
page (three bullets: the chapter gets an `intro/` page), 5.1–5.9, the summary
page 5.S (to `ch05/summary/`) and the empty 5.E; wrote `ch05/exploration.md`,
`ch05/config.md` (agreed on Chapter 1's terms), `ch05/chapter.json` (9
sections, the intro and summary records, 148 variables) and merged
`ch05/book-rows.json`: 5 new types (force constant, moment of inertia,
angular momentum, dipole moment, angle), 55 symbols, 79 concepts, 118 edges.
`npm run colours:default` was rerun for the new types. Drafts made for the
intro, 5.1–5.9 and the summary.

Tool fixes: `fetch.py` and `lt2md.py` decode an image name until it stops
changing (the site double-encodes `Hermite_poly_phys_n%253D1.svg`);
`md2html.py` tags a summary page's equations 5.S.K and converts `\ce{…}` with
matched braces, subscript counts and whole mass numbers. Chapters 1–4
reconvert to the same bytes; of their drafts only 1.3 and 1.8 change (their
`\ce` is now converted).

Exercises: 34 questions, 13 keyed, 21 for AI solutions, 8 AI exercises
proposed; two held for later pages (5.4.1 to 5.6, 5.5.1 to 5.7). 12
derivations to build. `check:content`: no errors, no warnings. Open for the
orchestrator: macros for θ (Chapter 2) and B (Chapter 3), the summary's two
scanned images, the absent Figure 5.7.2, Figure 5.9.5, and derivations that
work unkeyed exercises on the page.

## Pass 8 · 2026-11-08 · Chapter 4 built and its chapter pass

Chapter 4 was built from the Pass 5 prep: 4.1–4.6 and the summary page (no
intro: the landing page prints no text). 7 interactive figures, none 3D: 2
moving (the collapse of 4.3, a figure that replaces the book's two
unnumbered images; the mixture and energy measurement of 4.4, an extra Sim)
and 5 still (4.1.1, the fold 4.1.2 + 4.1.3 + 4.1.4, 4.3.1, the expansion
Sim of 4.3, Example 4.5.1's parity figure); 14 derivations (4.3: 6, 4.4: 2,
4.5: 5, 4.6: 1); 12 exercises, all `exercise` kind in the Exercises document:
5 from the book (3 keyed: 4.1.1, 4.5.2, 4.6.2C; 2 with AI solutions: 4.6.1
and the solution-less Example 4.6.2A) and 7 AI exercises; 25 AI-marked
corrections.

Chapter pass: `observable` moved to 3.3, where the book first defines it ("A
physical observable is anything that can be measured"): withdrawn from
`ch04/book-rows.json` with its edge to 4.1's `classical-state` (a 3.3
concept cannot rest on a 4.1 one; the edge now runs the other way,
`classical-state` → `observable`), staged in `ch03/book-rows.json` with
no prerequisite, `operator-postulate` → `observable` kept; the defining
sentence spanned in 3.3 with an `introduces` row, 4.2's row made
`reinforces` (its term "dynamic variable" kept). No redundant edge in
Chapters 3–4 (two older ones in Chapter 1: `bohr-energy-levels` →
`coulomb-potential`, `bohr-rydberg-derivation` → `photon`). The two
`\braket` (summary) are in `\braket{a|b}` form; no bare `\k` script. The
`ai` fields match Chapter 3's. Figure fixes from the screenshots: 4.1's
"ψ → ∞" label moved off the curve, 4.3.1's ⟨x⟩ label off its line and the
outer band shares above the curve, the collapse figure's ticks with true
minus signs and its readout's x₁, x₂ coloured as positions. 4.5's parity
figure reads "Figure", as the checker's new rule for a sim that replaces an
unnumbered book figure asks (plan line updated). `colours:default` rerun
twice. `check:content`: no errors or warnings from Chapters 1–4 (one error in
5.7, which waits on 5.5 being built). Every Chapter 4 figure screenshot in
light, choices and select options included, the 4.4 measurement as a frame
sequence (energy-level dot and "measured" list checked); 4.4, 4.5 and the
summary in dark; every derivation rendered; no console or KaTeX error on any
Chapter 4 page or its document view, nor on 3.3.

Known gaps: the parity figure colours each ψₙ by its index, so ψ₃ is a dark
green near the probability density's and ψ₄ a magenta near length's; the
eyebrow rule changed during the pass (another agent's checker change),
so other books' unnumbered sims may now need "Figure" too.

## Chapter 6 prep · 2026-11-08

Prep only, no section built. Fetched Chapter 6's images (23, into
`media/ch06/`), converted the landing page (one paragraph: an `intro/` page),
6.1–6.7, the summary page 6.S (to `ch06/summary/`) and the empty 6.E; wrote
`ch06/exploration.md`, `ch06/config.md` (agreed on Chapter 1's terms),
`ch06/chapter.json` (7 sections, the intro and summary records, 138
variables) and merged `ch06/book-rows.json`: no new type, 29 symbols, 51
concepts, 88 edges. Drafts made for the intro, 6.1–6.7 and the summary.

6.2 repeats 6.4 and 6.5: its concepts, the seven exercise boxes the later
pages print again and the radial-function figure are built once in 6.2.
Exercises: 25 printed questions, 18 cards, 9 keyed, 9 for AI solutions, 8 AI
exercises proposed. 6 derivations to build.

Tool fixes: `lt2md.py` sets a bare `\begin{align*}` outside `\[ … \]` as a
display (6.6); `md2html.py` drops an empty exercise box and writes U+2011 in
maths as "-". Chapters 1–5 reconvert to the same bytes. `check:content`: no
errors; one warning, the stored colours stale (not from this chapter).

## Chapter 7 prep · 2026-11-08

Prep only, no section built. Fetched Chapter 7's images (8, into
`media/ch07/`), converted the landing page (one paragraph: an `intro/` page),
7.1–7.4, the summary page 7.S (to `ch07/summary/`) and the empty 7.E; wrote
`ch07/exploration.md`, `ch07/config.md` (agreed on Chapter 1's terms),
`ch07/chapter.json` (4 sections, the intro and summary records, 82
variables) and merged `ch07/book-rows.json`: no new type, 33 symbols, 33
concepts, 57 edges. Drafts made for the intro, 7.1–7.4 and the summary.

Exercises: 4 printed, 3 keyed, 1 for an AI solution (a sketch), 7 AI
exercises proposed; nothing moved. 8 derivations to build. Every figure
proposed still and 2D (variation, not motion); one extra Sim recommended (7.3).

Tool fixes (`md2html.py` only): a figure caption's equation citation is
resolved in the draft row as in the text; a `\ref` to another page's label is
printed as that page's number (7.S cites 5.S.1); U+FEFF is dropped from maths.
Chapters 1–7 reconvert to the same bytes. `check:content`: no errors, no
warnings. Open for the orchestrator: the two figures printed 7.4.1, the
tilted box in 7.4.1's figure, the unstated ⟨n⁰|n¹⟩ = 0, Table 7.3.1's F value.

## Chapter 5 pass · 2026-11-08

Built: the intro, 5.1–5.9 and the summary page. 24 figures (18 interactive
sims; 6 kept as figures: Figure 5.1.3, Example 5.1.1's plot and the summary's
four copies), 7 moving, 3 with a 3D view (the rotor's sphere, 5.8.3's turned
polar plot, the chair and CO rotations); 12 derivations; 42 exercises, all
`exercise` kind in the Exercises document: 13 keyed, 21 with AI solutions, 8
AI exercises; 63 AI-marked corrections.

Chapter pass: `\ktheta` staged in Chapter 2 (symbol `theta`) and `\kB` in
Chapter 3 (symbol `B`). Chapter 2's θ (the polar angle on a membrane) and
Chapter 3's B (a constant of the cosine solution) are other quantities, but
`redefines` is per chapter and θ, B first appear in Chapter 5 at 5.8 and 5.9,
so no ch05 row changes; 2.5's θ row now wears `angle` so the summary page's
θ inherits it. θ converted in 5.8's text, figures and derivation lines, 5.9's
text and the summary; B in 5.9's text, readouts, Figure 5.9.3 + 5.9.4's
caption and derivation (B in frequency units, "B (in freq)" and "$2B$" as a
frequency, stays plain; exercises, footnotes and captions in derivation
reasons stay plain, as the chapter writes them). Prose restored after
derivations (rule 29.2): 5.9's "both ν and ν̄ are important to calculate",
5.8's "this λ has no connection to a wavelength". 5.6's objective restored
(a copy of 5.2's title is still the book's objective). `reduced-mass` stays
introduced in 5.2, where the book defines it; 5.1's mentions are `uses`
(a row added for its second block). 5.3's red, blue and green curves get the
correction `book-colors`: curves of one category have no fact colour.
5.2's footnote marker in the second Example 5.2.1 heading renders after its
text. U+2011 in 5.8's maths (`$‑J$`, the m_J list) made a hyphen-minus. No
`\braket`, no bare `\k` script. `colours:default` rerun (twice: a new
chapter landed mid-pass). `check:content`: no errors, no warnings. Every
figure screenshot in light, 5.3 and 5.9 in dark; every derivation rendered;
no console or KaTeX error on any Chapter 5 page.

Known gaps: Chapter 5's forms carry no `ktex` (earlier chapters' do); other
connective sentences under derivations stay folded into them (5.6's
"because the integral from 0 to Q₀ … cannot", carried by the node's
correction; 5.9's "with J_i and J_f representing …"; 5.1's "Equation 5.1.4a
is a linear second-order differential equation …", carried by a reason);
Chapter 6's text still writes θ plain.

## Chapter 8 prep · 2026-11-08

Prep only, no section built. Fetched Chapter 8's images (27, into
`media/ch08/`), converted the landing page (one paragraph: an `intro/` page),
8.1–8.11, the summary page 8.S (to `ch08/summary/`) and the empty 8.E; wrote
`ch08/exploration.md`, `ch08/config.md` (agreed on Chapter 1's terms),
`ch08/chapter.json` (11 sections, the intro and summary records, 212
variables) and merged `ch08/book-rows.json`: two new types (`magnetic-field`,
`magnetic-moment`, `colours:default` rerun), 79 symbols, 88 concepts, 157
edges. Drafts made for the intro, 8.1–8.11 and the summary.

Exercises: 15 printed boxes and one example printed without a solution, 16
cards: 5 keyed, 11 for AI solutions; 9 AI exercises proposed; nothing moved.
6 derivations to build. Figures: 3 moving (the SCF loop, the spin-resonance
spectrometer, Stern–Gerlach) plus the moving microstate chart, two still 3D
scenes, the rest still or faithful copies; two extra Sims recommended (8.6,
8.10).

Tool fixes: `lt2md.py` keeps a strike-through as `~~…~~` (8.8's Table 10)
and drops an `<img>` with no file; `md2html.py` renders `~~…~~` as `<s>` and,
in maths, writes U+2010 and U+2019 as - and ', ½ as \tfrac12, ħ as \hbar and
drops a bare `\label`. Chapters 1–7 reconvert to the same bytes; of their
drafts only five built sections' change (ħ, ½ in maths). `check:content`: no
errors, no warnings. Open for the orchestrator: three figures printed 8.8.1,
whether the microstate Sim replaces Example 8.8.12's 13 charts, the Hα line
intensities' source, the exchange-hole curve's source.

## Chapter 6 pass · 2026-11-08

Built: the intro, 6.1–6.7 and the summary page. 12 interactive figures (no
kept photographs; the two answer images stay in their answers), 2 moving (the
1s detections of 6.5, the classical orbit of 6.6), 4 with a 3D view (the
spherical harmonics of 6.2, the vector model's cones of 6.3, the orbit and the
p and d point clouds of 6.6); 7 derivations (6.1: 2, 6.3: 3, 6.5: 1, 6.6: 1);
26 exercises, all `exercise` kind in the Exercises document: 9 keyed, 9 with AI
solutions, 8 AI exercises; 55 footnotes (corrections and notes).

Chapter pass: the builders' wanted rows (6.6's `L` and `psi` variables, the
`psi` row placed before 6.7's so the redefinition check reads it in order;
6.7's `r_1`, `V_1` → `electron-1`, `r_2`, `V_2` → `electron-2`; the form anchors
of `circular-orbit-angular-momentum` and 6.7's five forms). θ converted to
`\ktheta` in 6.1–6.6's text and the summary, the derivation lines (and the 6.3
reasons that already use macros), and the readouts of 6.2 and 6.6; every ch06
θ row already meant the polar angle, so no `redefines`. Kept plain: exercises,
footnotes, hover names, 6.1 and 6.5's plain-math facts, and 6.3's readout
cos θ, the cone's angle, which is not the electron's polar angle. 6.6's
`sim-orbitals` now opens 40° above the xy-plane and 22° off y (turn −2.75, tilt
0.7), so the x lobes are side on and 3p_x's radial sphere shows between them;
plan line updated. The sign tones of `sim-harmonics` and `sim-orbitals` now step
toward whichever of ink and ground is farther from the wavefunction hue in
lightness, so they part on both themes whatever hue the palette deals. The six
hand links in 6.5 to `#6.2-sim-radial` were plain anchors and went nowhere;
now `class="figref"`, and a click opens 6.2. Example 6.3.1: the book's "the
first two terms and final two terms can be rewritten as different commutators"
restored as the reason of its step. No `\braket`, no bare `\k` script, no
U+2011/U+FEFF in maths (one U+2011 in 6.2's prose, as printed).
`colours:default` rerun. `check:content`: no errors, no warnings. Every figure
screenshot in light, 6.2, 6.5, 6.6 and 6.7 in dark; no console or KaTeX error
on any Chapter 6 page, derivations included.

Known gaps: the link into 6.2 lands about a screen above `sim-radial` (the app
scrolls before the figures above it have drawn); the palette moved several times
during the pass as other chapters landed, and at one point dealt the
wavefunction and angle types near hues; 6.7's two electrons are close blues in
the figure; connective sentences under 6.1's and 6.5's derivations ("Substituting
Equation 6.1.6 into Equation 6.1.5 produces", "Note the wavefunction of hydrogen
1s orbital which is") stay folded into them.
