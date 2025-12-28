# Overview

**Document type**: Project overview  
**Doc ID**: DOCS-OVERVIEW  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/welcome/OVERVIEW.md](/welcome/OVERVIEW))  
**Last updated**: 2025-12-24  

> Scope: Quick orientation to what dCorps is, who it serves, and how the system is organized.

---

## What dCorps is

dCorps is a project to build a Cosmos-based Hub chain that treats corporations and nonprofits as first-class objects. It is designed to provide a neutral registry, standardized entity models, and a consistent way to observe ownership, governance, and financial flows over time.

The Hub is intentionally minimal. Jurisdiction rules, sector frameworks, and user interfaces live in modules and applications that sit on top of the Hub.

Current status: Phase 0A (development). Mainnet is not live, on-chain governance is not active yet, and the foundation has not been incorporated.

---

## Who it is for

- Founders and corporations that need clear ownership and verifiable governance.
- Nonprofits and NGOs that want donor-grade transparency for donations and programs.
- Protocols and DAOs that have outgrown ad hoc governance and multisigs.
- Jurisdictions and regulators that need machine-readable records instead of paper-only registries.
- Builders and auditors that want standard schemas and predictable primitives.

---

## System layers

1. **Hub**: the base chain with the entity registry, governance, and accounting primitives.
2. **Entities**: Hub corporations and Hub nonprofits, plus optional sub chain corporations.
3. **Protocol modules**: on-chain modules that read Hub state and output status, metrics, or signals.
4. **Applications**: wallets, explorers, dashboards, and tooling built on top of the Hub.
5. **Sub chains** (optional): execution environments that anchor summaries back to the Hub.

---

## Core primitives

- Entity registry and lifecycle status.
- Roles and governance actions.
- Canonical wallets and tagged accounting events.
- Module registry and sub chain registry.
- Anchors for documents and summarized external state.

Normative rules for these primitives live in [docs/spec/INDEX.md](/spec/INDEX).

---

## Currency and protocol token

- **USDC (and other approved stablecoins)**: primary operating currency for entities.
- **DCHUB**: gas, staking, and protocol governance for the Hub and recognized sub chains.

USDC on the Hub is typically represented as an IBC denom tracing back to Noble's `uusdc`.

---

## Governance and institutions

Design intention (once mainnet is live):

- DCHUB holders vote on protocol upgrades and parameters.
- Validators and delegators secure the chain.
- A protocol council may review upgrades and module proposals.
- A foundation is intended to steward public goods over time (not incorporated yet).
- DevCo is intended to deliver protocol and tooling work as a service provider (planned: dCorps Development Company (BVI), “dCorps Dev”; incorporation pending).
- ResCo supports research and publication work (dCorps Research LLC (Wyoming)).

See [docs/policy/POL-GOV.md](/policy/POL-GOV), [docs/policy/POL-GOV-TRANSITION.md](/policy/POL-GOV-TRANSITION), and [docs/policy/POL-FOUNDATION.md](/policy/POL-FOUNDATION).

---

## Where to go next

- Docs center welcome: [docs/welcome/INDEX.md](/welcome/INDEX)
- Whitepaper Long: [docs/whitepaper/WHITEPAPER_LONG.md](/whitepaper/WHITEPAPER_LONG)
- Specs: [docs/spec/INDEX.md](/spec/INDEX)
- Roadmap: [docs/roadmap/INDEX.md](/roadmap/INDEX)
