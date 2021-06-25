<template>
	<div>
		<v-timeline
			v-if="items.length > 0"
			dense
			reverse
		>
			<v-timeline-item
				v-for="(item, i) in items"
				:key="i"
				:color="item.color"
				:icon="item.icon"
				fill-dot
			>
<!--				<span slot="opposite">{{ item.timestamp }}</span>-->
				<v-card elevation="2">
					<v-card-title class="text-h6">
						{{ item.type }}
					</v-card-title>
					<v-card-subtitle>
						{{ item.timestamp }}
					</v-card-subtitle>
					<v-card-text class="white text--primary">
						<p>{{ item.content }} {{ item.suffix }}</p>
					</v-card-text>
					<v-card-actions>
						<v-btn
							text
							color="red accent-4"
							@click="() => remove(item.id)"
						>
							Remove
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-timeline-item>
		</v-timeline>
		<p v-else class="text-center">
			<span v-if="date < (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)">
				No activities available for this date
			</span>
			<span v-else>
				Start by adding an activity
			</span>
		</p>
	</div>
</template>
<script>
    export default {
        computed: {
        	items (){
        	    let activities = this.$store.state.timeline.timeline.slice();
        	    return activities.reverse();
					},
						date: {
        	    get(){
        	        return this.$store.state.date;
							}
						}
				},
				methods: {
            remove (id){
                this.$store.commit("timeline/remove", id);
						}
				}
    }
</script>
