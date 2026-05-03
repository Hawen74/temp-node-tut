// middleware/authGuard.js – simple token-based authentication middleware
//
// Checks for the header: Authorization: Bearer <token>
// Uses a hard-coded token for demo purposes.
// In production you'd validate a JWT or look up a session.

const VALID_TOKEN = 'secret123';

function authGuard(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      error: 'Unauthorized – include header: Authorization: Bearer <token>',
    });
  }

  const token = authHeader.slice('Bearer '.length);

  if (token !== VALID_TOKEN) {
    return res.status(403).json({ error: 'Forbidden – invalid token' });
  }

  // Attach a fake user to the request object so downstream handlers can use it
  req.user = { id: 1, name: 'Demo User' };

  next();
}

module.exports = authGuard;
