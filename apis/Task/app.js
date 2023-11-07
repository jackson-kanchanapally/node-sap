const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./mydatabase.db", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connect to db");
  }
});
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  db.all("SELECT * FROM tasks ", [], (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});
app.post("/post", (req, res) => {
  const { title, progress } = req.body;
  db.all(
    "INSERT INTO tasks (title,progress) VALUES(?,?)",
    [title, progress],
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ message: "task added " });
      }
    }
  );
});
app.put("/:id", (req, res) => {
  const id = req.params.id;
  const { title, progress } = req.body;
  db.all(
    "UPDATE tasks SET title=?, progress=? WHERE id=?",
    [title, progress, id],
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ message: "task updated " });
      }
    }
  );
});
app.get("/:id", (req, res) => {
  const id = req.params.id;
  db.all("SELECT * FROM tasks WHERE id=?", [id], (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});
app.delete("/:id", (req, res) => {
  const id = req.params.id;
  db.all("DELETE FROM tasks WHERE id=?", [id], (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: "task deleted " });
    }
  });
});
app.listen(3000, () => {
  console.log("running");
});
