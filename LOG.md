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

## Chapter 7 pass · 2026-11-08

Built: the intro, 7.1–7.4 and the summary page. 9 figures: 6 interactive
sims (7.1.1 shielding, 7.1.3 trial energy, 7.2.1 landscape, the 7.3
three-exponential Sim, 7.4.1 box levels, 7.4.2 oscillator mixing), 2
faithful copies drawn (the flowcharts 7.1.2 and 7.2.2) and the unnumbered
perturbation flowchart kept; none moving, none 3D. 8 derivations (7.1: 1,
7.2: 3, 7.4: 4); 11 exercises, all `exercise` kind in the Exercises
document: 4 from the book (3 keyed, 1 with an AI solution) and 7 AI
exercises; 38 AI-marked corrections in footnotes, besides derivation notes.

Chapter pass: the builders' form anchors (`7.1-true-energy`,
`7.1-ignorance-is-bliss`, `7.1-variational-method`,
`7.1-helium-ground-state`, `7.2-opening`, `7.2-minimizing`,
`7.2-secular-determinant`, 13 forms). Book prose restored after derivations
(rule 29.2): 7.1's one-electron Hamiltonians, separability and additive
energies; 7.2's "overlap integrals", "for all k", the orthonormal reduction
to the eigenvalue form, and Example 7.2.1's Solution sentence. Derivations:
7.1's last node now starts from result 2 (node 2 ends on
E_He1s = E_n1 + E_n2); 7.2's numerator and denominator start from (7.2.1)
and apply (7.2.2) as a step instead of starting from a substituted line;
Example 7.2.1's second node starts from (7.2.12); 7.4's completeness fact no
longer repeats the start line's equation. 7.3's fluorine footnote now cites
Clementi and Raimondi (1963, F 1s 8.6501), whose rounded single-zeta
exponents the whole 1s column matches. 7.4's readouts write E₁ and E₀ with
`\kE` (a 7.4 `E` variables row added). No two-argument `\braket`, no bare
`\k` script, no U+2011 or U+FEFF. `colours:default` rerun. `check:content`:
no errors or warnings from the book's Chapter 7 (one error in 8.3, being
built). Every figure screenshot in light, 7.1 and 7.4 in dark, every
derivation rendered at rest and three played; no console or KaTeX error on
any Chapter 7 page.

Known gaps: the derivation eyebrow drops a letter from the example number
(Example 7.4.1B reads "Example 7.4.1"; the regex in `derivation.ts` takes
digits only); 7.1's restored sentences on h₁, h₂ and separability repeat two
fact cards of its derivation; 7.4's bold sub-headers ("Last term…", "First
term…") went with the block the derivation replaced; the Clementi–Raimondi
values could not be checked online from this session (no network to the
sources), so the footnote rests on the column's match and the known 1963
values.

## Chapter 9 prep · 2026-11-08

