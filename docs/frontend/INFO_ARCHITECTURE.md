# Information Architecture

**Document type**: Frontend requirements  
**Doc ID**: FE-INFO-ARCH  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/frontend/INFO_ARCHITECTURE.md](/frontend/INFO_ARCHITECTURE))  
**Last updated**: 2026-04-12

> Scope: Canonical information architecture across `dcorps.com`, the docs center, and the official app after the app-first reset.

---

## 1. Primary public entry on `dcorps.com`

- `/` should land in the public registry inside the official app.
- The canonical public surface is the app, not a separate brochure site.
- Docs, whitepaper, legal pages, and foundation / token context should remain accessible from the same domain.

---

## 2. Documentation hub

- [docs/welcome/INDEX.md](/welcome/INDEX) is the docs center entry point and canonical map.
- [docs/spec/INDEX.md](/spec/INDEX) is the developer entry point.
- Whitepaper, policies, token docs, and security docs remain public and discoverable through docs.

---

## 3. App surfaces

- **Registry**: discovery and current-state search for entities.
- **Explorer**: entity dossier, history, verification, anchors, and activity.
- **Workspace**: wallet-connected admin surface for entity actions.
- **Activity**: future global protocol activity stream, separate from the homepage.

---

## 4. Required public routes or equivalents

- `/`
- `/entities/{entity_id}`
- `/docs`
- `/templates`
- `/foundation`
- `/token`
- `/about`
- `/status`
- `/legal` and footer legal routes

---

## 5. Navigation rules

- Primary navigation should stay compact and product-first.
- Registry should remain the center of gravity.
- Public docs and specs must remain one click away from the app shell.
- Legal, risk, privacy, and policy pages should live in footer or secondary navigation, not be buried.
- Tokenomics should stay contextual and truthful; it should not outrank the product surface.
- App surfaces must link to relevant spec sections when presenting derived views.
- Do not link to `dcorps-docs-private/docs/restricted/` from public surfaces.
