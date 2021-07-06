<template>
  <v-card
    class="mt-3 mb-3"
  >
		<v-card-title>
			{{ type }}
			<v-spacer />
			<v-icon large :color="color">
				{{ icon }}
			</v-icon>
		</v-card-title>
		<v-card-text>
			<component :is="content" ref="dynamicComponent"></component>
		</v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="teal accent-4"
				@click="addActivity"
      >
        Add
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
	import { v4 as uuidv4 } from 'uuid';

export default {
    props: {
        type: String,
				desc: String,
				icon: String,
				content: String | Object,
				color: String,
				suffix: String
		},
		methods: {
        addActivity (e){
            this.$store.commit('timeline/add',
								{
								    id: uuidv4(),
								    type: this.$props.type,
										desc: this.$props.desc,
										icon: this.$props.icon,
										color: this.$props.color,
										content: this.$refs.dynamicComponent ? this.$refs.dynamicComponent.$data.val : '',
										timestamp: new Date().toLocaleString(),
										suffix: this.$props.suffix
								}
						);

            this.$store.commit('showAlert', true);
            this.$store.commit('changeAlertText', "You added " + this.$props.type + " to your timeline @ "
								+ new Date().toLocaleString().substr(10));
				}
		}
}
</script>
