<template>
	<div class="pt-8 pl-5 pr-5">
		<v-slider
			v-model="ex3.val"
			:thumb-color="ex3.color"
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
                ex3: { label: 'Blood Sugar', val: 300, color: 'red' },
            }
        },
    }
</script>
