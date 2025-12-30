# Integration Guide

**Document type**: Integration guide  
**Doc ID**: DCHUB-INTEGRATION-GUIDE-2025-12-21  
**Version**: v1.3.1  
**Status**: Final v1.3.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/engineering/INTEGRATION_GUIDE.md](/engineering/INTEGRATION_GUIDE))  
**Last updated**: 2025-12-24  

---

## Disclaimer

This guide is descriptive. Normative behavior, schemas, and compatibility rules are defined in [docs/spec/](/spec). Nothing here is investment, legal, tax, or accounting advice.

Note: In this repo, [docs/spec/](/spec) is part of the public documentation set. Only safety-sensitive operational material is intended to be kept out of public distribution under `dcorps-docs-private/docs/restricted/` (policy: [docs/policy/POL-DOCS-PUBLICATION.md](/policy/POL-DOCS-PUBLICATION)).

---

## 1. Choose your integration surface

Most builders integrate at one (or more) of these levels:

1. **Read-only / indexing integration**
   - Build explorers, dashboards, reporting, and analytics from Hub state and events.
2. **Application integration**
   - Build UIs and workflows that create entities, bind wallets/roles, and emit tagged accounting events under entity authority.
3. **Module integration (advanced)**
   - Build optional protocol modules (jurisdiction adapter modules, sector frameworks, attestations) under the module standard.

If you are building a chain indexer or explorer, start with [docs/spec/SPEC-INDEXER.md](/spec/SPEC-INDEXER).

---

## 2. Core things to index (minimum viable)

To support basic interoperability, indexers and applications should be able to resolve:

- **Entity registry**
  - entity IDs, entity types, metadata, lifecycle status.
- **Role bindings and governance actions**
  - who is authorized to act for an entity and what approvals occurred.
- **Canonical wallets**
  - wallet type bindings for each entity.
- **Tagged accounting events**
  - inflow/outflow events with category and tag fields.
- **Anchors**
  - document anchors and references linked to governance actions or accounting events.

Schema and tag catalogs live in [docs/spec/SPEC-DATA.md](/spec/SPEC-DATA).

---

## 3. Reporting views (recommended outputs)

If you are building reporting tooling, implement reproducible time-window views (any selected timeframe):

- **Cash-based operating reporting** (corporations)
- **Nonprofit allocation reporting** (nonprofits)

Reporting views should surface:

- uncategorized flows explicitly,
- provenance labels (typed workflow vs entity-tagged vs anchored aggregates), and
- optional attestation signals where supported.

This is designed to make “how the numbers were produced” verifiable.

---

## 4. Module and sub chain awareness (optional but important)

If your application surfaces outputs from modules or sub chains:

- treat them as explicitly labeled overlays on top of kernel state;
- surface module IDs, versions, and status labels from the module registry;
- surface sub chain recognition tiers and anchor status clearly (if applicable);
- avoid presenting derived claims as kernel facts without provenance.

Normative rules:

- modules: [docs/spec/SPEC-MODULES.md](/spec/SPEC-MODULES)
- sub chain anchoring: [docs/spec/SPEC-ANCHOR.md](/spec/SPEC-ANCHOR)

---

## 5. Safety and UX requirements (public-facing tools)

Reference explorers and serious applications should:

- label cash-based and allocation views clearly as non-audited views and not accrual accounting;
- avoid implying guarantees (compliance, listing, return, safety);
- surface custody and counterparty risks where third-party services or bridges are involved;
- support evidence anchors and links for material items (where entities provide them).

Risk disclosure baseline: [docs/legal/RISK_DISCLOSURE.md](/legal/RISK_DISCLOSURE).

---

## 6. Where to find the exact rules (normative)

- Core protocol: [docs/spec/SPEC-CORE.md](/spec/SPEC-CORE)
- Data and schemas: [docs/spec/SPEC-DATA.md](/spec/SPEC-DATA)
- Module standard: [docs/spec/SPEC-MODULES.md](/spec/SPEC-MODULES)
- Attestations standard (if used): [docs/spec/SPEC-ATTESTATIONS.md](/spec/SPEC-ATTESTATIONS)
- Sub chain anchoring: [docs/spec/SPEC-ANCHOR.md](/spec/SPEC-ANCHOR)
- Parameters and economics model: [docs/spec/SPEC-PARAMS.md](/spec/SPEC-PARAMS)
- Reference indexer behavior: [docs/spec/SPEC-INDEXER.md](/spec/SPEC-INDEXER)
- Conformance tests: [docs/spec/SPEC-CONFORMANCE-TESTS.md](/spec/SPEC-CONFORMANCE-TESTS)

---

## 7. Recommended reading order (builder)

1. [docs/engineering/TECHNICAL_OVERVIEW.md](/engineering/TECHNICAL_OVERVIEW)
2. [docs/whitepaper/WHITEPAPER.md](/whitepaper/WHITEPAPER) (for boundaries and scope)
3. [docs/spec/SPEC-CORE.md](/spec/SPEC-CORE) + [docs/spec/SPEC-DATA.md](/spec/SPEC-DATA)
4. [docs/spec/SPEC-INDEXER.md](/spec/SPEC-INDEXER) (if you index)
5. [docs/spec/SPEC-MODULES.md](/spec/SPEC-MODULES) (if you build modules)
6. [docs/spec/SPEC-CONFORMANCE-TESTS.md](/spec/SPEC-CONFORMANCE-TESTS) (if you publish compatibility claims)
