# Corporation Private Standard

**Document type**: Hub template  
**Doc ID**: HUB-TEMPLATE-CORP-PRIVATE-STD  
**Status**: Draft v0.1  
**Release date**: January 3, 2026  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/hub-templates/CORP-PRIVATE-STD.md](/hub-templates/CORP-PRIVATE-STD))  
**Last updated**: 2026-01-03  

> Scope: Defines the CORP-PRIVATE-STD Hub corporation template.

---

## Summary

- **Code**: CORP-PRIVATE-STD
- **Template class**: Hub corporation
- **Complexity**: Low to medium

---

## Intended for

- Small teams or LLC-style private corporations.
- Operators who need role-based authority and standard wallets without complex class structures.

---

## Core structure

- **Cap table**: Default 10,000 base units (1 unit = 0.01 percent).
- **Authority**: Role-based governance (admin/treasurer/approver as needed).
- **Wallets**: Canonical income, treasury, and payroll/vendor wallets.
- **Events**: Tagged inflow/outflow events for reproducible views.

---

## Reporting view

- Cash-based time-window view derived from tagged on-chain events.

---

## Optional add-ons

- Document anchors for bylaws, resolutions, or material agreements.
- Optional precision patterns (expanded base units) if needed later.

---

## Boundaries

- Templates define on-chain structure and evidence. Legal recognition remains off-chain or via optional modules.
