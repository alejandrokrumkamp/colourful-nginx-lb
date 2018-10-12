
const express = require('express');
const app = express();
const port = 8082;

app.get('/', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.send(new Buffer('<body style="background:blue"></body>'));
});

app.listen(port, function () {
  console.log('Blue server is running on port '+port);
});

