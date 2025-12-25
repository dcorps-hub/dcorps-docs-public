# Genesis Plan

**Document type**: Token plan  
**Doc ID**: TOKEN-GENESIS-PLAN  
**Status**: Final v0.1  
**Source repo**: dcorps-docs-public ([docs/token/TOKEN-GENESIS-PLAN.md](/token/TOKEN-GENESIS-PLAN))  
**Publishing date**: 2025-12-24  
**Last updated**: 2025-12-24  

> Scope: Initial supply, allocations, vesting, and launch mechanics for DCHUB at network genesis. This plan aligns with the token model in [docs/whitepaper/WHITEPAPER_LONG.md](/whitepaper/WHITEPAPER_LONG) (section 10).

---

## 1. Overview

The genesis plan defines:

- the initial total supply of DCHUB at network launch (TGE);
- how that supply is allocated across key stakeholder and protocol pools;
- vesting, lockups, and release caps that constrain transferable supply;
- operational steps required to construct and verify the genesis state.

The plan aims to:

- ensure sufficient security and funding for early development;
- align long-term contributors, not short-term speculation;
- maintain flexibility for future governance decisions.

---

## 2. Initial supply and allocations

In v1, DCHUB is designed with a fixed hard-cap supply minted at genesis.

- **Hard-cap total supply at genesis**: 1,000,000,000 DCHUB
- **Supply creation**: the full hard-cap supply is created once at genesis and assigned into vesting accounts and governance-controlled module accounts (no discretionary inflation beyond genesis; see [docs/whitepaper/WHITEPAPER_LONG.md](/whitepaper/WHITEPAPER_LONG), section 10.3).

An indicative allocation at genesis is:

- **Founder**: 15% (150,000,000)
- **Core team and future contributors**: 10% (100,000,000)
- **Investors**: 10% (100,000,000)
- **Community and ecosystem programs**: 35% (350,000,000)
- **Staking and validator rewards**: 18% (180,000,000)
- **Protocol Treasury**: 5% (50,000,000)
- **dCorps foundation**: 5% (50,000,000)
- **Liquidity bootstrap (operational liquidity)**: 2% (20,000,000)

Genesis custody stance (design intention):

- Founder, team, and investor allocations are held in on-chain enforced vesting or lockup contracts.
- Community and ecosystem programs allocation is held in governance-controlled module accounts or contracts with explicit release rules.
- Staking and validator rewards allocation is held in the distribution module account and becomes circulating only as rewards are paid out.
- Protocol Treasury and foundation allocations are held in non-delegating accounts or contracts, non-voting by default, with governed release paths.
- Liquidity bootstrap allocation may be deployed for operational liquidity under a published liquidity plan and Treasury policy.

---

## 3. Vesting and lockups

To promote long-term alignment:

- allocations to insiders (founder, team, investors) use multi-year vesting and lockups with meaningful cliffs;
- rewards and community allocations have explicit release schedules and caps;
- Treasury and foundation allocations are governed by on-chain controls and policies.

Vesting may be implemented via:

- on-chain vesting accounts or contracts;
- off-chain legal agreements mirrored by on-chain behavior.

Where on-chain vesting is used, parameters (start times, cliffs, schedules) are encoded in the genesis state and verifiable by anyone.

Indicative v1 schedules (see [docs/whitepaper/WHITEPAPER_LONG.md](/whitepaper/WHITEPAPER_LONG), section 10.4 and 10.4A):

- **Founder (15%)**: 24-month cliff, then linear vesting from month 24 to month 96 after TGE (monthly unlocks).
- **Core team and future contributors (10%)**: typical 12-month cliff, then 36-month linear vesting (longer for some roles).
- **Investors (10%)**: typical 12-month lockup, then linear vesting from month 12 to month 48 after TGE.
- **Staking and validator rewards (18%)**: distributed via a published schedule capped by the rewards pool (genesis default schedule described in section 10.4A.5 of the Whitepaper Long).
- **Community and ecosystem programs (35%)**: governed releases with explicit annual and quarterly release caps (Whitepaper Long section 10.4A.6).

For baseline schedules, see [docs/token/TOKEN-VESTING-SCHEDULES.md](/token/TOKEN-VESTING-SCHEDULES).

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

At minimum, genesis verification should confirm:

- total minted supply equals the hard-cap supply;
- allocation totals match the documented breakdown;
- vesting/lockup contracts are configured as intended (cliffs, start times, unlock cadence);
- module accounts (rewards pool, community programs, Treasury, foundation) match intended custody and permissions.

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
