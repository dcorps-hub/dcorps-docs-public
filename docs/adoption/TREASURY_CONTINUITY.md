# Treasury Continuity (Entity Ops Guide)

**Document type**: Hub ops guide  
**Doc ID**: HUB-GUIDE-TREASURY-CONTINUITY  
**Status**: Draft v0.1  
**Release date**: January 4, 2026  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/adoption/TREASURY_CONTINUITY.md](/adoption/TREASURY_CONTINUITY))  
**Last updated**: 2026-01-04  

> Scope: Adoption-oriented checklist for treasury continuity and stablecoin disruption planning for entities using Hub templates.

---

## Summary (v0.1 assumptions)

- **Operating currency (v0.1)**: USDC-only (USDC on Noble, via IBC).
- **Gas**: DCHUB is paid by the signing wallet (direct DCHUB balance, fee grants, or sponsored transactions).
- **Canonical wallets are public**: wallet bindings exist to make verification and reporting reproducible; privacy-first operation uses different disclosure modes (aggregates/commitments), not “hidden canonical wallets”.
- **USDC freezes cannot be overridden**: stablecoin issuer actions and rail risk are external to the Hub and cannot be overridden by validators or governance.

---

## What “treasury continuity” means (practically)

You can still:

- receive new inflows (revenue, donations, grants),
- pay critical expenses under your approvals,
- keep your reporting view reproducible and honest (including “known gaps”),
- document decisions and incidents with anchors and governance events.

Continuity is not “freeze bypass”. It is blast-radius reduction, operational hygiene, and explicit contingency planning.

---

## Checklist (v0.1 USDC-only)

### A) Wallet segmentation (on Hub)

- Separate wallet purposes:
  - `MERCHANT` (or `DONATION`) for inflows,
  - `OPERATING_TREASURY` for routine spend,
  - `RESERVES` for buffers (stricter controls).
- Keep `OPERATING_TREASURY` intentionally low; sweep from inflow wallets to `OPERATING_TREASURY`/`RESERVES` on a cadence your team can actually operate.
- Consider a “primary + backup” inflow plan:
  - keep the ability to rebind a `MERCHANT`/`DONATION` wallet quickly for new inflows if an address is disrupted,
  - ensure invoice/checkout tooling can switch the destination address without chaos.
- Tag internal transfers explicitly (e.g. `TREASURY_MOVEMENT`) so the operating view remains interpretable.

### B) Authority, limits, and change control (on Hub)

- Use explicit **spend tiers** and approvals:
  - routine spend (fast),
  - protected spend (co-approval),
  - extraordinary actions (board/committee / supermajority, where used).
- Apply stricter rules to `RESERVES` than to `OPERATING_TREASURY` (higher thresholds, stronger separation of duties).
- Restrict “change control” actions:
  - re-binding canonical wallets,
  - changing treasury policies,
  - changing tag catalogs and allocation rules,
  - unit actions (issue/transfer/cancel) for corporations.
- Add evidence requirements above a materiality threshold (anchors for large payments, grants, major allocations, and policy changes).

### C) Gas coverage for team actions (DCHUB)

- Ensure the entity can keep operating on-chain even if USDC is disrupted:
  - signers should maintain DCHUB for gas, or
  - use DCHUB fee grants from an entity-controlled sponsor wallet, or
  - use an application that sponsors gas and discloses sponsorship in the signing flow.
- If you use fee grants:
  - scope allowances to routine actions,
  - set time bounds and revocation procedures,
  - monitor usage and rotate sponsor keys like real treasury keys.

### D) Diversification planning (constraints in v0.1)

- In v0.1, on-Hub operations are USDC-only. Diversification inside the approved operating set is a future capability (asset registry + governance approval).
- Practical diversification in v0.1 is primarily:
  - segmentation across wallets and approval tiers (blast-radius reduction),
  - maintaining external reserves and alternative settlement plans off-Hub (outside protocol consensus),
  - pre-agreeing with counterparties what happens if USDC is disrupted.
- Treat “alternative assets” carefully:
  - they reduce one category of risk (issuer freeze exposure) but add others (peg stress, collateral volatility, governance risk, liquidity/venue risk, bridge/custody risk).
- Avoid “freeze bypass” wrappers as a core strategy. dCorps is not positioned as a system for evading issuer controls or legal enforcement.

### E) Monitoring and incident plan (recommended)

- Maintain a written continuity plan (what triggers it, who decides, what actions are allowed, and what communications happen).
- Anchor the plan hash on-chain and keep a supersession chain as it evolves.
- Monitor at minimum:
  - canonical wallet balances and unusual outflows,
  - large payments without anchors (evidence gaps),
  - signer and fee-grant usage anomalies,
  - public issuer/rail risk signals for USDC.
- Incident response (example sequence):
  1. **Detect**: freeze/blacklist event, rail outage, depeg, or signer compromise.
  2. **Contain**: pause non-critical spending, revoke fee grants, rotate compromised signers, tighten thresholds.
  3. **Continue operations**:
     - if an address is frozen: rebind the inflow wallet for new inflows (it does not unfreeze old funds),
     - use `RESERVES` under strict approvals for critical expenses,
     - publish a clear “known gaps” posture in reports where coverage is impacted.
  4. **Document**: anchor an incident statement and link key transactions and decisions.
  5. **Recover**: coordinate with external counterparties/issuers where applicable; update policies and controls.

---

## How this integrates with Hub templates

- Corporation templates:
  - keep invoices and checkout flows paying into `MERCHANT`,
  - sweep into `OPERATING_TREASURY`/`RESERVES` under policy,
  - treat wallet rebinds and treasury policy changes as protected actions with anchors.
- Nonprofit templates:
  - preserve the nonprofit transparency floor (donation inflows and category-level outflows over any selected timeframe),
  - anchor policy changes, major grants, and incident statements.

---

## References

- Whitepaper Long (gas abstraction + treasury continuity): [docs/whitepaper/WHITEPAPER_LONG.md](/whitepaper/WHITEPAPER_LONG)
- Risk disclosure (stablecoin issuer risk): [docs/legal/RISK_DISCLOSURE.md](/legal/RISK_DISCLOSURE)
- Wallet types and tagging: [docs/spec/SPEC-DATA.md](/spec/SPEC-DATA)
