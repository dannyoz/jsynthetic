export default {
	parseTweet(tweet) {
		let html = tweet.text;
		console.log(tweet);
		if (tweet.entities.hashtags.length) {
			const hashtags = this.findHashtags(tweet.text);
			hashtags.forEach((hashtag) => {
				const template = `<span class="hashtag">${hashtag}</span>`;
				html = html.replace(hashtag, template);
			});
		}

		if (tweet.entities.user_mentions.length) {
			const users = this.findUsers(tweet.text);
			users.forEach((user) => {
				const template = `<span class="user">${user}</span>`;
				html = html.replace(user, template);
			});
		}

		if (tweet.extended_entities && tweet.extended_entities.media.length) {
			const media = tweet.extended_entities.media;
			media.forEach((item) => {
				const template = `<img src="${item.media_url}"></img>`;
				html = html.replace(item.url, '');
				html += template;
			});
		}

		html = `<span class="tweet">${html}</span>`;

		console.log(html);

		return {
			text: tweet.text,
			html
		};
	},
	findHashtags(text) {
	    const regexp = /\B\#\w\w+\b/g;
	    return text.match(regexp);
	},
	findUsers(text) {
	    const regexp = /\B\@\w\w+\b/g;
	    return text.match(regexp);
	}
};

