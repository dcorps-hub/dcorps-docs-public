# Vesting Schedules

**Document type**: Token reference  
**Doc ID**: TOKEN-VESTING-SCHEDULES  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/token/TOKEN-VESTING-SCHEDULES.md](/token/TOKEN-VESTING-SCHEDULES))  
**Last updated**: 2025-12-24  

> Scope: Baseline vesting and lockup schedules for DCHUB allocations. These align with the Whitepaper Long and Genesis Plan.

---

## 1. Principles

- Vesting is on-chain where possible.
- Insider allocations are long-term and back-loaded.
- Schedule details are encoded in the genesis state.

---

## 2. Baseline schedules (v1)

| Allocation | Cliff / lockup | Vesting duration | Notes |
| --- | --- | --- | --- |
| Founder (15%) | 24 months | 72 months | Linear monthly unlocks after cliff |
| Core team and future contributors (8%) | 18 months | 48 months | Linear monthly unlocks after cliff |
| Seed investors (2.5%) | 12 months | 36 months | Linear monthly unlocks after lockup |
| Series A investors (3.5%) | 9 months | 36 months | Linear monthly unlocks after lockup |
| Series B investors (3%) | 6 months | 30 months | Linear monthly unlocks after lockup |
| Series C investors (2%) | 3 months | 24 months | Linear monthly unlocks after lockup |
| Public sale / ICO (4%) | 10% at TGE | 12 months | Remaining 90% linear vesting |

Community, rewards, and treasury allocations follow programmatic release rules and are not time-vested in the same way.

---

## 3. Rewards and program pools

- Staking and validator rewards: released according to the schedule in [docs/token/TOKEN-EMISSIONS-NOTES.md](/token/TOKEN-EMISSIONS-NOTES).
- Community and ecosystem programs: governed releases subject to caps defined in the Whitepaper Long.
- Treasury and foundation allocations: governed releases with reporting requirements.

---

## 4. Change control

Any change to vesting schedules requires governance approval and an update to this document (and, where applicable, the genesis plan).
