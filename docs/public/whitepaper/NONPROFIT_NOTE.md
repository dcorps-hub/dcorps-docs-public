# dCorps Hub – Nonprofit Note (Public)

**Document type**: Nonprofit note (public)  
**Doc ID**: DCHUB-NONPROFIT-NOTE-2025-12-21  
**Version**: v1.3.1  
**Status**: Final v1.3.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
[www.dcorps.com](http://www.dcorps.com/) · [dev@dcorps.com](mailto:dev@dcorps.com)

---

## Disclaimer

Nothing in this document is:

- an offer to sell, or a solicitation of an offer to buy, any token, share, or security;
- investment, legal, tax, or accounting advice; or
- a promise of listing, price performance, or financial return for any asset.

This note describes a technical design for nonprofit operation and reporting on dCorps as currently envisioned. Details may change with engineering work, legal advice, market conditions, and community input.

---

## 1. Who this is for

This note is written for:

- nonprofit leaders, board members, and operators;
- donors, grantmakers, and oversight bodies who want clearer reporting without relying on opaque intermediaries; and
- builders creating donation and reporting tooling for nonprofits.

It assumes the dCorps Hub is used primarily with stablecoins (for example USDC) and focuses on **cash-based allocation reporting**, not accrual accounting statements.

---

## 2. What a Hub nonprofit is (high-level)

A **Hub nonprofit** is an on-chain entity container designed for board-governed operation and donor-relevant transparency.

At a high level, a Hub nonprofit:

- records authority (board and roles) as on-chain state, not only as documents;
- operates through canonical wallets (for example donation and program wallets);
- records inflows and outflows as **tagged accounting events**; and
- produces reproducible **nonprofit allocation reports** from those tagged flows.

Nonprofits do not have equity. There is no token representing ownership of a nonprofit.

---

## 3. The transparency model (what is verifiable)

### 3.1 Canonical wallets

To reduce ambiguity and improve reporting consistency, a nonprofit uses canonical wallet types, such as:

- **donation wallet(s)** for incoming donations and grants;
- **program wallet(s)** for spending tied to specific program categories; and
- **treasury / reserves wallet(s)** for long-term holding and governed disbursements.

Tooling can reference an entity by **entity ID + wallet type**, rather than relying on cached addresses.

### 3.2 Tagged accounting events and categories

Nonprofit transparency on dCorps relies on explicit tagging:

- each material inflow/outflow is tagged with standardized categories (chart of accounts) and additional tags where needed;
- typed workflows can enforce required tags and reduce “free-form” ambiguity; and
- reporting views surface coverage and uncategorized amounts explicitly.

This is designed to make transparency honest: readers can see what is supported by on-chain facts and where classification is incomplete.

### 3.3 Allocation rules and reproducible reports

A nonprofit can define allocation rules (for example category-level allocation mappings) and publish period reports that are reproducible from the same underlying ledger inputs.

The intended v1 outcome is a **nonprofit allocation report** that:

- summarizes tagged flows, by category, over a defined period;
- includes integrity signals (coverage, uncategorized totals, provenance labels); and
- can optionally reference evidence anchors for material items.

### 3.4 Evidence anchoring and attestations (optional)

For material items, nonprofits may anchor evidence (invoices, receipts, minutes, agreements) by hash and link flows to those anchors.

Optional attestation modules can publish issuer-signed signals (for example an anchored audit report, a completeness signal, or a policy-compliance signal). Interfaces should clearly distinguish:

- on-chain facts,
- derived aggregates (cash-based views), and
- third-party or issuer claims (attestations), including dispute status.

---

## 4. Disclosure modes and privacy (important)

On-chain data is public by default. Choosing a disclosure mode does not automatically provide confidentiality.

Confidentiality exists only when a nonprofit uses privacy-preserving execution or selective disclosure tools (for example private zones, encrypted payloads, and zero-knowledge proof based reporting patterns where applicable).

Nonprofits may need selective disclosure for beneficiary safety, payroll privacy, or regulated data. The design intent is to support transparency about what matters while allowing privacy where it is legitimately required.

For public risk framing, see:

- `docs/public/legal/RISK_DISCLOSURE.md` (privacy and data risks)

---

## 5. What v1 is intended to enable (and what it is not)

**Intended v1 capabilities**

- register a Hub nonprofit and its canonical wallets;
- define board roles and authority rules;
- record and tag donation and spending flows as accounting events;
- generate reproducible period allocation reports from tagged flows; and
- anchor evidence hashes for material items.

**Not assumed in v1**

- automatic legal recognition in any jurisdiction;
- automatic compliance guarantees or donor due diligence;
- universal confidentiality for sensitive details without dedicated privacy technology.

Optional jurisdiction adapter modules may support recognition workflows, but legal effect comes from local law and contracts that reference those workflows.

---

## 6. References (recommended reading)

- Public index: `docs/public/INDEX.md`
- Official public whitepaper: `docs/public/whitepaper/WHITEPAPER.md`
- FAQ and glossary: `docs/public/whitepaper/FAQ.md`, `docs/public/whitepaper/GLOSSARY.md`
- Technical overview and integration guide: `docs/public/technical/TECHNICAL_OVERVIEW.md`, `docs/public/technical/INTEGRATION_GUIDE.md`
- Normative specs: `docs/spec/SPEC-CORE.md`, `docs/spec/SPEC-DATA.md`, `docs/spec/SPEC-MODULES.md`
- Governance and policy: `docs/policy/POL-GOV.md`, `docs/policy/POL-VALIDATORS.md`
- Legal and risk: `docs/public/legal/DISCLAIMERS.md`, `docs/public/legal/RISK_DISCLOSURE.md`
