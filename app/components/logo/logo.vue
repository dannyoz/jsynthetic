<template>
	<div class="logo">
		<div class="centre">
			<div class="slide-up">
				<glitch 
					:path="'img/logo.png'"
					:slices="50"
				></glitch>
			</div>
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
