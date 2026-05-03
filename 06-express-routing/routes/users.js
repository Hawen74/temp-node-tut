// routes/users.js – user routes with express.Router

const { Router } = require('express');

const router = Router();

// Fake in-memory users (for demo purposes)
const users = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'user' },
  { id: 3, name: 'Carol', role: 'user' },
];

// GET /users  →  list all users
// Optional query: /users?role=admin
router.get('/', (req, res) => {
  const { role } = req.query;
  const result = role ? users.filter((u) => u.role === role) : users;
  res.json(result);
});

// GET /users/:id  →  get a single user by id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = users.find((u) => u.id === id);
  if (!user) {
    return res.status(404).json({ error: `User ${id} not found` });
  }
  res.json(user);
});

// POST /users  →  create a new user (no body parsing in this module – see 07)
router.post('/', (req, res) => {
  res.status(201).json({ message: 'User would be created here (see module 07 for body parsing)' });
});

// Demonstrate chaining multiple HTTP methods on one path with .route()
router
  .route('/:id/role')
  .get((req, res) => {
    const id = parseInt(req.params.id, 10);
    const user = users.find((u) => u.id === id);
    if (!user) return res.status(404).json({ error: 'Not found' });
    res.json({ id: user.id, role: user.role });
  })
  .put((req, res) => {
    res.json({ message: `Role for user ${req.params.id} would be updated here` });
  });

module.exports = router;
