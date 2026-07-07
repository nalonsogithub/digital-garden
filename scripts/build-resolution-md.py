import re
from pathlib import Path

root = Path(__file__).resolve().parents[1]
body = (root / "content/writing/_resolution-body.txt").read_text(encoding="utf-8")
body = re.sub(r"^([IVX]+)\.\s+(.+)$", r"## \1. \2", body, flags=re.M)
body = re.sub(r"^Appendices$", r"## Appendices", body, flags=re.M)
body = re.sub(r"^Appendix ([A-Z]):", r"### Appendix \1:", body, flags=re.M)
body = re.sub(r"Figure SEQ Figure.*?$", "", body, flags=re.M)
body = re.sub(r"\n{3,}", "\n\n", body)
parts = body.split("## Appendices")
main = parts[0].strip()
appendix_note = (
    "\n\n---\n\n*Full appendices (RSA mathematics, entanglement, hardware race, key algorithms) "
    "are in the downloadable paper.*\n"
    if len(parts) > 1
    else ""
)
fm = """---
title: "The Resolution of Reality"
date: "2026-07-06"
summary: "A primer on quantum computing: how physical law replaces brute-force search, and where hybrid classical-quantum architectures fit."
pdf: "/papers/the-resolution-of-reality.pdf"
external_url: ""
tags: ["quantum", "physics", "writing"]
category: personal
---

"""
out_path = root / "content/writing/the-resolution-of-reality.md"
out_path.write_text(fm + main + appendix_note, encoding="utf-8")
print(f"wrote {len(fm + main + appendix_note)} chars to {out_path}")
