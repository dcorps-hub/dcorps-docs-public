# Observability

**Document type**: DevOps guide  
**Doc ID**: DEVOPS-OBSERVABILITY  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/devops/OBSERVABILITY.md](/devops/OBSERVABILITY))  
**Last updated**: 2026-01-25

> Scope: Metrics, logs, and alerts required for a healthy dCorps rollup network.

---

## Core metrics

- L2 block height and block time.
- Sequencer uptime and batch posting cadence.
- L1 settlement transaction success rate.
- RPC/WS availability and latency.
- Transaction throughput and pending queue size.
- Disk usage and database growth.

---

## Bridge gateway metrics

- Deposit and withdrawal queue backlog.
- Average finalization time for withdrawals.
- Failed or reverted gateway transactions.

---

## Logs

- Sequencer and batch poster events.
- Governance actions and parameter changes.
- Module registry updates.
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
- Sequencer downtime > 2 minutes (critical).
- L1 batch posting failures > 3 in 15 minutes (critical).
- RPC error rate > 5% for 5 minutes (warning), > 10% for 10 minutes (critical).
- Bridge queue backlog > 1,000 for 30 minutes (warning).
- Disk usage > 80% (warning), > 90% (critical).
- Memory usage > 90% for 10 minutes (critical).
