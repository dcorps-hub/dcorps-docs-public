#!/usr/bin/env node

import { chmodSync, existsSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");
const hooksDir = path.join(repoRoot, ".githooks");
const hooks = ["pre-commit", "pre-push"];

for (const hook of hooks) {
  const hookPath = path.join(hooksDir, hook);
  if (!existsSync(hookPath)) {
    throw new Error(`Tracked git hook is missing: ${path.relative(repoRoot, hookPath)}`);
  }
  chmodSync(hookPath, 0o755);
}

const result = spawnSync("git", ["config", "core.hooksPath", ".githooks"], {
  cwd: repoRoot,
  encoding: "utf8"
});

if (result.status !== 0) {
  throw new Error(result.stderr || "Failed to configure core.hooksPath.");
}

console.log("[whitepaper] installed tracked git hooks from .githooks");
console.log("[whitepaper] pre-commit regenerates whitepaper PDF artifacts when canonical Markdown changes");
console.log("[whitepaper] pre-push runs the whitepaper artifact check");
