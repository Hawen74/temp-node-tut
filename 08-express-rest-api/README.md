# 08 – Express REST API

Putting it all together: a fully functional CRUD REST API for a "books" resource, using an in-memory data store. This module is the capstone of the tutorial series.

## Topics

- REST conventions (resource naming, HTTP methods, status codes)
- Full CRUD: **C**reate, **R**ead, **U**pdate, **D**elete
- In-memory data store with a simple ID counter
- Input validation and meaningful error responses
- Organising code: routes → controllers → data store
- Automated tests with Node's built-in `node:test` runner and `supertest`

## Project Structure

```
08-express-rest-api/
├── package.json
├── server.js          ← entry point (app.listen)
├── app.js             ← express app (exported for testing)
├── routes/
│   └── books.js       ← book routes
├── controllers/
│   └── booksController.js
├── data/
│   └── store.js       ← in-memory store
└── tests/
    └── books.test.js  ← automated tests
```

## REST Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/books` | List all books |
| GET | `/api/books/:id` | Get a single book |
| POST | `/api/books` | Create a new book |
| PUT | `/api/books/:id` | Replace a book |
| PATCH | `/api/books/:id` | Partially update a book |
| DELETE | `/api/books/:id` | Delete a book |

## Running the Server

```bash
cd 08-express-rest-api
npm install
node server.js
# API available at http://localhost:3000
```

## Example Requests

```bash
# List books
curl http://localhost:3000/api/books

# Create a book
curl -X POST http://localhost:3000/api/books \
     -H "Content-Type: application/json" \
     -d '{"title":"Node.js in Action","author":"Alex Young","year":2017}'

# Get book by id
curl http://localhost:3000/api/books/1

# Update a field
curl -X PATCH http://localhost:3000/api/books/1 \
     -H "Content-Type: application/json" \
     -d '{"year":2018}'

# Delete
curl -X DELETE http://localhost:3000/api/books/1
```

## Running Tests

```bash
cd 08-express-rest-api
npm install
npm test
```
