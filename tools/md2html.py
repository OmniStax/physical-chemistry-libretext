#!/usr/bin/env python3
"""Draft a section's text.html and section.json from its source.md.

    python3 tools/md2html.py 1.1            writes ch01/1.1/draft.text.html and ch01/1.1/draft.section.json
    python3 tools/md2html.py 1.1 --stdout   prints the HTML

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
- `{term:…}` becomes `<strong>`, `*…*` `<em>`.
- a FIGURE becomes a `photo` figure with its number, image and caption; an
  IMAGE a `figure` row with no number; the builder replaces those it turns
  into simulations.
- an example becomes `<div class="example" id="ex-N-M-K">` with its parts as
  `<h4>`; an exercise box goes to the exercises table (place end) with its
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
    def __init__(self, sec, chdir):
        self.sec = sec
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
        parts = re.split(r"(\$[^$]+\$)", s)
        out = []
        for k, p in enumerate(parts):
            if k % 2:
                out.append(re.sub(r"\\ce\{([^{}]*)\}", r"\\mathrm{\1}", self.refs(p)))
                continue
            p = self.refs(p)
            p = re.sub(r"!\[([^\]]*)\]\(media/([^)]+)\)", lambda m: f'<img src="/media/{self.chdir}/{m.group(2)}" alt="{html.escape(m.group(1))}">', p)
            p = re.sub(r"\[([^\]]+)\]\(page:(\d+)\)", lambda m: f'<a href="{PAGE_URL.get(m.group(2), "#")}">{m.group(1)}</a>', p)
            p = re.sub(r"\[([^\]]+)\]\((https?://(?:[^()\s]|\([^()\s]*\))+)\)", r'<a href="\2">\1</a>', p)
            p = re.sub(r"\{term:([^{}]+)\}", r"<strong>\1</strong>", p)
            p = re.sub(r"(?<![\w*])\*([^*\n]+?)\*(?![\w*])", r"<em>\1</em>", p)
            p = p.replace("$", "&#36;")
            out.append(p)
        return "".join(out)

    def refs(self, s):
        return re.sub(r"\[ref:eq:([^\]]+)\]", lambda m: self.eqnum.get(m.group(1), m.group(1)), s)

    MARK = re.compile(r"(?:\{eq:([^}]+)\} )?n=(\d+)")

    def display(self, line):
        m = re.match(r"\$\$ (.*) \$\$((?: (?:\{eq:[^}]+\} )?n=\d+)*)\s*$", line)
        tex, marks = m.group(1), self.MARK.findall(m.group(2))
        tex = self.refs(tex)
        tex = re.sub(r"\\ce\{([^{}]*)\}", r"\\mathrm{\1}", tex)  # the app's KaTeX has no mhchem
        nums = list(dict.fromkeys(f"{self.sec}.{n}" for lab, n in marks))  # one display, one number
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
        """A list item: one run of prose, or paragraphs around a display it holds."""
        if not any(x.startswith("$$") for x in ls):
            return self.inline(" ".join(x for x in ls if x))
        paras, cur = [], []
        for x in ls + [""]:
            if x.startswith("$$") or not x:
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
        cap = next((x[11:] for x in ls if x.startswith("> caption: ")), "")
        parts = [re.search(r"src=media/(\S+)", x).group(1) for x in ls[1:] if x.startswith("> part ")]
        panels = [x[9:] for x in ls if x.startswith("> panel: ")]
        num = re.search(r"\{fig:([^}]+)\}", head)
        if num:
            n = num.group(1)
            fid = self.uid("fig-" + n.replace(".", "-"))
            self.figures.append({"id": fid, "kind": "photo", "number": n, "draws": [],
                                 "_src": [src] + [f"/media/{self.chdir}/{p}" for p in parts], "_caption": cap,
                                 **({"_panels": panels} if panels else {})})
            imgs = "".join(f'<img src="{s}" alt="{html.escape(alt)}">' for s in [src] + [f"/media/{self.chdir}/{p}" for p in parts])
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
            body.append("<tr>" + "".join(f"<{tag}>{self.inline(c.replace(chr(92) + '|', '|'))}</{tag}>" for c in cells) + "</tr>")
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
        m = re.match(r"\{(?:ex|exr):([^}]+)\}\s*(.*)", head)
        num, title = (m.group(1), m.group(2)) if m else ("?", head)
        if kind == "example":
            eid = self.uid("ex-" + num.replace(".", "-"))
            inner = "\n".join(self.boxes(body))
            t = f"Example {num}" + (f" · {self.inline(title)}" if title else "")
            return f'<div class="example" id="{eid}">\n<h3>{t}</h3>\n{inner}\n</div>'
        # exercise: prompt is everything before the first **Answer…**/**Solution…**
        k = next((i for i, l in enumerate(body) if re.match(r"^\*\*(Answer|Solution)", l)), len(body))
        prompt = "\n".join(self.boxes(body[:k]))
        sol = "\n".join(self.boxes(body[k:]))
        self.exercises.append({"id": "e" + num.split(".")[-1], "source_id": f"exr:{num}", "source_number": f"Exercise {num}",
                               "kind": "exercise", "title": title, "prompt": prompt, "book_answer": sol, "keyed": k < len(body)})
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
                        self.eqnum[lab] = f"{self.sec}.{n}"
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
            if re.search(r"conceptual questions|problems", h, re.I):
                items = [re.sub(r"^\d+\. ", "", x) for x in body if re.match(r"^\d+\. ", x)]
                for n, q in enumerate(items, 1):
                    self.exercises.append({"id": f"cq{n}", "source_id": re.sub(r"<[^>]+>|[$*{}]", "", q)[:40].strip(), "source_number": f"{h} {n}",
                                           "kind": "question", "prompt": self.inline(q), "book_answer": "", "keyed": False})
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
    folder = os.path.join(BOOK, ch["dir"], sec)
    md = open(os.path.join(folder, "source.md")).read()
    d = Drafter(sec, ch["dir"])
    text, rec = d.run(md)
    if "--stdout" in argv:
        print(text)
        return
    open(os.path.join(folder, "draft.text.html"), "w").write(text)
    page = next(s for s in ch["sections"] if s["number"] == sec)
    draft = {"id": sec, "module": page["id"], "chapter": str(ch["number"]), "title": page["title"],
             "licence": page["licence"], **rec, "equations": d.eqnum, "figures": d.figures, "exercises": d.exercises}
    json.dump(draft, open(os.path.join(folder, "draft.section.json"), "w"), indent=1, ensure_ascii=False)
    print(f"{folder}/draft.text.html, draft.section.json: {len(d.figures)} figures, {len(d.exercises)} exercises, {len(d.eqnum)} numbered equations")


if __name__ == "__main__":
    main(sys.argv[1:])
