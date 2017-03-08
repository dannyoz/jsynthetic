<template>
	<div class="glitch">
		<img class="spacer" :src="path" alt="Jimmy Synthetic">
		<div class="slice-holder">
			<div class="slice" :class="{'glitching': glitching}"
				:style="{
					'height': (100 / slices)+'%', 
					'top' : (100 / slices) * i + '%',
					'background-image': 'url('+path+')',
					'background-position' : '0 ' + (100 / slices) * i + '%',
				}"
				v-for="(n, i) in slices"></div>
		</div>
	</div>
</template>

<script>
	const loopTime = 3000;
	const glitchTime = 5000;
	export default {
		data() {
			return {
				glitching : false,
			}
		},
	  	props : ['path', 'slices'],
	  	attached() {
	  		this.loop();
	  	},
	  	methods: {
	  		loop() {
	  			setInterval(() => {
	  				this.glitch();
	  			}, loopTime + glitchTime);
	  		},
	  		glitch() {
	  			this.glitching = true;
	  			setTimeout(() => {
	  				this.glitching = false;
	  			}, glitchTime);
	  		}
	  	}
	};
</script>
