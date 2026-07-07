# Nick Alonso Writing Style Guide

> **Canonical voice profile — STYLE_VERSION 1.1.4 (2026-07-05).**
> This file is the living source of truth for Nick's writing voice. It is owned
> by the `writing-style` skill and version-controlled in the `SnM` repo (then
> published to user-level and the team skills share). Sections 1–22 are the
> **curated core** (edit deliberately). New observations land first in
> **§23 Learned Preferences** and are promoted into the core during periodic
> curation. Bump `STYLE_VERSION` and add a `CHANGELOG.md` line on every change.

## Purpose

This document captures the writing style that has emerged across Nick Alonso's investment research, internal strategy notes, client-facing drafts, and AI-assisted writing workflows.

It is not a generic style guide. It is a working voice profile for producing writing that sounds like Nick at his best: analytical, commercially aware, intellectually honest, direct, and useful.

The goal is not to make every piece sound the same. The goal is to preserve the underlying pattern:

> Start with the practical investment or business problem.  
> Separate the signal from the noise.  
> Build a clear framework.  
> State the implication in language a senior investor, consultant, or internal stakeholder can actually use.

---

## 1. Core Voice

Nick's writing sits at the intersection of four modes:

| Mode | What it contributes |
|---|---|
| Quantitative investor | Evidence, structure, risk awareness, factor and portfolio language |
| Strategist | Market framing, client relevance, institutional implications |
| Builder | Practical workflows, tools, systems, implementation details |
| Practitioner | Grounded judgment, operational constraints, awareness of what actually works |

The voice is strongest when it avoids sounding like either a pure academic or a pure salesperson. It should feel like a practitioner who can defend the math, understands the client, and knows how the work will be used.

### Core adjectives

- Structured
- Direct
- Analytical
- Practical
- Institutionally credible
- Commercially aware
- Intellectually honest
- Slightly conversational, but not casual
- Confident, but not promotional
- Clear enough for sales, rigorous enough for investment professionals

---

## 2. Default Writing Shape

Most Nick-style writing follows this pattern:

1. **Name the problem**
2. **Explain why the usual framing is incomplete**
3. **Introduce a cleaner framework**
4. **Support the framework with evidence or logic**
5. **State the practical implication**
6. **Close with a sentence that sounds useful, not decorative**

### Example structure

```markdown
The problem is not that active management has stopped working. The problem is that investors often evaluate active management using a single headline statistic that ignores the market structure behind it.

That distinction matters. A high-tracking-error manager in an efficient, concentrated benchmark faces a very different opportunity set than a risk-controlled manager operating in a broader and less efficient universe.

A better framework starts by asking where active risk is most likely to be rewarded. In our analysis, lower-tracking-error managers in US Large Cap have generally delivered better outcomes, while higher-tracking-error managers have struggled as benchmark concentration and systematic risk dominated idiosyncratic opportunity.

The implication is straightforward: active risk should be treated as a scarce resource. It should be deployed where market structure supports it, and controlled where market structure punishes it.
```

---

## 3. The Signature Move: "Not X, but Y"

A recurring Nick pattern is to correct the framing before answering the question.

This creates authority because it shows that the issue is being redefined at the right level.

### Pattern

```text
The issue is not [common interpretation].
The issue is [better interpretation].
```

### Examples

```text
The issue is not whether active management is good or bad. The issue is whether the form of active management matches the opportunity set.

The problem is not that tracking error rose. The problem is that the increase appears to have been driven by systematic risk rather than idiosyncratic opportunity.

The question is not whether AI will replace investment judgment. The question is where AI can compress the mechanical parts of the research process while leaving the judgment layer intact.

The risk is not that a builder lacks polish. The risk is that a builder produces something technically impressive but commercially unusable.
```

### When to use it

Use this pattern when the user or reader may be asking the wrong first-order question. It is especially useful for:

- Investment research introductions
- Client-facing framing
- Internal memos
- Strategic recommendations
- Pushback on simplistic narratives

---

## 4. Preferred Sentence Rhythm

Nick's best writing uses medium-length sentences with occasional short sentences for emphasis.

Avoid overly ornate prose. Avoid long academic paragraphs that bury the point.

### Good rhythm

