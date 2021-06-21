<template>
  <v-row justify="center" align="center">
    <v-col>

			<Activity v-for="activity in activities" />
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

import Activity from '../components/Activity'

export default {
  components: {
      Activity
  },
  data: function(){
    return {
      activities: [
          {
              type: '',
              desc: ''
          },
          {
              type: '',
              desc: ''
          }
      ]
    }
  }
}
</script>
