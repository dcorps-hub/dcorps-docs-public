#!/usr/bin/env node

import { createHash } from "node:crypto";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawn, spawnSync } from "node:child_process";
import { createServer } from "node:net";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");
const workspaceRoot = path.resolve(repoRoot, "..");
const args = new Set(process.argv.slice(2));
const checkOnly = args.has("--check");

const condensedSource = path.join(repoRoot, "docs/whitepaper/WHITEPAPER.md");
const longSource = path.join(repoRoot, "docs/whitepaper/WHITEPAPER_LONG.md");
const artifactDir = path.join(repoRoot, "docs/whitepaper/pdf");
const canonicalPdf = path.join(artifactDir, "dCorpsHub_Whitepaper.pdf");
const sourceHashFile = path.join(artifactDir, "dCorpsHub_Whitepaper.source.sha256");
const pdfHashFile = path.join(artifactDir, "dCorpsHub_Whitepaper.pdf.sha256");
const brandLogo = path.join(workspaceRoot, "dcorps-site-v2/img/brand/dCorpsHub-text-logo-horizontal.png");

const markdownMirrors = [
  path.join(workspaceRoot, "dcorps-site/content/whitepaper/md/WHITEPAPER.md")
];

const pdfMirrors = [
  path.join(workspaceRoot, "dcorps-site-v2/learn/whitepaper/dCorpsHub_Whitepaper.pdf"),
  path.join(workspaceRoot, "dcorps-site-v2/dist/learn/whitepaper/dCorpsHub_Whitepaper.pdf"),
  path.join(workspaceRoot, "dcorps-app/public/whitepaper/dCorpsHub_Whitepaper.pdf")
];

const sourceHashMirrors = [
  path.join(workspaceRoot, "dcorps-site-v2/learn/whitepaper/dCorpsHub_Whitepaper.source.sha256"),
  path.join(workspaceRoot, "dcorps-site-v2/dist/learn/whitepaper/dCorpsHub_Whitepaper.source.sha256"),
  path.join(workspaceRoot, "dcorps-app/public/whitepaper/dCorpsHub_Whitepaper.source.sha256")
];

const pdfHashMirrors = [
  path.join(workspaceRoot, "dcorps-site-v2/learn/whitepaper/dCorpsHub_Whitepaper.pdf.sha256"),
  path.join(workspaceRoot, "dcorps-site-v2/dist/learn/whitepaper/dCorpsHub_Whitepaper.pdf.sha256"),
  path.join(workspaceRoot, "dcorps-app/public/whitepaper/dCorpsHub_Whitepaper.pdf.sha256")
];

const datedHtmlMirrors = [
  path.join(workspaceRoot, "dcorps-site-v2/learn/whitepaper/index.html"),
  path.join(workspaceRoot, "dcorps-site-v2/dist/learn/whitepaper/index.html")
];

const failures = [];
const actions = [];

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

function sourceHashContents(hash) {
  return `${hash}  docs/whitepaper/WHITEPAPER_LONG.md\n`;
}

function pdfHashContents(hash) {
  return `${hash}  docs/whitepaper/pdf/dCorpsHub_Whitepaper.pdf\n`;
}

function publicPdfHashContents(hash) {
  return `${hash}  dCorpsHub_Whitepaper.pdf\n`;
}

function shortHash(hash, length = 16) {
  return hash.slice(0, length);
}

function readText(filePath) {
  return readFileSync(filePath, "utf8");
}

function readBuffer(filePath) {
  return readFileSync(filePath);
}

function fileDataUri(filePath, mimeType) {
  if (!existsSync(filePath)) {
    return "";
  }

  return `data:${mimeType};base64,${readBuffer(filePath).toString("base64")}`;
}

function ensureParent(filePath) {
  mkdirSync(path.dirname(filePath), { recursive: true });
}

function writeText(filePath, contents) {
  ensureParent(filePath);
  writeFileSync(filePath, contents);
  actions.push(`wrote ${path.relative(repoRoot, filePath)}`);
}

function copyFile(source, target) {
  ensureParent(target);
  copyFileSync(source, target);
  actions.push(`copied ${path.relative(repoRoot, source)} -> ${target}`);
}

function targetIsAvailable(target) {
  return existsSync(path.dirname(target));
}

function compareText(target, expected, label) {
  if (!targetIsAvailable(target)) {
    actions.push(`skipped missing target root for ${label}: ${target}`);
    return;
  }

  if (!existsSync(target)) {
    failures.push(`${label} is missing: ${target}`);
    return;
  }

  const actual = readText(target);
  if (actual !== expected) {
    failures.push(`${label} is stale: ${target}`);
  }
}

function compareHashFile(target, expectedHash, label) {
  if (!existsSync(target)) {
    failures.push(`${label} is missing: ${target}`);
    return;
  }

  const actual = readText(target).trim().split(/\s+/)[0];
  if (actual !== expectedHash) {
    failures.push(`${label} is stale: ${target}`);
  }
}

function extractLastUpdated(markdown) {
  const match = markdown.match(/\*\*Last updated\*\*:\s*([0-9]{4}-[0-9]{2}-[0-9]{2})/);
  if (!match) {
    throw new Error("WHITEPAPER_LONG.md must include a '**Last updated**: YYYY-MM-DD' line.");
  }

  return match[1];
}

function extractTitle(markdown) {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : "dCorps Hub Whitepaper";
}

