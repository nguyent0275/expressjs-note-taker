const htmlRoute = require('express').Router();
const fs = require("fs");
const uuid = require('uuid');

htmlRoute.get('./notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'))
})

htmlRoute.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})