# IBC Relayer Operations

**Document type**: DevOps guide  
**Doc ID**: DEVOPS-IBC-OPS  
**Status**: Final v0.1  
**Source repo**: dcorps-docs (`docs/devops/IBC_OPERATIONS.md`)

> Scope: Operational requirements for IBC relayers and channel health.

---

## 1. Relayer requirements

- Minimum two independent relayers per IBC channel.
- At least one relayer operated by the foundation or core ops team.
- At least one relayer operated by an independent operator.

---

## 2. Reference relayer

- Baseline implementation: `go-relayer`.
- Configuration and secrets should be stored outside this repo.

---

## 3. Monitoring

- Track packet backlog, retry counts, and channel status.
- Alert if backlog exceeds thresholds in `docs/devops/OBSERVABILITY.md`.

---

## 4. Channel lifecycle

- Channel IDs are assigned during IBC handshake.
- Publish channel IDs in release notes and environment documentation once established.

---

## 5. Runbook

Operational recovery steps are in `docs/devops/RUNBOOK-IBC.md`.
