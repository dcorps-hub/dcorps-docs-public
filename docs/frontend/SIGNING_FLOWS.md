# Wallet Signing and Authority Flows

**Document type**: Frontend requirements  
**Doc ID**: FE-SIGNING-FLOWS  
**Status**: Living v0.1  
**Source repo**: dcorps-docs-public (`docs/frontend/SIGNING_FLOWS.md`)

> Scope: Wallet connection and signing flows for core Hub operations. These flows align with `docs/engineering/API_SURFACES.md`.

---

## 1. Authority assumptions

Each transaction requires a signer with the required role binding for the entity:

- Entity registration: creator is the initial authority.
- Role updates: `ROLE_ADMIN` or `ROLE_BOARD`.
- Wallet bindings: `ROLE_TREASURER` or `ROLE_ADMIN`.
- Accounting events: `ROLE_TREASURER` or `ROLE_FINANCE`.
- Document anchors: `ROLE_SECRETARY` or `ROLE_ADMIN`.
- Module attach/detach: `ROLE_ADMIN`.

Role type labels map to `SPEC-DATA.md` catalogs.

---

## 2. Wallet connection flow

1. Connect wallet (Keplr, Leap, or Cosmostation via cosmos-kit).
2. Verify chain ID and bech32 prefix (`docs/devops/NETWORK_PARAMS.md`).
3. Fetch entity roles and validate required role for the action.
4. Block the action if role authority is missing.

---

## 3. Core transaction flows

### 3.1 Register entity

1. Collect entity type, name, initial roles, and wallet bindings.
2. Show fee summary (gas in DCHUB and service fee in USDC if applicable).
3. Sign `MsgRegisterEntity`.
4. Confirm entity ID and next steps (roles and wallets).

### 3.2 Update roles

1. Display current role bindings.
2. Show diff for role add/remove.
3. Sign `MsgBindRole` or `MsgUnbindRole`.

### 3.3 Bind wallets

1. Select wallet type and address.
2. Validate wallet type against catalog.
3. Sign `MsgBindWallet` or `MsgUnbindWallet`.

### 3.4 Record accounting event

1. Select entity, wallet, counterparty, amount, and category.
2. Require category and minimal tags.
3. Sign `MsgRecordEvent`.

### 3.5 Anchor document

1. Capture hash and optional URI.
2. Show evidence type and link target.
3. Sign `MsgAnchorDocument`.

### 3.6 Attach or detach module

1. Select module and show risk tier.
2. Confirm eligibility and costs.
3. Sign `MsgAttachModule` or `MsgDetachModule`.

---

## 4. Transaction summary requirements

Each signing dialog MUST show:

- entity name and entity ID,
- action type and target,
- amounts and denoms,
- category and tags (for accounting events),
- fees and estimated gas,
- evidence hash or module ID when applicable.

---

## 5. Error and rejection states

- If role authority is missing, block the action with a clear message.
- If fees cannot be paid, prompt to top up DCHUB or request a fee grant.
- If tags are invalid, show required fields from `SPEC-DATA.md`.
