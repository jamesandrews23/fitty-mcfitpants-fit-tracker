<template>
	<v-app>
		<v-app-bar
			:clipped-left="clipped"
			app
			fixed
			light
		>
			<Calendar />
			<v-spacer/>
			<v-btn
				@click.stop="changeDialog(true)"
				icon
				:disabled="date !== (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
			>
				<v-icon>mdi-plus</v-icon>
			</v-btn>
		</v-app-bar>
		<v-main>
			<v-container>
				<nuxt/>
			</v-container>
		</v-main>
		<v-footer
			:absolute="!fixed"
			app
		>
			<span>&copy; {{ new Date().getFullYear() }}</span>&nbsp;Fitty McFitPants Fitness Tracker
		</v-footer>
	</v-app>
</template>

<script>
    export default {
        computed: {
        	date: {
        	    get(){
        	        return this.$store.state.date;
							}
					}
				},
        created (){
          //initialize to today's date
        	let storedState = localStorage.getItem(this.$store.state.date);
        	if(storedState){
        	    this.$store.commit('timeline/initialize', JSON.parse(storedState));
					}
				},
        methods: {
        	changeDialog(show){
        	    this.$store.commit('showDialog', show);
					}
				},
        data() {
            return {
                clipped: false,
                drawer: false,
                fixed: false,
                items: [
                    {
                        icon: 'mdi-apps',
                        title: 'Welcome',
                        to: '/'
                    },
                    {
                        icon: 'mdi-chart-bubble',
                        title: 'Inspire',
                        to: '/inspire'
                    }
                ],
                miniVariant: false,
                right: true,
                rightDrawer: false,
                title: 'Fitty'
            }
        }
    }
</script>
