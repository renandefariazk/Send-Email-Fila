const express = require("express");
const Route = express.Router();
const emailController = require("../controller/emailController");

Route.get("/", emailController.home);
Route.post("/email", emailController.email);

module.exports = Route;