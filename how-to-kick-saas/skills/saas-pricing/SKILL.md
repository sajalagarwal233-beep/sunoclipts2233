---
name: saas-pricing
displayName: SaaS Pricing & Appraisement
displayDescription: Price a SaaS product — metrics, models, psychology, and the pricing page
description: SaaS pricing strategy — pricing metrics and glossary (MRR, ARPU, LTV, churn), pricing models and tiers, the psychology/science of pricing, knowing your customer segments, and how to design the pricing page. Use when the user asks how to price a SaaS, what to charge, pricing model or tier design, ARPU/expansion/upsell questions, discount or annual-plan strategy, pricing page copy, or any SaaS revenue-metric question.
version: 1.0.0
---

# SaaS Pricing & Appraisement

This skill packages the "Appraisement: SaaS Pricing" section of the open-source book
*How to Kick SaaS* by Jason M. Long (JH-Media-Group/how-to-kick-saas). Everything below is
drawn only from the chapter files listed in `## Source Files`.

## When to Use

- The user asks how to price a SaaS product, what to charge, or where to start on pricing.
- The user wants a pricing model, tier structure, or value metric designed.
- The user asks how to raise **Average Revenue Per User (ARPU)** or optimize revenue.
- The user asks about SaaS metrics: MRR, ARR, ARPU, LTV, CAC, churn/attrition, growth, MQL, SQL.
- The user asks how to know whether a price is "right", or how to research willingness to pay.
- The user asks about the LTV-to-CAC ratio and what a healthy ratio looks like.
- The user asks about discount strategy, annual vs. monthly plans, or cutting attrition.
- The user asks what to put on a pricing page, or wants pricing page copy/structure.
- The user asks how to segment customers and decide which group to sell to.

## When NOT to Use

