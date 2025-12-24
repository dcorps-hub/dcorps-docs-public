# Frontend Decisions

**Document type**: Decision log  
**Doc ID**: FE-DECISIONS  
**Status**: Living  
**Source repo**: dcorps-docs-public (`docs/frontend/DECISIONS.md`)

> Scope: Track open decisions and final choices for frontend architecture.

---

## Open decisions

None.

---

## Decision log

- Decision ID: FE-DEC-001
  - Date: 2025-12-22
  - Context: Choose a framework for explorer and app surfaces.
  - Options considered: Next.js, Remix, Vite + React.
  - Decision: Use React + TypeScript with Next.js.
  - Rationale: Largest ecosystem support for Cosmos tooling and fast iteration.
  - Consequences: Standardize on TypeScript and React component patterns.

- Decision ID: FE-DEC-002
  - Date: 2025-12-22
  - Context: Data fetching and caching strategy for read-heavy views.
  - Options considered: React Query, SWR, custom hooks.
  - Decision: Use React Query.
  - Rationale: Mature caching, retries, and request de-duplication.
  - Consequences: API clients should be designed for query-key stability.

- Decision ID: FE-DEC-003
  - Date: 2025-12-22
  - Context: Wallet connection standard for Cosmos wallets.
  - Options considered: cosmos-kit, direct wallet SDKs, custom adapter layer.
  - Decision: Use cosmos-kit with Keplr, Leap, and Cosmostation; add WalletConnect for mobile.
  - Rationale: Broad wallet coverage with a consistent interface.
  - Consequences: Wallet UX flows should follow cosmos-kit connection semantics.

- Decision ID: FE-DEC-004
  - Date: 2025-12-22
  - Context: UI primitives and styling baseline.
  - Options considered: Tailwind + headless, component libraries, custom CSS.
  - Decision: Use Tailwind CSS with headless components.
  - Rationale: Fast iteration and consistent design tokens without heavy UI lock-in.
  - Consequences: Maintain a small internal component library for reuse.

- Decision ID: FE-DEC-005
  - Date: 2025-12-22
  - Context: Hosting and deployment model for static site and app.
  - Options considered: Vercel, Netlify, Cloudflare Pages.
  - Decision: Use Vercel for the static site and Next.js app deployments.
  - Rationale: Native Next.js support and fast preview workflows.
  - Consequences: Align build pipelines to Vercel conventions.

- Decision ID: FE-DEC-006
  - Date: 2025-12-22
  - Context: Analytics and frontend error logging.
  - Options considered: Plausible, PostHog, GA4; Sentry, LogRocket.
  - Decision: Use Plausible for analytics and Sentry for error tracking.
  - Rationale: Privacy-forward analytics and reliable error reporting.
  - Consequences: Add consent and disclosure language where required.

## Decision log template

- Decision ID:
- Date:
- Context:
- Options considered:
- Decision:
- Rationale:
- Consequences:
