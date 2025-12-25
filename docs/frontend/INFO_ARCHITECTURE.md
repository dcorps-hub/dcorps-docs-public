# Information Architecture (Site, Docs, App)

**Document type**: Frontend requirements  
**Doc ID**: FE-INFO-ARCH  
**Status**: Final v0.1  
**Source repo**: dcorps-docs-public ([docs/frontend/INFO_ARCHITECTURE.md](/frontend/INFO_ARCHITECTURE))  
**Publishing date**: 2025-12-24  
**Last updated**: 2025-12-24  

> Scope: Canonical information architecture across the public site, docs, and app surfaces.

---

## 1. Public site (marketing and onboarding)

- Overview, vision, and protocol summaries.
- Clear links to docs and specs.
- Legal and risk disclosures accessible from footer.

---

## 2. Documentation hub

- [docs/welcome/INDEX.md](/welcome/INDEX) is the docs center entry point.
- [docs/spec/INDEX.md](/spec/INDEX) is the developer entry point.
- [docs/INDEX.md](/INDEX) is the canonical map.

---

## 3. App surfaces

- **Explorer**: read-only views for entities, wallets, modules, and sub chains.
- **Console**: wallet-connected admin surface for entity actions.
- **Registry**: discovery and search for entities, apps, and modules.

---

## 4. Navigation rules

- Public site must link to docs and specs for detailed behavior.
- App surfaces must link to relevant spec sections when presenting derived views.
- Do not link to `dcorps-docs-private/docs/restricted/` from public surfaces.
