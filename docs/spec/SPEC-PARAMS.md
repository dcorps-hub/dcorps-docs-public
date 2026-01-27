# Protocol Parameters

**Document type**: Normative spec  
**Doc ID**: SPEC-PARAMS  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/spec/SPEC-PARAMS.md](/spec/SPEC-PARAMS))  
**Last updated**: 2026-01-25

> Scope: Parameter catalog and economic rules for the Hub rollup. This spec defines how parameters are modeled and governed, not their final numeric values.

---

## 1. Introduction

The dCorps Hub is designed to be economically sustainable, governance-minimal, and predictable for serious entities and operators. Many behaviors of the Hub are controlled by **parameters** rather than hard-coded constants so that governance can adjust to changing conditions without frequent upgrades.

This document:

- defines the categories of parameters used by the Hub;
- describes how parameters are stored, validated, and changed;
- outlines core economic relationships (fees and registry economics);
- clarifies which parameters are mutable by governance and under what constraints.

Actual parameter values and recommended starting points SHOULD be maintained in a separate configuration document and cross-referenced here.

Baseline defaults are recorded in [docs/devops/NETWORK_PARAMS.md](/devops/NETWORK_PARAMS).

---

## 2. Parameter catalog

Parameters are grouped into logical domains. Each parameter has:

- **Name** – canonical identifier (e.g. `base_fee_rate`);
- **Domain** – e.g. `fees`, `governance`, `registry`, `bridge`;
- **Type** – integer, decimal, duration, boolean, enum, or struct;
- **Units** – where applicable (e.g. DCHUB, USDC, percentage);
- **Default value** – recommended default for new networks;
- **Valid range** – inclusive range or discrete set of allowed values;
- **Governance control** – proposal type and approval thresholds required to modify it.

### 2.1 Fee parameters

Examples of fee-related parameters include:

- `tx_min_gas_price` (decimal, in DCHUB) – minimum gas price enforced by the rollup.
- `entity_registration_fee` (integer, in USDC or DCHUB) – base fee to register an entity.
- `module_registry_fee` (integer, in USDC or DCHUB) – fee for module submissions or renewals.
- `anchor_submit_fee` (integer, in USDC or DCHUB) – fee for document anchoring.

Changes to these parameters MUST be proposed via a **parameter change proposal** and SHOULD include modeled impact on usage and protocol sustainability.

### 2.2 Governance parameters

Governance parameters include:

- `voting_period` (duration) – time window during which votes are accepted.
- `min_deposit` (integer) – minimum deposit to enter voting.
- `quorum` (decimal) – minimum participation required for validity.
- `threshold` (decimal) – majority threshold for passing proposals.
- `veto_threshold` (decimal) – fraction of veto votes required to reject a proposal.
- `timelock_delay` (duration) – delay between approval and execution for protected changes.

Certain proposal types MAY override defaults with stricter requirements, e.g. protocol-breaking changes.

### 2.3 Registry and bridge parameters

Registry- and bridge-related parameters may include:

- `allowed_assets` – canonical stablecoin contract allowlist.
- `bridge_gateway_allowlist` – approved L1/L2 gateway contract addresses.
- `module_risk_labels` – enumerated risk labels and constraints for modules.

These parameters tie directly into `SPEC-MODULES.md` and `SPEC-CORE.md`.

---

## 3. Fees and protocol revenues

### 3.1 Transaction fees

The Hub charges transaction fees to:

- prevent spam and prioritize limited block space; and
- fund rollup operations and protocol sustainability under governance policy.

Fee calculation MUST include:

- gas metering based on computational and storage costs; and
- a configurable minimum gas price (`tx_min_gas_price`) denominated in DCHUB.

Implementations MAY support fee grants or sponsored transactions as described in the Whitepaper Long, but MUST ensure that:

- fee grants do not bypass protocol controls (grants are limited and revocable);
- fee grants are auditable and can be tagged for reporting purposes.

### 3.2 Protocol-level fees

Protocol-level fees include entity registration, module registry actions, and anchor submissions. Fee routing (operator compensation vs treasury share) MUST be transparent and governed by on-chain policy.

---

## 4. Governance over parameters

### 4.1 Parameter change proposals

Any change to parameters defined in this spec MUST go through an on-chain governance process that:

- specifies which parameters are being changed and from what values to what values;
- includes a human-readable rationale and risk assessment;
- references any supporting analyses or documents where appropriate.

Implementations SHOULD enforce proposal validation to prevent:

- setting parameters outside their defined valid ranges; and
- setting combinations of parameters that are known to be unsafe.

### 4.2 Safeguards and timelocks

For sensitive parameters (e.g. bridge allowlists, timelock delays), governance SHOULD:

- require higher quorum/thresholds;
- enforce timelocks between proposal approval and execution; and
- provide clear communication to stakeholders before changes take effect.

### 4.3 Documentation and transparency

All parameter changes MUST be:

- recorded on-chain;
- reflected in off-chain documentation and dashboards; and
- cross-referenced in the Whitepaper Long and public release notes where they affect protocol behavior.

This spec, together with `SPEC-CORE.md`, SHOULD be kept up to date as parameters evolve, to avoid drift between documentation and actual behavior.
