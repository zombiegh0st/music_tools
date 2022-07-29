<template lang="pug">
	h1 Message
		.msg {{ msg }}
</template>

<script lang="ts">
	export default {
		data: function () {
			return { msg: String };
		},
		mounted() {
			this.msg = 'Hello World!!!';
		},
	};
</script>

<style lang="sass">
	h1
		color: blue
	.msg
		color: red
</style>
