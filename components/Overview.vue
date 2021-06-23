<template>
	<div>
<!--		<v-toolbar-->
<!--			dark-->
<!--			color="blue lighten-1"-->
<!--			dense-->
<!--		>-->
<!--			<v-toolbar-items>-->
				<v-menu
					v-model="showCalendar"
					:close-on-content-click="false"
					:nudge-right="40"
					transition="scale-transition"
					offset-y
					min-width="auto"
					class="pt-3"
				>
					<template v-slot:activator="{ on, attrs }">
						<v-text-field
							v-model="date"
							label="Picker without buttons"
							prepend-icon="mdi-calendar"
							readonly
							v-bind="attrs"
							v-on="on"
							hide-details
							single-line
						></v-text-field>
					</template>
					<v-date-picker
						v-model="date"
						@input="showCalendar = false"
					></v-date-picker>
				</v-menu>
<!--			</v-toolbar-items>-->

<!--		</v-toolbar>-->
		<v-item-group multiple v-on:change="onChangeItem">
			<v-container>
				<v-row>
					<v-col
						v-for="(item, i) in items"
						:key="i"
						cols="12"
						md="4"
					>
						<v-item v-slot="{ active, toggle }" :value="item.type">
							<v-card
								:color="active ? 'yellow lighten-2' : ''"
								class="d-flex align-center"
								height="50"
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
	</div>

</template>
<script>
	export default {
	    name: "Overview",
			computed: {
	    	items (){
	    	    return this.$store.state.activities.activities;
				}
			},
			methods: {
	        onChangeItem (selectedTileArray){
					}
			},
			data: () => ({
          date: new Date().toISOString().substr(0, 10),
          showCalendar: false,
			})
	}
</script>
