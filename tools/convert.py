#!/usr/bin/env python3
"""Convert the pages of Physical Chemistry (LibreTexts) into source.md files.

    python3 tools/convert.py 1            every page of Chapter 1: ch01/intro/source.md, ch01/1.1/source.md, …
    python3 tools/convert.py 1.4          one section: ch01/1.4/source.md
    python3 tools/convert.py 1 --out DIR  the same layout under DIR instead of this folder

Run from the book's folder after tools/fetch.py. The pages come from
modules.json; the conversion is tools/lt2md.py, whose docstring lists the
markers. A chapter's landing page (its epigraph and opening words) goes to
chNN/intro/, its N.S summary page to chNN/summary/, its N.E exercise page to
chNN/exercises/source.md, its N.T table pages to chNN/tables/<k>/source.md,
and section N.M to chNN/N.M/. A sub-page (32.10.1) is converted into its
section's folder as source-<k>.md. A source.md is written again each time,
since the converter is the source of record and the file is never edited by
hand. The converter's warnings are printed prefixed by the page.
"""
import io
import json
import os
import sys
from contextlib import redirect_stderr

BOOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BOOK, "tools"))
import lt2md  # noqa: E402


def pages(book, what):
    number = what.split(".")[0]
    ch = next((c for c in book["chapters"] if str(c["number"]) == number), None)
    if ch is None:
        sys.exit(f"no chapter {number} in modules.json")
    out = []
    whole = "." not in what
    if whole:
        out.append(("intro", ch, "source.md"))
    for s in ch["sections"]:
        if whole or s["number"] == what:
            out.append((s["number"], s, "source.md"))
            for k, sub in enumerate(s.get("subpages", []), 1):
                out.append((s["number"], sub, f"source-{k}.md"))
    if whole:
        if ch.get("summary"):
            out.append(("summary", ch["summary"], "source.md"))
        if ch.get("exercises"):
            out.append(("exercises", ch["exercises"], "source.md"))
        for k, t in enumerate(ch.get("tables", []), 1):
            out.append((os.path.join("tables", str(k)), t, "source.md"))
    if not out:
        sys.exit(f"no page {what} in modules.json")
    return [(os.path.join(ch["dir"], folder), page, name) for folder, page, name in out]


def main(argv):
    if not argv or argv[0] in ("-h", "--help"):
        print(__doc__)
        return
    root = BOOK
    if "--out" in argv:
        i = argv.index("--out")
        root = os.path.abspath(argv[i + 1])
        del argv[i:i + 2]
    book = json.load(open(os.path.join(BOOK, "modules.json")))
    ids = {}
    for c in book["chapters"]:
        for p in [c] + c["sections"] + [x for s in c["sections"] for x in s.get("subpages", [])]:
            ids[p["path"]] = p["id"]
    for what in argv:
        for folder, page, name in pages(book, what):
            src = os.path.join(BOOK, "source", "pages", f"{page['id']}.json")
            dst = os.path.join(root, folder, name)
            os.makedirs(os.path.dirname(dst), exist_ok=True)
            err = io.StringIO()
            with redirect_stderr(err):
                md = lt2md.convert(src, page["title"], ids, str(page.get("number") or ""))
            with open(dst, "w") as f:
                f.write(f"<!-- LibreTexts page {page['id']}: {page['path']} -->\n")
                f.write(md)
            for line in err.getvalue().splitlines():
                sys.stderr.write(f"{page['id']} {page['title']}: {line}\n")
            print(dst)


if __name__ == "__main__":
    main(sys.argv[1:])
