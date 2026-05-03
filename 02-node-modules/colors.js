// colors.js – using a third-party npm package (chalk)
// Run `npm install` first, then `node colors.js`

// chalk v5 is ESM-only, so we use a dynamic import() inside an async wrapper.
// Alternatively you can install chalk@4 to use require() directly.
(async () => {
  const { default: chalk } = await import('chalk');

  console.log(chalk.green('✔  Success – this text is green'));
  console.log(chalk.red('✖  Error   – this text is red'));
  console.log(chalk.yellow('⚠  Warning – this text is yellow'));
  console.log(chalk.blue.bold('ℹ  Info    – bold blue'));
  console.log(chalk.bgCyan.black(' Highlight '));

  // Composing styles
  console.log(
    chalk.white('Normal ') +
    chalk.green('green ') +
    chalk.red.underline('red underline')
  );
})();
