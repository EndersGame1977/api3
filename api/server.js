const express = require("express");
const server = express();

// manage products (8)
// manage clients (8)
// manage orders ()
// manage suppliers

server.get("/", (req, res) => {
  res.status(200).json({ message: "api works" });
});
server.get("/products", (req, res) => {});
server.get("/clients", (req, res) => {});
server.get("/orders", (req, res) => {});
server.get("/suppliers", (req, res) => {});

module.exports = server;
