<template>
  <v-row justify="center">
    <v-col>
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
		</v-col>
    <v-col cols="6">
			<Timeline />
		</v-col>
    <v-col>
			<Overview />
    </v-col>
  </v-row>
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
	}
}
</script>
