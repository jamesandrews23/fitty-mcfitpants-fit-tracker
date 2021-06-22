<template>
	<div class="pt-8 pl-5 pr-5">
		<v-slider
			v-on:end="onDragEnd"
			v-model="slider.val"
			:thumb-color="slider.color"
			thumb-label="always"
			inverse-label
			max="300"
			min="45"
		></v-slider>
	</div>
</template>
<script>
    export default {
        data () {
            return {
                slider: { label: 'Blood Sugar', val: 100, color: 'red' },
            }
        },
				methods: {
            onDragEnd(){
                this.$store.commit('adjustActivity', this.$data.slider.val);
						}
				}
    }
</script>
