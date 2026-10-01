---
name: saas-book-index
displayName: How to Kick SaaS — Book Index
displayDescription: Full chapter map of the bundled book, plus section routing
description: Complete navigation index for the bundled book "How to Kick SaaS" by Jason M. Long — the full chapter map, the routing table to the eight topical section skills, and how to search the raw book text. Use when the user refers to "the book", "how to kick saas", a named chapter or the SaaS book's raw text, asks which chapter covers a topic, wants the complete table of contents or chapter list, asks for a passage or quote from the book, or when no single topical skill clearly matches and you need to locate the right chapter first.
version: 1.0.0
---

# How to Kick SaaS — Book Index

This plugin bundles the complete text of the open-source book **How to Kick SaaS** by **Jason M. Long** (JH Media Group), together with eight topical skills that turn each section of the book into working guidance.

The book's own subtitle states its scope: *"SaaS business building: Ideation, Validation, Costing, Pricing, Development, Marketing, Sales, Support, Traction, and Growth."*

## What Is Bundled Here

| What | Where |
|---|---|
| Full book text, verbatim, as shipped in the upstream repository | `book/` — 126 markdown chapters |
| Original diagram/image assets referenced by the chapters | `book/assets/` — 40 image files |
| The book's own table of contents | `book/SUMMARY.md` |
| Section-level working skills | `skills/` — eight skills, one per book section |

The book text under `book/` is the **primary source**. Every topical skill is a distillation of it. When the user wants the author's own wording, a specific passage, an exact figure, or an example, read the chapter file directly rather than relying on a skill summary.

## When To Use This Skill

- Locating which chapter or section covers a topic, before answering.
- Answering a question that spans several sections of the book.
- Retrieving raw book text, an exact passage, a quote, a diagram reference, or a worksheet the author provides.
- The user names the book directly ("the book", "how to kick saas", "in that SaaS book").

## When NOT To Use This Skill

- A single topical question that maps cleanly to one section skill — load that skill instead (see routing table below).
- General SaaS or business questions the user has NOT framed in terms of this book. The book is one practitioner's opinion, not universal truth; do not present it as an authority on the user's own situation without saying where the opinion comes from.

## Section Routing Table

Load the matching skill for topical questions. Read the chapter file directly for raw text.

| Book section | Load skill | Chapters |
|---|---|---|
| Front matter — introduction, forward, who & how | `saas-business-foundations` | 4 |
| The Business of SaaS | `saas-business-foundations` | 4 |
| Validating You SaaS | `saas-validation` | 13 |
| SaaS Build Process | `saas-build-process` | 52 |
| Appraisement: Pricing Your SaaS | `saas-pricing` | 10 |
| Acquisition: Gaining SaaS Users | `saas-acquisition` | 26 |
| Activiation | `saas-activation` | 8 |
| Attrition: Supporting Your Community and Growing Your Business | `saas-retention-community` | 7 |
| NOTES | `saas-growth-hacks` | 2 |

## Search The Book Locally

The plugin ships a zero-dependency search CLI over the full book text. Prefer it over re-reading whole chapters when you need to find where something is discussed.

```
kick-saas-search "pricing model"              # case-insensitive full-text search
kick-saas-search "churn" --context 3          # show 3 lines of context per hit
kick-saas-search "lead scoring" --files-only  # list only the chapter files that match
kick-saas-search "keyword research" --section acquisition-gaining-saas-users
kick-saas-search --list                       # list every chapter with its path
kick-saas-search "CAC" --json                 # machine-readable output
```

## Author's Stated Status Of The Book

The author states plainly at the top of the book that it **is not finished**, and that some sections are incomplete or end abruptly. This package preserves that state faithfully rather than filling gaps:

