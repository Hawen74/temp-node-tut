// routes/products.js – product routes with express.Router

const { Router } = require('express');

const router = Router();

const products = [
  { id: 1, name: 'Node.js in Action', category: 'books', price: 39.99 },
  { id: 2, name: 'Express Cookbook', category: 'books', price: 29.99 },
  { id: 3, name: 'Mechanical Keyboard', category: 'hardware', price: 149.0 },
  { id: 4, name: 'USB-C Hub', category: 'hardware', price: 49.99 },
];

// GET /products  →  list all products
// Supports filtering: ?category=books
// Supports sorting:   ?sort=price  or  ?sort=name
router.get('/', (req, res) => {
  const { category, sort } = req.query;

  let result = [...products];

  if (category) {
    result = result.filter((p) => p.category === category);
  }

  if (sort === 'price') {
    result.sort((a, b) => a.price - b.price);
  } else if (sort === 'name') {
    result.sort((a, b) => a.name.localeCompare(b.name));
  }

  res.json(result);
});

// GET /products/:id  →  single product
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === id);
  if (!product) {
    return res.status(404).json({ error: `Product ${id} not found` });
  }
  res.json(product);
});

module.exports = router;
