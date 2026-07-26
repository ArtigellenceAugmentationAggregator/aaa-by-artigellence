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

## Utility cluster — theme · language · currency

Three buttons sit in the top nav, immediately left of `🔍 SEARCH`. `BOOK PHASE 0`
keeps its seat: it is the only conversion path in the nav and it stays visible at
every breakpoint down to 360 px.

The whole cluster is three injected regions in `index.html` and nothing else:
`<style id="aaa-util-css">`, the `<div class="aaa-util">` markup, and
`<script id="aaa-lang-pack">` + `<script id="aaa-util-js">`. Delete those three
and the site is exactly as it was. Rebuild with
`cp index.bak_preutil.html index.html && python3 util_patch.py` — the patcher
asserts each anchor appears exactly once and refuses to run twice.

**Theme.** The nav button does not own the theme. It clicks the existing footer
`#themeToggle`, which holds the only `isLight` boolean on the page, then reads the
resulting `body.light-mode` class. One source of truth, so the two controls can
never disagree. Persistence is added on top: the choice is stored and the click is
replayed on load.

**Language — a summary sheet, not a translation.** Fifteen languages (en, zh, hi,
es, ar, fr, id, ja, ko, pt, de, ru, th, vi, pa). Each opens a six-sentence card:
what AAA is, Phase 0 terms, ownership and no lock-in, priced per piece and
invoiced on delivery, Sydney and the ABN. Every card ends with the note that the
full site, all prices and all agreements are in Australian English and that the
English version applies where wording differs; non-English cards are additionally
prefixed *"This is a summary in your language, not a translation of the whole
site."*

The page itself is **never** machine-translated, and this is deliberate. There are
16,287 visible words on `/`; fifteen languages is roughly 244,000 words of machine
output sitting on top of the refund promise, the GST wording and "no fee is
contingent on a result". A bad translation of a refund term is a contractual
problem, not a cosmetic one. If a language pack is edited, the six sentences must
stay a faithful restatement of copy that is already on the page — do not introduce
a claim in Hindi that is not made in English.

Arabic is RTL (`dir="rtl"` on the card). The ABN, the `A$4,500` figure and the
Latin business name are wrapped in bidi isolates (U+2066 … U+2069) so the digit
groups do not reorder across a line break — without them the ABN rendered as
`83 690 988 362`.

**Currency — indicative only.** Fifteen currencies. Prices are tagged at runtime
by a `TreeWalker` over text nodes, not by editing the source, so JSON-LD, inline
script strings and the ticker array are untouched; 179 figures tag on `/`.
Suffixed figures (`A$4.5K`, `A$56.5K`, `A$1M`) store the true AUD value in
`data-aud` plus the suffix in `data-suf`, and the suffix is **re-picked** from the
converted magnitude — keeping the original turns `A$56.5K` into `Rp603420K`.

Rates are fetched live from `open.er-api.com`, falling back to
`api.frankfurter.app`. **No rate is ever hard-coded** — it would go stale within
days across 179 figures. If both endpoints fail the page stays in Australian
dollars and says so. Every converted figure is prefixed `≈`, carries a dotted
underline and a hover title showing the original A$ value, and the banner states
the rate, its timestamp, and that every quote, invoice and agreement is in
Australian dollars.

**Nav fit.** `.topnav-links` is `flex-shrink:1` with `nowrap` children, so before
this work the eight links already overflowed their own container and painted on top
of whatever sat to their right. This is a pre-existing production bug, not something
the cluster introduced — measured on `index.bak_preutil.html`:

| Viewport | Before (backup) | After |
|---|---|---|
| 1920 | 8/8 visible | 8/8, no clip |
| 1780 | 8/8 visible | 8/8, no clip |
| 1680 | 8/8 visible | 8/8, no clip |
| 1640 | 8/8 visible | 8/8, no clip |
| 1500 | 6/8 visible, 16 px clipped | 8/8, no clip |
| 1440 | 6/8 visible, 22 px overlap | 8/8, no clip |
| 1280 | 4/8 visible, 92 px overlap | 8/8, no clip |
| 1100 | 4/8 visible, 172 px overlap | 4/8, clipped by scroller — no overlap |

The break starts at 1500. Note that a 1920 monitor at Windows 125 % display scaling
reports **1536 CSS px** to the browser, and at 150 % it reports 1280 — which is why
the bug shows up on machines whose owners would describe them as "1920 screens".

The fix is to clip the strip to a scroller and buy the space out of link padding,
not out of type size. The breakpoint is `max-width:1800px` — wider than the 1500
where the break actually starts, deliberately, so the tightening is already in force
before anything can clip.

Link type is set **larger** than the site ships it: 11.8 px against a 10.5 px base,
at full opacity rather than the site's `.85`. The gaps pay for it — 3 px of side
padding at ≤1800, 2 px at ≤1420, and at ≤1340 the type steps down to 10 px because
a 1280 slot genuinely cannot hold eight links at 11.8 px. A 1 px hairline
(`.topnav-links a+a::before`, absolutely positioned so it costs no layout width)
separates the links, which otherwise read as one continuous run of words at that
spacing.

**All link-strip rules are floored at `min-width:721px`.** The site has its own nav
layout below 720 and it works; overriding it from here pushed `WHAT WE DO` off the
left edge of a centred scroller at 390. The cluster's icon-only rules are *not*
floored — those apply on phones too.

Measure overlap with `getBoundingClientRect()` per anchor, never `scrollWidth`.
With `overflow:visible` the browser under-reports `scrollWidth`, so the backup reads
as "fits" at widths where it visibly overlaps. `overlap.py` does it correctly.

`BOOK PHASE 0` is reduced to two-thirds above 720 px — 148×40 → **107×30** —
scoped `@media (min-width:721px)` so the site's own `max-width:720px` rules and
their `!important` still win on phones (390 px renders 87×27, unchanged). Note the
CTA is now the smallest control in the right-hand group, smaller than `SEARCH` and
`60-SEC MATCH`.

At ≤980 px `.topnav-right` becomes `display:contents` so the cluster wraps onto its
own row inside the already-wrapping nav — adding height, not width. Do not give the
cluster `flex-basis:100%` inside `.topnav-right`: it inflates the container's
max-content width and pushes `document.scrollWidth` to 440 at a 360 viewport.

**Test scripts.** `utilcheck.py` (breakpoints, CTA visibility, JSON-LD, theme,
language, currency, one `<h1>`, unique ids, zero page errors), `utilfx.py`
(conversion maths against a routed stub — no live rate is written into the page),
`overlap.py` (per-anchor rect measurement, backup vs patched, eight widths),
`shot3.py` (before/after nav screenshots).

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
- [ ] `BOOK PHASE 0` visible with non-zero dimensions at 360, 390, 768, 1440
- [ ] Currency conversion returns to exact original strings on AUD
- [ ] Arabic card is `dir="rtl"` and the ABN digit groups read in order

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
