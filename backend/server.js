require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API WORKING FINE...",
  });
});

app.listen(PORT, () => {
  console.log(`\nSERVER STARTED WORKING ON PORT = ${PORT}\n`);
});
