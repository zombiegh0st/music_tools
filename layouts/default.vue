<template lang="pug">
v-app( dark )
	v-main
		Nuxt( keep-alive ) 
	v-bottom-navigation( v-model="value" grow color="primary" )
		v-btn( icon v-for="item, i in items" :key="i" :to="item.to" )
			span {{ item.title }}		
			v-icon {{ item.icon }}
</template>
<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		data: function () {
			return {
				value: null,
				items: [
					{ icon: 'mdi-home', title: 'Home', to: '/' },
					{ icon: 'mdi-test-tube', title: 'Test', to: '/test' },
					{ icon: 'mdi-music', title: 'Chord Quiz', to: '/chord-quiz' },
				],
			};
		},
		methods: {},
	});
</script>
