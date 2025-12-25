# Runbook - Genesis Creation and Verification

**Document type**: DevOps runbook  
**Doc ID**: DEVOPS-RUNBOOK-GENESIS  
**Status**: Final v0.1  
**Source repo**: dcorps-docs-public ([docs/devops/RUNBOOK-GENESIS.md](/devops/RUNBOOK-GENESIS))  
**Publishing date**: 2025-12-24  
**Last updated**: 2025-12-24  

> Scope: Public-safe steps to build, verify, and publish a genesis file for devnet, testnet, or mainnet.

---

## 1. Inputs

- Chain ID, denom, and bech32 prefixes: [docs/devops/NETWORK_PARAMS.md](/devops/NETWORK_PARAMS).
- Allocation plan and vesting schedules: [docs/token/TOKEN-GENESIS-PLAN.md](/token/TOKEN-GENESIS-PLAN), [docs/token/TOKEN-VESTING-SCHEDULES.md](/token/TOKEN-VESTING-SCHEDULES).
- Parameter model: [docs/spec/SPEC-PARAMS.md](/spec/SPEC-PARAMS) (this defines how params are modeled; the chosen genesis values must be published alongside genesis).
- Initial validator set list and gentx files (if using gentx-based bootstrap).

---

## 2. Build and assemble (public-safe)

1. Build the chain binary (`dcorpsd`) from a tagged release of the chain repo.
2. Initialize a clean chain home directory and set the chain ID.
3. Generate a base `genesis.json` and apply the agreed module parameter defaults.
4. Add genesis accounts and vesting schedules per the allocation plan.
5. Collect and validate validator gentx files (if applicable).
6. Generate the final `genesis.json` and run `validate-genesis` with the same binary that will be used by validators.
7. Produce checksums for genesis and release artifacts.

---

## 3. Verification checklist

- Total minted supply equals the hard-cap supply (1,000,000,000 DCHUB) and allocations sum exactly.
- Vesting schedules and lockups match the documented plan (cliffs, durations, and unlock cadence).
- Governance/staking/slashing baseline values match [docs/devops/NETWORK_PARAMS.md](/devops/NETWORK_PARAMS) (or the approved genesis config if overridden).
- Validator set matches the published list (operator addresses and consensus pubkeys).
- No unexpected module accounts or permissions.
- Checksums are published and reproducible from the published inputs.

---

## 4. Publication package

Publish, at minimum:

- `genesis.json`
- checksums for `genesis.json` and release artifacts
- a short “genesis README” covering:
  - chain ID
  - genesis time / height
  - binary version/tag
  - verification steps and expected totals
