var Twitter = require('twitter');
var routes = {};
const version = '/api/v1/';

routes[`${version}gettweets`] = function(req, res) {

	var client = new Twitter({
		consumer_key: '',
		consumer_secret: '',
		access_token_key: '',
  		access_token_secret: ''
	});
	 
	var params = {screen_name: 'JimmySynthetic'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  	if (!error) {
	    	res.status(200).send(tweets);
	  	} else {
	  		res.status(500).send(error);
	  	};
	});
};


routes[`${version}discography`] = function(req, res) {
	res.status(200).json({
		ok: true
	});
};

module.exports = routes;
