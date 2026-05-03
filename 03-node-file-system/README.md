# 03 – Node.js File System

The built-in `fs` module gives you full access to the filesystem.

## Topics

- Reading files: `fs.readFile` (async) and `fs.readFileSync` (sync)
- Writing files: `fs.writeFile` and `fs.appendFile`
- Deleting files: `fs.unlink`
- Watching for file changes: `fs.watch`
- Working with directories: `fs.mkdir`, `fs.readdir`
- Using the promise-based API: `fs/promises`

## Files

| File | Description |
|------|-------------|
| `read.js` | Read a file asynchronously and synchronously |
| `write.js` | Write and append to a file |
| `promises.js` | Same operations using `async/await` with `fs/promises` |
| `watch.js` | Watch a file for changes |
| `sample.txt` | Sample text file used by the examples |

## Running the Examples

```bash
# from the repo root
node 03-node-file-system/read.js
node 03-node-file-system/write.js
node 03-node-file-system/promises.js
node 03-node-file-system/watch.js   # edit sample.txt in another terminal to see events
```
