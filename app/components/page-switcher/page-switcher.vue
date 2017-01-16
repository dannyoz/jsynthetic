<template>
	<div class="page-switcher">
		<h1>{{current}}</h1>
	</div>
	<background></background>
</template>

<script>
	import background from '../background/background.vue';
	export default {
		components : {
			background
		},
	  props : ['routes','current']
	};
</script>
