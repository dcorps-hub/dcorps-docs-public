# Roles

**Document type**: Roles map  
**Doc ID**: PEOPLE-ROLES  
**Status**: Final v0.1  
**Release date**: December 28, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/people/ROLES.md](/people/ROLES))  
**Last updated**: 2026-01-25

> Scope: Roles needed to build, secure, and operate dCorps over time.

Current status: founder-led Phase 0A (development). This page is a capability map, not a promise of hiring timelines.

---

## Protocol and blockchain engineering

### Protocol lead (Hub chain)

Owns kernel architecture, module boundaries, and upgrade strategy. Turns the spec stack into a safe, testable implementation with clear invariants and upgrade rehearsals.

### Protocol engineer (EVM/rollup stack)

Implements core contracts, event schemas, and rollup integration logic. Ships reproducible builds and participates in testnet operations and upgrade rehearsals.

### Protocol module engineer (optional overlays)

Builds optional modules that read Hub state and publish disclosed outputs (jurisdiction adapters, attestations, reporting overlays), without redefining kernel truth.

### SDK and integrations engineer

Builds client libraries, examples, and integration guidance so third parties can integrate once and support many entities. Focus is stable APIs, predictable ergonomics, and conformance testing.

---

## Security and cryptography

### Cryptography and protocol security engineer

Reviews cryptographic assumptions and signing posture, and helps shape key-safety patterns. Supports audits by producing threat models, risk notes, and review artifacts where applicable.

### Security engineering lead (tooling + infrastructure)

Owns threat modeling for core tooling and public surfaces (explorer, indexer, operator console). Designs incident readiness, disclosure process, and security gates across releases.

### QA and test engineering

Builds regressions, upgrade rehearsal scripts, and conformance tests that catch breaking changes early. Treats “reproducible outputs from raw chain data” as a core quality requirement.

---

## Data, indexing, and reporting

### Data and indexer engineer

Builds the reference indexer and data schemas that make verification usable. Ensures derived views are reproducible, well-labeled, and aligned with the normative spec set.

### Reporting and analytics engineer

Turns tagged events into readable, auditable views (cash-based operating views, nonprofit allocation views). Focus is correctness, coverage metrics, and clear “what this proves” outputs.

---

## Product, UX, and developer experience

### Product lead (operator + verifier UX)

Owns user experience across the official app, explorer, and key workflows. Keeps a strict boundary between “what the Hub proves” and “what a UI suggests,” with conservative, institution-friendly language.

### Frontend engineer (Explorer/App)

Builds verification-first interfaces: readable timelines, labeled assumptions, exportable views, and safe signing prompts. Focus is accessibility, performance, and clarity under scrutiny.

### Design lead (brand + UI/UX)

Owns visual system and information design across the site and tools. Makes complexity legible without hype; ensures consistent surfaces and clear trust signals.

### Technical writing and documentation

Maintains the docs center as a coherent, conservative reference. Keeps specs, policy docs, and user-facing explanations aligned and searchable.

### Content and SEO lead

Owns discoverability and information hygiene across the website and docs center: technical SEO, site structure, metadata consistency, and editorial distribution. Keeps language conservative (no promises, no investment framing) while making the material findable by the right audiences.

---

## Governance, policy, and public posture

### Governance and policy lead

Owns process clarity and disclosure posture before and after mainnet: proposal workflows, review gates, and “what changes if this passes” summaries. Ensures public docs never imply legal personhood, guaranteed compliance, or promised outcomes.

### Legal and regulatory counsel (external)

Provides jurisdiction-specific advice for token and entity-related questions, contracts, and disclosures. Helps keep public messaging conservative and compliant; does not replace independent counsel for participants.

### Communications and public relations

Owns calm, credible narrative across releases, announcements, and stakeholder communications. Manages PR posture, press materials, and speaking/event programs without investment language or guarantees.

### Social media and community operations

Runs day-to-day community channels, support triage, and feedback loops into docs/product. Keeps public presence consistent, factual, and respectful of legal constraints.

---

## Operations and finance

### DevOps / SRE

Owns environments, monitoring, releases, and operational readiness for testnet and mainnet. Builds runbooks and ensures infrastructure failures don’t become integrity failures.

### Finance and operations lead

Runs budgeting, vendor management, reporting, and internal controls with conservative risk posture. Coordinates treasury operations where applicable, under published policy.

---

## Ecosystem and partnerships

### DevRel and ecosystem support

Supports builders, operators, and partners integrating with the Hub. Owns integration guidance, support loops, and partner onboarding patterns that keep the ecosystem open and interoperable.

### Partnerships and institutional outreach

Builds relationships with infrastructure partners, auditors, service providers, and institutional stakeholders. Focus is credibility, long-term alignment, and transparent boundaries.

---

## Token and market operations (if applicable)

### Token operations

Owns operational readiness for token-related mechanics under separate, dedicated documentation and counsel: custody posture, distribution operations, exchange/market operations, and reporting. This role does not imply any sale, listing, or financial return.

---

## AI and automation

### AI engineering

Builds AI-assisted tooling for documentation, support, and verification workflows while keeping outputs auditable and clearly labeled. Focus is safe automation that reduces manual overhead without creating hidden decision-making.

### On-chain AI engineer

Evaluates where AI-derived signals could be expressed as optional, disclosed on-chain outputs (e.g., module-generated analytics) without becoming consensus-critical “black box” logic. Focus is reproducibility, explicit assumptions, and strict separation from kernel truth.
