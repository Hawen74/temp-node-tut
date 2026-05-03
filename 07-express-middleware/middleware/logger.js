// middleware/logger.js – custom request logger middleware
//
// Every middleware has the signature: (req, res, next) => void
// Call next() to pass control to the next middleware or route handler.
// If you don't call next(), the request will hang (unless you send a response).

function logger(req, res, next) {
  const start = Date.now();

  // Tap into the 'finish' event so we can log the status code and duration
  // after the response is sent.
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(
      `[logger] ${new Date().toISOString()} | ${req.method} ${req.originalUrl} | ${res.statusCode} | ${duration}ms`
    );
  });

  // Pass control to the next middleware
  next();
}

module.exports = logger;
