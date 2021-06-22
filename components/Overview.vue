<template>
	<v-item-group multiple>
		<v-container>
			<v-row>
				<v-col
					v-for="(item, i) in items"
					:key="i"
					cols="12"
					md="4"
				>
					<v-item v-slot="{ active, toggle }">
						<v-card
							:color="active ? 'yellow lighten-2' : ''"
							class="d-flex align-center"
							height="60"
							@click="toggle"
						>
							<v-scroll-y-transition>
								<div
									v-if="active"
									class="text-h2 flex-grow-1 text-center"
								>
									<v-icon :color="item.color">
										{{ item.icon }}
									</v-icon>
								</div>
								<div
									v-else
									class="text-h2 flex-grow-1 text-center"
								>
									<v-icon :color="item.color">
										{{ item.icon }}
									</v-icon>
								</div>
							</v-scroll-y-transition>
						</v-card>
					</v-item>
				</v-col>
			</v-row>
		</v-container>
	</v-item-group>
</template>
<script>
	export default {
	    name: "Overview",
			computed: {
	    	items (){
	    	    return this.$store.state.activities.activities;
				}
			}
	}
</script>
