export const state = () => ({
	timeline: []
});

export const mutations = {
	add(state, activity){
		state.timeline.push(activity);
	},

	remove(state, id){
		state.timeline = state.timeline.filter( (activity) => { return activity.id !== id });
	}
};
