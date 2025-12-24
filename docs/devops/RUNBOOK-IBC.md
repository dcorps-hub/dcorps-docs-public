# Runbook - IBC Relayer Outage Recovery

**Document type**: DevOps runbook  
**Doc ID**: DEVOPS-RUNBOOK-IBC  
**Status**: Living v0.1  
**Source repo**: dcorps-docs-public (`docs/devops/RUNBOOK-IBC.md`)

> Scope: Public-safe steps for IBC relayer outages and channel recovery.

---

## 1. Detection

- Confirm packet backlog and relayer health.
- Check channel status and connection state.

---

## 2. Recovery steps

1. Restart or replace the relayer process.
2. Verify channel is open and packets are relayed.
3. Re-sync relayer client states if required.
4. Confirm stablecoin balances and pending transfers.

---

## 3. Follow-up

- Document the cause and remediation.
- Add monitoring for relayer uptime and packet backlog.
