const express = require('express')
const path = require('path')
const db = require('./db/db.json')

const app = express()
const PORT = 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.get('/api/db', (req,res) => {
    res.json(db)
})

app.post('/api/db', (req,res) => {

})


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
  