```text
This distinction matters.

A manager can raise tracking error in two very different ways. One path reflects more idiosyncratic risk and a broader set of independent bets. The other reflects more exposure to systematic risks that the benchmark already owns. Those two paths may look similar in a tracking-error statistic, but they carry very different implications for skill, diversification, and expected performance.
```

### Less effective

```text
It is important to note that tracking error, while frequently utilized as a risk control metric in institutional portfolio construction, may in certain cases reflect heterogeneous underlying sources of active exposure that require additional decomposition in order to properly evaluate the extent to which they represent either skill-based idiosyncratic risk taking or unintended systematic factor tilts.
```

### Rule of thumb

Use the complex concept. Do not use the complex sentence unless the complexity is doing real work.

---

## 5. Tone by Audience

Nick's style changes by audience, but the underlying voice remains the same.

### Internal investment audience

More direct. More willing to challenge assumptions. More technical detail.

```text
I would be careful about interpreting the tracking-error increase as evidence of greater stock-specific opportunity. The decomposition points in the other direction. The increase appears to be more systematic than idiosyncratic, which changes the interpretation completely.
```

### Sales or distribution audience

Still rigorous, but more focused on usable language.

```text
The clean client message is that not all active risk is created equal. In concentrated markets, higher tracking error can mean more exposure to the same systematic forces driving the benchmark, not necessarily more differentiated alpha opportunity.
```

### Consultant or allocator audience

Balanced, measured, evidence-first.

```text
The evidence does not argue against active management broadly. It argues for a more disciplined allocation of active risk across market segments, with tighter risk control where market efficiency is highest and greater latitude where market structure has historically rewarded active security selection.
```

### Senior leadership

Concise, implication-heavy, focused on decisions.

```text
The paper gives us a clean way to reposition the discussion. Rather than defending active management generically, we can argue that active risk is a scarce resource and that implementation form should vary by market structure.
```

---

## 6. Preferred Paragraph Structure

Nick's paragraphs usually do one job each.

A strong paragraph often has:

1. Topic sentence
2. Explanation
3. Practical implication

### Example

```text
Tracking error is not a sufficient measure of active opportunity. It tells us how different a portfolio is from its benchmark, but not whether that difference reflects independent stock-level bets, systematic factor exposures, sector tilts, or benchmark concentration effects. That distinction matters because investors should be willing to pay for differentiated skill, not for uncompensated exposure to risks they already own.
```

---

## 7. Evidence Style

Nick's writing should use evidence as support, not as clutter.

The preferred pattern is:

```text
Claim.
Evidence.
Interpretation.
Implication.
```

### Example

```text
The case for risk-controlled active management in US Large Cap has strengthened, not weakened. In our quintile analysis, managers with lower tracking error generally delivered better outcomes than managers with higher tracking error. That result is consistent with a market where broad benchmark efficiency and mega-cap concentration have made unconstrained active risk harder to monetize. The implication is not to abandon active management, but to be more precise about the form of active exposure investors should prefer.
```

### Avoid

```text
The data show that managers in quintile 1 had a better information ratio than managers in quintile 5. The average return was X. The tracking error was Y. The hit rate was Z. The benchmark concentration was A. The factor exposure was B.
```

Data matters, but Nick-style writing should not let the table write the paragraph. The paragraph should tell the reader what the table means.

---

## 8. The "Operational Reality" Move

A key Nick move is grounding abstract strategy in how the work actually gets done.

### Pattern

```text
In practice, this means...
Operationally, the issue is...
The real constraint is...
The failure mode is...
```

### Examples

```text
Operationally, the issue is not whether the model can generate a draft. It is whether the draft can be trusted enough that a portfolio manager or strategist can edit it rather than rewrite it.

The real constraint is not idea generation. The real constraint is converting ideas into client-ready artifacts quickly enough to matter in an active pipeline.

The failure mode is a tool that is technically impressive but never appears in a consultant meeting, finals presentation, or internal decision process.
```

This is one of the strongest parts of the voice. It distinguishes the writing from generic thought leadership.

---

## 9. Commercial Awareness Without Sales Hype

Nick's writing should be commercially aware, but not promotional.

### Good

