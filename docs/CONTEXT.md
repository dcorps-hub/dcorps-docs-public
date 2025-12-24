# dCorps Context Snapshot

**Document type**: Context summary  
**Doc ID**: DOCS-CONTEXT  
**Status**: Final v0.1  
**Source repo**: dcorps-docs-public (`docs/CONTEXT.md`)

> Scope: One-page summary of what dCorps is, who it is for, and how the system is organized.

---

## What dCorps is

dCorps is a Cosmos-based Hub chain that treats corporations and nonprofits as first class objects. It provides a neutral registry, standardized entity models, and a consistent way to observe ownership, governance, and financial flows over time.

The Hub is intentionally minimal. Jurisdiction rules, sector frameworks, and user interfaces live in modules and applications that sit on top of the Hub.

---

## Who it is for

- Founders and corporations that need clear ownership and verifiable governance.
- Nonprofits and NGOs that want donor-grade transparency for donations and programs.
- Protocols and DAOs that have outgrown ad hoc governance and multisigs.
- Jurisdictions and regulators that need machine-readable records instead of paper-only registries.
- Builders and auditors that want standard schemas and predictable primitives.

---

## Architecture layers

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

Normative rules for these primitives live in `docs/spec/*`.

---

## Operating currency vs protocol token

- **USDC (and other approved stablecoins)**: primary operating currency for entities.
- **DCHUB**: gas, staking, and protocol governance for the Hub and recognized sub chains.

USDC on the Hub is typically represented as an IBC denom tracing back to Noble's `uusdc`.

---

## Governance and institutions

- DCHUB holders vote on protocol upgrades and parameters.
- Validators and delegators secure the chain.
- A protocol council may review upgrades and module proposals.
- A foundation is intended to steward the protocol and registry in later phases.
- An independent development company builds and supports reference tooling.

See `docs/policy/POL-GOV.md` and `docs/policy/POL-FOUNDATION.md`.

---

## Where to go next

- Public overview: `docs/public/INDEX.md`
- Master reference: `docs/master/DCHUB_MASTER.md`
- Specs: `docs/spec/INDEX.md`
- Roadmap: `docs/roadmap/INDEX.md`
