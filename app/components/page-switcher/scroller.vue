<template>
	<div v-el="template">
		<component :is="template"></component>
	</div>
</template>

<script>
	import logo from '../logo/logo.vue';
	import discography from '../discography/discography.vue';
	import about from '../about/about.vue';
	import contact from '../contact-form/contact-form.vue';
	export default {
		components : {
			logo,
			discography,
			about,
			contact
		},
	  props : ['template'],
	  ready() {
	  	const self = this;
	  	window.addEventListener('scroll', function(e) {
	  		self.handleScroll(e);
	  	});
	  },
	  methods: {
	  	handleScroll(e) {
	  		const body = document.getElementsByTagName('body');
	  		let 	scrollPos = body[0].scrollTop;
	  		console.log('top : ', this.$el.offsetTop, "| body scroll position : ", scrollPos);
	  	}
	  }
	};
</script>