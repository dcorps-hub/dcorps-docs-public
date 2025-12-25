# Observability

**Document type**: DevOps guide  
**Doc ID**: DEVOPS-OBSERVABILITY  
**Status**: Final v0.1  
**Source repo**: dcorps-docs-public ([docs/devops/OBSERVABILITY.md](/devops/OBSERVABILITY))  
**Publishing date**: 2025-12-24  
**Last updated**: 2025-12-24  

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

## Stack (baseline)

- Metrics: Prometheus
- Dashboards: Grafana
- Logs: Loki

---

## Alerts (baseline thresholds)

- Target block time is defined in [docs/devops/NETWORK_PARAMS.md](/devops/NETWORK_PARAMS).
- Chain halt or no blocks for 3 minutes (critical).
- Block time > 2x target for 10 minutes (warning), > 3x target for 30 minutes (critical).
- Validator missed blocks > 5% in 1 hour (warning), > 10% (critical).
- RPC/gRPC error rate > 5% for 5 minutes (warning), > 10% for 10 minutes (critical).
- IBC packet backlog > 1,000 for 30 minutes (warning).
- Disk usage > 80% (warning), > 90% (critical).
- Memory usage > 90% for 10 minutes (critical).
