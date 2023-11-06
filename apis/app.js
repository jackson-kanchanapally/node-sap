const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const app = express();

const db = new sqlite3.Database("./mydatabase.db", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("connnected to db");
  }
});
app.use(express.json());
app.get("/rbs", (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) {
      console.log(err.message);
    } else {
      res.json(rows);
    }
  });
});
app.post("/rbs", (req, res) => {
  const { name, email } = req.body;
  db.all(
    "INSERT INTO users (name,email) VALUES(?,?)",
    [name, email],
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.status(201).json({ id: this.lastId });
      }
    }
  );
});
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
