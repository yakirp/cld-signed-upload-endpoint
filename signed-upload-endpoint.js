var express    = require('express');
var Webtask    = require('webtask-tools');
var bodyParser = require('body-parser');
var cloudinary = require('cloudinary');
var app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json()); 
 
api_key = '****';
api_secret = '****';
cloud_name = '****';

cloudinary.config({ 
    cloud_name: cloud_name,
    api_key: api_key,
    api_secret: api_secret
  });
  
app.post('/', function (req, res) {
  
  var data = req.body;
  data.timestamp =  Math.floor(new Date() / 1000)

  var signature = cloudinary.utils.api_sign_request(data,api_secret)
 
  res.json({ signature:signature , api_key:api_key, timestamp:data.timestamp});

  
 });

module.exports = Webtask.fromExpress(app);
