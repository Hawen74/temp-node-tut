# 02 – Node.js Modules

Node.js uses the CommonJS module system. Every file is its own module, and you share code between files using `require` and `module.exports`.

## Topics

- `require()` and `module.exports` / `exports`
- Built-in (core) modules: `path`, `os`, `url`
- The module cache (modules are singletons)
- Installing and using an npm package

## Files

| File | Description |
|------|-------------|
| `math.js` | A simple utility module |
| `app.js` | Imports `math.js` and uses core modules |
| `package.json` | npm manifest (required for the `chalk` demo) |
| `colors.js` | Uses the third-party `chalk` package for colored output |

## Running the Examples

```bash
cd 02-node-modules
npm install          # installs chalk
node app.js
node colors.js
```
