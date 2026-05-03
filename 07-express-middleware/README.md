# 07 – Express Middleware

Middleware are functions that run between a request being received and a response being sent. They are the backbone of Express.

## Topics

- What middleware is: `(req, res, next) => {}`
- Application-level middleware with `app.use()`
- Built-in middleware: `express.json()`, `express.urlencoded()`, `express.static()`
- Writing custom middleware: logger, auth guard
- Error-handling middleware: `(err, req, res, next) => {}`
- Third-party middleware: `morgan` (HTTP request logger)

## Files

| File | Description |
|------|-------------|
| `package.json` | npm manifest |
| `server.js` | Demonstrates all middleware types |
| `middleware/logger.js` | Custom request logger middleware |
| `middleware/authGuard.js` | Simple token-based auth guard middleware |

## Running the Example

```bash
cd 07-express-middleware
npm install
node server.js

# Unprotected route
curl http://localhost:3000/

# Protected route – no token (401)
curl http://localhost:3000/protected

# Protected route – with token
curl -H "Authorization: Bearer secret123" http://localhost:3000/protected

# Send JSON body
curl -X POST http://localhost:3000/echo \
     -H "Content-Type: application/json" \
     -d '{"message":"hello"}'
```