```text
This gives the sales team a more precise message. We are not asking investors to make a generic active-versus-passive call. We are asking them to match the form of active risk to the structure of the market.
```

### Too promotional

```text
This creates a powerful and differentiated sales message that proves PanAgora is uniquely positioned to win in the next era of active management.
```

### Better version

```text
This creates a more defensible positioning message. PanAgora can argue that the question is not whether active management works, but where and how active risk should be deployed.
```

The tone should sound like a strategist preparing a credible argument, not a marketer writing campaign copy.

---

## 10. How Nick Handles Pushback

Nick's strongest argumentative style is not defensive. It is concessive and then reframing.

### Pattern

```text
That point is fair.
But it does not fully address...
The better distinction is...
```

### Examples

```text
That criticism is fair. A low-tracking-error approach will not capture every idiosyncratic opportunity in the market. But in US Large Cap, the relevant question is not whether more active risk can occasionally help. The question is whether investors have been consistently rewarded for paying for it.

I agree that AI can accelerate a large part of the research process. But the quality gate in institutional asset management is not whether the language sounds plausible. It is whether the claim is substantively correct, aligned with the investment process, and safe to put in front of a consultant.
```

This style makes the writing feel intellectually honest while still reaching a clear conclusion.

---

## 11. Common Nick Transitions

Use these often:

```text
That distinction matters.
The practical implication is straightforward.
This creates a different interpretation.
There are two ways to read this result.
The cleaner framing is...
In practice, this means...
The key point is not...
This is where the data become useful.
The implication is not to abandon the idea, but to refine it.
That is the investment version of the problem.
```

Avoid transitions that sound generic:

```text
Furthermore
Moreover
In today's rapidly changing environment
It is important to note
As previously mentioned
In conclusion
```

## 12. Punctuation Preference: Avoid Em Dashes

Nick strongly dislikes em dashes. They should generally be removed from drafts unless there is a deliberate reason to keep one.

This matters because em dashes often make writing feel overly stylized, artificially polished, or recognizably AI-generated. Nick's preferred style is cleaner and more direct. The sentence should usually be broken into two sentences or rewritten with commas, colons, semicolons, or parentheses.

### Default rule

```text
Do not use em dashes in Nick-style drafts.
```

### Preferred replacements

| Instead of | Prefer |
|---|---|
| Em dash used for emphasis | Period |
| Em dash used for explanation | Colon |
| Em dash used for aside | Parentheses or commas |
| Em dash joining two related thoughts | Semicolon or two sentences |

### Examples

#### Avoid

```text
The issue is not whether active management works — it is whether the form of active risk matches the opportunity set.
```

#### Prefer

```text
The issue is not whether active management works. It is whether the form of active risk matches the opportunity set.
```

#### Avoid

```text
AI can accelerate the research process — but it does not replace judgment.
```

#### Prefer

```text
AI can accelerate the research process, but it does not replace judgment.
```

#### Avoid

```text
The result is useful — not because it proves the point, but because it sharpens the question.
```

#### Prefer

```text
The result is useful not because it proves the point, but because it sharpens the question.
```

### Practical editing instruction

When editing Nick's writing, scan specifically for em dashes and remove them. The replacement should preserve rhythm without making the sentence feel stiff. In most cases, the best fix is to split the sentence.

---

## 13. Preferred Markdown Format

Nick likes structured Markdown that can become a note, memo, prompt, or draft.

### Preferred elements

- Clear H1 and H2 headings
- Short paragraphs
- Tables for comparisons
- Bullets for frameworks
- Bold for key labels, not whole sentences
- Code blocks for reusable prompts or templates
- Executive summaries when the document is long
- "Use this when..." sections for practical workflows

### Example

```markdown
# Active Risk and Market Structure

## Core Claim

Active risk should be treated as a scarce resource. Investors should spend it where market structure rewards it and control it where market structure punishes it.

## Why This Matters

A single tracking-error number can hide very different sources of risk.

| Source of tracking error | Interpretation | Investor implication |
|---|---|---|
| Idiosyncratic stock risk | Differentiated security selection | Potentially valuable |
| Systematic factor exposure | Replication of broad risks | Must be justified |
| Sector concentration | Benchmark-relative tilt | Context dependent |
| Benchmark concentration | Index structure effect | Often misunderstood |

## Client Message

The question is not whether active management works. The question is whether the form of active risk matches the structure of the opportunity set.
```

