# Data Standards

**Document type**: Normative spec  
**Doc ID**: SPEC-DATA  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/spec/SPEC-DATA.md](/spec/SPEC-DATA))  
**Last updated**: 2026-01-16  

> Scope: Data models, schemas, chart of accounts, and tagging standards used across the Hub and modules.

---

## 1. Introduction

dCorps is intended to be a shared language for entities, donors, auditors, and applications. That language is implemented as:

- standardized entity and wallet models;
- consistent tagging and chart-of-accounts structures;
- schemas that are stable enough for long-lived analytics and compliance.

This spec defines:

- core schemas the Hub and modules MUST agree on;
- reserved identifiers and categories;
- principles for evolving schemas over time.

Implementation details (e.g. protobuf or JSON encodings) MAY be defined in separate technical appendices.

---

## 2. Entity models

### 2.1 Entity types

At minimum, the Hub MUST support the following entity types:

- `HUB_CORP` – Hub corporation operating primarily on the Hub.
- `HUB_NONPROFIT` – Hub nonprofit/NGO with board-governed allocations.
- `FOUNDATION` – foundation or steward entity associated with protocol or ecosystem.
- `OTHER` – reserved for future categories.

Each entity record SHOULD include:

- `entity_id` – stable, unique identifier;
- `entity_type`;
- `display_name`;
- `lifecycle_status` (e.g. draft, active, suspended, dissolved);
- `created_at` (time/height);
- optional `jurisdiction_code` and external identifiers where a jurisdiction adapter module binds them.

### 2.2 Extensions

Modules MAY extend entity models with additional fields stored in module-specific state, but MUST NOT redefine or change the meaning of core fields.

### 2.3 Role types and scopes (v0.1)

Role types are extensible. Baseline roles used by templates include:

- `admin`, `board`, `treasurer` (core authority roles).
- `operator`, `accountant`, `approver`, `payout_executor` (delegated employee roles).

Role records SHOULD include the bound authority wallet and MAY include scope metadata such as allowed actions (invoice creation, tagging, payout preparation, payout execution), wallet types, and per-category or per-wallet limits.

Payee wallets used to receive salary are distinct from role wallets unless explicitly bound to a role.

---

## 3. Wallet and account structure

### 3.1 Wallet types

Canonical wallet types SHOULD include, at minimum:

- `MERCHANT` – operational inflows from customers or clients (invoice and checkout destination).
- `DONATION` – donations and grants received by nonprofits.
- `OPERATING_TREASURY` – primary operating funds.
- `RESERVES` – strategic reserves or buffers.
- `PROGRAM` – optional dedicated program wallets for nonprofits.

Wallet records SHOULD include:

- `wallet_id` or on-chain address;
- `entity_id` owner;
- `wallet_type`;
- `active` flag;
- optional metadata (e.g. labels, jurisdiction flags).

### 3.2 Authority vs operational wallets

Role bindings identify **authority wallets** used to sign governance actions. These are distinct from **operational wallets** used for USDC inflows and outflows. Authority wallets SHOULD NOT be used as customer or donor payment destinations.

### 3.3 Mapping to accounting concepts

Wallets are not accounts in a double-entry ledger, but in practice:

- inflows to `MERCHANT` and `DONATION` wallets correspond to revenue and donations;
- outflows from `OPERATING_TREASURY` and `PROGRAM` wallets correspond to expenses and allocations.

Downstream tools MAY maintain full double-entry ledgers using tagged events emitted by the Hub.

### 3.4 Commerce objects (v0.1)

To support end-to-end on-chain operations, the Hub SHOULD expose minimal commerce objects:

**Catalog item / service**
- `item_id` – unique on-chain ID.
- `label` – short human-readable name.
- `price` – amount and denom (default USDC).
- `cost` – optional baseline cost for margin reporting.
- `status` – `active`, `paused`, `retired`.

**Invoice (payment request)**
- `invoice_id` – unique on-chain ID.
- `entity_id` – issuer.
- `counterparty` – wallet address or pseudonymous ID.
- `line_items` – references to `item_id` plus quantity.
- `amount_total` – amount and denom.
- `payment_wallet_type` – resolves to a canonical wallet type.
- `status` – `draft`, `open`, `partial`, `paid`, `overdue`, `waived`, `canceled`.
- optional `due_date` and `memo`.

