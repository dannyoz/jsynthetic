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
	export default {
	  data () {
	    return {
	      title: 'discography',
				albums: [
					{
						id: '2746288366',
						link: 'http://jimmy-synthetic.bandcamp.com/album/blast-from-the-past-ep',
						title: 'Blast from the past EP by Jimmy Synthetic',
					}, {
						id: '99843590',
						link: 'https://perturbator.bandcamp.com/',
						title: 'Pert',
					}, {
						id: '3352492535',
						link: 'https://perturbator.bandcamp.com/',
						title: 'Pert',
					}, {
						id: '2746288366',
						link: 'http://jimmy-synthetic.bandcamp.com/album/blast-from-the-past-ep',
						title: 'Blast from the past EP by Jimmy Synthetic',
					}, {
						id: '99843590',
						link: 'https://perturbator.bandcamp.com/',
						title: 'Pert',
					}, {
						id: '3352492535',
						link: 'https://perturbator.bandcamp.com/',
						title: 'Pert',
					}
				]
	    }
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
