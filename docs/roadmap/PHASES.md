# Roadmap Phases and Exit Criteria

**Document type**: Roadmap  
**Doc ID**: ROADMAP-PHASES  
**Status**: Final v0.1  
**Source repo**: dcorps-docs (`docs/roadmap/PHASES.md`)

> Scope: Define phase goals and exit criteria based on the Master Reference (section 16). Phases 1 to 5 start at mainnet launch. Phase 0 is the pre-mainnet readiness track.

---

## Phase 0 - Pre-mainnet readiness (public artifacts and testnet)

Objective: publish verifiable artifacts and run a public testnet so readiness can be assessed without private access.

Key deliverables:

- Hub chain source code and build instructions.
- Protocol specs and module standards (`docs/spec/*`).
- Public testnet with published chain ID, genesis file, and validator onboarding steps.
- Reproducible tooling for nodes, indexers, and reporting views.
- Public example entity package on testnet (corporation + nonprofit) with tagged events, anchors, and derived reports.
- Audit scope and reports for core modules and reference tooling.
- Bug bounty program with disclosure workflow.
- Governance and validator charters plus Treasury policy (`docs/policy/*`).

Exit criteria:

- Third parties can reproduce entity views and reporting outputs from raw chain data.
- At least one upgrade rehearsal is executed on testnet.
- Security and governance artifacts are published and verifiable.

---

## Phase 1 - Mainnet launch (Kernel v1)

Objective: launch a stable Hub that can host complete Hub corporations and Hub nonprofits as the default entity containers.

Key deliverables:

- Hub chain genesis, validator set, and runtime stability.
- DCHUB gas, staking, and governance primitives.
- Entity registry with IDs, types, metadata, and lifecycle status.
- Hub corporation module v1 and Hub nonprofit module v1.
- Canonical wallets and tagged accounting event schemas.
- Document anchoring and evidence timelines.
- Reference explorer and indexer for entity discovery and event timelines.

Exit criteria:

- Core modules audited and deployed with reproducible builds.
- Upgrade process and on-chain governance path tested in controlled upgrades.
- Real entities can register, operate, and produce reproducible reports using only the Hub.

---

## Phase 2 - Operational completeness and standards hardening

Objective: make the Hub reliable enough that external builders can treat it as infrastructure, not an experiment.

Key deliverables:

- Conformance test suite for entity modules, schemas, and indexing compatibility.
- Stable APIs and SDKs for core operations.
- Monitoring, alerting, and incident processes for validators and core services.
- Bug bounty expansion and formalized threat models for the kernel.
- UX primitives such as fee grants that allow stablecoin service fees while execution uses DCHUB.

Exit criteria:

- Independent builders can integrate against published schemas and pass conformance tests.
- A first cohort of entities operates end to end on mainnet with real value flows.

---

## Phase 3 - Ecosystem bootstrapping and stablecoin rails

Objective: make the Hub easy to use for real organizations and easy to integrate for service providers.

Key deliverables:

- IBC stablecoin connectivity and standard treasury patterns.
- App and module registry with metadata, versioning, and security posture disclosures.
- Reference templates for common entity setups.
- Indexer redundancy and data availability patterns.
- Reference governance UI and reporting UI to reduce integration friction.

Exit criteria:

- Multiple independent applications and service providers operate in production.
- Stablecoin operations work reliably across inflows, approvals, payouts, and reporting.

---

## Phase 4 - Adapter layer and institutional legibility

Objective: enable optional external integration without making external systems a kernel dependency.

Key deliverables:

- Jurisdiction adapter framework (schemas, proofs, and reference workflows).
- Institutional reporting modules derived from standardized events and anchors.
- Attestation modules and selective disclosure patterns.
- Nonprofit overlays such as donation receipt workflows and sponsorship frameworks.

Exit criteria:

- At least one high quality adapter demonstrates external recognition while leaving the kernel unchanged.
- Entities can remain Hub-native or attach adapters without any mandatory graduation path.

---

## Phase 5 - Fully operational maturity

Objective: reach a state where the Hub is a long-lived, self-sustaining public utility.

Key deliverables:

- Decentralized validator set and governance participation.
- Multiple independent indexers and reference implementations.
- Predictable upgrade cadence and mature incident processes.
- Sustainable foundation processes for standards, audits, and ecosystem support.

Exit criteria:

- No single organization is required for the Hub to operate and evolve safely.
- Entity creation and operation are routine with predictable costs and semantics.

---

## Optional future phase - Advanced execution environments

Sub chains, specialized privacy execution, and public instrument models are explored only if real adoption proves they are needed and kernel invariants remain intact.
