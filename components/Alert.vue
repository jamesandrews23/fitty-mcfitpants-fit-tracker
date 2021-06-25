<template>
	<div class="text-center ma-2">
		<v-snackbar
			v-model="alert"
			color="primary"
			top
		>
			{{ alertText }}
		</v-snackbar>
	</div>
</template>
<script>
    export default {
        computed: {
            alert: {
                get() {
                    return this.$store.state.alert;
                },

                set(show) {
                    this.$store.commit('showAlert', show);
                }
            },

						alertText: {
                get(){
                    return this.$store.state.alertText;
								}
						}
        }
    }
</script>
