var routes = {};
var apiVersion = '/api/v1/';
var Twit = require('twit');

routes[`${apiVersion}gettweets`] = function(req, res) {

	var twitterFeed = new Twit({
		consumer_key: process.env.NG_TWITTER_CONSUMER_KEY,
		consumer_secret: process.env.NG_TWITTER_CONSUMER_SECRET,
		access_token: process.env.NG_TWITTER_ACCESS_TOKEN,
  		access_token_secret: process.env.NG_TWITTER_ACCESS_TOKEN_SECRET,
		timeout_ms: 60*1000,
	});
	 
	var params = {
		screen_name: 'JimmySynthetic',
		exclude_replies: true,
		include_rts: false,
		count: 20
	};

	twitterFeed.get('statuses/user_timeline', params, function(error, tweets, response) {
	  	if (!error) {
	    	res.status(200).send(tweets);
	  	} else {
	  		res.status(500).send(error);
	  	};
	});
};

module.exports = routes;
