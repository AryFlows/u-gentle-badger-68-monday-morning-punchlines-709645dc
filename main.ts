import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One joke about Monday mornings, at most 200 characters.
const ENTRY =
  "My alarm went off at 6 this Monday. I hit snooze so hard it filed for workers' comp.";

const text = ENTRY.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${text.length}`);
}
if (!text.trim()) {
  throw new Error("entry must not be only white space");
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`wrote ${text.length} chars to ${join(outDir, "entry.txt")}`);
