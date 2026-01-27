# Runbook: Rollup Deployment

**Document type**: DevOps runbook  
**Doc ID**: DEVOPS-RUNBOOK-DEPLOY  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/devops/RUNBOOK-GENESIS.md](/devops/RUNBOOK-GENESIS))  
**Last updated**: 2026-01-25

> Scope: Public-safe steps to deploy, verify, and publish a rollup configuration for devnet, testnet, or mainnet.

---

## 1. Inputs

- Chain ID, native token, and fee defaults: [docs/devops/NETWORK_PARAMS.md](/devops/NETWORK_PARAMS).
- Allocation plan and vesting schedules: [docs/token/TOKEN-GENESIS-PLAN.md](/token/TOKEN-GENESIS-PLAN), [docs/token/TOKEN-VESTING-SCHEDULES.md](/token/TOKEN-VESTING-SCHEDULES).
- Rollup config, gateway addresses, and operator addresses.
- Asset registry and canonical stablecoin mapping.

---

## 2. Build and assemble (public-safe)

1. Build the rollup node stack from tagged releases.
2. Deploy or configure L1 and L2 gateway contracts.
3. Set rollup configuration parameters and operator addresses.
4. Configure genesis allocations and vesting accounts.
5. Publish final configuration artifacts and checksums.

---

## 3. Verification checklist

- Total minted supply equals the hard-cap supply (1,000,000,000 DCHUB) and allocations sum exactly.
- Vesting schedules and lockups match the documented plan (cliffs, durations, and unlock cadence).
- Gateway addresses and canonical asset mappings match published environment documentation.
- Sequencer and batch poster addresses match the published operator list.
- Basic L1/L2 deposit and withdrawal flows succeed in staging.

---

## 4. Publication package

Publish, at minimum:

- Rollup configuration summary (chain ID, gateway addresses, operator addresses).
- Checksums for deployment artifacts and config files.
- A short deployment README covering:
  - chain ID
  - deployment time
  - software versions/tags
  - verification steps and expected totals