**Recurring plan**
- `plan_id` – unique on-chain ID.
- `entity_id` – owner.
- `cadence` – interval (monthly, quarterly, etc).
- `line_items` or `amount_total`.
- `status` – `active`, `paused`, `canceled`.

Nonprofit donation inflows MAY be direct transfers to the `DONATION` wallet without invoices. Payment requests and recurring plans are OPTIONAL for structured giving (grants, sponsorships, memberships, pledges). When confirmations are required, entities MAY anchor donation receipts and reference them in accounting events (`reference_type=donation_receipt`).

---

## 4. Transaction and event schemas

### 4.1 Tagged accounting events

For each tagged event, the Hub and indexers SHOULD record:

- `tx_hash` and `event_index`;
- `entity_id` (where applicable);
- `from_wallet` and `to_wallet` (or external address);
- `amount` and `denom`;
- `direction` relative to the entity (inflow or outflow);
- `category_code` (see section 5);
- required `counterparty_type` and `reference_id` (when applicable), plus optional `reference_type` and contextual tags (program, project, fund, round, item_id, etc.);
- optional `evidence_ref` – hash or pointer to off-chain evidence;
- `timestamp` and `block_height`.

### 4.2 Evidence references

Evidence references MAY point to:

- IPFS or other content-addressable storage hashes;
- URLs or document IDs in external systems (with appropriate disclaimers);
- references to attestations recorded by modules.

References SHOULD be treated as hints; the Hub does not validate external content beyond basic format checks.

---

## 5. Chart of accounts and tagging

### 5.1 Category codes (minimal chart of accounts)

The v0.1 chart of accounts is a minimal, shared baseline. Every tagged accounting event MUST include a `category_code` from this list. Entities MAY extend with namespaced codes, but extensions SHOULD map to a parent category below for comparability.

Income categories:

- `REV_PRODUCT` – product revenue.
- `REV_SERVICE` – service revenue.
- `REV_SUBSCRIPTION` – subscription revenue.
- `REV_GRANT` – grants received (corporation or nonprofit).
- `DONATION_GENERAL` – unrestricted donations.
- `DONATION_RESTRICTED` – restricted donations.
- `REV_INTEREST` – investment and interest income.
- `REV_OTHER` – other income.
- `REV_NONOPERATING` – non-operating revenue (fallback bucket).

Expense categories:

- `EXP_PAYROLL` – salaries, wages, and payroll taxes.
- `EXP_CONTRACTOR` – contractors and freelancers.
- `EXP_VENDOR` – vendors and suppliers.
- `EXP_RENT` – rent and facilities.
- `EXP_INFRA` – cloud, infrastructure, and tooling.
- `EXP_MARKETING` – marketing and sales.
- `EXP_RND` – research and development.
- `EXP_COMPLIANCE` – jurisdiction and compliance fees.
- `EXP_TAX` – taxes.
- `EXP_GRANTS` – grants to third parties (corporations, foundations).
- `EXP_PROGRAM` – program spending (nonprofits).
- `EXP_FUNDRAISING` – fundraising costs (nonprofits).
- `EXP_ADMIN` – general and administrative overhead.
- `EXP_TRAVEL` – travel and events.
- `EXP_OTHER` – other expenses.

Capital, financing, and treasury:

- `CAPEX` – capital expenditures.
- `FIN_EQUITY_RAISE` – equity financing inflows.
- `FIN_DEBT_DRAW` – debt financing inflows.
- `FIN_DEBT_REPAY` – debt repayments.
- `FIN_DIVIDEND` – distributions/dividends.
- `FIN_OWNER_DRAW` – owner draws.
- `TREASURY_MOVEMENT` – internal treasury rebalancing.

Optional balance sheet tags (for snapshot views, not required on flows):