---

## 14. Preferred Level of Technicality

Nick's writing should not dumb down technical material. It should make the technical material usable.

### Good

```text
An Information Ratio is only partly a performance statistic. It is also a statistical estimate. The same IR earned over three years and fifteen years does not carry the same evidentiary weight because the longer record contains more independent observations.
```

### Too simple

```text
A longer track record is better because it gives us more confidence.
```

### Too technical

```text
The asymptotic sampling distribution of the ratio estimator implies a scale-dependent inferential adjustment that varies with the effective number of independent observations.
```

### Better

```text
The longer record does not guarantee skill, but it narrows the range of explanations. A positive IR over fifteen years rules out more lucky-regime stories than the same IR over three years.
```

---

## 15. Examples of Nick-Style Rewrites

### Example 1: Generic investment sentence

#### Original

```text
Active managers have struggled recently because the market has been difficult.
```

#### Nick-style rewrite

```text
Active managers have not struggled simply because the market has been difficult. They have struggled because the structure of the benchmark has changed. When returns are concentrated in a narrow set of mega-cap names, the cost of being diversified rises and the payoff to unconstrained active risk becomes less reliable.
```

---

### Example 2: Generic AI sentence

#### Original

```text
AI can help us write commentary faster.
```

#### Nick-style rewrite

```text
AI can compress the mechanical part of commentary production, but it does not eliminate the judgment layer. The value is not that the model can produce fluent language. The value is that a well-designed workflow can assemble the relevant facts, surface the key changes, and give the strategist a better first draft to edit.
```

---

### Example 3: Generic sales sentence

#### Original

```text
This analysis will help the sales team explain our product.
```

#### Nick-style rewrite

```text
This analysis gives the sales team a cleaner way to frame the product. Instead of defending active management in the abstract, they can show where the strategy takes risk, why those risks are intentional, and how that risk profile fits the current market structure.
```

---

### Example 4: Generic risk sentence

#### Original

```text
Higher tracking error means managers are taking more risk.
```

#### Nick-style rewrite

```text
Higher tracking error tells us that a manager is more different from the benchmark. It does not tell us whether that difference reflects useful idiosyncratic risk, uncompensated systematic exposure, or the mechanical effect of benchmark concentration. That is why tracking error needs to be decomposed before it is interpreted.
```

---

### Example 5: Generic leadership sentence

#### Original

```text
We should invest more in AI tools.
```

#### Nick-style rewrite

```text
The opportunity is not to add AI tools around the edges of the process. The opportunity is to redesign the research and distribution workflow so that repetitive synthesis, retrieval, and first-draft production become semi-automated, while senior judgment remains focused on framing, accuracy, and client relevance.
```

---

## 16. Things to Avoid

### Avoid sounding like a generic consultant

```text
In the current environment, organizations must leverage innovative solutions to unlock value and drive outcomes.
```

Nick-style replacement:

```text
The value comes from reducing the distance between analysis and use. A tool only matters if it changes what a PM, strategist, or salesperson can do in the next meeting.
```

### Avoid unsupported superlatives

```text
This is a groundbreaking framework.
```

Nick-style replacement:

```text
This is a cleaner framework for separating the source of active risk from the amount of active risk.
```

### Avoid vague "thought leadership"

```text
The future of investing will require adaptability, innovation, and resilience.
```

Nick-style replacement:

```text
The next phase of active management will likely reward firms that can adapt the form of active risk to the structure of the market, rather than defending a single implementation style across every universe.
```

### Avoid empty certainty

```text
This proves that low tracking error managers are better.
```

Nick-style replacement:

```text
This does not prove that low tracking error managers are always better. It does suggest that, in this universe and over this period, investors were not consistently rewarded for paying for higher tracking error.
```

---

## 17. The "Nick Alonso" Argument Template

Use this template when drafting a research memo, client note, or internal strategy piece.

