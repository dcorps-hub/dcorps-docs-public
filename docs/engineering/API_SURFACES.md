# dCorps Hub - API Surfaces (v0.1)

**Document type**: Engineering interface plan  
**Doc ID**: ENG-API-SURFACES  
**Status**: Living v0.1  
**Source repo**: dcorps-docs-public (`docs/engineering/API_SURFACES.md`)

> Scope: Planned protobuf messages, gRPC queries, REST routes, and events for the Hub chain. This is the baseline for implementation.

---

## 1. Protobuf packages

- `dcorps.entity.v1`
- `dcorps.accounting.v1`
- `dcorps.registry.v1`

Field catalogs and enums align with `docs/spec/SPEC-DATA.md`.

---

## 2. Entity module (`dcorps.entity.v1`)

### 2.1 Messages

- `MsgRegisterEntity`
  - `creator`
  - `entity_type`
  - `display_name`
  - `metadata_json`
  - `initial_roles[]`
  - `initial_wallets[]`
- `MsgUpdateEntityMetadata`
  - `authority`
  - `entity_id`
  - `metadata_json`
- `MsgSetEntityStatus`
  - `authority`
  - `entity_id`
  - `status`
- `MsgBindRole`
  - `authority`
  - `entity_id`
  - `role_type`
  - `address`
  - `powers[]`
- `MsgUnbindRole`
  - `authority`
  - `entity_id`
  - `role_type`
  - `address`
- `MsgBindWallet`
  - `authority`
  - `entity_id`
  - `wallet_type`
  - `address`
  - `metadata_json`
- `MsgUnbindWallet`
  - `authority`
  - `entity_id`
  - `wallet_type`
  - `address`
- `MsgAnchorDocument`
  - `authority`
  - `entity_id`
  - `doc_type`
  - `hash`
  - `uri`
  - `metadata_json`

### 2.2 Queries

- `Query/Entity`
- `Query/Entities`
- `Query/EntityRoles`
- `Query/EntityWallets`
- `Query/EntityAnchors`
- `Query/EntityModules`

### 2.3 Events (type -> attributes)

- `entity_registered` -> `entity_id`, `entity_type`, `creator`
- `entity_updated` -> `entity_id`
- `entity_status_set` -> `entity_id`, `status`
- `role_bound` -> `entity_id`, `role_type`, `address`
- `role_unbound` -> `entity_id`, `role_type`, `address`
- `wallet_bound` -> `entity_id`, `wallet_type`, `address`
- `wallet_unbound` -> `entity_id`, `wallet_type`, `address`
- `document_anchored` -> `entity_id`, `doc_type`, `hash`

---

## 3. Accounting module (`dcorps.accounting.v1`)

### 3.1 Messages

- `MsgRecordEvent`
  - `authority`
  - `entity_id`
  - `from_wallet`
  - `to_address`
  - `amount`
  - `denom`
  - `direction`
  - `category_code`
  - `tags_json`
  - `evidence_ref`
- `MsgBatchRecordEvents`
  - `authority`
  - `events[]`

### 3.2 Queries

- `Query/EventsByEntity`
- `Query/EventsByWallet`
- `Query/EventsByPeriod`

### 3.3 Events

- `accounting_event_recorded` -> `entity_id`, `wallet_type`, `amount`, `denom`, `category_code`

---

## 4. Registry module (`dcorps.registry.v1`)

### 4.1 Messages

- `MsgRegisterModule`
  - `authority`
  - `module_id`
  - `module_type`
  - `version`
  - `code_ref`
  - `metadata_json`
  - `risk_tier`
- `MsgUpdateModuleStatus`
  - `authority`
  - `module_id`
  - `status`
- `MsgAttachModule`
  - `authority`
  - `entity_id`
  - `module_id`
- `MsgDetachModule`
  - `authority`
  - `entity_id`
  - `module_id`
- `MsgRegisterSubChain`
  - `authority`
  - `subchain_id`
  - `chain_id`
  - `recognition_tier`
  - `operators[]`
  - `metadata_json`
- `MsgUpdateSubChainStatus`
  - `authority`
  - `subchain_id`
  - `status`
- `MsgSubmitSubChainAnchor`
  - `operator`
  - `subchain_id`
  - `anchor_height`
  - `commitment_hash`
  - `prev_anchor_id`
  - `metadata_json`

### 4.2 Queries

- `Query/Modules`
- `Query/Module`
- `Query/ModuleAttachments`
- `Query/SubChains`
- `Query/SubChain`
- `Query/SubChainAnchors`

### 4.3 Events

- `module_registered` -> `module_id`, `module_type`, `version`
- `module_status_updated` -> `module_id`, `status`
- `module_attached` -> `entity_id`, `module_id`
- `module_detached` -> `entity_id`, `module_id`
- `subchain_registered` -> `subchain_id`, `chain_id`
- `subchain_status_updated` -> `subchain_id`, `status`
- `subchain_anchor_submitted` -> `subchain_id`, `anchor_height`, `commitment_hash`

---

## 5. REST routing (chain API)

All gRPC services are exposed through REST with standard Cosmos SDK conventions:

- `/dcorps/entity/v1/entities`
- `/dcorps/entity/v1/entities/{entity_id}`
- `/dcorps/entity/v1/entities/{entity_id}/roles`
- `/dcorps/entity/v1/entities/{entity_id}/wallets`
- `/dcorps/entity/v1/entities/{entity_id}/anchors`
- `/dcorps/accounting/v1/events`
- `/dcorps/registry/v1/modules`
- `/dcorps/registry/v1/modules/{module_id}`
- `/dcorps/registry/v1/subchains`
- `/dcorps/registry/v1/subchains/{subchain_id}`
- `/dcorps/registry/v1/subchains/{subchain_id}/anchors`

---

## 6. Status

This interface set is the planned baseline for v0.1 and must be reflected in chain code and indexer mappings.