Prep only, no section built. Fetched Chapter 9's images (41, into
`media/ch09/`), converted the landing page (one paragraph: an `intro/` page),
9.1–9.16, the summary page 9.S (to `ch09/summary/`) and the empty 9.E; wrote
`ch09/exploration.md`, `ch09/config.md` (agreed on Chapter 1's terms),
`ch09/chapter.json` (16 sections, the intro and summary records, 136 variables)
and merged `ch09/book-rows.json`: no new type, 50 symbols, 67 concepts, 116
edges. Drafts made for the intro, 9.1–9.16 and the summary.

Found: 9.13 and 9.16 are empty pages; 9.11's body is a transclusion of
Zielinski's uncertainty-principle page (the same as 19.E), its exercise routed to
1.9. Exercises: 13 boxes, 8 keyed, 5 for AI solutions; 8 AI exercises proposed.
3 derivations to build (9.3, 9.4, 9.9). Figures: 4 moving (coupled oscillators,
orbitals approaching, the H₂⁺ energy curves traced as R shrinks, filling the
period-2 diagrams) plus O₂'s microstate chart, three still 3D point-cloud scenes,
the rest still or faithful copies.

Tool fix: `md2html.py` writes mhchem's `#` as `\equiv` and runs a figure
caption's and an exercise title's maths through the same KaTeX fixes as the text.
`lt2md.py` unchanged; Chapters 1–8's drafts differ only in four draft-only
`_caption` fields. `check:content`: no errors, no warnings. Open for the
orchestrator: the empty 9.13 and 9.16, the stray 9.11 and its exercise in 1.9,
where a PES Sim could live, 9.8.2's unshipped original.

## Chapter 8 pass · 2026-11-08

Built: the intro, 8.1–8.11 and the summary page. 19 figure rows: 14
interactive (12 Figures folding the book's, 2 Sims: the 8.5 exchange map and
the two extra Sims picked, the 8.6 determinant and 8.10's carbon levels), 3
kept images (8.3.2, 8.4.3, 8.10.1) and 2 unnumbered rows; 4 moving (the SCF
loop, the spin-resonance spectrometer, Stern–Gerlach, the microstate chart),
2 3D (the spin pair of 8.8, L–S coupling of 8.9); 6 derivations (8.4: 2, 8.5:
1, 8.6: 1, 8.7: 2); 25 exercises, all `exercise` kind in the Exercises
document: 16 from the book (5 keyed, 11 with AI solutions) and 9 AI
exercises; 73 AI-marked corrections in footnotes, besides derivation notes.

Chapter pass: Example 8.8.12's prose that pointed at the thirteen charts the
microstate figure replaced ("like this:", "I get this:", "Leaving us with",
"reduces the chart down to", …) now links the figure with hand links
(`class="figref"`, nine), the book's words unchanged. The summary's six links
were plain anchors, which pass the check but go nowhere from another page;
now `class="xref"`, and a click opens the section; the shielding bullet
links `#8.3-scf` (the shielding note and Figure 8.3.2) instead of
`#8.3-hartree-approximation`, which never mentions shielding. Book prose
restored around derivations without repeating a fact card: 8.4's
spin-half facts now carry the book's three sentences word for word; 8.4's
g-factor carries "The energies of these two states consist of …", the
spin gyromagnetic ratio's "Again by analogy …" and "This value is about
twice the Bohr magneton" as reasons, and the z-direction fact in the book's
words; 8.5's double-permutation sentences are the node's reason; Example
8.6.1 gets its Solution head, the book's reminder of permutation symmetries
and its closing "The wavefunction is antisymemtric." 8.2, 8.3 and 8.4's
`notes` now name the licence as the other sections do. `colours:default`
rerun (every type kept its colour). `check:content`: no errors, no warnings
from Chapter 8 (one from 9.12, being built). Every figure screenshot in
light and dark; every derivation rendered; no console or KaTeX error on any
Chapter 8 page.

Known gaps: Example 8.7.2's lead-ins "The energy of the N-electron
determinant … is" and "Likewise, the energy of the N+1-electron determinant
wavefunction is" stay folded into its fact cards (a fact card shows one
equation and no words); Stern–Gerlach's readout writes μ_z plain, not in the
magnetic-moment colour; the figref into Example 8.8.12 opens the figure at
its current state, not the chart the sentence names; Chapter 7's summary has
the same plain cross-page anchor (`#5.summary-harmonic-oscillator`).

## Chapter 10 prep · 2026-11-08

Prep only, no section built. Fetched Chapter 10's images (44, into
`media/ch10/`), converted the landing page (one paragraph: an `intro/` page),
10.1–10.7, the summary page 10.S (to `ch10/summary/`) and the empty 10.E; wrote
`ch10/exploration.md`, `ch10/config.md` (agreed on Chapter 1's terms),
`ch10/chapter.json` (7 sections, the intro and summary records, 86 variables) and
merged `ch10/book-rows.json`: no new type, 41 symbols, 46 concepts, 72 edges.
Drafts made for the intro, 10.1–10.7 and the summary.

Found: every page holds its own text (no empty or stray page); 10.E is empty.
Exercises: 1 box (10.6.1, unkeyed, for an AI solution); 7 AI exercises proposed,
one per section. 9 derivations to build. Figures: 2 moving (electrons through
the PES analyzer; π electrons filling a ring to 4n + 2), four still 3D point-cloud
scenes (hybrid sets, water's hybrids, water's orbitals, ethylene's σ and π), the
Walsh diagram, the Franck–Condon band and the spectrum from orbital energies
still, the rest still or kept.

Tool fix: `lt2md.py` drops elements styled `display:none` (10.5's hidden MathML
printed as "Ψ = 1 2 ( ϕ 1 + ϕ 2 ) …"); Chapters 1–9 reconverted to a scratch
folder, all 101 source.md byte-identical. `check:content`: no errors from the book
or Chapter 10 (one warning, 9.12's Figure 9.12.11). Open for the orchestrator: the
two duplicated printed figure numbers (10.2.4, 10.3.5) and the CC BY-NC figures on
10.6's CC BY-SA page.

## Chapter 11 prep · 2026-11-08

Prep only, no section built. Fetched Chapter 11's images (7, into `media/ch11/`),
converted the landing page (one paragraph: an `intro/` page), 11.1–11.4 and the
empty 11.E (no summary page exists); wrote `ch11/exploration.md`, `ch11/config.md`
(agreed on Chapter 1's terms), `ch11/chapter.json` (4 sections, the intro record, 58
variables) and merged `ch11/book-rows.json`: no new type, 25 symbols, 27 concepts,
54 edges. Drafts made for the intro and 11.1–11.4.

Found: no empty page; 11.1's first half repeats 8.5–8.6 (cited, not rebuilt); 11.E
is empty. Exercises: Example 11.2.2 has no solution (1 card, AI solution); 6 AI
exercises proposed. 1 derivation to build (11.3's cost of a double-zeta basis), 2
cited. Figures: 3, all still and 2D (the STO-NG fit, single/double/triple zeta, a
polarization function); 3 extra Sims offered. The tables of 11.3 and 11.4 lost their
header rows at the source; footnotes proposed.

Tool fixes: `lt2md.py` joins touching `<em>`s (the landing page's "ab initio" came
out as bold); Chapters 1–10 reconverted to a scratch folder, 110 of 111 source.md
byte-identical, 1.3's "*kinetic* *energies*" now "*kinetic energies*" (same text,
left unchanged in the repo). `md2html.py` drafts a table inside a list item
(Example 11.2.2); Chapters 1–10's drafts unchanged. `check:content`: no errors (one
warning, 9.12's Figure 9.12.11).

## Chapter 12 prep · 2026-11-08

Prep only, no section built. Fetched Chapter 12's images (55 used, into `media/ch12/`),
converted the landing page (one paragraph: an `intro/` page), 12.1–12.15, the summary
12.S (to `ch12/summary/`), the empty 12.9 and 12.E, and the two 12.T table pages (to
`ch12/tables/1/`, `/2/`); wrote `ch12/exploration.md`, `ch12/config.md` (agreed on
Chapter 1's terms), `ch12/chapter.json` (14 sections, 12.9 left out as empty; the intro
and summary records; 113 variables) and merged `ch12/book-rows.json`: 3 new types
(`symmetry-operation`, `representation`, `character`; `colours:default` rerun, no other
type moved), 38 symbols, 59 concepts, 87 edges. Drafts made for the intro, the 14
sections and the summary.

Found: 12.9 and 12.E empty; Vallance's own `\tag` numbers and citations throughout;
12.15 repeats 12.8's steps; 12.14 mixes water's two plane conventions. Exercises: 3
problems (12.14), all keyed by the page's solutions; 14 AI exercises proposed. 3
derivations to build. Figures: the operations done to a molecule (moving, physical 3D)
through the chapter, composing operations, normal modes of water and ammonia (moving),
light exciting modes, the projection operator, water's MOs; 3 extra Sims offered. The
12.T pages proposed as two `table` sheets. Notable corrections: 12.8's energies
(−29.83 and +31.03 eV from its own integrals), 12.12's σᵥ column, seven errors in the
character tables found by orthogonality.

Tool fix: `md2html.py` reads 12.14's "Solutions to Practice Problems" as the key of its
Problems (and keeps the image under the last problem with it); Chapters 1–11's 106
drafts compared against the old script: identical. `check:content`: no errors, no
warnings.

## Chapter 9 pass · 2026-11-08

Built: the intro, 9.1–9.10, 9.12, 9.14, 9.15 and the summary page. 26 figure
rows: 20 interactive, 4 faithful copies kept as figures, 2 photographs; 5
moving (the coupled oscillators, two orbitals approaching, the H₂⁺ energy curves,
filling the period-2 diagrams, O₂'s microstate chart), 3 3D point-cloud or
surface scenes (water's surface, σ₁s/σ*₁s, the p-orbital combinations). 3
derivations (9.3, 9.4, 9.9). 21 exercises, all `exercise` kind in the Exercises
document: 13 from the book (8 keyed, 5 with AI solutions) and 8 AI exercises;
49 AI-marked corrections in footnotes, besides derivation notes.

The book's empty or wrong pages: 9.13 and 9.16 have no body at the source, and
9.11 holds Zielinski's uncertainty-principle page (the same as 19.E). The pass
removed all three from `chapter.json` (with 9.11's three staged variables, dx,
dp and ħ, which 1.9 already carries) and merged; their `source.md` stay.
Exercise 9.11.1 = 19.E.1 (the baseball at 91.3 mi/h) is now one card in 1.9
(`e3`, four numeric parts, AI solution checked by computation: Δx 8.4 × 10⁻³³ m
and 1.3 mm, λ 1.2 × 10⁻³⁴ m and 18 μm), its notes naming both printed places.
The checker accepts `source_section` only for a built section whose source.md
holds the id, and neither 9.11 nor 19.E is built, so the card names its origin
instead: a new `exercise_sources` row, `zielinski-quantum-states` (Quantum
States of Atoms and Molecules, Hanson, Harvey, Sweeney, Zielinski, CC BY-NC-SA
4.0), the book both printed pages transclude.

Chapter pass: the summary's bullets now link with `class="xref"` to 9.2
(in/out of phase), 9.4 (exchange integral), 9.5 (LCAO–MO, nodal planes), 9.7
(σ/π), 9.8 (bond order), and its 9.14 and 9.15 links gained the class.
Examples 9.7.2 ("as follows") and 9.8.1 ("the following molecular orbital
diagram", "fill the molecular orbital diagram") link their Figures with
`class="figref"`. 9.5's substitution into (9.5.4) and "discussed previously"
link 7.2's `drv-linear-energy` and `drv-secular`; 9.8's "derived previously"
links 9.4's `drv-energy`. Variables rows added for macros that had none: R
(9.5, 9.6), ψ (9.5, 9.7, 9.15), σ₁s and σ*₁s, ΔE and E (9.8, whose readouts now
write `\kdE_{+}`, `\kdE_{-}` and `\kE`), E (9.12). 9.1.2's θ axis label and
ticks moved off the surface to the r = 0.16 edge, and the r label off its 0.12
tick. Derivations against source.md: no content sentence dropped (only "becomes"
and "is given by" lead-ins); 9.3's normalized-orbitals fact now cites (9.3.3),
not 3.5; 9.9's permutation fact writes `\kponetwohat`. `colours:default` rerun
(every type kept its colour). `check:content`: no errors, no warnings. Every
figure screenshot in light and dark; no console or KaTeX error on any Chapter 9
page or derivation, or on 1.9.

Known gaps: 9.4's readout and headline write ΔE₊ plain and round differently
(the headline converts the unrounded value to eV); the exercise card credits
Quantum States of Atoms and Molecules rather than a section of this book; 9.2's
"via the secular equations" is not linked to 7.2.

## Chapter 11 pass · 2026-11-08

Built: the intro and 11.1–11.4 (no summary page). 5 figure rows, all interactive
and still: 3 Figures folding the book's (the STO-NG fit 11.2.1 + 11.2.2 + 11.2.3,
multiple zeta 11.3.1 + 11.3.2, polarization 11.4.1) and the 2 extra Sims picked
(fit it yourself for Example 11.2.2, a diffuse function's tail); none moving, no 3D.
1 derivation (11.3, the cost of a double-zeta basis). 7 exercises, all `exercise`
kind in the Exercises document: 1 from the book (Example 11.2.2, AI solution) and 6
AI exercises. 41 AI-marked corrections in footnotes (11.1: 19, 11.2: 6, 11.3: 9,
11.4: 7).

Chapter pass: the wanted rows (11.2's `y` and `z`, length, for `\ky` and `\kz`;
11.3's untyped `n_SZ` and `n_DZ`, symbols with latex `n_{\text{SZ}}` and
`n_{\text{DZ}}` and no macro, which the derivation already writes). 11.2's
"polarization functions" link now opens 11.4's block (`class="xref"`) instead of
the LibreTexts URL. `media/ch11/511594-stong.png` (the McQuarrie scan of 11.2.3)
deleted; nothing referenced it. The intro's "semi-empirical" no longer wears the
`ab-initio-calculation` span (it names the other kind of method). Figures: the
STO-NG readout writes `\phi^{\text{GTO}}`, not italic GTO; the multiple-zeta
readout's general line carries the normalization `\mathcal{N}` its worked line
substitutes (1.04), true as written; the polarization map's ramp lost its name
"ψ = c₁ 2p_z + c₂ d_xz", which ran across the z axis and repeats the readout.
11.4's `notes` and figure comments now name the sources of the literature exponents:
d 0.8 (6-31G*) and H p 1.1 (6-31G**) from Hariharan and Pople (1973) on the 6-31G of
Hehre, Ditchfield and Pople (1972); H diffuse 0.036 (6-311++G) from the 6-311G of
Krishnan et al. (1980) with the diffuse functions of Clark et al. (1983) and Frisch,
Pople and Binkley (1984). 11.2's STO-NG coefficients name Hehre, Stewart and Pople
(1969). **None of these values or attributions was checked against the papers in
this session**; they are recalled. `check:content` reaches every ch11 page: a
scratch copy with a bogus span in each of the intro and 11.1–11.4 and a bad coverage
row in 11.4 gave all seven errors (the section count comes from `chapter.json`'s
records, which is why it did not move when the pages were built). No two-argument
`\braket`, no bare `\k` script, no U+2011/U+FEFF; every cross-page link carries
`xref`; every section has `ai`, `notes` (the intro has nothing left out) and no
objectives, as the book prints none. `colours:default` rerun (every type kept its
colour). `check:content`: no errors, no warnings. Every figure screenshot in light
and dark, the derivation rendered; no console or KaTeX error on any Chapter 11 page.

Known gaps: the exponent attributions above are unverified; `ab-initio-calculation`
still lists "semi-empirical" among its terms, and 12's intro spans it so; 11.2's
other external links (Inorganic Chemistry's 5.1, bse.pnl.gov) and 11.4's DOI stay
external, since no page of this book holds them.

## Chapter 10 pass · 2026-11-08

Built: the intro, 10.1–10.7 and the summary page. 24 figure rows: 12
interactive sims (2 moving: the PES analyzer and π electrons filling a ring;
4 still 3D point-cloud scenes: the hybrid sets, water's hybrids, water's
orbitals, ethylene's σ and π frameworks), 5 faithful copies or drawn figures
and 7 kept photographs. 11 derivations (10.1: 2, 10.2: 2, 10.4: 1, 10.5: 2,
10.6: 3, 10.7: 1). 8 exercises, all `exercise` kind in the Exercises
document: 1 from the book (10.6.1, AI solution) and 7 AI exercises. 57
footnotes, the AI-marked corrections of the book among them, besides
derivation notes.

Chapter pass: the builders' wanted rows (10.3 `E`, the energy of an AH₂ or
water orbital; 10.4 `R`, the bond length of H₂ or H₂⁺, linked to
`internuclear-distance`); the summary's "hybridization" now links
`#10.1-hybridization` (`class="xref"`). Book prose restored into
derivations (rule 29.2) without showing a fact twice: 10.4's "The final
term in brackets … vertical ionization energy (IE) of the ejected
electron" is now the fact the step uses (the paraphrased reason dropped),
and the free-electron reason is the book's sentence; 10.1's "These are four
unknowns and three equations. The fourth "constraint" …" is the a₁ = a₂
fact; 10.2's "where dτ represents all space" and "These terms simplify
either due to orthogonality or normality …" are the reasons of their
steps; 10.5's "The trivial solution gives both wavefunction coefficients
equal to zero …" is the determinant fact; 10.6's "While solving 4th order
equations typically require numerical estimation …" is the quadratic's
reason; 10.7's "the energy of a localized double bond is 2(α+β), as
determined from the analysis of ethylene" is the fact ΔE uses. 10.5's
derivation is split where the book splits it: `ethylene-pi` (the energies)
stands before "Since β is negative, the two energies are ordered" and
Figure 10.5.4 + 10.5.5; the book's "To extract the coefficients … (Equation
10.5.9)" is back in the text before the new `ethylene-pi-orbitals` (the
coefficients and N₁ = N₂ = 1/√2), whose reasons carry the book's "N₁ is the
normalization constant …; this is the bonding molecular orbital" and its
antibonding twin. 10.4's `sim-pes` caption now names Siegbahn's ESCA
measurements for N₂'s 2σg band (37.3 eV) and HCl's Cl 3s band (25.8 eV);
both values came from the builder's memory and were not checked against
the source in this session. Figures: the Walsh diagram's legend moved off
the 1σu and 2σg curves; the Franck–Condon "photoelectron band" title no
longer sits on its axis. No two-argument `\braket`, no bare `\k` script, no
U+2011, U+FEFF or U+200B; every cross-page link carries `class="xref"`;
every section has `ai`, `built` and `notes`, and objectives where the book
prints them (all but 10.2 and 10.3). `colours:default` rerun (every type
kept its colour). `check:content`: no errors or warnings from the book's
Chapter 10 (one error in 12.1, being built). Every figure screenshot in
light and dark, every derivation rendered at rest and four played; no
console or KaTeX error on any Chapter 10 page.

Known gaps: the derivation facts in 10.6 and 10.7 that give the π
configuration (π₁²π₂², π₁²π₂²π₃²) repeat the sentence printed just before
them; 10.7's roots and energy list are printed and then derived again (the
plan's prose-first reading); the bond-angle result cos θ = −γ² carries
(10.2.8) both in the text and on the derivation; the 3D scenes of water's
hybrids and ethylene's frameworks read as one crowded cloud at rest until
turned.
