const express = require('express')
const path = require('path')
const htmlRoute = express.Router();

htmlRoute.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '..', "public", 'notes.html'))
})

htmlRoute.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "public", 'index.html'))
})

module.exports = htmlRoute;