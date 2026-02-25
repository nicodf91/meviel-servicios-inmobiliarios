import { rmSync } from "node:fs";

// Avoid stale webpack/Next cache causing runtime module mismatches in dev.
rmSync(".next", { recursive: true, force: true });

