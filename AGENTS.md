# Repository Guidelines

## Project Structure & Module Organization
- `docs/` holds all canonical Markdown content. Start at `docs/INDEX.md`; public entry point is `docs/welcome/INDEX.md`.
- Root folders: `docs/`, `tools/`.
- `docs/spec/` is the normative protocol spec set; `docs/policy/`, `docs/security/`, `docs/token/`, and `docs/devops/` cover governance, safety, economics, and operations.
- Internal playbooks (agents, ops planning) live in `dcorps-docs-private/docs/internal/` and must not be linked from public docs.
- Restricted docs live in `dcorps-docs-private/docs/restricted/` and must stay out of public exports.
- `tools/docgen/` documents the (future) doc generation workflow.

## Build, Test, and Development Commands
- Build: none. Docgen is not implemented; docs are maintained manually under `docs/`.
- Test: none. Validate changes by reading the relevant indexes and links.
- Useful local search: `rg "SPEC-" docs/spec/` or `rg "POL-" docs/policy/`.

## Coding Style & Naming Conventions
- Markdown only. Use ATX headings (`#`, `##`), short paragraphs, and `-` bullets like existing docs.
- Keep naming consistent with prefixes and uppercase file names (examples: `SPEC-CORE.md`, `POL-DOCS-PUBLICATION.md`).
- Match the formatting of nearby sections and keep language concise and factual.

## Testing Guidelines
- No automated tests. Do a quick manual pass: verify index links, headings, and cross-references, and ensure public docs do not link to private restricted docs.

## Commit & Pull Request Guidelines
- Commit messages in history are short and descriptive, often lowercase (example: `add readme`); follow that simple style.
- PRs should include a brief summary, list of key docs touched, and any policy impact (public vs restricted). Link relevant issues; add screenshots only when changing diagrams or rendered outputs.

## Security & Publication Policy
- Documentation is public by default. Safety-sensitive operational content belongs in `dcorps-docs-private/docs/restricted/` and must not be linked from public docs.
- Never add secrets (keys, mnemonics, credentials, `.env` contents). Refer to `docs/policy/POL-DOCS-PUBLICATION.md` for the source policy.
