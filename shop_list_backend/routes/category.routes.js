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
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM categories WHERE id = ?";
  db.query(sql, [id], (err) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json({ message: "Category deleted" });
  });
});

module.exports = router;
