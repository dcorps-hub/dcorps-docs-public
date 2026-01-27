# Runbook: Operators

**Document type**: DevOps runbook  
**Doc ID**: DEVOPS-RUNBOOK-OPERATORS  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/devops/RUNBOOK-OPERATORS.md](/devops/RUNBOOK-OPERATORS))  
**Last updated**: 2026-01-25

> Scope: Public-safe operator onboarding steps, sequencer/batch poster operations, and key rotation guidance.

---

## 1. Onboarding steps

1. Provision sequencer, batch poster, and RPC infrastructure.
2. Generate operator keys and secure them offline.
3. Configure redundancy and failover for sequencer and batch posting.
4. Confirm rollup configuration matches published parameters for the environment.
5. Start services and validate chain health, RPC response, and block production.
6. Publish operator metadata and contact info for incident coordination.

---

## 2. Operational checks

- Monitor sequencer uptime, batch posting cadence, and RPC availability.
- Confirm L1 settlement transactions are succeeding and finality is within targets.
- Ensure private keys are not exposed in runtime logs or public endpoints.

---

## 3. Key rotation (high level)

1. Schedule rotation during a low-traffic window.
2. Update operator key material and config.
3. Validate service continuity and L1 posting continuity.
4. Update any public operator metadata if addresses change.

Note: Rotation procedures depend on rollup deployment tooling and chain owner controls. Changes must be logged and communicated to governance.
