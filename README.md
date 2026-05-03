# Node.js & Express.js Tutorials

A hands-on tutorial series covering Node.js fundamentals and Express.js web development, from "Hello World" all the way to building a full REST API.

## Prerequisites

- [Node.js](https://nodejs.org/) v14 or later (v20 recommended)
- A terminal / command prompt
- A text editor (VS Code recommended)

## Tutorial Modules

| # | Module | Topics |
|---|--------|--------|
| 01 | [Node Basics](./01-node-basics/) | Hello World, running scripts, global objects, `process`, `__dirname` |
| 02 | [Node Modules](./02-node-modules/) | CommonJS `require`/`exports`, built-in modules, npm packages |
| 03 | [Node File System](./03-node-file-system/) | `fs` – read, write, append, watch files |
| 04 | [Node HTTP Server](./04-node-http/) | Built-in `http` module, routing, query strings |
| 05 | [Express Basics](./05-express-basics/) | Installing Express, creating a server, responding to requests |
| 06 | [Express Routing](./06-express-routing/) | Route params, query strings, `express.Router`, route groups |
| 07 | [Express Middleware](./07-express-middleware/) | Built-in middleware, custom middleware, `express.json` |
| 08 | [Express REST API](./08-express-rest-api/) | Full CRUD REST API with an in-memory data store |

## How to Use This Repo

Each module lives in its own folder and is completely self-contained. Read the `README.md` inside each folder, then run the example files as described.

```bash
# Example – run the Hello World script
node 01-node-basics/hello.js

# Example – start the Express REST API server
cd 08-express-rest-api
npm install
node server.js
```

## Running Tests

The `08-express-rest-api` module includes automated tests:

```bash
cd 08-express-rest-api
npm install
npm test
```
