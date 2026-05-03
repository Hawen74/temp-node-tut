// promises.js – using the promise-based fs API with async/await

const fs = require('fs/promises');
const path = require('path');

const samplePath = path.join(__dirname, 'sample.txt');
const outputPath = path.join(__dirname, 'async-output.txt');
const dirPath = path.join(__dirname, 'temp-dir');

async function main() {
  // ── 1. Read a file ──────────────────────────────────────────────────────
  console.log('=== 1. readFile ===');
  const content = await fs.readFile(samplePath, 'utf8');
  console.log(content);

  // ── 2. Write a file ─────────────────────────────────────────────────────
  console.log('=== 2. writeFile ===');
  await fs.writeFile(outputPath, 'Written with async/await!\n', 'utf8');
  console.log('File written:', outputPath);

  // ── 3. Append ───────────────────────────────────────────────────────────
  console.log('=== 3. appendFile ===');
  await fs.appendFile(outputPath, 'Appended line.\n', 'utf8');
  console.log('Content appended.');

  // ── 4. Read back ────────────────────────────────────────────────────────
  const written = await fs.readFile(outputPath, 'utf8');
  console.log('File contents:\n', written);

  // ── 5. Create a directory ───────────────────────────────────────────────
  console.log('=== 4. mkdir / readdir ===');
  await fs.mkdir(dirPath, { recursive: true });
  await fs.writeFile(path.join(dirPath, 'a.txt'), 'file a');
  await fs.writeFile(path.join(dirPath, 'b.txt'), 'file b');
  const entries = await fs.readdir(dirPath);
  console.log('Directory entries:', entries);

  // ── 6. Get file stats ───────────────────────────────────────────────────
  console.log('=== 5. stat ===');
  const stats = await fs.stat(samplePath);
  console.log('size (bytes):', stats.size);
  console.log('isFile:', stats.isFile());
  console.log('modified:', stats.mtime);

  // ── 7. Clean up ─────────────────────────────────────────────────────────
  await fs.unlink(outputPath);
  await fs.rm(dirPath, { recursive: true });
  console.log('\nCleanup complete.');
}

main().catch((err) => {
  console.error('Unexpected error:', err.message);
  process.exit(1);
});
