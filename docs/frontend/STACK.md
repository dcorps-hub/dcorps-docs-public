# Frontend Stack

**Document type**: Frontend guide  
**Doc ID**: FE-STACK  
**Status**: Final v0.1  
**Source repo**: dcorps-docs-public ([docs/frontend/STACK.md](/frontend/STACK))  
**Publishing date**: 2025-12-24  
**Last updated**: 2025-12-24  

> Scope: Record current frontend state and baseline requirements.

---

## Current state (v0)

- Static HTML/CSS/JS in `../dcorps-site`.
- Content in markdown under `../dcorps-site/content`.
- Routes mirror content folders in the site repo.

---

## Decisions (v1 baseline)

- Explorer and app: React + TypeScript with Next.js.
- Data fetching and caching: React Query.
- Wallet integration: cosmos-kit with Keplr, Leap, and Cosmostation; WalletConnect for mobile.
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
- Module and sub chain status views.

---

## Open decisions

None.
