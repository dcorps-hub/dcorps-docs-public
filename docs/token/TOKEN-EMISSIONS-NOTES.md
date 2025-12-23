# DCHUB Token – Emissions and Rewards

**Document type**: Token reference  
**Doc ID**: TOKEN-EMISSIONS-NOTES  
**Status**: Final v0.1  
**Source repo**: dcorps-docs (`docs/token/TOKEN-EMISSIONS-NOTES.md`)

> Scope: How DCHUB enters circulation over time under the fixed-supply model described in `docs/master/DCHUB_MASTER.md` (section 10). This document describes protocol mechanics, not market outcomes.

---

## 1. Definitions

This document uses the same vocabulary as the Master Reference:

- **Minted supply**: DCHUB that exists on-chain, including tokens held in vesting contracts, module accounts, and distribution pools.
- **Circulating supply**: DCHUB that is transferable by its holder without time locks or vesting restrictions and without a governance-controlled release step.
- **Emissions**: tokens entering circulation from predefined allocations (for example the staking and validator rewards pool), not supply creation beyond the fixed cap.

---

## 2. v1 supply stance (no discretionary inflation)

In v1, the design intention is:

- total DCHUB supply is hard-capped and fully minted at genesis; and
- there is no discretionary inflation path intended to create additional DCHUB beyond what was created at genesis.

“Emissions” refers to circulation over time from:

- rewards distribution,
- governed releases from program pools, and
- vesting unlocks from time-locked allocations.

---

## 3. How DCHUB enters circulation

In practice, DCHUB enters circulating supply through a small number of explicit mechanisms:

1. **Staking and validator rewards pool distribution**  
   Rewards paid out from the rewards pool become circulating when distributed to validators and delegators.
2. **Community and ecosystem program releases**  
   Tokens leave governance-controlled custody through explicit grants, programs, or distributions, subject to release caps.
3. **Insider vesting unlocks**  
   Founder, team, and investor tokens enter circulation as they vest and become transferable.
4. **Liquidity bootstrap deployment (if any)**  
   A limited portion of supply may be deployed for operational liquidity at or shortly after TGE (subject to policy and disclosures).

All of these mechanisms are intended to be visible as on-chain state, contract schedules, and/or explicit governance actions.

---

## 4. Staking and validator rewards schedule (genesis default)

The Master Reference defines an illustrative genesis default schedule for the staking and validator rewards pool that sums to the pool cap of 180,000,000 DCHUB (see `docs/master/DCHUB_MASTER.md`, section 10.4A.5).

Illustrative schedule (per year after TGE):

- Year 1: 40,000,000
- Year 2: 35,000,000
- Year 3: 30,000,000
- Year 4: 25,000,000
- Year 5: 20,000,000
- Year 6: 15,000,000
- Year 7: 10,000,000
- Year 8: 5,000,000

Total: 180,000,000

As the rewards pool becomes materially depleted, the design intention is that validator incentives shift primarily to fee-based rewards (see `docs/master/DCHUB_MASTER.md`, section 10.6).

---

## 5. Community release caps (initial guardrails)

To reduce sudden changes in circulating supply, the Master Reference describes explicit release caps for community program releases (see `docs/master/DCHUB_MASTER.md`, section 10.4A.6).

Design intention for v1:

- Maximum release into circulating supply: 50,000,000 DCHUB per year (measured over a rolling four-quarter window).
- Maximum release in any single quarter: 20,000,000 DCHUB.

These caps apply to tokens leaving governance-controlled community custody into transferable user addresses. Internal movements within governance-controlled custody do not count as “release”.

---

## 6. Governance controls and change safety

Governance can adjust distribution parameters within predefined bounds and under the process described in the Governance Charter (`docs/policy/POL-GOV.md`).

Changes that materially increase near-term emissions or raise release caps should be treated as high-impact changes and require stronger approval thresholds and longer lead times, consistent with the Master Reference’s “Protected Change” concept.

---

## 7. Transparency expectations

To keep supply mechanics legible and auditable:

- reference explorers and dashboards should publish minted supply and circulating supply explicitly as separate numbers;
- vesting/lockup contracts and their unlock schedules should be easily inspectable; and
- rewards distributions and governance-controlled releases should be traceable from source module accounts to recipient addresses.
