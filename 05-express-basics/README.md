# 05 – Express Basics

[Express](https://expressjs.com/) is the most popular Node.js web framework. It wraps Node's `http` module and provides a clean, minimal API for building servers.

## Topics

- Installing Express with npm
- Creating an `express()` application
- `app.get()` / `app.post()` – handling HTTP methods
- `res.send()`, `res.json()`, `res.status()`
- `app.listen()` – starting the server
- Serving static files with `express.static`

## Files

| File | Description |
|------|-------------|
| `package.json` | npm manifest |
| `server.js` | Basic Express server with a few routes |
| `public/index.html` | Static HTML page served from `public/` |

## Running the Example

```bash
cd 05-express-basics
npm install
node server.js
# Visit http://localhost:3000
```
