const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("../db");
const { setCache, deleteCache } = require("../cache");

const router = express.Router();

/**
 * REGISTER
 */
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  db.query(
    "SELECT id FROM users WHERE email = ?",
    [email],
    async (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      if (result.length > 0) {
        return res.status(409).json({ message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      db.query(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, hashedPassword],
        (err, result) => {
          if (err) return res.status(500).json({ error: err.message });

          res.status(201).json({
            success: true,
            message: "User registered successfully",
            userId: result.insertId,
          });
        }
      );
    }
  );
});

/**
 * LOGIN
 */
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email & password required" });
  }

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      if (result.length === 0) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const user = result[0];
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      setCache(`jwt:${token}`, true, 60 * 60);

      res.json({
        success: true,
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    }
  );
});

module.exports = router;
