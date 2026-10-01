---
name: saas-build-process
displayName: SaaS Build Process
displayDescription: Plan, cost, staff, and run a SaaS development project
description: SaaS development project execution — scoping and costing a build, information architecture, choosing a build team and roles, standard dev tooling, the step-by-step development lifecycle from concept design through QA, alpha, beta and launch, plus the failure modes and scheduling realities of SaaS builds. Use when the user is planning, estimating, budgeting, staffing, project-managing, or shipping a SaaS product, or asks about MVP checklists, dev team roles, development cost, scope of work, or build timelines.
version: 1.0.0
---

# SaaS Build Process

## When to Use

Use this skill when the user is planning, costing, staffing, project-managing, or shipping a SaaS product. Concrete triggers include:

- Preparing a Scope of Work, creative brief, project plan, or information architecture for a SaaS build.
- Estimating or budgeting a build (3-point estimation, hours, planning cost, operational cost).
- Deciding how to staff a build (solo, agency, freelancers, full-time team) or which roles to hire.
- Choosing standard development tooling (code repo, project management, dev environments, monitoring).
- Walking the development lifecycle: planning, wireframing/experience design, platform setup, front-end and back-end development, alpha, content review, beta, release-candidate review, release, continuous integration.
- Reasonable questions about MVP checklists, dev team roles, development cost, scope of work, or build timelines.
- Understanding why builds slip: iterative development, complexity growth, sunk costs, good/cheap/fast, Brooks's Law.

## When NOT to Use

- Marketing, sales, traction, or growth topics — this material set is explicitly the system build, not the marketing website or go-to-market.
- Project validation and competition analysis — the planning chapter states its steps begin *after* validation and competition analysis.
- Generic software-engineering questions with no SaaS build-planning, cost, staffing, or lifecycle angle.
- Deep Agile/Scrum education — the book repeatedly points the reader to outside guides (Atlassian Agile Guide) rather than covering the body of knowledge itself.
- Anything not grounded in the source files below; do not invent pricing, roles, or timelines beyond them.

## Source Files

Paths are relative to the plugin root.

### Overview

| Chapter | Path | Note |
| :--- | :--- | :--- |
| SaaS Build Lessons | book/saas-build-process/saas-build-process.md | Seven build lessons: you guide the build, it is a construction project, plan up front, UX decides survival, pick community-supported tech, scope creep kills, add unit tests once validated; plus continuous integration. |

### Planning

| Chapter | Path | Note |
| :--- | :--- | :--- |
| Planning & Costing (index) | book/saas-build-process/planning/README.md | Planning will save or lose more money than anything; SOW document list; creative brief, contract, IA, flows, project plan. |
| Information Architecture Development | book/saas-build-process/planning/architecture-development.md | In-depth IA chapter: why it matters, parts of an IA, user types/flows, and a large outline of user areas, admin panel, transactional emails. |
| The Project Plan (stub) | book/saas-build-process/planning/documents-youll-want-and-need.md | Stub — only the heading "# The Project Plan". |
| The Scope of Work | book/saas-build-process/planning/scope-of-work.md | SOW composition and the questions each part answers; 15-minute to 4-hour estimation increment guidance. |
| The Costing Process | book/saas-build-process/planning/the-costing-process.md | Four costing phases (estimate, IA & flows, operational costs, working numbers) and the cost-to-plan table. |
| Working Numbers (stub) | book/saas-build-process/planning/working-numbers.md | Stub — heading only, no content. |
| The Estimate | book/saas-build-process/planning/costing-your-system.md | Estimate spreadsheet (five worksheets), 3-point estimation method, 20% PM modifier, be honest about the real cost. |

### Steps To Developing A SaaS

| Chapter | Path | Note |
| :--- | :--- | :--- |
| Steps to Developing a SaaS (index) | book/saas-build-process/steps-to-developing-a-saas/README.md | The 10-step MVP build order, noting steps run in parallel. |
| Alpha Testing | book/saas-build-process/steps-to-developing-a-saas/alpha-testing.md | Alpha = works but buggy; internal testing; backlog discipline; content review; alpha as just another iteration. |
| BackEnd Development | book/saas-build-process/steps-to-developing-a-saas/backend-development.md | What the back-end developer does and the nine inputs they need to do their job. |
| Beta Testing | book/saas-build-process/steps-to-developing-a-saas/beta-testing.md | Beta = ready for user testing; test and sell at the same time; paying vs non-paying customers. |
| Concept Design (index) | book/saas-build-process/steps-to-developing-a-saas/concept-design/README.md | Creative comes mid-process, not at the start; HiFi designs and the web/concept designer. |
| SaaS UX Design Case Study (MedRev) | book/saas-build-process/steps-to-developing-a-saas/concept-design/saas-design-case-study-medrev-new-location-designs.md | MedRev teardown showing front-end coder output vs UX designer output and why both roles plus a PM are needed. |
| Content Development (stub) | book/saas-build-process/steps-to-developing-a-saas/content-development.md | Stub — heading only. |
| Continuous Integration | book/saas-build-process/steps-to-developing-a-saas/continuous-integration.md | CI definition, history (Extreme Programming, Integration Hell), the 8-step loop, and Jenkins automation. |
| Creative (stub) | book/saas-build-process/steps-to-developing-a-saas/creative.md | Stub — heading only. |
| FrontEnd Development | book/saas-build-process/steps-to-developing-a-saas/front-end-development.md | Front-end scope, the seven inputs needed, and the rising cost of changes. |
| Launching Your SaaS | book/saas-build-process/steps-to-developing-a-saas/launching-your-saas.md | Launch = wire signup to credit-card processing; the real work starts after. |
| Project Planning | book/saas-build-process/steps-to-developing-a-saas/project-build.md | Why project planning comes after the IA and flows; aspects of a SaaS project plan; Gantt, roadmap, critical path. |
| Quality Assurance (QA) | book/saas-build-process/steps-to-developing-a-saas/quality-assurance-qa.md | Nine QA lessons: ongoing process, separate QA person, multi-perspective QA, bug descriptions, specs/tests, PM system, cost of skipping, QA time share, padding. |
| What to expect in SaaS development | book/saas-build-process/steps-to-developing-a-saas/saas-application-development.md | Ten expectations: deadlines, questions, understanding, work time, unknowns, timelines, resources, money, features, use cases. |
| SaaS User Experience (UX) | book/saas-build-process/steps-to-developing-a-saas/saas-user-experience-ux.md | What UX is, UX statistics, UX designer duties and questions, stakeholder meetings, and the 10-step UX design process. |
| Systems Setup (near-stub) | book/saas-build-process/steps-to-developing-a-saas/systems-setup.md | Near-stub — a six-item bullet list only (Confluence, JIRA, Documentation, Time Tracking, daily meeting planning, daily 'blog' article per person). |

### Things To Know And Expect

