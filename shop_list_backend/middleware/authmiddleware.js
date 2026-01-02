const jwt = require("jsonwebtoken");
const { getCache } = require("../cache");

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Authorization missing" });
  }

  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return res.status(401).json({ message: "Invalid auth format" });
  }

  const token = parts[1];

  const exists = getCache(`jwt:${token}`);
  if (!exists) {
    return res.status(401).json({ message: "Token expired or logged out" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
}

module.exports = authMiddleware;