- The user wants acquisition/marketing or retention mechanics outside pricing (other book sections).
- The user wants product validation or idea selection (this book's validation material, not this skill).
- The user wants legal, tax, or accounting treatment of revenue — the book does not cover it.
- The user wants benchmark data for a specific industry — the book gives only its own case-study numbers.
- The user wants the full Growth Metrics glossary — the book explicitly gives only a
  "what you absolutely need to know" list and points elsewhere (ProfitWell Learning Center).

## Source Files

| Chapter | Path | Note |
| :--- | :--- | :--- |
| Appraisement: SaaS Pricing | book/appraisement-pricing-your-saas/appraisement-saas-pricing.md | Section intro: pricing is the most neglected lever; points to the Price Intelligently SaaS Pricing Strategy book. |
| SaaS Pricing Metrics | book/appraisement-pricing-your-saas/saas-pricing-metrics.md | LTV, CAC, and the LTV:CAC ratio; why metrics drive decisions. |
| SaaS Pricing Metrics Glossary | book/appraisement-pricing-your-saas/saas-pricing-metrics-glossary.md | The acronym/formula glossary (ARR, ARPU, churn, CAC, growth, MoM, LTV, MQL, MRR, SQL, value metric). |
| Science of Pricing | book/appraisement-pricing-your-saas/science-of-pricing.md | Evidence-based pricing, Van Westendorp Price Sensitivity Meter, value-based vs. cost-plus vs. competitor pricing. |
| What You Need To Know About Your Customers | book/appraisement-pricing-your-saas/what-you-need-to-know-about-your-customers.md | Checklist of customer questions to answer per group. |
| How To Price Your SaaS | book/appraisement-pricing-your-saas/how-to-price-your-saas.md | The author's 4-step ARPU optimization process. |
| Customer Types Case Study | book/appraisement-pricing-your-saas/customer-types-case-study.md | BrainLeaf case study: five customer types with prices, then the metric analysis of each group. |
| Storytime With Brennan | book/appraisement-pricing-your-saas/storytime-with-brennan.md | Brennan Dunn on why the freelancer market fails; build an audience before a tool. |
| Pricing Page (README) | book/appraisement-pricing-your-saas/your-most-valuable-page/README.md | Argument that the pricing page is the most valuable page on the site. |
| Pricing Page Examples | book/appraisement-pricing-your-saas/your-most-valuable-page/the-pricing-page-your-most-valuable-page.md | Pricing page examples (Sumo, Trello, Freshbooks, GitHub, Calendly, Leadpages) and monthly vs. annual pricing. |

## Pricing Metrics Glossary

The book states plainly that this is "not a complete glossary of Growth Metrics, just the
'What you absolutely need to know' list," and points to the ProfitWell Learning Center for more.

- **Profit.** The most basic aspect of the business: `Revenue - Cost = Profit`.
- **LTV (Lifetime Value).** "The lifetime value to you of a customer" — from signup and first bill until the end of that customer's lifecycle with the business. Book's example: a customer paying $10/month who stays three years has an LTV of `$10 x 36 months = $360`. Formula: `LTV = Average Revenue Per User (ARPU) / Churn Rate to date`, equivalently `LTV = (Total revenue to date / Total number of users to date) / (# of customers who left / total number of customers)`. The book warns the metric "is not always accurate": it swings drastically with retention, so if retention drops quickly LTV can drop even if customers return the next month. A smoothing variable could be added, but the book keeps the formula simple.
- **CAC (Customer Acquisition Cost).** The cost of acquiring a new customer; different for different kinds of customers, and often (not always) higher for customers with a higher LTV. Formula: `CAC = Total Cost of Marketing & Sales / # of Customers Acquired`. It can be broken down by channel — e.g. customers acquired by outbound campaigns divided by customers acquired with that method.
- **LTV to CAC.** The book's headline ratio. Per PriceIntelligently.com it "always needs to be higher than 3 to 1, preferably a lot more" — every $1 spent returns $3 — and per the same source continual pricing optimization can push it up to **11 to 1**. At 3:1 the book reasons you have $2 left over per $1 spent for (1) improving customer experience, (2) operating the business and (3) profit for growth, and that this is not enough once all non-marketing costs are added up, especially against a competitor operating at 5:1.
- **ARR (Annual Recurring Revenue).** Revenue generated on a recurring basis each year; not the same as MRR because of annual or lifetime memberships and in-year discounts. Formula: `ARR = Total revenue in a year that is expected to renew the following year`.
- **MRR (Monthly Recurring Revenue).** "How much total money you have coming in from subscriptions each month"; if growing, this month should exceed last month. Formula: `MRR = Amount of recurring revenue from the most recent month`.
- **ARPU (Average Revenue Per User).** The amount the average user is worth in revenue; can be any time period but is often per month. Formula: `ARPU = Total revenue for time period / Total number for time period`.
- **Churn Rate or Attrition** (one of the "3 A's of SaaS"). The annual rate at which users stop using the service; it helps determine LTV. Formula: `Churn rate = # of customers who left / total number of customers`. Positive churn means losing customers; churn can also be **negative**, which the book calls a "money machine" because you are gaining customers rather than losing them.
- **Growth.** Total new subscription revenue from new and existing users in a given month, with churn factored in. Formula: `Growth = New subscriptions + upgrades - churn`.
- **MoM / M/M (Month over Month Growth Rate).** Formula: `MoM = (Current month total revenue / Last month total revenue) - 1`.
- **MQL (Marketing Qualified Lead).** A customer vetted, generally by an automatic system, as a potential customer — usually someone who downloaded a lead magnet and took measured follow-up actions.
- **SQL (Sales Qualified Lead).** A lead vetted by the sales team, usually after a salesperson has spoken to them; typically closest to closing (not to be confused with Structured Query Language).
- **Value Metric.** The item(s) being sold that scale with the customer's needs. The most common value metric is the number of users — as users go up, so does price. It must increase along with the value of the system to the target user, and a SaaS can have multiple value metrics that scale with different kinds of users.

## How The Author Prices A SaaS

The book frames its process as "the basic steps to optimizing your Average Revenue Per User
(ARPU)": a 4-step customer-research process followed by a metric-analysis feedback loop.

1. **Step 1 — Who are you selling to?** You must already know this (it comes from validation).
   Take all the groups you have and **segment them into three to five major groups**.
2. **Step 2 — Identify the demographics of the groups that will pay the most and get the most
   value from your SaaS offering** — "your highest value customers." For each group capture
   (1) type of company, (2) company industry, (3) role, position, or title; if possible also age
   range, income range, male/female ratio, interests, computer savviness, education level, and
   anything else relevant. If you do not have this, the book's four sub-steps are: start with who
   *isn't* using your system; work out the group's expected professions; identify expected
   male-to-female ratio, ages, and income; then infer traits from those to understand motivations
   and your real competition.
3. **Step 3 — Determine most valued features.** This is "what your different customer groups are
   actually buying." Different roles value different things — a CEO cares about reporting, a call
   center caller cares more about system speed. List the features you think each group wants, then
   **survey the users themselves**; without users yet, use the advisory board.
4. **Step 4 — What's it worth to each group?** Only the customer will tell you what they will
   actually pay. Send surveys to everyone or ask the advisory board, remembering it is "a very,
   very small sample size" and that regions value systems very differently. The book points to
   **Van Westendorp's Price Sensitivity Meter** for the questions to ask.

Then close the loop with metrics: once you have ARPU, MRR, churn rate, CAC and LTV per customer
type, you can decide which group you should really be selling to. The case study shows the
follow-through — define each group's LTV:CAC, then pull whichever lever moves it: raise price, cut
support, lower CAC, decrease churn, improve feature development, or increase sales into the
profitable group. The book stresses this is never finished: "as soon as we make the changes noted
above, we're going to have to redo the analysis again."

## Science & Psychology Of Pricing

- "SaaS pricing isn't rocket science, but it is science." Pricing is part of marketing, sales, the
  system, upgrades, conversations, growth, and the author's happiness in the business — "in some
  ways, it is the business."
- The pricing model should be based on a **scientific model of evidence-based decisions**, and the
  people who give you those answers are your customers. "If you're not talking to them, you're not
  doing your job."
- The author names the **SaaS Pricing Strategy** book (Price Intelligently) as the best resource —
  the section intro tells readers to "READ THE BOOK" — and repeatedly recommends **Breaking the
  Time Barrier** by Mike McDerment (FreshBooks) for value-based selling, "especially if you're
  selling at the enterprise level."
- **Researching willingness to pay** means asking customers about their willingness to pay, their
  interest in different features, and their interest in different kinds of pricing models — plus
  which price points create the most sales vs. the most revenue.
- **Van Westendorp's Price Sensitivity Meter** — described as what the SaaS Pricing Strategy book
  relies on exclusively. Its four questions, as the book lists them:
  1. At what price would you consider the product so expensive it is not worth buying? (too expensive)
  2. At what price would you consider the product starting to get expensive, so it is not out of
     the question, but you would have to give some thought to buying it? (expensive/high)
  3. At what price would you consider the product priced so low that you would feel the quality
     couldn't be very good? (too cheap)
  4. At what price would you consider the product a bargain — a great buy for the money? (cheap/good value)
  The author notes there are **counter-arguments** to this method which he believes are valid.
- **Methods of SaaS pricing** — three approaches the book contrasts:
  - **Value-based pricing** — the recommended default: "If you are selling something in a market
    where the price can be based on the value you provide for your customers or clients, base your
    pricing on this."
  - **Cost-plus pricing** — take your cost and add a margin.
  - **Competitor-based pricing** — find out what competitors charge and charge something close.
  - The book's warning: if you provide exactly the same as a competitor, buyers will probably go
    with the other company. "Figure out how you are different and set your price based on how much
    money you're making or saving that client, not on how much it costs you or what your
    competition is doing."
- **Psychology that drives the buying decision (from the pricing page chapters):** if the price is
  too expensive they walk away; if it is too cheap users don't see the value; if no plan speaks to
  them they cannot identify their needs with the system.

## Customer Types

The book defines its customer taxonomy through the **BrainLeaf** project-scoping SaaS case study.

| Segment | Company / Role | Valued features | Willingness to pay (book's numbers) | Customers |
| :--- | :--- | :--- | :--- | :--- |
| The Freelancer | Marketing, size 1; Creative Director | Pre-built templates and contracts | Low — "they don't have much to spend": $0 - $10/mo | 125 |
| Small Agency Owner | Dev-focused digital agency, size 11; Founder & CEO | Sales process management and per-project profitability reporting | Medium: $75/mo | 255 |
| Mid-Sized Digital Agency COO | Full-service digital agency, size 52; COO | Operations streamlining, sales reporting, exporting data to spreadsheets | Medium: $250/mo | 90 |
| Large Agency Project Manager | Digital marketing / web-design, size 500; PM / Account Manager | Client approval management, team collaboration | High: $300+/mo | 25 |
| Enterprise CTO | Enterprise, size 14,000; CTO | Cost per development task estimation | High: $8,000+/mo | 1 |

What each implies for price (from the per-group analysis):

- **Freelancers** — the noisiest group (most questions, problems, handholding, calls) but
  **LTV:CAC of 1 to 1**; focusing on them would have failed the business. Levers: **increase
  price** (raises LTV; fits a smaller group, acceptable since the group loses money), **cut
  support**, and **lower CAC** (drop PPC targeting them, cut follow-up phone calls).
- **Small Agency Owner** — highest MRR group but churn higher than wanted; **5:1 LTV:CAC**. Fix is
  churn reduction via a dedicated onboarding process and onboarding emails. Numbers: LTV $937 =
  ARPU/Churn = $75 / .08; group size 56% of 500 = 280 users; group LTV $262,369. At 6% churn the
  new LTV would be $1,250 and group LTV $350,000 — a difference of **$87,631**, "roughly an
  increase in group revenue by A THIRD."
- **Mid-Sized Digital Agency COO** — acquired by a professional salesperson pitching these
  companies, hence substantially higher CAC; **5:1 ratio**. Churn is 3%; dropping it by one point
  would lift LTV from **$8,333 to $12,500**. Actions: add a customer-success role (advisory board,
  private Facebook Group, gathering needs, pitching new features, personal tutorials) and pitch a
  "Done For You" analysis option. The group values data analysis and operations streamlining, but
  those carry a learning curve and change costs, so target companies at the right stage.
- **Large Agency Project Manager** — "turns out, this is our best customer!" One slip-up can cost
  the company thousands, so the system's value to this user is high. Pricing is "looking pretty
  good"; the need is **more customers** (they all came from one conference talk and a well-known
  user's endorsement). Action: return to the conference and give more talks, and find more
  conferences fitting the strategy.
- **Enterprise CTO** — a single client, a long-time friend; has some attrition because departments
  came on and off. Its **LTV is greater than the next highest group by a factor of more than 5**.
  The book's caveat: enterprise sales are "very, very different from small business sales" — they
  mean having someone who knows people in the industry and can make a phone call, and if you are
  selling at the right price that person is worth every penny despite their high price.

The book's conclusion: there is **no single most valuable group** — they all impact the bottom
line differently. "The more you know about each of these groups … the faster you can test your
hypothesis and implement more profitable pricing," and the system is never "done" — after making
changes you must redo the analysis.

**Brennan Dunn's warnings about the freelancer segment** (outside corroboration the book cites):
he built a tool that solved the problem the way *he* solved it, so he had to teach people why they
needed to solve it that way; freelancers often don't know they have the problem until it burns
them, and then they are out of the market; the freelancer market has a ton of churn with high
acquisition cost and people exiting to full-time jobs; and "I built a tool when I should have
built an audience" — the tool should have been the last thing, not the first.

## The Pricing Page

- The pricing page is asserted to be **the most valuable page on the entire marketing website** —
  more than the home page, features page, or onboarding. "Make no mistake about it, your PRICING
  PAGE is the most valuable page."
- Why: it is where people decide if the product is "worth it" — pricing page messaging determines
  the buying decision. Too expensive and they walk away; too cheap and users don't see the value;
  no plan that speaks to them and they don't identify their needs with the system.
- Everything researched earlier comes together there: who customers are, what they want, what
  price they will accept, and how the value metric(s) affect those users. The book warns founders
  treat the pricing page as an afterthought and says to make sure it is well researched and planned.
- Each example pricing page is analyzed for four elements: **the name of the target group, the
  amount the group is willing to pay, the value metric, and the features most valuable to that
  group.** Examples the book shows (as screenshots, with no copy analysis in the text):
  **Sumo.com, Trello.com, Freshbooks.com, GitHub.com, Calendly.com, Leadpages.net**.
- **Monthly vs. annual pricing.** Pricing annually instead of monthly is beneficial as part of the
  overall Acquisition, Appraisement, and Attrition/Retention strategy. Very often it is more
  valuable to drive a group — or all users — toward an annual plan, and a standout benefit is that
  **it cuts attrition**: if all you sell is an annual plan for a group, they cannot churn for at
  least a year.

## Decision Tables

**Metric → when to use it**

| Metric | Use it when | Book's note |
| :--- | :--- | :--- |
| MRR | You want monthly subscription cash and momentum | Should be higher than last month if growing. |
| ARR | Customers hold annual or lifetime memberships or got in-year discounts | Not the same as MRR for that reason. |
| ARPU | You want the average value of a user, often per month | The metric the pricing process is framed around optimizing. |
| Churn / Attrition | You need LTV, or you are diagnosing customer loss | Helps determine LTV; negative churn is the "money machine." |
| CAC | You are evaluating acquisition efficiency, overall or by channel | Higher-value customers often (not always) cost more. |
| LTV | You are comparing the worth of customer groups | Swings with retention, so treat as directional. |
| LTV:CAC | You are making the keep/serve decision per group | Must exceed 3:1; can reach 11:1 with pricing optimization. |
| Growth | You want net monthly subscription growth | `New subscriptions + upgrades - churn`. |
| MoM | You want the month-over-month growth rate | `(This month / last month) - 1`. |
| Value Metric | You are choosing what scales with the customer's needs | Number of users is the most common. |
| MQL / SQL | You are separating automated vetting from sales-team vetting | SQL is closest to closing a sale. |

**Segment → pricing approach (from the case study)**

| Segment | LTV:CAC in the book | Action the book takes |
| :--- | :--- | :--- |
| Freelancer | 1 to 1 | Increase price, cut support, lower CAC (drop PPC, cut calls). |
| Small Agency Owner | 5 to 1 | Decrease churn via dedicated onboarding ($75/.08 = $937 LTV). |
| Mid-Sized Agency COO | 5 to 1 | Decrease churn and improve feature development; add customer-success role. |
| Large Agency Project Manager | Best customer, pricing "looking pretty good" | Increase sales — return to the conference, speak more. |
| Enterprise CTO | LTV >5x the next-highest group | Decide if revenue supports an enterprise salesperson through long cycles. |

## Common Mistakes

| Wrong | Correct |
| :--- | :--- |
| Putting pricing together "over the course of a day" and never changing it for fear someone gets upset. | Treat pricing as one of the most important parts of the system; keep optimizing it. |
| Skipping pricing because you are more interested in building and marketing. | Understand your people/markets, your presentation, and why you price the way you price — skipping it risks failure. |
| Assuming you already know the price is right. | Ask "How do you know you got it right?" and research it — the answer can mean growth or death. |
| Pricing so low you cannot scale or are losing money. | Price for value so you can serve customers and stay competitive. |
| Using cost-plus or competitor-based pricing when value-based pricing is available. | Price on the value you provide — money made or saved for the client. |
| Offering something identical to a competitor and pricing close to them. | Differentiate, then price on your differences. |
| Deciding which customer group matters based on who contacts you most. | Analyze ARPU, MRR, churn, CAC and LTV per group before deciding. |
| Not tracking LTV:CAC per group. | Keep LTV above CAC — more than 3:1, ideally much more (up to 11:1 with optimization). |
| Serving a low-value group with the same support and onboarding as high-value groups. | Cut support time, lower CAC, and reprice the unprofitable group; tailor onboarding for high-value groups. |
| Ignoring churn because a group has high MRR. | Small churn reductions are large LTV gains: 8%→6% took LTV $937→$1,250; 3%→2% took $8,333→$12,500. |
| Abandoning the channel that produced your best customers. | Keep investing in it — the book returns to the conference and applies to speak again. |
| Assuming the home page or features page is your most valuable page. | The pricing page is the most valuable page; research and plan it deliberately. |
| Only offering monthly plans when annual would fit. | Consider driving a group or all users to annual to cut attrition for at least a year. |
| Using the advisory board as your pricing sample without caveat. | Recognize it is a very small sample and that regions value systems very differently. |
| Treating the system as "passive income." | It is a journey of continuous testing and re-analysis — never "done." |

## Chapter Index

- **Appraisement: SaaS Pricing** — `book/appraisement-pricing-your-saas/appraisement-saas-pricing.md`
  A short section opener: SaaS pricing is one of the most important aspects of building your system
  and the one businesses spend the least time on. The author asks "How do you know you got it
  right?", explains pricing can mean growth or death, and tells readers to read the Price
  Intelligently SaaS Pricing Strategy book.
- **SaaS Pricing Metrics** — `book/appraisement-pricing-your-saas/saas-pricing-metrics.md`
  Argues pricing is the foundational sales point and the difference between a thriving and a dead
  SaaS, with metrics as the basis of decisions. Introduces Revenue - Cost = Profit, LTV, CAC, and
  the LTV:CAC requirement (>3:1, up to 11:1 with optimization), with a worked explanation of why
  3:1 is thin.
- **SaaS Pricing Metrics Glossary** — `book/appraisement-pricing-your-saas/saas-pricing-metrics-glossary.md`
  The "what you absolutely need to know" glossary of concepts and acronyms: ARR, ARPU, churn rate,
  CAC, growth, MoM, LTV, MQL, MRR, SQL, and value metric, each with the author's definition and,
  where given, a formula.
- **Science of Pricing** — `book/appraisement-pricing-your-saas/science-of-pricing.md`
  Frames pricing as marketing, sales, system, upgrades, conversations, growth and happiness — "in
  some ways, it is the business." Covers evidence-based pricing from customer research, the four
  Van Westendorp Price Sensitivity Meter questions (with a noted counter-argument to the method),
  and value-based pricing vs. cost-plus and competitor-based pricing.
- **What You Need To Know About Your Customers** — `book/appraisement-pricing-your-saas/what-you-need-to-know-about-your-customers.md`
  A short checklist chapter. Three things to start: who you are selling to, their needs and pain
  points, and how you quantify their interests and needs. Then eight questions per group, including
  the price point where each group sees value, cost to acquire, LTV, and MRR. The protip: cost to
  acquire + what they spend + how often they churn = your formula for success.
- **How To Price Your SaaS** — `book/appraisement-pricing-your-saas/how-to-price-your-saas.md`
  The four-step ARPU optimization process: (1) know who you are selling to and segment into three
  to five major groups; (2) identify demographics of the highest-value groups; (3) determine most
  valued features and survey users; (4) find what it's worth to each group, with a warning about
  advisory-board sample sizes and regional differences.
- **Customer Types Case Study** — `book/appraisement-pricing-your-saas/customer-types-case-study.md`
  The BrainLeaf case study with five user types (Freelancer, Small Agency Owner, Mid-Sized Digital
  Agency COO, Large Agency Project Manager, Enterprise CTO) and their prices, then a metric-driven
  analysis of each group showing LTV:CAC, churn-reduction scenarios, and actions to increase
  revenue. Concludes there is no single most valuable group and the analysis must be repeated.
- **Storytime With Brennan** — `book/appraisement-pricing-your-saas/storytime-with-brennan.md`
  A brief account of a conversation with Brennan Dunn about why he sold Planscope.io: he built for
  how he solved the problem, freelancers don't know they have the problem until it burns them, the
  freelancer market has heavy churn and high acquisition cost, and he built a tool when he should
  have built an audience.
- **Pricing Page: The Most Valuable Page On Your Website (README)** — `book/appraisement-pricing-your-saas/your-most-valuable-page/README.md`
  Asserts the pricing page, not the home page, features page, or onboarding, is the most valuable
  page on the marketing site, because it is where people decide whether the product is worth it.
  Lists the three failure modes: too expensive, too cheap, or no plan that speaks to them.
- **Pricing Page Examples** — `book/appraisement-pricing-your-saas/your-most-valuable-page/the-pricing-page-your-most-valuable-page.md`
  Shows pricing page examples (Sumo, Trello, Freshbooks, GitHub, Calendly, Leadpages) and states
  the four elements each page should express: the target group name, the amount they will pay, the
  value metric, and the features most valuable to that group. Closes on monthly vs. annual pricing
  and how annual plans cut attrition.
