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
- [x] PROT-002 | status: done | priority: P0 | phase: 0 | owner: docs | deps: - | Define chain ID, denom, bech32 prefix, and initial parameters.
- [ ] PROT-003 | status: not-started | priority: P0 | phase: 0 | owner: TBD | deps: PROT-001 | Implement entity registry state and lifecycle per `docs/spec/SPEC-CORE.md`.
- [ ] PROT-004 | status: not-started | priority: P0 | phase: 0 | owner: TBD | deps: PROT-001 | Implement role bindings and governance actions per `docs/spec/SPEC-CORE.md`.
- [ ] PROT-005 | status: not-started | priority: P0 | phase: 0 | owner: TBD | deps: PROT-001 | Implement canonical wallets and tagged events per `docs/spec/SPEC-DATA.md`.
- [ ] PROT-006 | status: not-started | priority: P0 | phase: 0 | owner: TBD | deps: PROT-001 | Implement module registry and attachment flow per `docs/spec/SPEC-MODULES.md`.
- [ ] PROT-007 | status: not-started | priority: P0 | phase: 0 | owner: TBD | deps: PROT-001 | Implement sub chain registry and anchoring per `docs/spec/SPEC-ANCHOR.md`.
- [ ] PROT-008 | status: not-started | priority: P1 | phase: 0 | owner: TBD | deps: PROT-001 | Implement parameter management per `docs/spec/SPEC-PARAMS.md`.
- [ ] PROT-009 | status: not-started | priority: P1 | phase: 4 | owner: TBD | deps: PROT-001 | Define attestation module interface per `docs/spec/SPEC-ATTESTATIONS.md`.
- [x] PROT-010 | status: done | priority: P1 | phase: 2 | owner: docs | deps: - | Publish protobuf, gRPC, and REST interface docs.
- [ ] PROT-011 | status: not-started | priority: P1 | phase: 2 | owner: TBD | deps: PROT-003 | Build conformance test harness per `docs/spec/SPEC-CONFORMANCE-TESTS.md`.
- [ ] PROT-012 | status: not-started | priority: P0 | phase: 0 | owner: TBD | deps: PROT-001 | Publish chain build instructions and reproducible build notes.
- [ ] PROT-013 | status: not-started | priority: P1 | phase: 2 | owner: TBD | deps: PROT-005 | Implement fee grant flow for stablecoin service fees while execution uses DCHUB.

---

## Data, indexer, and explorer

- [x] DATA-001 | status: done | priority: P0 | phase: 0 | owner: docs | deps: - | Define indexer schema per `docs/spec/SPEC-INDEXER.md`.
- [ ] DATA-002 | status: not-started | priority: P0 | phase: 0 | owner: TBD | deps: DATA-001 | Implement block, tx, and event ingestion.
- [ ] DATA-003 | status: not-started | priority: P0 | phase: 1 | owner: TBD | deps: DATA-002 | Implement entity registry queries and filters.
- [ ] DATA-004 | status: not-started | priority: P1 | phase: 1 | owner: TBD | deps: DATA-002 | Implement module and sub chain registry queries.
- [ ] DATA-005 | status: not-started | priority: P1 | phase: 1 | owner: TBD | deps: DATA-002 | Implement reporting views (cash-based, nonprofit allocation).
- [ ] DATA-006 | status: not-started | priority: P1 | phase: 2 | owner: TBD | deps: DATA-003 | Publish public API documentation.
- [ ] DATA-007 | status: not-started | priority: P2 | phase: 3 | owner: TBD | deps: DATA-006 | Provide export formats (CSV/JSON) for reporting.
- [ ] DATA-008 | status: not-started | priority: P1 | phase: 1 | owner: TBD | deps: DATA-003 | Provide explorer-ready endpoints.
- [ ] DATA-009 | status: not-started | priority: P1 | phase: 0 | owner: TBD | deps: DATA-002 | Publish reproducible indexer and reporting view tooling.
- [ ] DATA-010 | status: not-started | priority: P1 | phase: 0 | owner: TBD | deps: DATA-002 | Publish example entity package on testnet (corporation + nonprofit) with tagged events, anchors, and derived reports.
- [ ] DATA-011 | status: not-started | priority: P1 | phase: 2 | owner: TBD | deps: DATA-006 | Publish versioned API contracts and SDKs for core operations.
- [ ] DATA-012 | status: not-started | priority: P2 | phase: 3 | owner: TBD | deps: DATA-002 | Implement indexer redundancy and data availability patterns.

