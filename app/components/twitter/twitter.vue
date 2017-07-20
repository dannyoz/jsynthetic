<template>
	<div class="twitter">
		<div @click="gotoTweet(tweet)" class="tweet" v-for="tweet in tweets">
			{{{parseTweet(tweet).html}}}
			<span class="tweet__quoted" v-if="tweet.is_quote_status">{{{parseTweet(tweet.quoted_status).html}}}</span>
		</div>
	</div>
</template>

<script>
	import apiService from '../../shared/api-service.js';
	import utils from './utils';
	var Api = new apiService();

	export default {
		data () {
		    return {
		      	tweets: []
		    }
		},
		created() {
			var self = this;
		  	Api.request('gettweets').end(function(err, response){
		  		self.tweets = response.body;
		  	});
		},
		methods: {
			parseTweet(tweet) {
				return utils.parseTweet(tweet);
			},
			gotoTweet(tweet) {
				location.href = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`;
			},
		}
	};
</script>
