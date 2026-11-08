#!/usr/bin/env python3
"""Write the book's two table sheets from the 12.T pages.

    python3 tools/sheets.py            writes sheets/character-tables.json and sheets/correlation-tables.json
    python3 tools/sheets.py --check    also prints every character table that fails the orthogonality test

Run from anywhere; paths are the book's own. The sources are
`ch12/tables/1/source.md` (12.T Character Tables, LibreTexts 433853) and
`ch12/tables/2/source.md` (12.T Correlation Tables, 433854), written by
`tools/convert.py`. Each `> TABLE` block becomes one table of the sheet:

- the table's title is its group, the first header cell, as HTML (C<sub>2v</sub>);
- its columns are the header cells as printed (a `$…$` label is typeset by
  the app), with ids made from their text; the two unlabelled function
  columns of a character table are `linear` and `quadratic`;
- a cell is the book's HTML; a complex pair printed as a braced pair of
  `matrix` columns becomes the two characters on two lines of one cell,
  the brace dropped;
- a character table's notes carry its family's one-line definition (the
  `##` header and the sentence or list under it) and then the corrections
  below; a correlation table's notes carry only its corrections.

The cells stay as the book prints them. The corrections (`ch12/exploration.md`,
"Corrections spotted", checked by `--check`) are notes under the table, since
a reference table cannot carry a footnote marker inside a character without
reading as a power.
"""
import json
import math
import os
import re
import sys

BOOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

CHAR = {
    "id": "character-tables",
    "title": "Character Tables",
    "module": "433853",
    "src": "ch12/tables/1/source.md",
}
CORR = {
    "id": "correlation-tables",
    "title": "Correlation Tables",
    "module": "433854",
    "src": "ch12/tables/2/source.md",
}

# Corrections, keyed by the table's group as its title prints it (plain text).
# Each is one sentence in the book's terms; the cell itself is left as printed.
CHAR_NOTES = {
    "Ci": ["Correction: the first species is A<sub>g</sub>; the table prints “Ag” without its subscript."],
    "C2": ["Correction: the B row’s rotation is R<sub>y</sub>; the table prints “Ry” without its subscript."],
    "C3": ["Correction: ε = exp(2π<em>i</em>/3); the table prints exp(2π/3), without the <em>i</em>."],
    "C5": ["Correction: the A row transforms as <em>z</em>; the table prints a capital Z."],
    "D6": ["Correction: the fifth class is 3C<sub>2</sub>′, three twofold axes like the 3C<sub>2</sub>″ beside it, so the order is 12; the table prints 2C<sub>2</sub>′."],
    "D8h": [
        "Correction: the B<sub>1u</sub> row reads 1, −1, −1, 1, 1, 1, −1, −1, 1, 1, −1, −1, −1, 1 under the fourteen classes; the table prints fifteen characters, an extra −1 among the last ones, which pushes the final 1 into the function column.",
        "Correction: the last row is E<sub>3u</sub>; the table prints E<sub>1u</sub> a second time.",
    ],
    "D5d": ["Correction: the A<sub>2u</sub> character under 2S<sub>10</sub><sup>3</sup> is −1, as under 2S<sub>10</sub> beside it; the table prints 1."],
    "T": ["Correction: the T character under 3C<sub>2</sub> is −1; the table leaves the cell empty."],
    "Th": ["Correction: the T<sub>g</sub> character under i is 3; the table prints 1."],
    "D∞h": ["Correction: the species are Σ<sub>g</sub><sup>+</sup>, Σ<sub>g</sub><sup>−</sup>, Π<sub>g</sub>, Δ<sub>g</sub> and their u partners; the table prints S for Σ, D for Δ and a lower-case π."],
    "Oh": ["Correction: the second class is 8C<sub>3</sub>; the table prints 8C<sub>2</sub>."],
}
CORR_NOTES = {
    "C4v": ["Correction: B<sub>2</sub> correlates with A<sub>1</sub> in C<sub>2v</sub>(σ<sub>d</sub>); the table prints A<sub>1</sub>′."],
    "C6v": [
        "Correction: B<sub>2</sub> correlates with A<sub>1</sub> in C<sub>3v</sub>(σ<sub>d</sub>); the table prints A<sub>1</sub>′.",
        "Correction: B<sub>2</sub> correlates with A in C<sub>3</sub>; the table prints A′.",
    ],
}

