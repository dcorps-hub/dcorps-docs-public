# Cosmos Environment Setup

**Document type**: DevOps guide  
**Doc ID**: DEVOPS-COSMOS-ENV  
**Status**: Final v0.1  
**Source repo**: dcorps-docs-public (`docs/devops/COSMOS_ENVIRONMENT.md`)

> Scope: Summarize what is required to stand up a Cosmos-based environment for the dCorps Hub.

---

## Assumptions from the Master Reference

- The Hub is a Cosmos-based Layer 1 chain.
- DCHUB is the native token for gas, staking, and governance.
- Entities operate primarily in stablecoins (USDC on Noble via IBC is the baseline).
- IBC is used for interchain stablecoin routing.
- Sub chains are optional and anchor summaries back to the Hub.

---

## Core components

Minimum components to operate a network:

- Full nodes for the Hub.
- Validator nodes for consensus participation.
- RPC, gRPC, and REST endpoints.
- Faucet or funding mechanism for dev and staging.
- Indexer and explorer services.
- Relayers for IBC channels (when enabled).

---

## Genesis workflow (high level)

1. Define chain ID, denom, bech32 prefix, and initial parameters.
2. Assemble genesis allocations and vesting accounts (see `docs/token/TOKEN-GENESIS-PLAN.md`).
3. Define initial validator set for dev or staging.
4. Generate and validate the genesis file with reproducible scripts.
5. Publish checksums and verification steps.

---

## Network lifecycle

- Dev: rapid iteration and resets allowed.
- Staging: upgrade rehearsals and release candidates.
- Prod: formal change control and governance-aligned upgrades.

---

## Decisions required

- Chain ID and network names: `docs/devops/NETWORK_PARAMS.md`.
- Denom format and bech32 prefix: `docs/devops/NETWORK_PARAMS.md`.
- Default parameter values: `docs/devops/NETWORK_PARAMS.md`.
- Versioning and release cadence: `docs/devops/ENVIRONMENTS.md`.
- IBC channels and relayer requirements: `docs/devops/IBC_OPERATIONS.md`.

---

## References

- `docs/spec/SPEC-CORE.md`
- `docs/spec/SPEC-PARAMS.md`
- `docs/spec/SPEC-ANCHOR.md`
- `docs/token/TOKEN-GENESIS-PLAN.md`
