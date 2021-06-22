<template>
	<v-timeline
		:dense="$vuetify.breakpoint.smAndDown"
	>
		<v-timeline-item
			v-for="(item, i) in items"
			:key="i"
			:color="item.color"
			:icon="item.icon"
			fill-dot
		>
			<span slot="opposite">Test</span>
			<v-card elevation="2">
				<v-card-title class="text-h6">
					{{ item.type }}
				</v-card-title>
				<v-card-text class="white text--primary">
					<p>{{ item.desc }}</p>
				</v-card-text>
			</v-card>
		</v-timeline-item>
	</v-timeline>
</template>
<script>
    export default {
        computed: {
        	items (){
        	    return this.$store.state.timeline.timeline;
					}
				}
    }
</script>
