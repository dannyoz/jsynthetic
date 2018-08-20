<template>
	<div class="about container">
		<h1>{{title}}</h1>
		<p class="columns">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit corporis dolorum est, eligendi. Expedita, ex inventore natus, cumque possimus numquam atque ab magni obcaecati ut! Assumenda quo doloremque porro magnam. Reprehenderit ullam, nihil corrupti, dignissimos animi quidem maxime aperiam voluptas dolores libero veritatis quisquam quod voluptatum labore soluta, voluptatem expedita sunt. Iure nam distinctio quos in sapiente, asperiores quisquam officiis quasi numquam voluptate ut quibusdam sed dolorem, unde, maxime voluptates nobis. Maxime voluptatum quo commodi quod dolorem non labore praesentium!</p>
		<twitter></twitter>
	</div>
</template>

<script>
	import twitter from '../twitter/twitter.vue';
	export default {
		data () {
		    return {
		    	title: 'about',
		    }
		},
		components: {
			twitter
		}
	};
</script>
