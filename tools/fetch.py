#!/usr/bin/env python3
"""Mirror the LibreTexts book into source/ and write modules.json.

    python3 tools/fetch.py              the tree, every page's rendered body and tags
    python3 tools/fetch.py --media 1    also download the images Chapter 1 shows
    python3 tools/fetch.py --refresh    fetch every page again, even if it is on disk

Run from the book's folder. The book is the LibreTexts page 9054,
"Physical Chemistry (LibreTexts)", on chem.libretexts.org. The site is a
MindTouch (Deki) wiki, and its public API gives the page tree, each page's
body rendered for viewing (templates expanded, maths left as TeX) and its
tags, which carry the page's licence and authors:

    /@api/deki/pages/9054/tree                 the whole tree
    /@api/deki/pages/<id>/contents?mode=view   one page's body
    /@api/deki/pages/<id>/tags                 one page's tags

source/ is gitignored and read-only once fetched: source/tree.json,
source/pages/<id>.json, source/tags/<id>.json and source/media/<file id>-<name>.
modules.json, which is committed, records every page in book order with its
LibreTexts id, number, title, path and licence, so that tools/convert.py can
place each page in its folder. A chapter's N.E page (Exercises), N.S page
(Summary) and N.T pages (reference tables) are recorded under their own keys,
and the front and back matter beside the chapters.
"""
import concurrent.futures as cf
import json
import os
import re
import subprocess
import sys
import urllib.parse

BOOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(BOOK, "source")
SITE = "https://chem.libretexts.org"
ROOT_ID = "9054"
ROOT_PATH = "Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)"


def filename(quoted):
    """A file's name from its URL path, decoded until it no longer changes:
    the site double-encodes some names (Hermite_poly_phys_n%253D1.svg), and a
    name left with a % in it would not be found once served."""
    while True:
        plain = urllib.parse.unquote(quoted)
        if plain == quoted:
            return plain
        quoted = plain


def curl(url, out):
    for _ in range(3):
        r = subprocess.run(["curl", "-sS", "-f", "-L", "-o", out, url], capture_output=True, text=True)
        if r.returncode == 0:
            return True
    sys.stderr.write(f"failed: {url}\n{r.stderr}")
    return False


def walk(page, depth, rows):
    kids = page.get("subpages")
    kids = kids.get("page", []) if isinstance(kids, dict) else []
    kids = kids if isinstance(kids, list) else [kids]
    rows.append({"depth": depth, "id": page["@id"], "title": page["title"],
                 "path": page["path"]["#text"]})
    for k in kids:
        walk(k, depth + 1, rows)


def body(pid):
    b = json.load(open(os.path.join(SRC, "pages", f"{pid}.json")))["body"]
    b = b[0] if isinstance(b, list) else b
    return b if isinstance(b, str) else ""


def tags(pid):
    try:
        t = json.load(open(os.path.join(SRC, "tags", f"{pid}.json"))).get("tag", [])
    except (OSError, ValueError):
        return []
    t = t if isinstance(t, list) else [t]
    return [x["@value"] for x in t]


def licence(tg):
    lic = next((x.split(":", 1)[1] for x in tg if x.startswith("license:")), None)
    ver = next((x.split(":", 1)[1] for x in tg if x.startswith("licenseversion:")), None)
    if not lic:
        return None
    return lic + (f"-{ver[0]}.{ver[1:]}" if ver else "")


def classify(title, depth):
    """kind and number from a LibreTexts title: '1.4: The Hydrogen Atomic Spectrum'."""
    head = title.split(":", 1)[0].strip()
    if depth == 1:
        if head == "Front Matter":
            return "front", None
        if head == "Back Matter":
            return "back", None
        return "chapter", head
    m = re.fullmatch(r"(\d+)\.(E|S|T|\d+)(?:\.(\d+))?", head)
    if not m:
        return "matter", None
    if m.group(2) == "E":
        return "exercises", head
    if m.group(2) == "S":
        return "summary", head
    if m.group(2) == "T":
        return "tables", head
    if m.group(3):
        return "subsection", head
    return "section", head


def build_modules(rows):
    out = {"site": SITE, "root": {"id": ROOT_ID, "path": ROOT_PATH}, "front_matter": [],
           "chapters": [], "back_matter": []}
    chapter = None
    for r in rows[1:]:
        kind, num = classify(r["title"], r["depth"])
        tg = tags(r["id"])
        rec = {"id": r["id"], "title": r["title"].split(":", 1)[-1].strip() if num else r["title"],
               "path": r["path"], "licence": licence(tg)}
        if r["depth"] == 1:
            if kind == "chapter":
                chapter = {"number": int(num), "dir": f"ch{int(num):02d}", **rec, "sections": [], "exercises": None}
                out["chapters"].append(chapter)
            else:
                chapter = None
                out["front_matter" if kind == "front" else "back_matter"].append(rec)
            continue
        if chapter is None:
            (out["front_matter"] if rows and r["path"].find("00:_Front") >= 0 else out["back_matter"]).append(rec)
            continue
        if kind == "exercises":
            chapter["exercises"] = {"number": num, **rec}
        elif kind == "summary":
            chapter["summary"] = {"number": num, **rec}
        elif kind == "tables":
            chapter.setdefault("tables", []).append({"number": num, **rec})
        elif kind == "subsection":
            chapter["sections"][-1].setdefault("subpages", []).append({"number": num, **rec})
        else:
            n = num or f"{chapter['number']}.?"
            n = ".".join(str(int(x)) for x in n.split("."))
            chapter["sections"].append({"number": n, **rec})
    return out


