
/**
 * Module dependencies
 */

var express = require('express');
var fs = require('fs');
var path = require('path');

const PORT = 3000
var app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  fs.createReadStream('./index.html').pipe(res);
});

app.get('*', function(req, res) {
  res.status(404).end();
});

app.listen(PORT, function() {
  console.log(`Server listening on port ${PORT}`);
});
