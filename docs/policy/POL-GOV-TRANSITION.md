# Governance Transition Plan

**Document type**: Policy  
**Doc ID**: POL-GOV-TRANSITION  
**Status**: Final v0.1  
**Release date**: December 28, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/policy/POL-GOV-TRANSITION.md](/policy/POL-GOV-TRANSITION))  
**Last updated**: 2025-12-28  

> Scope: A phased governance plan from founder-led pre-mainnet work through foundation readiness. This document describes design intention, not a commitment of timing or outcomes.

---

## 0. Current status (Phase 0A)

- dCorps is in Phase 0A (development). Mainnet is not live and on-chain governance is not active yet.
- The foundation described in this document is not incorporated yet, and any future formation timing is not finalized.
- DevCo and ResCo are planned; incorporation is pending.

This document aims to make “who decides what” legible during pre-mainnet work, while explicitly separating design intention from executed legal arrangements.

---

## 1. Definitions

- **Phases**: use the roadmap definitions in [docs/roadmap/PHASES.md](/roadmap/PHASES).
- **DevCo**: the development company that delivers protocol and tooling work (planned: **dCorps Development Company (BVI)**, “dCorps Dev”; incorporation pending).
- **ResCo**: the research organization intended to focus on protocol adoption analysis and integration planning (planned; incorporation pending).
- **Foundation**: the planned nonprofit steward described in [docs/policy/POL-FOUNDATION.md](/policy/POL-FOUNDATION). No foundation has been incorporated yet.

---

## 2. Phase 0A (static site) — founder-led coordination

Goal: publish a coherent, conservative public baseline for specs, policy, and messaging.

Governance posture:

- Decision authority is founder-led and exercised through published documents and repositories.
- Change control is versioned in Git; material policy changes should be tracked and explained in commit history and/or a public changelog.
- External review is encouraged (security, legal, protocol design), but remains advisory until on-chain governance exists.

Deliverables (governance-specific):

- Publish and maintain the baseline policy set (`POL-GOV`, `POL-FOUNDATION`, `POL-VALIDATORS`, `POL-TREASURY`).
- Publish a public conflict-of-interest posture for any future funding or related-party arrangements (see Section 6).

---

## 3. Phase 0 (pre-mainnet readiness) — governance scaffolding

Goal: make decision-making legible before mainnet so third parties can evaluate risk without private access.

Governance scaffolding (design intention):

- **Proposal workflow**: a public pre-proposal process (drafts, review windows, and “what changes if this passes” summaries) for high-impact items.
- **Security gates**: audit planning, threat model updates, and a clear vulnerability disclosure process for core modules and reference tooling.
- **Key and treasury controls**: explicit signing policy for any privileged keys used in testnet operations and public documentation of who can act.
- **Separation of duties**: avoid “one-key, one-person” critical paths for network and release operations as early as practical.

Foundation readiness preparation:

- Draft the foundation’s initial charter, reporting commitments, and ethics/conflict policies (see [docs/policy/POL-FOUNDATION.md](/policy/POL-FOUNDATION)).
- Decide and publish the intended foundation formation window (design intention):
  - **Option A (preferred where feasible)**: incorporate the foundation **before mainnet** so stewardship, disclosures, and conflict policies exist from day one.
  - **Option B**: incorporate the foundation **after mainnet** while keeping interim coordination legible and time-bounded.
- Define how the foundation can fund multiple providers over time to reduce single-vendor risk.

---

## 4. Phase 1 (mainnet launch) — on-chain governance becomes primary

Goal: transition protocol change control to on-chain governance under `DCHUB` staking and voting, with conservative safety guardrails.

Governance posture (design intention):

- **On-chain voting** is the canonical approval path for protocol upgrades, parameter changes, and module lifecycle decisions (see [docs/policy/POL-GOV.md](/policy/POL-GOV)).
- **Protected Changes** use higher thresholds and safety mechanisms (stake age, timelocks) for high-impact actions.
- **Transparency** is treated as a security control: proposals include durable rationale, risk notes, and references.

If the foundation is not yet operational at launch:

- Interim coordination is still possible (communications, release coordination, external partnerships), but it should not replace on-chain approval paths.
- Any special operational roles should be publicly disclosed, time-bounded, and contestable through governance.

---

## 5. Phase 2 (operational completeness) — foundation becomes operational (when ready)

Goal: shift public-goods stewardship and ecosystem programs into a neutral nonprofit entity without changing kernel semantics or creating a protocol dependency.

Design intention:

- The foundation becomes the default steward for public goods (standards, conformance tests, audit coordination, ecosystem programs) while remaining accountable to on-chain governance.
- The foundation is expected to fund multiple independent providers over time, including but not limited to DevCo/ResCo, to reduce single-vendor risk.
- The foundation’s role is stewardship and coordination, not legal authority and not a guarantee of outcomes.

---

## 6. “Foundation ready” — gating signals (no dates)

“Foundation ready” means the foundation can execute its steward role without becoming a single point of failure or a black box.

Readiness signals (design intention):

- A legally formed nonprofit entity with a published charter/mission and a functioning board.
- Public conflict-of-interest and related-party transaction policies (especially around grants and vendor funding).
- Financial controls and transparent reporting commitments (budgets, grants, and major contracts).
- Operational ability to coordinate audits and public-goods work without claiming protocol authority.
- A published IP stewardship posture (what is held by whom, and what transition steps are intended).

---

## 7. Relationship between DevCo, ResCo, and the foundation

Design intention:

- **DevCo** (dCorps Dev) is a services provider that can deliver protocol and tooling work under clearly scoped, milestone-based agreements.
- **ResCo** (planned; incorporation pending) is intended to support adoption research, analysis, and publication work, and may be commissioned or funded like any other contributor.
- The foundation may fund DevCo/ResCo, but relationships should be:
  - non-exclusive where practical;
  - publicly disclosed (scope, milestones, and reporting expectations);
  - governed by conflict-of-interest rules and recusal requirements;
  - reviewable and replaceable through governance over time.

See also: [docs/legal/DEVCO_AGREEMENT.md](/legal/DEVCO_AGREEMENT), [docs/legal/RESCO_AGREEMENT.md](/legal/RESCO_AGREEMENT), and [docs/legal/STRUCTURE_PATH.md](/legal/STRUCTURE_PATH).

---

## 7A. IP and brand stewardship transition (design intention)

Goal: make ownership and stewardship of core protocol assets explicit and legible, without implying that legal transfers are already executed.

Design intention:

- In early phases, protocol and brand IP may be held by the founder and/or by DevCo once incorporated.
- Once the foundation is incorporated and “foundation ready”, stewardship should migrate to the foundation through a documented legal arrangement (assignment and/or licensing as appropriate), so public-good assets are held by a neutral nonprofit rather than a single for-profit provider.

What should be explicit when it happens (illustrative, not exhaustive):

- what assets are included (e.g., trademarks, domains, website assets, specification copyrights, reference implementations);
- what stays open under open-source licensing and what changes operationally (usually nothing for users);
- what DevCo’s ongoing role is (services provider under contract, not the steward by default);
- how conflicts are managed and disclosed (related-party posture, recusal, reporting).

Timing (not finalized):

- Target posture is to complete the stewardship transition **before mainnet where feasible**; otherwise, publish an interim custody and disclosure plan and complete the transfer as soon as practical after foundation formation.

---

## 8. Change control

Updates to this plan should be reflected in:

- governance proposals (once on-chain governance is live), and
- updates to the relevant policy and legal summary documents in this repo.
