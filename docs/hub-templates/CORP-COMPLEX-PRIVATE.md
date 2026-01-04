# Corporation Complex Private

**Document type**: Hub template  
**Doc ID**: HUB-TEMPLATE-CORP-COMPLEX-PRIVATE  
**Status**: Draft v0.2  
**Release date**: January 3, 2026  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/hub-templates/CORP-COMPLEX-PRIVATE.md](/hub-templates/CORP-COMPLEX-PRIVATE))  
**Last updated**: 2026-01-04  

> Scope: Defines the CORP-COMPLEX-PRIVATE Hub corporation template.

---

## Summary

- **Code**: CORP-COMPLEX-PRIVATE
- **Template class**: Hub corporation
- **Complexity**: High
- **Primary objective**: multi-class private corporation with committee governance and advanced treasury policy
- **Reporting view**: cash-based time-window operating view (unit of account: USDC)

---

## Why this template exists

- Some private corporations need “institutional legibility” at the structure level:
  - multiple unit classes with distinct rights,
  - committees and delegated approvals,
  - stronger treasury controls and policy enforcement,
  - holding-company/group structures with clear ownership chains.
- CORP-COMPLEX-PRIVATE is the highest-complexity Hub-first corporation template in the initial catalog, intended for mature private structures that still want the Hub as their canonical registry, authority log, and operating ledger.

---

## Intended for

- Private corporations with multi-class units and committee governance.
- Multi-entity holdings or group structures that need explicit ownership mapping and intercompany evidence trails.
- Teams that require advanced treasury policy (multi-tier approvals, budgets, per-wallet constraints).

---

## Not intended for

- Solo or early-stage teams (use `CORP-SOLO` or `CORP-PRIVATE-STD`).
- Standard venture-backed companies that do not need multi-class structures and committees (use `CORP-VENTURE`).
- Nonprofits (use `NONPROFIT-*` templates).

---

## What you get (features)

- **Multi-class unit structures**
  - Multiple unit classes with class-specific voting/economic rules (as defined by governance and anchored governing docs).
  - Class conversions, protected matters, and class-specific approvals where used.
- **Committee governance**
  - Board plus committee layers (e.g., audit, compensation, finance/investment) with explicit delegated powers.
- **Advanced treasury policy**
  - Multi-tier spend approvals (routine vs protected vs extraordinary).
  - Per-wallet limits, category constraints, and evidence requirements by policy.
- **Group/holdings support**
  - Entities can hold units of other entities.
  - Clear mapping of parent/subsidiary relationships and intercompany actions.
- **Evidence-first documentation patterns**
  - Supersession chains for bylaws/policies.
  - Anchors for material actions, major agreements, and corporate actions.

---

## How this maps to complex corporate structure (2.0 → Hub)

- Multi-class charter + shareholder agreements → anchored docs + on-chain class definitions/policies and protected matter thresholds.
- Board committees (audit/comp/finance) → committee roles + delegated approvals recorded on-chain.
- Consolidated group structure → parent entity holds units in subsidiaries; intercompany agreements anchored and referenced.
- Treasury policy and internal controls → explicit on-chain approval routing, spend tiers, and evidence requirements.
- Evidence packets (data room) → anchors linked to governance/corporate actions with clear supersession.

---

## Template definition (on-chain structure)

This section describes the minimum structure the template expects. Exact message formats are in the specs.

- **Entity type**: `HUB_CORP`
- **Units**
  - Base unit profile: 10,000 default; optional expansion later in multiples of 10,000 (recommended max 1,000,000 base units in v0.1).
  - Unit holders can be individual wallets and/or other Hub entities (parent/subsidiary, SPV, and joint venture structures).
  - One or more unit classes, each with:
    - class identifier,
    - voting model and thresholds,
    - transfer restrictions and approvals,
    - conversion rules (if used).
