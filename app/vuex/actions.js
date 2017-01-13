export const setActive = function(store, page) {
	var dispatch = store.dispatch;
	dispatch('SET_ACTIVE', page);
}