def media(ch_dir, modules):
    ch = next(c for c in modules["chapters"] if c["dir"] == ch_dir)
    os.makedirs(os.path.join(SRC, "media"), exist_ok=True)
    jobs = []
    # the landing page, the sections, and the N.S, N.E and N.T pages, whose
    # images the chapter's summary/ and sheets show too
    extra = [ch[k] for k in ("summary", "exercises") if ch.get(k)] + ch.get("tables", [])
    for page in [ch] + ch["sections"] + extra:
        for url in re.findall(r'<img[^>]+src="([^"]+)"', body(page["id"])):
            url = url.replace("&amp;", "&")
            m = re.search(r"/@api/deki/files/(\d+)/([^?]+)", url)
            if not m:
                continue
            name = f"{m.group(1)}-{filename(m.group(2))}"
            dst = os.path.join(SRC, "media", name)
            if not os.path.exists(dst):
                jobs.append((f"{SITE}/@api/deki/files/{m.group(1)}/{m.group(2)}", dst))
    with cf.ThreadPoolExecutor(6) as ex:
        list(ex.map(lambda j: curl(*j), jobs))
    print(f"{ch_dir}: {len(jobs)} images fetched")


def write_toc(m):
    lines = ["# Physical Chemistry (LibreTexts): table of contents", "",
             "Written by `tools/fetch.py` from `modules.json`; every page with its LibreTexts page id and licence tag.", ""]
    for c in m["chapters"]:
        lines += [f"## {c['number']}. {c['title']} (`{c['dir']}`, page {c['id']}, {c['licence'] or 'no tag'})", ""]
        for s in c["sections"]:
            lines.append(f"- {s['number']} {s['title']} · {s['id']} · {s['licence'] or 'no tag'}")
            for sub in s.get("subpages", []):
                lines.append(f"  - {sub['number']} {sub['title']} · {sub['id']} · {sub['licence'] or 'no tag'}")
        for key, label in (("summary", "Summary"), ("exercises", "Exercises")):
            if c.get(key):
                lines.append(f"- {c[key]['number']} {label} · {c[key]['id']} · {c[key]['licence'] or 'no tag'}")
        for t in c.get("tables", []):
            lines.append(f"- {t['number']} {t['title']} · {t['id']} · {t['licence'] or 'no tag'}")
        lines.append("")
    for key in ("front_matter", "back_matter"):
        lines += [f"## {key.replace('_', ' ').title()}", ""] + [f"- {x['title']} · {x['id']}" for x in m[key]] + [""]
    with open(os.path.join(BOOK, "toc.md"), "w") as f:
        f.write("\n".join(lines))


def main(argv):
    if argv and argv[0] in ("-h", "--help"):
        print(__doc__)
        return
    refresh = "--refresh" in argv
    for d in ("pages", "tags"):
        os.makedirs(os.path.join(SRC, d), exist_ok=True)
    tree = os.path.join(SRC, "tree.json")
    if refresh or not os.path.exists(tree):
        curl(f"{SITE}/@api/deki/pages/{ROOT_ID}/tree?dream.out.format=json", tree)
    rows = []
    walk(json.load(open(tree))["page"], 0, rows)

    def get(r):
        for kind, url in (("pages", f"contents?mode=view&dream.out.format=json"),
                          ("tags", "tags?dream.out.format=json")):
            dst = os.path.join(SRC, kind, f"{r['id']}.json")
            if refresh or not os.path.exists(dst):
                curl(f"{SITE}/@api/deki/pages/{r['id']}/{url}", dst)

    with cf.ThreadPoolExecutor(6) as ex:
        list(ex.map(get, rows))
    modules = build_modules(rows)
    with open(os.path.join(BOOK, "modules.json"), "w") as f:
        json.dump(modules, f, indent=1, ensure_ascii=False)
        f.write("\n")
    write_toc(modules)
    print(f"{len(rows)} pages; modules.json and toc.md written")
    if "--media" in argv:
        what = argv[argv.index("--media") + 1]
        media(f"ch{int(what):02d}", modules)


if __name__ == "__main__":
    main(sys.argv[1:])
