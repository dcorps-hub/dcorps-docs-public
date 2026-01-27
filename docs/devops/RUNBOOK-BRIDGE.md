# Runbook: Bridge Gateway Outage

**Document type**: DevOps runbook  
**Doc ID**: DEVOPS-RUNBOOK-BRIDGE  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/devops/RUNBOOK-BRIDGE.md](/devops/RUNBOOK-BRIDGE))  
**Last updated**: 2026-01-25

> Scope: Public-safe steps for bridge gateway outages, deposit/withdrawal delays, and message queue recovery.

---

## 1. Detection and triage

- Confirm whether the issue is on L1, L2, or the monitoring/indexing layer.
- Check deposit and withdrawal queues, finalization times, and error rates.
- Determine whether the issue is:
  - L1 congestion or reorg sensitivity,
  - L2 sequencer/batch posting impact,
  - gateway contract pause or configuration change,
  - or indexing/UX delay only.

---

## 2. Recovery steps

1. Verify gateway contract status and any emergency pause controls.
2. Confirm sequencer and batch poster are healthy (see [docs/devops/RUNBOOK-OPERATORS.md](/devops/RUNBOOK-OPERATORS)).
3. Reconcile deposit/withdrawal queues against on-chain events.
4. If a pause is required, follow governance or emergency controls per [docs/policy/POL-GOV.md](/policy/POL-GOV).
5. Publish a public incident update with estimated impact window.

---

## 3. Follow-up

- Document root cause and remediation.
- Adjust monitoring thresholds if alerting was delayed.
- Update gateway status documentation for affected environments.
