# Runbook - Genesis Creation and Verification

**Document type**: DevOps runbook  
**Doc ID**: DEVOPS-RUNBOOK-GENESIS  
**Status**: Living v0.1  
**Source repo**: dcorps-docs (`docs/devops/RUNBOOK-GENESIS.md`)

> Scope: Public-safe steps to build, verify, and publish a genesis file.

---

## 1. Inputs

- Chain ID and denom from `docs/devops/NETWORK_PARAMS.md`.
- Allocation plan from `docs/token/TOKEN-GENESIS-PLAN.md`.
- Validator set list and gentx files.

---

## 2. Steps

1. Build the chain binary from the tagged release.
2. Initialize a clean chain home and set chain ID.
3. Add genesis accounts and vesting schedules per the allocation plan.
4. Collect validator gentx files and validate them.
5. Generate the final genesis file and run `validate-genesis`.
6. Produce checksums for genesis and release artifacts.

---

## 3. Verification checklist

- Total supply equals the hard-cap supply.
- Vesting schedules and lockups match the plan.
- Validator set matches the published list.
- Checksums are published and reproducible.