---

## Modules and standards

- [ ] MOD-001 | status: not-started | priority: P1 | phase: 3 | owner: TBD | deps: PROT-006 | Define module registry listing requirements.
- [ ] MOD-002 | status: not-started | priority: P1 | phase: 4 | owner: TBD | deps: MOD-001 | Draft jurisdiction module pilot criteria.
- [ ] MOD-003 | status: not-started | priority: P2 | phase: 4 | owner: TBD | deps: MOD-001 | Define sector framework reporting expectations.
- [ ] MOD-004 | status: not-started | priority: P2 | phase: 4 | owner: TBD | deps: PROT-009 | Define attestation issuer registry governance.
- [ ] MOD-005 | status: not-started | priority: P2 | phase: 3 | owner: TBD | deps: MOD-001 | Define app registry listing workflow and signals.
- [ ] MOD-006 | status: not-started | priority: P1 | phase: 3 | owner: TBD | deps: MOD-001 | Publish reference templates for common entity setups.
- [ ] MOD-007 | status: not-started | priority: P2 | phase: 4 | owner: TBD | deps: MOD-001 | Define nonprofit overlay workflows (donation receipts, sponsorship frameworks).

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
- [ ] SEC-006 | status: not-started | priority: P0 | phase: 0 | owner: TBD | deps: PROT-003 | Define audit scope and publish audit reports for core modules and reference tooling.
- [ ] SEC-007 | status: not-started | priority: P1 | phase: 2 | owner: TBD | deps: SEC-001 | Expand bug bounty scope and publish kernel threat model updates.

---

## DevOps and infrastructure

- [x] DEVOPS-001 | status: done | priority: P0 | phase: 0 | owner: docs | deps: - | Publish DevOps documentation structure.
- [x] DEVOPS-002 | status: done | priority: P0 | phase: 0 | owner: docs | deps: - | Define dev, staging, and prod environment architecture.
- [ ] DEVOPS-003 | status: not-started | priority: P0 | phase: 0 | owner: TBD | deps: PROT-002 | Stand up devnet environment.
- [ ] DEVOPS-004 | status: not-started | priority: P0 | phase: 0 | owner: TBD | deps: DEVOPS-003 | Stand up public testnet environment and publish genesis file.
- [ ] DEVOPS-005 | status: not-started | priority: P0 | phase: 1 | owner: TBD | deps: DEVOPS-004 | Stand up mainnet environment.
- [x] DEVOPS-006 | status: done | priority: P1 | phase: 0 | owner: docs | deps: - | Define CI/CD pipeline for chain builds and releases.
- [x] DEVOPS-007 | status: done | priority: P1 | phase: 0 | owner: docs | deps: DEVOPS-002 | Define observability stack and alerting.
- [x] DEVOPS-008 | status: done | priority: P1 | phase: 2 | owner: docs | deps: - | Define backup and snapshot strategy.
- [x] DEVOPS-009 | status: done | priority: P1 | phase: 3 | owner: docs | deps: - | Define IBC relayer operations and monitoring.
- [x] DEVOPS-010 | status: done | priority: P1 | phase: 0 | owner: docs | deps: - | Publish validator onboarding documentation (testnet).
- [ ] DEVOPS-011 | status: not-started | priority: P1 | phase: 0 | owner: TBD | deps: PROT-001 | Publish reproducible node build and deployment tooling.

---

## Frontend and product surfaces

- [x] FE-001 | status: done | priority: P1 | phase: 0 | owner: docs | deps: - | Define information architecture across site, docs, and apps.
- [x] FE-002 | status: done | priority: P1 | phase: 1 | owner: docs | deps: - | Define explorer UI requirements and data endpoints.
- [ ] FE-003 | status: not-started | priority: P1 | phase: 1 | owner: TBD | deps: DATA-008 | Build read-only explorer UI.
- [ ] FE-004 | status: not-started | priority: P2 | phase: 3 | owner: TBD | deps: DATA-003 | Build registry UI and search.
- [x] FE-005 | status: done | priority: P0 | phase: 3 | owner: docs | deps: - | Define wallet connection and signing UX flows.
- [ ] FE-006 | status: not-started | priority: P0 | phase: 3 | owner: TBD | deps: FE-005 | Build entity management console (official app).
- [ ] FE-007 | status: not-started | priority: P1 | phase: 3 | owner: TBD | deps: FE-006 | Implement governance UI flows.
- [ ] FE-008 | status: not-started | priority: P1 | phase: 3 | owner: TBD | deps: DATA-005 | Implement reporting dashboards.
- [x] FE-009 | status: done | priority: P2 | phase: 2 | owner: docs | deps: FE-001 | Define accessibility and UX guidelines.

