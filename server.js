const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.listen(process.env.PORT, () => {
  console.log("listening to port: ", process.env.PORT);
});
