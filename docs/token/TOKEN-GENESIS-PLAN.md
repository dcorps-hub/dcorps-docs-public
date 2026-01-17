# Genesis Plan

**Document type**: Token plan  
**Doc ID**: TOKEN-GENESIS-PLAN  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/token/TOKEN-GENESIS-PLAN.md](/token/TOKEN-GENESIS-PLAN))  
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
- **Core team and future contributors**: 8% (80,000,000)
- **Investors**: 15% (150,000,000)
  - Seed: 2.5% (25,000,000)
  - Series A: 3.5% (35,000,000)
  - Series B: 3% (30,000,000)
  - Series C: 2% (20,000,000)
  - Public sale / ICO (if any): 4% (40,000,000)
- **Community and ecosystem programs**: 33% (330,000,000)
- **Staking and validator rewards**: 18% (180,000,000)
- **Protocol Treasury**: 4% (40,000,000)
- **dCorps foundation**: 4% (40,000,000)
- **Liquidity bootstrap (operational liquidity)**: 3% (30,000,000)

Indicative sub allocation plan for Community and ecosystem programs (33%):

Community and ecosystem programs are intended to be programmatic and transparent, with clear buckets that map to public goods needs. An indicative split is:

- **Security and audits**: 7% (70,000,000)
  - Audits, monitoring, bug bounties, incident response tooling, safety critical infrastructure.
- **Core tooling and developer grants**: 9% (90,000,000)
  - SDKs, indexers, explorers, accounting and payroll tooling, compatibility tooling, module development grants.
- **Jurisdiction pilots and module development**: 6% (60,000,000)
  - jurisdiction adapter pilots, standards work, legal research support, jurisdiction adapter implementation grants.
- **NGO onboarding and support**: 6% (60,000,000)
  - NGO onboarding programs, nonprofit fee waivers where adopted, training, reporting tooling, local capacity building.
- **Ecosystem growth and incentives**: 4.95% (49,500,000)
  - Limited incentives for meaningful adoption, integrations, ecosystem reliability, recruiting incentives, and targeted airdrops, structured as time bounded programs with transparent criteria.
- **Gas-free onboarding credits**: 0.05% (500,000)
  - Time-boxed fee grants that cover entity onboarding gas at scale, with per-entity caps, governance approval, and public reporting.

Entity onboarding gas support may be issued as time-boxed fee grants rather than direct transfers, capped per entity and governed through the community program pool.

These are budget buckets for governance and reporting. They do not imply that the full bucket amount is released early. Release caps and a circulating supply schedule are defined in [docs/whitepaper/WHITEPAPER_LONG.md](/whitepaper/WHITEPAPER_LONG) section 10.4A.

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
- **Core team and future contributors (8%)**: typical 18-month cliff, then 48-month linear vesting (longer for some roles).
- **Investors (15%)**:
  - Seed: 12-month lockup, then 36-month linear vesting.
  - Series A: 9-month lockup, then 36-month linear vesting.
  - Series B: 6-month lockup, then 30-month linear vesting.
  - Series C: 3-month lockup, then 24-month linear vesting.
  - Public sale / ICO (if any): 10% at TGE, 90% linear vesting over 12 months.
- **Staking and validator rewards (18%)**: distributed via a published schedule capped by the rewards pool (genesis default schedule described in section 10.4A.5 of the Whitepaper Long).
- **Community and ecosystem programs (33%)**: governed releases with explicit annual and quarterly release caps (Whitepaper Long section 10.4A.6).

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
