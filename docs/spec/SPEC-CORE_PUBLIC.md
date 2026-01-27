# Core Spec Overview

**Document type**: Spec overview  
**Doc ID**: SPEC-CORE-PUBLIC  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/spec/SPEC-CORE_PUBLIC.md](/spec/SPEC-CORE_PUBLIC))  
**Last updated**: 2026-01-25

> Scope: Overview subset of [docs/spec/SPEC-CORE.md](/spec/SPEC-CORE) for integrators and external reviewers. This document focuses on externally visible behavior and concepts.
> Docs center index (recommended starting point): [docs/welcome/INDEX.md](/welcome/INDEX)

---

## 1. Introduction

This public spec summarizes the core behavior of the dCorps Hub, an Arbitrum Orbit rollup (Rollup mode) on Ethereum, in a way that is:

- stable enough for integrators and tools to rely on;
- high-level enough to avoid exposing internal implementation details;
- aligned with the full specification and Whitepaper Long.

It is intended for:

- developers integrating wallets, explorers, or applications with the Hub;
- partners and service providers building on top of dCorps;
- reviewers seeking to understand the protocol’s external behavior.

---

## 2. Key concepts and terminology

For public integration purposes:

- **Entity** – an on-chain record representing an organization (corporation, nonprofit, foundation, etc.).
- **Canonical wallet** – a designated on-chain address associated with an entity for specific purposes (e.g. merchant, donation, treasury).
- **Authority wallet** – a role-bound wallet that signs governance actions.
- **Operational wallet** – a canonical wallet used for USDC inflows and outflows.
- **Invoice (payment request)** – an on-chain request that resolves to a canonical payment wallet and amount, with status.
- **Catalog item / service** – an on-chain item ID used for sales and invoicing.
- **Recurring plan** – an on-chain schedule that creates invoices on a cadence.
- **Tagged event** – a transfer or state change that includes standardized tags to describe its business or programmatic meaning.
- **Module** – an extension that adds domain-specific logic, such as jurisdictional rules or sector-specific reporting frameworks.
- **Bridge gateway** – the canonical contracts used to move assets between Ethereum and the Hub.

These concepts are stable entry points; details such as exact message names or encodings may evolve.

---

## 3. Core behavior (overview)

High-level summary of the Hub:

- allows entities to be registered with minimal required metadata and canonical wallets;
- records updates to entity metadata, roles, and wallet bindings (authority and operational);
- supports delegated employee roles with approval scopes and limits (separate from payee wallets);
- supports emission of tagged events associated with canonical wallets;
- supports catalog items, invoices, and recurring plans for on-chain business operations;
- supports nonprofit donation flows where direct transfers to donation wallets are allowed, with optional payment requests and anchored donation receipts;
- enables governance over parameters, modules, and registry rules;
- maintains registries of modules and anchors.

From an integrator’s perspective:

- entities and wallets can be queried by IDs and addresses;
- tagged flows can be consumed and aggregated into reports;
- module registry entries and anchor records can be consulted to understand which components are active and how provenance is established.

Integrators should treat the published data standards and APIs as the authoritative guide for consuming this information.

---

## 4. Integration considerations

When integrating with the dCorps Hub:

- use stable identifiers where possible (entity IDs, module IDs, anchor IDs);
- rely on the published data schemas for interpreting tags and categories;
- handle governance-driven changes, such as parameter updates or module upgrades, gracefully (e.g. by monitoring events and registries).

Applications that surface dCorps data to end users should:

- clearly distinguish facts (on-chain amounts, timestamps) from interpretations (e.g. “program spend”);
- surface risk labels for modules and bridge provenance where relevant;
- keep their own documentation up to date as the protocol evolves.

---

## 5. Versioning and compatibility

The public core spec:

- is versioned alongside protocol releases;
- documents breaking and non-breaking changes;
- maintains backward compatibility wherever feasible for external integrators.

Integrators should:

- monitor official channels for spec and protocol updates;
- test integrations against staging or testnet environments when major changes are announced;
- plan for periodic review of their assumptions about data formats and governance behaviors.
