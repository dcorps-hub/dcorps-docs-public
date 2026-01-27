# Technical Overview

**Document type**: Technical overview  
**Doc ID**: DCHUB-TECH-OVERVIEW-2025-12-21  
**Version**: v1.3.1  
**Status**: Final v1.3.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/engineering/TECHNICAL_OVERVIEW.md](/engineering/TECHNICAL_OVERVIEW))  
**Last updated**: 2026-01-26

---

## Disclaimer

This document is descriptive. Normative behavior is defined in the specifications under [docs/spec/](/spec). Nothing in this document is investment, legal, tax, or accounting advice.

---

## 1. What this is (and is not)

This technical overview is a public map of the dCorps Hub architecture. The Hub runs on dCorps Chain, an Arbitrum Orbit rollup (Rollup mode) that settles to Ethereum:

- what the Hub kernel does;
- what lives in protocol modules (optional); and
- how applications and indexers interact with Hub state.

This document does not define consensus-critical rules. For normative definitions, use:

- [docs/spec/SPEC-CORE.md](/spec/SPEC-CORE)
- [docs/spec/SPEC-DATA.md](/spec/SPEC-DATA)
- [docs/spec/SPEC-MODULES.md](/spec/SPEC-MODULES)
- [docs/spec/SPEC-ANCHOR.md](/spec/SPEC-ANCHOR)
- [docs/spec/SPEC-PARAMS.md](/spec/SPEC-PARAMS)
- [docs/spec/SPEC-INDEXER.md](/spec/SPEC-INDEXER)

---

## 2. System layers

At a conceptual level:

```text
Applications (UIs, payroll, donation portals, dashboards)
        |
        v
Optional protocol modules (jurisdiction adapter modules, sector frameworks, attestations)
        |
        v
dCorps Hub kernel (entity registry, roles, governance, wallets, accounting events, anchoring)
        |
        v
DCHUB gas + rollup settlement (sequencer + Ethereum)
```

Key boundary: entities must be able to operate without optional modules. Modules may publish derived interpretations, but must not redefine kernel semantics.

---

## 3. Kernel responsibilities (Hub core)

The Hub kernel is intended to provide:

- **Entity registry**: stable IDs, metadata, and lifecycle status for entities.
- **Authority and governance primitives**: roles, permissions, proposals/votes/resolutions (as defined by entity module templates).
- **Canonical wallets**: standard wallet types bound to an entity (merchant, donation, program, treasury, reserves, etc.).
- **Accounting primitives**: tagged accounting events for inflows/outflows and the standardized data needed to derive views in explorers and indexers.
- **Document anchoring**: hash anchoring and references for governing documents and material evidence.
- **Registries**: module registry and asset registry with canonical contract references.

The Hub is not a bank integration layer and does not provide custody.

---

## 4. Core on-chain objects (conceptual)

The core objects described in the specs include:

- **Entity**
  - stable entity identifier, type (Hub corporation, Hub nonprofit, etc.), metadata, lifecycle status.
- **Role binding**
  - mapping from role types to addresses and (optionally) identifiers, plus powers/capabilities.
- **Canonical wallet**
  - wallet type + address binding, used as the basis for operating flows and reporting.
- **Tagged accounting event**
  - event record with category and tag fields enabling reproducible views over any selected timeframe (derived by explorers/indexers).
- **Anchor**
  - reference to a document hash or commitment, linked to governance actions or accounting events.
- **Module registry**
  - module IDs, types, versions, statuses, and integration metadata.

Exact schema fields and encodings are defined in [docs/spec/SPEC-DATA.md](/spec/SPEC-DATA).

---

## 5. Reporting views (cash-based and allocation)

dCorps supports reproducible views over any selected timeframe derived from tagged events:

- **Cash-based operating reporting** for corporations (distinct from GAAP/IFRS accrual statements).
- **Nonprofit allocation reporting** derived from donation/program flows and allocation rules.

Reporting honesty is achieved by surfacing:

- provenance (typed workflow vs entity-tagged vs anchored aggregates),
- coverage ratios and uncategorized flows, and
- optional attestation signals (if used).

---

## 6. Anchoring and evidence

Anchors provide durable references to off-chain documents and evidence (bylaws, resolutions, reports, invoices). Anchors are immutable and must reference the authoritative entity and anchor type.

Normative anchoring behavior is defined in [docs/spec/SPEC-ANCHOR.md](/spec/SPEC-ANCHOR).

---

## 7. Governance and parameterization

The Hub uses parameters (rather than hard-coded constants) for many economic and governance behaviors so changes can be made through governance without frequent hard forks.

Governance processes are described in [docs/policy/POL-GOV.md](/policy/POL-GOV). Parameter modeling is described in [docs/spec/SPEC-PARAMS.md](/spec/SPEC-PARAMS).

---

## 8. Security and risk notes

Security posture is covered by:

- [docs/security/SECURITY-POLICY.md](/security/SECURITY-POLICY)
- [docs/security/THREAT-MODEL.md](/security/THREAT-MODEL)
- [docs/security/AUDIT-PLAN.md](/security/AUDIT-PLAN)
- [docs/security/BUG-BOUNTY.md](/security/BUG-BOUNTY)
- [docs/security/INCIDENT-RESPONSE.md](/security/INCIDENT-RESPONSE)

Plain-language risk disclosure: [docs/legal/RISK_DISCLOSURE.md](/legal/RISK_DISCLOSURE).

---

## 9. Next steps for builders

- Integration guide: [docs/engineering/INTEGRATION_GUIDE.md](/engineering/INTEGRATION_GUIDE)
- Specs (normative): [docs/spec/](/spec)
