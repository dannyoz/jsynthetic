<template>
	<div class="soundcloud">
		<iframe v-el:soundcloud src="https://w.soundcloud.com/player/?url=https://soundcloud.com/jimmy-synthetic/&amp;auto_play=false&amp;buying=true&amp;liking=true&amp;download=true&amp;sharing=true&amp;show_artwork=true&amp;show_comments=true&amp;show_playcount=true&amp;show_user=true&amp;hide_related=false&amp;visual=true&amp;start_track=0&amp;callback=true" width="100%" height="465" scrolling="no" frameborder="no"></iframe>
	</div>
</template>

<script>
	export default {
	  data () {
	    return {
	      text: 'sound',
	    }
	  },
		ready() {
			this.init();
		},
		methods: {
			init() {
				var widgetIframe = this.$els.soundcloud;
				var widget = SC.Widget(widgetIframe);
        var newSoundUrl = 'https://soundcloud.com/jimmy-synthetic/';
				
				widget.bind(SC.Widget.Events.READY, function() {
					// load new widget
					widget.bind(SC.Widget.Events.FINISH, function() {
						widget.load(newSoundUrl, {
							show_artwork: false
						});
					});
				});

			},
		},
	};
</script>
