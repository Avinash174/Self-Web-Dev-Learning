const express = require("express");
const router = express.Router();

const db = require("../db");
const { getCache, setCache, deleteCache } = require("../cache");

/**
 * GET ALL CATEGORIES (CACHE ENABLED)
 */
router.get("/", (req, res) => {
  const cacheKey = "categories";

  const cachedData = getCache(cacheKey);
  if (cachedData) {
    return res.json({
      source: "cache",
      data: cachedData,
    });
  }

  db.query("SELECT * FROM categories", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    setCache(cacheKey, results); // store in cache

    res.json({
      source: "db",
      data: results,
    });
  });
});

/**
 * ADD CATEGORY
 */
router.post("/", (req, res) => {
  const { name } = req.body;

  db.query(
    "INSERT INTO categories (name) VALUES (?)",
    [name],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      // 🔴 DELETE CACHE AFTER DATA CHANGE
      deleteCache("categories");

      res.json({
        success: true,
        message: "Category added",
        id: result.insertId,
      });
    }
  );
});

/**
 * UPDATE CATEGORY
 */
router.put("/:id", (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  db.query(
    "UPDATE categories SET name=? WHERE id=?",
    [name, id],
    (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      // 🔴 DELETE CACHE
      deleteCache("categories");

      res.json({
        success: true,
        message: "Category updated",
      });
    }
  );
});

/**
 * DELETE CATEGORY
 */
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM categories WHERE id=?",
    [id],
    (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      // 🔴 DELETE CACHE
      deleteCache("categories");

      res.json({
        success: true,
        message: "Category deleted",
      });
    }
  );
});

module.exports = router;
