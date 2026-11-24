// One Letter: Coffee or Tea — entry for make.fun competition
// u-rusdyxbt-one-letter-coffee-or-tea-89877fa0
//
// Writes exactly one byte, "A" (coffee), to /output/entry.txt.
// No network, no model calls, fully deterministic.
//
// Safety: the choice is asserted to be a single ASCII letter before any
// I/O happens; the file is written atomically (temp file + rename) and
// then read back and verified byte-for-byte, so a partial or wrong write
// can never silently pass as a valid entry.

import {
  mkdirSync,
  readFileSync,
  renameSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";

const OUTPUT_PATH = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
const LETTER = "A"; // A = coffee, B = tea

// Fail fast: the entry is only valid as exactly one ASCII letter.
if (!/^[AB]$/.test(LETTER)) {
  throw new Error(`LETTER must be "A" or "B", got ${JSON.stringify(LETTER)}`);
}

const dir = dirname(OUTPUT_PATH);
mkdirSync(dir, { recursive: true });

// Atomic write: a crash mid-write leaves at most a stray temp file,
// never a half-written entry.txt.
const tmpPath = join(dir, `.entry-${process.pid}.tmp`);
try {
  writeFileSync(tmpPath, LETTER, "utf8");
  renameSync(tmpPath, OUTPUT_PATH);
} catch (error) {
  try {
    unlinkSync(tmpPath);
  } catch {
    // Temp file may not exist; the original error is what matters.
  }
  throw error;
}

// Verify what actually landed on disk: exactly one byte, "A".
const written = readFileSync(OUTPUT_PATH);
if (written.length !== 1 || written[0] !== LETTER.charCodeAt(0)) {
  throw new Error(
    `entry.txt must be exactly 1 byte "A", got ${written.length} bytes`,
  );
}
