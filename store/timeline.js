export const state = () => ({
	timeline: []
});

export const mutations = {
	add(state, activity){
		state.timeline.push(activity);
		localStorage.setItem(this.state.date, JSON.stringify(state.timeline));
	},

	remove(state, id){
		state.timeline = state.timeline.filter( (activity) => { return activity.id !== id });
		localStorage.setItem(this.state.date, JSON.stringify(state.timeline));
	},

	initialize(state, persistedState){
		state.timeline = persistedState;
	},

	reset(state, timelineForSelectedDate){
		state.timeline = timelineForSelectedDate;
	},

	loadDateTimeline(state, date){
		let dateForTimeline = localStorage.getItem(date);
		state.timeline = dateForTimeline ? JSON.parse(dateForTimeline) : [];
	}
};
