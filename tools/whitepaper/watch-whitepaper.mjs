#!/usr/bin/env node

import { existsSync, watch } from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");

const watchedFiles = [
  path.join(repoRoot, "docs/whitepaper/WHITEPAPER.md"),
  path.join(repoRoot, "docs/whitepaper/WHITEPAPER_LONG.md")
];

let timer = null;
let running = false;
let pending = false;

function runExport(reason) {
  if (running) {
    pending = true;
    return;
  }

  running = true;
  pending = false;
  console.log(`[whitepaper] ${reason}; running npm run whitepaper:export`);

  const child = spawn("npm", ["run", "whitepaper:export"], {
    cwd: repoRoot,
    shell: false,
    stdio: "inherit"
  });

  child.on("exit", (code) => {
    running = false;
    if (code !== 0) {
      console.error(`[whitepaper] export failed with exit code ${code}`);
    }
    if (pending) {
      runExport("queued whitepaper change detected");
    }
  });
}

function scheduleExport(filePath) {
  clearTimeout(timer);
  timer = setTimeout(() => {
    runExport(`${path.relative(repoRoot, filePath)} changed`);
  }, 700);
}

for (const filePath of watchedFiles) {
  if (!existsSync(filePath)) {
    console.error(`[whitepaper] cannot watch missing file: ${filePath}`);
    process.exitCode = 1;
    continue;
  }

  watch(filePath, { persistent: true }, () => {
    scheduleExport(filePath);
  });
  console.log(`[whitepaper] watching ${path.relative(repoRoot, filePath)}`);
}

console.log("[whitepaper] auto-export watcher ready. Press Ctrl+C to stop.");
