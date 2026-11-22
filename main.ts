// make-the-ai-judge-feel-curious-20261122-2311
//
// A single short text, written to leave the AI judge curious.
// The program writes it to entry.txt inside the output directory
// make.fun provides (MAKEFUN_OUTPUT_DIR), or /output by default.
// No network, no input files: the text below is the whole entry.
//
// The text is 222 Unicode code points, inside the gate of 1-280.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "In the museum's smallest room stands a door with no handle, " +
  "no hinges, and no wall around it. It has stood there for ninety " +
  "years. Once a year, someone leaves a key beside it. Who do you " +
  "think is waiting on the other side?";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
