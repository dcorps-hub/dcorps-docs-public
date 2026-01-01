# Cosmos Environment

**Document type**: DevOps guide  
**Doc ID**: DEVOPS-COSMOS-ENV  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/devops/COSMOS_ENVIRONMENT.md](/devops/COSMOS_ENVIRONMENT))  
**Last updated**: 2026-01-01  

> Scope: Summarize what is required to stand up a Cosmos-based environment for the dCorps Hub.

---

## Assumptions from the Whitepaper Long

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
2. Assemble genesis allocations and vesting accounts (see [docs/token/TOKEN-GENESIS-PLAN.md](/token/TOKEN-GENESIS-PLAN)).
3. Define initial validator set for dev or staging.
4. Generate and validate the genesis file with reproducible scripts.
5. Publish checksums and verification steps.

---

## Network lifecycle

This lifecycle is intentionally split into **network stages** (what is happening) and **environment classes** (how strictly it is operated).

Network stages (design intention):

- **Baseline (local)**: developers iterate locally, publish specs, and validate reproducible build outputs.
- **Dev testnet (devnet)**: team-only chain for early integration; resets allowed; validator ops are exercised by a small, trusted set.
- **Public testnet**: published chain ID, genesis, and onboarding; open validator participation; upgrades and governance workflows are rehearsed in public.
- **Mainnet rehearsal testnet**: final pre-launch dress rehearsal with mainnet-like procedures (release candidates, genesis packaging, and coordinated validator start), while still resettable.
- **Genesis mainnet (TGE)**: mainnet launch and Token Generation Event; DCHUB supply becomes live at genesis and the production validator set begins signing.
- **Post-genesis**: stabilization, monitoring, and the first governed upgrades and operational budgets.

Environment classes (operational posture):

- **Dev**: fast iteration, best-effort uptime, resets expected.
- **Staging**: release candidates and upgrade rehearsals, configuration mirrors production, coordinated operator testing.
- **Prod**: mainnet, strict change control, full monitoring and incident response.

Audits and security gates:

- Audits should start as soon as the kernel and critical tooling are stable enough to review, and **critical/high findings are addressed before genesis** ([docs/security/AUDIT-PLAN.md](/security/AUDIT-PLAN)).
- Mainnet rehearsal is the point where audit reports, release artifacts, and runbooks should be in a publishable, verifiable state.

Validator participation:

- Validator onboarding follows [docs/devops/RUNBOOK-VALIDATORS.md](/devops/RUNBOOK-VALIDATORS) and expectations in [docs/policy/POL-VALIDATORS.md](/policy/POL-VALIDATORS).
- At least one upgrade rehearsal is expected before mainnet expectations ([docs/devops/RUNBOOK-UPGRADES.md](/devops/RUNBOOK-UPGRADES)).

---

## Decisions required

- Chain ID and network names: [docs/devops/NETWORK_PARAMS.md](/devops/NETWORK_PARAMS).
- Denom format and bech32 prefix: [docs/devops/NETWORK_PARAMS.md](/devops/NETWORK_PARAMS).
- Default parameter values: [docs/devops/NETWORK_PARAMS.md](/devops/NETWORK_PARAMS).
- Versioning and release cadence: [docs/devops/ENVIRONMENTS.md](/devops/ENVIRONMENTS).
- IBC channels and relayer requirements: [docs/devops/IBC_OPERATIONS.md](/devops/IBC_OPERATIONS).

---

## References

- [docs/spec/SPEC-CORE.md](/spec/SPEC-CORE)
- [docs/spec/SPEC-PARAMS.md](/spec/SPEC-PARAMS)
- [docs/spec/SPEC-ANCHOR.md](/spec/SPEC-ANCHOR)
- [docs/token/TOKEN-GENESIS-PLAN.md](/token/TOKEN-GENESIS-PLAN)
