const express = require("express");
const app = express();

app.listen(8084, () => {
  console.log("Server running on port 8084");
});

app.get("/health", (req, res, next) => {
  res.status(200).send("Hello!");
});

