# Sequential Execution Plan

**Document type**: Operations plan  
**Doc ID**: OPS-PHASED-PLAN  
**Status**: Living  
**Source repo**: dcorps-docs (`docs/ops/PHASED_PLAN.md`)

> Scope: Ordered execution plan by phase. Task IDs refer to `docs/ops/TODO.md` and must be updated there when status changes.

---

## How to use this plan

- Work top to bottom within each phase.
- Do not start a later phase until the exit criteria in `docs/roadmap/PHASES.md` are met.
- Update task status only in `docs/ops/TODO.md`.

---

## Phase 0A - Public website finalization (static site)

1. Website alignment tasks
   - WEB-001, WEB-002, WEB-003, WEB-004

Gate: static site ready and aligned for public launch.

---

## Phase 0 - Pre-mainnet readiness

1. Program setup and sequencing
   - PROG-002, PROG-003, PROG-004
2. Chain repo and baseline decisions
   - PROT-001, PROT-002
3. DevOps architecture and tooling
   - DEVOPS-002, DEVOPS-006, DEVOPS-007
4. Security baseline
   - SEC-002, SEC-003
5. Protocol core implementation (kernel)
   - PROT-003, PROT-004, PROT-005, PROT-006, PROT-007, PROT-008
6. Data ingestion baseline
   - DATA-001, DATA-002
7. Devnet and public testnet
   - DEVOPS-003, DEVOPS-004
8. Token and treasury documentation
   - TOK-002, TOK-003
9. Legal and people foundations
   - LEGAL-001, LEGAL-002, LEGAL-003
   - PEOPLE-001, PEOPLE-002, PEOPLE-003

Gate: confirm Phase 0 exit criteria in `docs/roadmap/PHASES.md`.

---

## Phase 1 - Mainnet launch (Kernel v1)

1. Genesis and mainnet environment
   - TOK-004
   - DEVOPS-005, DEVOPS-010
2. Core query surfaces and explorer endpoints
   - DATA-003, DATA-004, DATA-005, DATA-008
3. Public explorer UI (read-only)
   - FE-002, FE-003
4. Governance and validator charter clarifications
   - GOV-002, GOV-003, GOV-004
5. Website operations alignment
   - WEB-005

Gate: confirm Phase 1 exit criteria in `docs/roadmap/PHASES.md`.

---

## Phase 2 - Operational completeness and standards hardening

1. Interface and conformance hardening
   - PROT-010, PROT-011
2. Public API documentation
   - DATA-006
3. Security and incident readiness
   - SEC-004, SEC-005
4. Backup and snapshot strategy
   - DEVOPS-008
5. Accessibility and UX guidelines
   - FE-009

Gate: confirm Phase 2 exit criteria in `docs/roadmap/PHASES.md`.

---

## Phase 3 - Ecosystem bootstrapping and stablecoin rails

1. Module and app registry foundations
   - MOD-001, MOD-005, GOV-005
2. IBC operations and relayer monitoring
   - DEVOPS-009
3. Registry and console UX foundations
   - FE-004, FE-005, FE-006, FE-007, FE-008
4. Export formats for reporting
   - DATA-007
5. Ecosystem onboarding
   - ECO-001

Gate: confirm Phase 3 exit criteria in `docs/roadmap/PHASES.md`.

---

## Phase 4 - Adapter layer and institutional legibility

1. Attestation and jurisdiction frameworks
   - PROT-009, MOD-002, MOD-003, MOD-004
2. Ecosystem programs and research
   - ECO-002, RES-001, RES-002

Gate: confirm Phase 4 exit criteria in `docs/roadmap/PHASES.md`.

---

## Phase 5 - Fully operational maturity

No specific tasks are listed yet. Add Phase 5 tasks as governance and decentralization targets are defined.
