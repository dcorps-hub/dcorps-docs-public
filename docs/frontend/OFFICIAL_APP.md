# Official App

**Document type**: Frontend reference  
**Doc ID**: FE-OFFICIAL-APP  
**Status**: Draft v0.2  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/frontend/OFFICIAL_APP.md](/frontend/OFFICIAL_APP))  
**Last updated**: 2026-04-15

> Scope: define the official dCorps App as the canonical public surface for the current phase.

---

## 1. Role

The official app is the canonical public surface for dCorps.

It is the place where the current phase should be understood first and where the public registry should be encountered first.

The official app must also communicate the core dCorps record model clearly:

- dCorps is append-only for material records;
- history is a product feature, not an internal implementation detail;
- corrections should appear as new records or revisions, not silent deletion;
- public users should be able to verify what is public; and
- approved audit wallets should be able to inspect deeper records when disclosure rules allow it.

In the current phase, the app absorbs:

- public registry and explorer landing with search-first discovery;
- entity dossier views;
- product overview and environment posture;
- entity workflow UI;
- workspace, governance, and treasury shell entry points;
- integrated reference routes for whitepaper, about, roadmap, and security;
- testnet or design-partner access paths.

---

## 2. Current-phase scope

The current live target is intentionally narrow.

The official app must support the narrow workflow:

- create an entity;
- assign authority and roles;
- bind canonical wallets;
- record tagged accounting events;
- anchor documents or evidence by hash;
- render an entity page, activity timeline, and period totals.

If the app cannot do those things cleanly, it is not yet ready to be the proud public surface.

---

## 3. What the app should communicate publicly

The app should make these points obvious:

- dCorps is early and focused;
- the app is the registry landing, not a detached brochure;
- the app behaves more like a serious explorer than a generic landing page;
- the kernel is about entity identity, authority, wallets, tagged events, and evidence;
- the current environment is pre-mainnet;
- deeper specs and policy exist as integrated reference routes or linkouts from the same shell;
- access may be gated depending on the current environment.

---

## 4. Current-phase required surfaces

The app should provide equivalents for:

- registry landing;
- entity detail page;
- explorer-style search by entity, wallet, or record identifier;
- official app workflow entry;
- workspace shell;
- governance shell;
- treasury shell;
- entity page;
- activity timeline;
- period view;
- reference pages for whitepaper, security, and roadmap;
- roadmap or phase status;
- legal and risk disclosures;
- design-partner or testnet access request.

These may be separate routes or a coherent single-app shell.

---

## 5. Boundaries

The official app is:

- non-custodial;
- downstream from protocol truth;
- allowed to present derived views from the official indexer.

The official app is not:

- the source of protocol correctness;
- a substitute for public specs and policy docs;
- a place to imply functionality that does not exist yet.

---

## 6. Deferred capabilities

The following may land later, but should not define the public story now:

- broad template coverage beyond the narrow workflow;
- invoice and recurring-plan breadth;
- full explorer specialization;
- full registry specialization;
- module marketplace flows;
- expanded token and governance surfaces.

The app should earn breadth after the narrow workflow is real.

## 7. Visual direction

The app should adopt a black-background, white-first, high-precision design language closer to a protocol terminal or institutional registry than a startup website.

The current reference grammar is the live Next.js public site as inspected on April 11, 2026, adapted for a sovereign registry product rather than framework marketing.