function extractSubtitle(markdown) {
  const match = markdown.match(/^####\s+(.+)$/m);
  return match ? match[1].trim() : "Digitally native base layer for corporations and nonprofits";
}

function extractField(markdown, fieldName) {
  const pattern = new RegExp(`\\*\\*${fieldName}\\*\\*:\\s*([^\\n]+)`);
  const match = markdown.match(pattern);
  return match ? match[1].replace(/\s{2,}$/g, "").trim() : "";
}

function extractChangelog(markdown) {
  return extractField(markdown, "Changelog");
}

function extractDocumentMeta(markdown, sourceHash, lastUpdated) {
  return {
    title: extractTitle(markdown),
    subtitle: extractSubtitle(markdown),
    documentId: extractField(markdown, "Document ID") || extractField(markdown, "Doc ID"),
    version: extractField(markdown, "Version"),
    edition: extractField(markdown, "Edition"),
    status: extractField(markdown, "Status"),
    releaseDate: extractField(markdown, "Release date"),
    author: extractField(markdown, "Author"),
    lastUpdated,
    changelog: extractChangelog(markdown),
    sourceHash
  };
}

function stripOpeningMatter(markdown) {
  const normalized = markdown.replace(/\r\n/g, "\n");
  const firstRule = normalized.indexOf("\n---\n");
  if (firstRule === -1) {
    return normalized;
  }

  return normalized.slice(firstRule + "\n---\n".length).trimStart();
}

function slugifyHeading(value) {
  const slug = value
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[`*_()[\].,;:!?'"\\/]+/g, "")
    .replace(/&[a-z]+;/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || "section";
}

function collectHeadings(markdown) {
  const used = new Map();
  return markdown
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.match(/^(#{2,3})\s+(.+)$/))
    .filter(Boolean)
    .map((match) => {
      const text = match[2].trim();
      const baseId = slugifyHeading(text);
      const count = used.get(baseId) || 0;
      used.set(baseId, count + 1);
      return {
        level: match[1].length,
        text,
        id: count === 0 ? baseId : `${baseId}-${count + 1}`
      };
    });
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderInline(value) {
  let html = escapeHtml(value);
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_match, alt, url) => {
    return `<img alt="${escapeHtml(alt)}" src="${escapeHtml(url)}">`;
  });
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, text, url) => {
    return `<a href="${escapeHtml(url)}">${text}</a>`;
  });
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return html;
}

function parseTable(lines, startIndex) {
  const rows = [];
  let index = startIndex;

  while (index < lines.length && /^\s*\|.*\|\s*$/.test(lines[index])) {
    rows.push(lines[index]);
    index += 1;
  }

  if (rows.length < 2 || !/^\s*\|?\s*:?-{3,}:?\s*\|/.test(rows[1])) {
    return null;
  }

  function cells(row) {
    return row
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((cell) => cell.trim());
  }

  const header = cells(rows[0]);
  const bodyRows = rows.slice(2).map(cells);
  const html = [
    "<table>",
    "<thead><tr>",
    ...header.map((cell) => `<th>${renderInline(cell)}</th>`),
    "</tr></thead>",
    "<tbody>",
    ...bodyRows.map((row) => `<tr>${row.map((cell) => `<td>${renderInline(cell)}</td>`).join("")}</tr>`),
    "</tbody>",
    "</table>"
  ].join("");

  return { html, nextIndex: index };
}

function markdownToHtml(markdown, options = {}) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  const paragraph = [];
  const listStack = [];
  const headingIds = options.headingIds || new Map();
  const afterHeadingHtml = options.afterHeadingHtml;
  const usedHeadingIds = new Map();
  let inCode = false;
  let codeLanguage = "";
  const codeLines = [];

  function closeParagraph() {
    if (paragraph.length === 0) {
      return;
    }

    html.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
    paragraph.length = 0;
  }

  function closeLists(targetIndent = -1) {
    while (listStack.length && listStack[listStack.length - 1].indent > targetIndent) {
      html.push(`</${listStack.pop().type}>`);
    }
  }

  function closeAllLists() {
    closeLists(-1);
  }

  function openList(type, indent) {
    listStack.push({ type, indent });
    html.push(`<${type}>`);
  }

  for (let index = 0; index < lines.length; index += 1) {
    const rawLine = lines[index];
    const trimmed = rawLine.trim();

    if (inCode) {
      if (/^```/.test(trimmed)) {
        html.push(
          `<pre><code class="language-${escapeHtml(codeLanguage)}">${escapeHtml(codeLines.join("\n"))}</code></pre>`
        );
        inCode = false;
        codeLanguage = "";
        codeLines.length = 0;
      } else {
        codeLines.push(rawLine);
      }
      continue;
    }

    if (/^```/.test(trimmed)) {
      closeParagraph();
      closeAllLists();
      inCode = true;
      codeLanguage = trimmed.replace(/^```/, "").trim();
      continue;
    }

    if (!trimmed) {
      closeParagraph();
      closeAllLists();
      continue;
    }

    const table = parseTable(lines, index);
    if (table) {
      closeParagraph();
      closeAllLists();
      html.push(table.html);
      index = table.nextIndex - 1;
      continue;
    }

    const heading = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      closeParagraph();
      closeAllLists();
      const level = heading[1].length;
      const headingText = heading[2].trim();
      const baseId = headingIds.get(`${level}:${headingText}`) || slugifyHeading(headingText);
      const count = usedHeadingIds.get(baseId) || 0;
      usedHeadingIds.set(baseId, count + 1);
      const id = count === 0 ? baseId : `${baseId}-${count + 1}`;
      html.push(`<h${level} id="${escapeHtml(id)}">${renderInline(headingText)}</h${level}>`);
      if (afterHeadingHtml) {
        const extraHtml = afterHeadingHtml({ level, text: headingText, id });
        if (extraHtml) {
          html.push(extraHtml);
        }
      }
      continue;
    }

    if (/^-{3,}$/.test(trimmed)) {
      closeParagraph();
      closeAllLists();
      html.push("<hr>");
      continue;
    }

    if (trimmed.startsWith(">")) {
      closeParagraph();
      closeAllLists();
      html.push(`<blockquote>${renderInline(trimmed.replace(/^>\s?/, ""))}</blockquote>`);
      continue;
    }

    const unordered = rawLine.match(/^(\s*)[-*+]\s+(.+)$/);
    const ordered = rawLine.match(/^(\s*)[0-9]+\.\s+(.+)$/);
    const listItem = unordered || ordered;
    if (listItem) {
      closeParagraph();
      const indent = listItem[1].length;
      const type = ordered ? "ol" : "ul";
      while (
        listStack.length &&
        (listStack[listStack.length - 1].indent > indent || listStack[listStack.length - 1].type !== type)
      ) {
        html.push(`</${listStack.pop().type}>`);
      }
      if (!listStack.length || listStack[listStack.length - 1].indent < indent) {
        openList(type, indent);
      }
      html.push(`<li>${renderInline(listItem[2])}</li>`);
      continue;
    }

    paragraph.push(trimmed);
  }

  closeParagraph();
  closeAllLists();

  if (inCode) {
    html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
  }

  return html.join("\n");
}

function buildHeadingIdMap(headings) {
  const map = new Map();
  for (const heading of headings) {
    map.set(`${heading.level}:${heading.text}`, heading.id);
  }
  return map;
}

function renderToc(headings, tocPageNumbers = new Map()) {
  const majorHeadings = headings.filter((heading) => heading.level === 2 || heading.level === 3);
  return majorHeadings
    .map((heading) => {
      const className = heading.level === 3 ? "toc-row toc-row-sub" : "toc-row";
      const pageNumber = tocPageNumbers.get(heading.id) || "";
      const pageLabel = pageNumber ? String(pageNumber) : "...";
      return `<a class="${className}" href="#${escapeHtml(heading.id)}"><span class="toc-title">${renderInline(heading.text)}</span><span class="toc-page">${escapeHtml(pageLabel)}</span></a>`;
    })
    .join("\n");
}

