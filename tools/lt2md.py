#!/usr/bin/env python3
"""Convert one LibreTexts page body (MindTouch view HTML) to markdown with LaTeX.

    python3 tools/lt2md.py source/pages/13381.json > out.md

Lossy but faithful to prose order: the book's words, maths and figures are
kept and the site's chrome (topic listings, edit anchors, scripts, styles) is
dropped. Needs BeautifulSoup 4. Markers, in the order a page prints them:

  # Title                         the page title, without its number.
  ## Learning Objectives {section:objectives}
                                  a section.box-objectives; its list follows.
  ## Heading / ### / ####         an h2, h3, h4 of the narrative. LibreTexts
                                  wraps every header in div.mt-section; only
                                  the header survives.
  ##### / ######                  an h5 or h6 that is not the title of a box
                                  (rare; the book uses h5 and h6 inside boxes).
  $…$                             inline maths, from \\( … \\).
  $$ … $$ {eq:label}              a display equation, from \\[ … \\]; the label
                                  is the book's \\label{…}, unique within the
                                  page (LibreTexts numbers equations N.M.K by
                                  order on the page; the number follows the
                                  marker as n=K). One with \\nonumber has no
                                  marker and no number.
  [ref:eq:label]                  \\ref{label}: a reference to an equation of
                                  this page, as the book writes "Equation \\ref{…}".
  {term:…}                        a bold (strong or b) word or phrase in prose,
                                  which is how the book marks a term it defines;
                                  *…* is emphasis.
  > FIGURE {fig:N.M.K} src=media/<file> width=…
  > alt: …  > caption: …          a <figure> whose caption begins "Figure N.M.K".
  > IMAGE {img:K} src=… width=…   an <img> outside a numbered figure (an
  > alt: …                        unnumbered figure, or an image inside an
                                  example, an exercise or a table).
  > EMBED src=…                   an iframe: a video, an applet or a
                                  simulation the page embeds.
  > TABLE {tab:K} cols=N          a table; `> caption:` when it has one. A
                                  regular table is a markdown table, an
                                  irregular one (spans, paragraphs in cells)
                                  says `irregular` and marks {span=N}/{rows=N}.
  :::example {ex:N.M.K} Title     a section.box-example; its h6 parts come
  …  **Solution** … :::           through in bold on a line of their own.
  :::exercise {exr:N.M.K} Title   a section.box-exercise; an Answer or Solution
  … **Answer** … :::              part, where the box has one, is in bold.
  :::note [kind] Title … :::      any other box (box-note, box-emphasis,
                                  box-definition, box-notewithlegend …), with
                                  kind the class without "box-".
  > quote                         a blockquote.
  [text](page:<id>)               a link to another page of the book, by its
                                  LibreTexts page id; [text](url) otherwise.
  ## Contributors and Attributions {section:attributions}
                                  the credits that close most pages, kept.

Warnings go to stderr: a figure without a number, an equation label used
twice, a box of a class the list above does not know.
"""
import json
import re
import sys
import urllib.parse

from bs4 import BeautifulSoup, NavigableString, Tag

BOOK_PATH = "Physical_Chemistry_(LibreTexts)"
KNOWN_BOXES = {"box-example", "box-exercise", "box-objectives", "box-note", "box-emphasis",
               "box-definition", "box-notewithlegend", "box-notewithoutlegend", "box-legend",
               "box-theorem", "box-procedure", "box-warning", "box-query", "box-notation"}


def warn(msg):
    sys.stderr.write(f"warning: {msg}\n")


