# Chain Layout

**Document type**: Engineering plan  
**Doc ID**: ENG-CHAIN-LAYOUT  
**Status**: Final v0.2  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/engineering/CHAIN_LAYOUT.md](/engineering/CHAIN_LAYOUT))  
**Last updated**: 2026-02-04

> Scope: Canonical repository layout and module boundaries for the Hub rollup implementation.

---

## 1. Chain repository

- Repo name: `dcorps-hub-rollup`.
- Execution environment: Arbitrum Orbit (Rollup mode) with EVM contracts.
- Contract language: Solidity (with optional Vyper where justified).

---

## 2. Top-level layout (illustrative)

```text
dcorps-hub-rollup/
  contracts/
    entity/
    accounting/
    registry/
    modules/
  interfaces/
  scripts/
  deployments/
  config/
  docs/
  tests/
```

---

## 3. Core contracts

- `contracts/entity`
  - Entity registry, lifecycle status, and metadata.
  - Role bindings and authority checks.
  - Canonical wallet bindings.
  - Document anchors (evidence hashes).
- `contracts/accounting`
  - Tagged accounting events.
  - Event validation against tag catalogs.
  - Time-window view indexes (lightweight and indexer-friendly).
- `contracts/registry`
  - Module registry and lifecycle.
  - Module attachment records for entities.
  - Asset registry and canonical token identifiers.
  - Bridge gateway references and status signals.

---

## 4. Interface definitions

- Typed events and ABI interfaces for:
  - entity registry actions;
  - role bindings and governance actions;
  - accounting events and anchors;
  - module registry and attachments.

---

## 5. Build and release tooling

- `forge` or `hardhat` for contract builds and tests.
- reproducible build scripts and deterministic deployment manifests.
- timelocked upgrade procedures and versioned deployment artifacts.
