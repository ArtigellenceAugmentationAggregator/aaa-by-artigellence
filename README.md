# AAA by Artigellence

**AI automation and agents for Australian SMEs.**

This repository hosts the website for AAA by Artigellence — [aaa.artigellence.com](https://aaa.artigellence.com).

AAA helps Australian small and medium business owners adopt AI in a practical, low-risk way. Engagements are anchored by a **fully refundable Phase 0 pilot** (A$4,500, 10–30 day window) so the business owner sees real results on their own data before committing to a build. **Findable** is the lower-cost entry layer for owners who want to start with AI visibility and email deliverability first. The site now greets every visitor with an **AI concierge** and routes them by industry through dedicated landing pages to the refundable pilot.

## About

- **Service:** AI automation and agent delivery for Australian SMEs
- **Founder:** Raj Singh — Sydney, Australia
- **Site:** [aaa.artigellence.com](https://aaa.artigellence.com)
- **Contact:** raj@artigellence.com · +61 469 313 323
- **Book a call:** [cal.com/raj-aaa/aaa-discovery](https://cal.com/raj-aaa/aaa-discovery)
- **Operating entity:** Artigellence Augmentation Aggregator · ABN 83 988 690 362 · Sydney NSW Australia

## Engagement Model

All prices include GST. Run-costs (LLM/API/SaaS) paid by client directly, scoped during Phase 0.

| Phase | Price (incl GST) | Notes |
|---|---|---|
| Phase 0 — Pilot | A$4,500 | 10–30 day window · fully refundable to day 30 · first result by day 10 |
| Phase 1 — Build | A$3,000 per agent | Minimum 4 agents (A$12,000 floor) · Standard Build = 8 agents (A$24,000) · paid on delivery |
| Phase 2 — Full Retainer | A$3,500 / month | Daily oversight · 14-agent ceiling on Standard package · 3-month break clause |
| Phase 2 — Lite Retainer | A$1,750 / month | Reduced scope · direct founder access retained · 3-month break clause |

**Standard Year-1 Engagement: A$56,500 incl GST** (Phase 0 + 8-agent Build + 8 months full retainer).

**Founder's Bonus** (Standard Year-1 only): a Custom GPT trained on the business + a Media Pack, worth A$7,000, included. Gated to the Standard package; partial engagements do not qualify.

## Extended Services — case-by-case

Eight focused services that sit **alongside** the core Phase 0 → Build → Retainer model, not above it. Each is scoped and quoted per business — no fixed price list. Send a few lines and get a written scope and quote within 24–48 hours, direct from the founder. Most engagements still start with the refundable Phase 0 pilot.

| # | Service | What it is |
|---|---|---|
| 01 | Diagnostic — AI Opportunity Map | Written diagnostic mapping the top 3–5 automation opportunities before any build commitment |
| 02 | Advisory — AI Strategy & Consultancy | Advisory only, no build — for founders thinking 12–18 months ahead |
| 03 | Integration — Integration Sprint | Fixed-scope project to connect two or more systems already in use (e.g. Xero ↔ ServiceM8) |
| 04 | Workflows — Standalone Workflow Automation | n8n or Make workflow for one painful, repeatable process |
| 05 | Pipelines — Pipeline Intelligence | Custom sales/lead analytics for SMEs with a defined sales motion (~A$1M+ revenue) |
| 06 | Training — AI Training & Workshops | Practical 2–3 hour workshop built around the client's own business and tools |
| 07 | Oversight — Oversight & Health Check | Monthly check on agents already in production — sits between Lite and Full retainer |
| 08 | Insights — AI Insights Brief | Monthly written brief on AI developments that affect the client's specific industry |

## Findable — the entry layer

AI visibility and email deliverability for Australian SMEs. Small, fast, paid first steps that each credit **100% toward the A$4,500 Phase 0 pilot** if the client continues.

| Product | Price (incl GST) | What it is |
|---|---|---|
| Foundation Audit | A$595 | 15-point written report on how AI search and email currently see the business |
| Foundation Fix | A$1,950 | Done-for-you setup — llms.txt, robots.txt, schema, sitemap, SPF/DKIM/DMARC, Privacy Act policy |
| Email Deliverability | A$697 | SPF/DKIM/DMARC + managed warmup so quotes and invoices stop landing in spam |

Optional ongoing monitoring is also available and routes into the Lite Retainer. The Foundation Sprint (full setup) is included free with the Standard Year-1 Engagement.

**Honest framing:** Findable sells technical hygiene and control — correct AI readability and email deliverability. It does **not** promise traffic, search position, or a guaranteed ranking. Google has stated it does not use llms.txt for ranking.

## Companion Engagement — Aarambh

For founders who want broader business build (legal structure, AI stack, MVP, go-to-market, pitch documents), **Aarambh — The Founder Forge** runs as a separate seven-day engagement: [aarambh.space](https://www.aarambh.space).

If Aarambh and the AAA Standard Year-1 Engagement are taken within 12 months of each other, **80% of the Aarambh fee credits to AAA** (A$25,000 → A$20,000 credit). One-off, non-stackable, non-transferable.

## Conversational Concierge

The site now has a built-in AI concierge so visitors don't have to read the whole thing.

- **`aaa-widget.js`** — an embeddable floating "Ask AAA" chat bubble, injected site-wide with one `<script src="aaa-widget.js" defer></script>` before `</body>`. Present on the homepage and every industry landing page.
- **`agent.html`** — a full-page version of the same concierge, used as a link target from campaigns and CTAs. Accepts an `?i=<industry>` parameter (e.g. `agent.html?i=trades`) so it opens already knowing the visitor's trade.

The concierge asks the visitor's industry and biggest weekly headache, maps it to the right agents and their real tools, and drives toward the refundable Phase 0. It includes a **Read/Listen** toggle (browser voice, Australian English). By design it answers **only from AAA's real content** and defers to the founder when it doesn't know — no invented prices or claims. It currently runs as a guided assistant with zero external dependency; a live-LLM version (grounded in site content, with the API key held server-side in a Cloudflare Worker) is provisioned as a drop-in upgrade.

## Pages

| Page | Purpose |
|------|---------|
| `index.html` | Homepage — proposition, pricing, Findable, the 12-industry section (six boxes link to landing pages), Industries nav item, and the site-wide chat bubble |
| `agent.html` | AI concierge — full-page chat that qualifies by industry and routes to Phase 0 (Read/Listen voice) |
| `industries.html` | Industries hub — links every industry landing page in one place |
| `services.html` | How AAA works — phased engagement (Service + Offer schema) |
| `where-to-start-with-ai.html` | Guide: where to start with AI for your business (Article schema) |
| `faq.html` | Honest FAQs — pricing, scope, retainer terms, data, Findable, and how this differs from buying ChatGPT yourself |
| `privacy.html` | Privacy Policy — Privacy Act 1988 and Australian Privacy Principles compliant |
| `partners.html` | Landing page — accountants & bookkeepers: referral partnership, free client workshop, A$500 per referred Phase 0 (Service + FAQ schema) |
| `wizard.html` | 60-Second Agent Match — interactive matcher returning one of the eight named agents with honest pricing |
| `explainer.html` | The 90-Second Explainer — narrated auto-playing overview (Australian voiceover, `narration.mp3`) |

### Industry landing pages (AEO / hyper-local)

Each is a self-contained page targeting a long-tail local query ("AI automation for Sydney _[industry]_"), with a unique `<title>`, meta description, canonical URL, and OpenGraph tags. All carry the chat bubble and CTA into `agent.html?i=<industry>`. Linked from the homepage Industries section, the `industries.html` hub, and the top-nav **Industries** item.

| Page | Industry | Tools referenced |
|------|----------|------------------|
| `tradies.html` | Trades & field services (Sydney tradies) | ServiceM8 · Tradify · simPRO |
| `allied-health-clinics.html` | Allied health clinics | Cliniko · Halaxy · Power Diary |
| `accounting-bookkeeping-firms.html` | Accounting & bookkeeping firms | Xero · MYOB · QuickBooks |
| `legal-conveyancing.html` | Law firms & conveyancers | LEAP · Smokeball · PEXA |
| `gp-medical-practices.html` | GP & medical practices | Best Practice · Medical Director · Genie |
| `food-distribution-wholesale.html` | Food distributors & wholesalers | Ordermentum · Solbox · Choco |

## Discoverability & AEO

The site is built to be read correctly by both search engines and AI answer engines — the same hygiene Findable sells to clients.

| File | Purpose |
|------|---------|
| `robots.txt` | Crawler directives — explicitly allows all major AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.) and declares the sitemap |
| `llms.txt` | Machine-readable summary of AAA for AI crawlers (llms.txt spec) |
| `llms-full.txt` | Extended AI context — full pricing, integrations, FAQs |
| `sitemap.xml` | Sitemap for search engines — includes the concierge and all industry landing pages |
| `.nojekyll` | Disables Jekyll on GitHub Pages so every file (including the concierge and landing pages) is served verbatim as static HTML/JS |
| `site.webmanifest` | Web app manifest (icons, theme colour) |
| `og-image.png` | 1200×630 social/AEO preview card |
| `favicon.ico`, `favicon-32.png`, `favicon-192.png`, `favicon-512.png`, `apple-touch-icon.png` | Favicon set |
| `googlef8a6144887e7bb4c.html` | Google Search Console verification |

**AEO play:** the six industry landing pages plus the `industries.html` hub give AI answer engines and local search specific, well-linked pages for high-intent queries such as *"AI automation for Sydney accountants"* or *"automated quoting for Sydney plumbers"* — each grounded in the real tools those businesses run. Structured data (JSON-LD) across the site: `ProfessionalService`, `FAQPage`, `Service` with `Offer`, and `Article`. Bing Webmaster verification is set via meta tag on the main pages.

**Honest framing:** correct AI readability and internal linking improve the *chance* of being found and cited. They are hygiene and structure — not a guaranteed ranking or traffic outcome. Google has stated it does not use llms.txt for ranking.

## Hosting

Static site served via **GitHub Pages** with Jekyll disabled (`.nojekyll`) — files are served verbatim. Custom domain (`aaa.artigellence.com`) configured through the `CNAME` file and registrar DNS.

## Honest Disclosures

- AAA by Artigellence is in its **founding-client phase**.
- The only contractually binding commitment in any engagement is the **Phase 0 refund**.
- Industry case studies referenced on the site are third-party context, **not AAA client outcomes**.
- Findable, the landing pages, and the concierge sell hygiene, clarity and control — not a guaranteed ranking or AI-traffic outcome.
- The concierge answers only from AAA's own content and routes unknowns to the founder; it does not invent prices or make claims.
- All policies on the public site (Disclaimer, Privacy Policy, Terms of Use, Cookie Policy, Data & API Usage, Refund Policy) are **current at July 2026 and subject to legal review and refinement**.

---

© Artigellence Augmentation Aggregator · ABN 83 988 690 362 · Sydney, Australia · Last updated 20 July 2026