class Converter:
    def __init__(self, page_ids, prefix=""):
        self.prefix = prefix  # the section number, for \\PageIndex
        self.page_ids = page_ids  # path → id, for links into the book
        self.labels = {}
        self.eq_count = 0
        self.img_count = 0
        self.tab_count = 0

    # ---- inline -------------------------------------------------------
    def inline(self, node):
        out = []
        for c in node.children:
            out.append(self.inline_one(c))
        return "".join(out)

    def inline_one(self, c):
        if isinstance(c, NavigableString):
            if c.__class__.__name__ in ("Comment", "CData", "ProcessingInstruction"):
                return ""
            return self.math_inline(str(c))
        if not isinstance(c, Tag):
            return ""
        name = c.name
        if name in ("script", "style"):
            return ""
        if name == "br":
            return "<br>"
        if name in ("strong", "b"):
            raw = self.inline(c)
            t = raw.strip()
            return self.keep_space(raw, f"{{term:{t}}}" if t and not t.startswith("$") else t)
        if name in ("em", "i"):
            raw = self.inline(c)
            t = raw.strip()
            return self.keep_space(raw, f"*{t}*" if t else "")
        if name in ("sub", "sup"):
            return f"<{name}>{self.inline(c)}</{name}>"
        if name == "a":
            t = self.inline(c)
            href = c.get("href", "")
            if not href or href.startswith("#"):
                return t
            return f"[{t}]({self.link(href)})"
        if name == "img":
            return self.image(c, inline=True)
        if name == "span" and c.get("id") and not c.get_text(strip=True):
            return ""
        return self.inline(c)

    @staticmethod
    def keep_space(raw, t):
        lead = " " if raw[:1].isspace() else ""
        trail = " " if raw[-1:].isspace() else ""
        return lead + t + trail if t else (" " if raw and raw.isspace() else "")

    def link(self, href):
        if BOOK_PATH in urllib.parse.unquote(href):
            path = urllib.parse.unquote(href.split("chem.libretexts.org/", 1)[-1]).split("#")[0]
            pid = self.page_ids.get(path)
            if pid:
                return f"page:{pid}"
        return href

    def page_index(self, s):
        """\\PageIndex{K} is how LibreTexts numbers boxes and figures: N.M.K."""
        pre = self.prefix + "." if self.prefix else ""
        s = re.sub(r"(?:\\\(\s*|\$)?\\PageIndex\s*\{\s*(\d+)\s*([^}]*)\}(?:\s*\\\)|\$)?",
                   lambda m: pre + m.group(1) + m.group(2).strip(), s)
        return s

    def math_inline(self, s):
        s = self.page_index(s)
        # \( … \) is inline; \[ … \] in a running paragraph is left to block()
        s = re.sub(r"\\\((.+?)\\\)", lambda m: "$" + self.refs(m.group(1).strip()) + "$", s, flags=re.S)
        s = self.refs(s) if "\\ref" in s else s
        return re.sub(r"\$\s*(\[ref:eq:[^\]]+\])\s*\$", r"\1", s)

    def refs(self, s):
        return re.sub(r"\\ref\s*\{\s*([^}]+?)\s*\}", lambda m: f"[ref:eq:{m.group(1)}]", s)

    # ---- display maths --------------------------------------------------
    def display(self, tex):
        tex = re.sub(r"\s*<br>\s*", " ", tex).strip()
        nonumber = "\\nonumber" in tex or "\\notag" in tex
        labels = re.findall(r"\\label\s*\{\s*([^}]+?)\s*\}", tex)
        tex = re.sub(r"\\label\s*\{[^}]*\}", "", tex)
        tex = tex.replace("\\nonumber", "").replace("\\notag", "").strip()
        tex = self.refs(tex)
        line = f"$$ {tex} $$"
        if labels:
            for lab in labels:
                if lab in self.labels:
                    warn(f"equation label {lab} used twice")
            if not nonumber:
                self.eq_count += 1
                self.labels[labels[0]] = self.eq_count
                line += f" {{eq:{labels[0]}}} n={self.eq_count}"
        elif not nonumber and "\\begin{align" not in tex:
            # MathJax tags every display (tags: all); the book's own numbers are by label
            self.eq_count += 1
            line += f" n={self.eq_count}"
        return line

    def paragraph(self, p):
        """A <p>, which may hold running text, one display or text around displays."""
        raw = self.inline(p)
        parts = re.split(r"\\\[(.+?)\\\]", raw, flags=re.S)
        out = []
        for k, part in enumerate(parts):
            if k % 2:
                out.append(self.display(part))
            else:
                t = re.sub(r"[ \t\r\n\xa0]+", " ", part).strip()
                if t:
                    out.append(t)
        return "\n\n".join(out)

    # ---- images, tables ------------------------------------------------
    def src(self, img):
        url = img.get("src", "")
        m = re.search(r"/@api/deki/files/(\d+)/([^?]+)", url)
        if m:
            return f"media/{m.group(1)}-{urllib.parse.unquote(m.group(2))}"
        return url

    def image(self, img, inline=False):
        self.img_count += 1
        width = img.get("width") or ""
        alt = (img.get("alt") or "").strip()
        if inline:
            return f"![{alt}]({self.src(img)})"
        lines = [f"> IMAGE {{img:{self.img_count}}} src={self.src(img)}" + (f" width={width}" if width else "")]
        if alt:
            lines.append(f"> alt: {alt}")
        return "\n".join(lines)

    def figure(self, fig):
        cap = fig.find("figcaption")
        captxt = re.sub(r"\s+", " ", self.inline(cap)).strip() if cap else ""
        m = re.match(r"(?:\{term:)?Figure\s*(\d+(?:\.\d+)*)\s*\}?\s*[:.]?\s*", captxt)
        imgs = fig.find_all("img")
        if not imgs:
            return self.children(fig)
        if not m:
            warn(f"unnumbered figure: {captxt[:60]!r}")
            out = [self.image(i) for i in imgs]
            if captxt:
                out.append(f"> caption: {captxt}")
            return "\n".join(out)
        num = m.group(1)
        lines = []
        for k, img in enumerate(imgs):
            width = img.get("width") or ""
            head = "> FIGURE" if k == 0 else "> part"
            lines.append(f"{head} {{fig:{num}}} src={self.src(img)}" + (f" width={width}" if width else "")
                         if k == 0 else f"{head} src={self.src(img)}" + (f" width={width}" if width else ""))
            alt = (img.get("alt") or "").strip()
            if alt:
                lines.append(f"> alt: {alt}")
        lines.append(f"> caption: {captxt[m.end():].strip()}")
        return "\n".join(lines)

    def table(self, t):
        self.tab_count += 1
        rows = t.find_all("tr")
        irregular = any(c.get("colspan") not in (None, "1") or c.get("rowspan") not in (None, "1")
                        or c.find(["p", "ul", "ol", "figure"]) and len(c.find_all("p")) > 1
                        for r in rows for c in r.find_all(["td", "th"]))
        cols = max((sum(int(c.get("colspan", 1) or 1) for c in r.find_all(["td", "th"])) for r in rows), default=0)
        head = f"> TABLE {{tab:{self.tab_count}}} cols={cols}" + (" irregular" if irregular else "")
        out = [head]
        cap = t.find("caption")
        if cap:
            captxt = re.sub(r"\s+", " ", self.inline(cap)).strip()
            out.append(f"> caption: {captxt}")
        out.append("")

        def cell(c):
            parts = [self.paragraph(p) for p in c.find_all("p")] if c.find("p") else [self.paragraph(c)]
            t = "<br>".join(x.replace("\n\n", " ") for x in parts if x).replace("|", "\\|")
            pre = ""
            if irregular:
                if c.get("colspan") not in (None, "1"):
                    pre += f"{{span={c['colspan']}}}"
                if c.get("rowspan") not in (None, "1"):
                    pre += f"{{rows={c['rowspan']}}}"
            return pre + t

        for k, r in enumerate(rows):
            out.append("| " + " | ".join(cell(c) for c in r.find_all(["td", "th"])) + " |")
            if k == 0 and not irregular:
                out.append("| " + " | ".join("---" for _ in range(cols)) + " |")
        return "\n".join(out)

    # ---- blocks --------------------------------------------------------
    def box(self, sec):
        cls = next((c for c in sec.get("class", []) if c.startswith("box-")), "box-note")
        if cls not in KNOWN_BOXES:
            warn(f"unknown box {cls}")
        title_tag = sec.find(["h5", "h6", "h4", "h3"])
        title = re.sub(r"\s+", " ", title_tag.get_text(" ", strip=True)) if title_tag else ""
        title = self.math_inline(title)
        header = sec.find("header")
        if header:
            header.decompose()
        elif title_tag:
            title_tag.decompose()
        if cls == "box-objectives":
            return "## Learning Objectives {section:objectives}\n\n" + self.children(sec)
        if cls in ("box-example", "box-exercise"):
            kind = "example" if cls == "box-example" else "exercise"
            pref = "ex" if kind == "example" else "exr"
            m = re.match(r"(?:Example|Exercise)\s*(\d+(?:\.\d+)*)\s*:?\s*(.*)", title)
            num, rest = (m.group(1), m.group(2)) if m else ("?", title)
            if not m:
                warn(f"{kind} without a number: {title!r}")
            return f":::{kind} {{{pref}:{num}}} {rest}".rstrip() + "\n\n" + self.children(sec) + "\n:::"
        kind = cls[4:]
        return f":::note [{kind}] {title}".rstrip() + "\n\n" + self.children(sec) + "\n:::"

    def block(self, node):
        if isinstance(node, NavigableString):
            t = self.math_inline(str(node)).strip()
            if not t:
                return ""
            parts = re.split(r"\\\[(.+?)\\\]", t, flags=re.S)
            return "\n\n".join(self.display(p) if k % 2 else p.strip() for k, p in enumerate(parts) if p.strip())
        if not isinstance(node, Tag):
            return ""
        name, cls = node.name, node.get("class", [])
        if name in ("script", "style", "header") or "mt-guide-content" in cls or "noindex" in cls:
            return ""
        if name == "section" and any(c.startswith("box-") for c in cls):
            return self.box(node)
        if name in ("h1", "h2", "h3", "h4"):
            t = re.sub(r"\s+", " ", self.math_inline(node.get_text(" ", strip=True)))
            if t == "Contributors and Attributions":
                return "## Contributors and Attributions {section:attributions}"
            return "#" * int(name[1]) + " " + t
        if name in ("h5", "h6"):
            t = re.sub(r"\s+", " ", self.math_inline(node.get_text(" ", strip=True)))
            return f"**{t}**"
        if name == "p":
            return self.paragraph(node)
        if name == "figure":
            return self.figure(node)
        if name == "img":
            return self.image(node)
        if name == "table":
            return self.table(node)
        if name == "iframe":
            return f"> EMBED src={node.get('src', '')}"
        if name == "blockquote":
            inner = self.children(node)
            return "\n".join("> " + l if l else ">" for l in inner.split("\n"))
        if name in ("ul", "ol"):
            items = []
            start = int(node.get("start", 1) or 1)
            alpha = "alpha" in (node.get("style") or "")
            for k, li in enumerate(node.find_all("li", recursive=False)):
                mark = "-" if name == "ul" else (f"{chr(96 + start + k)}." if alpha else f"{start + k}.")
                body = self.children(li) if li.find(["p", "ul", "ol", "figure", "table"]) else self.paragraph(li)
                body = body.replace("\n", "\n   ")
                items.append(f"{mark} {body}")
            return "\n".join(items)
        if name == "dl":
            out = []
            # the book's answers are collapsible <dl>: <dt>Answer</dt><dd>…</dd>
            for c in node.find_all(["dt", "dd"], recursive=False):
                if c.name == "dt":
                    out.append("**" + re.sub(r"\s+", " ", c.get_text(" ", strip=True)) + "**")
                else:
                    out.append(self.children(c) if c.find(["p", "ul", "ol", "figure", "table"]) else self.paragraph(c))
            return "\n\n".join(out)
        if name == "pre":
            return "```\n" + node.get_text() + "\n```"
        if name == "hr":
            return ""
        return self.children(node)

    def children(self, node):
        out = []
        for c in node.children:
            b = self.block(c)
            if b and b.strip():
                out.append(b.strip("\n"))
        return "\n\n".join(out)


