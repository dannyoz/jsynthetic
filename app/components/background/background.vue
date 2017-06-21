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
				spacing : 55,
				charge: 1000,
				gravity: .01,
			});
			canvas.draw();
			console.log(canvas);
	  },
	};
</script>
