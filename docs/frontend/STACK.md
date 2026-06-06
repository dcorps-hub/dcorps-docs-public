# Frontend Stack

**Document type**: Frontend guide  
**Doc ID**: FE-STACK  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/frontend/STACK.md](/frontend/STACK))  
**Last updated**: 2026-01-25

> Scope: Record current frontend state and baseline requirements.

---

## Current state (v0)

- Canonical public app and explorer surface in `../dcorps-app`.
- Legacy static routes in `../dcorps-site-v2` while needed.
- Archived `../dcorps-site` is read-only and not part of the active frontend stack.

---

## Decisions (v1 baseline)

- Explorer and app: React + TypeScript with Next.js.
- Data fetching and caching: React Query.
- Wallet integration: wagmi/viem with MetaMask, Rabby, and WalletConnect.
- UI primitives: headless components + Tailwind CSS.
- Hosting: Vercel for static site and app deployments.
- Analytics: Plausible; error tracking: Sentry.

These decisions are summarized in [docs/engineering/STACK.md](/engineering/STACK) and should be treated as baseline unless superseded by an explicit update in the relevant repo release notes.

---

## Future requirements

The following capabilities are required to support the explorer, dashboards, and wallet-connected apps:

- Dynamic data from indexers and APIs.
- Wallet connection flows for signing actions.
- Role-based views for entity admins vs public viewers.
- Reporting dashboards based on tagged events.
- Module and bridge status views.

---

## Open decisions

None.
