# Runbook - Indexer Backfill and Recovery

**Document type**: DevOps runbook  
**Doc ID**: DEVOPS-RUNBOOK-INDEXER  
**Status**: Living v0.1  
**Source repo**: dcorps-docs-public (`docs/devops/RUNBOOK-INDEXER.md`)

> Scope: Public-safe steps for indexer backfill and recovery.

---

## 1. Backfill steps

1. Select a snapshot height or genesis start.
2. Run the indexer in backfill mode.
3. Validate event counts and entity totals.

---

## 2. Reorg handling

- Detect reorgs via height/hash mismatch.
- Rewind affected ranges and reprocess.

---

## 3. Recovery checklist

- Verify last processed height matches the chain.
- Confirm report outputs match reference expectations.
