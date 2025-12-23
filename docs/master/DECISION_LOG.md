# Decision Log

> Purpose: Track design and governance decisions that affect the protocol, specs, policies, and schemas.

## 1. How to use this file

- Each decision gets a **Decision ID** used across specs and code (e.g. `DEC-0001`).
- Link back to the originating TBD in `TBD_REGISTER.md` or to an issue/PR.
- Capture enough context and rationale that future contributors can understand _why_ the decision was made.

Recommended column definitions:

- **Decision ID** – Stable identifier like `DEC-0001`.
- **Title** – Short human-readable name.
- **Date** – Decision date (UTC).
- **Context / Origin** – Reference to TBD, issue, or section.
- **Decision** – Concise statement of what was decided.
- **Rationale** – Key reasons and tradeoffs.
- **Impacted artifacts** – Specs, modules, contracts, or tooling.

## 2. Decision index

| Decision ID | Title | Date (UTC) | Context / Origin | Decision | Rationale | Impacted artifacts |
|-------------|-------|------------|------------------|----------|-----------|--------------------|
| DEC-0001 | Baseline technical stack | 2025-12-22 | Stack decisions | Adopt Go/Cosmos SDK for chain, PostgreSQL + Go indexer with Python reporting, React/Next.js frontend baseline | Align with Cosmos ecosystem defaults and reduce implementation risk | `docs/engineering/STACK.md`, `docs/frontend/STACK.md`, `docs/frontend/DECISIONS.md` |
| DEC-0002 | Website-first sequencing | 2025-12-22 | Phase sequencing | Insert Phase 0A to finalize the static public website before pre-mainnet readiness | Website is nearly complete and should be finalized before deeper build phases | `docs/roadmap/PHASES.md`, `docs/roadmap/INDEX.md`, `docs/ops/PHASED_PLAN.md` |
| DEC-0003 | Chain repo and module layout | 2025-12-22 | Chain implementation planning | Use `dcorps-chain` with `entity`, `accounting`, and `registry` modules | Keep kernel modular while minimizing module sprawl | `docs/engineering/CHAIN_LAYOUT.md` |
| DEC-0004 | Network params baseline | 2025-12-22 | Network configuration | Set chain IDs, denom, bech32 prefixes, and initial governance/staking values | Establish consistent genesis defaults across environments | `docs/devops/NETWORK_PARAMS.md` |
| DEC-0005 | Hub API surfaces v0.1 | 2025-12-22 | Interface definitions | Define proto packages, messages, queries, and events for core modules | Provide a clear contract for chain, indexer, and wallets | `docs/engineering/API_SURFACES.md` |
| DEC-0006 | Indexer schema and API v0.1 | 2025-12-22 | Data layer | Define reference schema and REST endpoints for indexer outputs | Make explorer and reporting implementable without guesswork | `docs/spec/SPEC-INDEXER.md` |
| DEC-0007 | DevOps runbooks baseline | 2025-12-22 | Operations | Draft public-safe runbooks for genesis, upgrades, IBC, backups, and indexer recovery | Ensure operational readiness before testnet | `docs/devops/RUNBOOKS.md` |
| DEC-0008 | Security ops baselines | 2025-12-22 | Security operations | Set bug bounty workflow targets and alert thresholds | Clarify security and monitoring expectations | `docs/security/BUG-BOUNTY.md`, `docs/devops/OBSERVABILITY.md` |
| DEC-0009 | Frontend deployment and analytics | 2025-12-22 | Frontend operations | Use Vercel for deployments, Plausible for analytics, and Sentry for error tracking | Standardize deployment and observability for public surfaces | `docs/frontend/DECISIONS.md` |
| DEC-0010 | Reference infra topology | 2025-12-22 | DevOps architecture | Use sentry-based validator topology and AWS as the reference deployment baseline | Provide a concrete, repeatable environment model | `docs/devops/ENVIRONMENTS.md` |
| DEC-0011 | Governance policy clarifications | 2025-12-22 | Governance docs | Define Protocol Council scope, emergency sunset, and validator enforcement approach | Reduce ambiguity for high-impact governance and validator accountability | `docs/policy/POL-GOV.md`, `docs/policy/POL-VALIDATORS.md` |
| DEC-0012 | Ops cadence and phase metrics | 2025-12-22 | Program management | Establish update cadence and success metrics per phase | Make progress measurable and reviewable | `docs/ops/CADENCE.md`, `docs/ops/METRICS.md` |
| DEC-0013 | Token vesting and fee flow baseline | 2025-12-22 | Token docs | Publish vesting schedules and fee flow accounting rules | Clarify release mechanics and treasury reporting | `docs/token/TOKEN-VESTING-SCHEDULES.md`, `docs/token/TOKEN-TREASURY-FEE-FLOWS.md` |
| DEC-0014 | Ops backup and IBC operations baseline | 2025-12-22 | DevOps operations | Define backup strategy and IBC relayer ops | Ensure operational readiness for data and relayers | `docs/devops/BACKUP_STRATEGY.md`, `docs/devops/IBC_OPERATIONS.md` |
