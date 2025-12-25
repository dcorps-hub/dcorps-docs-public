# Network Parameters

**Document type**: DevOps reference  
**Doc ID**: DEVOPS-NETWORK-PARAMS  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/devops/NETWORK_PARAMS.md](/devops/NETWORK_PARAMS))  
**Last updated**: 2025-12-24  

> Scope: Baseline chain IDs, denoms, prefixes, and genesis parameter defaults for dev, testnet, and mainnet.

---

## 1. Chain IDs

- Devnet: `dcorps-devnet-1`
- Testnet: `dcorps-testnet-1`
- Mainnet: `dcorps-1`

---

## 2. Denoms and decimals

- Native token: DCHUB
- Base denom: `udchub` (1 DCHUB = 1,000,000 udchub)
- Stablecoin reference: `uusdc` via IBC (Noble)

---

## 3. Bech32 prefixes

- Account: `dcorps`
- Validator operator: `dcorpsvaloper`
- Validator consensus: `dcorpsvalcons`
- Public key: `dcorpspub`

---

## 4. Genesis supply and allocations

- Total supply at genesis: 1,000,000,000 DCHUB.
- Allocation and vesting schedules follow [docs/token/TOKEN-GENESIS-PLAN.md](/token/TOKEN-GENESIS-PLAN).

---

## 5. Consensus baseline

- `block_time_target`: 5s
- `max_block_gas`: 20,000,000

---

## 6. Baseline staking parameters

- `bond_denom`: `udchub`
- `unbonding_time`: 21 days
- `max_validators`: 100
- `min_self_delegation`: 1,000 DCHUB

---

## 7. Governance parameters (baseline)

- `voting_period`:
  - devnet: 2 days
  - testnet: 3 days
  - mainnet: 7 days
- `min_deposit`: 10,000 DCHUB
- `quorum`: 0.20
- `threshold`: 0.50
- `veto_threshold`: 0.334

Protected Change thresholds follow [docs/policy/POL-GOV.md](/policy/POL-GOV).

---

## 8. Slashing parameters (baseline)

- `slash_double_sign`: 0.05
- `slash_downtime`: 0.01
- `signed_blocks_window`: 10,000 blocks
- `min_signed_per_window`: 0.95

---

## 9. Fee parameters (baseline)

- `tx_min_gas_price`: 0.01 udchub
- `entity_registration_fee`: 100 USDC (IBC `uusdc`)
- `anchor_submit_fee`: 5 USDC (IBC `uusdc`)

---

## 10. Change control

- Baseline values are subject to governance updates.
- Any changes MUST be approved via on-chain governance (or encoded at genesis for launch) and reflected by updating this document.
