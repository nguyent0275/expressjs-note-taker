const apiRoute = require("express").Router();
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

apiRoute.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "./db/db.json"));
});

apiRoute.post("/notes", (req, res) => {
    // read db.json and parsing the JSON object
  let data = JSON.parse(fs.readFileSync("db/db.json"));
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
//   adds the new note to the data array of objects
  data.push(newNote);
//   writes the file all over with pre-existing and new data
  fs.writeFileSync("db/db.json", JSON.stringify(data));
  //   res.json is sending json data
  res.json(data);
});

apiRoute.delete('/notes/:id', (req, res) => {
    data.find()
})

module.exports = apiRoute;
