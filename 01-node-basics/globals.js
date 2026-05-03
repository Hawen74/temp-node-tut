// globals.js – built-in global variables available in every Node.js module

// __filename  → absolute path to the current file
console.log('__filename:', __filename);

// __dirname   → absolute path to the directory containing the current file
console.log('__dirname:', __dirname);

// global      → the global object (like `window` in a browser)
global.greeting = 'Hello from global';
console.log('global.greeting:', global.greeting);

// console     → familiar logging methods
console.log('log');
console.warn('warn');
console.error('error');
console.time('timer');
console.timeEnd('timer');

// setTimeout / setInterval (available globally, just like in browsers)
setTimeout(() => console.log('setTimeout fired after 100ms'), 100);

const id = setInterval(() => {
  console.log('setInterval tick');
  clearInterval(id); // stop after one tick
}, 200);
