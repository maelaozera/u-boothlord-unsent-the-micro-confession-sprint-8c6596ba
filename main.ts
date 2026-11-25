// Unsent: The Micro-Confession Sprint
// u-boothlord-unsent-the-micro-confession-sprint-8c6596ba
//
// A single deterministic micro-confession, written exactly as it was typed:
// a To: line naming who it was meant for, and the unsent line itself.
// No randomness, no input, no network: every run writes the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "To: my best friend\n" +
  "i didn't come to your wedding because i couldn't watch you marry him, " +
  "not after you texted me the night before: \"are you sure i should do this?\"";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
