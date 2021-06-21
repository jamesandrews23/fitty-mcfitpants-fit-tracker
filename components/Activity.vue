<template>
  <v-card
    class="mt-3 mb-3"
    max-width="344"
  >
		<v-list-item three-line>
			<v-list-item-content>
				<v-list-item-title class="text-h5 mb-1">
					{{type}}
				</v-list-item-title>
				<v-list-item-subtitle>{{desc}}</v-list-item-subtitle>
				<component :is="content"></component>
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
      >
        Add
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
    props: {
        type: String,
				desc: String,
				icon: String,
				content: String
		}
}
</script>
