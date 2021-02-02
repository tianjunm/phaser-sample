const express = require('express');
const app = express();
const port = 8888;

app.use('/js', express.static(__dirname + '/js'));
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log('Example app listening at http://localhost:' + port);
});

app.post('/clicked', (req, res) => {
  console.log('clicked');
});