- **Roles (recommended baseline)**
  - `admin`: config authority (roles, wallets, policies, tags, metadata)
  - `board`: board seats with quorum + thresholds
  - `treasurer`: payments + accounting event emission
  - `secretary`: governance records, minutes, and anchors (recommended)
  - Committee roles (recommended when relevant):
    - `audit_committee`
    - `comp_committee`
    - `finance_committee`
  - Optional: `risk_officer` / `compliance_officer` where needed (often backed by off-chain processes)
- **Canonical wallets (recommended baseline)**
  - `MERCHANT` (recommended): revenue inflows (invoice and checkout payment address; may use multiple, labeled, if operating multiple business lines)
  - `OPERATING_TREASURY` (required): primary operating spending (may use multiple, labeled)
  - `RESERVES` (recommended): buffers, restricted reserves, and strategic holdings
- **Operating currency (v0.1)**
  - Inflows/outflows and reporting are USDC-only in v0.1 (USDC on Noble, via IBC).
  - Gas is paid in DCHUB by the signing wallet (direct DCHUB balance, fee grants, or sponsored transactions).
- **Treasury policy (recommended baseline)**
  - At least three tiers:
    - routine spending: treasurer-only up to a configured limit
    - protected spending: committee or board approval above that limit
    - extraordinary actions: supermajority board (and/or class-specific unit-holder) approvals
  - Evidence requirements for material transactions and policy-controlled categories.
- **Transfers and corporate actions (recommended baseline)**
  - Transfers can require:
    - whitelist checks,
    - class-specific approvals,
    - vesting/lockup checks,
    - right-of-first-refusal style routing (where the protocol/module supports it).
  - Corporate actions (issuance, cancellation, conversions, reorganizations) are recorded as standardized events linked to approvals and anchored documents.

---

## Reporting view (what downstream tools can produce)

- **Cash-based time-window view** (for any selected timeframe)
  - Wallet balances and movements for canonical wallets.
  - Inflows/outflows by category code (and optional business-unit tags).
  - Coverage ratios (inflow, outflow, evidence) and explicit “uncategorized” warnings.
- **Group/holdings views (optional, off-chain)**
  - Consolidated dashboards can be built by tooling that reads:
    - entity ownership chains (units held by entities),
    - tagged intercompany flows,
    - anchored consolidation packages (when published).

---

## Workflow (action flow)

This is the canonical action sequence used later to build a graph/canvas representation.

### 1) Setup (one-time, then iterate)

- Open a dCorps-compatible console app and select the target network.
- Connect wallet(s) for your admin, board seats, committee members, and treasury signers.
- Confirm network and fees:
  - Gas: DCHUB
  - Service fees (when shown): USDC
  - Gas is paid by the signing wallet (direct DCHUB balance, fee grants, or sponsored transactions).
- Configure gas coverage for team actions (recommended):
  - Option A: each signer wallet holds DCHUB for gas.
  - Option B: use DCHUB fee grants from an entity-controlled sponsor wallet to signer wallets for routine actions.
  - Option C: use an app that sponsors gas and discloses sponsorship in the signing flow.
- Create the company:
  - Entity type: Hub corporation
  - Template code: CORP-COMPLEX-PRIVATE
- Enter company details:
  - display name and minimal metadata,
  - base unit count (default 10,000; consider expansion if needed),
  - initial unit allocation (cap table),
  - initial roles and canonical wallets.
- Sign creation transaction:
  - creates Entity ID and lifecycle status,
  - sets owner-of-record at creation.
- Define governance layers:
  - bind `board` seats with quorum and thresholds; sign.
  - bind committee roles (`audit_committee`, `comp_committee`, `finance_committee`) and delegated powers; sign.
  - bind operating roles (`admin`, `treasurer`, `secretary`); sign.
- Define capital structure:
  - create unit classes and class-specific rules (rights, voting, transfers, conversions); sign.
  - anchor governing docs that define the meaning of classes; sign.
