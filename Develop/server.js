const express = require('express');

const PORT = 3001;
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))

const apiRouter = require('./routes/apiRoutes')
const htmlRouter = require('./routes/htmlRoutes')

app.use('/api', apiRouter)
app.use('/html', htmlRouter)

app.get('/api/notes', (req,res) => {

})

app.post('/api/notes', (req,res) => {

})

app.delete('/api/notes/:note_id', (req,res) => {

})

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);