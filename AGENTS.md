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

- The byte-exact official unpublished Whitepaper V1.0 distribution copy,
  corrected under `V1-0156` at SHA-256
  `ec837b3cb56d90e7e0210ef5a640aa8624cde35352dda4391134ce25e2746002`,
  is authorized under `docs/whitepaper/` for local and protected noindex DEV
  website review. It has not been published to production.
- The byte-exact canonical 38-paragraph, 1,063-word Founder Manifesto V1.0
  distribution copy revised on 2026-07-30 is authorized under
  `docs/manifesto/` for local and protected noindex DEV website review.
  Canonical paragraphs 7 through 17 form the named
  `native-existence-and-legal-boundary` block and may also appear once as the
  attributed, source-derived quotation on `/what-is-dcorps/`.
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
- Apply owner decision `V1-0155`, as clarified by `V1-0156`, whenever a
  material project-state fact advances, regresses, or changes. The public
  Whitepaper must receive an explicit `reviewed, no change required`, `new
  adopted version required`, or `updated` disposition together with the
  mandatory Project Roadmap and FAQ review. While V1.0 remains unpublished,
  `updated` is valid after the owner explicitly authorizes the in-place V1.0
  correction and its synchronized digest. After production publication,
  substantive change requires explicit adoption of a new version and digest.
- Preserve the exact original V1.0 intake and every later owner direction.
  Synchronize each authorized unpublished V1.0 correction byte-exactly across
  the canonical private, public, and vendored website copies. Published and
  historical versions remain immutable.
- Do not alter the canonical Manifesto's 38 paragraphs, maintain a separate
  prose copy of the `What is dCorps` quotation, add presentation markup to the
  public Markdown, inject automatic keyword emphasis into either presentation,
  or import an old role, disclaimer, or prose from the frozen website. The
  website may apply only the separately adopted exact semantic emphasis map,
  including the complete purple credibility statement. The signature image was
  withdrawn on 2026-07-19 and must not be restored unless the owner gives a new
  explicit direction. Keep the formal page title, approved Founder presentation
  metadata, and every visual treatment outside the hashed prose.
- Never add secrets, credentials, private legal data, or restricted operational
  material.
- Use the container-first workflow and run `git diff --check` after edits.
- No standing commit, push, or deployment authority exists. Wait for a new
  explicit owner instruction naming the target. Production publication remains
  separately controlled.
