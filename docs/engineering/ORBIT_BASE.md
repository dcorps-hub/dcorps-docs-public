# Orbit Base

**Document type**: Engineering notes  
**Doc ID**: ENG-ORBIT-BASE  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/engineering/ORBIT_BASE.md](/engineering/ORBIT_BASE))  
**Last updated**: 2026-01-25

> Scope: Summarize base-layer assumptions and constraints for the Hub rollup.

---

## Known foundations

- The Hub is an Arbitrum Orbit rollup (Rollup mode) that serves as a neutral entity registry and coordination layer, settling to Ethereum.
- DCHUB is the native token used for gas and protocol governance, and for protocol-level fees where enabled.
- Entities operate primarily in stablecoins; USDC on Ethereum bridged to the Hub is the baseline operating currency.
- Canonical bridge gateways are the primary interoperability surface; no single external bridge is a dependency of kernel truth.
- Optional modules extend the Hub; private execution zones are out of scope for Orbit v1.

---

## Operating currency and asset conventions

- Stablecoins on the Hub are canonical bridged ERC-20 contracts from Ethereum with a single canonical address recorded in the asset registry.
- Reference interfaces should use mainstream symbols (USDC, USDT, DAI) and disclose bridge and issuer risk.
- Protocol-level fees are DCHUB-denominated; applications may sponsor fees or charge separate off-protocol service fees in stablecoins.

---

## Where the canonical rules live

- Core behavior: [docs/spec/SPEC-CORE.md](/spec/SPEC-CORE)
- Data and schemas: [docs/spec/SPEC-DATA.md](/spec/SPEC-DATA)
- Anchoring: [docs/spec/SPEC-ANCHOR.md](/spec/SPEC-ANCHOR)
- Modules: [docs/spec/SPEC-MODULES.md](/spec/SPEC-MODULES)
- Parameters: [docs/spec/SPEC-PARAMS.md](/spec/SPEC-PARAMS)

---

## Stack decisions

Baseline implementation stack choices are recorded in [docs/engineering/STACK.md](/engineering/STACK).

---

## Open implementation details (to be defined in code repos)

- Chain ID, rollup contract addresses, and base fee parameters: [docs/devops/NETWORK_PARAMS.md](/devops/NETWORK_PARAMS).
- JSON-RPC endpoints and indexer event schema references: [docs/engineering/API_SURFACES.md](/engineering/API_SURFACES).
- Reference node configuration, operator procedures, and upgrade runbooks: [docs/devops/RUNBOOKS.md](/devops/RUNBOOKS).