# The two unlabelled columns every character table ends on.
FUNCTION_IDS = ["linear", "quadratic"]


def tex_to_html(s):
    """A `$…$` group name or family header as HTML: C_{2v} → C<sub>2v</sub>."""
    def one(m):
        t = m.group(1).strip()
        t = t.replace("\\sigma", "σ").replace("\\infty ", "∞").replace("\\infty", "∞").replace("\\;", " ")
        t = re.sub(r"_\{([^}]*)\}", r"<sub>\1</sub>", t)
        t = re.sub(r"_(\S)", r"<sub>\1</sub>", t)
        t = re.sub(r"\^\{([^}]*)\}", r"<sup>\1</sup>", t)
        t = re.sub(r"\^(\S)", r"<sup>\1</sup>", t)
        return t
    return re.sub(r"\$([^$]*)\$", one, s)


def md_inline(s):
    s = tex_to_html(s)
    s = re.sub(r"\*([^*]+)\*", r"<em>\1</em>", s)
    return s.strip()


def plain(s):
    s = tex_to_html(s)
    s = re.sub(r"<[^>]*>", "", s)
    return re.sub(r"\s+", "", s)


def slug(s, used, fallback):
    t = re.sub(r"<[^>]*>", "", tex_to_html(s)).lower()
    t = t.replace("σ", "sigma").replace("∞", "inf").replace("′", "p").replace("'", "p").replace('"', "pp").replace("″", "pp")
    t = re.sub(r"[^a-z0-9]+", "-", t).strip("-") or fallback
    base, k = t, 2
    while t in used:
        t = f"{base}-{k}"
        k += 1
    used.add(t)
    return t


MATRIX = re.compile(r"\\begin\{matrix\}(.*?)\\end\{matrix\}", re.S)


def cell(s):
    """One cell as HTML; a braced complex pair becomes two lines."""
    s = s.strip()
    # a double prime typed as a quotation mark inside maths (A") is A''
    s = re.sub(r"\$[^$]*\$", lambda m: m.group(0).replace('"', "''"), s)
    m = MATRIX.search(s)
    if not m:
        return s
    lines = []
    for part in m.group(1).split("\\\\"):
        p = part.replace("\\sf", "").replace("\\;", "").strip()
        if re.fullmatch(r"-?\d+", p):
            lines.append(p)
        else:
            lines.append(f"${p}$")
    return "<br>".join(lines)


def split_row(line):
    parts = line.strip().strip("|").split("|")
    return [p.strip() for p in parts]


def read(path):
    """The page as blocks: ('family', title, definition) and ('table', header, rows)."""
    text = open(os.path.join(BOOK, path), encoding="utf-8").read().splitlines()
    out, i = [], 0
    while i < len(text):
        line = text[i]
        if line.startswith("## "):
            title = md_inline(line[3:])
            body, j = [], i + 1
            while j < len(text) and not text[j].startswith("> TABLE") and not text[j].startswith("## "):
                if text[j].strip():
                    body.append(text[j].strip())
                j += 1
            items = [re.sub(r"^\d+\.\s*", "", b) for b in body if re.match(r"^\d+\.", b)]
            lead = [b for b in body if not re.match(r"^\d+\.", b)]
            definition = " ".join(md_inline(b) for b in lead)
            if items:
                definition += " " + "; ".join(md_inline(t).rstrip(".") for t in items) + "."
            out.append(("family", title, definition.strip()))
            i = j
            continue
        if line.startswith("> TABLE"):
            j = i + 1
            while not text[j].startswith("|"):
                j += 1
            header = split_row(text[j])
            rows, j = [], j + 2
            while j < len(text) and text[j].startswith("|"):
                rows.append(split_row(text[j]))
                j += 1
            out.append(("table", header, rows))
            i = j
            continue
        i += 1
    return out


def fit(row, n):
    """A row the book prints with too many cells keeps its first n − 1 and
    joins the rest into its last, so nothing the book prints is lost."""
    if len(row) == n:
        return row
    if len(row) < n:
        return row + [""] * (n - len(row))
    return row[: n - 1] + [" ".join(c for c in row[n - 1:] if c)]


