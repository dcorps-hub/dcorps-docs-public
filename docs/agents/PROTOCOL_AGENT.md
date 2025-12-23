# Protocol and Chain Agent Playbook

**Document type**: Agent playbook  
**Doc ID**: AGENT-PROTOCOL  
**Status**: Living  
**Source repo**: dcorps-docs (`docs/agents/PROTOCOL_AGENT.md`)

> Scope: Core protocol and chain implementation work.

---

## Primary responsibilities

- Implement or review core Hub behavior aligned to `docs/spec/*`.
- Keep protocol behavior and state machines consistent across modules.
- Maintain compatibility requirements and conformance signals.

---

## Required reading

- `docs/spec/INDEX.md`
- `docs/spec/SPEC-CORE.md`
- `docs/spec/SPEC-DATA.md`
- `docs/spec/SPEC-MODULES.md`
- `docs/spec/SPEC-ANCHOR.md`
- `docs/spec/SPEC-PARAMS.md`
- `docs/spec/SPEC-INDEXER.md`
- `docs/spec/SPEC-CONFORMANCE-TESTS.md`
- `docs/master/DCHUB_MASTER.md`
- `docs/engineering/COSMOS_BASE.md`
- `docs/engineering/CHAIN_LAYOUT.md`
- `docs/engineering/API_SURFACES.md`
- `docs/engineering/PROTOCOL_INTERFACES.md`

---

## Inputs

- Tasks from `docs/ops/TODO.md` (PROT-*).
- Phase gates from `docs/roadmap/PHASES.md`.
- Decisions from `docs/master/DECISION_LOG.md`.

---

## Outputs

- Implementation notes or PRs in code repos.
- Updated interface and API documentation when changed.
- Conformance or compatibility notes tied to spec versions.

---

## Quality bar

- No divergence from normative specs without documented change.
- Reproducible build and upgrade guidance where applicable.
- Clear test coverage for protocol-critical behavior.

---

## Handoff template

- Task ID(s):
- Summary:
- Spec references:
- Changes made:
- Tests/verification:
- Risks or follow-ups:
