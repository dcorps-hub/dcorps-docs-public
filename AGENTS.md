# Repository Guidelines

## Project Structure & Module Organization
- `docs/` holds all canonical Markdown content. Public entry point is `docs/welcome/INDEX.md`.
- Root folders: `docs/`, `tools/`.
- `docs/spec/` is the normative protocol spec set; `docs/policy/`, `docs/security/`, `docs/token/`, and `docs/devops/` cover governance, safety, economics, and operations.
- Canonical whitepaper sources live in `docs/whitepaper/`. Generated PDF artifacts live in `docs/whitepaper/pdf/` and are mirrored into the site/app repositories by `tools/whitepaper/export-whitepaper.mjs`.
- Internal playbooks (agents, ops planning) live in `dcorps-docs-private/docs/internal/` and must not be linked from public docs.
- Restricted docs live in `dcorps-docs-private/docs/restricted/` and must stay out of public exports.
- `tools/docgen/` documents document-generation workflows.
- `tools/whitepaper/` owns whitepaper export/check automation.

## Build, Test, and Development Commands
- Build: none for the docs center itself. Whitepaper artifacts are generated explicitly.
- Whitepaper export: `npm run whitepaper:export`
- Whitepaper check: `npm run whitepaper:check`
- Whitepaper watch: `npm run whitepaper:watch`
- Install tracked local git hooks: `npm run hooks:install` (alias: `npm run whitepaper:install-hook`)
- PDF export requirements: local Chrome/Chromium and `pdfunite` from Poppler.
- Test: validate changes by reading the relevant indexes and links; run `npm run whitepaper:check` for any whitepaper source or artifact change.
- Useful local search: `rg "SPEC-" docs/spec/` or `rg "POL-" docs/policy/`.

## Aggressive Local Git Hooks
- This repo uses tracked hooks in `.githooks/`; install them with `npm run hooks:install`.
- The installer sets `git config core.hooksPath .githooks`, matching the aggressive local-hook model used in `fwf-app-v2`.
- The pre-commit hook runs on every commit. If staged canonical whitepaper Markdown changed, it runs `npm run whitepaper:export`, stages the generated PDF/checksum artifacts in this repo, then runs `npm run whitepaper:check`.
- The pre-push hook runs `npm run whitepaper:check` before pushing.
- If a hook fails, stop. Do not bypass hooks with `--no-verify`; fix the artifact/check problem first.

## Coding Style & Naming Conventions
- Markdown only. Use ATX headings (`#`, `##`), short paragraphs, and `-` bullets like existing docs.
- Keep naming consistent with prefixes and uppercase file names (examples: `SPEC-CORE.md`, `POL-DOCS-PUBLICATION.md`).
- Match the formatting of nearby sections and keep language concise and factual.
- Do not hand-edit generated whitepaper mirrors in sibling repos. Update `docs/whitepaper/WHITEPAPER.md` or `docs/whitepaper/WHITEPAPER_LONG.md`, then run `npm run whitepaper:export`; during editing sessions, run `npm run whitepaper:watch` to regenerate automatically on save.
- Do not update `../dcorps-site`; that repository is archived and excluded from the active whitepaper artifact stack.

## Testing Guidelines
- Do a quick manual pass: verify index links, headings, and cross-references, and ensure public docs do not link to private restricted docs.
- For whitepaper changes, `npm run whitepaper:check` is required before the work is complete.

## Commit & Pull Request Guidelines
- Use structured commit headers: `type(scope): summary`.
- Keep commits atomic and avoid vague subjects like `update`, `misc`, or `wip`.
- Public-surface docs must not outrun the current product phase.
- For material changes, note why, what changed, risk, and validation in the commit body.
- Canonical version-control doctrine lives in `../dcorps-docs-private/docs/internal/ops/VERSION_CONTROL_PROTOCOL.md`.

## Automatic Commit & Push Workflow
- After Codex makes any code, configuration, documentation, artifact, or automation change, run the appropriate focused checks before finishing the task.
- Once verification passes, commit the completed change immediately on the current branch instead of waiting for the user to request a grouped commit.
- Push the current branch to its configured remote after the commit succeeds.
- Do not create, switch, rename, or delete branches unless the user explicitly asks; branch control remains with the user.
- If checks fail, required verification is blocked, the branch has no upstream, or the push needs unavailable credentials, stop and report the blocker instead of pretending the commit or push happened.
- For cross-repo whitepaper mirror changes, do not hide sibling-repo dirty state. Commit/push each affected repo only when its checks pass and its branch/remote state are clear.

## Security & Publication Policy
- Documentation is public by default. Safety-sensitive operational content belongs in `dcorps-docs-private/docs/restricted/` and must not be linked from public docs.
- Never add secrets (keys, mnemonics, credentials, `.env` contents). Refer to `docs/policy/POL-DOCS-PUBLICATION.md` for the source policy.
- Whitepaper Markdown, PDF, and public mirrors must remain aligned under `docs/policy/POL-DOCS-PUBLICATION.md`.
