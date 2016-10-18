var Twitter = require('twitter');
var routes = {};

routes['/gettweets'] = function(req, res){

	var client = new Twitter({
		consumer_key: 'HeJgeUj5uwXbbcjKIKtGWOExD',
		consumer_secret: 'JXKKqNJwsBBUvTWnnnA7wZDncLLShEUEjxCT6AHBFf3cWTG1SU',
		access_token_key: '779231838883745792-4AvOuwVP945WFuTKBkXu97GFC3kNAYq',
  		access_token_secret: '4IzYVxRlQmQArpPBOqNAddZ6GNUZg9f36Psj0XC7sjjpv'
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

module.exports = routes;