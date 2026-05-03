// server.js – a basic Express server

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// ── Middleware ────────────────────────────────────────────────────────────────
// Serve static files from the `public` directory
// Visit http://localhost:3000/ to get public/index.html
app.use(express.static(path.join(__dirname, 'public')));

// ── Routes ────────────────────────────────────────────────────────────────────

// GET /hello  →  plain text response
app.get('/hello', (req, res) => {
  res.send('Hello from Express!');
});

// GET /json   →  JSON response
app.get('/json', (req, res) => {
  res.json({
    message: 'This is JSON',
    framework: 'Express',
    timestamp: new Date().toISOString(),
  });
});

// GET /status  →  custom status code
app.get('/status', (req, res) => {
  res.status(202).json({ status: 'Accepted', code: 202 });
});

// GET /greet?name=Alice  →  query string parameter
app.get('/greet', (req, res) => {
  const name = req.query.name || 'World';
  res.send(`Hello, ${name}!`);
});

// ── 404 catch-all ─────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: `Cannot ${req.method} ${req.path}` });
});

// ── Start the server ──────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop.');
});
