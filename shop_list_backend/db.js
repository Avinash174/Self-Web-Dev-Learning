const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "127.0.0.1",   // 🔴 NEVER localhost on macOS
  user: "admin",
  password: "Avinash15#",
  database: "product_app",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.error("❌ DB connection failed:", err.message);
  } else {
    console.log("✅ MySQL connected successfully");
  }
});

module.exports = db;
