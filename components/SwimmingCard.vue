<template>
	<v-text-field
		ref="swimming"
		label=""
		value=""
		suffix="laps"
		v-model="val"
	></v-text-field>
</template>
<script>
    export default {
        name: "SwimmingCard",
        data (){
            return {
                val: 0
            }
        }
    }
</script>
