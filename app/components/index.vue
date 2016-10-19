<template>
	<logo></logo>
	<navigation></navigation>
	<contact-form></contact-form>
	<background></background>
	<twitter></twitter>
</template>

<script>
	import logo from './logo/logo.vue';
	import navigation from './navigation/navigation.vue';
	import contactForm from './contact-form/contact-form.vue';
	import background from './background/background.vue';
	import twitter from './twitter/twitter.vue';
	export default {
	  components : {
	  	logo,
	  	navigation,
	  	contactForm,
	  	background,
	  	twitter
	  }
	};
</script>
