const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.use(express.static('build'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.put('/save-bosch-config', (req, res) => {
  fs.writeFile('./config/bosch-run-config.json', JSON.stringify(req.body), 'utf-8', () => {});
  res.send('saved');
});

app.put('/save-atman-config', (req, res) => {
  fs.writeFile('./config/atman-run-config.json', JSON.stringify(req.body), 'utf-8', () => {});
  res.send('saved');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});