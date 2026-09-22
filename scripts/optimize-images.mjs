import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const DIR = "src/assets";

const jobs = [
  { file: "hero-padel-sessions-v1.webp", maxWidth: 1440, quality: 74 },
  { file: "bonus-padel-warmups-mockup-v2.webp", maxWidth: 720, quality: 78 },
  { file: "bonus-padel-progressions-mockup-v2.webp", maxWidth: 720, quality: 78 },
  { file: "bonus-padel-planner-mockup-v2.webp", maxWidth: 720, quality: 78 },
  { file: "bonus-padel-adaptations-mockup-v2.webp", maxWidth: 720, quality: 78 },
  { file: "padel-session-024-control-v1.webp", maxWidth: 800, quality: 72 },
  { file: "padel-session-087-wall-defense-v1.webp", maxWidth: 800, quality: 72 },
  { file: "padel-session-146-net-transition-v1.webp", maxWidth: 800, quality: 72 },
  { file: "padel-session-219-bandeja-v1.webp", maxWidth: 800, quality: 72 },
  { file: "padel-session-271-point-building-v1.webp", maxWidth: 800, quality: 72 },
  { file: "padel-session-308-agility-v1.webp", maxWidth: 800, quality: 72 },
];

let totalBefore = 0;
let totalAfter = 0;

for (const job of jobs) {
  const filePath = path.join(DIR, job.file);
  const inputBuffer = await fs.readFile(filePath);
  const before = inputBuffer.length;
  const img = sharp(inputBuffer);
  const meta = await img.metadata();

  const pipeline =
    meta.width && meta.width > job.maxWidth
      ? img.resize({ width: job.maxWidth })
      : img;

  const buffer = await pipeline
    .webp({ quality: job.quality, effort: 6 })
    .toBuffer();

  await fs.writeFile(filePath, buffer);
  const after = buffer.length;
  totalBefore += before;
  totalAfter += after;
  console.log(
    `${job.file}: ${(before / 1024).toFixed(1)}KB -> ${(after / 1024).toFixed(1)}KB (${(100 - (after / before) * 100).toFixed(0)}% smaller)`
  );
}

console.log(
  `\nTOTAL: ${(totalBefore / 1024).toFixed(1)}KB -> ${(totalAfter / 1024).toFixed(1)}KB (${(100 - (totalAfter / totalBefore) * 100).toFixed(0)}% smaller)`
);
