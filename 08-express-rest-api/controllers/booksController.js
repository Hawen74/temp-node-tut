// controllers/booksController.js – request handlers for the books resource
//
// Each exported function corresponds to one route handler.
// Keeping business logic here (away from the router) makes testing easier.

const store = require('../data/store');

// GET /api/books
function list(req, res) {
  res.json(store.getAll());
}

// GET /api/books/:id
function get(req, res) {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'id must be a number' });
  }
  const book = store.getById(id);
  if (!book) {
    return res.status(404).json({ error: `Book ${id} not found` });
  }
  res.json(book);
}

// POST /api/books
function create(req, res) {
  const { title, author, year } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: '`title` and `author` are required' });
  }

  const book = store.create({ title, author, year: year ? Number(year) : undefined });
  res.status(201).json(book);
}

// PUT /api/books/:id  (full replacement)
function replace(req, res) {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'id must be a number' });
  }

  const { title, author, year } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: '`title` and `author` are required' });
  }

  const book = store.replace(id, { title, author, year: year ? Number(year) : undefined });
  if (!book) {
    return res.status(404).json({ error: `Book ${id} not found` });
  }
  res.json(book);
}

// PATCH /api/books/:id  (partial update)
function patch(req, res) {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'id must be a number' });
  }

  const updates = {};
  if (req.body.title !== undefined) updates.title = req.body.title;
  if (req.body.author !== undefined) updates.author = req.body.author;
  if (req.body.year !== undefined) updates.year = Number(req.body.year);

  const book = store.update(id, updates);
  if (!book) {
    return res.status(404).json({ error: `Book ${id} not found` });
  }
  res.json(book);
}

// DELETE /api/books/:id
function remove(req, res) {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'id must be a number' });
  }
  const deleted = store.remove(id);
  if (!deleted) {
    return res.status(404).json({ error: `Book ${id} not found` });
  }
  res.status(204).send();
}

module.exports = { list, get, create, replace, patch, remove };
