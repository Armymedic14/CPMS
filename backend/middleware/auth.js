//use token to validate user access. Use for submitting, reviews, and the reports
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.cookies.token;
  //will stop unauthorized/non-logged in users
  if (!token) return res.status(401).json({ errorMessage: "Unauthorized" });

  const verified = jwt.verify(token, process.env.jwtSecret);
  req.author = verified.author;

  next();
}

module.exports = auth;