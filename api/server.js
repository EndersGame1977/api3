const express = require("express");
const server = express();

const productsRouter = require("../products/products-router.js");
// global middleware
server.use(express.json());

server.use("/poducts", productsRouter);
server.use("/suppliers", suppliersRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "api works" });
});

// manage products (8)
// manage clients (8)
// manage orders ()
// manage suppliers

//server.get("/products", (req, res) => {});
server.get("/clients", (req, res) => {});
server.get("/orders", (req, res) => {});
//server.get("/suppliers", (req, res) => {});

module.exports = server;
