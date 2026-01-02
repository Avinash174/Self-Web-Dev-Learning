const express = require("express");
const router = express.Router();

const db = require("../db");
const authMiddleware = require("../middleware/authMiddleware");
const { getCache, setCache, deleteCache } = require("../cache");

/**
 * GET PRODUCTS
 */
router.get("/", authMiddleware, (req, res) => {
  const cacheKey = "products";

  const cached = getCache(cacheKey);
  if (cached) {
    return res.json({ source: "cache", data: cached });
  }

  db.query("SELECT * FROM products", (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    setCache(cacheKey, result, 60);
    res.json({ source: "db", data: result });
  });
});

/**
 * ADD PRODUCT
 */
router.post("/", authMiddleware, (req, res) => {
  const { name, price, category_id } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: "Name and price required" });
  }

  db.query(
    "INSERT INTO products (name, price, category_id) VALUES (?, ?, ?)",
    [name, price, category_id || null],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      deleteCache("products");

      res.status(201).json({
        success: true,
        productId: result.insertId,
      });
    }
  );
});

module.exports = router;
