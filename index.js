const express = require("express");
const app = express();
const emailRoute = require("./src/routes/emailRoute");

const port = 8000;
app.use(express.json());

app.use("/", emailRoute);

app.listen(port, () =>{
  console.log(`Iniciou com Sucesso localhost Port: ${port}`);
});