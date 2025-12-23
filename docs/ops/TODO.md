# dCorps Project Backlog

**Document type**: Operations backlog  
**Doc ID**: OPS-BACKLOG  
**Status**: Living  
**Source repo**: dcorps-docs (`docs/ops/TODO.md`)

> Scope: Canonical, detailed task list for the dCorps project. This replaces scattered TODOs in other repos.

Sequential ordering by phase is in `docs/ops/PHASED_PLAN.md`.

---

## How to use this backlog

- Each task has an ID, status, priority, phase, owner, and dependencies.
- Update status as work progresses.
- Use phases from `docs/roadmap/PHASES.md`.
- Keep only one source of truth for task status.

Status values:

- not-started
- in-progress
- blocked
- done

Priority values:

- P0 (critical)
- P1 (important)
- P2 (nice to have)

---

## Program and planning

- [x] PROG-001 | status: done | priority: P0 | phase: 0 | owner: docs | deps: - | Create master index and context docs.
- [x] PROG-002 | status: done | priority: P1 | phase: 0 | owner: docs | deps: - | Define update cadence for roadmap and backlog.
- [x] PROG-003 | status: done | priority: P1 | phase: 0 | owner: docs | deps: - | Define success metrics for each phase.
- [x] PROG-004 | status: done | priority: P1 | phase: 0 | owner: docs | deps: - | Update status section in `docs/roadmap/INDEX.md` with current phase.

---

## Protocol and chain implementation

- [ ] PROT-001 | status: not-started | priority: P0 | phase: 0 | owner: TBD | deps: - | Create chain code repository and link in `docs/REPOS.md`.
- [x] PROT-002 | status: done | priority: P0 | phase: 0 | owner: docs | deps: PROT-001 | Define chain ID, denom, bech32 prefix, and initial parameters.
- [ ] PROT-003 | status: not-started | priority: P0 | phase: 0 | owner: TBD | deps: PROT-001 | Implement entity registry state and lifecycle per `docs/spec/SPEC-CORE.md`.
- [ ] PROT-004 | status: not-started | priority: P0 | phase: 0 | owner: TBD | deps: PROT-001 | Implement role bindings and governance actions per `docs/spec/SPEC-CORE.md`.
- [ ] PROT-005 | status: not-started | priority: P0 | phase: 0 | owner: TBD | deps: PROT-001 | Implement canonical wallets and tagged events per `docs/spec/SPEC-DATA.md`.
- [ ] PROT-006 | status: not-started | priority: P0 | phase: 0 | owner: TBD | deps: PROT-001 | Implement module registry and attachment flow per `docs/spec/SPEC-MODULES.md`.
- [ ] PROT-007 | status: not-started | priority: P0 | phase: 0 | owner: TBD | deps: PROT-001 | Implement sub chain registry and anchoring per `docs/spec/SPEC-ANCHOR.md`.
- [ ] PROT-008 | status: not-started | priority: P1 | phase: 0 | owner: TBD | deps: PROT-001 | Implement parameter management per `docs/spec/SPEC-PARAMS.md`.
- [ ] PROT-009 | status: not-started | priority: P1 | phase: 4 | owner: TBD | deps: PROT-001 | Define attestation module interface per `docs/spec/SPEC-ATTESTATIONS.md`.
- [x] PROT-010 | status: done | priority: P1 | phase: 2 | owner: docs | deps: PROT-003 | Publish protobuf, gRPC, and REST interface docs.
- [ ] PROT-011 | status: not-started | priority: P1 | phase: 2 | owner: TBD | deps: PROT-003 | Build conformance test harness per `docs/spec/SPEC-CONFORMANCE-TESTS.md`.

---

## Data, indexer, and explorer

- [x] DATA-001 | status: done | priority: P0 | phase: 0 | owner: docs | deps: PROT-003 | Define indexer schema per `docs/spec/SPEC-INDEXER.md`.
- [ ] DATA-002 | status: not-started | priority: P0 | phase: 0 | owner: TBD | deps: DATA-001 | Implement block, tx, and event ingestion.
- [ ] DATA-003 | status: not-started | priority: P0 | phase: 1 | owner: TBD | deps: DATA-002 | Implement entity registry queries and filters.
- [ ] DATA-004 | status: not-started | priority: P1 | phase: 1 | owner: TBD | deps: DATA-002 | Implement module and sub chain registry queries.
- [ ] DATA-005 | status: not-started | priority: P1 | phase: 1 | owner: TBD | deps: DATA-002 | Implement reporting views (cash-based, nonprofit allocation).
- [ ] DATA-006 | status: not-started | priority: P1 | phase: 2 | owner: TBD | deps: DATA-003 | Publish public API documentation.
- [ ] DATA-007 | status: not-started | priority: P2 | phase: 3 | owner: TBD | deps: DATA-006 | Provide export formats (CSV/JSON) for reporting.
- [ ] DATA-008 | status: not-started | priority: P1 | phase: 1 | owner: TBD | deps: DATA-003 | Provide explorer-ready endpoints.

