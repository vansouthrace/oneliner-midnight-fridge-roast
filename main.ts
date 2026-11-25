// Midnight Fridge Roast — make.fun one-liner entry.
// Writes a single roast line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// The roast targets the fridge's petty midnight rule: the fridge acts like the
// one paying the electric bill, so it gets to decide when the kitchen closes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "My fridge locks at midnight like it's the one paying the electric bill.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate check, kept in the program so a bad line can never ship silently:
// the entry must be 1-200 characters of real text.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-200 gate`);
}
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
