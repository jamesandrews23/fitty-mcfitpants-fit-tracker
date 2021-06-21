<template>
  <v-card
    class="mt-3 mb-3"
    max-width="344"
  >
		<v-list-item three-line>
			<v-list-item-content>
<!--				<div class="text-overline mb-4">-->
<!--					Bike Ride-->
<!--				</div>-->
				<v-list-item-title class="text-h5 mb-1">
					{{type}}
				</v-list-item-title>
				<v-list-item-subtitle>{{desc}}</v-list-item-subtitle>
			</v-list-item-content>

			<v-list-item-avatar
				size="80"
			>
				<v-icon large>
					{{icon}}
				</v-icon>
			</v-list-item-avatar>
		</v-list-item>
    <v-card-actions>
      <v-btn
        text
        color="teal accent-4"
        @click="reveal = true"
      >
        Learn More
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">
            Origin
          </p>
          <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="teal accent-4"
            @click="reveal = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
    props: {
        type: String,
				desc: String,
				icon: String
		}
}
</script>
<style>
  .v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
  }
</style>
