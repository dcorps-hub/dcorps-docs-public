# Technical Stack

**Document type**: Engineering decisions  
**Doc ID**: ENG-STACK  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/engineering/STACK.md](/engineering/STACK))  
**Last updated**: 2026-01-25

> Scope: Baseline implementation stack for the Hub rollup, indexer, and app surfaces. Changes require updating this file and referencing the change in relevant release notes (or governance proposals when protocol-affecting).

---

## 1. Goals

- Minimize novel tech; prefer Orbit and EVM defaults.
- Keep consensus-critical components minimal and transparent.
- Keep data pipelines reproducible and auditable.
- Align frontend with EVM wallet standards.

---

## 2. Rollup and core protocol

- Rollup stack: Arbitrum Orbit (Rollup mode) using Nitro.
- Execution: EVM contracts (Solidity/Vyper) for the kernel and modules.
- Settlement and data availability: Ethereum L1.
- Bridging: canonical Ethereum to/from dCorps bridge gateways.
- Upgrade pattern: timelocked upgradeable proxies with public admin roles.

---

## 3. Indexer and data services

- Ingestion service: Go or TypeScript (implementation-specific).
- Primary datastore: PostgreSQL.
- Reporting and analytics: Python (pandas) for reproducible report generation.
- Public API surface: JSON-RPC + REST; GraphQL is optional after Phase 1.

---

## 4. Frontend and UI surfaces

- Static site: existing HTML/CSS/JS in `../dcorps-site`.
- Explorer and app: React + TypeScript with Next.js.
- Data fetching: React Query.
- UI primitives: headless components + Tailwind CSS.
- Wallet integration: MetaMask, Rabby, and WalletConnect (mobile-compatible).
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
