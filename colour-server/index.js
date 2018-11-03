const express = require('express');
const app = express();
const port = process.argv[2];
const colour = process.argv[3]
let hitCount = 0;

if(typeof port === 'undefined' || typeof colour === 'undefined')
	throw 'Port and colour must be passed as node parameters';

app.get('/', function (req, res) {
  hitCount++;
  res.set('Content-Type', 'text/html');
  res.send(new Buffer(`<body style="background: ${colour}"><h1>${hitCount}</h1></body>`));
});

app.listen(port, function () {
  console.log(colour+' server is running on http://localhost:'+port);
});
