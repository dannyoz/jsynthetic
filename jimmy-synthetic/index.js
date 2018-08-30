const express = require('express');
const js = express();
const env = require('dotenv').config();
const bodyParser = require('body-parser');

const environment = process.env.NODE_ENV || 'development';
const getRoutes   = require(__dirname+'/express/get-routes');
const postRoutes  = require(__dirname+'/express/post-routes');

js.set('port', 3000);
js.use(bodyParser.json());

for (var route in getRoutes) {
	js.get(route, getRoutes[route]);
}

for (var route in postRoutes) {
	js.post(route, postRoutes[route]);
}

if (environment === 'development') {
	js.get('/env', function(req, res) {
		res.status(200).send(process.env);
	});
}

js.listen(js.get('port'), function() {
  console.log('Jimmy synthetic app is running on port', js.get('port'));
});