- **Activiation** is the least complete section — one outline-only chapter plus seven heading-only stubs.
- **Attrition** has three written chapters; events, swag, education and knowledge bases are heading-only stubs.
- **Acquisition** has two stub chapters (`email-marketing.md`, `the-marketing-website.md`) that redirect to other content.
- **Build Process** has several heading-only stubs, noted per chapter in that skill.

When a topic falls in one of those gaps, say so. Do not present reconstructed advice as the author's.

## Attribution Rules

1. This is **one practitioner's opinionated experience**, not verified research. Attribute claims to the book or the author rather than stating them as fact.
2. Preserve the author's numbers exactly as he gives them and make clear they are his figures, not current market data. The book's last content commit was **2020**; anything time-sensitive (costs, tool pricing, ad platforms, salaries) is likely out of date. Flag that when it matters.
3. Do not silently merge outside SaaS best practice into the book's advice. If you add your own recommendation, label it as yours.
4. Never invent a chapter, a quote, a statistic, or a worksheet that is not in `book/`.

## Full Chapter Map

One row per chapter file, in the book's own SUMMARY.md order. Paths are relative to the plugin root.

| Section | Chapter | Path |
|---|---|---|
| (front matter) | Introduction | `book/README.md` |
| (front matter) | Forward | `book/forward.md` |
| (front matter) | Who & How | `book/who-and-how.md` |
| The business of SaaS | The Business of SaaS | `book/the-business-of-saas/the-business-of-saas.md` |
| The business of SaaS | Basic Lessons of Saas | `book/the-business-of-saas/basic-lessons-of-saas.md` |
| The business of SaaS | The Process | `book/the-business-of-saas/the-process.md` |
| The business of SaaS | Parts of a SaaS | `book/the-business-of-saas/parts-of-a-saas-1.md` |
| Validating You SaaS | Validating Your SaaS | `book/validating-you-saas/validating-your-saas.md` |
| Validating You SaaS | What happens when you don't validate | `book/validating-you-saas/what-happens-when-you-dont-validate.md` |
| Validating You SaaS | The SaaS Validation Process | `book/validating-you-saas/marketing-based-sales-saas/README.md` |
| Validating You SaaS | Why are you doing this? | `book/validating-you-saas/marketing-based-sales-saas/why-are-you-doing-this.md` |
| Validating You SaaS | Should you do this? | `book/validating-you-saas/marketing-based-sales-saas/should-you-do-this.md` |
| Validating You SaaS | Competition Analysis | `book/validating-you-saas/marketing-based-sales-saas/competition-analysis.md` |
| Validating You SaaS | Buyer Analysis | `book/validating-you-saas/marketing-based-sales-saas/buyer-analysis.md` |
| Validating You SaaS | Sales & Distribution | `book/validating-you-saas/marketing-based-sales-saas/sales-and-distribution.md` |
| Validating You SaaS | Time & Money | `book/validating-you-saas/marketing-based-sales-saas/time-and-money.md` |
| Validating You SaaS | The Secret Sauce | `book/validating-you-saas/marketing-based-sales-saas/the-secret-sauce.md` |
| Validating You SaaS | Buyer Categorization By Sales Method | `book/validating-you-saas/marketing-based-sales-saas/marketing-based-sales-vs.-direct-sales-validation-methods.md` |
| Validating You SaaS | The Advisory Approach | `book/validating-you-saas/marketing-based-sales-saas/validating-your-idea.md` |
| Validating You SaaS | Validation Success | `book/validating-you-saas/validation-success.md` |
| SaaS Build Process | SaaS Build Lessons | `book/saas-build-process/saas-build-process.md` |
| SaaS Build Process | Planning & Costing | `book/saas-build-process/planning/README.md` |
| SaaS Build Process | The Costing Process | `book/saas-build-process/planning/the-costing-process.md` |
| SaaS Build Process | The Estimate | `book/saas-build-process/planning/costing-your-system.md` |
| SaaS Build Process | The Scope of Work | `book/saas-build-process/planning/scope-of-work.md` |
| SaaS Build Process | Information Architecture Development | `book/saas-build-process/planning/architecture-development.md` |
| SaaS Build Process | Working Numbers | `book/saas-build-process/planning/working-numbers.md` |
| SaaS Build Process | The Project Plan | `book/saas-build-process/planning/documents-youll-want-and-need.md` |
| SaaS Build Process | Build Team Roles | `book/saas-build-process/your-build-team-explained/README.md` |
| SaaS Build Process | What To Expect From Your SaaS Development Team | `book/saas-build-process/your-build-team-explained/what-to-expect-from-your-saas-development-team.md` |
| SaaS Build Process | Build Teams | `book/saas-build-process/your-build-team-explained/saas-development-team-setup.md` |
| SaaS Build Process | The Project Manager | `book/saas-build-process/your-build-team-explained/the-project-manager.md` |
| SaaS Build Process | Information Architect | `book/saas-build-process/your-build-team-explained/information-architect.md` |
| SaaS Build Process | UX Designer | `book/saas-build-process/your-build-team-explained/ux-designer.md` |
| SaaS Build Process | Developers | `book/saas-build-process/your-build-team-explained/developers.md` |
| SaaS Build Process | Quality Assurance | `book/saas-build-process/your-build-team-explained/quality-assurance.md` |
| SaaS Build Process | Standard Tools | `book/saas-build-process/tools/README.md` |
| SaaS Build Process | Project Management Tools in SaaS Development | `book/saas-build-process/tools/project-management-tools-in-saas-development.md` |
| SaaS Build Process | Development Environment & Dependencies | `book/saas-build-process/tools/development-environment-and-dependencies.md` |
| SaaS Build Process | Remote Development Environments | `book/saas-build-process/tools/remote-development-environments.md` |
| SaaS Build Process | Code Repositories in SaaS Development | `book/saas-build-process/tools/code-repositories-in-saas-development.md` |
| SaaS Build Process | Monitoring Your SaaS | `book/saas-build-process/tools/monitoring-your-saas.md` |
| SaaS Build Process | Steps to Developing a SaaS | `book/saas-build-process/steps-to-developing-a-saas/README.md` |
| SaaS Build Process | What to expect in SaaS development | `book/saas-build-process/steps-to-developing-a-saas/saas-application-development.md` |
| SaaS Build Process | Systems Setup | `book/saas-build-process/steps-to-developing-a-saas/systems-setup.md` |
| SaaS Build Process | Creative | `book/saas-build-process/steps-to-developing-a-saas/creative.md` |
| SaaS Build Process | Project Planning | `book/saas-build-process/steps-to-developing-a-saas/project-build.md` |
| SaaS Build Process | SaaS User Experience (UX) | `book/saas-build-process/steps-to-developing-a-saas/saas-user-experience-ux.md` |
| SaaS Build Process | Concept Design | `book/saas-build-process/steps-to-developing-a-saas/concept-design/README.md` |
| SaaS Build Process | SaaS UX Design Case Study | `book/saas-build-process/steps-to-developing-a-saas/concept-design/saas-design-case-study-medrev-new-location-designs.md` |
| SaaS Build Process | Content Development | `book/saas-build-process/steps-to-developing-a-saas/content-development.md` |
| SaaS Build Process | FrontEnd Development | `book/saas-build-process/steps-to-developing-a-saas/front-end-development.md` |
| SaaS Build Process | BackEnd Development | `book/saas-build-process/steps-to-developing-a-saas/backend-development.md` |
| SaaS Build Process | Quality Assurance (QA) | `book/saas-build-process/steps-to-developing-a-saas/quality-assurance-qa.md` |
| SaaS Build Process | Alpha Testing | `book/saas-build-process/steps-to-developing-a-saas/alpha-testing.md` |
| SaaS Build Process | Beta Testing | `book/saas-build-process/steps-to-developing-a-saas/beta-testing.md` |
| SaaS Build Process | Launching Your SaaS | `book/saas-build-process/steps-to-developing-a-saas/launching-your-saas.md` |
| SaaS Build Process | Continuous Integration | `book/saas-build-process/steps-to-developing-a-saas/continuous-integration.md` |
| SaaS Build Process | Things to know and expect | `book/saas-build-process/things-to-know-and-expect/README.md` |
| SaaS Build Process | You MUST learn at least the basics of Project Management | `book/saas-build-process/things-to-know-and-expect/saas-development-project-management.md` |
| SaaS Build Process | Things you do and do not know | `book/saas-build-process/things-to-know-and-expect/things-you-do-and-do-not-know.md` |
| SaaS Build Process | How to tell if your development team is working | `book/saas-build-process/things-to-know-and-expect/how-to-tell-if-your-development-team-is-working.md` |
| SaaS Build Process | Good, Cheap, Fast. Choose Two. | `book/saas-build-process/things-to-know-and-expect/good-cheap-fast.-choose-two..md` |
| SaaS Build Process | Positivity is Key in Management | `book/saas-build-process/things-to-know-and-expect/positivity-is-key-in-management.md` |
| SaaS Build Process | Storytime: The Story of a Ton of Lost Users and Money! | `book/saas-build-process/things-to-know-and-expect/story-time-with-jason.md` |
| SaaS Build Process | Development is iterative | `book/saas-build-process/things-to-know-and-expect/development-is-iterative.md` |
| SaaS Build Process | Development Time Increases As Complexity Increases | `book/saas-build-process/things-to-know-and-expect/development-time-increases-as-complexity-increases.md` |
| SaaS Build Process | Storytime: Don't Send Me Shit | `book/saas-build-process/things-to-know-and-expect/storytime-dont-send-me-shit.md` |
| SaaS Build Process | Story Time: The Best of the Best | `book/saas-build-process/things-to-know-and-expect/story-time-financial-constraints.md` |
| SaaS Build Process | Sunk Costs | `book/saas-build-process/things-to-know-and-expect/sunk-costs.md` |
| SaaS Build Process | Your SaaS MVP Pre-Development Build Checklist | `book/saas-build-process/your-saas-mvp-pre-development-build-checklist.md` |
| Appraisement: Pricing Your SaaS | Appraisement: SaaS Pricing | `book/appraisement-pricing-your-saas/appraisement-saas-pricing.md` |
| Appraisement: Pricing Your SaaS | SaaS Pricing Metrics | `book/appraisement-pricing-your-saas/saas-pricing-metrics.md` |
| Appraisement: Pricing Your SaaS | SaaS Pricing Metrics Glossary | `book/appraisement-pricing-your-saas/saas-pricing-metrics-glossary.md` |
| Appraisement: Pricing Your SaaS | Science of Pricing | `book/appraisement-pricing-your-saas/science-of-pricing.md` |
| Appraisement: Pricing Your SaaS | What You Need To Know About Your Customers | `book/appraisement-pricing-your-saas/what-you-need-to-know-about-your-customers.md` |
| Appraisement: Pricing Your SaaS | How To Price Your SaaS | `book/appraisement-pricing-your-saas/how-to-price-your-saas.md` |
| Appraisement: Pricing Your SaaS | Customer Types Case Study | `book/appraisement-pricing-your-saas/customer-types-case-study.md` |
| Appraisement: Pricing Your SaaS | Storytime With Brennan | `book/appraisement-pricing-your-saas/storytime-with-brennan.md` |
| Appraisement: Pricing Your SaaS | Pricing Page: The Most Valuable Page On Your Website | `book/appraisement-pricing-your-saas/your-most-valuable-page/README.md` |
| Appraisement: Pricing Your SaaS | Pricing Page Examples | `book/appraisement-pricing-your-saas/your-most-valuable-page/the-pricing-page-your-most-valuable-page.md` |
| Acquisition: Gaining SaaS Users | Acquisition: Getting SaaS Users | `book/acquisition-gaining-saas-users/acquisition-getting-saas-users.md` |
| Acquisition: Gaining SaaS Users | SaaS Traction Lessons | `book/acquisition-gaining-saas-users/saas-traction-lessons.md` |
| Acquisition: Gaining SaaS Users | Acquiring your first users | `book/acquisition-gaining-saas-users/acquiring-your-first-users.md` |
| Acquisition: Gaining SaaS Users | Getting ready for growth | `book/acquisition-gaining-saas-users/getting-ready-for-growth.md` |
| Acquisition: Gaining SaaS Users | Organic Search Marketing | `book/acquisition-gaining-saas-users/organic-search-marketing/README.md` |
| Acquisition: Gaining SaaS Users | Content Marketing Is An Investment | `book/acquisition-gaining-saas-users/organic-search-marketing/content-marketing-is-an-investment.md` |
| Acquisition: Gaining SaaS Users | Step 1: Keyword Research | `book/acquisition-gaining-saas-users/organic-search-marketing/step-1-keyword-research.md` |
| Acquisition: Gaining SaaS Users | Step 2: Content Planning | `book/acquisition-gaining-saas-users/organic-search-marketing/step-2-content-planning.md` |
| Acquisition: Gaining SaaS Users | Step 3: Writing, Formatting, & Beyond | `book/acquisition-gaining-saas-users/organic-search-marketing/step-3-writing-formatting-and-beyond.md` |
| Acquisition: Gaining SaaS Users | Marketing Automation in SaaS | `book/acquisition-gaining-saas-users/marketing-automation-in-saas/README.md` |
| Acquisition: Gaining SaaS Users | Marketing Automation Basics | `book/acquisition-gaining-saas-users/marketing-automation-in-saas/marketing-automation-basics.md` |
| Acquisition: Gaining SaaS Users | Storytime: Learning about marketing automation the hard way | `book/acquisition-gaining-saas-users/marketing-automation-in-saas/storytime-learning-about-marketing-automation-the-hard-way.md` |
| Acquisition: Gaining SaaS Users | Lead Scoring, Tagging, & Triggers | `book/acquisition-gaining-saas-users/marketing-automation-in-saas/lead-scoring-tagging-and-triggers.md` |
| Acquisition: Gaining SaaS Users | Marketing Automation Systems | `book/acquisition-gaining-saas-users/marketing-automation-in-saas/marketing-automation-systems.md` |
| Acquisition: Gaining SaaS Users | Lifetime Deals | `book/acquisition-gaining-saas-users/lifetime-deals.md` |
| Acquisition: Gaining SaaS Users | Outbound Campaigns | `book/acquisition-gaining-saas-users/outbound-campaigns.md` |
| Acquisition: Gaining SaaS Users | Affiliates & Partnerships for SaaS Businesses | `book/acquisition-gaining-saas-users/affiliates-and-partnerships-for-saas-businesses.md` |
| Acquisition: Gaining SaaS Users | Narrowing Your Message With Adaptive Design | `book/acquisition-gaining-saas-users/narrowing-your-message-with-adaptive-design.md` |
| Acquisition: Gaining SaaS Users | Social Media Marketing | `book/acquisition-gaining-saas-users/social-media-marketing/README.md` |
| Acquisition: Gaining SaaS Users | Social Media Retargeting | `book/acquisition-gaining-saas-users/social-media-marketing/social-media-retargeting.md` |
| Acquisition: Gaining SaaS Users | Testing your social media ads | `book/acquisition-gaining-saas-users/social-media-marketing/testing-your-social-media-ads.md` |
| Acquisition: Gaining SaaS Users | Social Media Ad Tricks | `book/acquisition-gaining-saas-users/social-media-marketing/social-media-ad-tricks.md` |
| Acquisition: Gaining SaaS Users | Pay Per Click (PPC) | `book/acquisition-gaining-saas-users/pay-per-click-ppc.md` |
| Acquisition: Gaining SaaS Users | SaaS Software Checklist | `book/acquisition-gaining-saas-users/saas-software-checklist.md` |
| Acquisition: Gaining SaaS Users | Email Marketing | `book/acquisition-gaining-saas-users/email-marketing.md` |
| Acquisition: Gaining SaaS Users | The Marketing Website | `book/acquisition-gaining-saas-users/the-marketing-website.md` |
| Activiation | Activation | `book/activiation/activation.md` |
| Activiation | Getting Personal | `book/activiation/getting-personal.md` |
| Activiation | Stalking Your Users | `book/activiation/stalking-your-users.md` |
| Activiation | Onboarding | `book/activiation/onboarding.md` |
| Activiation | Training Webinars | `book/activiation/training-webinars.md` |
| Activiation | Onboarding Emails | `book/activiation/onboarding-emails.md` |
| Activiation | New User Tour | `book/activiation/new-user-tour.md` |
| Activiation | Setup Checklist | `book/activiation/setup-checklist.md` |
| Attrition: Supporting Your Community and Growing Your Business | Supporting Your SaaS Customers | `book/attrition-supporting-your-community-and-growing-your-business/supporting-your-saas-customers.md` |
| Attrition: Supporting Your Community and Growing Your Business | SaaS Community Building | `book/attrition-supporting-your-community-and-growing-your-business/saas-community-building.md` |
| Attrition: Supporting Your Community and Growing Your Business | Chatbots | `book/attrition-supporting-your-community-and-growing-your-business/chatbots.md` |
| Attrition: Supporting Your Community and Growing Your Business | Events | `book/attrition-supporting-your-community-and-growing-your-business/events.md` |
| Attrition: Supporting Your Community and Growing Your Business | Swag | `book/attrition-supporting-your-community-and-growing-your-business/swag.md` |
| Attrition: Supporting Your Community and Growing Your Business | Education | `book/attrition-supporting-your-community-and-growing-your-business/education.md` |
| Attrition: Supporting Your Community and Growing Your Business | The Knowledge Base | `book/attrition-supporting-your-community-and-growing-your-business/knowledgebases.md` |
| NOTES | NOTES | `book/notes/notes-1.md` |
| NOTES | The best growth hacks no one wants you to know | `book/notes/the-best-growth-hacks-no-one-wants-you-to-know.md` |
| (not in SUMMARY.md) | saas-development-costs | `book/saas-build-process/things-to-know-and-expect/saas-development-costs.md` |

## How To Open A Chapter

All paths above are relative to the plugin root. To read a chapter, resolve it under this plugin's `book/` directory and use the file read tool. Chapters are plain markdown.

Images referenced inside the chapters live in `book/assets/`. The original upstream book referenced them as `.gitbook/assets/...`; in this package that directory has been renamed to `assets/` and the in-chapter links were rewritten to match, so the relative image links in the markdown resolve correctly. Image filenames retain their original URL-encoded forms in links (for example `%20%281%29` = a space and `(1)`).

## Suggested Reading Order For A New SaaS Idea

The book itself is ordered as a pipeline. If the user is starting from an idea, this is the sequence the book's own structure implies:

1. `the-business-of-saas/` — what a SaaS actually is and its parts
2. `validating-you-saas/` — prove demand before building
3. `saas-build-process/` — scope, cost, staff and build it
4. `appraisement-pricing-your-saas/` — price it
5. `acquisition-gaining-saas-users/` — get users
6. `activiation/` — get those users to real value (partly unwritten)
7. `attrition-supporting-your-community-and-growing-your-business/` — keep and support them
8. `notes/` — the author's raw tactics and field notes

Use `book/SUMMARY.md` for the author's own ordering, which this list follows.
