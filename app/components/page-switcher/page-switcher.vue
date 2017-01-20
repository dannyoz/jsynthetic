<template>
	<background></background>
	<div class="page-switcher">
		<scroller :template="'logo'"></scroller>
		<scroller :template="'discography'"></scroller>
		<scroller :template="'about'"></scroller>
		<scroller :template="'contact'"></scroller>
	</div>
</template>

<script>
	import background from '../background/background.vue';
	import scroller from './scroller.vue';
	export default {
		components : {
			background,
			scroller
		},
	  props : ['routes','current']
	};
</script>
