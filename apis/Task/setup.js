const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./mydatabase.db");
db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY,title TEXT,progress TEXT)"
  );
  const stmt = db.prepare("INSERT INTO tasks (title,progress) VALUES (?,?)");
  stmt.finalize();
});
db.close();
