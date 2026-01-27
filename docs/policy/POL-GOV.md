# Governance Charter

**Document type**: Policy  
**Doc ID**: POL-GOV  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/policy/POL-GOV.md](/policy/POL-GOV))  
**Last updated**: 2026-01-25

> Scope: Governance structures and processes for the dCorps protocol and related artifacts. This charter describes how decisions are proposed, evaluated, and adopted at the protocol level.

Status note: Current project status is Phase 0A (development). On-chain governance is not live until mainnet. This charter documents intended governance for mainnet and beyond; interim founder-led process is described in [docs/policy/POL-GOV-TRANSITION.md](/policy/POL-GOV-TRANSITION).

For the phased plan from founder-led pre-mainnet work through foundation readiness, see [docs/policy/POL-GOV-TRANSITION.md](/policy/POL-GOV-TRANSITION).

---

## 1. Mission and principles

The governance mission is to:

- keep the dCorps Hub minimal, neutral, and infrastructure-focused;
- protect the integrity of the entity registry and data standards;
- evolve the protocol cautiously as ecosystem needs change;
- ensure transparency and accountability for major decisions.

Key principles:

- **Safety over speed** – changes that affect security, token supply and emissions mechanics, or recognition move slowly and predictably.
- **Neutrality** – the Hub does not favor specific jurisdictions, entities, or applications beyond transparent, policy-based distinctions.
- **Transparency** – major decisions and their rationales are documented and discoverable.
- **Subsidiarity** – where possible, decisions are pushed to entities, modules, and applications rather than centralized at the Hub.

---

## 2. Governance bodies

Governance involves both on-chain and off-chain actors:

- **On-chain token governance**
  - DCHUB holders (direct or delegated) participate in on-chain voting on proposals affecting the protocol, parameters, and recognition.
- **dCorps Foundation (planned; not yet incorporated)**
  - Intended nonprofit steward that can propose changes, fund development, and act as an interface with regulators and partners, subject to this charter and `POL-FOUNDATION.md` once the foundation exists.
- **Core development teams**
  - Independent teams that design and implement protocol upgrades, subject to on-chain approval.
- **Advisory and working groups**
  - Time-bounded or topic-specific groups (e.g. security advisory group, data standards group) that provide recommendations but do not have unilateral authority.

This policy does not grant additional formal voting power to off-chain bodies; their influence is exercised through proposals, expertise, and reputational trust.

### 2.1 Protocol Council (advisory)

The Protocol Council is an advisory body intended to:

- review high-impact proposals and publish non-binding recommendations;
- coordinate cross-domain review (security, economics, data standards);
- flag proposals that require extended review or emergency scrutiny.

The Council does not have veto power. It is advisory only.

### 2.2 Council membership and rotation

Baseline council structure:

- 7 members with mixed expertise (protocol, security, ops, ecosystem).
- Term length: 12 months.
- Maximum consecutive terms: 2.
- Members must disclose conflicts of interest and recuse where applicable.

Selection:

- Nominated and appointed via on-chain governance.
- Removal can occur via governance for cause or inactivity.

---

## 3. Proposal types and lifecycle

### 3.1 Proposal types

Core proposal categories include:

- **Parameter change proposals**
  - Modify values defined in `SPEC-PARAMS.md`.
- **Module lifecycle proposals**
  - Register, upgrade, deprecate, or withdraw modules under `SPEC-MODULES.md`.
- **Registry and operator policy proposals**
  - Update registry labels, module eligibility rules, operator role policies, or bridge gateway parameters.
- **Software upgrade proposals**
  - Enact protocol upgrades (contract changes or rollup configuration updates).
- **Treasury and budget proposals**
  - Allocate funds from community or protocol treasuries, per `POL-TREASURY.md`.
- **Policy and documentation proposals**
  - Adopt or amend policies and core documentation such as this charter.

### 3.2 Lifecycle

For each proposal:

1. **Pre-proposal discussion**
   - Proponents socialize the idea, gather feedback, and document alternatives.
2. **Submission**
   - A proposal is submitted on-chain with required metadata, references, and a minimum deposit.
