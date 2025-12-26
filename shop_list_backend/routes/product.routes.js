const express = require("express");
const router = express.Router();
const db = require("../db");


// 🔹 CREATE Product
router.post("/", (req, res) => {
  const { name, description, product_code, quantity, category_id } = req.body;

  const sql = `
    INSERT INTO products
    (name, description, product_code, quantity, category_id)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, description, product_code, quantity, category_id],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }
      res.json({ message: "Product created", id: result.insertId });
    }
  );
});


// 🔹 READ All Products (with Category)
router.get("/", (req, res) => {
  const sql = `
    SELECT 
      p.id,
      p.name,
      p.description,
      p.product_code,
      p.quantity,
      c.name AS category_name
    FROM products p
    JOIN categories c ON p.category_id = c.id
  `;

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(result);
  });
});


// 🔹 UPDATE Product
router.put("/:id", (req, res) => {
  const { name, description, product_code, quantity, category_id } = req.body;
  const { id } = req.params;

  const sql = `
    UPDATE products
    SET name = ?, description = ?, product_code = ?, quantity = ?, category_id = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [name, description, product_code, quantity, category_id, id],
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }
      res.json({ message: "Product updated" });
    }
  );
});


// 🔹 DELETE Product
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM products WHERE id = ?", [id], (err) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json({ message: "Product deleted" });
  });
});

module.exports = router;
