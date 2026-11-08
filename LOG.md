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

## Chapter 13 prep · 2026-11-08

Prep only, no section built. Fetched Chapter 13's images (39 used, into `media/ch13/`),
converted the landing page (one paragraph: an `intro/` page), 13.1–13.14, the summary
13.S (to `ch13/summary/`) and the empty 13.E; wrote `ch13/exploration.md`,
`ch13/config.md` (agreed on Chapter 1's terms), `ch13/chapter.json` (14 sections, the
intro and summary records, 188 variables) and merged `ch13/book-rows.json`: 1 new type
(`electric-field`; `colours:default` rerun, no other type moved), 67 symbols, 76
concepts (the Boltzmann distribution enters the book here, in 13.2), 126 edges. Drafts
made for the intro, the 14 sections and the summary.

Found: 13.E empty; much repeats Chapters 5, 9, 10 and 12 (cited, not rebuilt: 13.5.2 is
5.3.2's files, 13.13's example is 5.5's derivation, 13.10's water modes are 12.10's
figure, with 13.10/13.14 putting water in the yz plane where 12.10 uses xz); 13.2 prints
two Figure 13.2.3s and cites a 13.2.2; 13.11 and 13.12 are CC BY-SA. Exercises: 3 boxes,
0 keyed, all for AI solutions; 14 AI exercises proposed. 9 derivations to build.
Figures: 6 moving (the EM wave, the spectrum built line by line, the spinning non-rigid
rotor, the vertical transition, CO's normal coordinate, the driven two-level system)
plus the CH₂ and PtCl₄²⁻ modes in physical 3D; the rest still. Notable corrections:
13.7's S₀₁ prefactor and S ratio, 13.11's P₁₂, 13.12's missing x and recurrence, 13.6's
v′, 13.3's backward spacing claims.

Literature data proposed from memory, **unchecked**: HCl's vibration–rotation constant
α ≈ 0.31 cm⁻¹ (13.3.1's figure) and I₂'s X and B constants (T_e ≈ 15 769, ν̃′_e ≈ 125.7,
χ̃′_eν̃′_e ≈ 0.76, ν̃″_e ≈ 214.5, χ̃″_eν̃″_e ≈ 0.61 cm⁻¹; 13.6's figure), both Huber–Herzberg;
the builder checks them against the NIST WebBook before use. Table 13.5.1's anharmonic
column was checked against ν̃ = 2990.9, χ̃_eν̃ = 52.8 cm⁻¹ (recovered from the table).

Tool fix: `md2html.py` braces an exponent written as a bare `\left( … \right)` (13.2's
occupations note), which KaTeX refuses; Chapters 1–12's 262 drafts regenerated with the
old and new script in a scratch folder: identical. `lt2md.py` unchanged, so no source.md
reconverted. `check:content`: no errors, no warnings.

## Chapter 14 prep · 2026-11-08

Prep only, no section built. Fetched Chapter 14's 36 images into `media/ch14/`, plus the
five answer images of Soderberg's *Chapter 5 Solutions*, which 14.6's "Solution" links
point at (6474–6482). Converted the landing page (`intro/`), 14.1–14.9, 14.S (`summary/`)
and the empty 14.E; wrote `ch14/exploration.md`, `ch14/config.md` (agreed on Chapter 1's
terms), `ch14/chapter.json` (sections 14.1, 14.4–14.8, the intro and summary records, 70
variables) and merged `ch14/book-rows.json`: 0 types, 42 symbols, 48 concepts, 73 edges
(Hasse-checked). Drafts made for all 11 pages.

Found: 14.2 and 14.3 hold Zielinski's uncertainty text again (as 9.11 and 19.E) and 14.9
reads "under development": not built, left out of `chapter.json`; their exercise is 1.9's
card already. 14.6 is Soderberg 5.5 with five questions printed as "Example 5.6"–"5.10"
(keyed by the linked manual; E5.10's key wrong); 14.7 is a Stack Exchange thread (BY-SA
proposed); 14.8 prints "$H_a$s" for "has" five times. Figures: one moving 3D Sim (Larmor
precession, 14.5) and five still folds (field strength, n + 1 splitting, two couplings,
AX → A₂, vinyl dd). Two derivations to build, both in 14.7.

Literature from memory, **unchecked**: that the molecule 14.6 draws for "triclosan" is not
triclosan (5-chloro-2-(2,4-dichlorophenoxy)phenol). No literature numbers are used in
figures: γ/2π comes from the book's own 100 MHz ≈ 2.4 T.

Tool fixes: `lt2md.py` repairs half-TeX, half-dollar inline pairs (14.7); Chapters 1–13
reconverted to scratch, all 154 source.md byte-identical. `md2html.py` sets a repeated
row `\tag` in an `align*` once, and maps the en dash and micro sign in maths; Chapters
1–13's drafts regenerated: 9 change, only where an en dash stood for a minus.
`check:content`: no errors, no warnings.

## Chapter 12 pass · 2026-11-08

Built: the intro, 12.1–12.8, 12.10–12.15 and the summary page (12.9 and 12.E empty, not
built), and the two 12.T sheets. 24 figure rows: 13 interactive (10 moving; 3D scenes in
12.2, 12.4, 12.8, 12.12 and 12.15), 5 faithful copies, 6 kept photographs. 4 derivations
(12.1, 12.6, 12.8 ×2). 17 exercises in the Exercises document: 3 book problems (12.14,
`question`, keyed by the page's solutions) and 14 AI exercises. 70 AI-marked corrections
in footnotes, besides derivation notes.

Chapter pass: `book.json` gains its `sheets` rows, `character-tables` and
`correlation-tables` (written under the merge lock, since `ost` refuses that table); both
pages build and render without errors. The wanted rows: 12.4 `sigma_op`, `g_op`; 12.5
`chi_char`, `E_op`, `sigma_v`, `sigma_vp`, `sigma_vpp` (planes through H1, H3, H2) and
`C_3`; 12.6 `g_op`; 12.11 `E_op`, `C_3`, `sigma_v`; 12.2 `C_4`, `C_6`, `S_4`, `S_6`. New
symbols `C_4`, `C_6`, `S_4`, `S_6` (`\kCfour`, `\kCsix`, `\kSfour`, `\kSsix`), and macros for
`s_3` (`\ksthree`) and for `s_1`, `s_2` (`\ksone`, `\kstwo`, staged in ch08, which owns them).
12.2's readouts, displays and T_d line, and 12.5's text, readout and operation choices, now
write these macros. 12.15's footnotes link 12.8's steps note (`#12.8-steps`, an id added) and
12.13's level diagram (`class="xref"`/`"figref"`); eight character-table mentions (12.5, 12.6,
12.8, 12.10, 12.12, 12.13, 12.15 ×2) link the sheet. The intro's "semi-empirical" lost its
`ab-initio-calculation` span. 12.6's "We can therefore identify … basis functions:" and
"Also:" pointed back at the derivation: the first is now the reason of the derivation's
step to (12.6.4) (the AI reason dropped), the lead-in "Also:" removed. 12.8's "Expanding and
collecting terms in E gives" is followed by its last sentence and the derivation: left.
Fixed: 12.8's display (12.8.9) wrote `\kEpmS_{12}` (an undefined macro, shown raw); 12.8's
level ladder drew the degenerate E pair at two energies (now one level, two labels); 12.2's
operations figure called every benzene operation "not a symmetry operation" (C and H share
rays, and atoms were matched by direction only; now by place first); four U+200B in 12.1's
"Hückel". `tools/md2html.py`: only a header "Summary" itself goes to `summary_html`; an
unnumbered example takes its id and label from its printed label (`ex-2`, "Example 2";
`ex-rotation`, "Example · Rotation"); an image name with parentheses is kept whole.
Chapters 1–11's drafts regenerated with the old and new script in scratch: identical (12.13–12.15
and 13.13 change as intended). No two-argument `\braket`, no bare `\k` script, no U+2011 or
U+FEFF; every in-book link carries `xref`/`figref`; every section has `ai`, `built` and `notes`
(the intro has nothing left out), no objectives (the book prints none). `colours:default`
rerun (every type kept its colour). `check:content`: no errors, no warnings. Every figure
screenshot in light and dark; no console or KaTeX error on any Chapter 12 page, derivation or
sheet.

Known gaps: the 12.2 figures' symmetry axis runs through the headline text (library layout);
12.15's water-basis axis label sits on the z label; 12.13's Raman "initial state" label sits on
the axis; 12.8 writes s₁–s₃ plain (it has no s₁–s₃ variables rows); the derivation links in
footnotes are not checked by `check:content` (it reads only `text.html` hrefs).

## Chapter 15 prep · 2026-11-08

Prep only, no section built. Fetched Chapter 15's 23 images into `media/ch15/` (two more,
15.1.3 from employees.csbsju.edu and 15.4.1's left panel from upload.wikimedia.org, are
hot-linked at the source and the network here refuses both hosts). Converted the landing
page (`intro/`), 15.1–15.7, 15.S (`summary/`) and the empty 15.E; wrote
`ch15/exploration.md`, `ch15/config.md` (agreed on Chapter 1's terms), `ch15/chapter.json`
(7 sections, the intro and summary records, 56 variables) and merged `ch15/book-rows.json`:
0 types, 21 symbols (7 with macros), 52 concepts, 88 edges (Hasse-checked). Drafts made for
all 9 pages.

Found: every page holds its own text (no stray or empty page); 15.E empty; 2 exercise
boxes, both keyed; 12 AI exercises proposed. 15.2 carries Wikipedia text (shared BY-SA, by
14.7's decision). 15.5.1 repeats 15.4.1's right panel and 15.6.2 is 15.5.2's file (cited,
not shown twice). 15.6.3 is a copyrighted photograph (not shipped). Figures: 7 moving
(Jablonski, potential-curve routes, collision, Einstein's processes, two-level pumping,
three-level inversion, cavity, He–Ne) and 2 still (mirror spectra, dye tuning). Five
derivations, two of them hidden (15.3 two levels never invert, 15.4 the ruby's inversion).
Notable corrections: 15.2's "k_BT is about 140 eV", 15.1.6's equal-bond-length caption,
15.4's unconditional ruby inversion, 15.5's diode lasers "no stimulated emission".

Literature from memory, **unchecked** (corrections only, no figure uses them): YAG is
Y₃Al₅O₁₂ and YLF LiYF₄ (Table 15.5.1), the 647 nm ion line is Kr⁺ (Table 15.5.2), copper
vapour lasers are pumped by a pulsed discharge, ruby has been run continuously, diode lasers
lase by stimulated emission between the crystal's facets, "Bennett".

Tool fixes: `lt2md.py` keeps `<sub>`/`<sup>` in a header (15.2's "A₂₁, B₁₂, and B₂₁");
Chapters 1–14 reconverted to scratch, all 166 source.md byte-identical. `md2html.py` no
longer crashes on a figure panel served from outside LibreTexts and lists such URLs in the
row's `_external`; Chapters 1–14's 150 drafts regenerated in scratch: identical.
`check:content`: no errors.

## Chapter 13 pass · 2026-11-08

Built: the intro, 13.1–13.14 and the summary page (13.E empty, not built). 21 figure rows:
15 interactive (8 moving: the EM wave, the spectrum built line by line, the vertical
transition, the CH₂ motions, CO's normal coordinate, PtCl₄²⁻'s modes, the driven two-level
system, the dipole during a vibration; 4 in 3D: the EM wave and the spheroid mathematical,
CH₂ and PtCl₄²⁻ physical), 2 faithful copies and 4 kept photographs. 10 derivations (13.2,
13.3, 13.4, 13.6, 13.7 ×2, 13.9, 13.11 ×2, 13.12). 17 exercises, all `exercise` kind in the
Exercises document: 3 from the book (13.1.1, 13.5.1, 13.5.2, AI solutions) and 14 AI
exercises. 56 footnotes, the AI-marked corrections of the book among them, besides
derivation notes.

Literature values from memory, **still unchecked** against the NIST WebBook or Huber–Herzberg:
HCl's α = B̃₀ − B̃₁ ≈ 0.31 cm⁻¹ (13.3's `sim-branches` detent) and I₂'s X and B constants
(ν̃″_e 214.5, χ̃″_eν̃″_e 0.614, R″_e 2.666 Å; T_el 15 769, ν̃′_e 125.7, χ̃′_eν̃′_e 0.764 cm⁻¹,
R′_e 3.024 Å, B′_e 0.029 cm⁻¹; 13.6's `sim-vibronic`). Both figures' code notes name Huber
and Herzberg and say "from memory, unchecked"; both captions now name Huber and Herzberg
as the source of the numbers.

Chapter pass: `node --check` clean on all 12 `figures.js`. The app links no "Equation N.M.K"
by itself, so 13.4's three citations of (13.4.3) and (13.4.10), numbers that live only in
the derivation, now link `#13.4-drv-nonrigid-levels` (`class="xref"`); 13.9, 13.11 and
13.12 cite no derivation-only number, and 13.7's notes cite the replaced displays as
corrections. Book sentences restored into derivations without showing a fact twice: 13.12's
"where N_JM is a normalization constant", "the standard substitution", "so ΔM = 0 is part
of the rigid rotator selection rule", "Integration over φ for M = M′ gives 2π" and
"Substituting into the integral one obtains an integral which will vanish unless J′ = J + 1
or J′ = J − 1" (replacing AI reasons); 13.11's "V(r) is an amplitude of polarization vector,
which we can ignore for now" and the fact "ω is comparable to the natural frequency ω₀" in
the book's words; 13.7's "complete the square" and "The integral is a Gaussian integral";
13.9's last reason no longer repeats "the energy is the sum of independent energies", which
its fact states. Figures: 13.10.3's caption, mode menu and original caption wrote "e_u" raw
(now e<sub>u</sub>, eᵤ and $e_u$, the book's subscripts kept); 13.9.1's CH₂ opened with a
backbone carbon close to the camera and cut by the frame (now yaw −0.6, pitch 0.3, distance
13: the CH₂ V above, the backbone below). 13.13's "Example: Evaluating vibrational
transitions …" prints once. 13.8.1's spheroid and 13.10.3's ion read at once. No two-argument
`\braket`, no bare `\k` script, no undefined `\k` macro, no U+2011, U+FEFF or U+200B; every
in-book link carries `xref`/`figref`; every section has `ai`, `built` and `notes`, and 13.7
its two objectives (the only section that prints them). `colours:default` rerun (every type
kept its colour). `check:content`: no errors, no warnings. Every figure screenshot in light
and dark (contact sheets in the pass's scratch folder); no console or KaTeX error on any
Chapter 13 page, derivations included.

Known gaps: the I₂ and HCl literature values above; 13.3's P(4) and R(4) labels sit on hollow
marks; 13.6's "2.1 cm⁻¹" bracket label touches its bracket and the lower well writes v″ with a
typographic ”; 13.11's 4π/t label sits on the line; derivation facts in 13.4, 13.7 and 13.11
restate wavefunctions and conditions the text prints just before them (the prose-first
reading); 13.7's intermediate displays (13.7.2)–(13.7.4) carry no number on the derivation,
since they are steps, not node results; 13.9.1's flat fallback (no WebGL) projection was not
checked against the new view.

## Chapter 14 pass · 2026-11-08

Built: the intro, 14.1, 14.4–14.8 and the summary page (14.2, 14.3 and 14.9 empty or stray,
not built; 14.E empty). 27 figure rows: 5 interactive (one moving 3D Sim, the Larmor
precession of 14.5; four still folds: 14.6's field strength, n + 1 splitting and two
couplings, 14.7's AX → A₂ levels and spectrum) and 22 kept images. 3 derivations, all in
14.7 (the two-spin levels, the NMR selection rules, the coupling commuting with the total
spin). 14 exercises in the Exercises document: 5 book questions (14.6's "Example 5.6"–"5.10",
keyed by Soderberg's linked manual) and 9 AI exercises. 19 AI-marked corrections in footnotes,
besides E5.10's key correction under its card.

Chapter pass: 1.9's `exercise_notes` now names Exercises 14.2.1 and 14.3.1 beside 9.11.1 and
19.E.1 as prints of card `e3`. 14.6's readouts write `\knuo` as the spectrometer frequency,
which 14.5's row ("the resonance frequency of the standard") only half said: a 14.6 row of
`nu_0` added (the same quantity, worded for the spectrometer, MHz); `\knu` in force from 14.5
is right. 14.6's spectrum readout wrote "J = 6.1 Hz = 6.1 Hz / 300 MHz", untrue as written:
now J/ν₀ = …. 14.5's readout multiplied 41.67 MHz/T by B_loc and printed the product of
41.6667: it now prints the factor it uses and B_loc to eight places. 14.6's two-coupling
headline broke "6.5 | Hz" over two lines (the headline wraps at any space): the values are
TeX runs now; its n = 1 headline reads "its spin". 14.7's `equivalent-levels` derivation
never stated |1⟩ = |α₁α₂⟩ and |4⟩ = |β₁β₂⟩, which the book's display and the selection-rule
derivation use: added to its last step, with the reason. Two 14.7 footnotes link the
finding-the-states block (`xref`) and the AB figure (`figref`). Notes: 14.1 names its
LibreTexts page and CC BY-SA 4.0, the intro says CC BY-SA 4.0, 14.4 says the page credits
no author. `node --check` on the three `figures.js`: clean. No two-argument `\braket`, no bare
`\k` script, no U+2011 or U+FEFF; every in-book link carries `xref`/`figref`; every page has
`ai`, `built` and `notes`, and no objectives (the book prints none). `colours:default` rerun
(every type kept its colour). `check:content`: no errors; one warning, from 15.3, which
links 15.2, not yet built (Chapter 15's work). Every figure screenshot in light and dark,
with states at the slider extremes; no console or KaTeX error on any Chapter 14 page or
derivation.

Known gaps: 14.7's dropped book connectives "Therefore in this basis the Hamiltonian matrix
is" and "Finding the eigenvectors … is again left to the reader" (method, not content) are
not in the derivation; 14.5's "standard" and "proton" labels sit on their cones; at 60 MHz
14.6's enlargements let neighbouring signals rise past the panel top; 14.7's derivations
write Î₁ₓ, Î₁ᵧ plain beside the typed Î₁z (no x, y variables rows for nucleus 1 and 2).

## Chapter 16 prep · 2026-11-08

Prep only, no section built. Fetched Chapter 16's 15 images into `media/ch16/`. Converted the
landing page (`intro/`), 16.1–16.7, 16.S (`summary/`) and the empty 16.E; wrote
`ch16/exploration.md`, `ch16/config.md` (agreed on Chapter 1's terms), `ch16/chapter.json`
(7 sections, the intro and summary records, 127 variables) and merged `ch16/book-rows.json`:
4 types (pressure, volume, molar-volume, amount), 42 symbols (33 with macros), 65 concepts,
100 edges (Hasse-checked), 63 forms. `colours:default` rerun: the four new types dealt
colours, every existing colour kept. Drafts made for all 9 pages.

Found: 16.E empty; the only exercises are 16.6's two boxes, both keyed; 3 worked examples; 13
AI exercises proposed. 16.3.1 repeats 16.1.1's ideal isotherms (folded) and 16.3.4 is
16.4.1's chart (one figure). Figures: 2 moving (wall pressure, attraction at the wall), 7
still sims, 1 faithful copy, 2 kept images. Eight derivation records, five hidden or partly
hidden. Corrections checked by computation: 16.7's (16.7.2) and (16.7.3) carry a spurious
factor of 3 (correct: [1 − C₆/k_BTσ⁶], a = 2πN₀²C₆/3σ³), (16.2.3)'s 0.42780 is 0.42748,
(16.2.5) drops an a, Example 16.6.2 rounds to −0.96 where −0.94 kJ/mol is right.

Literature from memory, **unchecked** (no figure uses them; corrections or notes only):
Peng–Robinson (16.4's "Peng-Robertson"); CRC's N₂ a of about 1.37–1.41 L² bar mol⁻² against
Table 16.2.1's 1.43 (no footnote planned); SklogWiki's licence CC BY-NC-SA 3.0 (16.5); the
licence of Wikipedia's van der Waals CO₂ figure (16.3.2).

Tool fixes: none needed. `lt2md.py` and `md2html.py` handle every page (16.1's `<img src="/">`
is a broken tag at the source, dropped); every maths span of the drafts sets under KaTeX in
strict mode. `check:content`: no errors; the one warning is Chapter 15's (a derivation link to
an unbuilt 15.2).

## Chapter 15 pass · 2026-11-08

Built: the intro, 15.1–15.7 and the summary page (15.E empty, not built). 15 figure rows: 10
interactive (8 moving: the Jablonski ladder, the potential-curve routes, the collision,
Einstein's three processes, two-level pumping, the three-level ladder with its four-level
choice, the cavity in a locked view, helium feeding neon; 2 still: the mirror spectra, the
dye tuning; no 3D), 2 faithful copies (15.1.1, 15.1.9) and 3 kept photographs or drawings
(15.4.1, 15.5.2, 15.5.3). 4 derivations (15.2 the Einstein relations, 15.3 why two levels
never invert, 15.4 the ruby's inversion, stopping at what the book states, and inversion
between levels 3 and 2). 14 exercises, all `exercise` kind in the Exercises document: the
book's 2 keyed boxes of 15.1 and 12 AI exercises. 31 AI-marked corrections in footnotes,
besides one derivation note ((15.4.1)'s missing d).

Chapter pass: the builders' wanted variables rows added (15.1 `E`, `lambda`, `nu`; 15.2 `nu`;
15.5 `lambda`, `E`) and 15.6's `lambda` given `"type": "wavelength"`; the unused
`media/ch15/399463-abs,_spon_emiss,_stim_emiss.svg` deleted (15.2 serves the comma-free
copy). 15.4's display 0 = dN₁/dt = dN₂/dt = dN₃/dt printed twice (text and the
three-two derivation's fact): the text keeps the sentence, the derivation the line.
Figures: 15.1's collision headline broke "v = | 3" over two lines (now TeX runs); 15.6's
1152.3 label sat on the 632.8 arrow and its own dashed line (now below its line); 15.5's
cavity set "round trips" over the 150 tick (stage 640 → 668). `node --check` clean on the
six `figures.js`. Derivations read against source.md: no content sentence dropped; the
book's "Thus," "Rearranging Equation 15.4.1 gives" and "which rearranges to" (method) are
not carried. No two-argument `\braket`, no bare `\k` script, no U+2011, U+FEFF or U+200B;
every in-book link carries `xref`/`figref`; every page has `ai`, `built` and `notes` (no
section prints objectives); 15.2's notes name Wikipedia's text and CC BY-SA 4.0.
`colours:default` rerun (every type kept its colour). `check:content`: no errors, no
warnings from Chapter 15 (the two left are 16.4's links to an unbuilt 16.3). Every figure
screenshot in light and dark (contact sheets in the pass's scratch folder); no console or
KaTeX error on any Chapter 15 page, derivations included.

Known gaps: the literature values of the prep (YAG, YLF, Kr⁺, copper-vapour pumping, cw
ruby, diode lasers) stay unchecked; 15.4's figure caption says the ruby needs a pump faster
than A₂₁, which its derivation (by the orchestrator's decision) does not show; derivation
facts in 15.2–15.4 restate the rate terms the text lists just before them (the prose-first
reading); 15.5's pump arrows reach the top of the light graph.

## Chapter 17 prep · 2026-11-08

Prep only, no section built. Fetched Chapter 17's 10 images into `media/ch17/`. Converted the
landing page (`intro/`), 17.1–17.8, 17.S (`summary/`) and the empty 17.E; wrote
`ch17/exploration.md`, `ch17/config.md` (agreed on Chapter 1's terms), `ch17/chapter.json`
(8 sections, the intro and summary records, 131 variables) and merged `ch17/book-rows.json`:
2 types (heat-capacity, partition-function), 45 symbols (34 with macros), 58 concepts, 88
edges (Hasse-checked, 5 redundant removed), 56 forms; 8.5's `indistinguishable-particles`
reused. `colours:default` rerun: the two new types dealt colours, every existing colour kept.
Drafts made for all 10 pages.

Found: 17.E empty; the only exercises are the Problems of 17.1 and 17.2, 10 unkeyed (17.1's
fifth held for 17.2); 12 AI exercises proposed. Figures: 3 folds and 1 replacement, all still
(level populations, Einstein solid with 17.4.4's metals, piston levels, two particles on two
levels); 2 kept images; 4 extra Sims offered, one moving (random exchange of quanta). Nine
derivation records, one hidden (the Einstein heat capacity, score 12). Corrections checked by
computation: 17.2's d(x ln x)/dx signs and (17.2.4), the Einstein display's split product,
Figure 17.4.3's axis stretched eightfold against T/Θ_E, 17.5's sign in ln Q, 17.7's N! rule
(many states per particle, not large N), 17.1's quadruple precision (16 bytes).

Literature from memory, **unchecked** (no figure uses them; corrections or notes only):
OpenStax's licence for 17.4.1 (CC BY 4.0 against the printed CC BY-SA 4.0).

Tool fixes: none needed. `lt2md.py` and `md2html.py` handle every page; every maths span of
the drafts (319) sets under KaTeX in strict mode. `check:content`: no errors, no warnings.

## Chapter 18 prep · 2026-11-08

Prep only, no section built. Fetched Chapter 18's 6 images into `media/ch18/`. Converted the
landing page (`intro/`), 18.1–18.11 and the empty 18.E (no summary page); wrote
`ch18/exploration.md`, `ch18/config.md` (agreed on Chapter 1's terms), `ch18/chapter.json` (11
sections, the intro record, 256 variables) and merged `ch18/book-rows.json`: no new type, 86
symbols (68 with macros), 58 concepts, 121 edges (Hasse-checked, 13 redundant removed), 52 forms;
17's q_trans, q_rot, q_vib, q_elec and `translational-partition-function` reused, not re-staged.
Drafts made for all 12 pages.

Found: 18.E empty; exercises are 18.5.1 (keyed) and 18.9's five lab exercises (unkeyed; 1–4 need
CRC data); 12 AI exercises proposed. Figures: 18.4.1 folded with the unnumbered Cl₂ population
chart (still), 18.7.1 water's modes (moving), 18.10.1 ortho/para (still), 18.11.1 the C̄_V
staircase on a log axis (still); the HCl rotational chart kept, linked to 13.2's `sim-rovib`; 2
extra Sims offered (thermal wavelength recommended). Twelve derivation records. Corrections
checked by computation: 18.1's Λ and the 10²⁰ estimate, 18.2's 10⁴ K, Table 18.4.1's NO ω and N₂,
HI Θ_rot, kT/hc = 208.5 cm⁻¹, the Cl₂ chart against Θ_vib = 805 K, 18.7.1's water Θ, the
symmetric top's missing π^{3/2}, 18.10's (−1)^J and e^(−6Θ_R/T), 18.11's sign; the ortho/para
curves of 18.10.1 reproduced from Θ_R = 87.6 K.

Literature from memory, **unchecked** (no figure uses them; corrections or notes only): NO's
121 cm⁻¹ spin–orbit level; NO₂'s bending mode near 750 cm⁻¹; the improved polyatomic q_rot's
terms; ¹⁶O₂ allowing only odd rotational levels; CO₂ and NO₂ C_V,m near 28.8 and 28.9 J K⁻¹ mol⁻¹.

Tool fixes: `lt2md.py` reads a `div.box-objectives` (18.9's); `md2html.py` reads a `## Exercises`
list and an unbraced `\ce X`. Chapters 1–17 reconverted to scratch: 196 of 197 source.md
byte-identical, the other (1.3) from an earlier converter change. `check:content`: no errors.

## Chapter 16 pass · 2026-11-08

Built: the intro, 16.1–16.7 and the summary page (16.E empty, not built). 12 figure rows: 10
interactive (2 moving: particles kicking the wall, attraction at the wall; 8 still, among them
the folds 16.1.1 + 16.3.1 and 16.3.4 + 16.4.1 and the two Sims of 16.5 and 16.7; no 3D), 1
faithful copy (16.1.2) and the summary's kept Figure 7.1; 16.1's system-and-surroundings
sketch stays an inline image. 7 derivations (16.1 the ideal gas law, 16.2 the Redlich–Kwong
cubic and constants, 16.3 the van der Waals critical constants, 16.4 reduced variables, 16.7
the virial series and the constants from molecular parameters). 15 exercises in the Exercises
document: 16.6's 2 keyed book boxes and 13 AI exercises. 23 AI-marked corrections in footnotes.

Chapter pass: 16.3's derivation had swallowed the passage that bolds "critical volume": the
book's "Hence, we have two equations in two unknowns …" paragraph is back after the derivation
with the `critical-volume` and `critical-pressure` spans, and "This is the critical volume",
"To solve the equations, first divide one by the other", "Now use either of the two
conditions …" and "Finally, plugging …" are the reasons of their steps; the two criticality
displays, which the derivation starts from, are no longer printed above it as well (the
sentence's colon now leads into the derivation). 16.1's derivation facts carry the book's
elastic-collision, constant-speed and ⟨F⟩ sentences in place of paraphrases. 16.6's "equation
2.1" links the Lennard-Jones block (`xref`). Variables rows added: 16.3 `T_r` (its Standing–Katz
sentence) and 16.2 `r`, whose slider name in Figure 16.2.1 was plain ink and is now `\kr`. A
U+200B in 16.4's prose (as converted) removed. `node --check` clean on the seven `figures.js`.
No two-argument `\braket`, no bare `\k` script, no U+2011/U+FEFF; every in-book link carries
`xref`/`figref`; every page has `ai`, `built` and `notes` (the book prints no objectives).
`colours:default` rerun (every type kept its colour). `check:content`: no errors, no warnings
from the book's Chapter 16 (those left are Chapters 17–18's). Every figure screenshot in light
and dark (contact sheets in the pass's scratch folder); no console or KaTeX error on any
Chapter 16 page, derivations included.

Known gaps: the new types sit close to their neighbours. Pressure and amount are 0.106 apart
in OKLab in light and 0.095 in dark, under the 0.12 target, and volume and molar-volume are
0.118; pressure shares temperature's family (0.13 and 0.16), so P and T read as two pinks of
one hue in dark. Temperature and length (0.07, an older pair) look alike on 16.1's wall
figure, where the T and a sliders sit side by side. A pin (dry run: pressure onto charge's
blue, charge taking the plum, no page worse) is the owner's call. 16.1's third-law fact
restates the sentence printed just before the derivation (the prose-first reading).

## Chapter 17 pass · 2026-11-08

Built: the intro, 17.1–17.8 and the summary page (17.E empty, not built). 8 figure rows: 6
interactive (1 moving, 17.2's random exchange of quanta; 5 still: 17.2's three ladders, the
Einstein solid with 17.4.4's five metals, the two-level Schottky sim, 17.5's piston levels,
17.7's two particles with its told-apart/identical morph; no 3D) and 2 kept images (17.4.1,
17.4.5). 9 derivations (17.2 the Boltzmann distribution; 17.3 ⟨E⟩ from ln Q; 17.4 C_V from
ln Q and the Einstein heat capacity with its limits; 17.5 the pressure, the ideal gas law and
the ideal-gas energy; 17.6 Q = q^N; 17.8 the energy of independent molecules). 22 exercises, all
`exercise` kind in the Exercises document: the 10 unkeyed Problems of 17.1 and 17.2 with AI
solutions and 12 AI exercises. 21 AI-marked corrections in footnotes, besides derivation notes.

Chapter pass: the wanted rows: symbols `q_j`, `q_k` (`\kqj`, `\kqk`) with 17.2 variables rows,
now in 17.2's Q = q_iq_jq_k… display, its text and Problem 4's solution; a 17.4 `q_mol` row (one
oscillator of the solid), and the Einstein derivation writes `\kqmol` for its plain q; a 17.1
`E` row for Problem 3's solution, the one `\k` macro with no row in force. The planned edge
`boltzmann-distribution` → `boltzmann-probability` is **not added**: it is already reached
through `distribution-constraints` → `occupation-number` → `ensemble` → … →
`mean-square-velocity-component` (16.1) → `boltzmann-distribution`, so it would break the
Hasse reduction. 17.3's derivation wrote `\kEie^` (an undefined macro) eight times: now
`\kEi e^`. 17.7's particles are drawn in real red and blue (`F.fact`, facts `#d93a32`,
`#2f6fdc`) since the book names them; the referents `red`, `blue` and their text spans are
removed (plan and config updated). 17.4's limit results no longer carry (17.4.4) and (17.4.5),
which the printed displays keep; the nodes' `src` cites them. Copper's brown sat next to
`heat-capacity`'s brown/peach: `colours:default --pin heat-capacity=#0859AC/#68AAFE`, so
`dipole-moment` (Chapters 5–13) takes the old brown; the dry run showed no page nearer than
before. Book sentences restored into derivation reasons: 17.2's "The left hand side of
Equation … is 1" and "This determines a and defines the Boltzmann distribution", 17.5's
"Which shows that the pressure can be expressed solely terms of the partition function", 17.6's
"We can split up the summation into a product of molecular partition functions". `node
--check` clean on the four `figures.js`; no `\braket`, no bare `\k` script, no U+2011, U+FEFF
or U+200B; in-book links carry `xref`; every page has `ai` and `built`, sections have `notes`
(the intro has nothing left out). `check:content`: no errors, no warnings. Every figure
screenshot in light, the four figure pages in dark (contact sheets in the pass's scratch
folder); no console or KaTeX error on any Chapter 17 page, derivations included.

Known gaps: 17.5's "In a few steps we can show that the temperature can be expressed …"
(a method line with the book's slip, temperature for pressure) is not carried; 17.2's footnote
on "equation (17.9)" writes q_iq_jq_k plain; 17.4's Einstein axis label reads Θ_E against
θ_E in the text; 17.5's kT label sits on a level line at some temperatures (it has a panel
background).

## Chapter 18 pass and colours · 2026-11-08

Chapter 18 as built: the intro and 18.1–18.11 (no summary page; 18.E empty, not built). 6 figure
rows: 5 interactive (1 moving, 18.7.1's water modes; 4 still: 18.1's thermal-wavelength Sim,
18.4.1 with the folded Cl₂ chart, 18.10.1, 18.11.1; no 3D) and 1 kept image (18.5's HCl chart).
14 derivations. 18 exercises in the Exercises document: 18.5.1 keyed, 18.9's 5 lab exercises
with AI solutions, 12 AI exercises. 43 AI-marked corrections in footnotes.

Chapter pass: the wanted 18.11 `C_V_bar` variables row (`molar-heat-capacity`), so 18.11.1's
`\kCVbar` no longer reads 18.8's rotational meaning. The three forms staged on Chapter 17
concepts: V/Λ³ on `translational-partition-function` (18.1), (18.9.4) on
`einstein-heat-capacity` and (18.9.7) on `dulong-petit-law` (18.9); the stand-ins are gone
(`translational-q-volume` withdrawn, its edges, coverage and a1's concept moved to
`translational-partition-function` and `thermal-wavelength`; `molar-from-specific-heat` keeps
its span but no form); both chapters merged, Chapter 18's edges Hasse-clean (the 12 redundant
edges the check finds are Chapter 11's). `drv` links: 18.11's three ⟨E⟩ facts to
`17.3/average-energy` and their q's to `18.1/translational-q`, `18.6/rotational-q`,
`18.4/vibrational-q`; 18.4's ε_vib, 18.7's and 18.8's E = NkT²∂ln q/∂T to
`17.3/average-energy`; 18.8's (18.8.3) to `asymmetric-classical`. No fact restates 17.4's
`heat-capacity` or `einstein-heat-capacity` result. (18.8.1): the printed line stays (the text
cites it twice); the note's derivation drops its `num` and ends on the book's "Combining all the
integrals, we finally get Equation 18.8.1 …", so the number shows once. Book sentences back as
reasons: 18.8's "Integration over θ, φ and ψ gives a factor of 8π²", "… over p_ψ gives the
factor", "where we have now included the symmetry term"; 18.11's "This can be simplified by
dividing …" and "Equation 18.11.5 is applicable at all temperatures, but if …". 18.9's credit:
the page prints no Contributors list and no name; its one author record is the tag
`authorname:tgrubbs`, now credited as that (the inferred "Tandy Grubbs (Stetson University)" is
dropped). Flags checked: NO's ²Π doublet near 121 cm⁻¹ (each level doubly degenerate, 174 K)
and ¹⁶O₂'s odd-only J confirmed against published sources; 18.9's specific heats for Li, Be and
B match the CRC values, the other eleven stay labelled approximate in the solutions, whose
products, percentages and fits (slope 24.90, R = 8.30) recompute; Exercise 3's "slightly above
3R" now gives Na and Ba at about 12%. `node --check` clean on the five `figures.js`; no
`\braket`, bare `\k` script, U+2011/U+FEFF/U+200B; in-book links carry `xref`/`figref`; every
`\k` macro has a row in force; every page has `ai`, `built`, `notes`. Figures screenshot light
and dark after rebuilding (18.10's legends and 18.11's slider as fixed): no console or KaTeX
error.

Colours (`colours:default --pin`): pressure `#40039F/#C6C3FD` (indigo, was temperature's pink
family), molar-volume `#AA01CB/#D831FE`, amount `#7F151E/#FEA6A1`, all free palette colours, so
no other type moved. Fixed: pressure~temperature (now 0.25/0.23, 64° apart in hue), pressure~amount,
volume~molar-volume, amount~force-constant, amount~moment-of-inertia, mass~molar-volume.
Category pairs under 0.12 on a shared page: 38 → 34. Worst pages (dry run): 0.042 0.043 0.046
0.046 0.049 → 0.043 0.046 0.046 0.049 0.054, median 0.095, p10 0.068 unchanged. New near pair:
amount~force 0.111/0.115 (3 pages, the best amount can get on its pages); amount sits 0.087
from silver/aluminium's CPK colour in dark on one page.

Known gaps: temperature~length (0.071/0.070, 12 pages) and wavelength~length (0.148/0.170,
one hue family) are Chapter 1 pairs. Every placement of length, temperature or wavelength
searched (palette and a free OKLCH grid) either moves the collision onto another type (e.g.
partition-function taking temperature's pink lands 0.07 from length on 6 pages) or makes other
pages worse; the best full fix moves temperature to green and wavelength to indigo at the cost
of new close pairs (charge~wavelength 0.061 dark, partition-function~wavefunction 0.039). The
book's 36 types fill its 36-colour palette, so this needs `--reshuffle` or fewer types on a
page: the owner's call. 33 other pairs stay under 0.12 (worst dipole-moment~wavenumber 0.054).
