export const state = () => ({
	displayDialog: false,
	date: new Date().toISOString().substr(0, 10)
});

export const mutations = {
	showDialog(state, show){
		state.displayDialog = show;
	},

	changeDate(state, toDate){
		state.date = toDate;
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
