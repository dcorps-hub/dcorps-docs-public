# Cosmos Base

**Document type**: Engineering notes  
**Doc ID**: ENG-COSMOS-BASE  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/engineering/COSMOS_BASE.md](/engineering/COSMOS_BASE))  
**Last updated**: 2025-12-24  

> Scope: Summarize base-layer assumptions and constraints for the Hub chain.

---

## Known foundations

- The Hub is a Cosmos-based Layer 1 chain that serves as a neutral entity registry and coordination layer.
- DCHUB is the native token used for gas, staking, and protocol governance.
- Entities operate primarily in stablecoins; USDC on Noble via IBC is the baseline operating currency.
- IBC is used for interchain stablecoin routing; no single bridge is a dependency of kernel truth.
- Sub chains are optional; when used, they anchor summaries to the Hub and receive explicit recognition labels.

---

## Operating currency and denom conventions

- Examples may use `uusdc` for readability.
- Real balances may appear as IBC denoms tracing back to Noble's `uusdc`.
- Protocol service fees may be denominated in USDC while gas is paid in DCHUB.

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

- Chain ID, bech32 prefix, and baseline parameters: [docs/devops/NETWORK_PARAMS.md](/devops/NETWORK_PARAMS).
- Protobuf message definitions and gRPC/REST endpoints: [docs/engineering/API_SURFACES.md](/engineering/API_SURFACES).
- Reference node configuration and upgrade procedures: [docs/devops/RUNBOOKS.md](/devops/RUNBOOKS).
