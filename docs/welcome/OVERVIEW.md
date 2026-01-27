# Overview

**Document type**: Project overview  
**Doc ID**: DOCS-OVERVIEW  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/welcome/OVERVIEW.md](/welcome/OVERVIEW))  
**Last updated**: 2026-01-26

> Scope: Quick orientation to what dCorps is, who it serves, and how the system is organized.

---

## What dCorps is

dCorps is a project to build the dCorps Hub, a platform that runs on dCorps Chain—an Arbitrum Orbit rollup (Rollup mode) that treats corporations and nonprofits as first-class objects and settles to Ethereum. It is designed to provide a neutral registry, standardized entity models, and a consistent way to observe ownership, governance, and financial flows over time.

The Hub is intentionally minimal. Jurisdiction rules, sector frameworks, and user interfaces live in modules and applications that sit on top of the Hub.

Current status: Phase 0A (development). Mainnet is not live, on-chain governance is not active yet, and the foundation has not been incorporated.

---

## Who it is for

- Founders and corporations that need clear ownership and verifiable governance.
- Nonprofits and NGOs that want donor-grade transparency for donations and programs.
- Protocols and DAOs that have outgrown ad hoc governance and multisigs.
- Jurisdictions and regulators that need machine-readable records instead of paper registries and private databases.
- Builders and auditors that want standard schemas and predictable primitives.

---

## System layers

1. **dCorps Hub**: the platform layer with the entity registry, governance, and accounting primitives.
2. **dCorps Chain**: the Arbitrum Orbit rollup execution layer that hosts Hub state and settles to Ethereum.
3. **Entities**: Hub corporations and Hub nonprofits, with optional adapters and modules.
4. **Protocol modules**: on-chain modules that read Hub state and output status, metrics, or signals.
5. **Applications**: wallets, explorers, dashboards, and tooling built on top of the Hub.
6. **External execution layers (future)**: specialized environments that may anchor summaries back to the Hub under explicit rules.

---

## Core primitives

- Entity registry and lifecycle status.
- Roles and governance actions.
- Canonical wallets and tagged accounting events.
- Module registry and asset registry.
- Anchors for documents and summarized external state.

Normative rules for these primitives live in [docs/spec/INDEX.md](/spec/INDEX).

---

## Privacy, disclosure, and lifecycle

Transparency is the default, but entities can choose how much detail to publish. Each entity declares a disclosure mode (Mode A, B, or C) as public metadata that tells interfaces whether data is fully public, aggregated, or anchored with privacy-preserving proofs.

Confidentiality exists only when privacy tools are used. The entity registry also records lifecycle status (draft, active, suspended, or dissolved) so counterparties can see standing at a glance.

---

## Currency and protocol token

- **USDC (and other approved stablecoins)**: primary operating currency for entities.
- **DCHUB**: gas and protocol governance for the Hub rollup, and protocol-level fees where enabled.

USDC on the Hub is represented as a canonical bridged ERC-20 contract from Ethereum; there is a single canonical contract address recorded in the asset registry.

---

## Governance and institutions

Design intention (once mainnet is live):

- DCHUB holders vote on protocol upgrades and parameters.
- Rollup operators (sequencer and batch poster) provide ordering and data posting under governance-defined policies.
- A protocol council may review upgrades and module proposals.
- A foundation is intended to steward public goods over time (not incorporated yet).
- DevCo delivers protocol and tooling work as a service provider (legal entity: dCorps Development Ltd.; jurisdiction: British Virgin Islands (BVI); incorporated; active).
- ResCo is intended to focus on protocol adoption research and integration planning (planned legal entity, design intention: dCorps Research LLC; intended jurisdiction: Wyoming (USA); incorporation pending).

See [docs/policy/POL-GOV.md](/policy/POL-GOV), [docs/policy/POL-GOV-TRANSITION.md](/policy/POL-GOV-TRANSITION), and [docs/policy/POL-FOUNDATION.md](/policy/POL-FOUNDATION).

---

## Where to go next

- Docs center welcome: [docs/welcome/INDEX.md](/welcome/INDEX)
- Whitepaper Long: [docs/whitepaper/WHITEPAPER_LONG.md](/whitepaper/WHITEPAPER_LONG)
- Specs: [docs/spec/INDEX.md](/spec/INDEX)
- Roadmap: [docs/roadmap/INDEX.md](/roadmap/INDEX)
