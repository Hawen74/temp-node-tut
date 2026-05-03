// read.js – reading files with the `fs` module

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'sample.txt');

// ── 1. Asynchronous read (callback-based) ────────────────────────────────────
// Non-blocking: the callback runs once the file is fully read.
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err.message);
    return;
  }
  console.log('=== Async readFile ===');
  console.log(data);
});

// ── 2. Synchronous read ──────────────────────────────────────────────────────
// Blocking: execution pauses until the file is read.
// Avoid in performance-critical code paths.
try {
  const data = fs.readFileSync(filePath, 'utf8');
  console.log('=== Sync readFileSync ===');
  console.log(data);
} catch (err) {
  console.error('Error reading file:', err.message);
}

// ── 3. Read as a Buffer (no encoding specified) ──────────────────────────────
fs.readFile(filePath, (err, buffer) => {
  if (err) {
    console.error('Error reading file:', err.message);
    return;
  }
  console.log('=== Buffer read ===');
  console.log('Type:', typeof buffer, '– Is Buffer:', Buffer.isBuffer(buffer));
  console.log('First 20 bytes:', buffer.slice(0, 20));
  console.log('As string:', buffer.toString('utf8', 0, 20), '…');
});