def build(spec, notes_for, character):
    blocks = read(spec["src"])
    tables, family, ids = [], None, set()
    for b in blocks:
        if b[0] == "family":
            family = b
            continue
        _, header, rows = b
        group = plain(header[0])
        used = set()
        columns = []
        blanks = 0
        for k, h in enumerate(header):
            label = h
            if character and h == "":
                cid = FUNCTION_IDS[blanks] if blanks < 2 else f"col-{k + 1}"
                blanks += 1
                used.add(cid)
            else:
                cid = slug(h, used, f"col-{k + 1}") if k else "species"
                used.add(cid)
            columns.append({"id": cid, "label": label, "kind": "text"})
        notes = []
        if character and family:
            fam = family[1]
            notes.append(f"{fam}." + (f" {family[2]}" if family[2] else ""))
        notes += notes_for.get(group, [])
        tid = slug(header[0], ids, "table")
        tables.append({
            "id": tid,
            "title": tex_to_html(header[0]),
            "columns": columns,
            "rows": [[cell(c) for c in fit(r, len(header))] for r in rows],
            "notes": notes,
        })
    missing = set(notes_for) - {plain(t["title"]) for t in tables}
    if missing:
        sys.exit(f"corrections name tables the page does not have: {sorted(missing)}")
    return {
        "id": spec["id"],
        "title": spec["title"],
        "kind": "table",
        "source": {"module": spec["module"], "section": "12.T"},
        "generated_by": "tool",
        "tables": tables,
    }


# ---------- the orthogonality check ----------

def value(c):
    """A printed character as a number, or None for one the check cannot read."""
    t = re.sub(r"<[^>]*>", "", c).replace("$", "").replace("−", "-").replace(" ", "")
    if t == "":
        return 0
    if re.fullmatch(r"-?\d+", t):
        return int(t)
    m = re.fullmatch(r"(-?)\\sqrt\{(\d+)\}", t)
    if m:
        return (-1 if m.group(1) else 1) * math.sqrt(int(m.group(2)))
    m = re.fullmatch(r"(-?)2\\cos\{?(\d+)\^\\circ\}?", t)
    if m:
        return (-1 if m.group(1) else 1) * 2 * math.cos(math.radians(int(m.group(2))))
    return None


def classes(label):
    t = re.sub(r"<[^>]*>", "", label).replace("$", "")
    m = re.match(r"^(\d+)", t)
    return int(m.group(1)) if m else 1


def check(sheet):
    bad = []
    for t in sheet["tables"]:
        cols = [c for c in t["columns"][1:] if c["id"] not in FUNCTION_IDS and not c["label"].startswith("ε")]
        idx = [t["columns"].index(c) for c in cols]
        if any("..." in c["label"] for c in cols):
            continue
        rows = []
        for r in t["rows"]:
            if any("<br>" in r[i] for i in idx):
                rows = None
                break
            vs = [value(r[i]) for i in idx]
            if None in vs:
                rows = None
                break
            rows.append((re.sub(r"<[^>]*>", "", r[0]), vs))
        if rows is None:
            continue
        n = [classes(c["label"]) for c in cols]
        h = sum(n)
        for a in range(len(rows)):
            for b in range(a, len(rows)):
                s = sum(k * x * y for k, x, y in zip(n, rows[a][1], rows[b][1]))
                want = h if a == b else 0
                if abs(s - want) > 1e-6:
                    bad.append(f"{plain(t['title'])}: {rows[a][0]} · {rows[b][0]} = {s:g}, want {want} (h = {h})")
    return bad


def main():
    os.makedirs(os.path.join(BOOK, "sheets"), exist_ok=True)
    sheets = [build(CHAR, CHAR_NOTES, True), build(CORR, CORR_NOTES, False)]
    for s in sheets:
        path = os.path.join(BOOK, "sheets", s["id"] + ".json")
        with open(path, "w", encoding="utf-8") as f:
            json.dump(s, f, ensure_ascii=False, indent=1)
            f.write("\n")
        print(f"{path}: {len(s['tables'])} tables")
    if "--check" in sys.argv:
        for line in check(sheets[0]):
            print("  " + line)


if __name__ == "__main__":
    main()
