// data/store.js – in-memory data store for books
//
// Using a plain JS object as a lightweight database.
// In a real app you'd replace this with a database (PostgreSQL, MongoDB, etc.).

let nextId = 1;

/** @type {Map<number, object>} */
const books = new Map();

/**
 * Seed the store with some initial data.
 * Called once at startup and also in tests to reset state.
 */
function seed() {
  books.clear();
  nextId = 1;
  _insert({ title: 'Node.js in Action', author: 'Alex Young', year: 2017 });
  _insert({ title: 'Express in Action', author: 'Evan Hahn', year: 2016 });
  _insert({ title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 });
}

function _insert(data) {
  const id = nextId++;
  const book = { id, ...data };
  books.set(id, book);
  return book;
}

// ── CRUD helpers ──────────────────────────────────────────────────────────────

function getAll() {
  return Array.from(books.values());
}

function getById(id) {
  return books.get(id) || null;
}

function create(data) {
  return _insert(data);
}

function replace(id, data) {
  if (!books.has(id)) return null;
  const book = { id, ...data };
  books.set(id, book);
  return book;
}

function update(id, data) {
  if (!books.has(id)) return null;
  const book = { ...books.get(id), ...data, id };
  books.set(id, book);
  return book;
}

function remove(id) {
  if (!books.has(id)) return false;
  books.delete(id);
  return true;
}

// Seed on startup
seed();

module.exports = { seed, getAll, getById, create, replace, update, remove };
