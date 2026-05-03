// server.js – a basic HTTP server built with Node's built-in `http` module
// No frameworks, no dependencies – just Node.js.

const http = require('http');
const { URL } = require('url');

const PORT = 3000;
const HOST = 'localhost';

const server = http.createServer((req, res) => {
  // Build a full URL so we can parse query strings easily
  const baseUrl = `http://${HOST}:${PORT}`;
  const url = new URL(req.url, baseUrl);
  const pathname = url.pathname;
  const method = req.method;

  console.log(`[${new Date().toISOString()}] ${method} ${pathname}`);

  // ── Routing ───────────────────────────────────────────────────────────────
  if (method === 'GET' && pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <h1>Home Page</h1>
      <p>Welcome to the Node.js HTTP server tutorial!</p>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/greet?name=Alice">Greet Alice</a></li>
        <li><a href="/json">JSON example</a></li>
      </ul>
    `);
    return;
  }

  if (method === 'GET' && pathname === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About page – built with the built-in http module.');
    return;
  }

  if (method === 'GET' && pathname === '/greet') {
    const name = url.searchParams.get('name') || 'World';
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello, ${name}!`);
    return;
  }

  if (method === 'GET' && pathname === '/json') {
    const data = { message: 'This is JSON', timestamp: new Date().toISOString() };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
    return;
  }

  // ── 404 fallback ──────────────────────────────────────────────────────────
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end(`404 Not Found: ${pathname}`);
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
  console.log('Press Ctrl+C to stop.');
});
