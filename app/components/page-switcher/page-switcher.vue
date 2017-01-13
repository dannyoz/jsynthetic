<template>
	<div class="page-switcher">
		<h1>{{current}}</h1>
	</div>
</template>

<script>
	export default {
	  props : ['routes','current']
	};
</script>
