# The CAT — inline principle callouts: design brief

## 1. What this replaces

The CAT rests on a small number of named principles (Conservation of Alignment, Readiness Ceiling, Deliberate Zero, Demand Accumulation, Upstream Cause). Earlier drafts considered two ways of surfacing these: a standalone question-bank-style page explaining them all in one place, and full-width "PRINCIPLE" banners on the Overview page. Both are out.

- The standalone page was retired along with the rest of the question bank (see `cat-learn-the-tool-brief.md`, Section 8) — the content lives better attached to the moment it actually applies.
- Full-width Overview banners were considered and dropped: they surface mechanic-level claims before there's anything on screen to hang them on, and at that number and size they compete with the live diagram for attention rather than supporting it. Overview keeps only genuine thesis-level statements about the tool as a whole, not the five mechanic-level principles.

This brief covers where the five principles actually live instead: a small inline marker, at the exact point in the interface or the text where each one first becomes true.

## 2. The rule: one canonical home per principle

Each principle is explained in full exactly once — at the first point in the site where it is encountered. Every other place that principle could plausibly come up (a later tab, a tutorial walkthrough, a scenario) either doesn't need to say anything about it, because the reader will meet or has already met the canonical version, or names it in plain text with no mark and no expand.

This is deliberately a simplification, not a comprehensive cross-referenced glossary: no principle gets a "read more" link back to another page, and nothing is explained twice. If a principle turns out to genuinely need reinforcing in a second context that isn't well served by "first mention only," that's a reassessment to make later once the content is live and it's clear whether the gap is actually felt — not something to design around pre-emptively now.

**Likely canonical homes**, based on where each principle's mechanic actually fires:

| Principle | Canonical home |
|---|---|
| Conservation of Alignment | CLO Mapping (Tab 4) — the moment a demand value is raised in one assignment and has to come from somewhere else in the same CLO row |
| Readiness Ceiling | The readiness/demand conflict warning (Tab 2 ↔ Tab 4) — when demand outruns what's been taught |
| Deliberate Zero | CLO Mapping (Tab 4) — entering a 0 in a demand cell |
| Demand Accumulation | Assignment Weights reveal (Tab 5) — the moment a derived total surprises the person who entered the rows that produced it |
| Upstream Cause | CLO Weightings (Tab 1) — realising a mapping problem can't be solved in Tab 4 because the ceiling is set upstream |

Four of the five have an obvious, single mechanical trigger. Upstream Cause is the exception worth flagging: it's less a tool-triggered event than a realisation a person talks their way into (as Aisha does), so its canonical home may end up being a passage of guiding text at Tab 1 rather than a warning the tool fires on its own. Worth deciding deliberately rather than defaulting it to wherever is convenient.

## 3. The marker

A small, quiet glyph in the same accent colour already used for principle callouts elsewhere on the site (the purple/pink from the "PRINCIPLE" treatment), attached directly to the phrase carrying the claim — not floating at the end of a sentence or paragraph. In the CLO Mapping example, that means the mark sits on "elsewhere in the row," not tacked on after the sentence finishes.

The mark needs to read as *insight*, not *help*: a generic info icon says "here's a definition if you're confused." This should say "this is one of the small number of things worth knowing about how the tool behaves." A single diamond or spark-style glyph rather than an "i" achieves that distinction.

At rest, the mark stays small and unobtrusive. A page with several principle mentions should still read as ordinary prose at a glance — the mark is there to be noticed once someone's eye catches it, not to interrupt reading.

## 4. On click: inline expand, not a popover or a link

Clicking the mark expands the explanation directly beneath the sentence it's attached to, pushing later content down — the same treatment already agreed for the CLO Mapping "move the bar / move the marker" cards. No floating tooltip (positioning and mobile problems), no navigation to another page or panel (nothing to consolidate against, nothing to keep in sync).

The expanded content is short: the principle's name, a one-line definition, and — where useful — a line on why it matters at this specific point. It collapses the same way it opened.

## 5. What a non-canonical mention looks like

Anywhere else a principle comes up — a tutorial step working through the same tab, a scenario passage — it's just named in the running text, with no mark and no click behaviour. Since the tutorial specifically has the CD working inside the real tabs (see `cat-learn-the-tool-brief.md`), the canonical instance and the tutorial's encounter with it are very often the same physical moment, not two separate copies that need to agree with each other.

## 6. Open items

- **Path dependence.** "First mentioned" assumes a single reading order, but the site doesn't have one — Pathway A and Pathway B move through the tabs differently, and the tutorial's own sequencing may not match either guide's. Worth deciding whether the canonical home is fixed once (e.g. pinned to wherever Pathway A first hits it, since that's the primary route) or allowed to vary by entry point. Flagging rather than resolving here, per the instruction to revisit once it's clear from real use whether this matters.
- **Upstream Cause's home** — tool-triggered warning vs. guided prose realisation at Tab 1 — needs a deliberate choice rather than a default.
- **Component-level spec** (exact glyph, colour tokens, spacing, animation on expand/collapse) is deliberately out of scope here, consistent with how the tutorial's own UI spec was deferred — this brief fixes the content rule and the interaction pattern, not the pixel-level treatment.
