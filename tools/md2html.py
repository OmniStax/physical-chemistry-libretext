#!/usr/bin/env python3
"""Draft a section's text.html and section.json from its source.md.

    python3 tools/md2html.py 1.1            writes ch01/1.1/draft.text.html and ch01/1.1/draft.section.json
    python3 tools/md2html.py 1.1 --stdout   prints the HTML
    python3 tools/md2html.py 3.summary      the chapter's N.S page, in ch03/summary/ (3.intro: its landing page)

Run from the book's folder. The draft is a starting point for the builder,
never the page itself: it keeps the book's words, maths, notes, examples
and tables in the page's markup, and leaves to the builder everything that
takes judgement (the sub-concept headers of root rule 3, the concept and
type spans of rule 7, which figures become simulations, the exercises'
answers and Bloom levels). What it does:

- `## Learning Objectives` goes to `objectives`; `## Summary` to
  `summary_html`; `## Contributors and Attributions` to `credits` (a
  draft-only field the builder turns into `notes`); a `## Conceptual
  Questions` or `## Problems` list to exercises of kind question.
- every other `##` opens a `<section id>` block with the book's header.
- `$$ … $$ {eq:label} n=K` becomes `$$ … \\tag{N.M.K} $$` with the
  converter's K (one per display without \\nonumber, an align included), and `[ref:eq:label]` becomes that number;
  `align`/`align*` become `aligned` so KaTeX can tag the display once.
- a figure of panels keeps each panel's caption in the row's `_panels`.
- `{term:…}` and `**…**` become `<strong>`, `*…*` `<em>` (inside a word too, 1*s*), `~~…~~` `<s>`.
- a FIGURE becomes a `photo` figure with its number, image and caption; an
  IMAGE a `figure` row with no number; the builder replaces those it turns
  into simulations.
- an example becomes `<div class="example" id="ex-N-M-K">` with its parts as
  `<h4>`, and so does an exercise box the book prints as "Example N.M.K";
  every other exercise box goes to the exercises table (place end) with its
  Answer as the solution.
- a note becomes `<div class="note">` with an eyebrow and the book's title.
- a table becomes a `div.book-table`.
"""
import html
import json
import os
import re
import sys

BOOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODULES = json.load(open(os.path.join(BOOK, "modules.json")))
ROOT_URL = MODULES["site"] + "/" + MODULES["root"]["path"] + "/"
PAGE_URL = {}
for c in MODULES["chapters"]:
    for p in [c] + c["sections"]:
        PAGE_URL[p["id"]] = MODULES["site"] + "/" + p["path"]


def slug(s):
    s = re.sub(r"\$[^$]*\$", "", s)
    s = re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")
    return s[:40].strip("-") or "block"


