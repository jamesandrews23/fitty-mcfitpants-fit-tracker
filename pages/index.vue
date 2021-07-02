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
				class="card-content"
			>
				<v-card>
					<v-card-title>
						<v-text-field
							label="Search Activities"
							solo
							dense
							prepend-inner-icon="mdi-magnify"
							@input="getActivities"
							hide-details
							ref="searchField"
						></v-text-field>
					</v-card-title>
					<v-divider></v-divider>
					<v-card-text>
						<Activity
							v-for="activity in filteredData"
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
    import {mapState, mapGetters} from 'vuex';

    export default {
        components: {
            Activity
        },
        computed: {
						displayDialog: {
						    get(){
						        return this.$store.state.displayDialog;
								},

								set(value){
						        this.$store.commit('showDialog', value);
								}
						}
        },
				data (){
					return {
              filteredData: []
					}
				},
				mounted(){
        	this.$data.filteredData = this.$store.state.activities;
				},
        methods: {
            closeDialog() {
                this.$store.commit('showDialog', false);
            },
						getActivities(value){
                this.$data.filteredData = this.$store.getters.getActivitiesByType(value);
						}
        }
    }
</script>
<style>
	.card-content {
		min-height: 662px;
	}
</style>
