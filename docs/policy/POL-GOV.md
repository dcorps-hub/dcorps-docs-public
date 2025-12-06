# dCorps – Governance Charter

**Document type**: Policy  
**Doc ID**: POL-GOV  
**Status**: Draft v0.1  
**Source repo**: dcorps-docs (`docs/policy/POL-GOV.md`)

> Scope: Governance structures and processes for the dCorps protocol and related artifacts. This charter describes how decisions are proposed, evaluated, and adopted at the protocol level.

---

## 1. Mission and principles

The governance mission is to:

- keep the dCorps Hub minimal, neutral, and infrastructure-focused;
- protect the integrity of the entity registry and data standards;
- evolve the protocol cautiously as ecosystem needs change;
- ensure transparency and accountability for major decisions.

Key principles:

- **Safety over speed** – changes that affect security, monetary policy, or recognition move slowly and predictably.
- **Neutrality** – the Hub does not favor specific jurisdictions, entities, or applications beyond transparent, policy-based distinctions.
- **Transparency** – major decisions and their rationales are documented and discoverable.
- **Subsidiarity** – where possible, decisions are pushed to entities, modules, and sub chains rather than centralized at the Hub.

---

## 2. Governance bodies

Governance involves both on-chain and off-chain actors:

- **On-chain token governance**
  - DCHUB stakers and delegators participate in on-chain voting on proposals affecting the protocol, parameters, and recognition.
- **dCorps Foundation**
  - A nonprofit steward that can propose changes, fund development, and act as an interface with regulators and partners, subject to this charter and `POL-FOUNDATION.md`.
- **Core development teams**
  - Independent teams that design and implement protocol upgrades, subject to on-chain approval.
- **Advisory and working groups**
  - Time-bounded or topic-specific groups (e.g. security advisory group, data standards group) that provide recommendations but do not have unilateral authority.

This policy does not grant additional formal voting power to off-chain bodies; their influence is exercised through proposals, expertise, and reputational trust.

---

## 3. Proposal types and lifecycle

### 3.1 Proposal types

Core proposal categories include:

- **Parameter change proposals**
  - Modify values defined in `SPEC-PARAMS.md`.
- **Module lifecycle proposals**
  - Register, upgrade, deprecate, or withdraw modules under `SPEC-MODULES.md`.
- **Sub chain recognition proposals**
  - Add, upgrade, downgrade, or remove sub chains under `SPEC-ANCHOR.md`.
- **Software upgrade proposals**
  - Enact protocol upgrades (state machine or consensus changes).
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

All major proposals should be summarized in `DECISION_LOG.md` once resolved.

---

## 4. Voting and decision rules

On-chain governance uses stake-weighted voting with standard options (e.g. Yes, No, No with veto, Abstain).

Key rules (subject to `SPEC-PARAMS.md`):

- **Quorum** – minimum percentage of voting power that must participate for a proposal to be valid.
- **Threshold** – minimum fraction of non-abstaining votes that must be Yes.
- **Veto threshold** – fraction of No-with-veto votes that triggers rejection regardless of other votes.

Governance should:

- apply stricter thresholds and longer voting periods for high-impact proposals (e.g. slashing changes, recognition withdrawal);
- use shorter periods for low-risk items (e.g. non-breaking documentation updates) where supported by parameters.

Delegation mechanisms should make it easy for token holders to delegate voting power while retaining ultimate control.

---

## 5. Upgrades and emergency procedures

### 5.1 Planned upgrades

Planned upgrades include changes to:

- protocol code (state machine and consensus parameters);
- core data structures and schemas;
- major economic or recognition rules.

For planned upgrades:

- proposals include upgrade plans, testing summaries, and rollback strategies;
- validators and node operators are given sufficient lead time to prepare;
- the foundation coordinates communication and support.

### 5.2 Emergency actions

In rare cases (e.g. severe vulnerabilities, catastrophic chain failures), faster action may be necessary. Emergency measures can include:

- halting or rate-limiting certain message types;
- temporarily raising fees or slashing parameters to mitigate attacks;
- coordinated off-chain actions by validators.

Emergency use is:

- narrowly scoped and time-limited;
- transparently documented after the fact, including rationale and alternatives considered;
- followed by a formal governance review to ratify or unwind actions.

The default assumption is that emergency powers are used very rarely and only to protect the integrity of the system.

---

## 6. Transparency and accountability

To maintain trust:

- all proposals, votes, and outcomes are recorded on-chain and easily accessible via explorers and APIs;
- major decisions are summarized in `DECISION_LOG.md` with context and rationale;
- the foundation and core teams publish periodic governance reports, including:
  - proposals made and their outcomes;
  - upgrades executed;
  - parameter changes and their expected impact.

Conflicts of interest should be disclosed by proponents and major voters where relevant, especially for treasury allocations or changes that materially benefit specific parties.