```markdown
# [Title]

## Core Claim

[One sentence. State the conclusion directly.]

## Why This Matters

[Explain the practical investment, business, or client relevance.]

## The Common Interpretation

[Describe the usual framing.]

## The Cleaner Interpretation

[Reframe the issue. Use "not X, but Y" if appropriate.]

## Evidence

[Summarize the most important evidence. Do not overstuff.]

## Implication

[Explain what should change in positioning, portfolio construction, sales messaging, research direction, or workflow.]

## Usable Language

[Provide 2 to 4 sentences that can be lifted into a paper, email, or presentation.]
```

---

## 18. Reusable Prompt for Writing in Nick's Style

```text
Write in Nick Alonso's style.

Use a structured, investment-practitioner voice: analytical, direct, commercially aware, and institutionally credible. Start with the practical problem, correct any incomplete framing, introduce a cleaner framework, and end with a usable implication.

Avoid generic consultant language, promotional hype, and overly academic sentence structure. Use short to medium paragraphs. Prefer clear distinctions like "not X, but Y." Be willing to concede nuance, but still reach a conclusion. When using data, explain what the data means rather than merely reporting it.

The audience is [internal investment team / sales team / consultant / client / senior leadership].

The desired output is [memo / email / paper section / slide narrative / talking points].

Key facts to incorporate:
- [fact 1]
- [fact 2]
- [fact 3]

Tone target:
- Clear
- Rigorous
- Practical
- Slightly conversational
- No fluff
```

---

## 19. Reusable Editing Prompt

```text
Edit the following text into Nick Alonso's style.

Goals:
1. Make the argument clearer and more structured.
2. Replace vague or promotional language with practical, institutionally credible language.
3. Preserve nuance without weakening the conclusion.
4. Use the "not X, but Y" framing where it improves the argument.
5. Make the final version sound like a quantitative investment practitioner writing for a sophisticated institutional audience.

Return:
- A cleaned-up version
- A short note explaining the main changes
- Optional stronger version if the current draft is too cautious

Text:
[PASTE TEXT]
```

---

## 20. The Best One-Sentence Description of the Style

Nick's style is best described as:

> Practitioner-led investment writing that turns complex quantitative and strategic issues into clear frameworks, usable client language, and operationally grounded implications.

---

## 21. Concision and Clarity Discipline (Strunk and White)

Nick's voice is compatible with the core discipline of Strunk and White's *The
Elements of Style*. Treat these as an editing pass layered on top of the voice,
not a replacement for it. They sharpen the prose; they do not flatten the
signature moves. The "not X, but Y" reframe (§3) and deliberate parallel
repetition stay.

### The principles that matter here

| Principle | What it means for a draft |
|---|---|
| **Omit needless words** | Every word earns its place. Cut throat-clearing ("it is important to note that", "in order to", "the fact that"). Vigorous writing is concise. |
| **Prefer the active voice** | "The decomposition points the other way," not "It is pointed to by the decomposition." Active voice names the actor and shortens the sentence. |
| **Put statements in positive form** | Say what is, not only what is not. "The record is short" beats "the record is not very long." This complements the "not X, but Y" reframe, which is a deliberate structural move, not hedging. |
| **Be specific and concrete** | Replace vague abstractions with definite figures, names, and mechanisms. Reinforces §7 (evidence) and §14 (usable technicality). |
| **Use the plain word** | Choose the standard word over the showy one. No jargon unless it is doing real work (§4). |
| **Keep related words together; use parallel form** | Put the subject near its verb. Phrase parallel ideas in parallel grammar, including list items and "not X, but Y" pairs. |
| **One paragraph, one idea** | Reinforces §6. A paragraph doing two jobs should become two paragraphs. |

### Editing pass: cut the needless words

| Wordy | Tighter |
|---|---|
| in order to | to |
| due to the fact that | because |
| it is important to note that X | X |
| has the ability to | can |
| at this point in time | now |
| a total of 12 managers | 12 managers |
| make an adjustment to | adjust |

### Before / after (Nick domain)

#### Before

```text
It is important to note that, in order to properly evaluate the manager, we need to take into consideration the fact that the track record is not of a particularly long duration.
```

#### After

```text
The track record is short, so it narrows the range of explanations less than a longer one would.
```

### What not to over-apply

*The Elements of Style* is prescriptive and, in places, dated (its grammar advice
has been fairly criticized). Use it for the concision and clarity ethos, not as
inviolable grammar law. Two guardrails specific to Nick's voice:

