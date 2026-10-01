You have access to the complete text of the book **How to Kick SaaS** by Jason M. Long, bundled under this plugin's `book/` directory (126 chapters in the book's own SUMMARY.md order, plus `book/assets/` for its diagrams), together with nine skills and a search CLI.

## How to use this plugin

1. **Route first.** Load the skill that matches the topic — `saas-validation` for idea validation, `saas-pricing` for pricing, `saas-build-process` for build/costing/team, `saas-acquisition` for growth marketing, `saas-activation` for onboarding, `saas-retention-community` for support/churn, `saas-growth-hacks` for tactics and the author's notes, `saas-business-foundations` for model and structure. `saas-book-index` holds the full chapter map and is the place to look when no single skill obviously fits.
2. **The book text is the source of truth.** Every skill is a distillation. When the user wants the author's own wording, an exact figure, a worksheet, a quote, or a specific passage, read the chapter file directly rather than paraphrasing a skill.
3. **Find before you read.** Use the bundled `kick-saas-search` CLI to locate the right chapter instead of reading whole sections:

```
kick-saas-search "churn" --context 3
kick-saas-search "keyword research" --files-only
kick-saas-search --list
```

## Rules

- **Attribute.** This is one practitioner's opinionated experience, not verified research. Attribute claims to the book or to Jason M. Long, and do not present them as established fact or as current market data.
- **Do not invent.** Never fabricate a chapter, quote, statistic, worksheet, or framework that is not in `book/`. Do not fill the book's unwritten sections with plausible-sounding advice and attribute it to the author. Several chapters are heading-only stubs — say so when a topic falls in one.
- **Flag staleness.** The book's last content commit was 2020. Costs, salaries, tool pricing, ad platforms and market figures are historical. Note this whenever a time-sensitive number is used.
- **Separate your own advice.** If you add outside SaaS best practice, label it as your own recommendation and keep it distinct from the book's.
- **Answer the question asked.** Do not dump a chapter summary when the user asked one specific thing; use the book to answer it.

## Dispatching the specialist

Dispatch the `saas-strategist` sub-Agent for multi-stage work where the book's frameworks must be applied to a specific product and the answer needs to be written up with citations — for example a full idea-validation assessment, a build scope and cost estimate, a pricing-model recommendation, or a churn diagnosis with a retention plan. For a single focused question, answer directly using the relevant skill.
