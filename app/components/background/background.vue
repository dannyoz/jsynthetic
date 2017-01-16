<template>
	<div class="background">
		<video autoplay loop :class="orientation">
			<source src="/media/vhs.mp4" type="video/mp4">
		</video>
		<div class="overlay"></div>
	</div>
</template>

<script>

	export default {
	  data () {
	    return {
	      orientation: '',
	    }
	  },
	  ready(){
	  	this.reSize()
	  },
	  methods: {
	  	reSize() {
	  		const height = window.innerHeight;
	  		const width = window.innerWidth;
	  		console.log(height/width);
	  		const orientation = (height/width > 0.42) ? 'portrait' : 'widescreen';
	  		this.orientation = orientation;
	  	}
	  }
	};
</script>
