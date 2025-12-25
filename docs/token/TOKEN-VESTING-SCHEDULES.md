# DCHUB Token – Vesting Schedules

**Document type**: Token reference  
**Doc ID**: TOKEN-VESTING-SCHEDULES  
**Status**: Final v0.1  
**Source repo**: dcorps-docs-public (`docs/token/TOKEN-VESTING-SCHEDULES.md`)

> Scope: Baseline vesting and lockup schedules for DCHUB allocations. These align with the Master Reference and Genesis Plan.

---

## 1. Principles

- Vesting is on-chain where possible.
- Insider allocations are long-term and back-loaded.
- Schedule details are encoded in the genesis state.

---

## 2. Baseline schedules (v1)

| Allocation | Cliff | Vesting duration | Notes |
| --- | --- | --- | --- |
| Founder (15%) | 24 months | 72 months | Linear monthly unlocks after cliff |
| Core team and future contributors (10%) | 12 months | 36 months | Linear monthly unlocks after cliff |
| Investors (10%) | 12 months | 36 months | Linear monthly unlocks after lockup |

Community, rewards, and treasury allocations follow programmatic release rules and are not time-vested in the same way.

---

## 3. Rewards and program pools

- Staking and validator rewards: released according to the schedule in `docs/token/TOKEN-EMISSIONS-NOTES.md`.
- Community and ecosystem programs: governed releases subject to caps defined in the Master Reference.
- Treasury and foundation allocations: governed releases with reporting requirements.

---

## 4. Change control

Any change to vesting schedules requires governance approval and an update to this document (and, where applicable, the genesis plan).
