# 04 – Node.js HTTP Module

Before Express, Node.js ships with a built-in `http` module that lets you create a web server with zero dependencies.

## Topics

- Creating an HTTP server with `http.createServer`
- Reading the request URL and method
- Sending responses with status codes and headers
- Basic routing without a framework
- Parsing query string parameters with the `url` module

## Files

| File | Description |
|------|-------------|
| `server.js` | A basic HTTP server with manual routing |

## Running the Example

```bash
node 04-node-http/server.js
# Server listens on http://localhost:3000

# Try these URLs in your browser or with curl:
# http://localhost:3000/
# http://localhost:3000/about
# http://localhost:3000/greet?name=Alice
# http://localhost:3000/anything-else  → 404
```
