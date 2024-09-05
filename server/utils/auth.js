const jwt = require('jsonwebtoken');

const auth = (req) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      return { user: decoded };
    } catch (err) {
      throw new Error('Invalid token');
    }
  }
  throw new Error('No token provided');
};

module.exports = auth;
