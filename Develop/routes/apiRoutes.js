const apiRoute = require('express').Router();
const fs = require("fs");
const uuid = require('uuid');

apiRoute.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'))
})

apiRoute.post('./db/db.json', (req, res) =>{
    let data = JSON.parse(fs.readFile('db/db.json'))
    res.json(data)
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuid(),
    }
    data.push(newNote)
    fs.writeFile('db/db.json', JSON.stringify(data))
    res.json(data)
})