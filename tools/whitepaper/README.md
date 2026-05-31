# Whitepaper Export Tool

This directory owns generated whitepaper artifacts.

## Source of truth

- Canonical long-form PDF source: `docs/whitepaper/WHITEPAPER_LONG.md`
- Canonical public Markdown mirror source: `docs/whitepaper/WHITEPAPER.md`
- Generated PDF: `docs/whitepaper/pdf/dCorpsHub_Whitepaper.pdf`
- Generated checksums:
  - `docs/whitepaper/pdf/dCorpsHub_Whitepaper.source.sha256`
  - `docs/whitepaper/pdf/dCorpsHub_Whitepaper.pdf.sha256`

Run:

```bash
npm run whitepaper:export
npm run whitepaper:check
```

During editing sessions, run:

```bash
npm run whitepaper:watch
```

The watcher regenerates the generated PDF, checksum files, and local mirrors whenever either canonical whitepaper Markdown file changes.

Install tracked local git hooks with:

```bash
npm run hooks:install
```

The installer sets `git config core.hooksPath .githooks`. The pre-commit hook runs `whitepaper:export` when either canonical whitepaper Markdown file is staged, stages the generated PDF artifacts inside this repo, and then runs `whitepaper:check`. The pre-push hook also runs `whitepaper:check`.

## Verification model

The PDF includes the canonical source SHA-256 fingerprint inside the document. The exact PDF file SHA-256 is published as a detached sidecar checksum beside the PDF. Do not try to place the PDF file hash visibly inside the PDF: adding that text changes the PDF bytes and invalidates the hash.

Public PDF checksum sidecars use the local filename `dCorpsHub_Whitepaper.pdf`, so a downloaded PDF can be verified directly:

```bash
shasum -c dCorpsHub_Whitepaper.pdf.sha256
```

## Clickable index

The table of contents is generated from Markdown `h2` and `h3` headings and rendered as internal PDF links with printed page numbers. The export tool performs a draft body render, uses `pdftotext` to resolve the page each heading lands on, then renders the final body PDF with those page numbers.

## Visual support method

Visual support elements are source-controlled components in `export-whitepaper.mjs`. The front matter includes a visual guide with an organigram, operating-flow graphic, and financial-lane diagram. Body visuals are keyed by section heading in `renderVisualSupportForHeading`. Use this method for official diagrams, flow charts, lane diagrams, and section summaries so the PDF remains reproducible.

Preferred rules:

- Keep visuals explanatory, not decorative.
- Use plain HTML/CSS or inline SVG that headless Chrome can print reliably.
- Do not use manually edited PDF artwork.
- If a future charting library is added, render charts to deterministic inline SVG before printing the PDF.
