<template>
	<nav class="navigation">
		<button v-for="route in routes" @click="goToPath(route)">
			<span>{{route.title}}</span>
		</button>
	</nav>
</template>

<script>
	export default {
	  props : ['routes', 'current'],
	  methods : {
	  	goToPath(route) {
	  		this.$dispatch( 'page', route.path );
	  	}
	  },
	};
</script>
