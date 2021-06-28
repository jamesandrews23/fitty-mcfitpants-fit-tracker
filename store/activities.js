export const state = () => ({
	activities: [
		{
			type: 'Bike Ride',
			desc: 'miles',
			icon: 'mdi-bike',
			content: 'BikeRideActivity',
			color: 'green',
			suffix: ' miles'
		},
		{
				type: 'Blood Sugar',
				desc: '',
				icon: 'mdi-water',
				content: 'BloodSugarActivity',
				color: 'red',
				suffix: ' mg/dL'
		},
		{
			type: 'Swimming',
			desc: '',
			icon: 'mdi-swim',
			content: 'SwimmingCard',
			color: 'blue lighten-2',
			suffix: ''
		}
	]
});

export const mutations = {
	updateActivitiesList(state, payload){
		state.activities = payload;
	}
};

export const getters = {
	getActivityByType: (state) => (type) => {
		return state.activities.filter(activity => activity.type === type);
	}
};
