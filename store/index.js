export const state = () => ({
	activityAdjustment: 0
});

export const mutations = {
	adjustActivity(state, adjustedValue) {
		state.activityAdjustment = adjustedValue;
	}
};