---

## Modules and standards

- [ ] MOD-001 | status: not-started | priority: P1 | phase: 3 | owner: TBD | deps: PROT-006 | Define module registry listing requirements.
- [ ] MOD-002 | status: not-started | priority: P1 | phase: 4 | owner: TBD | deps: MOD-001 | Draft jurisdiction module pilot criteria.
- [ ] MOD-003 | status: not-started | priority: P2 | phase: 4 | owner: TBD | deps: MOD-001 | Define sector framework reporting expectations.
- [ ] MOD-004 | status: not-started | priority: P2 | phase: 4 | owner: TBD | deps: PROT-009 | Define attestation issuer registry governance.
- [ ] MOD-005 | status: not-started | priority: P2 | phase: 3 | owner: TBD | deps: MOD-001 | Define app registry listing workflow and signals.

---

## Token and economics

- [x] TOK-001 | status: done | priority: P0 | phase: 0 | owner: docs | deps: - | Publish token policy and genesis plan.
- [x] TOK-002 | status: done | priority: P1 | phase: 0 | owner: docs | deps: TOK-001 | Draft vesting schedules document.
- [x] TOK-003 | status: done | priority: P1 | phase: 0 | owner: docs | deps: TOK-001 | Define treasury fee flow accounting and reporting.
- [ ] TOK-004 | status: not-started | priority: P0 | phase: 1 | owner: TBD | deps: PROT-002 | Build genesis allocation file and verification steps.
- [ ] TOK-005 | status: not-started | priority: P1 | phase: 1 | owner: TBD | deps: TOK-004 | Define validator reward emission schedule and reporting.
- [ ] TOK-006 | status: not-started | priority: P2 | phase: 1 | owner: TBD | deps: TOK-001 | Publish public tokenomics chart assets.

---

## Governance and policy

- [x] GOV-001 | status: done | priority: P0 | phase: 0 | owner: docs | deps: - | Publish governance and foundation policies.
- [x] GOV-002 | status: done | priority: P1 | phase: 1 | owner: docs | deps: GOV-001 | Define protocol council scope and membership process.
- [x] GOV-003 | status: done | priority: P1 | phase: 1 | owner: docs | deps: GOV-001 | Document emergency powers sunset and override rules.
- [x] GOV-004 | status: done | priority: P1 | phase: 1 | owner: docs | deps: GOV-001 | Document validator charter enforcement approach.
- [ ] GOV-005 | status: not-started | priority: P2 | phase: 3 | owner: TBD | deps: MOD-001 | Define module registry governance workflow.

---

## Security

- [x] SEC-001 | status: done | priority: P0 | phase: 0 | owner: docs | deps: - | Publish security policy, threat model, and audit plan.
- [x] SEC-002 | status: done | priority: P1 | phase: 0 | owner: docs | deps: SEC-001 | Define security monitoring baseline and alert thresholds.
- [x] SEC-003 | status: done | priority: P1 | phase: 0 | owner: docs | deps: SEC-001 | Define bug bounty scope and submission workflow.
- [x] SEC-004 | status: done | priority: P1 | phase: 2 | owner: docs | deps: SEC-001 | Draft incident response runbook details (public + restricted).
- [x] SEC-005 | status: done | priority: P1 | phase: 2 | owner: docs | deps: SEC-001 | Define key management policy (public-safe summary).

---

## DevOps and infrastructure

- [x] DEVOPS-001 | status: done | priority: P0 | phase: 0 | owner: docs | deps: - | Publish DevOps documentation structure.
- [x] DEVOPS-002 | status: done | priority: P0 | phase: 0 | owner: docs | deps: PROT-001 | Define dev, staging, and prod environment architecture.
- [ ] DEVOPS-003 | status: not-started | priority: P0 | phase: 0 | owner: TBD | deps: PROT-002 | Stand up devnet environment.
- [ ] DEVOPS-004 | status: not-started | priority: P0 | phase: 0 | owner: TBD | deps: DEVOPS-003 | Stand up public testnet environment.
- [ ] DEVOPS-005 | status: not-started | priority: P0 | phase: 1 | owner: TBD | deps: DEVOPS-004 | Stand up mainnet environment.
- [x] DEVOPS-006 | status: done | priority: P1 | phase: 0 | owner: docs | deps: PROT-001 | Define CI/CD pipeline for chain builds and releases.
- [x] DEVOPS-007 | status: done | priority: P1 | phase: 0 | owner: docs | deps: DEVOPS-002 | Define observability stack and alerting.
- [x] DEVOPS-008 | status: done | priority: P1 | phase: 2 | owner: docs | deps: DEVOPS-003 | Define backup and snapshot strategy.
- [x] DEVOPS-009 | status: done | priority: P1 | phase: 3 | owner: docs | deps: PROT-007 | Define IBC relayer operations and monitoring.
- [x] DEVOPS-010 | status: done | priority: P1 | phase: 1 | owner: docs | deps: DEVOPS-004 | Publish validator onboarding documentation.

