<template>
	<div>
<!--		<v-toolbar-->
<!--			dense-->
<!--			flat-->
<!--		>-->
<!--			<v-toolbar-title>-->
<!--				<span class="subheading">METRONOME</span>-->
<!--			</v-toolbar-title>-->
<!--			<v-spacer></v-spacer>-->
<!--			<v-btn icon>-->
<!--				<v-icon>mdi-share-variant</v-icon>-->
<!--			</v-btn>-->
<!--		</v-toolbar>-->

		<v-row
			class="mb-4"
			justify="space-between"
		>
			<v-col class="text-left">
				<span
					class="text-h2 font-weight-light"
					v-text="val"
				></span>
				<span class="subheading font-weight-light mr-1">LBS</span>
<!--				<v-fade-transition>-->
<!--					<v-avatar-->
<!--						:color="color"-->
<!--						:style="{-->
<!--							animationDuration: animationDuration-->
<!--						}"-->
<!--						class="mb-1 v-avatar&#45;&#45;metronome"-->
<!--						size="12"-->
<!--						v-if="isPlaying"-->
<!--					></v-avatar>-->
<!--				</v-fade-transition>-->
			</v-col>
<!--			<v-col class="text-right">-->
<!--				<v-btn-->
<!--					:color="color"-->
<!--					@click="toggle"-->
<!--					dark-->
<!--					depressed-->
<!--					fab-->
<!--				>-->
<!--					<v-icon large>-->
<!--						{{ isPlaying ? 'mdi-pause' : 'mdi-play' }}-->
<!--					</v-icon>-->
<!--				</v-btn>-->
<!--			</v-col>-->
		</v-row>

		<v-slider
			:color="color"
			always-dirty
			max="218"
			min="40"
			track-color="grey"
			v-model="val"
		>
			<template v-slot:prepend>
				<v-icon
					:color="color"
					@click="decrement"
				>
					mdi-minus
				</v-icon>
			</template>

			<template v-slot:append>
				<v-icon
					:color="color"
					@click="increment"
				>
					mdi-plus
				</v-icon>
			</template>
		</v-slider>
	</div>
</template>
<script>
    export default {
        name: "WeightActivity",
        data: () => ({
            val: 40,
            interval: null,
            isPlaying: false,
        }),

        computed: {
            color() {
                if (this.val < 100) return 'indigo';
                if (this.val < 125) return 'teal';
                if (this.val < 140) return 'green';
                if (this.val < 175) return 'orange';
                return 'red'
            },
            animationDuration() {
                return `${60 / this.val}s`
            },
        },

        methods: {
            decrement() {
                this.val--
            },
            increment() {
                this.val++
            },
            toggle() {
                this.isPlaying = !this.isPlaying
            },
        },
    }
</script>
<style>
	@keyframes metronome-example {
		from {
			transform: scale(.5);
		}

		to {
			transform: scale(1);
		}
	}

	.v-avatar--metronome {
		animation-name: metronome-example;
		animation-iteration-count: infinite;
		animation-direction: alternate;
	}
</style>
