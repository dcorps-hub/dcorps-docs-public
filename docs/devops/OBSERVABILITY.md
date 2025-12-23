# Observability

**Document type**: DevOps guide  
**Doc ID**: DEVOPS-OBSERVABILITY  
**Status**: Final v0.1  
**Source repo**: dcorps-docs (`docs/devops/OBSERVABILITY.md`)

> Scope: Metrics, logs, and alerts required for a healthy dCorps network.

---

## Core metrics

- Block height and block time.
- Validator uptime and missed blocks.
- Peer count and network connectivity.
- Mempool size and transaction throughput.
- Disk usage and database growth.
- RPC/gRPC/REST availability.

---

## IBC metrics (when enabled)

- Channel status and packet backlog.
- Relayer health and latency.
- Failed packet counts.

---

## Logs

- Consensus events and validator signatures.
- Governance actions and parameter changes.
- Module and sub chain registry updates.
- Indexer ingestion errors.

---

## Alerts (define thresholds)

- Chain halt or stalled blocks.
- Validator downtime or double-sign evidence.
- RPC endpoint outages.
- IBC channel failures.
- Disk or memory exhaustion.
