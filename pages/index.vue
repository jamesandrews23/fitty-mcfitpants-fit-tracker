<template>
	<div>
		<v-row>

			<v-col cols="12">
				<Timeline />
			</v-col>
			<v-fab-transition>
				<v-btn
					color="green lighten-1"
					fab
					dark
					bottom
					right
					class="add-button"
					@click.stop="dialog = true"
				>
					<v-icon>mdi-plus</v-icon>
				</v-btn>
			</v-fab-transition>
		</v-row>
		<v-row justify="center">
			<v-dialog
				v-model="dialog"
				max-width="290"
			>
				<v-card>
					<v-card-title>
						Actions
					</v-card-title>
					<v-divider></v-divider>
					<v-card-text>
						<Activity
							v-for="activity in activities"
							:key="activity.type"
							:type="activity.type"
							:desc="activity.desc"
							:icon="activity.icon"
							:content="activity.content"
							:color="activity.color"
							:suffix="activity.suffix"
						/>
					</v-card-text>
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
  	activities (){
    	return this.$store.state.activities.activities;
		}
	},
	data: () => ({
			dialog: false
	})
}
</script>
<style>
	.add-button {
		position: absolute;
		bottom: 20px;
		right: 30px;
	}
</style>
