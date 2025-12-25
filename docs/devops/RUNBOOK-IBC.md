# Runbook: IBC Outage

**Document type**: DevOps runbook  
**Doc ID**: DEVOPS-RUNBOOK-IBC  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/devops/RUNBOOK-IBC.md](/devops/RUNBOOK-IBC))  
**Last updated**: 2025-12-24  

> Scope: Public-safe steps for IBC relayer outages and channel recovery.

---

## 1. Detection and triage

- Confirm packet backlog and relayer health.
- Check channel status and connection state.
- Confirm whether the issue is:
  - relayer-only (process/config), or
  - chain-side (client expiry, connection/channel state), or
  - upstream dependency (counterparty chain halt).

---

## 2. Recovery steps

1. Restart or replace the relayer process.
2. Verify channel is open and packets are relayed.
3. Re-sync relayer client states if required.
4. Confirm stablecoin balances and pending transfers.
5. If the counterparty chain is halted or the channel is closed, follow the documented channel recovery policy for that environment and publish an operator update.

---

## 3. Follow-up

- Document the cause and remediation.
- Add monitoring for relayer uptime and packet backlog.
