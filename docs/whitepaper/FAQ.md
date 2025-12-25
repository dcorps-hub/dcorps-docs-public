# Hub FAQ

**Document type**: FAQ  
**Doc ID**: DCHUB-FAQ-2025-12-21  
**Version**: v1.3.1  
**Status**: Final v1.3.1  
**Release date**: December 21, 2025  
**Source repo**: dcorps-docs-public ([docs/whitepaper/FAQ.md](/whitepaper/FAQ))  
**Publishing date**: 2025-12-24  
**Last updated**: 2025-12-24  

---

## Disclaimer

Nothing in this document is investment, legal, tax, or accounting advice. Nothing in this document is an offer to sell, or a solicitation of an offer to buy, any token, share, or security.

---

## What is dCorps?

dCorps is a digitally native base layer for corporations and nonprofit organizations. It provides a shared standard where entities can be created, owned or governed, and operated on-chain, with a verifiable record of authority and standardized accounting events.

See [docs/whitepaper/EXECUTIVE_SUMMARY.md](/whitepaper/EXECUTIVE_SUMMARY) and [docs/whitepaper/WHITEPAPER.md](/whitepaper/WHITEPAPER).

---

## Is dCorps a bank, broker, exchange, or custodial service?

No. dCorps is infrastructure. It does not custody funds and it does not provide bank rails, brokerage, exchange services, or fundraising platforms.

---

## Does dCorps create legal corporations or nonprofits?

dCorps creates digitally native on-chain entities (Hub corporations and Hub nonprofits). Legal personhood, limited liability, filings, and enforcement remain off-chain and jurisdiction-dependent.

Optional jurisdiction adapter modules may support recognition workflows, but legal effect comes from local law and contracts that reference those workflows.

---

## What is a “Hub entity”?

A Hub entity is an on-chain organizational object registered on the dCorps Hub, with:

- a stable entity identifier;
- roles and authority bindings;
- governance actions and an auditable history; and
- canonical wallets and accounting primitives.

---

## What is the difference between a Hub corporation and a Hub nonprofit?

Both are complete on-chain entity containers, but they differ in governance and transparency posture:

- Hub corporations use an internal unit-based cap table and role-based governance.
- Hub nonprofits use board governance and publish donor-relevant transparency views (allocation reporting) with a minimum transparency floor.

---

## What is DCHUB?

DCHUB is the Hub’s native token used for gas, staking (economic security), and protocol governance. It does not represent ownership in user entities, the development corporation, or the foundation.

See [docs/token/TOKEN-POLICY.md](/token/TOKEN-POLICY).

---

## What are Hub units?

Hub units are internal units of a Hub corporation. They represent economic and voting rights inside that corporation and are scoped to that entity. They are not global protocol tokens.

---

## What is “cash-based operating reporting”?

Cash-based operating reporting is a period summary derived from tagged inflow and outflow events through canonical wallets, excluding accrual accounting treatments. It is designed for operational clarity and comparability. It is not a GAAP/IFRS financial statement.

---

## How does nonprofit allocation reporting work?

A nonprofit allocation report is a reproducible cash-based period view derived from tagged accounting events and the nonprofit’s allocation rules. It is designed to be meaningful for donors while allowing selective disclosure patterns for sensitive details where needed.

---

## What is evidence anchoring?

Evidence anchoring is the practice of anchoring a document hash (for example, an invoice, receipt, agreement, minutes, or policy document) on-chain. Accounting events and governance actions can then reference that anchor so that third parties can verify that a document matches the anchored commitment.

---

## What are protocol modules?

Protocol modules are optional on-chain extensions that attach to, read, and write Hub entity state under explicit rules. Examples include jurisdiction adapter modules, sector frameworks, and attestation modules.

Modules can publish derived interpretations but must not redefine kernel semantics or rewrite history.

See [docs/spec/SPEC-MODULES.md](/spec/SPEC-MODULES).

---

## What is a jurisdiction adapter module?

A jurisdiction adapter module is a protocol module encoding how a specific jurisdiction treats certain dCorps entities, including recognition workflows, fees, and reporting expectations. It is optional. Entities can operate without adapters.

---

## Does dCorps provide privacy?

Privacy is not assumed by default. Confidentiality exists only when an entity uses privacy-preserving execution or disclosure tools. Interfaces should clearly label what is raw on-chain data, what is aggregate, and what is a claim supported by attestations.

---

## What is in scope for v1?

v1 is intentionally narrow: a stable Hub kernel that can host complete Hub corporations and Hub nonprofits, run stablecoin operations through tagged accounting events, and produce reproducible period reporting views.

See [docs/whitepaper/LITEPAPER.md](/whitepaper/LITEPAPER) and [docs/whitepaper/WHITEPAPER.md](/whitepaper/WHITEPAPER).

---

## Where are the specs and technical details?

Normative specifications live in [docs/spec/](/spec), including:

- [docs/spec/SPEC-CORE.md](/spec/SPEC-CORE)
- [docs/spec/SPEC-DATA.md](/spec/SPEC-DATA)
- [docs/spec/SPEC-MODULES.md](/spec/SPEC-MODULES)
- [docs/spec/SPEC-ANCHOR.md](/spec/SPEC-ANCHOR)
- [docs/spec/SPEC-PARAMS.md](/spec/SPEC-PARAMS)
- [docs/spec/SPEC-INDEXER.md](/spec/SPEC-INDEXER)

For a technical overview, see [docs/engineering/TECHNICAL_OVERVIEW.md](/engineering/TECHNICAL_OVERVIEW).

---

## What are the main risks?

Key risks include technical risks (software bugs), governance risks, stablecoin issuer and rail risks, bridge and cross-chain risks, third-party application risks, and regulatory/jurisdiction risks.

See [docs/legal/RISK_DISCLOSURE.md](/legal/RISK_DISCLOSURE).
