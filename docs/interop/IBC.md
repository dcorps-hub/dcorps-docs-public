# IBC

**Document type**: Interop notes  
**Doc ID**: INTEROP-IBC  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/interop/IBC.md](/interop/IBC))  
**Last updated**: 2025-12-24  

> Scope: Summarize how interchain connections are expected to be used for stablecoin operations and optional sub chains.

---

## Stablecoin routing

- The Hub is designed for stablecoin-native operations.
- USDC on Noble is the reference stablecoin; on the Hub it typically appears as an IBC denom tracing to Noble's `uusdc`.
- Additional approved stablecoins may be added over time through governance and the asset registry process.

---

## Interchain posture

- IBC is the open standard for stablecoin routing and cross-chain communication.
- The Hub should not make any single bridge a dependency of kernel truth.
- Some flows may use interchain accounts or relayers where supported; these are implementation details.

---

## Sub chains and anchoring

- Sub chains are optional and must anchor summaries to the Hub to be considered recognized.
- Recognition tiers and anchoring rules are defined in [docs/spec/SPEC-ANCHOR.md](/spec/SPEC-ANCHOR).

---

## Open items

- Port is `transfer`. Channel IDs are assigned during IBC handshake and are published in environment release notes.
- Relayer requirements and monitoring are defined in [docs/devops/IBC_OPERATIONS.md](/devops/IBC_OPERATIONS).
- Public endpoints are published per environment; do not hardcode them in code.
