// Importing and establishing necessary information
const express = require('express');
const path = require('path');
const util = require('util')
const fs = require('fs')
const db = require('./db/db.json');

const app = express.Router();
const PORT = process.env.PORT || 3001;

// Middleware to allow the server to read file types
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// Get request to pull up the index.html page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

//Get request to pull up the notes.html page
app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

// Get request to pull up information from the db.json page
app.get('/api/notes', function (req, res) {
    res.json(db)
    res
});

// Post request to utilise the information pushed from the db.json page
app.post('/api/notes', function (req, res) {
    console.log('Saved notes retrieved')
    const {title, text} = req.body
    if (title && text) {
        const newNote = {
            title,
            text
        }
    }
});


app.listen(PORT, () => {
    console.log(`Notation app listening at http://localhost:${PORT}`);
});
  