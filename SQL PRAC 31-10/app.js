const express = require('express');
const sqlite3 = require('sqlite3');
const path = require('path');

const app = express();
const port = 3000;

// Connect to SQLite Database
const db = new sqlite3.Database('./mydatabase.db', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the SQLite database');
        //db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)'); // Example table creation query
    }
});

// Middleware to parse request body as JSON
app.use(express.json());

// Get all users
app.get('/users', (req, res) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) {
            return console.error(err.message);
            //res.status(500).send('Internal Server Error');
            //return;
        }
        res.json(rows);
    });
});

//Get a single user by id
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    db.all('SELECT * FROM users WHERE id = ?', [id], (err, rows) => {
        if (err) {
            return console.error(err.message);
        }
        res.json(rows);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

//command to open in chrome is
// http://localhost:3000/users