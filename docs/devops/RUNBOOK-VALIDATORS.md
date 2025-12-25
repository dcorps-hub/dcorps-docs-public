# Runbook - Validator Onboarding and Key Rotation

**Document type**: DevOps runbook  
**Doc ID**: DEVOPS-RUNBOOK-VALIDATORS  
**Status**: Final v0.1  
**Source repo**: dcorps-docs-public ([docs/devops/RUNBOOK-VALIDATORS.md](/devops/RUNBOOK-VALIDATORS))  
**Publishing date**: 2025-12-24  
**Last updated**: 2025-12-24  

> Scope: Public-safe validator onboarding steps and key rotation guidance.

---

## 1. Onboarding steps

1. Provision validator and sentry nodes.
2. Generate validator keys and secure them offline.
3. Configure sentry networking and private peer topology.
4. Create a gentx and submit for inclusion in genesis or governance onboarding.
5. Start the node and confirm signing participation.
6. Publish validator metadata (name, website, contact) through the standard staking description fields where applicable.

---

## 2. Operational checks

- Monitor missed blocks and validator uptime.
- Confirm peer connectivity and block propagation.
- Confirm RPC endpoints are not publicly exposed from validator nodes.

---

## 3. Key rotation (high level)

1. Schedule rotation during a low-traffic window.
2. Update validator key material and config.
3. Confirm the validator resumes signing without double-sign risk.
4. Update any public validator metadata if addresses change.

Note: consensus key rotation mechanics depend on chain implementation. If direct rotation is not supported, rotate by migrating to a new validator identity under a documented and audited process.
