var express = require('express');
var js = express();

var environment = process.env.NODE_ENV || 'development';
var envPath = __dirname+'/environments/'+environment+'/';

js.set('port', (process.env.PORT || 5000));

js.use(express.static(__dirname + '/public'));

// views is directory for all template files
js.set('views', __dirname + '/views');
js.set('view engine', 'ejs');

js.get('/', function(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(envPath+'views/index.html');
});

js.get('/env', function(req, res) {
	res.status(200).send(process.env);
});

js.listen(js.get('port'), function() {
  console.log('Node app is running on port', js.get('port'));
});


