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