- Bind canonical wallets:
  - bind `MERCHANT`, `OPERATING_TREASURY`, and `RESERVES` wallets (multiple per type if needed, with labels); sign.
- Set treasury policy:
  - routine / protected / extraordinary tiers with explicit approval routing,
  - per-wallet limits and category constraints,
  - evidence requirements by materiality and category; sign.
- Set tags:
  - minimal chart-of-accounts categories,
  - business-unit tags (commonly required at this complexity level); sign.
- (Optional) Establish group structure:
  - create subsidiary entities (if not already),
  - execute unit issuances/transfers so the parent holds the subsidiary,
  - anchor intercompany agreements; sign.

### 2) Operate (repeat)

- Receive USDC (on Noble, via IBC) into canonical wallets to maximize inflow coverage.
- Use `MERCHANT` as the invoice/checkout payment address for revenue inflows.
- (Optional) Issue an invoice or checkout payment request and anchor evidence:
  - denominate in USDC and pay to `MERCHANT`,
  - hash invoice/receipt/contract file (as applicable),
  - anchor the hash on-chain; optionally include a URI; sign.
- Record income events:
  - category + business-unit tags,
  - include amount (USDC),
  - link invoice reference or anchor; sign.
- (Optional) Move operating funds to treasury:
  - transfer USDC from `MERCHANT` to `OPERATING_TREASURY` (or to `RESERVES`),
  - tag as treasury movement/internal transfer; sign.
- Spend under treasury policy:
  - routine payment: treasurer-only within limit.
  - protected payment: committee or board approval above limit; execute; sign.
  - extraordinary action: supermajority approvals; execute; sign.
- Record expense events:
  - category + business-unit tags,
  - include amount (USDC),
  - link receipt anchor/ref when available; sign.
- Maintain class rules and transfer restrictions:
  - enforce whitelists, lockups, approvals, and conversions; sign updates where required.
- Intercompany flows (when used):
  - tag as treasury movement/intercompany under your category scheme,
  - anchor agreements for material transfers; sign.

### 3) Governance and corporate actions (repeat as needed)

- Draft the decision artifact off-chain (minutes, resolution, purchase agreement, restructuring memo).
- Anchor the artifact hash on-chain (optional URI); sign.
- Submit governance action:
  - specify action type (committee approval, board vote, class vote, corporate action),
  - link anchor(s) for supporting documents; sign.
- Collect approvals under the configured thresholds; sign.
- Execute the approved action and emit the corresponding event(s); sign.

### 4) Review, report, and close (repeat)

- Review dashboards:
  - balances by canonical wallet,
  - tagged flows by category and business unit,
  - coverage ratios and missing evidence.
- Export reports:
  - select period,
  - export the cash-based operating view (unit of account: USDC).
- (Optional) Anchor a period package:
  - anchor a period snapshot and any consolidation/supporting packages you choose to publish.

---

## Upgrade paths

- Move here from `CORP-VENTURE` when you need multi-class units, committees, or holding-company/group structures.
- If you start here, consider simplifying to `CORP-VENTURE` or `CORP-PRIVATE-STD` if governance overhead is not justified.

---

## Boundaries and disclaimers

- Templates define on-chain structure and evidence. Legal recognition remains off-chain or via optional modules.
- This document is descriptive and is not legal, tax, accounting, or investment advice.

---

## References

- Whitepaper Long (conceptual intent): [docs/whitepaper/WHITEPAPER_LONG.md](/whitepaper/WHITEPAPER_LONG)
- Treasury continuity guide: [docs/adoption/TREASURY_CONTINUITY.md](/adoption/TREASURY_CONTINUITY)
- Core spec (messages and invariants): [docs/spec/SPEC-CORE.md](/spec/SPEC-CORE)
- Data and tagging standards: [docs/spec/SPEC-DATA.md](/spec/SPEC-DATA)
- Reference indexer behavior (reporting views): [docs/spec/SPEC-INDEXER.md](/spec/SPEC-INDEXER)
