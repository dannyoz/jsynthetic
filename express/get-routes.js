var Twitter = require('twitter');
var routes = {};
var constants = require('../app/shared/constants.js');
var discography = require('../app/shared/discography.json');

routes[`${constants.apiVersion}gettweets`] = function(req, res) {

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


routes[`${constants.apiVersion}discography`] = function(req, res) {
	res.status(200).json(discography);
};

module.exports = routes;
