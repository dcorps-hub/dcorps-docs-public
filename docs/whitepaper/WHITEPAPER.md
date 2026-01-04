# Whitepaper (Condensed)

**Document type**: Whitepaper (mid-length)  
**Doc ID**: DCHUB-WP-PUBLIC-2025-12-21  
**Version**: v1.3.1  
**Status**: Final v1.3.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
[www.dcorps.com](http://www.dcorps.com/) · [dev@dcorps.com](mailto:dev@dcorps.com)  
**Last updated**: 2025-12-24  

> This is the condensed whitepaper. For the official long version, see [docs/whitepaper/WHITEPAPER_LONG.md](/whitepaper/WHITEPAPER_LONG).

---

## Disclaimer

Nothing in this document is:

- an offer to sell, or a solicitation of an offer to buy, any token, share, or security;
- investment, legal, tax, or accounting advice; or
- a promise of listing, price performance, or financial return for any asset.

This whitepaper describes a technical and economic design for the dCorps protocol as currently envisioned. Many details may change with engineering work, legal advice, market conditions, and community input. Any token sale, equity financing, or legal agreement will be governed by its own dedicated documentation and terms, not by this whitepaper.

Participants are responsible for obtaining their own professional advice and for complying with applicable laws in all relevant jurisdictions.

---

## How to use this document

Reader shortcuts:

- Founders and operators: sections 0, 4, 5, 6, 7.
- Nonprofit leaders and donors: sections 0, 4.2, 5, 8.
- Builders and integrators: sections 3, 4, 5, plus [docs/spec/](/spec).
- Validators and security contributors: sections 6.4, 7, and [docs/security/](/security).
- Institutions and legal professionals: sections 2, 7, 9, and [docs/legal/](/legal).

---

## Document stack and what is normative

This whitepaper explains intent, scope, boundaries, and design rationale. It is not the protocol specification.

For interoperability and correctness, the intended document stack is:

- **Whitepaper (this document)**: design intent and boundaries.
- **Protocol specifications (normative)**:
  - [docs/spec/SPEC-CORE.md](/spec/SPEC-CORE) (core state and messages),
  - [docs/spec/SPEC-DATA.md](/spec/SPEC-DATA) (schemas and tagging),
  - [docs/spec/SPEC-MODULES.md](/spec/SPEC-MODULES) (module standard),
  - [docs/spec/SPEC-ATTESTATIONS.md](/spec/SPEC-ATTESTATIONS) (attestation modules, if used),
  - [docs/spec/SPEC-ANCHOR.md](/spec/SPEC-ANCHOR) (sub chain anchoring),
  - [docs/spec/SPEC-PARAMS.md](/spec/SPEC-PARAMS) (parameter model),
  - [docs/spec/SPEC-INDEXER.md](/spec/SPEC-INDEXER) (reference indexer and explorer behavior),
  - [docs/spec/SPEC-CONFORMANCE-TESTS.md](/spec/SPEC-CONFORMANCE-TESTS) (compatibility test expectations).
- **Governance and policy (normative for process and operations)**:
  - [docs/policy/POL-GOV.md](/policy/POL-GOV),
  - [docs/policy/POL-TREASURY.md](/policy/POL-TREASURY),
  - [docs/policy/POL-FOUNDATION.md](/policy/POL-FOUNDATION),
  - [docs/policy/POL-REGISTRY-MODULES.md](/policy/POL-REGISTRY-MODULES),
  - [docs/policy/POL-VALIDATORS.md](/policy/POL-VALIDATORS).
- **Security artifacts (operationally normative)**:
  - [docs/security/SECURITY-POLICY.md](/security/SECURITY-POLICY),
  - [docs/security/THREAT-MODEL.md](/security/THREAT-MODEL),
  - [docs/security/AUDIT-PLAN.md](/security/AUDIT-PLAN),
  - [docs/security/BUG-BOUNTY.md](/security/BUG-BOUNTY),
  - [docs/security/INCIDENT-RESPONSE.md](/security/INCIDENT-RESPONSE).

If there is a conflict between this whitepaper and a normative specification, the normative specification is intended to take precedence.

---

## Table of contents

- 0. Executive summary
- 1. Problem and context
- 2. Design principles and boundaries
- 3. Architecture overview
- 4. Entity models (corporations and nonprofits)
- 5. Operations, accounting events, and reporting
- 6. Token model and economic mechanics (high-level)
- 7. Protocol governance and upgrade safety
- 8. Security, privacy, and risk posture
- 9. Legal position and public disclaimers
- 10. What to read next

---

## 0. Executive summary

### 0.1 Overview

dCorps is a digitally native base layer for **corporations** and **nonprofit organizations**.

It provides a shared standard where organizations can be created, owned, governed, and operated on-chain. The dCorps Hub is the kernel: it defines canonical identity, ownership and authority, governance actions, treasury control, standardized accounting events, document anchoring, and an auditable history.

**v1 in one sentence**

In v1, an entity can register, set roles and wallets, run stablecoin operations through tagged accounting events, and view reproducible cash-based operating and allocation summaries over any selected timeframe, with optional evidence anchoring.

Later phases are designed to support multiple approved stablecoins and, where technically and legally possible, CBDC-style instruments through the approved asset registry and optional jurisdiction adapter modules. This is expected to require issuer and jurisdiction cooperation and to be pursued through ecosystem adoption work coordinated by the foundation and ResCo (planned).

### 0.2 Kernel and adapters

dCorps keeps a strict boundary between a minimal kernel and optional modules:

- **Kernel (required)**: entity registry, roles and authority, governance actions, treasury primitives, accounting events, and document anchoring.
- **Adapters and modules (optional)**: jurisdiction recognition workflows, institutional reporting views, sector and impact frameworks, and attestations derived from kernel state.

Entities must be able to operate without adapters. Adapters may publish derived interpretations, but they must not redefine kernel semantics or rewrite history.

### 0.3 v1 scope (ships vs not in scope)

**In scope for v1**

- Hub chain, DCHUB gas and staking, and basic on-chain protocol governance.
- Hub corporation and Hub nonprofit entity containers.
- Canonical wallet types and tagged accounting events.
- Explorer/indexer-derived cash-based operating views (corporations) and allocation views (nonprofits) over any selected timeframe.
- Document anchoring and reference standards for explorers and indexers.

**Out of scope for v1**

- any requirement to attach a jurisdiction adapter, legal wrapper, or compliance process;
- operating or providing bank integrations, fiat rails, or custody;
- any guarantee of listing, liquidity, or public-market infrastructure;
- mandatory protocol-level KYC/KYB/AML (these live in applications, service providers, and optional modules);
- default full privacy execution (privacy is an optional evolution).

---

## 1. Problem and context

### 1.1 Stablecoins are usable; entity infrastructure is not standardized

Stablecoins and wallets can already function as day-to-day operating accounts for global teams. However, authority, approvals, and reporting remain fragmented across private tools and jurisdiction-specific systems.

Common failure modes include:

- unclear or unverifiable authority (who could approve what, when);
- approvals and policies stored as PDFs and email threads without a shared, queryable history;
- operational reporting that requires manual reconciliation and cannot be reproduced from shared inputs; and
- nonprofit allocation claims that are difficult for donors to verify without trusting custom reporting.

### 1.2 What “digitally native” means here

dCorps reuses proven organizational abstractions (ownership, units, boards, roles, approvals) but expresses them as deterministic on-chain state machines and events.

This does not replace legal responsibility. It provides a default operating posture for on-chain economic activity: counterparties can rely on verifiable authority and approvals as the default, even when no jurisdiction adapter is attached.

---

## 2. Design principles and boundaries

### 2.1 Minimal kernel, optional adapters

The Hub kernel has one job: be a neutral, robust, auditable organization kernel. Everything else is optional and replaceable.

dCorps avoids hard-coding jurisdiction-specific or sector-specific logic into the base protocol. Those differences live in optional protocol modules and matching off-chain processes.

### 2.2 Non-custodial and non-intermediation boundary

dCorps is not a custodial service. Funds live in entity-controlled wallets and are moved by on-chain authority rules and approvals.

dCorps does not promise compliance, listing, liquidity, or investment returns. It provides a programmable and auditable entity standard that others can build around.

### 2.3 Reporting honesty: provenance and coverage

The protocol is designed to surface what is known from on-chain facts, and to label what is derived, self-tagged, or supported by third-party attestations.

Reporting views should include coverage and integrity signals so readers can interpret transparency honestly.

---

## 3. Architecture overview

At a conceptual level:

```text
External applications (UIs, markets, payroll, donation portals, dashboards)
        |
        v
Optional adapters and modules (jurisdiction recognition, sector frameworks, attestations)
        |
        v
dCorps Hub kernel (entity registry, roles, governance, wallets, accounting events, anchoring)
        |
        v
DCHUB staking and consensus (security, gas, protocol governance)
```

Applications provide user experience. The Hub provides canonical state and events. Optional modules publish derived interpretations under explicit rules and governance.

---

## 4. Entity models (corporations and nonprofits)

### 4.1 Hub corporation (private corporation container)

A Hub corporation is a complete on-chain entity container intended for long-lived operation on the Hub.

Core characteristics:

- an internal unit-based cap table (10,000 base units by default);
- role-based authority and approval governance;
- canonical wallets for operations and treasury activity;
- tagged accounting events for inflows/outflows and reproducible reporting views.

Units are scoped to the entity. They are not global protocol tokens.

The base unit count is a declared denominator (10,000 by default). Corporations may expand it in multiples of 10,000 to increase precision without changing ownership percentages; v0.1 templates recommend a practical maximum of 1,000,000 base units for interoperability and UI performance.

### 4.2 Hub nonprofit (board-governed nonprofit container)

A Hub nonprofit is a complete on-chain entity container designed for donor-relevant transparency and board-governed controls.

Core characteristics:

- board governance with explicit roles and voting rules;
- donation and program wallet structure;
- allocation rules and category-level transparency;
- reproducible allocation views derived from tagged accounting events over any selected timeframe.

Nonprofits are expected to meet a minimum transparency floor meaningful for donors, while allowing selective disclosure patterns as needed for beneficiary safety.

Nonprofits do not have equity and are not “owned” by units, but they can still participate in group structures (for example by holding units in a Hub corporation subsidiary).

### 4.3 Optional future extension: recognized sub chains

Some organizations may eventually require specialized execution environments for extreme scale or specialized privacy. If introduced, recognized sub chains would anchor summarized commitments to the Hub under explicit standards.

v1 does not require any sub chains for entities to operate.

---

## 5. Operations, accounting events, and views

### 5.1 Canonical wallets and tagged accounting events

Entities operate through canonical wallet types (for example merchant, donation, program, treasury). Flows through these wallets can be recorded with tagged accounting events.

Tags are explicit. The Hub does not attempt to infer them. Typed workflows can produce deterministic tags, while external applications may also submit tags under the entity’s authority.

### 5.2 Cash-based operating views (corporations)

dCorps supports cash-based operating views: time-window summaries derived from tagged inflow/outflow events, excluding accrual accounting treatments.

Cash-based views are designed for operational clarity and comparability. They are not GAAP/IFRS financial statements.

Important boundary: these views are derived by explorers/indexers (and optional dApps) from on-chain events. The kernel does not require a reporting cadence and does not store periodic statements as native state.

### 5.3 Nonprofit allocation views

Nonprofit allocation views are reproducible cash-based time-window views derived from tagged accounting events and the nonprofit’s allocation rules.

The design goal is meaningful transparency for donors without forcing disclosure of sensitive details.

### 5.4 Evidence anchoring and integrity signals

For material items, entities may anchor evidence (invoices, receipts, agreements) by hash and link accounting events to evidence references.

Views should surface integrity signals, such as uncategorized flows, provenance labels (typed workflow vs entity-tagged), and optional attestation signals.

---

## 6. Token model and economic mechanics (high-level)

### 6.1 Separation of DCHUB, Hub units, and optional dShares

dCorps separates protocol participation and entity-level ownership:

- **DCHUB**: Hub gas, staking, and protocol governance; does not represent ownership in user entities.
- **Hub units**: internal ownership and voting rights within a Hub corporation; scoped to that entity.
- **dShares (optional future extension)**: equity-style tokens issued by public sub chain corporations on their own sub chains, under their own legal regime.
- **Nonprofit governance**: board and allocation rules, not equity; no token represents ownership of a nonprofit.

### 6.2 DCHUB and USDC roles

- **DCHUB** prices execution (gas) and secures the Hub through staking and validator consensus.
- **USDC** is the baseline unit of account for examples and the primary operating currency for many entities and protocol service fees.

This describes protocol mechanics, not promises about price, liquidity, or market outcomes.

### 6.3 Supply and distribution (reference)

For the fixed hard-cap supply stance, indicative allocations, vesting, and emissions vocabulary, see:

- [docs/token/TOKEN-POLICY.md](/token/TOKEN-POLICY)
- [docs/token/TOKEN-GENESIS-PLAN.md](/token/TOKEN-GENESIS-PLAN)
- [docs/token/TOKEN-EMISSIONS-NOTES.md](/token/TOKEN-EMISSIONS-NOTES)

---

## 7. Protocol governance and upgrade safety

The governance design intent is conservative:

- keep the Hub minimal and neutral;
- make hostile or careless upgrades slower and more visible;
- treat certain changes as higher-risk “Protected Changes” with higher thresholds and safety mechanisms.

Governance process and proposal classes are described in [docs/policy/POL-GOV.md](/policy/POL-GOV). The Whitepaper Long defines the baseline Protected Change thresholds and safety expectations.

---

## 8. Security, privacy, and risk posture

dCorps treats security as a first-order constraint:

- defense-in-depth across protocol, infrastructure, and process;
- audits and a bug bounty program for critical components;
- clear incident response procedures and communications expectations.

Privacy is not assumed by default. Confidentiality exists only when an entity uses privacy-preserving execution or disclosure tools. Interfaces should clearly label what is raw on-chain data, what is aggregate, and what is a claim supported by attestations.

For security posture and operational docs, see [docs/security/](/security). For a plain-language risk overview, see [docs/legal/RISK_DISCLOSURE.md](/legal/RISK_DISCLOSURE).

---

## 9. Legal position and public disclaimers

dCorps is a protocol and documentation set. It is not legal advice and it does not create legal personhood.

Legal status, filings, reporting obligations, and enforcement remain off-chain and jurisdiction-dependent. Optional jurisdiction adapter modules may support recognition workflows, but legal effect comes from local law and contracts that reference those workflows.

See:

- [docs/legal/DISCLAIMERS.md](/legal/DISCLAIMERS)
- [docs/legal/RISK_DISCLOSURE.md](/legal/RISK_DISCLOSURE)

---

## 10. What to read next

- Executive summary: [docs/whitepaper/EXECUTIVE_SUMMARY.md](/whitepaper/EXECUTIVE_SUMMARY)
- Litepaper: [docs/whitepaper/LITEPAPER.md](/whitepaper/LITEPAPER)
- Long version: [docs/whitepaper/WHITEPAPER_LONG.md](/whitepaper/WHITEPAPER_LONG)
- Nonprofit note: [docs/whitepaper/NONPROFIT_NOTE.md](/whitepaper/NONPROFIT_NOTE)
- FAQ: [docs/whitepaper/FAQ.md](/whitepaper/FAQ)
- Glossary: [docs/whitepaper/GLOSSARY.md](/whitepaper/GLOSSARY)
- Technical overview: [docs/engineering/TECHNICAL_OVERVIEW.md](/engineering/TECHNICAL_OVERVIEW)
- Integration guide: [docs/engineering/INTEGRATION_GUIDE.md](/engineering/INTEGRATION_GUIDE)
- Attestations standard (if used): [docs/spec/SPEC-ATTESTATIONS.md](/spec/SPEC-ATTESTATIONS)
- Conformance tests: [docs/spec/SPEC-CONFORMANCE-TESTS.md](/spec/SPEC-CONFORMANCE-TESTS)
