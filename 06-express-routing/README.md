# 06 – Express Routing

Express has a powerful routing system. This module covers named parameters, query strings, and organising routes into separate files with `express.Router`.

## Topics

- Route parameters: `/users/:id`
- Optional parameters and wildcards
- Query string parameters: `/search?q=node`
- Chaining multiple HTTP methods with `app.route()`
- `express.Router` – splitting routes into modules
- Route-level middleware

## Files

| File | Description |
|------|-------------|
| `package.json` | npm manifest |
| `server.js` | Entry point that mounts the routers |
| `routes/users.js` | User routes using `express.Router` |
| `routes/products.js` | Product routes using `express.Router` |

## Running the Example

```bash
cd 06-express-routing
npm install
node server.js

# Example requests (use curl or your browser):
# GET  http://localhost:3000/users
# GET  http://localhost:3000/users/42
# GET  http://localhost:3000/products?category=books&sort=price
```
