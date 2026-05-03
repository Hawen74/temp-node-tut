// write.js – writing and appending files with the `fs` module

const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, 'output.txt');

// ── 1. Write a file (creates or overwrites) ──────────────────────────────────
fs.writeFile(outputPath, 'Hello from Node.js!\n', 'utf8', (err) => {
  if (err) {
    console.error('writeFile error:', err.message);
    return;
  }
  console.log('File written:', outputPath);

  // ── 2. Append to the file ────────────────────────────────────────────────
  fs.appendFile(outputPath, 'Appended line 1\n', 'utf8', (err) => {
    if (err) {
      console.error('appendFile error:', err.message);
      return;
    }
    console.log('Content appended.');

    fs.appendFile(outputPath, 'Appended line 2\n', 'utf8', (err) => {
      if (err) {
        console.error('appendFile error:', err.message);
        return;
      }
      console.log('Content appended again.');

      // ── 3. Read back to verify ─────────────────────────────────────────
      const content = fs.readFileSync(outputPath, 'utf8');
      console.log('\n=== File contents ===');
      console.log(content);

      // ── 4. Delete the output file ──────────────────────────────────────
      fs.unlink(outputPath, (err) => {
        if (err) {
          console.error('unlink error:', err.message);
          return;
        }
        console.log('Output file deleted.');
      });
    });
  });
});
