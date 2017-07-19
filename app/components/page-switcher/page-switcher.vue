<template>
	<background></background>
	<div class="page-switcher">
		<scroller :template="'home'"></scroller>
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
		ready() {
		  	const self = this;
		  	window.addEventListener('scroll', function(e) {
		  		let scrollPos = window.pageYOffset || document.documentElement.scrollTop;
		  		console.log(scrollPos);
		  		// /self.handleScroll(e,scrollPos);
		  	});
		},
	  	props : ['routes','current']
	};
</script>
