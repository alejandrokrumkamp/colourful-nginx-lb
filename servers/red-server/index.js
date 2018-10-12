
const express = require('express');
const app = express();
const port = 8080;

app.get('/', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.send(new Buffer('<body style="background:red"></body>'));
});

app.listen(port, function () {
  console.log('Red server is running on port '+port);
});

