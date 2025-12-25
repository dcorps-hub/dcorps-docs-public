# DCHUB Token – Policy

**Document type**: Token policy  
**Doc ID**: TOKEN-POLICY  
**Status**: Final v0.1  
**Source repo**: dcorps-docs-public (`docs/token/TOKEN-POLICY.md`)

> Scope: Purpose, allowed uses, and constraints for the DCHUB token, consistent with the Master Reference disclaimers. This document is not an offer or solicitation of any kind.

---

## 1. Purpose and nature of DCHUB

DCHUB is the native token of the dCorps Hub. It is intended to serve as:

- the gas token for transactions on the Hub;
- the staking token providing economic security for consensus;
- a governance token for on-chain decision-making;
- the economic root for recognition and anchoring relationships with sub chains.

DCHUB is not:

- equity or shares in any corporation or nonprofit;
- a right to dividends, profits, or residual assets;
- a guarantee of price appreciation or investment performance.

Any sale, distribution, or other transfer of DCHUB that might have legal implications is handled under separate, dedicated documentation and terms.

---

## 2. Utility and use cases

DCHUB’s intended uses include:

- paying transaction fees on the Hub;
- staking to participate in consensus and earn rewards;
- delegating to validators to share in staking rewards and support network security;
- bonding or depositing for sub chain recognition or module-related economics where specified.

Governance may introduce additional protocol-level uses consistent with this policy, but should avoid overloading DCHUB with functions that create confusion about its nature.

Applications and services may accept DCHUB for their own purposes, but such uses are outside the scope of this policy and are the responsibility of those applications.

---

## 3. Supply and monetary policy

This policy provides high-level guidance; detailed figures and schedules are defined in:

- `docs/token/TOKEN-GENESIS-PLAN.md` (supply and allocations at genesis), and
- `docs/token/TOKEN-EMISSIONS-NOTES.md` (how tokens enter circulation over time).
- `docs/token/TOKEN-VESTING-SCHEDULES.md` (baseline vesting and lockups).
- `docs/token/TOKEN-TREASURY-FEE-FLOWS.md` (service fee routing and reporting).

v1 supply stance (as described in `docs/master/DCHUB_MASTER.md`, section 10):

- DCHUB has a fixed hard-cap total supply minted at genesis.
- There is no discretionary inflation path intended to create additional DCHUB beyond what was created at genesis.
- “Emissions” refers to tokens entering circulation from predefined allocations (for example the staking and validator rewards pool), not supply creation beyond the fixed cap.

Any changes to supply-related mechanics (for example release caps or rewards distribution parameters) should be debated transparently, enacted via on-chain governance, and documented in the Master Reference and related policy artifacts.

---

## 4. Governance over token parameters

On-chain governance may control:

- the rewards pool distribution schedule and related parameters, within predefined bounds;
- community program release caps and related guardrails;
- minimum and maximum staking reward rates;
- parameters governing recognition deposits and fees;
- distribution mechanisms for community or ecosystem allocations.

High-impact changes (e.g. major shifts in emissions schedules, release caps, or supply availability) should:

- have stronger approval thresholds and longer voting periods;
- be accompanied by analysis, scenarios, and stress tests;
- be recorded in governance proposal metadata with clear rationale.

Governance may not retroactively change the terms of any legal agreements or contracts under which DCHUB has already been sold or granted; those remain governed by their own documentation.

---

## 5. Disclaimers and legal boundaries

This policy:

- does not constitute legal, tax, or investment advice;
- does not create any entitlement to tokens or rights for any person;
- is subject to change as legal guidance and regulatory landscapes evolve.

Participants are responsible for:

- understanding and complying with laws in relevant jurisdictions;
- obtaining professional advice where appropriate;
- making their own risk assessments when acquiring, holding, or using DCHUB.
