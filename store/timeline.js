export const state = () => ({
	timeline: []
});

export const mutations = {
	add(state, activity){
		state.timeline.push(activity);
	}
};
