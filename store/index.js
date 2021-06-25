export const state = () => ({
	displayDialog: false,
	date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
	alert: false,
	alertText: "You made a change"
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
