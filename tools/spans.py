#!/usr/bin/env python3
"""Mark the words that name a concept in a section's text.html.

    python3 tools/spans.py ch01/1.1/text.html '{"blackbody": "blackbody", "Wien's Displacement Law": "wiens-displacement-law"}'
    python3 tools/spans.py ch01/1.1/text.html terms.json

Wraps every whole-word, case-insensitive match of each phrase in
`<span data-concept="…">`, longest phrases first, in the running text only:
never inside a tag or an attribute, inside $…$ or $$…$$ maths, inside an
existing span with data-concept or data-type, inside a heading, an eyebrow
or a link. Plural -s and -es are matched. It is a first pass: the builder
reads every span it wrote and removes the ones where the word is used in
another sense (root rule 7). Writes the file in place and prints the count
per concept.
"""
import json
import re
import sys
from collections import Counter

SKIP_OPEN = re.compile(r"<(h[1-6]|a|span[^>]*\b(?:data-concept|data-type|data-ref|class=\"eyebrow\")[^>]*)\b[^>]*>")


def main(argv):
    path, terms = argv[0], argv[1]
    terms = json.load(open(terms)) if terms.endswith(".json") else json.loads(terms)
    src = open(path).read()
    # tokens: maths, tags, text
    toks = re.split(r"(\$\$.*?\$\$|\$[^$]*\$|<[^>]+>)", src, flags=re.S)
    phrases = sorted(terms, key=len, reverse=True)
    pat = re.compile(r"(?<![\w-])(" + "|".join(re.escape(p) for p in phrases) + r")(?:e?s)?(?![\w-])", re.I)
    lower = {p.lower(): terms[p] for p in phrases}
    depth, stack, out, n = 0, [], [], Counter()
    for t in toks:
        if t.startswith("<"):
            m = re.match(r"<(/?)(\w+)", t)
            if m:
                closing, name = m.group(1) == "/", m.group(2).lower()
                if not closing and not t.endswith("/>") and name not in ("img", "br", "hr", "input"):
                    skip = bool(SKIP_OPEN.match(t))
                    stack.append((name, skip))
                    depth += skip
                elif closing:
                    for k in range(len(stack) - 1, -1, -1):
                        if stack[k][0] == name:
                            depth -= sum(s for _, s in stack[k:])
                            del stack[k:]
                            break
            out.append(t)
        elif t.startswith("$") or depth > 0:
            out.append(t)
        else:
            def rep(m):
                key = m.group(1).lower()
                cid = lower[key]
                n[cid] += 1
                return f'<span data-concept="{cid}">{m.group(0)}</span>'
            out.append(pat.sub(rep, t))
    open(path, "w").write("".join(out))
    for k, v in sorted(n.items()):
        print(f"{v:3d} {k}")


if __name__ == "__main__":
    main(sys.argv[1:])