3. **Deposit period**
   - Additional deposits may be required to reach the `min_deposit` threshold for voting.
4. **Voting period**
   - Stake-weighted voting occurs according to governance parameters.
5. **Outcome**
   - If quorum and threshold requirements are met without veto, the proposal is accepted; otherwise it fails or is vetoed.
6. **Execution**
   - Approved proposals are executed, either automatically (parameter changes) or via coordinated upgrades and processes.

All major proposals SHOULD include a durable public rationale in the proposal itself and in any linked supporting documents.

---

## 4. Voting and decision rules

On-chain governance uses token-weighted voting with standard options (e.g. Yes, No, No with veto, Abstain).

Key rules (subject to `SPEC-PARAMS.md`):

- **Quorum** – minimum percentage of voting power that must participate for a proposal to be valid.
- **Threshold** – minimum fraction of non-abstaining votes that must be Yes.
- **Veto threshold** – fraction of No-with-veto votes that triggers rejection regardless of other votes.

Governance should:

- apply stricter thresholds and longer voting periods for high-impact proposals (e.g. operator role changes, bridge parameter changes, recognition withdrawal);
- use shorter periods for low-risk items (e.g. non-breaking documentation updates) where supported by parameters.

Delegation mechanisms should make it easy for token holders to delegate voting power while retaining ultimate control.

### 4.1 Protected Changes (higher thresholds)

Some proposal classes are designated as **Protected Changes** and are intended to require higher approval thresholds and additional safety mechanisms.

Examples include:

- re-enabling emergency powers after a sunset period;
- material changes to bridge gateway assumptions or operator role constraints;
- changes to hard limits that protect non-custodial boundaries and censorship-resistance commitments.

Baseline requirement for a Protected Change (see [docs/whitepaper/WHITEPAPER_LONG.md](/whitepaper/WHITEPAPER_LONG), section 13.3.5):

- **Quorum**: 25% of voting power participating
- **Passing threshold**: 67% Yes of participating voting power

In addition, Protected Changes are expected to include:

- **Voting-power age requirement (anti-raid)**: only DCHUB locked for a parameterized minimum age is counted toward quorum and voting power for Protected Changes.
- **Execution timelock**: after a Protected Change passes, execution occurs only after a parameterized delay unless a narrowly defined emergency path applies.

---

## 5. Upgrades and emergency procedures

### 5.1 Planned upgrades

Planned upgrades include changes to:

- protocol contracts and rollup configuration parameters;
- core data structures and schemas;
- major economic or recognition rules.

For planned upgrades:

- proposals include upgrade plans, testing summaries, and rollback strategies;
- operators and infrastructure providers are given sufficient lead time to prepare;
- the foundation (once incorporated) coordinates communication and support; until then, coordination is founder-led and/or delegated to the relevant working group.

### 5.2 Emergency actions

In rare cases (e.g. severe vulnerabilities, catastrophic chain failures), faster action may be necessary. Emergency measures can include:

- halting or rate-limiting certain message types;
- temporarily raising fees or rate limits to mitigate attacks;
- coordinated off-chain actions by operators.

Emergency use is:

- narrowly scoped and time-limited;
- transparently documented after the fact, including rationale and alternatives considered;
- followed by a formal governance review to ratify or unwind actions.

The default assumption is that emergency powers are used very rarely and only to protect the integrity of the system.

### 5.3 Emergency powers sunset and override

- Emergency powers are time-limited and automatically sunset 90 days after activation.
- Re-enabling emergency powers requires a Protected Change with higher thresholds and an execution timelock.
- The Protocol Council SHOULD publish a public rationale and review summary for any emergency extension proposal.

---

## 6. Transparency and accountability

To maintain trust:

- all proposals, votes, and outcomes are recorded on-chain and easily accessible via explorers and APIs;
- major decisions have durable rationale in governance proposal records and public communications;
- once the foundation exists, the foundation and core teams publish periodic governance reports, including:
  - proposals made and their outcomes;
  - upgrades executed;
  - parameter changes and their expected impact.

Conflicts of interest should be disclosed by proponents and major voters where relevant, especially for treasury allocations or changes that materially benefit specific parties.
