"""One-off: set category, groups, and types on writing/systems frontmatter."""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1] / "content"

WRITING = {
    "more-risk-less-reward": {"category": "research", "research_group": "recent", "content_type": "white-paper"},
    "the-alpha-supply": {"category": "research", "research_group": "recent", "content_type": "white-paper"},
    "statistical-significance-track-records": {"category": "research", "research_group": "recent", "content_type": "white-paper"},
    "active-vs-passive-five-universe": {"category": "research", "research_group": "recent", "content_type": "white-paper"},
    "repricing-korea-discount": {"category": "research", "research_group": "recent", "content_type": "white-paper"},
    "use-and-misuse-of-tracking-error": {"category": "research", "research_group": "peer-reviewed", "content_type": "peer-reviewed", "publication": "J. Portfolio Mgmt. 2023"},
    "devil-in-details-risks-low-volatility-investing": {"category": "research", "research_group": "peer-reviewed", "content_type": "peer-reviewed", "publication": "J. Portfolio Mgmt. 2023"},
    "triumph-of-mediocrity-naive-beta": {"category": "research", "research_group": "peer-reviewed", "content_type": "peer-reviewed", "publication": "J. Portfolio Mgmt. 2022"},
    "risk-parity-equity-strategy-flexible-risk-targets": {"category": "research", "research_group": "peer-reviewed", "content_type": "peer-reviewed", "publication": "J. Investing 2021"},
    "missing-in-minimum-volatility-currency-risk": {"category": "research", "research_group": "peer-reviewed", "content_type": "peer-reviewed", "publication": "J. Index Investing 2020"},
    "not-all-factor-exposures-created-equal": {"category": "research", "research_group": "peer-reviewed", "content_type": "peer-reviewed", "publication": "J. Portfolio Mgmt. 2019"},
    "efficient-smart-beta": {"category": "research", "research_group": "peer-reviewed", "content_type": "peer-reviewed", "publication": "J. Investing 2018"},
    "resale-value-risk-parity-equity-portfolios": {"category": "research", "research_group": "peer-reviewed", "content_type": "peer-reviewed", "publication": "J. Portfolio Mgmt. 2017"},
    "active-versus-passive-old-wine-new-wine-skins": {"category": "research", "research_group": "peer-reviewed", "content_type": "peer-reviewed", "publication": "J. Portfolio Mgmt. 2016"},
    "defensive-equity-platform": {"category": "capabilities", "content_type": "strategy-brief"},
    "defensive-growth-architecture": {"category": "capabilities", "content_type": "strategy-brief"},
    "defensive-growth-evolution": {"category": "capabilities", "content_type": "strategy-brief"},
    "stock-level-risk-parity": {"category": "capabilities", "content_type": "strategy-brief"},
    "stock-level-risk-parity-architecture": {"category": "capabilities", "content_type": "strategy-brief"},
    "performance-attribution-case-study": {"category": "capabilities", "content_type": "case-study"},
    "mellon-capital-long-short-architecture": {"category": "capabilities", "content_type": "case-study"},
    "the-resolution-of-reality": {"category": "essays", "content_type": "essay"},
    "ai-in-asset-management": {"category": "essays", "content_type": "lecture"},
    "analytical-finance-training": {"listed": False},
    "physics-and-mathematics-foundation": {"listed": False},
}

SYSTEMS = {
    "investment-process-demo": "client-distribution",
    "sales-ai-platform": "client-distribution",
    "data-driven-sales-architecture": "client-distribution",
    "portfolio-attribution-library": "research-infrastructure",
    "anomaly-discovery-pipeline": "research-infrastructure",
    "restriction-intelligence": "research-infrastructure",
    "technology-platform-architecture": "platform",
    "consultant-intelligence-vault": "platform",
}


def upsert_frontmatter(path: Path, updates: dict) -> None:
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---"):
        return
    end = text.index("---", 3)
    fm_block = text[3:end].strip()
    body = text[end + 3 :]

    lines = fm_block.split("\n")
    keys_done = set()
    new_lines = []
    for line in lines:
        key = line.split(":", 1)[0].strip() if ":" in line else None
        if key in updates:
            keys_done.add(key)
            val = updates[key]
            if val is False:
                new_lines.append("listed: false")
            elif isinstance(val, str):
                new_lines.append(f'{key}: "{val}"')
            else:
                new_lines.append(f"{key}: {val}")
        elif key in ("category", "research_group", "content_type", "publication", "listed", "systems_group", "institutional-research", "professional", "personal"):
            if key in updates or key.replace("-", "_") in str(updates):
                continue
            if key in ("category", "research_group", "content_type", "publication", "listed", "systems_group"):
                continue
            new_lines.append(line)
        else:
            new_lines.append(line)

    for key, val in updates.items():
        if key in keys_done:
            continue
        if val is False:
            new_lines.append("listed: false")
        elif isinstance(val, str):
            new_lines.append(f'{key}: "{val}"')
        else:
            new_lines.append(f"{key}: {val}")

    path.write_text("---\n" + "\n".join(new_lines) + "\n---" + body, encoding="utf-8")


for slug, meta in WRITING.items():
    p = ROOT / "writing" / f"{slug}.md"
    if p.exists():
        upsert_frontmatter(p, meta)
        print("writing", slug)

for slug, group in SYSTEMS.items():
    p = ROOT / "systems" / f"{slug}.md"
    if p.exists():
        upsert_frontmatter(p, {"systems_group": group})
        print("systems", slug)
