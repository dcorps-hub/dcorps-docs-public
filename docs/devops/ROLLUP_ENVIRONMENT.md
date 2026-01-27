# Rollup Environment

**Document type**: DevOps guide  
**Doc ID**: DEVOPS-ROLLUP-ENV  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/devops/ROLLUP_ENVIRONMENT.md](/devops/ROLLUP_ENVIRONMENT))  
**Last updated**: 2026-01-25

> Scope: Summarize what is required to stand up an Arbitrum Orbit (Rollup mode) environment for the dCorps Hub.

---

## Assumptions from the Whitepaper Long

- The Hub is an Arbitrum Orbit rollup (Rollup mode) settling to Ethereum.
- DCHUB is the native gas token and protocol governance token.
- Entities operate primarily in stablecoins; at launch these are bridged from Ethereum.
- Bridge gateways provide cross-chain routing and canonical asset mappings.
- Sub chains are not part of v1 architecture.

---

## Core components

Minimum components to operate a network:

- Rollup node infrastructure (full nodes and RPC).
- Sequencer and batch poster services.
- Bridge gateways on L1 and L2, with monitoring services.
- Indexer and explorer services.
- Faucet or funding mechanism for dev and staging.
- Operational dashboards and alerting.

---

## Rollup deployment workflow (high level)

1. Define rollup chain ID, native gas token, and L1/L2 gateway addresses.
2. Assemble genesis allocations and vesting accounts (see [docs/token/TOKEN-GENESIS-PLAN.md](/token/TOKEN-GENESIS-PLAN)).
3. Configure sequencer and batch poster keys and infrastructure.
4. Publish chain parameters and configuration summaries for each environment.
5. Validate deployment artifacts and publish checksums.

---

## Network lifecycle

This lifecycle is intentionally split into **network stages** (what is happening) and **environment classes** (how strictly it is operated).

Network stages (design intention):

- **Baseline (local)**: developers iterate locally, publish specs, and validate reproducible build outputs.
- **Dev testnet (devnet)**: team-only rollup for early integration; resets allowed; operator ops are exercised by a small, trusted set.
- **Public testnet**: published chain ID, configuration, and onboarding; open integrations; upgrades and governance workflows rehearsed in public.
- **Mainnet rehearsal testnet**: final pre-launch dress rehearsal with mainnet-like procedures (release candidates, deployment packaging, and coordinated operator start), while still resettable.
- **Genesis mainnet (TGE)**: mainnet launch and Token Generation Event; DCHUB supply becomes live at genesis and production operators begin posting batches.
- **Post-genesis**: stabilization, monitoring, and the first governed upgrades and operational budgets.

Environment classes (operational posture):

- **Dev**: fast iteration, best-effort uptime, resets expected.
- **Staging**: release candidates and upgrade rehearsals, configuration mirrors production, coordinated operator testing.
- **Prod**: mainnet, strict change control, full monitoring and incident response.

Audits and security gates:

- Audits should start as soon as the kernel and critical tooling are stable enough to review, and **critical/high findings are addressed before mainnet** ([docs/security/AUDIT-PLAN.md](/security/AUDIT-PLAN)).
- Mainnet rehearsal is the point where audit reports, release artifacts, and runbooks should be in a publishable, verifiable state.

Operator participation:

- Operator onboarding follows [docs/devops/RUNBOOK-OPERATORS.md](/devops/RUNBOOK-OPERATORS) and expectations in [docs/policy/POL-OPERATORS.md](/policy/POL-OPERATORS).
- At least one upgrade rehearsal is expected before mainnet expectations ([docs/devops/RUNBOOK-UPGRADES.md](/devops/RUNBOOK-UPGRADES)).

---

## Decisions required

- Chain ID and network names: [docs/devops/NETWORK_PARAMS.md](/devops/NETWORK_PARAMS).
- Rollup configuration and gateway addresses: [docs/devops/NETWORK_PARAMS.md](/devops/NETWORK_PARAMS).
- Asset registry and canonical stablecoin mapping: [docs/devops/NETWORK_PARAMS.md](/devops/NETWORK_PARAMS).
- Versioning and release cadence: [docs/devops/ENVIRONMENTS.md](/devops/ENVIRONMENTS).
- Bridge gateway operations and monitoring: [docs/devops/BRIDGE_OPERATIONS.md](/devops/BRIDGE_OPERATIONS).

---

## References

- [docs/spec/SPEC-CORE.md](/spec/SPEC-CORE)
- [docs/spec/SPEC-PARAMS.md](/spec/SPEC-PARAMS)
- [docs/spec/SPEC-ANCHOR.md](/spec/SPEC-ANCHOR)
- [docs/token/TOKEN-GENESIS-PLAN.md](/token/TOKEN-GENESIS-PLAN)
