# AAA DEPLOY BATCH · 11 JUNE 2026 — Web Arsenal v2

Commit ALL files in this batch to the REPO ROOT (same folder as the existing index.html).

## Files in this batch (10)

| File | What it is |
|---|---|
| index.html | Homepage — restyled (5-link nav, progress spine, Southern Cross layer, walkthrough strip) |
| tradies.html | Landing page — Sydney tradies (job-sheet design) |
| partners.html | Landing page — accountants & bookkeepers (engagement-letter design) |
| wizard.html | "Find your first agent in 60 seconds" interactive matcher |
| explainer.html | 93-second auto-playing narrated explainer (press F for fullscreen) |
| narration.mp3 | Speechma AU voiceover — explainer plays it automatically |
| raj-photo.jpg | Founder photo, pre-cropped 4:5 — tradies page picks it up automatically |
| infographic.png | 12-month arc, one screen — WhatsApp/share-ready (2400px) |
| infographic.svg | Same infographic, print-crisp master |
| sitemap.xml | REPLACES existing sitemap — adds the 4 new pages, bumps homepage lastmod |

## Deploy steps

1. Commit all 10 files to repo root (sitemap.xml overwrites the old one).
2. Push → GitHub Pages rebuilds automatically (1–2 min).
3. Smoke test on your PHONE first:
   - /tradies.html — photo shows, CALL RAJ dials, bottom call bar appears
   - /wizard.html — run one full match, tap WHATSAPP THIS MATCH
   - /explainer.html — PLAY WITH VOICE → your Speechma narration plays
   - / — spine dots on the left, stars drifting, nav has 5 links + gold BOOK PHASE 0
4. Google Search Console → Sitemaps → resubmit sitemap.xml.
5. Bing Webmaster → Sitemaps → resubmit; URL-inspect / to push a recrawl.
6. Share-card check: paste /tradies.html into LinkedIn Post Inspector → og-image card appears.

## Notes

- infographic.png is also your WhatsApp leave-behind — send it whenever someone asks "so what do you actually do?"
- If narration.mp3 ever 404s, the explainer silently falls back to the browser's built-in AU voice.
- Every page carries the visible "UPDATED 11 JUNE 2026" stamp per site rule — bump it on the next substantive change.

— Built 11 June 2026 · AAA by Artigellence · Raj Singh