- `BAL_CASH` – cash and stablecoins.
- `BAL_DCHUB` – DCHUB holdings.
- `BAL_TOKEN` – other token holdings.
- `BAL_AR` – accounts receivable.
- `BAL_PREPAID` – prepaid expenses.
- `BAL_AP` – accounts payable.
- `BAL_DEFERRED_REV` – deferred revenue.
- `BAL_DEBT` – loans and other liabilities.

Governance MAY expand or refine the chart over time, but SHOULD preserve backwards compatibility where possible.

### 5.2 Required tag keys (accounting events)

In addition to `category_code`, accounting events MUST include:

- `counterparty_type` – who the counterparty is (`customer`, `vendor`, `contractor`, `employee`, `donor`, `grantee`, `beneficiary`, `investor`, `lender`, `government`, `bank`, `custodian`, `payment_processor`, `affiliate`, `exchange`, `nonprofit`, `foundation`, `other`).
- `reference_id` – external reference when applicable (invoice_id, contract, grant, payroll batch, policy, resolution).
- `reference_type` – recommended when `reference_id` is present; standard values include `invoice`, `payment_request`, `receipt`, `contract`, `purchase_order`, `payroll_batch`, `expense_report`, `grant_agreement`, `donation_receipt`, `subscription_plan`, `bank_statement`, `board_resolution`, `cap_table_update`, `policy`, `tax_filing`, `audit_report`, `other`.

If a reference exists, tools SHOULD also include `reference_type` to make indexing deterministic. Evidence anchors remain optional via `evidence_ref`.

### 5.3 Standard tag keys (v0.1)

These optional tags provide additional granularity and should be used where applicable:

Operating and org context:
- `program_tag` – nonprofit program or operating unit.
- `business_unit_tag` – corporate business unit (optional alternative to `program_tag`).
- `department_tag` – department or team owner.
- `cost_center_tag` – internal cost center or budget code.
- `project_tag` – project or initiative.
- `product_tag` – product or service line.
- `item_id` – on-chain catalog item/service ID (optional).
- `channel_tag` – revenue or distribution channel.
- `region_tag` – ISO country or region code.
- `counterparty_tag` – pseudonymous counterparty identifier (hashed or coded when privacy is required).

Nonprofit allocation context:
- `fund_tag` – designated or restricted fund (nonprofits).
- `restriction_tag` – restriction code or policy label.
- `grant_id` – grant or award identifier.
- `donor_tag` – donor identifier (hashed or coded).
- `campaign_tag` – fundraising campaign identifier.
- `beneficiary_tag` – beneficiary group or cohort identifier.
- `impact_area_tag` – impact theme or program domain.

Capital and financing context:
- `round_tag` – financing round label (Seed, Series A).
- `security_type_tag` – equity/SAFE/note type.
- `equity_class_tag` – equity class label (e.g. Class A, Class B).
- `vesting_schedule_tag` – vesting schedule identifier.
- `option_pool_tag` – option pool identifier.
- `debt_instrument_tag` – debt instrument type (note, credit line).
- `loan_id` – loan or facility identifier.

Treasury and asset context:
- `wallet_tag` – internal wallet label (ops, reserves, pass-through).
- `treasury_bucket_tag` – treasury segmentation bucket.
- `asset_tag` – asset or token grouping (USDC, DCHUB, other).
- `custody_tag` – custody or provider identifier.

Tags MUST be:

- drawn from controlled vocabularies where defined;
- documented and discoverable by indexers and tools;
- stable over time, with changes carefully managed.

---

## 6. Versioning and migration

### 6.1 Schema versioning

Every schema or major data structure defined in this spec SHOULD carry:

- a version identifier (e.g. `v0.1`, `v0.2`);
- a clear description of changes between versions.

Breaking changes MUST be:

- proposed and approved via governance;
- accompanied by migration plans for existing data;
- documented in governance proposal records and public release notes.

### 6.2 Migrations

Migrations MAY be implemented via:

- on-chain upgrade handlers that transform stored state;
- off-chain tools that rewrite or re-index data from raw history;
- a combination of both.

Migrations MUST be:

- testable and reversible where feasible;
- accompanied by monitoring and validation checks;
- communicated clearly to affected entities and operators.
