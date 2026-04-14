# Phases

**Document type**: Roadmap  
**Doc ID**: ROADMAP-PHASES  
**Status**: Draft v0.2  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/roadmap/PHASES.md](/roadmap/PHASES))  
**Last updated**: 2026-04-11

> Scope: define the post-reset build sequence. This roadmap replaces the "static site first" posture with an app-first, proof-driven sequence centered on a live chain, a live app, and a reproducible indexer.

---

## Phase 0 - Live proof of concept

Objective: ship the first narrow workflow end-to-end on a real local stack.

Key deliverables:

- local Orbit devnet;
- minimal kernel contracts;
- PostgreSQL-backed indexer;
- canonical app surface for entity creation, roles, wallets, accounting events, and anchors;
- deterministic reset flow and config bundle export.

What is intentionally out of scope here:

- separate explorer product;
- separate registry product;
- broad multilingual website work;
- public token financing;
- module marketplace breadth.

Exit criteria:

- a developer can create an entity, assign authority, bind wallets, record events, anchor evidence, and see the result in the app;
- the same flow works after a reset without manual data repair;
- chain, indexer, and app versions are pinned and reproducible.

---

## Phase 1 - Shared devnet and internal hardening

Objective: turn the local proof into a stable shared environment for weekly demos and internal use.

Key deliverables:

- hosted shared devnet;
- backups, snapshots, logs, metrics, and alerts;
- stable URLs for chain, app, and indexer;
- seeded example entities and sample data;
- operator notes and reset procedure.

Exit criteria:

- the internal team can run the full workflow repeatedly without rebuilding the environment by hand;
- the system survives resets and version upgrades with documented steps;
- the app is now the canonical public-facing product surface.

---

## Phase 2 - Partner testnet

Objective: validate the workflow with a small number of real design partners before any public launch narrative.

Key deliverables:

- gated partner testnet;
- published config bundle and partner onboarding docs;
- support process for selected users;
- first reproducible period views from live testnet data;
- first external feedback loop on role model, wallet model, and reporting semantics.

Exit criteria:

- at least 3 design partners complete the core workflow;
- the indexer-derived views are reproducible from raw chain data;
- product gaps are understood well enough to decide whether a genesis path is justified.

---

## Phase 3 - Genesis rehearsal

Objective: rehearse mainnet before making a mainnet decision.

Key deliverables:

- frozen deployment manifests;
- genesis construction and verification tooling;
- multisig and timelock ownership model;
- token and treasury configuration draft;
- upgrade rehearsal;
- incident and rollback runbooks.

Exit criteria:

- full dry-run from genesis package to running network is repeatable;
- at least one upgrade rehearsal succeeds;
- token and governance configuration are based on real operational assumptions, not narrative placeholders.

---

## Phase 4 - Mainnet launch (Kernel v1)

Objective: launch the smallest credible public version of dCorps.

Key deliverables:

- mainnet chain;
- audited or externally reviewed core contracts;
- canonical app, indexer, and public docs;
- entity registry, authority, wallets, accounting events, and anchors;
- incident response and monitoring posture.

Exit criteria:

- real entities can complete the narrow workflow on mainnet;
- the operator team can maintain the network without ad hoc heroics;
- the system is credible as infrastructure, not just as a demo.

---

## Phase 5 - Hardening and operator expansion

Objective: make the system safe enough for external builders and eventual operator growth.

Key deliverables:

- conformance tests;
- stable APIs and SDKs;
- stronger observability and backup posture;
- operator onboarding path;
- more explicit governance and treasury controls.

Exit criteria:

- external builders can integrate without private tribal knowledge;
- the network can support broader usage without founder-only operations.

---

## Phase 6 - Ecosystem extensions

Objective: add breadth only after the kernel and the narrow workflow are proven.

Candidate deliverables:

- invoices and recurring billing;
- module registry;
- registry and explorer specialization;
- jurisdiction or attestation adapters;
- broader stablecoin and treasury integrations.

Exit criteria:

- new scope expands real usage rather than compensating for weak core demand;
- additional surfaces do not compromise kernel simplicity.
