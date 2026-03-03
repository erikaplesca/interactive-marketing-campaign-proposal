# #FărăLimite 2025 — Interactive Campaign Proposal

**HTML | CSS | JavaScript | Chart.js | Digital Marketing**

An interactive campaign proposal microsite built for PR Lab Digital Marketing Hub, presenting a full seasonal marketing strategy for three brands — Frutti Fresh, Izvorul Minunilor, and Revigo. The document was designed to replace static PowerPoint decks with a living, animated web presentation delivered directly to the client.

---

## Context

This proposal was created entirely in-house at PR Lab, covering strategy, copywriting, budget architecture, campaign mechanics, and the front-end implementation of the presentation itself. It outlines a €80,185 umbrella campaign running from July to December 2025, structured around three seasonal activations under the creative concept **#FărăLimite**.

The decision to build the proposal as a website rather than a slide deck was intentional — it communicates ambition, digital fluency, and attention to detail before the client even reads a single line of strategy.

---

## Campaign Overview

**Umbrella concept:** #FărăLimite ("No Limits") — a seasonal campaign series challenging audiences to dream bigger and engage with the brands through prize-driven competitions and social media activations.

**Strategy:** alternates between cross-brand activations (all three brands unified under a single platform) and brand-specific personalized campaigns, depending on the objective of each seasonal phase.

---

## Sales Campaign Mechanic (FreshWin)

For campaigns with a direct sales objective, participation is driven through **freshwin.ro**, a dedicated digital platform:

1. Purchase a minimum of 3 products from the Frutti Fresh, Izvorul Minunilor, or Revigo range
2. Scan the QR code on the packaging or navigate directly to freshwin.ro
3. Upload the fiscal receipt to enter the prize draw

This mechanic links offline purchase behavior to measurable digital engagement, enabling full tracking of participation and conversion.

---

## What the Proposal Document Includes

- Full creative concept and strategic rationale
- Budget allocation with interactive doughnut chart (Chart.js)
- Detailed breakdown of each seasonal campaign: objectives, prizes, and social media strategy
- Influencer activation plan for Back to School (unboxing format, Reels & TikTok)
- Grand prize section with cumulative campaign rewards
- Animated statistics with scroll-triggered counters

---

## Technical Features

The microsite was built to feel like a premium presentation, not a document:

- Scroll-triggered fade-in animations for all major content blocks using Intersection Observer API
- Animated stat counters that run on scroll entry (€80,185 total budget, 6 months, 3 campaigns)
- Interactive doughnut chart built with Chart.js, showing budget split across the three campaigns with tooltips displaying exact values and percentages
- Scroll-aware active state on navigation links
- Smooth scroll navigation between sections
- Entrance animations on the FreshWin app mockup
- Fully responsive layout (mobile and desktop)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom) |
| Interactivity | Vanilla JavaScript (ES6+) |
| Data visualization | Chart.js (CDN) |
| Typography | Google Fonts — Montserrat |

---

## Project Structure

```
faralimite-proposal/
│
├── index.html       # Full proposal document
├── style.css        # Main stylesheet
├── style2.css       # Section-specific styles
├── app.js           # Animations, counters, chart, navigation
│
└── images/
    ├── logo_pr2.png
    ├── banner.png
    ├── app2.png         # FreshWin platform mockup
    └── [prize images]   # Campaign prize visuals
```

---

*Built by Maria-Erika Pleșca at PR Lab Digital Marketing Hub*  
*Campaign period: July – December 2025 | Brands: Frutti Fresh, Izvorul Minunilor, Revigo*
