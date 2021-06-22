<template>
	<div class="pt-8 pl-5 pr-5">
		<v-slider
			v-model="val"
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
        name: "BloodSugarActivity",
        data () {
            return {
                val: 100,
                slider: { label: 'Blood Sugar', color: 'red' },
            }
        }
    }
</script>