| Chapter | Path | Note |
| :--- | :--- | :--- |
| Things to know and expect (index) | book/saas-build-process/things-to-know-and-expect/README.md | Stub — heading only. |
| Development is iterative | book/saas-build-process/things-to-know-and-expect/development-is-iterative.md | The path is circular; testing is development; features are built, sold, then iterated. |
| Good, Cheap, Fast. Choose Two. | book/saas-build-process/things-to-know-and-expect/good-cheap-fast.-choose-two..md | Each pairing of two excludes the third, with reasoning on developer rates and demand. |
| How to tell if your development team is working | book/saas-build-process/things-to-know-and-expect/how-to-tell-if-your-development-team-is-working.md | Watch code commits in the repo, ideally surfaced in Slack; commits are not a precise work measure. |
| Positivity is Key in Management | book/saas-build-process/things-to-know-and-expect/positivity-is-key-in-management.md | Entrepreneurs see only the one mistake; happy people work faster and harder. |
| SaaS Development Costs | book/saas-build-process/things-to-know-and-expect/saas-development-costs.md | Short chapter — "how much does it cost to build a SaaS?" is like "how much to build a building?", it depends. |
| SaaS Development Project Management | book/saas-build-process/things-to-know-and-expect/saas-development-project-management.md | You must learn at least the basics of project management/Agile; basics take about an hour. |
| Story Time: The Best of the Best | book/saas-build-process/things-to-know-and-expect/story-time-with-jason.md | A quantum-computing client's funding and salary levels; "best of the best" has a real cost; hiring a specialist SaaS dev company for MVP. |
| Storytime: The Story of a Ton of Lost Users and Money | book/saas-build-process/things-to-know-and-expect/story-time-financial-constraints.md | BrainLeaf platform rebuild built 4x over estimate after a bad platform choice; avoid-wrong-systems checklist. |
| Storytime: Don't Send Me Shit | book/saas-build-process/things-to-know-and-expect/storytime-dont-send-me-shit.md | An angry-email story; the real problem was a missing QA process, not the developer. |
| Sunk Costs | book/saas-build-process/things-to-know-and-expect/sunk-costs.md | Definition of sunk cost and the sunk cost fallacy; inventory of the author's started/failed/growing projects (4 for 10). |
| Things you do and do not know | book/saas-build-process/things-to-know-and-expect/things-you-do-and-do-not-know.md | Known knowns, known unknowns, unknown knowns, unknown unknowns applied to a build. |
| Development Time Increases As Complexity Increases | book/saas-build-process/things-to-know-and-expect/development-time-increases-as-complexity-increases.md | Quadratic connection growth example (2 features = 4 connections up to 6 features = 60) with a checking/fixing time model. |

### Tools

