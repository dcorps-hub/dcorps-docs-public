# Explorer Requirements (Read-Only)

**Document type**: Frontend requirements  
**Doc ID**: FE-EXPLORER-REQ  
**Status**: Final v0.1  
**Source repo**: dcorps-docs-public ([docs/frontend/EXPLORER_REQUIREMENTS.md](/frontend/EXPLORER_REQUIREMENTS))  
**Publishing date**: 2025-12-24  
**Last updated**: 2025-12-24  

> Scope: Read-only explorer requirements for Phase 1.

---

## 1. Entity views

- Entity profile (name, type, lifecycle status).
- Role bindings and authority history.
- Canonical wallets and balance summaries.
- Anchors and evidence references.

---

## 2. Accounting views

- Recent inflows/outflows with tags.
- Category summaries for period views.
- Coverage and uncategorized amounts.

---

## 3. Registry views

- Module registry list with risk labels.
- Module attachments per entity.
- Sub chain registry with recognition tiers and anchors.

---

## 4. Governance views (read-only)

- Proposals, votes, and outcomes.
- Parameter changes and module lifecycle events.

---

## 5. API dependencies

Explorer endpoints align to [docs/spec/SPEC-INDEXER.md](/spec/SPEC-INDEXER):

- `GET /v1/entities`
- `GET /v1/entities/{entity_id}`
- `GET /v1/entities/{entity_id}/events`
- `GET /v1/modules`
- `GET /v1/subchains`
- `GET /v1/reports/cash`
- `GET /v1/reports/allocation`
