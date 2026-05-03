// server.js – demonstrating different types of Express middleware

const express = require('express');
const morgan = require('morgan');

const logger = require('./middleware/logger');
const authGuard = require('./middleware/authGuard');

const app = express();
const PORT = 3000;

// ── 1. Built-in middleware ────────────────────────────────────────────────────
// Parse incoming JSON request bodies and make them available on req.body
app.use(express.json());

// Parse URL-encoded form data (HTML form submissions)
app.use(express.urlencoded({ extended: false }));

// ── 2. Third-party middleware (morgan – HTTP request logger) ─────────────────
// 'dev' format: :method :url :status :response-time ms - :res[content-length]
app.use(morgan('dev'));

// ── 3. Custom application-level middleware ────────────────────────────────────
app.use(logger);

// ── Routes ────────────────────────────────────────────────────────────────────

// Unprotected route
app.get('/', (req, res) => {
  res.json({ message: 'Public route – no auth required' });
});

// Route that echoes back the JSON body (demonstrates express.json())
app.post('/echo', (req, res) => {
  res.json({ received: req.body });
});

// Protected route – authGuard middleware applied only to this route
app.get('/protected', authGuard, (req, res) => {
  res.json({
    message: 'You are authenticated!',
    user: req.user,
  });
});

// Route that deliberately throws an error to demonstrate error handling
app.get('/error', (req, res, next) => {
  next(new Error('Something went wrong!'));
});

// ── 4. Error-handling middleware ──────────────────────────────────────────────
// Must have FOUR parameters: (err, req, res, next)
// Express recognises this signature and calls it only when next(err) is used.
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error('[error middleware]', err.message);
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`Middleware demo at http://localhost:${PORT}`);
  console.log('Try:');
  console.log(`  curl http://localhost:${PORT}/`);
  console.log(`  curl http://localhost:${PORT}/protected`);
  console.log(`  curl -H "Authorization: Bearer secret123" http://localhost:${PORT}/protected`);
  console.log(`  curl -X POST http://localhost:${PORT}/echo -H "Content-Type: application/json" -d '{"msg":"hi"}'`);
});
