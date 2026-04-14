# Design Direction

**Document type**: Frontend design direction  
**Doc ID**: FE-DESIGN-DIRECTION  
**Status**: Draft v0.1  
**Release date**: April 11, 2026  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public  
**Last updated**: 2026-04-11

> Scope: define the visual and product-surface direction for the official dCorps app after the explorer-first reset.

---

## 1. Product posture

The primary dCorps surface should be the product itself.

The first route should be a public registry and explorer, not a descriptive marketing homepage.

That means:

- public entity records should be visible immediately;
- entity detail pages should feel like institutional dossiers;
- workspace, governance, and treasury should sit inside the same shell;
- whitepaper, about, security, and roadmap should exist as integrated reference routes inside the app.

---

## 2. Visual reference

The design grammar should borrow from the live [Next.js homepage](https://nextjs.org/) as inspected on April 11, 2026.

Observed characteristics from direct inspection and screenshot capture:

- very light visual chrome;
- large, clean hero typography;
- generous whitespace;
- thin separators and restrained borders;
- minimal top navigation;
- simple rectangular cards instead of ornamental surfaces;
- product clarity before visual effects.

For dCorps, this grammar should be adapted into a dark presentation:

- black background;
- white-first typography;
- restrained grayscale panels;
- thin borders and precise spacing;
- minimal but strong navigation;
- proof-oriented layout instead of decorative storytelling.

What should be borrowed is the visual discipline, not the framework-marketing tone.

---

## 3. dCorps adaptation

dCorps should feel like:

- a protocol terminal;
- an institutional registry;
- a sovereign operating dashboard.

dCorps should not feel like:

- a crypto landing page;
- a generic SaaS homepage;
- a future-facing brochure for features that do not exist yet.

---

## 4. Current route model

The current target route model is:

- `/` registry landing and explorer;
- `/entities/[id]` entity dossier;
- `/workspace` wallet-gated management shell;
- `/governance` proposal and vote views;
- `/treasury` period views and tagged finance surfaces;
- `/about`, `/whitepaper`, `/security`, `/roadmap` as integrated reference routes.

---

## 5. UI principles

- Show real records, lists, statuses, search, and actions above narrative text.
- Use typography and spacing to create authority rather than relying on bright colors.
- Use accent color only for state or critical action.
- Prefer explorer patterns that resemble real crypto tooling: search-first discovery, registry tables, record inspectors, activity feeds, and status chips.
- Prefer tables, rails, inspectors, and command surfaces over hero-marketing blocks.
- Keep motion subtle and functional.
- Keep the shell legible on desktop first, then simplify cleanly on mobile.

---

## 6. Framework posture

Short term, visual iteration may happen in simple HTML/CSS/JS to move quickly.

Once the information architecture and shell are approved, the app should migrate to a proper `Next.js + TypeScript` codebase for:

- route composition;
- public and gated surfaces in one application;
- server/client rendering flexibility;
- long-term maintainability.
