// server.js – entry point; mounts the routers defined in routes/

const express = require('express');

const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

const app = express();
const PORT = 3000;

// Mount routers at their respective base paths
app.use('/users', usersRouter);
app.use('/products', productsRouter);

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Express Routing Tutorial',
    endpoints: {
      users: [
        'GET  /users',
        'GET  /users/:id',
        'POST /users',
      ],
      products: [
        'GET  /products',
        'GET  /products/:id',
        'GET  /products?category=&sort=',
      ],
    },
  });
});

app.use((req, res) => {
  res.status(404).json({ error: `Cannot ${req.method} ${req.path}` });
});

app.listen(PORT, () => {
  console.log(`Routing demo at http://localhost:${PORT}`);
});
