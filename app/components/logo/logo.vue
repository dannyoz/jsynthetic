<template>
	<div class="logo">
		<div class="centre">
			<glitch 
				:path="'img/logo.png'"
				:slices="50"
			></glitch>
		</div>
	</div>
</template>

<script>
	import glitch from '../glitch/glitch.vue';
	export default {
	  components: {
	  	glitch,
	  }
	};
</script>
