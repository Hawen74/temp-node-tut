// server.js – starts the HTTP server

const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Books REST API running at http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop.');
});
