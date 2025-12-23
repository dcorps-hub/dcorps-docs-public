# dCorps Hub – Technical Overview (Public)

**Document type**: Technical overview (public)  
**Doc ID**: DCHUB-TECH-OVERVIEW-2025-12-21  
**Version**: v1.3.1  
**Status**: Final v1.3.1  
**Release date**: December 21, 2025  
**Source repo**: dcorps-docs (`docs/public/technical/TECHNICAL_OVERVIEW.md`)

---

## Disclaimer

This document is descriptive. Normative behavior is defined in the specifications under `docs/spec/`. Nothing in this document is investment, legal, tax, or accounting advice.

---

## 1. What this is (and is not)

This technical overview is a public map of the dCorps Hub architecture:

- what the Hub kernel does;
- what lives in protocol modules (optional); and
- how applications and indexers interact with Hub state.

This document does not define consensus-critical rules. For normative definitions, use:

- `docs/spec/SPEC-CORE.md`
- `docs/spec/SPEC-DATA.md`
- `docs/spec/SPEC-MODULES.md`
- `docs/spec/SPEC-ANCHOR.md`
- `docs/spec/SPEC-PARAMS.md`
- `docs/spec/SPEC-INDEXER.md`

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
DCHUB staking + consensus (security, gas, protocol governance)
```

Key boundary: entities must be able to operate without optional modules. Modules may publish derived interpretations, but must not redefine kernel semantics.

---

## 3. Kernel responsibilities (Hub core)

The Hub kernel is intended to provide:

- **Entity registry**: stable IDs, metadata, and lifecycle status for entities.
- **Authority and governance primitives**: roles, permissions, proposals/votes/resolutions (as defined by entity module templates).
- **Canonical wallets**: standard wallet types bound to an entity (merchant, donation, program, treasury, reserves, etc.).
- **Accounting primitives**: tagged accounting events for inflows/outflows and standardized reporting views.
- **Document anchoring**: hash anchoring and references for governing documents and material evidence.
- **Registries**: module registry and (optional) sub chain registry with recognition labels and anchor history.

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
  - event record with category and tag fields enabling reproducible period reports.
- **Anchor**
  - reference to a document hash or commitment, linked to governance actions or accounting events.
- **Module registry**
  - module IDs, types, versions, statuses, and integration metadata.
- **Sub chain registry (optional)**
  - sub chain identifiers, recognition tiers, anchors, and status labels.

Exact schema fields and encodings are defined in `docs/spec/SPEC-DATA.md`.

---

## 5. Reporting views (cash-based and allocation)

dCorps supports reproducible period reporting derived from tagged events:

- **Cash-based operating reporting** for corporations (distinct from GAAP/IFRS accrual statements).
- **Nonprofit allocation reporting** derived from donation/program flows and allocation rules.

Reporting honesty is achieved by surfacing:

- provenance (typed workflow vs entity-tagged vs anchored aggregates),
- coverage ratios and uncategorized flows, and
- optional attestation signals (if used).

---

## 6. Optional sub chains and anchoring (future extension)

Sub chains are optional execution environments that may anchor summarized commitments to the Hub under explicit standards.

v1 does not require sub chains. If introduced, anchors and recognition tiers exist so indexers and explorers can interpret sub chain-derived claims deterministically without changing kernel semantics.

Normative anchoring behavior and recognition tiers are defined in `docs/spec/SPEC-ANCHOR.md`.

---

## 7. Governance and parameterization

The Hub uses parameters (rather than hard-coded constants) for many economic and governance behaviors so changes can be made through governance without frequent hard forks.

Governance processes are described in `docs/policy/POL-GOV.md`. Parameter modeling is described in `docs/spec/SPEC-PARAMS.md`.

---

## 8. Security and risk notes (public)

Security posture is covered by:

- `docs/security/SECURITY-POLICY.md`
- `docs/security/THREAT-MODEL.md`
- `docs/security/AUDIT-PLAN.md`
- `docs/security/BUG-BOUNTY.md`
- `docs/security/INCIDENT-RESPONSE.md`

Plain-language risk disclosure: `docs/public/legal/RISK_DISCLOSURE.md`.

---

## 9. Next steps for builders

- Integration guide: `docs/public/technical/INTEGRATION_GUIDE.md`
- Specs (normative): `docs/spec/`
