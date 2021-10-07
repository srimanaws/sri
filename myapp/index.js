const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get("/list_movies", (req, res) => {
    fs.readFile(__dirname + '/' + 'movies.json', 'utf8', (err, data) => {
        res.end(data);
    });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
