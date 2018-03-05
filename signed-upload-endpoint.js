var express    = require('express');
var Webtask    = require('webtask-tools');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendStatus(200);
});

module.exports = Webtask.fromExpress(app);
