<template>
	<logo></logo>
	<about></about>
	<navigation></navigation>
	<contact-form></contact-form>
	<background></background>
	<discography></discography>
	<twitter></twitter>
</template>

<script>
	import logo from './logo/logo.vue';
	import about from './about/about.vue';
	import navigation from './navigation/navigation.vue';
	import contactForm from './contact-form/contact-form.vue';
	import background from './background/background.vue';
	import discography from './discography/discography.vue';
	import twitter from './twitter/twitter.vue';
	export default {
	  components : {
	  	logo,
	  	about,
	  	navigation,
	  	contactForm,
	  	background,
	  	discography,
	  	twitter
	  }
	};
</script>