function plainHeadingText(value) {
  return value
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, "$1")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/[`*_#]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizePdfText(value) {
  return value.replace(/\s+/g, " ").trim();
}

function resolvePdfToText() {
  return which("pdftotext");
}

function extractPdfPages(pdfPath) {
  const pdfToText = resolvePdfToText();
  if (!pdfToText) {
    throw new Error("pdftotext is required to resolve printed table-of-contents page numbers. Install Poppler.");
  }

  const result = spawnSync(pdfToText, ["-layout", pdfPath, "-"], {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024
  });

  if (result.status !== 0) {
    throw new Error(`pdftotext failed while reading ${pdfPath}: ${result.stderr || "unknown error"}`);
  }

  return result.stdout.split("\f").map(normalizePdfText);
}

function resolveTocPageNumbers(bodyPdf, headings) {
  const pages = extractPdfPages(bodyPdf);
  const changelogIndex = pages.findIndex((page) => page.includes("Changelog History"));
  const searchStart = changelogIndex === -1 ? 0 : changelogIndex + 1;
  const pageNumbers = new Map();
  const unresolved = [];
  let cursor = searchStart;

  for (const heading of headings.filter((entry) => entry.level === 2 || entry.level === 3)) {
    const needle = plainHeadingText(heading.text);
    let found = -1;

    for (let index = cursor; index < pages.length; index += 1) {
      if (pages[index].includes(needle)) {
        found = index;
        break;
      }
    }

    if (found === -1 && cursor > searchStart) {
      for (let index = searchStart; index < cursor; index += 1) {
        if (pages[index].includes(needle)) {
          found = index;
          break;
        }
      }
    }

    if (found === -1) {
      unresolved.push(heading.text);
      continue;
    }

    pageNumbers.set(heading.id, found + 1);
    cursor = found;
  }

  if (unresolved.length) {
    throw new Error(
      `Could not resolve printed TOC page numbers for ${unresolved.length} heading(s): ${unresolved
        .slice(0, 8)
        .join("; ")}`
    );
  }

  return pageNumbers;
}

function renderMetaRows(meta) {
  const rows = [
    ["Document ID", meta.documentId],
    ["Version", meta.version],
    ["Edition", meta.edition],
    ["Status", meta.status],
    ["Release date", meta.releaseDate],
    ["Last updated", meta.lastUpdated],
    ["Author", meta.author]
  ].filter(([, value]) => value);

  return rows
    .map(([label, value]) => `<div class="meta-row"><dt>${escapeHtml(label)}</dt><dd>${renderInline(value)}</dd></div>`)
    .join("\n");
}

function renderHashChunks(hash) {
  return hash
    .match(/.{1,8}/g)
    .map((chunk) => `<span>${escapeHtml(chunk)}</span>`)
    .join("");
}

function renderVerificationPanel(meta) {
  return `
    <div class="verification-grid">
      <div class="hash-card hash-card-primary">
        <span>Canonical source SHA-256</span>
        <code>${renderHashChunks(meta.sourceHash)}</code>
      </div>
      <div class="hash-card">
        <span>Short document fingerprint</span>
        <strong class="fingerprint-value">${escapeHtml(shortHash(meta.sourceHash, 24))}</strong>
        <p>Printed on the cover and final page for quick human comparison.</p>
      </div>
      <div class="hash-card">
        <span>PDF artifact SHA-256</span>
        <strong>Detached sidecar checksum</strong>
        <p>The exact PDF hash is published beside the PDF as sidecar file <code>dCorpsHub_Whitepaper.pdf.sha256</code></p>
      </div>
    </div>
    <div class="verify-steps">
      <div><strong>1</strong><p>Download <code>dCorpsHub_Whitepaper.pdf</code> and <code>dCorpsHub_Whitepaper.pdf.sha256</code> from the same publication location.</p></div>
      <div><strong>2</strong><p>Run the sidecar check: <code>shasum -c dCorpsHub_Whitepaper.pdf.sha256</code>. Manual check: compare <code>shasum -a 256 dCorpsHub_Whitepaper.pdf</code> with the sidecar.</p></div>
      <div><strong>3</strong><p>For source verification, hash <code>docs/whitepaper/WHITEPAPER_LONG.md</code> and compare it with the source hash printed above.</p></div>
    </div>
    <p class="verification-note">The PDF file hash is intentionally detached: embedding a PDF's own final hash visibly inside the PDF would alter the file and invalidate that same hash.</p>
  `;
}

function renderVisualGuideSection() {
  return `
  <section class="front-section visual-guide-section">
    <div class="section-kicker">Visual guide</div>
    <h1 class="front-title">Operating Model at a Glance</h1>
    <p class="front-lede">These diagrams summarize the main reading model before the long-form whitepaper begins: one entity kernel, optional adapters, typed money flows, and verifiable evidence.</p>

    <div class="visual-guide-panel">
      <div class="visual-guide-title">dCorps Hub organigram and ecosystem roles</div>
      <div class="org-chart">
        <div class="org-node org-node-root"><strong>dCorps Hub Kernel</strong><span>Canonical entity registry, authority, wallets, accounting events, governance actions, and anchors.</span></div>
        <div class="org-branches">
          <div class="org-node"><strong>Hub entities</strong><span>Corporations and nonprofits operating on shared protocol semantics.</span></div>
          <div class="org-node"><strong>Applications</strong><span>Official app, explorers, reporting, payroll, donations, and third-party tools.</span></div>
          <div class="org-node"><strong>Governance and stewards</strong><span>Protocol policy, treasury processes, security review, and future foundation roles.</span></div>
          <div class="org-node"><strong>Optional adapters</strong><span>Jurisdiction, institutional, sector, attestation, and impact interpretation layers.</span></div>
        </div>
      </div>
    </div>

    <div class="visual-guide-grid">
      <div class="visual-guide-card">
        <div class="visual-guide-title">Operating proof path</div>
        <div class="mini-flow">
          <span>Register</span>
          <span>Assign roles</span>
          <span>Move value</span>
          <span>Anchor proof</span>
          <span>Report</span>
        </div>
      </div>
      <div class="visual-guide-card">
        <div class="visual-guide-title">Financial lanes</div>
        <div class="lane-diagram">
          <div><strong>Stablecoins</strong><span>Invoicing, payroll, grants, vendor payments, donations.</span></div>
          <div><strong>DCHUB</strong><span>Gas, protocol fees, governance weight, registry actions.</span></div>
          <div><strong>Evidence</strong><span>Document hashes, attestations, governance references.</span></div>
        </div>
      </div>
    </div>
  </section>
  `;
}

function visualNode(title, body) {
  return `<div class="visual-node"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(body)}</span></div>`;
}

function renderVisualSupportForHeading({ level, text }) {
  if (level !== 2) {
    return "";
  }

  const heading = text.replace(/\s+/g, " ").trim();
  const visuals = {
    "0. Executive summary": `
      <aside class="visual-support">
        <div class="visual-title">Core verification loop</div>
        <p class="visual-lede">The whitepaper repeatedly returns to one operating cycle: create a canonical entity, define authority, move value through known wallets, and anchor evidence so outside parties can verify state.</p>
        <div class="visual-flow">
          ${visualNode("Entity", "Registry identity and status")}
          ${visualNode("Authority", "Roles, units, approvals")}
          ${visualNode("Wallets", "Treasury and operating flows")}
          ${visualNode("Evidence", "Hashes, records, attestations")}
          ${visualNode("Reports", "Readable views over shared state")}
        </div>
      </aside>
    `,
    "2. Vision, problem, and context": `
      <aside class="visual-support">
        <div class="visual-title">From fragmented operations to shared state</div>
        <div class="visual-lanes">
          <div class="visual-lane"><strong>Current pattern</strong><span>Private ledgers, disconnected approvals, screenshots, and delayed reconciliation.</span></div>
          <div class="visual-lane visual-lane-accent"><strong>dCorps pattern</strong><span>Canonical entity state, standardized wallet flows, public proofs, and optional adapter layers.</span></div>
        </div>
      </aside>
    `,
    "5. High-level architecture": `
      <aside class="visual-support">
        <div class="visual-title">Layered architecture map</div>
        <div class="architecture-bars">
          <div><strong>Applications</strong><span>App, explorer, payroll, donation, reporting, analytics</span></div>
          <div><strong>Adapter modules</strong><span>Jurisdiction recognition, sector logic, attestations</span></div>
          <div><strong>Hub kernel</strong><span>Registry, authority, wallets, governance, accounting, anchoring</span></div>
          <div><strong>Settlement posture</strong><span>Arbitrum Orbit rollup model with Ethereum settlement assumptions</span></div>
        </div>
      </aside>
    `,
    "7. Entity models on the base layer": `
      <aside class="visual-support">
        <div class="visual-title">Two first-class entity families</div>
        <div class="visual-lanes">
          <div class="visual-lane"><strong>Hub corporation</strong><span>Units, ownership, voting, treasury, commercial accounting, and corporate actions.</span></div>
          <div class="visual-lane"><strong>Hub nonprofit</strong><span>Board governance, donation intake, allocation rules, program spending, and transparency outputs.</span></div>
        </div>
      </aside>
    `,
    "8. Identity, roles, and data architecture": `
      <aside class="visual-support">
        <div class="visual-title">Identity and data boundary</div>
        <div class="visual-flow visual-flow-four">
          ${visualNode("Entity ID", "Canonical registry object")}
          ${visualNode("Roles", "Governance and operational powers")}
          ${visualNode("Wallets", "Typed addresses and permissions")}
          ${visualNode("Events", "Accounting and governance history")}
        </div>
      </aside>
    `,
    "9. On-chain operations": `
      <aside class="visual-support">
        <div class="visual-title">Operational evidence path</div>
        <div class="visual-flow">
          ${visualNode("Proposal", "Intent and required approvals")}
          ${visualNode("Approval", "Role-bound action")}
          ${visualNode("Execution", "Wallet or module activity")}
          ${visualNode("Anchor", "Document or evidence hash")}
          ${visualNode("Report", "Auditable output")}
        </div>
      </aside>
    `,
    "10. Token model and economic design": `
      <aside class="visual-support">
        <div class="visual-title">Economic flow map</div>
        <div class="token-map">
          <div><strong>Users and entities</strong><span>pay fees for registration, modules, and operations</span></div>
          <div><strong>DCHUB</strong><span>prices execution, participation, governance weight, and aligned incentives</span></div>
          <div><strong>Protocol funding</strong><span>supports security, public goods, operations, and governed ecosystem programs</span></div>
        </div>
      </aside>
    `,
    "13. Protocol governance": `
      <aside class="visual-support">
        <div class="visual-title">Governance safety sequence</div>
        <div class="visual-flow">
          ${visualNode("Draft", "Public proposal and rationale")}
          ${visualNode("Review", "Risk, security, and policy evaluation")}
          ${visualNode("Vote", "Governed approval path")}
          ${visualNode("Delay", "Timelock or protected-change window")}
          ${visualNode("Execute", "Transparent implementation")}
        </div>
      </aside>
    `,
    "16. Implementation status and roadmap": `
      <aside class="visual-support">
        <div class="visual-title">Roadmap posture</div>
        <div class="roadmap-strip">
          <div><strong>Phase 0A</strong><span>Local development and documentation hardening</span></div>
          <div><strong>Devnet</strong><span>Shared chain rehearsals and interface evidence</span></div>
          <div><strong>Testnet</strong><span>Partner validation, security review, launch readiness</span></div>
          <div><strong>Mainnet v1</strong><span>Narrow, auditable entity kernel before expansion</span></div>
        </div>
      </aside>
    `
  };

  return visuals[heading] || "";
}

function professionalStyles() {
  return `
    @page { size: Letter; margin: 0.74in 0.68in 0.78in; }
    * { box-sizing: border-box; }
    html { color: #10151f; font-family: Arial, Helvetica, sans-serif; }
    body {
      color: #10151f;
      font-size: 9.7pt;
      line-height: 1.46;
      margin: 0;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    h1, h2, h3, h4, h5, h6 {
      color: #07111f;
      font-weight: 700;
      line-height: 1.16;
      margin: 1.02em 0 0.42em;
      page-break-after: avoid;
    }
    h1 { font-size: 23pt; margin-top: 0; }
    h2 {
      border-bottom: 1px solid #cfd8e6;
      font-size: 15.8pt;
      letter-spacing: 0;
      padding-bottom: 0.11in;
    }
    h3 { color: #0b3551; font-size: 12.7pt; }
    h4 { color: #20304a; font-size: 10.8pt; }
    p { margin: 0 0 0.62em; }
    a { color: #00698f; text-decoration: none; }
    ul, ol { margin: 0 0 0.68em 1.05em; padding-left: 1.04em; }
    li { margin: 0.13em 0; }
    blockquote {
      background: #f4f8fb;
      border-left: 4px solid #00a6ca;
      color: #27364c;
      margin: 0.8em 0;
      padding: 0.2em 0.78em;
    }
    code {
      background: #eef3f7;
      border-radius: 3px;
      color: #18324e;
      font-family: "SFMono-Regular", Consolas, monospace;
      font-size: 0.9em;
      padding: 0.04em 0.2em;
    }
    pre {
      background: #0b1420;
      border: 1px solid #152840;
      border-radius: 4px;
      color: #edf6ff;
      font-size: 8.7pt;
      margin: 0.72em 0;
      overflow-wrap: anywhere;
      padding: 0.68em;
      white-space: pre-wrap;
    }
    pre code { background: transparent; color: inherit; padding: 0; }
    hr { border: 0; border-top: 1px solid #d4dbe8; margin: 1.05em 0; }
    table {
      border-collapse: collapse;
      font-size: 8.45pt;
      margin: 0.72em 0 0.9em;
      width: 100%;
    }
    th, td {
      border: 1px solid #cbd4e1;
      padding: 0.31em 0.4em;
      text-align: left;
      vertical-align: top;
    }
    th { background: #edf3f8; color: #0b2038; }
    img { max-width: 100%; }
    .front-section {
      break-after: page;
      min-height: 8.45in;
      padding-top: 0.08in;
    }
    .section-kicker {
      color: #007693;
      font-size: 8.1pt;
      font-weight: 700;
      letter-spacing: 0.14em;
      margin-bottom: 0.13in;
      text-transform: uppercase;
    }
    .front-title {
      color: #07111f;
      font-size: 26pt;
      line-height: 1.08;
      margin: 0 0 0.15in;
    }
    .front-lede {
      color: #2a384c;
      font-size: 11.6pt;
      line-height: 1.44;
      max-width: 6.65in;
    }
    .meta-grid {
      border-top: 2px solid #0f2438;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      margin: 0.32in 0 0.24in;
    }
    .meta-row {
      border-bottom: 1px solid #d4dce8;
      display: grid;
      grid-template-columns: 1.18in 1fr;
      min-height: 0.32in;
      padding: 0.08in 0.1in 0.08in 0;
    }
    .meta-row dt {
      color: #5b6878;
      font-size: 7.8pt;
      font-weight: 700;
      text-transform: uppercase;
    }
    .meta-row dd { margin: 0; }
    .notice-box {
      background: #f5f8fb;
      border: 1px solid #d5dfea;
      border-left: 4px solid #00a6ca;
      margin-top: 0.18in;
      padding: 0.15in 0.18in;
    }
    .visual-grid {
      display: grid;
      gap: 0.12in;
      grid-template-columns: repeat(3, 1fr);
      margin-top: 0.25in;
    }
    .visual-card {
      background: linear-gradient(180deg, #ffffff 0%, #f4f8fb 100%);
      border: 1px solid #cfd9e7;
      min-height: 1.1in;
      padding: 0.15in;
    }
    .visual-card strong {
      color: #07111f;
      display: block;
      font-size: 9.5pt;
      margin-bottom: 0.05in;
    }
    .visual-card p {
      color: #425066;
      font-size: 8.6pt;
      margin: 0;
    }
    .verification-grid {
      display: grid;
      gap: 0.13in;
      grid-template-columns: 1.28fr 0.86fr 0.98fr;
      margin: 0.25in 0 0.18in;
    }
    .hash-card {
      background: #ffffff;
      border: 1px solid #cfd9e7;
      min-height: 1.15in;
      padding: 0.14in;
    }
    .hash-card-primary { border-top: 4px solid #07111f; }
    .hash-card span {
      color: #607085;
      display: block;
      font-size: 7.4pt;
      font-weight: 700;
      letter-spacing: 0.11em;
      margin-bottom: 0.07in;
      text-transform: uppercase;
    }
    .hash-card strong {
      color: #07111f;
      display: block;
      font-size: 10.5pt;
      line-height: 1.22;
      overflow-wrap: anywhere;
    }
    .hash-card .fingerprint-value {
      font-family: "SFMono-Regular", Consolas, monospace;
      font-size: 8.1pt;
      letter-spacing: 0;
      line-height: 1.32;
      overflow-wrap: normal;
      white-space: nowrap;
    }
    .hash-card p {
      color: #4b5b70;
      font-size: 8.1pt;
      margin: 0.08in 0 0;
    }
    .hash-card code {
      background: transparent;
      display: flex;
      flex-wrap: wrap;
      gap: 0.035in;
      line-height: 1.55;
      padding: 0;
    }
    .hash-card code span {
      background: #eef3f7;
      border: 1px solid #d6dfeb;
      color: #0e243a;
      display: inline-block;
      font-family: "SFMono-Regular", Consolas, monospace;
      font-size: 7pt;
      letter-spacing: 0;
      margin: 0;
      padding: 0.018in 0.036in;
      text-transform: none;
    }
    .verify-steps {
      border-top: 2px solid #0f2438;
      display: grid;
      gap: 0.1in;
      grid-template-columns: repeat(3, 1fr);
      margin-top: 0.22in;
      padding-top: 0.14in;
    }
    .verify-steps div {
      background: #f7fafc;
      border: 1px solid #d8e1ec;
      padding: 0.12in;
    }
    .verify-steps strong {
      align-items: center;
      background: #07111f;
      color: #ffffff;
      display: inline-flex;
      font-size: 8pt;
      height: 0.22in;
      justify-content: center;
      margin-bottom: 0.07in;
      width: 0.22in;
    }
    .verify-steps p {
      color: #405168;
      font-size: 8.1pt;
      margin: 0;
    }
    .verification-note {
      color: #5a697a;
      font-size: 8.4pt;
      margin-top: 0.18in;
    }
    .stack-diagram {
      border: 1px solid #cbd6e4;
      margin-top: 0.22in;
      padding: 0.12in;
    }
    .stack-row {
      align-items: center;
      background: #f7fafc;
      border: 1px solid #dce4ee;
      display: grid;
      gap: 0.12in;
      grid-template-columns: 1.85in 1fr;
      margin-bottom: 0.08in;
      min-height: 0.48in;
      padding: 0.1in 0.12in;
    }
    .stack-row:last-child { margin-bottom: 0; }
    .stack-row strong { color: #0a273d; }
    .stack-row span { color: #425066; font-size: 8.7pt; }
    .visual-guide-section { padding-top: 0.02in; }
    .visual-guide-panel {
      border: 1px solid #cbd6e4;
      border-top: 4px solid #07111f;
      margin-top: 0.22in;
      padding: 0.16in;
    }
    .visual-guide-title {
      color: #07111f;
      font-size: 10.7pt;
      font-weight: 700;
      margin-bottom: 0.1in;
    }
    .org-chart {
      display: grid;
      gap: 0.16in;
    }
    .org-node {
      background: #ffffff;
      border: 1px solid #d6dfeb;
      min-height: 0.68in;
      padding: 0.12in;
      text-align: center;
    }
    .org-node-root {
      background: #f3f8fb;
      border-color: #93b9cb;
      margin: 0 auto;
      max-width: 4.75in;
      position: relative;
    }
    .org-node-root::after {
      background: #93b9cb;
      bottom: -0.17in;
      content: "";
      height: 0.17in;
      left: 50%;
      position: absolute;
      width: 1px;
    }
    .org-branches {
      display: grid;
      gap: 0.08in;
      grid-template-columns: repeat(4, 1fr);
      position: relative;
    }
    .org-branches::before {
      background: #93b9cb;
      content: "";
      height: 1px;
      left: 12.5%;
      position: absolute;
      right: 12.5%;
      top: -0.08in;
    }
    .org-branches .org-node {
      min-height: 0.96in;
      position: relative;
    }
    .org-branches .org-node::before {
      background: #93b9cb;
      content: "";
      height: 0.08in;
      left: 50%;
      position: absolute;
      top: -0.08in;
      width: 1px;
    }
    .org-node strong,
    .mini-flow span,
    .lane-diagram strong {
      color: #07111f;
      display: block;
      font-size: 8.6pt;
      margin-bottom: 0.04in;
    }
    .org-node span,
    .lane-diagram span {
      color: #526173;
      display: block;
      font-size: 7.35pt;
      line-height: 1.34;
    }
    .visual-guide-grid {
      display: grid;
      gap: 0.12in;
      grid-template-columns: 1.06fr 0.94fr;
      margin-top: 0.14in;
    }
    .visual-guide-card {
      border: 1px solid #cbd6e4;
      padding: 0.15in;
    }
    .mini-flow {
      display: grid;
      gap: 0.07in;
      grid-template-columns: repeat(5, 1fr);
    }
    .mini-flow span {
      background: #f6f9fc;
      border: 1px solid #d6dfeb;
      min-height: 0.5in;
      padding: 0.12in 0.06in;
      position: relative;
      text-align: center;
    }
    .mini-flow span::after {
      color: #00a6ca;
      content: ">";
      font-size: 10pt;
      font-weight: 700;
      position: absolute;
      right: -0.075in;
      top: 0.16in;
    }
    .mini-flow span:last-child::after { content: ""; }
    .lane-diagram {
      display: grid;
      gap: 0.07in;
    }
    .lane-diagram div {
      background: #f6f9fc;
      border: 1px solid #d6dfeb;
      border-left: 4px solid #00a6ca;
      padding: 0.08in 0.1in;
    }
    .toc-list {
      border-top: 2px solid #0f2438;
      margin-top: 0.04in;
      padding-top: 0.06in;
    }
    .toc-header {
      color: #607085;
      display: flex;
      font-size: 7.4pt;
      font-weight: 700;
      justify-content: space-between;
      letter-spacing: 0.12em;
      margin-top: 0.22in;
      text-transform: uppercase;
    }
    .toc-row {
      border-bottom: 1px solid #e0e6ef;
      color: #102033;
      display: flex;
      font-size: 9.2pt;
      gap: 0.12in;
      justify-content: space-between;
      padding: 0.055in 0;
    }
    .toc-title {
      min-width: 0;
      overflow-wrap: anywhere;
    }
    .toc-page {
      color: #7a8798;
      flex: 0 0 0.38in;
      font-size: 8.7pt;
      font-weight: 700;
      text-align: right;
    }
    .toc-row-sub {
      color: #536176;
      font-size: 8.3pt;
      padding-left: 0.22in;
    }
    .toc-row-sub .toc-page { color: #a0aaba; }
    .visual-support {
      background: linear-gradient(180deg, #ffffff 0%, #f6f9fc 100%);
      border: 1px solid #cbd6e4;
      border-left: 4px solid #00a6ca;
      break-inside: avoid;
      margin: 0.08in 0 0.22in;
      padding: 0.14in 0.16in 0.16in;
      page-break-inside: avoid;
    }
    .visual-title {
      color: #07111f;
      font-size: 10.5pt;
      font-weight: 700;
      margin-bottom: 0.07in;
    }
    .visual-lede {
      color: #405168;
      font-size: 8.4pt;
      margin-bottom: 0.12in;
    }
    .visual-flow {
      display: grid;
      gap: 0.07in;
      grid-template-columns: repeat(5, 1fr);
    }
    .visual-flow-four { grid-template-columns: repeat(4, 1fr); }
    .visual-node {
      background: #ffffff;
      border: 1px solid #d7e0eb;
      min-height: 0.64in;
      padding: 0.08in;
      position: relative;
    }
    .visual-node::after {
      color: #00a6ca;
      content: ">";
      font-size: 11pt;
      font-weight: 700;
      position: absolute;
      right: -0.07in;
      top: 0.2in;
      z-index: 2;
    }
    .visual-node:last-child::after { content: ""; }
    .visual-node strong,
    .visual-lane strong,
    .architecture-bars strong,
    .token-map strong,
    .roadmap-strip strong {
      color: #07111f;
      display: block;
      font-size: 8.6pt;
      margin-bottom: 0.035in;
    }
    .visual-node span,
    .visual-lane span,
    .architecture-bars span,
    .token-map span,
    .roadmap-strip span {
      color: #526173;
      display: block;
      font-size: 7.55pt;
      line-height: 1.32;
    }
    .visual-lanes {
      display: grid;
      gap: 0.12in;
      grid-template-columns: 1fr 1fr;
    }
    .visual-lane {
      background: #ffffff;
      border: 1px solid #d7e0eb;
      min-height: 0.72in;
      padding: 0.12in;
    }
    .visual-lane-accent { border-top: 4px solid #00a6ca; }
    .architecture-bars {
      display: grid;
      gap: 0.065in;
    }
    .architecture-bars div {
      align-items: center;
      background: #ffffff;
      border: 1px solid #d8e1ec;
      display: grid;
      gap: 0.1in;
      grid-template-columns: 1.42in 1fr;
      min-height: 0.42in;
      padding: 0.08in 0.1in;
    }
    .token-map {
      display: grid;
      gap: 0.1in;
      grid-template-columns: repeat(3, 1fr);
    }
    .token-map div {
      background: #ffffff;
      border: 1px solid #d8e1ec;
      min-height: 0.82in;
      padding: 0.12in;
    }
    .token-map div:nth-child(2) {
      border-top: 4px solid #07111f;
    }
    .roadmap-strip {
      display: grid;
      gap: 0.08in;
      grid-template-columns: repeat(4, 1fr);
    }
    .roadmap-strip div {
      background: #ffffff;
      border: 1px solid #d8e1ec;
      min-height: 0.76in;
      padding: 0.1in;
    }
    .change-history {
      border-top: 2px solid #0f2438;
      margin-top: 0.25in;
    }
    .change-row {
      border-bottom: 1px solid #dbe3ec;
      display: grid;
      gap: 0.16in;
      grid-template-columns: 1.3in 1.05in 1fr;
      padding: 0.12in 0;
    }
    .change-row strong { color: #0a273d; }
    .change-row span { color: #536176; font-size: 8.5pt; }
    .whitepaper-body h2 { break-before: page; }
    .whitepaper-body h2:first-child { break-before: auto; }
    .final-page {
      align-items: center;
      break-before: page;
      display: flex;
      min-height: 8.45in;
    }
    .final-card {
      border-top: 4px solid #07111f;
      padding-top: 0.24in;
      width: 100%;
    }
    .final-logo { height: 0.52in; margin-bottom: 0.3in; width: auto; }
    .final-title { font-size: 25pt; margin: 0 0 0.15in; }
    .final-copy { color: #425066; font-size: 10.5pt; max-width: 5.7in; }
    .hash-line {
      color: #536176;
      font-family: "SFMono-Regular", Consolas, monospace;
      font-size: 7.1pt;
      margin-top: 0.28in;
      overflow-wrap: anywhere;
    }
  `;
}

function buildCoverHtml(meta, logoDataUri) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(meta.title)} cover</title>
  <style>
    @page { size: Letter; margin: 0; }
    * { box-sizing: border-box; }
    body {
      font-family: Arial, Helvetica, sans-serif;
      margin: 0;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .cover {
      background:
        linear-gradient(90deg, #07111f 0, #07111f 0.34in, transparent 0.34in),
        linear-gradient(135deg, #ffffff 0%, #f4f8fb 52%, #eaf4f8 100%);
      color: #07111f;
      height: 11in;
      overflow: hidden;
      padding: 0.72in 0.68in 0.58in 0.86in;
      position: relative;
      width: 8.5in;
    }
    .cover::after {
      background: linear-gradient(180deg, #00a6ca 0%, #d33cc4 100%);
      content: "";
      height: 5.2in;
      left: 0.18in;
      position: absolute;
      top: 0.7in;
      width: 0.055in;
    }
    .logo { height: 0.56in; width: auto; }
    .official {
      color: #006b86;
      font-size: 8.2pt;
      font-weight: 700;
      letter-spacing: 0.16em;
      margin-top: 1.15in;
      text-transform: uppercase;
    }
    h1 {
      font-size: 36pt;
      line-height: 1.02;
      margin: 0.18in 0 0.12in;
      max-width: 6.5in;
    }
    .subtitle {
      color: #26364d;
      font-size: 14pt;
      line-height: 1.32;
      max-width: 6.2in;
    }
    .cover-grid {
      bottom: 0.7in;
      display: grid;
      gap: 0.14in;
      grid-template-columns: 1fr 1fr;
      left: 0.86in;
      position: absolute;
      right: 0.68in;
    }
    .cover-card {
      background: rgba(255, 255, 255, 0.88);
      border: 1px solid #cbd7e5;
      min-height: 0.66in;
      padding: 0.12in 0.14in;
    }
    .cover-card span {
      color: #607085;
      display: block;
      font-size: 7.6pt;
      font-weight: 700;
      letter-spacing: 0.12em;
      margin-bottom: 0.04in;
      text-transform: uppercase;
    }
    .cover-card strong {
      color: #07111f;
      display: block;
      font-size: 10.4pt;
    }
    .cover-note {
      color: #506174;
      font-size: 8.4pt;
      margin-top: 0.36in;
      max-width: 5.8in;
    }
    .cover-fingerprint {
      border-top: 1px solid #c7d3e1;
      color: #506174;
      font-size: 7.7pt;
      margin-top: 0.18in;
      max-width: 5.8in;
      padding-top: 0.12in;
    }
    .cover-fingerprint span {
      display: block;
      font-weight: 700;
      letter-spacing: 0.12em;
      margin-bottom: 0.035in;
      text-transform: uppercase;
    }
    .cover-fingerprint code {
      color: #07111f;
      font-family: "SFMono-Regular", Consolas, monospace;
      font-size: 8.5pt;
    }
  </style>
</head>
<body>
  <section class="cover">
    ${logoDataUri ? `<img class="logo" src="${logoDataUri}" alt="dCorps Hub">` : `<strong>dCorps Hub</strong>`}
    <div class="official">Official design-intent document</div>
    <h1>${escapeHtml(meta.title)}</h1>
    <p class="subtitle">${escapeHtml(meta.subtitle)}</p>
    <p class="cover-note">This document is informational. It is not an offer, investment advice, legal advice, tax advice, accounting advice, or a promise of listing, liquidity, price performance, or financial return.</p>
    <div class="cover-fingerprint"><span>Source fingerprint</span><code>${escapeHtml(shortHash(meta.sourceHash, 24))}</code></div>
    <div class="cover-grid">
      <div class="cover-card"><span>Document ID</span><strong>${escapeHtml(meta.documentId)}</strong></div>
      <div class="cover-card"><span>Version</span><strong>${escapeHtml(meta.version)} / ${escapeHtml(meta.edition)}</strong></div>
      <div class="cover-card"><span>Status</span><strong>${escapeHtml(meta.status)}</strong></div>
      <div class="cover-card"><span>Last updated</span><strong>${escapeHtml(meta.lastUpdated)}</strong></div>
    </div>
  </section>
</body>
</html>`;
}

function buildBodyHtml(markdown, meta, logoDataUri, options = {}) {
  const bodyMarkdown = stripOpeningMatter(markdown);
  const headings = collectHeadings(bodyMarkdown);
  const body = markdownToHtml(bodyMarkdown, {
    headingIds: buildHeadingIdMap(headings),
    afterHeadingHtml: renderVisualSupportForHeading
  });

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="dcorps-source" content="docs/whitepaper/WHITEPAPER_LONG.md">
  <meta name="dcorps-source-sha256" content="${meta.sourceHash}">
  <meta name="dcorps-last-updated" content="${meta.lastUpdated}">
  <title>${escapeHtml(meta.title)}</title>
  <style>${professionalStyles()}</style>
</head>
<body>
  <section class="front-section">
    <div class="section-kicker">Document control</div>
    <h1 class="front-title">${escapeHtml(meta.title)}</h1>
    <p class="front-lede">${escapeHtml(meta.subtitle)}</p>
    <dl class="meta-grid">
      ${renderMetaRows(meta)}
    </dl>
    <div class="notice-box">
      <strong>Official source and publication boundary</strong>
      <p>This PDF is generated from the canonical Markdown source at <code>docs/whitepaper/WHITEPAPER_LONG.md</code>. If a conflict exists between this whitepaper and a normative specification or policy, the normative specification or policy takes precedence.</p>
    </div>
    <div class="visual-grid">
      <div class="visual-card"><strong>Design intent</strong><p>Explains the purpose, scope, and architecture of dCorps.</p></div>
      <div class="visual-card"><strong>Protocol boundary</strong><p>Separates narrative doctrine from normative specifications.</p></div>
      <div class="visual-card"><strong>Public posture</strong><p>Records disclosures, risks, and non-promissory constraints.</p></div>
    </div>
  </section>

  <section class="front-section">
    <div class="section-kicker">Verification</div>
    <h1 class="front-title">Integrity Confirmation</h1>
    <p class="front-lede">This PDF carries the canonical source fingerprint and ships with detached checksum files so a downloaded copy can be verified before citation, sharing, or archival use.</p>
    ${renderVerificationPanel(meta)}
  </section>

  <section class="front-section">
    <div class="section-kicker">Introduction</div>
    <h1 class="front-title">How to Read This Document</h1>
    <p class="front-lede">The dCorps Hub whitepaper is the long-form design-intent layer for the protocol. It is written for founders, nonprofit leaders, builders, operators, institutions, and legal readers who need the full rationale behind the entity kernel, operating model, governance posture, and risk boundaries.</p>
    <div class="stack-diagram" aria-label="dCorps architecture summary">
      <div class="stack-row"><strong>Applications</strong><span>Official app, explorers, dashboards, donation portals, merchant flows, payroll, reporting, and third-party tools.</span></div>
      <div class="stack-row"><strong>Optional modules</strong><span>Jurisdiction recognition, sector frameworks, attestations, and other derived interpretation layers.</span></div>
      <div class="stack-row"><strong>dCorps Hub kernel</strong><span>Entity registry, authority, wallets, governance actions, accounting events, anchoring, and append-only operating history.</span></div>
      <div class="stack-row"><strong>Settlement layer</strong><span>Arbitrum Orbit rollup posture with Ethereum settlement and data availability assumptions.</span></div>
    </div>
    <div class="notice-box">
      <strong>Reader rule</strong>
      <p>Use this whitepaper for design intent. Use the protocol specifications for correctness, the policy documents for process, and the security documents for operational posture.</p>
    </div>
  </section>

  ${renderVisualGuideSection()}

  <section class="front-section">
    <div class="section-kicker">Contents</div>
    <h1 class="front-title">Table of Contents</h1>
    <p class="front-lede">Generated from the canonical Markdown headings at export time. Page numbers match the printed PDF pagination.</p>
    <div class="toc-header"><span>Section</span><span>Page</span></div>
    <nav class="toc-list">${renderToc(headings, options.tocPageNumbers)}</nav>
  </section>

  <section class="front-section">
    <div class="section-kicker">Version history</div>
    <h1 class="front-title">Changelog History</h1>
    <p class="front-lede">The PDF keeps the current release metadata visible before the main text so shared copies remain self-describing.</p>
    <div class="change-history">
      <div class="change-row"><strong>${escapeHtml(meta.version)}</strong><span>${escapeHtml(meta.lastUpdated)}</span><p>${renderInline(meta.changelog || "Current exported version.")}</p></div>
      <div class="change-row"><strong>Release</strong><span>${escapeHtml(meta.releaseDate)}</span><p>Initial public release date recorded for this whitepaper line.</p></div>
    </div>
  </section>

  <article class="whitepaper-body">
    ${body}
  </article>

  <section class="final-page">
    <div class="final-card">
      ${logoDataUri ? `<img class="final-logo" src="${logoDataUri}" alt="dCorps Hub">` : ""}
      <h1 class="final-title">End of Document</h1>
      <p class="final-copy">This official PDF was generated from the canonical public whitepaper Markdown source. The document is informational and non-promissory. Protocol correctness, governance process, and operating policy live in the normative specification and policy stack.</p>
      <p class="final-copy">Contact: <a href="mailto:dev@dcorps.com">dev@dcorps.com</a> &nbsp; Source site: <a href="https://www.dcorps.com/">www.dcorps.com</a></p>
      <p class="hash-line">Short fingerprint: ${escapeHtml(shortHash(meta.sourceHash, 24))}</p>
      <p class="hash-line">Source SHA-256: ${escapeHtml(meta.sourceHash)}</p>
      <p class="hash-line">Verify PDF artifact with: dCorpsHub_Whitepaper.pdf.sha256</p>
    </div>
  </section>
</body>
</html>`;
}

function headerTemplate(meta) {
  return `<div style="box-sizing:border-box; width:100%; padding:0 0.54in; color:#526173; font-family:Arial, Helvetica, sans-serif; font-size:7.2pt;">
    <div style="border-bottom:1px solid #d6dee8; display:flex; justify-content:space-between; padding-bottom:5px;">
      <span style="font-weight:700; color:#07111f;">dCorps Hub Whitepaper</span>
      <span>${escapeHtml(meta.version)} &middot; ${escapeHtml(meta.status)} &middot; Updated ${escapeHtml(meta.lastUpdated)}</span>
    </div>
  </div>`;
}

function footerTemplate() {
  return `<div style="box-sizing:border-box; width:100%; padding:0 0.54in; color:#526173; font-family:Arial, Helvetica, sans-serif; font-size:7.2pt;">
    <div style="border-top:1px solid #d6dee8; display:flex; justify-content:space-between; padding-top:5px;">
      <span>&copy; 2026 dCorps. Informational only.</span>
      <span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
    </div>
  </div>`;
}

function which(command) {
  const result = spawnSync("which", [command], { encoding: "utf8" });
  if (result.status !== 0) {
    return null;
  }

  return result.stdout.trim() || null;
}

function resolveChrome() {
  const candidates = [
    process.env.CHROME_BIN,
    process.env.PUPPETEER_EXECUTABLE_PATH,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "google-chrome-stable",
    "google-chrome",
    "chromium",
    "chromium-browser",
    "chrome"
  ].filter(Boolean);

  for (const candidate of candidates) {
    if (candidate.includes("/") && existsSync(candidate)) {
      return candidate;
    }

    if (!candidate.includes("/")) {
      const resolved = which(candidate);
      if (resolved) {
        return resolved;
      }
    }
  }

  return null;
}

function resolvePdfUnite() {
  return which("pdfunite");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getFreePort() {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.on("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      const port = typeof address === "object" && address ? address.port : null;
      server.close(() => {
        if (!port) {
          reject(new Error("Could not allocate a local Chrome debugging port."));
          return;
        }
        resolve(port);
      });
    });
  });
}

async function waitForJson(url, timeoutMs = 10000, requestOptions = {}) {
  const start = Date.now();
  let lastError = null;

  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(url, requestOptions);
      if (response.ok) {
        return await response.json();
      }
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await sleep(120);
  }

  throw new Error(`Timed out waiting for ${url}: ${lastError?.message || "unknown error"}`);
}

function createCdpSession(webSocketUrl) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(webSocketUrl);
    let nextId = 1;
    const pending = new Map();

    ws.addEventListener("open", () => {
      resolve({
        send(method, params = {}) {
          const id = nextId;
          nextId += 1;
          ws.send(JSON.stringify({ id, method, params }));
          return new Promise((sendResolve, sendReject) => {
            pending.set(id, { resolve: sendResolve, reject: sendReject });
          });
        },
        close() {
          ws.close();
        }
      });
    });

    ws.addEventListener("message", (event) => {
      const payload = JSON.parse(event.data);
      if (!payload.id || !pending.has(payload.id)) {
        return;
      }
      const callbacks = pending.get(payload.id);
      pending.delete(payload.id);
      if (payload.error) {
        callbacks.reject(new Error(payload.error.message || "Chrome DevTools Protocol error"));
      } else {
        callbacks.resolve(payload.result);
      }
    });

    ws.addEventListener("error", () => {
      reject(new Error("Failed to connect to Chrome DevTools Protocol."));
    });
  });
}

async function printHtmlToPdf(html, targetPdf, options = {}) {
  const chrome = resolveChrome();
  if (!chrome) {
    throw new Error(
      "No headless Chrome/Chromium executable found. Install Chrome or set CHROME_BIN before running whitepaper:export."
    );
  }

  const tempRoot = mkdtempSync(path.join(tmpdir(), "dcorps-whitepaper-"));
  const htmlPath = path.join(tempRoot, "whitepaper.html");
  const profilePath = path.join(tempRoot, "chrome-profile");
  const port = await getFreePort();
  const stderr = [];
  let chromeProcess = null;

  try {
    writeFileSync(htmlPath, html);
    ensureParent(targetPdf);

    chromeProcess = spawn(
      chrome,
      [
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--disable-dev-shm-usage",
        "--disable-background-networking",
        "--disable-component-update",
        "--disable-default-apps",
        "--disable-extensions",
        "--disable-notifications",
        "--disable-sync",
        "--no-default-browser-check",
        "--no-first-run",
        `--remote-debugging-port=${port}`,
        `--user-data-dir=${profilePath}`,
        "about:blank"
      ],
      { stdio: ["ignore", "ignore", "pipe"] }
    );
    chromeProcess.stderr.on("data", (chunk) => {
      stderr.push(chunk.toString());
    });

    const tab = await waitForJson(
      `http://127.0.0.1:${port}/json/new?${encodeURIComponent(pathToFileURL(htmlPath).href)}`,
      10000,
      { method: "PUT" }
    );
    const cdp = await createCdpSession(tab.webSocketDebuggerUrl);

    try {
      await cdp.send("Page.enable");
      await cdp.send("Runtime.enable");
      await cdp.send("Page.navigate", { url: pathToFileURL(htmlPath).href });
      await sleep(900);
      const result = await cdp.send("Page.printToPDF", {
        landscape: false,
        displayHeaderFooter: Boolean(options.displayHeaderFooter),
        headerTemplate: options.headerTemplate || "<span></span>",
        footerTemplate: options.footerTemplate || "<span></span>",
        printBackground: true,
        preferCSSPageSize: true,
        marginTop: options.marginTop ?? 0,
        marginBottom: options.marginBottom ?? 0,
        marginLeft: options.marginLeft ?? 0,
        marginRight: options.marginRight ?? 0
      });
      writeFileSync(targetPdf, Buffer.from(result.data, "base64"));
    } finally {
      cdp.close();
    }

    if (!existsSync(targetPdf) || statSync(targetPdf).size < 1024) {
      throw new Error(`Chrome did not produce a valid PDF at ${targetPdf}.`);
    }
  } finally {
    if (chromeProcess && !chromeProcess.killed) {
      chromeProcess.kill("SIGTERM");
      await sleep(300);
      if (!chromeProcess.killed) {
        chromeProcess.kill("SIGKILL");
      }
    }
    rmSync(tempRoot, { recursive: true, force: true });
  }
}

function mergePdfs(inputs, targetPdf) {
  const pdfUnite = resolvePdfUnite();
  if (!pdfUnite) {
    throw new Error("pdfunite is required to merge the cover and body PDFs. Install Poppler or make pdfunite available on PATH.");
  }

  const result = spawnSync(pdfUnite, [...inputs, targetPdf], { stdio: "inherit" });
  if (result.status !== 0) {
    throw new Error(`pdfunite failed with exit code ${result.status}.`);
  }
}

async function renderPdf(markdown, targetPdf, sourceHash, lastUpdated) {
  const logoDataUri = fileDataUri(brandLogo, "image/png");
  const meta = extractDocumentMeta(markdown, sourceHash, lastUpdated);
  const bodyMarkdown = stripOpeningMatter(markdown);
  const headings = collectHeadings(bodyMarkdown);
  const tempRoot = mkdtempSync(path.join(tmpdir(), "dcorps-whitepaper-build-"));
  const coverPdf = path.join(tempRoot, "cover.pdf");
  const draftBodyPdf = path.join(tempRoot, "body-draft.pdf");
  const bodyPdf = path.join(tempRoot, "body.pdf");
  const bodyPrintOptions = {
    displayHeaderFooter: true,
    headerTemplate: headerTemplate(meta),
    footerTemplate: footerTemplate(),
    marginTop: 0.42,
    marginBottom: 0.42,
    marginLeft: 0,
    marginRight: 0
  };

  try {
    await printHtmlToPdf(buildCoverHtml(meta, logoDataUri), coverPdf, {
      displayHeaderFooter: false
    });

    await printHtmlToPdf(buildBodyHtml(markdown, meta, logoDataUri), draftBodyPdf, bodyPrintOptions);
    const tocPageNumbers = resolveTocPageNumbers(draftBodyPdf, headings);
    await printHtmlToPdf(buildBodyHtml(markdown, meta, logoDataUri, { tocPageNumbers }), bodyPdf, bodyPrintOptions);
    mergePdfs([coverPdf, bodyPdf], targetPdf);
  } finally {
    rmSync(tempRoot, { recursive: true, force: true });
  }
}

function updateDatedHtml(target, lastUpdated) {
  if (!targetIsAvailable(target) || !existsSync(target)) {
    actions.push(`skipped missing dated HTML: ${target}`);
    return;
  }

  const original = readText(target);
  const updated = original.replace(
    /(Published:\s*2025-12-21\s*.\s*Last updated:\s*)[0-9]{4}-[0-9]{2}-[0-9]{2}(\.)/g,
    `$1${lastUpdated}$2`
  );

  if (updated !== original) {
    writeText(target, updated);
  }
}

function assertDatedHtml(target, lastUpdated) {
  if (!targetIsAvailable(target) || !existsSync(target)) {
    actions.push(`skipped missing dated HTML: ${target}`);
    return;
  }

  const contents = readText(target);
  if (!contents.includes(`Last updated: ${lastUpdated}.`)) {
    failures.push(`dated HTML does not match WHITEPAPER_LONG.md last updated date: ${target}`);
  }
}

async function writeArtifacts() {
  const condensedMarkdown = readText(condensedSource);
  const longMarkdown = readText(longSource);
  const longSourceHash = sha256(longMarkdown);
  const lastUpdated = extractLastUpdated(longMarkdown);

  for (const target of markdownMirrors) {
    if (targetIsAvailable(target)) {
      writeText(target, condensedMarkdown);
    }
  }

  await renderPdf(longMarkdown, canonicalPdf, longSourceHash, lastUpdated);
  actions.push(`rendered ${path.relative(repoRoot, canonicalPdf)}`);

  const pdfHash = sha256(readBuffer(canonicalPdf));
  const sourceChecksum = sourceHashContents(longSourceHash);
  const pdfChecksum = pdfHashContents(pdfHash);
  const publicPdfChecksum = publicPdfHashContents(pdfHash);
  writeText(sourceHashFile, sourceChecksum);
  writeText(pdfHashFile, pdfChecksum);

  for (const target of sourceHashMirrors) {
    if (targetIsAvailable(target)) {
      writeText(target, sourceChecksum);
    }
  }

  for (const target of pdfHashMirrors) {
    if (targetIsAvailable(target)) {
      writeText(target, publicPdfChecksum);
    }
  }

  for (const target of pdfMirrors) {
    if (targetIsAvailable(target)) {
      copyFile(canonicalPdf, target);
    }
  }

  for (const target of datedHtmlMirrors) {
    updateDatedHtml(target, lastUpdated);
  }
}

function checkArtifacts() {
  const condensedMarkdown = readText(condensedSource);
  const longMarkdown = readText(longSource);
  const longSourceHash = sha256(longMarkdown);
  const lastUpdated = extractLastUpdated(longMarkdown);

  for (const target of markdownMirrors) {
    compareText(target, condensedMarkdown, "whitepaper Markdown mirror");
  }

  compareHashFile(sourceHashFile, longSourceHash, "whitepaper source hash");

  for (const target of sourceHashMirrors) {
    if (!targetIsAvailable(target)) {
      actions.push(`skipped missing source hash mirror root: ${target}`);
      continue;
    }

    compareText(target, sourceHashContents(longSourceHash), "whitepaper source hash mirror");
  }

  if (!existsSync(canonicalPdf)) {
    failures.push(`canonical whitepaper PDF is missing: ${canonicalPdf}`);
  } else {
    const pdfHash = sha256(readBuffer(canonicalPdf));
    compareHashFile(pdfHashFile, pdfHash, "whitepaper PDF hash");

    for (const target of pdfHashMirrors) {
      if (!targetIsAvailable(target)) {
        actions.push(`skipped missing PDF hash mirror root: ${target}`);
        continue;
      }

      compareText(target, publicPdfHashContents(pdfHash), "whitepaper PDF hash mirror");
    }

    for (const target of pdfMirrors) {
      if (!targetIsAvailable(target)) {
        actions.push(`skipped missing PDF mirror root: ${target}`);
        continue;
      }

      if (!existsSync(target)) {
        failures.push(`whitepaper PDF mirror is missing: ${target}`);
        continue;
      }

      const mirrorHash = sha256(readBuffer(target));
      if (mirrorHash !== pdfHash) {
        failures.push(`whitepaper PDF mirror differs from canonical PDF: ${target}`);
      }
    }
  }

  for (const target of datedHtmlMirrors) {
    assertDatedHtml(target, lastUpdated);
  }
}

if (checkOnly) {
  checkArtifacts();
} else {
  await writeArtifacts();
}

if (actions.length) {
  for (const action of actions) {
    console.log(`[whitepaper] ${action}`);
  }
}

if (failures.length) {
  for (const failure of failures) {
    console.error(`[whitepaper] ${failure}`);
  }
  process.exit(1);
}

console.log(checkOnly ? "[whitepaper] artifact check passed" : "[whitepaper] export complete");
