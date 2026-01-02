require("dotenv").config();

const express = require("express");
require("./db");

const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product.routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoutes);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
