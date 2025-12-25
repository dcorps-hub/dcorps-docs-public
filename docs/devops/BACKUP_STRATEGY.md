# Backup Strategy

**Document type**: DevOps guide  
**Doc ID**: DEVOPS-BACKUP-STRATEGY  
**Status**: Final v0.1  
**Source repo**: dcorps-docs-public ([docs/devops/BACKUP_STRATEGY.md](/devops/BACKUP_STRATEGY))  
**Publishing date**: 2025-12-24  
**Last updated**: 2025-12-24  

> Scope: Snapshot frequency, retention, and verification strategy for chain and indexer data.

---

## 1. Snapshot cadence

- Full snapshots: daily.
- Incremental snapshots: every 6 hours (where supported).
- Archive snapshots: weekly and monthly.

---

## 2. Retention policy

- Daily snapshots: retain 14 days.
- Weekly snapshots: retain 12 weeks.
- Monthly snapshots: retain 12 months.

---

## 3. Storage and redundancy

- Store snapshots in at least two independent regions.
- Use immutable object storage when available.
- Validate checksums on write and on restore.

---

## 4. Verification

- Restore-test at least once per quarter.
- Validate restored height and app hash against chain state.

---

## 5. Runbook

Operational steps are in [docs/devops/RUNBOOK-BACKUP.md](/devops/RUNBOOK-BACKUP).