- Keep the deliberate "not X, but Y" reframe and parallel repetition. Those are
  structural, not padding.
- "Omit needless words" means cut filler, not nuance. Do not delete a concessive
  clause ("That point is fair, but...") that is doing argumentative work (§10).

---

## 22. Final Style Checklist

Before sending or publishing, ask:

- Does the piece start with the real problem?
- Did we distinguish the common interpretation from the better interpretation?
- Is the technical point accurate without being overexplained?
- Is the implication clear enough for sales or leadership to use?
- Does the evidence support the claim without overwhelming it?
- Did we avoid generic consultant language?
- Did we avoid sounding promotional?
- Is there at least one sentence worth lifting into a client conversation?
- Does it sound like a practitioner, not a commentator?
- Would a PM, CIO, consultant, or senior salesperson respect the framing?

If the answer to most of these is yes, the draft is probably in Nick's voice.

---

## 23. Learned Preferences (append-only log)

New, durable style preferences observed during real writing sessions land here
first, newest at the top. Each entry is one dated bullet with provenance (what
Nick said or corrected, and where). During periodic curation, recurring entries
are promoted into the curated core (§1–22) and pruned from this log. Do not add
one-off, document-specific choices here — only durable voice preferences.

**Entry format:**

```
- 2026-06-14 — <preference in one line>. (source: <what was said / which doc>)
```

<!-- BEGIN LEARNED — newest first -->

- 2026-07-05 — No stage-direction openers. Do not open a section by announcing what the reader is about to see ("Start with the observation that gets the attention.", "Consider the following.", "Look at the data."). Open with the substantive fact itself. (source: Nick deleted the opener of the KoreaDiscount "headline" section.)

- 2026-07-05 — Cut dramatic pivot mini-sentences. Short one-liners that exist only to set up the next fact ("It is no longer stable.", "The temptation is to declare the discount dead.", "The reform stopped being a suggestion.") should be deleted; the factual sentence that follows carries the transition on its own. This is distinct from the *emphasis* one-liner after evidence ("That distinction matters."), which stays. (source: Nick's KoreaDiscount edits removed these pivots in two consecutive rounds.)

- 2026-07-05 — Hedge claims about other people's beliefs and intentions, not claims about data. When describing what investors/markets/families thought or wanted, prefer observational phrasing: "was popularly named" over "had a name", "investors seemed to treat it as permanent" over "investors treated it as permanent". Beliefs are not directly observable; data is, so data statements stay unhedged. (source: Nick's KoreaDiscount edit replaced both phrasings in one paragraph.)

- 2026-07-05 — Drop interpretive "rather than X" tails when the contrast is not needed. "...a permanent feature of the market rather than a mispricing" became "...a permanent feature of the market": if the sentence stands without the trailing contrast, cut it. Companion to the 2026-06-18 rule on not forcing "not X, but Y". (source: same KoreaDiscount edit.)

- 2026-07-03 — Use declarative titles and section headings, not questions. "Repricing the Korea Discount" beats "The End of the Korea Discount?"; "The reform's signature in the cross-section" beats "Did it really work?". Headings should state the finding or the topic, not pose the question the section answers. (source: Nick's edit request on the KoreaDiscount paper: "I would like titles that are not so obviously questions.")

- 2026-06-18 — Don't force the "not X, but Y" reframe. Reserve it for load-bearing contrasts; where the contrast isn't doing argumentative work, prefer a plain declarative (e.g. "asset allocation carries a persistent beta" over "that is a directional view on beta, not alpha"). This refines §3/§21, which protect the reframe as a structural move: keep it when it sharpens the argument, drop it when a plain statement is cleaner. (source: Nick's edits to the DMBA portable-alpha response note replaced a non-essential reframe with a plain declarative.)

- 2026-06-17 — Avoid defensive hedge words. Cut "honestly", "truthfully", "to be honest", "frankly", and qualifier phrases like "briefly and honestly". They read as defensive and undercut authority; state the point plainly and let the evidence carry it. (source: Nick repeatedly removed "honestly"/"truthfully" from the active-vs-passive paper and asked to add the rule.)

<!-- END LEARNED -->

