# dCorps Hub – Protocol Parameters and Economics

**Document type**: Normative spec  
**Doc ID**: SPEC-PARAMS  
**Status**: Final v0.1  
**Source repo**: dcorps-docs-public (`docs/spec/SPEC-PARAMS.md`)

> Scope: Parameter catalog and economic rules for the Hub and Hub-aligned sub chains. This spec defines how parameters are modeled and governed, not their final numeric values.

---

## 1. Introduction

The dCorps Hub is designed to be economically sustainable, governance-minimal, and predictable for serious entities and validators. Many behaviors of the Hub are controlled by **parameters** rather than hard-coded constants so that governance can adjust to changing conditions without frequent hard forks.

This document:

- defines the categories of parameters used by the Hub;
- describes how parameters are stored, validated, and changed;
- outlines core economic relationships (fees, rewards, staking, recognition economics);
- clarifies which parameters are mutable by governance and under what constraints.

Actual parameter values and recommended starting points SHOULD be maintained in a separate configuration document or genesis file and cross-referenced here.

Baseline defaults are recorded in `docs/devops/NETWORK_PARAMS.md`.

---

## 2. Parameter catalog

Parameters are grouped into logical domains. Each parameter has:

- **Name** – canonical identifier (e.g. `base_fee_rate`);
- **Domain** – e.g. `fees`, `staking`, `governance`, `recognition`;
- **Type** – integer, decimal, duration, boolean, enum, or struct;
- **Units** – where applicable (e.g. DCHUB, percentage, blocks);
- **Default value** – recommended default for new networks;
- **Valid range** – inclusive range or discrete set of allowed values;
- **Governance control** – proposal type and approval thresholds required to modify it.

### 2.1 Fee parameters

Examples of fee-related parameters include:

- `tx_min_gas_price` (decimal, in DCHUB or other base denoms) – minimum gas price validators are encouraged to enforce.
- `entity_registration_fee` (integer, in a stablecoin or DCHUB) – base fee to register an entity.
- `anchor_submit_fee` – fee charged for sub chain anchor submissions.

Changes to these parameters MUST be proposed via a **parameter change proposal** and SHOULD include modeled impact on usage and validator economics.

### 2.2 Staking and validator parameters

Key staking parameters include:

- `unbonding_period` (duration) – minimum time to unbond staked tokens.
- `max_validators` (integer) – maximum number of active validators.
- `min_self_delegation` (integer) – minimum self-stake for validators.
- `slash_double_sign` / `slash_downtime` (decimal) – slashing fractions for specific misbehaviors.

These parameters MUST be chosen to balance security, decentralization, and operator viability, and MUST be updated conservatively.

### 2.3 Governance parameters

Governance parameters include:

- `voting_period` (duration) – time window during which votes are accepted.
- `min_deposit` (integer) – minimum deposit to enter voting.
- `quorum` (decimal) – minimum participation required for validity.
- `threshold` (decimal) – majority threshold for passing proposals.
- `veto_threshold` (decimal) – fraction of veto votes required to reject a proposal.

Certain proposal types MAY override defaults with stricter requirements, e.g. protocol-breaking changes.

### 2.4 Recognition and module parameters

Recognition-related parameters may include:

- `recognition_deposit_standard` – minimum deposit for a sub chain to be recognized at the standard tier.
- `recognition_slash_fraction` – fraction of deposit slashed in case of serious violations.
- per-module parameters governing risk labels, allowed operations, or required attestations.

These parameters tie directly into `SPEC-ANCHOR.md` and `SPEC-MODULES.md`.

---

## 3. Fees and rewards

### 3.1 Transaction fees

The Hub charges transaction fees to:

- prevent spam and prioritize limited block space;
- compensate validators and their delegators.

Fee calculation MUST include:

- gas metering based on computational and storage costs;
- a configurable minimum gas price (`tx_min_gas_price`) expressed per gas unit and denominated in one or more accepted fee tokens.

Implementations MAY support fee grants or sponsored transactions as described in the Master Reference, but MUST ensure that:

- fee grants do not bypass economic security (grants are limited and revocable);
- fee grants are auditable and can be tagged for reporting purposes.

### 3.2 Rewards

Validator and delegator rewards come from:

- the staking and validator rewards pool distribution (where a finite rewards pool is used and pre-funded at genesis); and
- a portion of transaction fees.

The reward distribution mechanism MUST:

- allocate rewards proportionally to stake weight and time;
- support commission rates set by validators within governance-approved bounds;
- be transparent and queryable for indexers.

---

## 4. Staking and slashing economics

The Hub uses proof-of-stake with DCHUB as the staking token. This section describes economic expectations; technical details live in the consensus/implementation documentation.

### 4.1 Staking incentives

Staking MUST be designed so that:

- long-term, honest participation is economically attractive;
- the cost of attacking the network is high relative to potential benefit;
- small validators can participate meaningfully, subject to `max_validators`.

Reward pool distribution parameters and fee parameters SHOULD be tuned to support a target **staking participation rate** (e.g. percentage of circulating DCHUB that is staked), while avoiding sudden changes that destabilize validator economics.

### 4.2 Slashing

Slashing parameters define how much stake is destroyed for specific misbehaviors, such as:

- double-signing;
- extended downtime;
- equivocation or proven consensus violations as defined by the consensus layer.

Slashing MUST be:

- deterministic and documented;
- applied proportionally to validators and their delegators based on stake;
- accompanied by events and logs suitable for monitoring and forensics.

Governance MUST exercise caution when changing slashing parameters and SHOULD require stronger thresholds or timelocks for such changes.

---

## 5. Sub chain recognition economics

Sub chains recognized by the Hub may be required to:

- post recognition deposits or bonds denominated in DCHUB;
- maintain specific levels of validator overlap or security metrics;
- pay periodic recognition fees, where specified by governance.

### 5.1 Deposits and bonds

Recognition deposits serve to:

- align sub chain operators with the Hub’s long-term health;
- provide economic recourse in severe cases of misbehavior (e.g. fraudulent anchoring).

Parameters such as `recognition_deposit_standard` MUST define minimum deposits for each recognition tier. Deposits MAY be slashed under conditions defined in `SPEC-ANCHOR.md` and related governance decisions.

### 5.2 Fees and revenue sharing

Recognition fees MAY be used to:

- fund oversight and monitoring of sub chains;
- support development of shared tooling and indexers;
- contribute to community and ecosystem funding.

Any revenue-sharing model between Hub and sub chains MUST be:

- transparent and well documented;
- governed by explicit parameter sets or governance decisions.

---

## 6. Governance over parameters

### 6.1 Parameter change proposals

Any change to parameters defined in this spec MUST go through an on-chain governance process that:

- specifies which parameters are being changed and from what values to what values;
- includes a human-readable rationale and risk assessment;
- references any supporting analyses or documents where appropriate.

Implementations SHOULD enforce proposal validation to prevent:

- setting parameters outside their defined valid ranges;
- setting combinations of parameters that are known to be unsafe.

### 6.2 Safeguards and timelocks

For sensitive parameters (e.g. slashing fractions, recognition deposits), governance SHOULD:

- require higher quorum/thresholds;
- enforce timelocks between proposal approval and execution;
- provide clear communication to stakeholders before changes take effect.

### 6.3 Documentation and transparency

All parameter changes MUST be:

- recorded on-chain;
- reflected in off-chain documentation and dashboards;
- cross-referenced in the Master Reference and public release notes where they affect protocol behavior.

This spec, together with `SPEC-CORE.md`, SHOULD be kept up to date as parameters evolve, to avoid drift between documentation and actual behavior.
