# Bridge Gateways

**Document type**: Interop notes  
**Doc ID**: INTEROP-BRIDGE  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/interop/BRIDGE_GATEWAYS.md](/interop/BRIDGE_GATEWAYS))  
**Last updated**: 2026-01-25

> Scope: Summarize how bridge gateways are used for stablecoin operations and cross-chain messaging between Ethereum and the dCorps Hub.

---

## Stablecoin routing

- The Hub is designed for stablecoin-native operations.
- USDC on Ethereum is the reference operating currency; on the Hub it is represented as a canonical bridged ERC-20 contract with a single canonical address recorded in the asset registry.
- Additional approved stablecoins may be added over time through governance and the asset registry process.

---

## Bridge posture

- The canonical Ethereum <-> dCorps bridge gateways are the primary interoperability surface for assets and messages.
- The Hub does not make any single external bridge a dependency of kernel truth; core entity registry state remains correct even if a bridged asset fails.
- Bridge interactions are asynchronous and subject to finality and challenge windows; interfaces should surface a first-class "pending bridge" state.

---

## Operations and monitoring

- Bridge gateway operations and monitoring requirements are defined in [docs/devops/BRIDGE_OPERATIONS.md](/devops/BRIDGE_OPERATIONS).
- Bridge outage recovery guidance is in [docs/devops/RUNBOOK-BRIDGE.md](/devops/RUNBOOK-BRIDGE).
- Public endpoints and gateway addresses are published per environment; do not hardcode them in code.

---

## Open items

- Final gateway addresses and admin roles are published per environment release notes.
- Challenge window assumptions and withdrawal timings are documented in environment-specific configs.
- Additional bridge integrations (if any) are treated as optional and high risk, with explicit disclosure of assumptions and controls.
