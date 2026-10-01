---
name: saas-retention-community
displayName: SaaS Retention, Support & Community
displayDescription: Keep customers — support, churn mitigation, community, chatbots, education
description: SaaS customer retention and community — customer support operations and response practice, churn and attrition reduction, building a user community, support chatbots, events, swag, education and knowledge bases. Use when the user asks how to retain SaaS customers, reduce churn or cancellations, run customer support or helpdesk, build a community, set support response policy, evaluate chatbots for support, or create customer education/knowledge resources.
version: 1.0.0
---

# SaaS Retention, Support & Community

## When to Use

- Designing or staffing a SaaS customer support function (support team, email, chat, phone, video/remote).
- Deciding which support channels to offer and to which customer tiers.
- Reducing churn/attrition and retaining paying customers.
- Building a private, users-only community and choosing where to host it.
- Growing community membership via email, chatbot, webinars, LTD launches, ads or influencers.
- Writing community rules and moderating a group.
- Setting up or tuning a support chatbot (install code, triggers, recipes, FAQs, tagging/CRM).
- Turning support interactions into marketing, sales and upsell opportunities.
- Looking for guidance on knowledge bases, events, swag or customer education (note: several of these files are stubs, see Source Files).

## When NOT to Use

- Onboarding, pricing, marketing funnels or sales process — those are other parts of the book, not covered by these files.
- Building the core product or engineering team.
- Any topic where the four stub files (events, swag, education, knowledgebases) would be the only source — the book contains no body text for them, so do not present invented guidance as coming from the book.
- Requests for external retention/support best practice that the author does not state in these files.

## Source Files

| Chapter | Path | Status | Note |
|---|---|---|---|
| Supporting Your SaaS Customers | book/attrition-supporting-your-community-and-growing-your-business/supporting-your-saas-customers.md | written | Support systems, team tasks, training, support methods, support as marketing/sales |
| SaaS Community Building | book/attrition-supporting-your-community-and-growing-your-business/saas-community-building.md | written | Community platforms, growth tactics, engagement, group rules |
| Chatbots | book/attrition-supporting-your-community-and-growing-your-business/chatbots.md | written | Chatbot features, setup, triggers, recipes, FAQs, tagging/CRM, ideas |
| Events | book/attrition-supporting-your-community-and-growing-your-business/events.md | stub | Heading "Events" only; no body content |
| Swag | book/attrition-supporting-your-community-and-growing-your-business/swag.md | stub | Heading "Swag" only; no body content |
| Education | book/attrition-supporting-your-community-and-growing-your-business/education.md | stub | Heading "Education" only; no body content |
| The Knowledge Base | book/attrition-supporting-your-community-and-growing-your-business/knowledgebases.md | stub | Heading "The Knowledge Base" only; no body content |

## Customer Support

A strong support system and reactive team is often one of the best ways to retain customers. Customers who feel good about how you treat them feel good about the product; if you are unresponsive, don't get back to people, or don't help people use your system, they will drop off quickly. The author's protip: you can turn really upset customers into raving fans by treating them well and responding quickly — problems are expected, but if you make customers feel amazing about having problems, they keep coming back.

Problems scale: one person with a bug is not really a problem, but ten thousand people with a little bug is a huge issue. Hacks, bugs, hardware failures and human error happen every day, so putting the right policies and systems in place up front is fundamental to long-term success.

Support systems listed by the author: Support Team, Email Support, Chat Support, Phone Support, Video/Remote Support, Knowledgebase, Chatbot.

