# Glossary

**Document type**: Glossary  
**Doc ID**: DCHUB-GLOSSARY-2025-12-21  
**Version**: v1.3.1  
**Status**: Final v1.3.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/whitepaper/GLOSSARY.md](/whitepaper/GLOSSARY))  
**Last updated**: 2026-01-26

---

## Selected glossary

**dCorps**  
The protocol and ecosystem described in the dCorps documentation; a digitally native base layer for entities.

**dCorps Hub**  
The platform and coordination layer for entities, governance, templates, and shared standards. The Hub runs on dCorps Chain and anchors canonical entity state.

**dCorps Chain / Hub chain**  
The Arbitrum Orbit rollup (Rollup mode) that executes Hub transactions, runs DCHUB, and settles to Ethereum. Sometimes called the Hub chain in technical contexts.

**Hub entity**  
An entity that operates directly on the Hub (Hub corporation or Hub nonprofit).

**Entity ID**  
A stable, globally unique identifier for an entity registered on the Hub.

**Hub corporation**  
A corporation operating on the Hub, with an internal unit-based cap table, role-based governance, and standardized accounting primitives.

**Hub nonprofit**  
A nonprofit/NGO entity operating on the Hub, with board governance, donation/program flows, and reproducible allocation reporting.

**Hub units**  
Internal units of a Hub corporation that represent economic and voting rights inside that corporation. Scoped to that entity. Default base unit count is 10,000 (1 unit = 0.01 percent), expandable in multiples of 10,000; v0.1 templates recommend a practical maximum of 1,000,000 base units for interoperability and UI performance.

**DCHUB**  
The Hub’s native token used for gas, protocol governance, and protocol-level fees. Not equity in user entities or in the development corporation or foundation.

**USDC**  
The baseline unit of account for examples and the primary operating currency for many entities and protocol service fees (canonical bridged USDC at launch).

**Canonical wallet**  
A designated on-chain address (or address set) associated with an entity for specific purposes (for example merchant, donation, program, operating treasury, reserves).

**Tagged accounting event**  
An on-chain event or transaction output annotated with categories and tags per dCorps data standards, enabling reproducible reporting views.

**Category (chart of accounts)**  
A standardized code used to tag inflows and outflows for comparability in reporting views. Entities may extend categories when extensions map to the minimal standard.

**cash-based operating reporting**  
Time-window summaries derived from tagged inflow and outflow events through canonical wallets, excluding accrual accounting treatments.

**Nonprofit allocation reporting**  
A reproducible cash-based time-window view derived from tagged accounting events and the nonprofit’s allocation rules.

**Evidence anchoring**  
Anchoring a document hash on-chain (for example invoices, receipts, agreements, minutes, policies) so accounting events and governance actions can reference verifiable commitments.

**Protocol module**  
Optional on-chain logic that attaches to, reads, and writes Hub entity state under explicit rules. Includes jurisdiction adapter modules, sector frameworks, and attestation modules.

**Jurisdiction adapter module**  
A protocol module encoding how a specific jurisdiction treats certain dCorps entities, including recognition workflows, fees, and reporting expectations.

**Sector framework**  
A protocol module defining metrics and standards for a domain such as climate, education, or public health, derived from kernel state.

**Attestation**  
A signed statement or signal produced by an entity or third-party about facts or reconciliation claims, published through optional modules.

**Bridge gateway**  
Canonical contracts that move assets between Ethereum and the Hub.

**Protocol governance**  
On-chain governance processes that control protocol upgrades, parameters, module registry status, and related decisions.

**Protected Change**  
A class of high-impact protocol change intended to require higher thresholds and additional safety mechanisms (for example voting-power age and execution timelocks).

**Protocol Treasury**  
The pool of assets governed by the protocol and related policy frameworks for long-term development, security, and ecosystem support.

**dCorps foundation**  
The intended nonprofit steward of public goods (standards, reference tooling, conformance tests, ecosystem programs) under defined policy boundaries.
