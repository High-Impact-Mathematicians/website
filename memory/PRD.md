# Effective Mathematicians — PRD

## Original Problem Statement
Build a community website per the uploaded PDF for "Effective Mathematicians" — a community for people using mathematics to do good. Inspired by Effective Altruism, Effective Environmentalism, High Impact Professionals.

**Iteration 2 (this round)**: User uploaded a 2nd PDF asking the site feel less "boxy/artificial" and more "homely/friendly/human", with very specific changes (see below).

## User Choices
- Contact form: PROTOTYPE-ONLY, no backend wiring
- GitHub forum URL: placeholder (`https://github.com/effective-mathematicians/forum`)
- Hero background: real-people Pexels video (per iteration-2 PDF)
- Logo: orange filled bulb, EA-style
- Wordmark: "Effective" orange, "Mathematicians" black
- Content depth: full rich content
- Aesthetic direction (iter 2): warm/friendly/human, no grid backgrounds, no rigid box layouts, no ITN numerical scoring

## Architecture
- **Frontend**: React + react-router-dom, all pages under shared `Layout`. Routes: `/`, `/learn/cause-areas`, `/learn/resources`, `/about`, `/take-action`, `/contact`.
- **Backend**: Untouched FastAPI boilerplate (no API integration needed for prototype).
- **Design (iter 2)**: warm radial-wash backgrounds (paper-warm + paper-soft), Cormorant Garamond + IBM Plex Sans + JetBrains Mono, soft rounded cards w/ subtle borders, hand-underline accent for emphasis, floating circular icons, scattered partner logos, modal-based "Learn more" pattern.

## What's been implemented

### Iteration 1 — initial MVP (passed 100%)
6-page site with rich content, sticky header + Learn dropdown, mobile menu, hero video, basic resources filter, contact prototype form.

### Iteration 2 — homely/friendly pass (passed 100%)
Per user's 2nd PDF: orange "Effective"+black "Mathematicians" wordmark, Take Action moved to right-only, real-people Pexels hero video, removed all ITN scoring, image+title+modal cause cards, zigzag "How to begin", image thumbnails on resources, long-form theory-of-change, scattered partner logos w/ hover, alternating Take Action layout, removed grid-paper backgrounds.

### Iteration 3 — EA-style visual redesign (passed 100%)
Per user request: keep hero unchanged, rework everything else to look like effectivealtruism.org.
- ✅ New `EASectionHeader` component (heading + italic subtitle + full-width `.ea-rule` black divider)
- ✅ New `EACard` component (image-top + serif title + small description line — no heavy box)
- ✅ Home: hero preserved; below it — 2-col definition pattern, "Inspired by" wordmark strip, sneak-peek EACards, **"Four ideas you probably already agree with"** numbered section, pull-quote with portrait, "Find a way to begin" 6-up EACards
- ✅ Cause Areas: cards grouped by priority tier with kicker label + rule + EACards
- ✅ Resources: underline-style filter tabs (no pills), grouped by type (Books / Articles / Websites / Podcasts / Courses), each group has kicker + rule + EACards
- ✅ About: image-top values cards, long-form theory-of-change essay, partners as serif wordmark list with growing rule on hover (no scattered cards)
- ✅ Take Action: forum hero is a horizontal split-card (text+photo), 4-up EACards, prose house rules
- ✅ Contact: border-bottom-only underline-style inputs, horizontal-rule contact link rows
- ✅ Footer: new newsletter signup strip + cleaner site map
- ✅ Solid white + cream backgrounds (no warm gradients/grids)
- ✅ Logo updated for white background (white heart cutout)
- ✅ Tested: testing_agent_v3 iteration_3 → 100% frontend pass, 0 issues

### Iteration 4 — dark mode + 3rd-PDF changes (passed 100%)
Per user's 3rd PDF:
- ✅ Light/dark mode toggle in top-right (sun/moon icon, persists in localStorage `em-theme`); full dark theme variants across pages
- ✅ Slim Learn dropdown — minimal text-only links (matches effectivealtruism.org thin-list style)
- ✅ Newsletter section completely removed from Footer
- ✅ Math symbols in hero marquee (∑ Biosecurity · ∫ AI Safety · ∂ Global Priorities · π Decision Theory · ∇ Forecasting · λ Climate Risk · Ω Catastrophic Risk)
- ✅ Low-opacity sigma watermark in "What is an effective mathematician?" section background
- ✅ Testimonials carousel with prev/next arrows + dot indicators (4 quotes incl. Dr. Rachel Glennerster, Mira Khan, Daniel Okafor, Sofía Ríos)
- ✅ "Find a way to begin" section removed from Home
- ✅ Cause Areas: removed priority tier groupings — single ungrouped grid
- ✅ Theory of Change rebuilt as alternating side-image blocks with figure captions (8 blocks, NOT a centered narrow article)
- ✅ Contact page: form centered as the only element on the page — sidebar (email/github/office hours/remote) removed
- ✅ Responsive hero (h1 scales to 4xl on mobile)
- ✅ Tested: testing_agent_v3 iteration_4 → 100% frontend pass, 0 issues

## Prioritized Backlog
- **P1** — Wire contact form to a real email provider (Resend/SendGrid) when ready
- **P1** — Replace partner placeholders w/ real logos + bios when partnerships formalised
- **P2** — Author full long-form reports per cause area (currently summary + open-work bullets in modal)
- **P2** — Add a /blog or /notes section
- **P2** — Real GitHub forum URL once created
- **P3** — Newsletter signup
- **P3** — Events / office-hours calendar
- **P3** — Open Graph metadata + favicon featuring the new orange bulb logo

## Next Tasks
1. Confirm iteration 2 matches the user's vision (especially the new homely/friendly tone)
2. Decide on email provider for contact form
3. Source real partner logos for the scattered constellation
