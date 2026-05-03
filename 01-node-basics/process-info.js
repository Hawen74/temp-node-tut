// process-info.js – the `process` global object

// Node version
console.log('Node version:', process.version);

// Platform ('linux', 'darwin', 'win32', …)
console.log('Platform:', process.platform);

// Working directory
console.log('CWD:', process.cwd());

// Environment variables
// Set one before running: MY_VAR=hello node 01-node-basics/process-info.js
console.log('MY_VAR env var:', process.env.MY_VAR || '(not set)');

// Command-line arguments
// node 01-node-basics/process-info.js --name=World foo bar
// process.argv[0] → path to node binary
// process.argv[1] → path to this script
// process.argv[2+] → your arguments
console.log('\nprocess.argv:');
process.argv.forEach((arg, index) => {
  console.log(`  [${index}] ${arg}`);
});

// Parse a simple --key=value flag
const nameArg = process.argv.find((a) => a.startsWith('--name='));
const name = nameArg ? nameArg.split('=')[1] : 'World';
console.log(`\nHello, ${name}!`);

// Exit code (0 = success)
process.on('exit', (code) => {
  console.log(`\nProcess exiting with code: ${code}`);
});
