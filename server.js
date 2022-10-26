// Importing and establishing necessary information
const express = require('express');
const path = require('path');
const db = require('./db/db.json');

const app = express();
const PORT = 3001;

// Middleware to allow the server to read file types
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// Get request to pull up the index.html page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

//Get request to pull up the notes.html page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

// Get request to pull up information from the db.json page
app.get('/api/notes', (req,res) => {
    res.json(db)
});

// Post request to utilise the informtion pushed from the db.json page
app.post('/api/notes', (req,res) => {
    console.log('Saved notes retrieved')
});


app.listen(PORT, () => {
    console.log(`Notation app listening at http://localhost:${PORT}`);
});
  