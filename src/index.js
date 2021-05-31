const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', function (req, res) {
  res.send('Hello World');
});

// 404 case - kai vartojas ivede psl kurio nera
app.use((req, res) => res.status(404).send('OOPs Page not found'));

app.listen(PORT);
