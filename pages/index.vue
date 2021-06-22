<template>
  <v-row justify="center" align="center">
    <v-col>
			<Activity
				v-for="activity in activities"
				:key="activity.type"
				:type="activity.type"
				:desc="activity.desc"
				:icon="activity.icon"
				:content="activity.content"
			/>
		</v-col>
    <v-col cols="6">col 2</v-col>
    <v-col>
      <v-row>
        <v-col>
          sub col 1
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          sub col 2
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import Activity from '../components/Activity';
import BloodSugarActivity from "../components/BloodSugarActivity";

export default {
  components: {
      Activity,
			BloodSugarActivity
  },
  data: function(){
    return {
      activities: [
          {
              type: 'Bike Ride',
              desc: 'A bike ride through the woods',
							icon: 'mdi-bike'
          },
					{
					    type: 'Blood Sugar',
							desc: '',
							icon: 'mdi-water',
							content: 'BloodSugarActivity'
					}
      ]
    }
  }
}
</script>