Support team economics (author's Mailchimp illustration): at the time of writing Mailchimp had about 500 team members, roughly 80% in support; by the end of the book, almost 1000 people with about 82% in support — about 820 people just in support. The author's formula: 1 support person x 20 days per month x 6 people per day that sign up x $20/mo spend x 12 months estimated LTV per customer = $28,800, described as a difference of $14,400 added to the bottom line per month (each support person helps 25 people/day, 15 of them new users; a helped new user is twice as likely to sign up and stay, so 6 sign up instead of 3).

Support team tasks (the author's list of 12): answering questions; handling refunds and other money related issues; walking users through issues; finding bugs; upselling; referring users to other departments or teams; escalating issues; sending emails; answering chats; answering emails; improving the knowledge base; training the chatbot. The author notes SOPs for most of these can be written in a week to two weeks, and that almost every SaaS CEO he knows struggles with their support teams.

Training: the real trick is thorough and effective training, because there is a set list of tasks with a set process 98% of the time (the other 2% can be figured out or written out most of the time). MailChimp's training is 3 months, full time and intensive, and even then many new support team members are not ready and come back for more help regularly. When just getting started, hire someone for support who can eventually become a support leader and train the next support team members. Choosing a C-player for support at the start is paid for later.

### Support Methods, in the order a user should interact with them

- **Knowledge base** — the first line of defense. Users Google "How do [THING HERE] on [NAME OF YOUR SYSTEM]", which takes them to the knowledge base; the chatbot should also send them there if set up properly. Getting a good knowledge base set up and consistently updated is critical but very hard. Easiest start: something like the HelpGuru Wordpress theme. The author's favorite knowledge base system is Confluence, though it is used for internal operations rather than necessarily as an external knowledge base.
- **Chatbot** — if it is activated such that it asks questions or actively helps users, users are likely to pull it up and start asking questions; set up properly, most normal questions are covered and most direct users to the knowledge base. At the time of writing Intercom was the market leader in chatbot systems.
- **Email support** — if someone gets past the chatbot and knowledge base and still needs help, email them the answers. The people manning the chatbot work 8 hours per day, not around the clock, so out-of-hours questions get a message through the email ticket management system.
- **Chat support** — may be an earlier line of defence than email depending on your setup; described as a critical piece of SaaS infrastructure, hard to live without. It enables: talking to customers quickly and easily; identifying crucial aspects of their system use at the start of the conversation; moving conversations to more suitable team members or departments; progressing a user through support while simultaneously managing other customers; quickly passing along answers that exist elsewhere online, especially in the knowledge base; and processing support at your own speed. It can also come after the chatbot layer, cutting man-hours.
- **Phone support** — generally more useful when: (1) the SaaS is getting started and the company needs to understand its users and form a stronger following; (2) the customer is a higher level or higher paying customer; (3) the business is an Enterprise SaaS or generally serves higher paying customers. It is time consuming, sometimes draining and more expensive, so weigh the cost upfront. One plan is to provide phone support initially for your first customers to create raving fans, then later only for initial or higher level customers. Unless customers pay a lot, keep it simple and only let the highest payers get your phone number.
- **Video/Remote support** — representatives on a video call with customers, possibly taking remote control of the customer's device. It involves the highest level of service, the greatest possibility of forming lasting relationships, and the most liability. At BrainLeaf, when troubleshooting unknown bugs where the issue must be seen on the customer's device, they offer a video call to see the issue live.

Support is marketing and sales: for a SaaS these departments are one and the same — a great support experience turns a potentially upset customer into a raving fan and opens the door to upsales. Sample methods: in support response emails, inform customers of additional services, plans and upcoming webinars; train and incentivize the support team on up-sales and keep them informed of new plans, pricing and services; in the chatbot, tell users how much money they could save by moving up a level or plan, and if a user is on a monthly plan that would be cheaper annually, make them an automated offer.

## Churn & Attrition

The book's treatment of attrition is spread across the support and community chapters rather than a dedicated one:

- Unresponsiveness is the retention killer: if you don't get back to people or don't help them use your system, they drop off quickly.
- Quick, generous responses to problems convert upset customers into raving fans who keep coming back despite issues.
- Community building "decreases ATTRITION" — it is listed as one of the four things a community does for you.
- Retaining a customer can cost as much as 80% less than gaining a new one (the author's figure, stated in the community chapter).
- Little problems become huge problems at scale, so policies and systems put in place up front protect long-term retention.
- Upsells, webinars and annual-plan offers delivered through support and chatbot interactions raise year-over-year sales from the existing customer base.

## Community Building

Create a private, users-only group where engaged, loyal and advocating users can get information, ask questions, give you feedback, and support you and one another. Building it requires getting out in front of people, answering questions, being honest with yourself and your users, and talking to people regularly; that regular interaction informs you about your product more than almost anything else.

The author lists four outcomes: increases value for your users and customers; enables you to ask the hard questions and get real answers from engaged users; creates advocates and brand ambassadors; decreases attrition.

Where to put your community (you can use any or all; each has pros and cons):

- **Facebook, LinkedIn and other major social platforms** — the author's most experienced option. Pros: easy to get started, powerful tools, very large existing user pool, easy for people to find your group. Cons: if your users are not on the system, getting them to sign up probably won't happen; no easy access to email addresses; you can't see a lot of user statistics you could see on your own system.
- **Slack and other chat systems** — more fluid than Facebook but less consistent; people more easily forget Slack groups, and Slack only notifies you if someone directly mentioned you. Good for temporary groups, quick communication, large communities, and getting people on the same page fast. Pros: more fluid and thorough communication, more powerful person-to-person-to-person tools than Facebook, built more for business, better for shorter term or very large groups tied to a specific topic, event or region. Cons: easily forgotten, people sometimes don't want more communication through this channel, long-term groups tend to lose users.
- **Private forums and software systems** — the most powerful system for user management, analytics and delivery of information, but harder to get people to use regularly; the author's experience is groups start on a tool such as Facebook and eventually move to a true private forum. Pros: full access to user information, powerful user management tools, full access to user analytics, can start new subgroups or areas without pulling users away from the main group. Cons: more costly to set up, no existing users, needs to rank on search engines so users can find the area, requires more management and ongoing maintenance for upgrades and security.

Starting and growing the community — six methods the author gives:

1. **Push the invite through email** — add an invite to the private group to every email that goes out to paying customers, including transactional emails for bills, welcomes and payments, plus all campaigns to paying users.
2. **Push the invite via your chatbot** — if user information is linked to the chatbot, message paying users who have not clicked the email invite; give a good reason such as "Connect with other [YOUR PRODUCT] users" or "Get help from other [YOUR PRODUCT] users".
3. **Push the invite in webinars and other media** — videos and podcasts; people seeing your face and hearing a personal invite makes a huge difference, even from an old recording.
4. **The LTD push** — for a system where a LTD works, use the LTD unveil webinars, invite all listeners and offer a freebie for joining.
5. **Ads** — if you are really struggling; the author thinks money is better spent selling your product if you have one, but ads can be effective to drive users to a group when you need feedback while building.
6. **Influencers** — seeing that influencers are part of your group changes how people perceive you and your product, and an engaged influencer can add users fast; personal sales may work better, e.g. send a gift basket to their office with a personal invite.

Engagement: prime the engine with information that helps users accomplish their goal, and engage users one-to-one but publicly so everyone sees you and your team are involved. A good trick is a private call with a user about the product (ask permission, record it, and post the video to the group), and asking users you already talk to outside the group to post a quick review of your chat in the group; public thanks and recommendations make the group as a whole more likely to support you. Keep posting — groups fall apart and people stop looking if there isn't ongoing communication, and letting a group die is throwing money away.

The rules: always post rules before you need to enforce them. The author's sample set (adapted from Facebook Groups he is a member of) covers: any member can publish a post; introduce yourself (intros good, launch posts not, don't be salesy); ask for very specific feedback, give advice, start a discussion; don't be mean or you'll be removed quickly; no links to articles, blogs, posts or videos (link posts are deleted, two warns equals banned — instead read the article and post the highlights and insights as a native post, though links are allowed in comments in response to a question); short links are absolutely not allowed and will get you booted; self-promotion is allowed only after providing value first, best practice is to PM a mod for approval, asking for feedback as a veiled promotion earns a warning and blatant self-promotion gets you banned and blocked. Recommended reading given: https://sumo.com/stories/online-community-from-scratch

## Chatbots

The author calls chatbots one of the top time saving software systems: they automate responses to questions about sales, support or a variety of other things, and virtually every chatbot also has a chat system letting multiple representatives chat with different users simultaneously. The big value is automation of information delivery — every minute your team is not supporting clients with issues they could find elsewhere is money in your pocket.

Foundational features built into almost all chatbot systems: Install code, Triggers, Recipes, FAQs, CRM/Tagging, Data connection.

- **Getting setup** — after the account is set up, install the code in the header or footer depending on the system and activate it from the setup or dashboard area; add it via something like Google Tag Manager or directly in the code. Add it to the marketing site as well as the application so users see it while logged in.
- **Triggers** — a method of telling the chatbot to do something, generally send a message. Different pages can get different triggers and different users or groups can get triggers based on page, person, activity, lead score, etc.; the more precisely you track users, the better. Triggers run recipes. Almost all systems want a sales trigger on the homepage running a recipe that asks users if they have questions about the system.
- **Recipes** — a set of questions and answers, from simple ("What is your name?") to complicated troubleshooting. Most chatbot systems have preloaded recipes that just need editing for your product.
- **FAQs and knowledge base** — work together so users can ask seemingly random questions and have answers ready; the knowledge base stores the articles, and with a thorough FAQs and knowledgebase a user can often answer all their own questions.
- **Tagging/CRM** — tags assign users attributes such as name, where they are in the buying cycle and what issues they are having, added either by the user answering questions or by the system from user actions; they are very often the same tags used in lead scoring. With an integrated CRM, user information can be pulled in so a representative who joins a chat already has that user's information.

The author's chatbot ideas and suggestions:

1. **Don't be annoying** — a chatbot can be intrusive; only throw out information where people need to see it or are really struggling.
2. **Load user info anytime you can** — if a user is logged in you can often still load their information anywhere in your system, so you know who they are, where they are in the buying cycle, how good a lead they are and how to contact them; "Hey John, how can we help you today" beats "Can you please tell me your name?".
3. **Make FAQ questions as thorough as possible** — every question your team has to answer is time that doesn't need to be spent; every question answered correctly and well is money you don't have to spend later.
4. **Link to your own knowledge base** — the author dislikes paying a lot for a separate knowledge base inside the chatbot and dislikes having to migrate a ton of data if you switch chatbots; start with something you can use long term and link the chatbot into it, since dedicated knowledge base systems can be more robust and extensible.
5. **Deliver the right info to the right people** — know who you're sending what to, and if a user type or profile always needs certain information, deliver it to them.

## Events, Swag & Education

These topics are outline-only in this book. The files `events.md`, `swag.md` and `education.md` contain only their headings ("Events", "Swag", "Education") and no body text, so there is no author guidance, tactic, tool or number to report for them. Treat any question about SaaS events, swag or customer education as unanswered by this source.

Related material that does exist in the written chapters, for adjacent questions: the community chapter recommends pushing your group invite through **webinars** and other media and through the **LTD unveil webinars** (invite all listeners, offer a freebie), and the support chapter recommends telling customers about **upcoming webinars** in support response emails. The knowledge base is covered substantively in the support chapter and in the chatbot chapter's FAQs/knowledge base section, even though `knowledgebases.md` itself is a stub.

## Decision Tables

**Which support channel to offer**

| Situation | Channel the book supports |
|---|---|
| User has a self-serve question | Knowledge base first (they arrive via Google), then chatbot |
| User needs help outside your manned hours | Email support with an email ticket management system |
| You need rich, quick, transferable conversations at scale | Chat support; it can sit before or after the chatbot layer |
| SaaS getting started and you need to understand users and form a following | Phone support |
| Customer is higher level / higher paying, or business is Enterprise SaaS | Phone support |
| You must see an unknown bug happening on the customer's device | Video/remote support (BrainLeaf's approach) |
| You want the highest level of service and lasting relationships, and accept the most liability | Video/remote support |

**Where to host the community**

| Priority | Best fit in the book |
|---|---|
| Fastest start, existing user pool, powerful built-in tools | Facebook / LinkedIn / major social platforms |
| Temporary groups, quick topic-, event- or region-specific communication, very large groups | Slack and other chat systems |
| Full user management, analytics and information delivery; willing to pay and maintain | Private forums and software systems |

**Chatbot build order (author's implied sequence)**

| Step | Detail |
|---|---|
| 1 | Install the code (header or footer), via Google Tag Manager or directly, and activate it |
| 2 | Place it on the marketing site and inside the application |
| 3 | Set triggers (page, person, activity, lead score), starting with a homepage sales trigger |
| 4 | Build or edit recipes, from simple Q&A to troubleshooting |
| 5 | Flesh out FAQs and link the chatbot to your own knowledge base |
| 6 | Add tagging/CRM so representatives already have the user's information |

## Common Mistakes

| Wrong | Correct |
|---|---|
| Being unresponsive or not getting back to people | Treat customers well and respond quickly; problems become raving fans |
| Letting a small bug stay small in your thinking | Recognize that ten thousand people with a little bug is a huge issue; plan policies up front |
| Hiring a C-player for support at the start | Hire someone who can become a support leader and train the next team members |
| Giving your phone number to everyone | Keep it simple; only let the people paying you a lot get your phone number |
| Diverging support from marketing and sales | Treat them as one and the same; support opens the door to upsales |
| Setting up a chatbot and telling everyone about everything | Don't be annoying; only surface information where people need it or are struggling |
| Asking "Can you please tell me your name?" when the user is logged in | Load user info anywhere you can: "Hey John, how can we help you today" |
| Paying for a separate knowledge base inside the chatbot | Link the chatbot to your own more robust knowledge base system |
| Letting a separate chatbot knowledge base hold all your content | Start with something you can use long term instead of migrating a ton of data later |
| Starting a community with no rules | Post rules before you need them; rules can be bent, but you can't enforce what you don't have |
| Letting link posts and short links slide | Delete link posts, two warns equals banned, short links get offenders booted |
| Allowing veiled promotion as "feedback" | Require value first and mod approval; ban and block blatant self-promotion |
| Going quiet after the first few months of community posting | Keep posting; groups fall apart when communication stops |
| Spending on community ads before you have a product to sell | Spend on selling the product; use ads mainly when you need feedback while building |

## Chapter Index

**Supporting Your SaaS Customers** — `book/attrition-supporting-your-community-and-growing-your-business/supporting-your-saas-customers.md` — Written. Covers why support retains customers, the seven support systems, Mailchimp's support-heavy staffing and the author's support ROI formula, the 12 support team tasks, training and SOPs, each support method in order (knowledge base, chatbot, email, chat, phone, video/remote), and treating support as marketing and sales. Named tools and examples: MailChimp, BrainLeaf, the HelpGuru Wordpress theme, Confluence, Intercom.

**SaaS Community Building** — `book/attrition-supporting-your-community-and-growing-your-business/saas-community-building.md` — Written. Covers the private users-only community, the four outcomes it produces (including decreased attrition and the 80%-less-to-retain figure), platform pros and cons for Facebook/LinkedIn, Slack and private forums, six growth methods (email, chatbot, webinars/media, LTD push, ads, influencers), engagement tactics, and an adaptable set of group rules.

**Chatbots** — `book/attrition-supporting-your-community-and-growing-your-business/chatbots.md` — Written. Covers chatbots as a time-saving automation system, the foundational features (install code, triggers, recipes, FAQs, CRM/tagging, data connection), setup and activation, trigger targeting and the homepage sales trigger, recipes, FAQs/knowledge base, tagging/lead scoring and CRM integration, plus five practical suggestions. Names Intercom as the market leader at the time of writing.

**Events** — `book/attrition-supporting-your-community-and-growing-your-business/events.md` — Stub. Contains only the heading "Events"; no body text, so no author guidance exists for this topic.

**Swag** — `book/attrition-supporting-your-community-and-growing-your-business/swag.md` — Stub. Contains only the heading "Swag"; no body text, so no author guidance exists for this topic (a gift basket is mentioned once in the community chapter, but not as a swag program).

**Education** — `book/attrition-supporting-your-community-and-growing-your-business/education.md` — Stub. Contains only the heading "Education"; no body text, so no author guidance exists for this topic.

**The Knowledge Base** — `book/attrition-supporting-your-community-and-growing-your-business/knowledgebases.md` — Stub. Contains only the heading "The Knowledge Base"; no body text. Knowledge base guidance does exist elsewhere: the support chapter (first line of defense, HelpGuru, Confluence) and the chatbot chapter's FAQs and knowledge base section.
