const express = require('express');
const app = express();
const ip = process.argv[2];
const port = process.argv[3];
const colour = process.argv[4]
let hitCount = 0;

if(typeof port === 'undefined' || typeof colour === 'undefined')
	throw 'Port and colour must be passed as node parameters';

app.get('/', function (req, res) {
  hitCount++;
  res.set('Content-Type', 'text/html');
  res.send(new Buffer(`<style>/* vietnamese */
  @font-face {
    font-family: 'Patrick Hand';
    font-style: normal;
    font-weight: 400;
    src: local('Patrick Hand'), local('PatrickHand-Regular'), url(https://fonts.gstatic.com/s/patrickhand/v11/LDI1apSQOAYtSuYWp8ZhfYe8UcLLq7s.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Patrick Hand';
    font-style: normal;
    font-weight: 400;
    src: local('Patrick Hand'), local('PatrickHand-Regular'), url(https://fonts.gstatic.com/s/patrickhand/v11/LDI1apSQOAYtSuYWp8ZhfYe8UMLLq7s.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Patrick Hand';
    font-style: normal;
    font-weight: 400;
    src: local('Patrick Hand'), local('PatrickHand-Regular'), url(https://fonts.gstatic.com/s/patrickhand/v11/LDI1apSQOAYtSuYWp8ZhfYe8XsLL.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }</style><body style="background: ${colour}; font-size:48px; text-align:center; font-family: 'Patrick Hand', Arial"><h1>${hitCount}</h1></body>`));
});

app.listen(port, ip);
