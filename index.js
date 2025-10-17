const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("khatoon reshmi");
});
app.get("/login", (req, res) => {
  res.send("<h1>please login at chai ar code</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>chai aur Code</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
