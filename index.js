const express = require("express");
const app = express();
const emailRoute = require("./src/routes/emailRoute");
require("dotenv").config();

const port = process.env.PORT || 8000;

app.use(express.json());

app.use("/", emailRoute);

app.listen(port, () =>{
  console.log(`Iniciou com Sucesso localhost Port: ${port}`);
});