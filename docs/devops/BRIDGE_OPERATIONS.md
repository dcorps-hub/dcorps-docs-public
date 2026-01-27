# Bridge Operations

**Document type**: DevOps guide  
**Doc ID**: DEVOPS-BRIDGE-OPS  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/devops/BRIDGE_OPERATIONS.md](/devops/BRIDGE_OPERATIONS))  
**Last updated**: 2026-01-25

> Scope: Operational requirements for bridge gateways, message queues, and cross-chain asset flow health.

---

## 1. Bridge gateway requirements

- Maintain the canonical gateway contracts for Ethereum to/from dCorps.
- Publish the approved gateway addresses in environment documentation.
- Run at least two independent monitoring stacks for deposits/withdrawals.
- Ensure the canonical USDC contract mapping remains single-address and documented.

---

## 2. Monitoring

- Track L1 deposit events and L2 mint events for each canonical asset.
- Track L2 withdrawal events and L1 claim events.
- Alert on queue backlogs, delayed finalization, or unexpected reorg sensitivity.
- Align alert thresholds with [docs/devops/OBSERVABILITY.md](/devops/OBSERVABILITY).

---

## 3. Asset mapping and allowlists

- Maintain a registry of approved bridged assets and their L1/L2 contract addresses.
- Treat the L2 canonical USDC contract as the single operating USDC surface.
- Any additions/removals require governance approval per [docs/policy/POL-GOV.md](/policy/POL-GOV).

---

## 4. Runbook

Operational recovery steps are in [docs/devops/RUNBOOK-BRIDGE.md](/devops/RUNBOOK-BRIDGE).
