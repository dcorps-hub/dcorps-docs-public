# Whitepaper (Plain Language)

**Document type**: Whitepaper (plain language)  
**Doc ID**: DCHUB-WP-PLAIN-2025-12-21  
**Version**: v0.1  
**Status**: Draft v0.1  
**Release date**: January 1, 2026  
**Author**: Nicolas Turcotte, Founder  
[www.dcorps.com](http://www.dcorps.com/) · [dev@dcorps.com](mailto:dev@dcorps.com)  
**Last updated**: 2026-01-16  

> Scope: Plain-language overview of what dCorps is, what v1 enables, and the boundaries (what it does not claim to do). This document is non-normative.

---

## Disclaimer

Nothing in this document is:

- an offer to sell, or a solicitation of an offer to buy, any token, share, or security;
- investment, legal, tax, or accounting advice; or
- a promise of listing, price performance, or financial return for any asset.

This whitepaper describes a technical and economic design for the dCorps protocol as currently envisioned. Details may change with engineering work, legal advice, market conditions, and community input.

---

## What dCorps is (in plain terms)

dCorps is shared public infrastructure for serious organizations.

It lets an organization:

- register a canonical identity and public profile;
- define who has authority to act (roles, approvals, governance actions);
- operate using on-chain payment wallets, control wallets for approvals, and standardized accounting events;
- issue on-chain invoices and recurring payment plans tied to their payment wallets; and
- anchor key documents and evidence by hash.

The goal is simple: make it possible for an outside party to verify **authority** and **money trails** from a shared public record, instead of relying on screenshots, private exports, or trust-me reporting.

---

## What v1 enables

In v1, an entity can:

1. Register an entity and bind roles, control wallets (for approvals), and payment wallets (for money).
2. Issue invoices or recurring payment plans and route inflows/outflows through payment wallets, emitting tagged accounting events.
3. Produce reproducible cash-based operating and allocation summaries over any selected timeframe, derived from those tagged events.
4. Anchor key documents (governing documents, resolutions, evidence) by hash so they can be referenced without publishing private content.

Nonprofits can accept direct donations to the donation wallet without invoices; payment requests are optional for grants, sponsorships, memberships, or pledged giving. When confirmations are needed, a donation receipt can be anchored and referenced.

If an entity uses these primitives consistently, a third party can verify:

- who had authority to act at a given time;
- what approvals or governance actions were recorded; and
- how period totals were derived from underlying ledger activity.

---

## Privacy, disclosure, and lifecycle

dCorps is transparent by default, but organizations can choose how much detail to publish. Each entity picks a disclosure mode:

- **Mode A**: everything public.
- **Mode B**: public structure with aggregate reporting.
- **Mode C**: private execution with public proof anchors.

Choosing a mode does not automatically hide data. Confidentiality exists only when privacy-preserving tools are used.

Every entity also has a lifecycle status in the registry so people can see if it is draft, active, suspended, or dissolved.

---

## What dCorps does not claim

dCorps is infrastructure. It does not provide:

- custody, banking, brokerage, or exchange services;
- guaranteed legal recognition, regulatory outcomes, or institutional acceptance; or
- guaranteed financial outcomes for any asset.

---

## Where to go next

- Executive summary (short): [docs/whitepaper/EXECUTIVE_SUMMARY.md](/whitepaper/EXECUTIVE_SUMMARY)
- Litepaper (narrative + architecture): [docs/whitepaper/LITEPAPER.md](/whitepaper/LITEPAPER)
- Condensed whitepaper (mid-length): [docs/whitepaper/WHITEPAPER.md](/whitepaper/WHITEPAPER)
- Protocol specs (normative): [docs/spec/](/spec)
