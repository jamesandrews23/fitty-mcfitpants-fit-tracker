<template>
	<v-menu
		v-model="showCalendar"
		:close-on-content-click="false"
		:nudge-right="10"
		transition="scale-transition"
		offset-y
		min-width="auto"
		class="pt-3"
	>
		<template v-slot:activator="{ on, attrs }">
			<v-text-field
				v-model="date"
				label="Picker without buttons"
				prepend-icon="mdi-calendar"
				readonly
				v-bind="attrs"
				v-on="on"
				hide-details
				single-line
			></v-text-field>
		</template>
		<v-date-picker
			v-model="date"
			@input="showCalendar = false"
		></v-date-picker>
	</v-menu>
</template>
<script>
	export default {
	    name: "Overview",
			computed: {
	    	items (){
	    	    return this.$store.state.activities.activities;
				}
			},
			methods: {
	        onChangeItem (selectedTileArray){
					}
			},
			data: () => ({
          date: new Date().toISOString().substr(0, 10),
          showCalendar: false,
			})
	}
</script>
