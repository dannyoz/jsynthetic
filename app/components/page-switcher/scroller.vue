<template>
	<component :is="template"></component>
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
	  	window.addEventListener('scroll', this.handleScroll);
	  },
	  methods: {
	  	handleScrol(e) {
	  		console.log(e)
	  	}
	  }
	};
</script>