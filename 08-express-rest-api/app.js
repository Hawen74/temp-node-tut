// app.js – Express application (exported separately so tests can import it
//          without starting the server)

const express = require('express');
const booksRouter = require('./routes/books');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Books REST API',
    endpoints: {
      list: 'GET    /api/books',
      get: 'GET    /api/books/:id',
      create: 'POST   /api/books',
      replace: 'PUT    /api/books/:id',
      patch: 'PATCH  /api/books/:id',
      delete: 'DELETE /api/books/:id',
    },
  });
});

app.use('/api/books', booksRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: `Cannot ${req.method} ${req.path}` });
});

module.exports = app;
