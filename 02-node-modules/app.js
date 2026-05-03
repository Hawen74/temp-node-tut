// app.js – importing local modules and using Node's built-in core modules

// ── Local module ─────────────────────────────────────────────────────────────
const math = require('./math');

console.log('=== math module ===');
console.log('3 + 4 =', math.add(3, 4));
console.log('10 - 6 =', math.subtract(10, 6));
console.log('5 * 7 =', math.multiply(5, 7));
console.log('20 / 4 =', math.divide(20, 4));

// ── path (core module) ───────────────────────────────────────────────────────
const path = require('path');

console.log('\n=== path module ===');
const filePath = '/home/user/projects/app/src/index.js';
console.log('basename:', path.basename(filePath));        // index.js
console.log('dirname:', path.dirname(filePath));           // …/src
console.log('extname:', path.extname(filePath));           // .js
console.log('join:', path.join('folder', 'sub', 'file.txt'));
console.log('resolve:', path.resolve('src', 'index.js')); // absolute path

// ── os (core module) ─────────────────────────────────────────────────────────
const os = require('os');

console.log('\n=== os module ===');
console.log('platform:', os.platform());
console.log('arch:', os.arch());
console.log('cpus (count):', os.cpus().length);
console.log('total memory (MB):', Math.round(os.totalmem() / 1024 / 1024));
console.log('free memory (MB):', Math.round(os.freemem() / 1024 / 1024));
console.log('home dir:', os.homedir());
console.log('hostname:', os.hostname());

// ── url (core module) ────────────────────────────────────────────────────────
const { URL } = require('url');

console.log('\n=== url module ===');
const myUrl = new URL('https://example.com:8080/path?foo=bar&baz=qux#section');
console.log('href:', myUrl.href);
console.log('protocol:', myUrl.protocol);
console.log('host:', myUrl.host);
console.log('pathname:', myUrl.pathname);
console.log('search:', myUrl.search);
console.log('searchParams.get("foo"):', myUrl.searchParams.get('foo'));
console.log('hash:', myUrl.hash);
