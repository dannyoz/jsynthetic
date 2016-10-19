<template>
	<div class="twitter">
		<h1>{{title}}</h1>
		<ul>
			<li v-for="tweet in tweets">{{tweet.text}}</li>
		</ul>
	</div>
</template>

<script>
	import apiService from '../../shared/api-service.js';
	var Api = new apiService();

	export default {
		data () {
		    return {
		      	title: 'twitter',
		      	tweets: []
		    }
		},
		created() {
			var self = this;
		  	Api.request('/gettweets').end(function(err, response){
		  		console.log(response.body);
		  		self.tweets = response.body;
		  	});
		}
	};
</script>