---

## Frontend and product surfaces

- [x] FE-001 | status: done | priority: P1 | phase: 0 | owner: docs | deps: - | Define information architecture across site, docs, and apps.
- [x] FE-002 | status: done | priority: P1 | phase: 1 | owner: docs | deps: DATA-003 | Define explorer UI requirements and data endpoints.
- [ ] FE-003 | status: not-started | priority: P1 | phase: 1 | owner: TBD | deps: DATA-008 | Build read-only explorer UI.
- [ ] FE-004 | status: not-started | priority: P2 | phase: 3 | owner: TBD | deps: DATA-003 | Build registry UI and search.
- [x] FE-005 | status: done | priority: P0 | phase: 3 | owner: docs | deps: PROT-004 | Define wallet connection and signing UX flows.
- [ ] FE-006 | status: not-started | priority: P0 | phase: 3 | owner: TBD | deps: FE-005 | Build entity management console (official app).
- [ ] FE-007 | status: not-started | priority: P1 | phase: 3 | owner: TBD | deps: FE-006 | Implement governance UI flows.
- [ ] FE-008 | status: not-started | priority: P1 | phase: 3 | owner: TBD | deps: DATA-005 | Implement reporting dashboards.
- [x] FE-009 | status: done | priority: P2 | phase: 2 | owner: docs | deps: FE-001 | Define accessibility and UX guidelines.

---

## Website and content

- [ ] WEB-001 | status: not-started | priority: P1 | phase: 0 | owner: TBD | deps: - | Add publish and update dates under each site page title.
- [ ] WEB-002 | status: not-started | priority: P1 | phase: 0 | owner: TBD | deps: - | Complete the website master text file (`../dcorps-site/text.md`).
- [ ] WEB-003 | status: not-started | priority: P1 | phase: 0 | owner: TBD | deps: - | Add a high-level disclaimer to the roadmap page.
- [ ] WEB-004 | status: not-started | priority: P2 | phase: 0 | owner: TBD | deps: - | Link site content to public docs and specs where relevant.
- [x] WEB-005 | status: done | priority: P2 | phase: 1 | owner: docs | deps: - | Define copy update process to keep site aligned with `docs/master/DCHUB_MASTER.md`.

---

## People and hiring

- [x] PEOPLE-001 | status: done | priority: P1 | phase: 0 | owner: docs | deps: - | Define core team roles needed for Phase 0 and Phase 1.
- [x] PEOPLE-002 | status: done | priority: P2 | phase: 0 | owner: docs | deps: - | Define advisor roles needed for Phase 1 and Phase 2.
- [x] PEOPLE-003 | status: done | priority: P2 | phase: 0 | owner: docs | deps: PEOPLE-001 | Draft job descriptions for priority roles.

---

## Legal and entity structure

- [x] LEGAL-001 | status: done | priority: P1 | phase: 0 | owner: docs | deps: - | Document the BVI to Switzerland structural path (summary).
- [x] LEGAL-002 | status: done | priority: P1 | phase: 0 | owner: docs | deps: - | Document DevCo and Foundation relationship agreements.
- [x] LEGAL-003 | status: done | priority: P2 | phase: 0 | owner: docs | deps: - | Draft website terms, privacy, and cookies pages for legal review.

---

## Ecosystem and partnerships

- [ ] ECO-001 | status: not-started | priority: P2 | phase: 3 | owner: TBD | deps: - | Define integrator onboarding and support process.
- [ ] ECO-002 | status: not-started | priority: P2 | phase: 4 | owner: TBD | deps: - | Define grants or ecosystem program workflow (if foundation is active).

---

## Research and labs

- [ ] RES-001 | status: not-started | priority: P2 | phase: 4 | owner: TBD | deps: - | Define research priorities for jurisdiction modules and sector frameworks.
- [ ] RES-002 | status: not-started | priority: P2 | phase: 4 | owner: TBD | deps: RES-001 | Create a research project template and review criteria.
