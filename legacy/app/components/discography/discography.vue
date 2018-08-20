<template>
	<div class="discography">
		<h1>{{title}}</h1>
		<div class="albums-wrapper">
			<div class="album" v-for="album in albums">
				<iframe :src="albumSrc(album)" seamless><a :href="album.link">{{album.title}}</a></iframe>
			</div>
		</div>
	</div>
</template>

<script>
	import apiService from '../../shared/api-service';
	const ApiService = new apiService();
	export default {
		data () {
			return {
				title: 'discography',
				albums: []
			}
		},
		ready() {
			// ApiService.request('discography').then((res) => {
			// 	this.albums = res.body;
			// });
		},
		methods: {
			albumSrc(album) {
				const domain = 'https://bandcamp.com/EmbeddedPlayer/';
				const albumStr = `album=${album.id}/`;
				const size = 'size=large/'
				const bgColour = 'bgcol=333333/';
				const linkColour = 'linkcol=9a64ff/';
				const trackList = 'tracklist=false/';
				const transparent = 'transparent=true/';
				return `${domain}${albumStr}${size}${bgColour}${linkColour}${trackList}${transparent}`;
			},
		},
	};
</script>
