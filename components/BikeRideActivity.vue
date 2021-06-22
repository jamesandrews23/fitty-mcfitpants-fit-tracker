<template>
	<v-text-field
		ref="bikeRide"
		label="Distance"
		value=""
		suffix="mi"
		v-model="val"
	></v-text-field>
</template>
<script>
	export default {
	  name: "BikeRideActivity",
		data (){
				return {
						val: 0
				}
		}
	}
</script>