---

## Website and content

- [ ] WEB-001 | status: in-progress | priority: P1 | phase: 0A | owner: TBD | deps: - | Add publish and update dates under each site page title.
- [ ] WEB-002 | status: not-started | priority: P1 | phase: 0A | owner: TBD | deps: - | Complete the website master text file (`../dcorps-site/text.md`).
- [ ] WEB-003 | status: not-started | priority: P1 | phase: 0A | owner: TBD | deps: - | Add a high-level disclaimer to the roadmap page.
- [ ] WEB-004 | status: not-started | priority: P2 | phase: 0A | owner: TBD | deps: - | Link site content to public docs and specs where relevant.
- [x] WEB-006 | status: done | priority: P1 | phase: 0A | owner: TBD | deps: WEB-001 | Finalize Information pages (about, roadmap, governance, team, foundation, dev-company, research-and-labs).
- [x] WEB-007 | status: done | priority: P1 | phase: 0A | owner: TBD | deps: WEB-006 | Finalize Learn pages (overview, vision, whitepaper, tokenomics).
- [x] WEB-008 | status: done | priority: P1 | phase: 0A | owner: TBD | deps: WEB-007 | Finalize Protocol pages (overview, architecture, modules, dchub-token, security).
- [ ] WEB-009 | status: not-started | priority: P1 | phase: 0A | owner: TBD | deps: WEB-008 | Finalize Build pages (overview, documentations, sdks, network, validation, dapp, extension).
- [ ] WEB-010 | status: not-started | priority: P1 | phase: 0A | owner: TBD | deps: WEB-009 | Finalize Ecosystems pages (overview, registry, official-app, dapp-store, explorer, wallet).
- [ ] WEB-011 | status: not-started | priority: P1 | phase: 0A | owner: TBD | deps: WEB-010 | Finalize Entities pages (overview, simple-private-entity, private-corporation, multi-class-private-corporation, public-company, simple-nonprofit, sophisticated-nonprofit).
- [ ] WEB-012 | status: not-started | priority: P2 | phase: 0A | owner: TBD | deps: WEB-011 | Finalize Standards pages (overview, smart-jurisdiction, regulatory, compliance, reputation, additional-standards).
- [ ] WEB-013 | status: not-started | priority: P2 | phase: 0A | owner: TBD | deps: WEB-012 | Finalize Investors pages (portal, accreditation).
- [ ] WEB-014 | status: not-started | priority: P2 | phase: 0A | owner: TBD | deps: WEB-013 | Finalize Media pages (press-release, media-kit).
- [ ] WEB-015 | status: not-started | priority: P2 | phase: 0A | owner: TBD | deps: WEB-014 | Finalize Legal pages (terms, privacy, cookies, disclaimer).
- [ ] WEB-016 | status: not-started | priority: P1 | phase: 0A | owner: TBD | deps: WEB-015, WEB-004 | Run cross-link, date, and consistency pass across the site.
- [ ] WEB-017 | status: not-started | priority: P2 | phase: 1 | owner: TBD | deps: WEB-016 | Define documentation hub UX (tabs, index, sub-documents) and content sourcing from the docs repo.
- [ ] WEB-018 | status: not-started | priority: P2 | phase: 1 | owner: TBD | deps: WEB-017 | Implement documentation hub interface with tabs, index, and doc embedding.
- [x] WEB-019 | status: done | priority: P1 | phase: 0A | owner: TBD | deps: WEB-007 | Author a comprehensive plain-language whitepaper for the public website and docs repo.
- [x] WEB-020 | status: done | priority: P1 | phase: 0A | owner: TBD | deps: WEB-019 | Update tokenomics and DCHUB token pages for full public details and balanced coverage.
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
