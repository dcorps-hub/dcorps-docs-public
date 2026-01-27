# Network Parameters

**Document type**: DevOps reference  
**Doc ID**: DEVOPS-NETWORK-PARAMS  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/devops/NETWORK_PARAMS.md](/devops/NETWORK_PARAMS))  
**Last updated**: 2026-01-25

> Scope: Baseline chain IDs, rollup configuration, and fee defaults for dev, testnet, and mainnet.

---

## 1. Chain IDs

- Devnet: `dcorps-devnet-1`
- Testnet: `dcorps-testnet-1`
- Mainnet: `dcorps-1`

---

## 2. Native token and decimals

- Native token: DCHUB
- Native decimals: 18

---

## 3. Canonical asset contracts

- Canonical USDC contract on dCorps (single address per environment).
- L1 source: Ethereum USDC; bridged via the canonical gateway.
- Additional stablecoins (USDT, DAI) are listed only after governance approval.

Contract addresses are published in release notes and environment summaries.

---

## 4. Bridge gateways

- L1 gateway contract address (Ethereum).
- L2 gateway contract address (dCorps rollup).
- Message queue and finalization settings (as provided by Orbit config).

Addresses are published per environment and updated only via governance-approved change control.

---

## 5. Operator addresses

- Sequencer address.
- Batch poster address.

Operator address changes must be documented in release notes and governance logs.

---

## 6. Governance parameters (baseline)

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

## 7. Fee parameters (baseline)

- `tx_min_gas_price`: 0.01 DCHUB
- `entity_registration_fee`: 100 USDC (canonical USDC contract)
- `anchor_submit_fee`: 5 USDC (canonical USDC contract)

---

## 8. Change control

- Baseline values are subject to governance updates.
- Any changes MUST be approved via on-chain governance (or encoded at deployment for launch) and reflected by updating this document.
