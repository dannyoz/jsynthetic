<template>
	<div class="twitter">
		<ul>
			<li v-for="tweet in tweets">{{{parseTweet(tweet).html}}}</li>
		</ul>
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
			}
		}
	};
</script>