| Chapter | Path | Note |
| :--- | :--- | :--- |
| Standard Tools (stub) | book/saas-build-process/tools/README.md | Stub — the heading "# Standard Tools" only. |
| Code Repositories in SaaS Development | book/saas-build-process/tools/code-repositories-in-saas-development.md | What a code repo is, why it matters, and Git/GitHub/Bitbucket. |
| Development Environment & Dependencies | book/saas-build-process/tools/development-environment-and-dependencies.md | Hosting/scaling (Digital Ocean, AWS, serverless) and the dependency + concrete analogy. |
| Project Management Tools in SaaS Development | book/saas-build-process/tools/project-management-tools-in-saas-development.md | JIRA (author's recommendation), Asana, Wrike, Teamwork; ticket volume warning. |
| Remote Development Environments | book/saas-build-process/tools/remote-development-environments.md | What a remote dev environment is and why it is needed; Docker and Vagrant. |
| Monitoring Your SaaS | book/saas-build-process/tools/monitoring-your-saas.md | Monitoring tools (New Relic, App Optics, Traceview) and Digital Ocean monitoring wired to Slack. |

### Your Build Team Explained

| Chapter | Path | Note |
| :--- | :--- | :--- |
| Build Team Roles (stub) | book/saas-build-process/your-build-team-explained/README.md | Stub — the heading "# Build Team Roles" only. |
| Developers | book/saas-build-process/your-build-team-explained/developers.md | Doctor analogy for dev specialties; the six dev areas and their languages; the lead developer; the full-stack myth. |
| Information Architect | book/saas-build-process/your-build-team-explained/information-architect.md | What an information architect does and why experience counts. |
| Quality Assurance | book/saas-build-process/your-build-team-explained/quality-assurance.md | Testing never stops; the 11-step "what normally happens" decline; what a QA member does; developers cannot test their own work. |
| Build Teams (team setup) | book/saas-build-process/your-build-team-explained/saas-development-team-setup.md | The four ways to build a team and when each fits. |
| The Project Manager | book/saas-build-process/your-build-team-explained/the-project-manager.md | Why a PM is the primary money-saving role and what makes a good PM. |
| UX Designer | book/saas-build-process/your-build-team-explained/ux-designer.md | What UX designers do, great vs average, pages vs states, and the ten-point "your SaaS UX designer should" list. |
| What To Expect From Your SaaS Development Team | book/saas-build-process/your-build-team-explained/what-to-expect-from-your-saas-development-team.md | Developers are optimists (pad times); communication and meeting cadence; Brooks's Law. |

### Checklist

| Chapter | Path | Note |
| :--- | :--- | :--- |
| Your SaaS MVP Pre-Development Build Checklist | book/saas-build-process/your-saas-mvp-pre-development-build-checklist.md | 33-item checkbox list of everything that should be done before the build starts (system-build tasks only). |

## Planning & Costing

### The four costing phases (the author's own process)

1. **Estimate** — a rough draft of the Scope of Work. Review estimates for multiple areas of work and estimate minimum and maximum times for each.
2. **Information Architecture & Flows** — the estimate is fleshed out into a full IA plus page-by-page flows; these become the primary planning documents.
3. **Operation Costs** — you are building a *business*, not just a tool: staff, overhead, advertising, taxes, continued operation, new features, customer support. If you do not calculate these now you will have under-priced your services.
4. **Working Numbers** — the true starting cost picture; still not "final", may fluctuate over the project.

The author states costing is "the most tedious part of the entire project, but also the most important," and that outside of a lack of validation, a lack of understanding in planning is the number one reason SaaS businesses fail.

### Three-point estimation (the method he uses)

- The estimate should be based on **3-point pricing** — described as "a standard Project Management Professional (PMP) estimation process."
- Four metrics per item: **Maximum Hours**, **Minimum Hours**, **Most Likely Hours**, and **Average Hours** (the average of the other three).
- A **modifier** column adds a modifying value to other hours. Example: Project Management hours are estimated by adding up all labor hours then multiplying by a percentage, "most often 20%."
- Hours can swing wildly on small scope changes, so a range is almost always a necessity to set client expectations.
- Estimation granularity rule (PROTIP, repeated in the SOW chapter): "When we estimate large projects, we try to take tasks down as little as 15-minute increments and as large as 4-hour increments, but never longer than 4 hours."

### The estimate spreadsheet

The book supplies a "SaaS planning spreadsheet" template of five worksheets:

- **Costs Breakdown** — a dashboard showing sums from all other areas in one centralized place.
- **Standard SaaS System Features** — general systems most SaaS need. Review and remove what the MVP does not need first. A warning note states the "UX design / flows, client revisions, & design meetings" item "can easily go from 40 hours to 400 hours, so do NOT underestimate this item."
- **System-Specific Features** — where most estimate time goes: create a header per major area, name and describe each major feature, then give min/max/most likely and calculate the average. The total, plus-20% and minus-20% cells may need modifying as rows are added.
- **Marketing Website** — a round-number (not deep-dive) estimate based on competitor or benchmark sites, per page.
- **Operational Costs** — software systems and people; a basic review of these numbers is acceptable at estimate stage.

Who should work on the estimate, together, before proceeding: the Information Architect, Lead Developer, Lead Designer, and Lead Stakeholder.

### Costing effort and cost figures (attributed to the author)

- His team of experienced information architects, developers, UX designers, and project managers "can take as little as four hours and as many as sixty hours to put together an estimate after all the research, conversations with clients, internal discussion, etc."
- If you have never done this before, "plan on spending at least 20 hours" on this aspect of the project.
- To cost out the entire system you can generally "expect to spend somewhere in the range of 1.5k to 20k."

| Size of Project | Cost Range to Plan |
| :--- | :--- |
| $35,000 - $50,000 | $3,000 - $10,000 |
| $50,000 - $100,000 | $8,000 - $25,000 |
| $100,000 - $250,000 | $15,000 - $50,000 |
| $250,000 - $500,000 | $40,000 - $100,000 |
| $500,000 - $1,000,000 | $50,000 - $250,000 |

As project size goes up the costing range becomes harder to predict, and "as project builds go up the complexity of planning goes up quadratically."

### The honesty rule

"The most difficult part of this process is BEING HONEST WITH YOURSELF AND YOUR TEAM ABOUT THE ACTUAL COST." He rejects the common line "We can just do this for the minimum number of hours" as a lie. You can cut down to an MVP, but if you are going to market you must plan for what it will actually cost.

## Scope Of Work

The full Scope of Work (SOW) is called "your most important document" — the blueprint to the factory you are planning to build. It consists of:

- The Creative Brief
- Estimate (listed in the planning index version)
- Project Contract and/or Worker Contracts
- The Information Architecture
- Project Flows & Wireframes
- The Project Plan

The lack of a thorough scope of work is called "probably the number one reason, outside of completing the validation process, that projects fail," and the primary reason projects run over budget and scope creeps.

### Creative Brief

Answers: project goals; what problem(s) the SaaS solves for target markets; whether it solves a knowledge gap, time gap, or both; the value to the market; why *you* want to build it; who will use it (with an in-depth description of each user profile); why and how each user type uses it; recommended methods of reaching the target market; tone and message; ongoing KPIs; benchmark competitors; benchmark designs. Developed by "a marketer or marketing team in lockstep with the SaaS stakeholders (you)," and this MUST be done to a large part before moving forward.

### Contract

Answers: what both parties agree to; who is responsible for what on both build-team and client sides; how much is paid; when payments are due; specific deliverables; what happens if deliverables are not met; who the decision makers are; what is required of each company's decision makers; what each group is responsible for; what information can and cannot be shared externally. Created by "the SaaS system leadership in tandem with an attorney."

### Project Flows & Wireframes

Must include: designs for each page; the connections between interactive objects and how a user flows from one to another; the different states of pages and views. Created by a UX designer or design team.

### Project Plan

Sets expectations for timeline and who does what when — tasks, deadlines, milestones, dependencies. Answers: who is on the team; each person's tasks; each person's deadlines; project milestones; when payments are due; what systems manage the project; how often team meetings occur; what is expected of each person/group; task dependencies; the items that determine completion. The PM builds it before the team begins developing, and preferably before designing; it is often confused with the information architecture but is a completely different document.

## Information Architecture

An information architecture is "a written description of your system" — every section, page, and feature, how people use it and often why, understandable by both a lay-person and a developer, and granular enough for a designer or developer to build from. It is a work in progress, "rarely ever 'done'": every change or modification should be described in it.

The author addresses the criticism that this is "waterfall": for building a system from scratch this document well thought out from the beginning "will save you countless hours of work and time." If your team is adding to an existing system, other methods may be as good or better.

He calls the IA "the central document of your planning methods and the linchpin of a fast and affordable product launch," and frames the project tagline as **"waterfall plan, Agile build."**

### Who builds it

The **Information Architect** writes the initial IA with help from the project stakeholders, developers, and designers.

### What the IA includes (SOW chapter)

Features; subfeatures; APIs; integrated systems and future integrations; pages; sections; subsections; views; how each feature/page/section should work; non-functional aspects (e.g., load time); plugins or widgets; development platforms; development environments; design frameworks; Content Management System(s); and section-by-section, page-by-page, feature-by-feature times estimated by the builders, double-checked by other team members, discussed with all team members, and approved by the department lead.

### Major areas of a SaaS IA

- System goals, user types, & user flows
- Project-wide tasks & notes
- Public-facing views
- User type specific views and notes
- Admin panel

**System goals** are usage goals, not monetary goals — descriptions of how the system helps users solve a problem, preferably the step-by-step user flow start to finish; may include competitor benchmarks, product usage goals, and non-functional requirements.

**User types** — each user type's job role and reason for using the system, their permissions to different areas, why they have those permissions, and the flow of each user through the system. (Example given: in a CRM, a Sales Manager wants team performance reports, a salesperson enters data and gets call reminders, and the CEO gets forecasts via an API call into enterprise BI.)

**User flows** — different user types use different areas; understanding each type's flow "should ideally be at or near the top of the page."

### Considerations (in the author's order)

1. Features, pages, & views — developers think in features, designers think in pages or views.
2. Project size — the larger the project, the more important the architecture, because small changes can have large cost/time impacts.
3. Team size & experience — the more clearly the team understands the vision at the beginning, the better.
4. Security — understood in initial phases.
5. What is and is not necessary.
6. Order of areas.
7. Waterfall plan, Agile build.
8. Granularity & meticulosity.

### The IA outline the chapter lays out

**Project-Wide tasks and notes:** Planning; Team setup; Kickoff; Systems Setup; Project management; QA; Launch.

**Creative:** Determining Style (Mood boards; Creative Brief; Flows & Wireframes; Style Guide - examples; Mockups).

**User Areas & Systems:** Header & Footer; Onboarding (choosing a plan, credit card info, account setup, email verification, user education incl. "requiring" watching a video, onboarding emails, onboarding revisions); Authentication (log in/out, secure passwords, forgot password, Two-Factor Authentication); Dashboard; Account Management (permissions: account owner, account manager, team member, other user types, teams, editing plans, change passwords, change username); Transactional Emails (setup; account creation; payments/billing — initial payment upcoming x2, receipt/thank you, upsell receipt, card expiring, card expired, payment failed, access removed, refund, renewal; notifications; alerts — password reset, privacy policy update, account safety, membership update, event reminder; subscriptions — free trial ending, plan cancellation); Notifications (in-system notification system); Subscriptions (billing, invoices, team billing, pricing, value metric, discount codes); Localization; Chatbot Setup; Analytics Setup; Affiliate Sales; Support Requests; System Specific features.

**Admin Panel:** Authentication (protecting your system); Dashboard; Add/Remove users; Add/Remove teams; Change user roles; Edit plans and pricing; User impersonation; General system statistics.

**Marketing Website:** listed as a heading with no content in the source.

## Build Team Roles

Each role as the book defines it and what it is responsible for.

### Information Architect

The information architect is "very much like an architect in home or commercial real estate building," with experience across design & UX, development, and project management. They take your ideas and envision what should be built to accomplish your goals, then — often with a team of developers and designers — help plan the information architecture, which "outlines every section, subsection, feature, functionality, and anticipates issues in growth or change to the systems." The best architects he has worked with have experience as a designer, developer, and project manager. His advice: hire an architect who has worked on similar systems; "If you choose a less experienced architect, remember that you learn by making mistakes. Don't be someone's mistake."

### UX Designer

UX designers "take systems that are complicated and make them seem easy" and "are problem solvers." They consider the business bottom line and the impact of user actions on company goals. Key distinction from non-UX designers: they build not just pages but 'views' and 'states' (a page may have many states — rollover, click, post-click notifications, modal boxes), across every device type, screen size, input system (mouse, keyboard, screen reader, gesture, touch), paired with accessibility compliance.

What your SaaS UX designer should do (his 10-point list):

1. Ask a lot of questions about your users.
2. Ask a lot of questions about element priority on each page.
3. Thoroughly understand system users, what the system does and provides, and why users will use it.
4. Ensure you have a well thought out information architecture.
5. Create a list of flows (usually simple wireframes showing the steps a user takes).
6. Get feedback from everyone on the team on how users will flow through the system.
7. Be upset if the development team does not review what they are putting together.
8. Once there is team consensus, build basic or more-than-basic designs for each page and view showing main interaction aspects.
9. A senior-level SaaS UX designer almost always has design skills too; if not, you may need an additional web or graphic designer, and the front-end developer must review graphic-designer work ("Graphic designers are notorious for designing things that can't be coded!").
10. Help write the content for the pages they are working on.

UX designer duties listed in the UX chapter include mobile/tablet/desktop differences, competitor analysis, user interviews, behavioral data analysis, heatmap and usage analysis, product market fit & validation, benchmarking, heuristic evaluation, cognitive walkthroughs, conversion-oriented evaluation, content audits, UX reviews, user testing, A/B testing, qualitative and quantitative interviews, user surveys, card sorting, eye-tracking, lean product experiments, user onboarding and activation, navigation, multi-channeling, animations, spacing, accessibility compliance, and more. UX data points they rely on: user types, system architecture, system/user goals, user flows, system elements, usage analytics, user stories, and team/user feedback for iterative design.

### Project Manager (PM)

"Why you need one": don't build a SaaS without a PM; "Don't think of them as a cost center, think of this role as your primary money saving role." Without an effective PM "the wheels are going to come off before you even get out of the driveway." A good PM fires underperforming developers, gets projects back on track, keeps documentation, makes sure people meet deadlines, and keeps you informed.

The PM builds the project plan before the team begins developing and preferably before designing, and meets with everyone to get consensus on it before starting. On what makes a PM good, his opinion is "a heightened level of neuroticism" — an internal need to have things exactly as they must be and an inability to tolerate things being out of place, disorganized, or late.

### Developers

The doctor analogy: doctors study medicine broadly then specialize in a residency and practice their specialty. So it is with developers — there is overlap, but always a relative advantage in one area. "You wouldn't want your dermatologist operating on your brain."

The six development areas the book lists, with their languages:

- **Frontend Development** — make things look and work well across devices: HTML, CSS, JS.
- **Backend Development** — make things function and build logic: PHP, ASP, Python, Node.js, Angular.js, Java, and lots of others.
- **Mobile App Development** — Android, iOS, hybrid apps: React.js, Ionic, Phonegap, Swift, Objective C, C#, C++, Java.
- **Database Development** — store/retrieve data as efficiently as possible: SQL, MsSQL, MySQL, PostgreSQL, Mongo DB, and others.
- **DevOps / SysAdmin** — set up and manage hosting environments and troubleshoot: AWS, DO, Apache, Nginx, SQS, Lambda, Ansible.
- **AI** — R, Python, Lisp, Prolog, Java.

**The Lead Developer** reviews code submitted by other developers, accepts 'Pull Requests', leads and manages the development team, understands when developers are and are not doing their jobs, and helps find new developers. "A great lead developer is a huge asset to the project. The converse also holds true, a poorly chosen or incompetent lead developer can destroy your project." The book breaks developers into front-end and back-end since that is where specialties lie.

### Quality Assurance

QA members are "probably the least staffed" part of dev teams, yet the author has "seen teams crushed by QA and the addition of a single person would have saved the project and the company." Testing is required at every step; QA is a part of development. "Can't developers just test their own work? **No. They can't.**" The QA member tests and builds tests, and early on can double as a documentation/knowledge-base builder; they are also a developer, "very often... a front-end developer who LOVES finding bugs and writing automated tests."

### Team setup options (the four ways)

1. **Build part or the whole thing yourself** — good only if building a tool (not a platform), with plenty of time, not much money, and existing dev skills; only really sensible during the MVP build.
2. **Find an agency or development team** — good for a more complex MVP and starting marketing; keep an agency long-term for a simple tool; hire your own team after validation and cash flow if building a platform or doing continuous integration.
3. **Hire one or more freelancers and manage them** — "where I see people failing the most"; only if you are a professional PM with development experience; otherwise hire a team.
4. **Build a team of full time people** — for a big or well-funded system with product validation; if you have funding and don't already know this material, find a CTO.

Team-cost reality from the story chapter: the quantum-computing client had a $20M seed round and a $45M Series A, and each "heavy hitter" is paid "120k and up, probably more like 175k and up." For most companies building an MVP with limited capital, he strongly recommends hiring a SaaS development company specializing in what you are doing, because they already have foundational systems prebuilt and will be faster and cheaper to get going.

## Standard Tools

### Code repository (code repo)

A versioning system that lets you see and work with every version of every piece of code, enabling simultaneous work by multiple people around the world; "a key factor in distributed teams development." Common repos listed: **Git** (the repo software, can run on your own server), **GitHub** (online host), **Bitbucket** (online host — "this is what my team uses"). PROTIP: always ask a developer what repo they use; "If they don't use one, or don't really know it that well, THEY DON'T KNOW WHAT THEY'RE DOING, SO DON'T HIRE THEM."

### Development environment & dependencies

The 'development environment' is where the system is hosted. At the time of writing, developers use **Digital Ocean** and **AWS**; **Serverless** is gaining traction. These are used because they are cost effective and easy to scale resources as the system scales (the village-well vs metropolis-reservoir analogy: what works for 5 or 50 users is not what works for 5,000 or 500,000). Dependencies are software systems that depend on other software systems — "there is no modern SaaS system that exists that is not built on top of another piece of software" — illustrated by the concrete analogy: builders buy concrete rather than formulating it, and don't use the wrong concrete or you tear the house down and start over.

### Remote development environments

A remote development environment lets a developer run software replicating the server environment so they can test code without uploading to a server. Testing full functionality (especially load) sometimes requires the main server, but writing code locally is substantially faster than uploading for every line. Systems that make setup faster: **Docker** and **Vagrant**; the lead developer determines which to use.

### Project management tools

People have groups of tasks, timelines, comments, dependencies, and interactions — you need an effective system. The author personally recommends **JIRA by Atlassian**; other systems he has seen used effectively: **JIRA, Asana, Wrike, Teamwork**. PROTIP: a SaaS system "is going to end up having literally thousands of tickets over time and tens of thousands of comments"; without a PM tool you will lose things, waste time, or the project falls apart.

### Monitoring

A networking monitoring tool tells you when the site goes down, when the database fails, and whether you are overtaxing your environment. Systems listed: **New Relic**, **App Optics**, **Traceview**. It helps in two ways — understanding costs and getting alerted to problems — and lets you upgrade server specs before users see degradation. His team normally uses Digital Ocean and sets up monitoring so each item emails and posts a notice to their Slack dev channel.

### Continuous integration automation

An automations server "such as Jenkins" (open source/free) automatically pulls the right code, runs unit and regression tests, deploys to development environments, updates documentation, and makes entries into the project management system when the lead developer pushes the release button.

### Systems setup (from the near-stub file)

The only items listed: Confluence, JIRA, Documentation, Time Tracking, Daily meeting planning, Daily 'blog' article per person.

## The Development Lifecycle

The book's ordered steps for the MVP build (not the public-facing website). It explicitly notes "several of these items are run in parallel, but noted linearly," and that "books are written linearly and the production of SaaS systems are not" — the development team should start around the time the UX designer is wrapping up the first three quarters of their work.

1. **Planning** (also called "scoping")
   - Information Architecture (IA) development
   - Determine technologies to be used
   - SaaS development costs
   - SaaS development team
2. **Wireframing & experience design**
   - What is UX in SaaS
   - When a SaaS isn't easy to use
   - SaaS design case study
   - Flows, processes, and planning
   - Concept design
3. **Platform setup**
   - Repo setup
   - Development environment and dependencies setup
   - Remote development environments setup
   - Hosting environment setup
4. **SaaS application development**
   - Frontend development
   - Backend development
5. **Alpha testing** — user testing
6. **Content review**
7. **Beta testing** — user testing
8. **SaaS release candidate review**
9. **Release**
10. **Continuous Integration**

### Step detail from the chapters

- **Concept design comes mid-process, not at the beginning.** "It's ok to start out thinking about the systems graphics, but if you're really digging into anything other than branding before this step, you're doing it wrong... Pretty pictures don't make a difference -- ease of use, system speed, and functionality do." If the UX designer hasn't delivered HiFi designs meeting branding needs before front-end coding starts, you need a web-designer or concept designer.
- **Front-end development** turns designs into views; the front-end developer can produce clickable pages even with no functionality behind them (the calculator example). Needed inputs: Information Architecture; Content ("web pages are built around content, not content around design!"); Wireframes and/or Flows; Style guide; Project Plan; Management; Regular Meetings & Communication.
- **Back-end development**: the back-end developer figures the best serving platform setup, sets up the environment, and codes the system. Needed inputs: Information Architecture; Wireframes and/or Flows; Coded Style Guide; Coded pages/views/states ready for development; All back-end systems planning finalized ("there is no 'should' in development. It either does something or it does not"); Project Plan; Management; Regular Meetings & Communication. PROTIP: if the SaaS has an app component, most of the time there is also a web-app component for managing users and data.
- **Alpha testing**: "the thing kinda works, but not well enough to share with anyone other than people that know that it doesn't work." It is technically part of acceptance testing and the first testing milestone; testing is generally internal (developers and you), with select advisory-board/community members walked through only if they understand there will be big issues. Improvements go into the Backlog — "Your goal is to GET TO MARKET, not build out every phase in the system." Also review all content here: "every word, every rollover, every tooltip, everything." Alpha is "just another iteration in the development process."
- **Content review** appears as step 6 in the lifecycle list.
- **Beta testing**: "when it comes right on the heels of the alpha test phase" or "weeks, months, or even years after." The product is ready for testing by your users; choose a select few from the advisory board/community and walk them through it one at a time in person or virtually, and "most importantly make sure that they are going to pay for what you're selling." His recommendation: **beta test and sell at the same time**, because paying customers behave differently than non-paying customers. Offer a cut price for a set time (or forever) so they are paying while buying into the product's value.
- **Release candidate review**: step 8 in the lifecycle list.
- **Launching**: "as easy as making your marketing website connect the signup page to the credit card processing system" so users must enter a card; charge them when the trial ends or their value metric kicks in. "You really just finished the very first step in the process."
- **Continuous Integration (CI)**: the ongoing phase after the MVP, possibly starting before it is done. The loop runs **Release → Operate → Measure → Plan → Code → Build → Test → Release**. CI began as part of Extreme Programming, motivated by "Integration Hell" when many people worked on large code sets and could not get code to work together. It integrates code repos, unit/regression testing systems, development environments, project management tools, and documentation systems.

## Scheduling & Complexity Realities

The author's claims about timelines, complexity growth, iterative development, sunk costs, and good/cheap/fast. All figures below are his.

- **Timeline padding**: "Your timeline will be between 1.2 to 3 times as long as you initially planned, very often more."
- **Developer optimism**: "developers are optimists!" Give them deadlines but plan on them missing them by at least 20%; "at the very minimum, increase it by 20% in your head"; if you can, double it. "Never go below a 20% increase in your projects, ever." Do not tell them you are doing this.
- **Work time vs duration**: a full-time team "will actually get between 4 and 6 hours of good time in any given day," or alternatively work in sprints at 8 to 15 hours per day for a week or two and then need a week off. Never expect a full eight hours of concentrated effort per day. Duration (how long the project takes) and work time (hours actually worked) are never the same on any large project.
- **QA share of time**: QA generally takes "anywhere between 10% and 25% of the time to build the system. It never, ever takes less than 10%." Pad QA expectations: if the team says 2 weeks, "plan on 4 weeks of work."
- **Unit/regression test share**: "Tests generally take between 10% & 20% of the total build time to construct and implement." Tests take longer to build after features are completed than during the build. Add unit tests as soon as you have project validation (95%+ sure the system will fly and buyers waiting); skip them while merely validating an MVP.
- **Manual testing growth**: if you must manually test every variation, "the change in testing time grows quadratically or exponentially"; manual testing "can and will very quickly become more time intensive than the actual building of the system."
- **Complexity growth (quadratic)**: with two-way connections between features the count is n × (n−1): 2 features = 4 connections, 3 = 12, 4 = 24, 6 = 60. If each item takes 10 minutes to check and one in ten has an issue taking an hour to fix, 2 features ≈ 40 minutes of checking and probably no fixes, while 6 features ≈ 10 hours of checking and 60 hours of fixing. Failing to plan extra debugging/review time makes you underestimate build time, cost, and time to market.
- **Iterative development**: "Development is testing and testing is development." The path is not curvy, it is circular; a developer almost never gets something right the first time. Skipping or skimping on testing makes the system incomplete.
- **Brooks's Law** (from the Mythical Man Month): adding a developer to a substantially complicated project halfway or later does not decrease build time, it increases it, because the ramp-up/tribal-knowledge time exceeds the time left to build. Communication overheads increase combinatorially as people are added; some tasks are not divisible ("nine women can't make a baby in one month").
- **Sunk costs**: a sunk cost is "a cost that an entity has incurred, and which it can no longer recover by any means"; sunk costs should not be considered when deciding whether to continue investing. The Sunk Cost Fallacy is that decisions are tainted by accumulated emotional investment. His own record: 10 projects, 4 running/growing — "we're running 4 for 10." PROTIP: "If you don't feel good about it, don't do it."
- **Good, Cheap, Fast — choose two**: good+cheap won't be fast (good builders are in demand and prioritize higher payers); good+fast won't be cheap (the only ways to shorten a fixed-body-of-work are more people or longer days, both costlier); fast+cheap won't be good (they are using less expensive people and more of them, and "there is a bottom in pricing in this industry... it isn't $10/hr"). Applies to every team type. "Caveat emptor."
- **"How much does it cost to build a SaaS?"** is like "how much does it cost to build a building?" — it depends (shed vs house vs factory vs skyscraper; New York City vs Chiang Mai; local labor and material costs).
- **A real overrun**: on BrainLeaf, a lead developer said a rebuild would take "probably 4x" the initial estimate after a bad platform choice left part of the system unscalable; the total cost was hundreds of hours, "probably the tens, maybe even hundreds of thousands of dollars."
- **Bugs and QA**: well-written bug descriptions "can probably save 7% - 20% of time in debugging." Skipping QA means fixing later with upset users and a failing product.
- **Trust but verify**: watch commits in the code repository (integrate the repo into Slack) to see work happening; number of commits is not necessarily representative of work done.

## MVP Pre-Development Checklist

Before starting, most or all of the following should be complete (system build tasks only, no marketing tasks):

- Project is validated and you are 100% sure people want to buy it so much they have already pre-purchased it
- Have researched major groups of users, know what features they want, and have determined what value metric you're using
- Different plans and their costs figured out
- Pricing page is planned out
- Team is selected
- Tech stack decided
- Project management system is selected and the team has been informed on how to use the tool
- Project plan written, approved, and accepted by all team members and stakeholders
- Information architecture written
- Your documentation system is planned and prepared
- Admin panel data-management needs outlined and planned
- Payment system chosen, accounts set up, and bank accounts connected
- Unit testing system chosen and integration planned
- User processes generally planned
- System transactional emails planned and designed
- User flows designed
- Page designs and views created and agreed upon
- Integrations with other systems generally planned out
- Initial user tagging and triggers planned
- 3rd party systems to be built into your system considered and planned
- Development environment is set up
- Code repository system is selected and a repo is set up
- Remote systems deployments prepared
- Automations server for continuous integrations is selected and planned for deployment
- Dependency and systems costs generally planned
- 3rd party systems costs planned
- System build labor costs estimated
- Operational labor costs estimated
- Initial marketing & advertising costs determined
- All initial costs have been funded and ongoing costs planned or funded
- You're feeling good about this?

## Decision Tables

### Which way to build the team

| Situation | Recommended option |
| :--- | :--- |
| Building a tool (not a platform), plenty of time, not much money, existing dev skills | Build part or the whole thing yourself (MVP only) |
| Building a more complex MVP and starting marketing; or a fairly simple tool long-term | Find an agency or development team |
| Building a SaaS platform, or doing continuous integration | Hire your own team after validation and cash flow |
| Not a professional PM and/or no development experience | Do not hire one or two freelancers — hire a team |
| Big system or well funded, with product validation | Build a team of full time people; if you don't know this material, find a CTO |
| MVP with some investment capital but not much more | Hire a SaaS development company specializing in what you're doing (has foundational systems prebuilt) |

### Whether to build unit tests now

| Stage | Author's guidance |
| :--- | :--- |
| Just validating the MVP | Don't worry about building tests right away |
| 95% or more sure the system will fly, buyers already waiting | Start building tests now |
| Any shipped system | Automated regression tests catch features broken by new work; take 10%–20% of build time |

### Which project management tool

| Need | Author's recommendation |
| :--- | :--- |
| Development projects | JIRA by Atlassian (personal recommendation) |
| Other effectively-used systems | Asana, Wrike, Teamwork |
| Technical QA bug tracking | "Industrial strength" system; personal preference JIRA integrated with BitBucket and Confluence |

### Which code repo

| Option | Notes |
| :--- | :--- |
| Git | The repo software; can be run from your own server |
| GitHub | Online host that runs the repo software |
| Bitbucket | Online host that runs the repo software; what the author's team uses |

### Which hosting/monitoring

| Need | Options listed |
| :--- | :--- |
| Hosting / deployment | Digital Ocean, AWS; Serverless gaining traction |
| Remote dev environment tooling | Docker, Vagrant (lead developer chooses) |
| Monitoring | New Relic, App Optics, Traceview; author's team uses Digital Ocean monitoring wired to Slack |
| CI automation server | Jenkins (open source/free) |

### Good / Cheap / Fast trade-off

| You chose | Result |
| :--- | :--- |
| Good + Cheap | Won't be fast (good builders prioritize higher payers) |
| Good + Fast | Won't be cheap (more people or longer days) |
| Fast + Cheap | Won't be good (cheaper, more numerous people; suspiciously low rates) |

## Common Mistakes

| Wrong | Correct |
| :--- | :--- |
| Start building the application before all planning is done | Only start the application build process if you have done ALL of your planning |
| Cut scope by "just doing it for the minimum number of hours" | Be honest with yourself and the team about the actual cost and plan for it |
| Add new features during the MVP build (scope creep) | Push new ideas to the Backlog and get to market to validate and earn revenue |
| Assume the number of commits equals amount of work | Watch commits as a rough signal of activity, not a precise work measure |
| Let developers test their own work | Always have someone other than the lead dev or dev team do QA |
| Treat QA as a one-time task that will be "done" | Treat QA as an ongoing part of development |
| Have everyone QA at once before the lead QA person reviews | Have the lead QA person review first, fix round one, then let others review |
| Send an angry email when a developer's work is poor | Fix the process (e.g., institute a full QA process) and resource it |
| Blame the developer for missing issues | It is your fault if the processes are not in place to support your developers |
| Treat a "cut you a deal" price as a bargain | Remember good/cheap/fast — a cheaper, faster offer is cutting time or doesn't know the work |
| Believe the estimate and the timeline as given | Add at least 20% (double if you can) to developer estimates; expect 1.2x–3x the planned timeline |
| Plan only feature build time, not debugging/review time | Add an extra level of time for thorough debugging and review (complexity grows quadratically) |
| Continue a project because you have already spent money on it | Recognize the sunk cost fallacy; if you don't feel good about it, don't do it |
| Choose a platform because it is easy, and take a previous developer's word for it | Do your homework, choose a team that knows the language/platform, ask forums and other founders |
| Skip project management basics | Learn at least the basics of Agile/project management (about an hour of reading) |
| Hire a "guy" or one or two freelancers to build a SaaS | Hire a team with all needed skills, or an agency, for multi-role SaaS builds |
| Assume a full-stack developer is equally strong at everything | Recognize there is always a relative advantage; split front-end and back-end |
| Assume design work can be skipped and patched in mid-development | Design features BEFORE developing them; adding a designer mid-development is a recipe for failure |

## Chapter Index

### Overview

- **SaaS Build Lessons** — `book/saas-build-process/saas-build-process.md`. Seven build lessons: no one guides the build better than you; it is a construction project; the more you plan up front the less the team works and the less it costs; SaaS lives and dies on UX; choosing the right (community-supported) technology matters; adding features during the MVP (scope creep) can crush the business; and start building unit tests once you have validation. Closes with regression testing and the continuous integration phase.

### Planning

- **Planning & Costing (index)** — `book/saas-build-process/planning/README.md`. Argues planning saves or loses more money than anything else in the project; lists the SOW component documents and details the creative brief, contract, information architecture, flows/wireframes, and project plan.
- **Information Architecture Development** — `book/saas-build-process/planning/architecture-development.md`. A deep IA chapter: what an IA is and why it matters, waterfall-plan/agile-build framing, the five major IA areas, eight considerations, and a large outline of project-wide tasks, creative, user areas/systems, admin panel, and marketing website.
- **The Project Plan** — `book/saas-build-process/planning/documents-youll-want-and-need.md`. **STUB** — contains only the heading "# The Project Plan" with no body.
- **The Scope of Work** — `book/saas-build-process/planning/scope-of-work.md`. Repeats the SOW composition and the questions each part answers (creative brief, contract, IA, flows/wireframes, project plan) and gives the 15-minute to 4-hour estimation increment guideline.
- **The Costing Process** — `book/saas-build-process/planning/the-costing-process.md`. Defines the four costing phases (estimate, IA & flows, operational costs, working numbers), explains 3-point pricing, and gives the cost-to-plan-by-project-size table plus the "cost of costing" range.
- **Working Numbers** — `book/saas-build-process/planning/working-numbers.md`. **STUB** — heading only; no content.
- **The Estimate** — `book/saas-build-process/planning/costing-your-system.md`. Walks the five-worksheet estimate spreadsheet, 3-point estimation metrics and the 20% PM modifier, the 40-to-400-hour UX design warning, estimate effort figures, and the honesty-about-real-cost closing.

### Steps To Developing A SaaS

- **Steps to Developing a SaaS (index)** — `book/saas-build-process/steps-to-developing-a-saas/README.md`. The ten-step MVP build order, warning that several steps run in parallel and that the dev team should start while UX is ~three-quarters done.
- **Alpha Testing** — `book/saas-build-process/steps-to-developing-a-saas/alpha-testing.md`. Defines alpha as working-but-buggy internal testing, the first testing milestone and part of acceptance testing; advises backlog discipline and full content review; stresses alpha is just another iteration.
- **BackEnd Development** — `book/saas-build-process/steps-to-developing-a-saas/backend-development.md`. What the back-end developer does, the note that most app-component SaaS also need a web-app component, and the nine things a back-end developer needs (IA, wireframes/flows, coded style guide, coded pages, finalized back-end planning, project plan, management, regular communication).
- **Beta Testing** — `book/saas-build-process/steps-to-developing-a-saas/beta-testing.md`. Beta as the milestone where the product is ready for user testing; walk select users through it one at a time and confirm they will pay; recommends beta testing and selling at the same time because paying customers behave differently.
- **Concept Design (index)** — `book/saas-build-process/steps-to-developing-a-saas/concept-design/README.md`. Explains why creative/concept design sits mid-process rather than at the start, and how HiFi designs may require a web-designer or concept designer separate from the UX designer.
- **SaaS UX Design Case Study (MedRev)** — `book/saas-build-process/steps-to-developing-a-saas/concept-design/saas-design-case-study-medrev-new-location-designs.md`. A reputation-management SaaS built on Angular.io, a Foundation-based CSS framework, and a Laravel back-end; compares the front-end coder's first-pass locations pages with the UX designer's rework and argues for both roles plus a PM.
- **Content Development** — `book/saas-build-process/steps-to-developing-a-saas/content-development.md`. **STUB** — heading only; no content.
- **Continuous Integration** — `book/saas-build-process/steps-to-developing-a-saas/continuous-integration.md`. Defines CI and its history in Extreme Programming and "Integration Hell"; gives the eight-step release/operate/measure/plan/code/build/test loop; describes Jenkins-driven automation and the tooling CI integrates.
- **Creative** — `book/saas-build-process/steps-to-developing-a-saas/creative.md`. **STUB** — heading only; no content.
- **FrontEnd Development** — `book/saas-build-process/steps-to-developing-a-saas/front-end-development.md`. Defines front-end development as turning designs into views; lists the seven inputs needed (IA, content, wireframes/flows, style guide, project plan, management, communication); warns that change costs rise at each step.
- **Launching Your SaaS** — `book/saas-build-process/steps-to-developing-a-saas/launching-your-saas.md`. Launch is technically just connecting signup to credit-card processing; the real work (marketing and selling) starts afterward.
- **Project Planning** — `book/saas-build-process/steps-to-developing-a-saas/project-build.md`. Explains why project planning comes after the IA/flows, defines tasks/stories/epics/initiatives/themes, Gantt charts, the product roadmap and critical path, and lists the aspects of a SaaS project plan.
- **Quality Assurance (QA)** — `book/saas-build-process/steps-to-developing-a-saas/quality-assurance-qa.md`. Nine lessons covering ongoing QA, a separate QA team/person, multi-perspective QA, thorough bug descriptions, specs and tests, an industrial-strength PM system, the tripled cost of skipping QA, QA's 10%–25% time share, and padding QA timelines.
- **What to expect in SaaS development** — `book/saas-build-process/steps-to-developing-a-saas/saas-application-development.md`. Ten expectations: deadlines slip, many questions, only you understand the business, 4–6 good work hours per day, unknowns appear, timelines run 1.2x–3x, resources are hard to get right, more money is spent, more features are always needed, and customers use the system unexpectedly.
- **SaaS User Experience (UX)** — `book/saas-build-process/steps-to-developing-a-saas/saas-user-experience-ux.md`. The largest chapter: what UX is, extensive ROI/cost-of-bad-UX/user-testing statistics, UX designer duties and information requirements, story writing for designers, the ten-step UX design process, stakeholder meetings, and recommended reading.
- **Systems Setup** — `book/saas-build-process/steps-to-developing-a-saas/systems-setup.md`. **NEAR-STUB** — only a six-item bullet list: Confluence, JIRA, Documentation, Time Tracking, daily meeting planning, and a daily 'blog' article per person.

### Things To Know And Expect

- **Things to know and expect (index)** — `book/saas-build-process/things-to-know-and-expect/README.md`. **STUB** — heading only; no content.
- **Development is iterative** — `book/saas-build-process/things-to-know-and-expect/development-is-iterative.md`. Argues the development path is circular rather than curvy; testing is development; the best feature set that fits the time is built, promoted, sold, then iterated on in the next release.
- **Good, Cheap, Fast. Choose Two.** — `book/saas-build-process/things-to-know-and-expect/good-cheap-fast.-choose-two..md`. Explains each pairing, ties it to developer scarcity and the pricing floor in the industry, and stresses the rule applies to every kind of team.
- **How to tell if your development team is working** — `book/saas-build-process/things-to-know-and-expect/how-to-tell-if-your-development-team-is-working.md`. The secret is watching commits in the code repository, ideally integrated into a communications system like Slack; commits are not a precise measure of work.
- **Positivity is Key in Management** — `book/saas-build-process/things-to-know-and-expect/positivity-is-key-in-management.md`. Entrepreneurs fixate on the one mistake amid millions of variables; consider what went right and the impact of an upset vs positive email — "Happy people work faster."
- **SaaS Development Costs** — `book/saas-build-process/things-to-know-and-expect/saas-development-costs.md`. Short chapter: the question is like asking how much it costs to build a building — it depends on the shed/house/factory/skyscraper and the location and labor/material costs; links onward to the costing chapter.
- **SaaS Development Project Management** — `book/saas-build-process/things-to-know-and-expect/saas-development-project-management.md`. Asserts entrepreneurs, executives, and builders MUST have more than a rudimentary understanding of Agile; the basics take about an hour; recommends reading the Atlassian guide to project management.
- **Story Time: The Best of the Best** — `book/saas-build-process/things-to-know-and-expect/story-time-with-jason.md`. A quantum-computing client with a $20M seed and $45M Series A whose "heavy hitters" are paid 120k and up (probably 175k and up); argues for hiring a specialist SaaS dev company for an MVP.
- **Storytime: The Story of a Ton of Lost Users and Money** — `book/saas-build-process/things-to-know-and-expect/story-time-financial-constraints.md`. The BrainLeaf platform rebuild that ran about 4x over estimate; hundreds of hours and tens to hundreds of thousands of dollars; closes with a checklist for avoiding the wrong systems.
- **Storytime: Don't Send Me Shit** — `book/saas-build-process/things-to-know-and-expect/storytime-dont-send-me-shit.md`. An almost-sent angry email; the lesson is that the missing QA process, not the developer, was the problem.
- **Sunk Costs** — `book/saas-build-process/things-to-know-and-expect/sunk-costs.md`. Defines sunk cost and the sunk cost fallacy and inventories the author's started-but-unfinished, started-and-failed, and started-and-growing projects (4 for 10); repeats that the build should only start after all planning.
- **Things you do and do not know** — `book/saas-build-process/things-to-know-and-expect/things-you-do-and-do-not-know.md`. Applies known knowns (knowledge), known unknowns (known risks), unknown knowns (untapped knowledge), and unknown unknowns (unknowable risk) to SaaS development; more planning and more experienced teams reduce unknown unknowns.
- **Development Time Increases As Complexity Increases** — `book/saas-build-process/things-to-know-and-expect/development-time-increases-as-complexity-increases.md`. The quadratic connection-growth example (2 features = 4 connections through 6 features = 60) and the 10-minute-check / one-in-ten-hour-fix model showing 6 features costing 10 hours to check and 60 hours to fix.

### Tools

- **Standard Tools (index)** — `book/saas-build-process/tools/README.md`. **STUB** — contains only the heading "# Standard Tools" with no body.
- **Code Repositories in SaaS Development** — `book/saas-build-process/tools/code-repositories-in-saas-development.md`. Defines a code repo, frames a codebase as a living, constantly changing thing, and lists Git/GitHub/Bitbucket with the "always ask about their repo" hiring tip.
- **Development Environment & Dependencies** — `book/saas-build-process/tools/development-environment-and-dependencies.md`. Covers hosting/scaling (Digital Ocean, AWS, serverless, the village-well vs metropolis analogy) and defines dependencies with the concrete analogy.
- **Project Management Tools in SaaS Development** — `book/saas-build-process/tools/project-management-tools-in-saas-development.md`. Recommends JIRA by Atlassian and lists Asana, Wrike, and Teamwork; warns that a SaaS will accumulate thousands of tickets and tens of thousands of comments.
- **Remote Development Environments** — `book/saas-build-process/tools/remote-development-environments.md`. Defines a remote dev environment, explains why it is necessary, and names Docker and Vagrant as accelerators, with the lead developer choosing.
- **Monitoring Your SaaS** — `book/saas-build-process/tools/monitoring-your-saas.md`. Monitoring tools New Relic, App Optics, and Traceview; what monitoring tells you (downtime, DB failure, overtaxed environment) and how the author's team wires Digital Ocean monitoring to Slack.

### Your Build Team Explained

- **Build Team Roles (index)** — `book/saas-build-process/your-build-team-explained/README.md`. **STUB** — contains only the heading "# Build Team Roles" with no body.
- **Developers** — `book/saas-build-process/your-build-team-explained/developers.md`. The doctor/specialty analogy, the six development areas with their languages, the lead developer's duties, and the myth of the full-stack developer.
- **Information Architect** — `book/saas-build-process/your-build-team-explained/information-architect.md`. What an information architect does, why experience counts, and the advice to hire one who has worked on similar systems.
- **Quality Assurance** — `book/saas-build-process/your-build-team-explained/quality-assurance.md`. "Testing never stops"; an eleven-step account of how projects decline without QA; what a QA member does (test and build tests, plus documentation early on); and why developers cannot test their own work.
- **Build Teams (team setup)** — `book/saas-build-process/your-build-team-explained/saas-development-team-setup.md`. The four ways to build a team — yourself, an agency/development team, freelancers, or a full-time team — and when each fits.
- **The Project Manager** — `book/saas-build-process/your-build-team-explained/the-project-manager.md`. Why a PM is the primary money-saving role, what a good PM does, and the "heightened neuroticism" view of what makes a PM good.
- **UX Designer** — `book/saas-build-process/your-build-team-explained/ux-designer.md`. What UX designers do, great vs average UX, pages vs states across devices and input systems, and a ten-point list of what your SaaS UX designer should do.
- **What To Expect From Your SaaS Development Team** — `book/saas-build-process/your-build-team-explained/what-to-expect-from-your-saas-development-team.md`. Developers are optimists (pad estimates 20% minimum, double if you can); communication and team-meeting cadence (three times per week, or daily with each team lead); and Brooks's Law with its three explanatory factors.
