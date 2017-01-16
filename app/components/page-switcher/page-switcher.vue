<template>
	<background></background>
	<div class="page-switcher">
		<logo></logo>
		<discography></discography>
		<about></about>
		<contact></contact>
	</div>
</template>

<script>
	import background from '../background/background.vue';
	import logo from '../logo/logo.vue';
	import discography from '../discography/discography.vue';
	import about from '../about/about.vue';
	import contact from '../contact-form/contact-form.vue';
	export default {
		components : {
			background,
			logo,
			discography,
			about,
			contact
		},
	  props : ['routes','current']
	};
</script>
