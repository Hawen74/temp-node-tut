// watch.js – watching a file for changes using fs.watch

const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, 'sample.txt');

console.log(`Watching ${targetPath} for changes...`);
console.log('(Edit sample.txt in another terminal, then Ctrl+C to stop)\n');

const watcher = fs.watch(targetPath, { encoding: 'utf8' }, (eventType, filename) => {
  console.log(`[${new Date().toISOString()}] Event: ${eventType} | File: ${filename}`);
});

// Stop watching after 30 seconds so the script doesn't run forever in CI.
setTimeout(() => {
  watcher.close();
  console.log('\nWatcher closed after 30 seconds.');
}, 30_000);
