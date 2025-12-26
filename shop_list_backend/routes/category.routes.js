const express = require("express");
const router = express.Router();
const db = require("../db");


//  CREATE Category
router.post("/", (req, res) => {
  const { name, description } = req.body;

  const sql = "INSERT INTO categories (name, description) VALUES (?, ?)";
  db.query(sql, [name, description], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json({ message: "Category created", id: result.insertId });
  });
});


//  READ All Categories
router.get("/", (req, res) => {
  const sql = "SELECT * FROM categories";
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(result);
  });
});


//  UPDATE Category
router.put("/:id", (req, res) => {
  const { name, description } = req.body;
  const { id } = req.params;

  const sql =
    "UPDATE categories SET name = ?, description = ? WHERE id = ?";
  db.query(sql, [name, description, id], (err) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json({ message: "Category updated" });
  });
});


//  DELETE Category
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM products WHERE category_id = ?",
    [id],
    (err) => {
      if (err) return res.status(500).json(err);

      db.query(
        "DELETE FROM categories WHERE id = ?",
        [id],
        (err2) => {
          if (err2) return res.status(500).json(err2);
          res.json({ message: "Category and products deleted" });
        }
      );
    }
  );
});


module.exports = router;
