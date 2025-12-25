# dCorps Hub - Chain Repo Layout

**Document type**: Engineering plan  
**Doc ID**: ENG-CHAIN-LAYOUT  
**Status**: Final v0.1  
**Source repo**: dcorps-docs-public (`docs/engineering/CHAIN_LAYOUT.md`)

> Scope: Canonical repository layout and module boundaries for the Hub chain implementation.

---

## 1. Chain repository

- Repo name: `dcorps-chain`.
- Language: Go.
- Framework: Cosmos SDK with CometBFT and IBC (see `docs/engineering/STACK.md`).

---

## 2. Top-level layout

```text
dcorps-chain/
  app/
    app.go
    encoding.go
  cmd/
    dcorpsd/
  proto/
    dcorps/
      entity/v1/
      accounting/v1/
      registry/v1/
  x/
    entity/
    accounting/
    registry/
  docs/
  scripts/
```

---

## 3. Custom modules

- `x/entity`
  - Entity registry, lifecycle status, and metadata.
  - Role bindings and authority checks.
  - Canonical wallet bindings.
  - Document anchors (evidence hashes).
- `x/accounting`
  - Tagged accounting events.
  - Event validation against tag catalogs.
  - Period reporting indexes (lightweight).
- `x/registry`
  - Module registry and lifecycle.
  - Module attachment records for entities.
  - Sub chain registry and recognition tiers.
  - Sub chain anchor submissions and validation.

Standard Cosmos modules are used for auth, bank, staking, slashing, gov, feegrant, distribution, upgrade, and params.

---

## 4. Protobuf namespaces

- `dcorps.entity.v1`
- `dcorps.accounting.v1`
- `dcorps.registry.v1`

---

## 5. Build and release tooling

- `buf` for proto linting and generation.
- `goreleaser` for tagged release artifacts.
- `cosmovisor` for upgrade automation.
