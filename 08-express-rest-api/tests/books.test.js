// tests/books.test.js – automated tests for the Books REST API
//
// Uses Node's built-in test runner (node:test) and supertest for HTTP assertions.
// Run with: npm test  (inside 08-express-rest-api/)

const { describe, it, beforeEach } = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');

const app = require('../app');
const store = require('../data/store');

// Reset the store before each test so tests are isolated
beforeEach(() => {
  store.seed();
});

describe('GET /api/books', () => {
  it('returns 200 and an array of books', async () => {
    const res = await request(app).get('/api/books');
    assert.equal(res.status, 200);
    assert.ok(Array.isArray(res.body));
    assert.ok(res.body.length > 0);
  });

  it('each book has id, title, and author', async () => {
    const res = await request(app).get('/api/books');
    for (const book of res.body) {
      assert.ok(typeof book.id === 'number');
      assert.ok(typeof book.title === 'string');
      assert.ok(typeof book.author === 'string');
    }
  });
});

describe('GET /api/books/:id', () => {
  it('returns 200 and the correct book', async () => {
    const res = await request(app).get('/api/books/1');
    assert.equal(res.status, 200);
    assert.equal(res.body.id, 1);
    assert.equal(res.body.title, 'Node.js in Action');
  });

  it('returns 404 for a non-existent book', async () => {
    const res = await request(app).get('/api/books/9999');
    assert.equal(res.status, 404);
    assert.ok(res.body.error);
  });

  it('returns 400 for a non-numeric id', async () => {
    const res = await request(app).get('/api/books/abc');
    assert.equal(res.status, 400);
    assert.ok(res.body.error);
  });
});

describe('POST /api/books', () => {
  it('creates a new book and returns 201', async () => {
    const payload = { title: 'New Book', author: 'Test Author', year: 2024 };
    const res = await request(app).post('/api/books').send(payload);
    assert.equal(res.status, 201);
    assert.equal(res.body.title, payload.title);
    assert.equal(res.body.author, payload.author);
    assert.equal(res.body.year, payload.year);
    assert.ok(typeof res.body.id === 'number');
  });

  it('returns 400 when title is missing', async () => {
    const res = await request(app).post('/api/books').send({ author: 'Someone' });
    assert.equal(res.status, 400);
    assert.ok(res.body.error);
  });

  it('returns 400 when author is missing', async () => {
    const res = await request(app).post('/api/books').send({ title: 'Some Title' });
    assert.equal(res.status, 400);
    assert.ok(res.body.error);
  });

  it('increments the id with each creation', async () => {
    const first = await request(app).post('/api/books').send({ title: 'A', author: 'B' });
    const second = await request(app).post('/api/books').send({ title: 'C', author: 'D' });
    assert.equal(second.body.id, first.body.id + 1);
  });
});

describe('PUT /api/books/:id', () => {
  it('replaces a book and returns the updated document', async () => {
    const payload = { title: 'Replaced Title', author: 'Replaced Author', year: 2000 };
    const res = await request(app).put('/api/books/1').send(payload);
    assert.equal(res.status, 200);
    assert.equal(res.body.id, 1);
    assert.equal(res.body.title, payload.title);
    assert.equal(res.body.author, payload.author);
  });

  it('returns 404 for a non-existent book', async () => {
    const res = await request(app).put('/api/books/9999').send({ title: 'X', author: 'Y' });
    assert.equal(res.status, 404);
  });

  it('returns 400 when required fields are missing', async () => {
    const res = await request(app).put('/api/books/1').send({ year: 2020 });
    assert.equal(res.status, 400);
  });
});

describe('PATCH /api/books/:id', () => {
  it('partially updates a book', async () => {
    const res = await request(app).patch('/api/books/1').send({ year: 2099 });
    assert.equal(res.status, 200);
    assert.equal(res.body.year, 2099);
    // title and author should be unchanged
    assert.equal(res.body.title, 'Node.js in Action');
  });

  it('returns 404 for a non-existent book', async () => {
    const res = await request(app).patch('/api/books/9999').send({ year: 2024 });
    assert.equal(res.status, 404);
  });
});

describe('DELETE /api/books/:id', () => {
  it('deletes a book and returns 204', async () => {
    const res = await request(app).delete('/api/books/1');
    assert.equal(res.status, 204);
  });

  it('the deleted book is no longer retrievable', async () => {
    await request(app).delete('/api/books/1');
    const res = await request(app).get('/api/books/1');
    assert.equal(res.status, 404);
  });

  it('returns 404 when deleting a non-existent book', async () => {
    const res = await request(app).delete('/api/books/9999');
    assert.equal(res.status, 404);
  });
});