class Drafter:
    def __init__(self, sec, chdir, num=None):
        self.sec = sec
        self.num = num or sec  # the number the page prints its equations under: 5.S for 5.summary
        self.chdir = chdir
        self.eqnum = {}
        self.ids = set()

    def uid(self, base):
        b, k = base, 2
        while b in self.ids:
            b = f"{base}-{k}"
            k += 1
        self.ids.add(b)
        return b

    # ---- inline ----
    def inline(self, s):
        # the maths is set aside behind placeholders first, so emphasis that wraps a formula (3.1's *$p$*)
        # or sits inside a word (1*s*, *n*th) is read across the whole run of text
        maths = []

        def hold(m):
            # inline maths takes no number, so a \\nonumber there names nothing (4.6's Example 4.6.1)
            maths.append(self.katex(self.refs(re.sub(r"\s*\\(?:nonumber|notag)\b", "", m.group(0)))))
            return f"\x00{len(maths) - 1}\x00"
        p = re.sub(r"\$[^$]+\$", hold, s)
        p = self.refs(p)
        p = re.sub(r"!\[([^\]]*)\]\(media/([^)]+)\)", lambda m: f'<img src="/media/{self.chdir}/{m.group(2)}" alt="{html.escape(m.group(1))}">', p)
        p = re.sub(r"\[([^\]]+)\]\(page:(\d+)\)", lambda m: f'<a href="{PAGE_URL.get(m.group(2), "#")}">{m.group(1)}</a>', p)
        p = re.sub(r"\[([^\]]+)\]\((https?://(?:[^()\s]|\([^()\s]*\))+)\)", r'<a href="\2">\1</a>', p)
        p = re.sub(r"\{term:([^{}]+)\}", r"<strong>\1</strong>", p)
        p = re.sub(r"\*\*(?=\S)([^*\n]+?)(?<=\S)\*\*", r"<strong>\1</strong>", p)
        # an emphasis opens on a non-space and closes after one; a word may run on either side (1*s*, *n*th)
        p = re.sub(r"(?<!\*)\*(?=[^\s*])([^*\n]+?)(?<=[^\s*])\*(?!\*)", r"<em>\1</em>", p)
        p = re.sub(r"~~([^~\n]+?)~~", r"<s>\1</s>", p)
        p = p.replace("$", "&#36;")
        return re.sub(r"\x00(\d+)\x00", lambda m: maths[int(m.group(1))], p)

    @staticmethod
    def ce(tex):
        """\\ce{…} (mhchem) as upright text with mhchem's two habits a formula needs:
        a count after an element is a subscript (O2, Li2) and a mass number after
        ^ a superscript of all its digits (^35Cl, ^1H). The braces are matched, so
        a formula with its own groups survives (H^{35}Cl, ^{12}C^{16}O, Li^{2+}),
        and # is mhchem's triple bond, written \\equiv."""
        out, i = [], 0
        while True:
            k = tex.find("\\ce", i)
            j = k + 3
            while 0 <= k and j < len(tex) and tex[j] == " ":
                j += 1
            if k < 0 or j >= len(tex) or tex[j] != "{":
                out.append(tex[i:] if k < 0 else tex[i:j])
                if k < 0:
                    return "".join(out)
                i = j
                continue
            depth, a = 0, j
            while j < len(tex):
                depth += {"{": 1, "}": -1}.get(tex[j], 0)
                j += 1
                if depth == 0:
                    break
            body = tex[a + 1:j - 1]
            body = re.sub(r"\^(\d+)", r"^{\1}", body)
            body = re.sub(r"(?<=[A-Za-z)])(\d+)(?![^{]*\})", r"_{\1}", body)
            body = body.replace("#", "{\\equiv}")  # mhchem's triple bond (9.10's C#C, N#N), a parameter sign to KaTeX
            out.append(tex[i:k] + "\\mathrm{" + body + "}")
            i = j

    @staticmethod
    def katex(tex):
        """What the site's MathJax has and the app's KaTeX lacks: \\ce (mhchem),
        \\op (the site's operator hat), \\cancelto (the cancel package), \\mbox,
        the two-argument \\braket,
        and the increment sign U+2206, which KaTeX has no metrics for."""
        tex = Drafter.ce(tex)
        tex = re.sub(r"\\mbox\s*\{", r"\\text{", tex)  # KaTeX has \\text, not \\mbox
        tex = tex.replace("\u2206", "\\Delta ")  # the increment sign, which KaTeX has no metrics for
        tex = tex.replace("\u2011", "-")  # the non-breaking hyphen (6.2's $n‑1$), which KaTeX has no metrics for
        tex = tex.replace("\ufeff", "")  # a stray zero-width no-break space (7.4's E_n^o\ufeff +), which KaTeX has no metrics for
        tex = tex.replace("\u2010", "-")  # the hyphen U+2010 written for a minus (8.8's $M_l = ‐4$), which KaTeX has no metrics for
        tex = tex.replace("\u2019", "'")  # a right quote written for a prime (8.3's $r’$)
        tex = tex.replace("\u00bd", "\\tfrac{1}{2}")  # the vulgar fraction ½ (8.8's $^2S_{½}$), which KaTeX has no metrics for
        tex = tex.replace("\u0127", "\\hbar ")  # ħ typed in maths (8.4's $+ħ/2$)
        tex = re.sub(r"\\label(?!\s*\{)", "", tex)  # a bare \\label with no argument (8.4's γ_s display), which KaTeX cannot parse
        tex = re.sub(r"\\op\s*\{([^{}]*)\}", r"\\hat{\1}", tex)
        # the site's \\braket{a}{b} takes two arguments; KaTeX's takes one, \\braket{a|b} (4.S, 3.S)
        tex = re.sub(r"\\braket\s*\{([^{}]*)\}\s*\{([^{}]*)\}", r"\\braket{\1|\2}", tex)
        tex = re.sub(r"\\op\s+(\\?\w)", r"\\hat{\1}", tex)
        out, i = [], 0
        while True:
            k = tex.find("\\cancelto", i)
            if k < 0:
                out.append(tex[i:])
                break
            args, j = [], k + len("\\cancelto")
            for _ in range(2):
                while j < len(tex) and tex[j] == " ":
                    j += 1
                if j >= len(tex) or tex[j] != "{":
                    break
                depth, a = 0, j
                while j < len(tex):
                    depth += {"{": 1, "}": -1}.get(tex[j], 0)
                    j += 1
                    if depth == 0:
                        break
                args.append(tex[a + 1:j - 1])
            if len(args) < 2:
                out.append(tex[i:k + 1])
                i = k + 1
                continue
            # \cancelto{v}{X}: X struck through, with the value it goes to above
            out.append(tex[i:k] + f"\\overset{{\\to\\,{args[0]}}}{{\\cancel{{{args[1]}}}}}")
            i = j
        return "".join(out)

    def mathfix(self, s):
        """The inline maths of a plain string (a figure's caption, an exercise's title) through katex()."""
        return re.sub(r"\$[^$]+\$", lambda m: self.katex(m.group(0)), s)

    def refs(self, s):
        return re.sub(r"\[ref:eq:([^\]]+)\]", lambda m: self.eqnum.get(m.group(1)) or self.foreign(m.group(1)), s)

    def foreign(self, lab):
        """A \\ref to a label another page defines (7.S cites 5.S's Taylor expansion,
        chap:intro:eq:taylorpotential): that page's number, found in the converted
        source.md files, with a warning; the label itself where none defines it."""
        for c in MODULES["chapters"]:
            for folder, num in [(s["number"], s["number"]) for s in c["sections"]] + \
                    ([("summary", c["summary"]["number"])] if c.get("summary") else []):
                f = os.path.join(BOOK, c["dir"], folder, "source.md")
                if not os.path.exists(f):
                    continue
                m = re.search(r"\{eq:" + re.escape(lab) + r"\} n=(\d+)", open(f).read())
                if m:
                    sys.stderr.write(f"warning: Equation {lab} is defined on {num}, not on this page\n")
                    return f"{num}.{m.group(1)}"
        sys.stderr.write(f"warning: Equation {lab} is defined on no page\n")
        return lab

    MARK = re.compile(r"(?:\{eq:([^}]+)\} )?n=(\d+)")

    def display(self, line):
        m = re.match(r"\$\$ (.*) \$\$((?: (?:\{eq:[^}]+\} )?n=\d+)*)\s*$", line)
        tex, marks = m.group(1), self.MARK.findall(m.group(2))
        tex = self.refs(tex)
        tex = self.katex(tex)  # the app's KaTeX has no mhchem, \\op or \\cancelto
        nums = list(dict.fromkeys(f"{self.num}.{n}" for lab, n in marks))  # one display, one number
        if len(nums) > 1 and re.search(r"\\begin\{align\}", tex):
            # several numbered rows: KaTeX's align takes a \tag per row and keeps \nonumber
            body = re.search(r"\\begin\{align\}(.*)\\end\{align\}", tex, re.S)
            rows = re.split(r"(\\\\(?:\[[^\]]*\])?)", body.group(1))
            it = iter(nums)
            for k in range(0, len(rows), 2):
                if rows[k].strip() and "\\nonumber" not in rows[k] and "\\notag" not in rows[k]:
                    rows[k] = rows[k].rstrip() + f" \\tag{{{next(it, '')}}} "
            tex = tex[:body.start(1)] + "".join(rows) + tex[body.end(1):]
            return f"$$ {tex} $$"
        tex = tex.replace("\\nonumber", "").replace("\\notag", "")
        tex = re.sub(r"\\begin\{align\*?\}", r"\\begin{aligned}", tex)
        tex = re.sub(r"\\end\{align\*?\}", r"\\end{aligned}", tex)
        if nums:
            tex += f" \\tag{{{nums[0]}}}"
        return f"$$ {tex} $$"

    # ---- blocks ----
    def blocks(self, lines):
        """paragraph-level markdown → HTML (no ## headers here)."""
        out, i = [], 0
        while i < len(lines):
            l = lines[i]
            if not l.strip():
                i += 1
                continue
            if l.startswith("$$"):
                out.append(self.display(l))
                i += 1
            elif l.startswith("> FIGURE") or l.startswith("> IMAGE"):
                j = i + 1
                while j < len(lines) and lines[j].startswith("> ") and not lines[j].startswith("> FIGURE") and not lines[j].startswith("> IMAGE"):
                    j += 1
                out.append(self.figure(lines[i:j]))
                i = j
            elif l.startswith("> EMBED"):
                out.append(f"<!-- embed dropped: {l[8:].strip()} -->")
                i += 1
            elif l.startswith("> TABLE"):
                j = i + 1
                while j < len(lines) and (lines[j].startswith(">") or lines[j].startswith("|") or not lines[j].strip()):
                    if not lines[j].strip() and j + 1 < len(lines) and not lines[j + 1].startswith("|"):
                        break
                    j += 1
                out.append(self.table(lines[i:j]))
                i = j
            elif l.startswith("> "):
                j = i
                while j < len(lines) and lines[j].startswith(">"):
                    j += 1
                inner = [x[2:] if x.startswith("> ") else "" for x in lines[i:j]]
                out.append("<blockquote>" + "\n".join(self.blocks(inner)) + "</blockquote>")
                i = j
            elif re.match(r"^(-|\d+\.|[a-z]\.) ", l):
                j = i
                items = []
                ordered = not l.startswith("- ")
                alpha = bool(re.match(r"^[a-z]\. ", l))
                while j < len(lines) and (re.match(r"^(-|\d+\.|[a-z]\.) ", lines[j]) or lines[j].startswith("   ")):
                    if lines[j].startswith("   "):
                        items[-1].append(lines[j].strip())
                    else:
                        items.append([re.sub(r"^(-|\d+\.|[a-z]\.) ", "", lines[j])])
                    j += 1
                tag = "ol" if ordered else "ul"
                attr = ' type="a"' if alpha else ""
                out.append(f"<{tag}{attr}>" + "".join(f"<li>{self.item(x)}</li>" for x in items) + f"</{tag}>")
                i = j
            elif l.startswith("**") and l.rstrip().endswith("**"):
                out.append(f"<h4>{self.inline(l.strip()[2:-2])}</h4>")
                i += 1
            elif l.startswith("### "):
                out.append(f"<h3>{self.inline(l[4:])}</h3>")
                i += 1
            else:
                out.append(f"<p>{self.inline(l)}</p>")
                i += 1
        return out

    def item(self, ls):
        """A list item: one run of prose, or paragraphs around a display, a
        table or a figure it holds (Example 11.2.2's table of α_j and C_j
        sits inside its first item)."""
        def block(x):
            return x.startswith("$$") or x.startswith("> ") or x.startswith("|")
        if not any(block(x) for x in ls):
            return self.inline(" ".join(x for x in ls if x))
        paras, cur = [], []
        for x in ls + [""]:
            if block(x) or not x:
                if cur:
                    paras.append(" ".join(cur))
                    cur = []
                if x:
                    paras.append(x)
            else:
                cur.append(x)
        return "\n".join(self.blocks(paras))

    def figure(self, ls):
        head = ls[0]
        src = re.search(r"src=media/(\S+)", head)
        src = f"/media/{self.chdir}/{src.group(1)}" if src else ""
        alt = next((x[7:] for x in ls if x.startswith("> alt: ")), "")
        # a caption citing an equation keeps its number in the row as in the text (7.1.3, 7.4.2)
        cap = self.refs(next((x[11:] for x in ls if x.startswith("> caption: ")), ""))
        # the row's caption is set under the page's macros, which have no mhchem (9.2.1's $\ce{H2^{+}}$)
        cap = self.mathfix(cap)
        parts = [re.search(r"src=media/(\S+)", x).group(1) for x in ls[1:] if x.startswith("> part ")]
        panels = [x[9:] for x in ls if x.startswith("> panel: ")]
        num = re.search(r"\{fig:([^}]+)\}", head)
        if num:
            n = num.group(1)
            fid = self.uid("fig-" + n.replace(".", "-"))
            self.figures.append({"id": fid, "kind": "photo", "number": n, "draws": [],
                                 "_src": [src] + [f"/media/{self.chdir}/{p}" for p in parts], "_caption": cap,
                                 **({"_panels": panels} if panels else {})})
            # each panel keeps its own alt text, the one under its `> part` line (4.1.4)
            alts, k = [], -1
            for x in ls:
                if x is head or x.startswith("> part "):
                    k += 1
                    alts.append("")
                elif x.startswith("> alt: ") and k >= 0 and not alts[k]:
                    alts[k] = x[7:]
            srcs = [src] + [f"/media/{self.chdir}/{p}" for p in parts]
            imgs = "".join(f'<img src="{s}" alt="{html.escape(alts[i] if i < len(alts) and alts[i] else alt)}">' for i, s in enumerate(srcs))
            return (f'<figure class="photo" id="{fid}" data-figure="{n}">\n  {imgs}\n'
                    f'  <figcaption><span class="eyebrow">Figure {n}</span><span>{self.inline(cap)}</span></figcaption>\n</figure>')
        fid = self.uid("img-" + slug(os.path.basename(src))[:24])
        self.figures.append({"id": fid, "kind": "figure", "originals": [src], "draws": [], "_caption": cap})
        capspan = f"<span>{self.inline(cap)}</span>" if cap else ""
        return (f'<figure class="photo" id="{fid}">\n  <img src="{src}" alt="{html.escape(alt)}">\n'
                f'  <figcaption><span class="eyebrow">Figure</span>{capspan}</figcaption>\n</figure>')

    def table(self, ls):
        cap = next((x[11:] for x in ls if x.startswith("> caption: ")), "")
        m = re.match(r"(Table \d+(?:\.\d+)*)\s*:?\s*(.*)", cap)
        eyebrow, title = (m.group(1), m.group(2)) if m else ("Table", cap)
        rows = [x for x in ls if x.startswith("|")]
        body = []
        for k, r in enumerate(rows):
            if re.match(r"^\|(\s*---\s*\|)+\s*$", r):
                continue
            cells = [c.strip() for c in re.split(r"(?<!\\)\|", r.strip())[1:-1]]
            tag = "th" if k == 0 else "td"
            row = []
            for c in cells:
                attrs = ""
                while True:  # an irregular table's {span=N} and {rows=N}
                    m = re.match(r"\{(span|rows)=(\d+)\}", c)
                    if not m:
                        break
                    attrs += f' {"colspan" if m.group(1) == "span" else "rowspan"}="{m.group(2)}"'
                    c = c[m.end():]
                row.append(f"<{tag}{attrs}>{self.inline(c.replace(chr(92) + '|', '|'))}</{tag}>")
            body.append("<tr>" + "".join(row) + "</tr>")
        head, rest = body[:1], body[1:]
        return ('<div class="book-table">\n  <div class="tcap">' + f'<span class="eyebrow">{eyebrow}</span><span>{self.inline(title)}</span></div>\n'
                '  <table>\n    <thead>' + "".join(head) + "</thead>\n    <tbody>\n      " + "\n      ".join(rest) + "\n    </tbody>\n  </table>\n</div>")

    def boxes(self, lines):
        """split ::: boxes out of a run of lines."""
        out, i = [], 0
        buf = []
        while i < len(lines):
            m = re.match(r"^:::(example|exercise|note)(.*)$", lines[i])
            if m:
                out += self.blocks(buf)
                buf = []
                j = i + 1
                depth = 1
                while j < len(lines):
                    if re.match(r"^:::(example|exercise|note)", lines[j]):
                        depth += 1
                    elif lines[j].strip() == ":::":
                        depth -= 1
                        if depth == 0:
                            break
                    j += 1
                out.append(self.box(m.group(1), m.group(2).strip(), lines[i + 1:j]))
                i = j + 1
            else:
                buf.append(lines[i])
                i += 1
        out += self.blocks(buf)
        return [x for x in out if x]

    def box(self, kind, head, body):
        if kind == "note":
            m = re.match(r"\[([^\]]+)\]\s*(.*)", head)
            title = m.group(2) if m else head
            inner = "\n".join(self.boxes(body))
            h3 = f"<h3>{self.inline(title)}</h3>\n" if title else ""
            return f'<div class="note">\n<div class="eyebrow">Note</div>\n{h3}{inner}\n</div>'
        m = re.match(r"\{(?:ex|exr):([^}]+)\}\s*(?:\{printed:([^}]+)\}\s*)?(.*)", head)
        num, printed, title = (m.group(1), m.group(2), m.group(3)) if m else ("?", None, head)
        # an exercise box the book prints as "Example N.M.K" is a worked example and stays in the text (3.6, 5.5, 5.9)
        if kind == "exercise" and printed and printed.startswith("Example"):
            kind = "example"
        if kind == "example":
            eid = self.uid("ex-" + num.replace(".", "-").lower())  # 4.6's "Example 4.6.2A": ex-4-6-2a
            inner = "\n".join(self.boxes(body))
            # the label the book prints, where it names the other kind (3.7's "Exercise 3.7.2")
            t = (printed or f"Example {num}") + (f" · {self.inline(title)}" if title else "")
            return f'<div class="example" id="{eid}">\n<h3>{t}</h3>\n{inner}\n</div>'
        # exercise: prompt is everything before the first **Answer…**/**Solution…**
        k = next((i for i, l in enumerate(body) if re.match(r"^\*\*(Answer|Solution)", l)), len(body))
        prompt = "\n".join(self.boxes(body[:k]))
        sol = "\n".join(self.boxes(body[k:]))
        if not prompt.strip() and not sol.strip():
            # an empty box the site prints with no number and no words (6.4's last): nothing to keep
            sys.stderr.write(f"{self.sec}: empty exercise box {num} dropped\n")
            return ""
        eid = self.uid("e" + num.split(".")[-1].lower())  # two boxes may print one number (3.6); 4.6.2C: e2c
        self.exercises.append({"id": eid, "source_id": f"exr:{num}", "source_number": printed or f"Exercise {num}",
                               "kind": "exercise", "title": self.mathfix(title), "prompt": prompt, "book_answer": sol, "keyed": k < len(body)})
        return ""

    def run(self, md):
        lines = md.split("\n")
        lines = [l for l in lines if not l.startswith("<!--")]
        # number labelled displays in page order
        # the converter's n=K is MathJax's count (tags: all, a row of an align each)
        for l in lines:
            l = l.strip()
            if l.startswith("$$"):
                for lab, n in self.MARK.findall(l.rsplit("$$", 1)[-1]):
                    if lab and lab not in self.eqnum:
                        self.eqnum[lab] = f"{self.num}.{n}"
        self.figures, self.exercises = [], []
        title = lines[0][2:] if lines and lines[0].startswith("# ") else ""
        chunks, cur = [], ("", [])
        for l in lines[1:]:
            if l.startswith("## "):
                chunks.append(cur)
                cur = (l[3:], [])
            else:
                cur[1].append(l)
        chunks.append(cur)
        rec = {"objectives": [], "objectives_lead": "", "summary_html": "", "credits": []}
        sections = []
        for head, body in chunks:
            h = re.sub(r"\s*\{section:\w+\}", "", head)
            if "{section:objectives}" in head:
                # the lead-in, the list, then the section's opening prose up to the next header
                first = next((k for k, x in enumerate(body) if x.startswith("- ")), len(body))
                last = first
                while last < len(body) and body[last].startswith("- "):
                    last += 1
                rec["objectives"] = [self.inline(re.sub(r"^- ", "", x)) for x in body[first:last]]
                rec["objectives_lead"] = " ".join(x for x in body[:first] if x.strip())
                h, body = "", body[last:]
                if not any(x.strip() for x in body):
                    continue
            if "{section:attributions}" in head:
                rec["credits"] = [re.sub(r"<[^>]+>", "", self.inline(x[2:])) for x in body if x.startswith("- ")]
                continue
            if h.lower().startswith("summary"):
                rec["summary_html"] = "".join(self.boxes(body))
                continue
            if re.search(r"^solutions? to (practice )?problems", h, re.I):
                # the key to the list just before it: item k (with the lines under it) answers question k
                keys, cur_k = [], None
                for x in body:
                    if re.match(r"^\d+\.(\s|$)", x):
                        cur_k = [re.sub(r"^\d+\.\s*", "", x)]
                        keys.append(cur_k)
                    elif cur_k is not None:
                        cur_k.append(x)
                listed = [e for e in self.exercises if e["id"].startswith("cq")]
                for e, k in zip(listed, keys):
                    e["book_answer"] = "".join(self.boxes(k))
                    e["keyed"] = True
                continue
            if re.search(r"conceptual questions|problems", h, re.I):
                items = [re.sub(r"^\d+\. ", "", x) for x in body if re.match(r"^\d+\. ", x)]
                # an image under the last item belongs to it (12.14's BeH2 orbitals)
                after = [x for x in body[max((k for k, x in enumerate(body) if re.match(r"^\d+\. ", x)), default=len(body)) + 1:] if x.strip()]
                extra = "".join(self.boxes(after)) if items and after and all(re.match(r"^\[?!\[", x) for x in after) else ""
                for n, q in enumerate(items, 1):
                    self.exercises.append({"id": f"cq{n}", "source_id": re.sub(r"<[^>]+>|[$*{}]", "", q)[:40].strip(), "source_number": f"{h} {n}",
                                           "kind": "question", "prompt": self.inline(q) + (extra if n == len(items) else ""), "book_answer": "", "keyed": False})
                continue
            inner = self.boxes(body)
            if not inner and not h:
                continue
            bid = self.uid(slug(h) if h else "opening")
            hh = f"<h2>{self.inline(h)}</h2>\n" if h else "<h2>TODO header</h2>\n"
            sections.append(f'<section id="{bid}">\n{hh}' + "\n".join(inner) + "\n</section>")
        rec["title"] = title
        return "\n\n".join(sections) + "\n", rec


