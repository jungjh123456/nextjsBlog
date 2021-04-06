import { combineReducers, createStore } from 'redux';

export default (preloadState, options) => {
	return createStore(combineReducers({}), preloadState);
};