def tidy(text):
    """The site's renderer leaves a space before the closing parenthesis of a
    \\PageIndex reference ("Figure 1.1.2 )"); it is the renderer's, not the book's."""
    text = re.sub(r"((?:Figure|Equation|Table|Example|Exercise)s?\s+\d+(?:\.\d+)+) ([).,;:])", r"\1\2", text)
    return text


def convert(page_json, title, page_ids, prefix=""):
    b = json.load(open(page_json))["body"]
    b = b[0] if isinstance(b, list) else b
    b = b if isinstance(b, str) else ""
    soup = BeautifulSoup(b, "lxml")
    for s in soup.find_all(["script", "style"]):
        s.decompose()
    for s in soup.select(".mt-guide-content, .mt-edit-section, .rangySelectionBoundary"):
        s.decompose()
    conv = Converter(page_ids, prefix)
    root = soup.body or soup
    text = conv.children(root)
    text = tidy(re.sub(r"\n{3,}", "\n\n", text))
    return f"# {title}\n\n{text}\n"


def main(argv):
    if not argv or argv[0] in ("-h", "--help"):
        print(__doc__)
        return
    print(convert(argv[0], argv[1] if len(argv) > 1 else "", {}), end="")


if __name__ == "__main__":
    main(sys.argv[1:])
