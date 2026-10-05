const jwt = require("jsonwebtoken");

// Checks the token is present and valid. Attaches the decoded user info to req.user
// so every route after this middleware can know who's calling.
const protect = (req, res, next) => {
  const authHeader = req.headers.authorization; // expects: "Bearer <token>"

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, role, iat, exp }
    next(); // token is valid, let the request continue to the actual route
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

// Restricts a route to specific roles. Use AFTER protect, since it needs req.user to exist.
const restrictTo = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: "You don't have permission to do this" });
    }
    next();
  };
};

module.exports = { protect, restrictTo };
