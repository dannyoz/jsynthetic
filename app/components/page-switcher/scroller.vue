<template>
	<div v-el="template" :class="{ 'current' : current }" :id="template">
		<component :is="template"></component>
	</div>
</template>

<script>
	import home from '../logo/logo.vue';
	import discography from '../discography/discography.vue';
	import about from '../about/about.vue';
	import contact from '../contact-form/contact-form.vue';
	var lastScrollTop = 0;
	export default {
		data () {
	    return {
        current: true
	    }
	  },
		components : {
			home,
			discography,
			about,
			contact
		},
	  props : ['template'],
	  ready() {
	  	// const self = this;
	  	// window.addEventListener('scroll', function(e) {
	  	// 	let scrollPos = window.pageYOffset || document.documentElement.scrollTop;
	  	// 	self.handleScroll(e,scrollPos);
	  	// });
	  },
	  methods: {
	  	handleScroll(e, scrollPos) {
	  		let top = this.$el.offsetTop;
	  		let bottom = top + this.$el.clientHeight;
	  		this.current = (scrollPos >= top && scrollPos <= bottom);
	  		console.log(this.current);
	  	}
	  }
	};
</script>
