<template lang="pug">
v-container( fluid @wheel.prevent @touchmove.prevent @scroll.prevent )
	v-col( cols="12" )
		v-row( justify="center" )
			.chord {{ chord }}

		v-row.tones( justify="center" )
			v-chip-group
				v-chip.tone( v-for="tone,i in tones" :key="i" color="" ) {{ tone }}
		
		v-row.buttons
			v-row( justify="center" )
				v-btn.button( @click="showTones" x-large  color=""  )
					v-icon mdi-eye

			v-row( justify="center" )
				v-btn.button( @click="roll" x-large  color="primary"  )
					v-icon mdi-dice-multiple-outline
</template>

<script lang="ts">
	import Vue from 'vue';
	import { Chord } from '~/types/music/chord';
	import { CircleOfFifths } from '~/types/music/circle-of-fifths';
	import { Tone } from '~/types/music/tone';
	export default Vue.extend({
		data: function () {
			return {
				tonesHidden: true,
				chord: {} as Chord,
				tones: [] as Tone[],
			};
		},

		methods: {
			hideTones() {
				this.tones = [];
			},
			showTones() {
				this.tones = this.chord.getTones();
			},

			roll() {
				this.hideTones();
				const chord = CircleOfFifths.getRandomChord();
				this.chord = chord;
			},
		},
		mounted() {
			this.roll();
		},
	});
</script>

<style scoped lang="sass">
	.chord
		margin-top: 5vh
		font-size: 20vh
	.tones
		height: 10vh
		.tone
			margin-left: .5vh
	.buttons
		margin-top: 15vh
		.button
			margin: 1vh
			width: 30vh
</style>
