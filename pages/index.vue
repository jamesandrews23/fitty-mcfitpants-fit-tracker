<template>
	<div>
		<v-row>
			<v-col cols="12">
				<Timeline/>
			</v-col>
		</v-row>
		<v-row justify="center">
			<v-dialog
				v-model="displayDialog"
				scrollable
			>
				<v-card>
					<v-card-title>
						Actions
					</v-card-title>
					<v-divider></v-divider>
					<v-card-text>
						<v-text-field
							label="Search Activities"
							solo
							dense
							prepend-inner-icon="mdi-magnify"
							class="mt-2"
							@input="filterActivities"
						></v-text-field>
						<Activity
							v-for="activity in activities"
							:color="activity.color"
							:content="activity.content"
							:desc="activity.desc"
							:icon="activity.icon"
							:key="activity.type"
							:suffix="activity.suffix"
							:type="activity.type"
						/>
					</v-card-text>
					<v-divider/>
					<v-card-actions>
						<v-btn @click="closeDialog" color="blue lighten-1" text>
							OK
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
		</v-row>
		<Alert />
	</div>
</template>
<script>
    import Activity from '../components/Activity';
    import {mapState} from 'vuex';

    export default {
        components: {
            Activity
        },
        computed: {
						...mapState('activities', {
						    activities: state => state.activities
						}),
            displayDialog: {
                get() {
                    return this.$store.state.displayDialog;
                },

                set(value) {
                    this.$store.commit('showDialog', value);
                }
            }
        },
        methods: {
            closeDialog() {
                this.$store.commit('showDialog', false);
            },

						filterActivities(value){
							console.log(value);
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
