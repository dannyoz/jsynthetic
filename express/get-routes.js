var routes = {};
var constants = require('../app/shared/constants.js');
var discography = require('../app/shared/discography.json');
var Twit = require('twit');

routes[`${constants.apiVersion}gettweets`] = function(req, res) {

	var T = new Twit({
		consumer_key: process.env.TWITTER_CONSUMER_KEY,
		consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
		access_token: process.env.TWITTER_ACCESS_TOKEN,
  		access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
		timeout_ms: 60*1000,
	});
	 
	var params = {screen_name: 'JimmySynthetic'};
	T.get('statuses/user_timeline', params, function(error, tweets, response) {
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
