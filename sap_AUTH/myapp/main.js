const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.json({
    "a":"dsf",
  })
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server is running");
});