def main(argv):
    if not argv or argv[0] in ("-h", "--help"):
        print(__doc__)
        return
    sec = argv[0]
    ch = next(c for c in MODULES["chapters"] if str(c["number"]) == sec.split(".")[0])
    # 3.intro and 3.summary: the chapter's landing page and its N.S page, in intro/ and summary/
    front = sec.split(".", 1)[1] if sec.split(".", 1)[1] in ("intro", "summary") else None
    folder = os.path.join(BOOK, ch["dir"], front or sec)
    md = open(os.path.join(folder, "source.md")).read()
    # a summary page numbers its equations under its own printed number (5.S.1), not "5.summary"
    d = Drafter(sec, ch["dir"], ch["summary"]["number"] if front == "summary" else None)
    text, rec = d.run(md)
    if "--stdout" in argv:
        print(text)
        return
    open(os.path.join(folder, "draft.text.html"), "w").write(text)
    page = ch if front == "intro" else ch.get("summary") if front else next(s for s in ch["sections"] if s["number"] == sec)
    draft = {"id": front or sec, "module": page["id"], "chapter": str(ch["number"]), "title": page["title"],
             "licence": page["licence"], **rec, "equations": d.eqnum, "figures": d.figures, "exercises": d.exercises}
    json.dump(draft, open(os.path.join(folder, "draft.section.json"), "w"), indent=1, ensure_ascii=False)
    print(f"{folder}/draft.text.html, draft.section.json: {len(d.figures)} figures, {len(d.exercises)} exercises, {len(d.eqnum)} numbered equations")


if __name__ == "__main__":
    main(sys.argv[1:])
