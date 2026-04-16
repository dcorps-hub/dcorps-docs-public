# Whitepaper Reset Draft

**Document type**: Whitepaper draft  
**Doc ID**: DCHUB-WP-RESET-2026  
**Version**: draft v0.1  
**Status**: Draft  
**Release date**: April 11, 2026  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public  
**Last updated**: 2026-04-15

> This draft resets the dCorps narrative around what should actually be built first. It is not yet a normative specification and does not supersede protocol specs where those exist.

---

## Disclaimer

Nothing in this document is:

- an offer to sell, or a solicitation of an offer to buy, any token, share, or security;
- investment, legal, tax, or accounting advice; or
- a promise of listing, liquidity, or financial return.

This draft describes a working build direction. Details may change as engineering, legal review, partner feedback, and testnet evidence accumulate.

---

## 1. The Reset

dCorps should be built as a live organization kernel, not as a broad narrative ecosystem.

The earlier body of work was useful for defining ambition, but the next stage must be narrower and more concrete:

- one chain;
- one app;
- one indexer;
- one core workflow;
- one credible path from devnet to genesis.

The project should earn belief by running software, not by expanding static content.

---

## 2. What Problem dCorps Solves

Stablecoins already make it possible for teams to hold and move money online.

What remains fragmented is the entity layer:

- who had authority to act;
- which wallets were canonical;
- which decisions were approved;
- how treasury activity was classified; and
- how a third party can reproduce a view of what happened.

dCorps exists to make those facts legible on shared infrastructure.

It is not a bank, not a custodian, and not a legal incorporation service.

---

## 3. What dCorps Is

dCorps is a purpose-built rollup and application layer for digital-native organizations.

Its kernel records:

- entity identity;
- authority and roles;
- canonical wallets;
- tagged treasury activity;
- anchored evidence;
- a transparent history of changes over time.

The intended record rule is append-only:

- material records should not be deleted;
- corrections should be recorded as new entries;
- authority, approvals, wallet changes, and evidence links should remain historically visible; and
- public views and audit-authorized views should both be treated as first-class outputs of the system.

Its first public product is not a generalized chain ecosystem.

Its first public product is a working app that lets a real organization complete that workflow end-to-end.

---

## 4. Why a Chain

dCorps should use a dedicated chain only if the chain stays thin and earns its existence.

The chain is justified because the problem is about shared state and shared verification:

- authority changes should be publicly ordered;
- wallet bindings should be canonical;
- accounting events should be auditable from common inputs;
- evidence anchors should be durable and tamper-evident.

If those properties are treated as application-only database state, the system loses much of its neutrality and verifiability.

That said, the chain should remain minimal. Most complexity belongs in the app and the indexer, not in consensus-critical modules.

---

## 5. Why Arbitrum Orbit

The current technical direction remains Arbitrum Orbit in Rollup mode.

That choice is justified by:

- mature EVM compatibility;
- an active Orbit ecosystem;
- existing Nitro tooling for local and staged environments;
- a practical path to custom chain operations without inventing a new execution layer.

The stack should be treated as infrastructure, not as identity. The mission is entity infrastructure, not "being an Orbit chain" for its own sake.

---

## 6. What Ships First

The first live version should only ship the narrow kernel:

- entity registration;
- role and authority assignment;
- canonical wallet binding;
- tagged accounting events;
- document anchoring;
- timelocked protocol administration.

The first app should expose:

- entity creation;
- role and wallet management;
- event submission;
- anchor submission;
- entity profile;
- timeline view;
- period totals and coverage view;
- environment status.

The first indexer should produce:

- entity snapshots;
- authority and wallet history;
- event timelines;
- period views;
- integrity and coverage metadata.

---

## 7. What Does Not Ship First

The following should not block the first live version:

- separate explorer and registry products;
- broad multilingual website work;
- invoices and recurring billing;
- jurisdiction adapters;
- CBDC-style narratives;
- public token sale mechanics;
- expansive governance theater;
- large module marketplaces.

These may matter later. They are not the first proof point.

---

## 8. Product Surface

The canonical public surface should be the app.

That means:

- the old static website should become secondary or be retired;
- the app should absorb the portal, registry basics, explorer basics, and onboarding;
- docs should remain lean and authoritative, but not try to replace the product.

The public stack should feel like a live operating system for organizations, not like a brochure for a future protocol.

---

## 9. Rollout Path

The rollout sequence should be:

1. local devnet;
2. shared devnet;
3. gated partner testnet;
4. genesis rehearsal;
5. mainnet.

The key design rule is:

- no mainnet without partner-testnet proof;
- no broad fundraising before a live narrow workflow exists;
- no token expansion before operator economics are grounded in real costs.

---

## 10. Economics Reset

DCHUB may remain the long-term gas and governance asset, but the economic narrative must become much more conservative.

The new rules are:

- no public sale before proof;
- no retail token narrative before a real product exists;
- no pretend allocations for imagined future financing rounds;
- no liquidity story ahead of usage.

Before genesis, test environments should use valueless dev or test assets.

At genesis, the token should exist to support:

- gas;
- governance;
- operator incentives;
- security and ecosystem programs;
- long-term protocol stewardship.

Exact supply and allocations should remain provisional until:

- partner testnet usage exists;
- legal and tax review is complete;
- operator cost forecasts are real;
- governance and treasury controls are properly designed.

---

## 11. Trust Model and Boundaries

dCorps is intended to be:

- non-custodial;
- explicit about what is on-chain fact versus off-chain interpretation;
- conservative about governance and upgrades;
- honest about coverage and reporting limits.

dCorps is not intended to:

- replace jurisdictional law;
- promise legal recognition by default;
- provide fiat custody or banking services;
- guarantee privacy where no privacy system exists.

The system should say clearly what it knows, what it records, and what it does not claim.

---

## 12. Success Condition

dCorps succeeds if a small number of real organizations use it for important workflows and independent parties can verify:

- who had authority;
- which wallets were canonical;
- what activity occurred;
- what evidence was anchored; and
- how a period view was derived.

It does not need to win by becoming a generic chain or by maximizing token speculation.

It needs to become the best place to run verifiable entity operations.

---

## 13. What Comes Next

If the narrow kernel proves useful, dCorps can expand later into:

- invoice and billing primitives;
- broader stablecoin integrations;
- richer governance modules;
- registry specialization;
- attestation and jurisdiction adapters.

Those extensions should be earned by demand. They should not be prerequisites for the first live release.
