<template lang="pug">
h1.blue--text Message
	.red--text {{ msg }}
	v-btn(icon outlined color="primary")
		v-icon mdi-heart
	v-color-picker(hide-inputs)
</template>

<script lang="ts">
	import Vue from 'vue';
	export default Vue.extend({
		data: function () {
			return { msg: new String() };
		},
		mounted() {
			this.msg = 'HELLO World !!';
		},
	});
</script>

<style scoped lang="sass">
	h1
		color: blue
	.msg
		color: red
	v-color-picker
		input
			font-size: .1em
</style>
