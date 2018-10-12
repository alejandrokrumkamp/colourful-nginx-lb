
const express = require('express');
const app = express();
const port = 8081;

app.get('/', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.send(new Buffer('<body style="background:green"></body>'));
});

app.listen(port, function () {
  console.log('Green server is running on port '+port);
});

