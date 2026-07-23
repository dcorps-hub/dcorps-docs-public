# dCorps public documentation instructions

## Global execution governance

This repository is governed by the canonical DEV execution policy at
`/Users/njgturk/Projects/DEV/INFRA/platform-infra/docs/governance/dev-execution-governance.md`.
Read it before substantial work. Local instructions may add or strengthen
controls, but they may not weaken security, authorization, source authority,
data integrity, quality, or mandatory evidence. If the canonical policy is
unavailable, stop substantial execution and report the missing authority.

Read `/Users/njgturk/Projects/DEV/AGENTS.md` and `../AGENTS.md` first.

## Current state

- The byte-exact official Whitepaper V1.0 distribution copy is authorized under
  `docs/whitepaper/` for local and protected noindex DEV website review.
- The byte-exact canonical 35-paragraph Founder Manifesto V1.0 distribution
  copy amended on 2026-07-22 is authorized under `docs/manifesto/` for local
  and protected noindex DEV website review.
- `docs/policy/POL-DOCS-PUBLICATION.md` controls that publication path.
- Official V1.0 and later explicit owner decisions are the sole permitted
  sources for future substantive documentation.

## Prohibited reconstruction

Do not restore or infer product meaning from Git history, deleted files,
generated artifacts, sibling repositories, frozen websites, implementation
code, transcripts, prior branches, or agent memory.

## Work rules

- Preserve the exact owner source through the workspace intake process before
  analyzing, normalizing, or adapting it.
- Do not alter the canonical Manifesto's 35 paragraphs or import an old role,
  disclaimer, or prose from the frozen website. The signature image was withdrawn on
  2026-07-19 and must not be restored unless the owner gives a new explicit
  direction. Use only the right-aligned Founder name and title in presentation.
- Never add secrets, credentials, private legal data, or restricted operational
  material.
- Use the container-first workflow and run `git diff --check` after edits.
- No standing commit, push, or deployment authority exists. Wait for a new
  explicit owner instruction naming the target. Production publication remains
  separately controlled.
