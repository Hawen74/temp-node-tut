# 01 – Node.js Basics

Node.js lets you run JavaScript outside of a browser. This module covers the very first steps.

## Topics

- Running a JavaScript file with `node`
- The `console` object
- Global variables: `__filename`, `__dirname`, `process`
- The event loop and non-blocking I/O (brief intro)

## Files

| File | Description |
|------|-------------|
| `hello.js` | Classic "Hello World" |
| `globals.js` | Exploring built-in globals |
| `process-info.js` | Reading env vars and CLI arguments via `process` |

## Running the Examples

```bash
# from the repo root
node 01-node-basics/hello.js
node 01-node-basics/globals.js
node 01-node-basics/process-info.js --name=World
```
