export const state = () => ({
	displayDialog: false,
	date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
	alert: false,
	alertText: "You made a change",
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
	showDialog(state, show){
		state.displayDialog = show;
	},

	changeDate(state, toDate){
		state.date = toDate;
	},

	showAlert(state, show){
		state.alert = show;
	},

	changeAlertText(state, text){
		state.alertText = text;
	}
};

export const actions = {
	// nuxtServerInit ({ commit }, { req }) {
		// console.log("store initialized");
		// let storedState = localStorage.getItem("6/24/2021");
		// if(storedState){
		// 	console.log("found stored items");
		// 	commit('timeline/initialize', JSON.parse(storedState));
		// } else {
		// 	console.log("no stored items");
		// }
	// }
};

export const getters = {
	getActivitiesByType: (state) => (type) => {
		let typeRegExp = new RegExp(type, 'i');
		let list = state.activities.filter(activity => activity.type.match(typeRegExp) !== null && activity.type.match(typeRegExp)[0].length > 0);
		if(list.length === 0){
			return state.activities;
		}
		return list;
	}
};
