<template>
	<div>
		<v-timeline
			v-if="items.length > 0"
			:dense="$vuetify.breakpoint.smAndDown"
			reverse
		>
			<v-timeline-item
				v-for="(item, i) in items"
				:key="i"
				:color="item.color"
				:icon="item.icon"
				fill-dot
			>
				<span slot="opposite">{{ item.timestamp }}</span>
				<v-card elevation="2">
					<v-card-title class="text-h6">
						{{ item.type }}
					</v-card-title>
					<v-card-text class="white text--primary">
						<p>{{ item.content }} {{ item.suffix }}</p>
					</v-card-text>
				</v-card>
			</v-timeline-item>
		</v-timeline>
		<p v-else class="text-center">
			Start by Adding an Activity
		</p>
	</div>
</template>
<script>
    export default {
        computed: {
        	items (){
        	    let activities = this.$store.state.timeline.timeline.slice();
        	    return activities.reverse();
					}
				}
    }
</script>
