# DCHUB Token – Genesis Plan

**Document type**: Token plan  
**Doc ID**: TOKEN-GENESIS-PLAN  
**Status**: Draft v0.1  
**Source repo**: dcorps-docs (`docs/token/TOKEN-GENESIS-PLAN.md`)

> Scope: Initial supply, allocations, vesting, and launch mechanics for DCHUB at network genesis. Numeric values are placeholders until finalized via governance and legal review.

---

## 1. Overview

The genesis plan defines:

- the initial total supply of DCHUB at network launch;
- how that supply is allocated across key stakeholders and purposes;
- vesting and lockup mechanisms to align incentives over the long term;
- operational steps required to construct and verify the genesis state.

The plan aims to:

- ensure sufficient security and funding for early development;
- align long-term contributors, not short-term speculation;
- maintain flexibility for future governance decisions.

---

## 2. Initial supply and allocations

The initial total supply at genesis (denoted `S_genesis`) is to be determined. Conceptually, it will be allocated across:

- community and ecosystem – grants, public goods, partnerships;
- core contributors – teams who build and maintain the protocol;
- foundation and reserves – long-term stewardship and strategic initiatives;
- early backers (if any) – subject to separate agreements;
- public and/or future distributions – for future community alignment.

Exact percentages and amounts are:

- documented in a finalized revision of this plan;
- reflected precisely in the genesis file and any legal documentation;
- approved via governance where appropriate.

---

## 3. Vesting and lockups

To promote long-term alignment:

- allocations to core contributors and early backers are subject to multi-year vesting with meaningful cliffs;
- foundation and ecosystem allocations are subject to transparent governance and disbursement policies.

Vesting may be implemented via:

- on-chain vesting accounts or contracts;
- off-chain legal agreements mirrored by on-chain behavior.

Where on-chain vesting is used, parameters (start times, cliffs, schedules) are encoded in the genesis state and verifiable by anyone.

---

## 4. Genesis state construction

Constructing the genesis state involves:

- defining all initial accounts, balances, and vesting schedules;
- specifying initial validator set and staking allocations, if any;
- setting initial parameters as described in `SPEC-PARAMS.md`.

The process includes:

- a reproducible script or tool for assembling the genesis file from human-readable configuration;
- independent verification by multiple parties (e.g. hash checks, sample balances);
- testnet dry-runs using the same or similar genesis state.

Any later modifications to the genesis plan prior to launch are:

- documented in version control;
- re-verified against the new genesis file;
- communicated clearly to prospective participants.

---

## 5. Launch phases and safeguards

Launch may be structured into phases such as:

- private testnets – early validation of functionality and security;
- public testnets – wider testing and integration by ecosystem participants;
- genesis dry-run – full rehearsal of the planned mainnet genesis;
- mainnet launch – activation of genesis, initial staking, and governance.

Safeguards include:

- explicit criteria for progressing from one phase to the next;
- go/no-go checklists for mainnet launch (e.g. audits, tooling readiness);
- contingency plans for delaying launch or rolling back to a prior phase if critical issues are discovered.

The final mainnet launch decision is a coordinated action between on-chain governance, validators, and the foundation, with clear communication to all stakeholders.

