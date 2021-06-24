<template>
	<div>
		<v-row>

			<v-col cols="12">
				<Timeline/>
			</v-col>
			<!--			<v-fab-transition>-->
			<!--				<v-btn-->
			<!--					color="green lighten-1"-->
			<!--					fab-->
			<!--					dark-->
			<!--					bottom-->
			<!--					right-->
			<!--					class="add-button"-->
			<!--					@click.stop="dialog = true"-->
			<!--				>-->
			<!--					<v-icon>mdi-plus</v-icon>-->
			<!--				</v-btn>-->
			<!--			</v-fab-transition>-->
		</v-row>
		<v-row justify="center">
			<v-dialog
				max-width="290"
				v-model="displayDialog"
			>
				<v-card>
					<v-card-title>
						Actions
					</v-card-title>
					<v-divider></v-divider>
					<v-card-text>
						<Activity
							:color="activity.color"
							:content="activity.content"
							:desc="activity.desc"
							:icon="activity.icon"
							:key="activity.type"
							:suffix="activity.suffix"
							:type="activity.type"
							v-for="activity in activities"
						/>
					</v-card-text>
					<v-divider />
					<v-card-actions>
						<v-btn text color="blue lighten-1" @click="closeDialog">
							OK
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
		</v-row>
	</div>
</template>
<script>
    import Activity from '../components/Activity';

    export default {
        components: {
            Activity
        },
        computed: {
            activities() {
                return this.$store.state.activities.activities;
            },
            displayDialog: {
                get(){
                    return this.$store.state.displayDialog;
                },

                set(value){
                    this.$store.commit('showDialog', value);
								}
            }
        },
        methods: {
            closeDialog(){
                this.$store.commit('showDialog', false);
						}
				}
    }
</script>
<style>
	.add-button {
		position: absolute;
		bottom: 20px;
		right: 30px;
	}
</style>
