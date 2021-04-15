import { handleActions } from 'redux-actions';
import { SET_ANIMATE_TRUE, SET_ANIMATE_FALURE } from '../types';
const initialState = {
	isAnime: false,
};

const header = handleActions(
	{
		[SET_ANIMATE_TRUE]: (state, { payload }) => {
			return {
				...state,
				isAnime: true,
			};
		},
		[SET_ANIMATE_FALURE]: (state, { payload }) => {
			return {
				...state,
				isAnime: false,
			};
		},
	},
	initialState
);
export default header;
