<template>
	<page-switcher :routes="routes" :current="current"></page-switcher>
	<navigation :routes="routes" :current="current"></navigation>
</template>

<script>
	
	import pageSwitcher from './page-switcher/page-switcher.vue';
	import navigation from './navigation/navigation.vue';
	const routes = require('../../express/routing').routes;

	export default {
	  components : {
	  	pageSwitcher,
	  	navigation,
	  },
	  data () {
	    return {
	      routes: routes,
          current: 'home'
	    }
	  },
	  events : {
		  'page'(path) {
        this.current = path;
		  }
		}
	};
</script>
