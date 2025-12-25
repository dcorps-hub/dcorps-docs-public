# Runbook - Snapshots and Backup Restoration

**Document type**: DevOps runbook  
**Doc ID**: DEVOPS-RUNBOOK-BACKUP  
**Status**: Final v0.1  
**Source repo**: dcorps-docs-public (`docs/devops/RUNBOOK-BACKUP.md`)

> Scope: Public-safe backup, snapshot, and restore procedures.

---

## 1. Snapshot schedule

- Snapshot cadence and retention policy: `docs/devops/BACKUP_STRATEGY.md`.
- Produce daily full snapshots.
- Retain weekly and monthly archives.
- Store backups in independent object storage.

---

## 2. Restore steps

1. Stop the node or indexer.
2. Restore the latest snapshot to the data directory.
3. Rebuild state indexes as required.
4. Validate chain height and hash consistency.
5. Bring the service back online and monitor for full catch-up.

---

## 3. Verification

- Confirm node catches up to network height.
- Confirm API endpoints return expected data.
- Confirm snapshot checksums match the published values.
