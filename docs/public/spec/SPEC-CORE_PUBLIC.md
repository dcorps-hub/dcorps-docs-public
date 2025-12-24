# dCorps Hub Protocol – Core Specification (Public View)

**Document type**: Public-facing spec  
**Doc ID**: SPEC-CORE-PUBLIC  
**Status**: Final v0.1  
**Source repo**: dcorps-docs-public (`docs/public/spec/SPEC-CORE_PUBLIC.md`)

> Scope: Public subset of `docs/spec/SPEC-CORE.md` for integrators and external reviewers. This document focuses on externally visible behavior and concepts.
> Public index (recommended starting point): `docs/public/INDEX.md`

---

## 1. Introduction

This public spec summarizes the core behavior of the dCorps Hub in a way that is:

- stable enough for integrators and tools to rely on;
- high-level enough to avoid exposing internal implementation details;
- aligned with the full specification and Master Reference.

It is intended for:

- developers integrating wallets, explorers, or applications with the Hub;
- partners and service providers building on top of dCorps;
- reviewers seeking to understand the protocol’s external behavior.

---

## 2. Key concepts and terminology

For public integration purposes:

- **Entity** – an on-chain record representing an organization (corporation, nonprofit, foundation, etc.).
- **Canonical wallet** – a designated on-chain address associated with an entity for specific purposes (e.g. merchant, donation, treasury).
- **Tagged event** – a transfer or state change that includes standardized tags to describe its business or programmatic meaning.
- **Module** – an extension that adds domain-specific logic, such as jurisdictional rules or sector-specific reporting frameworks.
- **Recognized sub chain** – an external blockchain that interoperates with the Hub through standardized anchoring and recognition rules.

These concepts are stable entry points; details such as exact message names or encodings may evolve.

---

## 3. Core behavior (public view)

High-level summary of the Hub:

- allows entities to be registered with minimal required metadata and canonical wallets;
- records updates to entity metadata, roles, and wallet bindings;
- supports emission of tagged events associated with canonical wallets;
- enables governance over parameters, modules, and recognition;
- maintains registries of modules and recognized sub chains.

From an integrator’s perspective:

- entities and wallets can be queried by IDs and addresses;
- tagged flows can be consumed and aggregated into reports;
- module and sub chain registries can be consulted to understand which components are active and at what risk tiers.

Integrators should treat the published data standards and APIs as the authoritative guide for consuming this information.

---

## 4. Integration considerations

When integrating with the dCorps Hub:

- use stable identifiers where possible (entity IDs, module IDs, sub chain IDs);
- rely on the published data schemas for interpreting tags and categories;
- handle governance-driven changes, such as parameter updates or module upgrades, gracefully (e.g. by monitoring events and registries).

Applications that surface dCorps data to end users should:

- clearly distinguish facts (on-chain amounts, timestamps) from interpretations (e.g. “program spend”);
- surface recognition tiers and risk labels for modules and sub chains;
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
