# Official App

**Document type**: Frontend reference
**Doc ID**: FE-OFFICIAL-APP
**Status**: Draft v0.1
**Release date**: December 21, 2025
**Author**: Nicolas Turcotte, Founder
**Source repo**: dcorps-docs-public ([docs/frontend/OFFICIAL_APP.md](/frontend/OFFICIAL_APP))
**Last updated**: 2026-01-17

> Scope: Define the official dCorps App as the reference interface for Hub operations on testnet.

---

## 1. Purpose and role

The official app is the reference console for managing Hub entities on testnet. It is non-custodial and does not define protocol authority. It submits signed actions, displays chain state, and surfaces derived views so teams can operate consistently across templates and tooling.

---

## 2. Core capabilities

The official app supports the full set of core module actions for corporations and nonprofits:

- Entity setup, template selection, and public profile metadata.
- Entity naming, disclosure mode, and premium namespace management.
- Cap table configuration for unit classes, pools, option grants, vesting schedules, and transfer approvals.
- Role bindings for owners, boards, officers, and employee operators with approval thresholds.
- Board and committee setup with resolutions, votes, and approval trails.
- Venture rounds, investor consents, round terms, investor rosters, and pool updates tied to cap table actions.
- Canonical wallet bindings for treasury, operations, payroll, merchant, donation, and reserve flows.
- Governance actions for approvals, policy updates, and authority changes.
- Meeting minutes, policy anchors, and agreement hashes for employment and option grants.
- Invoicing, payment requests, and merchant checkout flows.
- Payroll, salary schedules, contractor payouts, and reimbursements.
- Donations, restricted funds, and grant distribution flows.
- Product and service catalog items plus recurring plans (where supported).
- Tagging and evidence anchors for operational classification and transparency.
- Treasury moves, reserve segmentation, gas funding, registration or renewal service fees, premium namespaces, module participation fees, and fee tracking.
- Service fee source wallet selection for registration, renewal, premium namespace, and module participation charges.
- Premium namespace flows with availability checks, reservations, fee payments, renewals, and releases.
- Standing status, renewal timelines, and renewal flows tied to governance-backed lifecycle changes.
- Module attachment views and status surfaces for optional overlays.
- Template upgrades and downgrades with lifecycle status visibility for entity standing.

---

## 3. Template coverage

The app supports every Hub template and shows the correct approval paths for each:

- Corporations: CORP-SOLO, CORP-PRIVATE-STD, CORP-VENTURE, CORP-COMPLEX-PRIVATE.
- Nonprofits: NONPROFIT-SIMPLE, NONPROFIT-BOARD, NONPROFIT-COMPLEX.

---

## 4. Views and verification

The app is downstream from protocol state. It links to or embeds:

- Registry state for identity, roles, and wallet bindings.
- Explorer pages for public history and transaction verification.
- Official indexer views for derived summaries and coverage signals.

Independent indexers can reproduce the same derived views by following the shared schemas.

---

## 5. Boundaries (testnet)

- Non-custodial: user wallets control keys and signatures.
- Testnet-scoped: resets and parameter shifts are expected.
- No legal, compliance, or production readiness guarantees.
- Protocol state and specs remain the sole source of correctness.
