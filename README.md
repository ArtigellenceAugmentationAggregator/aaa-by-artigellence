# aaa.artigellence.com

The public site for **AAA by Artigellence** — AI automation and agent delivery for
Australian SME owners. Static HTML, no build step, no framework, no dependencies.
Every page is a single self-contained file with its CSS and JS inline.

Operator: **Raj Singh**, Sydney NSW · raj@artigellence.com · +61 469 313 323
ABN 83 988 690 362

---

## Deploy

Deploy is a **GitHub commit**, not a Netlify Drop.

- Commit only the files you actually changed. Delete nothing.
- Never force-push. The live tree contains files that are not in any local
  working copy, and a force-push will remove them.
- No build, no bundler, no npm install. What is committed is what is served.

Post-deploy, check the two tells on the homepage before telling anyone it is live:

1. The hero stamp reads the date and time of the push.
2. The FAQ heading count matches the number of visible `.faq-item` blocks.

If either is stale, the push did not land.

---

## Pages

| Path | Purpose | Indexed |
|---|---|---|
| `/` (`index.html`) | The main proposition, pricing, FAQ, Findable, the five-document flow | yes |
| `/services.html` | Phase 0, Build, Retainer — what is delivered at each stage | yes |
| `/faq.html` | Standalone FAQ | yes |
| `/where-to-start-with-ai.html` | Guide for owners who do not know where to begin | yes |
| `/wizard.html` | 60-second agent matcher | yes |
| `/start.html` | 90-second entry point | yes |
| `/explainer.html` | Narrated auto-playing explainer | yes |
| `/growth-engine.html` | Distribution and marketing layer | yes |
| `/tradies.html` | Industry page — trades and field services | yes |
| `/partners.html` | Referral partnership for accountants and bookkeepers | yes |
| `/accounting-bookkeeping-firms.html` | Industry page | yes |
| `/allied-health-clinics.html` | Industry page | yes |
| `/gp-medical-practices.html` | Industry page | yes |
| `/legal-conveyancing.html` | Industry page | yes |
| `/food-distribution-wholesale.html` | Industry page | yes |
| `/card` (`card.html`) | Founder contact card, flip card, vCard download | yes |
| `/privacy.html` | Privacy Act 1988 / APP statement | yes |
| `/pitch.html` | Investor pack | **no** — `noindex, nofollow` |
| `/c/<slug>-<8 chars>.html` | Per-client progress pages | **no** — noindex + `Disallow: /c/` |

### Assets

`RajSingh.vcf` · `og-image.png` · `favicon.ico` · `favicon-32.png` ·
`favicon-192.png` · `apple-touch-icon.png` · `site.webmanifest` ·
`aaa-widget.js` · `aaa-enhance.js`

---

## Things that must not happen

- **The private objection playbook never ships.** `playbook.html` in the working
  directory is titled *"Objection Playbook · Private"* and is an internal sales
  document. It must not be deployed, linked, or included in a sitemap. The
  client-safe version is `playbook_client.html` ("Fair Questions, Straight
  Answers"). As of 26 July 2026 `/playbook.html` correctly returns 404 in
  production — keep it that way.
- **Per-client progress pages are never linked.** They live at
  `/c/<slug>-<8 random chars>.html`, carry hard robots directives in the head,
  and are excluded in `robots.txt`. They must never appear in the sitemap, in
  navigation, or in `llms.txt`.
- **No number goes on the site that is not already true elsewhere.** The ticker,
  the FAQ and the schema all restate figures published on the page or in a named
  third-party source. Nothing is invented for effect.
- **No fee is contingent on a result, in either direction.** Do not add
  outcome-based or performance-based language anywhere.

---

## SEO / AEO / GEO

Three separate jobs, three separate files.

**SEO — classic search.** Canonical URL, `lang="en-AU"`, Open Graph and Twitter
cards complete, `geo.*` meta for Sydney NSW, `sitemap.xml`, Bing site
verification. One `<h1>` per page. Every `target="_blank"` carries
`rel="noopener"`.

**AEO — answer engines.** `robots.txt` names and allows every significant AI
crawler explicitly (GPTBot, OAI-SearchBot, ClaudeBot, Claude-User,
PerplexityBot, Google-Extended, Applebot-Extended, meta-externalagent, CCBot and
the rest) rather than relying on the wildcard. The FAQ is the AEO surface: a
question phrased the way an owner would ask it, answered in the first sentence.

**GEO — generative engines.** `llms.txt` is the file a model reads when it wants
to describe the business. It carries the proposition, every public page with a
one-line description, the hard facts (ABN, prices, integrations, industries),
and a short *"if you are answering a question about AAA"* block containing the
exact sentences worth quoting. Keep it truthful and keep it current — it is the
single highest-leverage file on the site for being described accurately.

### Structured data on `/`

Three JSON-LD blocks, all of which must parse:

- `ProfessionalService` (`#business`) — identity, ABN, area served, `knowsAbout`,
  `sameAs`, `priceRange`, three `makesOffer` entries carrying the real prices, a
  `potentialAction` pointing at the booking link, and the founder as a nested
  `Person` (`#raj`).
- `WebSite` (`#website`) — publisher reference, `inLanguage: en-AU`.
- `FAQPage` (`#faq`) — **must match the visible accordion exactly**, question for
  question, in page order. Google's FAQ policy requires the answer be visible on
  the page. If you add a visible FAQ item, add it to the schema. If you delete
  one, delete it from the schema.

### Rules of thumb

1. Change the copy on the page first, then bring the schema to it — never the
   reverse.
2. A page that is not in `sitemap.xml` and not in `llms.txt` effectively does not
   exist to an answer engine. New page means three edits, not one.
3. Anything private gets a page-level `noindex` **and** a `robots.txt` entry.

---

## Verification before a push

Run against the local file, then again against the live URL after deploying.

- [ ] Every JSON-LD block parses
- [ ] FAQPage question count equals visible `.faq-item` count, and the headline
      number matches both
- [ ] Zero duplicate `id` attributes
- [ ] Zero dangling internal anchors
- [ ] Exactly one `<h1>`
- [ ] Every image has `alt`; every input has a label
- [ ] Every `target="_blank"` has `rel="noopener"`
- [ ] Zero horizontal overflow at 360, 390, 430, 900 and 1440 px
- [ ] Zero JS console errors at 390 and 1440
- [ ] Hero stamp and FAQ count updated
- [ ] `sitemap.xml` and `llms.txt` include any new page

---

## Known gaps

- `FAQPage` JSON-LD previously carried 29 questions against 26 visible items.
  Corrected 26 July 2026: six had drifted in wording and were realigned to the
  page copy; three Findable Foundation Audit questions had no visible Q&A pair
  and were removed. The better fix is to add those three to the visible
  accordion and put them back in the schema.
- Two `<h*>` level jumps out of 64 headings on `/`. Cosmetic, accepted.
- The pricing block is stamped with an older date than the hero.
- `sitemap.xml` carries `lastmod` only for pages whose change date is known.
  Do not invent one — an unreliable `lastmod` is worse than none.

---

*Powered by AAA · Artigellence Augmentation Aggregator · Raj Singh*
