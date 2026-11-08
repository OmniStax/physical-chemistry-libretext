# Config: Physical Chemistry (LibreTexts), Chapter 2

Proposed by the agent after the chapter exploration (2026-11-08). Status:
**agreed** on 2026-11-08: the user asked for Chapter 2 to be built after accepting Chapter 1's defaults; Chapter 1's choices carry over (book exercises kept, AI solutions for unkeyed ones, AI exercises proposed where a concept would have none), and the loop runs without per-section stops.

| Setting | Value |
|---|---|
| Chapter | 2 The Classical Wave Equation: landing page 11779 and sections 2.1–2.5 (13375–13379); 2.E (13380) is empty and not built |
| Front matter | the landing page's one paragraph (Fowler's opening on waves in elastic media) is the chapter's `intro/` page, with no lead, objectives or exercises |
| Start point | 2.1 |
| Unit of work | one section = one page, never folded |
| Loop | the chapter in one go, without per-section stops |
| Prose | verbatim; objectives, 2.1's "Summary" (to `summary_html`) pulled out; no page prints a Contributors list, so the authors come from the page tags (Fowler 2.1–2.4, Larsen and Fowler 2.5) |
| Headers | the book's `<h2>` headers kept; every section opens on prose before its first header and 2.3 has none, so each gets the agent's header there (root rule 3; proposals in `exploration.md`); 2.2's "A Vibrating Spring…" header kept as printed, its slip corrected in a note |
| Boxed notes | kept verbatim as titled notes (2.1: three; 2.2: two; 2.4: the linearity note and the "Principle of Superposition" definition box; 2.5: one untitled emphasis note) |
| Equation numbers | MathJax's: each display without `\nonumber`, and each numbered row of an unstarred `align`, as the fixed draft tool writes them; the hand-typed citations that name labels of other pages are corrected |
| Figures | as the table in `exploration.md`: the travelling sine wave (2.1.1), the travelling pulse (2.1.2 + 2.1.3), the standing modes (2.1.4 + 2.1.5), the shooting picture (2.3.1), the seven modes (2.4.1), two pulses passing (2.4.2), a new Sim of the string as a sum of modes (2.4), the rectangular (2.5.1) and circular (2.5.2) membranes; every book figure is replaced, none kept |
| 3D | the two membranes, mathematical 3D, azimuth free and elevation 20°–90° (top-down reachable, never from beneath), no spin or zoom, the flat nodal map as the WebGL fallback; everything else flat |
| Extra simulations | offered, not built unless picked: two sine trains making a standing wave (as a third choice of 2.4.2), a plane wave with its wave vector (2.5) |
| Derivations | built: the separated wave equation and the exponential solutions (2.2), Example 2.2.2, Example 2.3.1, the normal modes of a string and the sum of two solutions (2.4), harmonic waves in three dimensions and the modes of a rectangular membrane (2.5); not built: Example 2.2.1, the 2D wave equation from forces, the circular modes |
| Corrections | root rule 13's footnotes, the book's words kept (list in `exploration.md`) |
| Colour | categories in the chapter: displacement and time (new), length, velocity, frequency, wavenumber, energy; facts: the membranes' diverging displacement scale with its legend; referents: the two pulses of 2.4.2 |
| Licence | every page CC BY-NC-SA 4.0; the originals of 2.4.2 (ophysics.com, non-profit use) and 2.5.1 (© Dan Russell) are listed in `originals` only if the orchestrator accepts their terms |
| `ai` and `built` | `ai` names the model and effort that wrote each part; `built` is the build date |

## Exercise count report and the choice it asks for

- **Inline exercises**: 4 printed (2.3.1, 2.4.1, 2.5.1, 2.5.2); 4 keyed,
  available now; 0 unkeyed, so no AI solutions are needed.
- **Worked examples**: 4 (2.2.1, 2.2.2, 2.3.1, 2.5.1), kept whole; not
  exercises.
- **Conceptual questions, problems, 2.E**: none printed.
- **Proposed new**: 6, two each on the concepts the book leaves untested:
  the sine wave and f(x − vt) (2.1), separation of variables (2.2) and the
  normal-mode frequencies (2.4).

**The choice** (carried over from Chapter 1): the four keyed exercises kept
as printed, Exercise 2.3.1 held for 2.4 (it tests superposition, root rule
12); *AI exercises* for the six proposed. Every exercise is an item of the
Exercises document (`place: end`).
