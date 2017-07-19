var routes = {};
var constants = require('../app/shared/constants.js');
var discography = require('../app/shared/discography.json');
var Twit = require('twit');

routes[`${constants.apiVersion}gettweets`] = function(req, res) {

	var T = new Twit({
		consumer_key: 'HeJgeUj5uwXbbcjKIKtGWOExD',
		consumer_secret: 'JXKKqNJwsBBUvTWnnnA7wZDncLLShEUEjxCT6AHBFf3cWTG1SU',
		access_token: '779231838883745792-4AvOuwVP945WFuTKBkXu97GFC3kNAYq',
  		access_token_secret: '4IzYVxRlQmQArpPBOqNAddZ6GNUZg9f36Psj0XC7sjjpv',
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
