export const state = () => ({
	displayDialog: false
});

export const mutations = {
	showDialog(state, show){
		state.displayDialog = show;
	}
};
