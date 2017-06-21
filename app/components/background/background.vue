<template>
	<div class="background">
	</div>
</template>

<script>
	import background from './background';
	export default {
	  data () {
	    return {
	      orientation: '',
	    }
	  },
	  ready(){
			const canvas = new background.canvas({
				innerColour: "#00c8ff",
				outerColour: "#332a3a",
				spacing : 44,
				charge: 1000,
				gravity: .01,
				lineWidth: 0.3,
			});
			canvas.draw();
			console.log(canvas);
	  },
	};
</script>
