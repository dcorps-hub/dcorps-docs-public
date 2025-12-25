# dCorps Hub - Technical Stack Decisions

**Document type**: Engineering decisions  
**Doc ID**: ENG-STACK  
**Status**: Final v0.1  
**Source repo**: dcorps-docs-public (`docs/engineering/STACK.md`)

> Scope: Baseline implementation stack for the Hub chain, indexer, and app surfaces. Changes require updating this file and referencing the change in relevant release notes (or governance proposals when protocol-affecting).

---

## 1. Goals

- Minimize novel tech; prefer Cosmos defaults.
- Keep consensus-critical code in a single primary language.
- Keep data pipelines reproducible and auditable.
- Align frontend with Cosmos wallet standards.

---

## 2. Chain and core protocol

- Language: Go.
- Framework: Cosmos SDK (target v0.50.x baseline).
- Consensus engine: CometBFT (target v0.38.x baseline).
- IBC: ibc-go (target v8.x baseline).
- Smart contracts: disabled in v1; CosmWasm is optional for later phases only.

---

## 3. Indexer and data services

- Ingestion service: Go.
- Primary datastore: PostgreSQL.
- Reporting and analytics: Python (pandas) for reproducible report generation.
- Public API surface: REST + gRPC; GraphQL is optional after Phase 1.

---

## 4. Frontend and UI surfaces

- Static site: existing HTML/CSS/JS in `../dcorps-site`.
- Explorer and app: React + TypeScript with Next.js.
- Data fetching: React Query.
- UI primitives: headless components + Tailwind CSS.
- Wallet integration: cosmos-kit with Keplr, Leap, and Cosmostation; WalletConnect for mobile.
- Hosting: Vercel for static site and app deployments.
- Analytics: Plausible; error tracking: Sentry.

---

## 5. DevOps and tooling

- Packaging: Docker for all services.
- Infrastructure as code: Terraform.
- CI: GitHub Actions or equivalent (recommended for code repos; this docs repo has no CI yet).
- Observability: Prometheus + Grafana; Loki for logs.

---

## 6. Change control

- Pin versions in code repositories.
- Document stack changes in this file and in relevant release notes (or governance proposals when protocol-affecting).
