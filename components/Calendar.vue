<template>
	<v-menu
		ref="dateMenu"
		v-model="dateMenu"
		:close-on-content-click="false"
		transition="scale-transition"
		offset-y
		max-width="290px"
		min-width="auto"
	>
		<template v-slot:activator="{ on, attrs }">
			<v-text-field
				v-model="dateFormatted"
				prepend-icon="mdi-calendar"
				v-bind="attrs"
				@blur="date = parseDate(dateFormatted)"
				v-on="on"
				hide-details
				single-line
				readonly
			></v-text-field>
		</template>
		<v-date-picker
			v-model="date"
			@input="loadDate"
		></v-date-picker>
	</v-menu>
</template>
<script>
    export default {
        computed: {
        	date: {
        	    get(){
        	        return this.$store.state.date;
							},

							set(toDate){
        	        this.$store.commit('changeDate', toDate);
							}
					}
				},

        data: vm => ({
            // date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
            dateMenu: false,
            menu2: false,
        }),

        watch: {
            date (val) {
                this.dateFormatted = this.formatDate(this.date)
            },
        },

        methods: {
            formatDate (date) {
                if (!date) return null;

                const [year, month, day] = date.split('-');
                return `${month}/${day}/${year}`;
            },
            parseDate (date) {
                if (!date) return null;

                const [month, day, year] = date.split('/');
                return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
            },
						loadDate (date){
                this.$data.dateMenu = false;
                this.$store.commit("timeline/loadDateTimeline", date);
						}
        },
    }
</script>
