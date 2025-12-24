# Information Architecture (Site, Docs, App)

**Document type**: Frontend requirements  
**Doc ID**: FE-INFO-ARCH  
**Status**: Final v0.1  
**Source repo**: dcorps-docs-public (`docs/frontend/INFO_ARCHITECTURE.md`)

> Scope: Canonical information architecture across the public site, docs, and app surfaces.

---

## 1. Public site (marketing and onboarding)

- Overview, vision, and protocol summaries.
- Clear links to public docs and specs.
- Legal and risk disclosures accessible from footer.

---

## 2. Documentation hub

- `docs/public/INDEX.md` is the public entry point.
- `docs/spec/INDEX.md` is the developer entry point.
- `docs/INDEX.md` is the canonical internal map.

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
